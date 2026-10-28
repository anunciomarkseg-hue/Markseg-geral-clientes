# Intersept · Registro da conversa de trabalho

Cliente: **Intersept Soluções Integradas em Segurança Eletrônica e Proteção Patrimonial**
Agência: MarkSeg · Branch: `claude/intersept-blog-seo-content-jdrdqm`

Este é o registro estruturado da conversa, não a transcrição literal. Reúne o que foi pedido, o que foi decidido, os problemas que apareceram no caminho e o que ficou pendente, na ordem em que aconteceu. Serve para retomar o trabalho sem precisar reler o histórico.

---

## Sumário do que foi entregue

| Frente | Entrega | Onde está |
| --- | --- | --- |
| Blog SEO | 12 textos de 2 mil palavras, com pacote de SEO | `blog/` |
| Blog SEO | Compilados por mês, em Markdown e Word | `blog/compilados/` |
| E-mail marketing | Campanha de poda preventiva, com e sem conteúdo dinâmico | `email-marketing/poda-preventiva-sensores/` |
| E-mail marketing | Newsletter de setembro sobre os posts do blog | `email-marketing/newsletter-setembro/` |
| E-mail marketing | Campanha Black November | `email-marketing/black-november/` |
| Landing page | LP de portaria remota para tráfego pago | `landing-pages/portaria-remota-condominios/` |
| Landing page | Versão para colar em página do WordPress | `landing-pages/portaria-remota-condominios/wordpress/` |
| Consultoria | Diagnóstico do processo comercial e do CRM | neste documento, seção "Consultoria" |

---

## 1. Textos de blog com SEO

**Pedido.** A partir do PDF da estratégia de SEO, escrever os textos do blog seguindo os temas estabelecidos, como redator profissional especialista em SEO avançado. Restrições dadas: não trazer muitos tópicos, 2 mil palavras por texto, SEO correto, **sem travessões e sem vícios de linguagem de IA**. Cada texto começa com uma tabela de pacote de SEO.

**Campos da tabela de SEO**, fixos em todos os textos: Título (H1), Título SEO com 58 caracteres, Slug, Meta descrição com 154 caracteres, Palavra-chave foco, Palavras-chave secundárias, Categoria/editoria, Tags, Imagem de capa sugerida, Texto ALT da imagem, Meta title para redes/OpenGraph.

**Entregue.** 12 textos, numerados de `01` a `12`, entre 1.930 e 2.010 palavras cada, com zero travessões. Um script de validação conferiu, texto a texto, a contagem de palavras, o número de H2, a ausência de travessão e o tamanho do meta title e da meta descrição.

Depois o cliente pediu os textos agrupados: mês 1, mês 2 e mês 3, cada um em documento único. Foram gerados em Markdown e em Word, com `python-docx`.

**Arquitetura usada:** página pilar e long tail, sem canibalização entre os textos, com malha de links internos entre eles.

---

## 2. E-mail de poda preventiva

**Pedido.** E-mail marketing na Brevo, com conteúdo dinâmico, sobre poda preventiva da vegetação para evitar disparos de alarme falso.

**O que aconteceu, em ordem:**

1. Primeiro foi entregue com conteúdo condicional da Brevo: `{% if %}`, `{{ contact.ATTR }}`, blocos de texto que mudam conforme o tipo de imóvel e a cidade.
2. O cliente testou e não funcionou. Causa: **as condições da Brevo só funcionam no editor "Codifique o seu próprio"**. No editor de arrastar e soltar, o código das condições é escapado e aparece como texto na tela.
3. Veio a correção importante do cliente: *"o dinâmico que eu quero são imagens, ícones dinâmicos e não o texto"*. Ou seja, dinâmico significava **movimento**, não conteúdo variável. Foram feitos ícones e banner animados em GIF, discretos, clean e minimalistas, com primeiro quadro neutro para o Outlook.
4. Depois o cliente pediu só o layout, sem animação, sem o banner inicial, e em seguida sem rodapé e sem ícones.

