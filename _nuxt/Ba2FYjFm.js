import{d as E,C as S,i,z as x,w as _,A as g,H as G,B as t,P as Z,a4 as fe,a5 as be,aw as A,a9 as ee,c as k,n as o,f as y,e as L,a8 as K,a6 as D,t as H,F,I as ie,am as ke,a7 as re,aj as _e,ai as ve,ad as te,ae as ye,y as ae,ay as oe,g as b,az as he,aA as xe,aB as $e,r as ne,G as Ce,aC as ze,aD as Le,ah as Ie,a as we,aE as Pe,u as Be,aF as Se,aG as Te,aH as Ue,aI as Oe,aJ as He,U as Ae,q as Re,aK as De,aL as Ee,aM as je,aN as Ne,al as le,aO as Ve,aP as Me,aQ as We,aR as qe}from"./CGZPn4Oa.js";import{_ as Fe}from"./CHzvWRDN.js";import{_ as Ge}from"./fWqdZGaD.js";import"./BmlbPuZL.js";const Je=E({__name:"BaseSeparator",props:{orientation:{default:"horizontal"},decorative:{type:Boolean},asChild:{type:Boolean},as:{}},setup(f){const e=f,s=["horizontal","vertical"];function p(m){return s.includes(m)}const a=S(()=>p(e.orientation)?e.orientation:"horizontal"),n=S(()=>a.value==="vertical"?e.orientation:void 0),u=S(()=>e.decorative?{role:"none"}:{"aria-orientation":n.value,role:"separator"});return(m,r)=>(i(),x(t(Z),G({as:m.as,"as-child":m.asChild,"data-orientation":a.value},u.value),{default:_(()=>[g(m.$slots,"default")]),_:3},16,["as","as-child","data-orientation"]))}}),Ke=E({__name:"Separator",props:{orientation:{default:"horizontal"},decorative:{type:Boolean},asChild:{type:Boolean},as:{}},setup(f){const e=f;return(s,p)=>(i(),x(Je,fe(be(e)),{default:_(()=>[g(s.$slots,"default")]),_:3},16))}}),Qe={slots:{root:"relative border-b border-[var(--ui-border)] py-8",container:"",wrapper:"flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",headline:"mb-2.5 text-sm font-semibold text-[var(--ui-primary)] flex items-center gap-1.5",title:"text-3xl sm:text-4xl text-pretty font-bold text-[var(--ui-text-highlighted)]",description:"text-lg text-pretty text-[var(--ui-text-muted)]",links:"flex flex-wrap items-center gap-1.5"},variants:{title:{true:{description:"mt-4"}}}},Xe=K;var ce;const Ye=A({extend:A(Qe),...((ce=Xe.uiPro)==null?void 0:ce.pageHeader)||{}}),Ze=E({__name:"PageHeader",props:{as:{},headline:{},title:{},description:{},links:{},class:{},ui:{}},setup(f){const e=f,s=ee(),p=S(()=>Ye({title:!!e.title||!!s.title}));return(a,n)=>{var m;const u=ke;return i(),x(t(Z),{as:a.as,class:o(p.value.root({class:[e.class,(m=e.ui)==null?void 0:m.root]}))},{default:_(()=>{var r,w,I,v,h,c,$;return[a.headline||s.headline?(i(),k("div",{key:0,class:o(p.value.headline({class:(r=e.ui)==null?void 0:r.headline}))},[g(a.$slots,"headline",{},()=>[D(H(a.headline),1)])],2)):y("",!0),L("div",{class:o(p.value.container({class:(w=e.ui)==null?void 0:w.container}))},[L("div",{class:o(p.value.wrapper({class:(I=e.ui)==null?void 0:I.wrapper}))},[a.title||s.title?(i(),k("h1",{key:0,class:o(p.value.title({class:(v=e.ui)==null?void 0:v.title}))},[g(a.$slots,"title",{},()=>[D(H(a.title),1)])],2)):y("",!0),(h=a.links)!=null&&h.length||s.links?(i(),k("div",{key:1,class:o(p.value.links({class:(c=e.ui)==null?void 0:c.links}))},[g(a.$slots,"links",{},()=>[(i(!0),k(F,null,ie(a.links,(T,l)=>(i(),x(u,G({key:l,color:"neutral",variant:"outline",ref_for:!0},T),null,16))),128))])],2)):y("",!0)],2),a.description||s.description?(i(),k("div",{key:0,class:o(p.value.description({class:($=e.ui)==null?void 0:$.description}))},[g(a.$slots,"description",{},()=>[D(H(a.description),1)])],2)):y("",!0),g(a.$slots,"default")],2)]}),_:3},8,["as","class"])}}}),et=Object.assign(Ze,{__name:"UPageHeader"}),tt={slots:{root:"flex items-center align-center text-center",border:"",container:"font-medium text-[var(--ui-text)] flex",icon:"shrink-0 size-5",avatar:"shrink-0",avatarSize:"2xs",label:"text-sm"},variants:{color:{primary:{border:"border-[var(--ui-primary)]"},secondary:{border:"border-[var(--ui-secondary)]"},success:{border:"border-[var(--ui-success)]"},info:{border:"border-[var(--ui-info)]"},warning:{border:"border-[var(--ui-warning)]"},error:{border:"border-[var(--ui-error)]"},neutral:{border:"border-[var(--ui-border)]"}},orientation:{horizontal:{root:"w-full flex-row",border:"w-full",container:"mx-3 whitespace-nowrap"},vertical:{root:"h-full flex-col",border:"h-full",container:"my-2"}},size:{xs:"",sm:"",md:"",lg:"",xl:""},type:{solid:{border:"border-solid"},dashed:{border:"border-dashed"},dotted:{border:"border-dotted"}}},compoundVariants:[{orientation:"horizontal",size:"xs",class:{border:"border-t"}},{orientation:"horizontal",size:"sm",class:{border:"border-t-[2px]"}},{orientation:"horizontal",size:"md",class:{border:"border-t-[3px]"}},{orientation:"horizontal",size:"lg",class:{border:"border-t-[4px]"}},{orientation:"horizontal",size:"xl",class:{border:"border-t-[5px]"}},{orientation:"vertical",size:"xs",class:{border:"border-s"}},{orientation:"vertical",size:"sm",class:{border:"border-s-[2px]"}},{orientation:"vertical",size:"md",class:{border:"border-s-[3px]"}},{orientation:"vertical",size:"lg",class:{border:"border-s-[4px]"}},{orientation:"vertical",size:"xl",class:{border:"border-s-[5px]"}}],defaultVariants:{color:"neutral",size:"xs",type:"solid"}},at=K;var ue;const st=re({extend:re(tt),...((ue=at.ui)==null?void 0:ue.separator)||{}}),nt=E({__name:"Separator",props:{as:{},label:{},icon:{},avatar:{},color:{},size:{},type:{},orientation:{default:"horizontal"},class:{},ui:{},decorative:{type:Boolean}},setup(f){const e=f,s=ee(),p=_e(ve(e,"as","decorative","orientation")),a=S(()=>st({color:e.color,orientation:e.orientation,size:e.size,type:e.type}));return(n,u)=>{var m;return i(),x(t(Ke),G(t(p),{class:a.value.root({class:[e.class,(m=e.ui)==null?void 0:m.root]})}),{default:_(()=>{var r,w,I;return[L("div",{class:o(a.value.border({class:(r=e.ui)==null?void 0:r.border}))},null,2),n.label||n.icon||n.avatar||s.default?(i(),k(F,{key:0},[L("div",{class:o(a.value.container({class:(w=e.ui)==null?void 0:w.container}))},[g(n.$slots,"default",{},()=>{var v,h,c,$;return[n.label?(i(),k("span",{key:0,class:o(a.value.label({class:(v=e.ui)==null?void 0:v.label}))},H(n.label),3)):n.icon?(i(),x(te,{key:1,name:n.icon,class:o(a.value.icon({class:(h=e.ui)==null?void 0:h.icon}))},null,8,["name","class"])):n.avatar?(i(),x(ye,G({key:2,size:((c=e.ui)==null?void 0:c.avatarSize)||a.value.avatarSize()},n.avatar,{class:a.value.avatar({class:($=e.ui)==null?void 0:$.avatar})}),null,16,["size","class"])):y("",!0)]})],2),L("div",{class:o(a.value.border({class:(I=e.ui)==null?void 0:I.border}))},null,2)],64)):y("",!0)]}),_:3},16,["class"])}}}),ot=Object.assign(nt,{__name:"USeparator"}),it={slots:{root:"grid sm:grid-cols-2 gap-8",link:["group block px-6 py-8 rounded-[calc(var(--ui-radius)*2)] border border-[var(--ui-border)] hover:bg-[var(--ui-bg-elevated)]/50 focus-visible:outline-[var(--ui-primary)]","transition-colors"],linkLeading:["inline-flex items-center rounded-full p-1.5 bg-[var(--ui-bg-elevated)] group-hover:bg-[var(--ui-primary)]/10 ring ring-[var(--ui-border-accented)] mb-4 group-hover:ring-[var(--ui-primary)]/50","transition"],linkLeadingIcon:["size-5 shrink-0 text-[var(--ui-text-highlighted)] group-hover:text-[var(--ui-primary)]","transition-[color,translate]"],linkTitle:"font-medium text-[15px] text-[var(--ui-text-highlighted)] mb-1 truncate",linkDescription:"text-sm text-[var(--ui-text-muted)] line-clamp-2"},variants:{direction:{left:{linkLeadingIcon:["group-active:-translate-x-0.5"]},right:{link:"text-right",linkLeadingIcon:["group-active:translate-x-0.5"]}}}},rt={key:1,class:"hidden lg:block"},lt=K;var de;const ct=A({extend:A(it),...((de=lt.uiPro)==null?void 0:de.contentSurround)||{}}),ut=E({__name:"ContentSurround",props:{as:{},prevIcon:{},nextIcon:{},surround:{},class:{},ui:{}},setup(f){const e=f,s=ae(),[p,a]=oe(),n=ct();return(u,m)=>{var I;const r=te,w=he;return i(),k(F,null,[b(t(p),null,{default:_(({link:v,icon:h,direction:c})=>{var $;return[v?(i(),x(w,{key:0,to:v.path,raw:"",class:o(t(n).link({class:[($=e.ui)==null?void 0:$.link,v.class],direction:c}))},{default:_(()=>[g(u.$slots,"link",{link:v},()=>{var T,l,j;return[L("div",{class:o(t(n).linkLeading({class:(T=e.ui)==null?void 0:T.linkLeading}))},[g(u.$slots,"link-leading",{link:v},()=>{var R;return[b(r,{name:v.icon||h,class:o(t(n).linkLeadingIcon({class:(R=e.ui)==null?void 0:R.linkLeadingIcon,direction:c}))},null,8,["name","class"])]})],2),L("p",{class:o(t(n).linkTitle({class:(l=e.ui)==null?void 0:l.linkTitle}))},[g(u.$slots,"link-title",{link:v},()=>[D(H(v.title),1)])],2),L("p",{class:o(t(n).linkDescription({class:(j=e.ui)==null?void 0:j.linkDescription}))},[g(u.$slots,"link-description",{link:v},()=>[D(H(v.description),1)])],2)]})]),_:2},1032,["to","class"])):(i(),k("span",rt," "))]}),_:3}),u.surround?(i(),x(t(Z),{key:0,as:u.as,class:o(t(n).root({class:[e.class,(I=e.ui)==null?void 0:I.root]}))},{default:_(()=>[b(t(a),{link:u.surround[0],icon:u.prevIcon||t(s).ui.icons.arrowLeft,direction:"left"},null,8,["link","icon"]),b(t(a),{link:u.surround[1],icon:u.nextIcon||t(s).ui.icons.arrowRight,direction:"right"},null,8,["link","icon"])]),_:1},8,["as","class"])):y("",!0)],64)}}}),dt=Object.assign(ut,{__name:"UContentSurround"}),pt={base:"mt-8 pb-24 space-y-12"},mt=K;var pe;const gt=A({extend:A(pt),...((pe=mt.uiPro)==null?void 0:pe.pageBody)||{}}),vt=E({__name:"PageBody",props:{as:{},class:{}},setup(f){const e=f;return(s,p)=>(i(),x(t(Z),{as:s.as,class:o(t(gt)({class:e.class}))},{default:_(()=>[g(s.$slots,"default")]),_:3},8,["as","class"]))}}),ht=Object.assign(vt,{__name:"UPageBody"}),ft={slots:{root:"flex flex-col gap-3",title:"text-sm font-semibold flex items-center gap-1.5",list:"flex flex-col gap-2",item:"relative",link:"group text-sm flex items-center gap-1.5 focus-visible:outline-[var(--ui-primary)]",linkLeadingIcon:"size-5 shrink-0",linkLabel:"truncate",linkLabelExternalIcon:"size-3 absolute top-0 text-[var(--ui-text-dimmed)]"},variants:{active:{true:{link:"text-[var(--ui-primary)] font-medium"},false:{link:["text-[var(--ui-text-muted)] hover:text-[var(--ui-text)]","transition-colors"]}}}},bt=K;var me;const kt=A({extend:A(ft),...((me=bt.uiPro)==null?void 0:me.pageLinks)||{}}),_t=E({__name:"PageLinks",props:{as:{default:"nav"},title:{},links:{},class:{},ui:{}},setup(f){const e=f,s=ee(),p=ae(),a=kt();return(n,u)=>{var I;const m=te,r=$e,w=he;return i(),x(t(Z),{as:n.as,class:o(t(a).root({class:[e.class,(I=e.ui)==null?void 0:I.root]}))},{default:_(()=>{var v,h;return[n.title?(i(),k("p",{key:0,class:o(t(a).title({class:(v=e.ui)==null?void 0:v.title}))},[g(n.$slots,"title",{},()=>[D(H(n.title),1)])],2)):y("",!0),L("ul",{class:o(t(a).list({class:(h=e.ui)==null?void 0:h.list}))},[(i(!0),k(F,null,ie(n.links,(c,$)=>{var T;return i(),k("li",{key:$,class:o(t(a).item({class:(T=e.ui)==null?void 0:T.item}))},[b(w,G({ref_for:!0},t(xe)(c),{custom:""}),{default:_(({active:l,...j})=>{var R;return[b(r,G({ref_for:!0},j,{class:t(a).link({class:[(R=e.ui)==null?void 0:R.link,c.class],active:l})}),{default:_(()=>[g(n.$slots,"link",{link:c,active:l},()=>{var M,J;return[g(n.$slots,"link-leading",{link:c,active:l},()=>{var d;return[c.icon?(i(),x(m,{key:0,name:c.icon,class:o(t(a).linkLeadingIcon({class:(d=e.ui)==null?void 0:d.linkLeadingIcon,active:l}))},null,8,["name","class"])):y("",!0)]}),c.label||s["link-label"]?(i(),k("span",{key:0,class:o(t(a).linkLabel({class:(M=e.ui)==null?void 0:M.linkLabel,active:l}))},[g(n.$slots,"link-label",{link:c,active:l},()=>[D(H(c.label),1)]),c.target==="_blank"?(i(),x(m,{key:0,name:t(p).ui.icons.external,class:o(t(a).linkLabelExternalIcon({class:(J=e.ui)==null?void 0:J.linkLabelExternalIcon,active:l}))},null,8,["name","class"])):y("",!0)],2)):y("",!0),g(n.$slots,"link-trailing",{link:c,active:l})]})]),_:2},1040,["class"])]}),_:2},1040)],2)}),128))],2)]}),_:3},8,["as","class"])}}}),yt=Object.assign(_t,{__name:"UPageLinks"});function xt(){const f=ne(),e=ne([]),s=ne([]);function p(n){n.forEach(u=>{const m=u.target.id;m&&(u.isIntersecting?e.value=[...e.value,m]:e.value=e.value.filter(r=>r!==m))})}function a(n){n.forEach(u=>{f.value&&f.value.observe(u)})}return Ce(e,(n,u)=>{n.length===0?s.value=u:s.value=n}),ze(()=>f.value=new IntersectionObserver(p)),Le(()=>{var n;return(n=f.value)==null?void 0:n.disconnect()}),{visibleHeadings:e,activeHeadings:s,updateHeadings:a}}const $t={slots:{root:"sticky top-[calc(var(--ui-header-height)+1px)] bg-[var(--ui-bg)]/75 backdrop-blur -mx-4 px-4 sm:px-6 sm:-mx-6 overflow-y-auto max-h-[calc(100vh-var(--ui-header-height))]",container:"pt-4 sm:pt-6 pb-2.5 sm:pb-4.5 lg:py-8 border-b border-dashed border-[var(--ui-border)] lg:border-0 flex flex-col",top:"",bottom:"mt-6 hidden lg:flex lg:flex-col gap-6",trigger:"group text-sm font-semibold flex-1 flex items-center gap-1.5 py-1.5 -mt-1.5 focus-visible:outline-[var(--ui-primary)]",title:"truncate",trailing:"ms-auto inline-flex gap-1.5 items-center",trailingIcon:"size-5 transform transition-transform duration-200 shrink-0 group-data-[state=open]:rotate-180 lg:hidden",content:"data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden focus:outline-none",list:"",listWithChildren:"ms-3",item:"",itemWithChildren:"",link:"group text-sm block truncate focus-visible:outline-[var(--ui-primary)] py-1",indicator:"absolute ms-2.5 transition-[translate,height] duration-200 h-[var(--indicator-size)] translate-y-[var(--indicator-position)] w-px rounded-full"},variants:{color:{primary:"",secondary:"",success:"",info:"",warning:"",error:"",neutral:""},highlightColor:{primary:{indicator:"bg-[var(--ui-primary)]"},secondary:{indicator:"bg-[var(--ui-secondary)]"},success:{indicator:"bg-[var(--ui-success)]"},info:{indicator:"bg-[var(--ui-info)]"},warning:{indicator:"bg-[var(--ui-warning)]"},error:{indicator:"bg-[var(--ui-error)]"},neutral:{indicator:"bg-[var(--ui-bg-inverted)]"}},active:{false:{link:["text-[var(--ui-text-muted)] hover:text-[var(--ui-text)]","transition-colors"]}},highlight:{true:{list:"ms-2.5 ps-4 border-s border-[var(--ui-border)]",item:"-ms-px"}}},compoundVariants:[{color:"primary",active:!0,class:{link:"text-[var(--ui-primary)]",linkLeadingIcon:"text-[var(--ui-primary)]"}},{color:"secondary",active:!0,class:{link:"text-[var(--ui-secondary)]",linkLeadingIcon:"text-[var(--ui-secondary)]"}},{color:"success",active:!0,class:{link:"text-[var(--ui-success)]",linkLeadingIcon:"text-[var(--ui-success)]"}},{color:"info",active:!0,class:{link:"text-[var(--ui-info)]",linkLeadingIcon:"text-[var(--ui-info)]"}},{color:"warning",active:!0,class:{link:"text-[var(--ui-warning)]",linkLeadingIcon:"text-[var(--ui-warning)]"}},{color:"error",active:!0,class:{link:"text-[var(--ui-error)]",linkLeadingIcon:"text-[var(--ui-error)]"}},{color:"neutral",active:!0,class:{link:"text-[var(--ui-text-highlighted)]",linkLeadingIcon:"text-[var(--ui-text-highlighted)]"}}],defaultVariants:{color:"primary",highlightColor:"primary"}},Ct=["href","onClick"],zt=K;var ge;const Lt=A({extend:A($t),...((ge=zt.uiPro)==null?void 0:ge.contentToc)||{}}),It=E({__name:"ContentToc",props:{as:{default:"nav"},trailingIcon:{},title:{default:"On this page"},color:{},highlight:{type:Boolean},highlightColor:{},links:{},class:{},ui:{},defaultOpen:{type:Boolean,default:!0},open:{type:Boolean},disabled:{type:Boolean}},emits:["update:open","move"],setup(f,{emit:e}){const s=f,p=e,a=ee(),n=Ie(ve(s,"as","open"),p),u=we(),m=ae(),{activeHeadings:r,updateHeadings:w}=xt(),[I,v]=oe(),[h,c]=oe(),T=Pe(He).smaller("lg"),l=S(()=>Lt({color:s.color,highlight:s.highlight,highlightColor:s.highlightColor||s.color})),j=S(()=>T.value?!1:s.defaultOpen);function R(d){const B=encodeURIComponent(d);u.push(`#${B}`),p("move",d)}Be().hooks.hookOnce("page:finish",()=>{w([...document.querySelectorAll("h2"),...document.querySelectorAll("h3")])});function M(d){return d.flatMap(B=>[B,...B.children?M(B.children):[]])}const J=S(()=>{var P;if(!((P=r.value)!=null&&P.length))return;const B=M(s.links||[]).findIndex(C=>r.value.includes(C.id)),W=28,N=0;return{"--indicator-size":`${W*r.value.length+N*(r.value.length-1)}px`,"--indicator-position":B>=0?`${B*(W+N)}px`:"0px"}});return(d,B)=>{var N;const W=te;return i(),k(F,null,[b(t(I),null,{default:_(({links:P,level:C})=>{var U,O;return[L("ul",{class:o(C>0?l.value.listWithChildren({class:(U=s.ui)==null?void 0:U.listWithChildren}):l.value.list({class:(O=s.ui)==null?void 0:O.list}))},[(i(!0),k(F,null,ie(P,(z,q)=>{var V,Q,X,Y;return i(),k("li",{key:q,class:o(z.children&&z.children.length>0?l.value.itemWithChildren({class:(V=s.ui)==null?void 0:V.itemWithChildren}):l.value.item({class:(Q=s.ui)==null?void 0:Q.item}))},[L("a",{href:`#${z.id}`,class:o(l.value.link({class:[(X=s.ui)==null?void 0:X.link,z.class],active:t(r).includes(z.id)})),onClick:Ae(se=>R(z.id),["prevent"])},[g(d.$slots,"link",{link:z},()=>[D(H(z.text),1)])],10,Ct),(Y=z.children)!=null&&Y.length?(i(),x(t(v),{key:0,links:z.children,level:C+1},null,8,["links","level"])):y("",!0)],2)}),128))],2)]}),_:3}),b(t(h),null,{default:_(({open:P})=>{var C,U;return[g(d.$slots,"leading",{open:P}),L("span",{class:o(l.value.title({class:(C=s.ui)==null?void 0:C.title}))},[g(d.$slots,"default",{open:P},()=>[D(H(d.title),1)])],2),L("span",{class:o(l.value.trailing({class:(U=s.ui)==null?void 0:U.trailing}))},[g(d.$slots,"trailing",{open:P},()=>{var O;return[b(W,{name:d.trailingIcon||t(m).ui.icons.chevronDown,class:o(l.value.trailingIcon({class:(O=s.ui)==null?void 0:O.trailingIcon}))},null,8,["name","class"])]})],2)]}),_:3}),b(t(Oe),G(t(n),{"default-open":j.value,class:l.value.root({class:[s.class,(N=s.ui)==null?void 0:N.root]})}),{default:_(({open:P})=>{var C,U,O,z,q;return[L("div",{class:o(l.value.container({class:(C=s.ui)==null?void 0:C.container}))},[a.top?(i(),k("div",{key:0,class:o(l.value.top({class:(U=s.ui)==null?void 0:U.top}))},[g(d.$slots,"top",{links:d.links})],2)):y("",!0),(O=d.links)!=null&&O.length?(i(),k(F,{key:1},[b(t(Se),{class:o(l.value.trigger({class:"lg:hidden"}))},{default:_(()=>[b(t(c),{open:P},null,8,["open"])]),_:2},1032,["class"]),L("p",{class:o(l.value.trigger({class:"hidden lg:flex"}))},[b(t(c),{open:P},null,8,["open"])],2),b(t(Te),{class:o(l.value.content({class:(z=s.ui)==null?void 0:z.content}))},{default:_(()=>{var V;return[d.highlight?(i(),k("div",{key:0,class:o(l.value.indicator({class:(V=s.ui)==null?void 0:V.indicator})),style:Ue(J.value)},null,6)):y("",!0),g(d.$slots,"content",{links:d.links},()=>[b(t(v),{links:d.links,level:0},null,8,["links"])])]}),_:3},8,["class"])],64)):y("",!0),a.bottom?(i(),k("div",{key:2,class:o(l.value.bottom({class:(q=s.ui)==null?void 0:q.bottom}))},[g(d.$slots,"bottom",{links:d.links})],2)):y("",!0)],2)]}),_:3},16,["default-open","class"])],64)}}}),wt=Object.assign(It,{__name:"UContentToc"}),Ut=E({__name:"[...slug]",async setup(f){let e,s;const p=Re(),{toc:a,seo:n}=ae(),u=De("navigation"),{data:m}=([e,s]=Ee(()=>Ve(p.path,()=>Promise.all([We("docs").path(p.path).first(),qe("docs",p.path,{fields:["title","description"]})]),{transform:([h,c])=>({page:h,surround:c})})),e=await e,s(),e);if(!m.value||!m.value.page)throw je({statusCode:404,statusMessage:"Page not found",fatal:!0});const r=S(()=>{var h;return(h=m.value)==null?void 0:h.page}),w=S(()=>{var h;return(h=m.value)==null?void 0:h.surround});Ne({title:r.value.seo.title,ogTitle:`${r.value.seo.title} - ${n==null?void 0:n.siteName}`,description:r.value.seo.description,ogDescription:r.value.seo.description});const I=S(()=>Me(u.value,r.value)),v=S(()=>{var h,c,$;return[((h=a==null?void 0:a.bottom)==null?void 0:h.edit)&&{icon:"i-lucide-external-link",label:"Edit this page",to:`${a.bottom.edit}/${(c=r==null?void 0:r.value)==null?void 0:c.path}`,target:"_blank"},...(($=a==null?void 0:a.bottom)==null?void 0:$.links)||[]].filter(Boolean)});return(h,c)=>{var B,W,N,P;const $=et,T=Fe,l=ot,j=dt,R=ht,M=yt,J=wt,d=Ge;return t(r)?(i(),x(d,{key:0},le({default:_(()=>[b($,{title:t(r).title,description:t(r).description,links:t(r).links,headline:t(I)},null,8,["title","description","links","headline"]),b(R,null,{default:_(()=>{var C;return[t(r)?(i(),x(T,{key:0,value:t(r)},null,8,["value"])):y("",!0),(C=t(w))!=null&&C.length?(i(),x(l,{key:1})):y("",!0),b(j,{surround:t(w)},null,8,["surround"])]}),_:1})]),_:2},[(P=(N=(W=(B=t(r))==null?void 0:B.body)==null?void 0:W.toc)==null?void 0:N.links)!=null&&P.length?{name:"right",fn:_(()=>{var C,U,O,z;return[b(J,{title:(C=t(a))==null?void 0:C.title,links:(O=(U=t(r).body)==null?void 0:U.toc)==null?void 0:O.links},le({_:2},[(z=t(a))!=null&&z.bottom?{name:"bottom",fn:_(()=>{var q,V,Q,X,Y,se;return[L("div",{class:o(["hidden lg:block space-y-6",{"!mt-6":(Q=(V=(q=t(r).body)==null?void 0:q.toc)==null?void 0:V.links)==null?void 0:Q.length}])},[(se=(Y=(X=t(r).body)==null?void 0:X.toc)==null?void 0:Y.links)!=null&&se.length?(i(),x(l,{key:0,type:"dashed"})):y("",!0),b(M,{title:t(a).bottom.title,links:t(v)},null,8,["title","links"])],2)]}),key:"0"}:void 0]),1032,["title","links"])]}),key:"0"}:void 0]),1024)):y("",!0)}}});export{Ut as default};
