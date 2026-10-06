# Handoff G5 Segurança | Contexto para continuar em outra sessão

Cole este documento no início da nova conversa. Ele resume tudo que foi feito até 06/10/2026 e o que falta.

## O essencial em cinco linhas

Cliente: **G5 Segurança Integrada**, segurança eletrônica em Curitiba e Região Metropolitana, site https://g5seguranca.com.br/
Agência: MarkSeg
Material: repositório `anunciomarkseg-hue/Markseg-geral-clientes`, branch `claude/g5-seguranca-blog-seo-era4eb`, pasta `clientes/g5-seguranca/`
Tarefa atual: **auditoria da conta de RD Station**
Bloqueio: a sessão anterior rodava em contêiner na nuvem e não alcançava o Chrome logado do usuário

## O que já foi produzido

| Entrega | Onde | Status |
|---|---|---|
| Estratégia de conteúdo SEO (documento do cliente) | `clientes/g5-seguranca/` | Base de tudo |
| 12 textos de blog, 23.772 palavras, com tabela de Pacote de SEO | `blog/` | Prontos. Três já publicados pelo cliente em 16, 21 e 25 de setembro |
| Documentos consolidados de blog, Mês 1 e Mês 2, em .docx | `blog/` | Entregues. Mês 3 ainda não virou documento |
| Sequência de 3 e-mails de setembro | `email/` | E-mails 1 e 2 aprovados. E-mail 3 refeito com a decisão do STJ, aguardando aprovação |
| Auditoria completa do site, 13 seções | `auditoria/` | Entregue em md, docx e PDF |
| Relatório de desempenho de SEO com dados do GA4 | `relatorios/` | Entregue em md, docx e PDF |
| Checklist de produção | `CHECKLIST-Producao-G5.md` | 53 itens feitos, 18 pendentes |
| Estrutura da auditoria de RD Station | `rdstation/Briefing-Coleta-RD-Station.md` | Pronta, esperando os dados |

## A tarefa agora: auditoria do RD Station

A estrutura do relatório final já está escrita, com dez seções e os critérios de avaliação de cada bloco, em `clientes/g5-seguranca/rdstation/Briefing-Coleta-RD-Station.md`. Falta coletar os dados.

**O que coletar na conta de RD Station da G5:**

1. Total de contatos, separando ativos, descadastrados e bounce. Lista de segmentações com nome e número de contatos de cada uma.
2. Relatório de e-mails dos últimos 12 meses: nome, data, enviados, taxa de entrega, abertura, clique, descadastro e spam por disparo.
3. Landing pages publicadas, com visitas, conversões e taxa de conversão.
4. Fluxos de automação, com nome, status (ativo, pausado, nunca publicado) e contatos que passaram por cada um.
5. Integrações conectadas: site, formulários, Meta, Google, CRM.

**Hipótese principal a confirmar:** parte das conversões pode estar sendo registrada apenas no RD Station e não chegar ao GA4. Se for isso, o Paid Social aparece com zero conversão no GA4 sem ser verdade, e a leitura de todos os canais pagos está distorcida.

## Dados já apurados que entram no cruzamento

Do **GA4**, período de 23/06 a 20/09/2026, 90 dias:

- Orgânico: 15,3% dos usuários e 59,8% de todas as conversões, taxa de 7,85%, engajamento de 39,8 segundos
- Paid Social: 1.565 usuários, 2 segundos de engajamento médio, zero evento principal
- E-mail como canal: 92 usuários, 30,7 segundos, 3 eventos principais, taxa de 2,17%
- RD Station como origem de campanha: 99 sessões
- Cerca de 77% dos cliques orgânicos são de marca
- Queda de 73% no volume semanal a partir do fim de agosto, a confirmar no gerenciador de anúncios

Da **auditoria do site**, 18/09/2026:

- As landing pages do RD Station ficam em `materiais.g5seguranca.com.br`, e o GA4 mistura esse host com o site principal sem separação
- O botão flutuante verde do site é um pop-up do RD Station montado por JavaScript, em elemento sem endereço de destino, portanto não rastreável
- Nenhuma das 148 URLs do site tem telefone clicável
- Cluster de alarme e monitoramento sem página de serviço, apesar de somar mais de 4.000 buscas mensais no estudo
- Nove páginas disputando a expressão portaria remota entre si

## Estado dos acessos

- **RD Station:** foi criada a aplicação OAuth "Auditoria MarkSeg" no App Publisher, com Client ID e Client Secret obtidos. O fluxo de autorização e a troca pelo refresh_token ficaram pela metade. A API Key simples não serve, ela só envia conversões e não lê dados.
- **Google Analytics e Search Console:** sem acesso concedido. O Search Console já está verificado por DNS, basta adicionar o e-mail da agência como usuário.
- **Meta Ads:** conector existe na conta claude.ai mas está pedindo reconexão.

## Regras de trabalho deste cliente

- Nunca usar travessões nos textos, nem em documentos
- Não prometer prevenção total de crimes, falar em redução de risco e resposta
- Conteúdo com carga jurídica, como LGPD e decisões judiciais, pede revisão de profissional
- Não inventar dado do cliente. Número de câmeras, tempo de resposta e depoimento só entram com fonte e autorização
- Documentos finais saem em .docx e PDF, no padrão visual já usado nas entregas anteriores
- Os geradores de documento estão no repositório, nos arquivos ocultos `.gerador-docx*.js` e `.gerador-pdf.py` dentro de cada pasta

## Pendências em aberto

- [ ] Auditoria do RD Station, aguardando dados
- [ ] Aprovação do E-mail 3
- [ ] Três textos de setembro aprovados e não produzidos: Conecta Muralha, leitura de placas e análise inteligente, condomínio na Muralha
- [ ] Documento consolidado do Mês 3 em .docx
- [ ] Publicação dos nove textos restantes
- [ ] Comprovação documental do licenciamento da G5 no Conecta Muralha
- [ ] Acesso de leitura ao Search Console e ao Analytics
