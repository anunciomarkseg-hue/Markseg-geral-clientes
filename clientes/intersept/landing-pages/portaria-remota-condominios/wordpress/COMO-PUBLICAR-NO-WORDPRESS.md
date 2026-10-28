# Publicar a LP como página do WordPress

Arquivo a usar: **`lp-bloco-html.html`**. É a LP inteira com todo o CSS escopado dentro de `#lp-intersept`, então ela não altera em nada o resto do site, e o tema também não deforma a LP.

## Passo a passo

1. **Páginas → Adicionar nova.** Título: `LP`.
2. Antes de colar, veja em **Atributos da página → Modelo** se o tema oferece um modelo sem cabeçalho e rodapé. Os nomes variam: *Em branco*, *Canvas*, *Página inteira*, *Largura total*, *Elementor Canvas*. Se existir, escolha. É o que garante a LP sem menu, que é o padrão de página para tráfego pago: sem menu, o visitante não tem para onde escapar.
3. No corpo da página, adicione um bloco **HTML personalizado** (o `+` → procure por "HTML").
4. Abra `lp-bloco-html.html`, copie **tudo** e cole dentro desse bloco.
5. **Publicar.**

## Se o cabeçalho e o rodapé do tema continuarem aparecendo

Quer dizer que o tema não tem modelo em branco. Resolve assim:

1. Com a página aberta no editor, olhe a URL: `...post.php?post=**123**&action=edit`. Esse número é o ID da página.
2. **Aparência → Personalizar → CSS adicional** e cole, trocando `123` pelo número real:

```css
body.page-id-123 header,
body.page-id-123 .site-header,
body.page-id-123 footer,
body.page-id-123 .site-footer{display:none}
body.page-id-123 .entry-content,
body.page-id-123 .site-content,
body.page-id-123 main{max-width:none;padding:0;margin:0}
body.page-id-123 .entry-title{display:none}
```

As classes mudam de tema para tema. Se sobrar alguma faixa, me mande um print que eu ajusto os seletores.

## Antes de mandar tráfego

Três ajustes dentro do próprio bloco colado, no trecho de `<script>` lá embaixo:

| O que | Onde | Por que |
| --- | --- | --- |
| `var WHATSAPP = '554140072640'` | começo do script | número que recebe o lead. Só dígitos, com o 55 na frente |
| `var ENDPOINT = ''` | logo abaixo | endereço que grava o lead. **Vazio hoje**, então o contato só vai para o WhatsApp e não fica registrado em lugar nenhum. Se o atendimento não responder, o lead se perde |
| `SEU_PIXEL_ID` e `G-SEU_ID` | fim do bloco | pixel do Meta e GA4. Sem eles a campanha não otimiza por conversão |

E no plugin de SEO da página (Yoast ou Rank Math):

- **Título:** Portaria remota para condomínios | Intersept
- **Descrição:** Portaria remota operada por central 24 horas, com ronda e atendimento tático. Custo menor que um posto 24h. Solicite uma proposta para o seu condomínio.

## Conferido antes de entregar

A peça foi testada dentro de uma página simulando um tema do WordPress com fonte, cores e larguras próprias. O resultado:

- A LP aparece igual à versão original, inclusive a headline em uma linha só e o formulário ao lado.
- O tema continua intacto: nenhuma regra da LP vazou para o cabeçalho ou o rodapé.
- Validação do formulário funciona, a máscara do telefone formata `(41) 99988-7766`.
- O botão monta o link do WhatsApp com nome, cidade, unidades e a origem da campanha (`utm_source` e `utm_campaign` chegam junto).
- As CTAs do meio da página rolam até o formulário e colocam o cursor no primeiro campo.
- Nenhum erro no console.

## A alternativa que eu recomendo olhar

Subir o `index.html` original por FTP ou pelo gerenciador de arquivos da hospedagem, em `intersept.com.br/lp/portaria-remota-condominios/`. Nesse caso a página não passa pelo WordPress: carrega mais rápido, não depende de tema nem de plugin e não corre risco de um plugin de segurança remover o `<script>` do bloco. O arquivo já está com a URL canônica apontando para esse endereço.

Vale a pena principalmente se a LP for receber verba de mídia: página de tráfego pago que carrega rápido custa menos por clique.
