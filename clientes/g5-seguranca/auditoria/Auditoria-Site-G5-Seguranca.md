# Auditoria completa do site G5 Segurança

**Domínio auditado:** https://g5seguranca.com.br/
**Data da coleta:** 18 de setembro de 2026
**Escopo:** SEO técnico, indexação, on-page, conteúdo, links internos, SEO local, design, usabilidade, acessibilidade, conversão, medição e palavras-chave.

## Ficha técnica da auditoria

| Item | Descrição |
|---|---|
| URLs rastreadas | 148, obtidas dos sitemaps oficiais do site (23 páginas, 116 posts, 9 categorias) |
| Método | Rastreamento próprio das 148 URLs com extração de cabeçalhos HTTP, metadados, estrutura de títulos, imagens, dados estruturados e links internos |
| Desempenho | Medição em navegador Chromium real, viewport de celular 390 x 844, sem limitação artificial de rede, em 18/09/2026 |
| Verificações complementares | robots.txt, sitemaps, comportamento de redirecionamento, página 404, arquivos de autor, data, busca e paginação, requisições de terceiros |
| Dados de mercado | Volumes de busca citados vêm do estudo de palavras-chave da própria G5, de agosto de 2026, que consolidou Google Keyword Planner, Ubersuggest e AnswerThePublic |
| Limitações declaradas | Não foi possível obter dados de campo do Core Web Vitals nem a nota oficial do Lighthouse, porque a cota pública da API do PageSpeed Insights estava esgotada no momento da coleta. Não houve acesso ao Google Search Console, ao Google Analytics nem a ferramenta paga de backlinks, portanto este relatório não afirma posições, tráfego real nem perfil de links externos |

## Resumo executivo

O site tem uma base melhor do que a média do setor em Curitiba. A estrutura técnica está saudável, o HTTPS e os redirecionamentos estão corretos, todas as 148 URLs rastreadas responderam com código 200, nenhuma apresentou erro, todas têm canonical autorreferencial e nenhuma está bloqueada por engano. Existe um blog ativo com 116 publicações e um investimento recente e visível em conteúdo mais profundo.

O problema não é o site estar quebrado. O problema é que ele não está posicionado para as buscas que geram receita.

A constatação mais grave desta auditoria é a ausência de página para o maior cluster comercial identificado no próprio estudo de palavras-chave da empresa. O conjunto de termos ligados a alarme monitorado e monitoramento de alarme soma dez variações com 500 buscas mensais cada, além de alarme residencial com 8.100 buscas, e o site não possui nenhuma página de serviço dedicada a esse tema. Existe apenas um post de blog de 2023. Em paralelo, há nove páginas disputando a expressão portaria remota entre si.

As cinco prioridades, na ordem em que devem ser executadas:

1. Criar a página de serviço de alarme monitorado e monitoramento 24 horas, hoje inexistente.
2. Corrigir o title da página inicial, que hoje tem 12 caracteres e apenas o nome da empresa.
3. Resolver a canibalização de portaria remota, definindo uma página principal e reposicionando os oito conteúdos restantes como apoio.
4. Implementar dados estruturados de negócio local com telefone, endereço e área de atendimento, além de tornar os telefones clicáveis, o que hoje não acontece em nenhuma das 148 URLs.
5. Reconstruir a malha de links internos, já que 99 das 148 URLs não recebem nenhum link a partir do corpo de outro conteúdo, enquanto 119 links apontam para uma página de autor que está marcada como não indexável.

## 1. Indexação e arquitetura

### O que está correto

O robots.txt é limpo, bloqueia apenas a área administrativa, libera o admin-ajax e declara o sitemap. Os redirecionamentos funcionam sem cadeias: http leva a https, www leva à versão sem www e index.php leva à raiz, todos com um único salto. A página inexistente retorna código 404 de verdade, sem página falsa respondendo 200. Todas as 148 URLs possuem canonical apontando para elas mesmas, sem divergências. Nenhuma URL do sitemap está com noindex indevido.

Os arquivos que não devem competir estão corretamente marcados como não indexáveis: arquivo de autor, paginação do blog, paginação de categoria e resultados de busca interna.

