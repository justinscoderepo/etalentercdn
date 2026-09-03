const t=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),x=`
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
`,h=({fontSize:e=0,fontFamily:r="",cellPadding:p=-1,colMinWidth:i=0,colMaxWidth:l=0,tableMaxWidth:n=0,textAlign:a="inherit",textWrap:d="normal",density:o="normal"}={})=>{const g=e>0?`${e}px`:o==="compact"?"10px":o==="wide"?"16px":"14px",s=p>=0?`${p}px`:o==="compact"?"1px 4px":o==="wide"?"8px 10px":"6px 8px",c=r?`body { font-family: "${r}", "Segoe UI", Roboto, sans-serif; }`:"";return`
  body { font-size: ${g}; }
  ${c}
  table { width: 100%; border-collapse: collapse; margin: 4px 0 8px;${n>0?` max-width: ${n}px;`:""} }
  thead { display: table-header-group; }
  th { text-align: left; font-weight: 600; color: #000; border-bottom: 3px solid #0c73c5; padding: ${s}; font-size: 1em; }
  td { color: #011833; border-bottom: 1px solid rgba(104,102,102,0.35); border-right: 2px solid rgba(237,237,237,0.81); padding: ${s}; vertical-align: top;${i>0?` min-width: ${i}px;`:""}${l>0?` max-width: ${l}px; white-space: normal; overflow-wrap: anywhere;`:""}${a&&a!=="inherit"?` text-align: ${a};`:""}${d==="nowrap"?" white-space: nowrap;":""} }
  tr { break-inside: avoid; }
  td.upper { text-transform: uppercase; }
`},m=e=>`
  <div class="rpt-letterpad">
    ${e.orgLogoUrl?`<img class="rpt-org-logo" src="${t(e.orgLogoUrl)}"/>`:""}
    ${e.logoUrl?`<img class="rpt-event-logo" src="${t(e.logoUrl)}"/>`:""}
    ${e.eventName?`<h1 class="rpt-event-name">${t(e.eventName)}</h1>`:""}
    ${e.showHrLine!==!1?'<hr class="rpt-hrline"/>':""}
  </div>`;export{x as L,t as e,m as l,h as t};
