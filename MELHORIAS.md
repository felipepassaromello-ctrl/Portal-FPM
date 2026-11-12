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
- O Felipe pediu, em 10/11: fazer sempre o que for melhor, sem esperar aprovação, exceto o que não tem volta ou custa dinheiro.
- Nada é publicado entre 07h30 e 09h30, por causa da rotina da manhã e do e-mail das 08h52.
- O envio do e-mail (horário, destinatários e regras) não muda sem pedido do Felipe.
- Nenhum dado licenciado vai para o site público.
- Nenhum CPF, e-mail ou segredo vai para o repositório.
- Mudança grande (redesenho de uma página inteira, tirar uma funcionalidade) é proposta antes, não aplicada direto.

## Saúde

**09/11, noite:**
- Site no ar sem erro de console, sem requisição com falha e sem nada escapando da tela. Foram 22 conferências: 11 páginas, no computador e no iPhone.
- O e-mail de 09/11 saiu às 08:52. A rotina da manhã disparou a coleta às 08:21, porque as de 05:40 e 08:01 não rodaram.
- 27 de 27 fontes de notícia funcionando: o feed "deals" da Bloomberg voltou sozinho às 16:07.
- O GitHub Pages travou a publicação de novo, nas execuções de 08/11 às 22:39 e de 09/11 às 18:17.
  - As duas tentativas do deploy estouraram os 10 minutos; a nova tentativa do #62, 30 s depois, não ajuda quando o Pages fica preso mais tempo.
  - A edição fica salva, mas o site mostra a anterior até a próxima execução. Em 09/11, o site ficou com a das 16:42.
  - Corrigido no #65 com uma nova tentativa 15 minutos depois.
- O agendador do GitHub continua atrasado: em 09/11, depois do e-mail, o portal só voltou a atualizar às 16:08.
- Fila da CVM: os 72 documentos novos foram resumidos na rotina da manhã. Ficaram 5 sem resumo, com motivo; os antigos ilegíveis saem da fila sozinhos.

## Fila (da maior para a menor prioridade)

