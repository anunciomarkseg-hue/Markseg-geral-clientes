# CCONet · Reestruturação dos três sites

**Registro da sessão de trabalho**
Agência: MarkSeg · Cliente: CCONet Sistemas (grupo CCONet + CPN Tecnologia)
Período: 06/10/2026 a 30/10/2026

---

> **Sobre este documento.** É o registro do que foi pedido, do que foi produzido e do que
> foi decidido ao longo da sessão. Não é transcrição literal: a primeira parte da conversa
> foi compactada pelo sistema e está reconstruída a partir do resumo da sessão. Da seção
> "Layouts" em diante, o registro acompanha a conversa pedido a pedido.

---

## Índice

1. [Contexto do projeto](#1-contexto-do-projeto)
2. [Fase 1 · Auditorias técnicas](#2-fase-1--auditorias-técnicas)
3. [Fase 2 · Reunião e nomenclatura](#3-fase-2--reunião-e-nomenclatura)
4. [Fase 3 · Copy dos três sites](#4-fase-3--copy-dos-três-sites)
5. [Fase 4 · Conferência contra os materiais do cliente](#5-fase-4--conferência-contra-os-materiais-do-cliente)
6. [Fase 5 · Layouts](#6-fase-5--layouts)
7. [Decisão de arquitetura do muralha.digital](#7-decisão-de-arquitetura-do-muralhadigital)
8. [Entregáveis](#8-entregáveis)
9. [Decisões de design e por quê](#9-decisões-de-design-e-por-quê)
10. [Achados e correções, inclusive erros meus](#10-achados-e-correções-inclusive-erros-meus)
11. [Pendências abertas](#11-pendências-abertas)
12. [Notas técnicas](#12-notas-técnicas)

---

## 1. Contexto do projeto

O grupo tem três domínios no ar:

| Domínio | O que é hoje | O que passa a ser |
|---|---|---|
| `cconet.com.br` | Site institucional + produtos | Hub institucional e da plataforma HUB4 Cities |
| `muralha.digital` | Site da marca Muralha Digital, vendendo a plataforma inteira | Página profunda da vertical de mobilidade (HUB4 Mobility) |
| `cpntecnologia.com.br` | Vende os mesmos produtos de software da CCONet | Site da integradora de infraestrutura |

**Duas forças movem a reestruturação, e são independentes:**

1. **Mudança de nomenclatura.** O documento "Soluções em Tecnologia para o Setor Público",
   de 16/09/2026, renomeou o portfólio inteiro para a família HUB4.
2. **Disputa de marca.** A CCONet registrou "Muralha Digital", um concorrente contestou
   judicialmente a titularidade e a CCONet perdeu em primeira instância. O concorrente
   detém o domínio equivalente em `.com.br`. Enquanto o processo corre, a orientação do
   cliente é não utilizar a marca.

**Guardrail mais importante do projeto**, pedido explícito do João na reunião:

> A transição nunca é comunicada como troca. Nada de "agora somos", "antiga Muralha
> Digital" ou "passa a se chamar". O nome novo ocupa o espaço sem nota de rodapé.
> Comunicar a troca sinaliza derrota e entrega narrativa ao concorrente.

---

## 2. Fase 1 · Auditorias técnicas

### Pedido

> "auditoria de site, preciso que faça uma auditoria detalhada do site do cliente e traga
> os ajustes necessário tanto de velocidade, carregamento quando de SEO, usabilidade,
> design e caso tenham botoes sem funcioanr traga tbm https://www.cconet.com.br/"

Depois, o mesmo para `muralha.digital`, com a instrução: *"não traga nada falando da
empresa anterior"*.

### Método

A API do PageSpeed Insights estourou a cota, então medi os **106 e 116 ativos de cada
site diretamente com curl**. O navegador do contêiner não tem rede, o que forçou análise
por cabeçalho HTTP em vez de renderização. Usei também:

- Qualys SSL Labs API para verificação independente de TLS
- RDAP (`rdap.registro.br`) para titularidade de domínio
- Análise de `Cache-Control`, `Content-Encoding`, versão HTTP e cadeia de redirecionamento

### Principais achados

**Comuns aos dois sites:**
- Nenhuma ferramenta de medição instalada. Sem GA4, sem Tag Manager, sem Search Console
- Formulários quebrados: campo de telefone declarado como URL, que impede o envio; outro
  gravando e-mail no campo de mensagem
- Telefones placeholder `tel:4100000000`
- HTTP/2 e cache de navegador desligados no Apache
- Hierarquia de títulos montada por estética, não por estrutura

**Específicos do muralha.digital:**
- Certificado SSL cobre só o domínio sem `www`. Quem digita `www` recebe alerta vermelho
- Dois botões "Ler Matéria" da home apontam para URLs antigas que retornam 404.
  São justamente os dois cases de sucesso
- Sem plugin de SEO, o que explica a ausência de meta description, Open Graph e dado
  estruturado nas 13 páginas
- 50 das 60 imagens sem texto alternativo
- Seis posts publicados, todos na mesma semana de agosto de 2024

**Específicos do cpntecnologia.com.br** (auditado depois, na fase de copy):
- Permalinks quebrados: páginas internas respondem em `/index.php/cpntecnologia/...`
- O mais lento dos três. Primeira resposta em 3,3 s contra 0,5 s do cconet.com.br
- 44 arquivos de CSS no cabeçalho
- Sem telefone, e-mail ou redes sociais em toda a home. Só um formulário
- WordPress 6.8.11 e Elementor 3.32.3, versões mais antigas que as dos outros dois

**Correção que devo ao cliente:** reportei inicialmente que muralha.digital só tinha
português. O `/en/` responde 200, declara `lang="en-US"`, tem hreflang e é indexável,
mas serve conteúdo em português. É pior do que o reportado. O documento de auditoria
daquele site **ainda não foi atualizado com esse achado**.

---

## 3. Fase 2 · Reunião e nomenclatura

### Insumos recebidos

- Transcrição da reunião de 29/09/2026
- PDF de nomenclatura HUB4 Cities
- Apresentação institucional (`apresentacao_2.pptx`)
- Manual do HUB4 Campus (`Hub4_Campus_Professor_Manual_7.pptx`)
- Vídeo institucional de 73 segundos

### Ordem de trabalho definida pelo cliente

> "preciso que primeiro organize todo o conteúdo copy textos do novo site, lembre-se de
> estar alinhado ao documento e com o que foi solicitado em reunião, depois disso criamos
> o desing das páginas do novo site, por fim, mandamos para ele aprovar, após tudo isso
> antes da mudança resolvemos questoes do ga4"

### Tabela de-para, o achado mais crítico

| Nome antigo | Destino HUB4 | Status |
|---|---|---|
| `/muralha-digital/` | **Dissolve-se em quatro módulos**: VMS, Face, Mobility e Command | crítico |
| Muralha Escolar | HUB4 Campus | confirmado na reunião |
| `/multiagencia/` | HUB4 Command | a confirmar |
| `/modulo-mobile/` | App CCONet | a confirmar |
| `/mapa-do-crime/` | HUB4 Security, relatórios | a confirmar |
| SOS Rural · SOS Escola · 199 Cidadão | sem equivalente no documento | perguntar |
| HUB4 Insight IA | novo, não existe hoje | novo |
| HUB4 Administração | novo, não existe hoje | novo |

> "Muralha Digital" não tem substituto de um para um: o que era um produto vira quatro
> módulos. Isso muda a conversa comercial, não só a palavra.

### Decisões registradas da reunião

- O domínio `muralha.digital` continua no ar, reposicionado como mobilidade urbana
- Entra uma página de ecossistema no cconet.com.br
- O site precisa mostrar que o grupo também entrega infraestrutura
- O João ficou de subir no grupo: logos atualizadas, imagens da empresa, prints das telas
  do sistema e referências de sites. Também ficou de buscar o acesso ao Google Meu Negócio

### Identificação do terceiro site

Não foi dado nome nem domínio da integradora. Na transcrição ela aparece ora como "CPM",
ora como "CPN". Cheguei a ela assim:

1. RDAP de `cconet.com.br` → titular **Cleverson Poitevin**, o mesmo "Cleverson" que o
   João menciona, com contato técnico de identificador **CPN68**
2. Busca → **CPN Informática / CPN Tecnologia LTDA**, CNPJ 73.327.280/0001-10
3. Endereço: Rua Terra Rica, 449, Emiliano Perneta, Pinhais, o mesmo que aparece no site
   da CCONet
4. `cpninformatica.com.br` redireciona para `www.cpntecnologia.com.br`, que está no ar

**A identificação é consistente mas foi deduzida, não informada. Precisa de confirmação.**

### Achado que destravou os outros documentos

Em duas copies anteriores ficaram marcações "verificar" nos números institucionais. O site
da CPN os publica:

- 7 estados
- Mais de 30 municípios
- Mais de 5 milhões de cidadãos
- Desde 1993, ou seja 33 anos em 2026

Duas ressalvas: o rodapé marca Copyright 2023, então podem estar três anos defasados; e
são números do grupo, não da CCONet isolada.

### Alerta jurídico

O site da CPN exibe **quatro marcas com ®**, publicadas há pelo menos dois anos:

- `Muralha Digital®` · marca em disputa judicial
- `153 Cidadão®` · verificar se há registro
- `SOS Escola®` · verificar se há registro
- `SMART CITY®` · usado como "conceitos SMART CITY®", que é termo genérico de mercado

---

## 4. Fase 3 · Copy dos três sites

### cconet.com.br · 16 páginas

Versão 2, reescrita depois da conferência contra os materiais. Home, A CCONet, as oito
verticais HUB4, cases, integradores, contato, FAQ por página e mapa de redirecionamentos
das 28 URLs.

### muralha.digital · 8 páginas

Home, Leitura de placas, Inteligência veicular, Análise de tráfego, Para o setor público,
Cases, Blog, Contato. Mapa de redirecionamentos das 13 URLs.

Regra de fronteira com o site da CCONet, para os dois não competirem pela mesma busca:

- `cconet.com.br/hub4-mobility/` → resumo dentro do ecossistema
- `muralha.digital` → a página profunda, para quem procura leitura de placas e para a
  secretaria de trânsito, que não é o mesmo comprador da secretaria de segurança

### cpntecnologia.com.br · 7 páginas

Escritas sobre uma decisão de arquitetura que precisa ser tomada antes:

**Hipótese A, recomendada e seguida pela copy.** A CPN para de vender software e passa a
vender a execução física: poste, câmera, conectividade, obra, projeto e manutenção.

**Hipótese B.** A CPN é a holding institucional do grupo, e a CCONet vira puramente marca
de produto. Também é coerente, mas obriga a reescrever parte da copy do cconet.com.br.

---

## 5. Fase 4 · Conferência contra os materiais do cliente

O cliente enviou a apresentação institucional, o manual do HUB4 Campus e um vídeo, com o
pedido de conferir se a copy estava alinhada.

### Correções que isso gerou

**HUB4 Campus foi reescrito do zero.** A copy v1 tratava o módulo como segurança e
controle de acesso, que é o que o PDF de nomenclatura descreve. O manual mostra uma
plataforma de gestão, comunicação e segurança, descrita por eles como "o sistema nervoso
central da sua instituição". Adotei a estrutura do slide 9 do manual: três perfis, três
visões.

**Grafia da marca.** Eu havia recomendado "HUB 4" separado, para preservar o trocadilho
com "hub for". A logo oficial escreve `hub4` colado. Corrigi em toda a copy e nos slugs.

**Duas biometrias diferentes, nunca descritas como uma só.** Risco de afirmação falsa:

| Tipo | Onde roda | "Zero uploads" é verdade? |
|---|---|---|
| Autenticação no app | Face ID ou digital, processada no aparelho | Sim |
| Reconhecimento facial nas câmeras | Compara contra bibliotecas no servidor | **Não** |

A mesma ambiguidade aparece no material do cliente, num slide intitulado "Conformidade
Absoluta", que é o lugar menos indicado para uma imprecisão.

**Frase proibida na apresentação.** O slide 3 do módulo de mobilidade traz como subtítulo
"EVOLUÇÃO DA MURALHA DIGITAL". É exatamente o que o guardrail do João proíbe. Sinalizado
para sair também da apresentação.

### Botão de pânico · duas versões, ambas destacadas

O cliente pediu: *"pode trazer as duas e deixe destacado que eles precisam validar a
informação"*.

- **Versão A**, fonte manual do HUB4 Campus slide 4: o alerta chega à gestão da instituição
- **Versão B**, fonte apresentação institucional slide 12: vai direto à Central de Operações

A B é mais forte comercialmente e, se for verdadeira, é o diferencial que nenhum sistema
de segurança escolar privado oferece. As duas podem estar certas em contextos diferentes:
escola municipal com convênio aciona a guarda, instituição privada aciona a própria gestão.

---

## 6. Fase 5 · Layouts

### 6.1 Home da CCONet

**Briefing:**

> "escolha a fonte inter, manter a paleta de cores da logo, botoes pode trazer em um
> degrade com cores da marca, traga um design cleam, minimalista, estilo tecnologico em
> linhas retas e bordas levemente arredondadas. priorizar um ar premium e sofisticado"

**Iterações, na ordem em que foram pedidas:**

1. Cards da seção hub4cities em degradê escuro, com a logo de cada hub no lugar dos ícones
2. Fundo degradê no rodapé e na barra de números, essa última como linha do tempo
3. Logo hub4cities alinhada à direita do texto, não abaixo
4. Reduzir as duas logos e acrescentar ícones de Facebook, Instagram e YouTube
5. Unificar o arredondamento: todos os cards no mesmo raio dos botões
6. A tag `HUB4 CITIES` antes do título também, que era pílula e virou 10px
7. Trocar a caixa com linha azul lateral da seção "Cada avanço chegou em caixa separada"
   por um fechamento editorial em duas colunas, sem moldura
8. Reduzir as logos dentro dos cards de módulo, de 31px para 21px
9. Dar respiro às colunas das três gerações, que estavam coladas na divisória
10. Trocar o card "HUB4 Command · fila unificada" por outra coisa, por estar com
    "muito cara de IA"
11. Alinhar o espaçamento do esquema que substituiu o card
12. Remover todos os travessões do site

**A troca do card falso por um esquema.** O card original era uma janela de aplicativo
simulada: três bolinhas imitando o Mac, feed inventado com horários fictícios e barrinhas
de severidade. Além do clichê visual, eram alertas que eu inventei, não telas reais do
produto. Substituí por um diagrama de arquitetura com roteamento ortogonal:

```
O QUE A CIDADE CAPTA
[Câmera] [Leitura de placas] [Botão SOS] [Agente em campo]
    └──────────┴──────┬──────┴───────────┘
                      ↓
        ╔═══════════════════════════════╗
        ║  BASE ÚNICA                   ║
        ║  Um banco relacional e        ║
        ║  georreferenciado             ║
        ╚═══════════════════════════════╝
                      ↓
    ┌─────────────────┼─────────────────┐
[Despacho]   [Relatório do mês]   [Painel do gestor]
                           O QUE A OPERAÇÃO DEVOLVE
```

**Remoção dos travessões.** Eram cinco no texto visível mais um em comentário de código.
Em nenhum caso só apaguei o sinal: reescrevi a frase, porque tirar o travessão e deixar o
resto produz vírgula empilhada ou frase truncada.

### 6.2 Home da CPN Tecnologia

**Briefing:** *"gere um leyout totalmente diferente para o site cpn seguindo a copy
produzida. lembre-se deve ser bem diferente do site cconet"*

Busquei a logo real da CPN no site deles e gerei a versão clara para fundo escuro.

**Iterações:**

1. Tirar a barra de dados (fundação, alcance, municípios), por ser "muito característico
   de IA", e trazer os números de outra forma e em outro lugar
2. Trocar o laranja por `#59B2C0`
3. Tirar a régua antes do rótulo do hero e reduzir as linhas divisórias da página

**A barra de números virou declaração editorial:**

> Em **33 anos**, a CPN projetou e instalou infraestrutura em mais de **30 municípios** de
> **7 estados**, em cidades onde vivem mais de **5 milhões** de pessoas.

Posicionada logo depois da ficha de chamado, onde o número deixa de ser enfeite e vira
resposta: ninguém assume, e a CPN assume há 33 anos.

**Redução de linhas.** A página tinha cerca de 50 fios divisores. Ficaram 4. O que
substituiu cada um:

| Onde | Antes | Agora |
|---|---|---|
| Marcador de seção | Régua de 2px | O número em Archivo 800 grande |
| As 6 frentes | 7 fios horizontais | Zebra, linhas alternadas |
| Perguntas | 5 fios | Blocos empilhados com 4px de folga |
| O grupo | Caixa com contorno | Painéis preenchidos com respiro |
| Parceiros | Grade com 17 fios | Seis blocos com fundo e folga |
| Cabeçalho, hero, rodapé | 4 bordas | Mudança de cor de fundo |

Os quatro que ficaram são deliberados: a barra de acento no topo, que é assinatura de
marca, e os três da ficha de chamado, onde o fio tem função porque o bloco é um formulário.

### 6.3 Home do HUB4 Mobility

**Três versões.**

**v1.** Bege quente, Space Grotesk, laranja queimado, cantos em pílula. O cliente apontou:
*"tá muito parecido com os outros, pode mudar o layout?"*

Ele tinha razão. Eu havia trocado cor, fonte e arredondamento, mas o esqueleto era idêntico
aos outros dois: cabeçalho fixo com menu, hero em duas colunas com desenho ao lado, grade
de três cards, painel escuro, sanfona de FAQ e rodapé de quatro colunas.

**v2, arquitetura refeita:**

| | Antes, e nos outros dois | Agora |
|---|---|---|
| Topo | Barra fixa com menu e botão | Só logo e um link |
| Navegação | Menu horizontal | Índice em pontos na borda direita |
| Hero | Duas colunas | Centralizado, largura total |
| Peça principal | Desenho dentro de card | Faixa de via de ponta a ponta da tela |
| Problema | Rótulo, título, parágrafo | Texto em duas colunas, estilo revista |
| Três frentes | Grade de cards | Faixas alternadas de largura total |
| Cadeia de 5 passos | Lista vertical | Sequência horizontal |
| FAQ | Sanfona | Perguntas abertas em duas colunas |
| Rodapé | Quatro colunas | Uma faixa só |

**v3, versão escura com fotos de fundo.** Pedido: *"essa cor nao tem nada a ver com o
cliente, façå uma versão do site todos escuro, com imagens no fundo como detalhe, nao
muito visível"*.

Acento passou a ser o teal da própria logo, `#0D94A6`, com `#2FBDD0` para texto sobre
fundo escuro. Quatro fotos reais do cliente, escurecidas, dessaturadas e banhadas no teal,
aplicadas com máscara de gradiente entre 26% e 40% de opacidade:

| Onde | Foto | Por quê |
|---|---|---|
| Abertura | Rotatória de Pinhais com poste e câmera | Trânsito real, município real |
| Integração | Central de operações com videowall | É o que a seção descreve |
| Case | Viaturas da Guarda Civil Municipal | A seção fala de duas guardas |
| Fecho | Outro corte da rotatória de Pinhais | "Veja com os dados da sua cidade" |

**Duas trocas feitas de propósito.** A primeira escolha para o fecho era um skyline noturno
do site atual do muralha.digital, mas são as Torres Petronas, em Kuala Lumpur. Banco de
imagem genérico de "smart city" num site que vende para prefeitura brasileira enfraquece o
argumento. A segunda era um operador em mapa de calor cujo colete dizia POLICE em inglês, e
guarda municipal não é polícia.

**Um recorte necessário.** A foto da central é um banner do site da CPN e trazia o texto
"Gestores Públicos" embutido, que aparecia como fantasma atrás do conteúdo. Recortei só a
área do videowall.

---

## 7. Decisão de arquitetura do muralha.digital

### A pergunta do cliente

> "o site muralha digital vai ser substituida por conta do termo muralha digital isso?
> questao de registro de marca, mas pq fizemos um site voltado apenas a hub4mobily?"

E, depois da primeira resposta:

> "mas o site muralha.digital nao foca em apenas um serviço, e nao tem nada a ver com o
> mobility, verifique o site atual"

### O que a verificação mostrou

Fui ao site no ar em 13/10. A página `/funcionalidades/` vende:

| O que está publicado | Destino HUB4 |
|---|---|
| Leitura de placa e controle de acesso de veículos | Mobility |
| Detecção de veículos clonados em bases distintas | Mobility |
| Detecção e reconhecimento humano e facial | **Face** |
| Reconhecimento de características pessoais | **Face ou VMS** |
| Cruzamento de dados de pessoas, veículos e crimes | **Command** |
| Muralha Escolar | **Campus** |
| App Módulo Mobile | **App CCONet** |
| App 153 Cidadão | **Apps do cidadão** |
| App SOS Escola | **Campus** |

E `/setor-publico/` abre com "Soluções em Gestão para Smart Cities", enquanto o rodapé se
apresenta como "a maior fabricante de soluções em gestão para a Segurança Pública do
Brasil". Isso é linguagem de plataforma, não de produto.

**Conclusão: "Muralha Digital" era o nome guarda-chuva da plataforma inteira, o antecessor
do HUB4 Cities. Não era o nome antigo do módulo de mobilidade.**

### O custo da decisão

| Número | O que é |
|---|---|
| 13 | URLs no site hoje |
| 8 | migram para o cconet.com.br |
| 5 | permanecem no domínio |
| 4 de 6 | funcionalidades saem |

### As três opções levadas ao cliente

**A, recomendada e mantida.** Domínio vira o site do HUB4 Mobility. O argumento que a
sustenta não é a semelhança entre nome e assunto, e sim que **mobilidade é a única vertical
com comprador separado**, a secretaria de trânsito.

**B.** Domínio continua sendo o site da plataforma. Compete de frente com o cconet.com.br e
mantém a marca contestada colada na plataforma inteira.

**C.** Aposentar o domínio e redirecionar cada página para a vertical correspondente.
Respeita mais a realidade do produto, mas desligar o domínio durante uma disputa de marca é
sinal de recuo, o oposto do que o João pediu.

**Decisão do cliente:** manter a opção A.

---

## 8. Entregáveis

Todos gerados e enviados. Caminho no contêiner da sessão:
`/tmp/claude-0/-home-user-Markseg-geral-clientes/50c6e95b-ec25-5407-9df8-5bb84c0fc6d0/scratchpad/`

| Arquivo | Páginas | Conteúdo |
|---|---|---|
| `Copy-Site-CCONet-v2.pdf` | 35 | Copy das 16 páginas, FAQ e mapa de 28 URLs |
| `Copy-Site-Muralha-Digital.pdf` | 17 | Copy das 8 páginas e mapa de 13 URLs |
| `Copy-Site-CPN-Tecnologia.pdf` | 16 | Copy das 7 páginas, nas duas hipóteses |
| `Decisao-Arquitetura-Muralha.pdf` | 8 | Comparativo das três opções |
| `Layout-Home-CCONet.pdf` | 1 | Folha contínua 1440 × 6370px |
| `Layout-Home-CPN-Tecnologia.pdf` | 1 | Folha contínua 1440 × 5985px |
| `Layout-Home-HUB4-Mobility.pdf` | 1 | Folha contínua 1440 × 5806px |

**Layouts publicados como páginas navegáveis:**

- CCONet · https://claude.ai/artifact/WQr2gsWj8s3LMMBdGtQnZ3
- CPN Tecnologia · https://claude.ai/artifact/DJ81NvaH9K9Nm6zKYicSbv
- HUB4 Mobility · https://claude.ai/artifact/9uRjTqyJVbLdX3fr7RSkj3

---

## 9. Decisões de design e por quê

Os três layouts precisam ser reconhecíveis como do mesmo grupo sem se confundirem. A
diferenciação está na estrutura, na tipografia e na geometria, não só na cor.

| | CCONet | CPN Tecnologia | HUB4 Mobility |
|---|---|---|---|
| **Fundo** | Claro, cinza-azulado frio | Navy escuro dominante | Escuro com fotos ao fundo |
| **Tipografia** | Inter | Archivo + IBM Plex Mono | Space Grotesk, sem mono |
| **Cantos** | 10px em tudo | 0px, cantos vivos | Pílula e 18px |
| **Acento** | Degradê petróleo e ciano | `#59B2C0` | Teal da logo `#0D94A6` |
| **Estrutura** | Grade de cards, eixo vertical | Linhas numeradas, eixo vertical | Faixas, eixo horizontal |
| **Peça central** | Esquema de convergência | Elevação técnica de poste | Faixa de via com flagrante |
| **Conceito** | A plataforma | A execução | O dado em movimento |

### As três peças centrais

**CCONet, esquema de convergência.** Ilustra o H1 "Uma plataforma. Um login. Um dado.".
As fontes convergem para uma base única e dela saem as operações.

**CPN, elevação de poste.** O H1 é "A tecnologia da cidade começa no poste", então desenhei
literalmente isso: corte de elevação em estilo prancha técnica, com linha de cota, hachura
de solo, fundação tracejada, símbolo de aterramento, chamadas com linha de referência e
carimbo de prancha no canto.

**HUB4 Mobility, o flagrante de clonagem.** A mesma placa lida em dois pontos, 18 km de
distância, 4 min 39 s de intervalo, e o fecho de que seriam necessários 232 km/h. A conta
foi conferida. É o argumento mais forte da copy porque não depende de tecnologia, depende
de física. A faixa atravessa a tela inteira, o que firma o eixo horizontal como linguagem
do site.

A ficha de chamado da CPN segue a mesma lógica: em vez de narrar que o projeto trava onde
ninguém assume, encena um ticket com os quatro fornecedores empurrando a culpa em sequência
e fecha em `STATUS: PONTO CEGO / RESPONSÁVEL: NÃO DEFINIDO`.

---

## 10. Achados e correções, inclusive erros meus

### Erros meus, corrigidos durante a sessão

| Erro | Correção |
|---|---|
| Recomendei grafia "HUB 4" separada | A logo oficial escreve `hub4` colado |
| Um find-replace meu quebrou uma frase, que passou a dizer "HUB4 colado, não HUB4" | Reescrita |
| Reportei que muralha.digital só tinha português | O `/en/` responde 200 e é indexável. **Documento ainda não atualizado** |
| Afirmei que muralha.digital "já era de um produto só" | Falso. Vende quatro módulos e se posiciona como plataforma |
| Layout do Mobility v1 "diferente" só na pele | Arquitetura refeita do zero na v2 |
| Primeira escolha de foto de fundo era Kuala Lumpur | Trocada por Pinhais |
| Segunda foto tinha colete escrito POLICE | Trocada por viaturas da Guarda Civil Municipal |

### Riscos sinalizados ao cliente

- **Afirmação potencialmente falsa** sobre biometria "100% local, zero uploads", que vale
  para a autenticação no app mas não para o reconhecimento facial das câmeras
- **Quatro marcas com ®** no site da CPN, uma delas em disputa judicial
- **Seis ocorrências de "Muralha Digital®"** ainda no ar na home do muralha.digital
- **Três slugs** carregam o nome contestado no próprio endereço, e estão indexados
- **Nenhum dos seis posts** do blog do muralha.digital trata de mobilidade
- **Nove políticas de privacidade** publicadas, uma por aplicativo, vinculadas a fichas na
  App Store e no Google Play. A renomeação não para no site

---

## 11. Pendências abertas

### Do cliente, bloqueantes

1. **A fronteira entre VMS, Face, Mobility e Command.** Precisa sair do time de produto.
   Sem ela, qualquer divisão é suposição
2. **Confirmação da identificação da CPN** como a integradora citada na reunião
3. **Hipótese A ou B** para o site da CPN. A copy segue a A
4. **Frase oficial sobre a relação societária** entre CPN e CCONet, que sirva igual nos três
   sites, na proposta e no edital. É informação da diretoria, não da agência
5. **Revisão jurídica dos ®**, nos dois sites que os exibem
6. **Botão de pânico**, qual das duas versões é a correta
7. **SOS Rural, SOS Escola e 199 Cidadão**, que não aparecem no documento de nomenclatura
8. **Status do HUB4 Administração**, listado como módulo 9 mas ausente da apresentação
9. **Titularidade do domínio muralha.digital** e estágio do processo judicial

### Acessos, nunca solicitados na reunião

Levantado em 30/10: **acesso à hospedagem não foi combinado**. O único acesso que entrou na
pauta foi o Google Meu Negócio. Sem os acessos abaixo, as oito tarefas marcadas como "fazer
esta semana, independente do redesenho" estão paradas:

| Acesso | Destrava |
|---|---|
| Admin do WordPress dos dois sites | GA4, Tag Manager, formulários, telefones, botões 404, plugin de SEO |
| Painel de hospedagem | SSL do www, HTTP/2 e cache no Apache |
| Registrador do domínio | Virada do site novo |
| Google Analytics, Tag Manager, Search Console | Linha de base de medição |
| Google Meu Negócio | Busca local |

**Pergunta que precede todas:** existe desenvolvedor ou agência que mantém esses sites hoje?
Se existir, o acesso passa por essa pessoa.

### Da agência

- Atualizar o documento de auditoria do muralha.digital com o achado do `/en/`
- Confirmar a URL do Instagram da CCONet. `instagram.com/cconet_br` foi deduzido do
  @CCONET_BR da apresentação e não foi verificado
- Confirmar o rótulo "Painel do gestor" no esquema da home da CCONet, que é suposição
- Verificar autorização de uso da foto das viaturas, que tem brasão de município
  identificável
- Renomear os PDFs de copy do muralha.digital, cujo título ainda diz "Muralha Digital"
- Páginas internas. Sugeridas: Ecossistema e HUB4 Campus na CCONet, Infraestrutura na CPN

---

## 12. Notas técnicas

### Ambiente

- Navegador do contêiner sem rede. Renderização local via `file://` funciona, o que
  viabilizou PDFs e capturas
- Fontes baixadas por curl, convertidas para base64 e embutidas, porque o Google Fonts não
  carrega no preview local
- `pdftotext -layout` do poppler-utils no lugar do pypdf, que estava quebrado
- ffmpeg instalado via apt, porque o bundled do Playwright não tem decodificadores

### Geração dos PDFs

- **Documentos de copy:** A4, margens 15/17/13/13 mm, rodapé com numeração, CSS de impressão
  com `break-inside: avoid` nos blocos
- **Layouts:** folha única contínua na largura de 1440px e na altura total da página. Texto
  e desenhos vetoriais, só as logos e fotos são imagem

### Acessibilidade

Todas as combinações de cor foram conferidas contra o mínimo de 4,5:1. Dois ajustes que
isso forçou:

- No site da CPN, o `#59B2C0` sobre o papel dá 1,9:1. Criei a variante `#276A78` para texto
  sobre fundo claro, que rende 4,8:1
- Nos cards de módulo da CCONet, branco sobre `#0D94A6` dá 3,4:1. Estendi a rampa do degradê
  para `linear-gradient(145deg, #0C7F93, #0A3246 58%, #072736)`, de forma que a logo fique na
  ponta clara e o texto na escura

### Tratamento de logos

As logos dos módulos HUB4 vêm para fundo branco. Recoloridas pixel a pixel para os cards
escuros: `#383536 → #FFFFFF`, `#0D94A6 → #6FDFEE`, `#919191 → #CFE2E8`.

As logos da CPN e do HUB4 Mobility ganharam versão clara por inversão de luminosidade com
preservação de matiz, para funcionarem sobre o navy.

### Padrão de escrita fixado

Sem travessões em nenhum material. Nas três copies foram 379 ocorrências, tratadas por
função e não por substituição automática:

| Função do travessão | Virou |
|---|---|
| Título de página e SEO | Barra vertical |
| Rótulo interno de documento | Ponto médio |
| Definição após termo em negrito | Dois-pontos |
| Enumeração | Dois-pontos |
| Prosa | Reescrita caso a caso |

Depois rodei varredura procurando vírgula dupla, dois-pontos duplicado e frase começando em
minúscula, e corrigi à mão 19 trechos em que a regra automática produziu leitura ruim.

---

*Registro produzido em 30/10/2026 · MarkSeg*
