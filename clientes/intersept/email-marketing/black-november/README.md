# Black November · E-mail marketing Intersept

Peça de e-mail para a campanha de novembro: **50% de desconto em 3 mensalidades** na contratação de segurança eletrônica. Montada no padrão da Brevo, com chamada única para falar com um consultor pelo WhatsApp.

## O que tem nesta pasta

| Arquivo | Para que serve |
| --- | --- |
| `email-black-november.html` | Código do e-mail. É o que vai no editor de HTML da Brevo. |
| `imagens/banner-black-november.png` | Banner de topo, 600 px de largura (arquivo em 1200 px para telas retina). |
| `imagens/icone-alarme.png` | Ícone do bloco "Segurança eletrônica inteligente". |
| `imagens/icone-central-24h.png` | Ícone do bloco "Central de monitoramento 24 horas". |
| `imagens/icone-seguranca-legal.png` | Ícone do bloco "Empresa autorizada pela Polícia Federal". |
| `previews/preview-black-november.html` | Mesma peça com os caminhos locais das imagens, só para abrir no navegador e conferir. |
| `Intersept-Email-Black-November-APROVACAO.pdf` | Ficha da campanha e a peça inteira, para enviar ao cliente aprovar. |

## Assuntos sugeridos

Teste A/B com dois deles e deixe o terceiro para o reenvio aos não abertos.

| Versão | Assunto | Técnica |
| --- | --- | --- |
| A · oferta | Black November: 50% de desconto em 3 mensalidades | Oferta direta, bom para base que já conhece a Intersept |
| B · dor | Seu alarme dispara de madrugada. Alguém está olhando? | PAS, abre pelo problema. Melhor para leads frios |
| C · urgência | Só em novembro: 50% em 3 mensalidades do contrato | Prazo, indicado para o disparo de reforço no fim do mês |

**Pré-header** (já está no código): *Desconto de 50% em 3 mensalidades para contratos fechados em novembro. Fale com um consultor.*

## Passo a passo na Brevo

1. **Campanhas → E-mail → Criar campanha** e escolha o editor **"Codifique o seu próprio"**.
2. Antes de colar o código, suba as quatro imagens: **Campanhas → Galeria de mídia → Carregar**.
3. Em cada imagem carregada, copie a URL que a Brevo gera.
4. Cole o conteúdo de `email-black-november.html` no editor.
5. Troque os quatro `src` pelas URLs da galeria. Eles estão assim no código:
   - `src="banner-black-november.png"`
   - `src="icone-alarme.png"`
   - `src="icone-central-24h.png"`
   - `src="icone-seguranca-legal.png"`
6. Confira o assunto e o remetente, e envie um **teste para você** antes do disparo. Abra no celular e no desktop.
7. As tags `{{ unsubscribe }}` e `{{ mirror }}` do rodapé são preenchidas pela própria Brevo, não mexa nelas.

## Especificação das imagens

| Imagem | Tamanho de exibição | Arquivo entregue |
| --- | --- | --- |
| Banner | 600 × 470 px | 1200 × 940 px |
| Ícones | 58 × 58 px | 320 × 320 px |

Se preferir usar a arte do Canva no lugar do banner, exporte a página do panfleto em PNG com **600 px de largura** e troque só o `src` do banner. O resto do e-mail não muda.

## Observações

- O botão amarelo leva para o WhatsApp **(41) 4007-2640** com a mensagem já escrita. Se o número de atendimento da campanha for outro, troque o trecho `554140072640` dentro do link.
- O texto das condições no rodapé reproduz o que está no panfleto. Qualquer ajuste jurídico precisa ser feito nos dois materiais.
- A peça não usa conteúdo condicional. Isso foi proposital: o editor de arrastar e soltar da Brevo quebra as condições, e aqui não há campo que justifique o risco.
- O e-mail é escuro de ponta a ponta. Além de combinar com a campanha, isso evita a inversão de cores que o modo escuro do Gmail e do Apple Mail aplica em peças claras.
