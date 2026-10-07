# Rotina diária de análise (Claude Code)

A coleta das notícias roda sozinha no GitHub Actions, de hora em hora. Esta rotina adiciona a análise.
Uma sessão agendada do Claude Code lê as notícias coletadas, escreve a análise e o briefing do dia e
publica o resultado em `site/data/claude_analysis.json`. O workflow aplica esse arquivo e republica o site.

Você é essa sessão. Siga os passos na ordem.

## 1. Preparar

```bash
cd <raiz do repositório felipepassaromello-ctrl/Portal-FPM>
git fetch origin main && git checkout -B rotina-analise origin/main
pip install -q -r scripts/requirements.txt
mkdir -p /tmp/rotina
```

Cada edição cobre as notícias das 08h do dia anterior às 08h do dia (horário de Brasília). Se o
`routine.py queue` disser que a edição de hoje ainda não foi gerada, a coleta das 08:07 ainda não rodou: espere
2 minutos, rode `git pull --rebase origin main` e tente de novo (até ~30 minutos). Se não aparecer, mencione isso no
resumo final.

## 2. Analisar as notícias

```bash
python scripts/routine.py queue --limit 60 > /tmp/rotina/fila.txt
```

Leia `/tmp/rotina/fila.txt` inteiro. Ele traz o papel (perfil do leitor), as instruções de cada campo e as
notícias pendentes, ordenadas por relevância. Escreva a análise de **todas** elas em `/tmp/rotina/analises.json`, no
formato `{"items": [...]}` descrito no arquivo. Siga as regras do papel: português, específico, sem inventar fatos,
valores ou nomes que não estejam no título, no trecho ou nos outros títulos.

Se a fila for grande, escreva em partes (por exemplo `analises1.json`, `analises2.json`) e grave cada uma no passo 3.

## 3. Gravar e validar

```bash
python scripts/routine.py merge-analyses /tmp/rotina/analises.json
```

Se aparecerem erros de validação, corrija só os itens apontados e rode de novo. Os itens válidos já ficam gravados.

## 4. Escrever o briefing do dia

```bash
python scripts/routine.py brief-input > /tmp/rotina/brief_input.txt
```

Leia o arquivo e escreva o briefing em `/tmp/rotina/brief.json`. Depois rode:

```bash
python scripts/routine.py merge-brief /tmp/rotina/brief.json
```

## 5. Resumir os documentos da CVM

O workflow baixa o texto dos fatos relevantes, comunicados e avisos das companhias abertas e deixa em
`site/data/cvm_fila.json`. Resuma todos:

```bash
python scripts/routine.py cvm-queue > /tmp/rotina/cvm.txt
```

Leia o arquivo, escreva `/tmp/rotina/cvm.json` no formato indicado e rode:

```bash
python scripts/routine.py merge-cvm /tmp/rotina/cvm.json
```

A fila traz primeiro os documentos novos e depois o histórico (`site/data/cvm_fila_hist.json.gz`, abastecido toda
madrugada pelo workflow **CVM - histórico para resumir**). Resuma todos os novos e pelo menos 200 do histórico por
dia: repita `cvm-queue`, novo arquivo, `merge-cvm`. Se tiver fôlego, resuma mais do histórico.

## 6. Publicar

```bash
git add site/data/claude_analysis.json site/data/cvm_resumos.json.gz site/data/cvm_fila.json site/data/cvm_fila_hist.json.gz
git commit -m "Análise do dia $(TZ=America/Sao_Paulo date +'%Y-%m-%d %H:%M')"
git pull --rebase origin main && git push origin HEAD:main
```

Se o push para `main` for recusado (por exemplo, porque a sessão só pode enviar para branches `claude/*`), publique
o arquivo pela ferramenta do GitHub. Use `mcp__github__create_or_update_file` no repositório
`felipepassaromello-ctrl/Portal-FPM`, branch `main`, caminho `site/data/claude_analysis.json`, com o conteúdo do
arquivo local e o `sha` atual do arquivo em `main` (obtenha com `mcp__github__get_file_contents`; se o arquivo
ainda não existir, omita o `sha`).

O push dispara o workflow **Atualizar portal**, que aplica a análise e republica o site em 2 a 4 minutos.
Não abra pull request.

## 7. Encerrar

Responda com um resumo curto: quantas notícias foram analisadas, quantos documentos da CVM foram resumidos, a manchete do dia e qualquer problema
(fontes falhando, coleta atrasada, push recusado).
