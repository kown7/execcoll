var Ka=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var rh=Ka(Kt=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function jr(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const st={},nn=[],Vt=()=>{},Ga=()=>!1,Za=/^on[^a-z]/,Ti=t=>Za.test(t),Mr=t=>t.startsWith("onUpdate:"),_t=Object.assign,zr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ja=Object.prototype.hasOwnProperty,Q=(t,e)=>Ja.call(t,e),A=Array.isArray,rn=t=>Hn(t)==="[object Map]",Ri=t=>Hn(t)==="[object Set]",po=t=>Hn(t)==="[object Date]",B=t=>typeof t=="function",bt=t=>typeof t=="string",fn=t=>typeof t=="symbol",rt=t=>t!==null&&typeof t=="object",_s=t=>(rt(t)||B(t))&&B(t.then)&&B(t.catch),bs=Object.prototype.toString,Hn=t=>bs.call(t),Qa=t=>Hn(t).slice(8,-1),xs=t=>Hn(t)==="[object Object]",Lr=t=>bt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ri=jr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Di=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},tl=/-(\w)/g,re=Di(t=>t.replace(tl,(e,n)=>n?n.toUpperCase():"")),el=/\B([A-Z])/g,gn=Di(t=>t.replace(el,"-$1").toLowerCase()),ki=Di(t=>t.charAt(0).toUpperCase()+t.slice(1)),Vi=Di(t=>t?`on${ki(t)}`:""),We=(t,e)=>!Object.is(t,e),oi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},hi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},gi=t=>{const e=parseFloat(t);return isNaN(e)?t:e},nl=t=>{const e=bt(t)?Number(t):NaN;return isNaN(e)?t:e};let mo;const gr=()=>mo||(mo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Br(t){if(A(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=bt(i)?sl(i):Br(i);if(r)for(const o in r)e[o]=r[o]}return e}else if(bt(t)||rt(t))return t}const il=/;(?![^(]*\))/g,rl=/:([^]+)/,ol=/\/\*[^]*?\*\//g;function sl(t){const e={};return t.replace(ol,"").split(il).forEach(n=>{if(n){const i=n.split(rl);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function vt(t){let e="";if(bt(t))e=t;else if(A(t))for(let n=0;n<t.length;n++){const i=vt(t[n]);i&&(e+=i+" ")}else if(rt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const al="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ll=jr(al);function $s(t){return!!t||t===""}function fl(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=qi(t[i],e[i]);return n}function qi(t,e){if(t===e)return!0;let n=po(t),i=po(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=fn(t),i=fn(e),n||i)return t===e;if(n=A(t),i=A(e),n||i)return n&&i?fl(t,e):!1;if(n=rt(t),i=rt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,o=Object.keys(e).length;if(r!==o)return!1;for(const s in t){const a=t.hasOwnProperty(s),l=e.hasOwnProperty(s);if(a&&!l||!a&&l||!qi(t[s],e[s]))return!1}}return String(t)===String(e)}function cl(t,e){return t.findIndex(n=>qi(n,e))}const Le=t=>bt(t)?t:t==null?"":A(t)||rt(t)&&(t.toString===bs||!B(t.toString))?JSON.stringify(t,vs,2):String(t),vs=(t,e)=>e&&e.__v_isRef?vs(t,e.value):rn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Ri(e)?{[`Set(${e.size})`]:[...e.values()]}:rt(e)&&!A(e)&&!xs(e)?String(e):e;let Ft;class ys{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ft,!e&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ft;try{return Ft=this,e()}finally{Ft=n}}}on(){Ft=this}off(){Ft=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function ws(t){return new ys(t)}function ul(t,e=Ft){e&&e.active&&e.effects.push(t)}function Es(){return Ft}function dl(t){Ft&&Ft.cleanups.push(t)}const Hr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ss=t=>(t.w&Re)>0,Cs=t=>(t.n&Re)>0,hl=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Re},gl=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Ss(r)&&!Cs(r)?r.delete(t):e[n++]=r,r.w&=~Re,r.n&=~Re}e.length=n}},pi=new WeakMap;let vn=0,Re=1;const pr=30;let Yt;const Be=Symbol(""),mr=Symbol("");class Wr{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ul(this,i)}run(){if(!this.active)return this.fn();let e=Yt,n=Se;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Yt,Yt=this,Se=!0,Re=1<<++vn,vn<=pr?hl(this):_o(this),this.fn()}finally{vn<=pr&&gl(this),Re=1<<--vn,Yt=this.parent,Se=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Yt===this?this.deferStop=!0:this.active&&(_o(this),this.onStop&&this.onStop(),this.active=!1)}}function _o(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Se=!0;const Ts=[];function pn(){Ts.push(Se),Se=!1}function mn(){const t=Ts.pop();Se=t===void 0?!0:t}function At(t,e,n){if(Se&&Yt){let i=pi.get(t);i||pi.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Hr()),Rs(r)}}function Rs(t,e){let n=!1;vn<=pr?Cs(t)||(t.n|=Re,n=!Ss(t)):n=!t.has(Yt),n&&(t.add(Yt),Yt.deps.push(t))}function ue(t,e,n,i,r,o){const s=pi.get(t);if(!s)return;let a=[];if(e==="clear")a=[...s.values()];else if(n==="length"&&A(t)){const l=Number(i);s.forEach((f,c)=>{(c==="length"||!fn(c)&&c>=l)&&a.push(f)})}else switch(n!==void 0&&a.push(s.get(n)),e){case"add":A(t)?Lr(n)&&a.push(s.get("length")):(a.push(s.get(Be)),rn(t)&&a.push(s.get(mr)));break;case"delete":A(t)||(a.push(s.get(Be)),rn(t)&&a.push(s.get(mr)));break;case"set":rn(t)&&a.push(s.get(Be));break}if(a.length===1)a[0]&&_r(a[0]);else{const l=[];for(const f of a)f&&l.push(...f);_r(Hr(l))}}function _r(t,e){const n=A(t)?t:[...t];for(const i of n)i.computed&&bo(i);for(const i of n)i.computed||bo(i)}function bo(t,e){(t!==Yt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function pl(t,e){var n;return(n=pi.get(t))==null?void 0:n.get(e)}const ml=jr("__proto__,__v_isRef,__isVue"),Ds=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fn)),xo=_l();function _l(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=G(this);for(let o=0,s=this.length;o<s;o++)At(i,"get",o+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(G)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){pn();const i=G(this)[e].apply(this,n);return mn(),i}}),t}function bl(t){const e=G(this);return At(e,"has",t),e.hasOwnProperty(t)}class ks{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,i){const r=this._isReadonly,o=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw"&&i===(r?o?ql:Is:o?As:Ns).get(e))return e;const s=A(e);if(!r){if(s&&Q(xo,n))return Reflect.get(xo,n,i);if(n==="hasOwnProperty")return bl}const a=Reflect.get(e,n,i);return(fn(n)?Ds.has(n):ml(n))||(r||At(e,"get",n),o)?a:ht(a)?s&&Lr(n)?a:a.value:rt(a)?r?Ps(a):Ai(a):a}}class qs extends ks{constructor(e=!1){super(!1,e)}set(e,n,i,r){let o=e[n];if(cn(o)&&ht(o)&&!ht(i))return!1;if(!this._shallow&&(!mi(i)&&!cn(i)&&(o=G(o),i=G(i)),!A(e)&&ht(o)&&!ht(i)))return o.value=i,!0;const s=A(e)&&Lr(n)?Number(n)<e.length:Q(e,n),a=Reflect.set(e,n,i,r);return e===G(r)&&(s?We(i,o)&&ue(e,"set",n,i):ue(e,"add",n,i)),a}deleteProperty(e,n){const i=Q(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ue(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!fn(n)||!Ds.has(n))&&At(e,"has",n),i}ownKeys(e){return At(e,"iterate",A(e)?"length":Be),Reflect.ownKeys(e)}}class xl extends ks{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const $l=new qs,vl=new xl,yl=new qs(!0),Ur=t=>t,Ni=t=>Reflect.getPrototypeOf(t);function Xn(t,e,n=!1,i=!1){t=t.__v_raw;const r=G(t),o=G(e);n||(We(e,o)&&At(r,"get",e),At(r,"get",o));const{has:s}=Ni(r),a=i?Ur:n?Vr:On;if(s.call(r,e))return a(t.get(e));if(s.call(r,o))return a(t.get(o));t!==r&&t.get(e)}function Vn(t,e=!1){const n=this.__v_raw,i=G(n),r=G(t);return e||(We(t,r)&&At(i,"has",t),At(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Kn(t,e=!1){return t=t.__v_raw,!e&&At(G(t),"iterate",Be),Reflect.get(t,"size",t)}function $o(t){t=G(t);const e=G(this);return Ni(e).has.call(e,t)||(e.add(t),ue(e,"add",t,t)),this}function vo(t,e){e=G(e);const n=G(this),{has:i,get:r}=Ni(n);let o=i.call(n,t);o||(t=G(t),o=i.call(n,t));const s=r.call(n,t);return n.set(t,e),o?We(e,s)&&ue(n,"set",t,e):ue(n,"add",t,e),this}function yo(t){const e=G(this),{has:n,get:i}=Ni(e);let r=n.call(e,t);r||(t=G(t),r=n.call(e,t)),i&&i.call(e,t);const o=e.delete(t);return r&&ue(e,"delete",t,void 0),o}function wo(){const t=G(this),e=t.size!==0,n=t.clear();return e&&ue(t,"clear",void 0,void 0),n}function Gn(t,e){return function(i,r){const o=this,s=o.__v_raw,a=G(s),l=e?Ur:t?Vr:On;return!t&&At(a,"iterate",Be),s.forEach((f,c)=>i.call(r,l(f),l(c),o))}}function Zn(t,e,n){return function(...i){const r=this.__v_raw,o=G(r),s=rn(o),a=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,f=r[t](...i),c=n?Ur:e?Vr:On;return!e&&At(o,"iterate",l?mr:Be),{next(){const{value:h,done:g}=f.next();return g?{value:h,done:g}:{value:a?[c(h[0]),c(h[1])]:c(h),done:g}},[Symbol.iterator](){return this}}}}function me(t){return function(...e){return t==="delete"?!1:this}}function wl(){const t={get(o){return Xn(this,o)},get size(){return Kn(this)},has:Vn,add:$o,set:vo,delete:yo,clear:wo,forEach:Gn(!1,!1)},e={get(o){return Xn(this,o,!1,!0)},get size(){return Kn(this)},has:Vn,add:$o,set:vo,delete:yo,clear:wo,forEach:Gn(!1,!0)},n={get(o){return Xn(this,o,!0)},get size(){return Kn(this,!0)},has(o){return Vn.call(this,o,!0)},add:me("add"),set:me("set"),delete:me("delete"),clear:me("clear"),forEach:Gn(!0,!1)},i={get(o){return Xn(this,o,!0,!0)},get size(){return Kn(this,!0)},has(o){return Vn.call(this,o,!0)},add:me("add"),set:me("set"),delete:me("delete"),clear:me("clear"),forEach:Gn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=Zn(o,!1,!1),n[o]=Zn(o,!0,!1),e[o]=Zn(o,!1,!0),i[o]=Zn(o,!0,!0)}),[t,n,e,i]}const[El,Sl,Cl,Tl]=wl();function Yr(t,e){const n=e?t?Tl:Cl:t?Sl:El;return(i,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Q(n,r)&&r in i?n:i,r,o)}const Rl={get:Yr(!1,!1)},Dl={get:Yr(!1,!0)},kl={get:Yr(!0,!1)},Ns=new WeakMap,As=new WeakMap,Is=new WeakMap,ql=new WeakMap;function Nl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Al(t){return t.__v_skip||!Object.isExtensible(t)?0:Nl(Qa(t))}function Ai(t){return cn(t)?t:Xr(t,!1,$l,Rl,Ns)}function Il(t){return Xr(t,!1,yl,Dl,As)}function Ps(t){return Xr(t,!0,vl,kl,Is)}function Xr(t,e,n,i,r){if(!rt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=r.get(t);if(o)return o;const s=Al(t);if(s===0)return t;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function Ce(t){return cn(t)?Ce(t.__v_raw):!!(t&&t.__v_isReactive)}function cn(t){return!!(t&&t.__v_isReadonly)}function mi(t){return!!(t&&t.__v_isShallow)}function Os(t){return Ce(t)||cn(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function Ii(t){return hi(t,"__v_skip",!0),t}const On=t=>rt(t)?Ai(t):t,Vr=t=>rt(t)?Ps(t):t;function Fs(t){Se&&Yt&&(t=G(t),Rs(t.dep||(t.dep=Hr())))}function js(t,e){t=G(t);const n=t.dep;n&&_r(n)}function ht(t){return!!(t&&t.__v_isRef===!0)}function $e(t){return Pl(t,!1)}function Pl(t,e){return ht(t)?t:new Ol(t,e)}class Ol{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:On(e)}get value(){return Fs(this),this._value}set value(e){const n=this.__v_isShallow||mi(e)||cn(e);e=n?e:G(e),We(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:On(e),js(this))}}function Fl(t){return ht(t)?t.value:t}const jl={get:(t,e,n)=>Fl(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return ht(r)&&!ht(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Ms(t){return Ce(t)?t:new Proxy(t,jl)}function Ml(t){const e=A(t)?new Array(t.length):{};for(const n in t)e[n]=Ll(t,n);return e}class zl{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return pl(G(this._object),this._key)}}function Ll(t,e,n){const i=t[e];return ht(i)?i:new zl(t,e,n)}class Bl{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Wr(e,()=>{this._dirty||(this._dirty=!0,js(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=G(this);return Fs(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Hl(t,e,n=!1){let i,r;const o=B(t);return o?(i=t,r=Vt):(i=t.get,r=t.set),new Bl(i,r,o||!r,n)}function Te(t,e,n,i){let r;try{r=i?t(...i):t()}catch(o){Pi(o,e,n)}return r}function Ht(t,e,n,i){if(B(t)){const o=Te(t,e,n,i);return o&&_s(o)&&o.catch(s=>{Pi(s,e,n)}),o}const r=[];for(let o=0;o<t.length;o++)r.push(Ht(t[o],e,n,i));return r}function Pi(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let o=e.parent;const s=e.proxy,a=n;for(;o;){const f=o.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](t,s,a)===!1)return}o=o.parent}const l=e.appContext.config.errorHandler;if(l){Te(l,null,10,[t,s,a]);return}}Wl(t,n,r,i)}function Wl(t,e,n,i=!0){console.error(t)}let Fn=!1,br=!1;const St=[];let ne=0;const on=[];let fe=null,Fe=0;const zs=Promise.resolve();let Kr=null;function Oi(t){const e=Kr||zs;return t?e.then(this?t.bind(this):t):e}function Ul(t){let e=ne+1,n=St.length;for(;e<n;){const i=e+n>>>1,r=St[i],o=jn(r);o<t||o===t&&r.pre?e=i+1:n=i}return e}function Gr(t){(!St.length||!St.includes(t,Fn&&t.allowRecurse?ne+1:ne))&&(t.id==null?St.push(t):St.splice(Ul(t.id),0,t),Ls())}function Ls(){!Fn&&!br&&(br=!0,Kr=zs.then(Hs))}function Yl(t){const e=St.indexOf(t);e>ne&&St.splice(e,1)}function Xl(t){A(t)?on.push(...t):(!fe||!fe.includes(t,t.allowRecurse?Fe+1:Fe))&&on.push(t),Ls()}function Eo(t,e=Fn?ne+1:0){for(;e<St.length;e++){const n=St[e];n&&n.pre&&(St.splice(e,1),e--,n())}}function Bs(t){if(on.length){const e=[...new Set(on)];if(on.length=0,fe){fe.push(...e);return}for(fe=e,fe.sort((n,i)=>jn(n)-jn(i)),Fe=0;Fe<fe.length;Fe++)fe[Fe]();fe=null,Fe=0}}const jn=t=>t.id==null?1/0:t.id,Vl=(t,e)=>{const n=jn(t)-jn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Hs(t){br=!1,Fn=!0,St.sort(Vl);const e=Vt;try{for(ne=0;ne<St.length;ne++){const n=St[ne];n&&n.active!==!1&&Te(n,null,14)}}finally{ne=0,St.length=0,Bs(),Fn=!1,Kr=null,(St.length||on.length)&&Hs()}}function Kl(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||st;let r=n;const o=e.startsWith("update:"),s=o&&e.slice(7);if(s&&s in i){const c=`${s==="modelValue"?"model":s}Modifiers`,{number:h,trim:g}=i[c]||st;g&&(r=n.map(m=>bt(m)?m.trim():m)),h&&(r=n.map(gi))}let a,l=i[a=Vi(e)]||i[a=Vi(re(e))];!l&&o&&(l=i[a=Vi(gn(e))]),l&&Ht(l,t,6,r);const f=i[a+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ht(f,t,6,r)}}function Ws(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const o=t.emits;let s={},a=!1;if(!B(t)){const l=f=>{const c=Ws(f,e,!0);c&&(a=!0,_t(s,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(rt(t)&&i.set(t,null),null):(A(o)?o.forEach(l=>s[l]=null):_t(s,o),rt(t)&&i.set(t,s),s)}function Fi(t,e){return!t||!Ti(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,gn(e))||Q(t,e))}let Nt=null,Us=null;function _i(t){const e=Nt;return Nt=t,Us=t&&t.type.__scopeId||null,e}function xr(t,e=Nt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Po(-1);const o=_i(e);let s;try{s=t(...r)}finally{_i(o),i._d&&Po(1)}return s};return i._n=!0,i._c=!0,i._d=!0,i}function Ki(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:o,propsOptions:[s],slots:a,attrs:l,emit:f,render:c,renderCache:h,data:g,setupState:m,ctx:w,inheritAttrs:E}=t;let U,W;const M=_i(t);try{if(n.shapeFlag&4){const N=r||i;U=ee(c.call(N,N,h,o,m,g,w)),W=l}else{const N=e;U=ee(N.length>1?N(o,{attrs:l,slots:a,emit:f}):N(o,null)),W=e.props?l:Gl(l)}}catch(N){Dn.length=0,Pi(N,t,1),U=mt(De)}let V=U;if(W&&E!==!1){const N=Object.keys(W),{shapeFlag:Y}=V;N.length&&Y&7&&(s&&N.some(Mr)&&(W=Zl(W,s)),V=Ue(V,W))}return n.dirs&&(V=Ue(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),U=V,_i(M),U}const Gl=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ti(n))&&((e||(e={}))[n]=t[n]);return e},Zl=(t,e)=>{const n={};for(const i in t)(!Mr(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Jl(t,e,n){const{props:i,children:r,component:o}=t,{props:s,children:a,patchFlag:l}=e,f=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?So(i,s,f):!!s;if(l&8){const c=e.dynamicProps;for(let h=0;h<c.length;h++){const g=c[h];if(s[g]!==i[g]&&!Fi(f,g))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===s?!1:i?s?So(i,s,f):!0:!!s;return!1}function So(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(e[o]!==t[o]&&!Fi(n,o))return!0}return!1}function Ql({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const tf=t=>t.__isSuspense;function ef(t,e){e&&e.pendingBranch?A(t)?e.effects.push(...t):e.effects.push(t):Xl(t)}const Jn={};function Cn(t,e,n){return Ys(t,e,n)}function Ys(t,e,{immediate:n,deep:i,flush:r,onTrack:o,onTrigger:s}=st){var a;const l=Es()===((a=$t)==null?void 0:a.scope)?$t:null;let f,c=!1,h=!1;if(ht(t)?(f=()=>t.value,c=mi(t)):Ce(t)?(f=()=>t,i=!0):A(t)?(h=!0,c=t.some(N=>Ce(N)||mi(N)),f=()=>t.map(N=>{if(ht(N))return N.value;if(Ce(N))return ze(N);if(B(N))return Te(N,l,2)})):B(t)?e?f=()=>Te(t,l,2):f=()=>{if(!(l&&l.isUnmounted))return g&&g(),Ht(t,l,3,[m])}:f=Vt,e&&i){const N=f;f=()=>ze(N())}let g,m=N=>{g=M.onStop=()=>{Te(N,l,4)}},w;if(Bn)if(m=Vt,e?n&&Ht(e,l,3,[f(),h?[]:void 0,m]):f(),r==="sync"){const N=ec();w=N.__watcherHandles||(N.__watcherHandles=[])}else return Vt;let E=h?new Array(t.length).fill(Jn):Jn;const U=()=>{if(M.active)if(e){const N=M.run();(i||c||(h?N.some((Y,ct)=>We(Y,E[ct])):We(N,E)))&&(g&&g(),Ht(e,l,3,[N,E===Jn?void 0:h&&E[0]===Jn?[]:E,m]),E=N)}else M.run()};U.allowRecurse=!!e;let W;r==="sync"?W=U:r==="post"?W=()=>Dt(U,l&&l.suspense):(U.pre=!0,l&&(U.id=l.uid),W=()=>Gr(U));const M=new Wr(f,W);e?n?U():E=M.run():r==="post"?Dt(M.run.bind(M),l&&l.suspense):M.run();const V=()=>{M.stop(),l&&l.scope&&zr(l.scope.effects,M)};return w&&w.push(V),V}function nf(t,e,n){const i=this.proxy,r=bt(t)?t.includes(".")?Xs(i,t):()=>i[t]:t.bind(i,i);let o;B(e)?o=e:(o=e.handler,n=e);const s=$t;un(this);const a=Ys(r,o.bind(i),n);return s?un(s):He(),a}function Xs(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function ze(t,e){if(!rt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ht(t))ze(t.value,e);else if(A(t))for(let n=0;n<t.length;n++)ze(t[n],e);else if(Ri(t)||rn(t))t.forEach(n=>{ze(n,e)});else if(xs(t))for(const n in t)ze(t[n],e);return t}function ce(t,e){const n=Nt;if(n===null)return t;const i=Li(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[s,a,l,f=st]=e[o];s&&(B(s)&&(s={mounted:s,updated:s}),s.deep&&ze(a),r.push({dir:s,instance:i,value:a,oldValue:void 0,arg:l,modifiers:f}))}return t}function ke(t,e,n,i){const r=t.dirs,o=e&&e.dirs;for(let s=0;s<r.length;s++){const a=r[s];o&&(a.oldValue=o[s].value);let l=a.dir[i];l&&(pn(),Ht(l,n,8,[t.el,a,t,e]),mn())}}const Ve=Symbol("_leaveCb"),Qn=Symbol("_enterCb");function rf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Zr(()=>{t.isMounted=!0}),Js(()=>{t.isUnmounting=!0}),t}const Lt=[Function,Array],of={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Lt,onEnter:Lt,onAfterEnter:Lt,onEnterCancelled:Lt,onBeforeLeave:Lt,onLeave:Lt,onAfterLeave:Lt,onLeaveCancelled:Lt,onBeforeAppear:Lt,onAppear:Lt,onAfterAppear:Lt,onAppearCancelled:Lt};function sf(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function $r(t,e,n,i){const{appear:r,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:f,onEnterCancelled:c,onBeforeLeave:h,onLeave:g,onAfterLeave:m,onLeaveCancelled:w,onBeforeAppear:E,onAppear:U,onAfterAppear:W,onAppearCancelled:M}=e,V=String(t.key),N=sf(n,t),Y=(T,D)=>{T&&Ht(T,i,9,D)},ct=(T,D)=>{const z=D[1];Y(T,D),A(T)?T.every(Z=>Z.length<=1)&&z():T.length<=1&&z()},at={mode:o,persisted:s,beforeEnter(T){let D=a;if(!n.isMounted)if(r)D=E||a;else return;T[Ve]&&T[Ve](!0);const z=N[V];z&&Qe(t,z)&&z.el[Ve]&&z.el[Ve](),Y(D,[T])},enter(T){let D=l,z=f,Z=c;if(!n.isMounted)if(r)D=U||l,z=W||f,Z=M||c;else return;let R=!1;const K=T[Qn]=ft=>{R||(R=!0,ft?Y(Z,[T]):Y(z,[T]),at.delayedLeave&&at.delayedLeave(),T[Qn]=void 0)};D?ct(D,[T,K]):K()},leave(T,D){const z=String(t.key);if(T[Qn]&&T[Qn](!0),n.isUnmounting)return D();Y(h,[T]);let Z=!1;const R=T[Ve]=K=>{Z||(Z=!0,D(),K?Y(w,[T]):Y(m,[T]),T[Ve]=void 0,N[z]===t&&delete N[z])};N[z]=t,g?ct(g,[T,R]):R()},clone(T){return $r(T,e,n,i)}};return at}function vr(t,e){t.shapeFlag&6&&t.component?vr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Vs(t,e=!1,n){let i=[],r=0;for(let o=0;o<t.length;o++){let s=t[o];const a=n==null?s.key:String(n)+String(s.key!=null?s.key:o);s.type===qt?(s.patchFlag&128&&r++,i=i.concat(Vs(s.children,e,a))):(e||s.type!==De)&&i.push(a!=null?Ue(s,{key:a}):s)}if(r>1)for(let o=0;o<i.length;o++)i[o].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function af(t,e){return B(t)?(()=>_t({name:t.name},e,{setup:t}))():t}const si=t=>!!t.type.__asyncLoader,Ks=t=>t.type.__isKeepAlive;function lf(t,e){Gs(t,"a",e)}function ff(t,e){Gs(t,"da",e)}function Gs(t,e,n=$t){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ji(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Ks(r.parent.vnode)&&cf(i,e,n,r),r=r.parent}}function cf(t,e,n,i){const r=ji(e,t,i,!0);Qs(()=>{zr(i[e],r)},n)}function ji(t,e,n=$t,i=!1){if(n){const r=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...s)=>{if(n.isUnmounted)return;pn(),un(n);const a=Ht(e,n,t,s);return He(),mn(),a});return i?r.unshift(o):r.push(o),o}}const ge=t=>(e,n=$t)=>(!Bn||t==="sp")&&ji(t,(...i)=>e(...i),n),uf=ge("bm"),Zr=ge("m"),df=ge("bu"),Zs=ge("u"),Js=ge("bum"),Qs=ge("um"),hf=ge("sp"),gf=ge("rtg"),pf=ge("rtc");function mf(t,e=$t){ji("ec",t,e)}const ta="components";function Mn(t,e){return bf(ta,t,!0,e)||t}const _f=Symbol.for("v-ndc");function bf(t,e,n=!0,i=!1){const r=Nt||$t;if(r){const o=r.type;if(t===ta){const a=Jf(o,!1);if(a&&(a===e||a===re(e)||a===ki(re(e))))return o}const s=Co(r[t]||o[t],e)||Co(r.appContext[t],e);return!s&&i?o:s}}function Co(t,e){return t&&(t[e]||t[re(e)]||t[ki(re(e))])}function yr(t,e,n,i){let r;const o=n&&n[i];if(A(t)||bt(t)){r=new Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=e(t[s],s,void 0,o&&o[s])}else if(typeof t=="number"){r=new Array(t);for(let s=0;s<t;s++)r[s]=e(s+1,s,void 0,o&&o[s])}else if(rt(t))if(t[Symbol.iterator])r=Array.from(t,(s,a)=>e(s,a,void 0,o&&o[a]));else{const s=Object.keys(t);r=new Array(s.length);for(let a=0,l=s.length;a<l;a++){const f=s[a];r[a]=e(t[f],f,a,o&&o[a])}}else r=[];return n&&(n[i]=r),r}const wr=t=>t?ua(t)?Li(t)||t.proxy:wr(t.parent):null,Tn=_t(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wr(t.parent),$root:t=>wr(t.root),$emit:t=>t.emit,$options:t=>Jr(t),$forceUpdate:t=>t.f||(t.f=()=>Gr(t.update)),$nextTick:t=>t.n||(t.n=Oi.bind(t.proxy)),$watch:t=>nf.bind(t)}),Gi=(t,e)=>t!==st&&!t.__isScriptSetup&&Q(t,e),xf={get({_:t},e){const{ctx:n,setupState:i,data:r,props:o,accessCache:s,type:a,appContext:l}=t;let f;if(e[0]!=="$"){const m=s[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(Gi(i,e))return s[e]=1,i[e];if(r!==st&&Q(r,e))return s[e]=2,r[e];if((f=t.propsOptions[0])&&Q(f,e))return s[e]=3,o[e];if(n!==st&&Q(n,e))return s[e]=4,n[e];Er&&(s[e]=0)}}const c=Tn[e];let h,g;if(c)return e==="$attrs"&&At(t,"get",e),c(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==st&&Q(n,e))return s[e]=4,n[e];if(g=l.config.globalProperties,Q(g,e))return g[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:o}=t;return Gi(r,e)?(r[e]=n,!0):i!==st&&Q(i,e)?(i[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:o}},s){let a;return!!n[s]||t!==st&&Q(t,s)||Gi(e,s)||(a=o[0])&&Q(a,s)||Q(i,s)||Q(Tn,s)||Q(r.config.globalProperties,s)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function To(t){return A(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Er=!0;function $f(t){const e=Jr(t),n=t.proxy,i=t.ctx;Er=!1,e.beforeCreate&&Ro(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:s,watch:a,provide:l,inject:f,created:c,beforeMount:h,mounted:g,beforeUpdate:m,updated:w,activated:E,deactivated:U,beforeDestroy:W,beforeUnmount:M,destroyed:V,unmounted:N,render:Y,renderTracked:ct,renderTriggered:at,errorCaptured:T,serverPrefetch:D,expose:z,inheritAttrs:Z,components:R,directives:K,filters:ft}=e;if(f&&vf(f,i,null),s)for(const it in s){const tt=s[it];B(tt)&&(i[it]=tt.bind(n))}if(r){const it=r.call(n,n);rt(it)&&(t.data=Ai(it))}if(Er=!0,o)for(const it in o){const tt=o[it],se=B(tt)?tt.bind(n,n):B(tt.get)?tt.get.bind(n,n):Vt,_n=!B(tt)&&B(tt.set)?tt.set.bind(n):Vt,Gt=no({get:se,set:_n});Object.defineProperty(i,it,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:zt=>Gt.value=zt})}if(a)for(const it in a)ea(a[it],i,n,it);if(l){const it=B(l)?l.call(n):l;Reflect.ownKeys(it).forEach(tt=>{Tf(tt,it[tt])})}c&&Ro(c,t,"c");function H(it,tt){A(tt)?tt.forEach(se=>it(se.bind(n))):tt&&it(tt.bind(n))}if(H(uf,h),H(Zr,g),H(df,m),H(Zs,w),H(lf,E),H(ff,U),H(mf,T),H(pf,ct),H(gf,at),H(Js,M),H(Qs,N),H(hf,D),A(z))if(z.length){const it=t.exposed||(t.exposed={});z.forEach(tt=>{Object.defineProperty(it,tt,{get:()=>n[tt],set:se=>n[tt]=se})})}else t.exposed||(t.exposed={});Y&&t.render===Vt&&(t.render=Y),Z!=null&&(t.inheritAttrs=Z),R&&(t.components=R),K&&(t.directives=K)}function vf(t,e,n=Vt){A(t)&&(t=Sr(t));for(const i in t){const r=t[i];let o;rt(r)?"default"in r?o=Rn(r.from||i,r.default,!0):o=Rn(r.from||i):o=Rn(r),ht(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):e[i]=o}}function Ro(t,e,n){Ht(A(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function ea(t,e,n,i){const r=i.includes(".")?Xs(n,i):()=>n[i];if(bt(t)){const o=e[t];B(o)&&Cn(r,o)}else if(B(t))Cn(r,t.bind(n));else if(rt(t))if(A(t))t.forEach(o=>ea(o,e,n,i));else{const o=B(t.handler)?t.handler.bind(n):e[t.handler];B(o)&&Cn(r,o,t)}}function Jr(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,a=o.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(f=>bi(l,f,s,!0)),bi(l,e,s)),rt(e)&&o.set(e,l),l}function bi(t,e,n,i=!1){const{mixins:r,extends:o}=e;o&&bi(t,o,n,!0),r&&r.forEach(s=>bi(t,s,n,!0));for(const s in e)if(!(i&&s==="expose")){const a=yf[s]||n&&n[s];t[s]=a?a(t[s],e[s]):e[s]}return t}const yf={data:Do,props:ko,emits:ko,methods:yn,computed:yn,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:yn,directives:yn,watch:Ef,provide:Do,inject:wf};function Do(t,e){return e?t?function(){return _t(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function wf(t,e){return yn(Sr(t),Sr(e))}function Sr(t){if(A(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ct(t,e){return t?[...new Set([].concat(t,e))]:e}function yn(t,e){return t?_t(Object.create(null),t,e):e}function ko(t,e){return t?A(t)&&A(e)?[...new Set([...t,...e])]:_t(Object.create(null),To(t),To(e??{})):e}function Ef(t,e){if(!t)return e;if(!e)return t;const n=_t(Object.create(null),t);for(const i in e)n[i]=Ct(t[i],e[i]);return n}function na(){return{app:null,config:{isNativeTag:Ga,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sf=0;function Cf(t,e){return function(i,r=null){B(i)||(i=_t({},i)),r!=null&&!rt(r)&&(r=null);const o=na(),s=new WeakSet;let a=!1;const l=o.app={_uid:Sf++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:nc,get config(){return o.config},set config(f){},use(f,...c){return s.has(f)||(f&&B(f.install)?(s.add(f),f.install(l,...c)):B(f)&&(s.add(f),f(l,...c))),l},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),l},component(f,c){return c?(o.components[f]=c,l):o.components[f]},directive(f,c){return c?(o.directives[f]=c,l):o.directives[f]},mount(f,c,h){if(!a){const g=mt(i,r);return g.appContext=o,c&&e?e(g,f):t(g,f,h),a=!0,l._container=f,f.__vue_app__=l,Li(g.component)||g.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(f,c){return o.provides[f]=c,l},runWithContext(f){zn=l;try{return f()}finally{zn=null}}};return l}}let zn=null;function Tf(t,e){if($t){let n=$t.provides;const i=$t.parent&&$t.parent.provides;i===n&&(n=$t.provides=Object.create(i)),n[t]=e}}function Rn(t,e,n=!1){const i=$t||Nt;if(i||zn){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:zn._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&B(e)?e.call(i&&i.proxy):e}}function Rf(){return!!($t||Nt||zn)}function Df(t,e,n,i=!1){const r={},o={};hi(o,zi,1),t.propsDefaults=Object.create(null),ia(t,e,r,o);for(const s in t.propsOptions[0])s in r||(r[s]=void 0);n?t.props=i?r:Il(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function kf(t,e,n,i){const{props:r,attrs:o,vnode:{patchFlag:s}}=t,a=G(r),[l]=t.propsOptions;let f=!1;if((i||s>0)&&!(s&16)){if(s&8){const c=t.vnode.dynamicProps;for(let h=0;h<c.length;h++){let g=c[h];if(Fi(t.emitsOptions,g))continue;const m=e[g];if(l)if(Q(o,g))m!==o[g]&&(o[g]=m,f=!0);else{const w=re(g);r[w]=Cr(l,a,w,m,t,!1)}else m!==o[g]&&(o[g]=m,f=!0)}}}else{ia(t,e,r,o)&&(f=!0);let c;for(const h in a)(!e||!Q(e,h)&&((c=gn(h))===h||!Q(e,c)))&&(l?n&&(n[h]!==void 0||n[c]!==void 0)&&(r[h]=Cr(l,a,h,void 0,t,!0)):delete r[h]);if(o!==a)for(const h in o)(!e||!Q(e,h))&&(delete o[h],f=!0)}f&&ue(t,"set","$attrs")}function ia(t,e,n,i){const[r,o]=t.propsOptions;let s=!1,a;if(e)for(let l in e){if(ri(l))continue;const f=e[l];let c;r&&Q(r,c=re(l))?!o||!o.includes(c)?n[c]=f:(a||(a={}))[c]=f:Fi(t.emitsOptions,l)||(!(l in i)||f!==i[l])&&(i[l]=f,s=!0)}if(o){const l=G(n),f=a||st;for(let c=0;c<o.length;c++){const h=o[c];n[h]=Cr(r,l,h,f[h],t,!Q(f,h))}}return s}function Cr(t,e,n,i,r,o){const s=t[n];if(s!=null){const a=Q(s,"default");if(a&&i===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&B(l)){const{propsDefaults:f}=r;n in f?i=f[n]:(un(r),i=f[n]=l.call(null,e),He())}else i=l}s[0]&&(o&&!a?i=!1:s[1]&&(i===""||i===gn(n))&&(i=!0))}return i}function ra(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const o=t.props,s={},a=[];let l=!1;if(!B(t)){const c=h=>{l=!0;const[g,m]=ra(h,e,!0);_t(s,g),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!o&&!l)return rt(t)&&i.set(t,nn),nn;if(A(o))for(let c=0;c<o.length;c++){const h=re(o[c]);qo(h)&&(s[h]=st)}else if(o)for(const c in o){const h=re(c);if(qo(h)){const g=o[c],m=s[h]=A(g)||B(g)?{type:g}:_t({},g);if(m){const w=Io(Boolean,m.type),E=Io(String,m.type);m[0]=w>-1,m[1]=E<0||w<E,(w>-1||Q(m,"default"))&&a.push(h)}}}const f=[s,a];return rt(t)&&i.set(t,f),f}function qo(t){return t[0]!=="$"}function No(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ao(t,e){return No(t)===No(e)}function Io(t,e){return A(e)?e.findIndex(n=>Ao(n,t)):B(e)&&Ao(e,t)?0:-1}const oa=t=>t[0]==="_"||t==="$stable",Qr=t=>A(t)?t.map(ee):[ee(t)],qf=(t,e,n)=>{if(e._n)return e;const i=xr((...r)=>Qr(e(...r)),n);return i._c=!1,i},sa=(t,e,n)=>{const i=t._ctx;for(const r in t){if(oa(r))continue;const o=t[r];if(B(o))e[r]=qf(r,o,i);else if(o!=null){const s=Qr(o);e[r]=()=>s}}},aa=(t,e)=>{const n=Qr(e);t.slots.default=()=>n},Nf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),hi(e,"_",n)):sa(e,t.slots={})}else t.slots={},e&&aa(t,e);hi(t.slots,zi,1)},Af=(t,e,n)=>{const{vnode:i,slots:r}=t;let o=!0,s=st;if(i.shapeFlag&32){const a=e._;a?n&&a===1?o=!1:(_t(r,e),!n&&a===1&&delete r._):(o=!e.$stable,sa(e,r)),s=e}else e&&(aa(t,e),s={default:1});if(o)for(const a in r)!oa(a)&&s[a]==null&&delete r[a]};function Tr(t,e,n,i,r=!1){if(A(t)){t.forEach((g,m)=>Tr(g,e&&(A(e)?e[m]:e),n,i,r));return}if(si(i)&&!r)return;const o=i.shapeFlag&4?Li(i.component)||i.component.proxy:i.el,s=r?null:o,{i:a,r:l}=t,f=e&&e.r,c=a.refs===st?a.refs={}:a.refs,h=a.setupState;if(f!=null&&f!==l&&(bt(f)?(c[f]=null,Q(h,f)&&(h[f]=null)):ht(f)&&(f.value=null)),B(l))Te(l,a,12,[s,c]);else{const g=bt(l),m=ht(l);if(g||m){const w=()=>{if(t.f){const E=g?Q(h,l)?h[l]:c[l]:l.value;r?A(E)&&zr(E,o):A(E)?E.includes(o)||E.push(o):g?(c[l]=[o],Q(h,l)&&(h[l]=c[l])):(l.value=[o],t.k&&(c[t.k]=l.value))}else g?(c[l]=s,Q(h,l)&&(h[l]=s)):m&&(l.value=s,t.k&&(c[t.k]=s))};s?(w.id=-1,Dt(w,n)):w()}}}const Dt=ef;function If(t){return Pf(t)}function Pf(t,e){const n=gr();n.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:s,createText:a,createComment:l,setText:f,setElementText:c,parentNode:h,nextSibling:g,setScopeId:m=Vt,insertStaticContent:w}=t,E=(u,d,p,_=null,b=null,v=null,C=!1,$=null,S=!!d.dynamicChildren)=>{if(u===d)return;u&&!Qe(u,d)&&(_=Yn(u),zt(u,b,v,!0),u=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:x,ref:I,shapeFlag:k}=d;switch(x){case Mi:U(u,d,p,_);break;case De:W(u,d,p,_);break;case Zi:u==null&&M(d,p,_,C);break;case qt:R(u,d,p,_,b,v,C,$,S);break;default:k&1?Y(u,d,p,_,b,v,C,$,S):k&6?K(u,d,p,_,b,v,C,$,S):(k&64||k&128)&&x.process(u,d,p,_,b,v,C,$,S,Ye)}I!=null&&b&&Tr(I,u&&u.ref,v,d||u,!d)},U=(u,d,p,_)=>{if(u==null)i(d.el=a(d.children),p,_);else{const b=d.el=u.el;d.children!==u.children&&f(b,d.children)}},W=(u,d,p,_)=>{u==null?i(d.el=l(d.children||""),p,_):d.el=u.el},M=(u,d,p,_)=>{[u.el,u.anchor]=w(u.children,d,p,_,u.el,u.anchor)},V=({el:u,anchor:d},p,_)=>{let b;for(;u&&u!==d;)b=g(u),i(u,p,_),u=b;i(d,p,_)},N=({el:u,anchor:d})=>{let p;for(;u&&u!==d;)p=g(u),r(u),u=p;r(d)},Y=(u,d,p,_,b,v,C,$,S)=>{C=C||d.type==="svg",u==null?ct(d,p,_,b,v,C,$,S):D(u,d,b,v,C,$,S)},ct=(u,d,p,_,b,v,C,$)=>{let S,x;const{type:I,props:k,shapeFlag:P,transition:j,dirs:X}=u;if(S=u.el=s(u.type,v,k&&k.is,k),P&8?c(S,u.children):P&16&&T(u.children,S,null,_,b,v&&I!=="foreignObject",C,$),X&&ke(u,null,_,"created"),at(S,u,u.scopeId,C,_),k){for(const nt in k)nt!=="value"&&!ri(nt)&&o(S,nt,null,k[nt],v,u.children,_,b,ae);"value"in k&&o(S,"value",null,k.value),(x=k.onVnodeBeforeMount)&&Jt(x,_,u)}X&&ke(u,null,_,"beforeMount");const ot=Of(b,j);ot&&j.beforeEnter(S),i(S,d,p),((x=k&&k.onVnodeMounted)||ot||X)&&Dt(()=>{x&&Jt(x,_,u),ot&&j.enter(S),X&&ke(u,null,_,"mounted")},b)},at=(u,d,p,_,b)=>{if(p&&m(u,p),_)for(let v=0;v<_.length;v++)m(u,_[v]);if(b){let v=b.subTree;if(d===v){const C=b.vnode;at(u,C,C.scopeId,C.slotScopeIds,b.parent)}}},T=(u,d,p,_,b,v,C,$,S=0)=>{for(let x=S;x<u.length;x++){const I=u[x]=$?ve(u[x]):ee(u[x]);E(null,I,d,p,_,b,v,C,$)}},D=(u,d,p,_,b,v,C)=>{const $=d.el=u.el;let{patchFlag:S,dynamicChildren:x,dirs:I}=d;S|=u.patchFlag&16;const k=u.props||st,P=d.props||st;let j;p&&qe(p,!1),(j=P.onVnodeBeforeUpdate)&&Jt(j,p,d,u),I&&ke(d,u,p,"beforeUpdate"),p&&qe(p,!0);const X=b&&d.type!=="foreignObject";if(x?z(u.dynamicChildren,x,$,p,_,X,v):C||tt(u,d,$,null,p,_,X,v,!1),S>0){if(S&16)Z($,d,k,P,p,_,b);else if(S&2&&k.class!==P.class&&o($,"class",null,P.class,b),S&4&&o($,"style",k.style,P.style,b),S&8){const ot=d.dynamicProps;for(let nt=0;nt<ot.length;nt++){const gt=ot[nt],Wt=k[gt],Xe=P[gt];(Xe!==Wt||gt==="value")&&o($,gt,Wt,Xe,b,u.children,p,_,ae)}}S&1&&u.children!==d.children&&c($,d.children)}else!C&&x==null&&Z($,d,k,P,p,_,b);((j=P.onVnodeUpdated)||I)&&Dt(()=>{j&&Jt(j,p,d,u),I&&ke(d,u,p,"updated")},_)},z=(u,d,p,_,b,v,C)=>{for(let $=0;$<d.length;$++){const S=u[$],x=d[$],I=S.el&&(S.type===qt||!Qe(S,x)||S.shapeFlag&70)?h(S.el):p;E(S,x,I,null,_,b,v,C,!0)}},Z=(u,d,p,_,b,v,C)=>{if(p!==_){if(p!==st)for(const $ in p)!ri($)&&!($ in _)&&o(u,$,p[$],null,C,d.children,b,v,ae);for(const $ in _){if(ri($))continue;const S=_[$],x=p[$];S!==x&&$!=="value"&&o(u,$,x,S,C,d.children,b,v,ae)}"value"in _&&o(u,"value",p.value,_.value)}},R=(u,d,p,_,b,v,C,$,S)=>{const x=d.el=u?u.el:a(""),I=d.anchor=u?u.anchor:a("");let{patchFlag:k,dynamicChildren:P,slotScopeIds:j}=d;j&&($=$?$.concat(j):j),u==null?(i(x,p,_),i(I,p,_),T(d.children,p,I,b,v,C,$,S)):k>0&&k&64&&P&&u.dynamicChildren?(z(u.dynamicChildren,P,p,b,v,C,$),(d.key!=null||b&&d===b.subTree)&&la(u,d,!0)):tt(u,d,p,I,b,v,C,$,S)},K=(u,d,p,_,b,v,C,$,S)=>{d.slotScopeIds=$,u==null?d.shapeFlag&512?b.ctx.activate(d,p,_,C,S):ft(d,p,_,b,v,C,S):yt(u,d,S)},ft=(u,d,p,_,b,v,C)=>{const $=u.component=Yf(u,_,b);if(Ks(u)&&($.ctx.renderer=Ye),Vf($),$.asyncDep){if(b&&b.registerDep($,H),!u.el){const S=$.subTree=mt(De);W(null,S,d,p)}return}H($,u,d,p,b,v,C)},yt=(u,d,p)=>{const _=d.component=u.component;if(Jl(u,d,p))if(_.asyncDep&&!_.asyncResolved){it(_,d,p);return}else _.next=d,Yl(_.update),_.update();else d.el=u.el,_.vnode=d},H=(u,d,p,_,b,v,C)=>{const $=()=>{if(u.isMounted){let{next:I,bu:k,u:P,parent:j,vnode:X}=u,ot=I,nt;qe(u,!1),I?(I.el=X.el,it(u,I,C)):I=X,k&&oi(k),(nt=I.props&&I.props.onVnodeBeforeUpdate)&&Jt(nt,j,I,X),qe(u,!0);const gt=Ki(u),Wt=u.subTree;u.subTree=gt,E(Wt,gt,h(Wt.el),Yn(Wt),u,b,v),I.el=gt.el,ot===null&&Ql(u,gt.el),P&&Dt(P,b),(nt=I.props&&I.props.onVnodeUpdated)&&Dt(()=>Jt(nt,j,I,X),b)}else{let I;const{el:k,props:P}=d,{bm:j,m:X,parent:ot}=u,nt=si(d);if(qe(u,!1),j&&oi(j),!nt&&(I=P&&P.onVnodeBeforeMount)&&Jt(I,ot,d),qe(u,!0),k&&Xi){const gt=()=>{u.subTree=Ki(u),Xi(k,u.subTree,u,b,null)};nt?d.type.__asyncLoader().then(()=>!u.isUnmounted&&gt()):gt()}else{const gt=u.subTree=Ki(u);E(null,gt,p,_,u,b,v),d.el=gt.el}if(X&&Dt(X,b),!nt&&(I=P&&P.onVnodeMounted)){const gt=d;Dt(()=>Jt(I,ot,gt),b)}(d.shapeFlag&256||ot&&si(ot.vnode)&&ot.vnode.shapeFlag&256)&&u.a&&Dt(u.a,b),u.isMounted=!0,d=p=_=null}},S=u.effect=new Wr($,()=>Gr(x),u.scope),x=u.update=()=>S.run();x.id=u.uid,qe(u,!0),x()},it=(u,d,p)=>{d.component=u;const _=u.vnode.props;u.vnode=d,u.next=null,kf(u,d.props,_,p),Af(u,d.children,p),pn(),Eo(),mn()},tt=(u,d,p,_,b,v,C,$,S=!1)=>{const x=u&&u.children,I=u?u.shapeFlag:0,k=d.children,{patchFlag:P,shapeFlag:j}=d;if(P>0){if(P&128){_n(x,k,p,_,b,v,C,$,S);return}else if(P&256){se(x,k,p,_,b,v,C,$,S);return}}j&8?(I&16&&ae(x,b,v),k!==x&&c(p,k)):I&16?j&16?_n(x,k,p,_,b,v,C,$,S):ae(x,b,v,!0):(I&8&&c(p,""),j&16&&T(k,p,_,b,v,C,$,S))},se=(u,d,p,_,b,v,C,$,S)=>{u=u||nn,d=d||nn;const x=u.length,I=d.length,k=Math.min(x,I);let P;for(P=0;P<k;P++){const j=d[P]=S?ve(d[P]):ee(d[P]);E(u[P],j,p,null,b,v,C,$,S)}x>I?ae(u,b,v,!0,!1,k):T(d,p,_,b,v,C,$,S,k)},_n=(u,d,p,_,b,v,C,$,S)=>{let x=0;const I=d.length;let k=u.length-1,P=I-1;for(;x<=k&&x<=P;){const j=u[x],X=d[x]=S?ve(d[x]):ee(d[x]);if(Qe(j,X))E(j,X,p,null,b,v,C,$,S);else break;x++}for(;x<=k&&x<=P;){const j=u[k],X=d[P]=S?ve(d[P]):ee(d[P]);if(Qe(j,X))E(j,X,p,null,b,v,C,$,S);else break;k--,P--}if(x>k){if(x<=P){const j=P+1,X=j<I?d[j].el:_;for(;x<=P;)E(null,d[x]=S?ve(d[x]):ee(d[x]),p,X,b,v,C,$,S),x++}}else if(x>P)for(;x<=k;)zt(u[x],b,v,!0),x++;else{const j=x,X=x,ot=new Map;for(x=X;x<=P;x++){const It=d[x]=S?ve(d[x]):ee(d[x]);It.key!=null&&ot.set(It.key,x)}let nt,gt=0;const Wt=P-X+1;let Xe=!1,uo=0;const bn=new Array(Wt);for(x=0;x<Wt;x++)bn[x]=0;for(x=j;x<=k;x++){const It=u[x];if(gt>=Wt){zt(It,b,v,!0);continue}let Zt;if(It.key!=null)Zt=ot.get(It.key);else for(nt=X;nt<=P;nt++)if(bn[nt-X]===0&&Qe(It,d[nt])){Zt=nt;break}Zt===void 0?zt(It,b,v,!0):(bn[Zt-X]=x+1,Zt>=uo?uo=Zt:Xe=!0,E(It,d[Zt],p,null,b,v,C,$,S),gt++)}const ho=Xe?Ff(bn):nn;for(nt=ho.length-1,x=Wt-1;x>=0;x--){const It=X+x,Zt=d[It],go=It+1<I?d[It+1].el:_;bn[x]===0?E(null,Zt,p,go,b,v,C,$,S):Xe&&(nt<0||x!==ho[nt]?Gt(Zt,p,go,2):nt--)}}},Gt=(u,d,p,_,b=null)=>{const{el:v,type:C,transition:$,children:S,shapeFlag:x}=u;if(x&6){Gt(u.component.subTree,d,p,_);return}if(x&128){u.suspense.move(d,p,_);return}if(x&64){C.move(u,d,p,Ye);return}if(C===qt){i(v,d,p);for(let k=0;k<S.length;k++)Gt(S[k],d,p,_);i(u.anchor,d,p);return}if(C===Zi){V(u,d,p);return}if(_!==2&&x&1&&$)if(_===0)$.beforeEnter(v),i(v,d,p),Dt(()=>$.enter(v),b);else{const{leave:k,delayLeave:P,afterLeave:j}=$,X=()=>i(v,d,p),ot=()=>{k(v,()=>{X(),j&&j()})};P?P(v,X,ot):ot()}else i(v,d,p)},zt=(u,d,p,_=!1,b=!1)=>{const{type:v,props:C,ref:$,children:S,dynamicChildren:x,shapeFlag:I,patchFlag:k,dirs:P}=u;if($!=null&&Tr($,null,p,u,!0),I&256){d.ctx.deactivate(u);return}const j=I&1&&P,X=!si(u);let ot;if(X&&(ot=C&&C.onVnodeBeforeUnmount)&&Jt(ot,d,u),I&6)Va(u.component,p,_);else{if(I&128){u.suspense.unmount(p,_);return}j&&ke(u,null,d,"beforeUnmount"),I&64?u.type.remove(u,d,p,b,Ye,_):x&&(v!==qt||k>0&&k&64)?ae(x,d,p,!1,!0):(v===qt&&k&384||!b&&I&16)&&ae(S,d,p),_&&fo(u)}(X&&(ot=C&&C.onVnodeUnmounted)||j)&&Dt(()=>{ot&&Jt(ot,d,u),j&&ke(u,null,d,"unmounted")},p)},fo=u=>{const{type:d,el:p,anchor:_,transition:b}=u;if(d===qt){Xa(p,_);return}if(d===Zi){N(u);return}const v=()=>{r(p),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(u.shapeFlag&1&&b&&!b.persisted){const{leave:C,delayLeave:$}=b,S=()=>C(p,v);$?$(u.el,v,S):S()}else v()},Xa=(u,d)=>{let p;for(;u!==d;)p=g(u),r(u),u=p;r(d)},Va=(u,d,p)=>{const{bum:_,scope:b,update:v,subTree:C,um:$}=u;_&&oi(_),b.stop(),v&&(v.active=!1,zt(C,u,d,p)),$&&Dt($,d),Dt(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ae=(u,d,p,_=!1,b=!1,v=0)=>{for(let C=v;C<u.length;C++)zt(u[C],d,p,_,b)},Yn=u=>u.shapeFlag&6?Yn(u.component.subTree):u.shapeFlag&128?u.suspense.next():g(u.anchor||u.el),co=(u,d,p)=>{u==null?d._vnode&&zt(d._vnode,null,null,!0):E(d._vnode||null,u,d,null,null,null,p),Eo(),Bs(),d._vnode=u},Ye={p:E,um:zt,m:Gt,r:fo,mt:ft,mc:T,pc:tt,pbc:z,n:Yn,o:t};let Yi,Xi;return e&&([Yi,Xi]=e(Ye)),{render:co,hydrate:Yi,createApp:Cf(co,Yi)}}function qe({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Of(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function la(t,e,n=!1){const i=t.children,r=e.children;if(A(i)&&A(r))for(let o=0;o<i.length;o++){const s=i[o];let a=r[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[o]=ve(r[o]),a.el=s.el),n||la(s,a)),a.type===Mi&&(a.el=s.el)}}function Ff(t){const e=t.slice(),n=[0];let i,r,o,s,a;const l=t.length;for(i=0;i<l;i++){const f=t[i];if(f!==0){if(r=n[n.length-1],t[r]<f){e[i]=r,n.push(i);continue}for(o=0,s=n.length-1;o<s;)a=o+s>>1,t[n[a]]<f?o=a+1:s=a;f<t[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,s=n[o-1];o-- >0;)n[o]=s,s=e[s];return n}const jf=t=>t.__isTeleport,qt=Symbol.for("v-fgt"),Mi=Symbol.for("v-txt"),De=Symbol.for("v-cmt"),Zi=Symbol.for("v-stc"),Dn=[];let Xt=null;function kt(t=!1){Dn.push(Xt=t?null:[])}function Mf(){Dn.pop(),Xt=Dn[Dn.length-1]||null}let Ln=1;function Po(t){Ln+=t}function fa(t){return t.dynamicChildren=Ln>0?Xt||nn:null,Mf(),Ln>0&&Xt&&Xt.push(t),t}function jt(t,e,n,i,r,o){return fa(q(t,e,n,i,r,o,!0))}function zf(t,e,n,i,r){return fa(mt(t,e,n,i,r,!0))}function Rr(t){return t?t.__v_isVNode===!0:!1}function Qe(t,e){return t.type===e.type&&t.key===e.key}const zi="__vInternal",ca=({key:t})=>t??null,ai=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?bt(t)||ht(t)||B(t)?{i:Nt,r:t,k:e,f:!!n}:t:null);function q(t,e=null,n=null,i=0,r=null,o=t===qt?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ca(e),ref:e&&ai(e),scopeId:Us,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Nt};return a?(to(l,n),o&128&&t.normalize(l)):n&&(l.shapeFlag|=bt(n)?8:16),Ln>0&&!s&&Xt&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Xt.push(l),l}const mt=Lf;function Lf(t,e=null,n=null,i=0,r=null,o=!1){if((!t||t===_f)&&(t=De),Rr(t)){const a=Ue(t,e,!0);return n&&to(a,n),Ln>0&&!o&&Xt&&(a.shapeFlag&6?Xt[Xt.indexOf(t)]=a:Xt.push(a)),a.patchFlag|=-2,a}if(Qf(t)&&(t=t.__vccOpts),e){e=Bf(e);let{class:a,style:l}=e;a&&!bt(a)&&(e.class=vt(a)),rt(l)&&(Os(l)&&!A(l)&&(l=_t({},l)),e.style=Br(l))}const s=bt(t)?1:tf(t)?128:jf(t)?64:rt(t)?4:B(t)?2:0;return q(t,e,n,i,r,s,o,!0)}function Bf(t){return t?Os(t)||zi in t?_t({},t):t:null}function Ue(t,e,n=!1){const{props:i,ref:r,patchFlag:o,children:s}=t,a=e?Hf(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ca(a),ref:e&&e.ref?n&&r?A(r)?r.concat(ai(e)):[r,ai(e)]:ai(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:s,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ue(t.ssContent),ssFallback:t.ssFallback&&Ue(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Dr(t=" ",e=0){return mt(Mi,null,t,e)}function Oo(t="",e=!1){return e?(kt(),zf(De,null,t)):mt(De,null,t)}function ee(t){return t==null||typeof t=="boolean"?mt(De):A(t)?mt(qt,null,t.slice()):typeof t=="object"?ve(t):mt(Mi,null,String(t))}function ve(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ue(t)}function to(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(A(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),to(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(zi in e)?e._ctx=Nt:r===3&&Nt&&(Nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Nt},n=32):(e=String(e),i&64?(n=16,e=[Dr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Hf(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=vt([e.class,i.class]));else if(r==="style")e.style=Br([e.style,i.style]);else if(Ti(r)){const o=e[r],s=i[r];s&&o!==s&&!(A(o)&&o.includes(s))&&(e[r]=o?[].concat(o,s):s)}else r!==""&&(e[r]=i[r])}return e}function Jt(t,e,n,i=null){Ht(t,e,7,[n,i])}const Wf=na();let Uf=0;function Yf(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Wf,o={uid:Uf++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ys(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ra(i,r),emitsOptions:Ws(i,r),emit:null,emitted:null,propsDefaults:st,inheritAttrs:i.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Kl.bind(null,o),t.ce&&t.ce(o),o}let $t=null;const Xf=()=>$t||Nt;let eo,Ke,Fo="__VUE_INSTANCE_SETTERS__";(Ke=gr()[Fo])||(Ke=gr()[Fo]=[]),Ke.push(t=>$t=t),eo=t=>{Ke.length>1?Ke.forEach(e=>e(t)):Ke[0](t)};const un=t=>{eo(t),t.scope.on()},He=()=>{$t&&$t.scope.off(),eo(null)};function ua(t){return t.vnode.shapeFlag&4}let Bn=!1;function Vf(t,e=!1){Bn=e;const{props:n,children:i}=t.vnode,r=ua(t);Df(t,n,r,e),Nf(t,i);const o=r?Kf(t,e):void 0;return Bn=!1,o}function Kf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ii(new Proxy(t.ctx,xf));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?Zf(t):null;un(t),pn();const o=Te(i,t,0,[t.props,r]);if(mn(),He(),_s(o)){if(o.then(He,He),e)return o.then(s=>{jo(t,s,e)}).catch(s=>{Pi(s,t,0)});t.asyncDep=o}else jo(t,o,e)}else da(t,e)}function jo(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:rt(e)&&(t.setupState=Ms(e)),da(t,n)}let Mo;function da(t,e,n){const i=t.type;if(!t.render){if(!e&&Mo&&!i.render){const r=i.template||Jr(t).template;if(r){const{isCustomElement:o,compilerOptions:s}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,f=_t(_t({isCustomElement:o,delimiters:a},s),l);i.render=Mo(r,f)}}t.render=i.render||Vt}{un(t),pn();try{$f(t)}finally{mn(),He()}}}function Gf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return At(t,"get","$attrs"),e[n]}}))}function Zf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Gf(t)},slots:t.slots,emit:t.emit,expose:e}}function Li(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ms(Ii(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Tn)return Tn[n](t)},has(e,n){return n in e||n in Tn}}))}function Jf(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function Qf(t){return B(t)&&"__vccOpts"in t}const no=(t,e)=>Hl(t,e,Bn);function zo(t,e,n){const i=arguments.length;return i===2?rt(e)&&!A(e)?Rr(e)?mt(t,null,[e]):mt(t,e):mt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Rr(n)&&(n=[n]),mt(t,e,n))}const tc=Symbol.for("v-scx"),ec=()=>Rn(tc),nc="3.3.7",ic="http://www.w3.org/2000/svg",je=typeof document<"u"?document:null,Lo=je&&je.createElement("template"),rc={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?je.createElementNS(ic,t):je.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>je.createTextNode(t),createComment:t=>je.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>je.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,o){const s=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{Lo.innerHTML=i?`<svg>${t}</svg>`:t;const a=Lo.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_e="transition",xn="animation",dn=Symbol("_vtc"),ha={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},oc=_t({},of,ha),Ne=(t,e=[])=>{A(t)?t.forEach(n=>n(...e)):t&&t(...e)},Bo=t=>t?A(t)?t.some(e=>e.length>1):t.length>1:!1;function sc(t){const e={};for(const R in t)R in ha||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:f=s,appearToClass:c=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,w=ac(r),E=w&&w[0],U=w&&w[1],{onBeforeEnter:W,onEnter:M,onEnterCancelled:V,onLeave:N,onLeaveCancelled:Y,onBeforeAppear:ct=W,onAppear:at=M,onAppearCancelled:T=V}=e,D=(R,K,ft)=>{be(R,K?c:a),be(R,K?f:s),ft&&ft()},z=(R,K)=>{R._isLeaving=!1,be(R,h),be(R,m),be(R,g),K&&K()},Z=R=>(K,ft)=>{const yt=R?at:M,H=()=>D(K,R,ft);Ne(yt,[K,H]),Ho(()=>{be(K,R?l:o),le(K,R?c:a),Bo(yt)||Wo(K,i,E,H)})};return _t(e,{onBeforeEnter(R){Ne(W,[R]),le(R,o),le(R,s)},onBeforeAppear(R){Ne(ct,[R]),le(R,l),le(R,f)},onEnter:Z(!1),onAppear:Z(!0),onLeave(R,K){R._isLeaving=!0;const ft=()=>z(R,K);le(R,h),pa(),le(R,g),Ho(()=>{R._isLeaving&&(be(R,h),le(R,m),Bo(N)||Wo(R,i,U,ft))}),Ne(N,[R,ft])},onEnterCancelled(R){D(R,!1),Ne(V,[R])},onAppearCancelled(R){D(R,!0),Ne(T,[R])},onLeaveCancelled(R){z(R),Ne(Y,[R])}})}function ac(t){if(t==null)return null;if(rt(t))return[Ji(t.enter),Ji(t.leave)];{const e=Ji(t);return[e,e]}}function Ji(t){return nl(t)}function le(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[dn]||(t[dn]=new Set)).add(e)}function be(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[dn];n&&(n.delete(e),n.size||(t[dn]=void 0))}function Ho(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let lc=0;function Wo(t,e,n,i){const r=t._endId=++lc,o=()=>{r===t._endId&&i()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:l}=ga(t,e);if(!s)return i();const f=s+"end";let c=0;const h=()=>{t.removeEventListener(f,g),o()},g=m=>{m.target===t&&++c>=l&&h()};setTimeout(()=>{c<l&&h()},a+1),t.addEventListener(f,g)}function ga(t,e){const n=window.getComputedStyle(t),i=w=>(n[w]||"").split(", "),r=i(`${_e}Delay`),o=i(`${_e}Duration`),s=Uo(r,o),a=i(`${xn}Delay`),l=i(`${xn}Duration`),f=Uo(a,l);let c=null,h=0,g=0;e===_e?s>0&&(c=_e,h=s,g=o.length):e===xn?f>0&&(c=xn,h=f,g=l.length):(h=Math.max(s,f),c=h>0?s>f?_e:xn:null,g=c?c===_e?o.length:l.length:0);const m=c===_e&&/\b(transform|all)(,|$)/.test(i(`${_e}Property`).toString());return{type:c,timeout:h,propCount:g,hasTransform:m}}function Uo(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Yo(n)+Yo(t[i])))}function Yo(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function pa(){return document.body.offsetHeight}function fc(t,e,n){const i=t[dn];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const io=Symbol("_vod"),Ae={beforeMount(t,{value:e},{transition:n}){t[io]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):$n(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),$n(t,!0),i.enter(t)):i.leave(t,()=>{$n(t,!1)}):$n(t,e))},beforeUnmount(t,{value:e}){$n(t,e)}};function $n(t,e){t.style.display=e?t[io]:"none"}function cc(t,e,n){const i=t.style,r=bt(n);if(n&&!r){if(e&&!bt(e))for(const o in e)n[o]==null&&kr(i,o,"");for(const o in n)kr(i,o,n[o])}else{const o=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),io in t&&(i.display=o)}}const Xo=/\s*!important$/;function kr(t,e,n){if(A(n))n.forEach(i=>kr(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=uc(t,e);Xo.test(n)?t.setProperty(gn(i),n.replace(Xo,""),"important"):t[i]=n}}const Vo=["Webkit","Moz","ms"],Qi={};function uc(t,e){const n=Qi[e];if(n)return n;let i=re(e);if(i!=="filter"&&i in t)return Qi[e]=i;i=ki(i);for(let r=0;r<Vo.length;r++){const o=Vo[r]+i;if(o in t)return Qi[e]=o}return e}const Ko="http://www.w3.org/1999/xlink";function dc(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ko,e.slice(6,e.length)):t.setAttributeNS(Ko,e,n);else{const o=ll(e);n==null||o&&!$s(n)?t.removeAttribute(e):t.setAttribute(e,o?"":n)}}function hc(t,e,n,i,r,o,s){if(e==="innerHTML"||e==="textContent"){i&&s(i,r,o),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const f=a==="OPTION"?t.getAttribute("value"):t.value,c=n??"";f!==c&&(t.value=c),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const f=typeof t[e];f==="boolean"?n=$s(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Me(t,e,n,i){t.addEventListener(e,n,i)}function gc(t,e,n,i){t.removeEventListener(e,n,i)}const Go=Symbol("_vei");function pc(t,e,n,i,r=null){const o=t[Go]||(t[Go]={}),s=o[e];if(i&&s)s.value=i;else{const[a,l]=mc(e);if(i){const f=o[e]=xc(i,r);Me(t,a,f,l)}else s&&(gc(t,a,s,l),o[e]=void 0)}}const Zo=/(?:Once|Passive|Capture)$/;function mc(t){let e;if(Zo.test(t)){e={};let i;for(;i=t.match(Zo);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):gn(t.slice(2)),e]}let tr=0;const _c=Promise.resolve(),bc=()=>tr||(_c.then(()=>tr=0),tr=Date.now());function xc(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Ht($c(i,n.value),e,5,[i])};return n.value=t,n.attached=bc(),n}function $c(t,e){if(A(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Jo=/^on[a-z]/,vc=(t,e,n,i,r=!1,o,s,a,l)=>{e==="class"?fc(t,i,r):e==="style"?cc(t,n,i):Ti(e)?Mr(e)||pc(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yc(t,e,i,r))?hc(t,e,i,o,s,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),dc(t,e,i,r))};function yc(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Jo.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Jo.test(e)&&bt(n)?!1:e in t}const ma=new WeakMap,_a=new WeakMap,xi=Symbol("_moveCb"),Qo=Symbol("_enterCb"),ba={name:"TransitionGroup",props:_t({},oc,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Xf(),i=rf();let r,o;return Zs(()=>{if(!r.length)return;const s=t.moveClass||`${t.name||"v"}-move`;if(!Rc(r[0].el,n.vnode.el,s))return;r.forEach(Sc),r.forEach(Cc);const a=r.filter(Tc);pa(),a.forEach(l=>{const f=l.el,c=f.style;le(f,s),c.transform=c.webkitTransform=c.transitionDuration="";const h=f[xi]=g=>{g&&g.target!==f||(!g||/transform$/.test(g.propertyName))&&(f.removeEventListener("transitionend",h),f[xi]=null,be(f,s))};f.addEventListener("transitionend",h)})}),()=>{const s=G(t),a=sc(s);let l=s.tag||qt;r=o,o=e.default?Vs(e.default()):[];for(let f=0;f<o.length;f++){const c=o[f];c.key!=null&&vr(c,$r(c,a,i,n))}if(r)for(let f=0;f<r.length;f++){const c=r[f];vr(c,$r(c,a,i,n)),ma.set(c,c.el.getBoundingClientRect())}return mt(l,null,o)}}},wc=t=>delete t.mode;ba.props;const Ec=ba;function Sc(t){const e=t.el;e[xi]&&e[xi](),e[Qo]&&e[Qo]()}function Cc(t){_a.set(t,t.el.getBoundingClientRect())}function Tc(t){const e=ma.get(t),n=_a.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const o=t.el.style;return o.transform=o.webkitTransform=`translate(${i}px,${r}px)`,o.transitionDuration="0s",t}}function Rc(t,e,n){const i=t.cloneNode(),r=t[dn];r&&r.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const o=e.nodeType===1?e:e.parentNode;o.appendChild(i);const{hasTransform:s}=ga(i);return o.removeChild(i),s}const $i=t=>{const e=t.props["onUpdate:modelValue"]||!1;return A(e)?n=>oi(e,n):e};function Dc(t){t.target.composing=!0}function ts(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const sn=Symbol("_assign"),kc={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[sn]=$i(r);const o=i||r.props&&r.props.type==="number";Me(t,e?"change":"input",s=>{if(s.target.composing)return;let a=t.value;n&&(a=a.trim()),o&&(a=gi(a)),t[sn](a)}),n&&Me(t,"change",()=>{t.value=t.value.trim()}),e||(Me(t,"compositionstart",Dc),Me(t,"compositionend",ts),Me(t,"change",ts))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},o){if(t[sn]=$i(o),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&gi(t.value)===e))return;const s=e??"";t.value!==s&&(t.value=s)}},qc={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const r=Ri(e);Me(t,"change",()=>{const o=Array.prototype.filter.call(t.options,s=>s.selected).map(s=>n?gi(vi(s)):vi(s));t[sn](t.multiple?r?new Set(o):o:o[0])}),t[sn]=$i(i)},mounted(t,{value:e}){es(t,e)},beforeUpdate(t,e,n){t[sn]=$i(n)},updated(t,{value:e}){es(t,e)}};function es(t,e){const n=t.multiple;if(!(n&&!A(e)&&!Ri(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],s=vi(o);if(n)A(e)?o.selected=cl(e,s)>-1:o.selected=e.has(s);else if(qi(vi(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function vi(t){return"_value"in t?t._value:t.value}const Nc=_t({patchProp:vc},rc);let ns;function Ac(){return ns||(ns=If(Nc))}const Ic=(...t)=>{const e=Ac().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Pc(i);if(!r)return;const o=e._component;!B(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},e};function Pc(t){return bt(t)?document.querySelector(t):t}var Oc=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let xa;const Bi=t=>xa=t,$a=Symbol();function qr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var kn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(kn||(kn={}));function Fc(){const t=ws(!0),e=t.run(()=>$e({}));let n=[],i=[];const r=Ii({install(o){Bi(r),r._a=o,o.provide($a,r),o.config.globalProperties.$pinia=r,i.forEach(s=>n.push(s)),i=[]},use(o){return!this._a&&!Oc?i.push(o):n.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const va=()=>{};function is(t,e,n,i=va){t.push(e);const r=()=>{const o=t.indexOf(e);o>-1&&(t.splice(o,1),i())};return!n&&Es()&&dl(r),r}function Ge(t,...e){t.slice().forEach(n=>{n(...e)})}const jc=t=>t();function Nr(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];qr(r)&&qr(i)&&t.hasOwnProperty(n)&&!ht(i)&&!Ce(i)?t[n]=Nr(r,i):t[n]=i}return t}const Mc=Symbol();function zc(t){return!qr(t)||!t.hasOwnProperty(Mc)}const{assign:xe}=Object;function Lc(t){return!!(ht(t)&&t.effect)}function Bc(t,e,n,i){const{state:r,actions:o,getters:s}=e,a=n.state.value[t];let l;function f(){a||(n.state.value[t]=r?r():{});const c=Ml(n.state.value[t]);return xe(c,o,Object.keys(s||{}).reduce((h,g)=>(h[g]=Ii(no(()=>{Bi(n);const m=n._s.get(t);return s[g].call(m,m)})),h),{}))}return l=ya(t,f,e,n,i,!0),l}function ya(t,e,n={},i,r,o){let s;const a=xe({actions:{}},n),l={deep:!0};let f,c,h=[],g=[],m;const w=i.state.value[t];!o&&!w&&(i.state.value[t]={}),$e({});let E;function U(T){let D;f=c=!1,typeof T=="function"?(T(i.state.value[t]),D={type:kn.patchFunction,storeId:t,events:m}):(Nr(i.state.value[t],T),D={type:kn.patchObject,payload:T,storeId:t,events:m});const z=E=Symbol();Oi().then(()=>{E===z&&(f=!0)}),c=!0,Ge(h,D,i.state.value[t])}const W=o?function(){const{state:D}=n,z=D?D():{};this.$patch(Z=>{xe(Z,z)})}:va;function M(){s.stop(),h=[],g=[],i._s.delete(t)}function V(T,D){return function(){Bi(i);const z=Array.from(arguments),Z=[],R=[];function K(H){Z.push(H)}function ft(H){R.push(H)}Ge(g,{args:z,name:T,store:Y,after:K,onError:ft});let yt;try{yt=D.apply(this&&this.$id===t?this:Y,z)}catch(H){throw Ge(R,H),H}return yt instanceof Promise?yt.then(H=>(Ge(Z,H),H)).catch(H=>(Ge(R,H),Promise.reject(H))):(Ge(Z,yt),yt)}}const N={_p:i,$id:t,$onAction:is.bind(null,g),$patch:U,$reset:W,$subscribe(T,D={}){const z=is(h,T,D.detached,()=>Z()),Z=s.run(()=>Cn(()=>i.state.value[t],R=>{(D.flush==="sync"?c:f)&&T({storeId:t,type:kn.direct,events:m},R)},xe({},l,D)));return z},$dispose:M},Y=Ai(N);i._s.set(t,Y);const at=(i._a&&i._a.runWithContext||jc)(()=>i._e.run(()=>(s=ws()).run(e)));for(const T in at){const D=at[T];if(ht(D)&&!Lc(D)||Ce(D))o||(w&&zc(D)&&(ht(D)?D.value=w[T]:Nr(D,w[T])),i.state.value[t][T]=D);else if(typeof D=="function"){const z=V(T,D);at[T]=z,a.actions[T]=D}}return xe(Y,at),xe(G(Y),at),Object.defineProperty(Y,"$state",{get:()=>i.state.value[t],set:T=>{U(D=>{xe(D,T)})}}),i._p.forEach(T=>{xe(Y,s.run(()=>T({store:Y,app:i._a,pinia:i,options:a})))}),w&&o&&n.hydrate&&n.hydrate(Y.$state,w),f=!0,c=!0,Y}function Hc(t,e,n){let i,r;const o=typeof e=="function";typeof t=="string"?(i=t,r=o?n:e):(r=t,i=t.id);function s(a,l){const f=Rf();return a=a||(f?Rn($a,null):null),a&&Bi(a),a=xa,a._s.has(i)||(o?ya(i,e,r,a):Bc(i,r,a)),a._s.get(i)}return s.$id=i,s}var Kt={},er=globalThis&&globalThis.__awaiter||function(t,e,n,i){function r(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(c){try{f(i.next(c))}catch(h){s(h)}}function l(c){try{f(i.throw(c))}catch(h){s(h)}}function f(c){c.done?o(c.value):r(c.value).then(a,l)}f((i=i.apply(t,e||[])).next())})},nr=globalThis&&globalThis.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(f){return function(c){return l([f,c])}}function l(f){if(i)throw new TypeError("Generator is already executing.");for(;n;)try{if(i=1,r&&(o=f[0]&2?r.return:f[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,f[1])).done)return o;switch(r=0,o&&(f=[f[0]&2,o.value]),f[0]){case 0:case 1:o=f;break;case 4:return n.label++,{value:f[1],done:!1};case 5:n.label++,r=f[1],f=[0];continue;case 7:f=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(f[0]===6||f[0]===2)){n=0;continue}if(f[0]===3&&(!o||f[1]>o[0]&&f[1]<o[3])){n.label=f[1];break}if(f[0]===6&&n.label<o[1]){n.label=o[1],o=f;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(f);break}o[2]&&n.ops.pop(),n.trys.pop();continue}f=e.call(t,n)}catch(c){f=[6,c],r=0}finally{i=o=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}};Kt.__esModule=!0;Kt.PdfTeXEngine=Kt.CompileResult=Kt.EngineStatus=void 0;var Qt;(function(t){t[t.Init=1]="Init",t[t.Ready=2]="Ready",t[t.Busy=3]="Busy",t[t.Error=4]="Error"})(Qt=Kt.EngineStatus||(Kt.EngineStatus={}));var Wc="swiftlatexpdftex.js",wa=function(){function t(){this.pdf=void 0,this.status=-254,this.log="No log"}return t}();Kt.CompileResult=wa;var Uc=function(){function t(){this.latexWorker=void 0,this.latexWorkerStatus=Qt.Init}return t.prototype.loadEngine=function(){return er(this,void 0,void 0,function(){var e=this;return nr(this,function(n){switch(n.label){case 0:if(this.latexWorker!==void 0)throw new Error("Other instance is running, abort()");return this.latexWorkerStatus=Qt.Init,[4,new Promise(function(i,r){e.latexWorker=new Worker(Wc),e.latexWorker.onmessage=function(o){var s=o.data,a=s.result;a==="ok"?(e.latexWorkerStatus=Qt.Ready,i()):(e.latexWorkerStatus=Qt.Error,r())}})];case 1:return n.sent(),this.latexWorker.onmessage=function(i){},this.latexWorker.onerror=function(i){},[2]}})})},t.prototype.isReady=function(){return this.latexWorkerStatus===Qt.Ready},t.prototype.checkEngineStatus=function(){if(!this.isReady())throw Error("Engine is still spinning or not ready yet!")},t.prototype.compileLaTeX=function(){return er(this,void 0,void 0,function(){var e,n,i=this;return nr(this,function(r){switch(r.label){case 0:return this.checkEngineStatus(),this.latexWorkerStatus=Qt.Busy,e=performance.now(),[4,new Promise(function(o,s){i.latexWorker.onmessage=function(a){var l=a.data,f=l.cmd;if(f==="compile"){var c=l.result,h=l.log,g=l.status;i.latexWorkerStatus=Qt.Ready,console.log("Engine compilation finish "+(performance.now()-e));var m=new wa;if(m.status=g,m.log=h,c==="ok"){var w=new Uint8Array(l.pdf);m.pdf=w}o(m)}},i.latexWorker.postMessage({cmd:"compilelatex"}),console.log("Engine compilation start")})];case 1:return n=r.sent(),this.latexWorker.onmessage=function(o){},[2,n]}})})},t.prototype.compileFormat=function(){return er(this,void 0,void 0,function(){var e=this;return nr(this,function(n){switch(n.label){case 0:return this.checkEngineStatus(),this.latexWorkerStatus=Qt.Busy,[4,new Promise(function(i,r){e.latexWorker.onmessage=function(o){var s=o.data,a=s.cmd;if(a==="compile"){var l=s.result,f=s.log;if(e.latexWorkerStatus=Qt.Ready,l==="ok"){var c=s.pdf,h=new Blob([c],{type:"application/octet-stream"}),g=URL.createObjectURL(h);setTimeout(function(){URL.revokeObjectURL(g)},3e4),console.log("Download format file via "+g),i()}else r(f)}},e.latexWorker.postMessage({cmd:"compileformat"})})];case 1:return n.sent(),this.latexWorker.onmessage=function(i){},[2]}})})},t.prototype.setEngineMainFile=function(e){this.checkEngineStatus(),this.latexWorker!==void 0&&this.latexWorker.postMessage({cmd:"setmainfile",url:e})},t.prototype.writeMemFSFile=function(e,n){this.checkEngineStatus(),this.latexWorker!==void 0&&this.latexWorker.postMessage({cmd:"writefile",url:e,src:n})},t.prototype.makeMemFSFolder=function(e){if(this.checkEngineStatus(),this.latexWorker!==void 0){if(e===""||e==="/")return;this.latexWorker.postMessage({cmd:"mkdir",url:e})}},t.prototype.flushCache=function(){this.checkEngineStatus(),this.latexWorker!==void 0&&this.latexWorker.postMessage({cmd:"flushcache"})},t.prototype.setTexliveEndpoint=function(e){this.latexWorker!==void 0&&(this.latexWorker.postMessage({cmd:"settexliveurl",url:e}),this.latexWorker=void 0)},t.prototype.closeWorker=function(){this.latexWorker!==void 0&&(this.latexWorker.postMessage({cmd:"grace"}),this.latexWorker=void 0)},t}();Kt.PdfTeXEngine=Uc;async function Yc(t){const e=new Kt.PdfTeXEngine;return await e.loadEngine(),e.writeMemFSFile("main.tex",t),e.setEngineMainFile("main.tex"),await e.compileLaTeX()}const Xc=[{uuid:"9667e1e4-0313-466b-96e2-97e98db9c375",author:"Claudio Paganini",title:"Uni Ravensburg Fakultät für Mathematik - Elementargeometrie",fields:[["MISC2","Text 2"],["MISC1","Text 1"],["DEADLINE","Abgabefrist"],["EXERCISETITLE","Exercise Title"],["FACH","Fach"],["UNI","Universität"],["DOZENT","Dozent"],["INITAUFGCNT","Initiale Aufgabennummer"],["HEADERS",""],["EXERCISES",""]],content:`% no exercises will ever be written in this file. This is essentially
% just a test environment to see that everything works.  here comes a
% list of packages. Every exercise has to be compatible with
% this. During this trial period packages can be added and
% removed. Once we have settled on a set of packages these are sacred.
\\documentclass[11pt,a4paper]{article} % this sets the page size, the document type and the font size. Maybe we can make the first an input option
%%%%%%%%%%% MIGHT BE SUBJJECT TO STYLE CHOICE %%%%%%%%%%%%%%%%%%%%%
\\usepackage[a4paper,nohead,margin=2cm]{geometry}% this sets the geometry of the page 
%%%%%%%%%%% MIGHT BE SUBJJECT TO STYLE CHOICE %%%%%%%%%%%%%%%%%%%%%
\\usepackage[T1]{fontenc} % guarantees the output of special characters to be nice
%%%%%%%%%%% MIGHT BE SUBJJECT TO STYLE CHOICE %%%%%%%%%%%%%%%%%%%%%
\\usepackage[utf8]{inputenc} %this allows the input to be typed as ä ö ü and so on
%%%%%%%%%%% MIGHT BE SUBJJECT TO STYLE CHOICE %%%%%%%%%%%%%%%%%%%%%
\\usepackage{ngerman}%ändert Standart Bezeichnungen auf Deutsch (table of content-> Inhaltsverzeichnis usw)
\\usepackage{graphicx} % Required for inserting images
%%%%%%%%%%% MIGHT BE SUBJJECT TO STYLE CHOICE %%%%%%%%%%%%%%%%%%%%%

% %%%%%%% here comes the taggif environment
\\usepackage{tagging}
\\usetag{GermanExercise}				% show these tags


((* HEADERS *))

%%%%%%%%%%%%%%%%%Aufgaben environment
\\newcounter{aufgabennum}
\\setcounter{aufgabennum}{((* INITAUFGCNT *))}
\\newcommand{\\aufgabe}[1]{\\subsubsection*{Aufgabe \\theaufgabennum:\\refstepcounter{aufgabennum}\\ \\ignorespaces #1}}
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\\long\\def\\ignorethis#1{} %I don't know what this does or whether it does Anything
\\parindent0cm %this removed the indent in the beginning of EVERY paragraph.
%%%%%%%%%%% MIGHT BE SUBJJECT TO STYLE CHOICE %%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\\begin{document}

\\pagestyle{empty}
\\mbox{}\\vspace{-1cm}

%% We cant do figures atm; do some tikz vector graphics
%%\\begin{wrapfigure}[3]{r}{0.1\\textwidth}\\vspace{-0.8cm}
%%    \\includegraphics[width=0.1\\textwidth]{Logo.png}
%%\\end{wrapfigure}
\\noindent    
    {\\Large\\bfseries
      % \\#Fach sollte für eine Übungereihe am Anfang einmal global gesetzt werden 
      Übungen zu ((* FACH *))} \\\\
    % \\#Universität, \\#Semester sollte für eine Übungereihe am Anfang einmal global gesetzt werden 
    ((* UNI *))  \\\\
     % \\#Dozent, \\#Übungsleiter sollte für eine Übungereihe am Anfang
     % einmal global gesetzt werden. Es sollte möglich sein beliebig
     % viele Namen hinzuzufügen.
    ((* DOZENT *))
\\vspace{2mm}
\\hrule
\\vspace{5mm}
\\begin{center}
	{\\large\\bfseries ((* EXERCISETITLE *)) }\\\\
	\\vspace{2mm}
	       {Abgabe: ((* DEADLINE *)) }
               
               \\vspace{1cm} % dieser space ist optional wenn die nächste box gefüllt ist
               \\textbf{((* MISC1 *))  % dieser Input ist optional
}

               \\vspace{0.5cm} % dieser space ist optional wenn die nächste box gefüllt ist
               ((* MISC2 *))  % dieser Input ist optional

\\end{center}
\\bigskip

((* EXERCISES *))

\\end{document}
`}],Vc=[{uuid:"e1ac4414-8587-40f6-a1c6-13d7d452a779",author:"Claudio Paganini",content:`\\usepackage{amsmath,amssymb,amsthm}%these packages provide the basic mathsymbols
\\usepackage[mathscr]{eucal} %this fixes the calicraphic fonts
\\usepackage{wrapfig} %allows to place the logo on the top right
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\\usepackage{tikz-cd}		%%% For drawing diagrams
%here comes a list of macros % we need these so we can eventually let people choose these key symbols to be compatible with their script. 
% \\newcommand{}{}% Symbol for the 

%%%%%%%%%%%%%%%%% number systems %%%%%%%%%%%%%%%%%%%%%%%%%%
\\newcommand{\\Q}{\\mathbb{Q}}%Symbol for the rational numbers
\\newcommand{\\R}{\\mathbb{R}}%Symbol for the real numbers
\\newcommand{\\Rpos}{\\mathbb{R}_{\\geq 0}}%Symbol for the positive real numbers
\\newcommand{\\Rspos}{\\mathbb{R}_{> 0}}%Symbol for the strictly positive real numbers
\\newcommand{\\C}{\\mathbb{C}}%Symbol for the Complex numbers
\\newcommand{\\Z}{\\mathbb{Z}}%Symbol for the entire numbers
\\newcommand{\\N}{\\mathbb{N}}%Symbol for the natural numbers
\\newcommand{\\NO}{\\mathbb{N}_0}%Symbol for the natural numbers including zero
\\newcommand{\\ii}{i}%symbol for the unit complex number

%%%%%%%%%% function spaces %%%%%%%%%%%%%%%%%%%%%%%%%%
\\newcommand{\\Cinfty}{C^\\infty}%Symbol for the set of smooth functions
\\newcommand{\\Cinftyc}{C_0^\\infty}%Symbol for the set of compactly supported smooth functions
\\newcommand{\\Cn}{C^n}%Symbol for the set of n times continuously differentiable functions
\\newcommand{\\Cnc}{C^n_0}%Symbol for the set of compactly supported n times continuously differentiable functions
\\newcommand{\\Ctwo}{C^2}%Symbol for the set of two times continuously differentiable functions
\\newcommand{\\Ctwoc}{C^2_0}%Symbol for the set of compactly supported two times continuously differentiable functions
\\newcommand{\\Cone}{C^1}%Symbol for the set of  continuously differentiable functions
\\newcommand{\\Conec}{C^1_0}%Symbol for the set of compactly supported continuously differentiable functions
\\newcommand{\\Czero}{C^0}%Symbol for the set of continuous functions
\\newcommand{\\Czeroc}{C^0_0}%Symbol for the set of compactly supported continuous functions

%%%%%%%%%% set theory %%%%%%%%%%%%%%%%%%%%%%%%%%

\\newcommand{\\customsubset}{\\subset}%symbol for a subset that might be the entire set
\\newcommand{\\propersubset}{\\subsetneq}%symbol for a subset that might be that is stricktly smaller than the entire set. 

%%%%%%%%%%% Probability theory
\\newcommand{\\RelEnt}{D} % Symbol for the relative entropy
\\newcommand{\\PP}{\\mathbb{P}}% Symbol for the probability
\\newcommand{\\InfEnt}{H}% Symbol for the information entropy

%%%%%%%%%%%% Functional analysis
\\newcommand{\\HS}{\\mathcal{H}}%Symbol for Hilbert space
\\newcommand{\\Lin}{\\mathbf{L}}%Symbol for the bounded linear operators on a Hilbert Space

%%%%%%%%%%%%% MISC
\\newcommand{\\lpar}{\\left(}% this makes the parenthesis adjust size
\\newcommand{\\rpar}{\\right)}% this makes the parenthesis adjust size
\\newcommand{\\lbra}{\\left[}% this makes the parenthesis adjust size
\\newcommand{\\rbra}{\\right]}% this makes the parenthesis adjust size
\\newcommand{\\labs}{\\left|}% this makes the parenthesis adjust size
\\newcommand{\\rabs}{\\right|}% this makes the parenthesis adjust size


\\newcommand{\\eps}{\\varepsilon}% enables the choice of a preferred typesetting for epsilon
%Here come marcos for convenience
\\newcommand*\\diff{\\mathop{}\\!\\mathrm{d}} % Für das "d" in "dx"
\\newcommand{\\abs}[1]{\\ensuremath{\\left|#1\\right|}} % Betragstriche
`}],Kc=[{uuid:"b686755b-aaa8-45cf-8b3d-4301582a0018",title:["quasi-linear partial differential equation","Burgers-like Equations"],tags:["Partial Differential Equations 1","PDE1qu9OPX"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:3,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganin"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`	
	
	
	\\aufgabe{} 
	
	
\\begin{taggedblock}{EnglishExercise}
	We consider the quasi-linear partial differential equation
	\\begin{equation*}
		(1)\\left\\{\\begin{tabular}{cl}
			$\\partial_tu\\left(x,t\\right)+a\\left(u\\left(x,t\\right)\\right)\\partial_xu\\left(x,t\\right)=0$&$\\text{for all }x\\in\\R,t\\in\\left[0,T\\right),$\\\\
			$u\\left(x,0\\right)=u_0(x)$&for all $x\\in\\R$,
		\\end{tabular}\\right.
	\\end{equation*}
	where $a,u_0\\in \\Cone_b\\left(\\R\\right)$.
	\\begin{itemize}
		\\item[1.]Let $u\\in \\Cone\\left(\\R\\times\\left[0,T\\right]\\right)$ be a (classical) solution. Show that $u$ satisfies 
		\\begin{align*}
			u(x,t)&=u_0\\left(x-t\\cdot a\\left(u(x,t)\\right)\\right)&\\text{for all }x\\in\\R,t\\in\\left[0,T\\right).
		\\end{align*}
		\\item[2.]Prove that there exists a solution for all $t>0$ if and only if $\\R\\ni s\\mapsto a\\left(u_0(s)\\right)\\in\\R$ increasing (\\grqq monoton wachsend\\grqq).
	\\end{itemize}
\\end{taggedblock}
	
		
\\begin{taggedblock}{EnglishSolution}
\\begin{itemize}
	\\item[1.]Let $x\\in\\R$ and $t\\in\\left[0,T\\right)$ be given. The characteristic ODEs are
	\\begin{align*}
		\\frac{d}{ds}\\left(\\begin{tabular}{c}x(s)\\\\t(s)\\\\y(s))\\end{tabular}\\right)&=\\left(\\begin{tabular}{c}$a\\left(y(s)\\right)$\\\\1\\\\0\\end{tabular}\\right).
		\\intertext{We solve them with the initial values}
		\\left(\\begin{tabular}{c}x(0)\\\\t(0)\\\\y(0)\\end{tabular}\\right)&=\\left(\\begin{tabular}{c}x\\\\t\\\\u(x,t)\\end{tabular}\\right).
	\\end{align*}
	This yields the solution
	\\begin{align*}
		x(s)&=x+sa\\left(u(x,t)\\right),&t(s)&=t+s,&y(s)&=u(x,t)
	\\end{align*}
	for all $s\\in\\R$. As seen in the lecture series we have
	\\begin{align*}
		u\\left(x(s),t(s)\\right)&=y(s)=u(x,t)&\\text{for all }s\\in\\R\\text{ with }t(s)\\in\\left[0,T\\right).
	\\end{align*}
For $s=-t$ we obtain
\\begin{equation*}
	u(x,t)=u\\left(x(-t),0\\right)=u_0\\left(x-a\\left(u(x,t)\\right)\\right).
\\end{equation*}
\\item[2.]\\begin{itemize}
	\\item \\grqq$\\Rightarrow$\\grqq: Let $\\R\\ni s\\mapsto a\\left(u_0(s)\\right)\\in\\R$ be increasing. Then for any $t\\geq0$
\\begin{equation*}
	\\Phi_t:\\R\\rightarrow\\R\\ \\text{with } \\Phi_t\\left(x_0\\right):=x_0+ta\\left(u_0(x_0)\\right)
\\end{equation*}
is bijective since: For any $x_1\\neq x_2$
\\begin{align*}
	\\Phi_t\\left(x_1\\right)-\\Phi_t\\left(x_2\\right)&=x_1-x_2+t\\left(a\\left(u_0\\left(x_1\\right)\\right)-a\\left(u_0\\left(x_2\\right)\\right)\\right)\\\\
	&=\\left(x_1-x_2\\right)\\underbrace{\\left(1+t\\frac{a\\left(u_0(x_1)\\right)-a\\left(u_0(x_2)\\right)}{x_1-x_2}\\right)}_{\\geq1}
\\end{align*}
and thus $\\abs{\\Phi_t(x_1)-\\Phi(t)}\\geq\\abs{x_1-x_2}$ for all $x_1,x_2\\in\\R$ and $t\\geq0$. Actually since $x\\mapsto a\\left(u_0(x)\\right)$ has a bounded deritative (due to $u_0\\in \\Cone_b\\left(\\R\\right)$), there is some $\\delta>0$ such that 
\\begin{equation*}
	\\left(1+t\\frac{a\\left(u_0(x_1)\\right)-a\\left(u_0(x_2)\\right)}{x_1-x_2}\\right)\\geq\\frac{1}{2}\\ \\text{for all }t\\geq-\\delta,x_1\\neq x_2
\\end{equation*}
and therefore $\\abs{\\Phi_t(x_1)-\\Phi(t)}\\geq\\frac{1}{2}\\abs{x_1-x_2}$ for all $x_1,x_2\\in\\R$ and $t\\geq-\\delta$. This along with Lemma 2.14 in the lecture notes implies that $\\Phi_t^{-1}(x)$ exists and is a $\\Cone-$diffeomorphism for any $t\\geq-\\delta$. Moreover, as in the lecture notes the implicit function theorem applied to 
\\begin{align*}
	H:\\R\\times\\R\\times\\left(-\\delta,\\infty\\right)\\rightarrow\\R:\\left(x,\\bar{x},t\\right)\\mapsto\\Phi_t(x)-\\bar{x}
\\end{align*}
implies that $\\Phi_t^{-1}(\\bar{x})$ is continously differentiable with respect to $\\bar{x}\\in\\R$ and $t>-\\delta.$ Hence a solution $u\\in\\Cone\\left(\\R\\times\\left[0,\\infty\\right)\\right)$ can be defined by 
\\begin{equation*}
	u(x,t):=u_0\\left(\\Phi_t^{-1}(x)\\right)\\ \\text{for all }x\\in\\R,t\\geq0.
\\end{equation*}
\\item \\grqq$\\Leftarrow$\\grqq: We prove this by contradiction. Assume that $\\R\\ni s\\mapsto a\\left(u_0(x_2)\\right)$. Consider the time  
\\begin{equation*}
	T_*=\\frac{x_2-x_1}{a\\left(u_0(x_1)\\right)-a\\left(u_0(x_2)\\right)}>0.
\\end{equation*}
Then one has 
\\begin{equation*}
	x_1+T_*a\\left(u_0(x_1)\\right)=x_2+T_*a\\left(u_0(x_2)\\right).
\\end{equation*}
Since $u$ is constant along the characteristics, we have
\\begin{equation*}
	u_0(x_1)=u\\left(x_1+T_*a\\left(u_0(x_1)\\right),T_*\\right)=u\\left(x_2+T_*a\\left(u_0(x_2)\\right),T_*\\right)=u_0(x_2),
\\end{equation*} which contradicts to the assumption that $a\\left(u_0(x_1)\\right)>a\\left(u_0(x_2)\\right)$. \\\\
Hence~$\\R\\ni s\\mapsto a\\left(u_0(s)\\right)\\in\\R$ is increasing.\\hfill$\\square$
\\end{itemize}
\\end{itemize}
\\end{taggedblock}
`,preview:"b686755b-aaa8-45cf-8b3d-4301582a0018.png"},{uuid:"ef18f59c-19a5-45e7-81a0-0e224793aadd",title:["Weak Solutions of Conservation Laws"],tags:["Partial Differential Equations 1"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:3,solution:"droptag",author:["Prof. Dr. Helmut Abels"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`	
	
	\\aufgabe{} 
	
	
	\\begin{taggedblock}{EnglishExercise}
		Let $F\\in\\Cone(\\R),u\\in\\Cone\\left(\\R\\times\\left[0,\\infty\\right)\\right)$ and $u_0\\in\\Cone(\\R)$.
		\\begin{enumerate}
			\\item Show that $u$ solves the conservation law
			\\begin{equation}
				\\partial_tu(x,t)+\\partial_x\\left(F\\left(u(x,t)\\right)\\right)=0\\qquad\\text{for all }x\\in\\R,t>0\\label{Num3Eq3}
			\\end{equation}
			if and only if 
			\\begin{equation*}
				\\int_{0}^{\\infty}\\int_\\R\\left(u(x,t)\\partial_t\\varphi(x,t)+F\\left(u(x,t)\\right)\\partial_x\\varphi(x,t)\\right)\\diff x\\diff t
			\\end{equation*}
			for all 
			\\begin{equation*}
				\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)=\\left\\{\\varphi\\in\\Cone\\left(\\R\\times\\left[0,\\infty\\right)\\right):\\text{supp $\\varphi$ is compact}\\right\\}
			\\end{equation*}
			with $\\varphi(x,0)=0$ for all $x\\in\\R$.
			\\item Show that $u$ solves the conservation law (\\ref{Num3Eq3}) together with
			\\begin{equation*}
				u(x,0)=u_0(x)\\qquad \\text{for all }x\\in\\R
			\\end{equation*}
			if and only if
			\\begin{equation*}
				\\int_{0}^{\\infty}\\int_\\R\\left(u(x,t)\\partial_t\\varphi(x,t)+F\\left(u(x,t)\\right)\\partial_x\\varphi(x,t)\\right)\\diff x\\diff t=-\\int_\\R u_0(x)\\varphi(x,0)\\diff x
			\\end{equation*}
			for all $\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)$.
		\\end{enumerate}
	\\end{taggedblock}
	
	
	\\begin{taggedblock}{EnglishSolution}
	First of all we have for any $\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)$ and $R>0$ be so large that supp$\\varphi\\customsubset\\left(-R,R\\right)\\times\\left[0,R\\right)$ that
	\\begin{align}
		&\\int_{0}^{\\infty}\\int_{\\R}\\partial_tu(x,t)\\varphi(x,t)\\diff x\\diff t-\\int_{0}^{\\infty}\\int_{\\R}\\partial_xF\\left(u(x,t)\\right)\\varphi(x,t)\\diff x\\diff t\\nonumber\\\\
		&=\\int_{-R}^{R}\\int_{0}^{R}\\partial_tu(x,t)\\varphi(x,t)\\diff t\\diff x-\\int_{0}^{R}\\int_{-R}^{R}\\partial_xF\\left(u(x,t)\\right)\\varphi(x,t)\\diff x\\diff t\\nonumber\\\\
		&=-\\int_{-R}^{R}\\int_{0}^{R}u(x,t)\\partial_t\\varphi(x,t)\\diff t\\diff x-\\int_{-R}^{R}u(x,0)\\varphi(x,0)\\diff x-\\int_{0}^{R}\\int_{-R}^{R}F\\left(u(x,t)\\right)\\partial_x\\varphi(x,t)\\diff x\\diff t\\nonumber\\\\
		&=-\\int_{0}^{\\infty}\\int_\\R\\left(u(x,t)\\partial_t\\varphi(x,t)+F\\left(u(x,t)\\right)\\partial_x\\varphi(x,t)\\right)\\diff x\\diff t-\\int_{\\R}u(x,0)\\varphi(x,0)\\diff x\\label{Num3Eq4}
	\\end{align}
	where we have used that all boundary terms due to integration by parts except the one for $t=0$ vanish since stil $\\varphi(\\pm R,t)=\\varphi(x,R)=0$ for all $x\\in\\R,t\\geq0$.
	\\begin{enumerate}
		\\item \\begin{itemize}
		\\item \\grqq$\\Rightarrow$\\grqq: Now let $u$ solve (\\ref{Num3Eq3}) and let $\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)$ with $\\varphi(x,0)=0$ for all $x\\in\\R$.\\\\
		Then (\\ref{Num3Eq4}) yields
		\\begin{align*}
			0&=-\\int_{0}^{\\infty}\\int_{\\R}\\partial_tu(x,t)\\varphi(x,t)\\diff x\\diff t-\\int_{0}^{\\infty}\\int_{\\R}\\partial_xF\\left(u(x,t)\\right)\\varphi(x,t)\\diff x\\diff t\\\\
			&=\\int_{0}^{\\infty}\\int_{\\R}\\left(u(x,t)\\partial_t\\varphi(x,t)+F\\left(u(x,t)\\right)\\right)\\partial_x\\varphi(x,t)\\diff x\\diff t
		\\end{align*}
		\\item \\grqq$\\Leftarrow$\\grqq: Let $u$ satisfy
		\\begin{equation*}
			\\int_{0}^{\\infty}\\int_\\R\\left(u(x,t)\\partial_t\\varphi(x,t)+F\\left(u(x,t)\\right)\\partial_x\\varphi(x,t)\\right)\\diff x\\diff t=0
		\\end{equation*}
		for all $\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)$ with $\\varphi(x,0)=0$ for all $x\\in\\R$. Then conversely (\\ref{Num3Eq4}) yields
		\\begin{align*}
			0&=\\int_{0}^{\\infty}\\int_\\R\\left(u(x,t)\\partial_t\\varphi(x,t)+F\\left(u(x,t)\\right)\\partial_x\\varphi(x,t)\\right)\\diff x\\diff t\\\\
			&=-\\int_{0}^{\\infty}\\int_{\\R}\\left(\\partial_tu(x,t)+\\partial_xF\\left(u(x,t)\\right)\\right)\\varphi(x,t)\\diff x\\diff t.
		\\end{align*}
		Assume that there are some $x_0\\in\\R,t_0>0$ such that
		\\begin{equation*}
			f(x_0,t_0):=\\partial_t u(x_0,t_0)+\\partial_xF\\left(u(x_0,t_0)\\right)\\neq0
		\\end{equation*}
		W.l.o.g let $f(x_0,t_0)>0$ (otherwise change the inequalities in the following). Since $f$ is continuous at $(x_0,t_0)$, there is some $\\eps\\in\\left(0,t_0\\right)$ such that 
		\\begin{equation*}
			f(x,t)>\\frac{1}{2}f(x_0,t_0)\\qquad \\text{for all }x\\in\\left(x_0-\\eps,x_0+\\eps\\right),t\\in\\left(t_0-\\eps,t_0+\\eps\\right). 
		\\end{equation*}
		Now choose some $\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)$ with $\\varphi(x_0,t_0)=1,\\varphi(x,t)\\geq0$ for all $x\\in\\R,t\\geq0$, and supp$\\varphi\\customsubset\\left(x_0-\\eps,x_0+\\eps\\right)\\times\\left(t_0-\\eps,t_0+\\eps\\right)$. Then we obtain
		\\begin{align*}
			0&=\\int_{0}^{\\infty}\\int_\\R\\left(\\partial_tu(x,t)+\\partial_xF\\left(u(x,t)\\right)\\right)\\varphi(x,t)\\diff x\\diff t\\\\
			&=\\int_{t_0-\\eps}^{t_0+\\eps}\\int_{x_0-\\eps}^{x_0+\\eps}\\underbrace{\\left(\\partial_xu(x,t)+\\partial_xF\\left(u(x,t)\\right)\\right)}_{\\geq\\frac{1}{2}f(x_0,t_0)>0}\\varphi(x,t)\\diff x\\diff t\\\\
			&\\geq\\frac{1}{2}f(x_0,t_0)\\int_{t_0-\\eps}^{t_0+\\eps}\\int_{x_0-\\eps}^{x_0+\\eps}\\varphi(x,t)\\diff x\\diff t>0
		\\end{align*}
		which is a contradiction. Hence $f(x,t)=0$ for all $x\\in\\R,t>0$. Hence $u$ solves (\\ref{Num3Eq3}).
		\\end{itemize}
		\\item\\begin{itemize}
			\\item \\grqq$\\Rightarrow$\\grqq: Let $u$ solve (\\ref{Num3Eq3}) with $u(x,t)=u_0(x)$ for all $x\\in\\R$ and $\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)$. Then (\\ref{Num3Eq4}) yields
			\\begin{equation*}
				0=\\int_0^\\infty\\int_\\R\\left(u(x,t)\\partial_t\\varphi(x,t)+F\\left(u(x,t)\\right)\\partial_x\\varphi(x,t)\\right)\\diff x\\diff t+\\int_\\R u_0(x)\\varphi(x,0)\\diff x.
			\\end{equation*}
			This shows the claim.
		 \\item \\grqq$\\Leftarrow$\\grqq: Let $u$ solve
		 \\begin{equation*}
		 	\\int_0^\\infty\\int_\\R\\left(u(x,t)\\partial_t\\varphi(x,t)+F\\left(u(x,t)\\right)\\partial_x\\varphi(x,t)\\right)\\diff x\\diff t=
		 	-\\int_\\R u_0(x)\\varphi(x,0)\\diff x
		 \\end{equation*}
		 for all $\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)$. In particular we have
		 \\begin{equation*}
		 	\\int_0^\\infty\\int_\\R\\left(u(x,t)\\partial_t\\varphi(x,t)+F\\left(u(x,t)\\right)\\partial_x\\varphi(x,t)\\right)\\diff x\\diff t=0
		 \\end{equation*}
		 for all $\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)$ with $\\varphi(x,0)=0$ for all $x\\in\\R$. Hence the first part shows that $u$ solves (\\ref{Num3Eq3}). Then (\\ref{Num3Eq4}) yields
		 \\begin{align*}
		 	-\\int_\\R u_0(x)\\varphi(x)\\diff x
		 	&=\\int_0^\\infty\\int_\\R\\left(u(x,t)\\partial_t\\varphi(x,t)+F\\left(u(x,t)\\right)\\partial_x\\varphi(x,t)\\right)\\diff x\\diff t\\\\
		 	&=-\\int_0^\\infty\\int_\\R\\underbrace{\\left(\\partial_tu(x,t)+\\partial_xF\\left(u(x,t)\\right)\\right)}_{=0}\\varphi(x,t)\\diff x\\diff t-\\int_\\R u(x,0)\\varphi(x)\\diff x
		 \\end{align*}
		 for all $\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)$. I.e.
		 \\begin{equation*}
		 	\\int_\\R\\left(u_0(x)-u(x,0)\\right)\\varphi(x,0)\\diff x=0
		 \\end{equation*}
		 for all $\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)$. This implies that $u_0(x)-u(x,0)=0$ for all $x\\in\\R$. Otherwise there is some $x_0\\in\\R$ with $u_0(x_0)-u(x_0,0)\\neq0$. Choosing some $\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)$ with $\\varphi(x_0,0)=1,\\varphi(x,0)\\geq0$ for all $x\\in\\R$ and supp$\\varphi(x,0)\\customsubset\\left(x_0-\\eps,x_0+\\eps\\right)$ for some $\\eps>0$ sufficiently small one obtains a contradiction as above.\\hfill$\\square$
		\\end{itemize}
	\\end{enumerate}
