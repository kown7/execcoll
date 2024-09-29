var Gl=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var oh=Gl(Kt=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Mr(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const st={},nn=[],Vt=()=>{},Jl=()=>!1,Zl=/^on[^a-z]/,Ri=t=>Zl.test(t),Lr=t=>t.startsWith("onUpdate:"),bt=Object.assign,Br=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ql=Object.prototype.hasOwnProperty,Q=(t,e)=>Ql.call(t,e),P=Array.isArray,rn=t=>Yn(t)==="[object Map]",Di=t=>Yn(t)==="[object Set]",mo=t=>Yn(t)==="[object Date]",H=t=>typeof t=="function",xt=t=>typeof t=="string",fn=t=>typeof t=="symbol",rt=t=>t!==null&&typeof t=="object",bs=t=>(rt(t)||H(t))&&H(t.then)&&H(t.catch),xs=Object.prototype.toString,Yn=t=>xs.call(t),ta=t=>Yn(t).slice(8,-1),$s=t=>Yn(t)==="[object Object]",Hr=t=>xt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ri=Mr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ea=/-(\w)/g,oe=qi(t=>t.replace(ea,(e,n)=>n?n.toUpperCase():"")),na=/\B([A-Z])/g,gn=qi(t=>t.replace(na,"-$1").toLowerCase()),Ii=qi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ki=qi(t=>t?`on${Ii(t)}`:""),ze=(t,e)=>!Object.is(t,e),oi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},gi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},pi=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ia=t=>{const e=xt(t)?Number(t):NaN;return isNaN(e)?t:e};let _o;const mr=()=>_o||(_o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yr(t){if(P(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=xt(i)?la(i):Yr(i);if(r)for(const o in r)e[o]=r[o]}return e}else if(xt(t)||rt(t))return t}const ra=/;(?![^(]*\))/g,oa=/:([^]+)/,sa=/\/\*[^]*?\*\//g;function la(t){const e={};return t.replace(sa,"").split(ra).forEach(n=>{if(n){const i=n.split(oa);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ht(t){let e="";if(xt(t))e=t;else if(P(t))for(let n=0;n<t.length;n++){const i=ht(t[n]);i&&(e+=i+" ")}else if(rt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const aa="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fa=Mr(aa);function vs(t){return!!t||t===""}function ca(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Ai(t[i],e[i]);return n}function Ai(t,e){if(t===e)return!0;let n=mo(t),i=mo(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=fn(t),i=fn(e),n||i)return t===e;if(n=P(t),i=P(e),n||i)return n&&i?ca(t,e):!1;if(n=rt(t),i=rt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,o=Object.keys(e).length;if(r!==o)return!1;for(const s in t){const l=t.hasOwnProperty(s),a=e.hasOwnProperty(s);if(l&&!a||!l&&a||!Ai(t[s],e[s]))return!1}}return String(t)===String(e)}function ua(t,e){return t.findIndex(n=>Ai(n,e))}const Ee=t=>xt(t)?t:t==null?"":P(t)||rt(t)&&(t.toString===xs||!H(t.toString))?JSON.stringify(t,ys,2):String(t),ys=(t,e)=>e&&e.__v_isRef?ys(t,e.value):rn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Di(e)?{[`Set(${e.size})`]:[...e.values()]}:rt(e)&&!P(e)&&!$s(e)?String(e):e;let jt;class ws{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=jt;try{return jt=this,e()}finally{jt=n}}}on(){jt=this}off(){jt=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Es(t){return new ws(t)}function da(t,e=jt){e&&e.active&&e.effects.push(t)}function Ss(){return jt}function ha(t){jt&&jt.cleanups.push(t)}const zr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Cs=t=>(t.w&De)>0,Ts=t=>(t.n&De)>0,ga=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=De},pa=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Cs(r)&&!Ts(r)?r.delete(t):e[n++]=r,r.w&=~De,r.n&=~De}e.length=n}},mi=new WeakMap;let vn=0,De=1;const _r=30;let Ut;const He=Symbol(""),br=Symbol("");class Xr{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,da(this,i)}run(){if(!this.active)return this.fn();let e=Ut,n=Ce;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ut,Ut=this,Ce=!0,De=1<<++vn,vn<=_r?ga(this):bo(this),this.fn()}finally{vn<=_r&&pa(this),De=1<<--vn,Ut=this.parent,Ce=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ut===this?this.deferStop=!0:this.active&&(bo(this),this.onStop&&this.onStop(),this.active=!1)}}function bo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ce=!0;const Rs=[];function pn(){Rs.push(Ce),Ce=!1}function mn(){const t=Rs.pop();Ce=t===void 0?!0:t}function Ot(t,e,n){if(Ce&&Ut){let i=mi.get(t);i||mi.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=zr()),Ds(r)}}function Ds(t,e){let n=!1;vn<=_r?Ts(t)||(t.n|=De,n=!Cs(t)):n=!t.has(Ut),n&&(t.add(Ut),Ut.deps.push(t))}function ue(t,e,n,i,r,o){const s=mi.get(t);if(!s)return;let l=[];if(e==="clear")l=[...s.values()];else if(n==="length"&&P(t)){const a=Number(i);s.forEach((f,c)=>{(c==="length"||!fn(c)&&c>=a)&&l.push(f)})}else switch(n!==void 0&&l.push(s.get(n)),e){case"add":P(t)?Hr(n)&&l.push(s.get("length")):(l.push(s.get(He)),rn(t)&&l.push(s.get(br)));break;case"delete":P(t)||(l.push(s.get(He)),rn(t)&&l.push(s.get(br)));break;case"set":rn(t)&&l.push(s.get(He));break}if(l.length===1)l[0]&&xr(l[0]);else{const a=[];for(const f of l)f&&a.push(...f);xr(zr(a))}}function xr(t,e){const n=P(t)?t:[...t];for(const i of n)i.computed&&xo(i);for(const i of n)i.computed||xo(i)}function xo(t,e){(t!==Ut||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function ma(t,e){var n;return(n=mi.get(t))==null?void 0:n.get(e)}const _a=Mr("__proto__,__v_isRef,__isVue"),qs=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fn)),$o=ba();function ba(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=G(this);for(let o=0,s=this.length;o<s;o++)Ot(i,"get",o+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(G)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){pn();const i=G(this)[e].apply(this,n);return mn(),i}}),t}function xa(t){const e=G(this);return Ot(e,"has",t),e.hasOwnProperty(t)}class Is{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,i){const r=this._isReadonly,o=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw"&&i===(r?o?Aa:ks:o?Os:Ps).get(e))return e;const s=P(e);if(!r){if(s&&Q($o,n))return Reflect.get($o,n,i);if(n==="hasOwnProperty")return xa}const l=Reflect.get(e,n,i);return(fn(n)?qs.has(n):_a(n))||(r||Ot(e,"get",n),o)?l:gt(l)?s&&Hr(n)?l:l.value:rt(l)?r?Ns(l):Oi(l):l}}class As extends Is{constructor(e=!1){super(!1,e)}set(e,n,i,r){let o=e[n];if(cn(o)&&gt(o)&&!gt(i))return!1;if(!this._shallow&&(!_i(i)&&!cn(i)&&(o=G(o),i=G(i)),!P(e)&&gt(o)&&!gt(i)))return o.value=i,!0;const s=P(e)&&Hr(n)?Number(n)<e.length:Q(e,n),l=Reflect.set(e,n,i,r);return e===G(r)&&(s?ze(i,o)&&ue(e,"set",n,i):ue(e,"add",n,i)),l}deleteProperty(e,n){const i=Q(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ue(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!fn(n)||!qs.has(n))&&Ot(e,"has",n),i}ownKeys(e){return Ot(e,"iterate",P(e)?"length":He),Reflect.ownKeys(e)}}class $a extends Is{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const va=new As,ya=new $a,wa=new As(!0),Ur=t=>t,Pi=t=>Reflect.getPrototypeOf(t);function Wn(t,e,n=!1,i=!1){t=t.__v_raw;const r=G(t),o=G(e);n||(ze(e,o)&&Ot(r,"get",e),Ot(r,"get",o));const{has:s}=Pi(r),l=i?Ur:n?Kr:Nn;if(s.call(r,e))return l(t.get(e));if(s.call(r,o))return l(t.get(o));t!==r&&t.get(e)}function Vn(t,e=!1){const n=this.__v_raw,i=G(n),r=G(t);return e||(ze(t,r)&&Ot(i,"has",t),Ot(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Kn(t,e=!1){return t=t.__v_raw,!e&&Ot(G(t),"iterate",He),Reflect.get(t,"size",t)}function vo(t){t=G(t);const e=G(this);return Pi(e).has.call(e,t)||(e.add(t),ue(e,"add",t,t)),this}function yo(t,e){e=G(e);const n=G(this),{has:i,get:r}=Pi(n);let o=i.call(n,t);o||(t=G(t),o=i.call(n,t));const s=r.call(n,t);return n.set(t,e),o?ze(e,s)&&ue(n,"set",t,e):ue(n,"add",t,e),this}function wo(t){const e=G(this),{has:n,get:i}=Pi(e);let r=n.call(e,t);r||(t=G(t),r=n.call(e,t)),i&&i.call(e,t);const o=e.delete(t);return r&&ue(e,"delete",t,void 0),o}function Eo(){const t=G(this),e=t.size!==0,n=t.clear();return e&&ue(t,"clear",void 0,void 0),n}function Gn(t,e){return function(i,r){const o=this,s=o.__v_raw,l=G(s),a=e?Ur:t?Kr:Nn;return!t&&Ot(l,"iterate",He),s.forEach((f,c)=>i.call(r,a(f),a(c),o))}}function Jn(t,e,n){return function(...i){const r=this.__v_raw,o=G(r),s=rn(o),l=t==="entries"||t===Symbol.iterator&&s,a=t==="keys"&&s,f=r[t](...i),c=n?Ur:e?Kr:Nn;return!e&&Ot(o,"iterate",a?br:He),{next(){const{value:h,done:g}=f.next();return g?{value:h,done:g}:{value:l?[c(h[0]),c(h[1])]:c(h),done:g}},[Symbol.iterator](){return this}}}}function me(t){return function(...e){return t==="delete"?!1:this}}function Ea(){const t={get(o){return Wn(this,o)},get size(){return Kn(this)},has:Vn,add:vo,set:yo,delete:wo,clear:Eo,forEach:Gn(!1,!1)},e={get(o){return Wn(this,o,!1,!0)},get size(){return Kn(this)},has:Vn,add:vo,set:yo,delete:wo,clear:Eo,forEach:Gn(!1,!0)},n={get(o){return Wn(this,o,!0)},get size(){return Kn(this,!0)},has(o){return Vn.call(this,o,!0)},add:me("add"),set:me("set"),delete:me("delete"),clear:me("clear"),forEach:Gn(!0,!1)},i={get(o){return Wn(this,o,!0,!0)},get size(){return Kn(this,!0)},has(o){return Vn.call(this,o,!0)},add:me("add"),set:me("set"),delete:me("delete"),clear:me("clear"),forEach:Gn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=Jn(o,!1,!1),n[o]=Jn(o,!0,!1),e[o]=Jn(o,!1,!0),i[o]=Jn(o,!0,!0)}),[t,n,e,i]}const[Sa,Ca,Ta,Ra]=Ea();function Wr(t,e){const n=e?t?Ra:Ta:t?Ca:Sa;return(i,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Q(n,r)&&r in i?n:i,r,o)}const Da={get:Wr(!1,!1)},qa={get:Wr(!1,!0)},Ia={get:Wr(!0,!1)},Ps=new WeakMap,Os=new WeakMap,ks=new WeakMap,Aa=new WeakMap;function Pa(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oa(t){return t.__v_skip||!Object.isExtensible(t)?0:Pa(ta(t))}function Oi(t){return cn(t)?t:Vr(t,!1,va,Da,Ps)}function ka(t){return Vr(t,!1,wa,qa,Os)}function Ns(t){return Vr(t,!0,ya,Ia,ks)}function Vr(t,e,n,i,r){if(!rt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=r.get(t);if(o)return o;const s=Oa(t);if(s===0)return t;const l=new Proxy(t,s===2?i:n);return r.set(t,l),l}function Te(t){return cn(t)?Te(t.__v_raw):!!(t&&t.__v_isReactive)}function cn(t){return!!(t&&t.__v_isReadonly)}function _i(t){return!!(t&&t.__v_isShallow)}function Fs(t){return Te(t)||cn(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function ki(t){return gi(t,"__v_skip",!0),t}const Nn=t=>rt(t)?Oi(t):t,Kr=t=>rt(t)?Ns(t):t;function js(t){Ce&&Ut&&(t=G(t),Ds(t.dep||(t.dep=zr())))}function Ms(t,e){t=G(t);const n=t.dep;n&&xr(n)}function gt(t){return!!(t&&t.__v_isRef===!0)}function $e(t){return Na(t,!1)}function Na(t,e){return gt(t)?t:new Fa(t,e)}class Fa{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:Nn(e)}get value(){return js(this),this._value}set value(e){const n=this.__v_isShallow||_i(e)||cn(e);e=n?e:G(e),ze(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Nn(e),Ms(this))}}function ja(t){return gt(t)?t.value:t}const Ma={get:(t,e,n)=>ja(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return gt(r)&&!gt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Ls(t){return Te(t)?t:new Proxy(t,Ma)}function La(t){const e=P(t)?new Array(t.length):{};for(const n in t)e[n]=Ha(t,n);return e}class Ba{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return ma(G(this._object),this._key)}}function Ha(t,e,n){const i=t[e];return gt(i)?i:new Ba(t,e,n)}class Ya{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Xr(e,()=>{this._dirty||(this._dirty=!0,Ms(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=G(this);return js(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function za(t,e,n=!1){let i,r;const o=H(t);return o?(i=t,r=Vt):(i=t.get,r=t.set),new Ya(i,r,o||!r,n)}function Re(t,e,n,i){let r;try{r=i?t(...i):t()}catch(o){Ni(o,e,n)}return r}function Yt(t,e,n,i){if(H(t)){const o=Re(t,e,n,i);return o&&bs(o)&&o.catch(s=>{Ni(s,e,n)}),o}const r=[];for(let o=0;o<t.length;o++)r.push(Yt(t[o],e,n,i));return r}function Ni(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let o=e.parent;const s=e.proxy,l=n;for(;o;){const f=o.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](t,s,l)===!1)return}o=o.parent}const a=e.appContext.config.errorHandler;if(a){Re(a,null,10,[t,s,l]);return}}Xa(t,n,r,i)}function Xa(t,e,n,i=!0){console.error(t)}let Fn=!1,$r=!1;const Ct=[];let ie=0;const on=[];let ce=null,je=0;const Bs=Promise.resolve();let Gr=null;function Fi(t){const e=Gr||Bs;return t?e.then(this?t.bind(this):t):e}function Ua(t){let e=ie+1,n=Ct.length;for(;e<n;){const i=e+n>>>1,r=Ct[i],o=jn(r);o<t||o===t&&r.pre?e=i+1:n=i}return e}function Jr(t){(!Ct.length||!Ct.includes(t,Fn&&t.allowRecurse?ie+1:ie))&&(t.id==null?Ct.push(t):Ct.splice(Ua(t.id),0,t),Hs())}function Hs(){!Fn&&!$r&&($r=!0,Gr=Bs.then(zs))}function Wa(t){const e=Ct.indexOf(t);e>ie&&Ct.splice(e,1)}function Va(t){P(t)?on.push(...t):(!ce||!ce.includes(t,t.allowRecurse?je+1:je))&&on.push(t),Hs()}function So(t,e=Fn?ie+1:0){for(;e<Ct.length;e++){const n=Ct[e];n&&n.pre&&(Ct.splice(e,1),e--,n())}}function Ys(t){if(on.length){const e=[...new Set(on)];if(on.length=0,ce){ce.push(...e);return}for(ce=e,ce.sort((n,i)=>jn(n)-jn(i)),je=0;je<ce.length;je++)ce[je]();ce=null,je=0}}const jn=t=>t.id==null?1/0:t.id,Ka=(t,e)=>{const n=jn(t)-jn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function zs(t){$r=!1,Fn=!0,Ct.sort(Ka);const e=Vt;try{for(ie=0;ie<Ct.length;ie++){const n=Ct[ie];n&&n.active!==!1&&Re(n,null,14)}}finally{ie=0,Ct.length=0,Ys(),Fn=!1,Gr=null,(Ct.length||on.length)&&zs()}}function Ga(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||st;let r=n;const o=e.startsWith("update:"),s=o&&e.slice(7);if(s&&s in i){const c=`${s==="modelValue"?"model":s}Modifiers`,{number:h,trim:g}=i[c]||st;g&&(r=n.map(m=>xt(m)?m.trim():m)),h&&(r=n.map(pi))}let l,a=i[l=Ki(e)]||i[l=Ki(oe(e))];!a&&o&&(a=i[l=Ki(gn(e))]),a&&Yt(a,t,6,r);const f=i[l+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Yt(f,t,6,r)}}function Xs(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const o=t.emits;let s={},l=!1;if(!H(t)){const a=f=>{const c=Xs(f,e,!0);c&&(l=!0,bt(s,c))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!o&&!l?(rt(t)&&i.set(t,null),null):(P(o)?o.forEach(a=>s[a]=null):bt(s,o),rt(t)&&i.set(t,s),s)}function ji(t,e){return!t||!Ri(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,gn(e))||Q(t,e))}let Pt=null,Us=null;function bi(t){const e=Pt;return Pt=t,Us=t&&t.type.__scopeId||null,e}function vr(t,e=Pt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&No(-1);const o=bi(e);let s;try{s=t(...r)}finally{bi(o),i._d&&No(1)}return s};return i._n=!0,i._c=!0,i._d=!0,i}function Gi(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:o,propsOptions:[s],slots:l,attrs:a,emit:f,render:c,renderCache:h,data:g,setupState:m,ctx:$,inheritAttrs:E}=t;let X,z;const M=bi(t);try{if(n.shapeFlag&4){const A=r||i;X=ne(c.call(A,A,h,o,m,g,$)),z=a}else{const A=e;X=ne(A.length>1?A(o,{attrs:a,slots:l,emit:f}):A(o,null)),z=e.props?a:Ja(a)}}catch(A){Dn.length=0,Ni(A,t,1),X=_t(qe)}let V=X;if(z&&E!==!1){const A=Object.keys(z),{shapeFlag:U}=V;A.length&&U&7&&(s&&A.some(Lr)&&(z=Za(z,s)),V=Xe(V,z))}return n.dirs&&(V=Xe(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),X=V,bi(M),X}const Ja=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ri(n))&&((e||(e={}))[n]=t[n]);return e},Za=(t,e)=>{const n={};for(const i in t)(!Lr(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Qa(t,e,n){const{props:i,children:r,component:o}=t,{props:s,children:l,patchFlag:a}=e,f=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?Co(i,s,f):!!s;if(a&8){const c=e.dynamicProps;for(let h=0;h<c.length;h++){const g=c[h];if(s[g]!==i[g]&&!ji(f,g))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:i===s?!1:i?s?Co(i,s,f):!0:!!s;return!1}function Co(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(e[o]!==t[o]&&!ji(n,o))return!0}return!1}function tf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ef=t=>t.__isSuspense;function nf(t,e){e&&e.pendingBranch?P(t)?e.effects.push(...t):e.effects.push(t):Va(t)}const Zn={};function Cn(t,e,n){return Ws(t,e,n)}function Ws(t,e,{immediate:n,deep:i,flush:r,onTrack:o,onTrigger:s}=st){var l;const a=Ss()===((l=vt)==null?void 0:l.scope)?vt:null;let f,c=!1,h=!1;if(gt(t)?(f=()=>t.value,c=_i(t)):Te(t)?(f=()=>t,i=!0):P(t)?(h=!0,c=t.some(A=>Te(A)||_i(A)),f=()=>t.map(A=>{if(gt(A))return A.value;if(Te(A))return Be(A);if(H(A))return Re(A,a,2)})):H(t)?e?f=()=>Re(t,a,2):f=()=>{if(!(a&&a.isUnmounted))return g&&g(),Yt(t,a,3,[m])}:f=Vt,e&&i){const A=f;f=()=>Be(A())}let g,m=A=>{g=M.onStop=()=>{Re(A,a,4)}},$;if(Hn)if(m=Vt,e?n&&Yt(e,a,3,[f(),h?[]:void 0,m]):f(),r==="sync"){const A=nc();$=A.__watcherHandles||(A.__watcherHandles=[])}else return Vt;let E=h?new Array(t.length).fill(Zn):Zn;const X=()=>{if(M.active)if(e){const A=M.run();(i||c||(h?A.some((U,ct)=>ze(U,E[ct])):ze(A,E)))&&(g&&g(),Yt(e,a,3,[A,E===Zn?void 0:h&&E[0]===Zn?[]:E,m]),E=A)}else M.run()};X.allowRecurse=!!e;let z;r==="sync"?z=X:r==="post"?z=()=>At(X,a&&a.suspense):(X.pre=!0,a&&(X.id=a.uid),z=()=>Jr(X));const M=new Xr(f,z);e?n?X():E=M.run():r==="post"?At(M.run.bind(M),a&&a.suspense):M.run();const V=()=>{M.stop(),a&&a.scope&&Br(a.scope.effects,M)};return $&&$.push(V),V}function rf(t,e,n){const i=this.proxy,r=xt(t)?t.includes(".")?Vs(i,t):()=>i[t]:t.bind(i,i);let o;H(e)?o=e:(o=e.handler,n=e);const s=vt;un(this);const l=Ws(r,o.bind(i),n);return s?un(s):Ye(),l}function Vs(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Be(t,e){if(!rt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),gt(t))Be(t.value,e);else if(P(t))for(let n=0;n<t.length;n++)Be(t[n],e);else if(Di(t)||rn(t))t.forEach(n=>{Be(n,e)});else if($s(t))for(const n in t)Be(t[n],e);return t}function te(t,e){const n=Pt;if(n===null)return t;const i=Hi(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[s,l,a,f=st]=e[o];s&&(H(s)&&(s={mounted:s,updated:s}),s.deep&&Be(l),r.push({dir:s,instance:i,value:l,oldValue:void 0,arg:a,modifiers:f}))}return t}function Ie(t,e,n,i){const r=t.dirs,o=e&&e.dirs;for(let s=0;s<r.length;s++){const l=r[s];o&&(l.oldValue=o[s].value);let a=l.dir[i];a&&(pn(),Yt(a,n,8,[t.el,l,t,e]),mn())}}const Ve=Symbol("_leaveCb"),Qn=Symbol("_enterCb");function of(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Zr(()=>{t.isMounted=!0}),Qs(()=>{t.isUnmounting=!0}),t}const Bt=[Function,Array],sf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Bt,onEnter:Bt,onAfterEnter:Bt,onEnterCancelled:Bt,onBeforeLeave:Bt,onLeave:Bt,onAfterLeave:Bt,onLeaveCancelled:Bt,onBeforeAppear:Bt,onAppear:Bt,onAfterAppear:Bt,onAppearCancelled:Bt};function lf(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function yr(t,e,n,i){const{appear:r,mode:o,persisted:s=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:f,onEnterCancelled:c,onBeforeLeave:h,onLeave:g,onAfterLeave:m,onLeaveCancelled:$,onBeforeAppear:E,onAppear:X,onAfterAppear:z,onAppearCancelled:M}=e,V=String(t.key),A=lf(n,t),U=(T,D)=>{T&&Yt(T,i,9,D)},ct=(T,D)=>{const L=D[1];U(T,D),P(T)?T.every(J=>J.length<=1)&&L():T.length<=1&&L()},lt={mode:o,persisted:s,beforeEnter(T){let D=l;if(!n.isMounted)if(r)D=E||l;else return;T[Ve]&&T[Ve](!0);const L=A[V];L&&Qe(t,L)&&L.el[Ve]&&L.el[Ve](),U(D,[T])},enter(T){let D=a,L=f,J=c;if(!n.isMounted)if(r)D=X||a,L=z||f,J=M||c;else return;let R=!1;const K=T[Qn]=ft=>{R||(R=!0,ft?U(J,[T]):U(L,[T]),lt.delayedLeave&&lt.delayedLeave(),T[Qn]=void 0)};D?ct(D,[T,K]):K()},leave(T,D){const L=String(t.key);if(T[Qn]&&T[Qn](!0),n.isUnmounting)return D();U(h,[T]);let J=!1;const R=T[Ve]=K=>{J||(J=!0,D(),K?U($,[T]):U(m,[T]),T[Ve]=void 0,A[L]===t&&delete A[L])};A[L]=t,g?ct(g,[T,R]):R()},clone(T){return yr(T,e,n,i)}};return lt}function wr(t,e){t.shapeFlag&6&&t.component?wr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ks(t,e=!1,n){let i=[],r=0;for(let o=0;o<t.length;o++){let s=t[o];const l=n==null?s.key:String(n)+String(s.key!=null?s.key:o);s.type===qt?(s.patchFlag&128&&r++,i=i.concat(Ks(s.children,e,l))):(e||s.type!==qe)&&i.push(l!=null?Xe(s,{key:l}):s)}if(r>1)for(let o=0;o<i.length;o++)i[o].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function af(t,e){return H(t)?(()=>bt({name:t.name},e,{setup:t}))():t}const si=t=>!!t.type.__asyncLoader,Gs=t=>t.type.__isKeepAlive;function ff(t,e){Js(t,"a",e)}function cf(t,e){Js(t,"da",e)}function Js(t,e,n=vt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Mi(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Gs(r.parent.vnode)&&uf(i,e,n,r),r=r.parent}}function uf(t,e,n,i){const r=Mi(e,t,i,!0);tl(()=>{Br(i[e],r)},n)}function Mi(t,e,n=vt,i=!1){if(n){const r=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...s)=>{if(n.isUnmounted)return;pn(),un(n);const l=Yt(e,n,t,s);return Ye(),mn(),l});return i?r.unshift(o):r.push(o),o}}const ge=t=>(e,n=vt)=>(!Hn||t==="sp")&&Mi(t,(...i)=>e(...i),n),df=ge("bm"),Zr=ge("m"),hf=ge("bu"),Zs=ge("u"),Qs=ge("bum"),tl=ge("um"),gf=ge("sp"),pf=ge("rtg"),mf=ge("rtc");function _f(t,e=vt){Mi("ec",t,e)}const el="components";function Mn(t,e){return xf(el,t,!0,e)||t}const bf=Symbol.for("v-ndc");function xf(t,e,n=!0,i=!1){const r=Pt||vt;if(r){const o=r.type;if(t===el){const l=Qf(o,!1);if(l&&(l===e||l===oe(e)||l===Ii(oe(e))))return o}const s=To(r[t]||o[t],e)||To(r.appContext[t],e);return!s&&i?o:s}}function To(t,e){return t&&(t[e]||t[oe(e)]||t[Ii(oe(e))])}function li(t,e,n,i){let r;const o=n&&n[i];if(P(t)||xt(t)){r=new Array(t.length);for(let s=0,l=t.length;s<l;s++)r[s]=e(t[s],s,void 0,o&&o[s])}else if(typeof t=="number"){r=new Array(t);for(let s=0;s<t;s++)r[s]=e(s+1,s,void 0,o&&o[s])}else if(rt(t))if(t[Symbol.iterator])r=Array.from(t,(s,l)=>e(s,l,void 0,o&&o[l]));else{const s=Object.keys(t);r=new Array(s.length);for(let l=0,a=s.length;l<a;l++){const f=s[l];r[l]=e(t[f],f,l,o&&o[l])}}else r=[];return n&&(n[i]=r),r}const Er=t=>t?dl(t)?Hi(t)||t.proxy:Er(t.parent):null,Tn=bt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Er(t.parent),$root:t=>Er(t.root),$emit:t=>t.emit,$options:t=>Qr(t),$forceUpdate:t=>t.f||(t.f=()=>Jr(t.update)),$nextTick:t=>t.n||(t.n=Fi.bind(t.proxy)),$watch:t=>rf.bind(t)}),Ji=(t,e)=>t!==st&&!t.__isScriptSetup&&Q(t,e),$f={get({_:t},e){const{ctx:n,setupState:i,data:r,props:o,accessCache:s,type:l,appContext:a}=t;let f;if(e[0]!=="$"){const m=s[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(Ji(i,e))return s[e]=1,i[e];if(r!==st&&Q(r,e))return s[e]=2,r[e];if((f=t.propsOptions[0])&&Q(f,e))return s[e]=3,o[e];if(n!==st&&Q(n,e))return s[e]=4,n[e];Sr&&(s[e]=0)}}const c=Tn[e];let h,g;if(c)return e==="$attrs"&&Ot(t,"get",e),c(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==st&&Q(n,e))return s[e]=4,n[e];if(g=a.config.globalProperties,Q(g,e))return g[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:o}=t;return Ji(r,e)?(r[e]=n,!0):i!==st&&Q(i,e)?(i[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:o}},s){let l;return!!n[s]||t!==st&&Q(t,s)||Ji(e,s)||(l=o[0])&&Q(l,s)||Q(i,s)||Q(Tn,s)||Q(r.config.globalProperties,s)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ro(t){return P(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Sr=!0;function vf(t){const e=Qr(t),n=t.proxy,i=t.ctx;Sr=!1,e.beforeCreate&&Do(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:s,watch:l,provide:a,inject:f,created:c,beforeMount:h,mounted:g,beforeUpdate:m,updated:$,activated:E,deactivated:X,beforeDestroy:z,beforeUnmount:M,destroyed:V,unmounted:A,render:U,renderTracked:ct,renderTriggered:lt,errorCaptured:T,serverPrefetch:D,expose:L,inheritAttrs:J,components:R,directives:K,filters:ft}=e;if(f&&yf(f,i,null),s)for(const it in s){const tt=s[it];H(tt)&&(i[it]=tt.bind(n))}if(r){const it=r.call(n,n);rt(it)&&(t.data=Oi(it))}if(Sr=!0,o)for(const it in o){const tt=o[it],le=H(tt)?tt.bind(n,n):H(tt.get)?tt.get.bind(n,n):Vt,_n=!H(tt)&&H(tt.set)?tt.set.bind(n):Vt,Gt=io({get:le,set:_n});Object.defineProperty(i,it,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:Lt=>Gt.value=Lt})}if(l)for(const it in l)nl(l[it],i,n,it);if(a){const it=H(a)?a.call(n):a;Reflect.ownKeys(it).forEach(tt=>{Rf(tt,it[tt])})}c&&Do(c,t,"c");function Y(it,tt){P(tt)?tt.forEach(le=>it(le.bind(n))):tt&&it(tt.bind(n))}if(Y(df,h),Y(Zr,g),Y(hf,m),Y(Zs,$),Y(ff,E),Y(cf,X),Y(_f,T),Y(mf,ct),Y(pf,lt),Y(Qs,M),Y(tl,A),Y(gf,D),P(L))if(L.length){const it=t.exposed||(t.exposed={});L.forEach(tt=>{Object.defineProperty(it,tt,{get:()=>n[tt],set:le=>n[tt]=le})})}else t.exposed||(t.exposed={});U&&t.render===Vt&&(t.render=U),J!=null&&(t.inheritAttrs=J),R&&(t.components=R),K&&(t.directives=K)}function yf(t,e,n=Vt){P(t)&&(t=Cr(t));for(const i in t){const r=t[i];let o;rt(r)?"default"in r?o=Rn(r.from||i,r.default,!0):o=Rn(r.from||i):o=Rn(r),gt(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):e[i]=o}}function Do(t,e,n){Yt(P(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function nl(t,e,n,i){const r=i.includes(".")?Vs(n,i):()=>n[i];if(xt(t)){const o=e[t];H(o)&&Cn(r,o)}else if(H(t))Cn(r,t.bind(n));else if(rt(t))if(P(t))t.forEach(o=>nl(o,e,n,i));else{const o=H(t.handler)?t.handler.bind(n):e[t.handler];H(o)&&Cn(r,o,t)}}function Qr(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,l=o.get(e);let a;return l?a=l:!r.length&&!n&&!i?a=e:(a={},r.length&&r.forEach(f=>xi(a,f,s,!0)),xi(a,e,s)),rt(e)&&o.set(e,a),a}function xi(t,e,n,i=!1){const{mixins:r,extends:o}=e;o&&xi(t,o,n,!0),r&&r.forEach(s=>xi(t,s,n,!0));for(const s in e)if(!(i&&s==="expose")){const l=wf[s]||n&&n[s];t[s]=l?l(t[s],e[s]):e[s]}return t}const wf={data:qo,props:Io,emits:Io,methods:yn,computed:yn,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:yn,directives:yn,watch:Sf,provide:qo,inject:Ef};function qo(t,e){return e?t?function(){return bt(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Ef(t,e){return yn(Cr(t),Cr(e))}function Cr(t){if(P(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function yn(t,e){return t?bt(Object.create(null),t,e):e}function Io(t,e){return t?P(t)&&P(e)?[...new Set([...t,...e])]:bt(Object.create(null),Ro(t),Ro(e??{})):e}function Sf(t,e){if(!t)return e;if(!e)return t;const n=bt(Object.create(null),t);for(const i in e)n[i]=Tt(t[i],e[i]);return n}function il(){return{app:null,config:{isNativeTag:Jl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cf=0;function Tf(t,e){return function(i,r=null){H(i)||(i=bt({},i)),r!=null&&!rt(r)&&(r=null);const o=il(),s=new WeakSet;let l=!1;const a=o.app={_uid:Cf++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:ic,get config(){return o.config},set config(f){},use(f,...c){return s.has(f)||(f&&H(f.install)?(s.add(f),f.install(a,...c)):H(f)&&(s.add(f),f(a,...c))),a},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),a},component(f,c){return c?(o.components[f]=c,a):o.components[f]},directive(f,c){return c?(o.directives[f]=c,a):o.directives[f]},mount(f,c,h){if(!l){const g=_t(i,r);return g.appContext=o,c&&e?e(g,f):t(g,f,h),l=!0,a._container=f,f.__vue_app__=a,Hi(g.component)||g.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(f,c){return o.provides[f]=c,a},runWithContext(f){Ln=a;try{return f()}finally{Ln=null}}};return a}}let Ln=null;function Rf(t,e){if(vt){let n=vt.provides;const i=vt.parent&&vt.parent.provides;i===n&&(n=vt.provides=Object.create(i)),n[t]=e}}function Rn(t,e,n=!1){const i=vt||Pt;if(i||Ln){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Ln._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&H(e)?e.call(i&&i.proxy):e}}function Df(){return!!(vt||Pt||Ln)}function qf(t,e,n,i=!1){const r={},o={};gi(o,Bi,1),t.propsDefaults=Object.create(null),rl(t,e,r,o);for(const s in t.propsOptions[0])s in r||(r[s]=void 0);n?t.props=i?r:ka(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function If(t,e,n,i){const{props:r,attrs:o,vnode:{patchFlag:s}}=t,l=G(r),[a]=t.propsOptions;let f=!1;if((i||s>0)&&!(s&16)){if(s&8){const c=t.vnode.dynamicProps;for(let h=0;h<c.length;h++){let g=c[h];if(ji(t.emitsOptions,g))continue;const m=e[g];if(a)if(Q(o,g))m!==o[g]&&(o[g]=m,f=!0);else{const $=oe(g);r[$]=Tr(a,l,$,m,t,!1)}else m!==o[g]&&(o[g]=m,f=!0)}}}else{rl(t,e,r,o)&&(f=!0);let c;for(const h in l)(!e||!Q(e,h)&&((c=gn(h))===h||!Q(e,c)))&&(a?n&&(n[h]!==void 0||n[c]!==void 0)&&(r[h]=Tr(a,l,h,void 0,t,!0)):delete r[h]);if(o!==l)for(const h in o)(!e||!Q(e,h))&&(delete o[h],f=!0)}f&&ue(t,"set","$attrs")}function rl(t,e,n,i){const[r,o]=t.propsOptions;let s=!1,l;if(e)for(let a in e){if(ri(a))continue;const f=e[a];let c;r&&Q(r,c=oe(a))?!o||!o.includes(c)?n[c]=f:(l||(l={}))[c]=f:ji(t.emitsOptions,a)||(!(a in i)||f!==i[a])&&(i[a]=f,s=!0)}if(o){const a=G(n),f=l||st;for(let c=0;c<o.length;c++){const h=o[c];n[h]=Tr(r,a,h,f[h],t,!Q(f,h))}}return s}function Tr(t,e,n,i,r,o){const s=t[n];if(s!=null){const l=Q(s,"default");if(l&&i===void 0){const a=s.default;if(s.type!==Function&&!s.skipFactory&&H(a)){const{propsDefaults:f}=r;n in f?i=f[n]:(un(r),i=f[n]=a.call(null,e),Ye())}else i=a}s[0]&&(o&&!l?i=!1:s[1]&&(i===""||i===gn(n))&&(i=!0))}return i}function ol(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const o=t.props,s={},l=[];let a=!1;if(!H(t)){const c=h=>{a=!0;const[g,m]=ol(h,e,!0);bt(s,g),m&&l.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!o&&!a)return rt(t)&&i.set(t,nn),nn;if(P(o))for(let c=0;c<o.length;c++){const h=oe(o[c]);Ao(h)&&(s[h]=st)}else if(o)for(const c in o){const h=oe(c);if(Ao(h)){const g=o[c],m=s[h]=P(g)||H(g)?{type:g}:bt({},g);if(m){const $=ko(Boolean,m.type),E=ko(String,m.type);m[0]=$>-1,m[1]=E<0||$<E,($>-1||Q(m,"default"))&&l.push(h)}}}const f=[s,l];return rt(t)&&i.set(t,f),f}function Ao(t){return t[0]!=="$"}function Po(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Oo(t,e){return Po(t)===Po(e)}function ko(t,e){return P(e)?e.findIndex(n=>Oo(n,t)):H(e)&&Oo(e,t)?0:-1}const sl=t=>t[0]==="_"||t==="$stable",to=t=>P(t)?t.map(ne):[ne(t)],Af=(t,e,n)=>{if(e._n)return e;const i=vr((...r)=>to(e(...r)),n);return i._c=!1,i},ll=(t,e,n)=>{const i=t._ctx;for(const r in t){if(sl(r))continue;const o=t[r];if(H(o))e[r]=Af(r,o,i);else if(o!=null){const s=to(o);e[r]=()=>s}}},al=(t,e)=>{const n=to(e);t.slots.default=()=>n},Pf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),gi(e,"_",n)):ll(e,t.slots={})}else t.slots={},e&&al(t,e);gi(t.slots,Bi,1)},Of=(t,e,n)=>{const{vnode:i,slots:r}=t;let o=!0,s=st;if(i.shapeFlag&32){const l=e._;l?n&&l===1?o=!1:(bt(r,e),!n&&l===1&&delete r._):(o=!e.$stable,ll(e,r)),s=e}else e&&(al(t,e),s={default:1});if(o)for(const l in r)!sl(l)&&s[l]==null&&delete r[l]};function Rr(t,e,n,i,r=!1){if(P(t)){t.forEach((g,m)=>Rr(g,e&&(P(e)?e[m]:e),n,i,r));return}if(si(i)&&!r)return;const o=i.shapeFlag&4?Hi(i.component)||i.component.proxy:i.el,s=r?null:o,{i:l,r:a}=t,f=e&&e.r,c=l.refs===st?l.refs={}:l.refs,h=l.setupState;if(f!=null&&f!==a&&(xt(f)?(c[f]=null,Q(h,f)&&(h[f]=null)):gt(f)&&(f.value=null)),H(a))Re(a,l,12,[s,c]);else{const g=xt(a),m=gt(a);if(g||m){const $=()=>{if(t.f){const E=g?Q(h,a)?h[a]:c[a]:a.value;r?P(E)&&Br(E,o):P(E)?E.includes(o)||E.push(o):g?(c[a]=[o],Q(h,a)&&(h[a]=c[a])):(a.value=[o],t.k&&(c[t.k]=a.value))}else g?(c[a]=s,Q(h,a)&&(h[a]=s)):m&&(a.value=s,t.k&&(c[t.k]=s))};s?($.id=-1,At($,n)):$()}}}const At=nf;function kf(t){return Nf(t)}function Nf(t,e){const n=mr();n.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:s,createText:l,createComment:a,setText:f,setElementText:c,parentNode:h,nextSibling:g,setScopeId:m=Vt,insertStaticContent:$}=t,E=(u,d,p,_=null,b=null,y=null,C=!1,v=null,S=!!d.dynamicChildren)=>{if(u===d)return;u&&!Qe(u,d)&&(_=Un(u),Lt(u,b,y,!0),u=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:x,ref:O,shapeFlag:q}=d;switch(x){case Li:X(u,d,p,_);break;case qe:z(u,d,p,_);break;case Zi:u==null&&M(d,p,_,C);break;case qt:R(u,d,p,_,b,y,C,v,S);break;default:q&1?U(u,d,p,_,b,y,C,v,S):q&6?K(u,d,p,_,b,y,C,v,S):(q&64||q&128)&&x.process(u,d,p,_,b,y,C,v,S,Ue)}O!=null&&b&&Rr(O,u&&u.ref,y,d||u,!d)},X=(u,d,p,_)=>{if(u==null)i(d.el=l(d.children),p,_);else{const b=d.el=u.el;d.children!==u.children&&f(b,d.children)}},z=(u,d,p,_)=>{u==null?i(d.el=a(d.children||""),p,_):d.el=u.el},M=(u,d,p,_)=>{[u.el,u.anchor]=$(u.children,d,p,_,u.el,u.anchor)},V=({el:u,anchor:d},p,_)=>{let b;for(;u&&u!==d;)b=g(u),i(u,p,_),u=b;i(d,p,_)},A=({el:u,anchor:d})=>{let p;for(;u&&u!==d;)p=g(u),r(u),u=p;r(d)},U=(u,d,p,_,b,y,C,v,S)=>{C=C||d.type==="svg",u==null?ct(d,p,_,b,y,C,v,S):D(u,d,b,y,C,v,S)},ct=(u,d,p,_,b,y,C,v)=>{let S,x;const{type:O,props:q,shapeFlag:k,transition:j,dirs:W}=u;if(S=u.el=s(u.type,y,q&&q.is,q),k&8?c(S,u.children):k&16&&T(u.children,S,null,_,b,y&&O!=="foreignObject",C,v),W&&Ie(u,null,_,"created"),lt(S,u,u.scopeId,C,_),q){for(const nt in q)nt!=="value"&&!ri(nt)&&o(S,nt,null,q[nt],y,u.children,_,b,ae);"value"in q&&o(S,"value",null,q.value),(x=q.onVnodeBeforeMount)&&Zt(x,_,u)}W&&Ie(u,null,_,"beforeMount");const ot=Ff(b,j);ot&&j.beforeEnter(S),i(S,d,p),((x=q&&q.onVnodeMounted)||ot||W)&&At(()=>{x&&Zt(x,_,u),ot&&j.enter(S),W&&Ie(u,null,_,"mounted")},b)},lt=(u,d,p,_,b)=>{if(p&&m(u,p),_)for(let y=0;y<_.length;y++)m(u,_[y]);if(b){let y=b.subTree;if(d===y){const C=b.vnode;lt(u,C,C.scopeId,C.slotScopeIds,b.parent)}}},T=(u,d,p,_,b,y,C,v,S=0)=>{for(let x=S;x<u.length;x++){const O=u[x]=v?ve(u[x]):ne(u[x]);E(null,O,d,p,_,b,y,C,v)}},D=(u,d,p,_,b,y,C)=>{const v=d.el=u.el;let{patchFlag:S,dynamicChildren:x,dirs:O}=d;S|=u.patchFlag&16;const q=u.props||st,k=d.props||st;let j;p&&Ae(p,!1),(j=k.onVnodeBeforeUpdate)&&Zt(j,p,d,u),O&&Ie(d,u,p,"beforeUpdate"),p&&Ae(p,!0);const W=b&&d.type!=="foreignObject";if(x?L(u.dynamicChildren,x,v,p,_,W,y):C||tt(u,d,v,null,p,_,W,y,!1),S>0){if(S&16)J(v,d,q,k,p,_,b);else if(S&2&&q.class!==k.class&&o(v,"class",null,k.class,b),S&4&&o(v,"style",q.style,k.style,b),S&8){const ot=d.dynamicProps;for(let nt=0;nt<ot.length;nt++){const pt=ot[nt],zt=q[pt],We=k[pt];(We!==zt||pt==="value")&&o(v,pt,zt,We,b,u.children,p,_,ae)}}S&1&&u.children!==d.children&&c(v,d.children)}else!C&&x==null&&J(v,d,q,k,p,_,b);((j=k.onVnodeUpdated)||O)&&At(()=>{j&&Zt(j,p,d,u),O&&Ie(d,u,p,"updated")},_)},L=(u,d,p,_,b,y,C)=>{for(let v=0;v<d.length;v++){const S=u[v],x=d[v],O=S.el&&(S.type===qt||!Qe(S,x)||S.shapeFlag&70)?h(S.el):p;E(S,x,O,null,_,b,y,C,!0)}},J=(u,d,p,_,b,y,C)=>{if(p!==_){if(p!==st)for(const v in p)!ri(v)&&!(v in _)&&o(u,v,p[v],null,C,d.children,b,y,ae);for(const v in _){if(ri(v))continue;const S=_[v],x=p[v];S!==x&&v!=="value"&&o(u,v,x,S,C,d.children,b,y,ae)}"value"in _&&o(u,"value",p.value,_.value)}},R=(u,d,p,_,b,y,C,v,S)=>{const x=d.el=u?u.el:l(""),O=d.anchor=u?u.anchor:l("");let{patchFlag:q,dynamicChildren:k,slotScopeIds:j}=d;j&&(v=v?v.concat(j):j),u==null?(i(x,p,_),i(O,p,_),T(d.children,p,O,b,y,C,v,S)):q>0&&q&64&&k&&u.dynamicChildren?(L(u.dynamicChildren,k,p,b,y,C,v),(d.key!=null||b&&d===b.subTree)&&fl(u,d,!0)):tt(u,d,p,O,b,y,C,v,S)},K=(u,d,p,_,b,y,C,v,S)=>{d.slotScopeIds=v,u==null?d.shapeFlag&512?b.ctx.activate(d,p,_,C,S):ft(d,p,_,b,y,C,S):yt(u,d,S)},ft=(u,d,p,_,b,y,C)=>{const v=u.component=Wf(u,_,b);if(Gs(u)&&(v.ctx.renderer=Ue),Kf(v),v.asyncDep){if(b&&b.registerDep(v,Y),!u.el){const S=v.subTree=_t(qe);z(null,S,d,p)}return}Y(v,u,d,p,b,y,C)},yt=(u,d,p)=>{const _=d.component=u.component;if(Qa(u,d,p))if(_.asyncDep&&!_.asyncResolved){it(_,d,p);return}else _.next=d,Wa(_.update),_.update();else d.el=u.el,_.vnode=d},Y=(u,d,p,_,b,y,C)=>{const v=()=>{if(u.isMounted){let{next:O,bu:q,u:k,parent:j,vnode:W}=u,ot=O,nt;Ae(u,!1),O?(O.el=W.el,it(u,O,C)):O=W,q&&oi(q),(nt=O.props&&O.props.onVnodeBeforeUpdate)&&Zt(nt,j,O,W),Ae(u,!0);const pt=Gi(u),zt=u.subTree;u.subTree=pt,E(zt,pt,h(zt.el),Un(zt),u,b,y),O.el=pt.el,ot===null&&tf(u,pt.el),k&&At(k,b),(nt=O.props&&O.props.onVnodeUpdated)&&At(()=>Zt(nt,j,O,W),b)}else{let O;const{el:q,props:k}=d,{bm:j,m:W,parent:ot}=u,nt=si(d);if(Ae(u,!1),j&&oi(j),!nt&&(O=k&&k.onVnodeBeforeMount)&&Zt(O,ot,d),Ae(u,!0),q&&Vi){const pt=()=>{u.subTree=Gi(u),Vi(q,u.subTree,u,b,null)};nt?d.type.__asyncLoader().then(()=>!u.isUnmounted&&pt()):pt()}else{const pt=u.subTree=Gi(u);E(null,pt,p,_,u,b,y),d.el=pt.el}if(W&&At(W,b),!nt&&(O=k&&k.onVnodeMounted)){const pt=d;At(()=>Zt(O,ot,pt),b)}(d.shapeFlag&256||ot&&si(ot.vnode)&&ot.vnode.shapeFlag&256)&&u.a&&At(u.a,b),u.isMounted=!0,d=p=_=null}},S=u.effect=new Xr(v,()=>Jr(x),u.scope),x=u.update=()=>S.run();x.id=u.uid,Ae(u,!0),x()},it=(u,d,p)=>{d.component=u;const _=u.vnode.props;u.vnode=d,u.next=null,If(u,d.props,_,p),Of(u,d.children,p),pn(),So(),mn()},tt=(u,d,p,_,b,y,C,v,S=!1)=>{const x=u&&u.children,O=u?u.shapeFlag:0,q=d.children,{patchFlag:k,shapeFlag:j}=d;if(k>0){if(k&128){_n(x,q,p,_,b,y,C,v,S);return}else if(k&256){le(x,q,p,_,b,y,C,v,S);return}}j&8?(O&16&&ae(x,b,y),q!==x&&c(p,q)):O&16?j&16?_n(x,q,p,_,b,y,C,v,S):ae(x,b,y,!0):(O&8&&c(p,""),j&16&&T(q,p,_,b,y,C,v,S))},le=(u,d,p,_,b,y,C,v,S)=>{u=u||nn,d=d||nn;const x=u.length,O=d.length,q=Math.min(x,O);let k;for(k=0;k<q;k++){const j=d[k]=S?ve(d[k]):ne(d[k]);E(u[k],j,p,null,b,y,C,v,S)}x>O?ae(u,b,y,!0,!1,q):T(d,p,_,b,y,C,v,S,q)},_n=(u,d,p,_,b,y,C,v,S)=>{let x=0;const O=d.length;let q=u.length-1,k=O-1;for(;x<=q&&x<=k;){const j=u[x],W=d[x]=S?ve(d[x]):ne(d[x]);if(Qe(j,W))E(j,W,p,null,b,y,C,v,S);else break;x++}for(;x<=q&&x<=k;){const j=u[q],W=d[k]=S?ve(d[k]):ne(d[k]);if(Qe(j,W))E(j,W,p,null,b,y,C,v,S);else break;q--,k--}if(x>q){if(x<=k){const j=k+1,W=j<O?d[j].el:_;for(;x<=k;)E(null,d[x]=S?ve(d[x]):ne(d[x]),p,W,b,y,C,v,S),x++}}else if(x>k)for(;x<=q;)Lt(u[x],b,y,!0),x++;else{const j=x,W=x,ot=new Map;for(x=W;x<=k;x++){const kt=d[x]=S?ve(d[x]):ne(d[x]);kt.key!=null&&ot.set(kt.key,x)}let nt,pt=0;const zt=k-W+1;let We=!1,ho=0;const bn=new Array(zt);for(x=0;x<zt;x++)bn[x]=0;for(x=j;x<=q;x++){const kt=u[x];if(pt>=zt){Lt(kt,b,y,!0);continue}let Jt;if(kt.key!=null)Jt=ot.get(kt.key);else for(nt=W;nt<=k;nt++)if(bn[nt-W]===0&&Qe(kt,d[nt])){Jt=nt;break}Jt===void 0?Lt(kt,b,y,!0):(bn[Jt-W]=x+1,Jt>=ho?ho=Jt:We=!0,E(kt,d[Jt],p,null,b,y,C,v,S),pt++)}const go=We?jf(bn):nn;for(nt=go.length-1,x=zt-1;x>=0;x--){const kt=W+x,Jt=d[kt],po=kt+1<O?d[kt+1].el:_;bn[x]===0?E(null,Jt,p,po,b,y,C,v,S):We&&(nt<0||x!==go[nt]?Gt(Jt,p,po,2):nt--)}}},Gt=(u,d,p,_,b=null)=>{const{el:y,type:C,transition:v,children:S,shapeFlag:x}=u;if(x&6){Gt(u.component.subTree,d,p,_);return}if(x&128){u.suspense.move(d,p,_);return}if(x&64){C.move(u,d,p,Ue);return}if(C===qt){i(y,d,p);for(let q=0;q<S.length;q++)Gt(S[q],d,p,_);i(u.anchor,d,p);return}if(C===Zi){V(u,d,p);return}if(_!==2&&x&1&&v)if(_===0)v.beforeEnter(y),i(y,d,p),At(()=>v.enter(y),b);else{const{leave:q,delayLeave:k,afterLeave:j}=v,W=()=>i(y,d,p),ot=()=>{q(y,()=>{W(),j&&j()})};k?k(y,W,ot):ot()}else i(y,d,p)},Lt=(u,d,p,_=!1,b=!1)=>{const{type:y,props:C,ref:v,children:S,dynamicChildren:x,shapeFlag:O,patchFlag:q,dirs:k}=u;if(v!=null&&Rr(v,null,p,u,!0),O&256){d.ctx.deactivate(u);return}const j=O&1&&k,W=!si(u);let ot;if(W&&(ot=C&&C.onVnodeBeforeUnmount)&&Zt(ot,d,u),O&6)Kl(u.component,p,_);else{if(O&128){u.suspense.unmount(p,_);return}j&&Ie(u,null,d,"beforeUnmount"),O&64?u.type.remove(u,d,p,b,Ue,_):x&&(y!==qt||q>0&&q&64)?ae(x,d,p,!1,!0):(y===qt&&q&384||!b&&O&16)&&ae(S,d,p),_&&co(u)}(W&&(ot=C&&C.onVnodeUnmounted)||j)&&At(()=>{ot&&Zt(ot,d,u),j&&Ie(u,null,d,"unmounted")},p)},co=u=>{const{type:d,el:p,anchor:_,transition:b}=u;if(d===qt){Vl(p,_);return}if(d===Zi){A(u);return}const y=()=>{r(p),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(u.shapeFlag&1&&b&&!b.persisted){const{leave:C,delayLeave:v}=b,S=()=>C(p,y);v?v(u.el,y,S):S()}else y()},Vl=(u,d)=>{let p;for(;u!==d;)p=g(u),r(u),u=p;r(d)},Kl=(u,d,p)=>{const{bum:_,scope:b,update:y,subTree:C,um:v}=u;_&&oi(_),b.stop(),y&&(y.active=!1,Lt(C,u,d,p)),v&&At(v,d),At(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ae=(u,d,p,_=!1,b=!1,y=0)=>{for(let C=y;C<u.length;C++)Lt(u[C],d,p,_,b)},Un=u=>u.shapeFlag&6?Un(u.component.subTree):u.shapeFlag&128?u.suspense.next():g(u.anchor||u.el),uo=(u,d,p)=>{u==null?d._vnode&&Lt(d._vnode,null,null,!0):E(d._vnode||null,u,d,null,null,null,p),So(),Ys(),d._vnode=u},Ue={p:E,um:Lt,m:Gt,r:co,mt:ft,mc:T,pc:tt,pbc:L,n:Un,o:t};let Wi,Vi;return e&&([Wi,Vi]=e(Ue)),{render:uo,hydrate:Wi,createApp:Tf(uo,Wi)}}function Ae({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ff(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function fl(t,e,n=!1){const i=t.children,r=e.children;if(P(i)&&P(r))for(let o=0;o<i.length;o++){const s=i[o];let l=r[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[o]=ve(r[o]),l.el=s.el),n||fl(s,l)),l.type===Li&&(l.el=s.el)}}function jf(t){const e=t.slice(),n=[0];let i,r,o,s,l;const a=t.length;for(i=0;i<a;i++){const f=t[i];if(f!==0){if(r=n[n.length-1],t[r]<f){e[i]=r,n.push(i);continue}for(o=0,s=n.length-1;o<s;)l=o+s>>1,t[n[l]]<f?o=l+1:s=l;f<t[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,s=n[o-1];o-- >0;)n[o]=s,s=e[s];return n}const Mf=t=>t.__isTeleport,qt=Symbol.for("v-fgt"),Li=Symbol.for("v-txt"),qe=Symbol.for("v-cmt"),Zi=Symbol.for("v-stc"),Dn=[];let Wt=null;function St(t=!1){Dn.push(Wt=t?null:[])}function Lf(){Dn.pop(),Wt=Dn[Dn.length-1]||null}let Bn=1;function No(t){Bn+=t}function cl(t){return t.dynamicChildren=Bn>0?Wt||nn:null,Lf(),Bn>0&&Wt&&Wt.push(t),t}function Dt(t,e,n,i,r,o){return cl(I(t,e,n,i,r,o,!0))}function Bf(t,e,n,i,r){return cl(_t(t,e,n,i,r,!0))}function Dr(t){return t?t.__v_isVNode===!0:!1}function Qe(t,e){return t.type===e.type&&t.key===e.key}const Bi="__vInternal",ul=({key:t})=>t??null,ai=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?xt(t)||gt(t)||H(t)?{i:Pt,r:t,k:e,f:!!n}:t:null);function I(t,e=null,n=null,i=0,r=null,o=t===qt?0:1,s=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ul(e),ref:e&&ai(e),scopeId:Us,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Pt};return l?(eo(a,n),o&128&&t.normalize(a)):n&&(a.shapeFlag|=xt(n)?8:16),Bn>0&&!s&&Wt&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&Wt.push(a),a}const _t=Hf;function Hf(t,e=null,n=null,i=0,r=null,o=!1){if((!t||t===bf)&&(t=qe),Dr(t)){const l=Xe(t,e,!0);return n&&eo(l,n),Bn>0&&!o&&Wt&&(l.shapeFlag&6?Wt[Wt.indexOf(t)]=l:Wt.push(l)),l.patchFlag|=-2,l}if(tc(t)&&(t=t.__vccOpts),e){e=Yf(e);let{class:l,style:a}=e;l&&!xt(l)&&(e.class=ht(l)),rt(a)&&(Fs(a)&&!P(a)&&(a=bt({},a)),e.style=Yr(a))}const s=xt(t)?1:ef(t)?128:Mf(t)?64:rt(t)?4:H(t)?2:0;return I(t,e,n,i,r,s,o,!0)}function Yf(t){return t?Fs(t)||Bi in t?bt({},t):t:null}function Xe(t,e,n=!1){const{props:i,ref:r,patchFlag:o,children:s}=t,l=e?zf(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&ul(l),ref:e&&e.ref?n&&r?P(r)?r.concat(ai(e)):[r,ai(e)]:ai(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:s,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xe(t.ssContent),ssFallback:t.ssFallback&&Xe(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function qr(t=" ",e=0){return _t(Li,null,t,e)}function Fo(t="",e=!1){return e?(St(),Bf(qe,null,t)):_t(qe,null,t)}function ne(t){return t==null||typeof t=="boolean"?_t(qe):P(t)?_t(qt,null,t.slice()):typeof t=="object"?ve(t):_t(Li,null,String(t))}function ve(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xe(t)}function eo(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(P(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),eo(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Bi in e)?e._ctx=Pt:r===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Pt},n=32):(e=String(e),i&64?(n=16,e=[qr(e)]):n=8);t.children=e,t.shapeFlag|=n}function zf(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ht([e.class,i.class]));else if(r==="style")e.style=Yr([e.style,i.style]);else if(Ri(r)){const o=e[r],s=i[r];s&&o!==s&&!(P(o)&&o.includes(s))&&(e[r]=o?[].concat(o,s):s)}else r!==""&&(e[r]=i[r])}return e}function Zt(t,e,n,i=null){Yt(t,e,7,[n,i])}const Xf=il();let Uf=0;function Wf(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Xf,o={uid:Uf++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ws(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ol(i,r),emitsOptions:Xs(i,r),emit:null,emitted:null,propsDefaults:st,inheritAttrs:i.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Ga.bind(null,o),t.ce&&t.ce(o),o}let vt=null;const Vf=()=>vt||Pt;let no,Ke,jo="__VUE_INSTANCE_SETTERS__";(Ke=mr()[jo])||(Ke=mr()[jo]=[]),Ke.push(t=>vt=t),no=t=>{Ke.length>1?Ke.forEach(e=>e(t)):Ke[0](t)};const un=t=>{no(t),t.scope.on()},Ye=()=>{vt&&vt.scope.off(),no(null)};function dl(t){return t.vnode.shapeFlag&4}let Hn=!1;function Kf(t,e=!1){Hn=e;const{props:n,children:i}=t.vnode,r=dl(t);qf(t,n,r,e),Pf(t,i);const o=r?Gf(t,e):void 0;return Hn=!1,o}function Gf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ki(new Proxy(t.ctx,$f));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?Zf(t):null;un(t),pn();const o=Re(i,t,0,[t.props,r]);if(mn(),Ye(),bs(o)){if(o.then(Ye,Ye),e)return o.then(s=>{Mo(t,s,e)}).catch(s=>{Ni(s,t,0)});t.asyncDep=o}else Mo(t,o,e)}else hl(t,e)}function Mo(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:rt(e)&&(t.setupState=Ls(e)),hl(t,n)}let Lo;function hl(t,e,n){const i=t.type;if(!t.render){if(!e&&Lo&&!i.render){const r=i.template||Qr(t).template;if(r){const{isCustomElement:o,compilerOptions:s}=t.appContext.config,{delimiters:l,compilerOptions:a}=i,f=bt(bt({isCustomElement:o,delimiters:l},s),a);i.render=Lo(r,f)}}t.render=i.render||Vt}{un(t),pn();try{vf(t)}finally{mn(),Ye()}}}function Jf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ot(t,"get","$attrs"),e[n]}}))}function Zf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Jf(t)},slots:t.slots,emit:t.emit,expose:e}}function Hi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ls(ki(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Tn)return Tn[n](t)},has(e,n){return n in e||n in Tn}}))}function Qf(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function tc(t){return H(t)&&"__vccOpts"in t}const io=(t,e)=>za(t,e,Hn);function Bo(t,e,n){const i=arguments.length;return i===2?rt(e)&&!P(e)?Dr(e)?_t(t,null,[e]):_t(t,e):_t(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Dr(n)&&(n=[n]),_t(t,e,n))}const ec=Symbol.for("v-scx"),nc=()=>Rn(ec),ic="3.3.7",rc="http://www.w3.org/2000/svg",Me=typeof document<"u"?document:null,Ho=Me&&Me.createElement("template"),oc={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?Me.createElementNS(rc,t):Me.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Me.createTextNode(t),createComment:t=>Me.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Me.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,o){const s=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{Ho.innerHTML=i?`<svg>${t}</svg>`:t;const l=Ho.content;if(i){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_e="transition",xn="animation",dn=Symbol("_vtc"),gl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},sc=bt({},sf,gl),Pe=(t,e=[])=>{P(t)?t.forEach(n=>n(...e)):t&&t(...e)},Yo=t=>t?P(t)?t.some(e=>e.length>1):t.length>1:!1;function lc(t){const e={};for(const R in t)R in gl||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=o,appearActiveClass:f=s,appearToClass:c=l,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,$=ac(r),E=$&&$[0],X=$&&$[1],{onBeforeEnter:z,onEnter:M,onEnterCancelled:V,onLeave:A,onLeaveCancelled:U,onBeforeAppear:ct=z,onAppear:lt=M,onAppearCancelled:T=V}=e,D=(R,K,ft)=>{be(R,K?c:l),be(R,K?f:s),ft&&ft()},L=(R,K)=>{R._isLeaving=!1,be(R,h),be(R,m),be(R,g),K&&K()},J=R=>(K,ft)=>{const yt=R?lt:M,Y=()=>D(K,R,ft);Pe(yt,[K,Y]),zo(()=>{be(K,R?a:o),fe(K,R?c:l),Yo(yt)||Xo(K,i,E,Y)})};return bt(e,{onBeforeEnter(R){Pe(z,[R]),fe(R,o),fe(R,s)},onBeforeAppear(R){Pe(ct,[R]),fe(R,a),fe(R,f)},onEnter:J(!1),onAppear:J(!0),onLeave(R,K){R._isLeaving=!0;const ft=()=>L(R,K);fe(R,h),ml(),fe(R,g),zo(()=>{R._isLeaving&&(be(R,h),fe(R,m),Yo(A)||Xo(R,i,X,ft))}),Pe(A,[R,ft])},onEnterCancelled(R){D(R,!1),Pe(V,[R])},onAppearCancelled(R){D(R,!0),Pe(T,[R])},onLeaveCancelled(R){L(R),Pe(U,[R])}})}function ac(t){if(t==null)return null;if(rt(t))return[Qi(t.enter),Qi(t.leave)];{const e=Qi(t);return[e,e]}}function Qi(t){return ia(t)}function fe(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[dn]||(t[dn]=new Set)).add(e)}function be(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[dn];n&&(n.delete(e),n.size||(t[dn]=void 0))}function zo(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let fc=0;function Xo(t,e,n,i){const r=t._endId=++fc,o=()=>{r===t._endId&&i()};if(n)return setTimeout(o,n);const{type:s,timeout:l,propCount:a}=pl(t,e);if(!s)return i();const f=s+"end";let c=0;const h=()=>{t.removeEventListener(f,g),o()},g=m=>{m.target===t&&++c>=a&&h()};setTimeout(()=>{c<a&&h()},l+1),t.addEventListener(f,g)}function pl(t,e){const n=window.getComputedStyle(t),i=$=>(n[$]||"").split(", "),r=i(`${_e}Delay`),o=i(`${_e}Duration`),s=Uo(r,o),l=i(`${xn}Delay`),a=i(`${xn}Duration`),f=Uo(l,a);let c=null,h=0,g=0;e===_e?s>0&&(c=_e,h=s,g=o.length):e===xn?f>0&&(c=xn,h=f,g=a.length):(h=Math.max(s,f),c=h>0?s>f?_e:xn:null,g=c?c===_e?o.length:a.length:0);const m=c===_e&&/\b(transform|all)(,|$)/.test(i(`${_e}Property`).toString());return{type:c,timeout:h,propCount:g,hasTransform:m}}function Uo(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Wo(n)+Wo(t[i])))}function Wo(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function ml(){return document.body.offsetHeight}function cc(t,e,n){const i=t[dn];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ro=Symbol("_vod"),Oe={beforeMount(t,{value:e},{transition:n}){t[ro]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):$n(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),$n(t,!0),i.enter(t)):i.leave(t,()=>{$n(t,!1)}):$n(t,e))},beforeUnmount(t,{value:e}){$n(t,e)}};function $n(t,e){t.style.display=e?t[ro]:"none"}function uc(t,e,n){const i=t.style,r=xt(n);if(n&&!r){if(e&&!xt(e))for(const o in e)n[o]==null&&Ir(i,o,"");for(const o in n)Ir(i,o,n[o])}else{const o=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),ro in t&&(i.display=o)}}const Vo=/\s*!important$/;function Ir(t,e,n){if(P(n))n.forEach(i=>Ir(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=dc(t,e);Vo.test(n)?t.setProperty(gn(i),n.replace(Vo,""),"important"):t[i]=n}}const Ko=["Webkit","Moz","ms"],tr={};function dc(t,e){const n=tr[e];if(n)return n;let i=oe(e);if(i!=="filter"&&i in t)return tr[e]=i;i=Ii(i);for(let r=0;r<Ko.length;r++){const o=Ko[r]+i;if(o in t)return tr[e]=o}return e}const Go="http://www.w3.org/1999/xlink";function hc(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Go,e.slice(6,e.length)):t.setAttributeNS(Go,e,n);else{const o=fa(e);n==null||o&&!vs(n)?t.removeAttribute(e):t.setAttribute(e,o?"":n)}}function gc(t,e,n,i,r,o,s){if(e==="innerHTML"||e==="textContent"){i&&s(i,r,o),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){t._value=n;const f=l==="OPTION"?t.getAttribute("value"):t.value,c=n??"";f!==c&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const f=typeof t[e];f==="boolean"?n=vs(n):n==null&&f==="string"?(n="",a=!0):f==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Le(t,e,n,i){t.addEventListener(e,n,i)}function pc(t,e,n,i){t.removeEventListener(e,n,i)}const Jo=Symbol("_vei");function mc(t,e,n,i,r=null){const o=t[Jo]||(t[Jo]={}),s=o[e];if(i&&s)s.value=i;else{const[l,a]=_c(e);if(i){const f=o[e]=$c(i,r);Le(t,l,f,a)}else s&&(pc(t,l,s,a),o[e]=void 0)}}const Zo=/(?:Once|Passive|Capture)$/;function _c(t){let e;if(Zo.test(t)){e={};let i;for(;i=t.match(Zo);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):gn(t.slice(2)),e]}let er=0;const bc=Promise.resolve(),xc=()=>er||(bc.then(()=>er=0),er=Date.now());function $c(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Yt(vc(i,n.value),e,5,[i])};return n.value=t,n.attached=xc(),n}function vc(t,e){if(P(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Qo=/^on[a-z]/,yc=(t,e,n,i,r=!1,o,s,l,a)=>{e==="class"?cc(t,i,r):e==="style"?uc(t,n,i):Ri(e)?Lr(e)||mc(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wc(t,e,i,r))?gc(t,e,i,o,s,l,a):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),hc(t,e,i,r))};function wc(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Qo.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Qo.test(e)&&xt(n)?!1:e in t}const _l=new WeakMap,bl=new WeakMap,$i=Symbol("_moveCb"),ts=Symbol("_enterCb"),xl={name:"TransitionGroup",props:bt({},sc,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Vf(),i=of();let r,o;return Zs(()=>{if(!r.length)return;const s=t.moveClass||`${t.name||"v"}-move`;if(!Dc(r[0].el,n.vnode.el,s))return;r.forEach(Cc),r.forEach(Tc);const l=r.filter(Rc);ml(),l.forEach(a=>{const f=a.el,c=f.style;fe(f,s),c.transform=c.webkitTransform=c.transitionDuration="";const h=f[$i]=g=>{g&&g.target!==f||(!g||/transform$/.test(g.propertyName))&&(f.removeEventListener("transitionend",h),f[$i]=null,be(f,s))};f.addEventListener("transitionend",h)})}),()=>{const s=G(t),l=lc(s);let a=s.tag||qt;r=o,o=e.default?Ks(e.default()):[];for(let f=0;f<o.length;f++){const c=o[f];c.key!=null&&wr(c,yr(c,l,i,n))}if(r)for(let f=0;f<r.length;f++){const c=r[f];wr(c,yr(c,l,i,n)),_l.set(c,c.el.getBoundingClientRect())}return _t(a,null,o)}}},Ec=t=>delete t.mode;xl.props;const Sc=xl;function Cc(t){const e=t.el;e[$i]&&e[$i](),e[ts]&&e[ts]()}function Tc(t){bl.set(t,t.el.getBoundingClientRect())}function Rc(t){const e=_l.get(t),n=bl.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const o=t.el.style;return o.transform=o.webkitTransform=`translate(${i}px,${r}px)`,o.transitionDuration="0s",t}}function Dc(t,e,n){const i=t.cloneNode(),r=t[dn];r&&r.forEach(l=>{l.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),n.split(/\s+/).forEach(l=>l&&i.classList.add(l)),i.style.display="none";const o=e.nodeType===1?e:e.parentNode;o.appendChild(i);const{hasTransform:s}=pl(i);return o.removeChild(i),s}const vi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return P(e)?n=>oi(e,n):e};function qc(t){t.target.composing=!0}function es(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const sn=Symbol("_assign"),Ic={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[sn]=vi(r);const o=i||r.props&&r.props.type==="number";Le(t,e?"change":"input",s=>{if(s.target.composing)return;let l=t.value;n&&(l=l.trim()),o&&(l=pi(l)),t[sn](l)}),n&&Le(t,"change",()=>{t.value=t.value.trim()}),e||(Le(t,"compositionstart",qc),Le(t,"compositionend",es),Le(t,"change",es))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},o){if(t[sn]=vi(o),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&pi(t.value)===e))return;const s=e??"";t.value!==s&&(t.value=s)}},ns={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const r=Di(e);Le(t,"change",()=>{const o=Array.prototype.filter.call(t.options,s=>s.selected).map(s=>n?pi(yi(s)):yi(s));t[sn](t.multiple?r?new Set(o):o:o[0])}),t[sn]=vi(i)},mounted(t,{value:e}){is(t,e)},beforeUpdate(t,e,n){t[sn]=vi(n)},updated(t,{value:e}){is(t,e)}};function is(t,e){const n=t.multiple;if(!(n&&!P(e)&&!Di(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],s=yi(o);if(n)P(e)?o.selected=ua(e,s)>-1:o.selected=e.has(s);else if(Ai(yi(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function yi(t){return"_value"in t?t._value:t.value}const Ac=bt({patchProp:yc},oc);let rs;function Pc(){return rs||(rs=kf(Ac))}const Oc=(...t)=>{const e=Pc().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=kc(i);if(!r)return;const o=e._component;!H(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},e};function kc(t){return xt(t)?document.querySelector(t):t}var Nc=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let $l;const Yi=t=>$l=t,vl=Symbol();function Ar(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var qn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(qn||(qn={}));function Fc(){const t=Es(!0),e=t.run(()=>$e({}));let n=[],i=[];const r=ki({install(o){Yi(r),r._a=o,o.provide(vl,r),o.config.globalProperties.$pinia=r,i.forEach(s=>n.push(s)),i=[]},use(o){return!this._a&&!Nc?i.push(o):n.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const yl=()=>{};function os(t,e,n,i=yl){t.push(e);const r=()=>{const o=t.indexOf(e);o>-1&&(t.splice(o,1),i())};return!n&&Ss()&&ha(r),r}function Ge(t,...e){t.slice().forEach(n=>{n(...e)})}const jc=t=>t();function Pr(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];Ar(r)&&Ar(i)&&t.hasOwnProperty(n)&&!gt(i)&&!Te(i)?t[n]=Pr(r,i):t[n]=i}return t}const Mc=Symbol();function Lc(t){return!Ar(t)||!t.hasOwnProperty(Mc)}const{assign:xe}=Object;function Bc(t){return!!(gt(t)&&t.effect)}function Hc(t,e,n,i){const{state:r,actions:o,getters:s}=e,l=n.state.value[t];let a;function f(){l||(n.state.value[t]=r?r():{});const c=La(n.state.value[t]);return xe(c,o,Object.keys(s||{}).reduce((h,g)=>(h[g]=ki(io(()=>{Yi(n);const m=n._s.get(t);return s[g].call(m,m)})),h),{}))}return a=wl(t,f,e,n,i,!0),a}function wl(t,e,n={},i,r,o){let s;const l=xe({actions:{}},n),a={deep:!0};let f,c,h=[],g=[],m;const $=i.state.value[t];!o&&!$&&(i.state.value[t]={}),$e({});let E;function X(T){let D;f=c=!1,typeof T=="function"?(T(i.state.value[t]),D={type:qn.patchFunction,storeId:t,events:m}):(Pr(i.state.value[t],T),D={type:qn.patchObject,payload:T,storeId:t,events:m});const L=E=Symbol();Fi().then(()=>{E===L&&(f=!0)}),c=!0,Ge(h,D,i.state.value[t])}const z=o?function(){const{state:D}=n,L=D?D():{};this.$patch(J=>{xe(J,L)})}:yl;function M(){s.stop(),h=[],g=[],i._s.delete(t)}function V(T,D){return function(){Yi(i);const L=Array.from(arguments),J=[],R=[];function K(Y){J.push(Y)}function ft(Y){R.push(Y)}Ge(g,{args:L,name:T,store:U,after:K,onError:ft});let yt;try{yt=D.apply(this&&this.$id===t?this:U,L)}catch(Y){throw Ge(R,Y),Y}return yt instanceof Promise?yt.then(Y=>(Ge(J,Y),Y)).catch(Y=>(Ge(R,Y),Promise.reject(Y))):(Ge(J,yt),yt)}}const A={_p:i,$id:t,$onAction:os.bind(null,g),$patch:X,$reset:z,$subscribe(T,D={}){const L=os(h,T,D.detached,()=>J()),J=s.run(()=>Cn(()=>i.state.value[t],R=>{(D.flush==="sync"?c:f)&&T({storeId:t,type:qn.direct,events:m},R)},xe({},a,D)));return L},$dispose:M},U=Oi(A);i._s.set(t,U);const lt=(i._a&&i._a.runWithContext||jc)(()=>i._e.run(()=>(s=Es()).run(e)));for(const T in lt){const D=lt[T];if(gt(D)&&!Bc(D)||Te(D))o||($&&Lc(D)&&(gt(D)?D.value=$[T]:Pr(D,$[T])),i.state.value[t][T]=D);else if(typeof D=="function"){const L=V(T,D);lt[T]=L,l.actions[T]=D}}return xe(U,lt),xe(G(U),lt),Object.defineProperty(U,"$state",{get:()=>i.state.value[t],set:T=>{X(D=>{xe(D,T)})}}),i._p.forEach(T=>{xe(U,s.run(()=>T({store:U,app:i._a,pinia:i,options:l})))}),$&&o&&n.hydrate&&n.hydrate(U.$state,$),f=!0,c=!0,U}function Yc(t,e,n){let i,r;const o=typeof e=="function";typeof t=="string"?(i=t,r=o?n:e):(r=t,i=t.id);function s(l,a){const f=Df();return l=l||(f?Rn(vl,null):null),l&&Yi(l),l=$l,l._s.has(i)||(o?wl(i,e,r,l):Hc(i,r,l)),l._s.get(i)}return s.$id=i,s}var Kt={},nr=globalThis&&globalThis.__awaiter||function(t,e,n,i){function r(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function l(c){try{f(i.next(c))}catch(h){s(h)}}function a(c){try{f(i.throw(c))}catch(h){s(h)}}function f(c){c.done?o(c.value):r(c.value).then(l,a)}f((i=i.apply(t,e||[])).next())})},ir=globalThis&&globalThis.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(f){return function(c){return a([f,c])}}function a(f){if(i)throw new TypeError("Generator is already executing.");for(;n;)try{if(i=1,r&&(o=f[0]&2?r.return:f[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,f[1])).done)return o;switch(r=0,o&&(f=[f[0]&2,o.value]),f[0]){case 0:case 1:o=f;break;case 4:return n.label++,{value:f[1],done:!1};case 5:n.label++,r=f[1],f=[0];continue;case 7:f=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(f[0]===6||f[0]===2)){n=0;continue}if(f[0]===3&&(!o||f[1]>o[0]&&f[1]<o[3])){n.label=f[1];break}if(f[0]===6&&n.label<o[1]){n.label=o[1],o=f;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(f);break}o[2]&&n.ops.pop(),n.trys.pop();continue}f=e.call(t,n)}catch(c){f=[6,c],r=0}finally{i=o=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}};Kt.__esModule=!0;Kt.PdfTeXEngine=Kt.CompileResult=Kt.EngineStatus=void 0;var Qt;(function(t){t[t.Init=1]="Init",t[t.Ready=2]="Ready",t[t.Busy=3]="Busy",t[t.Error=4]="Error"})(Qt=Kt.EngineStatus||(Kt.EngineStatus={}));var zc="swiftlatexpdftex.js",El=function(){function t(){this.pdf=void 0,this.status=-254,this.log="No log"}return t}();Kt.CompileResult=El;var Xc=function(){function t(){this.latexWorker=void 0,this.latexWorkerStatus=Qt.Init}return t.prototype.loadEngine=function(){return nr(this,void 0,void 0,function(){var e=this;return ir(this,function(n){switch(n.label){case 0:if(this.latexWorker!==void 0)throw new Error("Other instance is running, abort()");return this.latexWorkerStatus=Qt.Init,[4,new Promise(function(i,r){e.latexWorker=new Worker(zc),e.latexWorker.onmessage=function(o){var s=o.data,l=s.result;l==="ok"?(e.latexWorkerStatus=Qt.Ready,i()):(e.latexWorkerStatus=Qt.Error,r())}})];case 1:return n.sent(),this.latexWorker.onmessage=function(i){},this.latexWorker.onerror=function(i){},[2]}})})},t.prototype.isReady=function(){return this.latexWorkerStatus===Qt.Ready},t.prototype.checkEngineStatus=function(){if(!this.isReady())throw Error("Engine is still spinning or not ready yet!")},t.prototype.compileLaTeX=function(){return nr(this,void 0,void 0,function(){var e,n,i=this;return ir(this,function(r){switch(r.label){case 0:return this.checkEngineStatus(),this.latexWorkerStatus=Qt.Busy,e=performance.now(),[4,new Promise(function(o,s){i.latexWorker.onmessage=function(l){var a=l.data,f=a.cmd;if(f==="compile"){var c=a.result,h=a.log,g=a.status;i.latexWorkerStatus=Qt.Ready,console.log("Engine compilation finish "+(performance.now()-e));var m=new El;if(m.status=g,m.log=h,c==="ok"){var $=new Uint8Array(a.pdf);m.pdf=$}o(m)}},i.latexWorker.postMessage({cmd:"compilelatex"}),console.log("Engine compilation start")})];case 1:return n=r.sent(),this.latexWorker.onmessage=function(o){},[2,n]}})})},t.prototype.compileFormat=function(){return nr(this,void 0,void 0,function(){var e=this;return ir(this,function(n){switch(n.label){case 0:return this.checkEngineStatus(),this.latexWorkerStatus=Qt.Busy,[4,new Promise(function(i,r){e.latexWorker.onmessage=function(o){var s=o.data,l=s.cmd;if(l==="compile"){var a=s.result,f=s.log;if(e.latexWorkerStatus=Qt.Ready,a==="ok"){var c=s.pdf,h=new Blob([c],{type:"application/octet-stream"}),g=URL.createObjectURL(h);setTimeout(function(){URL.revokeObjectURL(g)},3e4),console.log("Download format file via "+g),i()}else r(f)}},e.latexWorker.postMessage({cmd:"compileformat"})})];case 1:return n.sent(),this.latexWorker.onmessage=function(i){},[2]}})})},t.prototype.setEngineMainFile=function(e){this.checkEngineStatus(),this.latexWorker!==void 0&&this.latexWorker.postMessage({cmd:"setmainfile",url:e})},t.prototype.writeMemFSFile=function(e,n){this.checkEngineStatus(),this.latexWorker!==void 0&&this.latexWorker.postMessage({cmd:"writefile",url:e,src:n})},t.prototype.makeMemFSFolder=function(e){if(this.checkEngineStatus(),this.latexWorker!==void 0){if(e===""||e==="/")return;this.latexWorker.postMessage({cmd:"mkdir",url:e})}},t.prototype.flushCache=function(){this.checkEngineStatus(),this.latexWorker!==void 0&&this.latexWorker.postMessage({cmd:"flushcache"})},t.prototype.setTexliveEndpoint=function(e){this.latexWorker!==void 0&&(this.latexWorker.postMessage({cmd:"settexliveurl",url:e}),this.latexWorker=void 0)},t.prototype.closeWorker=function(){this.latexWorker!==void 0&&(this.latexWorker.postMessage({cmd:"grace"}),this.latexWorker=void 0)},t}();Kt.PdfTeXEngine=Xc;async function Uc(t){const e=new Kt.PdfTeXEngine;return await e.loadEngine(),e.writeMemFSFile("main.tex",t),e.setEngineMainFile("main.tex"),await e.compileLaTeX()}const Wc=[{uuid:"9667e1e4-0313-466b-96e2-97e98db9c375",author:"Claudio Paganini",title:"Uni Ravensburg Fakultät für Mathematik - Elementargeometrie",fields:[["MISC2","Text 2"],["MISC1","Text 1"],["DEADLINE","Abgabefrist"],["EXERCISETITLE","Exercise Title"],["FACH","Fach"],["UNI","Universität"],["DOZENT","Dozent"],["INITAUFGCNT","Initiale Aufgabennummer"],["HEADERS",""],["EXERCISES",""]],content:`% no exercises will ever be written in this file. This is essentially
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
`}],Kc=[{uuid:"0268c237-5a8a-46ad-89ee-c3983969488a",title:["Beschränkte Funktionen","Banach Raum"],tags:["Funktionalanalysis"],languages:["GermanExercise","GermanSolution"],semesterwoche:2,solution:"droptag",author:["Prof. Dr. Helmut Abels"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`


\\aufgabe{} 


\\begin{taggedblock}{EnglishExercise}
Sei~$X$ eine Menge und~\${(Y,|\\cdot|_Y)}$ ein Banach Raum. Für jede Abbildung~\${f: X \\rightarrow Y}$, sei
    \\[
    \\abs{f}_\\infty := \\sup_{x \\in X} |f(x)|_Y \\in [0,\\infty] \\,.
    \\]
    Sei zudem~\${\\abs{\\cdot}_\\infty}$ die \\emph{Supremumsnorm}. Sei
    $$\\ell^\\infty(X;Y) = \\{ f: X \\rightarrow Y \\mid \\abs{f}_\\infty <
    \\infty \\}$$ die Menge der beschränkten,~$Y$-wertigen Funktionen auf~$X$.
    \\begin{itemize}
    \\item[i)] Zeigen Sie, dass~$(\\ell^\\infty(X;Y), \\abs{\\cdot}_\\infty)$
				ein Banach Raum ist.
        {\\vspace{0.1cm}\\par\\noindent\\textit{Hinweis}:}
        Verwenden Sie die Vollständigkeit von~$Y$, um einen Kandidaten~$f$ für den Grenzwert einer Cauchy Folge~$f_n$ zu erhalten. Schätzen Sie dann~
        	 $|f_n(x) - f_m(x)|$ ab und betrachten Sie den Grenzwert für~$n \\rightarrow \\infty$, um Informationen über~$f$ zu erhalten.

    \\item[ii)] Sei nun~$X$ ein topologischer Raum sei und sei
 \\[\\mathcal{C}_b(X;Y)
        := \\{ f \\in \\ell^\\infty(X;Y) \\mid f \\textrm{ ist stetig } \\} \\]
		der Raum der stetigen, beschränkten~$Y$-wertigen Funktionen.
		Zeigen Sie, dass~$\\mathcal{C}_b(X;Y) \\subset \\ell^\\infty(X;Y)$
		ein (topologisch) abgeschlossener linearer Unterraum ist. Was sagt das über die Dichte an stetigen Abbildungen in den beschränkten Abbildungen aus?
