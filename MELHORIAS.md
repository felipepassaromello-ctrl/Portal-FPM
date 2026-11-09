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

**08/11, noite:**
- Site no ar sem erro de console, sem requisição com falha e sem nada escapando da tela. Foram 22 conferências: 11 páginas (todas as abas do index, companhias, perfil e Mundo), no computador e no iPhone.
- "Atualizar portal": as 5 execuções desde 07/11 à noite passaram, em 1 a 4 minutos. O passo dos textos da CVM voltou a levar segundos (#63).
- 26 de 27 fontes de notícia e 3 de 3 fontes oficiais funcionando.
  - O feed "deals" da Bloomberg passou a responder 404 na execução das 18h57. Antes trazia só 1 a 3 itens; o feed "markets" (20 itens) continua cobrindo a Bloomberg. Ver o item 9 da fila.
- Fila da CVM: só sobram 8 documentos antigos (26 a 29/10) com texto ilegível, que saem da fila sozinhos.
- Fim de semana: edição sem análise de IA, como esperado (item 8 da fila).

## Fila (da maior para a menor prioridade)

1. **Coletas do dia dependem do agendador do GitHub, que atrasa cerca de 7 horas.** Ver a saúde de 06/11. Há duas reservas que não dependem dele, e as duas precisam do ok do Felipe:
   - um agendamento do Claude que dispara a coleta de 2 em 2 horas nos dias úteis. Não exige nada do Felipe, mas consome um pouco do uso do Claude;
   - um cron externo gratuito (cron-job.org) chamando a API do GitHub. Exige que o Felipe crie uma conta e um token só com permissão de Actions neste repositório.
2. **Notícia repetida em vários cartões.** Em 05/11, a aprovação da fusão Saipem-Subsea7 apareceu em 9 itens: veículos e idiomas diferentes, mesmo fato.
   - Feito no #64: as matérias que a análise marca como o mesmo deal agora entram no cartão principal. No caso do Saipem, 6 das 8 repetidas.
   - Falta o resto: as matérias sobre o mesmo fato que a análise não marcou como deal (no caso do Saipem, 2 das 8 vieram sem comprador e alvo) continuam em cartões próprios.
   - Proposta: marcar a repetida na coleta também por mesmas empresas, mesmo dia e mesma categoria, ou pedir na análise da manhã que o objeto deal venha sempre preenchido em notícia de transação. Mexe no build_digest.py ou no routine.py.
3. **"M&A da semana" e aba Deals: separar Brasil e exterior.** Os 102 "deals novos" da semana são em boa parte comunicados de empresas estrangeiras pequenas. Proposta: Brasil primeiro, com contagem própria, e do exterior só os relevantes.
   - Achado de 06/11: o campo `region` das notícias diz se o veículo é brasileiro, não onde está o negócio. Marvell–Lumentum aparece como Brasil (noticiado pelo Valor), e Huaxin–CSN Cimentos como exterior. Também não serve para os deals antigos: 354 dos 635 não acham mais a matéria no arquivo.
   - Caminho: classificar o próprio deal, em duas frentes:
     - o comprador ou o alvo é companhia brasileira da base, o valor está em R$ ou a manchete cita o Brasil;
     - a análise da manhã ganha o campo "país do negócio". Mexe no routine.py, então fazer com cuidado.
4. **Análise da rotina da manhã.** Os itens de pouca relevância saem com texto genérico. Proposta:
   - lotes menores, com o trecho completo da notícia para quem analisa;
   - análise curta, de propósito, para os itens de nota 1 a 3.
5. **Mundo das companhias no celular de verdade.** Os testes rodam em navegador sem placa de vídeo. Falta saber como fica a fluidez num iPhone real; pedir ao Felipe ou medir pelo próprio site.
6. **CVM: conferir o OCR na prática.** Em 06/11 o OCR recuperou 3 documentos (2 apresentações da Irani e o plano de recuperação da Aeris). Seguir olhando quantos recupera e se algum ainda fica sem resumo por texto ilegível.
7. **E-mail preso à publicação no GitHub Pages.** O job do e-mail só roda se a publicação der certo. Se o Pages travar na execução da manhã, o e-mail não sai, e a reserva das 08:52 roda 7 horas depois, quando o corte das 10:30 já barra o envio.
   - Com a nova tentativa de publicação (#62), o risco caiu.
   - Proposta, que precisa do ok do Felipe porque mexe em quando o e-mail é tentado: rodar o job do e-mail sempre que a edição foi salva no repositório, mesmo se a publicação falhar. As regras do send_email.py continuam iguais.
8. **Notícias do fim de semana sem análise.** A rotina da manhã só roda de segunda a sexta. As edições de sábado e domingo, que cobrem de sexta às 08h a domingo às 08h, nunca são analisadas: ficam sem deals, sem leads e sem entrar nas bases. Proposta, que precisa do ok do Felipe porque consome uso do Claude: rodar a análise também no sábado e no domingo, sem e-mail.
9. **Feed "deals" da Bloomberg com 404 desde 08/11 18h57.** Se continuar, trocar pela consulta do Google News (site:bloomberg.com com termos de M&A), como já é feito para WSJ e outros.

## Feito

- 08/11 — Notícias repetidas sobre o mesmo deal agrupadas no cartão principal, no feed e no briefing (#64):
  - "Mais N matérias sobre este deal" abre a lista com o veículo e o título de cada uma;
  - cada uma abre no leitor, que anda pelo grupo;
  - a contagem do feed, das categorias e da aba não conta mais as repetidas.
- 07/11 — Coleta protegida quando a CVM sai do ar, e aba Ofertas sem rolagem lateral no iPhone (#63):
  - a releitura dos textos fica só na janela de 7 dias;
  - o download dos textos tem teto de 8 minutos e para depois de 3 downloads seguidos sem resposta;
  - cada PDF tem 2 tentativas de 40 s, em vez de 3 de 60 s;
  - na Ofertas, a tabela rola dentro do quadro.
- 06/11 — Publicação no GitHub Pages: quando fica presa na fila e estoura os 10 minutos, é tentada de novo uma vez, em vez de deixar o site sem a edição até a próxima execução (#62).
- 06/11 — Documentos da CVM com texto ilegível, que ficavam sem resumo (7 de 66 em 05/11), agora são lidos (#61):
  - PDF só com imagem ou com fonte sem mapa de caracteres: OCR em português nas 6 primeiras páginas;
  - leitura de até 15 páginas (eram 5), pulando as de aviso legal;
  - os textos que já estavam na fila são extraídos de novo pelo extrator novo, 20 por execução.
- 06/11 — E-mail com o visual atual do portal (#59).
- 06/11 — Skills de design do Emil Kowalski atualizadas, mais choreograph e remove-animations (#58).
- 04/11 — Mundo das companhias: mapa de blocos por setor, estrutura vista de cima, legenda clicável (#56, #57).