\\end{taggedblock}
`,preview:"ef18f59c-19a5-45e7-81a0-0e224793aadd.png"},{uuid:"67ac1dce-5561-432d-a85f-32ef778b3889",title:["Degenerate PDE of 1st Order"],tags:["Partial Differential Equations 1","PDE1qu9OPX"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:3,solution:"droptag",author:["Prof. Dr. Helmut Abels"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`	
	
	
	\\aufgabe{} 
	
	
	\\begin{taggedblock}{EnglishExercise}
		We consider
		\\begin{align}
			t\\partial_tu(x,t)+a\\partial_xu(x,t)&=0,&x\\in\\R,t>0\\label{Num3Eq1}\\\\
			u(x,t_0)&=u_0(x),&x\\in\\R \\label{Num3Eq2}
		\\end{align}
		where $a>0,t_0>0$ and $u_0\\in \\Cone_b(\\R)$ are given. Prove that:
		\\begin{enumerate}
			\\item If $t_0>0$, then (\\ref{Num3Eq1})-(\\ref{Num3Eq2}) possesses for all $u_0\\in \\Cone_b(\\R)$ a unique solution $u\\in \\Cone(\\R\\times\\left(0,\\infty\\right))$. Calculate the solution.
			\\item If $t_0=0$, then (\\ref{Num3Eq1})-(\\ref{Num3Eq2}) possesses a solution $u\\in \\Cone\\left(\\R\\times\\left[0,\\infty\\right)\\right)$ only if $u_0$ is constant. Which necessary solvability condition for (\\ref{Num3Eq1})-(\\ref{Num3Eq2}) is not satisfied in this case?
			\\item Determine all solutions $u\\in \\Cone\\left(\\R\\times\\left[0,\\infty\\right)\\right)$ of (\\ref{Num3Eq1})-(\\ref{Num3Eq2}) with $t_0$ and $u_0(x)=c$ for all $x\\in\\R$ and some $c\\in\\R$.
		\\end{enumerate}
	\\end{taggedblock}
	
	
	\\begin{taggedblock}{EnglishSolution}
	\\begin{enumerate}
		\\item Let $x_0\\in\\R$ and $t_0>0$ be given. The characteristic ODEs are 
		\\begin{equation*}
			\\frac{d}{ds}\\left(\\begin{tabular}{c}x(s)\\\\t(s)\\\\y(s)\\end{tabular}\\right)=\\left(\\begin{tabular}{c}a\\\\t(s)\\\\0\\end{tabular}\\right).
		\\end{equation*}
		We solve them with the initial values
		\\begin{equation*}
			\\left(\\begin{tabular}{c}x(0)\\\\t(0)\\\\y(0)\\end{tabular}\\right)=\\left(\\begin{tabular}{c}$x_0$\\\\$t_0$\\\\$u_0\\left(x_0\\right)$\\end{tabular}\\right).
		\\end{equation*}
		The solutions are given by
		\\begin{equation*}
			x(s)=x_0+sa,\\ t(s)=t_0e^s,\\ y(s)=u_0(x_0)
		\\end{equation*}
		for all $s\\in\\R$. Therefore if $u\\in \\Cone\\left(\\R\\times\\left(0,\\infty\\right)\\right)$ is a solution of (\\ref{Num3Eq1})-(\\ref{Num3Eq2}) we have
		\\begin{equation*}
			u_0(x_0)=y(s)=u\\left(x(s),t(s)\\right)=u\\left(x_0+sa,t_0e^s\\right)\\qquad \\text{for all }s\\in\\R,x_0\\in\\R.
		\\end{equation*}
		In particular for any $x\\in\\R,t>0$, we obtain for $s=\\ln\\left(\\frac{t}{t_0}\\right)$ and $x_0=x-sa=x-a\\ln\\left(\\frac{t}{t_0}\\right)$ that
		\\begin{equation*}
			u(x,t)=u\\left(x(s),t(s)\\right)=u_0\\left(x-a\\ln\\left(\\frac{t}{t_0}\\right)\\right).
		\\end{equation*}
		This shows that the solution is uniquely determined by the latter formula. Conversely, if we define
		\\begin{equation*}
			u(x,t):=u_0\\left(x-a\\ln\\left(\\frac{t}{t_0}\\right)\\right)\\ \\text{for all }x\\in\\R,t>0,
		\\end{equation*}
		we obtain a solution $u\\in \\Cone\\left(\\R\\times\\left(0,\\infty\\right)\\right)$ of (\\ref{Num3Eq1}) by construction:
		\\begin{equation*}
			t\\partial_tu(x,t)=tu_0'\\left(x-a\\ln\\left(\\frac{t}{t_0}\\right)\\right)\\cdot\\left(-\\frac{a}{t}\\right)=-a\\partial_xu(x,t)
		\\end{equation*}
		for alle $x\\in\\R,t>0$ and it satisfies $u(x,t_0)=u_0=x$ for all $x\\in\\R$.
		
		\\item If $u\\in \\Cone\\left(\\R\\times\\left[0,\\infty\\right)\\right)$ is a solution of (\\ref{Num3Eq1})-(\\ref{Num3Eq2}) we obtain
		\\begin{equation}
			a\\partial_xu_0(x)=a\\partial_xu(x,0)=\\lim\\limits_{t\\rightarrow0^+}a\\partial_xu(x,t)=-\\lim\\limits_{t\\rightarrow0^+}t\\partial_tu(x,t)=0
		\\end{equation}
		for all $x\\in\\R$ since the partial derivatives are continuous as $t\\rightarrow0^+$. Because of $a>0,\\partial_xu_0(x)=0$ for all $x\\in\\R$ and therefore $u_0$ is constant.\\\\
		In the present case the survace $S=\\R\\times\\left\\{0\\right\\}$ is characteristic for the differential operator $Lu=a\\partial_xu+t\\partial_tu$ since
		\\begin{equation*}
			\\binom{a}{0}=\\left.\\binom{a}{t}\\right|_{t=0}\\in T_{(x,0)}S=S.
		\\end{equation*}
		As seen at the end of Section 2.2 in the lecture series it is necessary that S is non-characteristic to solve this linear first order PDE for any initial values $u_0$ at~$S$.
		
		\\item Assume that $u\\in \\Cone\\left(\\R\\times\\left(0,\\infty\\right)\\right)$ is a solution of (\\ref{Num3Eq1})-(\\ref{Num3Eq2}) for $t_0=0$ and $u_0(x)=c$ for all $x\\in\\R$ and some $c\\in\\R$. Define $w(t):=u(0,t)$ for all $t\\geq0$. Then $w\\in \\Cone\\left(\\left[0,\\infty\\right)\\right)$ with $w(0)=c$ by definition. Now for any $t_0>0$ consider the projected characteristic curves $\\left(x(s),t(s)\\right)_{s\\in\\R}$ with $x(0)=0$ and $t(s)=t_0$, i.e.
		\\begin{equation*}
			x(s)=sa,\\ t(s)=t_0e^s\\ \\text{for all }s\\in\\R.
		\\end{equation*}
		Since $u$ is constant along the projected characteristic curves, we have
		\\begin{equation*}
			w(t_0)=u(0,t_0)=u\\left(x(s),t(s)\\right)=u\\left(sa,t_0e^s\\right).
		\\end{equation*}
		Choosing for $t>0$ and $x\\in\\R,s=\\frac{x}{a}, t_0=te^{-s}=te^{-\\frac{x}{a}}$, we conclude
		\\begin{align*}
			u(x,t)&=w\\left(te^{-\\frac{x}{a}}\\right)\\ \\text{for all }x\\in\\R,t\\geq0.&(\\star)
		\\end{align*}
		Conversely, if $w\\in \\Cone_b(\\R)$ is an arbitrary function with $c=w(0)$, we can define $u$ by $(\\star)$.\\\\
		Then $u\\in \\Cone\\left(\\R\\times\\left[0,\\infty\\right)\\right)$ and $u$ solves (\\ref{Num3Eq1}) since
		\\begin{equation*}
			t\\partial_tu(x,t)=te^{-\\frac{x}{a}}w'\\left(te^{-\\frac{x}{a}}\\right)=-a\\partial_xu(x,t)
		\\end{equation*}
		for all $x\\in\\R,t>0$, and $u(x,0)=w(0)=c=u_0(x)$ for all $x\\in\\R$.\\hfill$\\square$
	\\end{enumerate}
