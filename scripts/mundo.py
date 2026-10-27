"""Mundo das companhias: o grafo de quem é dono de quem.

Junta, a partir dos perfis montados pelo scripts/perfis.py, as companhias abertas, os acionistas delas (pessoas,
holdings, fundos, governo), as cadeias de controle (quem está por trás de cada acionista), as controladas que ligam
dois grupos e as pessoas que sentam em mais de um conselho ou diretoria. Grava site/data/cias/mundo.json, que a
página mundo.html desenha. As posições no mapa vêm do scripts/mundo_layout.mjs, que roda logo depois.

Uso:
  python scripts/mundo.py
"""
from __future__ import annotations

import re
import sys
from collections import defaultdict
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from cias import OUT, load_json, log, save_json  # noqa: E402
from perfis import HOLDER_SKIP, fold, now_brt, person_slug  # noqa: E402

# setores da CVM agrupados em famílias que dão para distinguir pela cor
MACRO = [
    ("fin", "Bancos e serviços financeiros", ("banco", "intermediacao financeira", "seguradora", "arrendamento", "credito imobiliario",
                                              "securitizacao", "bolsas de valores", "previdencia")),
    ("util", "Energia elétrica e saneamento", ("energia eletrica", "saneamento")),
    ("oil", "Petróleo, gás e química", ("petroleo", "petroquim", "quimic")),
    ("base", "Mineração, siderurgia e papel", ("extracao mineral", "metalurgia", "siderurgia", "papel e celulose", "reflorestamento", "embalagens")),
    ("agro", "Agro, alimentos e bebidas", ("agricultura", "alimentos", "bebidas")),
    ("cons", "Varejo e consumo", ("comercio", "textil", "brinquedos", "hospedagem", "farmaceutico", "higiene")),
    ("imob", "Construção e imóveis", ("construcao civil", "const. civil", "const civil", "exploracao de imoveis")),
    ("ind", "Indústria e bens de capital", ("maquinas", "maqs", "equipamentos", "veiculos")),
    ("log", "Transporte e logística", ("transporte",)),
    ("tech", "Telecom, mídia e tecnologia", ("telecomunica", "comunicacao e informatica")),
    ("saude", "Saúde e educação", ("servicos medicos", "educacao")),
]
OTHER = ("out", "Holdings e outros")

# quem não é companhia aberta
GOV = re.compile(r"^(uni[aã]o|rep[uú]blica|estado d[aeo]|munic[ií]pio|prefeitura|governo|bndes|bndespar|banco nacional de desenvolvimento|"
                 r"secretaria|fazenda|tesouro|caixa econ[oô]mica)\b|\bgoverno\b|\bminist[eé]rio\b", re.I)
PENSION = re.compile(r"\b(funda[cç][aã]o|previd[eê]ncia|previ|petros|funcef|valia|sistel|postalis|fapes|forluz|real grandeza|"
                     r"fundo de pens[aã]o|pension|retirement)\b", re.I)
FUND = re.compile(r"\b(fundo|fundos|fia|fip|fim|fii|fic|investimentos?|invest|asset|capital|partners|management|gest[aã]o|gestora|"
                  r"blackrock|vanguard|fidelity|norges|gic|temasek|jpmorgan|morgan stanley|goldman|ubs|credit suisse|state street|"
                  r"dynamo|verde|squadra|spx|kapitalo|absolute|equity|ventures|private|trust|holdings? llc|l\.?p\.?)\b", re.I)


def macro_of(sector: str) -> str:
    s = fold(re.sub(r"^Emp\. Adm\. Part\. - ", "", sector or ""))
    for code, _, keys in MACRO:
        if any(k in s for k in keys):
            return code
    return OTHER[0]


def entity_class(name: str) -> str:
    if GOV.search(name):
        return "gov"
    if PENSION.search(name):
        return "pen"
    if FUND.search(name):
        return "fund"
    return "hold"


# alguns formulários chegam à CVM com acentos trocados por "?" (Participa??es, Neg?cios); conserta as palavras comuns
FIX = [(r"Participa\?\?es", "Participações"), (r"Neg\?cios", "Negócios"), (r"\bA\?\?es\b", "Ações"), (r"Com\?rcio", "Comércio"),
       (r"Ind\?stria", "Indústria"), (r"Administra\?\?o", "Administração"), (r"Servi\?os", "Serviços"), (r"Constru\?\?o", "Construção"),
       (r"Gest\?o", "Gestão"), (r"\bS\?o\b", "São"), (r"\bJo\?o\b", "João"), (r"\bJos\?\b", "José"), (r"Funda\?\?o", "Fundação"),
       (r"Previd\?ncia", "Previdência"), (r"Empreendimentos? Imobili\?rios", "Empreendimentos Imobiliários"), (r"Holding\?", "Holding"),
       (r"Investimen\?os", "Investimentos"), (r"Patrim\?nio", "Patrimônio"), (r"Cr\?dito", "Crédito"), (r"Ag\?ncia", "Agência")]


