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

**06/11, noite:**
- Site no ar sem erro de console, sem requisição com falha e sem nada escapando da tela. Foram conferidas 8 páginas (briefing, leads, deals, agenda, oficiais, companhias, perfil e Mundo), no computador e no iPhone.
- 27 de 27 fontes de notícia e 3 de 3 fontes oficiais (CVM, Diário Oficial e Banco Central) funcionando.
- O e-mail de 06/11 saiu às 08:52.
- "Atualizar portal": a execução das 14h48 falhou só no deploy do GitHub Pages (fila de 10 minutos do próprio GitHub). A seguinte passou.
- O agendador do GitHub está atrasando cerca de 7 horas e descartando a maior parte das execuções:
  - em 06/11, das 17 coletas agendadas, só 4 rodaram, todas depois das 13h;
  - o portal ficou sem atualização das 08:52 às 13:17 e depois das 19:02;
  - o envio reserva do e-mail (08:52 e 09:32) rodou às 15:31 e 16:38, sem enviar, por causa do corte das 10:30;
  - a edição da manhã e o e-mail só saem na hora porque a rotina da manhã dispara a coleta manualmente às 08:15.

## Fila (da maior para a menor prioridade)

1. **Coletas do dia dependem do agendador do GitHub, que atrasa cerca de 7 horas.** Ver a saúde de 06/11. Há duas reservas que não dependem dele, e as duas precisam do ok do Felipe:
   - um agendamento do Claude que dispara a coleta de 2 em 2 horas nos dias úteis. Não exige nada do Felipe, mas consome um pouco do uso do Claude;
   - um cron externo gratuito (cron-job.org) chamando a API do GitHub. Exige que o Felipe crie uma conta e um token só com permissão de Actions neste repositório.
2. **Notícia repetida em vários cartões.** Em 05/11, a aprovação da fusão Saipem-Subsea7 apareceu em 11 itens: veículos e idiomas diferentes, mesmo fato. Proposta: juntar no mesmo cartão as notícias sobre o mesmo evento (mesmas empresas e mesmo fato no mesmo dia), mesmo com títulos e idiomas diferentes.
3. **"M&A da semana" e aba Deals: separar Brasil e exterior.** Os 102 "deals novos" da semana são em boa parte comunicados de empresas estrangeiras pequenas. Proposta: Brasil primeiro, com contagem própria, e do exterior só os relevantes.
4. **Análise da rotina da manhã.** Os itens de pouca relevância saem com texto genérico. Proposta:
   - lotes menores, com o trecho completo da notícia para quem analisa;
   - análise curta, de propósito, para os itens de nota 1 a 3.
5. **Mundo das companhias no celular de verdade.** Os testes rodam em navegador sem placa de vídeo. Falta saber como fica a fluidez num iPhone real; pedir ao Felipe ou medir pelo próprio site.
6. **CVM: conferir o OCR na prática.** Ver nos próximos dias quantos documentos o OCR recupera e se algum ainda fica sem resumo por texto ilegível.

## Feito

- 07/11 — Documentos da CVM com texto ilegível, que ficavam sem resumo (7 de 66 em 05/11), agora são lidos (#61):
  - PDF só com imagem ou com fonte sem mapa de caracteres: OCR em português nas 6 primeiras páginas;
  - leitura de até 15 páginas (eram 5), pulando as de aviso legal;
  - os textos que já estavam na fila são extraídos de novo pelo extrator novo, 20 por execução.
- 06/11 — E-mail com o visual atual do portal (#59).
- 06/11 — Skills de design do Emil Kowalski atualizadas, mais choreograph e remove-animations (#58).
- 04/11 — Mundo das companhias: mapa de blocos por setor, estrutura vista de cima, legenda clicável (#56, #57).
