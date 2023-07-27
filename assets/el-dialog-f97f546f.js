import{h as J,D as le,G as se,_ as Q,aG as ae,j as te,l as ne,ai as re,y as ie,z as ue,t as de,ac as G,P as ce,n as fe,M as me,aa as pe,w as ye}from"./index-005e4e09.js";import{u as ve,a as ge,b as Ce,E as be}from"./el-overlay-63796e00.js";import{u as he}from"./index-2118f34c.js";import{F as ke,d as De}from"./el-popper-2a158565.js";import{c as Ee}from"./refs-e5ab6f88.js";import{d as O,Q as Z,V as B,o as I,Y as j,Z as R,a2 as D,a5 as g,u as e,a6 as Ie,a as M,w as k,c as q,aa as Be,a9 as K,a8 as X,K as E,M as _,T as Fe,X as we,H as Te,ah as Ae,a1 as Se,a4 as $e,a3 as Pe,ap as Re,av as Me}from"./runtime-core.esm-bundler-d5958d54.js";import{U as W,u as Y,f as H}from"./users-1a9b2b7f.js";const x=Symbol("dialogInjectionKey"),ee=J({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:le},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),Oe={close:()=>!0},Ne=["aria-label"],Le=["id"],ze=O({name:"ElDialogContent"}),Ve=O({...ze,props:ee,emits:Oe,setup(o){const u=o,{t:C}=he(),{Close:r}=ae,{dialogRef:d,headerRef:m,bodyId:F,ns:a,style:t}=Z(x),{focusTrapRef:p}=Z(ke),c=Ee(p,d),y=B(()=>u.draggable);return ve(d,m,y),(s,i)=>(I(),j("div",{ref:e(c),class:g([e(a).b(),e(a).is("fullscreen",s.fullscreen),e(a).is("draggable",e(y)),e(a).is("align-center",s.alignCenter),{[e(a).m("center")]:s.center},s.customClass]),style:X(e(t)),tabindex:"-1"},[R("header",{ref_key:"headerRef",ref:m,class:g(e(a).e("header"))},[D(s.$slots,"header",{},()=>[R("span",{role:"heading",class:g(e(a).e("title"))},Ie(s.title),3)]),s.showClose?(I(),j("button",{key:0,"aria-label":e(C)("el.dialog.close"),class:g(e(a).e("headerbtn")),type:"button",onClick:i[0]||(i[0]=S=>s.$emit("close"))},[M(e(se),{class:g(e(a).e("close"))},{default:k(()=>[(I(),q(Be(s.closeIcon||e(r))))]),_:1},8,["class"])],10,Ne)):K("v-if",!0)],2),R("div",{id:e(F),class:g(e(a).e("body"))},[D(s.$slots,"default")],10,Le),s.$slots.footer?(I(),j("footer",{key:0,class:g(e(a).e("footer"))},[D(s.$slots,"footer")],2)):K("v-if",!0)],6))}});var Ue=Q(Ve,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const je=J({...ee,appendToBody:{type:Boolean,default:!1},beforeClose:{type:te(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),qe={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[W]:o=>ne(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ke=(o,u)=>{const r=Te().emit,{nextZIndex:d}=re();let m="";const F=Y(),a=Y(),t=E(!1),p=E(!1),c=E(!1),y=E(o.zIndex||d());let s,i;const S=ie("namespace",ue),N=B(()=>{const n={},h=`--${S.value}-dialog`;return o.fullscreen||(o.top&&(n[`${h}-margin-top`]=o.top),o.width&&(n[`${h}-width`]=de(o.width))),n}),L=B(()=>o.alignCenter?{display:"flex"}:{});function z(){r("opened")}function $(){r("closed"),r(W,!1),o.destroyOnClose&&(c.value=!1)}function V(){r("close")}function P(){i==null||i(),s==null||s(),o.openDelay&&o.openDelay>0?{stop:s}=G(()=>f(),o.openDelay):f()}function w(){s==null||s(),i==null||i(),o.closeDelay&&o.closeDelay>0?{stop:i}=G(()=>A(),o.closeDelay):A()}function T(){function n(h){h||(p.value=!0,t.value=!1)}o.beforeClose?o.beforeClose(n):w()}function U(){o.closeOnClickModal&&T()}function f(){ce&&(t.value=!0)}function A(){t.value=!1}function l(){r("openAutoFocus")}function v(){r("closeAutoFocus")}function b(n){var h;((h=n.detail)==null?void 0:h.focusReason)==="pointer"&&n.preventDefault()}o.lockScroll&&ge(t);function oe(){o.closeOnPressEscape&&T()}return _(()=>o.modelValue,n=>{n?(p.value=!1,P(),c.value=!0,y.value=o.zIndex?y.value++:d(),Fe(()=>{r("open"),u.value&&(u.value.scrollTop=0)})):t.value&&w()}),_(()=>o.fullscreen,n=>{u.value&&(n?(m=u.value.style.transform,u.value.style.transform=""):u.value.style.transform=m)}),we(()=>{o.modelValue&&(t.value=!0,c.value=!0,P())}),{afterEnter:z,afterLeave:$,beforeLeave:V,handleClose:T,onModalClick:U,close:w,doClose:A,onOpenAutoFocus:l,onCloseAutoFocus:v,onCloseRequested:oe,onFocusoutPrevented:b,titleId:F,bodyId:a,closed:p,style:N,overlayDialogStyle:L,rendered:c,visible:t,zIndex:y}},Ge=["aria-label","aria-labelledby","aria-describedby"],Ze=O({name:"ElDialog",inheritAttrs:!1}),_e=O({...Ze,props:je,emits:qe,setup(o,{expose:u}){const C=o,r=Ae();H({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},B(()=>!!r.title)),H({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},B(()=>!!C.customClass));const d=fe("dialog"),m=E(),F=E(),a=E(),{visible:t,titleId:p,bodyId:c,style:y,overlayDialogStyle:s,rendered:i,zIndex:S,afterEnter:N,afterLeave:L,beforeLeave:z,handleClose:$,onModalClick:V,onOpenAutoFocus:P,onCloseAutoFocus:w,onCloseRequested:T,onFocusoutPrevented:U}=Ke(C,m);Se(x,{dialogRef:m,headerRef:F,bodyId:c,ns:d,rendered:i,style:y});const f=Ce(V),A=B(()=>C.draggable&&!C.fullscreen);return u({visible:t,dialogContentRef:a}),(l,v)=>(I(),q(Me,{to:"body",disabled:!l.appendToBody},[M(pe,{name:"dialog-fade",onAfterEnter:e(N),onAfterLeave:e(L),onBeforeLeave:e(z),persisted:""},{default:k(()=>[$e(M(e(be),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e(S)},{default:k(()=>[R("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(p),"aria-describedby":e(c),class:g(`${e(d).namespace.value}-overlay-dialog`),style:X(e(s)),onClick:v[0]||(v[0]=(...b)=>e(f).onClick&&e(f).onClick(...b)),onMousedown:v[1]||(v[1]=(...b)=>e(f).onMousedown&&e(f).onMousedown(...b)),onMouseup:v[2]||(v[2]=(...b)=>e(f).onMouseup&&e(f).onMouseup(...b))},[M(e(De),{loop:"",trapped:e(t),"focus-start-el":"container",onFocusAfterTrapped:e(P),onFocusAfterReleased:e(w),onFocusoutPrevented:e(U),onReleaseRequested:e(T)},{default:k(()=>[e(i)?(I(),q(Ue,Pe({key:0,ref_key:"dialogContentRef",ref:a},l.$attrs,{"custom-class":l.customClass,center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(A),fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,onClose:e($)}),Re({header:k(()=>[l.$slots.title?D(l.$slots,"title",{key:1}):D(l.$slots,"header",{key:0,close:e($),titleId:e(p),titleClass:e(d).e("title")})]),default:k(()=>[D(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:k(()=>[D(l.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):K("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Ge)]),_:3},8,["mask","overlay-class","z-index"]),[[me,e(t)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var Ye=Q(_e,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const oo=ye(Ye);export{oo as E};