def fix_name(s: str) -> str:
    if "?" not in (s or ""):
        return s
    for pat, rep in FIX:
        s = re.sub(pat, rep, s, flags=re.I)
    return s


def canonical_gov(name: str) -> str:
    """O Tesouro aparece com vários nomes nos formulários; é tudo a União."""
    f = fold(name)
    if re.search(r"^uni[aã]o\b|tesouro nacional|^republica federativa|ministerio da (economia|fazenda)", f):
        return "União Federal"
    if re.search(r"banco nacional d[eo] desenvolvimento|^bndes\b(?!par)", f) and "bndespar" not in f and "participacoes" not in f:
        return "BNDES"
    m = re.match(r"^(estado d[aeo] [a-z ]+?)(\s*[-(/].*)?$", f)
    if m and GOV.search(name):
        return re.sub(r"\s*[-(/].*$", "", name).strip()
    return name


def clean_manager(name: str) -> str:
    n = re.sub(r"\s*\(.*?\)\s*", " ", name)
    n = re.sub(r"^(fundos?|carteiras?|clubes?)( de investimentos?)?( e carteiras?)? (administrad[oa]s|gerid[oa]s|geridos e administrados) pel[ao]s? ", "", n, flags=re.I)
    return re.sub(r"\s+", " ", n).strip(" -,") or name


def digits(s: str) -> str:
    return re.sub(r"\D", "", s or "")


ROLE = {"pres": "P", "ceo": "E", "c": "C", "d": "D"}


def role_code(a: dict) -> str | None:
    t = fold(f"{a.get('c', '')} {a.get('f', '')}")
    if a.get("o") == "F":
        return None
    if "presidente do conselho" in t or "presidente do c.a" in t:
        return "P"
    if re.search(r"diretor presidente|\bceo\b|presidente / superintendente", t):
        return "E"
    return "C" if a.get("o") in ("C", "DC") else "D"


