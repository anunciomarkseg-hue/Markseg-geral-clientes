# BR Segurança
## Auditoria da base e estrutura de e-mail marketing (Mailchimp)
### Diagnóstico dos contatos, histórico de envios, limpeza, segmentação e fluxos

| Campo | Informação |
|---|---|
| **Cliente** | BR Segurança (público no Mailchimp: "BR Security") |
| **Ferramenta** | Mailchimp |
| **Base analisada** | 976 registros exportados: 924 inscritos, 22 descadastrados, 30 limpos (bounce) |
| **Envios analisados** | 9 campanhas regulares, de 22/06/2026 a 17/08/2026 |
| **Fontes** | Export completo da audiência, relatório de campanhas (CSV), prints do Painel de Marketing e da Análise de Público e reunião de alinhamento de 18/09/2026 |
| **Data** | Setembro de 2026 |

> Nenhum dado pessoal de contato está neste documento. Todos os números são agregados. A lista com as tags por contato foi gerada à parte, para reimportação no Mailchimp, e não fica no repositório.

---

## 0. Atualização após a reunião de alinhamento (18/09/2026)

A reunião com Monique Romanholo e Victor Binelli mudou uma premissa central deste documento. A primeira versão tratava o canal de segurança (integradores e revendas) como público prioritário, porque é isso que a base é. A direção da empresa é outra: **o foco é o público final, principalmente o comércio**. Pela experiência deles, o integrador não se esforça para vender o produto porque não é lucrativo o bastante para ele. A estratégia desejada é tornar o produto conhecido pelo usuário final, para que a demanda venha dele.

### 0.1 O que isso muda, e o problema que isso cria

**A base atual não é o público que a empresa quer atingir.** Dos 924 inscritos, só 133 (14%) são usuário final, e só 44 são de varejo e comércio. Os outros 753 são empresas de segurança e de tecnologia, exatamente o perfil que a empresa diz não priorizar. Consequências práticas:

1. **O e-mail para a base atual não vai ser o motor de venda para o comércio.** Nenhum fluxo bem escrito transforma 44 contatos de varejo em volume de negócio. A base de usuário final precisa ser **construída**: tráfego pago com formulário de lead, conselhos de segurança do comércio (a Eliz ficou de levantar os que existem além de Curitiba), eventos do varejo e parcerias. Cada lead novo entra no Mailchimp com tag de origem e cai no fluxo de boas vindas (8.2).
2. **Não usar a base inteira como semente de público semelhante.** A proposta da reunião é subir a lista no Meta e no LinkedIn. Para **remarketing** (mostrar anúncio para quem já está na lista) faz sentido. Para **público semelhante (lookalike)**, a lista inteira ensina o algoritmo a achar mais empresas de segurança, o oposto do objetivo. A semente para semelhante deve ser só o segmento Usuário final, ou melhor ainda, visitantes do site e leads de usuário final quando existirem. No LinkedIn, a audiência por lista exige no mínimo 300 contatos encontrados, então 133 não formam público sozinhos; lá a segmentação por setor e cargo funciona melhor.
3. **Não descartar o canal antes de responder uma pergunta:** quando o comerciante se interessar pelo produto, quem instala e vende? Se for a própria BR Segurança, o canal vira público secundário. Se a instalação passar por integrador, os 572 contatos do canal são justamente quem vai atender a demanda criada, e precisam saber que ela vai chegar. A recomendação é manter o canal com envio **mensal** de baixo esforço (8.4) até essa resposta vir do Carlos.
4. **A campanha "Farmácias" estava no caminho certo de mensagem, mas no público errado.** O conteúdo de dor do comércio é o que a empresa quer comunicar. Ele gerou 5 descadastros porque foi para uma base de empresas de segurança.

### 0.2 Mensagem e slogan ainda não aprovados

O Carlos (sócio) não quer mais o uso de "Interrompa" nas peças, e o novo slogan ainda está em aprovação. Há também uma reunião pendente dele com a Monique para fechar a direção de forma definitiva. Por isso:

* **Todas as copies da seção 8 são provisórias** e não devem ser disparadas antes dessa devolutiva.
* O assunto "NÃO ASSISTA O ROUBO. INTERROMPA." do histórico não deve ser reaproveitado.
* A limpeza, a reimportação com tags e a configuração técnica (seções 6 e 7) **não dependem** da mensagem e podem andar já.

### 0.3 O que foi confirmado

