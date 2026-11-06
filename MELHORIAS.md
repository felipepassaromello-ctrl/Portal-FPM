# Melhorias do portal

O portal não pode ficar parado. Todo dia às 21h17 (Brasília), uma rotina do Claude Code:

1. Confere a saúde do portal:
   - as execuções dos workflows "Atualizar portal" e "Enviar edição por e-mail";
   - o site no ar, no computador e no iPhone (erros de console, requisições com falha, página que escapa da tela);
   - os dados do dia (análises, leads, deals e resumos da CVM).
2. Escolhe de 1 a 3 itens de maior valor e menor risco. Primeiro o que está quebrado, depois o topo da fila abaixo, depois ideias novas.
3. Implementa e testa cada item, publica por PR na main e acompanha a publicação até terminar com sucesso. Se algo quebrar, conserta ou reverte na hora.
4. Atualiza este arquivo (fila e histórico) e manda um resumo ao Felipe.

**Regras:**
- Nada é publicado entre 07h30 e 09h30, por causa da rotina da manhã e do e-mail das 08h52.
- O envio do e-mail (horário, destinatários e regras) não muda sem pedido do Felipe.
- Nenhum dado licenciado vai para o site público.
- Nenhum CPF, e-mail ou segredo vai para o repositório.
- Mudança grande (redesenho de uma página inteira, tirar uma funcionalidade) é proposta antes, não aplicada direto.

## Saúde

**06/11, madrugada:**
- Site no ar sem erro de console, sem requisição com falha e sem nada escapando da tela. Foram conferidas 8 páginas (briefing, leads, deals, agenda, oficiais, companhias, perfil e Mundo), no computador e no iPhone.
- 27 de 27 fontes de notícia funcionando.

## Fila (da maior para a menor prioridade)

1. **CVM: documentos com texto ilegível ficam sem resumo.** Foram 7 de 66 em 05/11. Há dois casos:
   - PDF com fonte sem mapa de caracteres: o pypdf devolve só códigos, como "/12 /3 /15";
   - apresentação feita só com imagens.

   Proposta: tentar outra extração (PyMuPDF) e, se ainda vier ilegível, OCR em português (tesseract) nas primeiras páginas.
2. **Notícia repetida em vários cartões.** Em 05/11, a aprovação da fusão Saipem-Subsea7 apareceu em 11 itens: veículos e idiomas diferentes, mesmo fato. Proposta: juntar no mesmo cartão as notícias sobre o mesmo evento (mesmas empresas e mesmo fato no mesmo dia), mesmo com títulos e idiomas diferentes.
3. **"M&A da semana" e aba Deals: separar Brasil e exterior.** Os 102 "deals novos" da semana são em boa parte comunicados de empresas estrangeiras pequenas. Proposta: Brasil primeiro, com contagem própria, e exterior só os relevantes.
4. **Análise da rotina da manhã.** Os itens de pouca relevância saem com texto genérico. Proposta: lotes menores e o trecho completo da notícia para quem analisa; os itens de nota 1 a 3 podem ter análise curta de propósito.
5. **Coleta da manhã atrasada pelo agendador do GitHub.** Em 05/11 as coletas de 05h40 e 08h01 não rodaram, e a rotina disparou a coleta à mão às 08h17. Monitorar e, se repetir, criar uma reserva que não dependa do agendador.
6. **Mundo das companhias no celular de verdade.** Os testes rodam em navegador sem placa de vídeo. Falta saber como fica a fluidez num iPhone real; pedir ao Felipe ou medir pelo próprio site.

## Feito

- 06/11 — E-mail com o visual atual do portal (#59).
- 06/11 — Skills de design do Emil Kowalski atualizadas, mais choreograph e remove-animations (#58).
- 04/11 — Mundo das companhias: mapa de blocos por setor, estrutura vista de cima, legenda clicável (#56, #57).
