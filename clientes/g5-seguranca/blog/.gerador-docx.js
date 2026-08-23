const fs=require('fs'),path=require('path');
const {Document,Packer,Paragraph,TextRun,HeadingLevel,Table,TableRow,TableCell,WidthType,ShadingType,BorderStyle,AlignmentType,PageBreak,ExternalHyperlink,Header,Footer,PageNumber,convertInchesToTwip}=require('docx');

const DIR='/home/user/Markseg-geral-clientes/clientes/g5-seguranca/blog';
const FILES=['05-como-melhorar-seguranca-do-condominio.md','06-reconhecimento-facial-em-condominios.md','07-cftv-empresarial-como-planejar.md','08-portaria-remota-em-curitiba.md'];
const SEMANA_INICIAL=5;
const AZUL='1F3864', CINZA='F2F2F2', GRAFITE='333333';

// converte trechos inline (negrito + links) em runs
function runs(text,{bold=false,size=22,color='000000'}={}){
  const out=[];
  const re=/(\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\))/g;
  let last=0,m;
  const push=(t,b)=>{ if(t) out.push(new TextRun({text:t,bold:b||bold,size,color})); };
  while((m=re.exec(text))!==null){
    push(text.slice(last,m.index),false);
    if(m[2]!==undefined){ push(m[2],true); }
    else{
      const label=m[3],url=m[4];
      if(url.startsWith('http')){
        out.push(new ExternalHyperlink({children:[new TextRun({text:label,size,color:'0563C1',underline:{}})],link:url}));
      }else{
        out.push(new TextRun({text:label,size,color:'0563C1',underline:{}}));
        out.push(new TextRun({text:' ('+url+')',size:18,color:'808080'}));
      }
    }
    last=re.lastIndex;
  }
  push(text.slice(last),false);
  return out.length?out:[new TextRun({text:'',size})];
}

const P=(text,opts={})=>new Paragraph({children:runs(text,opts),spacing:{after:opts.after??140,line:300},alignment:opts.align});

function tabelaSEO(rows){
  const W=[3000,6000];
  const cell=(children,{shade,width})=>new TableCell({
    children,width:{size:width,type:WidthType.DXA},
    margins:{top:80,bottom:80,left:120,right:120},
    shading:shade?{type:ShadingType.CLEAR,fill:shade,color:'auto'}:undefined});
  const head=new TableRow({tableHeader:true,children:[
    cell([new Paragraph({children:[new TextRun({text:'Campo',bold:true,size:20,color:'FFFFFF'})]})],{shade:AZUL,width:W[0]}),
    cell([new Paragraph({children:[new TextRun({text:'Conteúdo',bold:true,size:20,color:'FFFFFF'})]})],{shade:AZUL,width:W[1]})]});
  const body=rows.map((r,i)=>new TableRow({children:[
    cell([new Paragraph({children:[new TextRun({text:r[0],bold:true,size:20,color:GRAFITE})]})],{shade:i%2?undefined:CINZA,width:W[0]}),
    cell([new Paragraph({children:runs(r[1],{size:20})})],{shade:i%2?undefined:CINZA,width:W[1]})]}));
  return new Table({columnWidths:W,width:{size:9000,type:WidthType.DXA},rows:[head,...body],
    borders:{top:{style:BorderStyle.SINGLE,size:4,color:'BFBFBF'},bottom:{style:BorderStyle.SINGLE,size:4,color:'BFBFBF'},
      left:{style:BorderStyle.SINGLE,size:4,color:'BFBFBF'},right:{style:BorderStyle.SINGLE,size:4,color:'BFBFBF'},
      insideHorizontal:{style:BorderStyle.SINGLE,size:2,color:'BFBFBF'},insideVertical:{style:BorderStyle.SINGLE,size:2,color:'BFBFBF'}}});
}

function parse(file){
  const raw=fs.readFileSync(path.join(DIR,file),'utf8').split('\n');
  const seo=[]; let i=0;
  for(;i<raw.length;i++){
    const l=raw[i];
    if(l.startsWith('| **')){
      const p=l.split('|').map(s=>s.trim());
      seo.push([p[1].replace(/\*\*/g,''),p[2]]);
    }
    if(l.trim()==='---'&&seo.length) {i++;break;}
  }
  const body=raw.slice(i);
  return {seo,body};
}