0. **Publicação no GitHub Pages: só acompanhar.** Depois do #67 (artefato de cerca de 41 MB, sem as bases internas), as 13 execuções de 10/11 à tarde até 11/11 à noite publicaram sem travar, cada deploy em cerca de 12 s; antes, foram 5 travadas em 5 dias. Se voltar a travar, o próximo passo é empacotar os perfis em menos arquivos (hoje são cerca de 3.300).
1. **Coletas do dia dependem do agendador do GitHub, que atrasa horas.** O relógio das coletas (#65) resolve sem custo, mas precisa de um ajuste do Felipe, de 1 minuto, para ligar:
   - em Settings → Environments → relogio, marcar "Wait timer" e pôr 55 minutos;
   - o ambiente aparece depois da primeira atualização com o workflow novo;
   - com isso, o portal passa a atualizar de hora em hora nos dias úteis, das 06h às 20h30, sem depender do agendador;
   - a espera não gasta minutos do GitHub Actions; sem o ajuste, o relógio fica desligado e nada muda.
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
7. **E-mail preso à publicação no GitHub Pages.** O job do e-mail só roda se a publicação der certo.
   - Antes, se o Pages travasse na execução da manhã, o e-mail não saía: a reserva das 08:52 roda 7 horas depois, quando o corte das 10:30 já barra o envio.
   - Agora, com a nova tentativa no mesmo deploy (#62) e a republicação 15 minutos depois (#65), ele sai mais tarde, por volta das 09:30. As mesmas regras continuam valendo: uma vez por dia, só com a análise do dia e até as 10:30.
   - Fica a proposta, que precisa do ok do Felipe: rodar o job do e-mail sempre que a edição foi salva, mesmo se a publicação falhar.
8. **Notícias do fim de semana sem análise.** A rotina da manhã só roda de segunda a sexta. As edições de sábado e domingo, que cobrem de sexta às 08h a domingo às 08h, nunca são analisadas: ficam sem deals, sem leads e sem entrar nas bases. Proposta, que precisa do ok do Felipe porque consome uso do Claude: rodar a análise também no sábado e no domingo, sem e-mail.

## Feito

- 12/11 — PDFs da CVM abrem pela cópia do portal, e o vigia confere o site várias vezes ao dia (#72):
  - o portal guarda cópia dos PDFs dos últimos 7 dias (fatos relevantes de até 6 MB e os demais documentos com resumo de até 1,5 MB, no máximo 80 MB), em pdf/<protocolo>.pdf; clicar num link da CVM que tem cópia abre a cópia;
  - scripts/vigia.cjs testa o site no ar como o Felipe usa: abas no computador e no iPhone, edição e e-mail do dia, áudio, cópia e link dos PDFs dos fatos relevantes, execuções do GitHub. A tarefa agendada "Portal FPM – vigia" roda o vigia em dias úteis às 10h, 13h, 16h e 19h e corrige o que achar.
- 12/11 — Documentos da CVM que vinham sem PDF (#70 e #71):
  - o Felipe não conseguiu abrir o fato relevante do Santander de 12/11 (OPA); na coleta, o mesmo documento tinha vindo sem PDF, e 54 da fila estavam assim desde 11/11;
  - causa: a CVM está instável. A consulta em tempo real cai ("service unavailable"), e o download às vezes devolve a página "ENET Download de Documento" em vez do arquivo; tentando de novo, 35 de 40 vieram certos;
  - agora o PDF de dentro de um .zip é aberto, o log diz o que veio no lugar do PDF, e esses documentos são baixados de novo até 4 vezes, os mais recentes primeiro, usando o link guardado na fila, mesmo com a consulta da CVM fora do ar.
- 11/11 — Áudio do briefing resiste a falha do serviço de voz (#68):
  - na edição das 08:28 de 11/11, o edge-tts recusou trechos 7 vezes e o passo caiu depois de 5 minutos, sem áudio; o portal ficou com a leitura do navegador até a execução seguinte, às 08:57, que refez os 19 trechos do zero;
  - agora cada trecho pronto fica guardado em cache; se o serviço falhar no meio, a execução seguinte só refaz os que faltaram, e um briefing com uma seção reescrita só refaz os trechos novos;
  - cada trecho tem 5 tentativas, em vez de 3, e a síntese para depois de 6 minutos, para não segurar a publicação. O limite começou em 4 minutos, mas em 12/11 uma síntese normal, sem erro, passou disso e parou a 1 trecho do fim; a execução seguinte completou em 25 s. Subiu para 6 minutos, com folga para o trecho em andamento antes do teto de 8 minutos do passo, no #69;
  - a primeira execução depois da mudança refaz o áudio inteiro uma vez, porque o cache mudou de formato.
- 10/11 — Dados pessoais fora do site público (#67):
  - o site publicava data/cias/base/perfis.json (14,7 MB, base interna que o site nem lê) com 47 CPFs, números de identidade e endereços, vindos do texto livre do Formulário de Referência; e os perfis de pessoas tinham 27 CPFs;
  - as bases internas não vão mais para o Pages (16 MB a menos por publicação);
  - CPF, identidade, registro profissional e endereço saem de todo texto dos perfis antes de gravar.
- 10/11 — E-mail só sai com a edição refeita com a análise do dia (#66). Em 10/11, uma execução começou o envio 21 s depois da análise chegar e mandaria a edição sem análise; foi cancelada a tempo.
- 09/11 — Publicação e coletas sem depender da sorte com o GitHub (#65):
  - **republicar.yml:** quando o "Atualizar portal" cai por causa do Pages, dispara a atualização de novo 15 minutos depois. É uma vez só, e nada é feito se uma execução mais nova já tiver publicado;
  - **relogio.yml:** atualização de hora em hora nos dias úteis, desligada até o Felipe pôr o wait timer no ambiente relogio (item 1 da fila).
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