| Ponto | O que a reunião confirmou |
|---|---|
| **Origem da lista de junho** | Exposec. Segundo a Monique, são pessoas que passaram no estande e deixaram contato. Isso explica o e-mail "Obrigado pela sua presença!" |
| **Origem da lista de Belém** | Evento da Abese. A Abese envia a lista **de todos os inscritos no evento**, não só de quem viu a apresentação da BR Segurança. O campo "Presente no Evento" indica presença no evento, não contato com o produto. Estimativa da agência: cerca de 10% teve contato real com o produto |
| **Contatos incluídos manualmente** | São internos (equipe BR Segurança). Sair dos envios e virar lista de teste |
| **Ferramenta** | Continua o Mailchimp. A agência recebeu acesso de administrador (webdesign@markseg.com) |
| **Limpeza** | Nenhuma exclusão será feita sem autorização do cliente. A seção 6 passa a ser uma proposta para aprovação |
| **Automações** | Não existe nenhum fluxo. Os envios eram manuais e semanais, feitos pela Monique sem apoio |
| **Planilha original** | A Monique se ofereceu para enviar o Excel com a lista completa. Pedir, para separar quem de fato passou no estande da Exposec |

Os números citados na reunião (7.000 envios, 11% de abertura, 779 aberturas) são de um período maior que o painel de 90 dias usado aqui (5.720 envios, 10,3%, 580 aberturas). A leitura é a mesma.

---

## 1. Resumo executivo

A base é limpa o suficiente para ser recuperada, mas o e-mail não está funcionando, e a base não é o público que a empresa quer atingir (seção 0).

São 924 contatos inscritos, quase todos do mercado de segurança, com 444 decisores (diretores, CEOs, sócios, gerentes). É um público qualificado para parceria e instalação, mas pequeno para a meta de chegar ao comércio. O que foi enviado para ele:

1. **Ninguém clica.** Em 90 dias foram 5.720 envios e 13 cliques reais (0,23%, com filtro de bots do próprio Mailchimp). Em 9 campanhas, a soma de cliques únicos é 27. Na prática, o e-mail não gera nenhuma ação comercial.
2. **A abertura real é metade do que o relatório mostra.** O CSV de campanhas mostra 16% a 26% de abertura, mas o painel com filtro de bots mostra 10,3%. A diferença é abertura automática (Apple Mail e filtros corporativos). E mesmo a abertura inflada caiu de 26,3% para 15,7% em 8 semanas.
3. **Mensagem e público não se encontram.** A base é majoritariamente de empresas de segurança, mas campanhas como "Farmácias: o prejuízo pode ser evitado antes mesmo do furto" falam com o usuário final, que é o público que a empresa quer. Essa campanha teve o maior número de descadastros junto com "Stop Now" (5 cada). O problema não é a mensagem, é para quem ela foi.
4. **"Origem" no Mailchimp não serve para nada hoje.** 972 dos 976 contatos aparecem como "List Import". A origem real só foi recuperada cruzando data de importação, tags e campos do cadastro (seção 3).
5. **Higiene de lista fraca.** A lista não foi validada antes da importação: 16 hard bounces no primeiro envio, 30 contatos já limpos pelo Mailchimp e mais 37 inscritos com classificação 1 estrela, o padrão de quem dá bounce temporário em todo envio. A taxa de rejeição de 1,6% já está marcada como "precisa de atenção".
6. **A base está parada há 6 semanas.** O último envio foi em 17/08. Voltar a disparar para todo mundo de uma vez, com a mesma fórmula, vai repetir o resultado e piorar a reputação do remetente.
7. **Não existe nenhuma automação.** Todos os envios foram manuais. Zero fluxo de boas vindas, nutrição ou reengajamento.

**Recomendação central:** parar os envios em massa semanais, limpar a base, reimportar com tags de origem, perfil e mercado, e trocar para fluxos segmentados em que cada e-mail tem um único objetivo comercial mensurável. O usuário final recebe o conteúdo de dor e prova do produto. O canal recebe um contato mensal. E, em paralelo, a base de usuário final passa a ser construída com tráfego pago e parcerias, porque a base atual não tem volume de comércio.

---

## 2. Números da base

### 2.1 Status

| Status | Contatos | Observação |
|---|---:|---|
| Inscritos | 924 | Base ativa de envio |
| Descadastrados | 22 | 2,3% da base em 9 envios |
| Limpos (bounce) | 30 | Removidos automaticamente pelo Mailchimp |
| **Total exportado** | **976** | O painel mostra 946 porque não conta os limpos |

### 2.2 Qualidade dos dados