**Entregue:** seis variações do mesmo e-mail, de completo a layout limpo, mais os textos dos blocos condicionais à parte, modelo CSV de importação de contatos, passo a passo da Brevo e prévias.

---

## 3. Newsletter de setembro

**Pedido.** Newsletter sobre os quatro textos publicados no blog em setembro, para disparar no começo do mês, a partir dos links enviados.

Depois pediu as imagens de capa dos posts dentro do e-mail, depois a prévia em PDF para aprovação do cliente, e por fim a remoção da seção "pendente antes do disparo" do PDF.

**Entregue:** HTML da newsletter, prévia e PDF de aprovação com ficha mais prévia da peça.

---

## 4. Consultoria sobre o processo comercial

**Pedido.** Auxílio com o cliente, a partir de cinco áudios de WhatsApp, um fluxo de chatbot da Blip em `.drawio` e um orçamento de agentes de IA de R$ 3.550 de implantação mais R$ 1.830 por mês.

**O que foi apurado nos áudios e nas mensagens:**

- Os leads caem no atendimento e **uma pessoa do comercial copia os dados no CRM à mão**.
- O CRM foi feito por um fornecedor de ERP, **não tem integração nenhuma, nem API**, e a Intersept **não tem mais contato com esse fornecedor**. Nas palavras do cliente, *"o CRM hoje é praticamente inútil"*.

**Diagnóstico.** O problema real não é o CRM, é a **velocidade de resposta ao lead**. Trocar o CRM resolve o sintoma errado e custa caro.

**Recomendações dadas:**

- Colocar uma camada de qualificação e distribuição **na frente** do atendimento, mantendo o CRM morto apenas como arquivo.
- O orçamento de R$ 3.550 **promete integração com o CRM, que não pode ser entregue**, porque o CRM não tem API. Isso foi apontado como risco contratual.
- Separar "CRM" de "ERP" na conversa interna, para não esbarrar na resistência de quem defende o sistema atual.
- Avaliação de ferramentas de mercado: Blip, Umbler Talk, Kommo, RD Station, entre outras, com análise detalhada do RD a pedido do cliente.

**Correção recebida durante a conversa.** Eu havia sugerido procurar o fornecedor do ERP para melhorar o CRM. O cliente lembrou que esse contato não existe mais. A sugestão foi retirada.

---

## 5. Landing page de portaria remota

**Pedido.** LP com foco em tráfego pago e conversão, seguindo a identidade visual do cliente e do site, de maneira minimalista, carregamento rápido, no padrão de LP de tráfego pago que gera resultado.

**Estrutura entregue:** oferta única, **sem menu de navegação** (para não vazar o tráfego pago), formulário acima da dobra, faixa de confiança, dores, como funciona, o que está incluído, perguntas frequentes, chamada de fechamento, barra fixa no celular, captura de UTM, `gclid` e `fbclid`, lead gravado antes de ir para o WhatsApp, eventos para o pixel do Meta e para o GA4.

**Ajustes pedidos ao longo da conversa, na ordem:**

1. Destaque na headline em "Portaria remota 24 horas".
2. Botões com mais destaque, com efeito de movimento de luz.
3. Degradê nos fundos azuis.
4. Remover o sublinhado da headline e deixá-la em uma linha só.
5. Fechar um espaço vazio grande no herói, abaixo da coluna de texto.
6. PDF para aprovação do cliente, depois refeito como peça inteira sem cortar.
7. Acrescentar CTAs que quebram as dobras e mandam para o formulário.
8. Deixar o fechamento como botão, não como segundo formulário.
9. Remover a frase "Prefere falar agora? Chame no WhatsApp" depois da CTA final.

**Problema do PDF.** O cliente relatou que o PDF baixado vinha desconfigurado. O arquivo estava íntegro: o que acontecia é que atender ao pedido de "LP inteira sem cortar" produziu uma folha única de 21,0 × 99,6 cm, quase um metro de altura. O leitor encaixa essa folha na tela e o texto fica ilegível, e ela não imprime em A4. Foi gerada uma segunda versão em **3 páginas A4, cortada só entre seções**, sem partir nenhum card, botão ou título, com as perguntas do FAQ abertas. Os dois arquivos ficaram na pasta.