### O que precisa de correção

**Dois sitemaps ativos ao mesmo tempo.** O endereço sitemap_index.xml e o wp-sitemap.xml respondem os dois com conteúdo. O segundo é o sitemap nativo do WordPress e deveria estar desativado, já que o plugin de SEO gera o principal. Manter os dois cria ambiguidade para o rastreador.

**A mesma URL declarada em dois sitemaps.** O endereço /videomonitoramento-por-drone/ aparece no sitemap de páginas e no de posts, o que indica uma página e um post disputando o mesmo slug no WordPress. Um dos dois objetos está inacessível e precisa ser removido ou redirecionado.

**Arquivos de data indexáveis.** O endereço /2026/07/ responde com instrução de indexação normal. Arquivos mensais geram páginas de listagem sem conteúdo próprio, que competem com o blog e diluem a autoridade. Devem ser marcados como não indexáveis.

**Categorias sem meta description.** As nove categorias são indexáveis e nenhuma tem meta description escrita. A categoria uncategorized continua ativa e indexável com 678 palavras, o que sinaliza organização editorial incompleta.

**Resíduos de instalação.** O post hello-world-2, publicação padrão do WordPress, continua no ar com 291 palavras. Existe também um post com slug numérico, /3160/, sem qualquer indicação semântica na URL.

## 2. Desempenho técnico

### Infraestrutura

O site roda em WordPress hospedado na Hostinger, com servidor LiteSpeed, PHP 8.3.33 e Cloudflare na frente. HTTP/2 está ativo e o HTTP/3 está anunciado. A compressão está ligada. O cabeçalho de cache do HTML está definido em uma hora, porém o status do Cloudflare aparece como dinâmico, indicando que o HTML não está sendo servido a partir da borda.

### Medições realizadas

| Página | TTFB | FCP | LCP | CLS | Transferido |
|---|---|---|---|---|---|
| Página inicial | 804 ms | 1.120 ms | 2.700 ms | 0 | 688 KB |
| Portaria remota | 456 ms | 712 ms | 2.732 ms | 0,152 | 740 KB |
| Blog | 429 ms | 764 ms | 1.900 ms | 0 | 425 KB |

Com a rolagem completa da página inicial, o total chega a 103 requisições e 1.381 KB transferidos.

Duas leituras importam aqui. A primeira é que essas medições foram feitas sem limitação de rede, ou seja, em condição favorável. Em rede móvel real, os números pioram. Mesmo assim, o LCP da página inicial e o da página de portaria remota já ficam acima de 2,5 segundos, que é o limite do que o Google considera bom.

A segunda é o CLS de 0,152 na página de portaria remota. O limite recomendado é 0,1. Isso significa que elementos se deslocam durante o carregamento, empurrando o conteúdo enquanto o usuário já está lendo.

### Origens do peso

O HTML da página inicial tem 709 KB sem compressão, dos quais 430 KB são folhas de estilo embutidas no próprio documento, além de 38 KB de JavaScript embutido. A página ainda carrega 62 folhas de estilo e 25 scripts externos. A mediana de HTML do site inteiro é de 411 KB sem compressão, o que confirma que o padrão se repete fora da página inicial.

As imagens não são o gargalo. Nenhuma das 40 imagens amostradas passa de 200 KB e parte delas já é entregue em formato webp. O problema é outro: das 114 imagens presentes no HTML da página inicial, nenhuma usa carregamento adiado.

As fontes pesam 262 KB no carregamento móvel, distribuídas em 10 arquivos, sem preconnect e sem preload declarados. Em uma página cujo maior elemento visível é texto sobre imagem, isso atrasa diretamente o LCP.

Existe ainda um custo de terceiros relevante. A página inicial aciona o Cloudflare Turnstile, com sete requisições, embora o desafio só seja necessário no formulário de contato.

## 3. SEO on-page

### Titles

| Situação | Quantidade |
|---|---|
| URLs sem title | 0 |
| Titles acima de 60 caracteres | 103 de 148 |
| Titles abaixo de 30 caracteres | 15 de 148 |
| Titles duplicados | 1 par |

