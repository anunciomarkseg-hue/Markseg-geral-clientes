# BR Segurança
## Auditoria da base e estrutura de e-mail marketing (Mailchimp)
### Diagnóstico dos contatos, histórico de envios, limpeza, segmentação e fluxos

| Campo | Informação |
|---|---|
| **Cliente** | BR Segurança (público no Mailchimp: "BR Security") |
| **Ferramenta** | Mailchimp |
| **Base analisada** | 976 registros exportados: 924 inscritos, 22 descadastrados, 30 limpos (bounce) |
| **Envios analisados** | 9 campanhas regulares, de 22/06/2026 a 17/08/2026 |
| **Fontes** | Export completo da audiência, relatório de campanhas (CSV) e prints do Painel de Marketing e da Análise de Público |
| **Data** | Setembro de 2026 |

> Nenhum dado pessoal de contato está neste documento. Todos os números são agregados. A lista com as tags por contato foi gerada à parte, para reimportação no Mailchimp, e não fica no repositório.

---

## 1. Resumo executivo

A base é boa. O e-mail é que não está funcionando.

São 924 contatos inscritos, quase todos do mercado de segurança, com 444 decisores (diretores, CEOs, sócios, gerentes). Para uma empresa que vende solução de segurança para revenda e integração, é um público de alto valor. O problema está no que foi enviado para ele:

1. **Ninguém clica.** Em 90 dias foram 5.720 envios e 13 cliques reais (0,23%, com filtro de bots do próprio Mailchimp). Em 9 campanhas, a soma de cliques únicos é 27. Na prática, o e-mail não gera nenhuma ação comercial.
2. **A abertura real é metade do que o relatório mostra.** O CSV de campanhas mostra 16% a 26% de abertura, mas o painel com filtro de bots mostra 10,3%. A diferença é abertura automática (Apple Mail e filtros corporativos). E mesmo a abertura inflada caiu de 26,3% para 15,7% em 8 semanas.
3. **Conteúdo desalinhado com o público.** A base é majoritariamente de empresas de segurança (canal), mas campanhas como "Farmácias: o prejuízo pode ser evitado antes mesmo do furto" falam com o usuário final. Essa campanha teve o maior número de descadastros junto com "Stop Now" (5 cada).
4. **"Origem" no Mailchimp não serve para nada hoje.** 972 dos 976 contatos aparecem como "List Import". A origem real só foi recuperada cruzando data de importação, tags e campos do cadastro (seção 3).
5. **Higiene de lista fraca.** A lista não foi validada antes da importação: 16 hard bounces no primeiro envio, 30 contatos já limpos pelo Mailchimp e mais 37 inscritos com classificação 1 estrela, o padrão de quem dá bounce temporário em todo envio. A taxa de rejeição de 1,6% já está marcada como "precisa de atenção".
6. **A base está parada há 6 semanas.** O último envio foi em 17/08. Voltar a disparar para todo mundo de uma vez, com a mesma fórmula, vai repetir o resultado e piorar a reputação do remetente.
7. **Não existe nenhuma automação.** Todos os envios foram manuais. Zero fluxo de boas vindas, nutrição ou reengajamento.

**Recomendação central:** parar os envios em massa semanais, limpar a base, reimportar com tags de origem, perfil e mercado, e trocar para fluxos segmentados em que cada e-mail tem um único objetivo comercial mensurável (clique para falar com o comercial, pedir tabela de revenda, agendar demonstração).

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
| **Evento de junho** (lista de inscritos) | 19/06/2026 | 629 | 16 | 27 | Base nacional (SP 58%), com setor e cargo preenchidos. Mistura empresas de segurança, tecnologia e usuários finais |
| **Abese Belém Jul26** | 23/07/2026 | 291 | 6 | 3 | 100% Pará, 100% empresas de segurança. Tem o campo "Presente no Evento" |
| **Inclusão manual (Admin)** | 18/06, 06/07 e 17/08 | 4 | 0 | 0 | Provavelmente contatos internos ou de teste. Devem sair das métricas |