| Problema | Volume | Impacto |
|---|---:|---|
| Primeiro nome vazio (nome inteiro gravado em "Last Name") | 669 contatos da lista de junho | Qualquer personalização com o nome sai em branco ("Olá ,") |
| UF gravada como "Cidade, PA" e endereço como "PA US" | 291 contatos de Belém | Segmentação por estado não funciona; o Mailchimp entende parte da base como sendo dos EUA |
| País vazio | 305 contatos | Mesmo problema de geolocalização |
| CPF armazenado no Mailchimp | 303 contatos | Dado pessoal sem uso em e-mail marketing. Risco de LGPD sem ganho nenhum |
| Endereços genéricos (contato@, comercial@, adm@...) | 30 inscritos | Entregam, mas raramente geram resposta de uma pessoa |
| Estudantes e SENAI | 24 inscritos | Baixo potencial comercial, puxam métricas para baixo |
| E-mails claramente inválidos | 3 já limpos (domínio .local, domínio de teste, erro de digitação) | Mostram que a lista não passou por validação |
| Duplicados | 0 | Ok |
| Domínio gratuito (gmail, hotmail etc.) | 73% dos inscritos | Normal para pequenas empresas de segurança, mas dificulta identificar a empresa pelo domínio |

---

## 3. Origem dos contatos

O Mailchimp registrou quase tudo como "List Import from Upload de arquivo", então a origem foi reconstruída pela data de importação, pelas tags e pelos campos preenchidos.

| Origem | Importação | Inscritos | Descad. | Limpos | Característica |
|---|---|---:|---:|---:|---|
| **Exposec 2026** (visitantes do estande) | 19/06/2026 | 629 | 16 | 27 | Base nacional (SP 58%), com setor e cargo preenchidos. Mistura empresas de segurança, tecnologia e usuários finais |
| **Abese Belém Jul26** | 23/07/2026 | 291 | 6 | 3 | 100% Pará, 100% empresas de segurança. Lista geral de inscritos enviada pela Abese, não só quem viu a apresentação |
| **Inclusão manual (Admin)** | 18/06, 06/07 e 17/08 | 4 | 0 | 0 | Equipe interna, confirmado na reunião. Devem sair das métricas |

**Exposec:** só 2 dos 629 contatos têm "Presente no Evento = Sim", porque o campo não foi usado nessa importação. Pela reunião, a lista é de visitantes do estande. Mesmo assim, 16 hard bounces no primeiro envio mostram que parte dos e-mails foi digitada errado na captação. O Excel original que a Monique ofereceu ajuda a confirmar quem teve conversa real no estande.

No evento de Belém o dado existe: **122 presentes e 169 inscritos que não compareceram**. Atenção: "presente" aqui significa que a pessoa foi ao evento da Abese, não que viu a BR Segurança. A maior parte dessa lista nunca ouviu falar do produto, e o primeiro e-mail para ela precisa se apresentar em vez de agradecer.

---

## 4. Perfil do público

### 4.1 Mercado x cargo (inscritos)

| Mercado | Decisor | Coordenação | Técnico | Comercial | Outros | **Total** |
|---|---:|---:|---:|---:|---:|---:|
| Canal de segurança (empresas de segurança, integradores, monitoramento) | 320 | 52 | 103 | 50 | 47 | **572** |
| Tecnologia e Telecom | 69 | 7 | 72 | 17 | 16 | **181** |
| Usuário final (varejo, governo, facilities, indústria, logística, financeiro, saúde) | 55 | 12 | 29 | 17 | 20 | **133** |
| Não informado | 0 | 0 | 0 | 0 | 38 | **38** |
| **Total** | **444** | **71** | **204** | **84** | **121** | **924** |

Critérios usados:

* **Decisor:** diretor, CEO, CIO, CSO, sócio, proprietário, presidente, administrador, gerente, gestor, síndico, comprador.
* **Coordenação:** coordenador e supervisor. Influenciam a compra, mas não assinam.
* **Técnico:** técnico, instalador, engenheiro, TI, integrador, projetos, operador de monitoramento.
* **Comercial:** vendas e consultores.

### 4.2 Leitura estratégica

