import{d as _,bo as B,r as w,i as m,c as f,n as r,B as a,g as b,e as g,t as z,f as H,A as N,H as V,a8 as S,aw as v,am as $}from"./CGZPn4Oa.js";import j from"./CFUekcNX.js";const A={slots:{root:"relative my-5 group",header:"flex items-center gap-1.5 border border-[var(--ui-border-muted)] bg-[var(--ui-bg)] border-b-0 relative rounded-t-[calc(var(--ui-radius)*1.5)] px-4 py-3",filename:"text-[var(--ui-text)] text-sm/6",icon:"size-4 shrink-0",copy:"absolute top-[11px] right-[11px] opacity-0 group-hover:opacity-100 transition",base:"group font-mono text-sm/6 border border-[var(--ui-border-muted)] bg-[var(--ui-bg-muted)] rounded-[calc(var(--ui-radius)*1.5)] px-4 py-3 whitespace-pre-wrap break-words overflow-x-auto focus:outline-none"},variants:{filename:{true:{root:"[&>pre]:rounded-t-none [&>pre]:my-0 my-5"}}}},i=S;var y,h;const D=v({extend:v(A),...((h=(y=i.uiPro)==null?void 0:y.prose)==null?void 0:h.pre)||{}}),E=_({__name:"Pre",props:{icon:{},code:{},language:{},filename:{},highlights:{},hideHeader:{type:Boolean},meta:{},class:{},ui:{}},setup(C){const e=C,s=D(),k=B(),n=w(!1);function x(){k.copy(e.code||""),n.value=!0,setTimeout(()=>{n.value=!1},2e3)}return(o,I)=>{var t,c,l,u,p,d;const P=$;return m(),f("div",{class:r(a(s).root({class:[(t=e.ui)==null?void 0:t.root],filename:!!o.filename}))},[o.filename&&!o.hideHeader?(m(),f("div",{key:0,class:r(a(s).header({class:(c=e.ui)==null?void 0:c.header}))},[b(j,{icon:o.icon,filename:o.filename,class:r(a(s).icon({class:(l=e.ui)==null?void 0:l.icon}))},null,8,["icon","filename","class"]),g("span",{class:r(a(s).filename({class:(u=e.ui)==null?void 0:u.filename}))},z(o.filename),3)],2)):H("",!0),b(P,{icon:n.value?a(i).ui.icons.copyCheck:a(i).ui.icons.copy,color:"neutral",variant:"outline",size:"sm","aria-label":"Copy code to clipboard",class:r(a(s).copy({class:(p=e.ui)==null?void 0:p.copy})),tabindex:"-1",onClick:x},null,8,["icon","class"]),g("pre",V({class:a(s).base({class:[e.class,(d=e.ui)==null?void 0:d.base]})},o.$attrs),[N(o.$slots,"default")],16)],2)}}}),U=Object.assign(E,{__name:"ProsePre"});export{U as default};