O caso mais custoso é o da página inicial, cujo title é apenas **G5 Segurança**, com 12 caracteres. É a página com maior autoridade do domínio e ela não comunica serviço nem cidade. Uma formulação como "Empresa de Segurança em Curitiba | Monitoramento 24h | G5" ocuparia o espaço disponível e disputaria termos reais.

No extremo oposto, 103 titles passam de 60 caracteres e serão cortados no resultado de busca. As páginas de serviço, que são as comerciais, estão nessa faixa: controle de acesso com 64 caracteres, segurança eletrônica com 64, segurança perimetral com 63 e drone com 69.

### Meta descriptions

Este é um ponto forte. A mediana é de 150 caracteres, apenas uma passa de 160 e as descrições são específicas, com elementos concretos como "biometria facial em 0,4 s" e "RFID para veículos". As nove ausências são todas em páginas de categoria.

### Estrutura de títulos

Nenhuma página tem mais de um H1, o que é correto. Cinco páginas não têm H1 nenhum: termos de uso, política de privacidade, política de cookies, serviços integrados e a página /lp/. As duas últimas são páginas de conteúdo relevante e a ausência de H1 é uma falha real.

Todas as quatro páginas testadas em profundidade apresentam salto de hierarquia. A página de soluções para condomínio salta de H2 direto para H5.

### Imagens

Das 1.115 imagens encontradas no HTML das 148 URLs, 500 estão sem texto alternativo preenchido, ou seja, 44%. A concentração é justamente nas páginas comerciais: soluções para condomínio tem 58 de 65 imagens sem alt, soluções para empresa tem 33 de 52 e quem somos tem 32 de 36. Isso afeta acessibilidade e também a busca por imagens.

### Dados estruturados

Há marcação em 100% das URLs, com Organization, WebSite, BreadcrumbList, WebPage, BlogPosting, Article, Person, ImageObject e CollectionPage. Uma página usa FAQPage.

O que falta é justamente o mais importante para um negócio regional. A marcação de Organization contém apenas nome, URL e logo. Não há telefone, endereço, horário de atendimento, área atendida nem perfis sociais. Não existe marcação de negócio local, o que é uma lacuna direta para quem atende Curitiba e região.

## 4. Conteúdo e blog

O blog tem 116 posts publicados, com histórico desde 2021 e frequência mantida. Esse é um ativo real e pouco comum no setor.

| Indicador | Valor |
|---|---|
| Mediana de palavras por post | 404 |
| Posts com menos de 600 palavras | 65 de 116 |
| Posts com mais de 1.500 palavras | 8 |
| Post mais extenso | 3.208 palavras |

A leitura correta desse quadro é que houve uma virada recente. Os conteúdos de 2023 e 2024 são curtos, com mediana em torno de 400 palavras, insuficiente para competir. Os conteúdos de 2026 são substancialmente mais profundos, chegando a 3.208 palavras. A direção está certa e o passivo antigo é que precisa ser tratado.

As páginas comerciais também são curtas para o que disputam: portaria remota com 559 palavras, portaria autônoma com 614, videomonitoramento por drone com 618, totem com 650, controle de acesso com 659, segurança eletrônica com 670 e segurança perimetral com 797. Para termos com concorrência e intenção comercial, essa extensão limita o alcance.

Dois pontos específicos de duplicidade merecem correção. Existem dois posts sobre segurança residencial para viagens, um deles com slug terminado em "-2". Os textos são diferentes entre si, com apenas 1,8% de similaridade, mas atacam a mesma intenção de busca e competem entre si. O ideal é consolidar em um único conteúdo e redirecionar o outro.

Há também um achado positivo importante: o post publicado em 13 de julho de 2026 confirma que a G5 passa a integrar o Conecta Muralha, programa da Prefeitura de Curitiba que conecta câmeras privadas à Muralha Digital. Esse conteúdo tem 501 palavras e não recebe nenhum link interno de nenhuma outra página do site. É o principal diferencial competitivo atual da empresa e está isolado.

## 5. Links internos