1. **Só 14% é usuário final, e é esse o público prioritário da empresa.** Dos 133, 44 são de varejo e comércio, 28 de governo, 26 de facilities, 15 de indústria e 11 de logística. É o segmento que recebe o conteúdo de dor e prova do produto, com mais frequência e mais cuidado.
2. **62% da base é canal de segurança.** Pela direção definida na reunião, deixa de ser o foco. Mas continua sendo quem instala e atende o comércio em boa parte do país. Recebe contato mensal, com a mensagem "seus clientes vão começar a pedir isso", até o Carlos definir o papel do canal.
3. **Tecnologia e Telecom (181) é o segmento mais ambíguo.** Pode ser integrador de CFTV que se classificou como tecnologia, ou pode ser operadora. Tratar como canal potencial e observar os cliques.
4. **Técnicos (204) querem outro conteúdo.** Instalação, especificação, comparação técnica, treinamento. Mandar para eles o mesmo e-mail comercial do diretor desperdiça o público.
5. **Concentração geográfica:** SP (364) e PA (293) somam 71% da base. Belém é uma base regional inteira do mesmo setor, útil se a empresa tiver representante ou parceiro instalador no Pará.

---

## 5. Histórico de envios

### 5.1 Campanha por campanha

| Data | Assunto | Enviados | Hard | Soft | Abertura* | Cliques únicos | Descad. |
|---|---|---:|---:|---:|---:|---:|---:|
| 22/06 (seg) | Obrigado pela sua presença! | 673 | 16 | 18 | 26,3% | 9 | 2 |
| 30/06 (ter) | O BRASIL VENCEU! | 655 | 1 | 14 | 21,1% | 2 | 2 |
| 06/07 (seg) | O ataque ganha jogos. A defesa evita derrotas. | 654 | 0 | 15 | 20,5% | 2 | 0 |
| 13/07 (seg) | NÃO ASSISTA O ROUBO. INTERROMPA. | 654 | 0 | 15 | 20,2% | 2 | 1 |
| 20/07 (seg) | O APITO FINAL NÃO ENCERRA A SEGURANÇA. | 653 | 0 | 14 | 18,3% | 2 | 2 |
| 27/07 (seg) | FARMÁCIAS: O PREJUÍZO PODE SER EVITADO ANTES MESMO DO FURTO. | 952 | 8 | 10 | 16,8% | 2 | 5 |
| 03/08 (seg) | Ofereça uma solução que IMPEDE o crime, não apenas o registra. | 939 | 2 | 9 | 16,8% | 0 | 2 |
| 11/08 (ter) | ANTINTRUDER: A FUMAÇA QUE TIRA O CONTROLE DO INVASOR. | 935 | 1 | 6 | 17,0% | 5 | 3 |
| 17/08 (seg) | E SE VOCÊ PRECISASSE SE DEFENDER AGORA? | 933 | 2 | 10 | 15,7% | 3 | 5 |

\* Abertura do relatório CSV, sem filtro de bots. A abertura real, segundo o painel com filtro, é de cerca de 10%.

Nenhuma reclamação formal de spam foi registrada, mas entre os motivos de descadastro aparecem um "SPAM" e um "não me cadastrei".

### 5.2 O que os números dizem

1. **O melhor e-mail em clique foi o primeiro (9 cliques), e o segundo melhor foi o de produto (Antintruder, 5 cliques).** Quando o e-mail fala de algo concreto que o contato viu ou pode vender, alguém clica. Os e-mails temáticos da Copa (3 campanhas) ficaram em 2 cliques cada: chamam atenção na caixa de entrada, mas não levam a lugar nenhum.
2. **A queda de abertura é contínua e não depende do assunto.** Isso é sinal de fadiga de envio semanal para uma base fria, não de assunto ruim isolado.
3. **6 de 9 assuntos estão em caixa alta.** Caixa alta aumenta a chance de cair em promoções ou spam e passa tom de propaganda gritada, principalmente para diretor.
4. **Os bounces temporários se repetem em todo envio (6 a 18 por campanha).** São praticamente os mesmos endereços. É o grupo de 37 inscritos com 1 estrela que deve sair antes do próximo envio.
5. **A lista de Belém entrou sem validação**: 8 hard bounces no primeiro envio que ela recebeu.
6. **Não há rastreamento de conversão.** Receita atribuída é R$ 0 em tudo porque não existe loja ligada nem UTM padronizada chegando no CRM. Hoje não dá para saber se algum e-mail gerou venda.
7. **Organização interna:** campanhas chamadas "(copy 03)" e "Campanha de e-mail: Jul 27, 2026, 9:21 AM" tornam o relatório ilegível. Padronizar nome: `AAAA-MM-DD | Segmento | Tema`.

---

## 6. Plano de limpeza

Fazer antes de qualquer novo envio.

