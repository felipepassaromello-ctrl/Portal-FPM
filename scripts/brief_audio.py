"""Áudio do briefing: o briefing do dia narrado por uma voz neural, para ouvir no portal.

Monta um roteiro falado a partir do briefing de site/data/digest.json (abertura, manchete, clima, o essencial, as
seções, o radar e as conexões), sintetiza cada trecho com uma voz neural em português do Brasil e grava:

  site/audio/briefing.mp3   o áudio inteiro, trechos emendados
  site/audio/briefing.json  chave do briefing, voz, duração e onde começa cada trecho (para o portal destacar o
                            trecho em leitura e pular entre eles)

Voz: com o segredo ELEVENLABS_API_KEY no ambiente, a voz escolhida na ElevenLabs (ELEVEN_VOICE); sem ele, a Thalita
do edge-tts (as vozes do "Ler em voz alta" do Microsoft Edge), um pouco mais devagar.

Só refaz quando o briefing muda (a chave é um hash do texto). site/audio não vai para o repositório: o CI guarda a
última versão em cache.

Uso: python scripts/brief_audio.py [--voice ID] [--out site/audio] [--force]
"""
from __future__ import annotations

import argparse
import asyncio
import hashlib
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIGEST = ROOT / "site" / "data" / "digest.json"
EDGE_VOICE = "pt-BR-ThalitaMultilingualNeural"
RATE = "-8%"
# voz escolhida na biblioteca da ElevenLabs; o modelo multilíngue v2 é o mais natural em português
ELEVEN_VOICE = "RGymW84CSmfVugnA5tvA"
ELEVEN_MODEL = os.environ.get("ELEVENLABS_MODEL", "eleven_multilingual_v2")
ELEVEN_FORMAT = "mp3_44100_96"
# ritmo calmo, entonação estável de leitura de notícia
ELEVEN_SETTINGS = {"stability": 0.5, "similarity_boost": 0.75, "style": 0.15, "use_speaker_boost": True, "speed": 0.94}
# mp3 de taxa constante: a duração de cada trecho sai do tamanho em bytes
BITRATE = {"edge": 48_000, "eleven": 96_000}

CAT_NAMES = {
    "mna": "M&A e deals", "mercados": "mercados", "macro": "macro Brasil", "politica": "política",
    "internacional": "internacional", "empresas": "empresas", "tech": "tecnologia", "outros": "outros",
}
ORD = ["", "primeiro", "segundo", "terceiro", "quarto"]
ORDINAL = ["Primeiro", "Segundo", "Terceiro", "Quarto", "Quinto", "Sexto", "Sétimo", "Oitavo"]
WEEKDAYS = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado", "domingo"]
MONTHS = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]


def spoken(t: str) -> str:
    """Texto para a voz: siglas e abreviações que soariam mal viram palavras."""
    t = re.sub(r"<[^>]+>", "", t or "")
    t = re.sub(r"\b([1-4])T(\d{2})\b", lambda m: f"{ORD[int(m[1])]} trimestre de 20{m[2]}", t)
    t = re.sub(r"(\d[\d.,]*)\s?bi\b", r"\1 bilhões", t)
    t = re.sub(r"(\d[\d.,]*)\s?mi\b", r"\1 milhões", t)
    t = re.sub(r"(\d[\d.,]*)\s?tri\b", r"\1 trilhões", t)
    t = re.sub(r"US\$\s?([\d.,]+)( bilhões| milhões| trilhões)?", lambda m: f"{m[1]}{m[2] or ''} de dólares", t)
    t = re.sub(r"R\$\s?([\d.,]+) (bilhões|milhões|trilhões)", r"\1 \2 de reais", t)
    t = re.sub(r"(^|[\s(])[-−](\d)", r"\1menos \2", t)
    t = re.sub(r"\bM&A\b", "M and A", t)
    t = re.sub(r"\s+·\s+", ", ", t)
    t = re.sub(r"[“”\"«»]", "", t)
    t = re.sub(r"\s*\(([^)]*)\)", r", \1,", t)
    return re.sub(r"\s+", " ", t).strip()


def script(digest: dict) -> list[dict]:
    """Roteiro em trechos; cada um diz onde está na página (sel) para o portal destacar."""
    b = digest.get("brief") or {}
    try:
        d = datetime.fromisoformat(digest.get("generated_at", ""))
    except ValueError:
        d = datetime.now()
    day = f"{WEEKDAYS[d.weekday()]}, {d.day} de {MONTHS[d.month - 1]}"
    out = [{"sel": "", "label": "Abertura", "text": f"Bom dia. Este é o briefing do Portal FPM de {day}."}]
    if b.get("headline"):
        out.append({"sel": "headline", "label": "Manchete", "text": f"A manchete: {b['headline']}."})
    if b.get("mood"):
        out.append({"sel": "mood", "label": "Clima do dia", "text": f"O clima: {b['mood']}."})
    tl = b.get("tldr") or []
    for i, t in enumerate(tl):
        lead = ("O essencial do dia. " if i == 0 else "") + (f"{ORDINAL[i]}: " if i < len(ORDINAL) else "")
        out.append({"sel": f"tldr:{i}", "label": f"O essencial · {i + 1} de {len(tl)}", "text": lead + t})
    secs = b.get("sections") or []
    for k, s in enumerate(secs):
        name = (digest.get("categories") or {}).get(s.get("category"), CAT_NAMES.get(s.get("category"), s.get("category", "")))
        lead = "Agora, por área. " if k == 0 else ""
        out.append({"sel": f"sec:{s.get('category')}", "label": name, "text": f"{lead}Em {name.lower()}. {s.get('text', '')}"})
    if b.get("watchlist"):
        out.append({"sel": "watch", "label": "No radar", "text": "No radar para hoje: " + "; ".join(b["watchlist"]) + "."})
    if b.get("connections"):
        out.append({"sel": "conn", "label": "Conexões", "text": "E as conexões do dia. " + " ".join(b["connections"])})
    out.append({"sel": "", "label": "Fim", "text": "Esse foi o briefing de hoje. Bom trabalho."})
    for x in out:
        x["speech"] = spoken(x["text"])
    return out


