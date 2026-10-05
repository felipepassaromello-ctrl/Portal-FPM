# Rotina diária de análise (Claude Code)

A coleta das notícias roda sozinha no GitHub Actions, de hora em hora. Esta rotina adiciona a análise.
Uma sessão agendada do Claude Code lê as notícias coletadas, escreve a análise e o briefing do dia e
publica o resultado em `site/data/claude_analysis.json`. O workflow aplica esse arquivo e republica o site.

Você é essa sessão. Siga os passos na ordem.

## 1. Preparar

```bash
cd <raiz do repositório felipepassaromello-ctrl/Projeto-N1>
git fetch origin main && git checkout -B rotina-analise origin/main
pip install -q -r scripts/requirements.txt
mkdir -p /tmp/rotina
```

Se `site/data/digest.json` tiver mais de 3 horas, a coleta pode ter falhado. Siga em frente e mencione isso no
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

## 5. Publicar

```bash
git add site/data/claude_analysis.json
git commit -m "Análise do dia $(TZ=America/Sao_Paulo date +'%Y-%m-%d %H:%M')"
git pull --rebase origin main && git push origin HEAD:main
```

Se o push para `main` for recusado (por exemplo, porque a sessão só pode enviar para branches `claude/*`), publique
o arquivo pela ferramenta do GitHub. Use `mcp__github__create_or_update_file` no repositório
`felipepassaromello-ctrl/Projeto-N1`, branch `main`, caminho `site/data/claude_analysis.json`, com o conteúdo do
arquivo local e o `sha` atual do arquivo em `main` (obtenha com `mcp__github__get_file_contents`; se o arquivo
ainda não existir, omita o `sha`).

O push dispara o workflow **Atualizar portal**, que aplica a análise e republica o site em 2 a 4 minutos.
Não abra pull request.

## 6. Encerrar

Responda com um resumo curto: quantas notícias foram analisadas, a manchete do dia e qualquer problema
(fontes falhando, coleta atrasada, push recusado).
