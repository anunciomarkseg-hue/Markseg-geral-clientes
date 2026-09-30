# Relatório de desempenho de SEO e aquisição

**Cliente:** G5 Segurança Integrada
**Período analisado:** 23 de junho a 20 de setembro de 2026, 90 dias
**Data do relatório:** 21 de setembro de 2026

## Ficha técnica

| Item | Descrição |
|---|---|
| Fonte primária | Exportações do Google Analytics 4, propriedade G5 - GA4, quatro relatórios: visão geral da aquisição, aquisição de usuários por canal, páginas e telas, páginas de destino |
| Fonte complementar | Painel de consultas do Google Search Console, abas Superior, Em alta e Em baixa |
| Verificação técnica | Checagem direta das URLs de maior tráfego e do rastreamento do site feito em 18 e 21 de setembro de 2026 |
| Base de referência | Auditoria completa do site entregue em 18 de setembro de 2026 |
| Limitação 1 | A exportação do GA4 não traz período de comparação. Por isso este relatório descreve composição, qualidade e tendência dentro da janela, e não variação contra os 90 dias anteriores |
| Limitação 2 | O painel do Search Console fornecido não informa o período nem a janela de comparação das variações percentuais. Os dados dele são tratados como direcionais |
| Limitação 3 | A exportação não identifica quais eventos estão marcados como principais, nem separa o nome do host. Os dois pontos afetam a leitura e estão tratados na seção de ressalvas |

## Resumo executivo

O orgânico é, com folga, o canal mais eficiente da G5, e é o único que sustenta conversão com consistência.

Com 15,3% dos usuários do período, a busca orgânica responde por 59,8% de todos os eventos principais registrados. A taxa de conversão do canal é de 7,85%, o tempo médio de engajamento é de 39,8 segundos e cada usuário gera 0,79 sessão engajada.

No extremo oposto está o Paid Social, que trouxe 44,7% dos usuários, quase o triplo do orgânico, e registrou zero evento principal em 90 dias. O tempo médio de engajamento desse tráfego é de 2 segundos.

O problema é que o canal mais eficiente é o menor. E o motivo já estava mapeado na auditoria: o site ranqueia pelo próprio nome, não pelos serviços que vende. No painel do Search Console, consultas de marca concentram cerca de 77% dos cliques.

Há ainda um sinal de atenção imediata no volume. Os usuários ativos semanais caíram de uma média de 309 nas oito primeiras semanas para 202, 114 e 84 nas semanas de 30 de agosto, 6 de setembro e 13 de setembro.

## 1. Desempenho por canal

### Volume

| Canal | Sessões | Participação |
|---|---|---|
| Paid Social | 1.630 | 43,2% |
| Organic Search | 638 | 16,9% |
| Direct | 579 | 15,3% |
| Paid Search | 534 | 14,1% |
| Organic Social | 141 | 3,7% |
| Email | 101 | 2,7% |
| Paid Other | 100 | 2,6% |
| Referral | 18 | 0,5% |
| Cross-network | 16 | 0,4% |
| AI Assistant | 12 | 0,3% |
| Unassigned | 8 | 0,2% |
| **Total** | **3.777** | |

### Qualidade

| Canal | Usuários | Tempo médio | Sessões engajadas por usuário | Eventos principais | Taxa de conversão |
|---|---|---|---|---|---|
| Organic Search | 536 | 39,8 s | 0,79 | 61 | 7,85% |
| AI Assistant | 10 | 30,2 s | 0,70 | 2 | 10,00% |
| Email | 92 | 30,7 s | 0,64 | 3 | 2,17% |
| Paid Search | 482 | 20,0 s | 0,57 | 18 | 2,49% |
| Direct | 558 | 7,7 s | 0,22 | 18 | 1,98% |
| Organic Social | 134 | 5,7 s | 0,54 | 0 | 0% |
| Paid Social | 1.565 | 2,0 s | 0,27 | 0 | 0% |
| Paid Other | 99 | 0,5 s | 0,27 | 0 | 0% |

