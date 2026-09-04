# Intersept · E-mail marketing · Poda preventiva e disparos falsos

Campanha de relacionamento e serviço para a base ativa de **Monitoramento de Alarmes**, com conteúdo dinâmico na **Brevo**.

- **Objetivo:** reduzir disparos falsos causados por vegetação nos sensores de barreira externos durante a temporada de chuvas e ventos.
- **Tipo:** e-mail de serviço (não é oferta comercial). Tom de orientação técnica, sem venda.
- **Arquivo pronto:** [`email-poda-preventiva.html`](email-poda-preventiva.html)
- **Modelo de importação:** [`modelo-importacao-contatos.csv`](modelo-importacao-contatos.csv)
- **Editor recomendado na Brevo:** *Campanhas → E-mail → Criar → Codifique o seu próprio (Paste your code)*
- **Prévias renderizadas:** [`previews/`](previews/) traz o e-mail já resolvido para três perfis, para aprovação sem precisar entrar na Brevo
  - [condomínio em Curitiba, com Atendimento Tático](previews/preview-condominio-curitiba.html)
  - [empresa em Foz do Iguaçu, sem Atendimento Tático](previews/preview-empresa-foz.html)
  - [contato com todos os campos vazios](previews/preview-campos-vazios.html)

---

## 1. Atributos que precisam existir na Brevo

Crie em **Contatos → Configurações → Atributos de contato**. Se algum já existir com outro nome, ajuste o nome dentro do HTML.

| Atributo | Tipo | Valores esperados | Onde é usado |
|---|---|---|---|
| `NOME` | Texto | Primeiro nome do contato | Saudação e assunto |
| `CIDADE` | Texto (ou Categoria) | `CURITIBA`, `FOZ DO IGUACU`, `JOINVILLE`, `PORTO ALEGRE` | Parágrafo de contexto regional |
| `TIPO_IMOVEL` | Texto (ou Categoria) | `CONDOMINIO`, `EMPRESA`, `RESIDENCIA` | Parágrafo de orientação da poda |
| `ATENDIMENTO_TATICO` | Booleano | `true` / `false` | Parágrafo extra sobre deslocamento de equipe |

**Importante sobre os valores:** o HTML compara texto exato, em maiúsculas e sem acento (`FOZ DO IGUACU`, `CONDOMINIO`, `RESIDENCIA`). Padronize a planilha de importação exatamente assim, senão a condição não bate e o contato cai no texto genérico. Se preferir manter acento na base, ajuste também a comparação dentro do HTML.

Todos os blocos têm saída padrão, então contato com campo vazio recebe uma versão neutra e correta do e-mail. Nada quebra.

---

## 2. Assunto e pré-header

Três opções para teste A/B. A Brevo aceita personalização no assunto.

| Versão | Assunto | Caracteres | Pré-header |
|---|---|---|---|
| **A · direta** | Vento forte pode disparar seu alarme sem motivo | 47 | Galhos perto dos sensores são a maior causa de alerta falso nesta época do ano. |
| **B · solução** | Uma poda simples evita o disparo falso do alarme | 48 | Cinco minutos de manutenção evitam um acionamento desnecessário. |
| **C · personalizada** | `{{ contact.NOME \| default : "Olá" }}, chuva e vento chegando` | 47 + nome | A vegetação alta é o que mais aciona o alarme no vento. |

Recomendação: rodar A contra B em teste A/B na própria Brevo, com 20% da base e envio do vencedor para os 80% restantes. A versão C tende a ganhar abertura, mas só use se o campo `NOME` estiver limpo na base, porque nome errado ou em caixa alta no assunto queima confiança.

**Pré-header:** o texto já está embutido no HTML, em bloco oculto no topo. Deixe o campo "texto de prévia" da Brevo em branco ou com o mesmo texto, para não aparecer duplicado.

---

## 3. Mapa dos blocos dinâmicos

O HTML está comentado com `<!-- BLOCO DINÂMICO 1 -->`, `2` e `3` para facilitar a edição.

### Bloco 1 · Contexto por praça (`CIDADE`)
Um parágrafo curto na abertura que amarra o assunto à realidade local. Contato sem cidade preenchida simplesmente não recebe o parágrafo, e o e-mail segue coerente.

| Valor | Texto entregue |
|---|---|
| `CURITIBA` | Pancadas de fim de tarde acompanhadas de vento |
| `FOZ DO IGUACU` | Rajadas das chuvas de verão movimentando árvores inteiras |
| `JOINVILLE` | Chuva constante e vegetação de crescimento rápido |
| `PORTO ALEGRE` | Ventos das frentes frias |
| vazio | Bloco não aparece |