%       {\\vspace{0.1cm}\\par\\noindent\\textit{Hint}:}
%            Remember the analysis 1 lecture, in particular the $\\frac{\\eps}{3}$-trick.
    \\end{itemize}
\\end{taggedblock}




\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 

\\textit{i.)} Indem man die Dreiecksungleichung für~$|\\cdot|_Y$
    verwendet, sieht man sofort, dass~$\\ell^\\infty(X;Y)$ ein
    Vektorraum ist und dass~$\\abs{\\cdot}_\\infty$ eine Norm ist.


    Es bleibt die Vollständigkeit zu zeigen. Sei dazu~$(f_n)$ eine
    Cauchy-Folge in~$\\ell^\\infty(X;Y)$. Dann gilt für jedes~$x \\in X$
    die Abschätzung
    \\[
    |f_n(x) - f_m(x)|_Y
    \\leq \\sup_{y \\in X} |f_n(y) - f_m(y)|_Y
    = \\abs{f_n - f_m}_\\infty \\,.
    \\]
    Damit erhält man unmittelbar, dass für jedes~$x \\in X$ die Folge~$(f_n(x))$ eine Cauchy Folge in~$Y$ ist. Da~$Y$ nach
    Voraussetzung vollständig ist, existiert der Grenzwert~$f(x) :=
    \\lim_{n \\rightarrow \\infty} f_n(x) \\in Y$. Auf diese Weise
    erhalten wir eine Funktion~$f: X \\rightarrow Y$. Es bleibt zu
    zeigen, dass~$f \\in \\ell^\\infty(X;Y)$ und dass~$f_n \\rightarrow
    f$ bzgl.~$\\abs{\\cdot}_\\infty$. Sei dazu~$\\eps > 0$. Da~$(f_n)$ eine Cauchy Folge ist, gibt es~$N \\in \\mathbb{N}$, sodass
    für alle~$n,m \\geq N$ folgendes gilt:
    \\[
    |f_n(x) - f_m(x)|_Y \\leq \\abs{f_n - f_m}_\\infty < \\eps
    \\qquad \\forall x \\in X \\,.
    \\]
    Indem wir links den Grenzwert~$n \\rightarrow \\infty$ bilden,
    erhalten wir, dass für alle~$m \\geq N$ folgendes gilt:
    \\[
    |f(x) - f_m(x)|_Y \\leq \\eps
    \\qquad \\forall x \\in X \\,.
    \\tag{$*$}
    \\]
    Wähle ein~$m \\geq N$, dann folgt
    \\[
    |f(x)| \\leq |f(x) - f_m(x)| + |f_m(x)|
    \\leq \\eps + \\abs{f_m}_\\infty
    \\qquad \\forall x \\in X \\,.
    \\]
    Da die rechte Seite unabhängig von~$x$ ist, folgt
    \\[
    \\abs{f}_\\infty = \\sup_{x \\in X}|f(x)|
    \\leq \\eps + \\abs{f_m}_\\infty < \\infty \\,.
    \\]
    Also gilt~$f \\in \\ell^\\infty(X;Y)$. Andererseits folgt aus~($*$)
    auch sofort, dass~$f_n \\rightarrow f$ bzgl.~$\\abs{\\cdot}_\\infty$
    indem wir wieder Supremum über alle~$x \\in X$ bilden.


    \\vspace{0.3cm}
    \\noindent
    \\textit{ii.)} Sei~$(f_n)$ eine Folge mit~\${f_n \\in \\mathcal{C}_b(X;Y)}$
    und~\${f_n \\rightarrow f \\in \\ell^\\infty(X;Y)}$ bzgl.~\${\\abs{\\cdot}_\\infty}$. Wir müssen zeigen, dass~\${f \\in
    \\mathcal{C}_b(X;Y)}$ und dazu benutzen wir den~$\\eps/3$-Trick. Sei~\${U \\subset Y}$ offen, dann müssen wir zeigen, dass~\${f^{-1}(U)
    \\subset X}$ offen ist. Sei dazu~\${x_0 \\in f^{-1}(U)}$. Da~\${U \\subset
    Y}$ offen ist, finden wir~$\\eps > 0$ mit~\${B_\\eps(f(x_0))
    \\subset U}$. Wir konstruieren im Folgenden eine offene Umgebung~\${V
    \\subset X}$ von~$x$ mit~\${f(V) \\subset B_\\eps(f(x_0)) \\subset
    U}$. Dann gilt~$V \\subset f^{-1}(U)$ und da~$x_0 \\in f^{-1}(U)$
    beliebig war, folgt dass~$f^{-1}(U) \\subset X$ offen ist. Um das
    gewünschte~$V$ zu konstruieren, nutzen wir aus, dass für jedes~$x
    \\in X$ und jedes~$n \\in \\mathbb{N}$ nach der Dreiecksungleichung
    gilt, dass
    \\[
    |f(x) - f(x_0)|_Y
    \\leq |f(x) - f_n(x)|_Y + |f_n(x) - f_n(x_0)|_Y 
    + |f_n(x_0) - f(x_0)|_Y \\,.
    \\]
    Da~$f_n \\rightarrow f$ bzgl.~$\\abs{\\cdot}_\\infty$, finden wir~\${N
    \\in \\mathbb{N}}$, sodass für alle~\${n \\geq N}$ gilt:
    \\[
    |f(x) - f_n(x)|_Y \\leq \\abs{f-f_n}_\\infty < \\frac{\\eps}{3}
    \\quad \\forall x \\in X \\,.
    \\tag{$*$}
    \\]
    Wähle solch ein~$n$ und setze~\${V :=
    f_n^{-1}(B_{\\eps/3}(f_n(x_0)))}$. Da~$f_n$ stetig ist, ist~\${V\\subset X}$ eine offene Umgebung von~$x_0$. Schließlich gilt
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
    Also folgt~$f(V) \\subset B_\\eps(f(x_0))$ und wir sind fertig.


    Bezüglich der Dichtheit folgt aus der Abgeschlossenheit von~$\\mathcal{C}_b(X;Y)$ in $\\ell^\\infty(X;Y)$, dass~$\\mathcal{C}_b(X;Y)
    \\subset \\ell^\\infty(X;Y)$ dicht ist genau dann, wenn~$\\mathcal{C}_b(X;Y) = \\ell^\\infty(X;Y)$.
