function I(P,_){const r=_?P?.MaximumParticipationPerGroup:P?.MaximumParticipationPerCandidate,A=parseInt(r,10);return Number.isNaN(A)||A<=0?_?1:10:A}export{I as g};