def brief_key(digest: dict, voice: str) -> str:
    raw = json.dumps(digest.get("brief") or {}, ensure_ascii=False, sort_keys=True) + voice + RATE + ELEVEN_MODEL + json.dumps(ELEVEN_SETTINGS)
    return hashlib.sha1(raw.encode()).hexdigest()[:16]


def synth_eleven(text: str, voice: str, key: str, prev: str = "", nxt: str = "") -> bytes:
    """Um trecho pela API da ElevenLabs; o texto vizinho entra só como contexto, para a entonação emendar."""
    body = {"text": text, "model_id": ELEVEN_MODEL, "voice_settings": ELEVEN_SETTINGS}
    if prev:
        body["previous_text"] = prev
    if nxt:
        body["next_text"] = nxt
    req = urllib.request.Request(
        f"https://api.elevenlabs.io/v1/text-to-speech/{voice}?output_format={ELEVEN_FORMAT}",
        data=json.dumps(body).encode(), method="POST",
        headers={"xi-api-key": key, "Content-Type": "application/json", "Accept": "audio/mpeg"},
    )
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=120) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            msg = e.read().decode(errors="replace")[:300]
            # 4xx (chave, cota, voz) não melhora tentando de novo; 429 e 5xx sim
            if (e.code < 500 and e.code != 429) or attempt == 2:
                raise RuntimeError(f"ElevenLabs {e.code}: {msg}") from None
            print(f"  nova tentativa (ElevenLabs {e.code})", file=sys.stderr)
        except (urllib.error.URLError, TimeoutError) as e:
            if attempt == 2:
                raise
            print(f"  nova tentativa ({e})", file=sys.stderr)
        time.sleep(3 + attempt * 5)
    return b""


async def synth(text: str, voice: str) -> bytes:
    import edge_tts  # só aqui: o resto do script funciona sem a biblioteca

    chunks = []
    for attempt in range(3):
        try:
            async for m in edge_tts.Communicate(text, voice, rate=RATE).stream():
                if m["type"] == "audio":
                    chunks.append(m["data"])
            return b"".join(chunks)
        except Exception as e:  # o serviço às vezes recusa uma conexão: tenta de novo
            chunks = []
            if attempt == 2:
                raise
            print(f"  nova tentativa ({e})", file=sys.stderr)
            await asyncio.sleep(2 + attempt * 3)
    return b""


async def build(out: Path, voice: str | None, force: bool) -> int:
    api_key = os.environ.get("ELEVENLABS_API_KEY", "").strip()
    engine = "eleven" if api_key else "edge"
    voice = voice or (ELEVEN_VOICE if engine == "eleven" else EDGE_VOICE)
    digest = json.loads(DIGEST.read_text(encoding="utf-8"))
    if not (digest.get("brief") or {}).get("headline"):
        print("Áudio: sem briefing no digest; nada a fazer.")
        return 0
    key = brief_key(digest, voice)
    meta_path = out / "briefing.json"
    if not force and meta_path.exists():
        try:
            if json.loads(meta_path.read_text(encoding="utf-8")).get("key") == key and (out / "briefing.mp3").exists():
                print("Áudio: briefing igual ao da última vez; áudio mantido.")
                return 0
        except ValueError:
            pass
    segs = script(digest)
    audio, t = bytearray(), 0.0
    for i, s in enumerate(segs):
        if engine == "eleven":
            prev = segs[i - 1]["speech"] if i else ""
            nxt = segs[i + 1]["speech"] if i + 1 < len(segs) else ""
            data = await asyncio.to_thread(synth_eleven, s["speech"], voice, api_key, prev, nxt)
        else:
            data = await synth(s["speech"], voice)
        dur = len(data) * 8 / BITRATE[engine]
        s["start"], s["end"] = round(t, 2), round(t + dur, 2)
        t += dur
        audio += data
    out.mkdir(parents=True, exist_ok=True)
    (out / "briefing.mp3").write_bytes(bytes(audio))
    meta = {
        "key": key, "engine": engine, "voice": voice, "headline": digest["brief"]["headline"], "generated_at": datetime.now().astimezone().isoformat(timespec="seconds"),
        "duration": round(t, 1), "file": "briefing.mp3",
        "segments": [{k: s[k] for k in ("sel", "label", "start", "end")} for s in segs],
    }
    meta_path.write_text(json.dumps(meta, ensure_ascii=False), encoding="utf-8")
    chars = sum(len(s["speech"]) for s in segs)
    print(f"Áudio: {len(segs)} trechos, {chars} caracteres, {t / 60:.1f} min, {len(audio) / 1e6:.1f} MB, {engine} {voice}.")
    return 0


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("--voice", default=None, help="id da voz; o padrão depende de haver chave da ElevenLabs")
    ap.add_argument("--out", default=str(ROOT / "site" / "audio"))
    ap.add_argument("--force", action="store_true")
    a = ap.parse_args()
    return asyncio.run(build(Path(a.out), a.voice, a.force))


if __name__ == "__main__":
    sys.exit(main())
