import{Q as l,U as c,W as L,e as _,X as d,Y as K,i as k,Z as W,$ as w,a0 as y,a1 as R,a2 as u}from"./index-454643d3.js";var N=l(c,"WeakMap");const j=N;var q=9007199254740991;function z(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=q}function X(t){return t!=null&&z(t.length)&&!L(t)}var Y=Object.prototype;function Z(t){var r=t&&t.constructor,e=typeof r=="function"&&r.prototype||Y;return t===e}function H(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}var Q="[object Arguments]";function $(t){return _(t)&&d(t)==Q}var V=Object.prototype,J=V.hasOwnProperty,tt=V.propertyIsEnumerable,et=$(function(){return arguments}())?$:function(t){return _(t)&&J.call(t,"callee")&&!tt.call(t,"callee")};const rt=et;function at(){return!1}var D=typeof exports=="object"&&exports&&!exports.nodeType&&exports,x=D&&typeof module=="object"&&module&&!module.nodeType&&module,nt=x&&x.exports===D,S=nt?c.Buffer:void 0,ot=S?S.isBuffer:void 0,st=ot||at;const it=st;var ct="[object Arguments]",ut="[object Array]",pt="[object Boolean]",ft="[object Date]",gt="[object Error]",bt="[object Function]",yt="[object Map]",lt="[object Number]",dt="[object Object]",ht="[object RegExp]",Tt="[object Set]",jt="[object String]",vt="[object WeakMap]",mt="[object ArrayBuffer]",At="[object DataView]",_t="[object Float32Array]",wt="[object Float64Array]",$t="[object Int8Array]",xt="[object Int16Array]",St="[object Int32Array]",Ot="[object Uint8Array]",Pt="[object Uint8ClampedArray]",It="[object Uint16Array]",Et="[object Uint32Array]",a={};a[_t]=a[wt]=a[$t]=a[xt]=a[St]=a[Ot]=a[Pt]=a[It]=a[Et]=!0;a[ct]=a[ut]=a[mt]=a[pt]=a[At]=a[ft]=a[gt]=a[bt]=a[yt]=a[lt]=a[dt]=a[ht]=a[Tt]=a[jt]=a[vt]=!1;function Mt(t){return _(t)&&z(t.length)&&!!a[d(t)]}function Ct(t){return function(r){return t(r)}}var F=typeof exports=="object"&&exports&&!exports.nodeType&&exports,g=F&&typeof module=="object"&&module&&!module.nodeType&&module,Ut=g&&g.exports===F,T=Ut&&K.process,Bt=function(){try{var t=g&&g.require&&g.require("util").types;return t||T&&T.binding&&T.binding("util")}catch{}}();const O=Bt;var P=O&&O.isTypedArray,kt=P?Ct(P):Mt;const zt=kt;var Vt=Object.prototype,Dt=Vt.hasOwnProperty;function Ft(t,r){var e=k(t),n=!e&&rt(t),s=!e&&!n&&it(t),p=!e&&!n&&!s&&zt(t),f=e||n||s||p,h=f?H(t.length,String):[],G=h.length;for(var o in t)(r||Dt.call(t,o))&&!(f&&(o=="length"||s&&(o=="offset"||o=="parent")||p&&(o=="buffer"||o=="byteLength"||o=="byteOffset")||W(o,G)))&&h.push(o);return h}function Gt(t,r){return function(e){return t(r(e))}}var Lt=Gt(Object.keys,Object);const Kt=Lt;var Wt=Object.prototype,Rt=Wt.hasOwnProperty;function Nt(t){if(!Z(t))return Kt(t);var r=[];for(var e in Object(t))Rt.call(t,e)&&e!="constructor"&&r.push(e);return r}function qt(t){return X(t)?Ft(t):Nt(t)}function Xt(t,r){for(var e=-1,n=r.length,s=t.length;++e<n;)t[s+e]=r[e];return t}function Yt(){this.__data__=new w,this.size=0}function Zt(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e}function Ht(t){return this.__data__.get(t)}function Qt(t){return this.__data__.has(t)}var Jt=200;function te(t,r){var e=this.__data__;if(e instanceof w){var n=e.__data__;if(!y||n.length<Jt-1)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new R(n)}return e.set(t,r),this.size=e.size,this}function b(t){var r=this.__data__=new w(t);this.size=r.size}b.prototype.clear=Yt;b.prototype.delete=Zt;b.prototype.get=Ht;b.prototype.has=Qt;b.prototype.set=te;function ee(t,r){for(var e=-1,n=t==null?0:t.length,s=0,p=[];++e<n;){var f=t[e];r(f,e,t)&&(p[s++]=f)}return p}function re(){return[]}var ae=Object.prototype,ne=ae.propertyIsEnumerable,I=Object.getOwnPropertySymbols,oe=I?function(t){return t==null?[]:(t=Object(t),ee(I(t),function(r){return ne.call(t,r)}))}:re;const se=oe;function ie(t,r,e){var n=r(t);return k(t)?n:Xt(n,e(t))}function je(t){return ie(t,qt,se)}var ce=l(c,"DataView");const v=ce;var ue=l(c,"Promise");const m=ue;var pe=l(c,"Set");const A=pe;var E="[object Map]",fe="[object Object]",M="[object Promise]",C="[object Set]",U="[object WeakMap]",B="[object DataView]",ge=u(v),be=u(y),ye=u(m),le=u(A),de=u(j),i=d;(v&&i(new v(new ArrayBuffer(1)))!=B||y&&i(new y)!=E||m&&i(m.resolve())!=M||A&&i(new A)!=C||j&&i(new j)!=U)&&(i=function(t){var r=d(t),e=r==fe?t.constructor:void 0,n=e?u(e):"";if(n)switch(n){case ge:return B;case be:return E;case ye:return M;case le:return C;case de:return U}return r});const ve=i;var he=c.Uint8Array;const me=he;export{b as S,me as U,Xt as a,ie as b,ve as c,Ct as d,je as e,Z as f,se as g,X as h,it as i,Ft as j,qt as k,zt as l,rt as m,O as n,Gt as o,z as p,re as s};