\\end{taggedblock}
`,preview:"67ac1dce-5561-432d-a85f-32ef778b3889.png"},{uuid:"d059375e-3c39-453d-90a9-0922197604f1",title:["interpolierende Polynome","Binomialkoeffizient"],tags:["Numerik 1","Num1KrofZ07Au"],languages:["GermanExercise","GermanSolution"],semesterwoche:8,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganin"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`	
	
	
	\\aufgabe{} 
	
	
	\\begin{taggedblock}{GermanExercise}
		Seien $a\\in\\R,h>0$ und eine Funktion $f:\\R\\rightarrow\\R$ gegeben, $x_i:=a+ih$ für~$i=0,\\dots,n$. Sei $P\\left(f\\mid x_0,\\dots,x_n\\right)$ das interpolierende Polynom zu den Punkten $\\left(x_i,f\\left(x_i\\right)\\right),i=0,\\dots,n$, mit $\\deg\\left(P\\left(f\\mid x_0,\\dots,x_n\\right)\\right)\\leq n$ und sei $\\left[x_0,\\dots,x_n;h\\right]f$ der Koeffizient vor $x^n$ in $P\\left(f\\mid x_0,\\dots,x_n\\right)$. Zeigen Sie, dass dann
		\\begin{equation*}
			\\left[x_0,\\dots,x_n;h\\right]f=\\frac{1}{h^nn!}\\sum\\limits_{j=0}^n\\binom{n}{j}\\left(-1\\right)^{n-j}f(x_j)
		\\end{equation*} gilt, wobei $\\binom{n}{j}=\\frac{n!}{j!(n-j)!}$ der Binomialkoeffizient ist.\\\\
		\\textit{Hinweis:} Beweisen und benutzen Sie, dass für alle $n\\in\\N$ und für alle $j\\in\\left\\{1,\\dots,n-1\\right\\}$ gilt
		\\begin{equation*}
			\\binom{n-1}{j-1}+\\binom{n-1}{j}=\\binom{n}{j}
		\\end{equation*}
	\\end{taggedblock}
	
	
	
	
