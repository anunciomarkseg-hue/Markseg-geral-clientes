# Passo a passo: publicar o e-mail na Brevo

Guia operacional para subir a campanha **Poda preventiva e disparos falsos** na Brevo, do zero até o envio.

Tempo estimado: 40 a 60 minutos na primeira vez, contando a criação dos atributos e a importação da base.

> **Sobre os nomes dos menus:** a Brevo muda a interface de tempos em tempos e traduz alguns termos. Onde o nome no seu painel estiver diferente, indico entre parênteses a versão em inglês, que costuma ser a mais estável.

---

## Etapa 0 · Antes de começar

Tenha em mãos:

- Acesso à conta Brevo com permissão de criar campanhas
- O arquivo `email-poda-preventiva.html` deste diretório
- O logo da Intersept em PNG, largura de 300 a 400 px
- A planilha de clientes de monitoramento, com e-mail, nome, cidade, tipo de imóvel e se tem Atendimento Tático em contrato
- O endereço completo da sede, com bairro e CEP, para o rodapé

**Confirme antes de tudo:** o domínio `intersept.com.br` precisa estar autenticado na Brevo. Vá em **engrenagem (Configurações) → Remetentes, domínios e IPs dedicados → Domínios** (*Senders, Domains & Dedicated IPs*). O domínio precisa aparecer com DKIM e DMARC validados, em verde. Se estiver pendente, resolva isso primeiro com quem administra o DNS, senão boa parte da campanha cai em spam.

---

## Etapa 1 · Criar os atributos de contato

Os blocos dinâmicos leem esses quatro campos. Sem eles, todo mundo recebe a versão genérica.

1. Menu lateral: **Contatos** (*Contacts*)
2. Aba **Configurações** (*Settings*) → **Atributos de contato** (*Contact attributes*)
3. Clique em **Adicionar um atributo** (*Add an attribute*)
4. Crie um por um:

| Nome do atributo | Tipo |
|---|---|
| `NOME` | Texto |
| `CIDADE` | Texto |
| `TIPO_IMOVEL` | Texto |
| `ATENDIMENTO_TATICO` | Booleano |

**Atenção ao nome:** escreva exatamente assim, em maiúsculas e sem acento. É esse nome que está escrito dentro do HTML. Se a sua conta já tem um campo de nome chamado `FIRSTNAME` ou `NOME_CLIENTE`, você tem duas opções: usar o campo existente e trocar `contact.NOME` no HTML pelo nome dele, ou criar o `NOME` e preencher.

> **Se o tipo Booleano der trabalho na importação:** crie `ATENDIMENTO_TATICO` como **Texto** e use os valores `SIM` e `NAO`. Nesse caso, abra o HTML e troque a linha `{% if contact.ATENDIMENTO_TATICO %}` por `{% if contact.ATENDIMENTO_TATICO == "SIM" %}`. É a única alteração necessária.

---

## Etapa 2 · Preparar e importar a base

### 2.1 Montar a planilha

Use `modelo-importacao-contatos.csv` deste diretório como base. As colunas são:

```
EMAIL,NOME,CIDADE,TIPO_IMOVEL,ATENDIMENTO_TATICO
```

Regras que não podem ser quebradas, porque o e-mail compara texto exato:

| Coluna | Valores aceitos |
|---|---|
| `CIDADE` | `CURITIBA`, `FOZ DO IGUACU`, `JOINVILLE`, `PORTO ALEGRE` |
| `TIPO_IMOVEL` | `CONDOMINIO`, `EMPRESA`, `RESIDENCIA` |
| `ATENDIMENTO_TATICO` | `true` ou `false` |

Tudo em maiúsculas e **sem acento**. `Foz do Iguaçu` com acento e minúsculas não bate com a condição e o contato recebe o texto genérico. No Excel, use Localizar e Substituir para padronizar antes de exportar.

Salve como **CSV UTF-8** (no Excel: Salvar como → CSV UTF-8 delimitado por vírgula). Se salvar em outro formato, os acentos do nome chegam quebrados.

### 2.2 Importar

