const fs=require('fs');
const {Document,Packer,Paragraph,TextRun,HeadingLevel,Table,TableRow,TableCell,WidthType,ShadingType,BorderStyle,AlignmentType,PageBreak,Header,Footer,PageNumber,convertInchesToTwip,LevelFormat}=require('docx');
const SRC='/home/user/Markseg-geral-clientes/clientes/g5-seguranca/email/Setembro-2026-Sequencia-3-Emails.md';
const OUT='/home/user/Markseg-geral-clientes/clientes/g5-seguranca/email/G5-Seguranca-Emails-Setembro.docx';
const AZUL='1F3864',CINZA='F2F2F2',GRAFITE='333333',DESTAQUE='FFF2CC';

function runs(text,{size=22,bold=false,italics=false,color='000000'}={}){
  const out=[];const re=/(\*\*(.+?)\*\*|`([^`]+)`|\*([^*]+)\*)/g;let last=0,m;
  const push=t=>{if(t)out.push(new TextRun({text:t,bold,italics,size,color}));};
  while((m=re.exec(text))!==null){
    push(text.slice(last,m.index));
    if(m[2]!==undefined) out.push(new TextRun({text:m[2],bold:true,italics,size,color}));
    else if(m[3]!==undefined) out.push(new TextRun({text:m[3],bold:true,size,color:AZUL,font:'Consolas'}));
    else out.push(new TextRun({text:m[4],italics:true,bold,size,color}));
    last=re.lastIndex;
  }
  push(text.slice(last));
  return out.length?out:[new TextRun({text:'',size})];
}
const kids=[];
const P=(t,o={})=>kids.push(new Paragraph({children:runs(t,o),spacing:{after:o.after??140,line:300},alignment:o.align,indent:o.indent}));

function tabela(rows){
  const cols=rows[0].length;
  const totalW=9000, W=cols===2?[2600,6400]:Array(cols).fill(Math.floor(totalW/cols));
  if(cols!==2){W[cols-1]=totalW-W.slice(0,cols-1).reduce((a,b)=>a+b,0);}
  const cell=(txt,{shade,width,bold})=>new TableCell({
    children:[new Paragraph({children:runs(txt,{size:20,bold,color:bold?'FFFFFF':GRAFITE})})],
    width:{size:width,type:WidthType.DXA},margins:{top:80,bottom:80,left:120,right:120},
    shading:shade?{type:ShadingType.CLEAR,fill:shade,color:'auto'}:undefined});
  const trs=[new TableRow({tableHeader:true,children:rows[0].map((c,i)=>cell(c,{shade:AZUL,width:W[i],bold:true}))})];
  rows.slice(1).forEach((r,i)=>trs.push(new TableRow({children:r.map((c,j)=>cell(c,{shade:i%2?undefined:CINZA,width:W[j]}))})));
  kids.push(new Table({columnWidths:W,width:{size:totalW,type:WidthType.DXA},rows:trs,
    borders:{top:{style:BorderStyle.SINGLE,size:4,color:'BFBFBF'},bottom:{style:BorderStyle.SINGLE,size:4,color:'BFBFBF'},
      left:{style:BorderStyle.SINGLE,size:4,color:'BFBFBF'},right:{style:BorderStyle.SINGLE,size:4,color:'BFBFBF'},
      insideHorizontal:{style:BorderStyle.SINGLE,size:2,color:'BFBFBF'},insideVertical:{style:BorderStyle.SINGLE,size:2,color:'BFBFBF'}}}));
  kids.push(new Paragraph({text:'',spacing:{after:200}}));
}

// CAPA
kids.push(new Paragraph({children:[new TextRun({text:'G5 SEGURANÇA',bold:true,size:52,color:AZUL})],spacing:{before:1800,after:80},alignment:AlignmentType.CENTER}));
kids.push(new Paragraph({children:[new TextRun({text:'Sequência de E-mail Marketing',size:36,color:GRAFITE})],spacing:{after:60},alignment:AlignmentType.CENTER}));
kids.push(new Paragraph({children:[new TextRun({text:'Setembro de 2026 | Derivada do plano de conteúdo do blog',size:24,color:'666666'})],spacing:{after:600},alignment:AlignmentType.CENTER}));
kids.push(new Paragraph({border:{bottom:{style:BorderStyle.SINGLE,size:6,color:AZUL}},spacing:{after:400}}));
kids.push(new Paragraph({children:[new TextRun({text:'Os três disparos do mês',bold:true,size:24,color:AZUL})],spacing:{after:160},alignment:AlignmentType.CENTER}));
[['15/09','Conecta Muralha: sua câmera e a cidade','Base completa | PAS'],
 ['22/09','Análise inteligente e leitura de placas','B2B | Story-Selling'],
 ['29/09','Condomínio na Muralha Digital','Condominial | PASTOR']].forEach(([d,t,s])=>{
  kids.push(new Paragraph({children:[new TextRun({text:d+'  ',bold:true,size:20,color:AZUL}),new TextRun({text:t,size:20,color:GRAFITE})],spacing:{after:20},alignment:AlignmentType.CENTER}));
  kids.push(new Paragraph({children:[new TextRun({text:s,size:18,italics:true,color:'808080'})],spacing:{after:160},alignment:AlignmentType.CENTER}));
});
kids.push(new Paragraph({children:[new TextRun({text:'Documento produzido pela MarkSeg com base na Estratégia de Conteúdo SEO da G5 Segurança.',size:18,italics:true,color:'808080'})],spacing:{before:600},alignment:AlignmentType.CENTER}));
kids.push(new Paragraph({children:[new PageBreak()]}));

const lines=fs.readFileSync(SRC,'utf8').split('\n');
let i=0,firstH1=true;
while(i<lines.length){
  const l=lines[i];const t=l.trim();
  if(!t||t==='---'){i++;continue;}
  if(t.startsWith('|')){
    const block=[];
    while(i<lines.length&&lines[i].trim().startsWith('|')){
      const cells=lines[i].trim().split('|').slice(1,-1).map(s=>s.trim());
      if(!cells.every(c=>/^-+$/.test(c))) block.push(cells);
      i++;
    }
    tabela(block);continue;
  }
  if(t.startsWith('# ')){
    const txt=t.slice(2).trim();
    if(firstH1){firstH1=false;i++;continue;}
    kids.push(new Paragraph({children:[new PageBreak()]}));
    kids.push(new Paragraph({heading:HeadingLevel.HEADING_1,children:[new TextRun({text:txt,bold:true,size:30,color:AZUL})],spacing:{after:180}}));
    i++;continue;
  }
  if(t.startsWith('## ')){
    kids.push(new Paragraph({heading:HeadingLevel.HEADING_2,children:[new TextRun({text:t.slice(3).trim(),bold:true,size:26,color:AZUL})],spacing:{before:280,after:140}}));
    i++;continue;
  }
  if(t.startsWith('**[BOTÃO')||t.startsWith('[BOTÃO')){
    kids.push(new Paragraph({children:[new TextRun({text:t.replace(/\*\*/g,'').replace(/^\[|\]$/g,''),bold:true,size:22,color:'FFFFFF'})],
      shading:{type:ShadingType.CLEAR,fill:AZUL,color:'auto'},alignment:AlignmentType.CENTER,spacing:{before:180,after:180,line:320}}));
    i++;continue;
  }
  if(t.startsWith('[BLOCO')){
    kids.push(new Paragraph({children:runs(t,{size:20,italics:true,color:'7F6000'}),shading:{type:ShadingType.CLEAR,fill:DESTAQUE,color:'auto'},spacing:{before:160,after:160,line:300}}));
    i++;continue;
  }
  if(t.startsWith('- ')){
    kids.push(new Paragraph({children:runs(t.slice(2),{size:22}),bullet:{level:0},spacing:{after:80,line:300}}));
    i++;continue;
  }
  if(/^\*[^*].*\*$/.test(t)){
    kids.push(new Paragraph({children:runs(t.slice(1,-1),{size:20,italics:true,color:'595959'}),spacing:{before:140,after:140,line:300},border:{top:{style:BorderStyle.SINGLE,size:2,color:'D9D9D9'}}}));
    i++;continue;
  }
  P(t,{align:AlignmentType.JUSTIFIED});
  i++;
}

const doc=new Document({
  styles:{default:{document:{run:{font:'Calibri',size:22,color:'000000'}}}},
  numbering:{config:[{reference:'bul',levels:[{level:0,format:LevelFormat.BULLET,text:'•',alignment:AlignmentType.LEFT,style:{paragraph:{indent:{left:420,hanging:220}}}}]}]},
  sections:[{properties:{page:{margin:{top:convertInchesToTwip(1),bottom:convertInchesToTwip(1),left:convertInchesToTwip(1),right:convertInchesToTwip(1)}}},
    headers:{default:new Header({children:[new Paragraph({alignment:AlignmentType.RIGHT,children:[new TextRun({text:'G5 Segurança | E-mail Marketing | Setembro de 2026',size:16,color:'999999'})]})]})},
    footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new TextRun({children:['Página ',PageNumber.CURRENT,' de ',PageNumber.TOTAL_PAGES],size:16,color:'999999'})]})]})},
    children:kids}]});
Packer.toBuffer(doc).then(b=>{fs.writeFileSync(OUT,b);console.log('gerado',b.length,'bytes');});