\\end{taggedblock}
`,preview:"0268c237-5a8a-46ad-89ee-c3983969488a.png"},{uuid:"b686755b-aaa8-45cf-8b3d-4301582a0018",title:["quasi-linear partial differential equation","Burgers-like Equations"],tags:["Partial Differential Equations 1","PDE1qu9OPX"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:3,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganin"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`	
	
	
	\\aufgabe{} 
	
	
\\begin{taggedblock}{EnglishExercise}
	We consider the quasi-linear partial differential equation
	\\begin{equation*}
		(1)\\left\\{\\begin{tabular}{cl}
			$\\partial_tu\\left(x,t\\right)+a\\left(u\\left(x,t\\right)\\right)\\partial_xu\\left(x,t\\right)=0$&$\\text{for all }x\\in\\R,t\\in\\left[0,T\\right),$\\\\
			$u\\left(x,0\\right)=u_0(x)$&for all $x\\in\\R$,
		\\end{tabular}\\right.
	\\end{equation*}
	where~\${a,u_0\\in \\Cone_b\\left(\\R\\right)}$.
	\\begin{itemize}
		\\item[1.]Let~\${u\\in \\Cone\\left(\\R\\times\\left[0,T\\right]\\right)}$ be a (classical) solution. Show that~$u$ satisfies 
		\\begin{align*}
			u(x,t)&=u_0\\left(x-t\\cdot a\\left(u(x,t)\\right)\\right)&\\text{for all }x\\in\\R,t\\in\\left[0,T\\right).
		\\end{align*}
		\\item[2.]Prove that there exists a solution for all~$t>0$ if and only if~\${\\R\\ni s\\mapsto a\\left(u_0(s)\\right)\\in\\R}$ increasing (\\grqq monoton wachsend\\grqq).
	\\end{itemize}\\ \\\\
	\\textit{Hint}: You can use that for~\${\\Phi:\\R^n\\rightarrow\\R^n}$ continuously differentiable and~$c>0$ such that
	\\begin{equation*}
		\\abs{\\Phi(x)-\\Phi(y)}\\geq c\\abs{x-y}\\qquad \\text{for all }x,y\\in\\R^n
	\\end{equation*} then~$\\Phi$ is a~$\\Cone$-diffeomorphism and~\${\\abs{D\\Phi(x)}\\leq\\frac{1}{c}}$ for all~$x\\in\\R^n$.
\\end{taggedblock}
	
		
\\begin{taggedblock}{EnglishSolution}
\\noindent \\emph{Solution.} 

\\begin{itemize}
	\\item[1.]Let~$x\\in\\R$ and~$t\\in\\left[0,T\\right)$ be given. The characteristic ODEs are
	\\begin{align*}
		\\frac{d}{ds}\\begin{pmatrix}x(s)\\\\t(s)\\\\y(s))\\end{pmatrix}&=\\begin{pmatrix}a\\left(y(s)\\right)\\\\1\\\\0\\end{pmatrix}.
		\\intertext{We solve them with the initial values}
		\\begin{pmatrix}x(0)\\\\t(0)\\\\y(0)\\end{pmatrix}&=\\begin{pmatrix}x\\\\t\\\\u(x,t)\\end{pmatrix}.
	\\end{align*}
	This yields the solution
	\\begin{align*}
		x(s)&=x+sa\\left(u(x,t)\\right),&t(s)&=t+s,&y(s)&=u(x,t)
	\\end{align*}
	for all~$s\\in\\R$. As seen in the lecture series we have
	\\begin{align*}
		u\\left(x(s),t(s)\\right)&=y(s)=u(x,t)&\\text{for all }s\\in\\R\\text{ with }t(s)\\in\\left[0,T\\right).
	\\end{align*}
