# BR Security / Névoa Global
## E-mails marketing: SegSummit, reativação, boas vindas e nutrição
### Textos prontos para montar no Mailchimp

| Campo | Informação |
|---|---|
| **Cliente** | BR Security (marca de produto: Névoa Global) |
| **Ferramenta** | Mailchimp, público "BR Security" |
| **Base** | Auditoria de e-mail marketing e reunião de alinhamento de 05/10/2026 |
| **Remetente** | Nome de uma pessoa da equipe, no formato "Nome \| BR Security", com resposta para um e-mail que alguém lê |
| **Data** | Outubro de 2026 |

> Os e-mails com fundo amarelo e o selo **SEGSUMMIT** são os do evento (21/10, Distrito Anhembi, São Paulo). São quatro e precisam sair primeiro. O restante entra como automação depois do evento.

---

## O que vale para todos os e-mails

Decisões da reunião de 05/10 aplicadas aqui:

0. **Ajustes da Monique em 15/10:** nenhum e-mail menciona o NG500. O SegSummit é anunciado como lançamento, sem dizer o que será lançado. As peças usam a identidade do site da BR Security (preto #020202, verde limão #F1FC00, fontes Anton e Titillium Web) e o logo do SegSummit. Amarelo não faz parte da marca.

1. **A base é de relacionamento.** Os contatos já tiveram um primeiro contato com a BR Security na Exposec ou nos eventos da Abese. O tom é de retomada de conversa, não de apresentação para lista fria.
2. **O e-mail 3 da reativação ("Posso continuar te mandando isso?") fica em espera**, a pedido da Monique. Não está neste documento.
3. **Banco só como caso de sucesso.** Nenhum e-mail pergunta se o equipamento "é coisa de banco".
4. **Slogan na assinatura: "Segurança garantida."** Nada de "interrompa" ou "mais do que alertar".
5. **Demonstração é o pedido de ação principal.**
6. **Boas vindas só para contato novo.** Quem já está na base não recebe.
7. **Um e-mail, um botão.** Assunto em caixa normal. Texto antes de imagem.
8. **Todos os links com UTM:** `utm_source=mailchimp&utm_medium=email&utm_campaign=<nome do e-mail>`.
9. **O público de clientes antigos da outra empresa**, criado para a promoção, fica fora de todos estes envios.

**Antes do primeiro envio (limpeza aprovada em 05/10):** arquivar os 37 contatos com bounce recorrente, separar os 4 contatos internos, apagar o campo CPF e reimportar o arquivo com nomes, cidades e tags corrigidos. Sem a correção, o \*|FNAME|\* sai em branco para 669 contatos da Exposec. As listas novas da Abese, como a de Brasília, entram com a tag de origem antes de qualquer envio.

---

## Calendário

| Data | E-mail | Para quem |
|---|---|---|
| **Qua 14/10** | **E1. Convite SegSummit** (versão Exposec e versão Abese) | Base limpa |
| **Seg 19/10** | **E2. Lembrete SegSummit** | Quem abriu o E1 e não clicou, de SP e região |
| **Qui 22/10** | **E3. Boas vindas SegSummit** | Contatos novos captados no evento |
| **Sex 23/10** | **E4. O que mostramos no SegSummit** (vale como reativação 2) | Base limpa, menos quem recebeu o E3 |
| A partir de 26/10 | Boas vindas permanente (3 e-mails) | Todo contato novo, por automação |
| A partir de 03/11 | Nutrição do usuário final (5 e-mails, a cada 2 semanas) | Usuário final e leads novos de varejo |

Ninguém recebe mais de um e-mail por semana, com exceção da semana do evento.

---

<div class="seg" markdown="1">

### E1. Convite SegSummit · qua 14/10

**Para quem:** base limpa (Exposec e Abese). Duas versões, separadas pela tag de origem.
**Objetivo:** retomar o contato e marcar conversa no evento.

**Versão Exposec**

* **Assunto:** Nos vimos na Exposec. Agora é no SegSummit
* **Pré-cabeçalho:** Dia 21/10, no Distrito Anhembi. Vamos levar um lançamento

**Versão Abese**

* **Assunto:** Nos conhecemos no evento da Abese. Vamos conversar no SegSummit?
* **Pré-cabeçalho:** Dia 21/10, em São Paulo. E se não puder ir, a gente vai até você

<!--email-->
Olá,

Você conheceu a BR Security na [Exposec / no evento da Abese]. Desde então, o gerador de névoa entrou em farmácia, joalheria, central de monitoramento e armazém, em vários estados.

No dia 21 de outubro estaremos no SegSummit, no Distrito Anhembi, e vamos levar um lançamento. A apresentação acontece no nosso estande, com demonstração ao vivo e a nossa engenharia para conversar sobre o projeto que você tem em mãos.

Reserve o seu horário e veja primeiro.

**[Botão] Reservar meu horário**

SegSummit 2026
21/10, das 08:00h às 21:00h
Distrito Anhembi, São Paulo
Stand 214

Não vai a São Paulo? Responda este e-mail que a gente agenda uma demonstração na sua cidade.

Time BR Security
BR Security. Segurança garantida.
Brasil: +55 (11) 97556.5874 · Espanha: +34 609 44 56 47
<!--/email-->

**Botão leva para:** WhatsApp +55 (11) 97556.5874, com a mensagem pronta "Olá! Quero reservar um horário com a BR Security no SegSummit." Design em `emails/E1-Convite-SegSummit.html`.
**Tag para quem clicar:** `SegSummit: horário pedido`. O comercial confirma o horário em até 24h.

</div>

---

<div class="seg" markdown="1">

### E2. Lembrete SegSummit · seg 19/10

**Para quem:** abriu o E1, não clicou, e é de SP, RJ, MG ou PR. Quem já pediu horário não recebe.
**Objetivo:** última chamada para o evento.

* **Assunto:** Quarta-feira, no SegSummit
* **Pré-cabeçalho:** Ainda dá tempo de reservar um horário

<!--email-->
\*|FNAME|\*, é nesta quarta.

Dia 21, das 08:00h às 21:00h, estaremos no SegSummit, no Distrito Anhembi, mostrando o gerador de névoa em funcionamento.

Se você atende varejo, central de monitoramento ou cuida de prevenção de perdas, vale passar para ver de perto como o equipamento é dimensionado por metro cúbico e como ele se integra à central que você já usa.

**[Botão] Reservar meu horário**

Stand 214

[Nome]
BR Security. Segurança garantida.
<!--/email-->

</div>

---

<div class="seg" markdown="1">

### E3. Boas vindas SegSummit · qui 22/10

**Para quem:** contatos novos captados no evento, importados com a tag `Origem: SegSummit 2026` até 22/10. Dispara como primeiro e-mail do fluxo de boas vindas.
**Objetivo:** aproveitar a memória do evento, que dura poucos dias.

* **Assunto:** Obrigado por passar na BR Security, \*|FNAME|\*
* **Pré-cabeçalho:** O vídeo da demonstração e o próximo passo

<!--email-->
Olá, \*|FNAME|\*.

Obrigado por conversar com a gente no SegSummit.

Como prometido, aqui está o vídeo da demonstração: a névoa ocupando o ambiente em segundos, do jeito que você viu no estande.

**[Botão] Assistir à demonstração**

Se você saiu do evento com um projeto em mente, seja uma loja, uma rede ou um cliente da sua carteira, o próximo passo é simples: a gente leva o equipamento até o ambiente e mostra o resultado lá, no espaço real.

É só responder este e-mail com a cidade e o tipo de ambiente.

[Nome]
BR Security. Segurança garantida.
<!--/email-->

**Depois deste e-mail**, o contato segue o fluxo de boas vindas permanente a partir do e-mail B2.

</div>

---

<div class="seg" markdown="1">

### E4. O que mostramos no SegSummit · sex 23/10

**Para quem:** base limpa, menos quem recebeu o E3. Este e-mail cumpre o papel do e-mail 2 da reativação.
**Objetivo:** mostrar o produto funcionando para quem não foi ao evento.

* **Assunto:** O que acontece nos primeiros segundos
* **Pré-cabeçalho:** O vídeo que mais parou gente no SegSummit

<!--email-->
Olá, \*|FNAME|\*.

No SegSummit, o momento que mais reuniu gente no estande foi sempre o mesmo: o disparo. Em poucos segundos, o ambiente inteiro fica tomado por uma névoa branca, e quem está dentro deixa de enxergar o que veio buscar.

Gravamos para quem não pôde ir.

**[Botão] Ver o vídeo**

Três coisas que todo mundo perguntou:

1. A névoa é atóxica, seca e não deixa resíduo. Pode ser usada em loja de roupa, farmácia e perto de eletrônicos.
2. O equipamento só dispara por comando da central de alarme. Não dispara sozinho.
3. O NG1000 ocupa 1.500 m³ em 60 segundos. O NG2000, 2.800 m³ em 110 segundos.

Quer ver isso acontecendo no ambiente do seu cliente ou da sua loja? Responda este e-mail que a gente agenda uma demonstração.

[Nome]
BR Security. Segurança garantida.
<!--/email-->

**Vídeo:** demonstração gravada no evento, hospedada no YouTube, com GIF dos primeiros segundos no corpo do e-mail e link para o vídeo.
**Se não houver vídeo do evento:** usar a melhor demonstração já gravada (por exemplo, a da loja de motos) e trocar a primeira frase por "O momento que mais chama atenção em toda demonstração é o disparo."

</div>

---

## Boas vindas permanente

**Gatilho:** tag `Origem: <evento ou canal>` adicionada (tráfego pago, LinkedIn, formulário do site, próximos eventos).
**Para quem:** só contato novo. Quem já estava na base não entra.
**Montagem:** Customer Journey no Mailchimp, com espera entre os e-mails.

### B1. Dia 0 · Boas vindas

* **Assunto:** Bem-vindo à BR Security, \*|FNAME|\*
* **Pré-cabeçalho:** O que vem nos próximos e-mails

<!--email-->
Olá, \*|FNAME|\*.

Que bom ter você por aqui.

A BR Security fabrica no Brasil o gerador de névoa: um equipamento que, acionado pela central de alarme, ocupa o ambiente em segundos com uma névoa seca e atóxica, e tira de quem entrou a visibilidade de que precisa para agir.

Nos próximos e-mails você vai receber pouca coisa e direto ao ponto: onde a névoa se aplica, como ela é dimensionada e casos reais de quem já usa.

Para começar, veja o equipamento funcionando.

**[Botão] Assistir à demonstração**

[Nome]
BR Security. Segurança garantida.
<!--/email-->

### B2. Dia 3 · Do banco para o seu negócio

* **Assunto:** Deu certo no banco. Imagine no seu negócio
* **Pré-cabeçalho:** Onde a mesma solução está sendo aplicada

<!--email-->
Olá, \*|FNAME|\*.

O gerador de névoa provou resultado no ambiente mais exigente da segurança patrimonial: o setor financeiro. Uma empresa do setor já protege centenas de unidades com ele.

Na Europa, a mesma solução foi para o varejo comum: tabacaria, adega, joalheria, loja de eletrônicos. No Brasil, o perfil é o mesmo em quase toda esquina. Farmácia com medicamento de alto valor no balcão, loja de celular, joalheria de shopping.

O que protege uma agência protege o balcão de uma loja. Muda só o dimensionamento, que é feito pelo volume do ambiente.

**[Botão] Ver onde a névoa se aplica**

[Nome]
BR Security. Segurança garantida.
<!--/email-->

**Botão leva para:** página do site com os segmentos atendidos.

### B3. Dia 7 · Pergunta direta

* **Assunto:** Uma pergunta rápida
* **Pré-cabeçalho:** Faz sentido ver isso de perto?

<!--email-->
\*|FNAME|\*, uma pergunta rápida.

Faz sentido a gente levar o gerador de névoa até o seu ambiente, ou até um cliente seu, para uma demonstração de quinze minutos?

Se sim, responda este e-mail com a cidade e o tipo de ambiente. Eu mesmo organizo.

[Nome]
BR Security
<!--/email-->

**Formato:** texto puro, sem imagem e sem botão, assinado por uma pessoa. É o e-mail com mais chance de resposta do fluxo.
**Depois do B3:** contato de usuário final segue para a nutrição. Contato de canal segue para o envio mensal do canal.

---

## Nutrição do usuário final

**Para quem:** tag `Mercado: Usuario final` e todo lead novo de varejo vindo de tráfego pago, LinkedIn, parcerias ou redes sociais.
**Frequência:** um e-mail a cada duas semanas.
**Sequência:** dor, segmento, prova, objeção e oferta de demonstração, como apresentado na reunião de 05/10.

### N1. Dor

* **Assunto:** A câmera gravou. E a mercadoria?
* **Pré-cabeçalho:** O que acontece nos minutos em que ninguém está na loja

<!--email-->
Olá, \*|FNAME|\*.

Quase toda loja tem câmera. E quase todo gerente já passou por isso: a imagem está lá, nítida, e a mercadoria não está mais.

O prejuízo de um furto se forma nos minutos entre a detecção e a chegada de alguém. Nesse intervalo, o ambiente está sozinho.

O gerador de névoa trabalha exatamente nessa janela. Acionado pela central de alarme que a loja já tem, ele ocupa o ambiente em segundos. Quem entrou deixa de enxergar prateleira, balcão e saída.

Nada do que já está instalado sai do lugar. É uma camada a mais no mesmo sistema.

**[Botão] Ver como funciona**

[Nome]
BR Security. Segurança garantida.
<!--/email-->

### N2. Segmento

* **Assunto:** Farmácia, loja, depósito: onde o furto dói mais
* **Pré-cabeçalho:** O que muda na proteção de cada tipo de ambiente

<!--email-->
Olá, \*|FNAME|\*.

Cada negócio perde de um jeito diferente.

**Farmácia:** medicamento de alto valor em pouco espaço, perto do balcão.
**Loja de eletrônicos e celular:** estoque pequeno, caro e fácil de carregar.
**Joalheria:** valor altíssimo concentrado em vitrine.
**Depósito e centro de distribuição:** volume grande, muitas horas sem ninguém.

O gerador de névoa é dimensionado pelo volume de cada ambiente. O NG1000 cobre 1.500 m³ em 60 segundos e o NG2000 cobre 2.800 m³ em 110 segundos.

Qual desses é o seu caso?

**[Botão] Ver a solução para o meu segmento**

[Nome]
BR Security. Segurança garantida.
<!--/email-->

**Botão leva para:** página do site por segmento. Se o site ainda não tiver essas páginas, usar uma página única com os segmentos em blocos.

### N3. Prova

* **Assunto:** O que acontece nos primeiros segundos
* **Pré-cabeçalho:** Veja o equipamento disparando num ambiente real

<!--email-->
Olá, \*|FNAME|\*.

Falar de névoa é uma coisa. Ver a névoa tomar uma loja inteira é outra.

Gravamos o disparo num ambiente real, sem edição: [descrever o ambiente do vídeo, por exemplo uma loja de motos]. Repare em quanto tempo o espaço deixa de ser visível.

**[Botão] Assistir ao vídeo**

[Se houver autorização por escrito: depoimento curto de um cliente, com nome, cargo e cidade. Se não houver, usar a versão anônima: "Uma rede do setor financeiro já protege centenas de unidades com o mesmo equipamento."]

[Nome]
BR Security. Segurança garantida.
<!--/email-->

### N4. Objeção

* **Assunto:** É seguro para as pessoas e para a mercadoria?
* **Pré-cabeçalho:** As perguntas que todo lojista faz antes de instalar

<!--email-->
Olá, \*|FNAME|\*.

Antes de instalar, todo lojista faz as mesmas perguntas. Aqui estão as respostas da ficha técnica.

**Faz mal à saúde?** Não. A névoa é atóxica.
**Suja a mercadoria?** Não. A névoa é seca e não deixa resíduo, nem em roupa, nem em eletrônico.
**E se disparar sozinho?** Não dispara. Ele só é acionado por comando da central de alarme.
**Precisa trocar o alarme que eu já tenho?** Não. É compatível com as centrais de alarme do mercado.
**E se faltar energia?** O equipamento tem backup de 1 a 2 horas, conforme o modelo.

Ficou alguma dúvida? Responda este e-mail que a nossa engenharia responde.

**[Botão] Ver a ficha técnica**

[Nome]
BR Security. Segurança garantida.
<!--/email-->

> Respostas a validar pela engenharia antes do envio, como no carrossel da Semana 3 do LinkedIn.

### N5. Oferta

* **Assunto:** Uma demonstração no seu ambiente, sem compromisso
* **Pré-cabeçalho:** Quinze minutos para ver o resultado no seu espaço

<!--email-->
Olá, \*|FNAME|\*.

Nada convence tanto quanto ver o equipamento funcionando no próprio ambiente.

Por isso a gente leva o gerador de névoa até você. Em quinze minutos, a nossa equipe mostra o disparo, avalia o volume do espaço e indica o modelo certo. Sem compromisso.

A instalação é feita por um integrador parceiro da sua região, que já conhece o equipamento.

**[Botão] Agendar minha demonstração**

[Nome]
BR Security. Segurança garantida.
<!--/email-->

**Tag para quem clicar:** `Lead quente`. O comercial entra em contato em até 24h.

---

## Pendências antes de enviar

| Item | Responsável |
|---|---|
| Limpeza e reimportação da base, já aprovadas | MarkSeg |
| Formato da presença no SegSummit, estande e se haverá disparo | BR Security |
| Formulário ou WhatsApp para reservar horário no evento | BR Security |
| Vídeo de demonstração hospedado no YouTube | BR Security e MarkSeg |
| Lista dos contatos captados no SegSummit até 22/10 | Comercial BR Security |
| Validação técnica das respostas do N4 | Engenharia BR Security |
| Autorização para citar cliente no N3, ou uso da versão anônima | BR Security |
| Páginas de segmento no site para o N2 | BR Security e MarkSeg |