\\begin{taggedblock}{GermanSolution}
	Beweise zunächst den Hinweis:
	\\begin{align*}
		\\binom{n-1}{j-1}+\\binom{n-1}{j}&=\\frac{(n-1)\\cdot\\dots\\cdot(n-j+1)}{(j-1)!}+\\frac{(n-1)\\cdot\\dots\\cdot(n-j)}{(j)!}\\\\
		&=\\frac{(n-1)\\cdot\\dots\\cdot\\left(j+(n-j)\\right)}{j!}\\\\
		&=\\frac{n\\cdot(n-1)\\cdot\\dots\\cdot(n-j+1)}{j!}=\\binom{n}{j}.
	\\end{align*}
	Zeige nun, dass $\\left[x_0,\\dots,x_n\\right]f=\\frac{1}{h^nn!}\\sum_{j=0}^n\\binom{n}{j}(-1)^{n-j}f(x_j)$.
	Sei  $x_i:=a+ih, i=0,\\dots,n$\\\\
	$n=0: $ r.S.=$\\frac{1}{h^0\\cdot0!}\\binom{0}{0}(-1)^0f(x_0)=f(x_0)=\\left[x_0\\right]f$\\\\
	$n-1\\rightarrow n$: 
	\\begin{align*}
			\\left[x_0,\\dots,x_n\\right]f&=\\frac{\\left[x_1,\\dots,x_n\\right]f-\\left[x_0,\\dots,x_{n-1}\\right]f}{x_n-x_0}\\\\
			&\\stackrel{I.V.}{=}\\underbrace{\\frac{1}{x_n-x_0}}_{=\\frac{1}{nh}}\\left(\\frac{1}{h^{n-1}(n-1)!}\\sum\\limits_{j=0}^{n-1}\\binom{n-1}{j}(-1)^{n-j-1}f(\\underbrace{x_1+jh}_{=x_0+(j+1)h})\\right.\\\\
			&\\left.-\\frac{1}{h^{n-1}(n-1)!}\\sum\\limits_{j=0}^{n-1}\\binom{n-1}{j}(-1)^{n-j-1}f(x_0+jh)\\right)\\\\
			&=\\frac{1}{h^nn!}\\left(\\sum\\limits_{j=1}^n\\binom{n-1}{j-1}(-1)^{n-j}f(x_0+jh)-\\sum\\limits_{j=0}^{n-1}\\binom{n-1}{j}(-1)^{n-1-j}f(x_0+jh)\\right)\\\\
			&=\\frac{1}{h^nn!}\\left(\\sum\\limits_{j=1}^{n-1}\\left(\\binom{n-1}{j-1}+\\binom{n-1}{j}\\right)(-1)^{n-j}f(x_0+jh)+f(x_0+jh)+(-1)^nf(x_0)\\right)\\\\
			&=\\frac{1}{h^nn!}\\sum\\limits_{j=0}^n\\binom{n}{j}(-1)^{n-j}f(x_0+jh)
	\\end{align*}\\hfill$\\square$