**Ponto que precisa ser confirmado com o cliente:** o primeiro e-mail enviado para a lista de junho foi "Obrigado pela sua presença!", mas só 2 dos 629 contatos têm "Presente no Evento = Sim". Ou o campo não foi preenchido nessa lista, ou o agradecimento foi enviado para quem se inscreveu e não foi. No segundo caso, isso explica parte dos 16 hard bounces e das 2 saídas logo no primeiro envio. Precisamos saber qual evento foi esse e se a lista é de inscritos ou de presentes.

No evento de Belém o dado existe: **122 presentes e 169 inscritos que não compareceram**. São dois públicos diferentes e devem receber mensagens diferentes.

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

1. **62% da base é canal de segurança.** O e-mail deve ser pensado primeiro como ferramenta de venda para revenda e integração: margem, diferencial frente à concorrência do integrador, suporte técnico, material de venda pronto.
2. **Só 14% é usuário final.** Campanhas de dor do cliente final (farmácia, varejo, furto) só fazem sentido para esse grupo, ou para o canal quando vêm embaladas como "argumento de venda que você pode usar com seu cliente".
3. **Tecnologia e Telecom (181) é o segmento mais ambíguo.** Pode ser integrador de CFTV que se classificou como tecnologia, ou pode ser operadora. Tratar como canal potencial e observar os cliques.
4. **Técnicos (204) querem outro conteúdo.** Instalação, especificação, comparação técnica, treinamento. Mandar para eles o mesmo e-mail comercial do diretor desperdiça o público.
5. **Concentração geográfica:** SP (364) e PA (293) somam 71% da base. Belém tem um diferencial raro: é uma base regional inteira do mesmo setor, ideal para ação comercial com representante local.

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
| **Separar contatos internos** | 4 | Tag `Origem: Interno/Admin`. Excluir dos segmentos de envio e usar só como lista de teste |
| **Apagar o campo CPF** | 303 com dado | Audience > Settings > Audience fields and merge tags. Não tem uso em e-mail e aumenta o risco LGPD |
| **Corrigir nome, cidade e UF** | 669 nomes, 291 UFs | Reimportar o arquivo `BR-Seguranca-reimportacao-tags.csv` com "Update existing contacts" marcado |
| **Validar a base restante** | 886 | Opcional, mas recomendado: passar os e-mails em um validador (ZeroBounce, NeverBounce ou similar) antes da campanha de reativação. Custo baixo para 900 contatos |
| **Validar toda lista nova antes de importar** | Regra fixa | Nenhuma lista de evento entra sem validação |
| **Regra de pôr do sol (sunset)** | Contínua | Quem não clicar em nada em 90 dias e não abrir nos últimos 5 envios sai dos envios regulares e entra no fluxo de despedida (seção 8.5) |

Depois dessa limpeza a base ativa fica em torno de **886 contatos**. Parece menor, mas é a base que de fato recebe e-mail.

**Sobre autenticação do domínio:** conferir em Website > Domains se o domínio de envio está verificado e autenticado (SPF e DKIM) e se existe registro DMARC. A taxa de rejeição acima de 1,5% combinada com envio de domínio não autenticado é o caminho mais rápido para cair em spam no Gmail e no Outlook.

---

## 7. Segmentação

### 7.1 Tags aplicadas pelo arquivo de reimportação

| Grupo | Tags |
|---|---|
| Origem | `Origem: Evento Jun26 (lista importada 19/06)`, `Origem: Abese Belem Jul26`, `Origem: Interno/Admin` |
| Perfil | `Perfil: Decisor`, `Perfil: Coordenacao`, `Perfil: Tecnico`, `Perfil: Comercial`, `Perfil: Outros`, `Perfil: Estudante/SENAI` |
| Mercado | `Mercado: Canal de seguranca`, `Mercado: Tecnologia e Telecom`, `Mercado: Usuario final`, `Mercado: Nao informado` |
| Evento | `Evento: Presente`, `Evento: Inscrito ausente` |
| Limpeza | `Limpeza: bounce recorrente`, `Limpeza: dominio suspeito` |

Daqui para frente, toda lista nova entra com a tag `Origem: <evento ou canal> <mês/ano>`. Isso resolve de vez o problema de origem.

### 7.2 Segmentos salvos para criar no Mailchimp

