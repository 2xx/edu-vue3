import{t as w,n as x,P as G,a9 as A,ap as U,a7 as W,a8 as z,h,j as Y}from"./index-85698657.js";import{j as v,ab as N,X as K,aq as V,ag as j,O as $,ax as q,M as g,S as J,a0 as E,d as Q,a as Z,a2 as O,h as P}from"./runtime-core.esm-bundler-d5958d54.js";import{t as F}from"./users-48779947.js";import{g as ee}from"./scroll-880816f1.js";var c=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(c||{});const p=e=>{const n=v(e)?e:[e],t=[];return n.forEach(o=>{var u;v(o)?t.push(...p(o)):N(o)&&v(o.children)?t.push(...p(o.children)):(t.push(o),N(o)&&((u=o.component)!=null&&u.subTree)&&t.push(...p(o.component.subTree)))}),t},ie=(e,n,t)=>{let o={offsetX:0,offsetY:0};const u=a=>{const d=a.clientX,m=a.clientY,{offsetX:l,offsetY:f}=o,i=e.value.getBoundingClientRect(),T=i.left,y=i.top,D=i.width,_=i.height,k=document.documentElement.clientWidth,H=document.documentElement.clientHeight,I=-T+l,B=-y+f,R=k-T-D+l,X=H-y-_+f,S=L=>{const b=Math.min(Math.max(l+L.clientX-d,I),R),C=Math.min(Math.max(f+L.clientY-m,B),X);o={offsetX:b,offsetY:C},e.value.style.transform=`translate(${w(b)}, ${w(C)})`},M=()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",M)};document.addEventListener("mousemove",S),document.addEventListener("mouseup",M)},r=()=>{n.value&&e.value&&n.value.addEventListener("mousedown",u)},s=()=>{n.value&&e.value&&n.value.removeEventListener("mousedown",u)};K(()=>{V(()=>{t.value?r():s()})}),j(()=>{s()})},ce=e=>{$(e)||F("[useLockscreen]","You need to pass a ref param to this function");const n=x("popup"),t=q(()=>n.bm("parent","hidden"));if(!G||A(document.body,t.value))return;let o=0,u=!1,r="0";const s=()=>{setTimeout(()=>{z(document.body,t.value),u&&(document.body.style.width=r)},200)};g(e,a=>{if(!a){s();return}u=!A(document.body,t.value),u&&(r=document.body.style.width),o=ee(n.namespace.value);const d=document.documentElement.clientHeight<document.body.scrollHeight,m=U(document.body,"overflowY");o>0&&(d||m==="scroll")&&u&&(document.body.style.width=`calc(100% - ${o}px)`),W(document.body,t.value)}),J(()=>s())},oe=e=>{if(!e)return{onClick:E,onMousedown:E,onMouseup:E};let n=!1,t=!1;return{onClick:s=>{n&&t&&e(s),n=t=!1},onMousedown:s=>{n=s.target===s.currentTarget},onMouseup:s=>{t=s.target===s.currentTarget}}},te=h({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:Y([String,Array,Object])},zIndex:{type:Y([String,Number])}}),ne={click:e=>e instanceof MouseEvent};var se=Q({name:"ElOverlay",props:te,emits:ne,setup(e,{slots:n,emit:t}){const o=x("overlay"),u=d=>{t("click",d)},{onClick:r,onMousedown:s,onMouseup:a}=oe(e.customMaskEvent?void 0:u);return()=>e.mask?Z("div",{class:[o.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:r,onMousedown:s,onMouseup:a},[O(n,"default")],c.STYLE|c.CLASS|c.PROPS,["onClick","onMouseup","onMousedown"]):P("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[O(n,"default")])}});const me=se;export{me as E,ce as a,oe as b,p as f,ie as u};
