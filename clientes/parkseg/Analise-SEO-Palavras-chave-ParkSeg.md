# ParkSeg Academy - Análise de Site, SEO e Palavras-chave

> Documento de diagnóstico e pesquisa. Serve de base para montar, na sequência, a **Estratégia de Conteúdo SEO** completa no mesmo modelo do G5 Segurança.

| Campo | Informação |
|---|---|
| **Empresa** | ParkSeg Academy (Parkseg Treinamentos) |
| **Site** | https://parkseg.com/ |
| **Segmento** | Centro de **capacitação/treinamento** para o mercado de **segurança eletrônica e TI** |
| **Região** | Palhoça / Grande Florianópolis - SC (Cidade Universitária Pedra Branca, Rua dos Cisnes, 355) - atende profissionais de todo o Brasil |
| **Data da análise** | Agosto de 2026 |
| **Fontes** | Auditoria Ubersuggest (PDF enviado), prints do Ubersuggest, pesquisa pública (site, LinkedIn, Revista Segurança Eletrônica, Hikvision) |

---

## 1. O que é o ParkSeg (validação do negócio)

⚠️ **Ponto crítico:** o ParkSeg **NÃO é uma empresa de serviços de segurança** (como o G5). É uma **escola/academia de treinamentos** para profissionais do setor. Isso muda toda a estratégia de palavras-chave: o público não busca "empresa de monitoramento", e sim **"curso de CFTV", "certificação Hikvision", "como instalar alarme"**.

**Modelo de negócio:**
- Centro de treinamento técnico e comercial em segurança eletrônica e TI: **CFTV, alarmes, controle de acesso, redes, software, gestão e soluções integradas**.
- Modalidades: **presencial** (sede própria em Palhoça-SC, auditório para até 200 pessoas) e **EAD/online** (plataforma Parkseg Academy).
- Cargas horárias de **12 a 40 horas**, com turmas noturnas e de fim de semana.
- **Parceria oficial Hikvision:** centro de capacitação e certificações oficiais **HCSA** (Hikvision Certified Security Associate) e **HCSP/HCSP** (Professional), com agenda mensal.

**Público-alvo:**
- Profissionais já atuantes: **integradores, revendas e instaladores autônomos**.
- Quem quer **entrar no mercado** de segurança eletrônica.

**Catálogo de cursos identificado (site):**
- Sistema CFTV Hikvision
- Sistema de Alarme sem fio AX PRO e AX Hybrid PRO (Hikvision)
- Soluções IP: Integrando CFTV e Controle de Acesso
- Controle de Acesso e Portarias
- Mikrotik para Portaria Remota
- Fibra Óptica para Segurança Eletrônica
- Energia Solar Fotovoltaica (dimensionamento e instalação)
- Certificações Hikvision (HCSA / HCSP)
- Cursos EAD (plataforma online)

