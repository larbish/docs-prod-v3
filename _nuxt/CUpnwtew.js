import{d as v,a0 as C,a1 as _,y as x,C as b,i as h,c as B,A as I,e as T,g as $,B as k,n as s,aw as c,am as w,a8 as y}from"./CGZPn4Oa.js";const M={slots:{root:"relative [&_pre]:h-[200px]",footer:"h-16 absolute inset-x-px bottom-px rounded-b-[calc(var(--ui-radius)*1.5)] flex items-center justify-center",trigger:"group",triggerIcon:"group-data-[state=open]:rotate-180"},variants:{open:{true:{root:"[&_pre]:h-auto [&_pre]:min-h-[200px] [&_pre]:max-h-[80vh] [&_pre]:pb-12"},false:{root:"[&_pre]:overflow-hidden",footer:"bg-gradient-to-t from-[var(--ui-bg-muted)]"}}}},j=y;var d,f;const A=c({extend:c(M),...((f=(d=j.uiPro)==null?void 0:d.prose)==null?void 0:f.codeCollapse)||{}}),E=v({__name:"CodeCollapse",props:C({icon:{},name:{default:"code"},openText:{default:"Expand"},closeText:{default:"Collapse"},class:{},ui:{}},{open:{type:Boolean,default:!1},openModifiers:{}}),emits:["update:open"],setup(n){const e=n,o=_(n,"open"),g=x(),t=b(()=>A({open:o.value}));return(a,l)=>{var r,p,i,u;const m=w;return h(),B("div",{class:s(t.value.root({class:[e.class,(r=e.ui)==null?void 0:r.root]}))},[I(a.$slots,"default"),T("div",{class:s(t.value.footer({class:(p=e.ui)==null?void 0:p.footer}))},[$(m,{icon:a.icon||k(g).ui.icons.chevronDown,color:"neutral",variant:"outline","data-state":o.value?"open":"closed",label:`${o.value?a.closeText:a.openText} ${a.name}`,class:s(t.value.trigger({class:(i=e.ui)==null?void 0:i.trigger})),ui:{leadingIcon:t.value.triggerIcon({class:(u=e.ui)==null?void 0:u.triggerIcon})},onClick:l[0]||(l[0]=N=>o.value=!o.value)},null,8,["icon","data-state","label","class","ui"])],2)],2)}}}),V=Object.assign(E,{__name:"ProseCodeCollapse"});export{V as default};