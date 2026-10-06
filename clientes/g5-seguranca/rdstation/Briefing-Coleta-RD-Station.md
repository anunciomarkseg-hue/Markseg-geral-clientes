# Auditoria RD Station G5 Segurança | Briefing de coleta e estrutura de análise

**Cliente:** G5 Segurança Integrada
**Objetivo:** auditar a operação de marketing no RD Station e cruzar com a auditoria do site e o relatório do GA4 já produzidos.
**Status:** aguardando coleta de dados.

## Como coletar

A coleta pode ser feita de três formas, e qualquer uma serve:

1. Exportação direta pelo painel do RD Station, em CSV
2. Prints das telas de relatório
3. Coleta assistida pelo Claude com extensão no Chrome, usando o prompt da seção seguinte

## Prompt pronto para a coleta assistida

> Você está no RD Station Marketing da G5 Segurança. Navegue pela conta e colete os dados abaixo para uma auditoria. Apenas leia e registre, não altere nada.
>
> 1. Total de contatos na base, separando ativos, descadastrados e bounce. Depois a lista de segmentações com nome e número de contatos de cada uma.
>
> 2. Relatório de e-mails dos últimos 12 meses. Para cada disparo: nome, data, quantidade enviada, taxa de entrega, abertura, clique, descadastro e spam.
>
> 3. Landing pages publicadas, com visitas, conversões e taxa de conversão de cada uma.
>
> 4. Fluxos de automação, com nome, status (ativo, pausado ou nunca publicado) e quantos contatos passaram por cada um.
>
> 5. Integrações conectadas na conta: site, formulários, Meta, Google, CRM.
>
> Entregue em texto organizado por seção. Se algum dado não estiver disponível, diga que não encontrou em vez de estimar.

## Estrutura do relatório final

### 1. Ficha técnica
Fontes, período coberto, método de coleta e limitações declaradas.

### 2. Resumo executivo
Os três achados que mudam decisão, com o número que sustenta cada um.

### 3. Base de contatos
Tamanho da base, proporção de ativos, descadastrados e bounce. Taxa de crescimento se houver histórico. Critério de avaliação: base com mais de 30% de inativos indica necessidade de reativação antes de qualquer aumento de frequência de envio.

### 4. Segmentação
Quantidade de segmentações, quantas são usadas de fato, sobreposição entre elas e profundidade dos critérios. Critério: segmentação que não separa condomínio, empresa e residência desperdiça o principal eixo comercial da G5.

### 5. E-mail marketing
Frequência de disparo, taxas de entrega, abertura, clique, descadastro e spam, comparadas com a referência do setor. Critério: entrega abaixo de 95% indica problema de higiene de base, e descadastro acima de 0,5% por disparo indica problema de segmentação ou de conteúdo.

### 6. Landing pages e conversão
Quantidade de páginas ativas, conversão de cada uma, materiais que ainda geram lead e materiais mortos. Cruzamento com o dado do GA4 que mostra as LPs hospedadas em materiais.g5seguranca.com.br.

### 7. Automação
Fluxos existentes, quantos ativos, quantos pausados, quantos nunca publicados. Lógica de nutrição e de qualificação. Critério: fluxo criado e nunca publicado é investimento parado.

### 8. Integrações e medição
O que está conectado e o que não está. Ponto já identificado na auditoria do site: o botão flutuante do RD Station no site é um componente sem link rastreável, e as conversões das LPs podem não estar chegando ao GA4 como evento principal.

### 9. Cruzamento com o que já sabemos
Dados já apurados que entram na análise:

| Achado | Origem | Data |
|---|---|---|
| E-mail como canal: 92 usuários, 30,7 s de engajamento, 3 eventos principais, taxa de 2,17% | GA4, 90 dias | 23/06 a 20/09/2026 |
| RD Station como origem de campanha: 99 sessões | GA4, 90 dias | 23/06 a 20/09/2026 |
| LPs do RD Station recebem tráfego pago relevante e registram zero evento principal no GA4 | GA4 e verificação direta | setembro de 2026 |
| Botão flutuante do site é pop-up do RD Station sem endereço de destino | Auditoria do site | 18/09/2026 |
| Paid Social: 1.565 usuários, 2 segundos de engajamento, zero conversão registrada | GA4, 90 dias | 23/06 a 20/09/2026 |

A hipótese principal a confirmar: parte das conversões acontece e é registrada apenas no RD Station, o que faria o GA4 subestimar o desempenho de todos os canais pagos.

### 10. Plano de ação
Itens priorizados em três horizontes, no mesmo formato da auditoria do site.

## Dados ainda não recebidos

- [ ] Base de contatos e segmentações
- [ ] Relatório de e-mails dos últimos 12 meses
- [ ] Landing pages e conversões
- [ ] Fluxos de automação
- [ ] Integrações conectadas