const kids=[];
// Capa
kids.push(new Paragraph({children:[new TextRun({text:'G5 SEGURANÇA',bold:true,size:52,color:AZUL})],spacing:{before:1800,after:80},alignment:AlignmentType.CENTER}));
kids.push(new Paragraph({children:[new TextRun({text:'Textos para Blog',size:36,color:GRAFITE})],spacing:{after:60},alignment:AlignmentType.CENTER}));
kids.push(new Paragraph({children:[new TextRun({text:'Mês 2 do Plano Editorial | Condomínios e tecnologia',size:24,color:'666666'})],spacing:{after:600},alignment:AlignmentType.CENTER}));
kids.push(new Paragraph({border:{bottom:{style:BorderStyle.SINGLE,size:6,color:AZUL}},spacing:{after:400}}));
kids.push(new Paragraph({children:[new TextRun({text:'Conteúdo deste documento',bold:true,size:24,color:AZUL})],spacing:{after:160},alignment:AlignmentType.CENTER}));
const indice=FILES.map((f,i)=>{
  const {seo,body}=parse(f);
  const titulo=body.find(l=>l.startsWith('# ')).slice(2).trim();
  const foco=(seo.find(r=>r[0].startsWith('Palavra-chave foco'))||['',''])[1];
  return ['Semana '+(SEMANA_INICIAL+i),titulo,foco];
});
indice.forEach(([s,t,k])=>{
  kids.push(new Paragraph({children:[new TextRun({text:s+'  ',bold:true,size:20,color:AZUL}),new TextRun({text:t,size:20,color:GRAFITE})],spacing:{after:20},alignment:AlignmentType.CENTER}));
  kids.push(new Paragraph({children:[new TextRun({text:'Palavra-chave foco: '+k,size:18,italics:true,color:'808080'})],spacing:{after:160},alignment:AlignmentType.CENTER}));
});
kids.push(new Paragraph({children:[new TextRun({text:'Documento produzido pela MarkSeg com base na Estratégia de Conteúdo SEO da G5 Segurança.',size:18,italics:true,color:'808080'})],spacing:{before:600},alignment:AlignmentType.CENTER}));
kids.push(new Paragraph({children:[new PageBreak()]}));

FILES.forEach((f,idx)=>{
  const {seo,body}=parse(f);
  const titulo=body.find(l=>l.startsWith('# '))?.slice(2).trim();
  kids.push(new Paragraph({children:[new TextRun({text:'SEMANA '+(SEMANA_INICIAL+idx),bold:true,size:18,color:AZUL})],spacing:{after:60}}));
  kids.push(new Paragraph({heading:HeadingLevel.HEADING_1,children:[new TextRun({text:titulo,bold:true,size:32,color:AZUL})],spacing:{after:200}}));
  kids.push(new Paragraph({children:[new TextRun({text:'PACOTE DE SEO',bold:true,size:20,color:GRAFITE})],spacing:{after:100}}));
  kids.push(tabelaSEO(seo));
  kids.push(new Paragraph({text:'',spacing:{after:260}}));
  kids.push(new Paragraph({children:[new TextRun({text:'TEXTO',bold:true,size:20,color:GRAFITE})],spacing:{after:120},border:{bottom:{style:BorderStyle.SINGLE,size:4,color:'BFBFBF'}}}));
  let firstH1=true;
  body.forEach(line=>{
    const l=line.trim();
    if(!l) return;
    if(l.startsWith('# ')){ if(firstH1){firstH1=false;return;} return; }
    if(l.startsWith('## ')){
      kids.push(new Paragraph({heading:HeadingLevel.HEADING_2,children:[new TextRun({text:l.slice(3).trim(),bold:true,size:26,color:AZUL})],spacing:{before:280,after:140}}));
      return;
    }
    if(l.startsWith('**Leituras relacionadas:**')){
      kids.push(new Paragraph({children:runs(l,{size:20}),spacing:{before:240,after:120},border:{top:{style:BorderStyle.SINGLE,size:4,color:'BFBFBF'}}}));
      return;
    }
    kids.push(P(l,{align:AlignmentType.JUSTIFIED}));
  });
  if(idx<FILES.length-1) kids.push(new Paragraph({children:[new PageBreak()]}));
});

const doc=new Document({
  styles:{default:{document:{run:{font:'Calibri',size:22,color:'000000'}}}},
  sections:[{
    properties:{page:{margin:{top:convertInchesToTwip(1),bottom:convertInchesToTwip(1),left:convertInchesToTwip(1),right:convertInchesToTwip(1)}}},
    headers:{default:new Header({children:[new Paragraph({alignment:AlignmentType.RIGHT,children:[new TextRun({text:'G5 Segurança | Textos para Blog | Mês 2',size:16,color:'999999'})]})]})},
    footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new TextRun({children:['Página ',PageNumber.CURRENT,' de ',PageNumber.TOTAL_PAGES],size:16,color:'999999'})]})]})},
    children:kids}]});

Packer.toBuffer(doc).then(b=>{fs.writeFileSync('/home/user/Markseg-geral-clientes/clientes/g5-seguranca/blog/G5-Seguranca-Blog-Mes-2.docx',b);console.log('gerado',b.length,'bytes');});