\\end{taggedblock}
`,preview:"d059375e-3c39-453d-90a9-0922197604f1.png"},{uuid:"50197f2f-ba7b-44a1-b93c-3cd1ab3d9c43",title:["Folgen, Konvergenz, Rekursive Folgen"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:5,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganin"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`


\\aufgabe{} 


\\begin{taggedblock}{GermanExercise}
Seien $a>0$ und $x_0>0$ gegeben. Wir betrachten die rekursiv definierte Folge
\\begin{equation*}
	x_{n+1}=\\frac{1}{2}\\Big(x_n+\\frac{a}{x_n}\\Big)\\,,
	\\label{rek}
\\end{equation*}
also $x_1:=\\frac{1}{2}\\Big(x_0+\\frac{a}{x_0}\\Big)$, $x_2:=\\frac{1}{2}\\Big(x_1+\\frac{a}{x_1}\\Big)$, $x_3:=\\frac{1}{2}\\Big(x_2+\\frac{a}{x_2}\\Big)$, usw.
\\begin{itemize}
	\\item[i)] Beweisen Sie, dass $x_n^2-a\\geq0$ f\\"ur alle $n\\in\\N$. Folgern Sie daraus, dass $x_n\\geq\\sqrt{a}$ f\\"ur alle $n\\in\\N$.
	\\item[ii)] Zeigen Sie, dass $x_n-x_{n+1}\\geq0$ f\\"ur alle $n\\in\\N$.
	\\item[iii)] Folgern Sie aus i) und ii), dass die Folge $(x_n)_{n\\in\\N}$ konvergiert. Zeigen Sie, dass gilt: $$\\lim_{n\\rightarrow\\infty}x_n=\\sqrt{a}\\,.$$
\\end{itemize}
\\end{taggedblock}




\\begin{taggedblock}{GermanSolution}
Zunächst: Da $x_0>0$ und $a>0$ ist jedes $x_n=\\frac{1}{2}\\left(x_{n-1}+\\frac{a}{x_{n-1}}\\right)>0$.
\\begin{itemize}
	\\item[i)] Sei $n\\in\\mathbb{N}$ beliebig.
	\\begin{align*}
		x_n^2-a&=\\left(\\frac{1}{2}\\left(x_{n-1}+\\frac{a}{x_{n-1}}\\right)\\right)^2-a
		=\\frac{1}{4}\\left(x_{n-1}^2+2x_{n-1}\\frac{a}{x_{n-1}}+\\frac{a^2}{x_{n-1}^2}\\right)-a\\\\
		&=\\frac{1}{4}\\left(x_{n-1}^2+2a+\\frac{a^2}{x_{n-1}^2}-4a\\right)=\\frac{1}{4}\\left(x_{n-1}^2-2a+\\frac{a^2}{x_{n-1}^2}\\right)\\\\
		&=\\frac{1}{4}\\underbrace{\\left(x_{n-1}-\\frac{a}{x_{n-1}}\\right)^2}_{\\geq0}\\geq0
	\\end{align*}
	Au"serdem gilt 
	\\begin{align*}
		&&x_n^2-a&\\geq0&\\mid+a\\\\
		\\Leftrightarrow &&x_n^2&\\geq a&\\mid\\sqrt{\\ }\\\\
		\\Leftrightarrow &&x_n&\\geq \\pm\\sqrt{a}&\\mid\\text{Da $x_n\\geq0$}\\\\
		\\Leftrightarrow &&x_n&\\geq \\sqrt{a}
	\\end{align*}
	\\item[ii)] Sei $n\\in\\mathbb{N}$ beliebig.
	\\begin{align*}
		x_n-x_{n+1}&=x_n-\\frac{1}{2}\\left(x_n+\\frac{a}{x_n}\\right)=\\frac{1}{2}x_n-\\frac{a}{2x_n}\\\\
		&=\\frac{1}{2x_n}\\left(\\underbrace{x_n^2-a}_{\\geq0}\\right)\\geq0
	\\end{align*}
	\\item[iii)] Die Folge $\\left(x_n\\right)_{n\\in\\mathbb{N}}$ ist nach unten Beschränkt (folgt aus i)) und monoton fallend (folgt aus ii)).\\\\
	Somit folgt mit Satz $3.14$, dass die Folge $\\left(x_n\\right)_{n\\in\\mathbb{N}}$ konvergiert.\\\\
	Sei $x:=\\lim\\limits_{n\\rightarrow\\infty}x_n$. Nutze nun, dass $\\lim\\limits_{n\\rightarrow\\infty}x_n=\\lim\\limits_{n\\rightarrow\\infty}x_{n+1}$.
	\\begin{align*}
		&&x&=\\lim\\limits_{n\\rightarrow\\infty}x_n=\\lim\\limits_{n\\rightarrow\\infty}x_{n+1}\\\\
		&&&=\\lim\\limits_{n\\rightarrow\\infty}\\frac{1}{2}\\left(x_n+\\frac{a}{x_n}\\right)
		=\\frac{1}{2}\\left(x+\\frac{a}{x}\\right)&\\mid-\\frac{x}{2}\\\\
		\\Leftrightarrow&&\\frac{x}{2}&=\\frac{a}{2x}&\\mid\\cdot2x\\\\
		\\Leftrightarrow&&x^2&=a&\\mid\\sqrt{\\ }\\\\
		\\Leftrightarrow&&x&=\\sqrt{a}
	\\end{align*}
	Somit konvergiert $\\left(x_n\\right)_{n\\in\\mathbb{N}}$ gegen $x=\\sqrt{a}$
\\end{itemize}
$\\Rightarrow$Beh.\\hfill$\\square$
\\end{taggedblock}
`,preview:"50197f2f-ba7b-44a1-b93c-3cd1ab3d9c43.png"},{uuid:"dfb95944-54b3-44ac-ac73-b625a8310ec2",title:["Abschätzung","Lagrangeschen Basispolynome","interpolierende Polynome","scharfe Abschätzung"],tags:["Numerik 1","Num1fZ07Au"],languages:["GermanExercise","GermanSolution"],semesterwoche:8,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganin"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`	
	
	\\aufgabe{} 
	
	
	\\begin{taggedblock}{GermanExercise}
		Sei $\\left[a,b\\right]\\subset\\R$ ein Intervall und seien paarweise verschiedene Stützstellen~$x_0,\\dots,x_n\\in\\left[a,b\\right]$ sowie~$f_0,\\dots,f_n,\\eps_0,\\dots,\\eps_n\\in\\R$ gegeben. Weiter sei $p$ das interpolierende Polynom zu den Daten~$\\left(x_i,f_i\\right)$, $i=0,\\dots,n$, mit $\\deg(p)\\leq n$ und sei $q$ das interpolierende Polynom zu den Daten~$\\left(x_i,f_i+\\eps_i\\right)$, $i=0,\\dots,n$ mit $\\deg(q)\\leq n$.
		\\begin{itemize}
			\\item[i)] Wir definieren
			\\begin{equation*}
				L_n:=\\sup\\limits_{x\\in\\left[a,b\\right]}\\sum\\limits_{j=0}^n\\abs{w_j(x)},
			\\end{equation*}
			wobei $w_j$,$j=1,\\dots,n$ die Lagrangeschen Basispolynome bezeichnen. Zeigen Sie, dass für~$\\lvert p-q\\rvert_\\infty:=\\sup_{x\\in\\left[a,b\\right]}\\abs{p(x)-q(x)}$ die Abschätzung 
			\\begin{equation*}
				\\lvert p-q\\rvert_\\infty\\leq L_n\\max\\limits_{0\\leq i\\leq n}\\abs{\\eps_i}
			\\end{equation*} gilt.
		\\item[ii)] Zeigen Sie, dass die obige Abschätzung scharf ist, das heißt: Geben Sie zu beliebigen Werten~$\\left(x_i,f_i\\right)\\in\\left[a,b\\right]\\times\\R$ Zahlen~$\\eps_0,\\dots\\eps_n$ an, so dass in der obigen Abschätzung Gleichheit gilt und nicht alle $\\eps_i$ gleich Null sind.
		\\end{itemize}
	\\end{taggedblock}
	
	
	
	
\\begin{taggedblock}{GermanSolution}
\\begin{itemize}
	\\item[i)] Mit den Lagrangeschen Basispolynomen~$w_0,\\dots,w_n$ gilt
	\\begin{align*}
		p&=\\sum\\limits_{j=0}^nf_jw_j&q&=\\sum\\limits_{j=0}^n\\left(f_j+\\eps_j\\right)w_j\\\\
		\\Rightarrow p-q&=\\sum\\limits_{j=0}^n\\eps_jw_j\\\\
		\\Rightarrow \\lvert p-q\\rvert_\\infty&=\\sup\\limits_{x\\in\\left[a,b\\right]}\\abs{p(x)-q(x)}\\\\
		&=\\sup\\limits_{x\\in\\left[a,b\\right]}\\abs{\\sum\\limits_{j=0}^n\\eps_jw_j(x)}\\\\
		&\\leq\\sup\\limits_{x\\in\\left[a,b\\right]}\\sum\\limits_{j=0}^n\\abs{\\eps_j}\\abs{w_j(x)}\\\\
		&\\leq\\max\\limits_{0\\leq i\\leq}\\abs{e_i}\\sup\\limits_{x\\in\\left[a,b\\right]}\\sum\\limits_{j=0}^n\\abs{w_j(x)}
	\\end{align*}\\hfill$\\square$
\\item[ii)] Sei $y\\in\\left[a,b\\right]$ so, dass $\\sum_{j=0}^n\\abs{w_j(y)}=\\sup_{x\\in\\left[a,b\\right]}\\sum_{j=0}^n\\abs{w_j(x)}$. Dieses existiert, da $\\left[a,b\\right]$ kompakt und die Summe stetig in $x$ ist.\\\\
Für $j=0,\\dots,n$ setze $\\eps_j:=\\left\\{\\begin{tabular}{cl}
	$sign\\left(w_j(y)\\right)$&, falls $w_j(y)\\neq0$\\\\
	1&, falls $w_j(y)=0$
\\end{tabular}\\right.$.\\\\
Dann ist $\\max_{0\\leq i\\leq n}\\abs{\\eps_i}=1$ und
\\begin{align*}
	\\lvert p-q\\rvert_\\infty&\\geq\\abs{\\sum\\limits_{j=0}^n\\eps_jw_j(y)}\\\\
	&=\\abs{\\sum\\limits_{j=0}^n\\abs{w_j(y)}}&\\text{Durch Def. von $eps_j$}\\\\
	&=\\sum\\limits_{j=0}^n\\abs{w_j(y)}\\max\\limits_{0\\leq i\\leq n}\\abs{\\eps_i}\\\\
	&=\\sup\\limits_{x\\in\\left[a,b\\right]}\\sum\\limits_{j=0}^n\\abs{w_j(x)}\\max\\limits_{0\\leq i\\leq n}\\abs{\\eps_i}&\\text{Durch Def. von $y$}\\\\
	&\\geq \\lvert p-q\\rvert_\\infty
\\end{align*}
Somit folgt die Gleichheit.\\hfill$\\square$
\\end{itemize}
\\end{taggedblock}
`,preview:"dfb95944-54b3-44ac-ac73-b625a8310ec2.png"},{uuid:"c33a921b-d0e2-4868-a3a7-e1cd375f4149",title:["Folgen","Konvergenz"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:5,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`


\\aufgabe{} 


\\begin{taggedblock}{GermanExercise}
\\begin{itemize}
    \\item[i)] Sei $(a_n)_{n \\in \\N}$ eine reelle Nullfolge und $(b_n)_{n \\in
        \\N}$ eine komplexe Folge mit $|b_n| \\leq a_n$. Beweisen Sie, dass
        $(b_n)_{n \\in \\N}$ eine Nullfolge ist.
    \\item[ii)] Sei $(a_n)_{n \\in \\N}$ die Folge $a_n = \\frac{1}{p(n)^2}$ mit 
        \\begin{align*} p(n) = \\inf\\{p \\in \\N | p^2 >
        n\\}.\\end{align*} \\\\
        Berechnen Sie mit Hilfe von i):\\\\
        \\begin{align*}\\lim\\limits_{n \\rightarrow
        \\infty}{a_n}.\\end{align*}\\\\
        Begr\\"unden Sie Ihre Antwort.
    \\item[iii)] Sei $(a_n)_{n \\in \\N}$ eine Nullfolge. Au{\\ss}erdem sei $(b_n)_{n \\in
\\N}$ eine Folge mit $b_n \\neq 0 \\quad \\forall n \\in \\N$, f\\"ur die $0$ kein
H\\"aufungspunkt ist. Zeigen Sie, dass \\\\
        \\begin{align*} \\lim\\limits_{n \\rightarrow \\infty}{\\frac{a_n}{b_n}
         = 0}. \\end{align*}
\\end{itemize} 
\\end{taggedblock}




\\begin{taggedblock}{GermanSolution}
\\begin{itemize}
		\\item[i)] Da $a_n\\geq\\abs{b_n}\\geq0$ gilt, folgt somit $\\abs{a_n}=a_n\\geq0$ für alle $n\\in\\mathbb{N}$.\\\\
		Sei $\\eps>0$ beliebig. Da $a_n$ gegen $0$ konvergiert, existiert somit ein~$N\\in\\mathbb{N}$, sodass für alle $n\\in\\mathbb{N}$ mit $n>N$ gilt:\\\\
		$\\eps>\\abs{a_n-0}=a_n\\geq\\abs{b_n}=\\abs{b_n-0}$.\\\\
		Somit gilt auch $\\eps>\\abs{b_n-0}$, weshalb auch $b_n$ eine Nullfolge ist.
	
		\\item[ii)] Für $p(n)^2$ gilt für alle $n\\in\\mathbb{N}$ nach Definition: $p(n)^2>n$.\\\\
		Somit folgt: $a_n=\\frac{1}{p(n)^2}<\\frac{1}{n}$.\\\\
		Zudem wurde in der Vorlesung gezeigt, dass die Folge $\\left(b_n\\right)_{n\\in\\mathbb{N}}, b_n=\\frac{1}{n}$ eine Nullfolge ist.\\\\
		Somit haben wir eine Folge~$\\left(a_n\\right)_{n\\in\\mathbb{N}}$ und eine Nullfolge~$\\left(\\frac{1}{b_n}\\right)_{n\\in\\mathbb{N}}$ für die gilt:
		\\begin{equation*}
			a_n=\\abs{a_n}< \\frac{1}{b_n}\\ \\forall n\\in\\mathbb{N}.
		\\end{equation*}
		Aus Teilaufgabe i folgt nun, dass~$\\left(a_n\\right)_{n\\in\\mathbb{N}}$ eine Nullfolge ist.
		
		\\item[iii)] Da die Folge~$\\left(b_n\\right)_{n\\in\\mathbb{N}}$ keinen Häufungspunkt in 0 hat, existiert ein~$\\bar{\\eps}>0$ und ein~$\\bar{N}\\in\\mathbb{N}$, sodass für alle~$n\\in\\mathbb{N},\\ n>\\bar{N}$ gilt:~$\\abs{b_n}>\\bar{\\eps}$.\\\\
		Somit folgt für alle $n>\\bar{N}$:~$\\frac{1}{\\abs{b_n}}<\\frac{1}{\\bar{\\eps}}$.\\\\
		Da $\\left(a_n\\right)_{n\\in\\mathbb{N}}$ eine Nullfolge ist, existiert für alle~$\\eps$ ein~$N\\in\\mathbb{N}$ mit~$\\abs{a_n}<\\eps$ für alle~$n>N$.\\\\
		Somit existieren für alle~$\\eps>0$ ein $N\\in\\mathbb{N}$, sodass für alle $n\\in\\mathbb{N},\\ n>N$ gilt:
		\\begin{equation*}
			\\abs{\\frac{a_n}{b_n}}<\\frac{\\eps\\cdot\\bar{\\eps}}{\\bar{\\eps}}
		\\end{equation*}
	Damit ist $\\lim\\limits_{n\\rightarrow\\infty}\\frac{a_n}{b_n}=0$.
	\\end{itemize}
\\end{taggedblock}
`,preview:"c33a921b-d0e2-4868-a3a7-e1cd375f4149.png"},{uuid:"dd3cfae5-35eb-4ca3-bec0-1423d1235474",title:["Folgen","Konvergenz","Häufungspunkte"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:5,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganin"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`


\\aufgabe{} 


\\begin{taggedblock}{GermanExercise}
\\begin{itemize}
	\\item[i)] Sei $z\\in\\C$. Zeigen Sie: Konvergiert die Folge $(z^n)_{n\\in\\N}$ gegen ein $w\\in\\C$, dann gilt $w=zw$.
	\\item[ii)] Beweisen Sie, dass eine beschr\\"ankte Folge, die nicht konvergiert, mehr als einen H\\"aufungspunkt besitzt.
\\end{itemize}
\\end{taggedblock}




\\begin{taggedblock}{GermanSolution}
\\begin{itemize}
	\\item[i)] Betrachte hier die folgenden Fälle:
	\\begin{itemize}
		\\item[$\\bullet$] $\\abs{z}>1$: Nehme an $\\left(z^n\\right)_{n\\in\\N}$ wäre konvergent gegen ein $a\\in\\C$. Dann existiert zu jedem $\\eps>0$ ein $N\\in\\N$ so dass
		\\begin{equation*}
			d\\left(z^n,a\\right)<\\varepsilon\\qquad\\text{für alle }n>N.
		\\end{equation*}
		Nach der Dreiecksungleichung folgt
		\\begin{equation*}
			d\\left(z^{n+1},z^n\\right)<d\\left(z^{n+1},a\\right)+d\\left(a,z^n\\right)<2\\eps
		\\end{equation*}
		Andererseits ist 
		\\begin{equation*}
			d\\left(z^{n+1},z^n\\right)=\\abs{z^{n+1}-z^n}=\\abs{z-1}\\abs{z}^n.
		\\end{equation*}
		Nun ist $\\abs{z}^n>1$ und wegen der Dreiecksungleichung
		\\begin{equation*}
			\\abs{z}=\\abs{z-1+1}\\leq\\abs{z-1}+1.
		\\end{equation*}
		Damit folgt $\\abs{z-1}\\geq\\abs{z}-1$ und somit
		\\begin{equation*}
			d\\left(z^{n+1},z^n\\right)\\geq\\abs{z-1}\\geq\\abs{z}-1>0.
		\\end{equation*}
		Wählt man nun $\\eps>0$ klein genug, so erhält man einen Widerspruch, weshalb die Folge divergieren muss.
		\\item[$\\bullet$] $\\abs{z}<1$: Dann ist $\\left(z^n\\right)_{n\\in\\N}$ eine Nullfolge und somit $\\omega=0=\\omega z$
		\\item[$\\bullet$] $z=1$: Dann konvergiert $\\left(z^n\\right)_{n\\in\\N}$ gegen $\\omega=1=1\\cdot1=\\omega z$
		\\item[$\\bullet$] $\\abs{z}=1\\land z\\neq1$: Dann divergiert die Folge $\\left(z^n\\right)_{n\\in\\N}$ unbestimmt.
	\\end{itemize}
	
	\\item[ii)] Sei $\\left(a_n\\right)_{n\\in\\N}$ eine nicht konvergente, beschränkte Folge.\\\\
	Dann folgt nach Bolzano-Weierstra"s, dass $a_n$ einen Häufungspunkt $a$ besitzt.\\\\
	Da $a_n$ nicht konvergent ist, existiert ein $\\eps>0$, sodass unendlich viele Glieder nicht im $\\eps$-Ball um $a$ liegen.\\\\
	Betrachte diese Glieder als Teilfolge $\\left(a_{n_k}\\right)_{k\\in\\N}$. Da diese Teilfolge ebenfalls beschränkt ist, folgt wieder nach Bolzano-Weierstra"s, dass diese Teilfolge einen Häufungspunkt $a'$ besitzt. \\\\
	Da für alle $k\\in\\N$ gilt: $\\abs{a_{n_k}-a}>\\eps$ folgt $a\\neq a'$.\\\\
	Somit existieren für diese Folge mindestens zwei Häufungspunkte.
\\end{itemize}
$\\Rightarrow$Beh.\\hfill$\\square$
\\end{taggedblock}
`,preview:"dd3cfae5-35eb-4ca3-bec0-1423d1235474.png"},{uuid:"9056de5f-d87b-4b13-9526-fa686ecb0142",title:["Bounded Maps","Banach Space"],tags:["Funktionalanalysis"],languages:["EnglishExercise","GermanSolution"],semesterwoche:2,solution:"droptag",author:["Prof. Dr. Helmut Abels"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`


\\aufgabe{} 


\\begin{taggedblock}{EnglishExercise}
Let $X$ be a set and $(Y,|\\cdot|_Y)$ a Banach space. For every map
    $f: X \\rightarrow Y$, define
    \\[
    \\abs{f}_\\infty := \\sup_{x \\in X} |f(x)|_Y \\in [0,\\infty] \\,.
    \\]
    Then $\\abs{\\cdot}_\\infty$ is called \\emph{sup norm} (or uniform norm, in German \\emph{Supremumsnorm}). Let
    $$\\ell^\\infty(X;Y) = \\{ f: X \\rightarrow Y \\mid \\abs{f}_\\infty <
    \\infty \\}$$ be the space of bounded $Y$-valued functions on $X$.
    \\begin{itemize}
    \\item[i)] Show that $(\\ell^\\infty(X;Y), \\abs{\\cdot}_\\infty)$
				is a Banach space.
        {\\vspace{0.1cm}\\par\\noindent\\textit{Hint}:}
        	Use the completeness of $Y$ to obtain a candidate $f$ for the
        	limit of a Cauchy sequence $f_n$. Then estimate
        	 $|f_n(x) - f_m(x)|$ and take the limit $n \\rightarrow \\infty$ to 
        	 gain information about $f$.

    \\item[ii)] Assume now that $X$ is a topological space and let 
 \\[\\mathcal{C}_b(X;Y)
        := \\{ f \\in \\ell^\\infty(X;Y) \\mid f \\textrm{ is continuous } \\} \\]
		be the space of continuous bounded $Y$-valued functions.
		Show that $\\mathcal{C}_b(X;Y) \\subset \\ell^\\infty(X;Y)$
		is a (topologically) closed linear subspace. What does
		this tell you about the denseness of the continuous functions
		in the bounded functions?