**Fontes:** [Revista Segurança Eletrônica](https://revistasegurancaeletronica.com.br/em-foco-parkseg-capacitacao-profissional-como-estrategia-de-crescimento/) · [Hikvision + Parkseg](https://revistasegurancaeletronica.com.br/hikvision-anuncia-primeiro-centro-de-capacitacao-no-brasil-em-parceria-com-parkseg-em-santa-catarina/) · [Parkseg Academy no LinkedIn](https://br.linkedin.com/company/parkseg-treinamentos) · [parkseg.com](https://parkseg.com/)

---

## 2. Diagnóstico técnico de SEO (auditoria Ubersuggest)

### Métricas gerais

| Indicador | Valor | Leitura |
|---|---|---|
| SEO on-page | **61/100** | Base técnica fraca - precisa de saneamento |
| Tráfego orgânico mensal | **130** | Visibilidade muito baixa |
| Palavras-chave orgânicas | **5** | Praticamente sem presença orgânica |
| Backlinks | **48** | Autoridade inicial baixa |
| Páginas rastreadas | **57** | 37 validadas · 2 com redirect · **5 quebradas** · **13 bloqueadas** |
| Problemas de SEO | **155** | Volume alto para um site pequeno |

### Erros críticos (impacto ALTO - corrigir primeiro)

| Problema | Qtd. | Por que importa |
|---|---|---|
| Páginas com pouco conteúdo ("thin content") | **31** | Google não indexa/rankeia páginas rasas. Cada curso precisa de descrição real (o que aprende, carga horária, público, ementa, FAQ). |
| Páginas **impedidas de indexar** | **13** | 13 páginas invisíveis no Google (noindex/robots/bloqueio). Verificar se há páginas de curso importantes bloqueadas por engano. |
| Meta descrições **duplicadas** | **11** | Reduz CTR e confunde o Google sobre a página mais relevante. |

### Advertências (impacto MÉDIO)

| Problema | Qtd. |
|---|---|
| Links quebrados | **35** |
| Páginas sem H1 | **20** |
| `<title>` muito curta | **15** |
| Páginas sem meta descrição | **11** |
| Múltiplas tags de meta descrição | **9** |
| Páginas retornando erro 4XX | **5** |
| `<title>` muito longa | **3** |
| URL mal formatada para SEO | **2** |

### Itens de infraestrutura sinalizados
- **Sitemap.xml** ausente (impacto alto) → criar e enviar ao Google Search Console.
- **Certificado SSL** sinalizado como inválido/prestes a expirar → **verificar com urgência** (site abre em HTTPS, mas pode haver problema de configuração/cadeia ou expiração próxima).
- Compressão de conteúdo, doctype/charset declarados, redirecionamentos temporários → ajustes de menor prioridade.

> **Resumo do diagnóstico:** o site tem estrutura pequena (57 páginas) mas **higiene técnica ruim** e **quase nenhuma presença orgânica**. Antes (ou junto) da produção de conteúdo, é essencial um **saneamento técnico**: desbloquear páginas de curso, engrossar as páginas rasas, corrigir links quebrados, criar sitemap, padronizar títulos/meta e validar o SSL. Sem isso, o conteúdo novo rende muito menos.

---

## 3. Leitura das palavras-chave enviadas (prints do Ubersuggest)

### 3.1 "Buscar por website" (parkseg.com)
Retornou apenas 6 termos: `passeg (480)`, `piraseg (210)`, `primeseg segurança eletrônica (170)`, `parkseg academy (140)`, `parkseg (140)`, `seg park (140)`.

**Interpretação:** a maioria são **marcas concorrentes/terceiros** (passeg, piraseg, primeseg) com nome parecido - não são oportunidades reais. Só `parkseg` e `parkseg academy` são de marca. Isso **confirma a auditoria**: o site quase não tem pegada orgânica e é facilmente confundido com concorrentes de nome similar. **Conclusão:** a autoridade temática precisa ser construída quase do zero, com conteúdo próprio.

### 3.2 "Visão Geral IA" - termo `treinamentos segurança`
Aqui está a **demanda real**: autocomplete `treinamentos segurança (480)`, comparação `treinamentos segurança (590)`, preposição `para treinamentos (210)`, perguntas como "quais treinamentos o técnico…", "o que é treinamento de…", "como treinar segurança". Prompts de IA giram em torno de **cursos certificados, certificações valorizadas, Ethical Hacking, plataformas para aprender segurança**.

**Conclusão:** existe volume informacional em torno de **treinamento/capacitação/certificação** - é por aí que o ParkSeg deve atacar, e não pelos termos de "serviço de segurança".

---

## 4. Universo de palavras-chave proposto (por pilares)

> Adaptado ao nicho de **treinamentos**. Os volumes precisam ser **confirmados no Ubersuggest/Keyword Planner** (localização: Brasil) - a lista abaixo é o mapa de intenção a validar. Decisões seguem o mesmo critério do modelo G5 (aderência ao portfólio + intenção + risco de canibalização).

### Pilar 1 - CFTV e câmeras (curso)
`curso de cftv`, `curso de cftv online`, `curso instalação de câmeras de segurança`, `curso de câmeras`, `curso cftv hikvision`, `como instalar câmera de segurança`, `curso de cftv com certificado`, `curso monitoramento cftv`.
→ **Prioridade máxima** (núcleo de demanda + carro-chefe Hikvision).

### Pilar 2 - Alarmes (curso)
`curso de alarme`, `curso instalação de alarme`, `curso alarme monitorado`, `alarme ax pro hikvision`, `como instalar central de alarme`, `curso de alarme sem fio`.
→ **Prioridade máxima / apoio.**

### Pilar 3 - Controle de acesso e portaria
`curso controle de acesso`, `curso de portaria remota`, `curso portaria remota`, `mikrotik para portaria remota`, `como montar portaria remota`, `controle de acesso condomínio curso`.
→ **Prioridade máxima** (portaria remota é tema quente e valorizado).

### Pilar 4 - Redes, Mikrotik e Fibra óptica
`curso mikrotik`, `curso mikrotik para cftv`, `curso de redes para segurança eletrônica`, `curso fibra óptica`, `fusão de fibra óptica curso`, `curso de infraestrutura de redes`.
→ **Prioridade / apoio** (habilidade técnica de suporte muito buscada por instaladores).

### Pilar 5 - Certificações Hikvision
`certificação hikvision`, `hcsa hikvision`, `hcsp hikvision`, `treinamento hikvision`, `como tirar certificação hikvision`, `certificação em segurança eletrônica`.
→ **Prioridade máxima** (diferencial exclusivo: parceria oficial).

### Pilar 6 - Energia solar fotovoltaica
`curso de energia solar`, `curso energia solar fotovoltaica`, `curso instalação de energia solar`, `curso dimensionamento energia solar`.
→ **Apoio / diversificação** (curso existente; público adjacente).

### Pilar 7 - Gestão e comercial para integradores
`como precificar cftv`, `como vender segurança eletrônica`, `como montar empresa de segurança eletrônica`, `gestão de empresa de segurança eletrônica`, `como fazer orçamento de cftv`.
→ **Priorizar - conteúdo** (topo/meio de funil; atrai o dono do negócio).

### Pilar 8 - Profissão / entrada no mercado
`como ser instalador de câmeras`, `quanto ganha um instalador de cftv`, `como trabalhar com segurança eletrônica`, `profissão instalador de alarme`, `mercado de segurança eletrônica`.
→ **Priorizar - conteúdo** (alto volume informacional; capta iniciantes → funil de matrícula).

### Pilar 9 - EAD / cursos online
`curso de segurança eletrônica online`, `curso de cftv ead`, `curso segurança eletrônica com certificado`, `curso online instalador`.
→ **Prioridade** (casa com a plataforma EAD).

### Pilar 10 - Marca (defesa e reputação)
`parkseg`, `parkseg academy`, `parkseg treinamentos`, `parkseg é bom`, `parkseg cursos`.
→ **Usar - marca** (proteção de reputação; separar dos concorrentes de nome parecido).

**A descartar / não usar como pauta principal:** termos de "serviço" sem intenção de curso (`empresa de monitoramento`, `portaria remota curitiba` etc.), cibersegurança/segurança da informação corporativa (fora do portfólio atual), e homônimos (`segurança do trabalho`, `EPI`, marcas de terceiros como passeg/piraseg/primeseg).

---

## 5. Pilares de conteúdo sugeridos (visão para a estratégia)

O mesmo esqueleto do documento G5, mas com a lógica de **academia**: cada pilar vira uma **página pilar** (guia do tema) + artigos long-tail + distribuição em redes. O caminho do funil muda de "contratar serviço" para **matricular no curso**:

> dúvida técnica → aprendizado gratuito (conteúdo) → confiança na escola → certificação/carreira → **matrícula no curso**.

1. CFTV e câmeras · 2. Alarmes · 3. Controle de acesso e portaria · 4. Redes/Mikrotik/Fibra · 5. Certificações Hikvision · 6. Energia solar · 7. Gestão e comercial · 8. Profissão/carreira · 9. EAD/online · 10. Marca.

Formatos de rede social ficam iguais ao G5 (carrossel educativo, Reel, comparativo, bastidores - **aqui: bastidores das aulas/laboratório**, caso real = **depoimento de aluno**, FAQ, conteúdo local de SC). O gancho muda: "aprenda a fazer / suba de nível na carreira" em vez de "proteja seu patrimônio".

---

## 6. O que falta para fechar a estratégia completa (igual à do G5)

Para eu montar o documento final no mesmo padrão do G5, o ideal é você me passar:

1. ✅ **Já tenho:** negócio, catálogo de cursos, auditoria técnica, leitura dos prints.
2. ⏳ **Validar volumes** das palavras-chave da seção 4 no Ubersuggest/Keyword Planner (Brasil). Se puder exportar a lista "Ideias de Palavras-chave" com volume/CPC/SD, eu classifico tudo no Apêndice A (como no G5).
3. ⏳ **Confirmar o catálogo atual e preços/modalidades** (quais cursos estão ativos, cargas horárias, presencial x EAD).
4. ⏳ **Redes sociais ativas** do ParkSeg (Instagram/LinkedIn/YouTube) e se há blog no site.
5. ⏳ **Prioridade comercial:** qual curso/linha o ParkSeg mais quer vender agora (CFTV? Certificação Hikvision? Portaria remota?) - isso define o topo do plano editorial de 90 dias.

Com esses itens, entrego a **Estratégia de Conteúdo SEO completa do ParkSeg** (resumo executivo, metodologia, pilares, arquitetura de blog, redes sociais, plano de 90 dias, medição, riscos e Apêndices A/B) - no mesmo formato do documento do G5, em Markdown e PDF.