| Indicador | Valor |
|---|---|
| URLs sem nenhum link interno recebido no corpo de conteúdos | 99 de 148 |
| Links internos apontando para /author/g5/ | 119 |
| Links recebidos por /portaria-autonoma/ | 0 |
| Links recebidos por /seguranca-perimetral/ | 1 |
| Links recebidos por /seguranca-eletronica/ | 2 |
| Links recebidos por /portaria-remota/ | 5 |
| Links recebidos por /controle-de-acesso/ | 6 |

Este é o achado com melhor relação entre esforço e retorno de toda a auditoria. A maior quantidade de links internos do site, 119 no total, aponta para a página de autor, que é justamente uma página marcada como não indexável. Todo esse sinal interno é desperdiçado.

Enquanto isso, as páginas que vendem recebem quase nada. A página de portaria autônoma não recebe um único link. A de segurança perimetral recebe um. Há 116 posts publicados e praticamente nenhum deles direciona autoridade para as páginas comerciais correspondentes.

## 6. SEO local

A empresa atende Curitiba e Região Metropolitana, e este é o eixo mais frágil do site.

Os dados de contato aparecem apenas como texto na página Fale Conosco: central 24 horas no 41 3045.7940, comercial no 41 3045.9518 e endereço na Rua José de Alencar, 1586, Cristo Rei, Curitiba, Paraná.

Nenhuma das 148 URLs possui link de telefone clicável. Em um site cuja maior parte do acesso é por celular, e cujo serviço envolve urgência, o usuário precisa copiar o número manualmente para ligar.

Não há marcação de negócio local, não há NAP estruturado no rodapé, não há mapa incorporado e não há página de serviço com recorte geográfico. O termo empresa de segurança em Curitiba existe hoje como post de blog, não como página de serviço, o que é uma inversão de prioridade.

## 7. Design, estrutura e usabilidade

### O que funciona bem

A identidade visual é consistente e reconhecível, com amarelo e grafite aplicados de forma disciplinada em todas as páginas. O menu principal é segmentado por público, com condomínios, empresas, residências e escolas, o que espelha corretamente a decisão de compra e ajuda o visitante a se localizar.

As páginas internas de serviço seguem um padrão de faixa de título coerente, e as meta descriptions mostram que existe preocupação com clareza de proposta.

### O que precisa melhorar

**O banner principal quebra no celular.** O carrossel da página inicial exibe imagens com o texto embutido na própria arte. Em tela de 390 pixels, a imagem é cortada e o texto aparece incompleto, com fragmentos como "CIAS." e "R BEM, TEGIDO!" visíveis. O visitante de celular, que é a maioria, chega a uma primeira tela ilegível. Além do problema visual, texto dentro de imagem não é lido pelo buscador.

**O aviso de cookies ocupa a primeira tela.** No celular, a barra de cookies consome a parte superior da tela e empurra o cabeçalho. Na página de portaria remota, o H1 fica parcialmente encoberto por ela.

**Texto justificado no celular.** As páginas de serviço usam alinhamento justificado, o que em telas estreitas cria espaçamento irregular entre palavras e prejudica a leitura.

**Formulário de contato sem rótulos visíveis.** Os campos usam apenas texto de exemplo dentro da caixa, que desaparece quando o usuário começa a digitar. Não há campo de segmentação para identificar se o contato é de condomínio, empresa ou residência, o que obrigaria a qualificação manual de cada lead.

**Botão de envio com contraste insuficiente.** O botão ENVIAR usa texto claro sobre fundo amarelo claro.

**Verificação antibot em inglês.** O widget do Cloudflare exibe "Verify you are human" em um site inteiramente em português.

**Sidebar do blog subaproveitada.** A coluna lateral tem apenas um campo de busca. Não há navegação por categoria, conteúdos relacionados nem chamada para ação comercial.

**Botão flutuante sem link real.** O botão verde fixo no canto inferior é um componente de pop-up do RD Station montado por JavaScript, em elemento sem endereço de destino. Ele não é um link rastreável e depende integralmente da execução do script.

**Ausência de WhatsApp no HTML da maior parte do site.** Apenas 24 das 148 URLs contêm link direto para WhatsApp. Páginas comerciais relevantes, como soluções para residência, e a listagem do blog não apresentam esse link nem depois da renderização completa.

