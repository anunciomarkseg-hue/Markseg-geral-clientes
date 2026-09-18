import re,sys,html,asyncio
from playwright.async_api import async_playwright

SRC=sys.argv[1]; OUT=sys.argv[2]; SUB=sys.argv[3]; HDR=sys.argv[4]
CAPA=sys.argv[5] if len(sys.argv)>5 else ''
AZUL='#1f3864'; GRAFITE='#333'

def inline(t):
    t=html.escape(t)
    t=re.sub(r'\*\*(.+?)\*\*',r'<strong>\1</strong>',t)
    t=re.sub(r'`([^`]+)`',r'<code>\1</code>',t)
    t=re.sub(r'(?<!\*)\*([^*]+)\*(?!\*)',r'<em>\1</em>',t)
    t=re.sub(r'\[([^\]]+)\]\(([^)]+)\)',r'<a href="\2">\1</a>',t)
    return t

lines=open(SRC,encoding='utf-8').read().split('\n')
body=[]; i=0; first_h1=True
while i<len(lines):
    l=lines[i]; t=l.strip()
    if not t: i+=1; continue
    if t.startswith('|'):
        rows=[]
        while i<len(lines) and lines[i].strip().startswith('|'):
            c=[x.strip() for x in lines[i].strip().split('|')[1:-1]]
            if not all(re.fullmatch(r'-+',x or '-') for x in c): rows.append(c)
            i+=1
        if rows:
            h='<table><thead><tr>'+''.join(f'<th>{inline(x)}</th>' for x in rows[0])+'</tr></thead><tbody>'
            for r in rows[1:]: h+='<tr>'+''.join(f'<td>{inline(x)}</td>' for x in r)+'</tr>'
            body.append(h+'</tbody></table>')
        continue
    if t.startswith('#### '): body.append(f'<h4>{inline(t[5:])}</h4>')
    elif t.startswith('### '): body.append(f'<h3>{inline(t[4:])}</h3>')
    elif t.startswith('## '):
        txt=t[3:].strip()
        cls=' class="quebra"' if re.match(r'^\d+\.',txt) else ''
        body.append(f'<h2{cls}>{inline(txt)}</h2>')
    elif t.startswith('# '):
        if first_h1: first_h1=False
        else: body.append(f'<h1>{inline(t[2:])}</h1>')
    elif t.startswith('- '):
        itens=[]
        while i<len(lines) and lines[i].strip().startswith('- '):
            itens.append(f'<li>{inline(lines[i].strip()[2:])}</li>'); i+=1
        body.append('<ul>'+''.join(itens)+'</ul>'); continue
    elif re.fullmatch(r'-{3,}',t): pass
    else: body.append(f'<p>{inline(t)}</p>')
    i+=1

titulo=next((l[2:].strip() for l in lines if l.startswith('# ')),'Relatório')
capa_itens=''
if CAPA:
    for bloco in CAPA.split(';;'):
        a,b=bloco.split('::',1)
        capa_itens+=f'<div class="ci"><span>{html.escape(a)}</span>{html.escape(b)}</div>'

doc=f"""<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>{html.escape(titulo)}</title>
<style>
@page {{ size:A4; margin:20mm 18mm 18mm 18mm; }}
*{{box-sizing:border-box}}
body{{font-family:Calibri,'Segoe UI',Arial,sans-serif;font-size:10.5pt;line-height:1.55;color:#111;margin:0}}
.capa{{height:247mm;display:flex;flex-direction:column;justify-content:center;text-align:center;page-break-after:always}}
.capa .marca{{font-size:34pt;font-weight:700;color:{AZUL};letter-spacing:.5px}}
.capa .sub{{font-size:19pt;color:{GRAFITE};margin-top:6px}}
.capa .meta{{font-size:11.5pt;color:#666;margin-top:10px}}
.capa hr{{border:0;border-top:2px solid {AZUL};width:100%;margin:26px 0}}
.capa h4{{color:{AZUL};font-size:13pt;margin:0 0 14px}}
.ci{{font-size:10pt;color:{GRAFITE};margin-bottom:9px}}
.ci span{{font-weight:700;color:{AZUL};margin-right:6px}}
.rodape-capa{{font-size:9.5pt;color:#888;font-style:italic;margin-top:30px}}
h1{{font-size:17pt;color:{AZUL};margin:20px 0 10px}}
h2{{font-size:14.5pt;color:{AZUL};margin:22px 0 10px;padding-bottom:5px;border-bottom:1px solid #d9d9d9}}
h2.quebra{{page-break-before:auto;margin-top:26px}}
h3{{font-size:11.5pt;color:{GRAFITE};margin:16px 0 7px}}
h4{{font-size:10.5pt;color:{GRAFITE};margin:12px 0 5px}}
p{{margin:0 0 9px;text-align:justify}}
ul{{margin:0 0 10px 18px;padding:0}} li{{margin-bottom:4px}}
table{{width:100%;border-collapse:collapse;margin:10px 0 16px;font-size:9.3pt;page-break-inside:avoid}}
th{{background:{AZUL};color:#fff;text-align:left;padding:6px 8px;font-weight:700}}
td{{border:1px solid #bfbfbf;padding:5px 8px;vertical-align:top}}
tbody tr:nth-child(odd){{background:#f2f2f2}}
code{{font-family:Consolas,monospace;color:{AZUL};font-weight:700}}
a{{color:#0563c1;text-decoration:none}}
h1,h2,h3,h4{{page-break-after:avoid}}
</style></head><body>
<div class="capa">
  <div class="marca">G5 SEGURANÇA</div>
  <div class="sub">{html.escape(SUB)}</div>
  <div class="meta">{html.escape(HDR)}</div>
  <hr>
  <h4>O que este relatório cobre</h4>
  {capa_itens}
  <div class="rodape-capa">Documento produzido pela MarkSeg com base em rastreamento e medição próprios do site.</div>
</div>
{''.join(body)}
</body></html>"""
open('/tmp/claude-0/-home-user-Markseg-geral-clientes/03399efe-07e0-5350-9b0c-55e3b361892e/scratchpad/relatorio.html','w',encoding='utf-8').write(doc)

async def run():
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args=['--no-sandbox'])
        pg=await b.new_page()
        await pg.goto('file:///tmp/claude-0/-home-user-Markseg-geral-clientes/03399efe-07e0-5350-9b0c-55e3b361892e/scratchpad/relatorio.html',wait_until='load')
        await pg.pdf(path=OUT,format='A4',print_background=True,display_header_footer=True,
            header_template=f'<div style="font-size:7pt;color:#999;width:100%;padding:0 18mm;text-align:right;font-family:Calibri,Arial">{html.escape(HDR)}</div>',
            footer_template='<div style="font-size:7pt;color:#999;width:100%;padding:0 18mm;text-align:center;font-family:Calibri,Arial">Página <span class="pageNumber"></span> de <span class="totalPages"></span></div>',
            margin={'top':'20mm','bottom':'16mm','left':'18mm','right':'18mm'})
        await b.close()
asyncio.run(run())
print('PDF gerado')