Foram 102 eventos principais no período. A distribuição é a informação mais importante deste relatório:

| Canal | Eventos principais | Participação nos eventos | Participação nos usuários |
|---|---|---|---|
| Organic Search | 61 | 59,8% | 15,3% |
| Direct | 18 | 17,6% | 15,9% |
| Paid Search | 18 | 17,6% | 13,8% |
| Email | 3 | 2,9% | 2,6% |
| AI Assistant | 2 | 2,0% | 0,3% |

O orgânico converte quatro vezes mais do que sua participação em audiência. O Paid Social, com quase metade dos usuários, não aparece nesta tabela.

## 2. O comportamento do tráfego orgânico

Os 39,8 segundos de engajamento médio do orgânico são quase vinte vezes o tempo do Paid Social e o dobro do Paid Search. Quem chega pela busca lê, permanece e age.

Esse dado contraria a leitura de que o SEO da G5 está indo mal. O que está limitado é o volume, não a qualidade. O canal entrega o melhor lead do site e está restrito a 638 sessões em 90 dias porque o site não tem páginas para os termos comerciais do setor, conclusão já documentada na auditoria de 18 de setembro.

Vale destacar o canal AI Assistant, com 12 sessões vindas de ChatGPT e Perplexity. É volume desprezível hoje, mas registrou 2 eventos principais e a maior taxa de conversão da tabela, 10%. É um canal para acompanhar.

## 3. Mídia paga

As campanhas do Google Ads no período:

| Campanha | Sessões |
|---|---|
| [SEARCH][TOTEM] - 30.07.2025 | 256 |
| GERAL - MONITORAMENTO | 194 |
| PORTARIA REMOTA (NOVA 04/2025) | 58 |

O Paid Search entrega resultado coerente: 482 usuários, 20 segundos de engajamento, 18 eventos principais e 2,49% de conversão.

O Paid Social é outra história. São 1.565 usuários com 2 segundos de engajamento médio e nenhum evento principal em 90 dias. Um tráfego que permanece 2 segundos na página não chegou a ler o título. As origens manuais mostram Facebook com 1.470 sessões e Instagram com 215.

Antes de concluir que o investimento está sendo perdido, é preciso descartar duas hipóteses de medição, e as duas dependem de acesso que não tenho: a conversão dessas campanhas pode estar sendo registrada no RD Station e não como evento principal do GA4, e parte do tráfego pode estar sendo atribuída de forma incorreta. Ainda assim, mesmo descontando a medição, 2 segundos de engajamento indicam desalinhamento entre anúncio e página de destino.

## 4. Páginas que convertem

| Página de destino | Sessões | Eventos principais | Taxa da sessão | Tempo médio |
|---|---|---|---|---|
| /fale-conosco | 31 | 14 | 25,8% | 29,7 s |
| /robos-e-drones-de-vigilancia | 6 | 1 | 16,7% | 40,3 s |
| /5-vulnerabilidades-que-passam-despercebidas | 8 | 1 | 12,5% | 45,4 s |
| /portaria-remota-em-curitiba | 21 | 2 | 9,5% | 23,6 s |
| /g5-seguranca-passa-a-integrar-o-conecta-muralha | 11 | 6 | 9,1% | 37,9 s |
| /empresa-de-seguranca-em-curitiba | 12 | 2 | 8,3% | 21,1 s |
| /totem-de-seguranca | 42 | 4 | 4,8% | 29,4 s |
| / (página inicial) | 2.110 | 59 | 2,0% | 10,2 s |

Três leituras.

A primeira é que o conteúdo de blog mais recente e mais profundo é justamente o que converte. Robôs e drones, com 3.208 palavras, e as cinco vulnerabilidades sustentam mais de 40 segundos de leitura e geram conversão com pouquíssimo tráfego. A virada editorial de 2026 está funcionando.

