const d=[{BrandKey:"pypa-kerala",DisplayName:"PYPA Kerala Talent Test",CurrentYear:2026,SortOrder:1,AgeCriteriaJson:`{\r
    "BrandKey": "pypa-kerala",\r
    "Year": 2026,\r
    "AgeOn": {\r
        "Day": 31,\r
        "Month": 12,\r
        "Year": 2026\r
    },\r
    "Groups": [\r
        {\r
            "GroupName": "Juniors",\r
            "Aliases": ["Junior"],\r
            "AgeFrom": 15,\r
            "AgeTo": 21\r
        },\r
        {\r
            "GroupName": "InterMediate",\r
            "Aliases": ["Intermediate"],\r
            "AgeFrom": 22,\r
            "AgeTo": 30\r
        },\r
        {\r
            "GroupName": "Seniors",\r
            "Aliases": ["Senior"],\r
            "AgeFrom": 31,\r
            "AgeTo": 40\r
        },\r
        {\r
            "GroupName": "Common",\r
            "Aliases": ["Common Items"],\r
            "AgeFrom": 15,\r
            "AgeTo": 40\r
        },\r
        {\r
            "GroupName": "Group",\r
            "Aliases": ["Groups", "Group Items"],\r
            "AgeFrom": 15,\r
            "AgeTo": 40\r
        }\r
    ],\r
    "Evidence": [\r
        {\r
            "Claim": "Juniors 15-21, InterMediate 22-30 and Seniors 31-40, counted on 31-12-2026, are what the TVM South District and Adoor West PYPA Talent Tests 2026 actually run with - the two Kerala PYPA events of 2026 that already have registered candidates (77 and 191).",\r
            "Source": "age-group setup of the Kerala PYPA talent tests held in 2026"\r
        },\r
        {\r
            "Claim": "Common and Group end at 40, the same age as Seniors, so that every candidate who fits Common or Group also fits one of the individual age groups. Decided by the eTalenter team on 2026-09-23 after comparing all fifteen Kerala PYPA events of 2026, which used 40 or 41 inconsistently.",\r
            "Source": "eTalenter team decision, 2026-09-23"\r
        }\r
    ]\r
}\r
`}],h=Object.assign({"../staticDb/brandRules.json":d}),p=()=>Object.values(h)[0]||[],c=e=>String(e||"").toLowerCase().replace(/[^a-z0-9]/g,""),y=e=>{try{return typeof e.AgeCriteriaJson=="string"?JSON.parse(e.AgeCriteriaJson):e.AgeCriteriaJson||null}catch{return null}},f=e=>{const r=Number(String(e?.StartDateString||"").match(/\b(\d{4})\b/)?.[1]);return r>1900?r:0},D=(e,r=p())=>{const t=String(e?.BrandKey||"").trim();if(!t)return null;const n=r.find(u=>u.BrandKey===t),a=n&&y(n);if(!a?.Groups?.length)return null;const o=f(e);return o&&o!==Number(a.Year)?null:{...n,criteria:a}},b=e=>({Day:Number(e.AgeStartDate)||0,Month:Number(e.AgeStartMonth)||0,Year:Number(e.AgeStartYear)||0}),N=(e,r)=>e.Day===r.Day&&e.Month===r.Month&&e.Year===r.Year,Y=(e,r)=>{const t=c(e.GroupName);return r.find(n=>[n.GroupName,...n.Aliases||[]].some(a=>c(a)===t))||null},S=(e,r)=>{const t=r?.Groups||[],n={Day:Number(r?.AgeOn?.Day),Month:Number(r?.AgeOn?.Month),Year:Number(r?.AgeOn?.Year)},a=(e||[]).filter(s=>Number(s.Status)===1),o=[],u=[],m=new Set;for(const s of a){const i=Y(s,t);if(!i){u.push(s);continue}m.add(i);const l={AgeFrom:Number(s.AgeFrom),AgeTo:Number(s.AgeTo),AgeOn:b(s)},g={AgeFrom:Number(i.AgeFrom),AgeTo:Number(i.AgeTo),AgeOn:n};(l.AgeFrom!==g.AgeFrom||l.AgeTo!==g.AgeTo||!N(l.AgeOn,g.AgeOn))&&o.push({group:s,current:l,target:g})}const A=t.filter(s=>!m.has(s));return{changes:o,missing:A,extras:u}},T=(e,r,t)=>{const n=new Date(t.Year,t.Month-1,t.Day),a=new Date(n);a.setFullYear(n.getFullYear()-e);const o=new Date(n);return o.setFullYear(n.getFullYear()-r-1),o.setDate(o.getDate()+1),{earliest:o,latest:a}};export{T as b,S as c,f as e,D as f};