%       {\\vspace{0.1cm}\\par\\noindent\\textit{Hint}:}
%            Remember the analysis 1 lecture, in particular the $\\frac{\\eps}{3}$-trick.
    \\end{itemize}
\\end{taggedblock}




\\begin{taggedblock}{GermanSolution}
\\textit{i.)} Indem man die Dreiecksungleichung für $|\\cdot|_Y$
    verwendet, sieht man sofort, dass $\\ell^\\infty(X;Y)$ ein
    Vektorraum ist und dass $\\abs{\\cdot}_\\infty$ eine Norm ist.


    Es bleibt die Vollständigkeit zu zeigen. Sei dazu $(f_n)$ eine
    Cauchy-Folge in $\\ell^\\infty(X;Y)$. Dann gilt für jedes $x \\in X$
    die Abschätzung
    \\[
    |f_n(x) - f_m(x)|_Y
    \\leq \\sup_{y \\in X} |f_n(y) - f_m(y)|_Y
    = \\abs{f_n - f_m}_\\infty \\,.
    \\]
    Damit erhält man unmittelbar, dass für jedes $x \\in X$ die Folge
    $(f_n(x))$ eine Cauchy Folge in $Y$ ist. Da $Y$ nach
    Voraussetzung vollständig ist, existiert der Grenzwert $f(x) :=
    \\lim_{n \\rightarrow \\infty} f_n(x) \\in Y$. Auf diese Weise
    erhalten wir eine Funktion $f: X \\rightarrow Y$. Es bleibt zu
    zeigen, dass $f \\in \\ell^\\infty(X;Y)$ und dass $f_n \\rightarrow
    f$ bzgl. $\\abs{\\cdot}_\\infty$. Sei dazu $\\eps > 0$. Da
    $(f_n)$ eine Cauchy Folge ist, gibt es $N \\in \\mathbb{N}$, sodass
    für alle $n,m \\geq N$ folgendes gilt:
    \\[
    |f_n(x) - f_m(x)|_Y \\leq \\abs{f_n - f_m}_\\infty < \\eps
    \\qquad \\forall x \\in X \\,.
    \\]
    Indem wir links den Grenzwert $n \\rightarrow \\infty$ bilden,
    erhalten wir, dass für alle $m \\geq N$ folgendes gilt:
    \\[
    |f(x) - f_m(x)|_Y \\leq \\eps
    \\qquad \\forall x \\in X \\,.
    \\tag{$*$}
    \\]
    Wähle ein $m \\geq N$, dann folgt
    \\[
    |f(x)| \\leq |f(x) - f_m(x)| + |f_m(x)|
    \\leq \\eps + \\abs{f_m}_\\infty
    \\qquad \\forall x \\in X \\,.
    \\]
    Da die rechte Seite unabhängig von $x$ ist, folgt
    \\[
    \\abs{f}_\\infty = \\sup_{x \\in X}|f(x)|
    \\leq \\eps + \\abs{f_m}_\\infty < \\infty \\,.
    \\]
    Also gilt $f \\in \\ell^\\infty(X;Y)$. Andererseits folgt aus ($*$)
    auch sofort, dass $f_n \\rightarrow f$ bzgl. $\\abs{\\cdot}_\\infty$
    indem wir wieder Supremum über alle $x \\in X$ bilden.


    \\vspace{0.3cm}
    \\noindent
    \\textit{ii.)} Sei $(f_n)$ eine Folge mit $f_n \\in \\mathcal{C}_b(X;Y)$
    und $f_n \\rightarrow f \\in \\ell^\\infty(X;Y)$ bzgl.
    $\\abs{\\cdot}_\\infty$. Wir müssen zeigen, dass $f \\in
    \\mathcal{C}_b(X;Y)$ und dazu benutzen wir den $\\eps/3$-Trick. Sei
    $U \\subset Y$ offen, dann müssen wir zeigen, dass $f^{-1}(U)
    \\subset X$ offen ist. Sei dazu $x_0 \\in f^{-1}(U)$. Da $U \\subset
    Y$ offen ist, finden wir $\\eps > 0$ mit $B_\\eps(f(x_0))
    \\subset U$. Wir konstruieren im Folgenden eine offene Umgebung $V
    \\subset X$ von $x$ mit $f(V) \\subset B_\\eps(f(x_0)) \\subset
    U$. Dann gilt $V \\subset f^{-1}(U)$ und da $x_0 \\in f^{-1}(U)$
    beliebig war, folgt dass $f^{-1}(U) \\subset X$ offen ist. Um das
    gewünschte $V$ zu konstruieren, nutzen wir aus, dass für jedes $x
    \\in X$ und jedes $n \\in \\mathbb{N}$ nach der Dreiecksungleichung
    gilt, dass
    \\[
    |f(x) - f(x_0)|_Y
    \\leq |f(x) - f_n(x)|_Y + |f_n(x) - f_n(x_0)|_Y 
    + |f_n(x_0) - f(x_0)|_Y \\,.
    \\]
    Da $f_n \\rightarrow f$ bzgl. $\\abs{\\cdot}_\\infty$, finden wir $N
    \\in \\mathbb{N}$, sodass für alle $n \\geq N$ gilt:
    \\[
    |f(x) - f_n(x)|_Y \\leq \\abs{f-f_n}_\\infty < \\frac{\\eps}{3}
    \\quad \\forall x \\in X \\,.
    \\tag{$*$}
    \\]
    Wähle solch ein $n$ und setze $V :=
    f_n^{-1}(B_{\\eps/3}(f_n(x_0)))$. Da $f_n$ stetig ist, ist $V
    \\subset X$ eine offene Umgebung von $x_0$. Schließlich gilt
    \\begin{align*}
        \\forall x \\in V: \\quad
        |f(x) - f(x_0)|_Y
        &\\leq  \\underbrace{|f(x) - f_n(x)|_Y}_{< \\eps/3 \\textrm{
            by } (*)} 
        +  \\underbrace{|f_n(x) - f_n(x_0)|_Y}_{< \\eps/3 \\textrm{
            by choice of } V} 
        + \\underbrace{|f_n(x_0) - f(x_0)|_Y}_{< \\eps/3 \\textrm{
            by } (*)} 
        < \\eps \\,.
    \\end{align*}
    Also folgt $f(V) \\subset B_\\eps(f(x_0))$ und wir sind fertig.


    Bezüglich der Dichtheit folgt aus der Abgeschlossenheit von
    $\\mathcal{C}_b(X;Y)$ in $\\ell^\\infty(X;Y)$, dass $\\mathcal{C}_b(X;Y)
    \\subset \\ell^\\infty(X;Y)$ dicht ist genau dann, wenn
    $\\mathcal{C}_b(X;Y) = \\ell^\\infty(X;Y)$.
\\end{taggedblock}
`,preview:"9056de5f-d87b-4b13-9526-fa686ecb0142.png"},{uuid:"9f1d6591-3bd4-4e52-9fa3-7a1ad3c70a4e",title:["Basispolynome","Interpolationspolynom","Newtonsche Darstellung","Rekursionsformel","Aitken","Neville"],tags:["Numerik 1","Num1fZ07Au"],languages:["GermanExercise","GermanSolution"],semesterwoche:8,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganin"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`	
	
	
	\\aufgabe{} 
	
	
\\begin{taggedblock}{GermanExercise}
	Gegeben seien die Werte \\begin{tabular}{c|cccc}
		$x_i$&1&2&4&8\\\\\\hline
		$f_i$&7&1&3&0
	\\end{tabular}
\\begin{itemize}
	\\item[i)]Geben Sie die Lagrangeschen Basisplynome $w_j,j=0,\\dots3$ an und berechnen Sie daraus das interpolierende Polynom $p$ mit~$\\deg(p)\\leq3$ zu den Punkten~$\\left(x_i,f_i\\right),i=0,\\dots,3$.
	\\item[ii)]Bestimmen Sie de Koeffizienten $d_k,k=0,\\dots,3$ der Newtonschen Darstellung des interpolierenden Polynoms
	\\begin{equation*}
		p(x)=d_0+d_1\\left(x-x_0\\right)+d_2\\left(x-x_0\\right)\\left(x-x_1\\right)+d_3\\left(x-x_0\\right)\\left(x-x_1\\right)\\left(x-x_2\\right).
	\\end{equation*}
	\\item[iii)] Werten Sie mit Hilfe der Rekursionsformel von Aitken und Neville das interpolierende Polynom $p$ an der Stelle $x=5$ aus. Geben Sie dabei alle Zwischenergebnisse des Rechenschemas an.
\\end{itemize}
\\end{taggedblock}
	
		
\\begin{taggedblock}{GermanSolution}
	Gegeben seien die Werte \\begin{tabular}{c|cccc}
		$x_i$&1&2&4&8\\\\\\hline
		$f_i$&7&1&3&0
	\\end{tabular}
\\begin{itemize}
	\\item[i)]
	\\begin{align*}
		w_0(x)&=\\frac{\\left(x-x_1\\right)\\left(x-x_2\\right)\\left(x-x_3\\right)}{\\left(x_0-x_1\\right)\\left(x_0-x_2\\right)\\left(x_0-x_3\\right)}=
		\\frac{\\left(x-x_1\\right)\\left(x-x_2\\right)\\left(x-x_3\\right)}{(-1)\\cdot(-3)\\cdot(-7)}\\\\
		&=-\\frac{1}{21}\\left(x-2\\right)\\left(x-4\\right)\\left(x-8\\right)
		=-\\frac{1}{21}\\left(x^3-14x^2+56x-64\\right)\\\\
		w_1(x)&=\\frac{\\left(x-x_0\\right)\\left(x-x_2\\right)\\left(x-x_3\\right)}{\\left(x_1-x_0\\right)\\left(x_1-x_2\\right)\\left(x_1-x_3\\right)}=
		\\frac{\\left(x-x_0\\right)\\left(x-x_2\\right)\\left(x-x_3\\right)}{1\\cdot(-2)\\cdot(-6)}\\\\
		&=\\frac{1}{12}\\left(x-1\\right)\\left(x-4\\right)\\left(x-8\\right)
		=\\frac{1}{12}\\left(x^3-13x^2+44x-32\\right)\\\\
		w_2(x)&=\\frac{\\left(x-x_0\\right)\\left(x-x_1\\right)\\left(x-x_3\\right)}{\\left(x_2-x_0\\right)\\left(x_2-x_1\\right)\\left(x_2-x_3\\right)}
		=\\frac{\\left(x-x_0\\right)\\left(x-x_1\\right)\\left(x-x_3\\right)}{3\\cdot2\\cdot(-4)}\\\\
		&=-\\frac{1}{24}\\left(x-1\\right)\\left(x-2\\right)\\left(x-8\\right)
		=-\\frac{1}{24}\\left(x^3-11x^2+26x-16\\right)\\\\
		w_3(x)&=\\frac{\\left(x-x_0\\right)\\left(x-x_1\\right)\\left(x-x_2\\right)}{\\left(x_3-x_0\\right)\\left(x_3-x_1\\right)\\left(x_3-x_2\\right)}
		=\\frac{\\left(x-x_0\\right)\\left(x-x_1\\right)\\left(x-x_2\\right)}{7\\cdot6\\cdot4}\\\\
		&=\\frac{1}{168}\\left(x-1\\right)\\left(x-2\\right)\\left(x-4\\right)
		=\\frac{1}{168}\\left(x^3-7x^2+14x-8\\right)\\\\
		\\Rightarrow p(x)&=7\\cdot w_0(x)+w_1(x)+3\\cdot w_2(x)+0\\cdot w_3(x)\\\\
		&=-\\frac{3}{8}x^3+\\frac{119}{24}x^2-\\frac{73}{4}x+\\frac{62}{3}
	\\end{align*}
	\\item[ii)]
	\\begin{equation*}
		p(x)=d_0+d_1\\left(x-x_0\\right)+d_2\\left(x-x_0\\right)\\left(x-x_1\\right)+d_3\\left(x-x_0\\right)\\left(x-x_1\\right)\\left(x-x_2\\right)
	\\end{equation*}
	Direkt:
	\\begin{align*}
		p(x_0)&=d_0\\stackrel{!}{=}7\\\\
		&\\Rightarrow d_0=7\\\\
		p(x_1)&=d_0+d_1\\left(x_1-x_0\\right)=7+d_1\\stackrel{!}{=}1\\\\
		&\\Rightarrow d_1=-6\\\\
		p(x_2)&=d_0+d_1\\left(x_2-x_0\\right)+d_2\\left(x_2-x_0\\right)\\left(x_2-x_1\\right)=7-6\\cdot3+d_2\\cdot3\\cdot2\\stackrel{!}{=}3\\\\
		&\\Rightarrow d_2=\\frac{7}{3}\\\\
		p(x_3)&=d_0+d_1\\left(x_3-x_0\\right)+d_2\\left(x_3-x_0\\right)\\left(x_3-x_1\\right)+d_3\\left(x_3-x_0\\right)\\left(x_3-x_1\\right)\\left(x_3-x_2\\right)\\\\
		&=7-6\\cdot7+\\frac{7}{3}\\cdot7\\cdot6+d_3\\cdot7\\cdot6\\cdot4=63+168d_3\\stackrel{!}{=}0\\\\
		&\\Rightarrow d_3=-\\frac{3}{8}
	\\end{align*}
	Oder Besser mit Dreiecksschema: $d_k=\\left[x_0,\\dots,x_k\\right]f$,	$\\left[x_i\\right]f=f_i$ für $i=0\\dots,3$ \\\\
	und $\\left[x_{i_0},x_{i_1},\\dots,x_{i_k}\\right]f=\\frac{\\left[x_{i_1},\\dots,x_{i_k}\\right]f-\\left[x_{i_0},\\dots,x_{i_{k-1}}\\right]f}{x_{i_k}-x_{i_0}}$
	\\begin{center}
		\\begin{tikzpicture}
		\\node(00) at (0,-0) {1};
		\\node(01) at (0,-1) {2};
		\\node(02) at (0,-2) {4};
		\\node(03) at (0,-3) {8};
		
		\\node(A)[inner sep=0pt] at (0.5,0.5) {};
		\\node(B)[inner sep=0pt] at (0.5,-3.5) {};
		
		\\node(10) at (1,-0) {7};
		\\node(11) at (1,-1) {1};
		\\node(12) at (1,-2) {3};
		\\node(13) at (1,-3) {0};
		
		\\node(21) at (3,-1) {$\\frac{1-7}{2-1}=-6$};
		\\node(22) at (3,-2) {$\\frac{3-1}{4-2}=1$};
		\\node(23) at (3,-3) {$\\frac{0-3}{8-4}=-\\frac{3}{4}$};
		
		\\node(32) at (6,-2) {$\\frac{1+6}{4-1}=\\frac{7}{3}$};
		\\node(33) at (6,-3) {$\\frac{-\\frac{3}{4}-1}{8-2}=-\\frac{7}{24}$};
		
		\\node(43) at (9,-3) {$\\frac{-\\frac{7}{24}-\\frac{7}{3}}{8-1}=-\\frac{3}{8}$};
		
		\\path [-] (A) edge (B);
		
		\\path [-] (10) edge (21);
		\\path [-] (11) edge (21);
		\\path [-] (11) edge (22);
		\\path [-] (12) edge (22);
		\\path [-] (12) edge (23);
		\\path [-] (13) edge (23);
		
		\\path [-] (21) edge (32);
		\\path [-] (22) edge (32);
		\\path [-] (22) edge (33);
		\\path [-] (23) edge (33);
		
		\\path [-] (32) edge (43);
		\\path [-] (33) edge (43);
	\\end{tikzpicture}
	\\end{center}
	$\\Rightarrow d_0=7,d_1=-6,d_2=\\frac{7}{3},d_3=-\\frac{3}{8}$
	\\item[iii)] Sei $x=5$ und nutze Neville-Aitken:
	\\begin{align*}
		p_{ii}&=f_i, i=0,\\dots,3\\\\
		p_{i_0i_1\\dots i_{k-1}i_k}&=p_{i_1\\dots i_k}+\\frac{x_{i_k}-x}{x_{i_k}-x_{i_0}}\\left(p_{i_0\\dots i_{k-1}}-p_{i_1\\dots i_k}\\right)
	\\end{align*}
	\\begin{center}
		\\begin{tikzpicture}
			\\node(00) at (0,-0) {1};
			\\node(01) at (0,-1) {2};
			\\node(02) at (0,-2) {4};
			\\node(03) at (0,-3) {8};
			
			\\node(A)[inner sep=0pt] at (0.5,0.5) {};
			\\node(B)[inner sep=0pt] at (0.5,-3.5) {};
			
			\\node(10) at (1,-0) {7};
			\\node(11) at (1,-1) {1};
			\\node(12) at (1,-2) {3};
			\\node(13) at (1,-3) {0};
			
			\\node(21) at (4,-1) {$1+\\frac{2-5}{2-1}(7-1)=-17$};
			\\node(22) at (4,-2) {$3+\\frac{4-5}{4-2}(1-3)=4$};
			\\node(23) at (4,-3) {$0+\\frac{8-5}{8-4}(3-0)=\\frac{9}{4}$};
			
			\\node(32) at (9,-2) {$4+\\frac{4-5}{4-1}(-17-4)=11$};
			\\node(33) at (9,-3) {$\\frac{9}{4}+\\frac{8-5}{8-2}(4-\\frac{9}{4})=\\frac{25}{8}$};
			
			\\node(43) at (14,-3) {$\\frac{25}{8}+\\frac{8-5}{8-1}(11-\\frac{25}{8})=\\frac{13}{2}$};
			
			\\path [-] (A) edge (B);
			
			\\path [-] (10) edge (21);
			\\path [-] (11) edge (21);
			\\path [-] (11) edge (22);
			\\path [-] (12) edge (22);
			\\path [-] (12) edge (23);
			\\path [-] (13) edge (23);
			
			\\path [-] (21) edge (32);
			\\path [-] (22) edge (32);
			\\path [-] (22) edge (33);
			\\path [-] (23) edge (33);
			
			\\path [-] (32) edge (43);
			\\path [-] (33) edge (43);
		\\end{tikzpicture}
	\\end{center}
 $\\Rightarrow$Beh.\\hfill$\\square$
\\end{itemize}
\\end{taggedblock}
`,preview:"9f1d6591-3bd4-4e52-9fa3-7a1ad3c70a4e.png"},{uuid:"c2357c38-5d98-407d-a0ca-f0505a6c1bff",title:["Folgen","Konvergenz"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:"5",solution:"droptag",author:["Prof. Dr. Felix Finster, Dr. Claudio Paganin"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`


\\aufgabe{} 


\\begin{taggedblock}{GermanExercise}
Untersuchen Sie die Folgen auf Konvergenz, und bestimmen Sie gegebenenfalls den Grenzwert:
\\begin{itemize}
	\\item[i)] $$\\left(\\frac{3n^7-4n^2+11}{2n^6-3n+2}\\right)_{n\\in\\N}\\:;$$
	\\item[ii)] $$\\left(\\frac{2n^5-12n^3+3}{3n^5-8n^2+6}\\right)_{n\\in\\N}\\:;$$
	\\item[iii)] $$\\left(\\frac{n^k}{n!}\\right)_{n\\in\\N}\\:,$$
	wobei $k$ eine feste nat\\"urliche Zahl sei.
\\end{itemize}
\\end{taggedblock}




\\begin{taggedblock}{GermanSolution}
    Nutze, dass $\\lim\\limits_{n\\rightarrow\\infty}xn^{-m}=0$ für festes $x\\in\\mathbb{R}$ und $m\\in\\mathbb{N}$ beliebig.
	\\begin{itemize}
		\\item[i)]
            \\begin{align*}
			\\lim\\limits_{n\\rightarrow\\infty}\\left(\\frac{3n^7-4n^2+11}{2n^6-3n+2}\\right)&=
			\\lim\\limits_{n\\rightarrow\\infty}\\left(\\frac{n^6\\left(3n-4n^{-4}+11n^{-6}\\right)}{n^6\\left(2-3n^{-5}+2n^{-6}\\right)}\\right)\\\\
			&=\\lim\\limits_{n\\rightarrow\\infty}3n=\\infty
		\\end{align*}
		
		\\item[ii)] \\begin{align*}
			\\lim\\limits_{n\\rightarrow\\infty}\\left(\\frac{2n^5-12n^3+3}{3n^5-8n^2+6}\\right)&=
			\\lim\\limits_{n\\rightarrow\\infty}\\left(\\frac{n^5\\left(2-12n^{-2}+3n^{-5}\\right)}{n^5\\left(3-8n^{-3}+6n^{-5}\\right)}\\right)\\\\
			&=\\lim\\limits_{n\\rightarrow\\infty}\\left(\\frac{2}{3}\\right)=\\frac{2}{3}
		\\end{align*}
	
		\\item[iii)] Betrachte zunächst $\\frac{1}{n!}$ für $n>k$
		\\begin{align*}
			n!&=\\prod\\limits_{i=1}^ni=\\left(\\prod\\limits_{i=1}^{n-k}i\\right)\\left(\\prod\\limits_{i=n-k+1}^ni\\right)\\\\
			&=\\left(\\prod\\limits_{i=1}^{n-k}i\\right)\\left(\\prod\\limits_{i=n+1}^{n+k}\\left(i-k\\right)\\right)
			=\\left(\\prod\\limits_{i=1}^{n-k}i\\right)\\left(\\prod\\limits_{i=1}^{k}\\left(n+i-k\\right)\\right)\\\\
			&=\\left(\\prod\\limits_{i=1}^{k}\\left(n+i-k\\right)\\right)\\left(n-k\\right)!\\\\
			\\Rightarrow \\frac{1}{n!}&=\\frac{1}{\\left(\\prod\\limits_{i=1}^{k}\\left(n+i-k\\right)\\right)}\\frac{1}{\\left(n-k\\right)!}
		\\end{align*}
	Damit Folgt, mit $n^k=\\prod\\limits_{i=1}^{k}n$:
	\\begin{align*}
		\\lim\\limits_{n\\rightarrow\\infty}\\frac{n^k}{n!}&=\\lim\\limits_{n\\rightarrow\\infty}\\frac{\\prod\\limits_{i=1}^{k}n}{\\left(\\prod\\limits_{i=1}^{k}\\left(n+i-k\\right)\\right)\\left(n-k\\right)!}\\\\
		&=\\lim\\limits_{n\\rightarrow\\infty}\\left(\\left(\\prod\\limits_{i=1}^{k}\\underbrace{\\frac{n}{n+i-k}}_{\\rightarrow1}\\right)\\underbrace{\\frac{1}{\\left(n-k\\right)!}}_{\\rightarrow0}\\right)\\\\
		&=0
	\\end{align*}
	\\end{itemize}