### Bloco 2 · Orientação por tipo de imóvel (`TIPO_IMOVEL`)
É o bloco que mais muda a percepção de relevância, porque fala com quem de fato executa a poda.

| Valor | Texto entregue |
|---|---|
| `CONDOMINIO` | Incluir na rotina de manutenção, combinar com zelador ou jardinagem, atenção a divisas e fundos |
| `EMPRESA` | Incluir no plano de manutenção predial, orientar a equipe responsável, atenção a fundos, laterais e áreas de carga |
| `RESIDENCIA` | Poda direta pelo morador, resolve em uma tarde e vale para a temporada |
| vazio ou outro | Texto original, genérico e correto |

### Bloco 3 · Atendimento Tático (`ATENDIMENTO_TATICO`)
Aparece só para quem tem a equipe de resposta em contrato, explicando que cada disparo gera deslocamento. Para os demais, o parágrafo some, o que evita prometer um serviço que aquele cliente não contratou.

---

## 4. Passo a passo na Brevo

> Versão detalhada, com nomes de menu, modelo de planilha e solução de problemas: **[PASSO-A-PASSO-BREVO.md](PASSO-A-PASSO-BREVO.md)**. O resumo abaixo serve para quem já conhece a plataforma.


1. **Criar os atributos** da tabela do item 1.
2. **Importar ou atualizar os contatos** com `NOME`, `CIDADE`, `TIPO_IMOVEL` e `ATENDIMENTO_TATICO` preenchidos.
3. **Criar a lista ou o segmento de envio.** O critério é ter contrato ativo de monitoramento **com sensor de barreira externo**. Quem não tem sensor externo não deve receber, porque o e-mail não faz sentido e gera ruído.
4. **Nova campanha → Codifique o seu próprio** e colar o conteúdo de `email-poda-preventiva.html`.
5. **Trocar o logo:** no bloco `<!-- LOGO -->`, subir o arquivo pela galeria da Brevo, copiar a URL, descomentar a linha do `<img>` e apagar as duas linhas de texto que estão no lugar.
6. **Conferir o rodapé:** completar o endereço com bairro e CEP. Endereço postal completo é exigência de boa prática antispam e ajuda na entregabilidade.
7. **Manter os links `{{ unsubscribe }}`, `{{ update_profile }}` e `{{ mirror }}`** como estão. A Brevo substitui sozinha no envio.
8. **Pré-visualizar por contato:** na Brevo, use *Visualizar e testar → Pré-visualizar como um contato* e teste pelo menos quatro contatos, um de cada combinação de cidade e tipo de imóvel, mais um com os campos vazios.
9. **Enviar teste** para um endereço Gmail, um Outlook e um celular antes de disparar.
10. **Horário sugerido:** terça ou quarta, entre 9h e 11h. Evite segunda de manhã e sexta à tarde.

---

## 5. Checklist antes de disparar

- [ ] Os quatro atributos existem e estão preenchidos na base
- [ ] Valores de `CIDADE` e `TIPO_IMOVEL` padronizados em maiúsculas e sem acento
- [ ] Segmento contém apenas clientes com sensor de barreira externo
- [ ] Logo inserido no cabeçalho
- [ ] Endereço completo no rodapé
- [ ] Pré-visualização testada em pelo menos 5 contatos diferentes, incluindo um com campos vazios
- [ ] Teste enviado e conferido em Gmail, Outlook e celular
- [ ] Remetente autenticado no domínio intersept.com.br (SPF, DKIM e DMARC ativos na Brevo)
- [ ] Telefone e e-mail do rodapé conferidos com o Setor de Monitoramento

---

## 6. Se preferir montar no editor visual da Brevo

Dá para chegar ao mesmo resultado sem código, usando **exibição condicional de blocos**: monte um bloco de texto para cada variação e, em cada um, ative a condição de exibição pelo atributo do contato. É mais fácil de manter para quem não mexe com HTML, e mais trabalhoso de configurar, porque cada bloco recebe a regra manualmente. A versão em HTML deste diretório já entrega tudo pronto e é a rota mais rápida.

---

## 7. Sugestão de continuidade

Este e-mail funciona bem como primeiro de uma sequência curta de manutenção preventiva para a base:

1. **Poda preventiva** (este)
2. **Bateria e falta de energia:** o que acontece com o alarme quando cai a luz e como testar o nobreak
3. **Teste mensal do sistema:** como fazer o teste com a central sem gerar acionamento indevido
4. **Atualização de contatos de emergência e senha de coação:** por que revisar a cada seis meses

Sequência de serviço costuma sustentar taxa de abertura alta e reduz chamados repetitivos na central.