## 8. Acessibilidade

O idioma está declarado como pt-BR em 100% das páginas e a meta viewport está presente em todas. Esses dois fundamentos estão corretos.

As falhas concentradas são: 44% das imagens sem texto alternativo, campos de formulário sem rótulo associado, saltos de hierarquia de títulos em todas as páginas analisadas, contraste insuficiente no botão principal de conversão e trecho de interface em idioma diferente do restante do site.

## 9. Medição e rastreamento

O site carrega o Google Tag Manager com o identificador GTM-PZ37MSX, e por meio dele aciona Google Analytics, remarketing do Google Ads, pixel da Meta e RD Station, além do Cloudflare Insights. A estrutura de medição existe e é mais completa do que o setor costuma ter.

Duas observações. A primeira é que nenhuma dessas tags aparece no HTML entregue pelo servidor, todas dependem da execução do GTM, o que torna a medição sensível a bloqueadores e a falhas de carregamento. A segunda é que, sem link de telefone e sem link de WhatsApp rastreável na maior parte das páginas, os dois canais que mais convertem neste setor não estão sendo medidos como eventos.

## 10. Auditoria de palavras-chave

O cruzamento foi feito entre as palavras priorizadas no estudo da própria G5, de agosto de 2026, e o que o site efetivamente tem em title, H1 e URL.

### Termos prioritários sem nenhuma página dedicada

| Palavra-chave | Volume informado no estudo |
|---|---|
| alarme residencial | 8.100 |
| monitoramento de alarme | 500 |
| monitoramento de alarme 24 horas | 500 |
| empresa de monitoramento de alarmes | 500 |
| alarme e monitoramento | 500 |
| monitoramento de segurança | 500 |
| segurança e monitoramento | 500 |
| monitoramento alarme residencial | 500 |
| proteção patrimonial | 480 |
| monitoramento residencial | 320 |
| câmeras para monitoramento residencial | 210 |
| segurança 24 horas | 140 |
| ronda de segurança | 110 |
| controle de acesso empresarial | 70 |
| central de monitoramento de alarme | 50 |
| monitoramento de alarme curitiba | 50 |

Somando apenas as variações do cluster de alarme e monitoramento, são mais de 4.000 buscas mensais sem página correspondente. A única presença do tema no site é um post de blog de 2023 sobre a integração do alarme monitorado da G5.

Também não há página para segurança empresarial, CFTV empresarial, controle de acesso para condomínio, reconhecimento facial, biometria, LGPD, segurança industrial, proteção de galpão logístico, sensor perimetral e portaria remota em Curitiba como página de serviço.

### Canibalização identificada

| Palavra-chave | Páginas competindo |
|---|---|
| portaria remota | 9 |
| controle de acesso | 6 |
| empresa de segurança | 3 |
| segurança residencial | 2 |

O caso de portaria remota é o mais grave. Existe a página de serviço e mais oito conteúdos com o termo no title ou no H1, incluindo posts como "o que é e como funciona a portaria remota", "portaria remota ou presencial", "vantagens da portaria remota para condomínios" e "portaria remota em Curitiba". Todos disputam a mesma intenção. O resultado típico é que o Google alterna entre eles e nenhum consolida posição.

### Termos com cobertura adequada

Alarme monitorado, segurança patrimonial, segurança para condomínio, câmeras de segurança e empresa de segurança em Curitiba possuem uma página ou post identificável, sem competição interna evidente. Vale notar que os três últimos estão como post de blog e não como página de serviço.

## 11. Plano de ação priorizado

### Prioridade 1, executar em até 30 dias

| Ação | Motivo |
|---|---|
| Criar página de serviço de alarme monitorado e monitoramento 24 horas | Maior cluster comercial do estudo sem nenhuma página |
| Reescrever o title da página inicial incluindo serviço e cidade | Página de maior autoridade sem qualquer sinal de tema |
| Implementar dados estruturados de negócio local com telefone, endereço, horário e área atendida | Lacuna direta de SEO local |
| Tornar todos os telefones clicáveis e padronizar link de WhatsApp em todas as páginas | Canais principais de conversão hoje não clicáveis nem medidos |
| Corrigir o banner da página inicial no celular | Primeira tela ilegível para a maior parte do tráfego |
| Preencher o texto alternativo das imagens das páginas comerciais | 44% do total sem alt, concentrado nas páginas que vendem |