For~$s=-t$ we obtain
\\begin{equation*}
	u(x,t)=u\\left(x(-t),0\\right)=u_0\\left(x-a\\left(u(x,t)\\right)\\right).
\\end{equation*}
\\item[2.]\\begin{itemize}
	\\item \\grqq$\\Rightarrow$\\grqq: Let~\${\\R\\ni s\\mapsto a\\left(u_0(s)\\right)\\in\\R}$ be increasing. Then for any~$t\\geq0$
\\begin{equation*}
	\\Phi_t:\\R\\rightarrow\\R\\ \\text{with } \\Phi_t\\left(x_0\\right):=x_0+ta\\left(u_0(x_0)\\right)
\\end{equation*}
is bijective since: For any~$x_1\\neq x_2$
\\begin{align*}
	\\Phi_t\\left(x_1\\right)-\\Phi_t\\left(x_2\\right)&=x_1-x_2+t\\left(a\\left(u_0\\left(x_1\\right)\\right)-a\\left(u_0\\left(x_2\\right)\\right)\\right)\\\\
	&=\\left(x_1-x_2\\right)\\underbrace{\\left(1+t\\frac{a\\left(u_0(x_1)\\right)-a\\left(u_0(x_2)\\right)}{x_1-x_2}\\right)}_{\\geq1}
\\end{align*}
and thus~\${\\abs{\\Phi_t(x_1)-\\Phi(t)}\\geq\\abs{x_1-x_2}}$ for all~\${x_1,x_2\\in\\R}$ and~$t\\geq0$. Actually since~\${x\\mapsto a\\left(u_0(x)\\right)}$ has a bounded derivative (due to~\${u_0\\in \\Cone_b\\left(\\R\\right)}$), there is some~$\\delta>0$ such that 
\\begin{equation*}
	\\left(1+t\\frac{a\\left(u_0(x_1)\\right)-a\\left(u_0(x_2)\\right)}{x_1-x_2}\\right)\\geq\\frac{1}{2}\\ \\text{for all }t\\geq-\\delta,x_1\\neq x_2
\\end{equation*}
and therefore~\${\\abs{\\Phi_t(x_1)-\\Phi(t)}\\geq\\frac{1}{2}\\abs{x_1-x_2}}$ for all~\${x_1,x_2\\in\\R}$ and~\${t\\geq-\\delta}$. This along with the hint implies that~\${\\Phi_t^{-1}(x)}$ exists and is a~$\\Cone-$diffeomorphism for any~\${t\\geq-\\delta}$. Moreover, as in the lecture notes the implicit function theorem applied to 
\\begin{align*}
	H:\\R\\times\\R\\times\\left(-\\delta,\\infty\\right)\\rightarrow\\R:\\left(x,\\bar{x},t\\right)\\mapsto\\Phi_t(x)-\\bar{x}
\\end{align*}
implies that~\${\\Phi_t^{-1}(\\bar{x})}$ is continously differentiable with respect to~\${\\bar{x}\\in\\R}$ and~$t>-\\delta$. Hence a solution~\${u\\in\\Cone\\left(\\R\\times\\left[0,\\infty\\right)\\right)}$ can be defined by 
\\begin{equation*}
	u(x,t):=u_0\\left(\\Phi_t^{-1}(x)\\right)\\ \\text{for all }x\\in\\R,t\\geq0.
\\end{equation*}
\\item \\grqq$\\Leftarrow$\\grqq: We prove this by contradiction. Assume that~\${\\R\\ni s\\mapsto a\\left(u_0(x_2)\\right)}$. Consider the time  
\\begin{equation*}
	T_*=\\frac{x_2-x_1}{a\\left(u_0(x_1)\\right)-a\\left(u_0(x_2)\\right)}>0.
\\end{equation*}
Then one has 
\\begin{equation*}
	x_1+T_*a\\left(u_0(x_1)\\right)=x_2+T_*a\\left(u_0(x_2)\\right).
\\end{equation*}
Since~$u$ is constant along the characteristics, we have
\\begin{equation*}
	u_0(x_1)=u\\left(x_1+T_*a\\left(u_0(x_1)\\right),T_*\\right)=u\\left(x_2+T_*a\\left(u_0(x_2)\\right),T_*\\right)=u_0(x_2),
\\end{equation*} which contradicts to the assumption that~\${a\\left(u_0(x_1)\\right)>a\\left(u_0(x_2)\\right)}$. \\\\
Hence~\${\\R\\ni s\\mapsto a\\left(u_0(s)\\right)\\in\\R}$ is increasing.\\hfill$\\square$
\\end{itemize}
\\end{itemize}
\\end{taggedblock}
`,preview:"b686755b-aaa8-45cf-8b3d-4301582a0018.png"},{uuid:"ef18f59c-19a5-45e7-81a0-0e224793aadd",title:["Weak Solutions of Conservation Laws"],tags:["Partial Differential Equations 1"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:3,solution:"droptag",author:["Prof. Dr. Helmut Abels"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`	
	
	\\aufgabe{} 
	
	
