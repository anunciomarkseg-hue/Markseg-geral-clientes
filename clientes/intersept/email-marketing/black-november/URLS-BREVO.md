# URLs das imagens na galeria da Brevo

Conta 11946832. Conferidas uma a uma comparando o arquivo baixado com o original.

| Arquivo | URL |
| --- | --- |
| `banner-black-november.jpg` | https://img-thumb.mailinblue.com/11946832/images/content_library/original/6ad58a5dc1f95f0ea49f82bd.jpeg |
| `fundo-email.jpg` | https://img-thumb.mailinblue.com/11946832/images/content_library/original/6ad589c0c1f95f0ea49f82b2.jpeg |
| `faixa-cta.jpg` | https://img-thumb.mailinblue.com/11946832/images/content_library/original/6ad589bf55bf8b932609f41d.jpeg |
| `card-azul.jpg` | https://img-thumb.mailinblue.com/11946832/images/content_library/original/6ad589bf55bf8b932609f41e.jpeg |
| `icone-alarme.png` | https://img-thumb.mailinblue.com/11946832/images/content_library/original/6ad589c0c1f95f0ea49f82b3.jpeg |
| `icone-central-24h.png` | https://img-thumb.mailinblue.com/11946832/images/content_library/original/6ad589c0164c970a1d778960.jpeg |
| `icone-seguranca-legal.png` | https://img-thumb.mailinblue.com/11946832/images/content_library/original/6ad589bffd8ca38cd59dd918.jpeg |

## Duas observações sobre esses endereços

**1. São links de miniatura.** O domínio `img-thumb` entrega no máximo 400 px de largura.
A arte do topo é exibida com 600 px, então fica levemente suave em tela de alta
resolução. Os fundos não sofrem com isso porque já são texturas desfocadas.
Para a arte do topo sair nítida, pegue o link do arquivo original (inserindo a
imagem por um bloco de imagem no editor e olhando o `src` gerado) ou suba o
arquivo na biblioteca de mídia do WordPress do intersept.com.br.

**2. A Brevo converteu os três ícones para JPEG.** Eles eram PNG com fundo
transparente, e o fundo virou branco, o que desenha um quadrado branco em volta
do círculo dentro do card azul. Por isso existem os arquivos
`icone-*-fundo-azul.jpg`, que já trazem o azul do card no lugar da
transparência. Subindo esses três e trocando as URLs, o ícone volta a parecer
recortado no card.
