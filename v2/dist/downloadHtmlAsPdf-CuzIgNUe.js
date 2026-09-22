import{a as d,E as c}from"./sheetExport-DgoqixGE.js";const f=async(e,{fileBase:p,pageWidthMm:i,pageHeightMm:n,marginMm:o=10,windowWidth:l=1200})=>{const r=document.createElement("iframe");r.style.cssText=`position:fixed;top:0;left:-100000px;width:${l}px;height:1700px;border:0;`,document.body.appendChild(r);try{const t=r.contentDocument;t.open(),t.write(e),t.close(),d(t.body),await new Promise(s=>setTimeout(s,400));const a=new c({unit:"mm",format:[i,n],orientation:"portrait"});await a.html(t.body,{html2canvas:{scale:2},margin:[o,o,o,o],width:i-o*2,windowWidth:t.body.scrollWidth}),a.save(`${p}.pdf`)}finally{r.remove()}},g=({title:e,css:p,body:i})=>`<!doctype html><html><head><meta charset="utf-8"><title>${e}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet"><style>${p}</style></head><body>${i}</body></html>`,x=e=>`
  * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font-family: "${e}", "Segoe UI", Roboto, sans-serif; font-weight: 600; font-size: 14px; line-height: 1.5; color: #000; }
  .rpt-group { margin-bottom: 24px; }
  .rpt-group h3 { font-size: 18px; font-weight: 700; margin: 0 0 8px; }
  table { width: 100%; border-collapse: collapse; }
  thead { display: table-header-group; }
  .rpt-group h3 { color: var(--rpt-group-color, #000); }
  th { text-align: left; font-weight: 600; border-bottom: 3px solid var(--rpt-group-color, #0c73c5); padding: 6px 12px 6px 0; }
  td { border-bottom: 1px solid rgba(104,102,102,0.35); padding: 6px 12px 6px 0; vertical-align: top; }
  tr { break-inside: avoid; }
  td.upper { text-transform: uppercase; }
  th.rpt-score { min-width: 200px; }
  .rpt-line { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 2px 0; }
  .rpt-line .rpt-name { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .rpt-line .rpt-val { font-weight: 500; white-space: nowrap; }
  .rpt-total { background: #f3f4f6; padding: 2px 4px; margin: 0 -4px; border-radius: 4px; }
  .rpt-total span:first-child { font-weight: 500; }
  .rpt-total .rpt-val { font-weight: 600; }
  .rpt-bad { color: #dc2626; font-weight: 500; }
  svg.rpt-icon { width: 12px; height: 12px; vertical-align: middle; display: inline-block; }
`;export{x as a,f as d,g as p};