| Ação | Contatos | Como fazer no Mailchimp |
|---|---:|---|
| **Arquivar bounce recorrente** | 37 | Filtrar tag `Limpeza: bounce recorrente`, conferir no perfil de 2 ou 3 contatos que o histórico é de soft bounce e arquivar |
| **Revisar domínio suspeito** | 1 | Tag `Limpeza: dominio suspeito`. Se não houver abertura, arquivar |
| **Separar contatos internos** | 4 | Tag `Origem: Interno` (equipe BR Segurança, confirmado). Excluir dos segmentos de envio e usar só como lista de teste |
| **Apagar o campo CPF** | 303 com dado | Audience > Settings > Audience fields and merge tags. Não tem uso em e-mail e aumenta o risco LGPD |
| **Corrigir nome, cidade e UF** | 669 nomes, 291 UFs | Reimportar o arquivo `BR-Seguranca-reimportacao-tags.csv` com "Update existing contacts" marcado |
| **Validar a base restante** | 886 | Opcional, mas recomendado: passar os e-mails em um validador (ZeroBounce, NeverBounce ou similar) antes da campanha de reativação. Custo baixo para 900 contatos |
| **Validar toda lista nova antes de importar** | Regra fixa | Nenhuma lista de evento entra sem validação |
| **Regra de pôr do sol (sunset)** | Contínua | Quem não clicar em nada em 90 dias e não abrir nos últimos 5 envios sai dos envios regulares e entra no fluxo de despedida (seção 8.5) |

Tudo nesta tabela é **proposta para aprovação do cliente**. Nada será arquivado ou apagado sem autorização, como combinado na reunião.

Depois dessa limpeza a base ativa fica em torno de **886 contatos**. Parece menor, mas é a base que de fato recebe e-mail.

**Sobre autenticação do domínio:** conferir em Website > Domains se o domínio de envio está verificado e autenticado (SPF e DKIM) e se existe registro DMARC. A taxa de rejeição acima de 1,5% combinada com envio de domínio não autenticado é o caminho mais rápido para cair em spam no Gmail e no Outlook.

### 6.1 Plano contratado e o que ele muda

| Item | Situação (print da conta) |
|---|---|
| Plano | Standard |
| Contatos cobrados | 1.169 de 1.500 (331 livres) |
| Envios no ciclo atual | 225 de 18.000 |
| Próxima cobrança | R$ 94,97 em 18/10/2026 |
| Excedente | R$ 28,00 por mês a cada 150 contatos extras |
| E-mails criados / automações / formulários | 10 / 0 / 1 |

O que isso significa:

1. **O plano comporta tudo o que este documento propõe.** O Standard libera Customer Journeys com vários passos e ramificação, envio no melhor horário por contato e testes A/B. Não é preciso trocar de plano nem de ferramenta. O problema nunca foi a ferramenta, é que nenhum recurso dela está sendo usado: zero automações.
2. **Existem 223 contatos cobrados que não estão na audiência analisada.** A audiência "BR Security" tem 946 contatos contando descadastrados (os limpos não entram na cobrança). A conta cobra 1.169. As hipóteses são: uma segunda audiência na conta, contatos novos entrando pelo formulário ativo, ou uma importação feita depois do export. Os 225 envios já registrados neste ciclo, com o último e-mail em 17/08, reforçam que houve um disparo recente para um grupo de tamanho parecido. **Isso precisa ser verificado antes da limpeza**, em Audience > All contacts (trocar a audiência no seletor) e em Campaigns.
3. **Sobra pouco espaço para crescer.** São 331 contatos livres. A estratégia de construir base de usuário final com tráfego pago pode encher isso em poucas semanas. Arquivar descadastrados, bounces recorrentes e, depois, os inativos da despedida (8.6) é o que mantém a conta dentro da faixa atual sem pagar excedente. Contatos arquivados não contam na cobrança.
4. **A regra de pôr do sol deixa de ser só boa prática e vira economia.** Cada 150 contatos inativos mantidos custa R$ 28 por mês depois que a faixa estourar.

---

## 7. Segmentação

### 7.1 Tags aplicadas pelo arquivo de reimportação

| Grupo | Tags |
|---|---|
| Origem | `Origem: Exposec 2026`, `Origem: Abese Belem Jul26`, `Origem: Interno` |
| Perfil | `Perfil: Decisor`, `Perfil: Coordenacao`, `Perfil: Tecnico`, `Perfil: Comercial`, `Perfil: Outros`, `Perfil: Estudante/SENAI` |
| Mercado | `Mercado: Canal de seguranca`, `Mercado: Tecnologia e Telecom`, `Mercado: Usuario final`, `Mercado: Nao informado` |
| Evento | `Evento: Presente`, `Evento: Inscrito ausente` |
| Limpeza | `Limpeza: bounce recorrente`, `Limpeza: dominio suspeito` |

