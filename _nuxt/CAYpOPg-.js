import{W as m,J as h}from"./CGZPn4Oa.js";function T(t){const e=m("",1e3);return{search:e,handleTypeaheadSearch:(u,l)=>{e.value=e.value+u;{const d=document.activeElement,n=l.map(a=>{var f,x;return{...a,textValue:((f=a.value)==null?void 0:f.textValue)??((x=a.ref.textContent)==null?void 0:x.trim())??""}}),o=n.find(a=>a.ref===d),r=n.map(a=>a.textValue),p=v(r,e.value,o==null?void 0:o.textValue),i=n.find(a=>a.textValue===p);return i&&i.ref.focus(),i==null?void 0:i.ref}},resetTypeahead:()=>{e.value=""}}}function V(t,e){return t.map((s,c)=>t[(e+c)%t.length])}function v(t,e,s){const u=e.length>1&&Array.from(e).every(r=>r===e[0])?e[0]:e,l=s?t.indexOf(s):-1;let d=V(t,Math.max(l,0));u.length===1&&(d=d.filter(r=>r!==s));const o=d.find(r=>r.toLowerCase().startsWith(u.toLowerCase()));return o!==s?o:void 0}function C(t,e,s){const c=t.findIndex(n=>h(n,e)),u=t.findIndex(n=>h(n,s));if(c===-1||u===-1)return[];const[l,d]=[c,u].sort((n,o)=>n-o);return t.slice(l,d+1)}export{C as f,T as u};