A segunda é sobre o post do Conecta Muralha. Com apenas 11 sessões, ele registrou 6 eventos principais e 37,9 segundos de engajamento. É o conteúdo com melhor relação entre audiência e resultado do site inteiro. A auditoria apontou que ele não recebe nenhum link interno. Esse é o ativo mais desperdiçado da operação.

A terceira é o contraste entre volume e resultado nas páginas de solução. A página de soluções para empresa recebeu 190 sessões com 1,9 segundo de engajamento e nenhum evento principal. A de condomínio, 64 sessões com 3 segundos. São páginas comerciais recebendo tráfego e não retendo ninguém.

No total, as 118 páginas de blog somaram 842 sessões e 17 eventos principais no período.

## 5. Consultas na busca

A composição dos cliques no painel do Search Console é o retrato do problema estrutural.

| Tipo de consulta | Cliques aproximados | Participação |
|---|---|---|
| Marca (g5 segurança, g5, empresa g5, g5 security, g5 monitoramento, grupo g5) | 138 | cerca de 77% |
| Não marca | 41 | cerca de 23% |

Dentro dos 41 cliques que não são de marca, 27 são consultas locais: empresa de segurança curitiba com 9, empresas de segurança em curitiba com 7, portaria remota curitiba com 3, e variações de vigilância em Curitiba.

Em alta aparecem g5 security com mais 5, empresa de segurança curitiba com mais 3, e um conjunto de consultas locais estreando com 1 clique cada, entre elas empresas de segurança patrimonial em curitiba, empresas de vigilante em curitiba e empresas de escolta armada.

Em baixa, os destaques são g5 segurança com menos 22 cliques, totem de segurança com queda de 82% e menos 9 cliques, portaria remota em curitiba com queda de 100% e sistemas de segurança com queda de 67%.

Duas conclusões. A primeira é que o site depende de quem já conhece a marca. A segunda é que as consultas locais genéricas são exatamente as que estão nascendo e crescendo, o que confirma a recomendação da auditoria de criar páginas de serviço com recorte geográfico.

Nenhuma consulta relacionada a alarme monitorado ou monitoramento de alarme aparece nas listas, o que é coerente com a ausência de página para esse cluster.

## 6. Tendência de volume no período

Usuários ativos por semana, com a primeira e a última semanas parciais:

| Semana iniciada em | Usuários ativos |
|---|---|
| 23/06 (parcial) | 247 |
| 28/06 | 326 |
| 05/07 | 298 |
| 12/07 | 284 |
| 19/07 | 271 |
| 26/07 | 311 |
| 02/08 | 291 |
| 09/08 | 446 |
| 16/08 | 360 |
| 23/08 | 297 |
| 30/08 | 202 |
| 06/09 | 114 |
| 13/09 | 84 |
| 20/09 (parcial) | 6 |

A média das oito primeiras semanas completas é de 309 usuários. A semana de 13 de setembro fechou em 84, queda de 73% em relação a essa média.

Como o Paid Social responde por 43,2% das sessões, a hipótese mais provável é redução ou pausa do investimento em mídia paga a partir do fim de agosto. Isso precisa ser confirmado no gerenciador de anúncios antes de qualquer conclusão, porque o mesmo padrão poderia vir de uma falha de rastreamento ou de sazonalidade.

Vale notar que a queda de volume não afeta a leitura sobre o orgânico, já que o canal representa parcela pequena do total e tem comportamento próprio.

## 7. Ressalvas de medição que precisam ser corrigidas

**A propriedade mistura hostnames.** As páginas de destino de maior tráfego depois da página inicial, como /totem-de-seguranca-para-condominios com 265 sessões e /empresa-de-seguranca-para-condominios com 64, não existem em g5seguranca.com.br. Elas estão em materiais.g5seguranca.com.br, o subdomínio de landing pages do RD Station, confirmado por verificação direta em 21 de setembro. Isso significa que os relatórios de página do GA4 misturam site e landing pages sem distinção, o que distorce qualquer análise feita sem o nome do host.

