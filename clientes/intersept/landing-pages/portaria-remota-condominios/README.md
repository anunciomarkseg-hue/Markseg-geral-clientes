# LP · Portaria remota para condomínios

Landing page de conversão para tráfego pago, com identidade visual da Intersept.

- **Arquivo:** [`index.html`](index.html), página única, sem dependências
- **Peso:** cerca de 21 KB de HTML. Na primeira carga o navegador busca só três coisas de fora: a fonte Poppins, o logo e o favicon
- **Público:** síndicos e administradoras
- **Oferta:** uma só, portaria remota. Página de tráfego pago com mais de uma oferta converte menos

## Por que a estrutura é essa

| Bloco | Função |
|---|---|
| Topo sem menu | Sem links de navegação, para o clique pago não vazar para o site |
| Herói com formulário à direita | O formulário aparece antes da rolagem, no desktop e no celular |
| Barra de confiança | Central própria, pronta resposta, praças de atendimento e regularidade |
| Dores do síndico | Quatro situações concretas, para o leitor se reconhecer |
| Como funciona | Quatro passos, tira o medo do processo |
| O que está incluído | Seis itens, responde "o que eu recebo por esse valor" |
| FAQ | Seis objeções reais, incluindo as duas que mais travam: queda de energia e demissão do porteiro |
| Fechamento | Repete o CTA com oferta de diagnóstico sem compromisso |
| Barra fixa no celular | Botão sempre visível, onde está a maior parte do tráfego |

## Antes de publicar

**1. Número do WhatsApp.** No fim do arquivo, em `CONFIGURAÇÃO`, ajuste `WHATSAPP`. Está com `554140072640`. Vale usar um número dedicado à campanha: separa o lead de anúncio do atendimento geral e facilita medir.

**2. Onde o lead é gravado.** Preencha `ENDPOINT` com a URL de um webhook, um formulário tipo Formspree, um fluxo do n8n ou o que a operação usar. Enquanto estiver vazio, o lead só chega pelo WhatsApp.

Esse ponto importa mais do que parece. A página grava o lead **antes** de abrir o WhatsApp. Se a pessoa desistir de enviar a mensagem, os dados dela já estão registrados e alguém pode retomar. Hoje, quem abandona nessa etapa some sem deixar rastro.

**3. Tags de conversão.** No fim do arquivo há o bloco de Meta Pixel e GA4, comentado. Cole os IDs e remova os comentários. A página já dispara `Lead` e `Contact` no Meta, e `generate_lead` e `contact` no GA4.

**4. Origem do anúncio.** A página captura `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gclid` e `fbclid`, guarda na sessão e manda junto na mensagem do WhatsApp e no registro do lead. É isso que permite dizer depois qual campanha trouxe qual contrato.

**5. Prova social.** Há um bloco comentado reservado para depoimentos. Só publique depoimento real e autorizado por escrito. Depoimento inventado é propaganda enganosa e derruba a credibilidade da página.

**6. Política de privacidade.** O aceite aponta para `intersept.com.br/politica-de-privacidade/`, que está no ar. Confirme se o texto cobre captação por landing page e contato comercial.

## Onde hospedar

O ideal é em um subdiretório do próprio domínio, como `intersept.com.br/lp/portaria-remota-condominios/`, aproveitando a autoridade do domínio e evitando bloqueio de cookie entre domínios. Como o site é WordPress, dá para subir como página sem tema, usando um plugin de landing page, ou publicar o HTML direto em uma pasta no servidor. Netlify, Vercel ou Cloudflare Pages também servem, mas aí vale apontar um subdomínio.

## Para clonar para outros serviços

A estrutura serve para as outras ofertas, trocando só a copy. A ordem de prioridade que eu sugiro:

1. **Monitoramento de alarmes para empresas e comércio**, maior volume de busca
2. **Projeto de segurança para indústrias e galpões**, ticket mais alto
3. **Segurança eletrônica em Foz do Iguaçu**, recorte local, concorrência menor
4. **Totem de segurança**, produto visual, bom para campanha de descoberta

Uma página por oferta, uma campanha por página. Não misture.

## Prévia para aprovação

[`preview-artifact.html`](preview-artifact.html) é a mesma página adaptada para rodar no painel de prévia do Claude, publicada em https://claude.ai/artifact/T3HnXAQ4hA29BHExZTjTfx

Três diferenças em relação ao `index.html`, todas por limitação do ambiente de prévia, que bloqueia imagem de domínio externo e navegação para fora:

- Logo e fonte Poppins embutidos no arquivo, o que leva a página de 21 KB para 88 KB
- Ao enviar o formulário, a página mostra como o lead chega em vez de abrir o WhatsApp
- Sem validação por `alert`, que o painel não exibe

**O arquivo que vai para o ar é o `index.html`.** O `preview-artifact.html` serve só para aprovação. Se a página mudar, regere a prévia a partir do `index.html` para as duas não divergirem.

## Observação sobre o logo

Usei o escudo oficial da Intersept, o mesmo do ícone do site, com o nome em texto ao lado para ficar legível em tamanho pequeno. Vale um aviso: há no site um arquivo chamado `logo-intersat-fundo` que mostra a marca **INTERSAT**, escrita diferente. Não usei esse arquivo. Se for um material antigo ou de outra empresa, vale conferir onde ele está aparecendo no site.