| Segmento | Regra | Tamanho aproximado | Uso |
|---|---|---:|---|
| **Canal decisor** | Mercado: Canal de seguranca OU Tecnologia e Telecom + Perfil: Decisor | 389 | Oferta de revenda, condição comercial, convite para reunião |
| **Canal técnico** | Mercado: Canal ou Tecnologia + Perfil: Tecnico ou Coordenacao | 234 | Conteúdo técnico, instalação, treinamento |
| **Canal comercial** | Mercado: Canal ou Tecnologia + Perfil: Comercial | 67 | Argumentos de venda e material pronto para o cliente final |
| **Usuário final** | Mercado: Usuario final | 133 | Dor do segmento (varejo, farmácia, indústria) com indicação de parceiro |
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

As copies abaixo usam os produtos que já apareceram nos e-mails anteriores (Antintruder e Stop Now). O que estiver entre colchetes precisa de informação do cliente.

### 8.1 Reativação da base (campanha em 3 envios, primeiro passo)

**Para quem:** toda a base limpa, começando pelo segmento Engajados e liberando o restante em 2 ou 3 dias, para aquecer a reputação depois de 6 semanas parado.
**Objetivo:** separar quem tem interesse de quem não tem, e reconectar o contato com a origem dele.

**E-mail 1 (dia 0)**
* Assunto: `Você esteve com a gente em [evento]`
* Pré visualização: `E tem uma coisa que ficou faltando mostrar`
* Corpo: "Olá, \*|FNAME|\*. Você recebe nossos e-mails porque se cadastrou em [nome do evento, cidade]. Nos últimos meses mandamos bastante coisa, e sendo honesto, pouca coisa foi útil para quem trabalha com segurança todo dia. A partir de agora vamos mandar menos e ir direto ao ponto: soluções que impedem a invasão em vez de só gravar, e como a sua empresa pode vender isso com margem. Se não fizer sentido para você, o link para sair está logo abaixo, sem ressentimento."
* Botão: `Quero ver como funciona na prática` (vídeo curto do Antintruder em ação)

**E-mail 2 (dia 4, para quem não clicou)**
* Assunto: `20 segundos que mudam o final de um assalto`
* Corpo: vídeo ou GIF da névoa ocupando o ambiente, 3 linhas sobre o que acontece com o invasor, 1 linha sobre o que isso significa para o cliente do integrador (menos perda, menos chamado, cliente fiel).
* Botão: `Assistir ao vídeo`

**E-mail 3 (dia 9, para quem ainda não clicou)**
* Assunto: `Posso continuar te mandando isso?`
* Corpo: "Quero mandar só para quem aproveita. Se quiser continuar recebendo conteúdo sobre [proteção ativa / revenda de soluções antintrusão], é só clicar abaixo. Se não, não precisa fazer nada, vamos parar de enviar em 30 dias."
* Botão: `Sim, quero continuar recebendo`
* Quem clica ganha a tag `Engajado: reativado`. Quem não clicou em nenhum dos 3 entra no fluxo 8.5.

### 8.2 Fluxo de boas vindas pós evento (automação permanente)

**Gatilho:** tag `Origem: <evento>` adicionada. Toda lista de feira ou evento passa a entrar por aqui, já validada.
**Objetivo:** aproveitar a janela de memória do evento, que dura poucos dias.

| # | Quando | Assunto | Conteúdo | Botão |
|---|---|---|---|---|
| 1 | Até 48h depois do evento | `Obrigado por passar no nosso estande, *|FNAME|*` (presentes) ou `Faltou você em [evento]` (ausentes) | Resumo do que foi mostrado, foto do estande, contato direto do representante | `Ver o que apresentamos` |
| 2 | Dia 3 | `Por que gravar o roubo não basta mais` | A tese da empresa: CFTV registra, névoa impede. Um caso real curto | `Ver o caso completo` |
| 3 | Dia 7 | `Quanto um integrador ganha revendendo [produto]` | Modelo de revenda, margem, suporte, material de venda. Só para Canal | `Quero a tabela de revenda` |
| 3b | Dia 7 | `Quanto custa um furto que a câmera só filmou` | Versão para Usuário final, com conta simples de prejuízo evitado | `Falar com um especialista` |
| 4 | Dia 14 | `Uma pergunta rápida` | E-mail curto em texto puro, assinado por uma pessoa: "Faz sentido conversarmos 15 minutos sobre [produto] para a sua carteira de clientes?" | Responder o e-mail ou `Agendar conversa` |

