import{c as y}from"./cellPadding-BA5g5CTd.js";const d=a=>String(a??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),S=`
  body { font-family: "Quicksand", "Segoe UI", Roboto, sans-serif; font-weight: 600; color: #1a1a1a; margin: 0; }
  .rpt-letterpad { text-align: center; position: relative; padding-top: 4px; }
  .rpt-org-logo { position: absolute; top: 10px; left: 10px; max-height: 60px; width: auto; z-index: 10; }
  .rpt-event-logo { display: block; margin: 0 auto; max-height: 200px; max-width: 70%; width: auto; }
  .rpt-event-name { margin-top: 10px; font-size: 26px; font-weight: 700; color: #1a1a1a; }
  .rpt-header { padding-bottom: 6px; }
  .rpt-header h1 { font-size: 15px; margin: 0; color: #1a1a1a; }
  .rpt-header p { font-size: 10px; margin: 0; color: #555; }
  .rpt-hrline { display: block; width: 100%; margin: 10px 0; border-style: solid; border-width: 5px 0 0 0; border-image: linear-gradient(to right, #b0b0b0 0 10%, #4fc1d9 10% 20%, #e07a6a 20% 30%, #4fd1a3 30% 40%, #a66fc1 40% 50%, #c17a6a 50% 60%, #4fbf8f 60% 70%, #7a7abf 70% 80%, #4f7ac1 80% 90%, #c14f7a 90% 100%) 5; }
  .rpt-footer { margin-top: 8px; font-size: 9px; color: #777; text-align: right; }
`,T=({fontSize:a=0,fontFamily:e="",cellPadding:t=-1,cellPaddingX:o,cellPaddingY:r,colMinWidth:n=0,colMaxWidth:i=0,tableMaxWidth:h=0,textAlign:x="inherit",textWrap:l="normal",density:p="normal"}={})=>{const g=a>0?`${a}px`:p==="compact"?"10px":p==="wide"?"16px":"14px",c=y({cellPadding:t,cellPaddingX:o,cellPaddingY:r,density:p}),f=e?`body { font-family: "${e}", "Segoe UI", Roboto, sans-serif; }`:"";return`
  body { font-size: ${g}; }
  ${f}
  table { width: 100%; border-collapse: collapse; margin: 4px 0 8px;${h>0?` max-width: ${h}px;`:""} }
  thead { display: table-header-group; }
  th { text-align: left; font-weight: 600; color: #000; border-bottom: 3px solid #0c73c5; padding: ${c}; font-size: 1em; }
  td { color: #011833; border-bottom: 1px solid rgba(104,102,102,0.35); border-right: 2px solid rgba(237,237,237,0.81); padding: ${c}; vertical-align: top;${n>0?` min-width: ${n}px;`:""}${i>0?` max-width: ${i}px; white-space: normal; overflow-wrap: anywhere;`:""}${x&&x!=="inherit"?` text-align: ${x};`:""}${l==="nowrap"?" white-space: nowrap;":""} }
  tr { break-inside: avoid; }
  td.upper { text-transform: uppercase; }
`},_=a=>`
  <div class="rpt-letterpad">
    ${a.orgLogoUrl?`<img class="rpt-org-logo" src="${d(a.orgLogoUrl)}"/>`:""}
    ${a.logoUrl?`<img class="rpt-event-logo" src="${d(a.logoUrl)}"/>`:""}
    ${a.eventName?`<h1 class="rpt-event-name">${d(a.eventName)}</h1>`:""}
    ${a.showHrLine!==!1?'<hr class="rpt-hrline"/>':""}
  </div>`,v=["#173F70","#4fc1d9","#e07a6a","#4fd1a3","#a66fc1","#e0b44f","#4f7ac1","#c14f7a","#7a7abf","#4fbf8f"],$=["#3b82f6","#10b981","#f59e0b","#f87171","#9aa8b8"],m=(a,e)=>a.color||v[e%v.length],B=(a,e)=>a.map(t=>({...t,color:e?.get(t.label)})),P=`
  .rpt-charts { display: block; margin: 4px 0 14px; }
  .rpt-charts > * { margin-bottom: 10px; }
  .rpt-chart { width: 100%; box-sizing: border-box; border: 1px solid #dcdcdc; border-radius: 6px; padding: 8px 10px; break-inside: avoid; }
  .rpt-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; }
  .rpt-stat { border: 1px solid #dcdcdc; border-top: 4px solid #173F70; border-radius: 6px; padding: 8px 10px; break-inside: avoid; }
  .rpt-stat strong { display: block; font-size: 22px; line-height: 1.2; color: #173F70; }
  .rpt-stat span { font-size: 11px; color: #555; }
  .rpt-stat em.rpt-note { display: block; font-size: 9px; font-style: normal; color: #777; margin-top: 1px; }
  .rpt-chart h4 { margin: 0 0 6px; font-size: 12px; font-weight: 700; color: #1a1a1a; }
  .rpt-chart-donut { display: flex; align-items: center; gap: 10px; }
  .rpt-chart-donut svg { flex: none; width: 150px; height: 150px; }
  .rpt-legend { list-style: none; margin: 0; padding: 0; font-size: 11px; color: #333; min-width: 0; flex: 1; columns: 2 220px; column-gap: 16px; }
  .rpt-legend li { display: flex; align-items: center; gap: 5px; margin: 1px 0; break-inside: avoid; }
  .rpt-legend i { flex: none; width: 8px; height: 8px; border-radius: 2px; }
  .rpt-legend span { overflow-wrap: anywhere; }
  .rpt-bars { font-size: 11px; color: #333; }
  .rpt-bar { margin: 0 0 9px; break-inside: avoid; }
  .rpt-bar-head { position: relative; height: 15px; line-height: 15px; margin-bottom: 3px; font-size: 11px; font-weight: 600; color: #1a1a1a; }
  .rpt-bar-head span { display: block; padding-right: 36px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
  .rpt-bar-head span + span { position: absolute; top: 0; right: 0; padding: 0; width: auto; }
  .rpt-bar-track { height: 6px; border-radius: 3px; background: #e8ecf1; overflow: hidden; }
  .rpt-bar b { display: block; height: 100%; border-radius: 3px; }
  .rpt-cols { display: block; width: 100%; height: auto; overflow: visible; }
`,A=(a,e,t,o=2)=>{const r=new Map;return(a||[]).forEach(n=>{const i=String(e(n)??"").trim(),h=Number(t(n))||0;i&&r.set(i,(r.get(i)||0)+h)}),[...r].filter(([,n])=>n>0).map(([n,i])=>({label:n,value:i,text:i.toFixed(o)})).sort((n,i)=>i.value-n.value)},F=(a,e)=>{const t=new Map;return(a||[]).forEach(o=>{const r=String(e(o)??"").trim();r&&t.set(r,(t.get(r)||0)+1)}),[...t].map(([o,r])=>({label:o,value:r})).sort((o,r)=>r.value-o.value)},k=(a,e,t)=>{const o=e,r=o.reduce((l,p)=>l+p.value,0),n=15.9155;let i=0;const h=o.map((l,p)=>{const g=l.value/r*100,c=`<circle cx="21" cy="21" r="${n}" fill="none" stroke="${m(l,p)}" stroke-width="7" stroke-dasharray="${g} ${100-g}" stroke-dashoffset="${-i}" transform="rotate(-90 21 21)"/>`;return i+=g,c}).join(""),x=o.map((l,p)=>`<li><i style="background:${m(l,p)}"></i><span>${d(l.label)} — ${l.text??l.value}</span></li>`).join("");return`<div class="rpt-chart"><h4>${d(a)}</h4><div class="rpt-chart-donut"><svg viewBox="0 0 42 42">${h}<text x="21" y="22.5" text-anchor="middle" font-size="7" font-weight="700" fill="#1a1a1a">${t??r}</text></svg><ul class="rpt-legend">${x}</ul></div></div>`},L=(a,e)=>{const h=Math.max(...e.map(s=>s.value)),x=Math.max(1,Math.ceil(h/4)),l=x*Math.ceil(h/x),p=924/e.length,g=Math.min(64,p*.7),c=s=>296-s/l*160,f=[];for(let s=0;s<=l;s+=x)f.push(`<line x1="36" x2="990" y1="${c(s)}" y2="${c(s)}" stroke="#e5e7eb" stroke-dasharray="3 3"/><text x="30" y="${c(s)+3}" text-anchor="end" font-size="10" fill="#555">${s}</text>`);const w=e.map((s,u)=>{const b=36+p*u+p/2;return`<rect x="${b-g/2}" y="${c(s.value)}" width="${g}" height="${296-c(s.value)}" rx="2" fill="${m(s,u)}"/><text x="${b}" y="${c(s.value)-4}" text-anchor="middle" font-size="11" fill="#333">${s.text??s.value}</text><text transform="translate(${b-4} 106) rotate(-35)" font-size="11" fill="#333">${d(s.label)}</text>`}).join("");return`<div class="rpt-chart"><h4>${d(a)}</h4><svg class="rpt-cols" viewBox="0 0 1000 304">${f.join("")}${w}</svg></div>`},z=(a,e)=>{const t=Math.max(...e.map(r=>r.value)),o=e.map((r,n)=>`<div class="rpt-bar"><div class="rpt-bar-head"><span>${d(r.label)}</span><span>${r.text??r.value}</span></div><div class="rpt-bar-track"><b style="width:${Math.max(2,r.value/t*100)}%;background:${r.color||$[n%$.length]}"></b></div></div>`).join("");return`<div class="rpt-chart"><h4>${d(a)}</h4><div class="rpt-bars">${o}</div></div>`},E=a=>`<div class="rpt-stats">${a.map(e=>`<div class="rpt-stat"><strong>${d(e.text??e.value)}</strong><span>${d(e.label)}</span>${e.note?`<em class="rpt-note">${d(e.note)}</em>`:""}</div>`).join("")}</div>`,O=a=>{const e=(a||[]).filter(t=>t.items?.length).map(t=>t.kind==="stats"?E(t.items):t.kind==="columns"?L(t.title,t.items):t.kind==="bars"?z(t.title,t.items):k(t.title,t.items,t.centre));return e.length?`<div class="rpt-charts">${e.join("")}</div>`:""},C=a=>{const e=[],t=o=>(o||[]).forEach(r=>r.children?t(r.children):e.push(...r.rows||[]));return t(a),e},R=(a,e)=>{const t=new Set;return(a||[]).filter(o=>{const r=e(o);return t.has(r)?!1:(t.add(r),!0)})};export{P as C,S as L,C as a,O as b,F as c,d as e,_ as l,A as s,T as t,R as u,B as w};