\\begin{taggedblock}{EnglishExercise}
\\noindent \\emph{Solution.} 
 
		Let~\${F\\in\\Cone(\\R),u\\in\\Cone\\left(\\R\\times\\left[0,\\infty\\right)\\right)}$ and~\${u_0\\in\\Cone(\\R)}$.
		\\begin{enumerate}
			\\item Show that~$u$ solves the conservation law
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
			with~\${\\varphi(x,0)=0}$ for all~$x\\in\\R$.
			\\item Show that~$u$ solves the conservation law (\\ref{Num3Eq3}) together with
			\\begin{equation*}
				u(x,0)=u_0(x)\\qquad \\text{for all }x\\in\\R
			\\end{equation*}
			if and only if
			\\begin{equation*}
				\\int_{0}^{\\infty}\\int_\\R\\left(u(x,t)\\partial_t\\varphi(x,t)+F\\left(u(x,t)\\right)\\partial_x\\varphi(x,t)\\right)\\diff x\\diff t=-\\int_\\R u_0(x)\\varphi(x,0)\\diff x
			\\end{equation*}
			for all~\${\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)}$.
		\\end{enumerate}
	\\end{taggedblock}
	
	
	\\begin{taggedblock}{EnglishSolution}
	First of all we have for any~\${\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)}$ and~$R>0$ be so large that {supp$\\varphi\\customsubset\\left(-R,R\\right)\\times\\left[0,R\\right)$} that
	\\begin{align}
		&\\int_{0}^{\\infty}\\int_{\\R}\\partial_tu(x,t)\\varphi(x,t)\\diff x\\diff t-\\int_{0}^{\\infty}\\int_{\\R}\\partial_xF\\left(u(x,t)\\right)\\varphi(x,t)\\diff x\\diff t\\nonumber\\\\
		&=\\int_{-R}^{R}\\int_{0}^{R}\\partial_tu(x,t)\\varphi(x,t)\\diff t\\diff x-\\int_{0}^{R}\\int_{-R}^{R}\\partial_xF\\left(u(x,t)\\right)\\varphi(x,t)\\diff x\\diff t\\nonumber\\\\
		&=-\\int_{-R}^{R}\\int_{0}^{R}u(x,t)\\partial_t\\varphi(x,t)\\diff t\\diff x-\\int_{-R}^{R}u(x,0)\\varphi(x,0)\\diff x-\\int_{0}^{R}\\int_{-R}^{R}F\\left(u(x,t)\\right)\\partial_x\\varphi(x,t)\\diff x\\diff t\\nonumber\\\\
		&=-\\int_{0}^{\\infty}\\int_\\R\\left(u(x,t)\\partial_t\\varphi(x,t)+F\\left(u(x,t)\\right)\\partial_x\\varphi(x,t)\\right)\\diff x\\diff t-\\int_{\\R}u(x,0)\\varphi(x,0)\\diff x\\label{Num3Eq4}
	\\end{align}
	where we have used that all boundary terms due to integration by parts except the one for~$t=0$ vanish since stil~\${\\varphi(\\pm R,t)=\\varphi(x,R)=0}$ for all~\${x\\in\\R,t\\geq0}$.
	\\begin{enumerate}
		\\item \\begin{itemize}
		\\item \\grqq$\\Rightarrow$\\grqq: Now let~$u$ solve (\\ref{Num3Eq3}) and let~\${\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)}$ with~\${\\varphi(x,0)=0}$ for all~$x\\in\\R$.\\\\
		Then (\\ref{Num3Eq4}) yields
		\\begin{align*}
			0&=-\\int_{0}^{\\infty}\\int_{\\R}\\partial_tu(x,t)\\varphi(x,t)\\diff x\\diff t-\\int_{0}^{\\infty}\\int_{\\R}\\partial_xF\\left(u(x,t)\\right)\\varphi(x,t)\\diff x\\diff t\\\\
			&=\\int_{0}^{\\infty}\\int_{\\R}\\left(u(x,t)\\partial_t\\varphi(x,t)+F\\left(u(x,t)\\right)\\right)\\partial_x\\varphi(x,t)\\diff x\\diff t
		\\end{align*}
		\\item \\grqq$\\Leftarrow$\\grqq: Let~$u$ satisfy
		\\begin{equation*}
			\\int_{0}^{\\infty}\\int_\\R\\left(u(x,t)\\partial_t\\varphi(x,t)+F\\left(u(x,t)\\right)\\partial_x\\varphi(x,t)\\right)\\diff x\\diff t=0
		\\end{equation*}
		for all~\${\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)}$ with~\${\\varphi(x,0)=0}$ for all~$x\\in\\R$. Then conversely (\\ref{Num3Eq4}) yields
		\\begin{align*}
			0&=\\int_{0}^{\\infty}\\int_\\R\\left(u(x,t)\\partial_t\\varphi(x,t)+F\\left(u(x,t)\\right)\\partial_x\\varphi(x,t)\\right)\\diff x\\diff t\\\\
			&=-\\int_{0}^{\\infty}\\int_{\\R}\\left(\\partial_tu(x,t)+\\partial_xF\\left(u(x,t)\\right)\\right)\\varphi(x,t)\\diff x\\diff t.
		\\end{align*}
		Assume that there are some~\${x_0\\in\\R,t_0>0}$ such that
		\\begin{equation*}
			f(x_0,t_0):=\\partial_t u(x_0,t_0)+\\partial_xF\\left(u(x_0,t_0)\\right)\\neq0
		\\end{equation*}
		W.l.o.g let~\${f(x_0,t_0)>0}$ (otherwise change the inequalities in the following). Since~$f$ is continuous at~\${(x_0,t_0)}$, there is some~\${eps\\in\\left(0,t_0\\right)}$ such that 
		\\begin{equation*}
			f(x,t)>\\frac{1}{2}f(x_0,t_0)\\qquad \\text{for all }x\\in\\left(x_0-\\eps,x_0+\\eps\\right),t\\in\\left(t_0-\\eps,t_0+\\eps\\right). 
		\\end{equation*}
		Now choose some~\${\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)}$ with~\${\\varphi(x_0,t_0)=1,\\varphi(x,t)\\geq0}$ for all~\${x\\in\\R,t\\geq0}$, and {supp$\\varphi\\customsubset\\left(x_0-\\eps,x_0+\\eps\\right)\\times\\left(t_0-\\eps,t_0+\\eps\\right)$}. Then we obtain
		\\begin{align*}
			0&=\\int_{0}^{\\infty}\\int_\\R\\left(\\partial_tu(x,t)+\\partial_xF\\left(u(x,t)\\right)\\right)\\varphi(x,t)\\diff x\\diff t\\\\
			&=\\int_{t_0-\\eps}^{t_0+\\eps}\\int_{x_0-\\eps}^{x_0+\\eps}\\underbrace{\\left(\\partial_xu(x,t)+\\partial_xF\\left(u(x,t)\\right)\\right)}_{\\geq\\frac{1}{2}f(x_0,t_0)>0}\\varphi(x,t)\\diff x\\diff t\\\\
			&\\geq\\frac{1}{2}f(x_0,t_0)\\int_{t_0-\\eps}^{t_0+\\eps}\\int_{x_0-\\eps}^{x_0+\\eps}\\varphi(x,t)\\diff x\\diff t>0
		\\end{align*}
		which is a contradiction. Hence~\${f(x,t)=0}$ for all~\${x\\in\\R,t>0}$. Hence~$u$ solves (\\ref{Num3Eq3}).
		\\end{itemize}
		\\item\\begin{itemize}
			\\item \\grqq$\\Rightarrow$\\grqq: Let~$u$ solve (\\ref{Num3Eq3}) with~\${u(x,t)=u_0(x)}$ for all~$x\\in\\R$ and~\${\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)}$. Then (\\ref{Num3Eq4}) yields
			\\begin{equation*}
				0=\\int_0^\\infty\\int_\\R\\left(u(x,t)\\partial_t\\varphi(x,t)+F\\left(u(x,t)\\right)\\partial_x\\varphi(x,t)\\right)\\diff x\\diff t+\\int_\\R u_0(x)\\varphi(x,0)\\diff x.
			\\end{equation*}
			This shows the claim.
		 \\item \\grqq$\\Leftarrow$\\grqq: Let~$u$ solve
		 \\begin{equation*}
		 	\\int_0^\\infty\\int_\\R\\left(u(x,t)\\partial_t\\varphi(x,t)+F\\left(u(x,t)\\right)\\partial_x\\varphi(x,t)\\right)\\diff x\\diff t=
		 	-\\int_\\R u_0(x)\\varphi(x,0)\\diff x
		 \\end{equation*}
		 for all~\${\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)}$. In particular we have
		 \\begin{equation*}
		 	\\int_0^\\infty\\int_\\R\\left(u(x,t)\\partial_t\\varphi(x,t)+F\\left(u(x,t)\\right)\\partial_x\\varphi(x,t)\\right)\\diff x\\diff t=0
		 \\end{equation*}
		 for all~\${\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)}$ with~\${\\varphi(x,0)=0}$ for all~\${x\\in\\R}$. Hence the first part shows that~$u$ solves (\\ref{Num3Eq3}). Then (\\ref{Num3Eq4}) yields
		 \\begin{align*}
		 	-\\int_\\R u_0(x)\\varphi(x)\\diff x
		 	&=\\int_0^\\infty\\int_\\R\\left(u(x,t)\\partial_t\\varphi(x,t)+F\\left(u(x,t)\\right)\\partial_x\\varphi(x,t)\\right)\\diff x\\diff t\\\\
		 	&=-\\int_0^\\infty\\int_\\R\\underbrace{\\left(\\partial_tu(x,t)+\\partial_xF\\left(u(x,t)\\right)\\right)}_{=0}\\varphi(x,t)\\diff x\\diff t-\\int_\\R u(x,0)\\varphi(x)\\diff x
		 \\end{align*}
		 for all~\${\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)}$. I.e.
		 \\begin{equation*}
		 	\\int_\\R\\left(u_0(x)-u(x,0)\\right)\\varphi(x,0)\\diff x=0
		 \\end{equation*}
		 for all~\${\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)}$. This implies that~\${u_0(x)-u(x,0)=0}$ for all~$x\\in\\R$. Otherwise there is some~$x_0\\in\\R$ with~\${u_0(x_0)-u(x_0,0)\\neq0}$. Choosing some~\${\\varphi\\in\\Cone_c\\left(\\R\\times\\left[0,\\infty\\right)\\right)}$ with~\${\\varphi(x_0,0)=1,\\varphi(x,0)\\geq0}$ for all~$x\\in\\R$ and {supp$\\varphi(x,0)\\customsubset\\left(x_0-\\eps,x_0+\\eps\\right)$} for some~$\\eps>0$ sufficiently small one obtains a contradiction as above.\\hfill$\\square$
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
		where~\${a>0,t_0>0}$ and~\${u_0\\in \\Cone_b(\\R)}$ are given. Prove that:
		\\begin{enumerate}
			\\item If~$t_0>0$, then (\\ref{Num3Eq1})-(\\ref{Num3Eq2}) possesses for all~\${u_0\\in \\Cone_b(\\R)}$ a unique solution~\${u\\in \\Cone(\\R\\times\\left(0,\\infty\\right))}$. Calculate the solution.
			\\item If~$t_0=0$, then (\\ref{Num3Eq1})-(\\ref{Num3Eq2}) possesses a solution~\${u\\in \\Cone\\left(\\R\\times\\left[0,\\infty\\right)\\right)}$ only if~$u_0$ is constant. Which necessary solvability condition for (\\ref{Num3Eq1})-(\\ref{Num3Eq2}) is not satisfied in this case?
			\\item Determine all solutions~\${u\\in \\Cone\\left(\\R\\times\\left[0,\\infty\\right)\\right)}$ of (\\ref{Num3Eq1})-(\\ref{Num3Eq2}) with~$t_0$ and~\${u_0(x)=c}$ for all~$x\\in\\R$ and some~$c\\in\\R$.
		\\end{enumerate}
	\\end{taggedblock}
	
	
\\begin{taggedblock}{EnglishSolution}
\\noindent \\emph{Solution.} 
 
	\\begin{enumerate}
		\\item Let~$x_0\\in\\R$ and~$t_0>0$ be given. The characteristic ODEs are 
		\\begin{equation*}
			\\frac{d}{ds}\\begin{pmatrix}x(s)\\\\t(s)\\\\y(s)\\end{pmatrix}=\\begin{pmatrix}a\\\\t(s)\\\\0\\end{pmatrix}.
		\\end{equation*}
		We solve them with the initial values
		\\begin{equation*}
			\\begin{pmatrix}x(0)\\\\t(0)\\\\y(0)\\end{pmatrix}=\\begin{pmatrix}x_0\\\\t_0\\\\u_0\\left(x_0\\right)\\end{pmatrix}
		\\end{equation*}
		The solutions are given by
		\\begin{equation*}
			x(s)=x_0+sa,\\ t(s)=t_0e^s,\\ y(s)=u_0(x_0)
		\\end{equation*}
		for all~$s\\in\\R$. Therefore if~\${u\\in \\Cone\\left(\\R\\times\\left(0,\\infty\\right)\\right)}$ is a solution of (\\ref{Num3Eq1})-(\\ref{Num3Eq2}) we have
		\\begin{equation*}
			u_0(x_0)=y(s)=u\\left(x(s),t(s)\\right)=u\\left(x_0+sa,t_0e^s\\right)\\qquad \\text{for all }s\\in\\R,x_0\\in\\R.
		\\end{equation*}
		In particular for any~\${x\\in\\R,t>0}$, we obtain for~\${s=\\ln\\left(\\frac{t}{t_0}\\right)}$ and~\${x_0=x-sa=x-a\\ln\\left(\\frac{t}{t_0}\\right)}$ that
		\\begin{equation*}
			u(x,t)=u\\left(x(s),t(s)\\right)=u_0\\left(x-a\\ln\\left(\\frac{t}{t_0}\\right)\\right).
		\\end{equation*}
		This shows that the solution is uniquely determined by the latter formula. Conversely, if we define
		\\begin{equation*}
			u(x,t):=u_0\\left(x-a\\ln\\left(\\frac{t}{t_0}\\right)\\right)\\ \\text{for all }x\\in\\R,t>0,
		\\end{equation*}
		we obtain a solution~\${u\\in \\Cone\\left(\\R\\times\\left(0,\\infty\\right)\\right)}$ of (\\ref{Num3Eq1}) by construction:
		\\begin{equation*}
			t\\partial_tu(x,t)=tu_0'\\left(x-a\\ln\\left(\\frac{t}{t_0}\\right)\\right)\\cdot\\left(-\\frac{a}{t}\\right)=-a\\partial_xu(x,t)
		\\end{equation*}
		for alle~\${x\\in\\R,t>0}$ and it satisfies~\${u(x,t_0)=u_0=x}$ for all~\${x\\in\\R}$.
		
		\\item If~\${u\\in \\Cone\\left(\\R\\times\\left[0,\\infty\\right)\\right)}$ is a solution of (\\ref{Num3Eq1})-(\\ref{Num3Eq2}) we obtain
		\\begin{equation}
			a\\partial_xu_0(x)=a\\partial_xu(x,0)=\\lim\\limits_{t\\rightarrow0^+}a\\partial_xu(x,t)=-\\lim\\limits_{t\\rightarrow0^+}t\\partial_tu(x,t)=0
		\\end{equation}
		for all~$x\\in\\R$ since the partial derivatives are continuous as~\${t\\rightarrow0^+}$. Because of~\${a>0,\\partial_xu_0(x)=0}$ for all~$x\\in\\R$ and therefore~$u_0$ is constant.\\\\
		In the present case the surface~\${S=\\R\\times\\left\\{0\\right\\}}$ is characteristic for the differential operator~\${Lu=a\\partial_xu+t\\partial_tu}$ since
		\\begin{equation*}
			\\binom{a}{0}=\\left.\\binom{a}{t}\\right|_{t=0}\\in T_{(x,0)}S=S.
		\\end{equation*}
		\\textit{The following argument could be incomplete:}%#code007missionincomplete
		\\\\ Because of 
		\\begin{equation*}
			\\begin{pmatrix}a\\\\1\\end{pmatrix}\\notin T_xS=\\R^n\\times\\left\\{0\\right\\}\\qquad\\text{For all }x\\in S 
		\\end{equation*} it is necessary that S is non-characteristic to solve this linear first order PDE for any initial values~$u_0$ at~$S$.
		
		\\item Assume that~\${u\\in \\Cone\\left(\\R\\times\\left(0,\\infty\\right)\\right)}$ is a solution of (\\ref{Num3Eq1})-(\\ref{Num3Eq2}) for~$t_0=0$ and~$u_0(x)=c$ for all~$x\\in\\R$ and some~$c\\in\\R$. Define~\${w(t):=u(0,t)}$ for all~\${t\\geq0}$. Then~\${w\\in \\Cone\\left(\\left[0,\\infty\\right)\\right)}$ with~\${w(0)=c}$ by definition. Now for any~\${t_0>0}$ consider the projected characteristic curves~\${\\left(x(s),t(s)\\right)_{s\\in\\R}}$ with~\${x(0)=0}$ and~\${t(s)=t_0}$, i.e.
		\\begin{equation*}
			x(s)=sa,\\ t(s)=t_0e^s\\ \\text{for all }s\\in\\R.
		\\end{equation*}
		Since~$u$ is constant along the projected characteristic curves, we have
		\\begin{equation*}
			w(t_0)=u(0,t_0)=u\\left(x(s),t(s)\\right)=u\\left(sa,t_0e^s\\right).
		\\end{equation*}
		Choosing for~$t>0$ and~\${x\\in\\R,s=\\frac{x}{a}, t_0=te^{-s}=te^{-\\frac{x}{a}}}$, we conclude
		\\begin{align*}
			u(x,t)&=w\\left(te^{-\\frac{x}{a}}\\right)\\ \\text{for all }x\\in\\R,t\\geq0.&(\\star)
		\\end{align*}
		Conversely, if~\${w\\in \\Cone_b(\\R)}$ is an arbitrary function with~\${c=w(0)}$, we can define~$u$ by~$(\\star)$.\\\\
		Then~\${u\\in \\Cone\\left(\\R\\times\\left[0,\\infty\\right)\\right)}$ and~$u$ solves (\\ref{Num3Eq1}) since
		\\begin{equation*}
			t\\partial_tu(x,t)=te^{-\\frac{x}{a}}w'\\left(te^{-\\frac{x}{a}}\\right)=-a\\partial_xu(x,t)
		\\end{equation*}
		for all~\${x\\in\\R,t>0}$, and~\${u(x,0)=w(0)=c=u_0(x)}$ for all~$x\\in\\R$.\\hfill$\\square$
	\\end{enumerate}
\\end{taggedblock}
`,preview:"67ac1dce-5561-432d-a85f-32ef778b3889.png"},{uuid:"9056de5f-d87b-4b13-9526-fa686ecb0142",title:["Bounded Maps","Banach Space"],tags:["Funktionalanalysis"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:2,solution:"droptag",author:["Prof. Dr. Helmut Abels"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`


\\aufgabe{} 


\\begin{taggedblock}{EnglishExercise}
Let~$X$ be a set and~\${(Y,|\\cdot|_Y)}$ a Banach space. For every map~\${f: X \\rightarrow Y}$, define
    \\[
    \\abs{f}_\\infty := \\sup_{x \\in X} |f(x)|_Y \\in [0,\\infty] \\,.
    \\]
    Then~\${\\abs{\\cdot}_\\infty}$ is called \\emph{sup norm} (or uniform norm, in German \\emph{Supremumsnorm}). Let
    $$\\ell^\\infty(X;Y) = \\{ f: X \\rightarrow Y \\mid \\abs{f}_\\infty <
    \\infty \\}$$ be the space of bounded~$Y$-valued functions on~$X$.
    \\begin{itemize}
    \\item[i)] Show that~$(\\ell^\\infty(X;Y), \\abs{\\cdot}_\\infty)$
				is a Banach space.
        {\\vspace{0.1cm}\\par\\noindent\\textit{Hint}:}
        	Use the completeness of~$Y$ to obtain a candidate~$f$ for the
        	limit of a Cauchy sequence~$f_n$. Then estimate~
        	 $|f_n(x) - f_m(x)|$ and take the limit~$n \\rightarrow \\infty$ to 
        	 gain information about~$f$.

    \\item[ii)] Assume now that~$X$ is a topological space and let 
 \\[\\mathcal{C}_b(X;Y)
        := \\{ f \\in \\ell^\\infty(X;Y) \\mid f \\textrm{ is continuous } \\} \\]
		be the space of continuous bounded~$Y$-valued functions.
		Show that~$\\mathcal{C}_b(X;Y) \\subset \\ell^\\infty(X;Y)$
		is a (topologically) closed linear subspace. What does
		this tell you about the denseness of the continuous functions
		in the bounded functions?
%       {\\vspace{0.1cm}\\par\\noindent\\textit{Hint}:}
%            Remember the analysis 1 lecture, in particular the $\\frac{\\eps}{3}$-trick.
    \\end{itemize}
\\end{taggedblock}




\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 

\\textit{i.)} By using the triangle inequality for~$|\\cdot|_Y$, it is immediately seen that~$\\ell^\\infty(X;Y)$ is a vector space and that ~$\\abs{\\cdot}_\\infty$ is a norm.


We still need to show completeness. Let~$(f_n)$ be a Cauchy sequence in~$\\ell^\\infty(X;Y)$. Then, for every ~\${x \\in X}$ we have the estimation:
    \\[
    |f_n(x) - f_m(x)|_Y
    \\leq \\sup_{y \\in X} |f_n(y) - f_m(y)|_Y
    = \\abs{f_n - f_m}_\\infty \\,.
    \\]
Thus, it follows immediately that for every~$x \\in X$, the sequence~$(f_n(x))$ is a Cauchy sequence in~$Y$. Since~$Y$ is assumed to be complete, the limit exists: ~$f(x) :=
    \\lim_{n \\rightarrow \\infty} f_n(x) \\in Y$. This way, we obtain a function~$f: X \\rightarrow Y$. It remains to show that~$f \\in \\ell^\\infty(X;Y)$ and that~$f_n \\rightarrow
    f$ with respect to~$\\abs{\\cdot}_\\infty$. For this, let~$\\eps > 0$. Since~$(f_n)$ is a Cauchy sequence, there exists~$N \\in \\mathbb{N}$ such that for all~$n,m \\geq N$, the following holds:
    \\[
    |f_n(x) - f_m(x)|_Y \\leq \\abs{f_n - f_m}_\\infty < \\eps
    \\qquad \\forall x \\in X \\,.
    \\]
    Taking the limit as~$n \\rightarrow \\infty$ on the left side, we obtain that for all~$m \\geq N$, the following holds:
    \\[
    |f(x) - f_m(x)|_Y \\leq \\eps
    \\qquad \\forall x \\in X \\,.
    \\tag{$*$}
    \\]
    Choose an~$m \\geq N$, then it follows:
    \\[
    |f(x)| \\leq |f(x) - f_m(x)| + |f_m(x)|
    \\leq \\eps + \\abs{f_m}_\\infty
    \\qquad \\forall x \\in X \\,.
    \\]
    Since the right side is independent of ~$x$, we get:
    \\[
    \\abs{f}_\\infty = \\sup_{x \\in X}|f(x)|
    \\leq \\eps + \\abs{f_m}_\\infty < \\infty \\,.
    \\]
    Thus,~$f \\in \\ell^\\infty(X;Y)$. On the other hand, from ~($*$), it immediately follows that~$f_n \\rightarrow f$ with respect to~$\\abs{\\cdot}_\\infty$
    by taking the supremum over all~$x \\in X$ again.


    \\vspace{0.3cm}
    \\noindent
    \\textit{ii.)} Let~$(f_n)$ be a sequence with~\${f_n \\in \\mathcal{C}_b(X;Y)}$
    and~\${f_n \\rightarrow f \\in \\ell^\\infty(X;Y)}$ with respect to~\${\\abs{\\cdot}_\\infty}$. We need to show that~\${f \\in
    \\mathcal{C}_b(X;Y)}$ and we use the~$\\eps/3$-trick for this. Let~\${U \\subset Y}$ be open, then we need to show that~\${f^{-1}(U)
    \\subset X}$ is open. Let ~\${x_0 \\in f^{-1}(U)}$. Since~\${U \\subset
    Y}$ is open, we find~$\\eps > 0$ such that~\${B_\\eps(f(x_0))
    \\subset U}$. We construct an open neighborhood~\${V
    \\subset X}$ of~$x$ with~\${f(V) \\subset B_\\eps(f(x_0)) \\subset
    U}$. Then,~$V \\subset f^{-1}(U)$ and since~$x_0 \\in f^{-1}(U)$
    was arbitrary, it follows that~$f^{-1}(U) \\subset X$ is open. To construct the desired~$V$, we use that for every~$x
    \\in X$ and every~$n \\in \\mathbb{N}$, by the triangle inequality:
    \\[
    |f(x) - f(x_0)|_Y
    \\leq |f(x) - f_n(x)|_Y + |f_n(x) - f_n(x_0)|_Y 
    + |f_n(x_0) - f(x_0)|_Y \\,.
    \\]
    Since~$f_n \\rightarrow f$ with respect to~$\\abs{\\cdot}_\\infty$, we find~\${N
    \\in \\mathbb{N}}$ such that for all~\${n \\geq N}$:
    \\[
    |f(x) - f_n(x)|_Y \\leq \\abs{f-f_n}_\\infty < \\frac{\\eps}{3}
    \\quad \\forall x \\in X \\,.
    \\tag{$*$}
    \\]
    Choose such an~$n$ and set~\${V :=
    f_n^{-1}(B_{\\eps/3}(f_n(x_0)))}$. . Since~$f_n$ is continuous,~\${V\\subset X}$ is an open neighborhood of~$x_0$. Finally, we have:
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
    Therefore,~$f(V) \\subset B_\\eps(f(x_0))$ and we are done.


    Regarding density, from the closedness of~$\\mathcal{C}_b(X;Y)$ in $\\ell^\\infty(X;Y)$, it follows that~$\\mathcal{C}_b(X;Y)
    \\subset \\ell^\\infty(X;Y)$ is dense if and only if~$\\mathcal{C}_b(X;Y) = \\ell^\\infty(X;Y)$.