### 8.3 Nutrição do canal (automação contínua, 1 e-mail a cada 2 semanas)

**Para quem:** Canal decisor, Canal técnico e Canal comercial, cada um com sua versão.

| Tema | Decisor | Técnico | Comercial |
|---|---|---|---|
| 1. Diferencial | Por que proteção ativa aumenta ticket e fidelização | Como a névoa funciona e onde não instalar | 3 frases que convencem o cliente final |
| 2. Aplicação por segmento | Farmácias, varejo, depósitos: onde está a demanda | Dimensionamento por metragem | Argumento pronto por segmento (reaproveita o e-mail de farmácias) |
| 3. Prova | Caso de parceiro que vendeu | Vídeo de instalação | Depoimento de cliente final |
| 4. Oferta | Condição para novos parceiros | Convite para treinamento técnico | Kit de material de venda |
| 5. Integração | Integração com alarme e monitoramento existente | Esquema de ligação com central de alarme | Como oferecer como adicional do contrato de monitoramento |

Cada clique em link de oferta, tabela ou agendamento adiciona a tag `Lead quente`.

### 8.4 Lead quente para o comercial

**Gatilho:** tag `Lead quente`.
**Ação:** automação envia e-mail de confirmação ao contato ("Recebemos seu interesse, [nome do vendedor] vai te chamar até amanhã") e o comercial recebe a lista diária. No Mailchimp isso pode ser feito com a notificação de tag por e-mail, integração com o CRM do cliente ou exportação diária do segmento.
**Meta:** contato do comercial em até 24h. Sem esse passo, o e-mail continua gerando clique e nenhuma venda.

### 8.5 Despedida (sunset)

**Gatilho:** entra no segmento Inativos, ou não clicou em nenhum e-mail da reativação.

* E-mail único. Assunto: `Vamos parar de te mandar e-mails`
* Corpo: "Percebemos que nossos e-mails não têm sido úteis para você. Vamos parar de enviar para não lotar sua caixa. Se quiser continuar recebendo, basta clicar abaixo."
* Botão: `Quero continuar`
* Quem não clicar em 14 dias é arquivado. Arquivar não apaga o histórico e reduz o custo do plano.

### 8.6 Belém (ação pontual)

O evento foi em julho, então o timing de pós evento já passou. Uma única ação regional:

* **Presentes (122):** `Novidade para as empresas de segurança de Belém`, convite para demonstração local ou visita do representante na região.
* **Ausentes (169):** `O que você perdeu na Abese Belém`, vídeo ou material do evento e o mesmo convite.

---

## 9. Calendário de implantação

| Semana | Ação |
|---|---|
| 1 | Limpeza (seção 6), apagar campo CPF, reimportação com tags, verificação do domínio, criação dos segmentos |
| 2 | Produção das copies e artes. Configurar UTM e nomes padronizados |
| 3 | Reativação, e-mails 1 e 2. Envio primeiro para Engajados, depois para o restante |
| 4 | Reativação, e-mail 3. Ação Belém |
| 5 | Ligar despedida e lead quente. Arquivar quem não reagiu |
| 6 | Ligar nutrição do canal e boas vindas pós evento (fica pronta para a próxima feira) |
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
| Reuniões ou pedidos de tabela vindos de e-mail | não medido | Definir com o cliente | CRM, via UTM |

A abertura deixa de ser o indicador principal. Com o Apple Mail inflando os números, o que interessa é clique e lead passado para o comercial.

---

## 11. O que falta do cliente

1. **Qual foi o evento de junho** e se a lista é de inscritos ou de presentes.
2. **Portfólio e modelo de venda:** confirmar se o foco é revenda para integradores (Antintruder, Stop Now e outros) e se existe tabela ou programa de parceiros.
3. **Quem atende os leads** e em que CRM ou canal (WhatsApp, e-mail, planilha).
4. **Plano do Mailchimp:** se é Essentials ou Standard. Customer Journeys com ramificação e múltiplos passos dependem do plano.
5. **Status do domínio de envio** (SPF, DKIM, DMARC).
6. **Material disponível:** vídeos de demonstração, casos de clientes, fotos de instalação. Os fluxos dependem disso para ter o que mostrar.
7. **Atividade por campanha** (Opened e Clicked de cada relatório) se quiser a lista nominal de engajados e inativos antes da reativação.
