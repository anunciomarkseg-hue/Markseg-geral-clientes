# Imagens do e-mail

Gere as URLs subindo cada arquivo na galeria da Brevo (**Campanhas → Mídia**, ou o ícone de imagem dentro do editor) e depois substitua o placeholder correspondente no arquivo `email-poda-preventiva-COM-ICONES.html`.

| Arquivo | Placeholder no HTML | Exibido em | Arquivo em | Texto ALT |
|---|---|---|---|---|
| `banner-topo.png` | `URL_BANNER_TOPO` | 600 × 210 px | 1200 × 420 px | Vegetação alta encostando no feixe do sensor de barreira durante a chuva |
| `icone-alarme.png` | `URL_ICONE_ALARME` | 56 × 56 px | 256 × 256 px | vazio (decorativo) |
| `icone-sensor.png` | `URL_ICONE_SENSOR` | 48 × 48 px | 256 × 256 px | vazio (decorativo) |
| `icone-poda.png` | `URL_ICONE_PODA` | 48 × 48 px | 256 × 256 px | vazio (decorativo) |
| `icone-vento.png` | `URL_ICONE_VENTO` | 48 × 48 px | 256 × 256 px | vazio (decorativo) |
| `icone-calendario.png` | `URL_ICONE_CALENDARIO` | 48 × 48 px | 256 × 256 px | vazio (decorativo) |
| `icone-central.png` | `URL_ICONE_CENTRAL` | 52 × 52 px | 256 × 256 px | vazio (decorativo) |
| logo da Intersept | `URL_DO_LOGO` | 150 px de largura | PNG com fundo transparente | Intersept |

## Por que os arquivos são maiores do que o tamanho exibido

Todos estão no dobro da medida de exibição, para não ficarem borrados em tela de alta resolução. O `width` e o `height` no HTML controlam o tamanho final, então não altere esses valores.

## Cuidados

- **Não use os arquivos direto do computador.** Em e-mail, imagem precisa estar hospedada em uma URL pública. A galeria da Brevo resolve isso.
- **Os ícones são decorativos e vão com `alt` vazio de propósito.** Toda informação também está no texto ao lado, então o e-mail continua compreensível para quem bloqueia imagens ou usa leitor de tela.
- **O banner é o único que carrega informação visual própria**, por isso tem texto ALT descritivo.
- **Não troque PNG por SVG.** O Gmail e vários outros clientes não exibem SVG em e-mail.
- Se quiser substituir o banner por uma foto real, mantenha 1200 × 420 px e prefira uma imagem escura na metade direita, para o texto do e-mail continuar legível logo abaixo.

## Paleta usada

| Cor | Hex | Uso |
|---|---|---|
| Azul Intersept | `#1B3F89` | Traço dos ícones, cabeçalho, botão |
| Azul escuro | `#0D2140` | Títulos e faixa da central |
| Azul claro | `#335EB6` | Chuva no banner |
| Amarelo | `#FEED01` | Feixe do sensor e detalhes dos ícones |
| Cinza claro | `#F2F5F9` | Fundo dos ícones e das caixas |