\\end{taggedblock}
`,preview:"9056de5f-d87b-4b13-9526-fa686ecb0142.png"},{uuid:"d059375e-3c39-453d-90a9-0922197604f1",title:["interpolierende Polynome","Binomialkoeffizient"],tags:["Numerik 1","Num1KrofZ07Au"],languages:["GermanExercise","GermanSolution"],semesterwoche:8,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganin"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`	
	
	
	\\aufgabe{} 
	
	
	\\begin{taggedblock}{GermanExercise}
		Seien~\${a\\in\\R,h>0}$ und eine Funktion~\${f:\\R\\rightarrow\\R}$ gegeben,~\${x_i:=a+ih}$ für~\${i=0,\\dots,n}$. Sei~\${P\\left(f\\mid x_0,\\dots,x_n\\right)}$ das interpolierende Polynom zu den Punkten~\${\\left(x_i,f\\left(x_i\\right)\\right),i=0,\\dots,n}$, mit~\${\\deg\\left(P\\left(f\\mid x_0,\\dots,x_n\\right)\\right)\\leq n}$ und sei~\${\\left[x_0,\\dots,x_n;h\\right]f}$ der Koeffizient vor~$x^n$ in~\${P\\left(f\\mid x_0,\\dots,x_n\\right)}$. Zeigen Sie, dass dann
		\\begin{equation*}
			\\left[x_0,\\dots,x_n;h\\right]f=\\frac{1}{h^nn!}\\sum\\limits_{j=0}^n\\binom{n}{j}\\left(-1\\right)^{n-j}f(x_j)
		\\end{equation*} gilt, wobei~\${\\binom{n}{j}=\\frac{n!}{j!(n-j)!}}$ der Binomialkoeffizient ist.\\\\
		\\textit{Hinweis:} Beweisen und benutzen Sie, dass für alle~$n\\in\\N$ und für alle~\${j\\in\\left\\{1,\\dots,n-1\\right\\}}$ gilt
		\\begin{equation*}
			\\binom{n-1}{j-1}+\\binom{n-1}{j}=\\binom{n}{j}
		\\end{equation*}
	\\end{taggedblock}
	
	
	
	
\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 

	Beweise zunächst den Hinweis:
	\\begin{align*}
		\\binom{n-1}{j-1}+\\binom{n-1}{j}&=\\frac{(n-1)\\cdot\\dots\\cdot(n-j+1)}{(j-1)!}+\\frac{(n-1)\\cdot\\dots\\cdot(n-j)}{(j)!}\\\\
		&=\\frac{(n-1)\\cdot\\dots\\cdot\\left(j+(n-j)\\right)}{j!}\\\\
		&=\\frac{n\\cdot(n-1)\\cdot\\dots\\cdot(n-j+1)}{j!}=\\binom{n}{j}.
	\\end{align*}
	Zeige nun, dass~\${\\left[x_0,\\dots,x_n\\right]f=\\frac{1}{h^nn!}\\sum_{j=0}^n\\binom{n}{j}(-1)^{n-j}f(x_j)}$.
	Sei~\${x_i:=a+ih, i=0,\\dots,n}$\\\\
    \\begin{itemize}
        \\item[$n=0$:]r.S.=\${\\frac{1}{h^0\\cdot0!}\\binom{0}{0}(-1)^0f(x_0)=f(x_0)=\\left[x_0\\right]f}$
        \\item[$n-1\\rightarrow n$:]
        \\begin{align*}
			\\left[x_0,\\dots,x_n\\right]f&=\\frac{\\left[x_1,\\dots,x_n\\right]f-\\left[x_0,\\dots,x_{n-1}\\right]f}{x_n-x_0}\\\\
			&\\stackrel{I.V.}{=}\\underbrace{\\frac{1}{x_n-x_0}}_{=\\frac{1}{nh}}\\left(\\frac{1}{h^{n-1}(n-1)!}\\sum\\limits_{j=0}^{n-1}\\binom{n-1}{j}(-1)^{n-j-1}f(\\underbrace{x_1+jh}_{=x_0+(j+1)h})\\right.\\\\
			&\\left.-\\frac{1}{h^{n-1}(n-1)!}\\sum\\limits_{j=0}^{n-1}\\binom{n-1}{j}(-1)^{n-j-1}f(x_0+jh)\\right)\\\\
			&=\\frac{1}{h^nn!}\\left(\\sum\\limits_{j=1}^n\\binom{n-1}{j-1}(-1)^{n-j}f(x_0+jh)-\\sum\\limits_{j=0}^{n-1}\\binom{n-1}{j}(-1)^{n-1-j}f(x_0+jh)\\right)\\\\
			&=\\frac{1}{h^nn!}\\left(\\sum\\limits_{j=1}^{n-1}\\left(\\binom{n-1}{j-1}+\\binom{n-1}{j}\\right)(-1)^{n-j}f(x_0+jh)+f(x_0+jh)+(-1)^nf(x_0)\\right)\\\\
			&=\\frac{1}{h^nn!}\\sum\\limits_{j=0}^n\\binom{n}{j}(-1)^{n-j}f(x_0+jh)
        \\end{align*}
    \\end{itemize}
    \\hfill$\\square$
\\end{taggedblock}
`,preview:"d059375e-3c39-453d-90a9-0922197604f1.png"},{uuid:"dfb95944-54b3-44ac-ac73-b625a8310ec2",title:["Abschätzung","Lagrangeschen Basispolynome","interpolierende Polynome","scharfe Abschätzung"],tags:["Numerik 1","Num1fZ07Au"],languages:["GermanExercise","GermanSolution"],semesterwoche:8,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganin"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`	
	
	\\aufgabe{} 
	
	
	\\begin{taggedblock}{GermanExercise}
		Sei~\${\\left[a,b\\right]\\subset\\R}$ ein Intervall und seien paarweise verschiedene Stützstellen~\${x_0,\\dots,x_n\\in\\left[a,b\\right]}$\\\\sowie~\${f_0,\\dots,f_n,\\eps_0,\\dots,\\eps_n\\in\\R}$ gegeben. Weiter sei~$p$ das interpolierende Polynom zu den\\\\Daten~\${\\left(x_i,f_i\\right)}$,~\${i=0,\\dots,n}$, mit~\${\\deg(p)\\leq n}$ und sei~$q$ das interpolierende Polynom zu den\\\\Daten~\${\\left(x_i,f_i+\\eps_i\\right)}$,~\${i=0,\\dots,n}$ mit~\${\\deg(q)\\leq n}$.
		\\begin{itemize}
			\\item[i)] Wir definieren
			\\begin{equation*}
				L_n:=\\sup\\limits_{x\\in\\left[a,b\\right]}\\sum\\limits_{j=0}^n\\abs{w_j(x)},
			\\end{equation*}
			wobei~\${w_j}$,~\${j=1,\\dots,n}$ die Lagrangeschen Basispolynome bezeichnen.\\\\Zeigen Sie, dass für~\${\\lvert p-q\\rvert_\\infty:=\\sup_{x\\in\\left[a,b\\right]}\\abs{p(x)-q(x)}}$ die Abschätzung 
			\\begin{equation*}
				\\lvert p-q\\rvert_\\infty\\leq L_n\\max\\limits_{0\\leq i\\leq n}\\abs{\\eps_i}
			\\end{equation*} gilt.
		\\item[ii)] Zeigen Sie, dass die obige Abschätzung scharf ist, das heißt: Geben Sie zu beliebigen Werten~\${\\left(x_i,f_i\\right)\\in\\left[a,b\\right]\\times\\R}$ Zahlen~\${\\eps_0,\\dots\\eps_n}$ an, so dass in der obigen Abschätzung Gleichheit gilt und nicht alle~$\\eps_i$ gleich Null sind.
		\\end{itemize}
	\\end{taggedblock}
	
	
	
	
\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 

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
`,preview:"dfb95944-54b3-44ac-ac73-b625a8310ec2.png"},{uuid:"9f1d6591-3bd4-4e52-9fa3-7a1ad3c70a4e",title:["Basispolynome","Interpolationspolynom","Newtonsche Darstellung","Rekursionsformel","Aitken","Neville"],tags:["Numerik 1","Num1fZ07Au"],languages:["GermanExercise","GermanSolution"],semesterwoche:8,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganin"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`	
	
	
	\\aufgabe{} 
	
	
\\begin{taggedblock}{GermanExercise}
	Gegeben seien die Werte \\begin{tabular}{c|cccc}
		$x_i$&1&2&4&8\\\\\\hline
		$f_i$&7&1&3&0
	\\end{tabular}
\\begin{itemize}
	\\item[i)]Geben Sie die Lagrangeschen Basisplynome~\${w_j,j=0,\\dots3}$ an und berechnen Sie daraus das interpolierende Polynom~$p$ mit~\${\\deg(p)\\leq3}$ zu den Punkten~\${\\left(x_i,f_i\\right),i=0,\\dots,3}$.
	\\item[ii)]Bestimmen Sie de Koeffizienten~\${d_k,k=0,\\dots,3}$ der Newtonschen Darstellung des interpolierenden Polynoms
	\\begin{equation*}
		p(x)=d_0+d_1\\left(x-x_0\\right)+d_2\\left(x-x_0\\right)\\left(x-x_1\\right)+d_3\\left(x-x_0\\right)\\left(x-x_1\\right)\\left(x-x_2\\right).
	\\end{equation*}
	\\item[iii)] Werten Sie mit Hilfe der Rekursionsformel von Aitken und Neville das interpolierende Polynom~$p$ an der Stelle~$x=5$ aus. Geben Sie dabei alle Zwischenergebnisse des Rechenschemas an.