$\\Rightarrow$Beh.\\hfill$\\square$
\\end{taggedblock}
`,preview:"c2357c38-5d98-407d-a0ca-f0505a6c1bff.png"}],ro={templates:Xc,headers:Vc,exercises:Kc};var an=(t=>(t[t.All=0]="All",t[t.Exercise=1]="Exercise",t[t.Template=2]="Template",t[t.Header=3]="Header",t))(an||{});class Gc{}class Zc{}class Jc{}function Ea(t){var e=[];for(var n of t)for(var i of ro.exercises)if((!n.uuid||i.uuid==n.uuid)&&(!n.author||i.author==n.author)){var r=new Gc;r.uuid=i.uuid,r.author=i.author,r.title=i.title,r.headers=i.headers,r.license=i.license,r.content=i.content,r.preview=i.preview,e.push(r)}return e}function Qc(t){var e=[];for(var n of t)for(var i of ro.headers)if((!n.uuid||i.uuid==n.uuid)&&(!n.author||i.author==n.author)){var r=new Zc;r.uuid=i.uuid,r.author=i.author,r.content=i.content,e.push(r)}return e}function Sa(t){var e=[];for(var n of t)for(var i of ro.templates)if(!n.uuid||i.uuid==n.uuid){let r=new Jc;r.uuid=i.uuid,r.title=i.title,r.author=i.author,r.fields=i.fields,r.license=i.license,r.content=i.content,e.push(r)}return e}function tu(t){var e=[];for(var n of t.itemSelection)e.push({itemType:an.Exercise,uuid:n.uuid});var i=Ea(e),r=i.map(w=>w.content).join(`
`);let o=[];for(var s of i)for(var a of s.headers)o.push(a);o=Array.from(new Set(o));let l=[];for(let w of o)l.push({itemType:an.Header,uuid:w});var f=Qc(l),c=f.map(w=>w.content).join(`
`),h=[{itemType:an.Template,uuid:t.template.uuid}];let g=Sa(h)[0],m=g.content;return Object.entries(g.fields).forEach(([w,E],U)=>{if(E[0]=="EXERCISES"){let W="((* "+E[0]+" *))";m=m.replace(W,r)}else if(E[0]=="HEADERS"){let W="((* "+E[0]+" *))";m=m.replace(W,c)}else{let W="((* "+E[0]+" *))",M="";t.template.fields.has(E[0])&&(M=t.template.fields.get(E[0])),m=m.replace(W,M)}}),m}var oo=(t=>(t.PDF="PDF",t.Source="SOURCE",t))(oo||{});class eu{constructor(e,n){this.exercises=e,this.tags=n}}function nu(t){const e=[{itemType:an.Exercise}];let n=Ea(e),i=[];return new eu(n,i)}function iu(t){const e=[{itemType:an.Template}];return Sa(e)}async function rs(t){let e=tu(t);if(t.docType=="PDF")return Yc(e);if(t.docType=="SOURCE")return e;throw Error("Wrong configuration")}class ru{}class ou{}class su{constructor(){this.docType=oo.PDF}}const Hi=Hc({id:"selectExercises",state:()=>({items:[],templateUuid:"",templateStr:[]}),actions:{set(t){t&&(this.items.length=0,this.items.push(...t))},add(t){t&&this.items.push(t)},setTemplateOptions(t){if(t){this.templateStr.length=0;for(let[e,n]of t)n&&this.templateStr.push([e,n])}},generateConfig(){let t=new ru;t.uuid=this.templateUuid,t.fields=new Map(this.templateStr);let e=[];for(var n of this.items){let r=new ou;r.uuid=n.uuid,r.subElements=[],e.push(r)}let i=new su;return i.template=t,i.itemSelection=e,console.log(i),i}}});/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function os(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function oe(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?os(Object(n),!0).forEach(function(i){au(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):os(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function li(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?li=function(e){return typeof e}:li=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},li(t)}function au(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function he(){return he=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},he.apply(this,arguments)}function lu(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function fu(t,e){if(t==null)return{};var n=lu(t,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var cu="1.14.0";function de(t){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(t)}var pe=de(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Wn=de(/Edge/i),ss=de(/firefox/i),qn=de(/safari/i)&&!de(/chrome/i)&&!de(/android/i),Ca=de(/iP(ad|od|hone)/i),uu=de(/chrome/i)&&de(/android/i),Ta={capture:!1,passive:!1};function et(t,e,n){t.addEventListener(e,n,!pe&&Ta)}function J(t,e,n){t.removeEventListener(e,n,!pe&&Ta)}function yi(t,e){if(e){if(e[0]===">"&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch{return!1}return!1}}function du(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function te(t,e,n,i){if(t){n=n||document;do{if(e!=null&&(e[0]===">"?t.parentNode===n&&yi(t,e):yi(t,e))||i&&t===n)return t;if(t===n)break}while(t=du(t))}return null}var as=/\s+/g;function Pt(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(as," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(as," ")}}function O(t,e,n){var i=t&&t.style;if(i){if(n===void 0)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),e===void 0?n:n[e];!(e in i)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),i[e]=n+(typeof n=="string"?"":"px")}}function ln(t,e){var n="";if(typeof t=="string")n=t;else do{var i=O(t,"transform");i&&i!=="none"&&(n=i+" "+n)}while(!e&&(t=t.parentNode));var r=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return r&&new r(n)}function Ra(t,e,n){if(t){var i=t.getElementsByTagName(e),r=0,o=i.length;if(n)for(;r<o;r++)n(i[r],r);return i}return[]}function ie(){var t=document.scrollingElement;return t||document.documentElement}function xt(t,e,n,i,r){if(!(!t.getBoundingClientRect&&t!==window)){var o,s,a,l,f,c,h;if(t!==window&&t.parentNode&&t!==ie()?(o=t.getBoundingClientRect(),s=o.top,a=o.left,l=o.bottom,f=o.right,c=o.height,h=o.width):(s=0,a=0,l=window.innerHeight,f=window.innerWidth,c=window.innerHeight,h=window.innerWidth),(e||n)&&t!==window&&(r=r||t.parentNode,!pe))do if(r&&r.getBoundingClientRect&&(O(r,"transform")!=="none"||n&&O(r,"position")!=="static")){var g=r.getBoundingClientRect();s-=g.top+parseInt(O(r,"border-top-width")),a-=g.left+parseInt(O(r,"border-left-width")),l=s+o.height,f=a+o.width;break}while(r=r.parentNode);if(i&&t!==window){var m=ln(r||t),w=m&&m.a,E=m&&m.d;m&&(s/=E,a/=w,h/=w,c/=E,l=s+c,f=a+h)}return{top:s,left:a,bottom:l,right:f,width:h,height:c}}}function ls(t,e,n){for(var i=Ee(t,!0),r=xt(t)[e];i;){var o=xt(i)[n],s=void 0;if(n==="top"||n==="left"?s=r>=o:s=r<=o,!s)return i;if(i===ie())break;i=Ee(i,!1)}return!1}function hn(t,e,n,i){for(var r=0,o=0,s=t.children;o<s.length;){if(s[o].style.display!=="none"&&s[o]!==F.ghost&&(i||s[o]!==F.dragged)&&te(s[o],n.draggable,t,!1)){if(r===e)return s[o];r++}o++}return null}function so(t,e){for(var n=t.lastElementChild;n&&(n===F.ghost||O(n,"display")==="none"||e&&!yi(n,e));)n=n.previousElementSibling;return n||null}function Bt(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)t.nodeName.toUpperCase()!=="TEMPLATE"&&t!==F.clone&&(!e||yi(t,e))&&n++;return n}function fs(t){var e=0,n=0,i=ie();if(t)do{var r=ln(t),o=r.a,s=r.d;e+=t.scrollLeft*o,n+=t.scrollTop*s}while(t!==i&&(t=t.parentNode));return[e,n]}function hu(t,e){for(var n in t)if(t.hasOwnProperty(n)){for(var i in e)if(e.hasOwnProperty(i)&&e[i]===t[n][i])return Number(n)}return-1}function Ee(t,e){if(!t||!t.getBoundingClientRect)return ie();var n=t,i=!1;do if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var r=O(n);if(n.clientWidth<n.scrollWidth&&(r.overflowX=="auto"||r.overflowX=="scroll")||n.clientHeight<n.scrollHeight&&(r.overflowY=="auto"||r.overflowY=="scroll")){if(!n.getBoundingClientRect||n===document.body)return ie();if(i||e)return n;i=!0}}while(n=n.parentNode);return ie()}function gu(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function ir(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}var Nn;function Da(t,e){return function(){if(!Nn){var n=arguments,i=this;n.length===1?t.call(i,n[0]):t.apply(i,n),Nn=setTimeout(function(){Nn=void 0},e)}}}function pu(){clearTimeout(Nn),Nn=void 0}function ka(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function qa(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}var Mt="Sortable"+new Date().getTime();function mu(){var t=[],e;return{captureAnimationState:function(){if(t=[],!!this.options.animation){var i=[].slice.call(this.el.children);i.forEach(function(r){if(!(O(r,"display")==="none"||r===F.ghost)){t.push({target:r,rect:xt(r)});var o=oe({},t[t.length-1].rect);if(r.thisAnimationDuration){var s=ln(r,!0);s&&(o.top-=s.f,o.left-=s.e)}r.fromRect=o}})}},addAnimationState:function(i){t.push(i)},removeAnimationState:function(i){t.splice(hu(t,{target:i}),1)},animateAll:function(i){var r=this;if(!this.options.animation){clearTimeout(e),typeof i=="function"&&i();return}var o=!1,s=0;t.forEach(function(a){var l=0,f=a.target,c=f.fromRect,h=xt(f),g=f.prevFromRect,m=f.prevToRect,w=a.rect,E=ln(f,!0);E&&(h.top-=E.f,h.left-=E.e),f.toRect=h,f.thisAnimationDuration&&ir(g,h)&&!ir(c,h)&&(w.top-h.top)/(w.left-h.left)===(c.top-h.top)/(c.left-h.left)&&(l=bu(w,g,m,r.options)),ir(h,c)||(f.prevFromRect=c,f.prevToRect=h,l||(l=r.options.animation),r.animate(f,w,h,l)),l&&(o=!0,s=Math.max(s,l),clearTimeout(f.animationResetTimer),f.animationResetTimer=setTimeout(function(){f.animationTime=0,f.prevFromRect=null,f.fromRect=null,f.prevToRect=null,f.thisAnimationDuration=null},l),f.thisAnimationDuration=l)}),clearTimeout(e),o?e=setTimeout(function(){typeof i=="function"&&i()},s):typeof i=="function"&&i(),t=[]},animate:function(i,r,o,s){if(s){O(i,"transition",""),O(i,"transform","");var a=ln(this.el),l=a&&a.a,f=a&&a.d,c=(r.left-o.left)/(l||1),h=(r.top-o.top)/(f||1);i.animatingX=!!c,i.animatingY=!!h,O(i,"transform","translate3d("+c+"px,"+h+"px,0)"),this.forRepaintDummy=_u(i),O(i,"transition","transform "+s+"ms"+(this.options.easing?" "+this.options.easing:"")),O(i,"transform","translate3d(0,0,0)"),typeof i.animated=="number"&&clearTimeout(i.animated),i.animated=setTimeout(function(){O(i,"transition",""),O(i,"transform",""),i.animated=!1,i.animatingX=!1,i.animatingY=!1},s)}}}}function _u(t){return t.offsetWidth}function bu(t,e,n,i){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*i.animation}var Ze=[],rr={initializeByDefault:!0},Un={mount:function(e){for(var n in rr)rr.hasOwnProperty(n)&&!(n in e)&&(e[n]=rr[n]);Ze.forEach(function(i){if(i.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),Ze.push(e)},pluginEvent:function(e,n,i){var r=this;this.eventCanceled=!1,i.cancel=function(){r.eventCanceled=!0};var o=e+"Global";Ze.forEach(function(s){n[s.pluginName]&&(n[s.pluginName][o]&&n[s.pluginName][o](oe({sortable:n},i)),n.options[s.pluginName]&&n[s.pluginName][e]&&n[s.pluginName][e](oe({sortable:n},i)))})},initializePlugins:function(e,n,i,r){Ze.forEach(function(a){var l=a.pluginName;if(!(!e.options[l]&&!a.initializeByDefault)){var f=new a(e,n,e.options);f.sortable=e,f.options=e.options,e[l]=f,he(i,f.defaults)}});for(var o in e.options)if(e.options.hasOwnProperty(o)){var s=this.modifyOption(e,o,e.options[o]);typeof s<"u"&&(e.options[o]=s)}},getEventProperties:function(e,n){var i={};return Ze.forEach(function(r){typeof r.eventProperties=="function"&&he(i,r.eventProperties.call(n[r.pluginName],e))}),i},modifyOption:function(e,n,i){var r;return Ze.forEach(function(o){e[o.pluginName]&&o.optionListeners&&typeof o.optionListeners[n]=="function"&&(r=o.optionListeners[n].call(e[o.pluginName],i))}),r}};function xu(t){var e=t.sortable,n=t.rootEl,i=t.name,r=t.targetEl,o=t.cloneEl,s=t.toEl,a=t.fromEl,l=t.oldIndex,f=t.newIndex,c=t.oldDraggableIndex,h=t.newDraggableIndex,g=t.originalEvent,m=t.putSortable,w=t.extraEventProperties;if(e=e||n&&n[Mt],!!e){var E,U=e.options,W="on"+i.charAt(0).toUpperCase()+i.substr(1);window.CustomEvent&&!pe&&!Wn?E=new CustomEvent(i,{bubbles:!0,cancelable:!0}):(E=document.createEvent("Event"),E.initEvent(i,!0,!0)),E.to=s||n,E.from=a||n,E.item=r||n,E.clone=o,E.oldIndex=l,E.newIndex=f,E.oldDraggableIndex=c,E.newDraggableIndex=h,E.originalEvent=g,E.pullMode=m?m.lastPutMode:void 0;var M=oe(oe({},w),Un.getEventProperties(i,e));for(var V in M)E[V]=M[V];n&&n.dispatchEvent(E),U[W]&&U[W].call(e,E)}}var $u=["evt"],Rt=function(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=i.evt,o=fu(i,$u);Un.pluginEvent.bind(F)(e,n,oe({dragEl:y,parentEl:ut,ghostEl:L,rootEl:lt,nextEl:Oe,lastDownEl:fi,cloneEl:dt,cloneHidden:we,dragStarted:wn,putSortable:wt,activeSortable:F.active,originalEvent:r,oldIndex:en,oldDraggableIndex:An,newIndex:Ot,newDraggableIndex:ye,hideGhostForTarget:Pa,unhideGhostForTarget:Oa,cloneNowHidden:function(){we=!0},cloneNowShown:function(){we=!1},dispatchSortableEvent:function(a){Tt({sortable:n,name:a,originalEvent:r})}},o))};function Tt(t){xu(oe({putSortable:wt,cloneEl:dt,targetEl:y,rootEl:lt,oldIndex:en,oldDraggableIndex:An,newIndex:Ot,newDraggableIndex:ye},t))}var y,ut,L,lt,Oe,fi,dt,we,en,Ot,An,ye,ti,wt,tn=!1,wi=!1,Ei=[],Ie,Ut,or,sr,cs,us,wn,Je,In,Pn=!1,ei=!1,ci,Et,ar=[],Ar=!1,Si=[],Wi=typeof document<"u",ni=Ca,ds=Wn||pe?"cssFloat":"float",vu=Wi&&!uu&&!Ca&&"draggable"in document.createElement("div"),Na=function(){if(Wi){if(pe)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto",t.style.pointerEvents==="auto"}}(),Aa=function(e,n){var i=O(e),r=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),o=hn(e,0,n),s=hn(e,1,n),a=o&&O(o),l=s&&O(s),f=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+xt(o).width,c=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+xt(s).width;if(i.display==="flex")return i.flexDirection==="column"||i.flexDirection==="column-reverse"?"vertical":"horizontal";if(i.display==="grid")return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&a.float&&a.float!=="none"){var h=a.float==="left"?"left":"right";return s&&(l.clear==="both"||l.clear===h)?"vertical":"horizontal"}return o&&(a.display==="block"||a.display==="flex"||a.display==="table"||a.display==="grid"||f>=r&&i[ds]==="none"||s&&i[ds]==="none"&&f+c>r)?"vertical":"horizontal"},yu=function(e,n,i){var r=i?e.left:e.top,o=i?e.right:e.bottom,s=i?e.width:e.height,a=i?n.left:n.top,l=i?n.right:n.bottom,f=i?n.width:n.height;return r===a||o===l||r+s/2===a+f/2},wu=function(e,n){var i;return Ei.some(function(r){var o=r[Mt].options.emptyInsertThreshold;if(!(!o||so(r))){var s=xt(r),a=e>=s.left-o&&e<=s.right+o,l=n>=s.top-o&&n<=s.bottom+o;if(a&&l)return i=r}}),i},Ia=function(e){function n(o,s){return function(a,l,f,c){var h=a.options.group.name&&l.options.group.name&&a.options.group.name===l.options.group.name;if(o==null&&(s||h))return!0;if(o==null||o===!1)return!1;if(s&&o==="clone")return o;if(typeof o=="function")return n(o(a,l,f,c),s)(a,l,f,c);var g=(s?a:l).options.group.name;return o===!0||typeof o=="string"&&o===g||o.join&&o.indexOf(g)>-1}}var i={},r=e.group;(!r||li(r)!="object")&&(r={name:r}),i.name=r.name,i.checkPull=n(r.pull,!0),i.checkPut=n(r.put),i.revertClone=r.revertClone,e.group=i},Pa=function(){!Na&&L&&O(L,"display","none")},Oa=function(){!Na&&L&&O(L,"display","")};Wi&&document.addEventListener("click",function(t){if(wi)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),wi=!1,!1},!0);var Pe=function(e){if(y){e=e.touches?e.touches[0]:e;var n=wu(e.clientX,e.clientY);if(n){var i={};for(var r in e)e.hasOwnProperty(r)&&(i[r]=e[r]);i.target=i.rootEl=n,i.preventDefault=void 0,i.stopPropagation=void 0,n[Mt]._onDragOver(i)}}},Eu=function(e){y&&y.parentNode[Mt]._isOutsideThisEl(e.target)};function F(t,e){if(!(t&&t.nodeType&&t.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=he({},e),t[Mt]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Aa(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(s,a){s.setData("Text",a.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:F.supportPointer!==!1&&"PointerEvent"in window&&!qn,emptyInsertThreshold:5};Un.initializePlugins(this,t,n);for(var i in n)!(i in e)&&(e[i]=n[i]);Ia(e);for(var r in this)r.charAt(0)==="_"&&typeof this[r]=="function"&&(this[r]=this[r].bind(this));this.nativeDraggable=e.forceFallback?!1:vu,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?et(t,"pointerdown",this._onTapStart):(et(t,"mousedown",this._onTapStart),et(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(et(t,"dragover",this),et(t,"dragenter",this)),Ei.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),he(this,mu())}F.prototype={constructor:F,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(Je=null)},_getDirection:function(e,n){return typeof this.options.direction=="function"?this.options.direction.call(this,e,n,y):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,i=this.el,r=this.options,o=r.preventOnFilter,s=e.type,a=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,l=(a||e).target,f=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,c=r.filter;if(Nu(i),!y&&!(/mousedown|pointerdown/.test(s)&&e.button!==0||r.disabled)&&!f.isContentEditable&&!(!this.nativeDraggable&&qn&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=te(l,r.draggable,i,!1),!(l&&l.animated)&&fi!==l)){if(en=Bt(l),An=Bt(l,r.draggable),typeof c=="function"){if(c.call(this,e,l,this)){Tt({sortable:n,rootEl:f,name:"filter",targetEl:l,toEl:i,fromEl:i}),Rt("filter",n,{evt:e}),o&&e.cancelable&&e.preventDefault();return}}else if(c&&(c=c.split(",").some(function(h){if(h=te(f,h.trim(),i,!1),h)return Tt({sortable:n,rootEl:h,name:"filter",targetEl:l,fromEl:i,toEl:i}),Rt("filter",n,{evt:e}),!0}),c)){o&&e.cancelable&&e.preventDefault();return}r.handle&&!te(f,r.handle,i,!1)||this._prepareDragStart(e,a,l)}}},_prepareDragStart:function(e,n,i){var r=this,o=r.el,s=r.options,a=o.ownerDocument,l;if(i&&!y&&i.parentNode===o){var f=xt(i);if(lt=o,y=i,ut=y.parentNode,Oe=y.nextSibling,fi=i,ti=s.group,F.dragged=y,Ie={target:y,clientX:(n||e).clientX,clientY:(n||e).clientY},cs=Ie.clientX-f.left,us=Ie.clientY-f.top,this._lastX=(n||e).clientX,this._lastY=(n||e).clientY,y.style["will-change"]="all",l=function(){if(Rt("delayEnded",r,{evt:e}),F.eventCanceled){r._onDrop();return}r._disableDelayedDragEvents(),!ss&&r.nativeDraggable&&(y.draggable=!0),r._triggerDragStart(e,n),Tt({sortable:r,name:"choose",originalEvent:e}),Pt(y,s.chosenClass,!0)},s.ignore.split(",").forEach(function(c){Ra(y,c.trim(),lr)}),et(a,"dragover",Pe),et(a,"mousemove",Pe),et(a,"touchmove",Pe),et(a,"mouseup",r._onDrop),et(a,"touchend",r._onDrop),et(a,"touchcancel",r._onDrop),ss&&this.nativeDraggable&&(this.options.touchStartThreshold=4,y.draggable=!0),Rt("delayStart",this,{evt:e}),s.delay&&(!s.delayOnTouchOnly||n)&&(!this.nativeDraggable||!(Wn||pe))){if(F.eventCanceled){this._onDrop();return}et(a,"mouseup",r._disableDelayedDrag),et(a,"touchend",r._disableDelayedDrag),et(a,"touchcancel",r._disableDelayedDrag),et(a,"mousemove",r._delayedDragTouchMoveHandler),et(a,"touchmove",r._delayedDragTouchMoveHandler),s.supportPointer&&et(a,"pointermove",r._delayedDragTouchMoveHandler),r._dragStartTimer=setTimeout(l,s.delay)}else l()}},_delayedDragTouchMoveHandler:function(e){var n=e.touches?e.touches[0]:e;Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){y&&lr(y),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;J(e,"mouseup",this._disableDelayedDrag),J(e,"touchend",this._disableDelayedDrag),J(e,"touchcancel",this._disableDelayedDrag),J(e,"mousemove",this._delayedDragTouchMoveHandler),J(e,"touchmove",this._delayedDragTouchMoveHandler),J(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,n){n=n||e.pointerType=="touch"&&e,!this.nativeDraggable||n?this.options.supportPointer?et(document,"pointermove",this._onTouchMove):n?et(document,"touchmove",this._onTouchMove):et(document,"mousemove",this._onTouchMove):(et(y,"dragend",this),et(lt,"dragstart",this._onDragStart));try{document.selection?ui(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,n){if(tn=!1,lt&&y){Rt("dragStarted",this,{evt:n}),this.nativeDraggable&&et(document,"dragover",Eu);var i=this.options;!e&&Pt(y,i.dragClass,!1),Pt(y,i.ghostClass,!0),F.active=this,e&&this._appendGhost(),Tt({sortable:this,name:"start",originalEvent:n})}else this._nulling()},_emulateDragOver:function(){if(Ut){this._lastX=Ut.clientX,this._lastY=Ut.clientY,Pa();for(var e=document.elementFromPoint(Ut.clientX,Ut.clientY),n=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(Ut.clientX,Ut.clientY),e!==n);)n=e;if(y.parentNode[Mt]._isOutsideThisEl(e),n)do{if(n[Mt]){var i=void 0;if(i=n[Mt]._onDragOver({clientX:Ut.clientX,clientY:Ut.clientY,target:e,rootEl:n}),i&&!this.options.dragoverBubble)break}e=n}while(n=n.parentNode);Oa()}},_onTouchMove:function(e){if(Ie){var n=this.options,i=n.fallbackTolerance,r=n.fallbackOffset,o=e.touches?e.touches[0]:e,s=L&&ln(L,!0),a=L&&s&&s.a,l=L&&s&&s.d,f=ni&&Et&&fs(Et),c=(o.clientX-Ie.clientX+r.x)/(a||1)+(f?f[0]-ar[0]:0)/(a||1),h=(o.clientY-Ie.clientY+r.y)/(l||1)+(f?f[1]-ar[1]:0)/(l||1);if(!F.active&&!tn){if(i&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<i)return;this._onDragStart(e,!0)}if(L){s?(s.e+=c-(or||0),s.f+=h-(sr||0)):s={a:1,b:0,c:0,d:1,e:c,f:h};var g="matrix(".concat(s.a,",").concat(s.b,",").concat(s.c,",").concat(s.d,",").concat(s.e,",").concat(s.f,")");O(L,"webkitTransform",g),O(L,"mozTransform",g),O(L,"msTransform",g),O(L,"transform",g),or=c,sr=h,Ut=o}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!L){var e=this.options.fallbackOnBody?document.body:lt,n=xt(y,!0,ni,!0,e),i=this.options;if(ni){for(Et=e;O(Et,"position")==="static"&&O(Et,"transform")==="none"&&Et!==document;)Et=Et.parentNode;Et!==document.body&&Et!==document.documentElement?(Et===document&&(Et=ie()),n.top+=Et.scrollTop,n.left+=Et.scrollLeft):Et=ie(),ar=fs(Et)}L=y.cloneNode(!0),Pt(L,i.ghostClass,!1),Pt(L,i.fallbackClass,!0),Pt(L,i.dragClass,!0),O(L,"transition",""),O(L,"transform",""),O(L,"box-sizing","border-box"),O(L,"margin",0),O(L,"top",n.top),O(L,"left",n.left),O(L,"width",n.width),O(L,"height",n.height),O(L,"opacity","0.8"),O(L,"position",ni?"absolute":"fixed"),O(L,"zIndex","100000"),O(L,"pointerEvents","none"),F.ghost=L,e.appendChild(L),O(L,"transform-origin",cs/parseInt(L.style.width)*100+"% "+us/parseInt(L.style.height)*100+"%")}},_onDragStart:function(e,n){var i=this,r=e.dataTransfer,o=i.options;if(Rt("dragStart",this,{evt:e}),F.eventCanceled){this._onDrop();return}Rt("setupClone",this),F.eventCanceled||(dt=qa(y),dt.draggable=!1,dt.style["will-change"]="",this._hideClone(),Pt(dt,this.options.chosenClass,!1),F.clone=dt),i.cloneId=ui(function(){Rt("clone",i),!F.eventCanceled&&(i.options.removeCloneOnHide||lt.insertBefore(dt,y),i._hideClone(),Tt({sortable:i,name:"clone"}))}),!n&&Pt(y,o.dragClass,!0),n?(wi=!0,i._loopId=setInterval(i._emulateDragOver,50)):(J(document,"mouseup",i._onDrop),J(document,"touchend",i._onDrop),J(document,"touchcancel",i._onDrop),r&&(r.effectAllowed="move",o.setData&&o.setData.call(i,r,y)),et(document,"drop",i),O(y,"transform","translateZ(0)")),tn=!0,i._dragStartId=ui(i._dragStarted.bind(i,n,e)),et(document,"selectstart",i),wn=!0,qn&&O(document.body,"user-select","none")},_onDragOver:function(e){var n=this.el,i=e.target,r,o,s,a=this.options,l=a.group,f=F.active,c=ti===l,h=a.sort,g=wt||f,m,w=this,E=!1;if(Ar)return;function U(tt,se){Rt(tt,w,oe({evt:e,isOwner:c,axis:m?"vertical":"horizontal",revert:s,dragRect:r,targetRect:o,canSort:h,fromSortable:g,target:i,completed:M,onMove:function(Gt,zt){return ii(lt,n,y,r,Gt,xt(Gt),e,zt)},changed:V},se))}function W(){U("dragOverAnimationCapture"),w.captureAnimationState(),w!==g&&g.captureAnimationState()}function M(tt){return U("dragOverCompleted",{insertion:tt}),tt&&(c?f._hideClone():f._showClone(w),w!==g&&(Pt(y,wt?wt.options.ghostClass:f.options.ghostClass,!1),Pt(y,a.ghostClass,!0)),wt!==w&&w!==F.active?wt=w:w===F.active&&wt&&(wt=null),g===w&&(w._ignoreWhileAnimating=i),w.animateAll(function(){U("dragOverAnimationComplete"),w._ignoreWhileAnimating=null}),w!==g&&(g.animateAll(),g._ignoreWhileAnimating=null)),(i===y&&!y.animated||i===n&&!i.animated)&&(Je=null),!a.dragoverBubble&&!e.rootEl&&i!==document&&(y.parentNode[Mt]._isOutsideThisEl(e.target),!tt&&Pe(e)),!a.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),E=!0}function V(){Ot=Bt(y),ye=Bt(y,a.draggable),Tt({sortable:w,name:"change",toEl:n,newIndex:Ot,newDraggableIndex:ye,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),i=te(i,a.draggable,n,!0),U("dragOver"),F.eventCanceled)return E;if(y.contains(e.target)||i.animated&&i.animatingX&&i.animatingY||w._ignoreWhileAnimating===i)return M(!1);if(wi=!1,f&&!a.disabled&&(c?h||(s=ut!==lt):wt===this||(this.lastPutMode=ti.checkPull(this,f,y,e))&&l.checkPut(this,f,y,e))){if(m=this._getDirection(e,i)==="vertical",r=xt(y),U("dragOverValid"),F.eventCanceled)return E;if(s)return ut=lt,W(),this._hideClone(),U("revert"),F.eventCanceled||(Oe?lt.insertBefore(y,Oe):lt.appendChild(y)),M(!0);var N=so(n,a.draggable);if(!N||Ru(e,m,this)&&!N.animated){if(N===y)return M(!1);if(N&&n===e.target&&(i=N),i&&(o=xt(i)),ii(lt,n,y,r,i,o,e,!!i)!==!1)return W(),n.appendChild(y),ut=n,V(),M(!0)}else if(N&&Tu(e,m,this)){var Y=hn(n,0,a,!0);if(Y===y)return M(!1);if(i=Y,o=xt(i),ii(lt,n,y,r,i,o,e,!1)!==!1)return W(),n.insertBefore(y,Y),ut=n,V(),M(!0)}else if(i.parentNode===n){o=xt(i);var ct=0,at,T=y.parentNode!==n,D=!yu(y.animated&&y.toRect||r,i.animated&&i.toRect||o,m),z=m?"top":"left",Z=ls(i,"top","top")||ls(y,"top","top"),R=Z?Z.scrollTop:void 0;Je!==i&&(at=o[z],Pn=!1,ei=!D&&a.invertSwap||T),ct=Du(e,i,o,m,D?1:a.swapThreshold,a.invertedSwapThreshold==null?a.swapThreshold:a.invertedSwapThreshold,ei,Je===i);var K;if(ct!==0){var ft=Bt(y);do ft-=ct,K=ut.children[ft];while(K&&(O(K,"display")==="none"||K===L))}if(ct===0||K===i)return M(!1);Je=i,In=ct;var yt=i.nextElementSibling,H=!1;H=ct===1;var it=ii(lt,n,y,r,i,o,e,H);if(it!==!1)return(it===1||it===-1)&&(H=it===1),Ar=!0,setTimeout(Cu,30),W(),H&&!yt?n.appendChild(y):i.parentNode.insertBefore(y,H?yt:i),Z&&ka(Z,0,R-Z.scrollTop),ut=y.parentNode,at!==void 0&&!ei&&(ci=Math.abs(at-xt(i)[z])),V(),M(!0)}if(n.contains(y))return M(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){J(document,"mousemove",this._onTouchMove),J(document,"touchmove",this._onTouchMove),J(document,"pointermove",this._onTouchMove),J(document,"dragover",Pe),J(document,"mousemove",Pe),J(document,"touchmove",Pe)},_offUpEvents:function(){var e=this.el.ownerDocument;J(e,"mouseup",this._onDrop),J(e,"touchend",this._onDrop),J(e,"pointerup",this._onDrop),J(e,"touchcancel",this._onDrop),J(document,"selectstart",this)},_onDrop:function(e){var n=this.el,i=this.options;if(Ot=Bt(y),ye=Bt(y,i.draggable),Rt("drop",this,{evt:e}),ut=y&&y.parentNode,Ot=Bt(y),ye=Bt(y,i.draggable),F.eventCanceled){this._nulling();return}tn=!1,ei=!1,Pn=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Ir(this.cloneId),Ir(this._dragStartId),this.nativeDraggable&&(J(document,"drop",this),J(n,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),qn&&O(document.body,"user-select",""),O(y,"transform",""),e&&(wn&&(e.cancelable&&e.preventDefault(),!i.dropBubble&&e.stopPropagation()),L&&L.parentNode&&L.parentNode.removeChild(L),(lt===ut||wt&&wt.lastPutMode!=="clone")&&dt&&dt.parentNode&&dt.parentNode.removeChild(dt),y&&(this.nativeDraggable&&J(y,"dragend",this),lr(y),y.style["will-change"]="",wn&&!tn&&Pt(y,wt?wt.options.ghostClass:this.options.ghostClass,!1),Pt(y,this.options.chosenClass,!1),Tt({sortable:this,name:"unchoose",toEl:ut,newIndex:null,newDraggableIndex:null,originalEvent:e}),lt!==ut?(Ot>=0&&(Tt({rootEl:ut,name:"add",toEl:ut,fromEl:lt,originalEvent:e}),Tt({sortable:this,name:"remove",toEl:ut,originalEvent:e}),Tt({rootEl:ut,name:"sort",toEl:ut,fromEl:lt,originalEvent:e}),Tt({sortable:this,name:"sort",toEl:ut,originalEvent:e})),wt&&wt.save()):Ot!==en&&Ot>=0&&(Tt({sortable:this,name:"update",toEl:ut,originalEvent:e}),Tt({sortable:this,name:"sort",toEl:ut,originalEvent:e})),F.active&&((Ot==null||Ot===-1)&&(Ot=en,ye=An),Tt({sortable:this,name:"end",toEl:ut,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){Rt("nulling",this),lt=y=ut=L=Oe=dt=fi=we=Ie=Ut=wn=Ot=ye=en=An=Je=In=wt=ti=F.dragged=F.ghost=F.clone=F.active=null,Si.forEach(function(e){e.checked=!0}),Si.length=or=sr=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":y&&(this._onDragOver(e),Su(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],n,i=this.el.children,r=0,o=i.length,s=this.options;r<o;r++)n=i[r],te(n,s.draggable,this.el,!1)&&e.push(n.getAttribute(s.dataIdAttr)||qu(n));return e},sort:function(e,n){var i={},r=this.el;this.toArray().forEach(function(o,s){var a=r.children[s];te(a,this.options.draggable,r,!1)&&(i[o]=a)},this),n&&this.captureAnimationState(),e.forEach(function(o){i[o]&&(r.removeChild(i[o]),r.appendChild(i[o]))}),n&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,n){return te(e,n||this.options.draggable,this.el,!1)},option:function(e,n){var i=this.options;if(n===void 0)return i[e];var r=Un.modifyOption(this,e,n);typeof r<"u"?i[e]=r:i[e]=n,e==="group"&&Ia(i)},destroy:function(){Rt("destroy",this);var e=this.el;e[Mt]=null,J(e,"mousedown",this._onTapStart),J(e,"touchstart",this._onTapStart),J(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(J(e,"dragover",this),J(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(n){n.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Ei.splice(Ei.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!we){if(Rt("hideClone",this),F.eventCanceled)return;O(dt,"display","none"),this.options.removeCloneOnHide&&dt.parentNode&&dt.parentNode.removeChild(dt),we=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(we){if(Rt("showClone",this),F.eventCanceled)return;y.parentNode==lt&&!this.options.group.revertClone?lt.insertBefore(dt,y):Oe?lt.insertBefore(dt,Oe):lt.appendChild(dt),this.options.group.revertClone&&this.animate(y,dt),O(dt,"display",""),we=!1}}};function Su(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function ii(t,e,n,i,r,o,s,a){var l,f=t[Mt],c=f.options.onMove,h;return window.CustomEvent&&!pe&&!Wn?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=e,l.from=t,l.dragged=n,l.draggedRect=i,l.related=r||e,l.relatedRect=o||xt(e),l.willInsertAfter=a,l.originalEvent=s,t.dispatchEvent(l),c&&(h=c.call(f,l,s)),h}function lr(t){t.draggable=!1}function Cu(){Ar=!1}function Tu(t,e,n){var i=xt(hn(n.el,0,n.options,!0)),r=10;return e?t.clientX<i.left-r||t.clientY<i.top&&t.clientX<i.right:t.clientY<i.top-r||t.clientY<i.bottom&&t.clientX<i.left}function Ru(t,e,n){var i=xt(so(n.el,n.options.draggable)),r=10;return e?t.clientX>i.right+r||t.clientX<=i.right&&t.clientY>i.bottom&&t.clientX>=i.left:t.clientX>i.right&&t.clientY>i.top||t.clientX<=i.right&&t.clientY>i.bottom+r}function Du(t,e,n,i,r,o,s,a){var l=i?t.clientY:t.clientX,f=i?n.height:n.width,c=i?n.top:n.left,h=i?n.bottom:n.right,g=!1;if(!s){if(a&&ci<f*r){if(!Pn&&(In===1?l>c+f*o/2:l<h-f*o/2)&&(Pn=!0),Pn)g=!0;else if(In===1?l<c+ci:l>h-ci)return-In}else if(l>c+f*(1-r)/2&&l<h-f*(1-r)/2)return ku(e)}return g=g||s,g&&(l<c+f*o/2||l>h-f*o/2)?l>c+f/2?1:-1:0}function ku(t){return Bt(y)<Bt(t)?1:-1}function qu(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function Nu(t){Si.length=0;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var i=e[n];i.checked&&Si.push(i)}}function ui(t){return setTimeout(t,0)}function Ir(t){return clearTimeout(t)}Wi&&et(document,"touchmove",function(t){(F.active||tn)&&t.cancelable&&t.preventDefault()});F.utils={on:et,off:J,css:O,find:Ra,is:function(e,n){return!!te(e,n,e,!1)},extend:gu,throttle:Da,closest:te,toggleClass:Pt,clone:qa,index:Bt,nextTick:ui,cancelNextTick:Ir,detectDirection:Aa,getChild:hn};F.get=function(t){return t[Mt]};F.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e[0].constructor===Array&&(e=e[0]),e.forEach(function(i){if(!i.prototype||!i.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));i.utils&&(F.utils=oe(oe({},F.utils),i.utils)),Un.mount(i)})};F.create=function(t,e){return new F(t,e)};F.version=cu;var pt=[],En,Pr,Or=!1,fr,cr,Ci,Sn;function Au(){function t(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return t.prototype={dragStarted:function(n){var i=n.originalEvent;this.sortable.nativeDraggable?et(document,"dragover",this._handleAutoScroll):this.options.supportPointer?et(document,"pointermove",this._handleFallbackAutoScroll):i.touches?et(document,"touchmove",this._handleFallbackAutoScroll):et(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(n){var i=n.originalEvent;!this.options.dragOverBubble&&!i.rootEl&&this._handleAutoScroll(i)},drop:function(){this.sortable.nativeDraggable?J(document,"dragover",this._handleAutoScroll):(J(document,"pointermove",this._handleFallbackAutoScroll),J(document,"touchmove",this._handleFallbackAutoScroll),J(document,"mousemove",this._handleFallbackAutoScroll)),hs(),di(),pu()},nulling:function(){Ci=Pr=En=Or=Sn=fr=cr=null,pt.length=0},_handleFallbackAutoScroll:function(n){this._handleAutoScroll(n,!0)},_handleAutoScroll:function(n,i){var r=this,o=(n.touches?n.touches[0]:n).clientX,s=(n.touches?n.touches[0]:n).clientY,a=document.elementFromPoint(o,s);if(Ci=n,i||this.options.forceAutoScrollFallback||Wn||pe||qn){ur(n,this.options,a,i);var l=Ee(a,!0);Or&&(!Sn||o!==fr||s!==cr)&&(Sn&&hs(),Sn=setInterval(function(){var f=Ee(document.elementFromPoint(o,s),!0);f!==l&&(l=f,di()),ur(n,r.options,f,i)},10),fr=o,cr=s)}else{if(!this.options.bubbleScroll||Ee(a,!0)===ie()){di();return}ur(n,this.options,Ee(a,!1),!1)}}},he(t,{pluginName:"scroll",initializeByDefault:!0})}function di(){pt.forEach(function(t){clearInterval(t.pid)}),pt=[]}function hs(){clearInterval(Sn)}var ur=Da(function(t,e,n,i){if(e.scroll){var r=(t.touches?t.touches[0]:t).clientX,o=(t.touches?t.touches[0]:t).clientY,s=e.scrollSensitivity,a=e.scrollSpeed,l=ie(),f=!1,c;Pr!==n&&(Pr=n,di(),En=e.scroll,c=e.scrollFn,En===!0&&(En=Ee(n,!0)));var h=0,g=En;do{var m=g,w=xt(m),E=w.top,U=w.bottom,W=w.left,M=w.right,V=w.width,N=w.height,Y=void 0,ct=void 0,at=m.scrollWidth,T=m.scrollHeight,D=O(m),z=m.scrollLeft,Z=m.scrollTop;m===l?(Y=V<at&&(D.overflowX==="auto"||D.overflowX==="scroll"||D.overflowX==="visible"),ct=N<T&&(D.overflowY==="auto"||D.overflowY==="scroll"||D.overflowY==="visible")):(Y=V<at&&(D.overflowX==="auto"||D.overflowX==="scroll"),ct=N<T&&(D.overflowY==="auto"||D.overflowY==="scroll"));var R=Y&&(Math.abs(M-r)<=s&&z+V<at)-(Math.abs(W-r)<=s&&!!z),K=ct&&(Math.abs(U-o)<=s&&Z+N<T)-(Math.abs(E-o)<=s&&!!Z);if(!pt[h])for(var ft=0;ft<=h;ft++)pt[ft]||(pt[ft]={});(pt[h].vx!=R||pt[h].vy!=K||pt[h].el!==m)&&(pt[h].el=m,pt[h].vx=R,pt[h].vy=K,clearInterval(pt[h].pid),(R!=0||K!=0)&&(f=!0,pt[h].pid=setInterval((function(){i&&this.layer===0&&F.active._onTouchMove(Ci);var yt=pt[this.layer].vy?pt[this.layer].vy*a:0,H=pt[this.layer].vx?pt[this.layer].vx*a:0;typeof c=="function"&&c.call(F.dragged.parentNode[Mt],H,yt,t,Ci,pt[this.layer].el)!=="continue"||ka(pt[this.layer].el,H,yt)}).bind({layer:h}),24))),h++}while(e.bubbleScroll&&g!==l&&(g=Ee(g,!1)));Or=f}},30),Fa=function(e){var n=e.originalEvent,i=e.putSortable,r=e.dragEl,o=e.activeSortable,s=e.dispatchSortableEvent,a=e.hideGhostForTarget,l=e.unhideGhostForTarget;if(n){var f=i||o;a();var c=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:n,h=document.elementFromPoint(c.clientX,c.clientY);l(),f&&!f.el.contains(h)&&(s("spill"),this.onSpill({dragEl:r,putSortable:i}))}};function ao(){}ao.prototype={startIndex:null,dragStart:function(e){var n=e.oldDraggableIndex;this.startIndex=n},onSpill:function(e){var n=e.dragEl,i=e.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var r=hn(this.sortable.el,this.startIndex,this.options);r?this.sortable.el.insertBefore(n,r):this.sortable.el.appendChild(n),this.sortable.animateAll(),i&&i.animateAll()},drop:Fa};he(ao,{pluginName:"revertOnSpill"});function lo(){}lo.prototype={onSpill:function(e){var n=e.dragEl,i=e.putSortable,r=i||this.sortable;r.captureAnimationState(),n.parentNode&&n.parentNode.removeChild(n),r.animateAll()},drop:Fa};he(lo,{pluginName:"removeOnSpill"});F.mount(new Au);F.mount(lo,ao);function dr(t){t.parentElement!==null&&t.parentElement.removeChild(t)}function gs(t,e,n){const i=n===0?t.children[0]:t.children[n-1].nextSibling;t.insertBefore(e,i)}function Iu(){return typeof window<"u"?window.console:global.console}const Pu=Iu();function Ou(t){const e=Object.create(null);return function(i){return e[i]||(e[i]=t(i))}}const Fu=/-(\w)/g,ju=Ou(t=>t.replace(Fu,(e,n)=>n.toUpperCase())),ja=["Start","Add","Remove","Update","End"],Ma=["Choose","Unchoose","Sort","Filter","Clone"],za=["Move"],Mu=[za,ja,Ma].flatMap(t=>t).map(t=>`on${t}`),Fr={manage:za,manageAndEmit:ja,emit:Ma};function zu(t){return Mu.indexOf(t)!==-1}const Lu=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];function Bu(t){return Lu.includes(t)}function Hu(t){return["transition-group","TransitionGroup"].includes(t)}function La(t){return["id","class","role","style"].includes(t)||t.startsWith("data-")||t.startsWith("aria-")||t.startsWith("on")}function Ba(t){return t.reduce((e,[n,i])=>(e[n]=i,e),{})}function Wu({$attrs:t,componentData:e={}}){return{...Ba(Object.entries(t).filter(([i,r])=>La(i))),...e}}function Uu({$attrs:t,callBackBuilder:e}){const n=Ba(Ha(t));Object.entries(e).forEach(([r,o])=>{Fr[r].forEach(s=>{n[`on${s}`]=o(s)})});const i=`[data-draggable]${n.draggable||""}`;return{...n,draggable:i}}function Ha(t){return Object.entries(t).filter(([e,n])=>!La(e)).map(([e,n])=>[ju(e),n]).filter(([e,n])=>!zu(e))}const ps=({el:t})=>t,Yu=(t,e)=>t.__draggable_context=e,ms=t=>t.__draggable_context;class Xu{constructor({nodes:{header:e,default:n,footer:i},root:r,realList:o}){this.defaultNodes=n,this.children=[...e,...n,...i],this.externalComponent=r.externalComponent,this.rootTransition=r.transition,this.tag=r.tag,this.realList=o}get _isRootComponent(){return this.externalComponent||this.rootTransition}render(e,n){const{tag:i,children:r,_isRootComponent:o}=this;return e(i,n,o?{default:()=>r}:r)}updated(){const{defaultNodes:e,realList:n}=this;e.forEach((i,r)=>{Yu(ps(i),{element:n[r],index:r})})}getUnderlyingVm(e){return ms(e)}getVmIndexFromDomIndex(e,n){const{defaultNodes:i}=this,{length:r}=i,o=n.children,s=o.item(e);if(s===null)return r;const a=ms(s);if(a)return a.index;if(r===0)return 0;const l=ps(i[0]),f=[...o].findIndex(c=>c===l);return e<f?0:r}}function Vu(t,e){const n=t[e];return n?n():[]}function Ku({$slots:t,realList:e,getKey:n}){const i=e||[],[r,o]=["header","footer"].map(l=>Vu(t,l)),{item:s}=t;if(!s)throw new Error("draggable element must have an item slot");const a=i.flatMap((l,f)=>s({element:l,index:f}).map(c=>(c.key=n(l),c.props={...c.props||{},"data-draggable":!0},c)));if(a.length!==i.length)throw new Error("Item slot must have only one child");return{header:r,footer:o,default:a}}function Gu(t){const e=Hu(t),n=!Bu(t)&&!e;return{transition:e,externalComponent:n,tag:n?Mn(t):e?Ec:t}}function Zu({$slots:t,tag:e,realList:n,getKey:i}){const r=Ku({$slots:t,realList:n,getKey:i}),o=Gu(e);return new Xu({nodes:r,root:o,realList:n})}function Wa(t,e){Oi(()=>this.$emit(t.toLowerCase(),e))}function Ua(t){return(e,n)=>{if(this.realList!==null)return this[`onDrag${t}`](e,n)}}function Ju(t){const e=Ua.call(this,t);return(n,i)=>{e.call(this,n,i),Wa.call(this,t,n)}}let hr=null;const Qu={list:{type:Array,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},itemKey:{type:[String,Function],required:!0},clone:{type:Function,default:t=>t},tag:{type:String,default:"div"},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null}},td=["update:modelValue","change",...[...Fr.manageAndEmit,...Fr.emit].map(t=>t.toLowerCase())],Ya=af({name:"draggable",inheritAttrs:!1,props:Qu,emits:td,data(){return{error:!1}},render(){try{this.error=!1;const{$slots:t,$attrs:e,tag:n,componentData:i,realList:r,getKey:o}=this,s=Zu({$slots:t,tag:n,realList:r,getKey:o});this.componentStructure=s;const a=Wu({$attrs:e,componentData:i});return s.render(zo,a)}catch(t){return this.error=!0,zo("pre",{style:{color:"red"}},t.stack)}},created(){this.list!==null&&this.modelValue!==null&&Pu.error("modelValue and list props are mutually exclusive! Please set one or another.")},mounted(){if(this.error)return;const{$attrs:t,$el:e,componentStructure:n}=this;n.updated();const i=Uu({$attrs:t,callBackBuilder:{manageAndEmit:o=>Ju.call(this,o),emit:o=>Wa.bind(this,o),manage:o=>Ua.call(this,o)}}),r=e.nodeType===1?e:e.parentElement;this._sortable=new F(r,i),this.targetDomElement=r,r.__draggable_component__=this},updated(){this.componentStructure.updated()},beforeUnmount(){this._sortable!==void 0&&this._sortable.destroy()},computed:{realList(){const{list:t}=this;return t||this.modelValue},getKey(){const{itemKey:t}=this;return typeof t=="function"?t:e=>e[t]}},watch:{$attrs:{handler(t){const{_sortable:e}=this;e&&Ha(t).forEach(([n,i])=>{e.option(n,i)})},deep:!0}},methods:{getUnderlyingVm(t){return this.componentStructure.getUnderlyingVm(t)||null},getUnderlyingPotencialDraggableComponent(t){return t.__draggable_component__},emitChanges(t){Oi(()=>this.$emit("change",t))},alterList(t){if(this.list){t(this.list);return}const e=[...this.modelValue];t(e),this.$emit("update:modelValue",e)},spliceList(){const t=e=>e.splice(...arguments);this.alterList(t)},updatePosition(t,e){const n=i=>i.splice(e,0,i.splice(t,1)[0]);this.alterList(n)},getRelatedContextFromMoveEvent({to:t,related:e}){const n=this.getUnderlyingPotencialDraggableComponent(t);if(!n)return{component:n};const i=n.realList,r={list:i,component:n};return t!==e&&i?{...n.getUnderlyingVm(e)||{},...r}:r},getVmIndexFromDomIndex(t){return this.componentStructure.getVmIndexFromDomIndex(t,this.targetDomElement)},onDragStart(t){this.context=this.getUnderlyingVm(t.item),t.item._underlying_vm_=this.clone(this.context.element),hr=t.item},onDragAdd(t){const e=t.item._underlying_vm_;if(e===void 0)return;dr(t.item);const n=this.getVmIndexFromDomIndex(t.newIndex);this.spliceList(n,0,e);const i={element:e,newIndex:n};this.emitChanges({added:i})},onDragRemove(t){if(gs(this.$el,t.item,t.oldIndex),t.pullMode==="clone"){dr(t.clone);return}const{index:e,element:n}=this.context;this.spliceList(e,1);const i={element:n,oldIndex:e};this.emitChanges({removed:i})},onDragUpdate(t){dr(t.item),gs(t.from,t.item,t.oldIndex);const e=this.context.index,n=this.getVmIndexFromDomIndex(t.newIndex);this.updatePosition(e,n);const i={element:this.context.element,oldIndex:e,newIndex:n};this.emitChanges({moved:i})},computeFutureIndex(t,e){if(!t.element)return 0;const n=[...e.to.children].filter(s=>s.style.display!=="none"),i=n.indexOf(e.related),r=t.component.getVmIndexFromDomIndex(i);return n.indexOf(hr)!==-1||!e.willInsertAfter?r:r+1},onDragMove(t,e){const{move:n,realList:i}=this;if(!n||!i)return!0;const r=this.getRelatedContextFromMoveEvent(t),o=this.computeFutureIndex(r,t),s={...this.context,futureIndex:o},a={...t,relatedContext:r,draggedContext:s};return n(a,e)},onDragEnd(){hr=null}}}),Ui=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},ed={name:"ExerTagFilter",order:1,components:{draggable:Ya},data(){return{isRowVisible:{1:!0},mainStore:Hi()}},methods:{toggleRowVisibility:function(t){this.isRowVisible[t]=!this.isRowVisible[t]}}},nd=q("h3",{class:"text-lg"},"Exercises Filter",-1);function id(t,e,n,i,r,o){return kt(),jt("div",null,[q("div",null,[q("button",{onClick:e[0]||(e[0]=s=>o.toggleRowVisibility(1)),class:"text-black focus:outline-none"},[q("span",{class:vt(["symbol",{hidden:!r.isRowVisible[1]}])},"▲",2),q("span",{class:vt(["symbol",{hidden:r.isRowVisible[1]}])},"▼",2)]),nd]),q("div",{class:vt({hidden:!r.isRowVisible[1]})},"dinmi mueter",2)])}const rd=Ui(ed,[["render",id]]),od={name:"ExerMenu",display:"Exercises Selector Menu",order:1,components:{draggable:Ya,ExerTagFilter:rd},data(){return{list1:[],list2:nu().exercises,isRowVisible:{1:!0},mainStore:Hi()}},methods:{toggleRowVisibility:function(t){this.isRowVisible[t]=!this.isRowVisible[t]},log:function(t){this.mainStore.set(this.list1),window.console.log(t)}}},sd=q("h3",{class:"text-lg"},"Exercises Configuration",-1),ad={class:"flex"},ld={class:"w-1/2 p-4"},fd=q("h2",{class:"text-lg font-bold"},"Filter",-1),cd=q("h2",{class:"text-lg font-bold"},"Available Items",-1),ud={class:"p-2 bg-white border mb-2 cursor-move"},dd=q("br",null,null,-1),hd=["src"],gd={class:"w-1/2 p-4"},pd=q("h2",{class:"text-lg font-bold"},"Selected Items",-1),md={class:"p-2 bg-white border mb-2 cursor-move"},_d=["src"];function bd(t,e,n,i,r,o){const s=Mn("ExerTagFilter"),a=Mn("draggable");return kt(),jt("div",null,[mt(s),q("div",null,[q("button",{onClick:e[0]||(e[0]=l=>o.toggleRowVisibility(1)),class:"text-black focus:outline-none"},[q("span",{class:vt(["symbol",{hidden:!r.isRowVisible[1]}])},"▲",2),q("span",{class:vt(["symbol",{hidden:r.isRowVisible[1]}])},"▼",2)]),sd]),q("div",ad,[q("div",ld,[q("div",{class:vt(["border p-4 bg-gray-100 text-gray-800 mb-4",{hidden:!r.isRowVisible[1]}])},[fd,Dr(" Here be dragons or filters. ")],2),q("div",{class:vt(["border p-4 bg-gray-100 text-gray-800",{hidden:!r.isRowVisible[1]}])},[cd,mt(a,{class:"list-group",list:r.list2,group:"people",itemKey:"name"},{item:xr(({element:l,index:f})=>[q("div",ud,[Dr(Le(l.title)+" ",1),dd,q("img",{src:`previews/${l.preview}`},null,8,hd)])]),_:1},8,["list"])],2)]),q("div",gd,[q("div",{class:vt(["border p-4 bg-gray-100 text-gray-800",{hidden:!r.isRowVisible[1]}])},[pd,mt(a,{class:"list-group",list:r.list1,group:"people",onChange:o.log,itemKey:"name"},{item:xr(({element:l})=>[q("div",md,[q("img",{src:`previews/${l.preview}`},null,8,_d)])]),_:1},8,["list","onChange"])],2)])])])}const xd=Ui(od,[["render",bd]]),$d={data(){return{selectedOption:-1,options:iu(),strings:null,stringsArr:{},mainStore:Hi(),isRowVisible:{1:!0}}},methods:{updateStrings(){const t=this.options[this.selectedOption];t?(t.strings,this.mainStore.templateUuid=t.uuid,this.strings=new Map(t.fields)):this.strings=new Map},updateStringMap(){let t=new Map;for(let[e,n]of Object.entries(this.stringsArr))t.set(e,n);this.mainStore.setTemplateOptions(t)},toggleRowVisibility:function(t){this.isRowVisible[t]=!this.isRowVisible[t]}}},vd={class:"grid gap-4"},yd={class:"flex justify-between items-center"},wd=q("h3",{class:"text-lg"},"Template Configuration",-1),Ed=["value"],Sd=q("p",{class:"text-gray-700"},"Resulting Strings:",-1),Cd={key:0,class:"block text-sm font-medium text-gray-700"},Td=["onUpdate:modelValue"];function Rd(t,e,n,i,r,o){return kt(),jt("div",vd,[q("div",yd,[wd,q("button",{onClick:e[0]||(e[0]=s=>o.toggleRowVisibility(1)),class:"text-white focus:outline-none"},[q("span",{class:vt(["symbol",{hidden:!r.isRowVisible[1]}])},"▲",2),q("span",{class:vt(["symbol",{hidden:r.isRowVisible[1]}])},"▼",2)])]),q("label",{class:vt(["block text-sm font-medium text-gray-700 mb-2",{hidden:!r.isRowVisible[1]}])}," Select an option: ",2),ce(q("select",{"onUpdate:modelValue":e[1]||(e[1]=s=>r.selectedOption=s),onChange:e[2]||(e[2]=(...s)=>o.updateStrings&&o.updateStrings(...s)),class:vt(["w-full border p-2 rounded-md text-gray-700",{hidden:!r.isRowVisible[1]}])},[(kt(!0),jt(qt,null,yr(r.options,(s,a)=>(kt(),jt("option",{key:a,value:a},Le(a)+" – "+Le(s.title),9,Ed))),128))],34),[[qc,r.selectedOption]]),q("div",{class:vt(["mt-4",{hidden:!r.isRowVisible[1]}])},[Sd,(kt(!0),jt(qt,null,yr(r.strings,(s,a)=>(kt(),jt("div",{key:a,class:"mt-2"},[s[1]?(kt(),jt("label",Cd,Le(s[1])+": ",1)):Oo("",!0),s[1]?ce((kt(),jt("input",{key:1,"onUpdate:modelValue":l=>r.stringsArr[s[0]]=l,type:"text",onInput:e[3]||(e[3]=(...l)=>o.updateStringMap&&o.updateStringMap(...l)),onChange:e[4]||(e[4]=(...l)=>o.updateStringMap&&o.updateStringMap(...l)),class:"w-full border p-2 text-gray-700"},null,40,Td)),[[kc,r.stringsArr[s[0]]]]):Oo("",!0)]))),128))],2)])}const Dd=Ui($d,[["render",Rd]]),kd={name:"GenViewDocument",components:{TheMenu:xd,TemplateMenu:Dd},setup(){const t=$e(),e=Hi(),n=$e(),i=$e(),r=$e([{name:"Template"},{name:"Exercises"},{name:"Exercise PDF"},{name:"Solutions PDF"},{name:"Configuration"},{name:"Source"},{name:"Log"}]),o=$e(0),s=f=>{o.value=f},a=$e(!1);return Zr(()=>{t.value=e.items}),Cn(e.$state,f=>{n.value=JSON.stringify(f);let c=e.generateConfig();c.docType=oo.Source,rs(c).then(h=>{i.value=h})}),{items:t,compilebtn:async()=>{const f=document.getElementById("pdfbox"),c=document.getElementById("pdflog");a.value=!0;let h=await rs(e.generateConfig());if(a.value=!1,f&&h.status==0){const g=new Blob([h.pdf],{type:"application/pdf"}),m=URL.createObjectURL(g);setTimeout(()=>{URL.revokeObjectURL(m)},3e4),console.log(m),f.innerHTML=`<embed src="${m}" width="100%" style="height: 100vh;" type="application/pdf">`}c.innerHTML=`${h.log}`},tabs:r,selectedTab:no(()=>o.value),selectTab:s,pdfConfig:n,pdfSource:i,isButtonDisabled:a}}},qd={class:"flex p-4 space-x-4 bg-gray-400"},Nd={class:"pr-5"},Ad=["onClick"],Id={class:"p-4"},Pd={class:"mt-4"},Od={class:"mt-4"},Fd={class:"mt-4"},jd=q("div",{class:"p-4",id:"pdfbox"},null,-1),Md=[jd],zd={class:"mt-4"},Ld=q("div",null,[q("p",null,"Content for Tab 2"),q("p",null,"yadda yadda")],-1),Bd=[Ld],Hd={class:"mt-4"},Wd={class:"p-4",id:"pdfconfig"},Ud={class:"mt-4",style:{"overflow-x":"auto"}},Yd={class:"p-4",id:"pdfsource"},Xd={style:{"white-space":"pre","font-family":"monospace"}},Vd={class:"mt-4"},Kd=q("div",{class:"p-4",style:{"white-space":"pre","font-family":"monospace"},id:"pdflog"},null,-1),Gd=[Kd];function Zd(t,e,n,i,r,o){const s=Mn("TemplateMenu"),a=Mn("TheMenu");return kt(),jt("div",null,[q("div",qd,[q("div",Nd,[q("button",{class:vt(["p-2","rounded",{"bg-gray-500":i.isButtonDisabled},{"bg-blue-500 text-white":!i.isButtonDisabled}]),type:"button",onClick:e[0]||(e[0]=(...l)=>i.compilebtn&&i.compilebtn(...l)),id:"compilebtn"}," Compile ",2)]),(kt(!0),jt(qt,null,yr(i.tabs,(l,f)=>(kt(),jt("div",{key:f,onClick:c=>i.selectTab(f),class:vt({"bg-gray-400 text-black":i.selectedTab===f,"bg-gray-200":i.selectedTab!==f,"cursor-pointer":!0,"p-2":!0})},Le(l.name),11,Ad))),128))]),q("div",Id,[ce(q("div",Pd,[mt(s)],512),[[Ae,i.selectedTab===0]]),ce(q("div",Od,[mt(a)],512),[[Ae,i.selectedTab===1]]),ce(q("div",Fd,Md,512),[[Ae,i.selectedTab===2]]),ce(q("div",zd,Bd,512),[[Ae,i.selectedTab===3]]),ce(q("div",Hd,[q("div",Wd,Le(i.pdfConfig),1)],512),[[Ae,i.selectedTab===4]]),ce(q("div",Ud,[q("div",Yd,[q("div",Xd,Le(i.pdfSource),1)])],512),[[Ae,i.selectedTab===5]]),ce(q("div",Vd,Gd,512),[[Ae,i.selectedTab===6]])])])}const Jd=Ui(kd,[["render",Zd]]),Qd={class:"flex flex-col min-h-screen"},th=q("header",{class:"bg-gray-500 p-4 text-white"},[q("h1",{class:"text-2xl"},"Exercise Collection Generator")],-1),eh={class:"flex flex-1"},nh={class:"flex-1"},ih={__name:"App",setup(t){return(e,n)=>(kt(),jt("div",Qd,[th,q("div",eh,[q("main",nh,[mt(Jd)])])]))}};Ic(ih).use(Fc()).mount("#app")});export default rh();