Daqui para frente, toda lista nova entra com a tag `Origem: <evento ou canal> <mês/ano>`. Isso resolve de vez o problema de origem.

### 7.2 Segmentos salvos para criar no Mailchimp

| Segmento | Regra | Tamanho aproximado | Uso |
|---|---|---:|---|
| **Usuário final** (prioridade) | Mercado: Usuario final | 133 | Conteúdo de dor por segmento (comércio, farmácia, indústria), prova do produto, pedido de visita ou demonstração |
| **Canal decisor** | Mercado: Canal de seguranca OU Tecnologia e Telecom + Perfil: Decisor | 389 | Envio mensal. Demanda do comércio que vai chegar, condição para parceiro instalador |
| **Canal técnico** | Mercado: Canal ou Tecnologia + Perfil: Tecnico ou Coordenacao | 234 | Conteúdo técnico, instalação, treinamento |
| **Canal comercial** | Mercado: Canal ou Tecnologia + Perfil: Comercial | 67 | Argumentos de venda e material pronto para o cliente final |
| **Belém presentes** | Origem: Abese Belem Jul26 + Evento: Presente | 122 | Ação regional, visita comercial |
| **Belém ausentes** | Evento: Inscrito ausente | 169 | Material do evento e convite para próxima ação |
| **Engajados** | Clicou em qualquer campanha nos últimos 90 dias OU abriu 2 das últimas 5 | A medir | Envio prioritário, lista de aquecimento de reputação |
| **Leads quentes** | Clicou em link de produto, tabela ou contato | A medir | Passar para o comercial em até 24h |
| **Inativos** | Não abriu nenhuma das últimas 5 e nunca clicou | A medir | Fluxo de reativação e depois despedida |

Os três últimos dependem de atividade por contato, que o relatório geral de campanhas não traz. Eles podem ser montados direto no Mailchimp com as condições "Campaign activity" (abriu, clicou, não abriu) e "Contact rating". Se quiser que eu monte a lista nominal de engajados e inativos, exporte a atividade de cada campanha (em cada relatório: Export > Opened, Clicked).

---

## 8. Fluxos de e-mail

Regras que valem para todos os fluxos:

* **Um e-mail, um objetivo, um botão.** Nada de três chamadas no mesmo e-mail.
* **Assunto em caixa normal**, até cerca de 50 caracteres, com texto de pré visualização preenchido.
* **Texto antes de imagem.** E-mail feito só de arte não carrega em parte das caixas corporativas e não conta a mensagem.
* **Remetente com nome de pessoa** (ex.: "Nome | BR Segurança"), e responder para um e-mail que alguém lê.
* **Todos os links com UTM**: `utm_source=mailchimp&utm_medium=email&utm_campaign=<nome do fluxo>`.
* **Personalização só depois da reimportação** que corrige o primeiro nome.
* **Frequência máxima:** 1 e-mail por semana por contato somando campanhas e automações.

As copies abaixo usam os produtos que já apareceram nos e-mails anteriores (Antintruder e Stop Now). O que estiver entre colchetes precisa de informação do cliente. **Todas são provisórias até a aprovação do novo slogan e da direção de mensagem pelo Carlos (seção 0.2).** Nenhuma usa "Interrompa".

### 8.1 Reativação da base (campanha em 3 envios, primeiro passo)

**Para quem:** toda a base limpa, começando pelo segmento Engajados e liberando o restante em 2 ou 3 dias, para aquecer a reputação depois de 6 semanas parado.
**Objetivo:** separar quem tem interesse de quem não tem, e reconectar o contato com a origem dele.

**E-mail 1 (dia 0)**
* Assunto: `Você esteve com a gente na Exposec` (versão Belém: `Nos conhecemos no evento da Abese em Belém`)
* Pré visualização: `E tem uma coisa que ficou faltando mostrar`
* Corpo: "Olá, \*|FNAME|\*. Você recebe nossos e-mails porque se cadastrou em [Exposec 2026 / evento da Abese em Belém]. Nos últimos meses mandamos bastante coisa, e sendo honesto, pouca coisa foi útil. A partir de agora vamos mandar menos e ir direto ao ponto: como impedir que o invasor leve alguma coisa, em vez de só gravar a cena. Se não fizer sentido para você, o link para sair está logo abaixo, sem ressentimento."
* Botão: `Quero ver como funciona na prática` (vídeo curto do Antintruder em ação)

