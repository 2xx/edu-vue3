import{h as A,j as b,J as v,n as S,I,_ as V,w as O,E,b as Q}from"./index-454643d3.js";import{E as Y}from"./users-4d3745c7.js";import{E as Z}from"./el-card-80e98f78.js";import{E as H,a as W}from"./el-checkbox-55230050.js";import{d as y,Q as X,V as h,g as z,o as i,c as C,w as u,a2 as B,a5 as K,u as m,a8 as L,aa as P,a1 as ee,K as k,aq as te,Z as q,a as g,ad as R,a6 as N,O as j,Y as $,ar as D,F as x}from"./runtime-core.esm-bundler-d5958d54.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import{e as se,f as oe}from"./roles-90df6199.js";import"./isEqual-a9ed7f07.js";import"./_Uint8Array-d1f10f11.js";import"./flatten-5a56c86a.js";const G=Symbol("rowContextKey"),ae=A({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:b([Number,Object]),default:()=>v({})},sm:{type:b([Number,Object]),default:()=>v({})},md:{type:b([Number,Object]),default:()=>v({})},lg:{type:b([Number,Object]),default:()=>v({})},xl:{type:b([Number,Object]),default:()=>v({})}}),le=y({name:"ElCol"}),ne=y({...le,props:ae,setup(d){const s=d,{gutter:c}=X(G,{gutter:h(()=>0)}),a=S("col"),n=h(()=>{const t={};return c.value&&(t.paddingLeft=t.paddingRight=`${c.value/2}px`),t}),r=h(()=>{const t=[];return["span","offset","pull","push"].forEach(e=>{const o=s[e];I(o)&&(e==="span"?t.push(a.b(`${s[e]}`)):o>0&&t.push(a.b(`${e}-${s[e]}`)))}),["xs","sm","md","lg","xl"].forEach(e=>{I(s[e])?t.push(a.b(`${e}-${s[e]}`)):z(s[e])&&Object.entries(s[e]).forEach(([o,l])=>{t.push(o!=="span"?a.b(`${e}-${o}-${l}`):a.b(`${e}-${l}`))})}),c.value&&t.push(a.is("guttered")),[a.b(),t]});return(t,p)=>(i(),C(P(t.tag),{class:K(m(r)),style:L(m(n))},{default:u(()=>[B(t.$slots,"default")]),_:3},8,["class","style"]))}});var ce=V(ne,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const re=O(ce),ue=["start","center","end","space-around","space-between","space-evenly"],de=["top","middle","bottom"],pe=A({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:ue,default:"start"},align:{type:String,values:de,default:"top"}}),ie=y({name:"ElRow"}),me=y({...ie,props:pe,setup(d){const s=d,c=S("row"),a=h(()=>s.gutter);ee(G,{gutter:a});const n=h(()=>{const t={};return s.gutter&&(t.marginRight=t.marginLeft=`-${s.gutter/2}px`),t}),r=h(()=>[c.b(),c.is(`justify-${s.justify}`,s.justify!=="start"),c.is(`align-${s.align}`,s.align!=="top")]);return(t,p)=>(i(),C(P(t.tag),{class:K(m(r)),style:L(m(n))},{default:u(()=>[B(t.$slots,"default")]),_:3},8,["class","style"]))}});var fe=V(me,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const _e=O(fe);const ge={class:"card-header"},he=y({__name:"AllocCategory",props:{category:null},emits:["postCheckedIdsRef"],setup(d,{emit:s}){var e;const c=d,a=k(c.category.selected),n=k([]),r=[],t=k(n.value.length>0&&n.value.length<r.length);(e=c.category.resourceList)==null||e.forEach(o=>{r.push(o.id),o.selected&&n.value.push(o.id)}),s("postCheckedIdsRef",n),te(()=>{n.value.length===0&&(a.value=!1,t.value=!1)});const p=o=>{n.value=o?r:[],t.value=!1},w=o=>{const l=o.length;a.value=l===r.length,t.value=l>0&&l<r.length};return(o,l)=>{const f=H,J=re,T=_e,U=W,M=Z;return i(),C(M,{class:"box-card"},{header:u(()=>[q("div",ge,[g(f,{modelValue:m(a),"onUpdate:modelValue":l[0]||(l[0]=_=>j(a)?a.value=_:null),indeterminate:m(t),onChange:p},{default:u(()=>[R(N(c.category.name),1)]),_:1},8,["modelValue","indeterminate"])])]),default:u(()=>[g(U,{modelValue:m(n),"onUpdate:modelValue":l[1]||(l[1]=_=>j(n)?n.value=_:null),onChange:w},{default:u(()=>[g(T,null,{default:u(()=>[(i(!0),$(x,null,D(d.category.resourceList,_=>(i(),C(J,{span:8,key:_.id},{default:u(()=>[g(f,{label:_.id},{default:u(()=>[R(N(_.name),1)]),_:2},1032,["label"])]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});const ye=F(he,[["__scopeId","data-v-7dbaed70"]]),be={class:"resources-btn"},ve=y({__name:"AllocResources",props:{roleId:{type:String,required:!0}},setup(d){const s=d,c=Q();console.log(s.roleId);const a=k();(async()=>{const{data:e}=await se(s.roleId);if(console.log(e),e.code==="000000")a.value=e.data.sort((o,l)=>o.id-l.id);else throw E.error("获取角色资源权限失败..."),new Error("获取角色资源权限失败..."+e.mesg)})();const r=async()=>{const e=p.reduce((l,f)=>[...l,...f.value],[]);console.log(e);const{data:o}=await oe(s.roleId,e);if(o.code==="000000"&&o.data)E.success("更新角色资源权限成功!"),c.push({name:"roles"});else throw E.error("更新角色资源权限失败..."),new Error("更新角色资源权限失败..."+o.mesg)},t=()=>{p.forEach(e=>{e.value=[]})},p=[],w=e=>{p.push(e)};return(e,o)=>{const l=Y;return i(),$(x,null,[(i(!0),$(x,null,D(m(a),f=>(i(),C(ye,{key:f.id,category:f,onPostCheckedIdsRef:w},null,8,["category"]))),128)),q("div",be,[g(l,{type:"primary",onClick:r},{default:u(()=>[R("保存")]),_:1}),g(l,{type:"",onClick:t},{default:u(()=>[R("清空")]),_:1})])],64)}}});const Ae=F(ve,[["__scopeId","data-v-4c12b2ae"]]);export{Ae as default};
