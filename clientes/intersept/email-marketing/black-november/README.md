# Black November · E-mail marketing Intersept

Peça de e-mail para a campanha de novembro: **50% de desconto em 3 mensalidades** na contratação de segurança eletrônica. Montada no padrão da Brevo, com chamada única para falar com um consultor pelo WhatsApp.

## O que tem nesta pasta

| Arquivo | Para que serve |
| --- | --- |
| `email-black-november.html` | Código do e-mail. É o que vai no editor de HTML da Brevo. |
| `imagens/banner-black-november.jpg` | Arte da campanha no topo, 1200 px de largura (exibida em 600). |
| `imagens/fundo-email.jpg` | Fundo da peça: azul noturno com o piso de neon da campanha. |
| `imagens/faixa-cta.jpg` | Piso de neon atrás do botão de chamada. |
| `imagens/card-azul.jpg` | Fundo dos cards azuis (condição e blocos de serviço). |
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
5. Troque os endereços das imagens pelas URLs da galeria. No código eles aparecem assim:
   - `src="banner-black-november.jpg"` (uma vez)
   - `src="icone-alarme.png"`, `src="icone-central-24h.png"`, `src="icone-seguranca-legal.png"` (uma vez cada)
   - `fundo-email.jpg` (duas vezes, na mesma linha da tabela principal)
   - `faixa-cta.jpg` (duas vezes, na linha do botão)
   - `card-azul.jpg` (oito vezes, duas em cada um dos quatro cards azuis)

   Use o localizar e substituir do editor: troque o nome do arquivo pela URL de uma vez só e todas as ocorrências são atualizadas juntas.
6. Confira o assunto e o remetente, e envie um **teste para você** antes do disparo. Abra no celular e no desktop.
7. As tags `{{ unsubscribe }}` e `{{ mirror }}` do rodapé são preenchidas pela própria Brevo, não mexa nelas.

## Especificação das imagens

| Imagem | Tamanho de exibição | Arquivo entregue |
| --- | --- | --- |
| Arte do topo | 600 px de largura | 1200 × 674 px |
| Fundo da peça | largura do e-mail | 1200 × 1400 px |
| Faixa do CTA | largura do e-mail | 1200 × 560 px |
| Card azul | esticado no bloco | 600 × 300 px |
| Ícones | 60 × 60 px | 320 × 320 px |

A arte do topo é a página 3 do panfleto, exportada direto do Canva em 1200 px. As texturas de fundo foram derivadas do piso de neon dessa mesma arte.

## Observações

- O botão amarelo leva para o WhatsApp **(41) 4007-2640** com a mensagem já escrita. Se o número de atendimento da campanha for outro, troque o trecho `554140072640` dentro do link.
- O texto das condições no rodapé reproduz o que está no panfleto. Qualquer ajuste jurídico precisa ser feito nos dois materiais.
- A peça não usa conteúdo condicional. Isso foi proposital: o editor de arrastar e soltar da Brevo quebra as condições, e aqui não há campo que justifique o risco.
- O e-mail é escuro de ponta a ponta. Além de combinar com a campanha, isso evita a inversão de cores que o modo escuro do Gmail e do Apple Mail aplica em peças claras.
- Os fundos com efeito de neon entram como imagem de fundo, que o Outlook para Windows não carrega. Para esses casos, cada bloco tem uma cor sólida equivalente por trás (`bgcolor`), então a peça continua legível e na identidade, só sem a textura.