**E-mail 2 (dia 4, para quem não clicou)**
* Assunto: `20 segundos que mudam o final de um assalto`
* Corpo: vídeo ou GIF da névoa ocupando o ambiente, 3 linhas sobre o que acontece com o invasor, 1 linha sobre o que isso significa para quem tem loja ou empresa (nada levado, nada para repor, operação no dia seguinte).
* Botão: `Assistir ao vídeo`

**E-mail 3 (dia 9, para quem ainda não clicou)**
* Assunto: `Posso continuar te mandando isso?`
* Corpo: "Quero mandar só para quem aproveita. Se quiser continuar recebendo conteúdo sobre [proteção ativa contra invasão], é só clicar abaixo. Se não, não precisa fazer nada, vamos parar de enviar em 30 dias."
* Botão: `Sim, quero continuar recebendo`
* Quem clica ganha a tag `Engajado: reativado`. Quem não clicou em nenhum dos 3 entra no fluxo 8.6.

### 8.2 Fluxo de boas vindas pós evento (automação permanente)

**Gatilho:** tag `Origem: <evento>` adicionada. Toda lista de feira ou evento passa a entrar por aqui, já validada.
**Objetivo:** aproveitar a janela de memória do evento, que dura poucos dias.

| # | Quando | Assunto | Conteúdo | Botão |
|---|---|---|---|---|
| 1 | Até 48h depois do evento | `Obrigado por passar no nosso estande, *|FNAME|*` (presentes) ou `Faltou você em [evento]` (ausentes) | Resumo do que foi mostrado, foto do estande, contato direto do representante | `Ver o que apresentamos` |
| 2 | Dia 3 | `Por que gravar o roubo não basta mais` | A tese da empresa: CFTV registra, névoa impede. Um caso real curto | `Ver o caso completo` |
| 3 | Dia 7 | `Quanto custa um furto que a câmera só filmou` | Versão principal, para Usuário final: conta simples de prejuízo evitado | `Falar com um especialista` |
| 3b | Dia 7 | `Seus clientes vão perguntar sobre isso` | Versão para Canal: o que é o produto e como atender quem pedir | `Quero ser parceiro instalador` |
| 4 | Dia 14 | `Uma pergunta rápida` | E-mail curto em texto puro, assinado por uma pessoa: "Faz sentido conversarmos 15 minutos sobre [produto] para a sua loja ou empresa?" (no Canal: "para os seus clientes") | Responder o e-mail ou `Agendar conversa` |

### 8.3 Nutrição do usuário final (prioridade, 1 e-mail a cada 2 semanas)

**Para quem:** segmento Usuário final e todo lead novo de usuário final que entrar por tráfego pago, LinkedIn ou parcerias. É o fluxo que cresce com a base nova.

| # | Tema | Assunto provisório | Conteúdo | Botão |
|---|---|---|---|---|
| 1 | Dor | `A câmera gravou. E a mercadoria?` | O limite do CFTV: registra, mas não evita a perda | `Ver como evitar` |
| 2 | Segmento | `Farmácia, loja, depósito: onde o furto dói mais` | Versão por setor (reaproveita a campanha de farmácias, agora no público certo) | `Ver o caso do meu setor` |
| 3 | Prova | `O que acontece nos primeiros 20 segundos` | Vídeo da névoa em ação e depoimento de cliente | `Assistir` |
| 4 | Objeção | `É seguro para as pessoas e para a mercadoria?` | Respostas às dúvidas comuns: saúde, resíduo, disparo acidental, seguro | `Tirar minha dúvida` |
| 5 | Oferta | `Uma visita técnica sem compromisso` | Convite para avaliação do local ou demonstração | `Agendar visita` |

### 8.4 Relacionamento com o canal (1 e-mail por mês)

**Para quem:** Canal decisor, Canal técnico e Canal comercial.
**Objetivo:** manter o canal informado e pronto para atender a demanda do comércio, sem gastar esforço de venda com quem a empresa não prioriza. Revisar este fluxo depois da definição do Carlos sobre o papel do integrador.

| Mês | Tema |
|---|---|
| 1 | O que é o produto e por que o comércio vai começar a perguntar sobre ele |
| 2 | Como funciona a instalação e onde não instalar (versão técnica) |
| 3 | Programa de parceiro instalador, se existir |

Em todos os fluxos, cada clique em oferta, visita ou agendamento adiciona a tag `Lead quente`.

### 8.5 Lead quente para o comercial