**Prévia publicada:** https://claude.ai/artifact/T3HnXAQ4hA29BHExZTjTfx

---

## 6. Campanha Black November

**Pedido.** Artes e estrutura visual para e-mail marketing da campanha Black November, a partir do panfleto feito no Canva. Oferta: **50% de desconto em 3 mensalidades** de segurança eletrônica, para contratos fechados em novembro.

**Estrutura da peça:** cabeçalho da marca, arte da campanha, abertura em PAS (a dor antes da oferta), caixa "Como funciona a condição" em checklist, três blocos de serviço, chamada única para falar com um consultor pelo WhatsApp, condições da campanha reproduzidas do panfleto e rodapé.

**Assuntos sugeridos:**

| Versão | Assunto | Quando usar |
| --- | --- | --- |
| A · oferta | Black November: 50% de desconto em 3 mensalidades | Base que já conhece a Intersept |
| B · dor | Seu alarme dispara de madrugada. Alguém está olhando? | Lead frio |
| C · urgência | Só em novembro: 50% em 3 mensalidades do contrato | Reenvio aos não abertos, fim do mês |

**Pré-header:** Desconto de 50% em 3 mensalidades para contratos fechados em novembro. Fale com um consultor.

### Evolução das artes

1. Primeiro as artes foram montadas em CSS, recriando o estilo do panfleto.
2. O cliente pediu os efeitos de fundo iguais aos do modelo. As artes foram refeitas a partir das capturas de tela do Canva.
3. O cliente mandou o link do Canva. Pelo navegador o link dá 403, por ser design privado, mas **pelo conector do Canva deu para abrir o design e exportar a página 3 em alta**.
4. Por fim o cliente enviou as três páginas em alta resolução. Tudo foi refeito a partir delas: a arte do topo é a página 3, as texturas de fundo saem do piso de neon dessa arte, os três ícones foram recortados dos cards da página 2 e o azul dos cards usa as cores amostradas deles (um ciano `#0196f5`, não o azul royal que eu havia usado).

### O problema das imagens na Brevo

O cliente colou o código, subiu as imagens na galeria e as imagens não apareciam. **Causa: subir na galeria não altera o código.** O código continuava apontando para nomes de arquivo, e nome de arquivo não existe para quem abre o e-mail. Toda imagem de e-mail precisa estar hospedada e ser chamada por endereço completo.

O cliente então mandou as sete URLs, sem identificação de qual era qual. Cada uma foi baixada e comparada com o arquivo original, por proporção e por correlação de pixels, para montar o mapeamento. O resultado ficou registrado em `email-marketing/black-november/URLS-BREVO.md`.

**Duas descobertas nesse teste:**

1. **A Brevo converteu os três ícones PNG para JPEG.** O fundo transparente virou branco, desenhando um quadrado branco em volta do círculo dentro do card azul. Foram gerados os arquivos `icone-*-fundo-azul.jpg`, com o azul do card no lugar da transparência, para substituir.
2. **As URLs copiadas da galeria são de miniatura.** O domínio `img-thumb` entrega no máximo 400 px, então a arte do topo, exibida com 600 px, fica levemente suave. Os fundos não sofrem com isso porque já são texturas desfocadas.

### Versões do e-mail entregues

| Arquivo | Para que serve |
| --- | --- |
| `email-black-november.html` | Versão de trabalho, com os nomes de arquivo como marcadores |
| `email-black-november-BREVO.html` | Com as 7 URLs preenchidas, com ícones |
| `email-black-november-BREVO-SEM-ICONES.html` | Com as URLs preenchidas, sem ícones. **É a versão pronta para disparar** |
| `email-black-november-1-IMAGEM.html` | Só a arte do topo, fundos em cor sólida. Precisa de uma URL só |

