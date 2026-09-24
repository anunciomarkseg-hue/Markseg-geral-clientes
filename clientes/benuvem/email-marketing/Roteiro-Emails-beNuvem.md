# beNuvem | Email marketing para a base de clientes (ciclo 1)

**Remetente:** Luiz Vieira (nome e email pessoal dele, não "marketing@")
**Objetivo:** presença e proximidade com a base, reduzir cancelamento. Conteúdo leve, tom de conversa entre duas pessoas.
**Formato:** visual de carta pessoal, sem cara de newsletter. Foto do Luiz no rodapé em todos os envios.
**Frequência:** 1 envio por semana (4 no mês), como combinado na reunião.

## Arquivos

| Arquivo | Tema |
|---|---|
| `01-convite-monitorar-segsummit.html` | Convite para encontrar o Luiz no Monitorar e no SegSummit |
| `02-novidades-da-plataforma.html` | Atualizações recentes, com destaque para o menu Detecções |
| `03-deteccao-de-humanos.html` | Vantagem da detecção de humanos + pergunta "você já usa?" |
| `04-gravacao-em-nuvem.html` | Vantagem da gravação contínua em nuvem + pergunta "você já oferece?" |
| `assets/luiz-vieira.jpg` | Foto recortada para o rodapé (240x240, exibida em 72x72 redonda) |

## Assuntos e pré-headers (testar A/B no RD Station)

| # | Assunto A | Assunto B | Pré-header |
|---|---|---|---|
| 1 | Vou estar no Monitorar. Bora tomar um café? | [Nome], te espero no Monitorar e no SegSummit | Queria muito te encontrar pessoalmente dessa vez. |
| 2 | O que mudou na beNuvem nos últimos meses | Tem coisa nova aí na sua tela, [Nome] | Uma delas funciona igual grupo de WhatsApp. |
| 3 | Sua central ainda corre atrás de sombra? | Uma pergunta rápida sobre seus alarmes | Me responde com sinceridade, vai me ajudar muito. |
| 4 | Se levarem o gravador, as imagens vão junto? | [Nome], onde estão suas gravações? | Uma pergunta que ninguém gosta de responder depois do furto. |

## Cronograma sugerido

| Semana | Envio | Motivo da ordem |
|---|---|---|
| 1 | Email 1 (convite) | Precisa sair com antecedência do evento |
| 2 | Email 2 (novidades) | Mostra movimento logo depois do convite |
| 3 | Email 3 (detecção de humanos) | Primeira pergunta de uso |
| 4 | Email 4 (gravação em nuvem) | Segunda pergunta de uso |

Se a data do evento estiver a menos de 3 semanas, o email 1 sai primeiro e um lembrete curto pode ir 2 dias antes.

## Como os botões "Já uso / Ainda não" funcionam

Os botões abrem o WhatsApp do Luiz com a mensagem já escrita. O RD Station registra o clique de cada contato, então dá para montar dois segmentos depois do envio:

* **Clicou "Ainda não":** lista quente para o time de sucesso do cliente chamar e ativar o recurso. É aqui que a ação combate o cancelamento de verdade.
* **Clicou "Já uso":** candidatos a depoimento para os próximos conteúdos.

## Tratamento da base (users_admin.csv)

A planilha recebida tem 594 usuários de 277 empresas. Antes de importar:

* **61 endereços @benuvem.com / @benuvem.com.br foram retirados.** São usuários internos criados dentro das contas dos clientes. Se ficassem, o próprio time da beNuvem receberia 61 cópias de cada envio.
* **61 nomes são genéricos** ("Monitoramento", "Suporte", "admin", nome da empresa). Esses contatos estão marcados na coluna `revisar_nome` e ficam com `primeiro_nome` vazio, para o RD usar a saudação sem nome ("Oi, tudo bem?") em vez de "Oi, Monitoramento".
* Resultado: **533 contatos enviáveis**. A lista tratada não fica neste repositório por conter dados pessoais; foi entregue separadamente.
* Ponto de atenção: uma única empresa (Peter Graber) tem 44 usuários na base. Todos vão receber. Vale confirmar com o Luiz se ele quer isso ou só os gestores.

## Pendências antes de agendar

1. Datas, horários, local e estande do **Monitorar** e do **SegSummit** (email 1).
2. **Cargo** e **número de WhatsApp** do Luiz (assinatura e botões).
3. Luiz validar as afirmações técnicas dos emails 3 e 4 (detecção de humanos filtra sombra, galho e animal; gravação em nuvem continua acessível se o gravador for levado ou desligado).
4. Confirmar se o pitch de 5 minutos no Monitorar está mantido (email 1 cita o pitch).
5. Subir a foto `assets/luiz-vieira.jpg` no RD Station e trocar o caminho da imagem pela URL gerada.
6. Trocar `[PRIMEIRO_NOME]` pelo campo de nome do RD, com saudação alternativa para quem estiver sem nome.
7. Configurar o remetente com o email pessoal do Luiz e autenticar o domínio (SPF e DKIM) no RD Station.
8. **Confirmar que as respostas chegam na caixa do Luiz.** A assinatura diz "Quem lê sou eu". Se as respostas forem para uma caixa que ninguém olha, a mensagem vira o oposto da proximidade que ele pediu.