\\end{itemize}
\\end{taggedblock}
	
		
\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 

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
	Oder Besser mit Dreiecksschema:~\${d_k=\\left[x_0,\\dots,x_k\\right]f}$,~\${\\left[x_i\\right]f=f_i}$ für~\${i=0\\dots,3}$\\\\
	und~\${\\left[x_{i_0},x_{i_1},\\dots,x_{i_k}\\right]f=\\frac{\\left[x_{i_1},\\dots,x_{i_k}\\right]f-\\left[x_{i_0},\\dots,x_{i_{k-1}}\\right]f}{x_{i_k}-x_{i_0}}}$
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
	\\item[iii)] Sei~$x=5$ und nutze Neville-Aitken:
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
`,preview:"9f1d6591-3bd4-4e52-9fa3-7a1ad3c70a4e.png"}],oo={templates:Wc,headers:Vc,exercises:Kc};var ln=(t=>(t[t.All=0]="All",t[t.Exercise=1]="Exercise",t[t.Template=2]="Template",t[t.Header=3]="Header",t))(ln||{});class Gc{}class Jc{}class Zc{}function Sl(t){var e=[];for(var n of t)for(var i of oo.exercises)if((!n.uuid||i.uuid==n.uuid)&&(!n.author||i.author==n.author)){var r=new Gc;r.uuid=i.uuid,r.author=i.author,r.title=i.title,r.headers=i.headers,r.license=i.license,r.content=i.content,r.preview=i.preview,e.push(r)}return e}function Qc(t){var e=[];for(var n of t)for(var i of oo.headers)if((!n.uuid||i.uuid==n.uuid)&&(!n.author||i.author==n.author)){var r=new Jc;r.uuid=i.uuid,r.author=i.author,r.content=i.content,e.push(r)}return e}function Cl(t){var e=[];for(var n of t)for(var i of oo.templates)if(!n.uuid||i.uuid==n.uuid){let r=new Zc;r.uuid=i.uuid,r.title=i.title,r.author=i.author,r.fields=i.fields,r.license=i.license,r.content=i.content,e.push(r)}return e}function tu(t){var e=[];for(var n of t.itemSelection)e.push({itemType:ln.Exercise,uuid:n.uuid});var i=Sl(e),r=i.map($=>$.content).join(`
`);let o=[];for(var s of i)for(var l of s.headers)o.push(l);o=Array.from(new Set(o));let a=[];for(let $ of o)a.push({itemType:ln.Header,uuid:$});var f=Qc(a),c=f.map($=>$.content).join(`
`);t.isoLang=="de"?(c+="\\usetag{GermanExercise}",t.solution&&(c+="\\usetag{GermanSolution}")):(c+="\\usetag{EnglishExercise}",t.solution&&(c+="\\usetag{EnglishSolution}"));var h=[{itemType:ln.Template,uuid:t.template.uuid}];let g=Cl(h)[0],m=g.content;return Object.entries(g.fields).forEach(([$,E],X)=>{if(E[0]=="EXERCISES"){let z="((* "+E[0]+" *))";m=m.replace(z,r)}else if(E[0]=="HEADERS"){let z="((* "+E[0]+" *))";m=m.replace(z,c)}else{let z="((* "+E[0]+" *))",M="";t.template.fields.has(E[0])&&(M=t.template.fields.get(E[0])),m=m.replace(z,M)}}),m}var so=(t=>(t.PDF="PDF",t.Source="SOURCE",t))(so||{});class eu{constructor(e,n){this.exercises=e,this.tags=n}}function nu(t){const e=[{itemType:ln.Exercise}];let n=Sl(e),i=[];return new eu(n,i)}function iu(t){const e=[{itemType:ln.Template}];return Cl(e)}async function rr(t){let e=tu(t);if(t.docType=="PDF")return Uc(e);if(t.docType=="SOURCE")return e;throw Error("Wrong configuration")}class ru{}class ou{}class su{constructor(){this.docType=so.PDF}}const zi=Yc({id:"selectExercises",state:()=>({items:[],templateUuid:"",templateStr:[],langCode:""}),actions:{set(t){t&&(this.items.length=0,this.items.push(...t))},add(t){t&&this.items.push(t)},setTemplateOptions(t){if(t){this.templateStr.length=0;for(let[e,n]of t)n&&this.templateStr.push([e,n])}},generateConfig(t=!1){let e=new ru;e.uuid=this.templateUuid,e.fields=new Map(this.templateStr);let n=[];for(var i of this.items){let o=new ou;o.uuid=i.uuid,o.subElements=[],n.push(o)}let r=new su;return r.template=e,r.itemSelection=n,r.isoLang=this.langCode,r.solution=t,console.log(r),r}}});/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function ss(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function se(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ss(Object(n),!0).forEach(function(i){lu(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ss(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function fi(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?fi=function(e){return typeof e}:fi=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fi(t)}function lu(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function he(){return he=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},he.apply(this,arguments)}function au(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function fu(t,e){if(t==null)return{};var n=au(t,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var cu="1.14.0";function de(t){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(t)}var pe=de(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),zn=de(/Edge/i),ls=de(/firefox/i),In=de(/safari/i)&&!de(/chrome/i)&&!de(/android/i),Tl=de(/iP(ad|od|hone)/i),uu=de(/chrome/i)&&de(/android/i),Rl={capture:!1,passive:!1};function et(t,e,n){t.addEventListener(e,n,!pe&&Rl)}function Z(t,e,n){t.removeEventListener(e,n,!pe&&Rl)}function wi(t,e){if(e){if(e[0]===">"&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch{return!1}return!1}}function du(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function ee(t,e,n,i){if(t){n=n||document;do{if(e!=null&&(e[0]===">"?t.parentNode===n&&wi(t,e):wi(t,e))||i&&t===n)return t;if(t===n)break}while(t=du(t))}return null}var as=/\s+/g;function Nt(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(as," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(as," ")}}function N(t,e,n){var i=t&&t.style;if(i){if(n===void 0)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),e===void 0?n:n[e];!(e in i)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),i[e]=n+(typeof n=="string"?"":"px")}}function an(t,e){var n="";if(typeof t=="string")n=t;else do{var i=N(t,"transform");i&&i!=="none"&&(n=i+" "+n)}while(!e&&(t=t.parentNode));var r=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return r&&new r(n)}function Dl(t,e,n){if(t){var i=t.getElementsByTagName(e),r=0,o=i.length;if(n)for(;r<o;r++)n(i[r],r);return i}return[]}function re(){var t=document.scrollingElement;return t||document.documentElement}function $t(t,e,n,i,r){if(!(!t.getBoundingClientRect&&t!==window)){var o,s,l,a,f,c,h;if(t!==window&&t.parentNode&&t!==re()?(o=t.getBoundingClientRect(),s=o.top,l=o.left,a=o.bottom,f=o.right,c=o.height,h=o.width):(s=0,l=0,a=window.innerHeight,f=window.innerWidth,c=window.innerHeight,h=window.innerWidth),(e||n)&&t!==window&&(r=r||t.parentNode,!pe))do if(r&&r.getBoundingClientRect&&(N(r,"transform")!=="none"||n&&N(r,"position")!=="static")){var g=r.getBoundingClientRect();s-=g.top+parseInt(N(r,"border-top-width")),l-=g.left+parseInt(N(r,"border-left-width")),a=s+o.height,f=l+o.width;break}while(r=r.parentNode);if(i&&t!==window){var m=an(r||t),$=m&&m.a,E=m&&m.d;m&&(s/=E,l/=$,h/=$,c/=E,a=s+c,f=l+h)}return{top:s,left:l,bottom:a,right:f,width:h,height:c}}}function fs(t,e,n){for(var i=Se(t,!0),r=$t(t)[e];i;){var o=$t(i)[n],s=void 0;if(n==="top"||n==="left"?s=r>=o:s=r<=o,!s)return i;if(i===re())break;i=Se(i,!1)}return!1}function hn(t,e,n,i){for(var r=0,o=0,s=t.children;o<s.length;){if(s[o].style.display!=="none"&&s[o]!==F.ghost&&(i||s[o]!==F.dragged)&&ee(s[o],n.draggable,t,!1)){if(r===e)return s[o];r++}o++}return null}function lo(t,e){for(var n=t.lastElementChild;n&&(n===F.ghost||N(n,"display")==="none"||e&&!wi(n,e));)n=n.previousElementSibling;return n||null}function Ht(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)t.nodeName.toUpperCase()!=="TEMPLATE"&&t!==F.clone&&(!e||wi(t,e))&&n++;return n}function cs(t){var e=0,n=0,i=re();if(t)do{var r=an(t),o=r.a,s=r.d;e+=t.scrollLeft*o,n+=t.scrollTop*s}while(t!==i&&(t=t.parentNode));return[e,n]}function hu(t,e){for(var n in t)if(t.hasOwnProperty(n)){for(var i in e)if(e.hasOwnProperty(i)&&e[i]===t[n][i])return Number(n)}return-1}function Se(t,e){if(!t||!t.getBoundingClientRect)return re();var n=t,i=!1;do if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var r=N(n);if(n.clientWidth<n.scrollWidth&&(r.overflowX=="auto"||r.overflowX=="scroll")||n.clientHeight<n.scrollHeight&&(r.overflowY=="auto"||r.overflowY=="scroll")){if(!n.getBoundingClientRect||n===document.body)return re();if(i||e)return n;i=!0}}while(n=n.parentNode);return re()}function gu(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function or(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}var An;function ql(t,e){return function(){if(!An){var n=arguments,i=this;n.length===1?t.call(i,n[0]):t.apply(i,n),An=setTimeout(function(){An=void 0},e)}}}function pu(){clearTimeout(An),An=void 0}function Il(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function Al(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}var Mt="Sortable"+new Date().getTime();function mu(){var t=[],e;return{captureAnimationState:function(){if(t=[],!!this.options.animation){var i=[].slice.call(this.el.children);i.forEach(function(r){if(!(N(r,"display")==="none"||r===F.ghost)){t.push({target:r,rect:$t(r)});var o=se({},t[t.length-1].rect);if(r.thisAnimationDuration){var s=an(r,!0);s&&(o.top-=s.f,o.left-=s.e)}r.fromRect=o}})}},addAnimationState:function(i){t.push(i)},removeAnimationState:function(i){t.splice(hu(t,{target:i}),1)},animateAll:function(i){var r=this;if(!this.options.animation){clearTimeout(e),typeof i=="function"&&i();return}var o=!1,s=0;t.forEach(function(l){var a=0,f=l.target,c=f.fromRect,h=$t(f),g=f.prevFromRect,m=f.prevToRect,$=l.rect,E=an(f,!0);E&&(h.top-=E.f,h.left-=E.e),f.toRect=h,f.thisAnimationDuration&&or(g,h)&&!or(c,h)&&($.top-h.top)/($.left-h.left)===(c.top-h.top)/(c.left-h.left)&&(a=bu($,g,m,r.options)),or(h,c)||(f.prevFromRect=c,f.prevToRect=h,a||(a=r.options.animation),r.animate(f,$,h,a)),a&&(o=!0,s=Math.max(s,a),clearTimeout(f.animationResetTimer),f.animationResetTimer=setTimeout(function(){f.animationTime=0,f.prevFromRect=null,f.fromRect=null,f.prevToRect=null,f.thisAnimationDuration=null},a),f.thisAnimationDuration=a)}),clearTimeout(e),o?e=setTimeout(function(){typeof i=="function"&&i()},s):typeof i=="function"&&i(),t=[]},animate:function(i,r,o,s){if(s){N(i,"transition",""),N(i,"transform","");var l=an(this.el),a=l&&l.a,f=l&&l.d,c=(r.left-o.left)/(a||1),h=(r.top-o.top)/(f||1);i.animatingX=!!c,i.animatingY=!!h,N(i,"transform","translate3d("+c+"px,"+h+"px,0)"),this.forRepaintDummy=_u(i),N(i,"transition","transform "+s+"ms"+(this.options.easing?" "+this.options.easing:"")),N(i,"transform","translate3d(0,0,0)"),typeof i.animated=="number"&&clearTimeout(i.animated),i.animated=setTimeout(function(){N(i,"transition",""),N(i,"transform",""),i.animated=!1,i.animatingX=!1,i.animatingY=!1},s)}}}}function _u(t){return t.offsetWidth}function bu(t,e,n,i){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*i.animation}var Je=[],sr={initializeByDefault:!0},Xn={mount:function(e){for(var n in sr)sr.hasOwnProperty(n)&&!(n in e)&&(e[n]=sr[n]);Je.forEach(function(i){if(i.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),Je.push(e)},pluginEvent:function(e,n,i){var r=this;this.eventCanceled=!1,i.cancel=function(){r.eventCanceled=!0};var o=e+"Global";Je.forEach(function(s){n[s.pluginName]&&(n[s.pluginName][o]&&n[s.pluginName][o](se({sortable:n},i)),n.options[s.pluginName]&&n[s.pluginName][e]&&n[s.pluginName][e](se({sortable:n},i)))})},initializePlugins:function(e,n,i,r){Je.forEach(function(l){var a=l.pluginName;if(!(!e.options[a]&&!l.initializeByDefault)){var f=new l(e,n,e.options);f.sortable=e,f.options=e.options,e[a]=f,he(i,f.defaults)}});for(var o in e.options)if(e.options.hasOwnProperty(o)){var s=this.modifyOption(e,o,e.options[o]);typeof s<"u"&&(e.options[o]=s)}},getEventProperties:function(e,n){var i={};return Je.forEach(function(r){typeof r.eventProperties=="function"&&he(i,r.eventProperties.call(n[r.pluginName],e))}),i},modifyOption:function(e,n,i){var r;return Je.forEach(function(o){e[o.pluginName]&&o.optionListeners&&typeof o.optionListeners[n]=="function"&&(r=o.optionListeners[n].call(e[o.pluginName],i))}),r}};function xu(t){var e=t.sortable,n=t.rootEl,i=t.name,r=t.targetEl,o=t.cloneEl,s=t.toEl,l=t.fromEl,a=t.oldIndex,f=t.newIndex,c=t.oldDraggableIndex,h=t.newDraggableIndex,g=t.originalEvent,m=t.putSortable,$=t.extraEventProperties;if(e=e||n&&n[Mt],!!e){var E,X=e.options,z="on"+i.charAt(0).toUpperCase()+i.substr(1);window.CustomEvent&&!pe&&!zn?E=new CustomEvent(i,{bubbles:!0,cancelable:!0}):(E=document.createEvent("Event"),E.initEvent(i,!0,!0)),E.to=s||n,E.from=l||n,E.item=r||n,E.clone=o,E.oldIndex=a,E.newIndex=f,E.oldDraggableIndex=c,E.newDraggableIndex=h,E.originalEvent=g,E.pullMode=m?m.lastPutMode:void 0;var M=se(se({},$),Xn.getEventProperties(i,e));for(var V in M)E[V]=M[V];n&&n.dispatchEvent(E),X[z]&&X[z].call(e,E)}}var $u=["evt"],It=function(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=i.evt,o=fu(i,$u);Xn.pluginEvent.bind(F)(e,n,se({dragEl:w,parentEl:ut,ghostEl:B,rootEl:at,nextEl:Fe,lastDownEl:ci,cloneEl:dt,cloneHidden:we,dragStarted:wn,putSortable:wt,activeSortable:F.active,originalEvent:r,oldIndex:en,oldDraggableIndex:Pn,newIndex:Ft,newDraggableIndex:ye,hideGhostForTarget:Nl,unhideGhostForTarget:Fl,cloneNowHidden:function(){we=!0},cloneNowShown:function(){we=!1},dispatchSortableEvent:function(l){Rt({sortable:n,name:l,originalEvent:r})}},o))};function Rt(t){xu(se({putSortable:wt,cloneEl:dt,targetEl:w,rootEl:at,oldIndex:en,oldDraggableIndex:Pn,newIndex:Ft,newDraggableIndex:ye},t))}var w,ut,B,at,Fe,ci,dt,we,en,Ft,Pn,ye,ti,wt,tn=!1,Ei=!1,Si=[],ke,Xt,lr,ar,us,ds,wn,Ze,On,kn=!1,ei=!1,ui,Et,fr=[],Or=!1,Ci=[],Xi=typeof document<"u",ni=Tl,hs=zn||pe?"cssFloat":"float",vu=Xi&&!uu&&!Tl&&"draggable"in document.createElement("div"),Pl=function(){if(Xi){if(pe)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto",t.style.pointerEvents==="auto"}}(),Ol=function(e,n){var i=N(e),r=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),o=hn(e,0,n),s=hn(e,1,n),l=o&&N(o),a=s&&N(s),f=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+$t(o).width,c=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+$t(s).width;if(i.display==="flex")return i.flexDirection==="column"||i.flexDirection==="column-reverse"?"vertical":"horizontal";if(i.display==="grid")return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&l.float&&l.float!=="none"){var h=l.float==="left"?"left":"right";return s&&(a.clear==="both"||a.clear===h)?"vertical":"horizontal"}return o&&(l.display==="block"||l.display==="flex"||l.display==="table"||l.display==="grid"||f>=r&&i[hs]==="none"||s&&i[hs]==="none"&&f+c>r)?"vertical":"horizontal"},yu=function(e,n,i){var r=i?e.left:e.top,o=i?e.right:e.bottom,s=i?e.width:e.height,l=i?n.left:n.top,a=i?n.right:n.bottom,f=i?n.width:n.height;return r===l||o===a||r+s/2===l+f/2},wu=function(e,n){var i;return Si.some(function(r){var o=r[Mt].options.emptyInsertThreshold;if(!(!o||lo(r))){var s=$t(r),l=e>=s.left-o&&e<=s.right+o,a=n>=s.top-o&&n<=s.bottom+o;if(l&&a)return i=r}}),i},kl=function(e){function n(o,s){return function(l,a,f,c){var h=l.options.group.name&&a.options.group.name&&l.options.group.name===a.options.group.name;if(o==null&&(s||h))return!0;if(o==null||o===!1)return!1;if(s&&o==="clone")return o;if(typeof o=="function")return n(o(l,a,f,c),s)(l,a,f,c);var g=(s?l:a).options.group.name;return o===!0||typeof o=="string"&&o===g||o.join&&o.indexOf(g)>-1}}var i={},r=e.group;(!r||fi(r)!="object")&&(r={name:r}),i.name=r.name,i.checkPull=n(r.pull,!0),i.checkPut=n(r.put),i.revertClone=r.revertClone,e.group=i},Nl=function(){!Pl&&B&&N(B,"display","none")},Fl=function(){!Pl&&B&&N(B,"display","")};Xi&&document.addEventListener("click",function(t){if(Ei)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Ei=!1,!1},!0);var Ne=function(e){if(w){e=e.touches?e.touches[0]:e;var n=wu(e.clientX,e.clientY);if(n){var i={};for(var r in e)e.hasOwnProperty(r)&&(i[r]=e[r]);i.target=i.rootEl=n,i.preventDefault=void 0,i.stopPropagation=void 0,n[Mt]._onDragOver(i)}}},Eu=function(e){w&&w.parentNode[Mt]._isOutsideThisEl(e.target)};function F(t,e){if(!(t&&t.nodeType&&t.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=he({},e),t[Mt]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Ol(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(s,l){s.setData("Text",l.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:F.supportPointer!==!1&&"PointerEvent"in window&&!In,emptyInsertThreshold:5};Xn.initializePlugins(this,t,n);for(var i in n)!(i in e)&&(e[i]=n[i]);kl(e);for(var r in this)r.charAt(0)==="_"&&typeof this[r]=="function"&&(this[r]=this[r].bind(this));this.nativeDraggable=e.forceFallback?!1:vu,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?et(t,"pointerdown",this._onTapStart):(et(t,"mousedown",this._onTapStart),et(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(et(t,"dragover",this),et(t,"dragenter",this)),Si.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),he(this,mu())}F.prototype={constructor:F,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(Ze=null)},_getDirection:function(e,n){return typeof this.options.direction=="function"?this.options.direction.call(this,e,n,w):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,i=this.el,r=this.options,o=r.preventOnFilter,s=e.type,l=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,a=(l||e).target,f=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||a,c=r.filter;if(Au(i),!w&&!(/mousedown|pointerdown/.test(s)&&e.button!==0||r.disabled)&&!f.isContentEditable&&!(!this.nativeDraggable&&In&&a&&a.tagName.toUpperCase()==="SELECT")&&(a=ee(a,r.draggable,i,!1),!(a&&a.animated)&&ci!==a)){if(en=Ht(a),Pn=Ht(a,r.draggable),typeof c=="function"){if(c.call(this,e,a,this)){Rt({sortable:n,rootEl:f,name:"filter",targetEl:a,toEl:i,fromEl:i}),It("filter",n,{evt:e}),o&&e.cancelable&&e.preventDefault();return}}else if(c&&(c=c.split(",").some(function(h){if(h=ee(f,h.trim(),i,!1),h)return Rt({sortable:n,rootEl:h,name:"filter",targetEl:a,fromEl:i,toEl:i}),It("filter",n,{evt:e}),!0}),c)){o&&e.cancelable&&e.preventDefault();return}r.handle&&!ee(f,r.handle,i,!1)||this._prepareDragStart(e,l,a)}}},_prepareDragStart:function(e,n,i){var r=this,o=r.el,s=r.options,l=o.ownerDocument,a;if(i&&!w&&i.parentNode===o){var f=$t(i);if(at=o,w=i,ut=w.parentNode,Fe=w.nextSibling,ci=i,ti=s.group,F.dragged=w,ke={target:w,clientX:(n||e).clientX,clientY:(n||e).clientY},us=ke.clientX-f.left,ds=ke.clientY-f.top,this._lastX=(n||e).clientX,this._lastY=(n||e).clientY,w.style["will-change"]="all",a=function(){if(It("delayEnded",r,{evt:e}),F.eventCanceled){r._onDrop();return}r._disableDelayedDragEvents(),!ls&&r.nativeDraggable&&(w.draggable=!0),r._triggerDragStart(e,n),Rt({sortable:r,name:"choose",originalEvent:e}),Nt(w,s.chosenClass,!0)},s.ignore.split(",").forEach(function(c){Dl(w,c.trim(),cr)}),et(l,"dragover",Ne),et(l,"mousemove",Ne),et(l,"touchmove",Ne),et(l,"mouseup",r._onDrop),et(l,"touchend",r._onDrop),et(l,"touchcancel",r._onDrop),ls&&this.nativeDraggable&&(this.options.touchStartThreshold=4,w.draggable=!0),It("delayStart",this,{evt:e}),s.delay&&(!s.delayOnTouchOnly||n)&&(!this.nativeDraggable||!(zn||pe))){if(F.eventCanceled){this._onDrop();return}et(l,"mouseup",r._disableDelayedDrag),et(l,"touchend",r._disableDelayedDrag),et(l,"touchcancel",r._disableDelayedDrag),et(l,"mousemove",r._delayedDragTouchMoveHandler),et(l,"touchmove",r._delayedDragTouchMoveHandler),s.supportPointer&&et(l,"pointermove",r._delayedDragTouchMoveHandler),r._dragStartTimer=setTimeout(a,s.delay)}else a()}},_delayedDragTouchMoveHandler:function(e){var n=e.touches?e.touches[0]:e;Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){w&&cr(w),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;Z(e,"mouseup",this._disableDelayedDrag),Z(e,"touchend",this._disableDelayedDrag),Z(e,"touchcancel",this._disableDelayedDrag),Z(e,"mousemove",this._delayedDragTouchMoveHandler),Z(e,"touchmove",this._delayedDragTouchMoveHandler),Z(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,n){n=n||e.pointerType=="touch"&&e,!this.nativeDraggable||n?this.options.supportPointer?et(document,"pointermove",this._onTouchMove):n?et(document,"touchmove",this._onTouchMove):et(document,"mousemove",this._onTouchMove):(et(w,"dragend",this),et(at,"dragstart",this._onDragStart));try{document.selection?di(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,n){if(tn=!1,at&&w){It("dragStarted",this,{evt:n}),this.nativeDraggable&&et(document,"dragover",Eu);var i=this.options;!e&&Nt(w,i.dragClass,!1),Nt(w,i.ghostClass,!0),F.active=this,e&&this._appendGhost(),Rt({sortable:this,name:"start",originalEvent:n})}else this._nulling()},_emulateDragOver:function(){if(Xt){this._lastX=Xt.clientX,this._lastY=Xt.clientY,Nl();for(var e=document.elementFromPoint(Xt.clientX,Xt.clientY),n=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(Xt.clientX,Xt.clientY),e!==n);)n=e;if(w.parentNode[Mt]._isOutsideThisEl(e),n)do{if(n[Mt]){var i=void 0;if(i=n[Mt]._onDragOver({clientX:Xt.clientX,clientY:Xt.clientY,target:e,rootEl:n}),i&&!this.options.dragoverBubble)break}e=n}while(n=n.parentNode);Fl()}},_onTouchMove:function(e){if(ke){var n=this.options,i=n.fallbackTolerance,r=n.fallbackOffset,o=e.touches?e.touches[0]:e,s=B&&an(B,!0),l=B&&s&&s.a,a=B&&s&&s.d,f=ni&&Et&&cs(Et),c=(o.clientX-ke.clientX+r.x)/(l||1)+(f?f[0]-fr[0]:0)/(l||1),h=(o.clientY-ke.clientY+r.y)/(a||1)+(f?f[1]-fr[1]:0)/(a||1);if(!F.active&&!tn){if(i&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<i)return;this._onDragStart(e,!0)}if(B){s?(s.e+=c-(lr||0),s.f+=h-(ar||0)):s={a:1,b:0,c:0,d:1,e:c,f:h};var g="matrix(".concat(s.a,",").concat(s.b,",").concat(s.c,",").concat(s.d,",").concat(s.e,",").concat(s.f,")");N(B,"webkitTransform",g),N(B,"mozTransform",g),N(B,"msTransform",g),N(B,"transform",g),lr=c,ar=h,Xt=o}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!B){var e=this.options.fallbackOnBody?document.body:at,n=$t(w,!0,ni,!0,e),i=this.options;if(ni){for(Et=e;N(Et,"position")==="static"&&N(Et,"transform")==="none"&&Et!==document;)Et=Et.parentNode;Et!==document.body&&Et!==document.documentElement?(Et===document&&(Et=re()),n.top+=Et.scrollTop,n.left+=Et.scrollLeft):Et=re(),fr=cs(Et)}B=w.cloneNode(!0),Nt(B,i.ghostClass,!1),Nt(B,i.fallbackClass,!0),Nt(B,i.dragClass,!0),N(B,"transition",""),N(B,"transform",""),N(B,"box-sizing","border-box"),N(B,"margin",0),N(B,"top",n.top),N(B,"left",n.left),N(B,"width",n.width),N(B,"height",n.height),N(B,"opacity","0.8"),N(B,"position",ni?"absolute":"fixed"),N(B,"zIndex","100000"),N(B,"pointerEvents","none"),F.ghost=B,e.appendChild(B),N(B,"transform-origin",us/parseInt(B.style.width)*100+"% "+ds/parseInt(B.style.height)*100+"%")}},_onDragStart:function(e,n){var i=this,r=e.dataTransfer,o=i.options;if(It("dragStart",this,{evt:e}),F.eventCanceled){this._onDrop();return}It("setupClone",this),F.eventCanceled||(dt=Al(w),dt.draggable=!1,dt.style["will-change"]="",this._hideClone(),Nt(dt,this.options.chosenClass,!1),F.clone=dt),i.cloneId=di(function(){It("clone",i),!F.eventCanceled&&(i.options.removeCloneOnHide||at.insertBefore(dt,w),i._hideClone(),Rt({sortable:i,name:"clone"}))}),!n&&Nt(w,o.dragClass,!0),n?(Ei=!0,i._loopId=setInterval(i._emulateDragOver,50)):(Z(document,"mouseup",i._onDrop),Z(document,"touchend",i._onDrop),Z(document,"touchcancel",i._onDrop),r&&(r.effectAllowed="move",o.setData&&o.setData.call(i,r,w)),et(document,"drop",i),N(w,"transform","translateZ(0)")),tn=!0,i._dragStartId=di(i._dragStarted.bind(i,n,e)),et(document,"selectstart",i),wn=!0,In&&N(document.body,"user-select","none")},_onDragOver:function(e){var n=this.el,i=e.target,r,o,s,l=this.options,a=l.group,f=F.active,c=ti===a,h=l.sort,g=wt||f,m,$=this,E=!1;if(Or)return;function X(tt,le){It(tt,$,se({evt:e,isOwner:c,axis:m?"vertical":"horizontal",revert:s,dragRect:r,targetRect:o,canSort:h,fromSortable:g,target:i,completed:M,onMove:function(Gt,Lt){return ii(at,n,w,r,Gt,$t(Gt),e,Lt)},changed:V},le))}function z(){X("dragOverAnimationCapture"),$.captureAnimationState(),$!==g&&g.captureAnimationState()}function M(tt){return X("dragOverCompleted",{insertion:tt}),tt&&(c?f._hideClone():f._showClone($),$!==g&&(Nt(w,wt?wt.options.ghostClass:f.options.ghostClass,!1),Nt(w,l.ghostClass,!0)),wt!==$&&$!==F.active?wt=$:$===F.active&&wt&&(wt=null),g===$&&($._ignoreWhileAnimating=i),$.animateAll(function(){X("dragOverAnimationComplete"),$._ignoreWhileAnimating=null}),$!==g&&(g.animateAll(),g._ignoreWhileAnimating=null)),(i===w&&!w.animated||i===n&&!i.animated)&&(Ze=null),!l.dragoverBubble&&!e.rootEl&&i!==document&&(w.parentNode[Mt]._isOutsideThisEl(e.target),!tt&&Ne(e)),!l.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),E=!0}function V(){Ft=Ht(w),ye=Ht(w,l.draggable),Rt({sortable:$,name:"change",toEl:n,newIndex:Ft,newDraggableIndex:ye,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),i=ee(i,l.draggable,n,!0),X("dragOver"),F.eventCanceled)return E;if(w.contains(e.target)||i.animated&&i.animatingX&&i.animatingY||$._ignoreWhileAnimating===i)return M(!1);if(Ei=!1,f&&!l.disabled&&(c?h||(s=ut!==at):wt===this||(this.lastPutMode=ti.checkPull(this,f,w,e))&&a.checkPut(this,f,w,e))){if(m=this._getDirection(e,i)==="vertical",r=$t(w),X("dragOverValid"),F.eventCanceled)return E;if(s)return ut=at,z(),this._hideClone(),X("revert"),F.eventCanceled||(Fe?at.insertBefore(w,Fe):at.appendChild(w)),M(!0);var A=lo(n,l.draggable);if(!A||Ru(e,m,this)&&!A.animated){if(A===w)return M(!1);if(A&&n===e.target&&(i=A),i&&(o=$t(i)),ii(at,n,w,r,i,o,e,!!i)!==!1)return z(),n.appendChild(w),ut=n,V(),M(!0)}else if(A&&Tu(e,m,this)){var U=hn(n,0,l,!0);if(U===w)return M(!1);if(i=U,o=$t(i),ii(at,n,w,r,i,o,e,!1)!==!1)return z(),n.insertBefore(w,U),ut=n,V(),M(!0)}else if(i.parentNode===n){o=$t(i);var ct=0,lt,T=w.parentNode!==n,D=!yu(w.animated&&w.toRect||r,i.animated&&i.toRect||o,m),L=m?"top":"left",J=fs(i,"top","top")||fs(w,"top","top"),R=J?J.scrollTop:void 0;Ze!==i&&(lt=o[L],kn=!1,ei=!D&&l.invertSwap||T),ct=Du(e,i,o,m,D?1:l.swapThreshold,l.invertedSwapThreshold==null?l.swapThreshold:l.invertedSwapThreshold,ei,Ze===i);var K;if(ct!==0){var ft=Ht(w);do ft-=ct,K=ut.children[ft];while(K&&(N(K,"display")==="none"||K===B))}if(ct===0||K===i)return M(!1);Ze=i,On=ct;var yt=i.nextElementSibling,Y=!1;Y=ct===1;var it=ii(at,n,w,r,i,o,e,Y);if(it!==!1)return(it===1||it===-1)&&(Y=it===1),Or=!0,setTimeout(Cu,30),z(),Y&&!yt?n.appendChild(w):i.parentNode.insertBefore(w,Y?yt:i),J&&Il(J,0,R-J.scrollTop),ut=w.parentNode,lt!==void 0&&!ei&&(ui=Math.abs(lt-$t(i)[L])),V(),M(!0)}if(n.contains(w))return M(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){Z(document,"mousemove",this._onTouchMove),Z(document,"touchmove",this._onTouchMove),Z(document,"pointermove",this._onTouchMove),Z(document,"dragover",Ne),Z(document,"mousemove",Ne),Z(document,"touchmove",Ne)},_offUpEvents:function(){var e=this.el.ownerDocument;Z(e,"mouseup",this._onDrop),Z(e,"touchend",this._onDrop),Z(e,"pointerup",this._onDrop),Z(e,"touchcancel",this._onDrop),Z(document,"selectstart",this)},_onDrop:function(e){var n=this.el,i=this.options;if(Ft=Ht(w),ye=Ht(w,i.draggable),It("drop",this,{evt:e}),ut=w&&w.parentNode,Ft=Ht(w),ye=Ht(w,i.draggable),F.eventCanceled){this._nulling();return}tn=!1,ei=!1,kn=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),kr(this.cloneId),kr(this._dragStartId),this.nativeDraggable&&(Z(document,"drop",this),Z(n,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),In&&N(document.body,"user-select",""),N(w,"transform",""),e&&(wn&&(e.cancelable&&e.preventDefault(),!i.dropBubble&&e.stopPropagation()),B&&B.parentNode&&B.parentNode.removeChild(B),(at===ut||wt&&wt.lastPutMode!=="clone")&&dt&&dt.parentNode&&dt.parentNode.removeChild(dt),w&&(this.nativeDraggable&&Z(w,"dragend",this),cr(w),w.style["will-change"]="",wn&&!tn&&Nt(w,wt?wt.options.ghostClass:this.options.ghostClass,!1),Nt(w,this.options.chosenClass,!1),Rt({sortable:this,name:"unchoose",toEl:ut,newIndex:null,newDraggableIndex:null,originalEvent:e}),at!==ut?(Ft>=0&&(Rt({rootEl:ut,name:"add",toEl:ut,fromEl:at,originalEvent:e}),Rt({sortable:this,name:"remove",toEl:ut,originalEvent:e}),Rt({rootEl:ut,name:"sort",toEl:ut,fromEl:at,originalEvent:e}),Rt({sortable:this,name:"sort",toEl:ut,originalEvent:e})),wt&&wt.save()):Ft!==en&&Ft>=0&&(Rt({sortable:this,name:"update",toEl:ut,originalEvent:e}),Rt({sortable:this,name:"sort",toEl:ut,originalEvent:e})),F.active&&((Ft==null||Ft===-1)&&(Ft=en,ye=Pn),Rt({sortable:this,name:"end",toEl:ut,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){It("nulling",this),at=w=ut=B=Fe=dt=ci=we=ke=Xt=wn=Ft=ye=en=Pn=Ze=On=wt=ti=F.dragged=F.ghost=F.clone=F.active=null,Ci.forEach(function(e){e.checked=!0}),Ci.length=lr=ar=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":w&&(this._onDragOver(e),Su(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],n,i=this.el.children,r=0,o=i.length,s=this.options;r<o;r++)n=i[r],ee(n,s.draggable,this.el,!1)&&e.push(n.getAttribute(s.dataIdAttr)||Iu(n));return e},sort:function(e,n){var i={},r=this.el;this.toArray().forEach(function(o,s){var l=r.children[s];ee(l,this.options.draggable,r,!1)&&(i[o]=l)},this),n&&this.captureAnimationState(),e.forEach(function(o){i[o]&&(r.removeChild(i[o]),r.appendChild(i[o]))}),n&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,n){return ee(e,n||this.options.draggable,this.el,!1)},option:function(e,n){var i=this.options;if(n===void 0)return i[e];var r=Xn.modifyOption(this,e,n);typeof r<"u"?i[e]=r:i[e]=n,e==="group"&&kl(i)},destroy:function(){It("destroy",this);var e=this.el;e[Mt]=null,Z(e,"mousedown",this._onTapStart),Z(e,"touchstart",this._onTapStart),Z(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(Z(e,"dragover",this),Z(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(n){n.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Si.splice(Si.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!we){if(It("hideClone",this),F.eventCanceled)return;N(dt,"display","none"),this.options.removeCloneOnHide&&dt.parentNode&&dt.parentNode.removeChild(dt),we=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(we){if(It("showClone",this),F.eventCanceled)return;w.parentNode==at&&!this.options.group.revertClone?at.insertBefore(dt,w):Fe?at.insertBefore(dt,Fe):at.appendChild(dt),this.options.group.revertClone&&this.animate(w,dt),N(dt,"display",""),we=!1}}};function Su(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function ii(t,e,n,i,r,o,s,l){var a,f=t[Mt],c=f.options.onMove,h;return window.CustomEvent&&!pe&&!zn?a=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(a=document.createEvent("Event"),a.initEvent("move",!0,!0)),a.to=e,a.from=t,a.dragged=n,a.draggedRect=i,a.related=r||e,a.relatedRect=o||$t(e),a.willInsertAfter=l,a.originalEvent=s,t.dispatchEvent(a),c&&(h=c.call(f,a,s)),h}function cr(t){t.draggable=!1}function Cu(){Or=!1}function Tu(t,e,n){var i=$t(hn(n.el,0,n.options,!0)),r=10;return e?t.clientX<i.left-r||t.clientY<i.top&&t.clientX<i.right:t.clientY<i.top-r||t.clientY<i.bottom&&t.clientX<i.left}function Ru(t,e,n){var i=$t(lo(n.el,n.options.draggable)),r=10;return e?t.clientX>i.right+r||t.clientX<=i.right&&t.clientY>i.bottom&&t.clientX>=i.left:t.clientX>i.right&&t.clientY>i.top||t.clientX<=i.right&&t.clientY>i.bottom+r}function Du(t,e,n,i,r,o,s,l){var a=i?t.clientY:t.clientX,f=i?n.height:n.width,c=i?n.top:n.left,h=i?n.bottom:n.right,g=!1;if(!s){if(l&&ui<f*r){if(!kn&&(On===1?a>c+f*o/2:a<h-f*o/2)&&(kn=!0),kn)g=!0;else if(On===1?a<c+ui:a>h-ui)return-On}else if(a>c+f*(1-r)/2&&a<h-f*(1-r)/2)return qu(e)}return g=g||s,g&&(a<c+f*o/2||a>h-f*o/2)?a>c+f/2?1:-1:0}function qu(t){return Ht(w)<Ht(t)?1:-1}function Iu(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function Au(t){Ci.length=0;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var i=e[n];i.checked&&Ci.push(i)}}function di(t){return setTimeout(t,0)}function kr(t){return clearTimeout(t)}Xi&&et(document,"touchmove",function(t){(F.active||tn)&&t.cancelable&&t.preventDefault()});F.utils={on:et,off:Z,css:N,find:Dl,is:function(e,n){return!!ee(e,n,e,!1)},extend:gu,throttle:ql,closest:ee,toggleClass:Nt,clone:Al,index:Ht,nextTick:di,cancelNextTick:kr,detectDirection:Ol,getChild:hn};F.get=function(t){return t[Mt]};F.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e[0].constructor===Array&&(e=e[0]),e.forEach(function(i){if(!i.prototype||!i.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));i.utils&&(F.utils=se(se({},F.utils),i.utils)),Xn.mount(i)})};F.create=function(t,e){return new F(t,e)};F.version=cu;var mt=[],En,Nr,Fr=!1,ur,dr,Ti,Sn;function Pu(){function t(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return t.prototype={dragStarted:function(n){var i=n.originalEvent;this.sortable.nativeDraggable?et(document,"dragover",this._handleAutoScroll):this.options.supportPointer?et(document,"pointermove",this._handleFallbackAutoScroll):i.touches?et(document,"touchmove",this._handleFallbackAutoScroll):et(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(n){var i=n.originalEvent;!this.options.dragOverBubble&&!i.rootEl&&this._handleAutoScroll(i)},drop:function(){this.sortable.nativeDraggable?Z(document,"dragover",this._handleAutoScroll):(Z(document,"pointermove",this._handleFallbackAutoScroll),Z(document,"touchmove",this._handleFallbackAutoScroll),Z(document,"mousemove",this._handleFallbackAutoScroll)),gs(),hi(),pu()},nulling:function(){Ti=Nr=En=Fr=Sn=ur=dr=null,mt.length=0},_handleFallbackAutoScroll:function(n){this._handleAutoScroll(n,!0)},_handleAutoScroll:function(n,i){var r=this,o=(n.touches?n.touches[0]:n).clientX,s=(n.touches?n.touches[0]:n).clientY,l=document.elementFromPoint(o,s);if(Ti=n,i||this.options.forceAutoScrollFallback||zn||pe||In){hr(n,this.options,l,i);var a=Se(l,!0);Fr&&(!Sn||o!==ur||s!==dr)&&(Sn&&gs(),Sn=setInterval(function(){var f=Se(document.elementFromPoint(o,s),!0);f!==a&&(a=f,hi()),hr(n,r.options,f,i)},10),ur=o,dr=s)}else{if(!this.options.bubbleScroll||Se(l,!0)===re()){hi();return}hr(n,this.options,Se(l,!1),!1)}}},he(t,{pluginName:"scroll",initializeByDefault:!0})}function hi(){mt.forEach(function(t){clearInterval(t.pid)}),mt=[]}function gs(){clearInterval(Sn)}var hr=ql(function(t,e,n,i){if(e.scroll){var r=(t.touches?t.touches[0]:t).clientX,o=(t.touches?t.touches[0]:t).clientY,s=e.scrollSensitivity,l=e.scrollSpeed,a=re(),f=!1,c;Nr!==n&&(Nr=n,hi(),En=e.scroll,c=e.scrollFn,En===!0&&(En=Se(n,!0)));var h=0,g=En;do{var m=g,$=$t(m),E=$.top,X=$.bottom,z=$.left,M=$.right,V=$.width,A=$.height,U=void 0,ct=void 0,lt=m.scrollWidth,T=m.scrollHeight,D=N(m),L=m.scrollLeft,J=m.scrollTop;m===a?(U=V<lt&&(D.overflowX==="auto"||D.overflowX==="scroll"||D.overflowX==="visible"),ct=A<T&&(D.overflowY==="auto"||D.overflowY==="scroll"||D.overflowY==="visible")):(U=V<lt&&(D.overflowX==="auto"||D.overflowX==="scroll"),ct=A<T&&(D.overflowY==="auto"||D.overflowY==="scroll"));var R=U&&(Math.abs(M-r)<=s&&L+V<lt)-(Math.abs(z-r)<=s&&!!L),K=ct&&(Math.abs(X-o)<=s&&J+A<T)-(Math.abs(E-o)<=s&&!!J);if(!mt[h])for(var ft=0;ft<=h;ft++)mt[ft]||(mt[ft]={});(mt[h].vx!=R||mt[h].vy!=K||mt[h].el!==m)&&(mt[h].el=m,mt[h].vx=R,mt[h].vy=K,clearInterval(mt[h].pid),(R!=0||K!=0)&&(f=!0,mt[h].pid=setInterval((function(){i&&this.layer===0&&F.active._onTouchMove(Ti);var yt=mt[this.layer].vy?mt[this.layer].vy*l:0,Y=mt[this.layer].vx?mt[this.layer].vx*l:0;typeof c=="function"&&c.call(F.dragged.parentNode[Mt],Y,yt,t,Ti,mt[this.layer].el)!=="continue"||Il(mt[this.layer].el,Y,yt)}).bind({layer:h}),24))),h++}while(e.bubbleScroll&&g!==a&&(g=Se(g,!1)));Fr=f}},30),jl=function(e){var n=e.originalEvent,i=e.putSortable,r=e.dragEl,o=e.activeSortable,s=e.dispatchSortableEvent,l=e.hideGhostForTarget,a=e.unhideGhostForTarget;if(n){var f=i||o;l();var c=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:n,h=document.elementFromPoint(c.clientX,c.clientY);a(),f&&!f.el.contains(h)&&(s("spill"),this.onSpill({dragEl:r,putSortable:i}))}};function ao(){}ao.prototype={startIndex:null,dragStart:function(e){var n=e.oldDraggableIndex;this.startIndex=n},onSpill:function(e){var n=e.dragEl,i=e.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var r=hn(this.sortable.el,this.startIndex,this.options);r?this.sortable.el.insertBefore(n,r):this.sortable.el.appendChild(n),this.sortable.animateAll(),i&&i.animateAll()},drop:jl};he(ao,{pluginName:"revertOnSpill"});function fo(){}fo.prototype={onSpill:function(e){var n=e.dragEl,i=e.putSortable,r=i||this.sortable;r.captureAnimationState(),n.parentNode&&n.parentNode.removeChild(n),r.animateAll()},drop:jl};he(fo,{pluginName:"removeOnSpill"});F.mount(new Pu);F.mount(fo,ao);function gr(t){t.parentElement!==null&&t.parentElement.removeChild(t)}function ps(t,e,n){const i=n===0?t.children[0]:t.children[n-1].nextSibling;t.insertBefore(e,i)}function Ou(){return typeof window<"u"?window.console:global.console}const ku=Ou();function Nu(t){const e=Object.create(null);return function(i){return e[i]||(e[i]=t(i))}}const Fu=/-(\w)/g,ju=Nu(t=>t.replace(Fu,(e,n)=>n.toUpperCase())),Ml=["Start","Add","Remove","Update","End"],Ll=["Choose","Unchoose","Sort","Filter","Clone"],Bl=["Move"],Mu=[Bl,Ml,Ll].flatMap(t=>t).map(t=>`on${t}`),jr={manage:Bl,manageAndEmit:Ml,emit:Ll};function Lu(t){return Mu.indexOf(t)!==-1}const Bu=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];function Hu(t){return Bu.includes(t)}function Yu(t){return["transition-group","TransitionGroup"].includes(t)}function Hl(t){return["id","class","role","style"].includes(t)||t.startsWith("data-")||t.startsWith("aria-")||t.startsWith("on")}function Yl(t){return t.reduce((e,[n,i])=>(e[n]=i,e),{})}function zu({$attrs:t,componentData:e={}}){return{...Yl(Object.entries(t).filter(([i,r])=>Hl(i))),...e}}function Xu({$attrs:t,callBackBuilder:e}){const n=Yl(zl(t));Object.entries(e).forEach(([r,o])=>{jr[r].forEach(s=>{n[`on${s}`]=o(s)})});const i=`[data-draggable]${n.draggable||""}`;return{...n,draggable:i}}function zl(t){return Object.entries(t).filter(([e,n])=>!Hl(e)).map(([e,n])=>[ju(e),n]).filter(([e,n])=>!Lu(e))}const ms=({el:t})=>t,Uu=(t,e)=>t.__draggable_context=e,_s=t=>t.__draggable_context;class Wu{constructor({nodes:{header:e,default:n,footer:i},root:r,realList:o}){this.defaultNodes=n,this.children=[...e,...n,...i],this.externalComponent=r.externalComponent,this.rootTransition=r.transition,this.tag=r.tag,this.realList=o}get _isRootComponent(){return this.externalComponent||this.rootTransition}render(e,n){const{tag:i,children:r,_isRootComponent:o}=this;return e(i,n,o?{default:()=>r}:r)}updated(){const{defaultNodes:e,realList:n}=this;e.forEach((i,r)=>{Uu(ms(i),{element:n[r],index:r})})}getUnderlyingVm(e){return _s(e)}getVmIndexFromDomIndex(e,n){const{defaultNodes:i}=this,{length:r}=i,o=n.children,s=o.item(e);if(s===null)return r;const l=_s(s);if(l)return l.index;if(r===0)return 0;const a=ms(i[0]),f=[...o].findIndex(c=>c===a);return e<f?0:r}}function Vu(t,e){const n=t[e];return n?n():[]}function Ku({$slots:t,realList:e,getKey:n}){const i=e||[],[r,o]=["header","footer"].map(a=>Vu(t,a)),{item:s}=t;if(!s)throw new Error("draggable element must have an item slot");const l=i.flatMap((a,f)=>s({element:a,index:f}).map(c=>(c.key=n(a),c.props={...c.props||{},"data-draggable":!0},c)));if(l.length!==i.length)throw new Error("Item slot must have only one child");return{header:r,footer:o,default:l}}function Gu(t){const e=Yu(t),n=!Hu(t)&&!e;return{transition:e,externalComponent:n,tag:n?Mn(t):e?Sc:t}}function Ju({$slots:t,tag:e,realList:n,getKey:i}){const r=Ku({$slots:t,realList:n,getKey:i}),o=Gu(e);return new Wu({nodes:r,root:o,realList:n})}function Xl(t,e){Fi(()=>this.$emit(t.toLowerCase(),e))}function Ul(t){return(e,n)=>{if(this.realList!==null)return this[`onDrag${t}`](e,n)}}function Zu(t){const e=Ul.call(this,t);return(n,i)=>{e.call(this,n,i),Xl.call(this,t,n)}}let pr=null;const Qu={list:{type:Array,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},itemKey:{type:[String,Function],required:!0},clone:{type:Function,default:t=>t},tag:{type:String,default:"div"},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null}},td=["update:modelValue","change",...[...jr.manageAndEmit,...jr.emit].map(t=>t.toLowerCase())],Wl=af({name:"draggable",inheritAttrs:!1,props:Qu,emits:td,data(){return{error:!1}},render(){try{this.error=!1;const{$slots:t,$attrs:e,tag:n,componentData:i,realList:r,getKey:o}=this,s=Ju({$slots:t,tag:n,realList:r,getKey:o});this.componentStructure=s;const l=zu({$attrs:e,componentData:i});return s.render(Bo,l)}catch(t){return this.error=!0,Bo("pre",{style:{color:"red"}},t.stack)}},created(){this.list!==null&&this.modelValue!==null&&ku.error("modelValue and list props are mutually exclusive! Please set one or another.")},mounted(){if(this.error)return;const{$attrs:t,$el:e,componentStructure:n}=this;n.updated();const i=Xu({$attrs:t,callBackBuilder:{manageAndEmit:o=>Zu.call(this,o),emit:o=>Xl.bind(this,o),manage:o=>Ul.call(this,o)}}),r=e.nodeType===1?e:e.parentElement;this._sortable=new F(r,i),this.targetDomElement=r,r.__draggable_component__=this},updated(){this.componentStructure.updated()},beforeUnmount(){this._sortable!==void 0&&this._sortable.destroy()},computed:{realList(){const{list:t}=this;return t||this.modelValue},getKey(){const{itemKey:t}=this;return typeof t=="function"?t:e=>e[t]}},watch:{$attrs:{handler(t){const{_sortable:e}=this;e&&zl(t).forEach(([n,i])=>{e.option(n,i)})},deep:!0}},methods:{getUnderlyingVm(t){return this.componentStructure.getUnderlyingVm(t)||null},getUnderlyingPotencialDraggableComponent(t){return t.__draggable_component__},emitChanges(t){Fi(()=>this.$emit("change",t))},alterList(t){if(this.list){t(this.list);return}const e=[...this.modelValue];t(e),this.$emit("update:modelValue",e)},spliceList(){const t=e=>e.splice(...arguments);this.alterList(t)},updatePosition(t,e){const n=i=>i.splice(e,0,i.splice(t,1)[0]);this.alterList(n)},getRelatedContextFromMoveEvent({to:t,related:e}){const n=this.getUnderlyingPotencialDraggableComponent(t);if(!n)return{component:n};const i=n.realList,r={list:i,component:n};return t!==e&&i?{...n.getUnderlyingVm(e)||{},...r}:r},getVmIndexFromDomIndex(t){return this.componentStructure.getVmIndexFromDomIndex(t,this.targetDomElement)},onDragStart(t){this.context=this.getUnderlyingVm(t.item),t.item._underlying_vm_=this.clone(this.context.element),pr=t.item},onDragAdd(t){const e=t.item._underlying_vm_;if(e===void 0)return;gr(t.item);const n=this.getVmIndexFromDomIndex(t.newIndex);this.spliceList(n,0,e);const i={element:e,newIndex:n};this.emitChanges({added:i})},onDragRemove(t){if(ps(this.$el,t.item,t.oldIndex),t.pullMode==="clone"){gr(t.clone);return}const{index:e,element:n}=this.context;this.spliceList(e,1);const i={element:n,oldIndex:e};this.emitChanges({removed:i})},onDragUpdate(t){gr(t.item),ps(t.from,t.item,t.oldIndex);const e=this.context.index,n=this.getVmIndexFromDomIndex(t.newIndex);this.updatePosition(e,n);const i={element:this.context.element,oldIndex:e,newIndex:n};this.emitChanges({moved:i})},computeFutureIndex(t,e){if(!t.element)return 0;const n=[...e.to.children].filter(s=>s.style.display!=="none"),i=n.indexOf(e.related),r=t.component.getVmIndexFromDomIndex(i);return n.indexOf(pr)!==-1||!e.willInsertAfter?r:r+1},onDragMove(t,e){const{move:n,realList:i}=this;if(!n||!i)return!0;const r=this.getRelatedContextFromMoveEvent(t),o=this.computeFutureIndex(r,t),s={...this.context,futureIndex:o},l={...t,relatedContext:r,draggedContext:s};return n(l,e)},onDragEnd(){pr=null}}}),Ui=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},ed={name:"ExerTagFilter",order:1,components:{draggable:Wl},data(){return{isRowVisible:{1:!0},mainStore:zi()}},methods:{toggleRowVisibility:function(t){this.isRowVisible[t]=!this.isRowVisible[t]}}},nd=I("h3",{class:"text-lg"},"Exercises Filter",-1);function id(t,e,n,i,r,o){return St(),Dt("div",null,[I("div",null,[I("button",{onClick:e[0]||(e[0]=s=>o.toggleRowVisibility(1)),class:"text-black focus:outline-none"},[I("span",{class:ht(["symbol",{hidden:!r.isRowVisible[1]}])},"▲",2),I("span",{class:ht(["symbol",{hidden:r.isRowVisible[1]}])},"▼",2)]),nd]),I("div",{class:ht({hidden:!r.isRowVisible[1]})},"dinmi mueter",2)])}const rd=Ui(ed,[["render",id]]),od={name:"ExerMenu",display:"Exercises Selector Menu",order:1,components:{draggable:Wl,ExerTagFilter:rd},data(){return{list1:[],list2:nu().exercises,isRowVisible:{1:!0},mainStore:zi()}},methods:{toggleRowVisibility:function(t){this.isRowVisible[t]=!this.isRowVisible[t]},log:function(t){this.mainStore.set(this.list1)}}},sd=I("h3",{class:"text-lg"},"Exercises Configuration",-1),ld={class:"flex"},ad={class:"w-1/2 p-4"},fd=I("h2",{class:"text-lg font-bold"},"Filter",-1),cd=I("h2",{class:"text-lg font-bold"},"Available Items",-1),ud={class:"p-2 bg-white border mb-2 cursor-move"},dd=I("br",null,null,-1),hd=["src"],gd={class:"w-1/2 p-4"},pd=I("h2",{class:"text-lg font-bold"},"Selected Items",-1),md={class:"p-2 bg-white border mb-2 cursor-move"},_d=["src"];function bd(t,e,n,i,r,o){const s=Mn("ExerTagFilter"),l=Mn("draggable");return St(),Dt("div",null,[_t(s),I("div",null,[I("button",{onClick:e[0]||(e[0]=a=>o.toggleRowVisibility(1)),class:"text-black focus:outline-none"},[I("span",{class:ht(["symbol",{hidden:!r.isRowVisible[1]}])},"▲",2),I("span",{class:ht(["symbol",{hidden:r.isRowVisible[1]}])},"▼",2)]),sd]),I("div",ld,[I("div",ad,[I("div",{class:ht(["border p-4 bg-gray-100 text-gray-800 mb-4",{hidden:!r.isRowVisible[1]}])},[fd,qr(" Here be dragons or filters. ")],2),I("div",{class:ht(["border p-4 bg-gray-100 text-gray-800",{hidden:!r.isRowVisible[1]}])},[cd,_t(l,{class:"list-group",list:r.list2,group:"people",itemKey:"name"},{item:vr(({element:a,index:f})=>[I("div",ud,[qr(Ee(a.title)+" ",1),dd,I("img",{src:`previews/${a.preview}`},null,8,hd)])]),_:1},8,["list"])],2)]),I("div",gd,[I("div",{class:ht(["border p-4 bg-gray-100 text-gray-800",{hidden:!r.isRowVisible[1]}])},[pd,_t(l,{class:"list-group",list:r.list1,group:"people",onChange:o.log,itemKey:"name"},{item:vr(({element:a})=>[I("div",md,[I("img",{src:`previews/${a.preview}`},null,8,_d)])]),_:1},8,["list","onChange"])],2)])])])}const xd=Ui(od,[["render",bd]]),$d={data(){return{selectedOption:-1,options:iu(),languageoptions:[{key:"en",desc:"English"},{key:"de",desc:"Deutsch"}],selectedLanguage:1,strings:null,stringsArr:{},mainStore:zi(),isRowVisible:{1:!0}}},methods:{updateStrings(){const t=this.options[this.selectedOption];t?(t.strings,this.mainStore.templateUuid=t.uuid,this.mainStore.langCode=this.languageoptions[this.selectedLanguage].key,this.strings=new Map(t.fields)):this.strings=new Map},updateStringMap(){let t=new Map;for(let[e,n]of Object.entries(this.stringsArr))t.set(e,n);this.mainStore.setTemplateOptions(t)},toggleRowVisibility:function(t){this.isRowVisible[t]=!this.isRowVisible[t]}}},vd={class:"grid gap-4"},yd={class:"flex justify-between items-center"},wd=I("h3",{class:"text-lg"},"Template Configuration",-1),Ed=["value"],Sd=["value"],Cd=I("p",{class:"text-gray-700"},"Resulting Strings:",-1),Td={key:0,class:"block text-sm font-medium text-gray-700"},Rd=["onUpdate:modelValue"];function Dd(t,e,n,i,r,o){return St(),Dt("div",vd,[I("div",yd,[wd,I("button",{onClick:e[0]||(e[0]=s=>o.toggleRowVisibility(1)),class:"text-white focus:outline-none"},[I("span",{class:ht(["symbol",{hidden:!r.isRowVisible[1]}])},"▲",2),I("span",{class:ht(["symbol",{hidden:r.isRowVisible[1]}])},"▼",2)])]),I("label",{class:ht(["block text-sm font-medium text-gray-700 mb-2",{hidden:!r.isRowVisible[1]}])}," Select output language: ",2),te(I("select",{"onUpdate:modelValue":e[1]||(e[1]=s=>r.selectedLanguage=s),onChange:e[2]||(e[2]=(...s)=>o.updateStrings&&o.updateStrings(...s)),class:ht(["w-full border p-2 rounded-md text-gray-700",{hidden:!r.isRowVisible[1]}])},[(St(!0),Dt(qt,null,li(r.languageoptions,(s,l)=>(St(),Dt("option",{key:l,value:l},Ee(s.desc),9,Ed))),128))],34),[[ns,r.selectedLanguage]]),I("label",{class:ht(["block text-sm font-medium text-gray-700 mb-2",{hidden:!r.isRowVisible[1]}])}," Select a template: ",2),te(I("select",{"onUpdate:modelValue":e[3]||(e[3]=s=>r.selectedOption=s),onChange:e[4]||(e[4]=(...s)=>o.updateStrings&&o.updateStrings(...s)),class:ht(["w-full border p-2 rounded-md text-gray-700",{hidden:!r.isRowVisible[1]}])},[(St(!0),Dt(qt,null,li(r.options,(s,l)=>(St(),Dt("option",{key:l,value:l},Ee(l)+" – "+Ee(s.title),9,Sd))),128))],34),[[ns,r.selectedOption]]),I("div",{class:ht(["mt-4",{hidden:!r.isRowVisible[1]}])},[Cd,(St(!0),Dt(qt,null,li(r.strings,(s,l)=>(St(),Dt("div",{key:l,class:"mt-2"},[s[1]?(St(),Dt("label",Td,Ee(s[1])+": ",1)):Fo("",!0),s[1]?te((St(),Dt("input",{key:1,"onUpdate:modelValue":a=>r.stringsArr[s[0]]=a,type:"text",onInput:e[5]||(e[5]=(...a)=>o.updateStringMap&&o.updateStringMap(...a)),onChange:e[6]||(e[6]=(...a)=>o.updateStringMap&&o.updateStringMap(...a)),class:"w-full border p-2 text-gray-700"},null,40,Rd)),[[Ic,r.stringsArr[s[0]]]]):Fo("",!0)]))),128))],2)])}const qd=Ui($d,[["render",Dd]]),Id={name:"GenViewDocument",components:{TheMenu:xd,TemplateMenu:qd},setup(){const t=$e(),e=zi(),n=$e(),i=$e(),r=$e([{name:"Template"},{name:"Exercises"},{name:"Exercise PDF"},{name:"Solutions PDF"},{name:"Configuration"},{name:"Source"},{name:"Log"}]),o=$e(0),s=c=>{o.value=c},l=$e(!1);return Zr(()=>{t.value=e.items}),Cn(e.$state,c=>{n.value=JSON.stringify(c);let h=e.generateConfig();h.docType=so.Source,rr(h).then(g=>{i.value=g})}),{items:t,compilebtn:async()=>{const c=document.getElementById("pdfbox"),h=document.getElementById("pdflog");l.value=!0;let g=await rr(e.generateConfig());if(l.value=!1,c&&g.status==0){const m=new Blob([g.pdf],{type:"application/pdf"}),$=URL.createObjectURL(m);setTimeout(()=>{URL.revokeObjectURL($)},3e4),console.log($),c.innerHTML=`<embed src="${$}" width="100%" style="height: 100vh;" type="application/pdf">`}h.innerHTML=`${g.log}`},compilebtnsol:async()=>{const c=document.getElementById("pdfsolbox"),h=document.getElementById("pdflog");l.value=!0;let g=await rr(e.generateConfig(!0));if(l.value=!1,c&&g.status==0){const m=new Blob([g.pdf],{type:"application/pdf"}),$=URL.createObjectURL(m);setTimeout(()=>{URL.revokeObjectURL($)},3e4),console.log($),c.innerHTML=`<embed src="${$}" width="100%" style="height: 100vh;" type="application/pdf">`}h.innerHTML=`${g.log}`},tabs:r,selectedTab:io(()=>o.value),selectTab:s,pdfConfig:n,pdfSource:i,isButtonDisabled:l}}},Ad={class:"flex p-4 space-x-4 bg-gray-400"},Pd={class:"pr-5"},Od=["onClick"],kd={class:"p-4"},Nd={class:"mt-4"},Fd={class:"mt-4"},jd={class:"mt-4"},Md=I("div",{class:"p-4",id:"pdfbox"},null,-1),Ld=[Md],Bd={class:"mt-4"},Hd=I("div",{class:"p-4",id:"pdfsolbox"},null,-1),Yd=[Hd],zd={class:"mt-4"},Xd={class:"p-4",id:"pdfconfig"},Ud={class:"mt-4",style:{"overflow-x":"auto"}},Wd={class:"p-4",id:"pdfsource"},Vd={style:{"white-space":"pre","font-family":"monospace"}},Kd={class:"mt-4"},Gd=I("div",{class:"p-4",style:{"white-space":"pre","font-family":"monospace"},id:"pdflog"},null,-1),Jd=[Gd];function Zd(t,e,n,i,r,o){const s=Mn("TemplateMenu"),l=Mn("TheMenu");return St(),Dt("div",null,[I("div",Ad,[I("div",Pd,[I("button",{class:ht(["p-2","rounded",{"bg-gray-500":i.isButtonDisabled},{"bg-blue-500 text-white":!i.isButtonDisabled}]),type:"button",onClick:e[0]||(e[0]=(...a)=>i.compilebtn&&i.compilebtn(...a)),id:"compilebtn"}," Compile ",2),I("button",{class:ht(["p-2","mx-5","rounded",{"bg-gray-500":i.isButtonDisabled},{"bg-blue-500 text-white":!i.isButtonDisabled}]),type:"button",onClick:e[1]||(e[1]=(...a)=>i.compilebtnsol&&i.compilebtnsol(...a)),id:"compilebtnsol"}," Compile Solution ",2)]),(St(!0),Dt(qt,null,li(i.tabs,(a,f)=>(St(),Dt("div",{key:f,onClick:c=>i.selectTab(f),class:ht({"bg-gray-400 text-black":i.selectedTab===f,"bg-gray-200":i.selectedTab!==f,"cursor-pointer":!0,"p-2":!0})},Ee(a.name),11,Od))),128))]),I("div",kd,[te(I("div",Nd,[_t(s)],512),[[Oe,i.selectedTab===0]]),te(I("div",Fd,[_t(l)],512),[[Oe,i.selectedTab===1]]),te(I("div",jd,Ld,512),[[Oe,i.selectedTab===2]]),te(I("div",Bd,Yd,512),[[Oe,i.selectedTab===3]]),te(I("div",zd,[I("div",Xd,Ee(i.pdfConfig),1)],512),[[Oe,i.selectedTab===4]]),te(I("div",Ud,[I("div",Wd,[I("div",Vd,Ee(i.pdfSource),1)])],512),[[Oe,i.selectedTab===5]]),te(I("div",Kd,Jd,512),[[Oe,i.selectedTab===6]])])])}const Qd=Ui(Id,[["render",Zd]]),th={class:"flex flex-col min-h-screen"},eh=I("header",{class:"bg-gray-500 p-4 text-white"},[I("h1",{class:"text-2xl"},"Exercise Collection Generator")],-1),nh={class:"flex flex-1"},ih={class:"flex-1"},rh={__name:"App",setup(t){return(e,n)=>(St(),Dt("div",th,[eh,I("div",nh,[I("main",ih,[_t(Qd)])])]))}};Oc(rh).use(Fc()).mount("#app")});export default oh();