**Gatilho:** tag `Lead quente`.
**Ação:** automação envia e-mail de confirmação ao contato ("Recebemos seu interesse, [nome do vendedor] vai te chamar até amanhã") e o comercial recebe a lista diária. No Mailchimp isso pode ser feito com a notificação de tag por e-mail, integração com o CRM do cliente ou exportação diária do segmento.
**Meta:** contato do comercial em até 24h. Sem esse passo, o e-mail continua gerando clique e nenhuma venda.

### 8.6 Despedida (sunset)

**Gatilho:** entra no segmento Inativos, ou não clicou em nenhum e-mail da reativação.

* E-mail único. Assunto: `Vamos parar de te mandar e-mails`
* Corpo: "Percebemos que nossos e-mails não têm sido úteis para você. Vamos parar de enviar para não lotar sua caixa. Se quiser continuar recebendo, basta clicar abaixo."
* Botão: `Quero continuar`
* Quem não clicar em 14 dias é arquivado. Arquivar não apaga o histórico e reduz o custo do plano.

### 8.7 Belém (ação pontual)

O evento foi em julho, a lista é geral da Abese e 100% de empresas de segurança. Pela nova direção, Belém só vale uma ação se houver representante ou parceiro instalador no Pará. Se houver:

* **Presentes (122):** `Nos vimos no evento da Abese em Belém`, apresentação do produto e convite para demonstração local.
* **Ausentes (169):** a mesma apresentação, sem citar presença.

Se não houver, esses contatos seguem só o fluxo mensal do canal.

---

## 9. Calendário de implantação

| Semana | Ação |
|---|---|
| 1 | Localizar os 223 contatos cobrados fora da audiência analisada. Aprovação da limpeza pelo cliente. Limpeza (seção 6), apagar campo CPF, reimportação com tags, verificação do domínio, criação dos segmentos. Subir o segmento Usuário final e a lista geral como público de remarketing no Meta |
| 2 | Devolutiva do Carlos sobre slogan e papel do canal. Ajuste e aprovação das copies. Configurar UTM e nomes padronizados |
| 3 | Reativação, e-mails 1 e 2. Envio primeiro para Engajados, depois para o restante |
| 4 | Reativação, e-mail 3. Ação Belém, se houver parceiro no Pará |
| 5 | Ligar despedida e lead quente. Arquivar quem não reagiu |
| 6 | Ligar nutrição do usuário final, relacionamento mensal do canal e boas vindas (recebe os leads novos de tráfego pago e eventos) |
| 8 | Primeira revisão de resultados |

---

## 10. Metas e como medir

Com base no ponto de partida atual (abertura real ~10%, clique 0,23%):

| Indicador | Hoje | Meta em 60 dias | Onde ver |
|---|---:|---:|---|
| Taxa de clique | 0,23% | 1,5% ou mais | Painel de Marketing com filtro de bots |
| Taxa de rejeição | 1,6% | abaixo de 0,5% | Entrega por canal |
| Descadastro por envio | 0,3% a 0,5% | abaixo de 0,3% | Relatório da campanha |
| Leads quentes por mês | não medido | 10 ou mais | Segmento Lead quente |
| Novos contatos de usuário final por mês | 0 | Definir com a meta de tráfego | Tag de origem das campanhas pagas |
| Reuniões ou pedidos de tabela vindos de e-mail | não medido | Definir com o cliente | CRM, via UTM |

A abertura deixa de ser o indicador principal. Com o Apple Mail inflando os números, o que interessa é clique e lead passado para o comercial.

---

## 11. O que falta do cliente

1. **Evento de junho:** respondido, Exposec, visitantes do estande.
2. **Foco comercial:** respondido, público final, principalmente comércio. **Falta:** quem instala e atende o comerciante interessado (a própria BR Segurança ou integrador) e se existe programa de parceiro instalador.
3. **Devolutiva do Carlos** sobre slogan, direção de mensagem e papel do canal. Bloqueia o disparo das copies.
4. **Aprovação da limpeza** da seção 6.
5. **Excel original das listas** que a Monique ofereceu, para separar quem conversou no estande.
6. **Quem atende os leads** e em que CRM ou canal (WhatsApp, e-mail, planilha).
7. **Contatos a mais na conta:** o plano cobra 1.169 contatos, mas a audiência exportada tem 946 (sem os limpos). Descobrir de onde vêm os 223 de diferença (seção 6.1).
8. **Status do domínio de envio** (SPF, DKIM, DMARC).
9. **Material disponível:** vídeos de demonstração, casos de clientes, fotos de instalação. Os fluxos dependem disso para ter o que mostrar.
10. **Atividade por campanha** (Opened e Clicked de cada relatório) se quiser a lista nominal de engajados e inativos antes da reativação.