### Prioridade 2, executar entre 30 e 60 dias

| Ação | Motivo |
|---|---|
| Definir a página oficial de portaria remota e reposicionar os oito conteúdos concorrentes com links apontando para ela | Canibalização de nove páginas |
| Reconstruir a malha de links internos das páginas comerciais | 99 URLs sem link recebido, páginas de serviço com zero a seis links |
| Remover ou reduzir os links para a página de autor | 119 links internos desperdiçados em página não indexável |
| Ampliar as páginas de serviço para faixa de 1.200 a 1.800 palavras | Páginas atuais entre 559 e 797 palavras |
| Criar página de serviço com recorte local para Curitiba | Hoje o tema existe apenas como post |
| Ajustar titles acima de 60 caracteres nas páginas comerciais | 103 titles serão truncados |
| Marcar arquivos de data como não indexáveis e desativar o sitemap duplicado | Higiene de indexação |
| Corrigir o conflito de slug da página de drone | Mesma URL em dois sitemaps |

### Prioridade 3, executar entre 60 e 90 dias

| Ação | Motivo |
|---|---|
| Reduzir o CSS embutido e o número de folhas de estilo | 430 KB embutidos e 62 arquivos de estilo |
| Ativar carregamento adiado nas imagens abaixo da dobra | 114 imagens sem carregamento adiado na página inicial |
| Aplicar preconnect e preload nas fontes | 262 KB em 10 arquivos, sem otimização de carregamento |
| Carregar o Turnstile apenas na página de formulário | Sete requisições desnecessárias na página inicial |
| Corrigir o deslocamento de layout na página de portaria remota | CLS de 0,152, acima do limite de 0,1 |
| Consolidar os dois posts de segurança residencial para viagens | Mesma intenção de busca em duas URLs |
| Revisar e consolidar os 65 posts com menos de 600 palavras | Passivo de conteúdo raso |
| Remover o post padrão do WordPress, tratar o slug numérico e encerrar a categoria uncategorized | Resíduos de instalação indexáveis |
| Redesenhar o formulário com rótulos visíveis, campo de segmentação e contraste adequado no botão | Usabilidade e qualificação de lead |
| Reformular a sidebar do blog com categorias, conteúdos relacionados e chamada comercial | Espaço hoje ocupado apenas por busca |

## 12. Oportunidade específica identificada

O post que anuncia a entrada da G5 no Conecta Muralha, publicado em julho de 2026, documenta um diferencial que poucos concorrentes locais possuem e que depende de credenciamento na Polícia Federal e de aprovação de projeto técnico pela Prefeitura. Esse conteúdo tem 501 palavras, não recebe nenhum link interno e não é mencionado em nenhuma página de serviço.

Transformar esse tema em página institucional permanente, ligá-lo às páginas de condomínio, empresa e videomonitoramento, e usá-lo como prova de credenciamento na página de contratação é a ação de maior potencial de diferenciação disponível hoje, sem depender de investimento em mídia.

## 13. O que este relatório não afirma

Para que a auditoria seja usada com segurança, vale explicitar os limites. Este documento não afirma posições atuais no Google, volume real de tráfego orgânico, taxa de conversão, perfil de backlinks nem notas oficiais de Core Web Vitals de campo, porque não houve acesso ao Google Search Console, ao Google Analytics, a ferramenta paga de análise de links e porque a cota pública da API do PageSpeed Insights estava esgotada no momento da coleta.

Todos os números apresentados foram medidos diretamente no site em 18 de setembro de 2026 ou vêm do estudo de palavras-chave da própria G5, de agosto de 2026, com a fonte indicada em cada caso.

Como próximo passo de diagnóstico, recomenda-se conceder acesso ao Search Console e ao Analytics, o que permite validar quais das lacunas apontadas já estão custando impressões e cliques, e dimensionar o retorno de cada ação do plano.