def build() -> dict | None:
    idx = load_json(OUT / "index.json", None)
    if not idx:
        log("Mundo: sem data/cias/index.json.")
        return None
    resumo = load_json(OUT / "resumo.json", {}).get("cias", {})
    comp = {c["k"]: c for c in idx["companies"]}
    by_cnpj = {digits(c.get("cnpj")): c["k"] for c in idx["companies"] if c.get("cnpj")}
    by_legal = {fold(c.get("n", "")): c["k"] for c in idx["companies"] if c.get("n")}
    # nome de mercado (o que aparece no resumo) também identifica a companhia quando o acionista vem sem CNPJ;
    # só nomes com 6 letras ou mais, para não confundir siglas curtas
    by_short = {}
    for k, r in resumo.items():
        for nm in (r.get("nm"), comp.get(k, {}).get("nc")):
            if nm and len(fold(nm)) >= 6:
                by_short.setdefault(fold(nm), k)
    perfis = {}
    for f in sorted((OUT / "perfil").glob("*.json")):
        perfis[f.stem] = load_json(f, {})
    if not perfis:
        log("Mundo: sem perfis.")
        return None

    nodes: dict[str, dict] = {}
    own: dict[tuple, dict] = {}  # (dono, possuída) -> aresta
    board: dict[tuple, str] = {}

    def company(k: str) -> str:
        nid = f"c{k}"
        if nid not in nodes:
            c, r, p = comp.get(k, {}), resumo.get(k, {}), perfis.get(k, {})
            nodes[nid] = {"id": nid, "t": "c", "n": fix_name(r.get("nm") or p.get("nm") or c.get("nc") or c.get("n") or k), "k": k,
                          "cls": macro_of(c.get("st") or p.get("setor") or ""), "mc": r.get("mc"), "tk": r.get("tk"),
                          "st": c.get("st") or "", "uf": c.get("uf") or "", "listed": bool(c.get("tk")), "cnpj": digits(c.get("cnpj"))}
        return nid

    def entity(name: str, pf: bool, doc: str = "", pais: str = "") -> str | None:
        name = fix_name(canonical_gov((name or "").strip()) if not pf else (name or "").strip())
        if not name or HOLDER_SKIP.match(name):
            return None
        if not pf:
            k = by_cnpj.get(digits(doc))
            # pelo nome, só companhias com perfil: o cadastro da CVM tem emissores estrangeiros (BDRs) com o mesmo
            # nome de gestoras que são acionistas, e eles não devem virar "companhia" no mapa
            if not k:
                k2 = by_legal.get(fold(name)) or by_short.get(fold(name))
                k = k2 if k2 in perfis else None
            if not k and "bndespar" in fold(name):
                k = by_short.get("bndespar")
            if k:
                return company(k)
        cls = "pf" if pf else entity_class(name)
        if cls in ("fund", "pen"):
            name = clean_manager(name)  # "Fundos administrados pela BlackRock, Inc. (Gestor...)" -> "BlackRock, Inc."
        slug = person_slug(name, not pf)
        if not slug:
            return None
        # empresa com CNPJ é identificada por ele: duas holdings de grupos diferentes podem ter o mesmo nome. Gestoras e
        # governo, ao contrário, aparecem com vários CNPJs (cada fundo, cada veículo) e são uma entidade só no mapa.
        d = digits(doc) if not pf else ""
        nid = f"j{d}" if len(d) == 14 and cls in ("hold",) else ("p" if pf else "j") + slug
        if nid not in nodes:
            nodes[nid] = {"id": nid, "t": "p" if pf else "j", "n": name, "slug": slug,
                          "cls": cls, **({"pais": pais} if pais else {})}
        elif pais and not nodes[nid].get("pais"):
            nodes[nid]["pais"] = pais
        return nid

    def link(src: str, dst: str, pct, ctl: bool, ac: bool = False, via: str = "o") -> None:
        if not src or not dst or src == dst:
            return
        e = own.get((src, dst))
        p = float(pct) if isinstance(pct, (int, float)) else None
        if not e:
            own[(src, dst)] = {"p": p, "ctl": ctl, "ac": ac, "via": via}
            return
        if p is not None and (e["p"] is None or p > e["p"]):
            e["p"] = p
        e["ctl"] |= ctl
        e["ac"] |= ac

    for k, p in perfis.items():
        me = company(k)

        def walk(holders: list[dict], target: str) -> None:
            for s in holders:
                pf = s.get("t") == "PF"
                nid = entity(s.get("n", ""), pf, s.get("doc", ""), s.get("pais", ""))
                if not nid:
                    continue
                link(nid, target, s.get("tot") if s.get("tot") is not None else s.get("on"), bool(s.get("ctl")), bool(s.get("ac")))
                if s.get("de"):
                    walk(s["de"], nid)
        walk(p.get("acionistas", []), me)

        for x in p.get("participacoes", []):
            k2 = by_cnpj.get(digits(x.get("cnpj"))) or (x.get("k") if x.get("k") in comp else None)
            if k2:
                link(me, company(k2), x.get("pct"), (x.get("pct") or 0) > 50, via="s")
        for a in p.get("adm", []):
            rc = role_code(a)
            if rc:
                slug = person_slug(a["n"])
                key = (slug, k)
                if key not in board or "PECD".index(rc) < "PECD".index(board[key]):
                    board[key] = rc
                board.setdefault(("_name", slug), a["n"])

    # a mesma holding às vezes vem duas vezes no FRE, uma com CNPJ e outra sem: fica só a que tem CNPJ
    with_doc = defaultdict(set)
    for (a, b), e in own.items():
        if nodes[a]["t"] == "j" and a[1:].isdigit():
            with_doc[(nodes[a]["slug"], b)].add(round(e["p"] or 0, 1))
    dropped = set()
    for (a, b), e in list(own.items()):
        n = nodes[a]
        if n["t"] == "j" and n["cls"] == "hold" and not a[1:].isdigit() and round(e["p"] or 0, 1) in with_doc.get((n["slug"], b), ()):
            del own[(a, b)]
            dropped.add(a)
    used = {x for ab in own for x in ab}
    for nid in dropped - used:
        del nodes[nid]

    # controladas que não são companhias abertas, mas pertencem a dois ou mais grupos (joint ventures, consórcios)
    subs: dict[str, list] = defaultdict(list)
    sub_name: dict[str, str] = {}
    for k, p in perfis.items():
        for x in p.get("participacoes", []):
            d = digits(x.get("cnpj"))
            if not d or d in by_cnpj:
                continue
            subs[d].append((k, x.get("pct")))
            sub_name.setdefault(d, x.get("n", ""))
    for d, parents in subs.items():
        if len({k for k, _ in parents}) < 2:
            continue
        nid = f"s{d}"
        nodes[nid] = {"id": nid, "t": "s", "n": fix_name(sub_name[d]), "cls": "sub", "cnpj": d}
        for k, pct in parents:
            link(company(k), nid, pct, (pct or 0) > 50, via="s")

    # pessoas que ligam companhias: cargo em duas ou mais (conselho fiscal fora)
    per_person: dict[str, list] = defaultdict(list)
    for key, rc in board.items():
        if key[0] != "_name":
            per_person[key[0]].append((key[1], rc))
    blinks = []
    for slug, lst in per_person.items():
        if len(lst) < 2:
            continue
        nid = "p" + slug
        if nid not in nodes:
            nodes[nid] = {"id": nid, "t": "p", "n": board[("_name", slug)], "slug": slug, "cls": "pf"}
        nodes[nid]["board"] = True
        for k, rc in lst:
            blinks.append((nid, company(k), rc))

    # o mundo inclui todos os acionistas; só ficam de fora companhias sem ligação nenhuma e sem valor de mercado
    deg = defaultdict(int)
    for (a, b) in own:
        deg[a] += 1
        deg[b] += 1
    for a, b, _ in blinks:
        deg[a] += 1
        deg[b] += 1
    keep = [n for n in nodes.values() if deg[n["id"]] or (n["t"] == "c" and n.get("mc"))]

    # valor estimado das participações diretas: soma de % × valor de mercado das companhias que a entidade tem
    mc = {n["id"]: n.get("mc") or 0 for n in keep}
    held_value = defaultdict(float)
    for (a, b), e in own.items():
        if e["p"] and mc.get(b):
            held_value[a] += e["p"] / 100 * mc[b]

    # grupos econômicos: cada companhia sobe pela cadeia do seu principal controlador (o de maior participação entre
    # os que têm o controle) até o topo que não é pessoa física; o grupo é tudo o que chega ao mesmo topo. Seguir só o
    # principal controlador evita que um acordo de acionistas numa única companhia junte dois grupos inteiros.
    nmap = {n["id"]: n for n in keep}
    ctl_owners = defaultdict(list)
    for (a, b), e in own.items():
        if e["ctl"] and a in nmap and b in nmap:
            ctl_owners[b].append((a, e["p"] or 0))
    kind_rank = {"c": 0, "j": 1, "s": 2, "p": 3}

    def main_parent(x: str) -> str | None:
        lst = ctl_owners.get(x)
        return max(lst, key=lambda t: (t[1], -kind_rank[nmap[t[0]]["t"]]))[0] if lst else None

    def head_of(x: str) -> tuple[str, list[str]]:
        chain, seen = [x], {x}
        while True:
            p = main_parent(chain[-1])
            if not p or p in seen or nmap[p]["t"] == "p":
                return chain[-1], chain
            seen.add(p)
            chain.append(p)

    def ultimate(x: str) -> list[str]:
        """Quem controla o topo: sobe por todos os controladores até quem não tem controlador."""
        out, stack, seen = [], [x], {x}
        while stack:
            y = stack.pop()
            ups = ctl_owners.get(y, [])
            if not ups and y != x:
                out.append(y)
            for o, _ in sorted(ups, key=lambda t: -t[1]):
                if o not in seen:
                    seen.add(o)
                    stack.append(o)
        return out

    by_head: dict[str, dict] = {}
    for n in keep:
        if n["t"] != "c":
            continue
        h, chain = head_of(n["id"])
        g = by_head.setdefault(h, {"cos": set(), "chain": set(), "top": set()})
        g["cos"].add(n["id"])
        g["chain"].update(chain)
        if not any(nmap[x]["t"] == "c" for x in chain[1:]):
            g["top"].add(n["id"])  # nenhuma companhia aberta acima dela no grupo
    groups = []
    for h, g in by_head.items():
        cos = sorted(g["cos"], key=lambda m: -(mc.get(m) or 0))
        if len(cos) < 2 and nmap[h]["t"] == "c":
            continue
        roots = ultimate(h)
        roots.sort(key=lambda m: (nmap[m]["t"] != "p", -held_value.get(m, 0)))
        hn = nmap[h]
        # o nome que o mercado usa: a companhia aberta do topo (Cosan, e não a Rumo que ela controla; Bradesco, e não
        # Fundação Bradesco); se houver mais de uma no topo, a maior. Governo fica com o próprio nome.
        tops = sorted(g["top"], key=lambda m: -(mc.get(m) or 0)) or cos
        if not mc.get(tops[0]) and mc.get(cos[0]):
            tops = cos  # holding de capital fechado no topo: o nome do grupo é o da maior companhia listada
        name = hn["n"] if hn.get("cls") == "gov" else nmap[tops[0]]["n"]
        members = set(g["chain"]) | set(roots) | {h}
        groups.append({"n": name, "head": h, "roots": roots[:5], "m": members, "nc": len(cos), "mc": sum(mc.get(m) or 0 for m in cos)})
    groups.sort(key=lambda g: (-g["mc"], -g["nc"]))
    gid = {}
    for i, g in enumerate(groups):
        for m in g["m"]:
            gid.setdefault(m, i)

    order = sorted(keep, key=lambda n: (n["t"] != "c", -(mc.get(n["id"]) or held_value.get(n["id"], 0))))
    pos = {n["id"]: i for i, n in enumerate(order)}
    out_nodes = []
    for n in order:
        v = held_value.get(n["id"])
        out_nodes.append({k: val for k, val in {
            "id": n["id"], "n": n["n"], "t": n["t"], "c": n["cls"], "k": n.get("k"), "s": n.get("slug"), "tk": n.get("tk"),
            "mc": round(n["mc"]) if n.get("mc") else None, "v": round(v) if v and n["t"] != "c" else None,
            "st": n.get("st") or None, "uf": n.get("uf") or None, "pais": n.get("pais"), "cnpj": n.get("cnpj"),
            "l": 1 if n.get("listed") else None, "b": 1 if n.get("board") else None, "g": gid.get(n["id"]),
        }.items() if val not in (None, "", False)})
    edges = []
    for (a, b), e in own.items():
        if a in pos and b in pos:
            edges.append([pos[a], pos[b], round(e["p"], 2) if e["p"] is not None else -1,
                          (1 if e["ctl"] else 0) | (2 if e["ac"] else 0) | (4 if e["via"] == "s" else 0)])
    brd = [[pos[a], pos[b], rc] for a, b, rc in blinks if a in pos and b in pos]
    out_groups = [{"n": g["n"], "h": pos[g["head"]], "r": [pos[r] for r in g["roots"]], "nc": g["nc"], "mc": round(g["mc"]) or None,
                   "m": sorted(pos[m] for m in g["m"])} for g in groups]
    stats = {"cias": sum(1 for n in out_nodes if n["t"] == "c"), "listadas": sum(1 for n in out_nodes if n.get("l")),
             "acionistas": sum(1 for n in out_nodes if n["t"] in ("j", "p") and not n.get("b")),
             "pessoas_conselho": sum(1 for n in out_nodes if n.get("b")), "controladas_compartilhadas": sum(1 for n in out_nodes if n["t"] == "s"),
             "ligacoes": len(edges), "conselhos": len(brd), "grupos": sum(1 for g in groups if g["nc"] >= 2)}
    return {"generated_at": now_brt().isoformat(timespec="minutes"), "stats": stats,
            "setores": {c: label for c, label, _ in MACRO} | {OTHER[0]: OTHER[1]},
            "nodes": out_nodes, "edges": edges, "board": brd, "groups": out_groups}


def main() -> None:
    world = build()
    if not world:
        return
    prev = load_json(OUT / "mundo.json", {})
    # guarda as posições anteriores para o layout partir delas (o mapa não muda de lugar a cada hora)
    if prev.get("pos") and prev.get("nodes"):
        old = {n["id"]: prev["pos"][2 * i: 2 * i + 2] for i, n in enumerate(prev["nodes"]) if 2 * i + 1 < len(prev["pos"])}
        save_json(OUT / "base" / "mundo_pos.json", {"sig": prev.get("sig"), "v": prev.get("layout"), "ring": prev.get("ring"), "pos": old}, compact=True)
    save_json(OUT / "mundo.json", world, compact=True)
    s = world["stats"]
    log(f"Mundo: {s['cias']} companhias, {s['acionistas']} acionistas, {s['pessoas_conselho']} pessoas em mais de um conselho, "
        f"{s['ligacoes']} participações, {s['conselhos']} cargos, {s['grupos']} grupos econômicos.")


if __name__ == "__main__":
    main()
