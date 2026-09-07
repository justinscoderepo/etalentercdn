function e(r,n){return!r||!Array.isArray(n)?null:r.ParentLevelId>0?n.find(t=>String(t.EventLevelId)===String(r.ParentLevelId))||null:n.find(t=>t.Order===r.Order-1)||null}export{e as r};