**PDFs:** `Intersept-Email-Black-November-APROVACAO.pdf` com ficha e peça em A4, e `Intersept-Email-Black-November-PECA-INTEIRA.pdf` com o e-mail inteiro em uma folha de 16,5 × 52,8 cm, sem corte no design.

---

## 7. LP no WordPress

**Pedido.** Subir a LP no WordPress do cliente, aberto no Chrome da agência, em uma página nomeada `LP`.

**Não foi possível executar.** Esta sessão roda num container na nuvem, sem ligação com a máquina da agência: não há ferramenta de navegador nem de controle de computador disponível nela. A página precisa ser criada por uma pessoa.

**O que foi entregue no lugar.** A LP convertida em bloco colável, com **todo o CSS escopado dentro de `#lp-intersept`**. Isso era necessário porque a LP original estiliza `body`, `h1`, `h2` e `img` diretamente, e colada crua ela bagunçaria o site inteiro.

Foi testada dentro de uma página simulando um tema do WordPress com tipografia e larguras próprias. Resultado: layout idêntico ao original, tema intacto, validação do formulário funcionando, máscara de telefone formatando, link do WhatsApp carregando nome, cidade, unidades e as UTMs, CTAs rolando até o formulário com foco no primeiro campo, nenhum erro no console.

O guia `COMO-PUBLICAR-NO-WORDPRESS.md` traz o passo a passo, o CSS para esconder cabeçalho e rodapé do tema quando ele não tem modelo em branco, e os ajustes pendentes.

---

## Decisões técnicas que vale lembrar

- **Brevo:** conteúdo condicional só funciona no editor de código. No editor de arrastar e soltar, o código é escapado e aparece como texto.
- **E-mail escuro de ponta a ponta** na campanha Black November: além de combinar com a campanha, evita a inversão de cores que o modo escuro do Gmail e do Apple Mail aplica em peças claras.
- **Imagem de fundo em e-mail:** o Outlook para Windows não carrega. Cada bloco com efeito tem uma cor sólida equivalente por trás (`bgcolor`), então a peça continua legível e na identidade.
- **LP sem menu:** é o padrão de tráfego pago. Sem menu o visitante não tem para onde escapar.
- **Logo:** o arquivo `logo-intersat-fundo-280x300.png` que está no site mostra a marca **INTERSAT**, não Intersept. Foi usado o `cropped-Intersept-192x192.png`. Isso foi apontado ao cliente na época.

---

## Pendências

### Landing page

| O que falta | Onde | Por que importa |
| --- | --- | --- |
| `ENDPOINT` está vazio | `index.html`, linha 368 | O lead vai só para o WhatsApp e não fica gravado. Se o atendimento não responder, o contato se perde |
| Pixel do Meta e GA4 com marcador | `SEU_PIXEL_ID` e `G-SEU_ID` | Sem eles a campanha não otimiza por conversão |
| Não está hospedada | — | Precisa de domínio ou subdomínio para rodar tráfego pago |
| Página no WordPress | — | Depende de alguém colar o bloco, conforme o guia |

### Black November

| O que falta | Observação |
| --- | --- |
| Ícones com fundo azul | Subir os três `icone-*-fundo-azul.jpg` e trocar as URLs, se quiser a versão com ícones |
| Arte do topo em alta | As URLs atuais são de miniatura. Pegar o link do arquivo original, ou hospedar no WordPress do cliente |
| Escolher o assunto | Sugestão: A e B em teste A/B, C para o reenvio |

### Consultoria

| O que falta | Observação |
| --- | --- |
| Decisão sobre a camada de atendimento | O orçamento de R$ 3.550 promete integração com o CRM que não pode ser entregue |

---

## Observação sobre o tom dos textos

Em todos os materiais, por pedido do cliente: **sem travessões e sem vícios de linguagem de IA**. Isso vale para os textos do blog, os e-mails e a landing page, e deve ser mantido nos próximos materiais.