**Não há identificação dos eventos principais.** A exportação mostra 102 eventos principais sem dizer quais são. Sem isso, não é possível distinguir um pedido de orçamento de um clique em rodapé.

**Não há receita configurada.** Todos os valores de receita estão zerados, e o relatório de coorte de valor médio em 120 dias está zerado em todas as 120 coortes. Sem valor atribuído, não há cálculo de retorno por canal.

**Telefone e WhatsApp não são medidos.** A auditoria constatou que nenhuma das 148 URLs tem link de telefone clicável e que o botão flutuante é um componente do RD Station sem endereço. Os dois canais que mais convertem neste setor estão fora da medição.

**O site tem páginas fora do sitemap.** A verificação encontrou /controle-de-acesso-inteligente/, página indexável com 807 palavras, que não consta em nenhum sitemap e cujo canonical aponta para outro endereço. Existem outras URLs com tráfego residual que não respondem em nenhum dos dois domínios e merecem checagem.

## 8. O que este relatório confirma da auditoria

A auditoria de 18 de setembro foi feita sem acesso a dados de desempenho. Os dados agora disponíveis confirmam quatro dos seus achados principais.

A dependência de marca estava prevista pela ausência de páginas para termos comerciais e aparece nos 77% de cliques de marca.

A ausência de página para o cluster de alarme e monitoramento se reflete na inexistência dessas consultas no painel de busca.

O isolamento do post do Conecta Muralha, apontado como o ativo mais desperdiçado, se confirma: é o conteúdo que mais converte por sessão e não recebe um único link interno.

A fragilidade do SEO local aparece dos dois lados: as consultas locais são as que mais crescem e o site não tem página de serviço com recorte geográfico.

## 9. Recomendações

**Imediato, até 7 dias**

Verificar no gerenciador de anúncios se houve pausa ou redução de verba a partir do fim de agosto, para confirmar a causa da queda de volume.

Auditar as campanhas de Paid Social. Com 1.565 usuários, 2 segundos de engajamento e nenhum evento principal, o mínimo é revisar segmentação, criativo e página de destino antes do próximo ciclo de verba.

Configurar no GA4 os eventos de clique em telefone e em WhatsApp, e nomear com clareza quais eventos são principais.

Separar os relatórios por nome do host, para que site e landing pages do RD Station deixem de ser lidos como a mesma coisa.

**30 dias**

Criar a página de serviço de alarme monitorado e monitoramento 24 horas, primeira prioridade da auditoria e confirmada pela ausência total do tema nas consultas.

Criar páginas de serviço com recorte local, já que as consultas locais são as que mais crescem e hoje são atendidas por posts de blog.

Ligar o post do Conecta Muralha às páginas comerciais e transformá-lo em página institucional permanente.

Corrigir a página inicial. São 2.110 sessões com 10,2 segundos de engajamento e 2% de conversão. É o maior volume do site com o pior aproveitamento entre as páginas de destino relevantes.

**90 dias**

Revisar as páginas de solução, que recebem tráfego e retêm entre 1,9 e 3 segundos.

Manter a linha editorial iniciada em 2026, porque os conteúdos longos são os que convertem.

Implementar a medição de receita ou de valor por lead, sem a qual não existe cálculo de retorno por canal.

## 10. Próxima medição

Para que o próximo relatório mostre crescimento de fato, e não apenas composição, são necessárias duas exportações adicionais que hoje não existem:

No GA4, o mesmo conjunto de relatórios com período de comparação ativado, comparando os 90 dias contra os 90 anteriores.

No Search Console, o relatório de performance completo, com exportação de consultas e páginas, período de 16 meses e comparação ativada. É a única fonte que mostra impressões, posição média e cliques por consulta ao longo do tempo.

Com esses dois arquivos, o relatório seguinte passa a ter série histórica e medição real de evolução.