1. **Contatos → Importar contatos** (*Import contacts*)
2. Escolha **Enviar um arquivo** e selecione o CSV
3. Marque o separador como **vírgula** se a Brevo perguntar
4. Na tela de correspondência de colunas, confirme que cada coluna do arquivo está apontando para o atributo certo: `EMAIL` no e-mail, `NOME` em `NOME`, e assim por diante
5. Escolha ou crie a lista de destino. Sugestão de nome: **Clientes ativos · Monitoramento de Alarmes**
6. Marque a opção de **atualizar contatos existentes**, para não duplicar quem já está na base
7. Confirme a importação

### 2.3 Conferir

Abra dois ou três contatos importados e veja se os quatro campos apareceram preenchidos, com os valores certos. Vale conferir um de cada cidade.

---

## Etapa 3 · Criar o segmento de envio

O e-mail só faz sentido para quem tem **sensor de barreira externo**. Mandar para quem não tem gera dúvida e ligação desnecessária na central.

1. **Contatos → Segmentos** (*Segments*) → **Criar um segmento**
2. Filtre pela lista **Clientes ativos · Monitoramento de Alarmes**
3. Adicione o filtro que identifica quem tem sensor externo. Se ainda não existe um campo para isso, o caminho mais rápido é importar apenas os clientes elegíveis em uma lista separada, filtrando na planilha antes
4. Salve o segmento com um nome claro: **Monitoramento · sensor de barreira externo**

---

## Etapa 4 · Criar a campanha e colar o HTML

1. Menu lateral: **Campanhas** (*Campaigns*) → **E-mail** → **Criar uma campanha de e-mail**
2. Dê um nome interno, que só a equipe vê: `2026-09 Poda preventiva sensores`
3. **Assunto:** cole uma das opções abaixo
   - A: `Vento forte pode disparar seu alarme sem motivo`
   - B: `Uma poda simples evita o disparo falso do alarme`
4. **Texto de pré-visualização** (*preview text*): deixe **em branco**. O pré-header já está embutido no HTML, e preencher os dois faz o texto aparecer duplicado na caixa de entrada
5. **Remetente:** use um endereço do domínio autenticado. Sugestão: `monitoramento@intersept.com.br`, com nome de exibição `Intersept · Monitoramento`
6. **Responder para** (*reply to*): `monitoramento@intersept.com.br`, para que a resposta do cliente chegue em quem consegue atender
7. Na etapa de **Design**, escolha o editor **Codifique o seu próprio** (*Paste your code* ou *Import HTML*)
8. Abra `email-poda-preventiva.html` em um editor de texto simples (Bloco de Notas, VS Code, TextEdit em modo texto), selecione tudo com Ctrl+A, copie com Ctrl+C e cole na caixa da Brevo
9. Salve

> **Não abra o arquivo no Word para copiar.** O Word insere formatação e quebra o HTML. Use editor de texto puro.

---

## Etapa 5 · Trocar o logo

1. Ainda no editor de código da Brevo, ou antes de colar, localize o trecho marcado com `<!-- LOGO: ... -->`
2. Suba o PNG do logo pela galeria de imagens da Brevo (**Campanhas → Mídia** ou o ícone de imagem dentro do editor) e copie a URL do arquivo
3. No HTML, apague estas duas linhas:

```html
<div style="...">INTERSEPT</div>
<div style="...">Setor de Monitoramento</div>
```

4. E deixe ativa a linha da imagem, colando a URL no lugar de `COLE_AQUI_A_URL_DO_LOGO.png`:

```html
<img src="https://sua-url-da-brevo/logo-intersept.png" width="150" alt="Intersept" style="display:block;width:150px;height:auto;">
```

Mantenha o `alt="Intersept"`. Muitos clientes de e-mail bloqueiam imagem por padrão, e o texto alternativo é o que aparece no lugar.

---

## Etapa 6 · Completar o rodapé

Ainda no HTML, localize `Rua Dom João VI, 299` e complete com bairro e CEP. Endereço postal completo é exigência de boa prática antispam e conta pontos na entregabilidade.

Confira também se o telefone `4007-2640` e o e-mail `monitoramento@intersept.com.br` estão corretos com o Setor de Monitoramento. O botão do e-mail usa o link `tel:+554140072640`, então se o número mudar, altere nos dois lugares.

**Não mexa** nas tags `{{ unsubscribe }}`, `{{ update_profile }}` e `{{ mirror }}`. A Brevo substitui essas três automaticamente no envio, e o link de cancelamento é obrigatório.

---

## Etapa 7 · Testar o conteúdo dinâmico

Esta é a etapa que não pode ser pulada, porque é onde se descobre se a base está padronizada.

1. Na campanha, abra **Visualizar e testar** (*Preview & test*)
2. Use **Pré-visualizar como um contato** (*Preview as a contact*) e digite o e-mail de um contato real da base
3. Teste pelo menos cinco perfis diferentes:

| Teste | O que precisa aparecer |
|---|---|
| Condomínio em Curitiba | Parágrafo sobre pancadas de fim de tarde + orientação de zelador e jardinagem |
| Empresa em Foz do Iguaçu | Parágrafo sobre rajadas de verão + orientação de manutenção predial e áreas de carga |
| Residência em Joinville | Parágrafo sobre chuva constante + orientação direta ao morador |
| Cliente com Atendimento Tático | Parágrafo extra sobre deslocamento de equipe, logo abaixo do checklist |
| Contato com campos vazios | Saudação "Olá, tudo bem," e texto genérico, sem parágrafo de cidade e sem o de Tático |

Se algum contato mostrar o texto genérico quando não deveria, o problema está no valor gravado na base. Volte na Etapa 2.1 e padronize.

4. Depois, use **Enviar um teste** (*Send a test*) para pelo menos três caixas: um Gmail, um Outlook e um endereço que você abra pelo celular. Confira leitura no celular, se o botão está clicável e se os acentos estão corretos.

---

## Etapa 8 · Teste A/B do assunto (opcional, recomendado)

1. Ao criar a campanha, ative **Criar um teste A/B** (*A/B test*)
2. Escolha testar o **assunto**
3. Versão A: `Vento forte pode disparar seu alarme sem motivo`
4. Versão B: `Uma poda simples evita o disparo falso do alarme`
5. Defina 20% da base para o teste e 80% para o vencedor
6. Critério de vitória: **taxa de abertura**
7. Janela de decisão: 4 horas

---

## Etapa 9 · Agendar e enviar

1. Em **Destinatários**, selecione o segmento **Monitoramento · sensor de barreira externo**
2. Revise o número de contatos. Se vier muito diferente do esperado, confira o filtro antes de seguir
3. **Agendar** para terça ou quarta, entre 9h e 11h. Evite segunda de manhã e sexta à tarde
4. Avise a central antes do disparo. E-mail com telefone visível gera ligação, e a equipe precisa estar preparada para atender no mesmo dia

---

## Etapa 10 · Acompanhar

Volte na campanha em 24 e em 72 horas. Números de referência para e-mail de serviço para base própria:

| Indicador | Referência saudável |
|---|---|
| Taxa de entrega | acima de 97% |
| Taxa de abertura | 35% a 55% |
| Cliques | 2% a 6% |
| Descadastros | abaixo de 0,3% |
| Spam | abaixo de 0,05% |

E-mail de serviço para base ativa costuma ter abertura bem acima de campanha promocional. Se a abertura vier abaixo de 25%, provavelmente é problema de entregabilidade, não de assunto.

Vale registrar também um dado que a Brevo não mostra: o volume de disparos falsos por vegetação nas semanas seguintes. É esse número que diz se a campanha funcionou.

---

## Problemas comuns

| Sintoma | Causa provável | Solução |
|---|---|---|
| Todo mundo recebe o texto genérico | Valores da base com acento, minúscula ou espaço extra | Padronizar `CIDADE` e `TIPO_IMOVEL` conforme a Etapa 2.1 |
| Aparece `{{ contact.NOME }}` no corpo do e-mail | Atributo não existe na conta ou está com outro nome | Criar o atributo com o nome exato ou ajustar o HTML |
| Acentos quebrados | CSV salvo fora de UTF-8 | Reexportar como CSV UTF-8 e reimportar |
| Layout desmontado | HTML copiado do Word ou colado no editor errado | Copiar de editor de texto puro e colar no editor "Codifique o seu próprio" |
| Pré-header aparece duas vezes | Campo de texto de pré-visualização preenchido na Brevo | Deixar o campo em branco |
| Logo aparece quebrado | URL do logo não substituída | Voltar na Etapa 5 |
| Campanha vai para spam | Domínio sem DKIM ou DMARC | Autenticar o domínio, Etapa 0 |
