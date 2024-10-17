var Hl=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var rd=Hl(He=>{(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();function Ta(e,n){const t=Object.create(null),i=e.split(",");for(let a=0;a<i.length;a++)t[i[a]]=!0;return n?a=>!!t[a.toLowerCase()]:a=>!!t[a]}const se={},it=[],Ve=()=>{},Kl=()=>!1,Yl=/^on[^a-z]/,qi=e=>Yl.test(e),Ma=e=>e.startsWith("onUpdate:"),_e=Object.assign,Ga=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Ql=Object.prototype.hasOwnProperty,J=(e,n)=>Ql.call(e,n),z=Array.isArray,at=e=>Zt(e)==="[object Map]",Ci=e=>Zt(e)==="[object Set]",hr=e=>Zt(e)==="[object Date]",L=e=>typeof e=="function",xe=e=>typeof e=="string",ft=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",bs=e=>(ae(e)||L(e))&&L(e.then)&&L(e.catch),_s=Object.prototype.toString,Zt=e=>_s.call(e),Jl=e=>Zt(e).slice(8,-1),xs=e=>Zt(e)==="[object Object]",La=e=>xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ai=Ta(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fi=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},eo=/-(\w)/g,sn=Fi(e=>e.replace(eo,(n,t)=>t?t.toUpperCase():"")),no=/\B([A-Z])/g,$t=Fi(e=>e.replace(no,"-$1").toLowerCase()),Di=Fi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Hi=Fi(e=>e?`on${Di(e)}`:""),On=(e,n)=>!Object.is(e,n),ri=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},$i=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},hi=e=>{const n=parseFloat(e);return isNaN(n)?e:n},to=e=>{const n=xe(e)?Number(e):NaN;return isNaN(n)?e:n};let mr;const ma=()=>mr||(mr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Za(e){if(z(e)){const n={};for(let t=0;t<e.length;t++){const i=e[t],a=xe(i)?so(i):Za(i);if(a)for(const r in a)n[r]=a[r]}return n}else if(xe(e)||ae(e))return e}const io=/;(?![^(]*\))/g,ao=/:([^]+)/,ro=/\/\*[^]*?\*\//g;function so(e){const n={};return e.replace(ro,"").split(io).forEach(t=>{if(t){const i=t.split(ao);i.length>1&&(n[i[0].trim()]=i[1].trim())}}),n}function de(e){let n="";if(xe(e))n=e;else if(z(e))for(let t=0;t<e.length;t++){const i=de(e[t]);i&&(n+=i+" ")}else if(ae(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const lo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",oo=Ta(lo);function ps(e){return!!e||e===""}function fo(e,n){if(e.length!==n.length)return!1;let t=!0;for(let i=0;t&&i<e.length;i++)t=Ri(e[i],n[i]);return t}function Ri(e,n){if(e===n)return!0;let t=hr(e),i=hr(n);if(t||i)return t&&i?e.getTime()===n.getTime():!1;if(t=ft(e),i=ft(n),t||i)return e===n;if(t=z(e),i=z(n),t||i)return t&&i?fo(e,n):!1;if(t=ae(e),i=ae(n),t||i){if(!t||!i)return!1;const a=Object.keys(e).length,r=Object.keys(n).length;if(a!==r)return!1;for(const s in e){const l=e.hasOwnProperty(s),o=n.hasOwnProperty(s);if(l&&!o||!l&&o||!Ri(e[s],n[s]))return!1}}return String(e)===String(n)}function uo(e,n){return e.findIndex(t=>Ri(t,n))}const An=e=>xe(e)?e:e==null?"":z(e)||ae(e)&&(e.toString===_s||!L(e.toString))?JSON.stringify(e,ws,2):String(e),ws=(e,n)=>n&&n.__v_isRef?ws(e,n.value):at(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[i,a])=>(t[`${i} =>`]=a,t),{})}:Ci(n)?{[`Set(${n.size})`]:[...n.values()]}:ae(n)&&!z(n)&&!xs(n)?String(n):n;let Pe;class ks{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pe,!n&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const t=Pe;try{return Pe=this,n()}finally{Pe=t}}}on(){Pe=this}off(){Pe=this.parent}stop(n){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function ys(e){return new ks(e)}function co(e,n=Pe){n&&n.active&&n.effects.push(e)}function vs(){return Pe}function go(e){Pe&&Pe.cleanups.push(e)}const Xa=e=>{const n=new Set(e);return n.w=0,n.n=0,n},As=e=>(e.w&Fn)>0,Ss=e=>(e.n&Fn)>0,$o=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Fn},ho=e=>{const{deps:n}=e;if(n.length){let t=0;for(let i=0;i<n.length;i++){const a=n[i];As(a)&&!Ss(a)?a.delete(e):n[t++]=a,a.w&=~Fn,a.n&=~Fn}n.length=t}},mi=new WeakMap;let wt=0,Fn=1;const ba=30;let Ue;const Zn=Symbol(""),_a=Symbol("");class Oa{constructor(n,t=null,i){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,co(this,i)}run(){if(!this.active)return this.fn();let n=Ue,t=En;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=Ue,Ue=this,En=!0,Fn=1<<++wt,wt<=ba?$o(this):br(this),this.fn()}finally{wt<=ba&&ho(this),Fn=1<<--wt,Ue=this.parent,En=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ue===this?this.deferStop=!0:this.active&&(br(this),this.onStop&&this.onStop(),this.active=!1)}}function br(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let En=!0;const Es=[];function ht(){Es.push(En),En=!1}function mt(){const e=Es.pop();En=e===void 0?!0:e}function Ne(e,n,t){if(En&&Ue){let i=mi.get(e);i||mi.set(e,i=new Map);let a=i.get(t);a||i.set(t,a=Xa()),qs(a)}}function qs(e,n){let t=!1;wt<=ba?Ss(e)||(e.n|=Fn,t=!As(e)):t=!e.has(Ue),t&&(e.add(Ue),Ue.deps.push(e))}function gn(e,n,t,i,a,r){const s=mi.get(e);if(!s)return;let l=[];if(n==="clear")l=[...s.values()];else if(t==="length"&&z(e)){const o=Number(i);s.forEach((f,u)=>{(u==="length"||!ft(u)&&u>=o)&&l.push(f)})}else switch(t!==void 0&&l.push(s.get(t)),n){case"add":z(e)?La(t)&&l.push(s.get("length")):(l.push(s.get(Zn)),at(e)&&l.push(s.get(_a)));break;case"delete":z(e)||(l.push(s.get(Zn)),at(e)&&l.push(s.get(_a)));break;case"set":at(e)&&l.push(s.get(Zn));break}if(l.length===1)l[0]&&xa(l[0]);else{const o=[];for(const f of l)f&&o.push(...f);xa(Xa(o))}}function xa(e,n){const t=z(e)?e:[...e];for(const i of t)i.computed&&_r(i);for(const i of t)i.computed||_r(i)}function _r(e,n){(e!==Ue||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function mo(e,n){var t;return(t=mi.get(e))==null?void 0:t.get(n)}const bo=Ta("__proto__,__v_isRef,__isVue"),Cs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ft)),xr=_o();function _o(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const i=K(this);for(let r=0,s=this.length;r<s;r++)Ne(i,"get",r+"");const a=i[n](...t);return a===-1||a===!1?i[n](...t.map(K)):a}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){ht();const i=K(this)[n].apply(this,t);return mt(),i}}),e}function xo(e){const n=K(this);return Ne(n,"has",e),n.hasOwnProperty(e)}class Fs{constructor(n=!1,t=!1){this._isReadonly=n,this._shallow=t}get(n,t,i){const a=this._isReadonly,r=this._shallow;if(t==="__v_isReactive")return!a;if(t==="__v_isReadonly")return a;if(t==="__v_isShallow")return r;if(t==="__v_raw"&&i===(a?r?Ro:Ns:r?zs:Rs).get(n))return n;const s=z(n);if(!a){if(s&&J(xr,t))return Reflect.get(xr,t,i);if(t==="hasOwnProperty")return xo}const l=Reflect.get(n,t,i);return(ft(t)?Cs.has(t):bo(t))||(a||Ne(n,"get",t),r)?l:$e(l)?s&&La(t)?l:l.value:ae(l)?a?Is(l):Ni(l):l}}class Ds extends Fs{constructor(n=!1){super(!1,n)}set(n,t,i,a){let r=n[t];if(ut(r)&&$e(r)&&!$e(i))return!1;if(!this._shallow&&(!bi(i)&&!ut(i)&&(r=K(r),i=K(i)),!z(n)&&$e(r)&&!$e(i)))return r.value=i,!0;const s=z(n)&&La(t)?Number(t)<n.length:J(n,t),l=Reflect.set(n,t,i,a);return n===K(a)&&(s?On(i,r)&&gn(n,"set",t,i):gn(n,"add",t,i)),l}deleteProperty(n,t){const i=J(n,t);n[t];const a=Reflect.deleteProperty(n,t);return a&&i&&gn(n,"delete",t,void 0),a}has(n,t){const i=Reflect.has(n,t);return(!ft(t)||!Cs.has(t))&&Ne(n,"has",t),i}ownKeys(n){return Ne(n,"iterate",z(n)?"length":Zn),Reflect.ownKeys(n)}}class po extends Fs{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const wo=new Ds,ko=new po,yo=new Ds(!0),Ua=e=>e,zi=e=>Reflect.getPrototypeOf(e);function Wt(e,n,t=!1,i=!1){e=e.__v_raw;const a=K(e),r=K(n);t||(On(n,r)&&Ne(a,"get",n),Ne(a,"get",r));const{has:s}=zi(a),l=i?Ua:t?Ha:Bt;if(s.call(a,n))return l(e.get(n));if(s.call(a,r))return l(e.get(r));e!==a&&e.get(n)}function Vt(e,n=!1){const t=this.__v_raw,i=K(t),a=K(e);return n||(On(e,a)&&Ne(i,"has",e),Ne(i,"has",a)),e===a?t.has(e):t.has(e)||t.has(a)}function Ht(e,n=!1){return e=e.__v_raw,!n&&Ne(K(e),"iterate",Zn),Reflect.get(e,"size",e)}function pr(e){e=K(e);const n=K(this);return zi(n).has.call(n,e)||(n.add(e),gn(n,"add",e,e)),this}function wr(e,n){n=K(n);const t=K(this),{has:i,get:a}=zi(t);let r=i.call(t,e);r||(e=K(e),r=i.call(t,e));const s=a.call(t,e);return t.set(e,n),r?On(n,s)&&gn(t,"set",e,n):gn(t,"add",e,n),this}function kr(e){const n=K(this),{has:t,get:i}=zi(n);let a=t.call(n,e);a||(e=K(e),a=t.call(n,e)),i&&i.call(n,e);const r=n.delete(e);return a&&gn(n,"delete",e,void 0),r}function yr(){const e=K(this),n=e.size!==0,t=e.clear();return n&&gn(e,"clear",void 0,void 0),t}function Kt(e,n){return function(i,a){const r=this,s=r.__v_raw,l=K(s),o=n?Ua:e?Ha:Bt;return!e&&Ne(l,"iterate",Zn),s.forEach((f,u)=>i.call(a,o(f),o(u),r))}}function Yt(e,n,t){return function(...i){const a=this.__v_raw,r=K(a),s=at(r),l=e==="entries"||e===Symbol.iterator&&s,o=e==="keys"&&s,f=a[e](...i),u=t?Ua:n?Ha:Bt;return!n&&Ne(r,"iterate",o?_a:Zn),{next(){const{value:d,done:$}=f.next();return $?{value:d,done:$}:{value:l?[u(d[0]),u(d[1])]:u(d),done:$}},[Symbol.iterator](){return this}}}}function bn(e){return function(...n){return e==="delete"?!1:this}}function vo(){const e={get(r){return Wt(this,r)},get size(){return Ht(this)},has:Vt,add:pr,set:wr,delete:kr,clear:yr,forEach:Kt(!1,!1)},n={get(r){return Wt(this,r,!1,!0)},get size(){return Ht(this)},has:Vt,add:pr,set:wr,delete:kr,clear:yr,forEach:Kt(!1,!0)},t={get(r){return Wt(this,r,!0)},get size(){return Ht(this,!0)},has(r){return Vt.call(this,r,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Kt(!0,!1)},i={get(r){return Wt(this,r,!0,!0)},get size(){return Ht(this,!0)},has(r){return Vt.call(this,r,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Kt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Yt(r,!1,!1),t[r]=Yt(r,!0,!1),n[r]=Yt(r,!1,!0),i[r]=Yt(r,!0,!0)}),[e,t,n,i]}const[Ao,So,Eo,qo]=vo();function Wa(e,n){const t=n?e?qo:Eo:e?So:Ao;return(i,a,r)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?i:Reflect.get(J(t,a)&&a in i?t:i,a,r)}const Co={get:Wa(!1,!1)},Fo={get:Wa(!1,!0)},Do={get:Wa(!0,!1)},Rs=new WeakMap,zs=new WeakMap,Ns=new WeakMap,Ro=new WeakMap;function zo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function No(e){return e.__v_skip||!Object.isExtensible(e)?0:zo(Jl(e))}function Ni(e){return ut(e)?e:Va(e,!1,wo,Co,Rs)}function Io(e){return Va(e,!1,yo,Fo,zs)}function Is(e){return Va(e,!0,ko,Do,Ns)}function Va(e,n,t,i,a){if(!ae(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=a.get(e);if(r)return r;const s=No(e);if(s===0)return e;const l=new Proxy(e,s===2?i:t);return a.set(e,l),l}function qn(e){return ut(e)?qn(e.__v_raw):!!(e&&e.__v_isReactive)}function ut(e){return!!(e&&e.__v_isReadonly)}function bi(e){return!!(e&&e.__v_isShallow)}function Bs(e){return qn(e)||ut(e)}function K(e){const n=e&&e.__v_raw;return n?K(n):e}function Ii(e){return $i(e,"__v_skip",!0),e}const Bt=e=>ae(e)?Ni(e):e,Ha=e=>ae(e)?Is(e):e;function js(e){En&&Ue&&(e=K(e),qs(e.dep||(e.dep=Xa())))}function Ps(e,n){e=K(e);const t=e.dep;t&&xa(t)}function $e(e){return!!(e&&e.__v_isRef===!0)}function wn(e){return Bo(e,!1)}function Bo(e,n){return $e(e)?e:new jo(e,n)}class jo{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:K(n),this._value=t?n:Bt(n)}get value(){return js(this),this._value}set value(n){const t=this.__v_isShallow||bi(n)||ut(n);n=t?n:K(n),On(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:Bt(n),Ps(this))}}function Po(e){return $e(e)?e.value:e}const To={get:(e,n,t)=>Po(Reflect.get(e,n,t)),set:(e,n,t,i)=>{const a=e[n];return $e(a)&&!$e(t)?(a.value=t,!0):Reflect.set(e,n,t,i)}};function Ts(e){return qn(e)?e:new Proxy(e,To)}function Mo(e){const n=z(e)?new Array(e.length):{};for(const t in e)n[t]=Lo(e,t);return n}class Go{constructor(n,t,i){this._object=n,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return mo(K(this._object),this._key)}}function Lo(e,n,t){const i=e[n];return $e(i)?i:new Go(e,n,t)}class Zo{constructor(n,t,i,a){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Oa(n,()=>{this._dirty||(this._dirty=!0,Ps(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=i}get value(){const n=K(this);return js(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function Xo(e,n,t=!1){let i,a;const r=L(e);return r?(i=e,a=Ve):(i=e.get,a=e.set),new Zo(i,a,r||!a,t)}function Cn(e,n,t,i){let a;try{a=i?e(...i):e()}catch(r){Bi(r,n,t)}return a}function Ze(e,n,t,i){if(L(e)){const r=Cn(e,n,t,i);return r&&bs(r)&&r.catch(s=>{Bi(s,n,t)}),r}const a=[];for(let r=0;r<e.length;r++)a.push(Ze(e[r],n,t,i));return a}function Bi(e,n,t,i=!0){const a=n?n.vnode:null;if(n){let r=n.parent;const s=n.proxy,l=t;for(;r;){const f=r.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,s,l)===!1)return}r=r.parent}const o=n.appContext.config.errorHandler;if(o){Cn(o,null,10,[e,s,l]);return}}Oo(e,t,a,i)}function Oo(e,n,t,i=!0){console.error(e)}let jt=!1,pa=!1;const Se=[];let an=0;const rt=[];let cn=null,Tn=0;const Ms=Promise.resolve();let Ka=null;function ji(e){const n=Ka||Ms;return e?n.then(this?e.bind(this):e):n}function Uo(e){let n=an+1,t=Se.length;for(;n<t;){const i=n+t>>>1,a=Se[i],r=Pt(a);r<e||r===e&&a.pre?n=i+1:t=i}return n}function Ya(e){(!Se.length||!Se.includes(e,jt&&e.allowRecurse?an+1:an))&&(e.id==null?Se.push(e):Se.splice(Uo(e.id),0,e),Gs())}function Gs(){!jt&&!pa&&(pa=!0,Ka=Ms.then(Zs))}function Wo(e){const n=Se.indexOf(e);n>an&&Se.splice(n,1)}function Vo(e){z(e)?rt.push(...e):(!cn||!cn.includes(e,e.allowRecurse?Tn+1:Tn))&&rt.push(e),Gs()}function vr(e,n=jt?an+1:0){for(;n<Se.length;n++){const t=Se[n];t&&t.pre&&(Se.splice(n,1),n--,t())}}function Ls(e){if(rt.length){const n=[...new Set(rt)];if(rt.length=0,cn){cn.push(...n);return}for(cn=n,cn.sort((t,i)=>Pt(t)-Pt(i)),Tn=0;Tn<cn.length;Tn++)cn[Tn]();cn=null,Tn=0}}const Pt=e=>e.id==null?1/0:e.id,Ho=(e,n)=>{const t=Pt(e)-Pt(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function Zs(e){pa=!1,jt=!0,Se.sort(Ho);const n=Ve;try{for(an=0;an<Se.length;an++){const t=Se[an];t&&t.active!==!1&&Cn(t,null,14)}}finally{an=0,Se.length=0,Ls(),jt=!1,Ka=null,(Se.length||rt.length)&&Zs()}}function Ko(e,n,...t){if(e.isUnmounted)return;const i=e.vnode.props||se;let a=t;const r=n.startsWith("update:"),s=r&&n.slice(7);if(s&&s in i){const u=`${s==="modelValue"?"model":s}Modifiers`,{number:d,trim:$}=i[u]||se;$&&(a=t.map(m=>xe(m)?m.trim():m)),d&&(a=t.map(hi))}let l,o=i[l=Hi(n)]||i[l=Hi(sn(n))];!o&&r&&(o=i[l=Hi($t(n))]),o&&Ze(o,e,6,a);const f=i[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Ze(f,e,6,a)}}function Xs(e,n,t=!1){const i=n.emitsCache,a=i.get(e);if(a!==void 0)return a;const r=e.emits;let s={},l=!1;if(!L(e)){const o=f=>{const u=Xs(f,n,!0);u&&(l=!0,_e(s,u))};!t&&n.mixins.length&&n.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return!r&&!l?(ae(e)&&i.set(e,null),null):(z(r)?r.forEach(o=>s[o]=null):_e(s,r),ae(e)&&i.set(e,s),s)}function Pi(e,n){return!e||!qi(n)?!1:(n=n.slice(2).replace(/Once$/,""),J(e,n[0].toLowerCase()+n.slice(1))||J(e,$t(n))||J(e,n))}let ze=null,Os=null;function _i(e){const n=ze;return ze=e,Os=e&&e.type.__scopeId||null,n}function wa(e,n=ze,t){if(!n||e._n)return e;const i=(...a)=>{i._d&&Ir(-1);const r=_i(n);let s;try{s=e(...a)}finally{_i(r),i._d&&Ir(1)}return s};return i._n=!0,i._c=!0,i._d=!0,i}function Ki(e){const{type:n,vnode:t,proxy:i,withProxy:a,props:r,propsOptions:[s],slots:l,attrs:o,emit:f,render:u,renderCache:d,data:$,setupState:m,ctx:p,inheritAttrs:v}=e;let O,X;const T=_i(e);try{if(t.shapeFlag&4){const R=a||i;O=tn(u.call(R,R,d,r,m,$,p)),X=o}else{const R=n;O=tn(R.length>1?R(r,{attrs:o,slots:l,emit:f}):R(r,null)),X=n.props?o:Yo(o)}}catch(R){Ct.length=0,Bi(R,e,1),O=be(Dn)}let V=O;if(X&&v!==!1){const R=Object.keys(X),{shapeFlag:U}=V;R.length&&U&7&&(s&&R.some(Ma)&&(X=Qo(X,s)),V=Un(V,X))}return t.dirs&&(V=Un(V),V.dirs=V.dirs?V.dirs.concat(t.dirs):t.dirs),t.transition&&(V.transition=t.transition),O=V,_i(T),O}const Yo=e=>{let n;for(const t in e)(t==="class"||t==="style"||qi(t))&&((n||(n={}))[t]=e[t]);return n},Qo=(e,n)=>{const t={};for(const i in e)(!Ma(i)||!(i.slice(9)in n))&&(t[i]=e[i]);return t};function Jo(e,n,t){const{props:i,children:a,component:r}=e,{props:s,children:l,patchFlag:o}=n,f=r.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&o>=0){if(o&1024)return!0;if(o&16)return i?Ar(i,s,f):!!s;if(o&8){const u=n.dynamicProps;for(let d=0;d<u.length;d++){const $=u[d];if(s[$]!==i[$]&&!Pi(f,$))return!0}}}else return(a||l)&&(!l||!l.$stable)?!0:i===s?!1:i?s?Ar(i,s,f):!0:!!s;return!1}function Ar(e,n,t){const i=Object.keys(n);if(i.length!==Object.keys(e).length)return!0;for(let a=0;a<i.length;a++){const r=i[a];if(n[r]!==e[r]&&!Pi(t,r))return!0}return!1}function ef({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const nf=e=>e.__isSuspense;function tf(e,n){n&&n.pendingBranch?z(e)?n.effects.push(...e):n.effects.push(e):Vo(e)}const Qt={};function St(e,n,t){return Us(e,n,t)}function Us(e,n,{immediate:t,deep:i,flush:a,onTrack:r,onTrigger:s}=se){var l;const o=vs()===((l=we)==null?void 0:l.scope)?we:null;let f,u=!1,d=!1;if($e(e)?(f=()=>e.value,u=bi(e)):qn(e)?(f=()=>e,i=!0):z(e)?(d=!0,u=e.some(R=>qn(R)||bi(R)),f=()=>e.map(R=>{if($e(R))return R.value;if(qn(R))return Ln(R);if(L(R))return Cn(R,o,2)})):L(e)?n?f=()=>Cn(e,o,2):f=()=>{if(!(o&&o.isUnmounted))return $&&$(),Ze(e,o,3,[m])}:f=Ve,n&&i){const R=f;f=()=>Ln(R())}let $,m=R=>{$=T.onStop=()=>{Cn(R,o,4)}},p;if(Lt)if(m=Ve,n?t&&Ze(n,o,3,[f(),d?[]:void 0,m]):f(),a==="sync"){const R=tu();p=R.__watcherHandles||(R.__watcherHandles=[])}else return Ve;let v=d?new Array(e.length).fill(Qt):Qt;const O=()=>{if(T.active)if(n){const R=T.run();(i||u||(d?R.some((U,ue)=>On(U,v[ue])):On(R,v)))&&($&&$(),Ze(n,o,3,[R,v===Qt?void 0:d&&v[0]===Qt?[]:v,m]),v=R)}else T.run()};O.allowRecurse=!!n;let X;a==="sync"?X=O:a==="post"?X=()=>Re(O,o&&o.suspense):(O.pre=!0,o&&(O.id=o.uid),X=()=>Ya(O));const T=new Oa(f,X);n?t?O():v=T.run():a==="post"?Re(T.run.bind(T),o&&o.suspense):T.run();const V=()=>{T.stop(),o&&o.scope&&Ga(o.scope.effects,T)};return p&&p.push(V),V}function af(e,n,t){const i=this.proxy,a=xe(e)?e.includes(".")?Ws(i,e):()=>i[e]:e.bind(i,i);let r;L(n)?r=n:(r=n.handler,t=n);const s=we;ct(this);const l=Us(a,r.bind(i),t);return s?ct(s):Xn(),l}function Ws(e,n){const t=n.split(".");return()=>{let i=e;for(let a=0;a<t.length&&i;a++)i=i[t[a]];return i}}function Ln(e,n){if(!ae(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),$e(e))Ln(e.value,n);else if(z(e))for(let t=0;t<e.length;t++)Ln(e[t],n);else if(Ci(e)||at(e))e.forEach(t=>{Ln(t,n)});else if(xs(e))for(const t in e)Ln(e[t],n);return e}function en(e,n){const t=ze;if(t===null)return e;const i=Li(t)||t.proxy,a=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[s,l,o,f=se]=n[r];s&&(L(s)&&(s={mounted:s,updated:s}),s.deep&&Ln(l),a.push({dir:s,instance:i,value:l,oldValue:void 0,arg:o,modifiers:f}))}return e}function Rn(e,n,t,i){const a=e.dirs,r=n&&n.dirs;for(let s=0;s<a.length;s++){const l=a[s];r&&(l.oldValue=r[s].value);let o=l.dir[i];o&&(ht(),Ze(o,t,8,[e.el,l,e,n]),mt())}}const Hn=Symbol("_leaveCb"),Jt=Symbol("_enterCb");function rf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Qa(()=>{e.isMounted=!0}),Qs(()=>{e.isUnmounting=!0}),e}const Ge=[Function,Array],sf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ge,onEnter:Ge,onAfterEnter:Ge,onEnterCancelled:Ge,onBeforeLeave:Ge,onLeave:Ge,onAfterLeave:Ge,onLeaveCancelled:Ge,onBeforeAppear:Ge,onAppear:Ge,onAfterAppear:Ge,onAppearCancelled:Ge};function lf(e,n){const{leavingVNodes:t}=e;let i=t.get(n.type);return i||(i=Object.create(null),t.set(n.type,i)),i}function ka(e,n,t,i){const{appear:a,mode:r,persisted:s=!1,onBeforeEnter:l,onEnter:o,onAfterEnter:f,onEnterCancelled:u,onBeforeLeave:d,onLeave:$,onAfterLeave:m,onLeaveCancelled:p,onBeforeAppear:v,onAppear:O,onAfterAppear:X,onAppearCancelled:T}=n,V=String(e.key),R=lf(t,e),U=(E,C)=>{E&&Ze(E,i,9,C)},ue=(E,C)=>{const M=C[1];U(E,C),z(E)?E.every(Y=>Y.length<=1)&&M():E.length<=1&&M()},le={mode:r,persisted:s,beforeEnter(E){let C=l;if(!t.isMounted)if(a)C=v||l;else return;E[Hn]&&E[Hn](!0);const M=R[V];M&&et(e,M)&&M.el[Hn]&&M.el[Hn](),U(C,[E])},enter(E){let C=o,M=f,Y=u;if(!t.isMounted)if(a)C=O||o,M=X||f,Y=T||u;else return;let q=!1;const H=E[Jt]=fe=>{q||(q=!0,fe?U(Y,[E]):U(M,[E]),le.delayedLeave&&le.delayedLeave(),E[Jt]=void 0)};C?ue(C,[E,H]):H()},leave(E,C){const M=String(e.key);if(E[Jt]&&E[Jt](!0),t.isUnmounting)return C();U(d,[E]);let Y=!1;const q=E[Hn]=H=>{Y||(Y=!0,C(),H?U(p,[E]):U(m,[E]),E[Hn]=void 0,R[M]===e&&delete R[M])};R[M]=e,$?ue($,[E,q]):q()},clone(E){return ka(E,n,t,i)}};return le}function ya(e,n){e.shapeFlag&6&&e.component?ya(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Vs(e,n=!1,t){let i=[],a=0;for(let r=0;r<e.length;r++){let s=e[r];const l=t==null?s.key:String(t)+String(s.key!=null?s.key:r);s.type===Fe?(s.patchFlag&128&&a++,i=i.concat(Vs(s.children,n,l))):(n||s.type!==Dn)&&i.push(l!=null?Un(s,{key:l}):s)}if(a>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function of(e,n){return L(e)?(()=>_e({name:e.name},n,{setup:e}))():e}const si=e=>!!e.type.__asyncLoader,Hs=e=>e.type.__isKeepAlive;function ff(e,n){Ks(e,"a",n)}function uf(e,n){Ks(e,"da",n)}function Ks(e,n,t=we){const i=e.__wdc||(e.__wdc=()=>{let a=t;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Ti(n,i,t),t){let a=t.parent;for(;a&&a.parent;)Hs(a.parent.vnode)&&cf(i,n,t,a),a=a.parent}}function cf(e,n,t,i){const a=Ti(n,e,i,!0);Js(()=>{Ga(i[n],a)},t)}function Ti(e,n,t=we,i=!1){if(t){const a=t[e]||(t[e]=[]),r=n.__weh||(n.__weh=(...s)=>{if(t.isUnmounted)return;ht(),ct(t);const l=Ze(n,t,e,s);return Xn(),mt(),l});return i?a.unshift(r):a.push(r),r}}const hn=e=>(n,t=we)=>(!Lt||e==="sp")&&Ti(e,(...i)=>n(...i),t),gf=hn("bm"),Qa=hn("m"),df=hn("bu"),Ys=hn("u"),Qs=hn("bum"),Js=hn("um"),$f=hn("sp"),hf=hn("rtg"),mf=hn("rtc");function bf(e,n=we){Ti("ec",e,n)}const el="components";function Tt(e,n){return xf(el,e,!0,n)||e}const _f=Symbol.for("v-ndc");function xf(e,n,t=!0,i=!1){const a=ze||we;if(a){const r=a.type;if(e===el){const l=Jf(r,!1);if(l&&(l===n||l===sn(n)||l===Di(sn(n))))return r}const s=Sr(a[e]||r[e],n)||Sr(a.appContext[e],n);return!s&&i?r:s}}function Sr(e,n){return e&&(e[n]||e[sn(n)]||e[Di(sn(n))])}function li(e,n,t,i){let a;const r=t&&t[i];if(z(e)||xe(e)){a=new Array(e.length);for(let s=0,l=e.length;s<l;s++)a[s]=n(e[s],s,void 0,r&&r[s])}else if(typeof e=="number"){a=new Array(e);for(let s=0;s<e;s++)a[s]=n(s+1,s,void 0,r&&r[s])}else if(ae(e))if(e[Symbol.iterator])a=Array.from(e,(s,l)=>n(s,l,void 0,r&&r[l]));else{const s=Object.keys(e);a=new Array(s.length);for(let l=0,o=s.length;l<o;l++){const f=s[l];a[l]=n(e[f],f,l,r&&r[l])}}else a=[];return t&&(t[i]=a),a}const va=e=>e?cl(e)?Li(e)||e.proxy:va(e.parent):null,Et=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>va(e.parent),$root:e=>va(e.root),$emit:e=>e.emit,$options:e=>Ja(e),$forceUpdate:e=>e.f||(e.f=()=>Ya(e.update)),$nextTick:e=>e.n||(e.n=ji.bind(e.proxy)),$watch:e=>af.bind(e)}),Yi=(e,n)=>e!==se&&!e.__isScriptSetup&&J(e,n),pf={get({_:e},n){const{ctx:t,setupState:i,data:a,props:r,accessCache:s,type:l,appContext:o}=e;let f;if(n[0]!=="$"){const m=s[n];if(m!==void 0)switch(m){case 1:return i[n];case 2:return a[n];case 4:return t[n];case 3:return r[n]}else{if(Yi(i,n))return s[n]=1,i[n];if(a!==se&&J(a,n))return s[n]=2,a[n];if((f=e.propsOptions[0])&&J(f,n))return s[n]=3,r[n];if(t!==se&&J(t,n))return s[n]=4,t[n];Aa&&(s[n]=0)}}const u=Et[n];let d,$;if(u)return n==="$attrs"&&Ne(e,"get",n),u(e);if((d=l.__cssModules)&&(d=d[n]))return d;if(t!==se&&J(t,n))return s[n]=4,t[n];if($=o.config.globalProperties,J($,n))return $[n]},set({_:e},n,t){const{data:i,setupState:a,ctx:r}=e;return Yi(a,n)?(a[n]=t,!0):i!==se&&J(i,n)?(i[n]=t,!0):J(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(r[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:i,appContext:a,propsOptions:r}},s){let l;return!!t[s]||e!==se&&J(e,s)||Yi(n,s)||(l=r[0])&&J(l,s)||J(i,s)||J(Et,s)||J(a.config.globalProperties,s)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:J(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Er(e){return z(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let Aa=!0;function wf(e){const n=Ja(e),t=e.proxy,i=e.ctx;Aa=!1,n.beforeCreate&&qr(n.beforeCreate,e,"bc");const{data:a,computed:r,methods:s,watch:l,provide:o,inject:f,created:u,beforeMount:d,mounted:$,beforeUpdate:m,updated:p,activated:v,deactivated:O,beforeDestroy:X,beforeUnmount:T,destroyed:V,unmounted:R,render:U,renderTracked:ue,renderTriggered:le,errorCaptured:E,serverPrefetch:C,expose:M,inheritAttrs:Y,components:q,directives:H,filters:fe}=n;if(f&&kf(f,i,null),s)for(const ie in s){const ee=s[ie];L(ee)&&(i[ie]=ee.bind(t))}if(a){const ie=a.call(t,t);ae(ie)&&(e.data=Ni(ie))}if(Aa=!0,r)for(const ie in r){const ee=r[ie],on=L(ee)?ee.bind(t,t):L(ee.get)?ee.get.bind(t,t):Ve,bt=!L(ee)&&L(ee.set)?ee.set.bind(t):Ve,Ke=ir({get:on,set:bt});Object.defineProperty(i,ie,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:Me=>Ke.value=Me})}if(l)for(const ie in l)nl(l[ie],i,t,ie);if(o){const ie=L(o)?o.call(t):o;Reflect.ownKeys(ie).forEach(ee=>{qf(ee,ie[ee])})}u&&qr(u,e,"c");function Z(ie,ee){z(ee)?ee.forEach(on=>ie(on.bind(t))):ee&&ie(ee.bind(t))}if(Z(gf,d),Z(Qa,$),Z(df,m),Z(Ys,p),Z(ff,v),Z(uf,O),Z(bf,E),Z(mf,ue),Z(hf,le),Z(Qs,T),Z(Js,R),Z($f,C),z(M))if(M.length){const ie=e.exposed||(e.exposed={});M.forEach(ee=>{Object.defineProperty(ie,ee,{get:()=>t[ee],set:on=>t[ee]=on})})}else e.exposed||(e.exposed={});U&&e.render===Ve&&(e.render=U),Y!=null&&(e.inheritAttrs=Y),q&&(e.components=q),H&&(e.directives=H)}function kf(e,n,t=Ve){z(e)&&(e=Sa(e));for(const i in e){const a=e[i];let r;ae(a)?"default"in a?r=qt(a.from||i,a.default,!0):r=qt(a.from||i):r=qt(a),$e(r)?Object.defineProperty(n,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:s=>r.value=s}):n[i]=r}}function qr(e,n,t){Ze(z(e)?e.map(i=>i.bind(n.proxy)):e.bind(n.proxy),n,t)}function nl(e,n,t,i){const a=i.includes(".")?Ws(t,i):()=>t[i];if(xe(e)){const r=n[e];L(r)&&St(a,r)}else if(L(e))St(a,e.bind(t));else if(ae(e))if(z(e))e.forEach(r=>nl(r,n,t,i));else{const r=L(e.handler)?e.handler.bind(t):n[e.handler];L(r)&&St(a,r,e)}}function Ja(e){const n=e.type,{mixins:t,extends:i}=n,{mixins:a,optionsCache:r,config:{optionMergeStrategies:s}}=e.appContext,l=r.get(n);let o;return l?o=l:!a.length&&!t&&!i?o=n:(o={},a.length&&a.forEach(f=>xi(o,f,s,!0)),xi(o,n,s)),ae(n)&&r.set(n,o),o}function xi(e,n,t,i=!1){const{mixins:a,extends:r}=n;r&&xi(e,r,t,!0),a&&a.forEach(s=>xi(e,s,t,!0));for(const s in n)if(!(i&&s==="expose")){const l=yf[s]||t&&t[s];e[s]=l?l(e[s],n[s]):n[s]}return e}const yf={data:Cr,props:Fr,emits:Fr,methods:kt,computed:kt,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:kt,directives:kt,watch:Af,provide:Cr,inject:vf};function Cr(e,n){return n?e?function(){return _e(L(e)?e.call(this,this):e,L(n)?n.call(this,this):n)}:n:e}function vf(e,n){return kt(Sa(e),Sa(n))}function Sa(e){if(z(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Ee(e,n){return e?[...new Set([].concat(e,n))]:n}function kt(e,n){return e?_e(Object.create(null),e,n):n}function Fr(e,n){return e?z(e)&&z(n)?[...new Set([...e,...n])]:_e(Object.create(null),Er(e),Er(n??{})):n}function Af(e,n){if(!e)return n;if(!n)return e;const t=_e(Object.create(null),e);for(const i in n)t[i]=Ee(e[i],n[i]);return t}function tl(){return{app:null,config:{isNativeTag:Kl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sf=0;function Ef(e,n){return function(i,a=null){L(i)||(i=_e({},i)),a!=null&&!ae(a)&&(a=null);const r=tl(),s=new WeakSet;let l=!1;const o=r.app={_uid:Sf++,_component:i,_props:a,_container:null,_context:r,_instance:null,version:iu,get config(){return r.config},set config(f){},use(f,...u){return s.has(f)||(f&&L(f.install)?(s.add(f),f.install(o,...u)):L(f)&&(s.add(f),f(o,...u))),o},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),o},component(f,u){return u?(r.components[f]=u,o):r.components[f]},directive(f,u){return u?(r.directives[f]=u,o):r.directives[f]},mount(f,u,d){if(!l){const $=be(i,a);return $.appContext=r,u&&n?n($,f):e($,f,d),l=!0,o._container=f,f.__vue_app__=o,Li($.component)||$.component.proxy}},unmount(){l&&(e(null,o._container),delete o._container.__vue_app__)},provide(f,u){return r.provides[f]=u,o},runWithContext(f){Mt=o;try{return f()}finally{Mt=null}}};return o}}let Mt=null;function qf(e,n){if(we){let t=we.provides;const i=we.parent&&we.parent.provides;i===t&&(t=we.provides=Object.create(i)),t[e]=n}}function qt(e,n,t=!1){const i=we||ze;if(i||Mt){const a=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Mt._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return t&&L(n)?n.call(i&&i.proxy):n}}function Cf(){return!!(we||ze||Mt)}function Ff(e,n,t,i=!1){const a={},r={};$i(r,Gi,1),e.propsDefaults=Object.create(null),il(e,n,a,r);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);t?e.props=i?a:Io(a):e.type.props?e.props=a:e.props=r,e.attrs=r}function Df(e,n,t,i){const{props:a,attrs:r,vnode:{patchFlag:s}}=e,l=K(a),[o]=e.propsOptions;let f=!1;if((i||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let $=u[d];if(Pi(e.emitsOptions,$))continue;const m=n[$];if(o)if(J(r,$))m!==r[$]&&(r[$]=m,f=!0);else{const p=sn($);a[p]=Ea(o,l,p,m,e,!1)}else m!==r[$]&&(r[$]=m,f=!0)}}}else{il(e,n,a,r)&&(f=!0);let u;for(const d in l)(!n||!J(n,d)&&((u=$t(d))===d||!J(n,u)))&&(o?t&&(t[d]!==void 0||t[u]!==void 0)&&(a[d]=Ea(o,l,d,void 0,e,!0)):delete a[d]);if(r!==l)for(const d in r)(!n||!J(n,d))&&(delete r[d],f=!0)}f&&gn(e,"set","$attrs")}function il(e,n,t,i){const[a,r]=e.propsOptions;let s=!1,l;if(n)for(let o in n){if(ai(o))continue;const f=n[o];let u;a&&J(a,u=sn(o))?!r||!r.includes(u)?t[u]=f:(l||(l={}))[u]=f:Pi(e.emitsOptions,o)||(!(o in i)||f!==i[o])&&(i[o]=f,s=!0)}if(r){const o=K(t),f=l||se;for(let u=0;u<r.length;u++){const d=r[u];t[d]=Ea(a,o,d,f[d],e,!J(f,d))}}return s}function Ea(e,n,t,i,a,r){const s=e[t];if(s!=null){const l=J(s,"default");if(l&&i===void 0){const o=s.default;if(s.type!==Function&&!s.skipFactory&&L(o)){const{propsDefaults:f}=a;t in f?i=f[t]:(ct(a),i=f[t]=o.call(null,n),Xn())}else i=o}s[0]&&(r&&!l?i=!1:s[1]&&(i===""||i===$t(t))&&(i=!0))}return i}function al(e,n,t=!1){const i=n.propsCache,a=i.get(e);if(a)return a;const r=e.props,s={},l=[];let o=!1;if(!L(e)){const u=d=>{o=!0;const[$,m]=al(d,n,!0);_e(s,$),m&&l.push(...m)};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!o)return ae(e)&&i.set(e,it),it;if(z(r))for(let u=0;u<r.length;u++){const d=sn(r[u]);Dr(d)&&(s[d]=se)}else if(r)for(const u in r){const d=sn(u);if(Dr(d)){const $=r[u],m=s[d]=z($)||L($)?{type:$}:_e({},$);if(m){const p=Nr(Boolean,m.type),v=Nr(String,m.type);m[0]=p>-1,m[1]=v<0||p<v,(p>-1||J(m,"default"))&&l.push(d)}}}const f=[s,l];return ae(e)&&i.set(e,f),f}function Dr(e){return e[0]!=="$"}function Rr(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function zr(e,n){return Rr(e)===Rr(n)}function Nr(e,n){return z(n)?n.findIndex(t=>zr(t,e)):L(n)&&zr(n,e)?0:-1}const rl=e=>e[0]==="_"||e==="$stable",er=e=>z(e)?e.map(tn):[tn(e)],Rf=(e,n,t)=>{if(n._n)return n;const i=wa((...a)=>er(n(...a)),t);return i._c=!1,i},sl=(e,n,t)=>{const i=e._ctx;for(const a in e){if(rl(a))continue;const r=e[a];if(L(r))n[a]=Rf(a,r,i);else if(r!=null){const s=er(r);n[a]=()=>s}}},ll=(e,n)=>{const t=er(n);e.slots.default=()=>t},zf=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=K(n),$i(n,"_",t)):sl(n,e.slots={})}else e.slots={},n&&ll(e,n);$i(e.slots,Gi,1)},Nf=(e,n,t)=>{const{vnode:i,slots:a}=e;let r=!0,s=se;if(i.shapeFlag&32){const l=n._;l?t&&l===1?r=!1:(_e(a,n),!t&&l===1&&delete a._):(r=!n.$stable,sl(n,a)),s=n}else n&&(ll(e,n),s={default:1});if(r)for(const l in a)!rl(l)&&s[l]==null&&delete a[l]};function qa(e,n,t,i,a=!1){if(z(e)){e.forEach(($,m)=>qa($,n&&(z(n)?n[m]:n),t,i,a));return}if(si(i)&&!a)return;const r=i.shapeFlag&4?Li(i.component)||i.component.proxy:i.el,s=a?null:r,{i:l,r:o}=e,f=n&&n.r,u=l.refs===se?l.refs={}:l.refs,d=l.setupState;if(f!=null&&f!==o&&(xe(f)?(u[f]=null,J(d,f)&&(d[f]=null)):$e(f)&&(f.value=null)),L(o))Cn(o,l,12,[s,u]);else{const $=xe(o),m=$e(o);if($||m){const p=()=>{if(e.f){const v=$?J(d,o)?d[o]:u[o]:o.value;a?z(v)&&Ga(v,r):z(v)?v.includes(r)||v.push(r):$?(u[o]=[r],J(d,o)&&(d[o]=u[o])):(o.value=[r],e.k&&(u[e.k]=o.value))}else $?(u[o]=s,J(d,o)&&(d[o]=s)):m&&(o.value=s,e.k&&(u[e.k]=s))};s?(p.id=-1,Re(p,t)):p()}}}const Re=tf;function If(e){return Bf(e)}function Bf(e,n){const t=ma();t.__VUE__=!0;const{insert:i,remove:a,patchProp:r,createElement:s,createText:l,createComment:o,setText:f,setElementText:u,parentNode:d,nextSibling:$,setScopeId:m=Ve,insertStaticContent:p}=e,v=(c,g,h,b=null,_=null,k=null,S=!1,w=null,A=!!g.dynamicChildren)=>{if(c===g)return;c&&!et(c,g)&&(b=Ut(c),Me(c,_,k,!0),c=null),g.patchFlag===-2&&(A=!1,g.dynamicChildren=null);const{type:x,ref:N,shapeFlag:F}=g;switch(x){case Mi:O(c,g,h,b);break;case Dn:X(c,g,h,b);break;case Qi:c==null&&T(g,h,b,S);break;case Fe:q(c,g,h,b,_,k,S,w,A);break;default:F&1?U(c,g,h,b,_,k,S,w,A):F&6?H(c,g,h,b,_,k,S,w,A):(F&64||F&128)&&x.process(c,g,h,b,_,k,S,w,A,Wn)}N!=null&&_&&qa(N,c&&c.ref,k,g||c,!g)},O=(c,g,h,b)=>{if(c==null)i(g.el=l(g.children),h,b);else{const _=g.el=c.el;g.children!==c.children&&f(_,g.children)}},X=(c,g,h,b)=>{c==null?i(g.el=o(g.children||""),h,b):g.el=c.el},T=(c,g,h,b)=>{[c.el,c.anchor]=p(c.children,g,h,b,c.el,c.anchor)},V=({el:c,anchor:g},h,b)=>{let _;for(;c&&c!==g;)_=$(c),i(c,h,b),c=_;i(g,h,b)},R=({el:c,anchor:g})=>{let h;for(;c&&c!==g;)h=$(c),a(c),c=h;a(g)},U=(c,g,h,b,_,k,S,w,A)=>{S=S||g.type==="svg",c==null?ue(g,h,b,_,k,S,w,A):C(c,g,_,k,S,w,A)},ue=(c,g,h,b,_,k,S,w)=>{let A,x;const{type:N,props:F,shapeFlag:I,transition:P,dirs:W}=c;if(A=c.el=s(c.type,k,F&&F.is,F),I&8?u(A,c.children):I&16&&E(c.children,A,null,b,_,k&&N!=="foreignObject",S,w),W&&Rn(c,null,b,"created"),le(A,c,c.scopeId,S,b),F){for(const te in F)te!=="value"&&!ai(te)&&r(A,te,null,F[te],k,c.children,b,_,fn);"value"in F&&r(A,"value",null,F.value),(x=F.onVnodeBeforeMount)&&Qe(x,b,c)}W&&Rn(c,null,b,"beforeMount");const re=jf(_,P);re&&P.beforeEnter(A),i(A,g,h),((x=F&&F.onVnodeMounted)||re||W)&&Re(()=>{x&&Qe(x,b,c),re&&P.enter(A),W&&Rn(c,null,b,"mounted")},_)},le=(c,g,h,b,_)=>{if(h&&m(c,h),b)for(let k=0;k<b.length;k++)m(c,b[k]);if(_){let k=_.subTree;if(g===k){const S=_.vnode;le(c,S,S.scopeId,S.slotScopeIds,_.parent)}}},E=(c,g,h,b,_,k,S,w,A=0)=>{for(let x=A;x<c.length;x++){const N=c[x]=w?kn(c[x]):tn(c[x]);v(null,N,g,h,b,_,k,S,w)}},C=(c,g,h,b,_,k,S)=>{const w=g.el=c.el;let{patchFlag:A,dynamicChildren:x,dirs:N}=g;A|=c.patchFlag&16;const F=c.props||se,I=g.props||se;let P;h&&zn(h,!1),(P=I.onVnodeBeforeUpdate)&&Qe(P,h,g,c),N&&Rn(g,c,h,"beforeUpdate"),h&&zn(h,!0);const W=_&&g.type!=="foreignObject";if(x?M(c.dynamicChildren,x,w,h,b,W,k):S||ee(c,g,w,null,h,b,W,k,!1),A>0){if(A&16)Y(w,g,F,I,h,b,_);else if(A&2&&F.class!==I.class&&r(w,"class",null,I.class,_),A&4&&r(w,"style",F.style,I.style,_),A&8){const re=g.dynamicProps;for(let te=0;te<re.length;te++){const he=re[te],Xe=F[he],Vn=I[he];(Vn!==Xe||he==="value")&&r(w,he,Xe,Vn,_,c.children,h,b,fn)}}A&1&&c.children!==g.children&&u(w,g.children)}else!S&&x==null&&Y(w,g,F,I,h,b,_);((P=I.onVnodeUpdated)||N)&&Re(()=>{P&&Qe(P,h,g,c),N&&Rn(g,c,h,"updated")},b)},M=(c,g,h,b,_,k,S)=>{for(let w=0;w<g.length;w++){const A=c[w],x=g[w],N=A.el&&(A.type===Fe||!et(A,x)||A.shapeFlag&70)?d(A.el):h;v(A,x,N,null,b,_,k,S,!0)}},Y=(c,g,h,b,_,k,S)=>{if(h!==b){if(h!==se)for(const w in h)!ai(w)&&!(w in b)&&r(c,w,h[w],null,S,g.children,_,k,fn);for(const w in b){if(ai(w))continue;const A=b[w],x=h[w];A!==x&&w!=="value"&&r(c,w,x,A,S,g.children,_,k,fn)}"value"in b&&r(c,"value",h.value,b.value)}},q=(c,g,h,b,_,k,S,w,A)=>{const x=g.el=c?c.el:l(""),N=g.anchor=c?c.anchor:l("");let{patchFlag:F,dynamicChildren:I,slotScopeIds:P}=g;P&&(w=w?w.concat(P):P),c==null?(i(x,h,b),i(N,h,b),E(g.children,h,N,_,k,S,w,A)):F>0&&F&64&&I&&c.dynamicChildren?(M(c.dynamicChildren,I,h,_,k,S,w),(g.key!=null||_&&g===_.subTree)&&ol(c,g,!0)):ee(c,g,h,N,_,k,S,w,A)},H=(c,g,h,b,_,k,S,w,A)=>{g.slotScopeIds=w,c==null?g.shapeFlag&512?_.ctx.activate(g,h,b,S,A):fe(g,h,b,_,k,S,A):ke(c,g,A)},fe=(c,g,h,b,_,k,S)=>{const w=c.component=Wf(c,b,_);if(Hs(c)&&(w.ctx.renderer=Wn),Hf(w),w.asyncDep){if(_&&_.registerDep(w,Z),!c.el){const A=w.subTree=be(Dn);X(null,A,g,h)}return}Z(w,c,g,h,_,k,S)},ke=(c,g,h)=>{const b=g.component=c.component;if(Jo(c,g,h))if(b.asyncDep&&!b.asyncResolved){ie(b,g,h);return}else b.next=g,Wo(b.update),b.update();else g.el=c.el,b.vnode=g},Z=(c,g,h,b,_,k,S)=>{const w=()=>{if(c.isMounted){let{next:N,bu:F,u:I,parent:P,vnode:W}=c,re=N,te;zn(c,!1),N?(N.el=W.el,ie(c,N,S)):N=W,F&&ri(F),(te=N.props&&N.props.onVnodeBeforeUpdate)&&Qe(te,P,N,W),zn(c,!0);const he=Ki(c),Xe=c.subTree;c.subTree=he,v(Xe,he,d(Xe.el),Ut(Xe),c,_,k),N.el=he.el,re===null&&ef(c,he.el),I&&Re(I,_),(te=N.props&&N.props.onVnodeUpdated)&&Re(()=>Qe(te,P,N,W),_)}else{let N;const{el:F,props:I}=g,{bm:P,m:W,parent:re}=c,te=si(g);if(zn(c,!1),P&&ri(P),!te&&(N=I&&I.onVnodeBeforeMount)&&Qe(N,re,g),zn(c,!0),F&&Vi){const he=()=>{c.subTree=Ki(c),Vi(F,c.subTree,c,_,null)};te?g.type.__asyncLoader().then(()=>!c.isUnmounted&&he()):he()}else{const he=c.subTree=Ki(c);v(null,he,h,b,c,_,k),g.el=he.el}if(W&&Re(W,_),!te&&(N=I&&I.onVnodeMounted)){const he=g;Re(()=>Qe(N,re,he),_)}(g.shapeFlag&256||re&&si(re.vnode)&&re.vnode.shapeFlag&256)&&c.a&&Re(c.a,_),c.isMounted=!0,g=h=b=null}},A=c.effect=new Oa(w,()=>Ya(x),c.scope),x=c.update=()=>A.run();x.id=c.uid,zn(c,!0),x()},ie=(c,g,h)=>{g.component=c;const b=c.vnode.props;c.vnode=g,c.next=null,Df(c,g.props,b,h),Nf(c,g.children,h),ht(),vr(),mt()},ee=(c,g,h,b,_,k,S,w,A=!1)=>{const x=c&&c.children,N=c?c.shapeFlag:0,F=g.children,{patchFlag:I,shapeFlag:P}=g;if(I>0){if(I&128){bt(x,F,h,b,_,k,S,w,A);return}else if(I&256){on(x,F,h,b,_,k,S,w,A);return}}P&8?(N&16&&fn(x,_,k),F!==x&&u(h,F)):N&16?P&16?bt(x,F,h,b,_,k,S,w,A):fn(x,_,k,!0):(N&8&&u(h,""),P&16&&E(F,h,b,_,k,S,w,A))},on=(c,g,h,b,_,k,S,w,A)=>{c=c||it,g=g||it;const x=c.length,N=g.length,F=Math.min(x,N);let I;for(I=0;I<F;I++){const P=g[I]=A?kn(g[I]):tn(g[I]);v(c[I],P,h,null,_,k,S,w,A)}x>N?fn(c,_,k,!0,!1,F):E(g,h,b,_,k,S,w,A,F)},bt=(c,g,h,b,_,k,S,w,A)=>{let x=0;const N=g.length;let F=c.length-1,I=N-1;for(;x<=F&&x<=I;){const P=c[x],W=g[x]=A?kn(g[x]):tn(g[x]);if(et(P,W))v(P,W,h,null,_,k,S,w,A);else break;x++}for(;x<=F&&x<=I;){const P=c[F],W=g[I]=A?kn(g[I]):tn(g[I]);if(et(P,W))v(P,W,h,null,_,k,S,w,A);else break;F--,I--}if(x>F){if(x<=I){const P=I+1,W=P<N?g[P].el:b;for(;x<=I;)v(null,g[x]=A?kn(g[x]):tn(g[x]),h,W,_,k,S,w,A),x++}}else if(x>I)for(;x<=F;)Me(c[x],_,k,!0),x++;else{const P=x,W=x,re=new Map;for(x=W;x<=I;x++){const Ie=g[x]=A?kn(g[x]):tn(g[x]);Ie.key!=null&&re.set(Ie.key,x)}let te,he=0;const Xe=I-W+1;let Vn=!1,gr=0;const _t=new Array(Xe);for(x=0;x<Xe;x++)_t[x]=0;for(x=P;x<=F;x++){const Ie=c[x];if(he>=Xe){Me(Ie,_,k,!0);continue}let Ye;if(Ie.key!=null)Ye=re.get(Ie.key);else for(te=W;te<=I;te++)if(_t[te-W]===0&&et(Ie,g[te])){Ye=te;break}Ye===void 0?Me(Ie,_,k,!0):(_t[Ye-W]=x+1,Ye>=gr?gr=Ye:Vn=!0,v(Ie,g[Ye],h,null,_,k,S,w,A),he++)}const dr=Vn?Pf(_t):it;for(te=dr.length-1,x=Xe-1;x>=0;x--){const Ie=W+x,Ye=g[Ie],$r=Ie+1<N?g[Ie+1].el:b;_t[x]===0?v(null,Ye,h,$r,_,k,S,w,A):Vn&&(te<0||x!==dr[te]?Ke(Ye,h,$r,2):te--)}}},Ke=(c,g,h,b,_=null)=>{const{el:k,type:S,transition:w,children:A,shapeFlag:x}=c;if(x&6){Ke(c.component.subTree,g,h,b);return}if(x&128){c.suspense.move(g,h,b);return}if(x&64){S.move(c,g,h,Wn);return}if(S===Fe){i(k,g,h);for(let F=0;F<A.length;F++)Ke(A[F],g,h,b);i(c.anchor,g,h);return}if(S===Qi){V(c,g,h);return}if(b!==2&&x&1&&w)if(b===0)w.beforeEnter(k),i(k,g,h),Re(()=>w.enter(k),_);else{const{leave:F,delayLeave:I,afterLeave:P}=w,W=()=>i(k,g,h),re=()=>{F(k,()=>{W(),P&&P()})};I?I(k,W,re):re()}else i(k,g,h)},Me=(c,g,h,b=!1,_=!1)=>{const{type:k,props:S,ref:w,children:A,dynamicChildren:x,shapeFlag:N,patchFlag:F,dirs:I}=c;if(w!=null&&qa(w,null,h,c,!0),N&256){g.ctx.deactivate(c);return}const P=N&1&&I,W=!si(c);let re;if(W&&(re=S&&S.onVnodeBeforeUnmount)&&Qe(re,g,c),N&6)Vl(c.component,h,b);else{if(N&128){c.suspense.unmount(h,b);return}P&&Rn(c,null,g,"beforeUnmount"),N&64?c.type.remove(c,g,h,_,Wn,b):x&&(k!==Fe||F>0&&F&64)?fn(x,g,h,!1,!0):(k===Fe&&F&384||!_&&N&16)&&fn(A,g,h),b&&ur(c)}(W&&(re=S&&S.onVnodeUnmounted)||P)&&Re(()=>{re&&Qe(re,g,c),P&&Rn(c,null,g,"unmounted")},h)},ur=c=>{const{type:g,el:h,anchor:b,transition:_}=c;if(g===Fe){Wl(h,b);return}if(g===Qi){R(c);return}const k=()=>{a(h),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(c.shapeFlag&1&&_&&!_.persisted){const{leave:S,delayLeave:w}=_,A=()=>S(h,k);w?w(c.el,k,A):A()}else k()},Wl=(c,g)=>{let h;for(;c!==g;)h=$(c),a(c),c=h;a(g)},Vl=(c,g,h)=>{const{bum:b,scope:_,update:k,subTree:S,um:w}=c;b&&ri(b),_.stop(),k&&(k.active=!1,Me(S,c,g,h)),w&&Re(w,g),Re(()=>{c.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},fn=(c,g,h,b=!1,_=!1,k=0)=>{for(let S=k;S<c.length;S++)Me(c[S],g,h,b,_)},Ut=c=>c.shapeFlag&6?Ut(c.component.subTree):c.shapeFlag&128?c.suspense.next():$(c.anchor||c.el),cr=(c,g,h)=>{c==null?g._vnode&&Me(g._vnode,null,null,!0):v(g._vnode||null,c,g,null,null,null,h),vr(),Ls(),g._vnode=c},Wn={p:v,um:Me,m:Ke,r:ur,mt:fe,mc:E,pc:ee,pbc:M,n:Ut,o:e};let Wi,Vi;return n&&([Wi,Vi]=n(Wn)),{render:cr,hydrate:Wi,createApp:Ef(cr,Wi)}}function zn({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function jf(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function ol(e,n,t=!1){const i=e.children,a=n.children;if(z(i)&&z(a))for(let r=0;r<i.length;r++){const s=i[r];let l=a[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=a[r]=kn(a[r]),l.el=s.el),t||ol(s,l)),l.type===Mi&&(l.el=s.el)}}function Pf(e){const n=e.slice(),t=[0];let i,a,r,s,l;const o=e.length;for(i=0;i<o;i++){const f=e[i];if(f!==0){if(a=t[t.length-1],e[a]<f){n[i]=a,t.push(i);continue}for(r=0,s=t.length-1;r<s;)l=r+s>>1,e[t[l]]<f?r=l+1:s=l;f<e[t[r]]&&(r>0&&(n[i]=t[r-1]),t[r]=i)}}for(r=t.length,s=t[r-1];r-- >0;)t[r]=s,s=n[s];return t}const Tf=e=>e.__isTeleport,Fe=Symbol.for("v-fgt"),Mi=Symbol.for("v-txt"),Dn=Symbol.for("v-cmt"),Qi=Symbol.for("v-stc"),Ct=[];let We=null;function Ae(e=!1){Ct.push(We=e?null:[])}function Mf(){Ct.pop(),We=Ct[Ct.length-1]||null}let Gt=1;function Ir(e){Gt+=e}function fl(e){return e.dynamicChildren=Gt>0?We||it:null,Mf(),Gt>0&&We&&We.push(e),e}function Ce(e,n,t,i,a,r){return fl(D(e,n,t,i,a,r,!0))}function Gf(e,n,t,i,a){return fl(be(e,n,t,i,a,!0))}function Ca(e){return e?e.__v_isVNode===!0:!1}function et(e,n){return e.type===n.type&&e.key===n.key}const Gi="__vInternal",ul=({key:e})=>e??null,oi=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?xe(e)||$e(e)||L(e)?{i:ze,r:e,k:n,f:!!t}:e:null);function D(e,n=null,t=null,i=0,a=null,r=e===Fe?0:1,s=!1,l=!1){const o={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&ul(n),ref:n&&oi(n),scopeId:Os,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ze};return l?(nr(o,t),r&128&&e.normalize(o)):t&&(o.shapeFlag|=xe(t)?8:16),Gt>0&&!s&&We&&(o.patchFlag>0||r&6)&&o.patchFlag!==32&&We.push(o),o}const be=Lf;function Lf(e,n=null,t=null,i=0,a=null,r=!1){if((!e||e===_f)&&(e=Dn),Ca(e)){const l=Un(e,n,!0);return t&&nr(l,t),Gt>0&&!r&&We&&(l.shapeFlag&6?We[We.indexOf(e)]=l:We.push(l)),l.patchFlag|=-2,l}if(eu(e)&&(e=e.__vccOpts),n){n=Zf(n);let{class:l,style:o}=n;l&&!xe(l)&&(n.class=de(l)),ae(o)&&(Bs(o)&&!z(o)&&(o=_e({},o)),n.style=Za(o))}const s=xe(e)?1:nf(e)?128:Tf(e)?64:ae(e)?4:L(e)?2:0;return D(e,n,t,i,a,s,r,!0)}function Zf(e){return e?Bs(e)||Gi in e?_e({},e):e:null}function Un(e,n,t=!1){const{props:i,ref:a,patchFlag:r,children:s}=e,l=n?Xf(i||{},n):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&ul(l),ref:n&&n.ref?t&&a?z(a)?a.concat(oi(n)):[a,oi(n)]:oi(n):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Fe?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Un(e.ssContent),ssFallback:e.ssFallback&&Un(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Fa(e=" ",n=0){return be(Mi,null,e,n)}function Br(e="",n=!1){return n?(Ae(),Gf(Dn,null,e)):be(Dn,null,e)}function tn(e){return e==null||typeof e=="boolean"?be(Dn):z(e)?be(Fe,null,e.slice()):typeof e=="object"?kn(e):be(Mi,null,String(e))}function kn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Un(e)}function nr(e,n){let t=0;const{shapeFlag:i}=e;if(n==null)n=null;else if(z(n))t=16;else if(typeof n=="object")if(i&65){const a=n.default;a&&(a._c&&(a._d=!1),nr(e,a()),a._c&&(a._d=!0));return}else{t=32;const a=n._;!a&&!(Gi in n)?n._ctx=ze:a===3&&ze&&(ze.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else L(n)?(n={default:n,_ctx:ze},t=32):(n=String(n),i&64?(t=16,n=[Fa(n)]):t=8);e.children=n,e.shapeFlag|=t}function Xf(...e){const n={};for(let t=0;t<e.length;t++){const i=e[t];for(const a in i)if(a==="class")n.class!==i.class&&(n.class=de([n.class,i.class]));else if(a==="style")n.style=Za([n.style,i.style]);else if(qi(a)){const r=n[a],s=i[a];s&&r!==s&&!(z(r)&&r.includes(s))&&(n[a]=r?[].concat(r,s):s)}else a!==""&&(n[a]=i[a])}return n}function Qe(e,n,t,i=null){Ze(e,n,7,[t,i])}const Of=tl();let Uf=0;function Wf(e,n,t){const i=e.type,a=(n?n.appContext:e.appContext)||Of,r={uid:Uf++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ks(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:al(i,a),emitsOptions:Xs(i,a),emit:null,emitted:null,propsDefaults:se,inheritAttrs:i.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=Ko.bind(null,r),e.ce&&e.ce(r),r}let we=null;const Vf=()=>we||ze;let tr,Kn,jr="__VUE_INSTANCE_SETTERS__";(Kn=ma()[jr])||(Kn=ma()[jr]=[]),Kn.push(e=>we=e),tr=e=>{Kn.length>1?Kn.forEach(n=>n(e)):Kn[0](e)};const ct=e=>{tr(e),e.scope.on()},Xn=()=>{we&&we.scope.off(),tr(null)};function cl(e){return e.vnode.shapeFlag&4}let Lt=!1;function Hf(e,n=!1){Lt=n;const{props:t,children:i}=e.vnode,a=cl(e);Ff(e,t,a,n),zf(e,i);const r=a?Kf(e,n):void 0;return Lt=!1,r}function Kf(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=Ii(new Proxy(e.ctx,pf));const{setup:i}=t;if(i){const a=e.setupContext=i.length>1?Qf(e):null;ct(e),ht();const r=Cn(i,e,0,[e.props,a]);if(mt(),Xn(),bs(r)){if(r.then(Xn,Xn),n)return r.then(s=>{Pr(e,s,n)}).catch(s=>{Bi(s,e,0)});e.asyncDep=r}else Pr(e,r,n)}else gl(e,n)}function Pr(e,n,t){L(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:ae(n)&&(e.setupState=Ts(n)),gl(e,t)}let Tr;function gl(e,n,t){const i=e.type;if(!e.render){if(!n&&Tr&&!i.render){const a=i.template||Ja(e).template;if(a){const{isCustomElement:r,compilerOptions:s}=e.appContext.config,{delimiters:l,compilerOptions:o}=i,f=_e(_e({isCustomElement:r,delimiters:l},s),o);i.render=Tr(a,f)}}e.render=i.render||Ve}{ct(e),ht();try{wf(e)}finally{mt(),Xn()}}}function Yf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(n,t){return Ne(e,"get","$attrs"),n[t]}}))}function Qf(e){const n=t=>{e.exposed=t||{}};return{get attrs(){return Yf(e)},slots:e.slots,emit:e.emit,expose:n}}function Li(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ts(Ii(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Et)return Et[t](e)},has(n,t){return t in n||t in Et}}))}function Jf(e,n=!0){return L(e)?e.displayName||e.name:e.name||n&&e.__name}function eu(e){return L(e)&&"__vccOpts"in e}const ir=(e,n)=>Xo(e,n,Lt);function Mr(e,n,t){const i=arguments.length;return i===2?ae(n)&&!z(n)?Ca(n)?be(e,null,[n]):be(e,n):be(e,null,n):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ca(t)&&(t=[t]),be(e,n,t))}const nu=Symbol.for("v-scx"),tu=()=>qt(nu),iu="3.3.7",au="http://www.w3.org/2000/svg",Mn=typeof document<"u"?document:null,Gr=Mn&&Mn.createElement("template"),ru={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,i)=>{const a=n?Mn.createElementNS(au,e):Mn.createElement(e,t?{is:t}:void 0);return e==="select"&&i&&i.multiple!=null&&a.setAttribute("multiple",i.multiple),a},createText:e=>Mn.createTextNode(e),createComment:e=>Mn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Mn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,i,a,r){const s=t?t.previousSibling:n.lastChild;if(a&&(a===r||a.nextSibling))for(;n.insertBefore(a.cloneNode(!0),t),!(a===r||!(a=a.nextSibling)););else{Gr.innerHTML=i?`<svg>${e}</svg>`:e;const l=Gr.content;if(i){const o=l.firstChild;for(;o.firstChild;)l.appendChild(o.firstChild);l.removeChild(o)}n.insertBefore(l,t)}return[s?s.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},_n="transition",xt="animation",gt=Symbol("_vtc"),dl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},su=_e({},sf,dl),Nn=(e,n=[])=>{z(e)?e.forEach(t=>t(...n)):e&&e(...n)},Lr=e=>e?z(e)?e.some(n=>n.length>1):e.length>1:!1;function lu(e){const n={};for(const q in e)q in dl||(n[q]=e[q]);if(e.css===!1)return n;const{name:t="v",type:i,duration:a,enterFromClass:r=`${t}-enter-from`,enterActiveClass:s=`${t}-enter-active`,enterToClass:l=`${t}-enter-to`,appearFromClass:o=r,appearActiveClass:f=s,appearToClass:u=l,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:$=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=e,p=ou(a),v=p&&p[0],O=p&&p[1],{onBeforeEnter:X,onEnter:T,onEnterCancelled:V,onLeave:R,onLeaveCancelled:U,onBeforeAppear:ue=X,onAppear:le=T,onAppearCancelled:E=V}=n,C=(q,H,fe)=>{xn(q,H?u:l),xn(q,H?f:s),fe&&fe()},M=(q,H)=>{q._isLeaving=!1,xn(q,d),xn(q,m),xn(q,$),H&&H()},Y=q=>(H,fe)=>{const ke=q?le:T,Z=()=>C(H,q,fe);Nn(ke,[H,Z]),Zr(()=>{xn(H,q?o:r),un(H,q?u:l),Lr(ke)||Xr(H,i,v,Z)})};return _e(n,{onBeforeEnter(q){Nn(X,[q]),un(q,r),un(q,s)},onBeforeAppear(q){Nn(ue,[q]),un(q,o),un(q,f)},onEnter:Y(!1),onAppear:Y(!0),onLeave(q,H){q._isLeaving=!0;const fe=()=>M(q,H);un(q,d),hl(),un(q,$),Zr(()=>{q._isLeaving&&(xn(q,d),un(q,m),Lr(R)||Xr(q,i,O,fe))}),Nn(R,[q,fe])},onEnterCancelled(q){C(q,!1),Nn(V,[q])},onAppearCancelled(q){C(q,!0),Nn(E,[q])},onLeaveCancelled(q){M(q),Nn(U,[q])}})}function ou(e){if(e==null)return null;if(ae(e))return[Ji(e.enter),Ji(e.leave)];{const n=Ji(e);return[n,n]}}function Ji(e){return to(e)}function un(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[gt]||(e[gt]=new Set)).add(n)}function xn(e,n){n.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const t=e[gt];t&&(t.delete(n),t.size||(e[gt]=void 0))}function Zr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let fu=0;function Xr(e,n,t,i){const a=e._endId=++fu,r=()=>{a===e._endId&&i()};if(t)return setTimeout(r,t);const{type:s,timeout:l,propCount:o}=$l(e,n);if(!s)return i();const f=s+"end";let u=0;const d=()=>{e.removeEventListener(f,$),r()},$=m=>{m.target===e&&++u>=o&&d()};setTimeout(()=>{u<o&&d()},l+1),e.addEventListener(f,$)}function $l(e,n){const t=window.getComputedStyle(e),i=p=>(t[p]||"").split(", "),a=i(`${_n}Delay`),r=i(`${_n}Duration`),s=Or(a,r),l=i(`${xt}Delay`),o=i(`${xt}Duration`),f=Or(l,o);let u=null,d=0,$=0;n===_n?s>0&&(u=_n,d=s,$=r.length):n===xt?f>0&&(u=xt,d=f,$=o.length):(d=Math.max(s,f),u=d>0?s>f?_n:xt:null,$=u?u===_n?r.length:o.length:0);const m=u===_n&&/\b(transform|all)(,|$)/.test(i(`${_n}Property`).toString());return{type:u,timeout:d,propCount:$,hasTransform:m}}function Or(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,i)=>Ur(t)+Ur(e[i])))}function Ur(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function hl(){return document.body.offsetHeight}function uu(e,n,t){const i=e[gt];i&&(n=(n?[n,...i]:[...i]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const ar=Symbol("_vod"),In={beforeMount(e,{value:n},{transition:t}){e[ar]=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):pt(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:i}){!n!=!t&&(i?n?(i.beforeEnter(e),pt(e,!0),i.enter(e)):i.leave(e,()=>{pt(e,!1)}):pt(e,n))},beforeUnmount(e,{value:n}){pt(e,n)}};function pt(e,n){e.style.display=n?e[ar]:"none"}function cu(e,n,t){const i=e.style,a=xe(t);if(t&&!a){if(n&&!xe(n))for(const r in n)t[r]==null&&Da(i,r,"");for(const r in t)Da(i,r,t[r])}else{const r=i.display;a?n!==t&&(i.cssText=t):n&&e.removeAttribute("style"),ar in e&&(i.display=r)}}const Wr=/\s*!important$/;function Da(e,n,t){if(z(t))t.forEach(i=>Da(e,n,i));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const i=gu(e,n);Wr.test(t)?e.setProperty($t(i),t.replace(Wr,""),"important"):e[i]=t}}const Vr=["Webkit","Moz","ms"],ea={};function gu(e,n){const t=ea[n];if(t)return t;let i=sn(n);if(i!=="filter"&&i in e)return ea[n]=i;i=Di(i);for(let a=0;a<Vr.length;a++){const r=Vr[a]+i;if(r in e)return ea[n]=r}return n}const Hr="http://www.w3.org/1999/xlink";function du(e,n,t,i,a){if(i&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(Hr,n.slice(6,n.length)):e.setAttributeNS(Hr,n,t);else{const r=oo(n);t==null||r&&!ps(t)?e.removeAttribute(n):e.setAttribute(n,r?"":t)}}function $u(e,n,t,i,a,r,s){if(n==="innerHTML"||n==="textContent"){i&&s(i,a,r),e[n]=t??"";return}const l=e.tagName;if(n==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=t;const f=l==="OPTION"?e.getAttribute("value"):e.value,u=t??"";f!==u&&(e.value=u),t==null&&e.removeAttribute(n);return}let o=!1;if(t===""||t==null){const f=typeof e[n];f==="boolean"?t=ps(t):t==null&&f==="string"?(t="",o=!0):f==="number"&&(t=0,o=!0)}try{e[n]=t}catch{}o&&e.removeAttribute(n)}function Gn(e,n,t,i){e.addEventListener(n,t,i)}function hu(e,n,t,i){e.removeEventListener(n,t,i)}const Kr=Symbol("_vei");function mu(e,n,t,i,a=null){const r=e[Kr]||(e[Kr]={}),s=r[n];if(i&&s)s.value=i;else{const[l,o]=bu(n);if(i){const f=r[n]=pu(i,a);Gn(e,l,f,o)}else s&&(hu(e,l,s,o),r[n]=void 0)}}const Yr=/(?:Once|Passive|Capture)$/;function bu(e){let n;if(Yr.test(e)){n={};let i;for(;i=e.match(Yr);)e=e.slice(0,e.length-i[0].length),n[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$t(e.slice(2)),n]}let na=0;const _u=Promise.resolve(),xu=()=>na||(_u.then(()=>na=0),na=Date.now());function pu(e,n){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Ze(wu(i,t.value),n,5,[i])};return t.value=e,t.attached=xu(),t}function wu(e,n){if(z(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(i=>a=>!a._stopped&&i&&i(a))}else return n}const Qr=/^on[a-z]/,ku=(e,n,t,i,a=!1,r,s,l,o)=>{n==="class"?uu(e,i,a):n==="style"?cu(e,t,i):qi(n)?Ma(n)||mu(e,n,t,i,s):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):yu(e,n,i,a))?$u(e,n,i,r,s,l,o):(n==="true-value"?e._trueValue=i:n==="false-value"&&(e._falseValue=i),du(e,n,i,a))};function yu(e,n,t,i){return i?!!(n==="innerHTML"||n==="textContent"||n in e&&Qr.test(n)&&L(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||Qr.test(n)&&xe(t)?!1:n in e}const ml=new WeakMap,bl=new WeakMap,pi=Symbol("_moveCb"),Jr=Symbol("_enterCb"),_l={name:"TransitionGroup",props:_e({},su,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=Vf(),i=rf();let a,r;return Ys(()=>{if(!a.length)return;const s=e.moveClass||`${e.name||"v"}-move`;if(!Cu(a[0].el,t.vnode.el,s))return;a.forEach(Su),a.forEach(Eu);const l=a.filter(qu);hl(),l.forEach(o=>{const f=o.el,u=f.style;un(f,s),u.transform=u.webkitTransform=u.transitionDuration="";const d=f[pi]=$=>{$&&$.target!==f||(!$||/transform$/.test($.propertyName))&&(f.removeEventListener("transitionend",d),f[pi]=null,xn(f,s))};f.addEventListener("transitionend",d)})}),()=>{const s=K(e),l=lu(s);let o=s.tag||Fe;a=r,r=n.default?Vs(n.default()):[];for(let f=0;f<r.length;f++){const u=r[f];u.key!=null&&ya(u,ka(u,l,i,t))}if(a)for(let f=0;f<a.length;f++){const u=a[f];ya(u,ka(u,l,i,t)),ml.set(u,u.el.getBoundingClientRect())}return be(o,null,r)}}},vu=e=>delete e.mode;_l.props;const Au=_l;function Su(e){const n=e.el;n[pi]&&n[pi](),n[Jr]&&n[Jr]()}function Eu(e){bl.set(e,e.el.getBoundingClientRect())}function qu(e){const n=ml.get(e),t=bl.get(e),i=n.left-t.left,a=n.top-t.top;if(i||a){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${i}px,${a}px)`,r.transitionDuration="0s",e}}function Cu(e,n,t){const i=e.cloneNode(),a=e[gt];a&&a.forEach(l=>{l.split(/\s+/).forEach(o=>o&&i.classList.remove(o))}),t.split(/\s+/).forEach(l=>l&&i.classList.add(l)),i.style.display="none";const r=n.nodeType===1?n:n.parentNode;r.appendChild(i);const{hasTransform:s}=$l(i);return r.removeChild(i),s}const wi=e=>{const n=e.props["onUpdate:modelValue"]||!1;return z(n)?t=>ri(n,t):n};function Fu(e){e.target.composing=!0}function es(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const st=Symbol("_assign"),Du={created(e,{modifiers:{lazy:n,trim:t,number:i}},a){e[st]=wi(a);const r=i||a.props&&a.props.type==="number";Gn(e,n?"change":"input",s=>{if(s.target.composing)return;let l=e.value;t&&(l=l.trim()),r&&(l=hi(l)),e[st](l)}),t&&Gn(e,"change",()=>{e.value=e.value.trim()}),n||(Gn(e,"compositionstart",Fu),Gn(e,"compositionend",es),Gn(e,"change",es))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,modifiers:{lazy:t,trim:i,number:a}},r){if(e[st]=wi(r),e.composing||document.activeElement===e&&e.type!=="range"&&(t||i&&e.value.trim()===n||(a||e.type==="number")&&hi(e.value)===n))return;const s=n??"";e.value!==s&&(e.value=s)}},ns={deep:!0,created(e,{value:n,modifiers:{number:t}},i){const a=Ci(n);Gn(e,"change",()=>{const r=Array.prototype.filter.call(e.options,s=>s.selected).map(s=>t?hi(ki(s)):ki(s));e[st](e.multiple?a?new Set(r):r:r[0])}),e[st]=wi(i)},mounted(e,{value:n}){ts(e,n)},beforeUpdate(e,n,t){e[st]=wi(t)},updated(e,{value:n}){ts(e,n)}};function ts(e,n){const t=e.multiple;if(!(t&&!z(n)&&!Ci(n))){for(let i=0,a=e.options.length;i<a;i++){const r=e.options[i],s=ki(r);if(t)z(n)?r.selected=uo(n,s)>-1:r.selected=n.has(s);else if(Ri(ki(r),n)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function ki(e){return"_value"in e?e._value:e.value}const Ru=_e({patchProp:ku},ru);let is;function zu(){return is||(is=If(Ru))}const Nu=(...e)=>{const n=zu().createApp(...e),{mount:t}=n;return n.mount=i=>{const a=Iu(i);if(!a)return;const r=n._component;!L(r)&&!r.render&&!r.template&&(r.template=a.innerHTML),a.innerHTML="";const s=t(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},n};function Iu(e){return xe(e)?document.querySelector(e):e}var Bu=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let xl;const Zi=e=>xl=e,pl=Symbol();function Ra(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Ft;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Ft||(Ft={}));function ju(){const e=ys(!0),n=e.run(()=>wn({}));let t=[],i=[];const a=Ii({install(r){Zi(a),a._a=r,r.provide(pl,a),r.config.globalProperties.$pinia=a,i.forEach(s=>t.push(s)),i=[]},use(r){return!this._a&&!Bu?i.push(r):t.push(r),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return a}const wl=()=>{};function as(e,n,t,i=wl){e.push(n);const a=()=>{const r=e.indexOf(n);r>-1&&(e.splice(r,1),i())};return!t&&vs()&&go(a),a}function Yn(e,...n){e.slice().forEach(t=>{t(...n)})}const Pu=e=>e();function za(e,n){e instanceof Map&&n instanceof Map&&n.forEach((t,i)=>e.set(i,t)),e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const i=n[t],a=e[t];Ra(a)&&Ra(i)&&e.hasOwnProperty(t)&&!$e(i)&&!qn(i)?e[t]=za(a,i):e[t]=i}return e}const Tu=Symbol();function Mu(e){return!Ra(e)||!e.hasOwnProperty(Tu)}const{assign:pn}=Object;function Gu(e){return!!($e(e)&&e.effect)}function Lu(e,n,t,i){const{state:a,actions:r,getters:s}=n,l=t.state.value[e];let o;function f(){l||(t.state.value[e]=a?a():{});const u=Mo(t.state.value[e]);return pn(u,r,Object.keys(s||{}).reduce((d,$)=>(d[$]=Ii(ir(()=>{Zi(t);const m=t._s.get(e);return s[$].call(m,m)})),d),{}))}return o=kl(e,f,n,t,i,!0),o}function kl(e,n,t={},i,a,r){let s;const l=pn({actions:{}},t),o={deep:!0};let f,u,d=[],$=[],m;const p=i.state.value[e];!r&&!p&&(i.state.value[e]={}),wn({});let v;function O(E){let C;f=u=!1,typeof E=="function"?(E(i.state.value[e]),C={type:Ft.patchFunction,storeId:e,events:m}):(za(i.state.value[e],E),C={type:Ft.patchObject,payload:E,storeId:e,events:m});const M=v=Symbol();ji().then(()=>{v===M&&(f=!0)}),u=!0,Yn(d,C,i.state.value[e])}const X=r?function(){const{state:C}=t,M=C?C():{};this.$patch(Y=>{pn(Y,M)})}:wl;function T(){s.stop(),d=[],$=[],i._s.delete(e)}function V(E,C){return function(){Zi(i);const M=Array.from(arguments),Y=[],q=[];function H(Z){Y.push(Z)}function fe(Z){q.push(Z)}Yn($,{args:M,name:E,store:U,after:H,onError:fe});let ke;try{ke=C.apply(this&&this.$id===e?this:U,M)}catch(Z){throw Yn(q,Z),Z}return ke instanceof Promise?ke.then(Z=>(Yn(Y,Z),Z)).catch(Z=>(Yn(q,Z),Promise.reject(Z))):(Yn(Y,ke),ke)}}const R={_p:i,$id:e,$onAction:as.bind(null,$),$patch:O,$reset:X,$subscribe(E,C={}){const M=as(d,E,C.detached,()=>Y()),Y=s.run(()=>St(()=>i.state.value[e],q=>{(C.flush==="sync"?u:f)&&E({storeId:e,type:Ft.direct,events:m},q)},pn({},o,C)));return M},$dispose:T},U=Ni(R);i._s.set(e,U);const le=(i._a&&i._a.runWithContext||Pu)(()=>i._e.run(()=>(s=ys()).run(n)));for(const E in le){const C=le[E];if($e(C)&&!Gu(C)||qn(C))r||(p&&Mu(C)&&($e(C)?C.value=p[E]:za(C,p[E])),i.state.value[e][E]=C);else if(typeof C=="function"){const M=V(E,C);le[E]=M,l.actions[E]=C}}return pn(U,le),pn(K(U),le),Object.defineProperty(U,"$state",{get:()=>i.state.value[e],set:E=>{O(C=>{pn(C,E)})}}),i._p.forEach(E=>{pn(U,s.run(()=>E({store:U,app:i._a,pinia:i,options:l})))}),p&&r&&t.hydrate&&t.hydrate(U.$state,p),f=!0,u=!0,U}function Zu(e,n,t){let i,a;const r=typeof n=="function";typeof e=="string"?(i=e,a=r?t:n):(a=e,i=e.id);function s(l,o){const f=Cf();return l=l||(f?qt(pl,null):null),l&&Zi(l),l=xl,l._s.has(i)||(r?kl(i,n,a,l):Lu(i,a,l)),l._s.get(i)}return s.$id=i,s}var He={},ta=globalThis&&globalThis.__awaiter||function(e,n,t,i){function a(r){return r instanceof t?r:new t(function(s){s(r)})}return new(t||(t=Promise))(function(r,s){function l(u){try{f(i.next(u))}catch(d){s(d)}}function o(u){try{f(i.throw(u))}catch(d){s(d)}}function f(u){u.done?r(u.value):a(u.value).then(l,o)}f((i=i.apply(e,n||[])).next())})},ia=globalThis&&globalThis.__generator||function(e,n){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,a,r,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(f){return function(u){return o([f,u])}}function o(f){if(i)throw new TypeError("Generator is already executing.");for(;t;)try{if(i=1,a&&(r=f[0]&2?a.return:f[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,f[1])).done)return r;switch(a=0,r&&(f=[f[0]&2,r.value]),f[0]){case 0:case 1:r=f;break;case 4:return t.label++,{value:f[1],done:!1};case 5:t.label++,a=f[1],f=[0];continue;case 7:f=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!(r=r.length>0&&r[r.length-1])&&(f[0]===6||f[0]===2)){t=0;continue}if(f[0]===3&&(!r||f[1]>r[0]&&f[1]<r[3])){t.label=f[1];break}if(f[0]===6&&t.label<r[1]){t.label=r[1],r=f;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(f);break}r[2]&&t.ops.pop(),t.trys.pop();continue}f=n.call(e,t)}catch(u){f=[6,u],a=0}finally{i=r=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}};He.__esModule=!0;He.PdfTeXEngine=He.CompileResult=He.EngineStatus=void 0;var Je;(function(e){e[e.Init=1]="Init",e[e.Ready=2]="Ready",e[e.Busy=3]="Busy",e[e.Error=4]="Error"})(Je=He.EngineStatus||(He.EngineStatus={}));var Xu="swiftlatexpdftex.js",yl=function(){function e(){this.pdf=void 0,this.status=-254,this.log="No log"}return e}();He.CompileResult=yl;var Ou=function(){function e(){this.latexWorker=void 0,this.latexWorkerStatus=Je.Init}return e.prototype.loadEngine=function(){return ta(this,void 0,void 0,function(){var n=this;return ia(this,function(t){switch(t.label){case 0:if(this.latexWorker!==void 0)throw new Error("Other instance is running, abort()");return this.latexWorkerStatus=Je.Init,[4,new Promise(function(i,a){n.latexWorker=new Worker(Xu),n.latexWorker.onmessage=function(r){var s=r.data,l=s.result;l==="ok"?(n.latexWorkerStatus=Je.Ready,i()):(n.latexWorkerStatus=Je.Error,a())}})];case 1:return t.sent(),this.latexWorker.onmessage=function(i){},this.latexWorker.onerror=function(i){},[2]}})})},e.prototype.isReady=function(){return this.latexWorkerStatus===Je.Ready},e.prototype.checkEngineStatus=function(){if(!this.isReady())throw Error("Engine is still spinning or not ready yet!")},e.prototype.compileLaTeX=function(){return ta(this,void 0,void 0,function(){var n,t,i=this;return ia(this,function(a){switch(a.label){case 0:return this.checkEngineStatus(),this.latexWorkerStatus=Je.Busy,n=performance.now(),[4,new Promise(function(r,s){i.latexWorker.onmessage=function(l){var o=l.data,f=o.cmd;if(f==="compile"){var u=o.result,d=o.log,$=o.status;i.latexWorkerStatus=Je.Ready,console.log("Engine compilation finish "+(performance.now()-n));var m=new yl;if(m.status=$,m.log=d,u==="ok"){var p=new Uint8Array(o.pdf);m.pdf=p}r(m)}},i.latexWorker.postMessage({cmd:"compilelatex"}),console.log("Engine compilation start")})];case 1:return t=a.sent(),this.latexWorker.onmessage=function(r){},[2,t]}})})},e.prototype.compileFormat=function(){return ta(this,void 0,void 0,function(){var n=this;return ia(this,function(t){switch(t.label){case 0:return this.checkEngineStatus(),this.latexWorkerStatus=Je.Busy,[4,new Promise(function(i,a){n.latexWorker.onmessage=function(r){var s=r.data,l=s.cmd;if(l==="compile"){var o=s.result,f=s.log;if(n.latexWorkerStatus=Je.Ready,o==="ok"){var u=s.pdf,d=new Blob([u],{type:"application/octet-stream"}),$=URL.createObjectURL(d);setTimeout(function(){URL.revokeObjectURL($)},3e4),console.log("Download format file via "+$),i()}else a(f)}},n.latexWorker.postMessage({cmd:"compileformat"})})];case 1:return t.sent(),this.latexWorker.onmessage=function(i){},[2]}})})},e.prototype.setEngineMainFile=function(n){this.checkEngineStatus(),this.latexWorker!==void 0&&this.latexWorker.postMessage({cmd:"setmainfile",url:n})},e.prototype.writeMemFSFile=function(n,t){this.checkEngineStatus(),this.latexWorker!==void 0&&this.latexWorker.postMessage({cmd:"writefile",url:n,src:t})},e.prototype.makeMemFSFolder=function(n){if(this.checkEngineStatus(),this.latexWorker!==void 0){if(n===""||n==="/")return;this.latexWorker.postMessage({cmd:"mkdir",url:n})}},e.prototype.flushCache=function(){this.checkEngineStatus(),this.latexWorker!==void 0&&this.latexWorker.postMessage({cmd:"flushcache"})},e.prototype.setTexliveEndpoint=function(n){this.latexWorker!==void 0&&(this.latexWorker.postMessage({cmd:"settexliveurl",url:n}),this.latexWorker=void 0)},e.prototype.closeWorker=function(){this.latexWorker!==void 0&&(this.latexWorker.postMessage({cmd:"grace"}),this.latexWorker=void 0)},e}();He.PdfTeXEngine=Ou;async function Uu(e){const n=new He.PdfTeXEngine;return await n.loadEngine(),n.writeMemFSFile("main.tex",e),n.setEngineMainFile("main.tex"),await n.compileLaTeX()}const Wu=[{uuid:"9667e1e4-0313-466b-96e2-97e98db9c375",author:"Claudio Paganini",title:"Uni Ravensburg Fakultät für Mathematik - Elementargeometrie",fields:[["MISC2","Text 2"],["MISC1","Text 1"],["DEADLINE","Abgabefrist"],["EXERCISETITLE","Exercise Title"],["FACH","Fach"],["UNI","Universität"],["DOZENT","Dozent"],["INITAUFGCNT","Initiale Aufgabennummer"],["HEADERS",""],["EXERCISES",""]],content:`% no exercises will ever be written in this file. This is essentially
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
`}],Vu=[{uuid:"e1ac4414-8587-40f6-a1c6-13d7d452a779",author:"Claudio Paganini",content:`\\usepackage{amsmath,amssymb,amsthm}%these packages provide the basic mathsymbols
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
`}],Hu=[{uuid:"0268c237-5a8a-46ad-89ee-c3983969488a",title:["Beschränkte Funktionen","Banach Raum"],tags:["Funktionalanalysis"],languages:["GermanExercise","GermanSolution"],semesterwoche:2,solution:"droptag",author:["Prof. Dr. Helmut Abels"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`


\\aufgabe{} 


\\begin{taggedblock}{EnglishExercise}
Sei~$X$ eine Menge und~\${(Y,|\\cdot|_Y)}$ ein Banach Raum. Für jede Abbildung~\${f: X \\rightarrow Y}$, sei
    \\[
    \\abs{f}_\\infty := \\sup_{x \\in X} |f(x)|_Y \\in [0,\\infty] \\,.
    \\]
Sei zudem~\${\\abs{\\cdot}_\\infty}$ die \\emph{Supremumsnorm}. Sei
$$\\ell^\\infty(X;Y) = \\{ f: X \\rightarrow Y \\mid \\abs{f}_\\infty <
\\infty \\}$$ die Menge der beschränkten,~$Y$-wertigen Funktionen auf~$X$.
\\begin{enumerate}
    \\item Zeigen Sie, dass~$(\\ell^\\infty(X;Y), \\abs{\\cdot}_\\infty)$
	ein Banach Raum ist.
    {\\vspace{0.1cm}\\par\\noindent\\textit{Hinweis}:}
    Verwenden Sie die Vollständigkeit von~$Y$, um einen Kandidaten~$f$ für den Grenzwert einer Cauchy Folge~$f_n$ zu erhalten. Schätzen Sie dann~
    $|f_n(x) - f_m(x)|$ ab und betrachten Sie den Grenzwert für~$n \\rightarrow \\infty$, um Informationen über~$f$ zu erhalten.

    \\item Sei nun~$X$ ein topologischer Raum sei und sei
    $\\mathcal{C}_b(X;Y):= \\left\\{ f \\in \\ell^\\infty(X;Y) \\mid f \\textrm{ ist stetig} \\right\\}$
	der Raum der stetigen, beschränkten~$Y$-wertigen Funktionen.
	Zeigen Sie, dass $\\mathcal{C}_b(X;Y) \\subset \\ell^\\infty(X;Y)$
	ein (topologisch) abgeschlossener linearer Unterraum ist. Was sagt das über die Dichte an stetigen Abbildungen in den beschränkten Abbildungen aus?
\\end{enumerate}
\\end{taggedblock}




\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
    \\item Indem man die Dreiecksungleichung für~$|\\cdot|_Y$
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
    \\item Sei~$(f_n)$ eine Folge mit~\${f_n \\in \\mathcal{C}_b(X;Y)}$
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
\\end{enumerate} 
\\end{taggedblock}
`,preview:"0268c237-5a8a-46ad-89ee-c3983969488a.png"},{uuid:"9e5bf5fa-9edb-47a0-8da5-10e544994edd",title:[""],tags:["Analysis 3","Ana3KfvxtV"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:3,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{EnglishExercise}

\\end{taggedblock}



\\begin{taggedblock}{EnglishSolution}
\\noindent \\emph{Solution.} 

\\end{taggedblock}`,preview:"9e5bf5fa-9edb-47a0-8da5-10e544994edd.png"},{uuid:"67ac1dce-5561-432d-a85f-32ef778b3889",title:["Degenerate PDE of 1st Order"],tags:["Partial Differential Equations 1","PDE1qu9OPX"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:3,solution:"droptag",author:["Prof. Dr. Helmut Abels"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`	
	
	
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
		In the present case the surface $S=\\R\\times\\left\\{0\\right\\}$ is characteristic for the differential operator $Lu=a\\partial_xu+t\\partial_tu$ since
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
`,preview:"67ac1dce-5561-432d-a85f-32ef778b3889.png"},{uuid:"96b98479-f3ca-4c44-bf8d-2dfb7af55d82",title:[""],tags:["Analysis 3","Ana3KfvxtV"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:3,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{EnglishExercise}

\\end{taggedblock}



\\begin{taggedblock}{EnglishSolution}
\\noindent \\emph{Solution.} 

\\end{taggedblock}`,preview:"96b98479-f3ca-4c44-bf8d-2dfb7af55d82.png"},{uuid:"b686755b-aaa8-45cf-8b3d-4301582a0018",title:["quasi-linear partial differential equation","Burgers-like Equations"],tags:["Partial Differential Equations 1","PDE1qu9OPX"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:3,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganin"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`	
	
	
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
	\\begin{enumerate}
		\\item Let~\${u\\in \\Cone\\left(\\R\\times\\left[0,T\\right]\\right)}$ be a (classical) solution. Show that~$u$ satisfies 
		\\begin{align*}
			u(x,t)&=u_0\\left(x-t\\cdot a\\left(u(x,t)\\right)\\right)&\\text{for all }x\\in\\R,t\\in\\left[0,T\\right).
		\\end{align*}
		\\item Prove that there exists a solution for all~$t>0$ if and only if~\${\\R\\ni s\\mapsto a\\left(u_0(s)\\right)\\in\\R}$ increasing (\\grqq monoton wachsend\\grqq).
	\\end{enumerate}\\ \\\\
	\\textit{Hint}: You can use that for~\${\\Phi:\\R^n\\rightarrow\\R^n}$ continuously differentiable and~$c>0$ such that
	\\begin{equation*}
		\\abs{\\Phi(x)-\\Phi(y)}\\geq c\\abs{x-y}\\qquad \\text{for all }x,y\\in\\R^n
	\\end{equation*} then~$\\Phi$ is a~$\\Cone$-diffeomorphism and~\${\\abs{D\\Phi(x)}\\leq\\frac{1}{c}}$ for all~$x\\in\\R^n$.
\\end{taggedblock}
	
		
\\begin{taggedblock}{EnglishSolution}
\\noindent \\emph{Solution.} 

\\begin{enumerate}
	\\item Let~$x\\in\\R$ and~$t\\in\\left[0,T\\right)$ be given. The characteristic ODEs are
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
\\item\\begin{itemize}
	\\item[\\grqq$\\Rightarrow$\\grqq:] Let~\${\\R\\ni s\\mapsto a\\left(u_0(s)\\right)\\in\\R}$ be increasing. Then for any~$t\\geq0$
\\begin{equation*}
	\\Phi_t:\\R\\rightarrow\\R\\ \\text{with } \\Phi_t\\left(x_0\\right):=x_0+ta\\left(u_0(x_0)\\right)
\\end{equation*}
is bijective since: For any~$x_1\\neq x_2$
\\begin{align*}
	\\Phi_t\\left(x_1\\right)-\\Phi_t\\left(x_2\\right)&=x_1-x_2+t\\left(a\\left(u_0\\left(x_1\\right)\\right)-a\\left(u_0\\left(x_2\\right)\\right)\\right)\\\\
	&=\\left(x_1-x_2\\right)\\underbrace{\\left(1+t\\frac{a\\left(u_0(x_1)\\right)-a\\left(u_0(x_2)\\right)}{x_1-x_2}\\right)}_{\\geq1}
\\end{align*}
and thus $\\abs{\\Phi_t(x_1)-\\Phi(t)}\\geq\\abs{x_1-x_2}$ for all $x_1,x_2\\in\\R$ and $t\\geq0$. Actually since $x\\mapsto a\\left(u_0(x)\\right)$ has a bounded derivative (due to~\${u_0\\in \\Cone_b\\left(\\R\\right)}$), there is some~$\\delta>0$ such that 
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
\\item[\\grqq$\\Leftarrow$\\grqq:] We prove this by contradiction. Assume that~\${\\R\\ni s\\mapsto a\\left(u_0(x_2)\\right)}$. Consider the time  
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
Hence~\${\\R\\ni s\\mapsto a\\left(u_0(s)\\right)\\in\\R}$ is increasing.
\\end{itemize}
\\end{enumerate}
\\end{taggedblock}
`,preview:"b686755b-aaa8-45cf-8b3d-4301582a0018.png"},{uuid:"dfb95944-54b3-44ac-ac73-b625a8310ec2",title:["Abschätzung","Lagrangeschen Basispolynome","interpolierende Polynome","scharfe Abschätzung"],tags:["Numerik 1","Num1fZ07Au"],languages:["GermanExercise","GermanSolution"],semesterwoche:8,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganin"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`	
	
\\aufgabe{} 
	
	
\\begin{taggedblock}{GermanExercise}
Sei~\${\\left[a,b\\right]\\subset\\R}$ ein Intervall und seien paarweise verschiedene Stützstellen~\${x_0,\\dots,x_n\\in\\left[a,b\\right]}$\\\\sowie~\${f_0,\\dots,f_n,\\eps_0,\\dots,\\eps_n\\in\\R}$ gegeben. Weiter sei~$p$ das interpolierende Polynom zu den\\\\Daten~\${\\left(x_i,f_i\\right)}$,~\${i=0,\\dots,n}$, mit~\${\\deg(p)\\leq n}$ und sei~$q$ das interpolierende Polynom zu den\\\\Daten~\${\\left(x_i,f_i+\\eps_i\\right)}$,~\${i=0,\\dots,n}$ mit~\${\\deg(q)\\leq n}$.
\\begin{enumerate}
	\\item Wir definieren
	\\begin{equation*}
        L_n:=\\sup\\limits_{x\\in\\left[a,b\\right]}\\sum\\limits_{j=0}^n\\abs{w_j(x)},
	\\end{equation*}
	wobei~\${w_j}$,~\${j=1,\\dots,n}$ die Lagrangeschen Basispolynome bezeichnen.\\\\
    Zeigen Sie, dass für~\${\\lvert p-q\\rvert_\\infty:=\\sup_{x\\in\\left[a,b\\right]}\\abs{p(x)-q(x)}}$ die Abschätzung 
	\\begin{equation*}
		\\lvert p-q\\rvert_\\infty\\leq L_n\\max\\limits_{0\\leq i\\leq n}\\abs{\\eps_i}
	\\end{equation*} gilt.
	\\item Zeigen Sie, dass die obige Abschätzung scharf ist, das heißt: Geben Sie zu beliebigen Werten~\${\\left(x_i,f_i\\right)\\in\\left[a,b\\right]\\times\\R}$ Zahlen~\${\\eps_0,\\dots\\eps_n}$ an, so dass in der obigen Abschätzung Gleichheit gilt und nicht alle~$\\eps_i$ gleich Null sind.
\\end{enumerate}
\\end{taggedblock}
	
	
	
	
\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 

\\begin{enumerate}
\\item Mit den Lagrangeschen Basispolynomen~$w_0,\\dots,w_n$ gilt
    \\begin{align*}
	   p&=\\sum\\limits_{j=0}^nf_jw_j&q&=\\sum\\limits_{j=0}^n\\left(f_j+\\eps_j\\right)w_j\\\\
	   \\Rightarrow p-q&=\\sum\\limits_{j=0}^n\\eps_jw_j\\\\
	   \\Rightarrow \\lvert p-q\\rvert_\\infty&=\\sup\\limits_{x\\in\\left[a,b\\right]}\\abs{p(x)-q(x)}\\\\
        &=\\sup\\limits_{x\\in\\left[a,b\\right]}\\abs{\\sum\\limits_{j=0}^n\\eps_jw_j(x)}\\\\
	   &\\leq\\sup\\limits_{x\\in\\left[a,b\\right]}\\sum\\limits_{j=0}^n\\abs{\\eps_j}\\abs{w_j(x)}\\\\
	   &\\leq\\max\\limits_{0\\leq i\\leq}\\abs{e_i}\\sup\\limits_{x\\in\\left[a,b\\right]}\\sum\\limits_{j=0}^n\\abs{w_j(x)}
    \\end{align*}
\\item  
    Sei $y\\in\\left[a,b\\right]$ so, dass $\\sum_{j=0}  ^n\\abs{w_j(y)}=\\sup_{x\\in\\left[a,b\\right]}\\sum_{j=0}^n\\abs{w_j(x)}$. Dieses existiert, da $\\left[a,b\\right]$ kompakt und die Summe stetig in $x$ ist.\\\\
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
    Somit folgt die Gleichheit.
\\end{enumerate}
\\end{taggedblock}
`,preview:"dfb95944-54b3-44ac-ac73-b625a8310ec2.png"},{uuid:"ef18f59c-19a5-45e7-81a0-0e224793aadd",title:["Weak Solutions of Conservation Laws"],tags:["Partial Differential Equations 1"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:3,solution:"droptag",author:["Prof. Dr. Helmut Abels"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`	
	
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
`,preview:"ef18f59c-19a5-45e7-81a0-0e224793aadd.png"},{uuid:"3198bf7a-2509-4634-9e9f-49fd0b303fa0",title:[""],tags:["Analysis 3","Ana3KfvxtV"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:3,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{EnglishExercise}

\\end{taggedblock}



\\begin{taggedblock}{EnglishSolution}
\\noindent \\emph{Solution.} 

\\end{taggedblock}`,preview:"3198bf7a-2509-4634-9e9f-49fd0b303fa0.png"},{uuid:"9056de5f-d87b-4b13-9526-fa686ecb0142",title:["Bounded Maps","Banach Space"],tags:["Funktionalanalysis"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:2,solution:"droptag",author:["Prof. Dr. Helmut Abels"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`


\\aufgabe{} 


\\begin{taggedblock}{EnglishExercise}
Let~$X$ be a set and~\${(Y,|\\cdot|_Y)}$ a Banach space. For every map~\${f: X \\rightarrow Y}$, define
\\[
\\abs{f}_\\infty := \\sup_{x \\in X} |f(x)|_Y \\in [0,\\infty] \\,.
\\]
Then~\${\\abs{\\cdot}_\\infty}$ is called \\emph{sup norm} (or uniform norm, in German \\emph{Supremumsnorm}). Let
$$\\ell^\\infty(X;Y) = \\{ f: X \\rightarrow Y \\mid \\abs{f}_\\infty <
\\infty \\}$$ be the space of bounded~$Y$-valued functions on~$X$.
\\begin{enumerate}
    \\item Show that~$(\\ell^\\infty(X;Y), \\abs{\\cdot}_\\infty)$
	is a Banach space.
    {\\vspace{0.1cm}\\par\\noindent\\textit{Hint}:}
    Use the completeness of~$Y$ to obtain a candidate~$f$ for the
    limit of a Cauchy sequence~$f_n$. Then estimate~
    $|f_n(x) - f_m(x)|$ and take the limit~$n \\rightarrow \\infty$ to 
    gain information about~$f$.

    \\item Assume now that~$X$ is a topological space and let 
    \\[\\mathcal{C}_b(X;Y)
    := \\{ f \\in \\ell^\\infty(X;Y) \\mid f \\textrm{ is continuous } \\} \\]
	be the space of continuous bounded~$Y$-valued functions.
	Show that~$\\mathcal{C}_b(X;Y) \\subset \\ell^\\infty(X;Y)$
	is a (topologically) closed linear subspace. What does
	this tell you about the denseness of the continuous functions
	in the bounded functions?
    \\end{enumerate}
\\end{taggedblock}




\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
    \\item By using the triangle inequality for~$|\\cdot|_Y$, it is immediately seen that~$\\ell^\\infty(X;Y)$ is a vector space and that ~$\\abs{\\cdot}_\\infty$ is a norm.


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
    \\item Let~$(f_n)$ be a sequence with $f_n \\in \\mathcal{C}_b(X;Y)$
    and~$f_n \\rightarrow f \\in \\ell^\\infty(X;Y)$ with respect to~$\\abs{\\cdot}_\\infty$. We need to show that~\${f \\in
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
\\end{enumerate}
\\end{taggedblock}
`,preview:"9056de5f-d87b-4b13-9526-fa686ecb0142.png"},{uuid:"d059375e-3c39-453d-90a9-0922197604f1",title:["interpolierende Polynome","Binomialkoeffizient"],tags:["Numerik 1","Num1KrofZ07Au"],languages:["GermanExercise","GermanSolution"],semesterwoche:8,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganin"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`	
	
	
	\\aufgabe{} 
	
	
	\\begin{taggedblock}{GermanExercise}
		Seien $a\\in\\R,h>0$ und eine Funktion $f:\\R\\rightarrow\\R$ gegeben, $x_i:=a+ih$ für $i=0,\\dots,n$. Sei $P\\left(f\\mid x_0,\\dots,x_n\\right)$ das interpolierende Polynom zu den Punkten $\\left(x_i,f\\left(x_i\\right)\\right),i=0,\\dots,n$,\\\\mit $\\deg\\left(P\\left(f\\mid x_0,\\dots,x_n\\right)\\right)\\leq n$ und sei $\\left[x_0,\\dots,x_n;h\\right]f$ der Koeffizient vor $x^n$ in $P\\left(f\\mid x_0,\\dots,x_n\\right)$. Zeigen Sie, dass dann
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
	Sei~\${x_i:=a+ih, i=0,\\dots,n}$
    \\begin{itemize}
        \\item $n=0$: r.S.=\${\\frac{1}{h^0\\cdot0!}\\binom{0}{0}(-1)^0f(x_0)=f(x_0)=\\left[x_0\\right]f}$
        \\item $n-1\\rightarrow n$:
        \\begin{align*}
			\\left[x_0,\\dots,x_n\\right]f=&\\frac{\\left[x_1,\\dots,x_n\\right]f-\\left[x_0,\\dots,x_{n-1}\\right]f}{x_n-x_0}\\\\
			&\\stackrel{I.V.}{=}\\underbrace{\\frac{1}{x_n-x_0}}_{=\\frac{1}{nh}}\\left(\\frac{1}{h^{n-1}(n-1)!}\\sum\\limits_{j=0}^{n-1}\\binom{n-1}{j}(-1)^{n-j-1}f(\\underbrace{x_1+jh}_{=x_0+(j+1)h})\\right.\\\\
			&\\left.-\\frac{1}{h^{n-1}(n-1)!}\\sum\\limits_{j=0}^{n-1}\\binom{n-1}{j}(-1)^{n-j-1}f(x_0+jh)\\right)\\\\
			=&\\frac{1}{h^nn!}\\left(\\sum\\limits_{j=1}^n\\binom{n-1}{j-1}(-1)^{n-j}f(x_0+jh)-\\sum\\limits_{j=0}^{n-1}\\binom{n-1}{j}(-1)^{n-1-j}f(x_0+jh)\\right)\\\\
			=&\\frac{1}{h^nn!}\\Big(\\sum\\limits_{j=1}^{n-1}\\left(\\binom{n-1}{j-1}+\\binom{n-1}{j}\\right)(-1)^{n-j}f(x_0+jh)\\\\&+f(x_0+jh)+(-1)^nf(x_0)\\Big)\\\\
			=&\\frac{1}{h^nn!}\\sum\\limits_{j=0}^n\\binom{n}{j}(-1)^{n-j}f(x_0+jh)
        \\end{align*}
    \\end{itemize}
    \\hfill$\\square$
\\end{taggedblock}
`,preview:"d059375e-3c39-453d-90a9-0922197604f1.png"},{uuid:"b16fce05-da6a-4c49-81e1-6b0183326147",title:[""],tags:["Analysis 3","Ana3KfvxtV"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:3,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{EnglishExercise}

\\end{taggedblock}



\\begin{taggedblock}{EnglishSolution}
\\noindent \\emph{Solution.} 

\\end{taggedblock}`,preview:"b16fce05-da6a-4c49-81e1-6b0183326147.png"},{uuid:"",title:["sigma-algebra","sigma","messbar","messbare Funktion"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:1,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $\\mathcal{A}$ eine Familie an Teilmengen $A\\subset \\mathbb{Z}$ welche folgende Bedingung erfüllen:
$$
2n\\in A\\quad \\mbox{genau dann wenn}\\quad 2n+1\\in A\\quad\\mbox{für alle } n\\ge 1
$$
\\begin{enumerate}
	\\item Zeigen Sie, dass $\\mathcal{A}$ eine $\\sigma$-algebra ist.
	\\item Zeigen Sie, dass die bijektive Abbildung $f:\\mathbb{Z}\\ni n\\mapsto n+2 \\in\\mathbb{Z}$ messbar ist, jedoch nicht $f^{-1}$.
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} %% LÖSUNG PASST NICHT ZU AUFGABEN %%
Da die leere Menge abzählbar ist, sind $\\emptyset$ und $\\R$ in $M$ enthalten.\\\\
Falls $A\\in M$, dann auch das Komplement $A^c$, denn entweder ist $A^c = R\\setminus A$ abzählbar oder $R\\setminus A^c = A$.\\\\
Sei $\\left\\{A_i\\right\\}_{i\\in\\N}$ eine Familie von Elementen von $M$. Dann sind entweder alle $A_i$ abzählbar. Dann ist auch deren Vereinigung $V := \\bigcup_{i\\in\\N} A_i$ als abzählbare Vereinigung abzählbarer Mengen abzählbar, und somit ist $V$ in $M$ enthalten. Oder es gibt ein $k\\in\\N$ mit $A_k$ überabzählbar, aber $R\\setminus A_k$ abzählbar. Dann ist $$R\\setminus V = \\left( \\bigcup_{i\\in\\N} A_i \\right)^c = \\bigcap_{i\\in\\N} A^c_i \\subset A^c_k = R\\setminus A_k,$$ womit $R\\setminus V$ abzählbar und somit $V$ in $M$ enthalten ist. Folglich sind abzählbare Vereinigung von Elementen von $M$ ebenfalls in $M$ enthalten.\\\\
Es folgt, dass $\\mathcal{A}$ eine $\\sigma$-Algebra auf $\\R$ definiert.
Weiterhin ist $\\mu$ als Funktion auf $\\mathcal{A}$ wegen der Definition von $\\mathcal{A}$ offenbar wohldefiniert, da wegen der überabzählbarkeit von $R$ sicher nicht $A$ und $R\\setminus A$ abzählbar sein können, und $\\mu(\\emptyset) = 0$. Es verbleibt also die $\\sigma$-Additivität von $\\mu$ zu zeigen. Sei also $\\left\\{A_i\\right\\}_{i\\in\\N}$ eine Familie von paarweise disjunkten Elementen von $M$. Sind alle $A_i$ abzählbar, so auch deren Vereinigung $V$ und somit ist $\\mu(V )=0=\\sum_{i=1}^\\infty\\mu(A_i).$ Gibt es genau ein $k\\in\\N$, sodass $R\\setminus A_k$ abzählbar ist, so ist $$R\\setminus V =\\bigcup_{i\\in\\N} \\R\\setminus A_i \\subset R\\setminus A_k$$
und somit abzählbar, womit $$\\mu(V) = 1 = \\sum_{i=1}^\\infty \\mu(A_i),$$ da $\\mu(A_k) = 1$ und $\\mu(A_i) = 0$ für alle $i \\neq k$.
Es ist jedoch nicht möglich, dass es zwei Mengen $A_k,A_l$ derart gibt, dass $R\\setminus A_k$ und $R\\setminus A_l$ abzählbar sind. Denn da die $A_i$ disjunkt sind, gilt 
$$\\emptyset = A_k \\cap A_l =\\left( A^c_l \\cup A^c_k \\right)^c,$$ also $A^c_l \\cup A^c_k = \\R$, was nicht
erfüllbar ist, wenn $A^c_l$ und $A^c_k$ abzählbar sind.\\\\
Daraus folgt die $\\sigma$-Additivität von $\\mu$, womit $\\mu$ ein Maß auf $M$ definiert.
\\end{taggedblock}`,preview:".png"},{uuid:"9f1d6591-3bd4-4e52-9fa3-7a1ad3c70a4e",title:["Basispolynome","Interpolationspolynom","Newtonsche Darstellung","Rekursionsformel","Aitken","Neville"],tags:["Numerik 1","Num1fZ07Au"],languages:["GermanExercise","GermanSolution"],semesterwoche:8,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganin"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`	
	
	
	\\aufgabe{} 
	
	
\\begin{taggedblock}{GermanExercise}
	Gegeben seien die Werte \\begin{tabular}{c|cccc}
		$x_i$&1&2&4&8\\\\\\hline
		$f_i$&7&1&3&0
	\\end{tabular}
\\begin{enumerate}
	\\item Geben Sie die Lagrangeschen Basisplynome~\${w_j,j=0,\\dots3}$ an und berechnen Sie daraus das interpolierende Polynom~$p$ mit~\${\\deg(p)\\leq3}$ zu den Punkten~\${\\left(x_i,f_i\\right),i=0,\\dots,3}$.
	\\item Bestimmen Sie de Koeffizienten~\${d_k,k=0,\\dots,3}$ der Newtonschen Darstellung des interpolierenden Polynoms
	\\begin{equation*}
		p(x)=d_0+d_1\\left(x-x_0\\right)+d_2\\left(x-x_0\\right)\\left(x-x_1\\right)+d_3\\left(x-x_0\\right)\\left(x-x_1\\right)\\left(x-x_2\\right).
	\\end{equation*}
	\\item Werten Sie mit Hilfe der Rekursionsformel von Aitken und Neville das interpolierende Polynom~$p$ an der Stelle~$x=5$ aus. Geben Sie dabei alle Zwischenergebnisse des Rechenschemas an.
\\end{enumerate}
\\end{taggedblock}
	
		
\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 

	Gegeben seien die Werte \\begin{tabular}{c|cccc}
		$x_i$&1&2&4&8\\\\\\hline
		$f_i$&7&1&3&0
	\\end{tabular}
\\begin{enumerate}
	\\item
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
	\\item
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
	\\item Sei~$x=5$ und nutze Neville-Aitken:
	\\begin{align*}
		p_{ii}&=f_i, i=0,\\dots,3\\\\
		p_{i_0i_1\\dots i_{k-1}i_k}&=p_{i_1\\dots i_k}+\\frac{x_{i_k}-x}{x_{i_k}-x_{i_0}}\\left(p_{i_0\\dots i_{k-1}}-p_{i_1\\dots i_k}\\right)
	\\end{align*}
    \\begin{figure}
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
    \\end{figure}
\\end{enumerate}
\\end{taggedblock}
`,preview:"9f1d6591-3bd4-4e52-9fa3-7a1ad3c70a4e.png"},{uuid:"bbf6c665-8810-4780-8f3d-b8cc0296b996",title:["right-continuous","distribution","measure"],tags:["Analysis 3","Ana3KfvxtV"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:2,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{EnglishExercise}
A function $F:\\R\\rightarrow\\R$ is called right-continuous if for all $p\\in\\R$ and every monotonically decreasing sequence $(x_n)_{n\\in\\N}$ with $\\lim_{n\\rightarrow\\infty}x_n=p$ it holds: $\\lim_{n\\rightarrow\\infty}F(x_n)=F(p)$. 
\\begin{enumerate}
    \\item Let $\\mu$ be a measure on $\\R$ and $\\mu(\\R)<\\infty$. Show that $$F(x):=\\mu\\big((-\\infty,x]\\big)$$ defines a right-continuous, monotonically increasing function $F:\\R\\rightarrow\\R$, the so-called \\textit{distribution} of $\\mu$. 
    \\item Conversely, let $F:\\R\\rightarrow\\R$ be monotonically increasing and right-continuous. Show that the finite disjoint unions of intervals of the form $(a,b]$ form a set algebra $\\mathcal{A}$ on $\\R$, and that 
    $$\\mu\\big((a,b]\\big):=F(b)-F(a)$$ defines a pre-measure on $\\mathcal{A}$.
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{EnglishSolution}
\\noindent \\emph{Solution.} 
\\begin{enumerate}
    \\item Let $(x_n)_{n\\in\\N}$ be  a convergent decreasing sequence with $\\lim_{n\\to +\\infty}x_n=p$. Since $(x_n)_{n\\in\\N}$ is decreasing, we have $(x_n,+\\infty)\\customsubset (x_{n+1},+\\infty)$ for any $n\\in \\N$. Thus, $\\bigcup_{n\\in\\N}(x_n,+\\infty)=(p,+\\infty)$ and $\\lim_{n\\to+\\infty}\\mu((x_n,+\\infty))=\\mu((p,+\\infty))$.
    \\footnote{To show that $\\lim_{n\\to+\\infty}\\mu((x_n,+\\infty))=\\mu((p,+\\infty))$, we consider $B_n=(x_{n+1},x_n)$ for any $n\\geq 1$ and $B_0=(x_0,+\\infty)$. The $B_n$'s satisfy the following: $B_n\\cap B_m=\\emptyset$ for any $n\\neq m$, $(x_n,+\\infty)=\\bigcup_{m=0}^nB_m$, $\\bigcup_{n\\in\\N}B_n=(p,+\\infty)$. Hence $\\mu((x_n,+\\infty))=\\mu(\\bigcup_{m=0}^nB_m)=\\sum_{m=0}^n\\mu(B_m)$. Taking the limit, we obtain $\\lim_{n\\to+\\infty}\\mu((x_n,+\\infty)=\\sum_{m=0}^{+\\infty}\\mu(B_m)=\\mu(\\bigcup_{m\\in\\N}B_m)=\\mu((p,+\\infty))$.} 

    Using the fact that $\\mu(\\R)=F(x_n)+\\mu((x_n,+\\infty))$, we obtain
    $$\\lim_{n\\to+\\infty}F(x_n)=\\mu(\\R)- \\lim_{n\\to+\\infty}\\mu((x_n,+\\infty))=\\mu(\\R)-\\mu((p,+\\infty))=F(p).$$
    $F$ is then right continuous. Let $x$ and $y$ two real numbers, such that $x<y$. Hence $(-\\infty,x]\\customsubset (-\\infty,y]$. It follows that $F(x)=\\mu((-\\infty,x])\\leq\\mu((-\\infty,y])=F(y)$. The function $F$ is increasing.
    
    \\item To prove that $\\mathcal A$ is a field, we have to show that $\\emptyset\\in \\mathcal A$ and if $A, B\\in \\mathcal A$, then $A\\cup B$, $A\\cap B$ and $A\\setminus B$ are also in $\\mathcal A$. By definition of $\\mathcal A$, it is sufficient to show that these assertions hold for $A=(a,b]$ and $ B=(c,d]$.  \\\\
    We have $\\emptyset=(a,a]\\in \\mathcal A$.  We check that 
    \\begin{itemize}
        \\item If $c\\geq b\\text{ or }a\\geq d$, $(a,b]\\cup(c,d]=(a,b]\\cup(c,d], (a,b]\\cap(c,d]=\\emptyset$ and $(a,b]\\setminus(c,d]=(a,b]$.
        \\item If $ a\\leq c\\leq d\\leq b$, then $(a,b]\\cup(c,d]=(a,b], (a,b]\\cap(c,d]=(c,d]$ and $(a,b]\\setminus(c,d]=(a,c]\\cup(d,b]$.
        \\item If $c\\leq a\\leq b\\leq d$, then $(a,b]\\cup(c,d]=(c,d], (a,b]\\cap(c,d]=(a,b]$ and $(a,b]\\setminus(c,d]=\\emptyset$.
        \\item If $a\\leq c \\leq b\\leq d$, then $(a,b]\\cup(c,d]=(a,d]$, $(a,b]\\cap(c,d]=(c,b]$ and $(a,b]\\setminus(c,d]=(a,c]$.
        \\item If $c\\leq a\\leq d\\leq b$, then $(a,b]\\cup(c,d]=(c,b]$, $(a,b]\\cap(c,d]=(a,d]$ and $(a,b]\\setminus(c,d]=(d,b]$.
    \\end{itemize}                      
    We conclude that $\\mathcal A$ is a field.\\\\
    By definition $\\mu((a,b])=F(b)-F(a)$, where $F$ is an increasing right continuous function. Hence, $\\mu((a,b])\\geq 0$. $\\mu(\\emptyset)=\\mu((a,a])=0$. 
    Let $\\{A_i\\}_{i\\in\\N}$ be a family of disjoint sets in $\\mathcal A$. Without loss of generality, we can suppose that there exists two real sequences $(a_i)_{i\\in\\N}$, $(b_i)_{i\\in\\N}$ such that for any $i\\in\\N$,   $A_i=(a_i,b_i]$ and $b_{i+1}\\leq a_i\\leq b_{i}$. We assume that $\\bigcup_{i\\in\\N}(a_i,b_i]$ belongs to $\\mathcal A$. Without loss of generality, we assume also that $\\bigcup_{i\\in\\N}(a_i,b_i]$ is an interval $(a,b]$. Thus, for any integer $i$, $a_i=b_{i+1}$, $b_0=b$ and the sequences $(b_i)_{i\\in\\N}$, $(a_i)_{i\\in\\N}$ converge to $a$. Note that $(b_i)_{i\\in\\N}$ is decreasing and $(a_i)_{i\\in\\N}$ is completely determined by $(b_i)_{i\\in\\N}$. On the other hand, set 
    $$B_n:=(a,b]\\setminus \\bigcup_{i=0}^{n-1}(b_{i+1},b_{i}]=(a,b_{n}].$$
    By definition, $\\mu(B_n)=F(b_n)-F(a)$. The function $F$ is right continuous, it implies that $\\lim_{n\\to+\\infty}F(b_n)=F(a)$. Hence   $\\lim_{n\\to+\\infty}\\mu(B_n)=0$. Note that 
    $$\\mu((a,b])=\\mu(B_n)+\\mu(\\bigcup_{i=0}^{n-1}(b_{i+1},b_{i}])=\\mu(B_n)+\\sum_{i=0}^{n-1}\\mu((b_{i+1},b_{i}]).$$
    When $n$ tends to $+\\infty$, we obtain $\\mu((a,b])=\\sum_{i=0}^{+\\infty}\\mu((b_{i+1},b_{i}])$.
\\end{enumerate}
\\end{taggedblock}`,preview:"bbf6c665-8810-4780-8f3d-b8cc0296b996.png"},{uuid:"adcab138-02f6-4bb9-a4d3-adce212edacc",title:["sigma-algebra","push-forward"],tags:["Analysis 3","Ana3KfvxtV"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:0,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{EnglishExercise}
Let $\\mathcal{M}$ be a $\\sigma$-algebra on the set $X$ and let $f:X\\rightarrow Y$ be a function between $X$ and a set $Y$. The family of subsets of $Y$ defined by
$$
f_*(\\mathcal{M}):=\\{ B\\customsubset Y\\:|\\: f^{-1}(B)\\in\\mathcal{M} \\}\\customsubset\\mathcal{P}(Y)
$$
is called the \\textit{push-forward} of $\\mathcal{M}$ on $Y$. Show that $f_*(\\mathcal{M})$ is a $\\sigma$-algebra.
\\vspace{0.3cm}

\\emph{Caution! } Why is $f(\\mathcal{M}):=\\{f(A)\\:|\\: A\\in\\mathcal{M} \\}$ not a good definition of push-forward?
\\end{taggedblock}



\\begin{taggedblock}{EnglishSolution}
\\noindent \\emph{Solution.} 
Let us check the three axioms that any $\\sigma$-algebra must satisfy.
\\begin{enumerate}
	\\item From $\\emptyset\\in\\mathcal{M}$ and $f^{-1}(\\emptyset)=\\emptyset$, we see that $\\emptyset\\in f_*(\\mathcal{M})$.
	\\item Let $B\\in f_*(\\mathcal{M})$, we want to show that $Y\\setminus B\\in f_*(\\mathcal{M})$. Exploiting point (iii) of Exercise 1 we have
	$$
	f^{-1}(Y\\setminus B)=f^{-1}(Y)\\setminus f^{-1}(B)=X\\setminus f^{-1}(B).  
	$$
	Given that $f^{-1}(B)\\in\\mathcal{M}$, we have also $X\\setminus f^{-1}(B)\\in\\mathcal{M}$. This implies $Y\\setminus B\\in f_*(\\mathcal{M})$, by definition of $f_*(\\mathcal{M})$.
	\\item Let us take any $\\{B_i \\}_{i\\in I}\\customsubset f_*(\\mathcal{M})$ and prove that $\\bigcup_{i\\in I}B_i\\in f_*(\\mathcal{M})$. Exploiting point (i) of Exercise 1 we see that
	$$
	f^{-1}\\left(\\bigcup_{i\\in I}B_i\\right)=\\bigcup_{i\\in I}f^{-1}(B_i)
	$$ 
	Given that $f^{-1}(B_i)\\in\\mathcal{M}$ for any $i\\in I$, we have also $\\bigcup_{i\\in I}f^{-1}(B_i)\\in \\mathcal{M}$. This implies $\\bigcup_{i\\in I}B_i\\in f_*(\\mathcal{M})$, by definition of $f_*(\\mathcal{M})$.
\\end{enumerate}
\\vspace{0.2cm}

The failure of $f(\\mathcal{M})$ from defining a $\\sigma$-algebra is that, in general, this is not closed under the set-complement operation. Indeed, in the general case, if $A\\customsubset X$, we merely have:
$$
Y\\setminus f(A)\\supseteq f(X)\\setminus f(A)\\customsubset f(X\\setminus A).
$$
\\end{taggedblock}`,preview:"adcab138-02f6-4bb9-a4d3-adce212edacc.png"},{uuid:"5cd9d6f7-e587-4f5c-a3a0-c20327683476",title:["measure space","measurable"],tags:["Analysis 3","Ana3KfvxtV"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:2,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{EnglishExercise}
Let $X$ be a measure space and $f_n:X\\rightarrow\\R$ be a sequence of measurable functions. Show that the set~$A:={\\{x\\in X\\,|\\,(f_n(x))_{n\\in\\N}\\text{ konvergiert}\\}}$ is measurable.
\\end{taggedblock}



\\begin{taggedblock}{EnglishSolution}
\\noindent \\emph{Solution.} 
Let $F$ be a function defined as follows:
\\begin{align*}
    F: X & \\longrightarrow \\bar\\R^2\\\\
     x & \\longmapsto (\\liminf_{n\\to +\\infty}f_n(x), \\limsup_{n\\to +\\infty}f_n(x)).
\\end{align*}
We know that the functions $\\liminf_{n\\to +\\infty}f_n$ and $\\limsup_{n\\to +\\infty}f_n$ are measurable. The function $F$ is then measurable. \\\\
The set $A$ defined above can be written as follows:
\\begin{align*}
A & =  \\{x\\in X \\;\\vert\\; \\liminf_{n\\to +\\infty}f_n(x)=\\limsup_{n\\to +\\infty}f_n(x)<+\\infty\\}\\\\
   & = F^{-1}(\\{(x,x)\\in \\R^2\\}).
\\end{align*}
Note that the set $\\{(x,x)\\in \\R^2\\}$ is measurable. It follows that $A$ is measurable.
\\end{taggedblock}`,preview:"5cd9d6f7-e587-4f5c-a3a0-c20327683476.png"},{uuid:"ef0730bf-cf59-4f10-b28c-f76b8393795d",title:["preimage"],tags:["Analysis 3","Ana3KfvxtV"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:0,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{EnglishExercise}
Let $f : X \\rightarrow Y$ be a function between two sets $X, Y$. The preimage of any subset $E \\customsubset Y$ is defined by
$$f^{-1}(E) := \\{x\\in X \\mid f(x) \\in E\\} \\customsubset X.$$
Let $E, F, \\{Ei\\}_{i\\in I}$ be subsets of $Y$ and $A, B, \\{Ai\\}_{i\\in I}$ be subsets of $X$. Prove the following points:
\\begin{enumerate}
    \\item $f^{-1} (\\bigcup_{i\\in I} E_i ) = \\bigcup_{i\\in I} f^{-1}(E_i)$
    \\item $f^{-1} (\\bigcap_{i\\in I} E_i ) = \\bigcap_{i\\in I} f^{-1}(E_i)$
    \\item $f^{-1}(F \\setminus E) = f^{-1}(F) \\setminus f^{-1}(E)$
    \\item $f (\\bigcup_{i\\in I} A_i ) = \\bigcup_{i\\in I} f (A_i)$
    \\item $f (\\bigcap_{i\\in I} A_i ) \\customsubset \\bigcap_{i\\in I} f (A_i)$ ($=$ if $f$ is injective)
    \\item $f (B) \\setminus f (A) \\customsubset f (B \\setminus A)$ ($=$ if $f$ is injective)
    \\item $A \\customsubset f^{-1}(f (A))$ ($=$ if $f$ is injective)
    \\item $f (f^{-1}(E)) \\customsubset E$ ($=$ if $f$ is surjective)
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{EnglishSolution}
\\noindent \\emph{Solution.} 
\\begin{enumerate}
	\\item Let us start with the proof of $f^{-1}\\left(\\bigcup_{i\\in I}E_i\\right)\\customsubset\\bigcup_{i\\in I}f^{-1}(E_i)$. If the set $f^{-1}\\left(\\bigcup_{i\\in I}E_i\\right)$ is empty, then the inclusion is trivially satisfied. So, suppose this set is not empty and take any $x\\in f^{-1}(\\bigcup_{i\\in I}E_i)$, then, by definition of preimage, we have $f(x)\\in \\bigcup_{i\\in I}E_i$. This means that there exists at least one index $j\\in I$ such that $f(x)\\in E_j$, or equivalently, that $x\\in f^{-1}(E_j)$. In particular, this gives $x\\in\\bigcup_{i\\in I}f^{-1}(E_i)$. To conclude the proof, let us prove that $\\bigcup_{i\\in I}f^{-1}(E_i)\\customsubset f^{-1}\\left(\\bigcup_{i\\in I}E_i\\right) $. Again, if the set $\\bigcup_{i\\in I}f^{-1}(E_i)$ is empty, then the proof is complete. So, suppose this set is not empty and take any $x\\in \\bigcup_{i\\in I}f^{-1}(E_i)$. This means that there exists at least one index $j\\in I$ such that $x\\in f^{-1}(E_j)$ or, equivalently, that $f(x)\\in E_j$. In particular we have $f(x)\\in \\bigcup_{i\\in I}E_i$ and thus $x\\in f^{-1}(\\bigcup_{i\\in I}E_i)$.
	\\item Similar.
	\\item Again, we prove both the inclusions. Let us start with $f^{-1}(F\\setminus E)\\customsubset f^{-1}(F)\\setminus f^{-1}(E)$. If the set $f^{-1}(F\\setminus E)$ is empty, the proof follows straightforwardly. So, suppose on the contrary that there exists some $x\\in f^{-1}(F\\setminus E)$. This can be restated as $f(x)\\in F\\setminus E$ or, equivalently, as $f(x)\\in F$ and $f(x)\\not\\in E$, or, equivalently, as $x\\in f^{-1}(F)$ and $x\\not\\in f^{-1}(E)$, i.e. $x\\in f^{-1}(F)\\setminus f^{-1}(E)$. Let us prove the opposite inclusion. Again, in the empty-set case the proof comes trivially. So, suppose there exists some $x\\in f^{-1}(F)\\setminus f^{-1}(E)$. This means that $f(x)\\in F$ and $f(x)\\not\\in E$, or, equivalently, that $f(x)\\in F\\setminus E$. Again, this can be restated as $x\\in f^{-1}(F\\setminus E)$.
	\\item Similar.
	\\item Similar. A counterexample for the failure of the inverse inclusion $\\bigcap_{i\\in I}f(A_i)\\customsubset f(\\bigcap_{i\\in I}A_i)$ in the general case, is given by the constant function $f:\\mathbb{R}\\rightarrow\\mathbb{R}$, $f(x)=c$.
	If we take any two disjoint subsets $A,B\\customsubset\\mathbb{R}$, we see that $f(A\\cap B)=f(\\emptyset)=\\emptyset$, while $f(A)\\cap f(B)=\\{c\\}$.
	\\item If $f(B)\\setminus f(A)=\\emptyset$, then there is nothing more to prove. So, suppose there exists some $y\\in f(B)\\setminus f(A)$, then there must exist at least one $x\\in B$ such that $f(x)=y$, but there cannot exist any $z\\in A$ such that $y=f(z)$. In particular this implies that $x\\in B\\setminus A$, and so $y=f(x)\\in f(B\\setminus A)$. Concerning the failure of the opposite inclusion $f(B\\setminus A)\\customsubset f(B)\\setminus f(A)$ in the general case, a counterexample is given again by the constant function $f:\\mathbb{R}\\rightarrow\\mathbb{R},\\ f(x)= c$. Indeed, if we take any $A,B\\customsubset\\mathbb{R}$ with $B\\setminus A\\neq \\emptyset$, we see that $f(B)=f(A)=\\{c\\}$ and thus $f(B)\\setminus f(A)=\\emptyset$, but $f(B\\setminus A)=\\{c\\}$.
	\\item Similar. 
	\\item Similar.
\\end{enumerate}
\\end{taggedblock}`,preview:"ef0730bf-cf59-4f10-b28c-f76b8393795d.png"},{uuid:"105a2634-78d5-45a1-9d08-1d40f5d5aa14",title:["sigma-algebra","sigma","measurable","measurable function"],tags:["Analysis 3","Ana3KfvxtV"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:1,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{EnglishExercise}
Let $\\mathcal{A}$ be the family of subsets $A\\subset \\mathbb{Z}$ which fulfill the following condition:
$$
P:\\ 2n\\in A\\quad \\mbox{if and only if}\\quad 2n+1\\in A\\quad\\mbox{for all } n\\ge 1
$$
\\begin{enumerate}
	\\item Show that $\\mathcal{A}$ is a $\\sigma$-algebra.
	\\item Show that the bijective function $f:\\mathbb{Z}\\ni n\\mapsto n+2 \\in\\mathbb{Z}$ is measurable, but that $f^{-1}$ is not measurable.
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{EnglishSolution}
\\noindent \\emph{Solution.} 
\\begin{enumerate}
    \\item \\begin{enumerate}
        \\item The property $P$ is trivially satisfied by the emptyset $\\emptyset$, in that the statements $2n \\in\\emptyset$ and $2n + 1 \\in\\emptyset$ are both false for any $n \\geq 1$. Thus $\\emptyset\\in\\mathcal{A}$. 
        \\item Let $A$ be any element of $\\mathcal{A}$ and let us show that $\\Z \\setminus A \\in\\mathcal{A}$. To this aim, consider any $n \\geq 1$ and suppose that $2n \\in \\Z\\setminus A$. Suppose by contradiction that $2n+1 \\in A$, then, since $A \\in \\mathcal{A}$, we have $2n \\in A$, which is impossible. Hence $2n+1 \\in Z\\setminus A$. The other implication is analogous. This proves $Z\\setminus A \\in \\mathcal{A}$.
        \\item Let $\\left\\{A_i\\right\\}_{i\\in I}$ be any family of elements of $\\mathcal{A}$ and consider the union $\\bigcup_{i\\in I} A_i$. If $n \\geq 1$ and $2n \\in \\bigcup_{i\\in I} A_i$, then there exists at least one index $j \\in I$ such that $2n \\in A_j$ . Since $A_j \\in \\mathcal{A}$, we have $2n + 1 \\in A_j$ and so also $2n + 1 \\in \\bigcup_{i\\in I} A_i$. The other implication is analogous. Thus $\\bigcup_{i\\in I} A_i \\in\\mathcal{A}$.
    \\end{enumerate}
    \\item By definition of $f$, we have $$f^{-1}(A) = \\left\\{k - 2 \\mid k \\in A\\right\\}$$ for any $A\\in\\mathcal{A}$. We have to prove that this is again an element of $\\mathcal{A}$. So, suppose that $2n \\in f^{-1}(A)$ for some $n \\geq 1$. Thus there exists some $k \\in A$ such that $2n = k - 2$, or equivalently that $2(n + 1) = k$. Since $A \\in\\mathcal{A}$ and $n + 1 \\geq 1$, we have also $A \\ni 2(n + 1) + 1$, which is equivalent to $$2n+1 \\in \\left\\{k-2 \\mid k \\in A\\right\\} = f^{-1}(A).$$
    The other implication is analogous and so $f^{-1}(A) \\in \\mathcal{A}$. To prove that $f^{-1}$ is not measurable it is enough to notice that the set $A = \\left\\{0\\right\\}$ is trivially measurable while $f(A) = \\left\\{2\\right\\}$ is not.
\\end{enumerate}
\\end{taggedblock}`,preview:"105a2634-78d5-45a1-9d08-1d40f5d5aa14.png"},{uuid:"cf4e7f8a-9532-4874-83f1-e203a33aef67",title:["measurable","measurable function"],tags:["Analysis 3","Ana3KfvxtV"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:1,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{EnglishExercise}
Given $a\\in\\mathbb{R}$, let $f: (-\\infty,a)\\rightarrow \\mathbb{R}$ and $g:[a,+\\infty)\\rightarrow \\mathbb{R}$ be measurable functions. Show that the function $h:\\mathbb{R}\\rightarrow \\mathbb{R}$ defined by
$$
h(x):=
\\begin{cases}
f(x) & x\\in (-\\infty,a)\\\\
g(x) & x\\in [a,+\\infty)
\\end{cases}
$$
is measurable.
\\end{taggedblock}



\\begin{taggedblock}{EnglishSolution}
\\noindent \\emph{Solution.} 
To prove the measurability of $h$ just notice that the set $h^{-1}(\\{y > q\\})$ decomposes as
$$h^{-1}(\\{y > q\\}) = f^{-1}(\\{y > q\\}) \\cup g^{-1}(\\{y > q\\})$$
and that the sets $f^{-1}(\\{y > q\\})$ and $g^{-1}(\\{y > q\\})$ are, respectively, measurable subsets of $(-\\infty, a)$ and $[a,+\\infty)$, and so also measurable subsets of $\\R$.
\\end{taggedblock}`,preview:"cf4e7f8a-9532-4874-83f1-e203a33aef67.png"},{uuid:"d6e4fd47-5866-47b3-a29b-5e508bc4831d",title:["measurable functions","measurable"],tags:["Analysis 3","Ana3KfvxtV"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:1,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{EnglishExercise}
Let~$f:(0,1)\\rightarrow\\R$ be the function defined by 
$$f(x):=(1+k)(1-kx)\\quad\\text{for}\\; x\\in \\Big[\\frac{1}{k+1},\\frac{1}{k}\\Big)\\;\\text{and}\\;k\\in\\N\\setminus\\{0\\}.$$
Show that~$f$ is measurable.
\\end{taggedblock}



\\begin{taggedblock}{EnglishSolution}
\\noindent \\emph{Solution.} 
Let $q\\in\\Q$. The set $\\left\\{x\\in(0,1)\\mid f(x)>q\\right\\}$ is given by
\\begin{align*}
    \\left\\{x\\in(0,1)\\mid f(x)>q\\right\\}&=
    \\bigcup\\limits_{k\\in\\N\\setminus\\{0\\}}\\left\\{x\\in(0,1)\\mid(1+k)(1-kx)>q\\text{ and }x\\in\\left[\\frac{1}{k+1},\\frac{1}{k}\\right]\\right\\}\\\\
    &=\\bigcup\\limits_{k\\in\\N\\setminus\\{0\\}}\\left\\{x\\in(0,1)\\mid x<\\frac{k+1-q}{k^2+k}\\text{ and }x\\in\\left[\\frac{1}{k+1},\\frac{1}{k}\\right]\\right\\}=:
    \\bigcup\\limits_{k\\in\\N\\setminus\\{0\\}}W_{k,q}.
\\end{align*}
    The sets $W_{k,q}$ are given by
    $$W_{k,q}=\\left\\{\\begin{tabular}{cl}
        $\\emptyset$, & if $\\frac{k+1-q}{k^2+k}<\\frac{1}{k+1}$,\\\\
        $\\left[\\frac{1}{k+1},\\frac{k+1-1}{k^2+k}\\right)$, & if $\\frac{k+1-q}{k^2+k}\\in\\left[\\frac{1}{k+1},\\frac{1}{k}\\right),$\\\\
        $\\left[\\frac{1}{k+1},\\frac{1}{k}\\right)$, & if $\\frac{k+1-q}{k^2+k}\\geq\\frac{1}{k}$
    \\end{tabular}\\right..$$
    Here, $W_{k,q}$ is a Borel set, and thus measurable. Because of this the set ~\${\\{x\\in(0,1)\\mid f(x)>q\\}}$ is measurable for every $q\\in\\Q$ since it is a countable union of measurable sets. So $f$ is measurable.
\\end{taggedblock}`,preview:"d6e4fd47-5866-47b3-a29b-5e508bc4831d.png"},{uuid:"145bb93b-3010-42fe-876c-93d43d701783",title:["set algebra","pre-measure","measure","outer measure"],tags:["Analysis 3","Ana3KfvxtV"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:2,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{EnglishExercise}
Let $(X,\\mathcal{A},\\mu)$ be a set algebra with a pre-measure $\\mu$ such that the measure rules are satisfied. Show that for the induced outer measure $\\mu^*$ on the power set $\\mathcal{P}(X)$ for all $A\\customsubset X$ the identity $\\mu^*(A)=\\delta(A)$ holds with 
$$\\delta(A)=\\inf \\Big\\{\\lim_{j\\rightarrow\\infty}\\mu(E_j)\\Big|,(E_j)_{j\\in\\N}\\customsubset\\mathcal{A},E_j\\customsubset E_{j+1}\\,\\forall\\,j\\in\\N\\text{ and }A\\customsubset \\bigcup_{j\\in\\N}E_j \\Big\\}.$$ 
\\end{taggedblock}



\\begin{taggedblock}{EnglishSolution}
\\noindent \\emph{Solution.} 
Recall that the induced outer measure on $\\mathcal P(X)$ is defined by
$$\\mu^*(A)=\\inf \\left\\{\\sum_{i=0}^{+\\infty}\\mu(A_i)\\;\\vert\\; (A_i)_{i\\in\\N}\\customsubset\\mathcal A \\text{ and } A\\customsubset\\bigcup_{i\\in\\N}A_i  \\right\\}.$$
Let $\\{A_i\\}_{i\\in\\N}$ be a family of sets in $\\mathcal A$, such that $A\\customsubset\\bigcup_{i\\in\\N}A_i$. Set $E_j=\\bigcup_{i=0}^j A_i$. By construction, for any $j\\in \\N$, $E_j\\customsubset E_{j+1}$ and $A\\customsubset\\bigcup_{i\\in\\N}A_i=\\bigcup_{j\\in\\N}E_j $. We know that $\\mu$ is a pre-measure, then $\\mu (E_j)\\leq \\sum_{i=0}^j\\mu(A_i)$.\\\\
Since $\\delta(A)\\leq \\lim_{j\\to+\\infty}\\mu(E_j)$, it follows that $\\delta(A)\\leq \\sum_{i=0}^{+\\infty}\\mu(A_i)$, which holds for any family of sets $\\{A_i\\}_{i\\in\\N}$ in $\\mathcal A$ such that $A\\customsubset\\bigcup_{i\\in\\N}A_i$. Hence it holds also for the infimum $\\mu^*(A)$. It yields that $\\delta(A)\\leq \\mu^*(A)$.\\\\
Conversely, let $\\{E_j\\}_{j\\in\\N}$ be a family of sets in $\\mathcal A$, such that for any $j\\in\\N$, $E_j\\customsubset E_{j+1}$ and $A\\customsubset\\bigcup_{i\\in\\N}E_i$. Set $A_j=E_j\\setminus E_{j-1}$ for any $j\\in \\N\\setminus\\{0\\}$ and $A_0=E_0$. It is easy to verify that $\\bigcup_{i=0}^j A_i=E_j$, $\\bigcup_{j\\in\\N} A_j=\\bigcup_{j\\in\\N}E_j\\supset A$ and $A_i\\cap A_j=\\emptyset$ for any pair of integers $i$, $j$, with $i\\neq j$.\\\\
Using the fact that $\\mu$ is a pre-measure, we obtain 
$$\\sum_{i=0}^j\\mu(A_i)=\\mu(\\bigcup_{i=0}^j A_i)=\\mu(E_j).$$ 
It yields, $\\lim_{j\\to+\\infty}\\mu(E_j)=\\sum_{i=0}^{+\\infty}\\mu(A_i)\\geq \\mu^*(A)$. Since this inequality holds for an arbitrary family $\\{E_j\\}_{j\\in\\N}$ defined as above, it holds then for the infimum over these families. Namely, $\\delta(A)\\geq \\mu^*(A)$.\\\\
We conclude that $\\mu^*(A)=\\delta(A)$.
\\end{taggedblock}`,preview:"145bb93b-3010-42fe-876c-93d43d701783.png"},{uuid:"3d84c3b9-21e4-450e-b95f-8c4ef5e93642",title:["measure space","outer measure"],tags:["Analysis 3","Ana3KfvxtV"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:2,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{EnglishExercise}
Test if these following functions $\\mu^*$ are outer measures on $\\mathcal{P}(X)$
\\begin{enumerate}
	\\item Let $X$ be an arbitrary set, $x_0\\in X$ and for any $A\\subset X$ define
	$$\\mu^*(A):=\\left\\{\\begin{tabular}{ll}
	    $0,$ &  if $x_0\\notin A$\\\\
	      $1,$ &  if $x_0\\in A$
	\\end{tabular}\\right..$$
	\\item Let $X=\\N$ and for any finite subset $M\\subset \\N$, $\\nu(M)$ is the cardinality of $M$. For any $A\\subset \\N$, set
	$$\\mu^*(A):=\\limsup_{n\\rightarrow\\infty} \\frac{\\nu(A\\cap\\{1,\\ldots,n\\})}{n}\\,.$$
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{EnglishSolution}
\\noindent \\emph{Solution.} 
\\begin{enumerate}
    \\item Note that for any $A\\in \\mathcal P(X)$, $\\mu^*(A)\\geq 0$.
        \\begin{itemize}
            \\item Since $x_0\\notin \\emptyset$, then $\\mu^*(\\emptyset)=0$.
            \\item Let $A$ and $B$ two subsets in $X$ such that $A\\subset B$. If $x_0\\in A$, then $x_0\\in B$ and $\\mu^*(A)=\\mu^*(B)=1$. If $x_0\\notin A$, then $\\mu^*(A)=0\\leq \\mu^*(B)$. We deduce that $\\mu^*(A)\\leq\\mu^*(B)$.
            \\item Let $\\{A_i\\}_{i\\in\\N}$ be a family of sets in $\\mathcal P(X)$. We distinguish two cases: \\\\
            Either $x_0\\in \\bigcup_{i\\in \\N}A_i$. Hence, there exists $j\\in \\N$, such that $x_0\\in A_j$ and 
            $$1=\\mu^*(\\bigcup_{i\\in \\N}A_i)=\\mu^*(A_j)\\leq \\sum_{i\\in\\N}\\mu^*(A_i).$$
            Or $x_0\\notin \\bigcup_{i\\in \\N}A_i$. Then for any $i\\in\\N$, $x_0\\notin A_i$ and $0=\\mu^*(\\bigcup_{i\\in \\N}A_i)=\\sum_{i\\in\\N}\\mu^*(A_i)$.\\\\
            In both cases, $\\mu^*(\\bigcup_{i\\in \\N}A_i)\\leq\\sum_{i\\in\\N}\\mu^*(A_i).$
        \\end{itemize}
        We conclude that $\\mu^*$ is an outer measure on $\\mathcal P (X)$.
    \\item We show that $\\mu^*$ is not $\\sigma$-additive: Consider the sets $A_i:=\\{1,\\ldots,i\\}$ for $i\\in\\N$. Then $\\bigcup_{i=1}^\\infty A_i=\\N$ and thus $$\\mu^*\\Big(\\bigcup_{i=1}^\\infty A_i\\Big)=\\mu^*(\\N)=\\limsup_{n\\to+\\infty}\\frac{\\nu(\\N\\cap\\{1,\\ldots,n\\})}{n}=\\limsup_{n\\to+\\infty}\\frac{n}{n}=1\\,.$$ 
        On the other hand, we have 
        $$\\mu^*(A_i)=\\limsup_{n\\to+\\infty}\\frac{\\nu(\\{1,\\ldots,i\\}\\cap\\{1,\\ldots,n\\})}{n}=\\limsup_{n\\to+\\infty}\\frac{i}{n}=0$$
        for all $i\\in\\N$. Thus, $\\mu^*(\\bigcup_{i=1}^\\infty A_i)=1>0=\\sum_{i=1}^\\infty \\mu^*(A_i)$.
\\end{enumerate}
\\end{taggedblock}`,preview:"3d84c3b9-21e4-450e-b95f-8c4ef5e93642.png"},{uuid:"a88bad62-e689-4790-8801-e15a793dd6eb",title:["sigma-algebra","generated","intersection of algebras"],tags:["Analysis 3","Ana3KfvxtV"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:0,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{EnglishExercise}
Let $X$ be a set. Prove the following statements:
\\begin{enumerate}
\\item For any family $\\{\\mathcal{M}_i \\}_{i\\in I}$ of $\\sigma$-algebras over a set $X$, the intersection
$
\\bigcap_{i\\in I} \\mathcal{M}_i
$
is again a $\\sigma$-algebra over $X$.
\\item Given $\\mathcal{C}\\customsubset\\mathcal{P}(X)$, the $\\sigma$-algebra defined by
\\begin{equation*}
\\mathcal{M}(\\mathcal{C}):=\\bigcap \\{ \\mathcal{M}\\:|\\: \\mathcal{M} \\mbox{ is a $\\sigma$-algebra over $X$ and } \\mathcal{C}\\customsubset \\mathcal{M} \\}
\\end{equation*}
is said to be \\textit{generated} by $\\mathcal{C}$. Prove that $\\mathcal{M}(\\mathcal{C})$ is the smallest $\\sigma$-algebra which contains $\\mathcal{C}$.
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{EnglishSolution}
\\noindent \\emph{Solution.} 
\\begin{enumerate}
	\\item  The proof of point i) is straightforward since the three axioms in the definition of a $\\sigma$-algebra that we have to check for the intersection are simultaneously satisfied by all the $\\sigma$-algebras $\\mathcal{M}_i$. For example, since any $\\mathcal{M}_i$ is a $\\sigma$-algebra, then $\\emptyset\\in\\mathcal{M}_i$ for any $i\\in I$ and so also $\\emptyset\\in\\bigcap_{i\\in I}\\mathcal{M}_i$. Moreover, if $A\\in\\bigcap_{i\\in I}\\mathcal{M}_i$, then $A\\in\\mathcal{M}_i$ for all $i\\in I$ and so it holds also that $X\\setminus A\\in\\mathcal{M}_i$ for all $i\\in I$, which is equivalent to $X\\setminus A\\in\\bigcap_{i\\in I}\\mathcal{M}_i$. The axiom on the countable union of measurable subsets is similar. 
	\\item First, notice that the family in the right-hand side of the definition is not empty, since it contains at least the family  $\\mathcal{P}(X)$ of all the subsets of $X$. Indeed, this family trivially defines a $\\sigma$-algebra and obviously contains $\\mathcal{C}$. Now, to prove this statement we have to show that, for any $\\sigma$-algebra $\\mathcal{A}$ that satisfies $\\mathcal{C}\\customsubset \\mathcal{A}$, it holds that $\\mathcal{M}(\\mathcal{C})\\customsubset \\mathcal{A}$. If such an algebra $\\mathcal{A}$ exists, then it must be contained in the family of $\\sigma$-algebras in the right-hand side of the definition. Thus, taking into account the definition of $\\mathcal{M}(\\mathcal{C})$, we have the thesis.
\\end{enumerate}
\\end{taggedblock}`,preview:"a88bad62-e689-4790-8801-e15a793dd6eb.png"},{uuid:"2bda9817-acfc-466a-875b-8b182c2e6ce9",title:["monotone","measurable","measurable function"],tags:["Analysis 3","Ana3KfvxtV"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:1,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{EnglishExercise}
Show that every monotone function $f:\\R\\rightarrow\\R$ is measurable.
\\end{taggedblock}



\\begin{taggedblock}{EnglishSolution}
\\noindent \\emph{Solution.} 
Assume without loss of generality that $f$ is monotonically increasing (otherwise consider $-f$). Consider monotonically increasing intervals $A$ of the form $(a, \\infty)$ with $a \\in \\R$. If $f^{-1}(A)$ is empty, then $f^{-1}(A)$ is already measurable. So, suppose $f^{-1}(A)$ is not empty. If $x \\in \\R$ is in $f^{-1}(A)$, i.e., $f(x) \\in (a, \\infty)$, then because $f$ is monotonically increasing, it follows that $f(b) \\geq f(x)$ for all $b > x$, and thus $b \\in f^{-1}(A)$. We distinguish between two cases. 
\\begin{itemize}
    \\item If $f^{-1}(A)$ is unbounded below, then it follows that $f^{-1}(A) = \\R$, which is a measurable set. 
    \\item Else if $f^{-1}(A)$ is bounded below, then there exists a $y \\in \\R$ with $y = \\inf f^{-1}(A)$. Depending on whether $y$ is included in $f^{-1}(A)$ or not, $f^{-1}(A) = [y, \\infty)$ or $f^{-1}(A) = (y, \\infty)$.     
\\end{itemize}
In both cases, $f^{-1}(A)$ is measurable. Overall, it follows that $f^{-1}(A)$ is measurable, and since sets of the form $(a, \\infty)$ generate the Borel $\\sigma$-algebra, it follows that $f$ is measurable.
\\end{taggedblock}`,preview:"2bda9817-acfc-466a-875b-8b182c2e6ce9.png"},{uuid:"9db46580-2a78-41cc-8ce4-eb8a969411b4",title:["sigma-algebra"],tags:["Analysis 3","Ana3KfvxtV"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:0,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{EnglishExercise}
Let $X$ be a set and $Z\\customsubset X$. For any family $\\mathcal{A}\\customsubset\\mathcal{P}(X)$ define the family
$$
\\mathcal{A}|_{Z}:=\\{A\\cap Z\\:|\\: A\\in\\mathcal{A} \\}\\customsubset \\mathcal{P}(Z).
$$ 
Prove the following statements:
\\begin{enumerate}
	\\item if $\\mathcal{M}$ is a $\\sigma$-algebra over $X$, then $\\mathcal{M}|_{Z}$ is a $\\sigma$-algebra over $Z$
	\\item if $\\mathcal{C}\\customsubset \\mathcal{P}(X)$, then $\\mathcal{M}(\\mathcal{C})|_{Z}=\\mathcal{M}(\\mathcal{C}|_Z)$
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{EnglishSolution}
\\noindent \\emph{Solution.} 
\\begin{enumerate}
	\\item 
    \\begin{itemize}
        \\item The fact that $\\emptyset\\in\\mathcal{M}|_Z$ follows immediately from $\\emptyset \\in\\mathcal{M}$ and $\\emptyset\\cap Z=\\emptyset$.
        \\item Suppose that $S\\in\\mathcal{M}|_Z$, then $S=\\tilde{S}\\cap Z$ for some $\\tilde{S}\\in\\mathcal{M}$. At this point, thanks to the identities	$$	Z\\setminus S= Z\\setminus(\\tilde{S}\\cap Z)=(X\\setminus \\tilde{S})\\cap Z,	$$ and the fact that $\\mathcal{M}$ is a $\\sigma$-algebra, we see that $Z\\setminus S\\in\\mathcal{M}|_Z$.
        \\item Let $\\{S_i \\}_{i\\in I}$ be a family of subsets of $\\mathcal{M}|_Z$, then for any $i\\in I$ we have $S_i=\\tilde{S}_i\\cap Z$ for some $\\tilde{S}_i\\in\\mathcal{M}$. Now, thanks to the following identities: $$ \\bigcup_{i\\in I}S_i=\\bigcup_{i\\in I}(\\tilde{S}_i\\cap Z)=\\left(\\bigcup_{i\\in I}\\tilde{S}_i\\right)\\cap Z, $$ and the fact that $\\mathcal{M}$ is a $\\sigma$-algebra, we see that $\\bigcup_{i\\in I}S_i\\in\\mathcal{M}|_Z$.
    \\end{itemize}
	\\item It suffices to show that $\\mathcal{M}(\\mathcal{C})|_{Z}$ is the smallest $\\sigma$-algebra on $Z$ containing $\\mathcal{C}|_Z$. So, consider any other $\\sigma$-algebra $\\mathcal{A}$ on $Z$ such that $\\mathcal{C}|_Z\\customsubset\\mathcal{A}$ and define
	$$
	\\tilde{\\mathcal{A}}:=\\{S\\customsubset X\\:|\\: S\\cap Z\\in \\mathcal{A} \\}.
	$$
	It is easy to prove that $\\tilde{\\mathcal{A}}$ is a $\\sigma$-algebra on $X$. Moreover, by construction, we have $\\mathcal{C}\\customsubset\\tilde{\\mathcal{A}}$. By definition of generated $\\sigma$-algebra, this implies $\\mathcal{M}(\\mathcal{C})\\customsubset\\tilde{\\mathcal{A}}$ and so, by definition of $\\tilde{\\mathcal{A}}$, we get $\\mathcal{M}(\\mathcal{C})|_Z\\customsubset \\mathcal{A}$ and the proof is complete.
\\end{enumerate}
\\end{taggedblock}`,preview:"9db46580-2a78-41cc-8ce4-eb8a969411b4.png"},{uuid:"22d44d68-9150-4127-a61c-5e85e1c4580e",title:["measure"],tags:["Analysis 3","Ana3KfvxtV"],languages:["EnglishExercise","EnglishSolution"],semesterwoche:2,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{EnglishExercise}
Let $\\mathbb{K}$ be a non-empty subset of $\\mathbb{N}$ and let $\\{\\lambda_n \\}_{n\\in\\mathbb{N}}$ be a sequence of non-negative real numbers. 
For every $E\\customsubset\\mathbb{N}$ define
$$
\\mu(E):=\\sum_{k\\in E\\cap\\mathbb{K}}\\lambda_k.
$$
Show that $\\mu$ defines a measure on $\\mathcal{P}(\\mathbb{N})$.
\\vspace{0.3cm}

\\textit{\\underline{Remark:} \\small{the convention $\\sum_{k\\in\\emptyset} \\lambda_k=0$ is adopted.}}
\\end{taggedblock}



\\begin{taggedblock}{EnglishSolution}
\\noindent \\emph{Solution.} 
    By remark and the choise of the sequence $\\{\\lambda_k\\}_{k\\in \\N}$ we have, 
    $$\\mu(E) = \\sum\\limits_{k\\in E\\cap \\mathbb{K}} \\lambda_k \\geq 0,\\text{ for each set }E \\customsubset \\N\\text{ and } \\mu(\\emptyset) = 0$$
    Concerning $\\sigma$-additivity, we choose a family $\\{E_i\\}_{i\\in I}$ of in pairs disjoint subsets of $\\N$. Denote that $\\left(\\bigcup_{i\\in I} E_i\\right) \\cap  \\mathbb{E} = \\bigcup_{i\\in\\N} (E_i \\cap  \\mathbb{E})$ and calculate,
    $$\\mu \\left(\\bigcup\\limits_{i\\in\\N} E_i \\right) = \\sum\\limits_{k\\in \\left(\\bigcup\\limits_{i\\in I} E_i \\right) \\cap \\mathbb{K}} \\lambda_k 
    = \\sum\\limits_{k\\in \\bigcup\\limits_{i\\in I} (E_i\\cap \\mathbb{K})} \\lambda_k 
    = \\sum\\limits_{i\\in I}\\left(\\sum\\limits_{k\\in E_i\\cap \\mathbb{K}} \\lambda_k\\right)= \\sum\\limits_{i\\in I} \\mu(E_i),$$
    since the sets $E_i \\cap \\mathbb{E}$ are in pairs disjoint. This proves that $\\mu$ is a measure on $\\mathcal{P}(\\N)$.
\\end{taggedblock}`,preview:"22d44d68-9150-4127-a61c-5e85e1c4580e.png"},{uuid:"bc0b343c-56ce-4d80-bdbe-cf5ebbdec604",title:["Maß"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:2,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $\\mathbb{K}$ eine nicht-leere Teilmenge von $\\mathbb{N}$ und sei $\\{\\lambda_n \\}_{n\\in\\mathbb{N}}$ eine Folge von nicht-negativen reellen Zahlen. Für jedes $E\\customsubset\\mathbb{N}$ definiere $$ \\mu(E):=\\sum_{k\\in E\\cap\\mathbb{K}}\\lambda_k. $$ Zeigen Sie, dass $\\mu$ ein Maß auf $\\mathcal{P}(\\mathbb{N})$ definiert. \\vspace{0.3cm}

\\textit{\\underline{Bemerkung:} \\small{die Konvention $\\sum_{k\\in\\emptyset} \\lambda_k=0$ darf angenommen werden.}}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
Durch die Bemerkung und die Wahl der Folge $\\{\\lambda_k\\}_{k\\in \\N}$ haben wir:
$$\\mu(E) = \\sum\\limits_{k\\in E\\cap \\mathbb{K}} \\lambda_k \\geq 0,\\text{ für jede Menge }E \\customsubset \\N\\text{ und } \\mu(\\emptyset) = 0.$$
Bezüglich der $\\sigma$-Additivität wählen wir eine Familie $\\{E_i\\}_{i\\in I}$ paarweise disjunkter Teilmengen von $\\N$. Beachte, dass $\\left(\\bigcup_{i\\in I} E_i\\right) \\cap \\mathbb{E} = \\bigcup_{i\\in\\N} (E_i \\cap \\mathbb{E})$ und berechne
$$\\mu \\left(\\bigcup\\limits_{i\\in\\N} E_i \\right) = \\sum\\limits_{k\\in \\left(\\bigcup\\limits_{i\\in I} E_i \\right) \\cap \\mathbb{K}} \\lambda_k = \\sum\\limits_{k\\in \\bigcup\\limits_{i\\in I} (E_i\\cap \\mathbb{K})} \\lambda_k = \\sum\\limits_{i\\in I}\\left(\\sum\\limits_{k\\in E_i\\cap \\mathbb{K}} \\lambda_k\\right)= \\sum\\limits_{i\\in I} \\mu(E_i),$$ 
da die Mengen $E_i \\cap \\mathbb{E}$ paarweise disjunkt sind. Dies beweist, dass $\\mu$ ein Maß auf $\\mathcal{P}(\\N)$ ist.
\\end{taggedblock}`,preview:"bc0b343c-56ce-4d80-bdbe-cf5ebbdec604.png"},{uuid:"60bc8d11-d6d3-4763-9f69-462a30273892",title:["Mengenalgebra","Prämaß","maß","äußeres Maß"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:3,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Die Mengenalgebra $\\mathcal{A}\\customsubset\\mathcal{P}(\\N)$ sei gegeben durch $\\mathcal{A}:=\\{A\\customsubset\\N\\,|\\,\\text{$A$ oder $A^{\\bf{c}}$ ist endlich}\\}$, wobei $A^{\\bf{c}}$ das Komplement von $A$ in $\\N$ bezeichne. Weiter sei das Prämaß $\\mu:\\mathcal{A}\\rightarrow[0,\\infty]$ gegeben durch $\\mu(A)=0$ falls $A$ endlich, und $\\mu(A)=\\infty$ falls $A^{\\bf{c}}$ endlich. Zeigen Sie, dass $\\mu$ nicht $\\sigma$-additiv ist, und dass $\\mu^*\\neq\\mu$ auf $\\mathcal{A}$ ist, wobei $\\mu^*$ das von $\\mu$ induzierte äußere Maß auf $\\mathcal{P}(\\N)$ bezeichne.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
\\begin{enumerate}
	\\item Sei $\\{A_n\\}_{n\\in \\mathbb{N}}\\customsubset\\mathcal{A}$ gegeben durch $A_n=\\{n\\}$\\\\
	Es gilt: $\\bigcup_{n \\in \\mathbb{N}}A_n =\\mathbb{N}\\in\\mathcal{A} \\ \\Rightarrow \\ \\mu (\\bigcup_{n \\in \\mathbb{N}}A_n)=\\infty$\\\\
Aber: $\\sum_{n\\in \\mathbb{N}}\\mu(A_n)=0$\\\\
$\\Rightarrow \\ \\mu (\\bigcup_{n \\in \\mathbb{N}}A_n)\\neq \\sum_{n\\in \\mathbb{N}}\\mu(A_n) \\ \\Rightarrow $ keine $\\sigma$-Additivität
\\item Seien die $A_n$ definiert wie in i).\\\\ 
Mit $A:=\\bigcup_{n \\in \\mathbb{N}}A_n=\\mathbb{N}$ gilt dann: 
$\\mu(A)=\\mu(\\mathbb{N})=\\infty$\\\\
Aber: $\\sum_{n \\in \\mathbb{N}} \\mu (A_n)=0$, also auch
	\\[\\mu^*(A)=\\text{inf}\\{\\sum_{n \\in \\mathbb{N}} \\mu (A_n)|A_n \\in \\mathcal{A}, \\forall n \\in \\mathbb{N}, A\\customsubset \\bigcup_{n \\in \\mathbb{N}} A_n \\}=0
\\]
Es gilt also $\\mu^*(A)\\neq \\mu(A).$
\\end{enumerate}
\\end{taggedblock}`,preview:"60bc8d11-d6d3-4763-9f69-462a30273892.png"},{uuid:"148cbc32-fc99-4066-8042-b18f2a2d3a30",title:["sigma-algebra","sigma","messbar","messbare Funktion"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:1,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $\\mathcal{A}$ eine Familie an Teilmengen $A\\subset \\mathbb{Z}$ welche folgende Bedingung erfüllen:
$$
2n\\in A\\quad \\mbox{genau dann wenn}\\quad 2n+1\\in A\\quad\\mbox{für alle } n\\ge 1
$$
\\begin{enumerate}
	\\item Zeigen Sie, dass $\\mathcal{A}$ eine $\\sigma$-algebra ist.
	\\item Zeigen Sie, dass die bijektive Abbildung $f:\\mathbb{Z}\\ni n\\mapsto n+2 \\in\\mathbb{Z}$ messbar ist, jedoch nicht $f^{-1}$.
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
\\begin{enumerate}
    \\item \\begin{enumerate}
        \\item Die Eigenschaft $P$ ist trivialerweise durch die leere Menge $\\emptyset$ erfüllt, da die Aussagen $2n \\in\\emptyset$ und $2n + 1 \\in\\emptyset$ für jedes $n \\geq 1$ beide falsch sind. Also ist $\\emptyset\\in\\mathcal{A}$.
        \\item Sei $A$ ein beliebiges Element von $\\mathcal{A}$ und zeige, dass $\\Z \\setminus A \\in\\mathcal{A}$ gilt. Zu diesem Zweck betrachten wir ein beliebiges $n \\geq 1$ und nehmen an, dass $2n \\in \\Z\\setminus A$. Wenn $2n+1 \\in A$, dann haben wir, da $A \\in \\mathcal{A}$, dass $2n \\in A$, was ein Widerspruch ist. Daher ist $2n+1 \\in Z\\setminus A$. Die andere Implikation ist analog. Dies beweist, dass $Z\\setminus A \\in \\mathcal{A}$. 
        \\item Sei $\\left\\{A_i\\right\\}_{i\\in I}$ eine beliebige Familie von Elementen von $\\mathcal{A}$ und betrachte die Vereinigung $\\bigcup_{i\\in I} A_i$. Wenn $n \\geq 1$ und $2n \\in \\bigcup_{i\\in I} A_i$, dann gibt es mindestens einen Index $j \\in I$, sodass $2n \\in A_j$. Da $A_j \\in \\mathcal{A}$, haben wir $2n + 1 \\in A_j$ und somit auch $2n + 1 \\in \\bigcup_{i\\in I} A_i$. Die andere Implikation ist analog. Somit ist $\\bigcup_{i\\in I} A_i \\in\\mathcal{A}$. 
        \\end{enumerate}
    \\item Nach Definition von $f$ haben wir $$f^{-1}(A) = \\left\\{k - 2 \\mid k \\in A\\right\\}$$ für jedes $A\\in\\mathcal{A}$. Wir müssen beweisen, dass dies wieder ein Element von $\\mathcal{A}$ ist. Nehme also an, dass $2n \\in f^{-1}(A)$ für ein $n \\geq 1$ gilt. Somit existiert ein $k \\in A$, sodass $2n = k - 2$ oder äquivalent, dass $2(n + 1) = k$. Da $A \\in\\mathcal{A}$ und $n + 1 \\geq 1$ gilt, haben wir auch $A \\ni 2(n + 1) + 1$, was äquivalent ist zu 
    $$2n+1 \\in \\left\\{k-2 \\mid k \\in A\\right\\} = f^{-1}(A).$$
    Die andere Implikation ist analog, und daher ist $f^{-1}(A) \\in \\mathcal{A}$. Um zu beweisen, dass $f^{-1}$ nicht messbar ist, genügt es zu bemerken, dass die Menge $A = \\left\\{0\\right\\}$ trivial messbar ist, während $f(A) = \\left\\{2\\right\\}$ es nicht ist. .
\\end{enumerate}
\\end{taggedblock}`,preview:"148cbc32-fc99-4066-8042-b18f2a2d3a30.png"},{uuid:"664dcec8-6ff0-4748-9302-772bd70d9558",title:["Ausschöpfungssatzes","Lebesgue-Integral","Lebesgue","Riemann-Integral","Riemann"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:5,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
\\begin{enumerate}
	\\item Für welche $\\alpha\\in\\R$ ist die Funktion $f(x):=x^\\alpha$ Lebesgue-integrabel auf $(0,1)$?
	\\item Für welche $\\alpha\\in\\R$ ist die Funktion $f(x):=x^\\alpha$ Lebesgue-integrabel auf $[1,\\infty)$?
	\\item Sind die folgenden Funktionen Lebesgue-integrabel bzw. uneigentlich Riemann-integrabel auf $[1,\\infty)$?
	$$g(x):=\\frac{\\sin x}{x^2}\\;,\\qquad\\qquad h(x):=\\frac{\\sin x}{x}$$
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
\\begin{enumerate}
    \\item Wegen des Ausschöpfungssatzes genügt es, diejenigen $ \\alpha\\in\\R$ zu finden, für die $f|_{(\\eps,1)}$ Lebesgue-integrabel ist für alle $\\eps>0$ und der Limes $\\lim_{\\eps\\rightarrow0}\\int_\\eps^1 f\\,d\\mu$ existiert. Da die Funktion $f(x)=x^\\alpha$ stetig ist auf $[\\eps,1]$ für alle $\\eps>0$ und alle $\\alpha\\in\\R$, stimmt das Lebesgue-Integral $\\int_\\eps^1 f\\,d\\mu$ mit dem Riemann-Integral $\\int_\\eps^1 f(x)\\,\\diff x$ überein, und wir berechnen mit dem Hauptsatz der Differential- und Integralrechnung:
    $$\\int_\\eps^1 x^\\alpha\\diff x=
    \\begin{cases}
        \\frac{1}{\\alpha+1}\\big(1-\\eps^{\\alpha+1}\\big)\\;,\\quad &\\alpha\\neq-1 \\\\
        -\\ln(\\eps)\\;,\\quad &\\alpha=-1\\,
    \\end{cases}.$$
    Der Limes $\\lim_{\\eps\\rightarrow0}\\int_\\eps^1 x^\\alpha\\,\\diff x$ existiert also genau dann, wenn $\\alpha>-1$.
    \\item Wir gehen analog zu i) vor: Wieder genügt es, diejenigen $\\alpha\\in\\R$ zu finden, für die $f|_{(1,N)}$ integrabel ist für alle $N\\in\\N$ und der Limes $\\lim_{N\\rightarrow\\infty}\\int_1^N f(x)\\,\\diff x$ existiert. Wir verwenden wieder den Hauptsatz und finden
    $$\\int_1^N x^\\alpha\\,\\diff x=
    \\begin{cases}
        \\frac{1}{\\alpha+1}\\big(N^{\\alpha+1}-1\\big)\\;,\\quad &\\alpha\\neq-1 \\\\
        \\ln(N)\\;,\\quad &\\alpha=-1\\,
    \\end{cases}.$$
    Der Limes $\\lim_{N\\rightarrow\\infty}\\int_1^N x^\\alpha\\,\\diff x$ existiert also genau dann, wenn $\\alpha<-1$.
    \\item Für die Funktion $g(x) = \\sin x / x^2$ gilt die
    Abschätzung
    \\[
    |g(x)| = \\frac{|\\sin x|}{x^2}
    \\leq \\frac{1}{x^2} \\,.
    \\]
    Da $x^{-2}$ nach dem zweiten Teil auf $[1,\\infty)$
    Lebesgue-integrabel ist, ist es somit auch $g$. Da das Riemann-Integral von $|g|$ auf $[1,N]$ mit dem Lebesgue-Integral übereinstimmt für alle $N\\in\\N$, ist $g$ auch uneigentlich Riemann-integrabel. 
    
    Die Funktion $h(x)=\\sin x / x$ ist auf $[1,\\infty)$ uneigentlich Riemann-integrabel, wie man mittels partieller Integration sieht:
    $$\\lim_{N\\rightarrow\\infty}\\int_1^N \\frac{\\sin x}{x}\\,\\diff x=\\lim_{N\\rightarrow\\infty}\\Big(-\\frac{\\cos x}{x}\\Big|_1^N- \\int_1^N \\frac{\\cos x}{x^2}\\,\\diff x\\Big)<\\infty\\,.$$

    Um zu zeigen, dass $h$ auf $[1,\\infty)$ nicht Lebesgue-integrabel
    ist, machen wir zunächst die Abschätzung
    \\[
    \\int_1^\\infty |h(x)| \\diff x
    = \\sum_{n=1}^\\infty 
    \\int_{n\\pi}^{(n+1)\\pi} \\frac{|\\sin x|}{x} \\diff x
    \\geq
    \\sum_{n=1}^\\infty \\frac{1}{(n+1)\\pi} 
    \\int_{n\\pi}^{(n+1)\\pi} |\\sin x| \\diff x \\,.
    \\]
    Hier haben wir um zweiten Schritt benutzt, dass die Funktion $1/x$
    auf $[n\\pi, (n+1)\\pi]$ stets grö{\\ss}er ist als $1/(n+1)\\pi$.
    Aus der Periodizität des Sinus folgt, dass
    \\[
    \\int_{n\\pi}^{(n+1)\\pi} |\\sin x| \\diff x
    = \\int_0^\\pi \\sin x \\diff x
    = - \\int_0^\\pi \\frac{\\diff}{\\diff x} \\cos x \\diff x
    = 2 \\,.
    \\]
    Somit erhalten wir also die Abschätzung
    \\[
    \\int_1^\\infty |h(x)| \\diff x
    \\geq \\sum_{n=1}^\\infty \\frac{2}{(n+1)\\pi}
    = \\infty \\,,
    \\]
    wobei wir im letzten Schritt die Divergenz der harmonischen Reihe
    benutzt haben. Also folgt, dass $h$ auf $[1,\\infty)$ nicht
    Lebesgue-integrabel ist.
\\end{enumerate}
\\end{taggedblock}`,preview:"664dcec8-6ff0-4748-9302-772bd70d9558.png"},{uuid:"1855bb38-6743-4206-b652-d17d6e09d7c9",title:["Maßraum","Maß","äußeres Maß"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:2,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sind die nachfolgend definierten Abbildungen $\\mu^*$ äußere Maße auf $\\mathcal{P}(X)$?
\\begin{enumerate}
	\\item Sei $X$ eine beliebige Menge, $x_0\\in X$, und für $A\\subset X$ setze
	$$\\mu^*(A):=\\left\\{\\begin{tabular}{ll}
	    $0,$ &  falls $x_0\\notin A$\\\\
	      $1,$ &  falls $x_0\\in A$
	\\end{tabular}\\right..$$
	\\item Sei $X=\\N$ und für eine endliche Teilmenge $M\\subset \\N$ bezeichne $\\nu(M)$ die Mächtigkeit von $M$. Für $A\\subset\\N$ setze
	$$\\mu^*(A):=\\limsup_{n\\rightarrow\\infty} \\frac{\\nu(A\\cap\\{1,\\ldots,n\\})}{n}\\,.$$
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
\\begin{enumerate} 
    \\item Beachte, dass für jedes $A\\in \\mathcal P(X)$ gilt: $\\mu^*(A)\\geq 0$. \\begin{itemize}
        \\item Da $x_0\\notin \\emptyset$, gilt $\\mu^*(\\emptyset)=0$. 
        \\item Seien $A$ und $B$ zwei Teilmengen in $X$ mit $A\\subset B$. Wenn $x_0\\in A$, dann ist $x_0\\in B$ und $\\mu^*(A)=\\mu(B)=1$. Wenn $x_0\\notin A$, dann ist $\\mu^*(A)=0\\leq \\mu^(B)$. Daraus folgt, dass $\\mu^*(A)\\leq\\mu^*(B)$. 
        \\item Sei $\\{A_i\\}_{i\\in\\N}$ eine Familie von Mengen in $\\mathcal{P}(X)$. Wir unterscheiden zwei Fälle: \\\\ Entweder $x_0\\in \\bigcup_{i\\in \\N}A_i$. Dann existiert ein $j\\in \\N$, sodass $x_0\\in A_j$ und 
        $$1=\\mu^*\\left(\\bigcup_{i\\in \\N}A_i\\right)=\\mu^*(A_j)\\leq \\sum_{i\\in\\N}\\mu^*(A_i).$$ 
        Oder $x_0\\notin \\bigcup_{i\\in \\N}A_i$. Dann ist $x_0\\notin A_i$ für jedes $i\\in\\N$ und $0=\\mu^*(\\bigcup_{i\\in \\N}A_i)=\\sum_{i\\in\\N}\\mu^*(A_i)$.\\\\ 
        In beiden Fällen gilt: $\\mu^*(\\bigcup_{i\\in \\N}A_i)\\leq\\sum_{i\\in\\N}\\mu^*(A_i).$ 
    \\end{itemize}
    Daraus folgt, dass $\\mu^*$ ein äußeres Maß auf $\\mathcal{P}(X)$ ist. 
    \\item Wir zeigen, dass $\\mu^*$ nicht $\\sigma$-additiv ist: Betrachte die Mengen $A_i:=\\{1,\\ldots,i\\}$ für $i\\in\\N$. Dann ist $\\bigcup_{i=1}^\\infty A_i=\\N$ und daher gilt: 
    \\begin{align*}
    \\mu^*\\Big(\\bigcup_{i=1}^\\infty A_i\\Big)&=\\mu^*(\\N)=\\limsup_{n\\to+\\infty}\\frac{\\nu(\\N\\cap\\{1,\\ldots,n\\})}{n}=\\limsup_{n\\to+\\infty}\\frac{n}{n}=1\\,.
    \\intertext{Andererseits gilt:} 
    \\mu^*(A_i)&=\\limsup_{n\\to+\\infty}\\frac{\\nu(\\{1,\\ldots,i\\}\\cap\\{1,\\ldots,n\\})}{n}=\\limsup_{n\\to+\\infty}\\frac{i}{n}=0
    \\end{align*}
    für alle $i\\in\\N$. Somit gilt $\\mu^*(\\bigcup_{i=1}^\\infty A_i)=1>0=\\sum_{i=1}^\\infty \\mu^*(A_i)$.
\\end{enumerate}
\\end{taggedblock}`,preview:"1855bb38-6743-4206-b652-d17d6e09d7c9.png"},{uuid:"98736e22-015c-471e-9305-cb814ae20589",title:["Mengenalgebra","Prämaß","äußeres Maß","Maß"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:2,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $(X,\\mathcal{A},\\mu)$ eine Mengenalgebra mit einem Prämaß $\\mu$, sodass die Maßregeln erfüllt sind. Zeigen Sie, dass für das induzierte äußere Maß $\\mu^*$ auf der Potenzmenge $\\mathcal{P}(X)$ für alle $A\\customsubset X$ die Identität $\\mu^*(A)=\\delta(A)$ gilt mit
$$\\delta(A)=\\inf \\Big\\{\\lim_{j\\rightarrow\\infty}\\mu(E_j)\\,\\Big|\\,(E_j)_{j\\in\\N}\\customsubset\\mathcal{A}\\,,\\:E_j\\customsubset E_{j+1}\\,\\forall\\,j\\in\\N\\text{ und }A\\customsubset \\bigcup_{j\\in\\N}E_j \\Big\\}.$$


\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
Zur Erinnerung: das induzierte äußere Maß auf $\\mathcal P(X)$ ist durch 
$$\\mu^*(A)=\\inf \\left\\{\\sum_{i=0}^{+\\infty}\\mu^*(A_i)\\;\\vert\\; (A_i){i\\in\\N}\\customsubset\\mathcal A \\text{ und } A\\customsubset\\bigcup{i\\in\\N}A_i \\right\\}.$$ gegeben. \\\\
Sei $\\{A_i\\}_{i\\in\\N}$ eine Familie von Mengen in $\\mathcal{A}$, sodass $A\\customsubset\\bigcup{i\\in\\N}A_i$ und setze $E_j=\\bigcup_{i=0}^j A_i$. Durch Konstruktion gilt für jedes $j\\in \\N$, $E_j\\customsubset E_{j+1}$ und $A\\customsubset\\bigcup_{i\\in\\N}A_i=\\bigcup_{j\\in\\N}E_j$. Da wir wissen, dass $\\mu$ ein Prämaß ist, folgt zudem $\\mu (E_j)\\leq \\sum_{i=0}^j\\mu(A_i)$.\\\\ 
Da $\\delta(A)\\leq \\lim_{j\\to+\\infty}\\mu(E_j)$, folgt $\\delta(A)\\leq \\sum_{i=0}^{+\\infty}\\mu(A_i)$, was für jede Familie von Mengen $\\{A_i\\}_{i\\in\\N}$ in $\\mathcal A$ mit $A\\customsubset\\bigcup_{i\\in\\N}A_i$ gilt. Es gilt daher auch für das Infimum $\\mu^*(A)$. Daraus folgt $\\delta(A)\\leq \\mu^*(A)$.\\\\ 
Umgekehrt, sei $\\{E_j\\}_{j\\in\\N}$ eine Familie von Mengen in $\\mathcal{A}$, sodass für jedes $j\\in\\N$, $E_j\\customsubset E_{j+1}$ und $A\\customsubset\\bigcup_{i\\in\\N}E_i$. Setze $A_j=E_j\\setminus E_{j-1}$ für jedes $j\\in \\N\\setminus\\{0\\}$ und $A_0=E_0$ gilt. Es ist leicht zu prüfen, dass $\\bigcup_{i=0}^j A_i=E_j$, $\\bigcup_{j\\in\\N} A_j=\\bigcup_{j\\in\\N}E_j\\supset A$ und $A_i\\cap A_j=\\emptyset$ für jedes Paar von Zahlen $i$, $j$, mit $i\\neq j$.\\\\ Unter Verwendung der Voraussetzung, dass $\\mu$ ein Prämaß ist, erhalten wir 
$$\\sum_{i=0}^j\\mu(A_i)=\\mu\\left(\\bigcup_{i=0}^j A_i\\right)=\\mu(E_j).$$
Somit folgt $\\lim_{j\\to+\\infty}\\mu(E_j)=\\sum_{i=0}^{+\\infty}\\mu(A_i)\\geq \\mu^*(A)$. Da diese Ungleichung für eine beliebige Familie $\\{E_j\\}_{j\\in\\N}$ gilt, die wie oben definiert ist, gilt sie dann auch für das Infimum über diese Familien, also $\\delta(A)\\geq \\mu^*(A)$.\\\\ Daraus folgt somit, dass $\\mu^*(A)=\\delta(A)$.
\\end{taggedblock}`,preview:"98736e22-015c-471e-9305-cb814ae20589.png"},{uuid:"74548b99-480e-4c66-9d90-a3df13b5c8f0",title:["Lipschitz","Lebesguesche Nullmenge","Lebesgue"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:3,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $f:\\R\\rightarrow\\R$ eine Lipschitz-stetige Funktion, also es gibt eine Konstante $C>0$, so dass $|f(x)-f(y)|\\leq C|x-y|$ für alle $x,y\\in\\R$. Zeigen Sie, dass für jede Lebesguesche Nullmenge $N\\customsubset\\R$ das Bild $f(N)\\customsubset\\R$ wieder eine Lebesguesche Nullmenge ist.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
Es gilt: zu jedem $\\eps>0$ existiert eine Folge von offenen Intervallen $(I_n)_{n\\in\\N}$ mit $N\\customsubset\\bigcup_{n\\in\\N}I_n$ und $\\sum_{n\\in\\N}\\mu(I_n)<\\frac{\\eps}{C}$. Zudem gilt: $f(N)\\customsubset f(\\bigcup_{n\\in\\N}I_n)=\\bigcup_{n\\in\\N}f(I_n)$. Da $f$ stetig und $I_n$ zusammenhängend, ist auch $f(I_n)\\customsubset\\R$ zusammenhängend, also wieder ein (nicht notwendig offenes) Intervall. Wegen der Lipschitz-Stetigkeit von $f$  gilt außerdem:
$$\\mu(f(I_n))=\\sup_{x,y\\in I_n}|f(x)-f(y)|\\leq C\\sup_{x,y\\in I_n}|x-y|=C\\mu(I_n)\\,.$$
Insgesamt folgt: 
$$\\mu^*(f(N))\\leq \\sum_{n\\in\\N}\\mu(f(I_n))\\leq C\\sum_{n\\in\\N}\\mu(I_n)=\\eps$$
für jedes $\\eps>0$, also $\\mu^*(f(N))=0$.
Somit ist $f(N)$ eine Lebesguesche Nullmenge.
\\end{taggedblock}
`,preview:"74548b99-480e-4c66-9d90-a3df13b5c8f0.png"},{uuid:"177c127a-be14-4d49-b9f6-907f6924a147",title:["Urbild"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:0,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $f : X \\rightarrow Y$ eine Funktion zwischen zwei Mengen $X, Y$. Das Urbild einer Teilmenge $E \\customsubset Y$ ist definiert durch
$$f^{-1}(E) := \\{x\\in X \\mid f(x) \\in E\\} \\customsubset X.$$

Lass $E, F, \\{E_i\\}_{i\\in I}$ Teilmengen von $Y$ und $A, B, \\{A_i\\}_{i\\in I}$ Teilmengen von $X$ sein. Beweisen Sie die folgenden Punkte: 
\\begin{enumerate} 
\\item $f^{-1} (\\bigcup_{i\\in I} E_i ) = \\bigcup_{i\\in I} f^{-1}(E_i)$ 
\\item $f^{-1} (\\bigcap_{i\\in I} E_i ) = \\bigcap_{i\\in I} f^{-1}(E_i)$ 
\\item $f^{-1}(F \\setminus E) = f^{-1}(F) \\setminus f^{-1}(E)$ 
\\item $f (\\bigcup_{i\\in I} A_i ) = \\bigcup_{i\\in I} f (A_i)$ 
\\item $f (\\bigcap_{i\\in I} A_i ) \\customsubset \\bigcap_{i\\in I} f (A_i)$ ($=$, falls $f$ injektiv ist) \\item $f (B) \\setminus f (A) \\customsubset f (B \\setminus A)$ ($=$, falls $f$ injektiv ist) 
\\item $A \\customsubset f^{-1}(f (A))$ ($=$, falls $f$ injektiv ist) 
\\item $f (f^{-1}(E)) \\customsubset E$ ($=$, falls $f$ surjektiv ist) 
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
\\begin{enumerate}
    \\item Beginnen wir mit dem Beweis von $f^{-1}\\left(\\bigcup_{i\\in I}E_i\\right)\\customsubset\\bigcup_{i\\in I}f^{-1}(E_i)$. Wenn die Menge $f^{-1}\\left(\\bigcup_{i\\in I}E_i\\right)$ leer ist, ist die Inklusion trivial erfüllt. Nehmen wir also an, diese Menge sei nicht leer und wählen ein beliebiges $x\\in f^{-1}(\\bigcup_{i\\in I}E_i)$. Dann haben wir per Definition des Urbilds $f(x)\\in \\bigcup_{i\\in I}E_i$. Das bedeutet, es gibt mindestens einen Index $j\\in I$, sodass $f(x)\\in E_j$ oder äquivalent $x\\in f^{-1}(E_j)$. Insbesondere gilt $x\\in\\bigcup_{i\\in I}f^{-1}(E_i)$. Um den Beweis abzuschließen, zeigen wir, dass $\\bigcup_{i\\in I}f^{-1}(E_i)\\customsubset f^{-1}\\left(\\bigcup_{i\\in I}E_i\\right)$ gilt. Auch hier ist der Beweis trivial, wenn die Menge $\\bigcup_{i\\in I}f^{-1}(E_i)$ leer ist. Nehmen wir also an, diese Menge sei nicht leer und wählen ein beliebiges $x\\in \\bigcup_{i\\in I}f^{-1}(E_i)$. Das bedeutet, es gibt mindestens einen Index $j\\in I$, sodass $x\\in f^{-1}(E_j)$ oder äquivalent $f(x)\\in E_j$. Insbesondere gilt $f(x)\\in \\bigcup_{i\\in I}E_i$ und somit $x\\in f^{-1}(\\bigcup_{i\\in I}E_i)$. 
    \\item Ähnlich.
    \\item Wieder zeigen wir beide Inklusionen. Beginnen wir mit $f^{-1}(F\\setminus E)\\customsubset f^{-1}(F)\\setminus f^{-1}(E)$. Wenn die Menge $f^{-1}(F\\setminus E)$ leer ist, folgt der Beweis unmittelbar. Nehmen wir also an, es existiere ein $x\\in f^{-1}(F\\setminus E)$. Dies kann umformuliert werden als $f(x)\\in F\\setminus E$ oder äquivalent als $f(x)\\in F$ und $f(x)\\not\\in E$, oder äquivalent als $x\\in f^{-1}(F)$ und $x\\not\\in f^{-1}(E)$, d.h. $x\\in f^{-1}(F)\\setminus f^{-1}(E)$. Nun zeigen wir die umgekehrte Inklusion. Auch hier ist der Beweis trivial, wenn die Menge leer ist. Nehmen wir also an, es existiere ein $x\\in f^{-1}(F)\\setminus f^{-1}(E)$. Dies bedeutet, dass $f(x)\\in F$ und $f(x)\\not\\in E$, oder äquivalent, dass $f(x)\\in F\\setminus E$. Dies kann wiederum als $x\\in f^{-1}(F\\setminus E)$ umformuliert werden. 
    \\item Ähnlich. 
    \\item Ähnlich. Ein Gegenbeispiel für das Scheitern der inversen Inklusion $\\bigcap_{i\\in I}f(A_i)\\customsubset f(\\bigcap_{i\\in I}A_i)$ im allgemeinen Fall ist die konstante Funktion $f:\\mathbb{R}\\rightarrow\\mathbb{R}$, $f(x)=c$. Wenn wir zwei disjunkte Teilmengen $A,B\\customsubset\\mathbb{R}$ nehmen, sehen wir, dass $f(A\\cap B)=f(\\emptyset)=\\emptyset$, während $f(A)\\cap f(B)=\\{c\\}$. 
    \\item Wenn $f(B)\\setminus f(A)=\\emptyset$ ist, gibt es nichts weiter zu beweisen. Nehmen wir also an, es existiere ein $y\\in f(B)\\setminus f(A)$, dann muss es mindestens ein $x\\in B$ geben, sodass $f(x)=y$, aber es kann kein $z\\in A$ geben, sodass $y=f(z)$. Dies impliziert insbesondere, dass $x\\in B\\setminus A$ und somit $y=f(x)\\in f(B\\setminus A)$. Ein Gegenbeispiel für das Scheitern der umgekehrten Inklusion $f(B\\setminus A)\\customsubset f(B)\\setminus f(A)$ im allgemeinen Fall ist wiederum die konstante Funktion $f:\\mathbb{R}\\rightarrow\\mathbb{R},\\ f(x)= c$. Wenn wir beliebige $A,B\\customsubset\\mathbb{R}$ mit $B\\setminus A\\neq \\emptyset$ nehmen, sehen wir, dass $f(B)=f(A)=\\{c\\}$ und somit $f(B)\\setminus f(A)=\\emptyset$, aber $f(B\\setminus A)=\\{c\\}$. 
    \\item Ähnlich. 
    \\item Ähnlich. 
\\end{enumerate}
\\end{taggedblock}`,preview:"177c127a-be14-4d49-b9f6-907f6924a147.png"},{uuid:"1ea50663-03b6-4dbc-92ca-9d03c36ed8d7",title:["Maßraum","messbar","Lebesgue-integrabel","Lebesgue"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:4,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $(X,\\mathcal{M},\\mu)$ ein Maßraum, $f:X\\rightarrow\\R$ integrabel und $g:X\\rightarrow\\R$ eine messbare, beschränkte Funktion. Zeigen Sie, dass $fg$ integrabel ist.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
Zunächst ist $fg$ messbar da das Produkt zweier messbarer Funktionen wieder messbar ist.\\\\
Da $|f|$ integrabel ist und $|f|\\geq0$, gibt es eine aufsteigende Folge von Treppenfunktionen $\\varphi_n:X\\rightarrow\\R$, die punktweise f.ü. gegen $|f|$ konvergiert. Da $|g|$ messbar ist und $|g|\\geq0$, gibt es eine aufsteigende Folge von Stufenfunktionen $\\psi_n:X\\rightarrow\\R$, die punktweise f.ü. gegen $|g|$ konvergiert.\\\\ 
Die Folge $(\\xi_n)_{n\\in\\N}$, definiert durch $\\xi_n(x):=\\varphi_n(x)\\psi_n(x)$, ist dann eine aufsteigende Folge von Treppenfunktionen, die punktweise f.ü. gegen $|f||g|=|fg|$ konvergiert; nach Abändern von $fg$ auf einer Nullmenge nehme an, dass $\\xi_n\\nearrow|fg|$ überall. Die $\\xi_n$ sind als Treppenfunktionen natürlich integrabel. Da $0\\leq\\psi_n\\leq|g|\\leq C$ und $0\\leq\\varphi_n\\leq|f|$, folgt dass $0\\leq\\xi_n\\leq C|f|$. Wegen der Monotonie des Integrals gilt daher $\\int_X \\xi_n\\,d\\mu\\leq C\\int_X |f|\\,d\\mu<\\infty$ für alle $n\\in\\N$. Nach dem Satz von der monotonen Konvergenz folgt daher, dass $|fg|=\\lim_{n\\rightarrow\\infty}\\xi_n$ integrabel ist. Also ist auch $fg$ integrabel.
\\end{taggedblock}`,preview:"1ea50663-03b6-4dbc-92ca-9d03c36ed8d7.png"},{uuid:"8b337582-0492-42dc-86da-b30e2dc59231",title:["Maßraum","Lebesguesche Nullmenge","Lebesgue","Borelmenge"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:3,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Beweisen Sie:
\\begin{enumerate}
	\\item Ist $(A_n)_{n\\in\\N}$ eine Folge meßbarer Mengen in einem Maßraum $(X,\\mathcal{M},\\mu)$ mit den Eigenschaften $A_{n+1}\\customsubset A_n$ für alle $n\\in\\N$ und $\\lim_{n\\rightarrow\\infty}\\mu(A_n)=0$, dann ist $\\bigcap_{n\\in\\N}A_n$ eine $\\mu$-Nullmenge.
	\\item Eine Menge $B\\customsubset\\R$ ist genau dann eine Lebesguesche Nullmenge, wenn es zu jedem $\\eps>0$ eine Folge offener Intervalle $(I_n)_{n\\in\\N}$ gibt, so dass $B\\customsubset \\bigcup_{n\\in\\N}I_n$ und $\\sum_{n\\in\\N}\\mu(I_n)<\\eps$ gilt.
	\\item Jede abzählbare Teilmenge $A\\customsubset\\R$ ist eine Lebesguesche Nullmenge.
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
\\begin{enumerate}
	\\item Es gilt: $N:=\\bigcap_{n \\in \\mathbb{N}} A_n=\\big(\\bigcup_{n \\in \\mathbb{N}} A_n^C\\big)^C$, also ist $N$ eine Borelmenge und somit meßbar. Da $N\\customsubset A_n$ für alle $n\\in\\mathbb{N}$, folgt $0\\leq\\mu(N)\\leq\\mu(A_n)$ für alle $n\\in\\mathbb{N}$. Wegen $\\lim_{n\\to \\infty}\\mu(A_n)=0$ folgt die Behauptung.
  
\\item Bezeichne $\\mu$ das Lebesguemaß und $\\mathcal{A}$ die Mengenalgebra der endlichen Vereinigungen endlicher Intervalle. Betrachte zwei Richtungen:\\\\
$\`\`\\Rightarrow''$ Sei $B \\customsubset \\mathbb{R}$ eine Lebesgue Nullmenge.
Nach Konstruktion des äußeren Maßes ist 
$$0=\\mu^*(B)=\\text{inf}\\Big\\{ \\sum_{n\\in\\N}\\mu(A_n)\\,\\Big|\\,B\\customsubset\\bigcup_{n\\in\\N}A_n\\text{ und }(A_n)_{n\\in\\N}\\customsubset\\mathcal{A}\\Big\\}\\,.$$
Zu jedem $\\eps>0$ existiert also eine Folge endlicher Intervalle $(J_n)_{n\\in\\N}$ mit $B\\customsubset\\bigcup_{n\\in\\N}J_n$ und $\\sum_{n\\in\\N}\\mu(J_n)<\\frac{\\eps}{2}$. Die Intervalle $J_n$ sind allerdings i.A. nicht offen! Man kann aber zu jedem endlichen Intervall $J_n$ ein offenes Intervall $I_n$ finden mit $J_n\\customsubset I_n$ und $\\mu(I_n)\\leq \\mu(J_n)+\\frac{\\eps}{2^{n+1}}$, indem man die Intervallgrenzen entsprechend erweitert. Dann ist $B\\customsubset\\bigcup_{n\\in\\N}I_n$ und es gilt
$$\\sum_{n\\in\\N}\\mu(I_n)\\leq \\sum_{n\\in\\N}\\big(\\mu(J_n)+\\frac{\\eps}{2^{n+1}}\\big)=\\frac{\\eps}{2}+\\sum_{n\\in\\N}\\mu(J_n)<\\eps\\,.$$

$\`\`\\Leftarrow''$ Angenommen, es gibt für jedes $\\eps >0$ eine Folge offener Intervalle $(I_n)_{n\\in \\mathbb{N}}$, s.d. $B\\customsubset \\bigcup_{n\\in \\mathbb{N}}I_n$ und $\\sum_{n\\in \\mathbb{N}} \\mu (I_n)<\\eps$. Da alle $I_n\\in\\mathcal{A}$ sind, folgt 
$$\\mu^*(B)=\\text{inf}\\Big\\{ \\sum_{n\\in\\N}\\mu(A_n)\\,\\Big|\\,B\\customsubset\\bigcup_{n\\in\\N}A_n\\text{ und }(A_n)_{n\\in\\N}\\customsubset\\mathcal{A}\\Big\\}<\\eps$$
für jedes $\\eps >0$. Also ist $\\mu^*(B)=0$ und $B$ somit Lebesguesche Nullmenge.

\\item A ist abzählbar, also $A= \\bigcup_{n=0}^{\\infty}a_n$, wobei $a_n$ in $\\mathbb{R}$ für alle $n\\in \\mathbb{N}$.
Für $\\eps>0$ betrachte die Folge offener Intervalle $(I_n)_{n\\in\\N}$, gegeben durch $I_n=(a_n-\\frac{\\eps}{2^{n+3}},a_n+\\frac{\\eps}{2^{n+3}})$. Dann gilt $A\\customsubset\\bigcup_{n\\in\\N}I_n$ und $$\\sum_{n\\in\\N}\\mu(I_n)=\\sum_{n\\in\\N}\\frac{\\eps}{2^{n+2}}=\\frac{\\eps}{4}\\sum_{n\\in\\N}2^{-n}=\\frac{\\eps}{2}<\\eps\\,.$$
Nach Teil ii) folgt, dass $A$ Lebesguesche Nullmenge ist.
\\end{enumerate}
\\end{taggedblock}`,preview:"8b337582-0492-42dc-86da-b30e2dc59231.png"},{uuid:"58c2ee29-ee13-4acc-9042-86fe4efba222",title:["sigma-algebra"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:0,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $X$ eine Menge und $Z\\customsubset X$. Für jede Familie $\\mathcal{A}\\customsubset\\mathcal{P}(X)$ definieren wir die Familie $$ \\mathcal{A}|_{Z}:=\\{A\\cap Z\\:|\\: A\\in\\mathcal{A} \\}\\customsubset \\mathcal{P}(Z). $$ Beweise die folgenden Aussagen:
\\begin{enumerate}
	\\item Wenn $\\mathcal{M}$ eine $\\sigma$-Algebra über $X$ ist, dann ist $\\mathcal{M}|_{Z}$ eine $\\sigma$-Algebra über $Z$. 
	\\item Wenn $\\mathcal{C}\\customsubset \\mathcal{P}(X)$, dann gilt $\\mathcal{M}(\\mathcal{C})|_{Z}=\\mathcal{M}(\\mathcal{C}|_Z)$. 
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
\\begin{enumerate}
	\\item 
    \\begin{itemize}
        \\item Die Tatsache, dass $\\emptyset\\in\\mathcal{M}|_Z$, folgt unmittelbar aus $\\emptyset \\in\\mathcal{M}$ und $\\emptyset\\cap Z=\\emptyset$. 
        \\item Angenommen, $S\\in\\mathcal{M}|_Z$, dann gilt $S=\\tilde{S}\\cap Z$ für ein $\\tilde{S}\\in\\mathcal{M}$. An dieser Stelle, dank der Identitäten $$ Z\\setminus S= Z\\setminus(\\tilde{S}\\cap Z)=(X\\setminus \\tilde{S})\\cap Z, $$ und der Tatsache, dass $\\mathcal{M}$ eine $\\sigma$-Algebra ist, sehen wir, dass $Z\\setminus S\\in\\mathcal{M}|_Z$. 
        \\item Sei $\\{S_i \\}_{i\\in I}$ eine Familie von Teilmengen von $\\mathcal{M}|_Z$, dann haben wir für jedes $i\\in I$ $S_i=\\tilde{S}_i\\cap Z$ für ein $\\tilde{S}_i\\in\\mathcal{M}$. Dank der folgenden Identitäten: 
        $$ \\bigcup_{i\\in I}S_i=\\bigcup_{i\\in I}(\\tilde{S}_i\\cap Z)=\\left(\\bigcup_{i\\in I}\\tilde{S}_i\\right)\\cap Z, $$
        und der Tatsache, dass $\\mathcal{M}$ eine $\\sigma$-Algebra ist, sehen wir, dass $\\bigcup_{i\\in I}S_i\\in\\mathcal{M}|_Z$. 
    \\end{itemize}
    
	\\item Es genügt zu zeigen, dass $\\mathcal{M}(\\mathcal{C})|_{Z}$ die kleinste $\\sigma$-Algebra auf $Z$ ist, die $\\mathcal{C}|_Z$ enthält. Betrachte daher jede andere $\\sigma$-Algebra $\\mathcal{A}$ auf $Z$, so dass $\\mathcal{C}|_Z\\customsubset\\mathcal{A}$ gilt, und definiere 
    $$ \\tilde{\\mathcal{A}}:=\\{S\\customsubset X\\:|\\: S\\cap Z\\in \\mathcal{A} \\}. $$ 
	Es ist leicht zu beweisen, dass $\\tilde{\\mathcal{A}}$ eine $\\sigma$-Algebra auf $X$ ist. Darüber hinaus haben wir aufgrund der Konstruktion $\\mathcal{C}\\customsubset\\tilde{\\mathcal{A}}$. Gemäß der Definition der erzeugten $\\sigma$-Algebra impliziert dies $\\mathcal{M}(\\mathcal{C})\\customsubset\\tilde{\\mathcal{A}}$ und somit erhalten wir durch die Definition von $\\tilde{\\mathcal{A}}$, dass $\\mathcal{M}(\\mathcal{C})|_Z\\customsubset \\mathcal{A}$ ist, und der Beweis ist abgeschlossen. 
\\end{enumerate}
\\end{taggedblock}`,preview:"58c2ee29-ee13-4acc-9042-86fe4efba222.png"},{uuid:"ec36f833-ac53-425e-b7cc-5c5e74dd8a52",title:["Maßraum","messbar","messbare Funktion","Lebesgue-Integrabel","Lebesgue","mu-integrabel"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:4,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $(X,\\mathcal{M},\\mu)$ ein Maßraum und $(f_n)_{n\\in\\N}$ eine Folge messbarer Funktionen $f_n:X\\rightarrow\\R$ mit $f_1\\geq f_2\\geq \\ldots\\geq0$. Außerdem sei $f_1$ $\\mu$-integrabel und $f:X\\rightarrow\\R$ sei definiert durch $f(x):=\\lim_{n\\rightarrow\\infty}f_n(x)$.
\\begin{itemize}
	\\item[i)] Zeigen Sie: $f$ ist Lebesgue-integrabel und es gilt
	$$\\int_X f\\,d\\mu=\\lim_{n\\rightarrow\\infty}\\int_X f_n\\,d\\mu\\,.$$
	\\item[ii)] Gilt die Aussage von i) auch, wenn die Funktion $f_1$ nicht $\\mu$-integrabel ist? 
\\end{itemize}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
\\begin{enumerate}
	\\item Die Funktion 
	$$g_n(x):=\\left\\{\\begin{tabular}{ll}
	     $\\frac{f_n(x)}{f_1(x)}$, & $f_1(x)>0$ \\\\
	     $0$, & $f_1(x)=0$ 
	\\end{tabular}\\right.$$
	ist messbar und beschränkt für alle $n\\in\\N$. Da außerdem $f_1$ integrabel ist, ist das Produkt $f_n=g_nf_1$ integrabel für alle $n\\in\\N$.\\\\
	Jetzt kann man entweder monotone Konvergenz benutzen, denn die Folge $(-f_n)_{n\\in\\N}$ ist eine aufsteigende Folge integrabler Funktionen und $\\int_X (-f_n)\\,d\\mu\\leq0$ für alle $n\\in\\N$.\\\\
	Oder man benutzt dominierte Konvergenz: Erstens ist $(f_n(x))_{n\\in\\N}$ eine monoton fallende, beschränkte reelle Folge für alle $x\\in X$ und damit konvergiert $(f_n)_{n\\in\\N}$ punktweise. Zweitens sind die Funktionen $f_n$ dominiert durch die integrable Funktion $f_1$.
	\\item Als Gegenbeispiel betrachte die Funktionenfolge $f_n:\\R\\rightarrow\\R$, definiert durch $f_n(x):=1+\\frac{1}{n}$. Dann ist weder $f_1$ integrabel, noch $f(x)=\\lim_{n\\rightarrow\\infty}f_n(x)=1$.\\\\
	Ein weiteres Gegenbeispiel, diesmal für einen Maßaraum $X$ mit $\\mu(X)<\\infty$: Sei $X=(0,1)$ mit dem Lebesguemaß und $f_n:(0,1)\\rightarrow(0,\\infty)$ definiert durch $f_n(x):=\\frac{1}{nx}$. Dann ist zwar $f(x)=\\lim_{n\\rightarrow\\infty}f_n(x)=0$ integrabel, aber $f_n$ ist nicht integrabel für alle $n\\in\\N$, daher kann man nicht Integral und Grenzwert vertauschen.
\\end{enumerate}
\\end{taggedblock}`,preview:"ec36f833-ac53-425e-b7cc-5c5e74dd8a52.png"},{uuid:"ac448599-f556-4701-9945-14c2597af854",title:["Jensensche Ungleichung","konvex"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:5,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $\\phi:(a,b)\\rightarrow\\R$ eine konvexe Funktion. 
\\begin{enumerate}
	\\item Zeigen Sie: Zu jedem $t\\in(a,b)$ gibt es eine Konstante $c\\in\\R$, so dass
	$$\\phi(s)\\geq \\phi(t)+c(s-t)\\qquad\\text{für alle }s\\in(a,b)\\,.$$
	\\item Sei $(X,\\mathcal{M},\\mu)$ ein Maßraum mit $\\mu(X)=1$. Zeigen Sie die \\textit{Jensensche Ungleichung}
	$$\\phi\\Big(\\int_X f\\,d\\mu\\Big)\\leq \\int_X \\phi\\circ f\\,d\\mu$$
	für alle Funktionen $f\\in L^1(X)$ mit $f(X)\\subset (a,b)$.\\\\
\\end{enumerate}
\\emph{Erinnerung:} Eine Funktion $\\phi:(a,b)\\rightarrow\\R$ heißt konvex, falls für alle $x,y\\in(a,b)$ und $\\lambda\\in(0,1)$ gilt: $\\phi(\\lambda x+(1-\\lambda)y)\\leq\\lambda\\phi(x)+(1-\\lambda)\\phi(y)$.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
\\begin{enumerate}
    \\item Wir machen zuerst eine kleine Vor\\"uberlegung.
    Seien dazu $s,t,u \\in (a,b)$ mit $s<t<u$ gegeben. Dann gibt es
    ein eindeutiges $\\lambda \\in (0,1)$ mit $t = \\lambda u +
    (1-\\lambda) s = s + \\lambda (u-s)$, n\\"amlich
    \\[
    \\lambda = \\frac{t-s}{u-s} \\,.
    \\]
    Da $\\phi$ konvex ist folgt
    \\begin{align*}
        \\phi(t)
        &= \\phi(\\lambda u + (1-\\lambda) s) \\\\
        &\\leq\\lambda \\phi(u) + (1-\\lambda) \\phi(s) \\\\
        &= \\phi(s) + \\lambda (\\phi(u)-\\phi(s)) 
        = \\phi(s) +  \\frac{\\phi(u)-\\phi(s)}{u-s}(t-s) \\,.
    \\end{align*}
    Da $t-s > 0$, folgt hieraus die Ungleichung
    \\[
    \\frac{\\phi(t)-\\phi(s)}{t-s}
    \\leq \\frac{\\phi(u)-\\phi(s)}{u-s} \\,. 
    \\tag{$*$}
    \\]
    Wenn wir $\\lambda' = 1-\\lambda \\in (0,1)$ setzen, dann gilt aber
    auch $t = \\lambda'u + (1-\\lambda')s$. Wenden wir hierauf analog
    wie vorhin wieder die Konvexit\\"at von $\\phi$ an, so erhalten wir
    auch noch die Ungleichung
    \\[
    \\frac{\\phi(t)-\\phi(u)}{t-u}
    \\geq \\frac{\\phi(u)-\\phi(s)}{u-s} \\,. 
    \\tag{$**$}
    \\]
    Man beachte hier, dass sich die Ungleichung umgedreht hat, da wir
    nun an einer Stelle der Rechnung durch $t-u<0$ geteilt haben. Aus
    ($*$) und ($**$) zusammen ergibt sich nun, dass f\\"ur alle $s < t
    < u$ die folgende Ungleichung gilt:
    \\[
    \\frac{\\phi(t)-\\phi(s)}{t-s}
    \\leq \\frac{\\phi(u)-\\phi(s)}{u-s}
    \\leq \\frac{\\phi(t)-\\phi(u)}{t-u}
    \\tag{$\\square$} \\,.
    \\]
    (\\emph{Bem.}: Aus der Analysis 1 ist bekannt, dass dies sogar äquivalent zur Konvexität von $\\phi$ ist).
    
    Nun zeigen wir die Behauptung. Sei also $t \\in (a,b)$ fixiert.
    Wegen ($\\square$) ist die Menge
    \\[
    M_t
    := \\left\\{
        \\frac{\\phi(t)-\\phi(s)}{t-s}
    \\right| \\left. \\phantom{ \\frac{\\phi(t)-\\phi(s)}{t-s} }
        \\hspace{-1.8cm}
        s < t
    \\right\\}
    \\]
    von oben beschr\\"ankt. Daher existiert $c := \\sup M_t$. Dann folgt
    aus ($\\square$), dass f\\"ur alle $s,u \\in (a,b)$ mit $s<t<u$ die
    Ungleichung
    \\[
    \\frac{\\phi(t)-\\phi(s)}{t-s}
    \\leq c
    \\leq \\frac{\\phi(t)-\\phi(u)}{t-u}
    \\]
    gilt. Aus der linken Ungleichung folgt, dass f\\"ur alle $s < t$
    die Ungleichung
    \\[
    \\phi(s) \\geq \\phi(t) + c (s-t)
    \\]
    gilt. Und aus der rechten Ungleichung folgt, dass f\\"ur alle $u >
    t$ die Ungleichung
    \\[
    \\phi(u) \\geq  \\phi(t) + c(u-t)
    \\]
    gilt. Man beachte, dass sich hier die Ungleichung wieder umdreht,
    wenn wir mit $t-u < 0$ durch\\-mul\\-ti\\-pli\\-zie\\-ren. Also haben
    wir die gesuchte Konstante $c \\in \\mathbb{R}$ gefunden.
    \\item Setze $t := \\int_X f(x) \\diff x$. Aus $f(X) \\subset
    (a,b)$ und $\\mu(X) = 1$ folgt, dass $t \\in (a,b)$. Nach dem ersten
    Teil finden wir $c \\in \\mathbb{R}$, so dass $\\phi(s) \\geq \\phi(t)
    + c(s-t)$ gilt f\\"ur alle $s \\in (a,b)$. Indem wir hier $s = f(x)$
    setzen, erhalten wir die Ungleichung
    \\[
    \\phi(f(x)) \\geq \\phi(t) + c(f(x)-t) \\,.
    \\]
    Integration \\"uber $X$ liefert dann die Behauptung:
    \\[
    \\int_X (\\phi \\circ f)(x) \\diff x
    \\geq \\phi \\left( \\int_X f(x) \\diff \\mu \\right)
    + c \\bigg(
    \\underbrace{\\int_X f(x) \\diff x}_{=t} 
    - \\underbrace{\\int_X t \\diff x}_{= t \\mu(X) = t}
    \\bigg)
    = \\phi \\left( \\int_X f(x) \\diff \\mu \\right) \\,.
    \\]
\\end{enumerate}

\\end{taggedblock}`,preview:"ac448599-f556-4701-9945-14c2597af854.png"},{uuid:"8d99d2ef-26d2-497c-91e4-a971b1297a2e",title:["messbare Funktion","messbar"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:1,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $f:(0,1)\\rightarrow\\R$ definiert durch
$$f(x):=(1+k)(1-kx)\\quad\\text{für}\\; x\\in \\Big[\\frac{1}{k+1},\\frac{1}{k}\\Big)\\;\\text{und}\\;k\\in\\N\\setminus\\{0\\}.$$
Zeigen Sie, dass $f$ messbar ist.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
Sei $q\\in\\Q$. Die Menge $\\left\\{x\\in(0,1)\\mid f(x)>q\\right\\}$ ist gegeben durch 
\\begin{align*}
    \\left\\{x\\in(0,1)\\mid f(x)>q\\right\\}&=
    \\bigcup\\limits_{k\\in\\N\\setminus\\{0\\}}\\left\\{x\\in(0,1)\\mid(1+k)(1-kx)>q\\text{ und }x\\in\\left[\\frac{1}{k+1},\\frac{1}{k}\\right]\\right\\}\\\\
    &=\\bigcup\\limits_{k\\in\\N\\setminus\\{0\\}}\\left\\{x\\in(0,1)\\mid x<\\frac{k+1-q}{k^2+k}\\text{ und }x\\in\\left[\\frac{1}{k+1},\\frac{1}{k}\\right]\\right\\}=:
    \\bigcup\\limits_{k\\in\\N\\setminus\\{0\\}}W_{k,q}.
\\end{align*}
    Die Mengen $W_{k,q}$ sind gegeben durch
    $$W_{k,q}=\\left\\{\\begin{tabular}{cl}
        $\\emptyset$, & falls $\\frac{k+1-q}{k^2+k}<\\frac{1}{k+1}$,\\\\
        $\\left[\\frac{1}{k+1},\\frac{k+1-1}{k^2+k}\\right)$, & falls $\\frac{k+1-q}{k^2+k}\\in\\left[\\frac{1}{k+1},\\frac{1}{k}\\right),$\\\\
        $\\left[\\frac{1}{k+1},\\frac{1}{k}\\right)$, & falls $\\frac{k+1-q}{k^2+k}\\geq\\frac{1}{k}$
    \\end{tabular}\\right..$$
    In jedem Fall ist $W_{k,q}$ eine Borelmenge, also messbar. Damit ist für jedes $q\\in\\Q$ die \\\\Menge~\${\\{x\\in(0,1)\\mid f(x)>q\\}}$ messbar als abzählige Vereinigung messbarer Mengen. Somit ist $f$ messbar.
\\end{taggedblock}`,preview:"8d99d2ef-26d2-497c-91e4-a971b1297a2e.png"},{uuid:"360a91ae-e41d-4d10-a65c-726945f74ef4",title:["Maßraum","messbar"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:2,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $X$ ein Maßraum und $f_n:X\\rightarrow\\R$ eine Folge messbarer Funktionen. Zeigen Sie, dass die Menge~\${A:=\\{x\\in X\\,|\\,(f_n(x))_{n\\in\\N}\\text{ konvergiert}\\}}$ messbar ist.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
Sei $F$ eine Funktion, die wie folgt definiert ist: 
\\begin{align*} F: X & \\longrightarrow \\bar\\R^2\\\\ x & \\longmapsto (\\liminf_{n\\to +\\infty}f_n(x), \\limsup_{n\\to +\\infty}f_n(x)). 
\\end{align*} Wir wissen, dass die Funktionen $\\liminf_{n\\to +\\infty}f_n$ und $\\limsup_{n\\to +\\infty}f_n$ messbar sind somit ist die Funktion $F$ dann messbar. \\\\ 
Die oben definierte Menge $A$ kann wie folgt geschrieben werden: \\begin{align*} A & = \\{x\\in X \\;\\vert\\; \\liminf_{n\\to +\\infty}f_n(x)=\\limsup_{n\\to +\\infty}f_n(x)<+\\infty\\}\\\\ & = F^{-1}(\\{(x,x)\\in \\R^2\\}). 
\\end{align*} 
Beachte, dass die Menge $\\{(x,x)\\in \\R^2\\}$ messbar ist. Daraus folgt, dass $A$ messbar ist.
\\end{taggedblock}`,preview:"360a91ae-e41d-4d10-a65c-726945f74ef4.png"},{uuid:"5b643034-9e3d-48f8-93ae-48e1fd43c7c7",title:["monoton","messbar","messbare Funktion"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:1,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
    Zeigen Sie, dass jede monotone Funktion $f:\\R\\rightarrow\\R$ messbar ist.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
Sei oE $f$ monoton wachsend (ansonsten betrachte $-f$). Betrachte monoton wachsende Intervalle $A$ der Form $(a,\\infty)$ mit $a \\in\\R$. Ist $f^{-1}(A)$ leer, so ist $f^{-1}(A)$ bereits messbar. Sei also $f^{-1}(A)$ nicht leer. Ist nun $x \\in\\R$ in $f^{-1}(A)$ enthalten, d.h. $f(x)\\in(a,\\infty)$, dann folgt, da $f$ monoton steigend ist, dass $f(b) \\geq f(x)$ für alle $b > x$ gilt, und somit $b \\in f^{-1}(A)$. Man unterscheide nun zwei Fälle.
\\begin{itemize}
    \\item Entweder ist $f^{-1}(A)$ nach unten unbeschränkt. Dann folgt bereits $f^{-1}(A) = \\R$, was eine messbare Menge ist.
    \\item Oder $f^{-1}(A)$ ist nach unten beschränkt. Dann existiert ein $y \\in\\R$ mit $y = \\inf f^{-1}(A)$. Je nachdem ob $y$ in $f^{-1}(A)$ enthalten ist oder nicht, gilt $f^{-1}(A) = [y,\\infty)$ oder $f^{-1}(A) = (y,\\infty)$.
\\end{itemize}
In beiden Fällen ist $f^{-1}(A)$ jedoch messbar.
Insgesamt folgt, dass $f^{-1}(A)$ messbar ist und da die Mengen der Form $(a,\\infty)$ die Borelsche-$\\sigma$-Algebra erzeugen, folgt bereits, dass $f$ messbar ist.
\\end{taggedblock}`,preview:"5b643034-9e3d-48f8-93ae-48e1fd43c7c7.png"},{uuid:"c04376ed-7eef-4a69-b0e8-cfc2908003ea",title:["Riemann-Integral","Riemann","Lebesgue","mu-messbar"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:4,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Die Funktion $r:\\R\\rightarrow\\R$ sei definiert durch
$$r(x):=\\left\\{\\begin{tabular}{ll}
    1,& $\\text{falls $x$ rational} $ \\\\
    0, & $\\text{falls $x$ irrational}$
\\end{tabular}\\right..$$
\\begin{enumerate}
	\\item Ist $r$ Riemann-integrabel?
	\\item Ist $r$ $\\mu$-messbar? Falls ja, ist $r$ Lebesgue-integrabel?
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
\\begin{enumerate}
\\item Sei zunächst oBdA der Integrationsbereich ein Intervall $(a,b)$.\\\\
Zunächst gilt nach Analysis I für jede Zerlegung $a=x_1<x_2<\\ldots<x_n=b$ des Intervalls $(a,b)$:\\\\
$\\forall j\\in\\{1,\\ldots,n\\}\\exists q_{j}\\in (x_j,x_{j+1})$ mit $q_{j}\\in\\mathbb{Q}$ und\\\\
$\\forall j\\in\\{1,\\dots,n\\}\\exists p_{j}\\in (x_j,x_{j+1})$ mit $p_{j}\\in\\mathbb{R}\\setminus\\mathbb{Q}$.\\\\
$\\Rightarrow$ Für jede Zerlegung von $(a,b)$ gilt dann für die Ober- bzw. Untersumme:\\\\
$U=\\sum_{j=0}^n(x_{j+1}-x_j)\\cdot \\inf_{x_j<x<x_{j+1}}r(x)=0$, da $r(p_{j})=0$, und\\\\
$O=\\sum_{j=0}^n(x_{j+1}-x_j)\\cdot \\sup_{x_j<x<x_{j+1}}r(x)=1$, da $r(q_{j})=1$.\\\\
$\\Rightarrow$ Das Infimum der Obersummen ist also ungleich dem Supremum der Untersummen, und daher existiert das Riemann-Integral von $r$ auf $(a,b)$ nicht.
\\item Wir verwenden zunächst, dass jede abzählbare Teilmenge $A\\subset\\mathbb{R}$ eine Lebesgue-Nullmenge ist.\\\\
Da nach Analysis I $\\mathbb{Q}$ abzählbar ist, ist $\\mathbb{Q}$ eine Lebesgue-Nullmenge.\\\\
$\\Rightarrow$ $r(x)\\equiv 0$ $\\mu$-fast-überall und damit auch $\\mu$-messbar und Lebesgue-integrabel.
\\end{enumerate}
\\end{taggedblock}`,preview:"c04376ed-7eef-4a69-b0e8-cfc2908003ea.png"},{uuid:"8cb97812-6840-4f66-92a2-5a4dc7c221cf",title:["Lemma von Fatou","Fatou","messbar","Satz über monotone Konvergenz"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:5,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{Lemma von Fatou} 
 
\\begin{taggedblock}{GermanExercise}
Sei $(X,\\mathcal{M},\\mu)$ ein Maßraum und $(f_n)_{n\\in\\N}$ eine Folge messbarer Funktionen $f_n:X\\rightarrow\\R$ mit $f_n(x)\\geq0$ für alle $x\\in X$. Außerdem sei die Funktion $f:X\\rightarrow\\R$ gegeben durch $f(x):=\\liminf_{n\\rightarrow\\infty}f_n(x)$. Zeigen Sie, dass gilt:
$$\\int_X f\\,d\\mu \\leq \\liminf_{n\\rightarrow\\infty}\\int_X f_n\\,d\\mu\\,.$$
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
Im Folgenden ist stets zu beachten, dass in $[0,\\infty]$ gerechnet wird. Es kann daher durchaus auch $+\\infty$ als Wert von Integralen auftreten.

    Für jedes $k \\in \\mathbb{N}$ definiere $g_k: X \\rightarrow
    [0,\\infty]$ durch $g_k(x) = \\inf_{n \\geq k} f_n(x)$. Das Infimum
    existiert hier, da alle $f_k$ von unten durch $0$ beschränkt
    sind. Außerdem sind alle $g_k$ messbar. Weiter ist $g_k \\leq f_k$ und somit gilt in $[0,\\infty]$ die
    Ungleichung
    \\[
    \\int_X g_k \\diff \\mu \\leq \\int_X f_k \\diff \\mu
    \\tag{$*$}.
    \\]
    Au{\\ss}erdem gilt $0 \\leq g_1 \\leq g_2 \\leq \\dots$ und nach
    Definition des Limes inferior gilt $\\lim_{k \\rightarrow \\infty}
    g_k = \\liminf_{n \\rightarrow \\infty} f_n$. Mit dem Satz über
    monotone Konvergenz folgt deshalb
    \\[
    \\lim_{k \\rightarrow \\infty} \\int_X g_k \\diff \\mu
    = \\int_X \\lim_{k \\rightarrow \\infty} g_k \\diff \\mu
    = \\int_X \\liminf_{n \\rightarrow \\infty} f_n \\diff \\mu.
    \\]
    Da die Folge der $g_k$ monoton steigt, steigt auch die Folge
    $\\int_X g_k \\diff \\mu$ monoton in $[0,\\infty]$. Dann muss sie aber in
    $[0,\\infty]$ schon konvergieren. Deshalb gilt auch
    \\[
    \\lim_{k \\rightarrow \\infty} \\int_X g_k \\diff \\mu
    = \\liminf_{k \\rightarrow \\infty} \\int_X g_k \\diff \\mu
    \\stackrel{(*)}{\\leq}
    \\liminf_{k \\rightarrow\\infty} \\int_X f_k \\diff \\mu.
    \\]
    Die letzten beiden Rechnungen ergeben zusammen nun die
    Behauptung.
\\end{taggedblock}`,preview:"8cb97812-6840-4f66-92a2-5a4dc7c221cf.png"},{uuid:"eaa3bc2a-5693-4644-b2f0-7f81107aba34",title:["rechtsstetig","Maß","Verteilung"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:2,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Eine Funktion $F:\\R\\rightarrow\\R$ heißt rechtsstetig, wenn für alle $p\\in\\R$ und jede monoton fallende Folge $(x_n)_{n\\in\\N}$ mit~$\\lim_{n\\rightarrow\\infty}x_n=p$  gilt: $\\lim_{n\\rightarrow\\infty}F(x_n)=F(p)$.
\\begin{enumerate}
	\\item Sei $\\mu$ ein Maß auf $\\R$ und $\\mu(\\R)<\\infty$. Zeigen Sie, dass dann durch 
	$$F(x):=\\mu\\big((-\\infty,x]\\big)$$ 
	eine rechtsstetige, monoton wachsende Funktion $F:\\R\\rightarrow\\R$ definiert wird, die sogenannte \\textit{Verteilung} von $\\mu$.
	\\item Sei umgekehrt $F:\\R\\rightarrow\\R$ monoton wachsend und rechtsstetig. Zeigen Sie, dass die endlichen disjunkten Vereinigungen von Intervallen der Gestalt $(a,b]$ eine Mengenalgebra $\\mathcal{A}$ auf $\\R$ bilden, und dass durch 
	$$\\mu\\big((a,b]\\big):=F(b)-F(a)$$
	ein Prämaß auf $\\mathcal{A}$ definiert wird.
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
\\begin{enumerate}
    \\item Sei $(x_n)_{n\\in\\N}$ eine konvergente abnehmende Folge mit $\\lim_{n\\to +\\infty}x_n=p$. Da $(x_n)_{n\\in\\N}$ abnehmend ist, gilt $(x_n,+\\infty)\\customsubset (x_{n+1},+ \\infty)$ für jedes $n\\in \\N$. Somit ist $\\bigcup_{n\\in\\N}(x_n,+\\infty)=(p,+\\infty)$ und $\\lim_{n\\to+\\infty}\\mu((x_n,+\\infty))=\\mu((p,+\\infty))$. 
    \\footnote{Um zu zeigen, dass $\\lim_{n\\to+\\infty}\\mu((x_n,+\\infty))=\\mu((p,+\\infty))$, betrachten wir $B_n=(x_{n+1},x_n)$ für jedes $n\\geq 1$ und $B_0=(x_0,+\\infty)$. Die $B_n$ erfüllen folgendes: $B_n\\cap B_m=\\emptyset$ für jedes $n\\neq m$, $(x_n,+\\infty)=\\bigcup_{m=0}^nB_m$, $\\bigcup_{n\\in\\N}B_n=(p,+\\infty)$. Daher ist $\\mu((x_n,+\\infty))=\\mu(\\bigcup_{m=0}nB_m)=\\sum_{m=0}n\\mu(B_m).$ Wenn wir das Limit nehmen, erhalten wir $\\lim_{n\\to+\\infty}\\mu((x_n,+\\infty)=\\sum_{m=0}^{+\\infty}\\mu(B_m)=\\mu(\\bigcup_{m\\in\\N}B_m)=\\mu((p,+\\infty))$.}
    Unter Verwendung von $\\mu(\\R)=F(x_n)+\\mu((x_n,+\\infty))$, erhalten wir $$\\lim_{n\\to+\\infty}F(x_n)=\\mu(\\R)- \\lim_{n\\to+\\infty}\\mu((x_n,+\\infty))=\\mu(\\R)-\\mu((p,+\\infty))=F(p).$$ Somit ist $F$ rechtsstetig. Seien $x$ und $y$ zwei reelle Zahlen, sodass $x<y$. Daher $(-\\infty,x]\\customsubset (-\\infty,y]$. Es folgt, dass $F(x)=\\mu((-\\infty,x])\\leq\\mu((-\\infty,y])=F(y)$. Die Funktion $F$ ist monoton wachsend.

    \\item Um zu beweisen, dass $\\mathcal{A}$ ein Körper ist, müssen wir zeigen, dass $\\emptyset\\in \\mathcal{A}$ und für $A, B\\in \\mathcal A$, auch $A\\cup B$, $A\\cap B$ und $A\\setminus B$ in $\\mathcal{A}$ liegen. Gemäß der Definition von $\\mathcal A$ reicht es aus zu zeigen, dass diese Aussagen für $A=(a,b]$ und $B=(c,d]$ gelten.\\\\
    Wir haben $\\emptyset=(a,a]\\in \\mathcal A$. Wir überprüfen, dass 
    \\begin{itemize} 
        \\item Wenn $c\\geq b$ oder $a\\geq d$, dann $(a,b]\\cup(c,d]=(a,b]\\cup(c,d]$, $(a,b]\\cap(c,d]=\\emptyset$ und $(a,b]\\setminus(c,d]=(a,b]$. 
        \\item Wenn $ a\\leq c\\leq d\\leq b$ ist, dann $(a,b]\\cup(c,d]=(a,b]$, $(a,b]\\cap(c,d]=(c,d]$ und $(a,b]\\setminus(c,d]=(a,c]\\cup(d,b]$. 
        \\item Wenn $c\\leq a\\leq b\\leq d$ ist, dann $(a,b]\\cup(c,d]=(c,d]$, $(a,b]\\cap(c,d]=(a,b]$ und $(a,b]\\setminus(c,d]=\\emptyset$. 
        \\item Wenn $a\\leq c \\leq b\\leq d$ ist, dann $(a,b]\\cup(c,d]=(a,d]$, $(a,b]\\cap(c,d]=(c,b]$ und $(a,b]\\setminus(c,d]=(a,c]$. 
        \\item Wenn $c\\leq a\\leq d\\leq b$ ist, dann $(a,b]\\cup(c,d]=(c,b]$, $(a,b]\\cap(c,d]=(a,d]$ und $(a,b]\\setminus(c,d]=(d,b]$. 
    \\end{itemize}
    Somit haben wir gezeigt dass $\\mathcal A$ ein Körper ist.\\\\ 
    Nach der Definition gilt $\\mu((a,b])=F(b)-F(a)$, wobei $F$ eine monoton wachsende rechtsstetige Funktion ist. Daher gilt $\\mu((a,b])\\geq 0$ und $\\mu(\\emptyset)=\\mu((a,a])=0$. Sei $\\{A_i\\}_{i\\in\\N}$ eine Familie disjunkter Mengen in $\\mathcal A$. Ohne Einschränkung der Allgemeinheit können wir annehmen, dass es zwei reelle Folgen $(a_i)_{i\\in\\N}$ und $(b_i)_{i\\in\\N}$ gibt, sodass für jedes $i\\in\\N$, $A_i=(a_i,b_i]$ und $b_{i+1}\\leq a_i\\leq b_{i}$. Wir nehmen an, dass $\\bigcup_{i\\in\\N}(a_i,b_i]$ zu $\\mathcal A$ gehört. Ohne Einschränkung der Allgemeinheit nehmen wir auch an, dass $\\bigcup_{i\\in\\N}(a_i,b_i]$ ein Intervall $(a,b]$ ist. Somit gilt für jede ganze Zahl $i$, $a_i=b_{i+1}$, $b_0=b$ und die Folgen $(b_i){i\\in\\N}$ und $(a_i){i\\in\\N}$ konvergieren gegen $a$. Beachte, dass $(b_i){i\\in\\N}$ abnehmend ist und $(a_i){i\\in\\N}$ vollständig durch $(b_i){i\\in\\N}$ bestimmt wird. Andererseits, setze 
    $$B_n:=(a,b]\\setminus \\bigcup{i=0}^{n-1}(b_{i+1},b_{i}]=(a,b_{n}].$$ 
    Nach der Definition gilt $\\mu(B_n)=F(b_n)-F(a)$. Die Funktion $F$ ist rechtsstetig, was impliziert, dass $\\lim_{n\\to+\\infty}F(b_n)=F(a)$. Daher $\\lim_{n\\to+\\infty}\\mu(B_n)=0$. Beachte, dass $$\\mu((a,b])=\\mu(B_n)+\\mu(\\bigcup_{i=0}{n-1}(b_{i+1},b_{i}])=\\mu(B_n)+\\sum_{i=0}{n-1}\\mu((b_{i+1},b_{i}]).$$ Wenn $n$ gegen $+\\infty$ geht, erhalten wir $\\mu((a,b])=\\sum_{i=0}^{+\\infty}\\mu((b_{i+1},b_{i}])$.
\\end{enumerate}
\\end{taggedblock}
`,preview:"eaa3bc2a-5693-4644-b2f0-7f81107aba34.png"},{uuid:"bbf6ae54-f161-4df7-890c-399752c3307f",title:["Cantormenge","Lebesguesche Nullmenge","Lebesgue"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:3,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Die \\textit{Cantormenge} $C\\customsubset[0,1]$ ist wie folgt definiert: Man setze $C_0=[0,1]$ und erhalte $C_{n+1}$ rekursiv durch Entfernen des mittleren offenen Drittels der Teilintervalle von $C_n$, d.h. $C_1=[0,\\frac{1}{3}]\\cup[\\frac{2}{3},1]$, $C_2=[0,\\frac{1}{9}]\\cup[\\frac{2}{9},\\frac{3}{9}]\\cup[\\frac{6}{9},\\frac{7}{9}]\\cup[\\frac{8}{9},1]$, usw. Dann ist $C:=\\bigcap_{n\\in\\N}C_n$. Zeigen Sie:
\\begin{enumerate}
	\\item $C$ ist eine Lebesguesche Nullmenge.
	\\item $C$ ist überabzählbar.
\\end{enumerate}
\\textit{Hinweis zu i)}:
Es darf verwendet werden, dass für eine Folge messbarer Mengen $(A_n)_{n\\in\\N}$ in einem Maßraum $(X,\\mathcal{M},\\mu)$ mit den Eigenschaften $A_{n+1}\\customsubset A_n$ für alle $n\\in\\N$ und $\\lim_{n\\rightarrow\\infty}\\mu(A_n)=0$, die Menge $\\bigcap_{n\\in\\N}A_n$ eine $\\mu$-Nullmenge ist.\\\\
\\textit{Hinweis zu ii)}: Begründen Sie zunächst die Inklusion 
$$T:=\\Bigg\\{ \\sum_{k=1}^\\infty \\frac{2c_k}{3^k}\\,\\Bigg|\\,c_k\\in\\{0,1\\}\\text{ für alle }k\\in\\N\\Bigg\\}\\customsubset C\\,,$$
und geben Sie dann eine surjektive Abbildung von $T$ auf das Intervall $[0,1]$ an.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
\\begin{enumerate}
	\\item Die rekursiv definiete Menge $C_n$ besteht aus $2^n$ disjunkten, abgeschlossenen Intervallen der Länge $\\frac{1}{3^n}$. Also ist $\\mu(C_n)=2^n\\frac{1}{3^n}=\\Big(\\frac{2}{3}\\Big)^n$, und somit $\\lim_{n\\rightarrow\\infty}\\mu(C_n)=0$. Außerdem gilt für alle $n\\in\\N$ die Inklusion $C_{n+1}\\customsubset C_n$. Es folgt, dass $C=\\bigcap_{n\\in\\N}C_n$ eine Lebesguesche Nullmenge ist.
	
	\\item Wir definieren zunächst die Mengen 
	$$T_n:=\\Big\\{ \\sum_{k=1}^n \\frac{2c_k}{3^k}\\,\\Big|\\,c_k\\in\\{0,1\\}\\text{ für alle }k\\Big\\}$$
	und zeigen induktiv, dass gilt:
	$$C_n=\\bigcup_{t\\in T_n}[t,t+\\frac{1}{3^n}]\\,.\\quad(\\ast)$$ 
	Im Fall $n=1$ ist das offensichtlich. Die Behauptung gelte nun für ein $n\\in\\N$. Wir erhalten $C_{n+1}$ durch Entfernen der mittleren offenen Drittel der Teilintervalle von $C_n$, also nach Induktionsvoraussetzung 
	$$C_{n+1}=\\bigcup_{t\\in T_n}\\Big([t,t+\\frac{1}{3^{n+1}}]\\cup[t+\\frac{2}{3^{n+1}},t+\\frac{1}{3^{n}}]\\Big)\\,.$$
	Da außerdem $T_{n+1}=T_n\\cup\\{t+\\frac{2}{3^{n+1}}\\,|\\,t\\in T_n\\}$, folgt $(\\ast)$.\\\\
	Als nächstes zeigen wir $T\\customsubset C$. Dazu sei $t=\\sum_{k=1}^\\infty\\frac{2c_k}{3^k}\\in T$. Für $n\\in\\N$ setzen wir $t_n:=\\sum_{k=1}^n\\frac{2c_k}{3^k}$ und folgern, dass
	$$t_n\\leq t \\leq \\sum_{k=1}^n\\frac{2c_k}{3^k}+\\sum_{k=n+1}^\\infty \\frac{2}{3^k}=t_n+\\frac{2}{3^{n+1}}\\sum_{k=0}^\\infty 3^{-k}=t_n+\\frac{1}{3^n}\\,,$$
	also $t\\in [t_n,t_n+\\frac{1}{3^n}]\\customsubset C_n$. Da dies für alle $n\\in\\N$ gilt, folgt $t\\in\\bigcap_{n\\in\\N}C_n=C$.\\\\
	Aus der Analysis 1 ist bekannt, dass jedes Element $a\\in(0,1)$ in der Dualdarstellung $a=\\sum_{k=1}^\\infty a_k 2^{-k}$ mit $a_k\\in\\{0,1\\}$ geschrieben werden kann. Daher ist die Abbildung $\\Phi:T\\rightarrow(0,1)$, gegeben durch $t=\\sum_{k=1}^\\infty\\frac{2c_k}{3^k}\\mapsto \\sum_{k=1}^\\infty\\frac{c_k}{2^k}$, surjektiv. Da $(0,1)$ überabzählbar ist, gilt dies auch für $T$, also erst recht für $C$.
	
\\end{enumerate}
\\end{taggedblock}`,preview:"bbf6ae54-f161-4df7-890c-399752c3307f.png"},{uuid:"924dc60c-4ff7-4877-9ef9-a0b8e93d178f",title:["Satz über dominierte Konvergenz"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:5,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $f:[0,1]\\rightarrow\\R$ eine stetige Funktion. Zeigen Sie:
$$\\lim_{k\\rightarrow\\infty}\\int_0^1 f(x^k)\\,dx=f(0)\\,.$$
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
Die Idee ist, den Satz über dominierte Konvergenz zu
verwenden. Dazu müssen wir die Dinge zuerst ein bisschen
umschreiben.

Für $k \\in \\mathbb{N}$ definiere $f_k: [0,1] \\rightarrow
\\mathbb{R}$ durch $f_k(x) := f(x^k)$. Als Verkettung stetiger
Funktionen ist $f_k$ dann wieder stetig, also insbesondere auch
messbar für jedes $k \\in \\mathbb{N}$. Weiterhin gilt für $x
\\in [0,1]$, dass
\\[
\\lim_{k \\rightarrow \\infty} f_k(x)
= \\lim_{k \\rightarrow \\infty} f(x^k)
=
\\begin{cases}
    f(0) & x \\in [0,1) \\\\
    f(1) & x = 1
\\end{cases}.
\\]
Hier haben wir nochmals benutzt, dass $f$ und die $k$-te Potenz
beides stetige Funktionen sind. Die letzte Rechnung zeigt, dass
die Funktionenfolge $(f_k)$ fast überall gegen die konstante
Funktion $f(0)$ konvergiert.

Um nun den Satz über dominierte Konvergenz auf die obige
Funktionenfolge anwenden zu können, müssen wir noch eine
integrable dominierende Funktion finden. Da $f$ stetig ist,
existiert $M := \\sup_{x \\in [0,1]} |f(x)| \\in [0,\\infty)$. Da
jedes $f_k$ das gleichen Bild wie $f$ hat, gilt dann aber auch
$|f_k| \\leq M$ für alle $k \\in \\mathbb{N}$. Da die konstante
Funktion $M$ auf $[0,1]$ integrabel ist, dürfen wir nun den Satz
über dominierte Konvergenz anwenden und erhalten damit
\\[
\\lim_{k \\rightarrow \\infty} \\int_0^1 f(x^k) \\diff x
= \\lim_{k \\rightarrow \\infty} \\int_0^1 f_k(x) \\diff x
= \\int_0^1 \\lim_{k \\rightarrow \\infty} f(x^k) \\diff x
= \\int_0^1 f(0) \\diff x
= f(0) \\,.
\\]
\\end{taggedblock}`,preview:"924dc60c-4ff7-4877-9ef9-a0b8e93d178f.png"},{uuid:"4b40a010-a17e-42a6-9e86-f3bfb18ccfbf",title:["Lebesgue-integrabel","Lebesgue","Konvergenzsatz"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:4,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Für $n\\in\\N$ sei die Funktion $f_n:\\R\\rightarrow\\R$ gegeben durch
$$f_n(x):=\\left\\{\\begin{tabular}{ll}
     1,& $\\text{falls }x\\in[n,n+1]$ \\\\
     0,& $\\text{sonst}$
\\end{tabular}\\right..$$
Außerdem sei $f:\\R\\rightarrow\\R$ definiert durch $f(x):=\\lim_{n\\rightarrow\\infty}f_n(x)$.
\\begin{enumerate}
	\\item Zeigen Sie: $f$ ist Lebesgue-integrabel und es gilt 
	$$\\int_\\R f(x)\\,dx \\neq \\lim_{n\\rightarrow\\infty}\\int_\\R f_n(x)\\,dx\\,.$$
	\\item Warum ist der Konvergenzsatz von Lebesgue trotzdem nicht verletzt?
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
\\begin{enumerate}
\\item Betrachte zunächst $\\int_{\\mathbb{R}}f_n(x)\\:\\text{d}x=\\int_n^{n+1}1\\:\\text{d}x=n+1-n=1\\quad \\forall n.$\\\\ 
$\\Rightarrow$ $\\lim_{n \\to \\infty}\\int_{\\mathbb{R}}f_n(x)\\:\\text{d}x=1.$\\\\
Andererseits betrachte $\\lim_{n \\to \\infty}f_n(x)$.\\\\
Es gilt $\\lim_{n \\to \\infty}f_n(x)=g(x)$ $\\mu$-fast-überall mit $g(x)\\equiv0$.\\\\
Damit ist $f$ integrabel und es gilt $0=\\int_{\\mathbb{R}}f(x)\\:\\text{d}x\\neq \\lim_{n \\to \\infty}\\int_{\\mathbb{R}}f_n(x)\\:\\text{d}x=1$.
\\item Um den Satz von Lebesgue anwenden zu können, braucht man eine Majorante $g(x)$ mit $\\left|f_n(x)\\right|\\leq g(x) \\forall x\\forall n$.\\\\
Außerdem muss gelten $\\int_{\\mathbb{R}}\\left|g(x)\\right|\\:\\text{d}x<\\infty$.\\\\
Aus der Definition von $f_n(x)$ und $\\left|f_n(x)\\right|\\leq g(x)$ folgt $\\left|g(x)\\right|\\geq1$.\\\\
$\\Rightarrow$ $\\int_{\\mathbb{R}}\\left|g(x)\\right|\\:\\text{d}x\\geq\\int_{\\mathbb{R}}1\\:\\text{d}x$ existiert nicht.\\\\
Der Satz von Lebesgue ist daher nicht anwendbar.
\\end{enumerate}
\\end{taggedblock}`,preview:"4b40a010-a17e-42a6-9e86-f3bfb18ccfbf.png"},{uuid:"58ac81c8-0693-4b08-bd5c-11796dc47006",title:["messbar","messbare Funktion"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:1,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $a\\in\\mathbb{R}$ gegeben und seien $f: (-\\infty,a)\\rightarrow \\mathbb{R}$ sowie $g:[a,+\\infty)\\rightarrow \\mathbb{R}$ messbare Funtkionen. Zeigen Sie, dass die Funktion $h:\\mathbb{R}\\rightarrow \\mathbb{R}$, gegeben durch $$
h(x):=
\\begin{cases}
f(x) & x\\in (-\\infty,a)\\\\
g(x) & x\\in [a,+\\infty)
\\end{cases}
$$
messbar ist.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.}
Um die Messbarkeit von $h$ zu zeigen, beachten wir einfach, dass sich die Menge $h^{-1}(\\{y > q\\})$ wie folgt zerlegt: 
$$h^{-1}(\\{y > q\\}) = f^{-1}(\\{y > q\\}) \\cup g^{-1}(\\{y > q\\})$$
und dass die Mengen $f^{-1}(\\{y > q\\})$ und $g^{-1}(\\{y > q\\})$ jeweils messbare Teilmengen von $(-\\infty, a)$ und $[a,+\\infty)$ sind und somit messbare Teilmengen von $\\R$ sind.
\\end{taggedblock}`,preview:"58ac81c8-0693-4b08-bd5c-11796dc47006.png"},{uuid:"b0db50bb-0694-40c1-af7d-8d9cf438b3aa",title:["sigma-algebra","Schnitt von Algebren"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:0,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $X$ eine Menge. Beweisen Sie die folgenden Aussagen: 
\\begin{enumerate}
\\item Für jede Familie $\\{\\mathcal{M}i \\}_{i\\in I}$ von $\\sigma$-Algebren über einer Menge $X$, ist der Durchschnitt $ \\bigcap_{i\\in I} \\mathcal{M}_i $ wieder eine $\\sigma$-Algebra über $X$. 
\\item Für gegebenes $\\mathcal{C}\\customsubset\\mathcal{P}(X)$, ist die $\\sigma$-Algebra definiert durch 
\\begin{equation*} \\mathcal{M}(\\mathcal{C}):=\\bigcap \\{ \\mathcal{M}\\:|\\: \\mathcal{M} \\mbox{ ist eine $\\sigma$-Algebra über } X \\mbox{ und } \\mathcal{C}\\customsubset \\mathcal{M} \\} \\end{equation*}
als von $\\mathcal{C}$ \\textit{generiert} bezeichnet. Zeige, dass $\\mathcal{M}(\\mathcal{C})$ die kleinste $\\sigma$-Algebra ist, die $\\mathcal{C}$ enthält. 
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
\\begin{enumerate}
    \\item Der Beweis von Punkt i) ist einfach, da die drei Axiome in der Definition einer $\\sigma$-Algebra, die wir für den Durchschnitt überprüfen müssen, gleichzeitig von allen $\\sigma$-Algebren $\\mathcal{M}_i$ erfüllt werden. Zum Beispiel gilt für jede $\\sigma$-Algebra $\\mathcal{M}_i$, dass $\\emptyset\\in\\mathcal{M}i$ für jedes $i\\in I$ und somit auch $\\emptyset\\in\\bigcap_{i\\in I}\\mathcal{M}i$. Darüber hinaus, wenn $A\\in\\bigcap_{i\\in I}\\mathcal{M}_i$, dann gilt $A\\in\\mathcal{M}_i$ für alle $i\\in I$ und daher auch $X\\setminus A\\in\\mathcal{M}i$ für alle $i\\in I$, was äquivalent ist zu $X\\setminus A\\in\\bigcap_{i\\in I}\\mathcal{M}_i$. Das Axiom über die abzählbare Vereinigung messbarer Teilmengen ist ähnlich. 

    \\item Zunächst ist zu beachten, dass die Familie auf der rechten Seite der Definition nicht leer ist, da sie mindestens die Familie $\\mathcal{P}(X)$ aller Teilmengen von $X$ enthält. Tatsächlich definiert diese Familie trivial eine $\\sigma$-Algebra und enthält offensichtlich $\\mathcal{C}$. Um diese Aussage zu beweisen, müssen wir zeigen, dass für jede $\\sigma$-Algebra $\\mathcal{A}$, die $\\mathcal{C}\\customsubset \\mathcal{A}$ erfüllt, $\\mathcal{M}(\\mathcal{C})\\customsubset \\mathcal{A}$ gilt. Wenn eine solche Algebra $\\mathcal{A}$ existiert, dann muss sie in der Familie der $\\sigma$-Algebren auf der rechten Seite der Definition enthalten sein. Somit, unter Berücksichtigung der Definition von $\\mathcal{M}(\\mathcal{C})$, haben wir die Aussage bewiesen.
\\end{enumerate}
\\end{taggedblock}`,preview:"b0db50bb-0694-40c1-af7d-8d9cf438b3aa.png"},{uuid:"a9f4e7b5-fd50-4a6d-a9c2-640483d8da39",title:["sigma-algebra","push-forward"],tags:["Analysis 3","Ana3KfvxtV"],languages:["GermanExercise","GermanSolution"],semesterwoche:0,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $\\mathcal{M}$ eine $\\sigma$-Algebra auf der Menge $X$ und sei $f:X\\rightarrow Y$ eine Funktion zwischen $X$ und einer Menge $Y$. Die Familie von Teilmengen von $Y$, definiert durch $$ f_*(\\mathcal{M}):=\\{ B\\customsubset Y\\:|\\: f^{-1}(B)\\in\\mathcal{M} \\}\\customsubset\\mathcal{P}(Y) $$ wird als \\textit{Push-Forward} von $\\mathcal{M}$ auf $Y$ bezeichnet. Zeigen Sie, dass $f_*(\\mathcal{M})$ eine $\\sigma$-Algebra ist. \\vspace{0.3cm}

\\emph{Vorsicht!} Warum ist $f(\\mathcal{M}):=\\{f(A)\\:|\\: A\\in\\mathcal{M} \\}$ keine gute Definition des Push-Forwards?
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{Lösung.} 
Lasst uns die drei Axiome überprüfen, die jede $\\sigma$-Algebra erfüllen muss.
\\begin{enumerate}
	\\item Aus $\\emptyset\\in\\mathcal{M}$ und $f^{-1}(\\emptyset)=\\emptyset$ sehen wir, dass $\\emptyset\\in f_*(\\mathcal{M})$. 
    \\item Sei $B\\in f_*(\\mathcal{M})$, wir wollen zeigen, dass $Y\\setminus B\\in f_*(\\mathcal{M})$. Nutze: $$ f^{-1}(Y\\setminus B)=f^{-1}(Y)\\setminus f^{-1}(B)=X\\setminus f^{-1}(B). $$ Da $f^{-1}(B)\\in\\mathcal{M}$, haben wir auch $X\\setminus f^{-1}(B)\\in\\mathcal{M}$. Dies impliziert $Y\\setminus B\\in f_*(\\mathcal{M})$, gemäß der Definition von $f_*(\\mathcal{M})$. 
    \\item Nehme beliebige $\\{B_i \\}_{i\\in I}\\customsubset f_*(\\mathcal{M})$ und zeige, dass $\\bigcup_{i\\in I}B_i\\in f_*(\\mathcal{M})$ ist. Nutze: 
    $$ f^{-1}\\left(\\bigcup_{i\\in I}B_i\\right)=\\bigcup_{i\\in I}f^{-1}(B_i).$$
    Da $f^{-1}(B_i)\\in\\mathcal{M}$ für jedes $i\\in I$ gilt, haben wir auch $\\bigcup_{i\\in I}f^{-1}(B_i)\\in \\mathcal{M}$. Dies impliziert $\\bigcup_{i\\in I}B_i\\in f_(\\mathcal{M})$, nach Definition von $f_*(\\mathcal{M})$. 
\\end{enumerate}
\\vspace{0.2cm}
Das Problem von $f(\\mathcal{M})$ als Definition einer $\\sigma$-Algebra besteht darin, dass dies im Allgemeinen nicht unter der Mengenkomplementoperation abgeschlossen ist. In der Tat, im allgemeinen Fall, wenn $A\\customsubset X$, haben wir nur: 
$$ Y\\setminus f(A)\\supseteq f(X)\\setminus f(A)\\customsubset f(X\\setminus A). $$
\\end{taggedblock}
`,preview:"a9f4e7b5-fd50-4a6d-a9c2-640483d8da39.png"},{uuid:"29a418a3-4168-4bc4-85b6-86de11e43ac0",title:["Konvergente Reihen","Reihen","Minorantenkriterium","harmonische Reihe","Exponentialreihe"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:10,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Welche der folgenden Reihen sind konvergent? Berechnen Sie gegebenenfalls ihre Grenzwerte.
\\begin{enumerate}
    \\item \\Reihe{1}{\\frac{1}{\\pi^n}}
    \\item \\Reihe{2}{(-1)^n\\frac{4^n+2}{5^n}}
    \\item \\Reihe{2}{\\frac{4n}{3n^2+5}}
    \\item \\Reihe{3}{\\frac{5^n}{n!}}
\\end{enumerate}

\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Da $\\abs{\\frac{1}{\\pi}}<1$ ist die Reihe $\\Reihe{1}{\\frac{1}{\\pi^n}}$ absolut konvergent. \\\\
	\\begin{equation*}
		\\Reihe{1}{\\frac{1}{\\pi^n}}=\\Reihe{0}{\\left(\\frac{1}{\\pi}\\right)^n}-1=\\frac{1}{1-\\frac{1}{pi}}-1=\\frac{\\pi}{\\pi-1}-\\frac{\\pi-1}{\\pi-1}=\\frac{1}{\\pi-1}
	\\end{equation*}
	\\item Betrachte zunächst für $n\\in\\N$ beliebig:
	\\begin{equation*}
		(-1)^n\\frac{4^n+2}{5^n}=(-1)^n\\left(\\frac{4^n}{5^n}+\\frac{2}{5^n}\\right)=
		\\left(\\underbrace{\\frac{-4}{5}}_{\\in\\left(-1,1\\right)}\\right)^n+2\\left(\\underbrace{\\frac{-1}{5}}_{\\in\\left(-1,1\\right)}\\right)^n
	\\end{equation*}\\\\
	Somit folgt:
	\\begin{align*}
		\\Reihe{2}{(-1)^n\\frac{4^n+2}{5^n}}&=\\Reihe{0}{(-1)^n\\frac{4^n+2}{5^n}}-3+\\frac{4+2}{5}
		=\\Reihe{0}{\\left(\\frac{-4}{5}\\right)^n}+2\\Reihe{0}{\\left(\\frac{-1}{5}\\right)^n}-\\frac{9}{5}\\\\
		&=\\frac{1}{1+\\frac{4}{5}}+\\frac{2}{1+\\frac{1}{5}}-\\frac{9}{5}=\\frac{5}{9}+\\frac{5}{3}-\\frac{9}{5}=\\frac{19}{45}
	\\end{align*}
\\item Es gilt: 
\\begin{equation*}
	\\frac{4n}{3n^2+5}\\stackrel{n\\geq2}{\\geq}\\frac{4n}{4n^2}=\\frac{1}{n}
\\end{equation*}
Die harmonische Reihe ist also eine Minorante zu $\\Reihe{2}{\\frac{4n}{3n^2+5}}$, welche divergiert.\\\\
Somit divergiert also auch $\\Reihe{2}{\\frac{4n}{3n^2+5}}$
\\item Es gilt
\\begin{align*}
	\\Reihe{3}{\\frac{5^n}{n!}}=\\Reihe{0}{\\frac{5^n}{n!}}-1-5-\\frac{25}{2}=\\exp(5)-\\frac{37}{2}
\\end{align*}
\\end{enumerate}
\\end{taggedblock}`,preview:"29a418a3-4168-4bc4-85b6-86de11e43ac0.png"},{uuid:"f4aff8be-fdd7-447e-979d-4fe90bbe120e",title:["Partielle","Integration"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:12,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
\\begin{enumerate}
    \\item Zeigen Sie durch partielle Integration, dass für alle natürlichen Zahlen $n \\geq 2$ gilt:
    $$\\int\\limits_0^{\\frac{\\pi}{2}}\\sin(x)^n\\diff x
    = \\frac{n-1}{n}\\int\\limits_0^{\\frac{\\pi}{2}}\\sin(x)^{n-2}\\diff x$$
\\item Zeigen Sie, dass
$$\\lim\\limits_{k\\rightarrow\\infty}\\frac{\\int_0^\\frac{\\pi}{2}\\sin(x)^{2k}\\diff x}{\\int_0^\\frac{\\pi}{2}\\sin(x)^{2k+1}\\diff x}=1$$
und folgern Sie daraus, dass gilt:
$$\\lim\\limits_{N\\rightarrow\\infty}\\prod\\limits_{k=1}^N\\frac{(2k)^2}{(2k-1)(2k+1)}=\\frac{\\pi}{2}.$$
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Sei $n\\in\\N$ mit $n\\geq2$
		\\begin{align*}
			\\int\\limits^{\\frac{\\pi}{2}}_0\\sin(x)^n\\diff x&=\\int\\limits^{\\frac{\\pi}{2}}_0\\left(-\\cos(x)\\right)'\\sin(x)^{n-1}\\diff x\\\\
			&=\\underbrace{\\left[-\\cos(x)\\sin(x)\\right]^\\frac{\\pi}{2}_0}_{=0}+\\int\\limits^{\\frac{\\pi}{2}}_0(n-1)\\sin(x)^{n-2}\\cos(x)^2\\diff x\\\\
			&=(n-1)\\int\\limits^{\\frac{\\pi}{2}}_0\\cos(x)^2\\sin(x)^{n-2}\\diff x\\\\
			&=(n-1)\\int\\limits^{\\frac{\\pi}{2}}_0\\left(1-\\sin(x)^2\\right)\\sin(x)^{n-2}\\diff x\\\\
			&=(n-1)\\left(\\int\\limits^{\\frac{\\pi}{2}}_0\\sin(x)^{n-2}\\diff x-\\int\\limits^{\\frac{\\pi}{2}}_0\\sin(x)^n\\diff x\\right)&\\mid&-\\int\\limits^{\\frac{\\pi}{2}}_0\\sin(x)^n\\diff x\\\\
			\\Rightarrow n\\int\\limits^{\\frac{\\pi}{2}}_0\\sin(x)^n\\diff x&=(n-1)\\int\\limits^{\\frac{\\pi}{2}}_0\\sin(x)^{n-2}\\diff x&\\mid&\\frac{1}{n}\\cdot\\\\
			\\Rightarrow \\int\\limits^{\\frac{\\pi}{2}}_0\\sin(x)^n\\diff x&=\\frac{(n-1)}{n}\\int\\limits^{\\frac{\\pi}{2}}_0\\sin(x)^{n-2}\\diff x
		\\end{align*}	
	\\item Sei für $n\\in\\N$ $a_n:=\\int\\limits^{\\frac{\\pi}{2}}_0\\sin(x)^{2k}\\diff x$.\\\\
    	Für $x\\in\\left[0,\\frac{\\pi}{2}\\right]$ ist $0\\leq\\sin(x)\\leq1$ und so folgt $\\sin(x)^{2n+2}\\leq\\sin(x)^{2n+1}$ sowie $\\frac{a_{2n}}{a_{2n+1}}\\leq\\frac{a_{2n}}{a_{2n+2}}$.\\\\
		Au"serdem gilt nach $i)$: 
		\\begin{equation*}
			\\frac{a_{2n}}{a_{2n+2}}=\\frac{a_{2n}}{\\frac{2n+2-1}{2n+2}\\cdot a_{2n}}=\\frac{2n+2}{2n+2-1}=1+\\frac{1}{2n+1}
		\\end{equation*}
		Zudem gilt für $x\\in\\left[0,\\frac{\\pi}{2}\\right]$, dass $0\\leq\\sin(x)\\leq1$ sowie $\\sin(x)^{2n+1}\\leq\\sin(x)^{2n}$ und mit letztendlich auch 
		\\begin{align*}
			a_{2n+1}&\\leq a_{2n}\\\\
			\\Leftrightarrow\\qquad1&\\leq\\frac{a_{2n}}{a_{2n+1}}
		\\end{align*}
		Setze nun zusammen:
		\\begin{equation*}
			1=\\lim\\limits_{k\\rightarrow\\infty}1\\leq\\lim\\limits_{k\\rightarrow\\infty}\\frac{a_{2n}}{a_{2n+1}}\\leq\\lim\\limits_{k\\rightarrow\\infty}1+\\frac{1}{2n+1}=1
		\\end{equation*}
		Um den zweiten Teil der Behauptung zu beweisen, verwende die Folge $b_m:=\\frac{a_{2m}}{a_{2m+1}}$ mit $m\\in\\N$\\\\
		Zudem gilt für $m\\in\\N$
		\\begin{align*}
			\\frac{b_m}{b_{m-1}}&=\\frac{a_{2m}}{a_{2m+1}}\\cdot\\frac{a_{2m-1}}{a_{2m-2}}\\\\
			&=\\underbrace{\\frac{2m-1}{2m}a_{2m-2}}_{=a_{2m}}\\cdot\\frac{1}{a_{2m-2}}\\cdot a_{2m-1}\\cdot\\left(\\underbrace{\\frac{2m+1-1}{2m+1}\\cdot a_{2m-1}}_{=a_{2m+1}}\\right)^1\\\\
			&=\\frac{2m-1}{2m}\\cdot\\frac{2m+1}{2m}=\\frac{4m^2-1}{4m^2}=1-\\frac{1}{4m^2}=:c_m\\\\
			\\Rightarrow\\quad b_m&=b_{m-1}c_m=b_0\\cdot\\prod\\limits_{j=1}^mc_j
		\\end{align*}
		und es gilt
		\\begin{align*}
			b_0&=\\frac{a_0}{a_1}=\\int\\limits_{0}^\\frac{\\pi}{2}\\sin(x)^0\\diff x\\cdot\\left(\\int\\limits_{0}^\\frac{\\pi}{2}\\sin(x)^1\\diff x\\right)^{-1}\\\\
			&=\\frac{\\pi}{2}\\cdot\\left(\\left[-\\cos(x)\\right]^\\frac{\\pi}{2}_0\\right)^{-1}=\\frac{\\pi}{2}
		\\end{align*}
		Setze nun zusammen:
		\\begin{align*}
			1&=\\lim\\limits_{m\\rightarrow\\infty}b_m=b_0\\lim\\limits_{m\\rightarrow\\infty}\\prod\\limits_{j=1}^mc_j=\\frac{\\pi}{2}\\lim\\limits_{m\\rightarrow\\infty}\\prod\\limits_{j=1}^mc_j\\\\
			\\Rightarrow\\quad \\lim\\limits_{m\\rightarrow\\infty}\\prod\\limits_{j=1}^mc_j&=\\lim\\limits_{m\\rightarrow\\infty}\\prod\\limits_{j=1}^m\\frac{(2m-1)(2m+1)}{4m^2}=\\frac{2}{\\pi}
		\\end{align*}
		Somit folgt, dass 
		\\begin{equation*}
			\\lim\\limits_{N\\rightarrow\\infty}\\prod\\limits_{k=1}^N\\frac{(2k)^2}{(2k-1)(2k+1)}=\\lim\\limits_{N\\rightarrow\\infty}\\prod\\limits_{k=1}^N\\frac{1}{c_k}=\\frac{\\pi}{2}
		\\end{equation*}
\\end{enumerate}
\\end{taggedblock}`,preview:"f4aff8be-fdd7-447e-979d-4fe90bbe120e.png"},{uuid:"9c8ff482-770f-434e-9466-a3fbe167b5ed",title:["Komplexe Zahlen","Dreiecksungleichung"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:3,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Beweisen Sie, dass für komplexe Zahlen $z,w\\in\\C$ gilt:
\\begin{enumerate}
    \\item $\\abs{\\abs{z}-\\abs{w}}\\leq\\abs{z-w}$,
    \\item $\\abs{z + w}^2+\\abs{z-w}^2 = 2(\\abs{z}^2+\\abs{w}^2)$.
\\end{enumerate}
Finden Sie jeweils eine geometrische Deutung der Ungleichung bzw. Gleichung.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
		\\item Nutze die Dreiecksungleichung für zwei komplexe Zahlen~$z,w\\in\\mathbb{C}:\\abs{z+w}\\leq\\abs{z}+\\abs{w}$.\\\\
		\\begin{align*}
			\\abs{z}&=\\abs{z+w-w}=\\abs{\\left(z-w\\right)+w}\\leq\\abs{z-w}+\\abs{w}&\\mid-\\abs{w}\\\\
			\\abs{z}-\\abs{w}&\\leq\\abs{z-w}
			\\intertext{sowie}
			\\abs{w}&=\\abs{w+z-z}=\\abs{\\left(w-z\\right)+z}\\leq\\abs{w-z}+\\abs{z}&\\mid-\\abs{z}\\\\
			\\abs{w}-\\abs{z}&=-\\left(\\abs{z}-\\abs{w}\\right)\\leq\\abs{w-z}=\\abs{z-w}
		\\end{align*}
	Da sowohl~$\\abs{z}-\\abs{w}\\leq\\abs{z-w}$ als auch~$-\\left(\\abs{z}-\\abs{w}\\right)\\leq\\abs{z-w}$ folgt somit auch
	\\begin{equation*}
		\\abs{\\abs{z}-\\abs{w}}\\leq\\abs{z-w}
	\\end{equation*}
Geometrische Deutung: Umgekehrte Dreiecksungleichung.
		\\item 
		\\begin{align*}
			\\abs{z+w}^2+\\abs{z-w}^2&=\\left(z+w\\right)\\left(\\bar{z}+\\bar{w}\\right)+\\left(z-w\\right)\\left(\\bar{z}-\\bar{w}\\right)\\\\
			&=z\\bar{z}+z\\bar{w}+w\\bar{z}+w\\bar{w}+z\\bar{z}-z\\bar{w}-w\\bar{z}+w\\bar{w}\\\\
			&=2z\\bar{z}+2w\\bar{w}\\\\
			&=2\\left(z\\bar{z}+w\\bar{w}\\right)\\\\
			&=2\\left(\\abs{z}^2+\\abs{w}^2\\right)
		\\end{align*}
	\\end{enumerate}
Geometrische Bedeutung: Parallelogrammidentität.\\\\
$\\Rightarrow$Beh.\\hfill$\\square$
\\end{taggedblock}
`,preview:"9c8ff482-770f-434e-9466-a3fbe167b5ed.png"},{uuid:"6a1f1773-cbe2-48d0-a5ad-0d14b9a14c5c",title:["Obersumme","Untersumme","Zerlegung","Riemann","integrierbar"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:11,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Gegeben $k \\in \\N$ sei $Z = \\mathcal{I}_1,\\dots, \\mathcal{I}_k$ die Zerlegung von $[0, 1]$ mit
$$\\mathcal{I}_l =\\left[\\frac{l-1}{k},\\frac{l}{k}\\right].$$
Berechnen Sie die Ober- und Untersummen für die Funktion
$$f:[0,1]\\rightarrow\\R,\\ x\\mapsto exp (x)$$
und zeigen Sie damit, dass $f$ Riemann-integrierbar ist.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Es ist leicht zu sehen, dass $f=\\exp_{\\mid[0,1]}$ streng monoton steigend ist. Au"serdem ist $f$ beschränkt. Damit gilt also:
	\\begin{itemize}
		\\item $\\forall j\\in\\N,1\\leq j\\leq k: m_j:=\\inf\\left(f\\left(I_j\\right)\\right)=f\\left(\\frac{j-1}{k}\\right)
		=\\exp\\left(\\frac{j-1}{k}\\right)=\\exp\\left(\\frac{1}{k}\\right)^{j-1}$
		\\item $\\forall j\\in\\N,1\\leq j\\leq k: M_j:=\\sup\\left(f\\left(I_j\\right)\\right)=f\\left(\\frac{j}{k}\\right)
		=\\exp\\left(\\frac{j}{k}\\right)=\\exp\\left(\\frac{1}{k}\\right)^j$
		\\item $\\forall j\\in\\N,1\\leq j\\leq k: \\abs{I_j}=\\abs{\\frac{l}{k}-\\frac{l-1}{k}}=\\frac{1}{k}$
	\\end{itemize}
	\\begin{align*}
		\\overline{S}_Z(f)-\\underline{S}_Z(f)&=\\sum\\limits_{j=1}^kM_j\\abs{I_j}-\\sum\\limits_{j=1}^km_j\\abs{I_j}\\\\
		&=\\sum\\limits_{j=1}^k\\exp\\left(\\frac{1}{k}\\right)^j\\frac{1}{k}-\\sum\\limits_{j=1}^k\\exp\\left(\\frac{1}{k}\\right)^{j-1}\\frac{1}{k}\\\\
		&=\\frac{1}{k}\\left(\\sum\\limits_{j=1}^k\\exp\\left(\\frac{1}{k}\\right)^j-\\sum\\limits_{j=0}^{k-1}\\exp\\left(\\frac{1}{k}\\right)^j\\right)\\\\
		&=\\frac{1}{k}\\left(\\exp\\left(\\frac{1}{k}\\right)^k-\\exp\\left(\\frac{1}{k}\\right)^0\\right)\\\\
		&=\\frac{1}{k}\\left(\\underbrace{\\exp\\left(1\\right)-1}_{konstant}\\right)
		\\stackrel{k\\rightarrow\\infty}{\\rightarrow}0
	\\end{align*}
	Somit existiert für jedes $\\eps>0$ ein $k\\in\\N$, sodass $\\overline{S}_Z(f)-\\underline{S}_Z(f)<\\eps$ und $f$ ist integrierbar.
\\end{taggedblock}`,preview:"6a1f1773-cbe2-48d0-a5ad-0d14b9a14c5c.png"},{uuid:"58df145d-d66a-421a-8b1c-888ba9b37c90",title:["Folgen","konvergente Folgen","Reihen"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:10,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Gegeben sei eine Folge \\Folge{a} reeller Zahlen sowie eine endliche Menge reeller Zahlen $M:=\\{b_1, b_2,\\dots, b_m\\}$.
Die Folge \\Folge{c} entstehe aus der Folge \\Folge{a} dadurch, dass $m$ beliebig gewählte Folgenglieder durch die Zahlen $b_1, b_2,\\dots, b_m$ ersetzt werden.
\\begin{enumerate}
    \\item Was kann man über $\\lim\\limits_{n\\rightarrow\\infty}c_n$ aussagen, falls $\\lim\\limits_{n\\rightarrow\\infty} a_n$ existiert?
    \\item Was kann man über die Konvergenz der Reihe \\Reihe{1}{c_n} aussagen, falls die Reihe \\Reihe{1}{a_n} konvergiert?
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Da nur endlich viele Folgenglieder durch Elemente aus $M$ ersetzt wurden, existiert ein $N_1\\in\\N$, sodass für alle $n\\in\\N$ mit $n>N_1$ gilt: $a_n=c_n$.\\\\
	Sei nun $\\eps>0$ beliebig. Da $a_n$ stetig ist, existiert ein $N_2\\in\\N$, sodass gilt:
	\\begin{equation*}
		\\abs{a_n-a}<\\eps\\qquad\\forall n\\in\\N, n>N_2
	\\end{equation*}\\\\
	Wähle $N:=\\max {N_1,N_2}$, dann gilt für alle $n\\in\\N$ mit $n>N$:
	\\begin{equation*}
		\\abs{c_n-a}\\stackrel{n>N_1}{=}\\abs{a_n-a}\\stackrel{n>N_2}{<}\\eps
	\\end{equation*}
	Somit folgt $\\lim\\limits_{n\\rightarrow\\infty}c_n=a$.
	\\item Nehme nun an, dass die Reihe $\\Reihe{1}{a_n}$ konvergiert.\\\\
	Definiere die Folge $\\Folge{d}$ durch $d_n=c_n-a_n$ für alle $n\\in\\N$. Dabei ist \\Folge{d} eine Nullfolge und nur für endlich viele Glieder ungleich 0, da $\\Folge{c}$ sich nur für endlich viele Indizes von $\\Folge{a}$ unterscheidet.\\\\
	Dann folgt:
	\\begin{align*}
		\\Reihe{1}{c_n}&=\\Reihe{1}{\\left(c_n+d_n-d_n\\right)}=\\Reihe{1}{\\left(c_n-d_n\\right)}+\\Reihe{1}{d_n}\\\\
		&=\\Reihe{1}{\\left(c_n-c_n+a_n\\right)}+\\Reihe{1}{d_n}=\\underbrace{\\Reihe{1}{a_n}}_{konvergiert}+\\underbrace{\\Reihe{1}{d_n}}_{konvergiert}
	\\end{align*}
	Somit lässt sich die Reihe $\\Reihe{1}{c_n}$ als Summe zweier konvergenter Reihen darstellen und ist konvergent.
\\end{enumerate}
\\end{taggedblock}`,preview:"58df145d-d66a-421a-8b1c-888ba9b37c90.png"},{uuid:"01859bcb-c381-42f3-9cf5-a0207929f94d",title:["Stetigkeit","Komplexwertige Funktion","Stetige Funktion"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:8,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei die Funktion $f : \\R\\rightarrow\\C$ stetig.
\\begin{enumerate}
    \\item Zeigen Sie, dass der Realteil und der Imaginärteil von $f$ ebenfalls stetig sind.
    \\item Zeigen Sie, dass die Funktion $g : \\R\\rightarrow\\C : x\\mapsto f(x)^2$ stetig ist.
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Zunächst: für $z\\in\\C$ mit $z=a+ib$, wobei $a,b\\in\\R$ gilt, dass 
	\\begin{itemize}
		\\item $Re(z)=a=\\frac{2a}{2}=\\frac{a+\\ii b+a-\\ii b}{2}=\\frac{z+\\bar{z}}{2}$
		\\item $Im(z)=b=\\frac{2\\ii b}{2\\ii}=\\frac{a+\\ii b-a+\\ii b}{2\\ii}=\\frac{z-\\bar{z}}{2\\ii}$
		\\item $\\abs{z}=\\sqrt{a^2+b^2}=\\sqrt{a^2+\\left(-b\\right)^2}=\\abs{\\bar{z}}$
	\\end{itemize}
	Da $f$ stetig ist, sei $\\eps>0$, $x_0\\in\\R$ und $\\delta>0$, sodass für alle $x\\in\\R$ mit $\\abs{x-x_0}<\\delta$ gilt $\\abs{f(x)-f(x_0)}<\\eps$.
\\begin{itemize}
	\\item $Re(f)$:
	\\begin{align*}
		\\abs{\\frac{f+\\bar{f}}{2}(x)-\\frac{f+\\bar{f}}{2}(x_0)}&=\\abs{\\frac{f(x)-f(x_0)}{2}+\\frac{\\bar{f}(x)-\\bar{f}(x_0)}{2}}\\\\
		&\\leq\\abs{\\frac{f(x)-f(x_0)}{2}}+\\abs{\\frac{\\bar{f}(x)-\\bar{f}(x_0)}{2}}\\\\
		&=\\frac{1}{2}\\underbrace{\\abs{f(x)-f(x_0)}}_{<\\eps}+\\frac{1}{2}\\underbrace{\\abs{\\bar{f}(x)-\\bar{f}(x_0)}}_{<\\eps}\\\\
		&=\\frac{1}{2}\\eps+\\frac{1}{2}\\eps=\\eps
	\\end{align*}
	\\item $Im(f)$:
	\\begin{align*}
		\\abs{\\frac{f-\\bar{f}}{2\\ii}(x)-\\frac{f-\\bar{f}}{2\\ii}(x_0)}&=\\abs{\\frac{f(x)-f(x_0)}{2\\ii}-\\frac{\\bar{f}(x)-\\bar{f}(x_0)}{2\\ii}}\\\\
		&\\leq\\abs{\\frac{f(x)-f(x_0)}{2\\ii}}+\\abs{\\frac{\\bar{f}(x)-\\bar{f}(x_0)}{2\\ii}}\\\\
		&\\stackrel{\\abs{2\\ii}=2}{=}\\frac{1}{2}\\underbrace{\\abs{f(x)-f(x_0)}}_{<\\eps}+\\frac{1}{2}\\underbrace{\\abs{\\bar{f}(x)-\\bar{f}(x_0)}}_{<\\eps}\\\\
		&=\\frac{1}{2}\\eps+\\frac{1}{2}\\eps=\\eps
	\\end{align*}
\\end{itemize}
	\\item Sei $g:\\R\\rightarrow\\C,x\\mapsto f(x)^2$ und sei $\\Folge{x}$ eine Folge in $\\R$ mit $\\lim\\limits_{n\\rightarrow\\infty}x_n=x\\in\\R$.\\\\
	Dann bildet $\\Folge{y}$ wieder eine Folge mit $y_n:=f(x_n)\\in\\C$ für alle $n\\in\\N$. Da $f$ stetig ist, existiert somit auch $\\lim\\limits_{n\\rightarrow\\infty}y_n=f(x)$.\\\\
	Somit folgt:
	\\begin{equation*}
		\\lim\\limits_{n\\rightarrow\\infty} g(x_n)=\\lim\\limits_{n\\rightarrow\\infty} f(x_n)^2=\\left(\\lim\\limits_{n\\rightarrow\\infty} f(x_n)\\right)\\cdot\\left(\\lim\\limits_{n\\rightarrow\\infty} f(x_n)\\right)=f(x)\\cdot f(x)=g(x).
	\\end{equation*}
	Da die Folge \\Folge{x} beliebig ist, ist $g$ somit stetig.
\\end{enumerate}
\\end{taggedblock}
`,preview:"01859bcb-c381-42f3-9cf5-a0207929f94d.png"},{uuid:"fbfa8923-4aca-4521-8dcd-4e2902ac2c96",title:["Beschränktheit","Beschrenkte Mengen"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:2,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`


\\aufgabe{} 


\\begin{taggedblock}{GermanExercise}
Sind folgende Mengen nach oben oder unten beschränkt? Bestimmen Sie ggf. das Supremum bzw. das Infimum.
\\begin{enumerate}
\\item $A = (0, 1) \\cup [2, 10]$
\\item $B=\\left(-\\infty,3\\right]$
\\item $C=\\bigcup\\limits_{n\\in\\N}\\left[\\frac{1}{n}, \\frac{1}{n}+\\frac{1}{n^2}\\right]$
\\item $D = {n^22 | n \\in N}$
\\end{enumerate}
\\end{taggedblock}




\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Die Menge $A$ ist beschränkt mit:\\\\
	$\\inf(A)=0$ und $\\sup(A)=\\max(A)=10$
	\\item Die Menge $B$ ist nur nach oben beschränkt mit:\\\\
	$\\sup(B)=\\max(B)=3$
	\\item Die Menge $C$ ist beschränkt mit:\\\\
	$\\inf(C)=0$ und $\\sup(C)=\\max(C)=2$. \\\\
	Dabei entsteht die untere Schranke durch $\\lim\\limits_{n\\rightarrow\\infty}\\frac{1}{n}=0$ und die obere Schranke durch $\\frac{1}{1}+\\frac{1}{1^2}=2$.
	\\item Die Menge $D$ ist nach nur nach unten beschränkt mit:\\\\
	$\\inf(D)=\\min(D)=1$.\\\\
	Jedoch ist $D$ nicht nach oben beschränkt, da $\\mathbb{N}$ nicht nach oben beschränkt ist.
\\end{enumerate}
\\end{taggedblock}`,preview:"fbfa8923-4aca-4521-8dcd-4e2902ac2c96.png"},{uuid:"c6b53104-1857-473f-ae05-4985f8b3b463",title:["monoton","Monotone Funktion","Riemann","integrierbar"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:11,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $f : [a, b] \\rightarrow \\R$ eine monotone Funktion. Zeigen Sie, dass $f$ dann Riemann-integrabel ist
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Sei $n\\in\\N$ und definiere dazu $x_i:=\\frac{b-a}{n}\\cdot i+a$ für $0\\leq i\\leq n$.\\\\
	Bilde damit für~$1\\leq i\\leq n$ Intervalle~$I_i:=[x_{i-1},x_i]$, sodass~$Z=I_1,...,I_n$ eine Zerlegung von~$I:=[a,b]$ ist.\\\\
	Nehme o.B.d.A an, dass $f$ monoton steigend ist, da ansonsten $-f$ betrachtet werden kann. Dann gilt für $1\\leq j\\leq n$:
	\\begin{enumerate}
		\\item $m_j:=\\inf\\left(f\\left(I_j\\right)\\right)\\stackrel{mon}{=}f\\left(x_{j-1}\\right)$
		\\item $M_j:=\\sup\\left(f\\left(I_j\\right)\\right)\\stackrel{mon}{=}f\\left(x_j\\right)$
		\\item $\\abs{I_j}=\\frac{b-a}{n}$
	\\end{enumerate} 
	Somit folgt nun insgesamt
	\\begin{align*}
		\\overline{S}_Z(f)-\\underline{S}_Z(f)&=\\sum\\limits_{j=1}^nM_j\\abs{I_j}-\\sum\\limits_{j=1}^nm_j\\abs{I_j}\\stackrel{3)}{=}\\sum\\limits_{j=1}^n\\left(M_j-m_j\\right)\\frac{b-a}{n}\\\\
		&\\stackrel{1),2)}{=}\\sum\\limits_{j=1}^n\\left(f(x_j)-f(x_{j-1})\\right)\\frac{b-a}{n}\\\\
		&=\\frac{b-a}{n}\\left(f(x_n)-f(x_0)\\right)\\stackrel{n\\rightarrow\\infty}{\\rightarrow}0
	\\end{align*}
	Somit existiert für jedes $\\eps>0$ ein $n\\in\\N$, sodass $\\overline{S}_Z(f)-\\underline{S}_Z(f)<\\eps$. Da zudem $f$ durch $f(a)$ und $f(b)$ beschränkt ist, ist $f$ integrierbar.
\\end{taggedblock}`,preview:"c6b53104-1857-473f-ae05-4985f8b3b463.png"},{uuid:"7b29a0c2-da99-411b-9d3c-9a86bce75cfd",title:["Karthesisches Produkt","Relationen"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:1,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`


\\aufgabe{} 


\\begin{taggedblock}{GermanExercise}
\\begin{enumerate}
    \\item Gegeben seien zwei Mengen~$A = \\{a, b, c\\}$ und~$B = \\{d, g, f\\}$. Geben Sie das kartesische Produkt~$A\\times B$ an.
    \\item Geben Sie die beiden Relationen an, die am wenigsten und am meisten Elemente haben.
    \\item Welche der folgenden Relationen sind Funktionen? Begründen Sie Ihre Antwort.
    \\begin{align*}
        R_1 &= \\left\\{(a, g), (b, d), (c, f)\\right\\}\\\\
        R_2 &= \\left\\{(a, d), (b, d), (c, f)\\right\\}\\\\
        R_3 &= \\left\\{(a, g), (b, d), (a, f)\\right\\}
    \\end{align*}
\\end{enumerate}



\\end{taggedblock}




\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
		\\item Das kartesische Produkt von $A$ und $B$ ist
        $$A\\times B=\\left\\{(a,d),(a,e),(a,f),(b,d),(b,e),(b,f),(c,d),(c,e),(c,f)\\right\\}$$
		\\item Eine Relation zu $A\\times B$ ist eine Teilmenge des kartesischen Produkts $A\\times B$.\\\\
		Da $\\emptyset\\customsubset A\\times B$ und $A\\times B\\customsubset A\\times B$, ist $\\emptyset$ die Relation mit den wenigsten Elementen, sowie $A\\times B$ die Relation mit den meisten Elementen.
		\\item Eine Relation~$R\\customsubset A\\times B$ mit der Eigenschaft, dass für jedes Element~$a\\in A$ \\emph{genau} ein~$b\\in B$ existiert, sodass~$(a,b)\\in R$ gilt, wird Funktion genannt.\\\\
		Die Relationen~$R_1$ und~$R_2$ erfüllen diese Bedingung.\\\\
		In $R_3$ existieren zu $a\\in A$ jedoch $g,f\\in B,g\\neq f$ sodass $(a,g),(a,f)\\in R_3$ gilt. Außerdem existiert zu $c\\in A$ kein $x\\in B$, sodass $(c,x)\\in R_3$.
	\\end{enumerate}
	$\\Rightarrow$ Behauptung.\\hfill $\\square$
\\end{taggedblock}
`,preview:"7b29a0c2-da99-411b-9d3c-9a86bce75cfd.png"},{uuid:"32360d08-cb3c-4e30-9835-9a17bf5ce19d",title:["Körperaxiome"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:2,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`


\\aufgabe{} 


\\begin{taggedblock}{GermanExercise}
Gegeben sei ein Körper $\\mathbb{K}$. Beweisen Sie mit Hilfe der Körperaxiome für alle $a, b, c, d \\in \\mathbb{K}$ mit $b, c, d \\neq 0$ folgende Aussage:
$$\\frac{\\frac{a}{c}}{\\frac{b}{d}}=\\frac{ab}{cd}.$$
\\end{taggedblock}




\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Sei $a,b,c,d\\in K$ mit $b,d\\neq 0$:
	\\begin{align*}
		\\frac{a}{b}\\cdot\\frac{c}{d}&\\stackrel{Def.}{=}ab^{-1}\\cdot cd^{-1}\\stackrel{Komm.}{=}acb^{-1}d^{-1}=ac\\left(bd\\right)^{-1}=\\frac{ac}{bd}.
	\\end{align*}
	\\begin{align*}
		\\frac{\\frac{a}{c}}{\\frac{b}{d}}&\\stackrel{Def.}{=}\\frac{ac^{-1}}{bd^{-1}}=1\\cdot\\frac{ac^{-1}}{bd^{-1}}\\\\
		&=\\frac{cd}{cd}\\cdot\\frac{ac^{-1}}{bd^{-1}}=\\frac{(cd)\\cdot ac^{-1}}{(cd)\\cdot bd^{-1}}\\\\
		&\\stackrel{Komm.}{=}\\frac{ad\\left(cc^{-1}\\right)}{bc\\left(dd^{-1}\\right)}=\\frac{ad\\cdot1}{bc\\cdot1}\\\\
		&=\\frac{ad}{bc}
	\\end{align*}
	$\\Rightarrow$ Behauptung.\\hfill $\\square$
\\end{taggedblock}
`,preview:"32360d08-cb3c-4e30-9835-9a17bf5ce19d.png"},{uuid:"4a64b057-f580-47af-96f3-fa542ec6ccfa",title:["Stetigkeit","stetig","Gaußklammer"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:10,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
\\begin{enumerate}
    \\item Sei $f : \\R \\rightarrow [0, 1]$ definiert durch
$$f (x) =\\left\\{\\begin{tabular}{ll}
			$1$ &falls $x$ rational\\\\
			$0$ &falls $x$ irrational
		\\end{tabular}\\right.
$$
Zeigen Sie, dass $f$ nirgends stetig ist.
\\item Sei $f : \\R \\rightarrow \\R$ gegeben durch $$f (x) = [x]\\ \\ \\text{(wobei [.] die Gaußklammer bezeichnet)}$$ An welchen Stellen $x \\in \\R$ ist $f$ stetig?
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Es gilt, dass für alle $x\\in\\Q$ eine Folge \\Folge{x} in $\\R\\setminus\\Q$ mit $\\lim\\limits_{n\\rightarrow\\infty}x_n=x$ existiert beziehungsweise für alle $y\\in\\R\\setminus\\Q$ eine Folge \\Folge{y} in $\\Q$ mit $\\lim\\limits_{n\\rightarrow\\infty}y_n=y$.
	\\begin{itemize}
		\\item Betrachte nun $x\\in\\Q$ mit zugehöriger Folge \\Folge{x} in $\\R\\setminus\\Q$:
		\\begin{equation*}
			f(x)=1\\neq0=\\lim\\limits_{n\\rightarrow\\infty}0=\\lim\\limits_{n\\rightarrow\\infty}f\\left(x_n\\right)
		\\end{equation*}
		Somit ist $f$ für kein $x\\in\\Q$ stetig.
		\\item Betrachte nun $y\\in\\R\\setminus\\Q$ mit zugehöriger Folge \\Folge{y} in $\\Q$:
		\\begin{equation*}
			f(y)=0\\neq1=\\lim\\limits_{n\\rightarrow\\infty}1=\\lim\\limits_{n\\rightarrow\\infty}f\\left(y_n\\right)
		\\end{equation*}
		Somit ist $f$ für kein $y\\in\\R\\setminus\\Q$ stetig.
	\\end{itemize}
	\\item Sei $x\\in\\Z$ und \\Folge{x} eine Folge in $\\R$ mit $x_n:=x-\\frac{1}{n}$, welche gegen $x$ konvergiert.\\\\
	Dann folgt für $g$:
	\\begin{equation*}
		x=\\left[x\\right]=g(x)\\neq\\lim\\limits_{n\\rightarrow\\infty}g\\left(x_n\\right)=\\lim\\limits_{n\\rightarrow\\infty}\\left[x-\\frac{1}{n}\\right]
		=\\lim\\limits_{n\\rightarrow\\infty}x-1=x-1
	\\end{equation*}
	Somit ist $g$ für kein $x\\in\\Z$ stetig.\\\\
	Sei nun $x\\in\\R\\setminus\\Z$ sowie $\\eps>0$ beliebig.\\\\
	Setze zudem $\\delta:=\\min\\left\\{x-\\left[x\\right],[x+1]-x\\right\\}$ und $y\\in\\left(x-\\delta,x+\\delta\\right)$ beliebig. Dann folgt für $y$
	\\begin{equation*}
		[x]=x-(x-[x])\\stackrel{\\delta\\leq x-[x]}{\\leq}x-\\delta<y<x+\\delta\\stackrel{\\delta\\leq[x+1]-x}{\\leq}x+[x+1]-x=[x+1].
	\\end{equation*}
	Somit ist $[y]=[x]$ und es folgt
	\\begin{equation*}
		\\abs{f(x)-f(y)}=\\abs{[x]-[y]}=\\abs{[x]-[x]}=\\abs{0}=0<\\eps
	\\end{equation*}
	und $g$ ist in $x\\in\\R\\setminus\\Z$ stetig.
\\end{enumerate}
\\end{taggedblock}`,preview:"4a64b057-f580-47af-96f3-fa542ec6ccfa.png"},{uuid:"9b7b7d01-c737-4e27-b3bc-a6b510d6d169",title:["Aussagenlogik","2b9087c0-f29d-4f04-8582-87f2cb7cd564"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:1,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`


\\aufgabe{} 


\\begin{taggedblock}{GermanExercise}
Seien $a$ und $b$ Aussagen. Die Aussage $a\\odot b$ sei genau dann falsch, wenn sowohl $a$ als auch $b$ wahr sind. Zeigen Sie mit Hilfe einer Wahrheitstabelle:
\\begin{align*}
    a \\lor b &\\Leftrightarrow (a \\odot a) \\odot (b \\odot b)\\\\
    a \\land b &\\Leftrightarrow (a \\odot b) \\odot (a \\odot b).
\\end{align*}
Folgern Sie daraus, dass gilt:
\\begin{align*}
    \\neg(a \\lor b) &\\Leftrightarrow (\\neg a) \\land (\\neg b)\\\\
    \\neg(a \\land b) &\\Leftrightarrow (\\neg a) \\lor (\\neg b).
\\end{align*}
\\end{taggedblock}




\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
		\\item Verwende Wahrheitstabellen:\\\\
		\\begin{tabular}{c|c|c|c|c|c}
			a & b & $a\\odot a$ & $b\\odot b$& $a\\lor b$ & $(a\\odot a)\\odot(b\\odot b)$\\\\\\hline
			w & w & f & f & w & w\\\\
			w & f & f & w & w & w\\\\
			f & w & w & f & w & w\\\\
			f & f & w & w & f & f
		\\end{tabular}\\\\\\\\
		\\begin{tabular}{c|c|c|c|c}
			a & b&$a\\odot b$ & $a\\land b$ & $(a\\odot b)\\odot(a\\odot b)$\\\\\\hline
			w & w & f & w & w\\\\
			w & f & w & f & f\\\\
			f & w & w & f & f\\\\
			f & f & w & f & f
		\\end{tabular}\\\\\\\\
		Damit gilt die Äquivalenz 
		\\begin{align*}
			a\\lor b &\\Leftrightarrow (a\\odot a)\\odot(b\\odot b)\\text{ sowie}\\\\
			a\\land b&\\Leftrightarrow (a\\odot b)\\odot(a\\odot b)
		\\end{align*}
		\\item Mit $\\neg a\\Leftrightarrow a\\odot a$ folgt 
		\\begin{align*}
			a\\lor b &\\Leftrightarrow (a\\odot a)\\odot(b\\odot b)\\Leftrightarrow(\\neg a)\\odot(\\neg b) &(I)\\\\
			a\\land b &\\Leftrightarrow (a\\odot b)\\odot(a\\odot b)\\Leftrightarrow\\neg( a\\odot b) & (II)
		\\end{align*}
		Betrachte nun 
		\\begin{align*}
			\\neg(a\\lor b)&\\stackrel{(I)}{\\Leftrightarrow} \\neg\\left[(\\neg a)\\odot(\\neg b)\\right]\\\\
			&\\stackrel{(II)}{\\Leftrightarrow}(\\neg a)\\land(\\neg b)\\text{ sowie}\\\\
			\\neg(a\\land b)&\\stackrel{(II)}{\\Leftrightarrow}\\neg\\left[\\neg\\left(a\\odot b\\right)\\right]\\\\
			&\\ \\Leftrightarrow a\\odot b\\\\
			&\\ \\Leftrightarrow\\left[\\neg\\left(\\neg a\\right)\\right]\\odot\\left[\\neg\\left(\\neg b\\right)\\right]\\\\
			&\\ \\stackrel{(I)}{\\Leftrightarrow}\\left(\\neg a\\right)\\lor\\left(\\neg b\\right)
		\\end{align*}
	\\end{enumerate}
	$\\Rightarrow$ Behauptung.\\hfill $\\square$
\\end{taggedblock}
`,preview:"9b7b7d01-c737-4e27-b3bc-a6b510d6d169.png"},{uuid:"d194f063-55ef-41dd-a53d-a2b52809c756",title:["Folgen","Konvergenz","Divergenz","Widerspruchbeweis"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:6,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Zeigen Sie durch einen Widerspruchbeweis, dass die Folge \\Folge{a} mit $a_n=n$ für alle $n\\in\\N$ divergiert. 
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Angenommen $\\left(a_n\\right)_{n\\in\\N}$ wäre konvergent gegen $a$. Dann gilt: $$\\forall\\eps>0\\ \\exists N\\in\\N\\ \\forall n\\geq N\\abs{a_n-a}<\\eps.$$ Sei nun $\\eps>0$ bel. Dann existiert ein $N\\in\\N$, sodass für alle $n\\geq N\\ \\abs{a_n-a}<\\eps$. Nach Satz des Archimedes existiert nun aber ein $n_0>\\max\\left\\{N,a+\\eps\\right\\}$ für das gilt:
$$n_0\\geq N\\land\\abs{n_0-a}=n_0-a>\\eps$$
Dies ist ein Widerspruch, weshalb die Folge $\\left(a_n\\right)_{n\\in\\N}$ divergieren muss.
\\end{taggedblock}
`,preview:"d194f063-55ef-41dd-a53d-a2b52809c756.png"},{uuid:"2a8e8cd6-f238-432a-a586-a753b1d60734",title:["Vollständige Induktion"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:1,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`


\\aufgabe{} 


\\begin{taggedblock}{GermanExercise}
Beweisen Sie, dass für alle~$n\\in\\N$ gilt:
$$\\sum\\limits_{k=1}^n k^2=\\frac{n(n+1)(2n+1)}{6}.$$
\\end{taggedblock}




\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Beweis durch vollständige Induktion:\\\\
	Induktionsanfang: $n=1$\\\\
	\\begin{equation*}
		\\sum\\limits_{k=1}^1k^2=1=\\frac{1\\left(1+1\\right)\\left(2+1\\right)}{6}
	\\end{equation*}
	Damit gilt $\\sum\\limits_{k=1}^nk^2=\\frac{n\\left(n+1\\right)\\left(2n+1\\right)}{6}$ für $n=1$.\\\\
	Induktionsschritt: Nehme an, die Behauptung gilt für ein $n\\in\\mathbb{N}$. Zeige nun, dass sie auch für $n+1$ gilt.
	Induktionsannahme: $\\sum\\limits_{k=1}^nk^2=\\frac{n\\left(n+1\\right)\\left(2n+1\\right)}{6}$ gilt für ein $n\\in\\mathbb{N}$
	\\begin{align*}
		\\sum\\limits_{k=1}^{n+1}k^2&=\\left(n+1\\right)^2+\\sum\\limits_{k=1}^{n}k^2
		\\stackrel{I.V.}{=}\\left(n+1\\right)^2+\\frac{n\\left(n+1\\right)\\left(2n+1\\right)}{6}\\\\
		&=\\frac{6\\left(n+1\\right)^2+n\\left(n+1\\right)\\left(2n+1\\right)}{6}
		=\\frac{\\left(n+1\\right)\\left(6\\left(n+1\\right)+n\\left(2n+1\\right)\\right)}{6}\\\\
		&=\\frac{\\left(n+1\\right)\\left(6n+6+2n^2+n\\right)}{6}\\\\
		&=\\frac{\\left(n+1\\right)\\left(n+2\\right)\\left(2n+3\\right)}{6}
	\\end{align*}
		mit $2n^2+7n+6=\\left(n+2\\right)\\left(2n+3\\right)$.\\\\
	Somit gilt die Behauptung auch für $n+1$.\\\\
	$\\Rightarrow$ Behauptung.\\hfill $\\square$
\\end{taggedblock}
`,preview:"2a8e8cd6-f238-432a-a586-a753b1d60734.png"},{uuid:"b2d29c5d-7dbe-491f-8266-8c376084526b",title:["Taylor","Taylor Polynom","Polynom","Restglied"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:13,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $f : (- \\frac{\\pi}{2}, \\frac{\\pi}{2}) \\rightarrow \\R$ definiert durch $f (x) = \\ln(\\cos(x))$. Berechnen Sie das Taylor-Polynom 2.
Grades (d.h. bis zur Ordnung $(x - x_0)^2$) im Punkt $x_0 = 0$ und zeigen Sie, dass für das Restglied gilt:
$$\\abs{R_3(x)} \\leq \\frac{2}{3} x^3\\qquad \\text{für alle } 0 \\leq x \\leq \\frac{\\pi}{4}
4 .$$
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Sei $x_0=0$. Dann sind die Koeffizienten für das Taylor-Polynom 2.Grades von $f$:
	\\begin{align*}
		f(x)&=\\ln\\left(\\cos(x)\\right)&f(0)&=0\\\\
		f'(x)&=-\\frac{\\sin(x)}{\\cos(x)}=-\\tan(x)&f'(0)&=0\\\\
		f''(x)&=-1-\\tan(x)^2&f''(0)&=-1
	\\end{align*}
und für $f$ ergibt sich
\\begin{equation*}
	f(x)=f(0)+f'(0)x+\\frac{f''(0)}{2!}x^2+R_3(x)=-\\frac{1}{2}x^2+R_3(x).
\\end{equation*}
\\item Betrachte zunächst
\\begin{align*}
	f'''(x)&=-\\frac{\\diff }{\\diff x}(1+\\tan^2(x))=-\\frac{\\diff }{\\diff x}\\tan^2(x)=-2\\tan(x)\\left(1+\\tan^2(x)\\right)\\\\
	&=-2\\tan(x)\\frac{1}{\\cos^2(x)}.
\\end{align*}
Für $\\xi\\in\\left[0,\\frac{\\pi}{4}\\right]$ beliebig gilt:
\\begin{align*}
	\\sin(\\xi)&\\leq\\cos(\\xi)&&\\Rightarrow&\\tan(\\xi)&\\leq1\\\\
	\\cos^2(\\xi)&\\geq\\frac{1}{2}&&\\Rightarrow&\\frac{1}{\\cos^2(\\xi)}&\\leq2
\\end{align*}
Nach Lagrange gilt nun: $\\forall x\\in\\left[0,\\frac{\\pi}{2}\\right]\\exists\\ \\xi\\in\\left[0,x\\right]:$
\\begin{align*}
	R_3(x)&=\\frac{1}{3!}x^3f^{(3)}(\\xi)=\\frac{1}{6}x^3\\left(-2\\tan(x)\\frac{1}{\\cos^2(x)}\\right)\\\\
	\\abs{R_3(x)}&=\\frac{1}{3}x^3\\abs{\\tan(x)}\\cdot\\abs{\\frac{1}{\\cos^2(x)}}\\leq\\frac{2}{3}x^3
\\end{align*}
\\end{enumerate}
\\end{taggedblock}`,preview:"b2d29c5d-7dbe-491f-8266-8c376084526b.png"},{uuid:"660e4def-fbc9-4425-b07c-abfa77ff5853",title:["Stetigkeit","Fixpunkt","Stetiges Bild von Intervallen","Intervall","Zwischenwertsatz"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:9,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $D\\customsubset\\R$ ein Intervall und $f:D\\rightarrow\\R$ stetig.
\\begin{enumerate}
    \\item Zeigen Sie, dass $f(D)$ wieder ein Intervall ist.
    \\item Gilt $D = [a, b]$ mit $a, b \\in\\R$ und $f (D)\\customsubset D$, so hat $f$ einen Fixpunkt in $D$, d.h. es gibt ein $x \\in D$ mit $f (x) = x$.
    \\item Geben Sie je ein Beispiel für ein Intervall $D\\customsubset R$ und eine stetige Funktion $f:D\\rightarrow\\R$ mit $f (D)\\customsubset D$ an, so dass
    \\begin{enumerate}
        \\item $f$ in $D$ mehr als einen Fixpunkt hat;
        \\item $f$ in $D$ keinen Fixpunkt hat.
    \\end{enumerate}
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Seien~$y_1,y_2\\in f(D)$ mit~$y_1<y_2$ sowie~$x_1,x_2\\in~D$ so, dass~$f(x_1)=y_1,f(x_2)=y_2$.\\\\
	Nehme an, dass~$x_1<x_2$, da ansonsten~$-f$ betrachtet werden kann.\\\\
	Wende nun den Zwischenwertsatz auf~$\\tilde{f}:=f\\mid_{\\left[x_1,x_2\\right]}$ an. \\\\
	So existiert für alle~$y\\in(y_1,y_2)$ ein~$x\\in\\left[x_1,x_2\\right]$ mit~$f(x)=y$.\\\\
	Da~$y_1,y_2\\in f(D)$ beliebig sind und für alle~$y\\in(y_1,y_2)$ auch~$y\\in f(D)$ gilt, folgt die Behauptung.
	\\item Seien~$a,b\\in\\R$ so, dass~$D=\\left[a,b\\right]$, sowie~$f(D)\\customsubset D$.\\\\
	Dann gilt:~$f(a)>a$ sowie~$f(b)<b$. \\\\
	Betrachte nun die Funktion~$g:D\\rightarrow\\R,~x\\mapsto~f(x)-x$.\\\\
	Dabei ist~$g$ als Summe zweier stetiger Funktionen wieder stetig und es \\\\
	gilt~$g(a)>0,~g(b)<0$.\\\\
	Nun existiert nach Zwischenwertsatz ein~$x\\in D$, sodass~$g(x)=0$ beziehungsweise~$f(x)=x$ gilt.
	\\item Seien $D_1:=\\left(0,1\\right)$ sowie $D_2:=\\left[0,1\\right]$ und für $i\\in\\left\\{1,2\\right\\}$ sei~$f_i:D_i\\rightarrow~\\R,~x\\mapsto~x^2$:
	Da für $x\\in(0,1)$ gilt $x^2<x$, existiert somit kein $x\\in(0,1)$, sodass $x^2=x$.\\\\
	Jedoch gilt für $x=0$, dass $x^2=0=x$ sowie für $x=1$, dass $x^2=1=x$.
	\\begin{enumerate}
		\\item Die Funktion $f_1$ besitzt keinen Fixpunkt.
		\\item Die Funktion $f_2$ besitzt zwei Fixpunkte.
	\\end{enumerate}
 \\end{enumerate}
\\end{taggedblock}
`,preview:"660e4def-fbc9-4425-b07c-abfa77ff5853.png"},{uuid:"028b1bb6-a048-4c8c-8862-a3634c77123e",title:["Fehler","Abschätzung","Ableitung"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:10,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Der folgende Beweis ist falsch. Finden sie den Fehler und begründen Sie weshalb der Beweis
nicht funktioniert.\\\\
\\emph{Voraussetzung:} $x \\in \\R$, $h \\in \\R$ mit 0 < \\abs{h} < 1\\\\
\\emph{Behauptung:}
$$\\abs{\\frac{\\exp(x + h) - \\exp(x)}{h} - \\exp(x)} \\geq 2\\abs{h} \\exp(x).$$
\\emph{Beweis:}
$$\\frac{\\exp(x + h) - \\exp(x)}{h} > 0$$
Da $\\exp(x + h) > \\exp(x)$ falls h > 0 und $\\exp(x + h) < \\exp(x)$ falls $h < 0$. Folglich gilt
$$\\abs{\\frac{\\exp(x + h) - \\exp(x)}{h} - \\exp(x)} = \\abs{\\abs{\\frac{\\exp(x + h) - \\exp(x)}{h}} - \\exp(x)} .$$
Zudem gilt, dass für alle $x, h \\in \\R$ gilt: $\\abs{\\exp(x+h)-\\exp(x)}\\geq \\abs{h} \\exp(\\abs{h}) \\exp(x)$. Es folgt also
$$\\abs{\\abs{\\frac{\\exp(x + h) - \\exp(x)}{h}} - \\exp(x)} \\geq \\abs{\\abs{\\frac{\\abs{h} \\exp(\\abs{h}) \\exp(x)}{\\abs{h}}}-\\exp(x)}= \\abs{\\exp(x)}\\abs{\\exp(|h|) - 1}.$$
Es bleibt zu zeigen, dass $\\abs{\\exp(|h|) - 1}\\geq 2\\abs{h}$.\\\\
Wir betrachten $\\abs{h} = 0$ dann gilt $\\abs{\\exp(0) - 1} = \\abs{1 - 1} = 0 \\geq 2\\cdot0$. Im weitern betrachten wir
$\\abs{h} = 1$ dann gilt $\\abs{\\exp(1) - 1} = \\abs{e - 1} \\geq 2$. Au"serdem ist $\\abs{\\exp\\left(\\abs{h}\\right) - 1}$ eine konvexe Funktion auf $0 < \\abs{h} < 1$ und entsprechend gilt $\\abs{\\exp\\left(\\abs{h}\\right) - 1} \\geq 2\\abs{h}$ auf dem gesammten Interval.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Der Fehler liegt in der Ungleichung 
	\\begin{equation*}
		\\abs{\\abs{\\frac{\\exp(x+h)-\\exp(x)}{h}}-\\exp(x)}\\leq\\abs{\\abs{\\frac{\\abs{h}\\exp(\\abs{h})\\exp(x)}{\\abs{h}}}-\\exp(x)}
	\\end{equation*}
Man darf in Beträgen nicht einfach so abschätzen. So gilt z.b. $0<2$ aber 
\\begin{equation*}
	\\abs{2-2}=0<2=\\abs{0-2}.
\\end{equation*}
\\end{taggedblock}`,preview:"028b1bb6-a048-4c8c-8862-a3634c77123e.png"},{uuid:"82a60342-5240-4bb6-b92d-51488f9b77b1",title:["Lipschitz-Stetige Funktionen","Lipschitz Stetigkeit","Stetige Funktionen"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:8,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $D\\customsubset\\R$ ein Intervall. Eine Funktion $f : D\\rightarrow\\R$ heißt Lipschitz-stetig (mit Konstante $C$), wenn es ein $C > 0$ gibt, so dass für alle $x, y\\in D$ gilt:
$$\\abs{f(x)-f(y)}\\leq C\\abs{x-y}.$$
\\begin{enumerate}
    \\item Beweisen Sie, dass jede Lipschitz-stetige Funktion f : D → R insbesondere stetig ist.
    \\item Zeigen Sie, dass umgekehrt nicht jede stetige Funktion auch Lipschitz-stetig ist.
    \\item Ist $f : \\R\\rightarrow\\R$ Lipschitz-stetig mit Konstante $C$, wobei $0 < C < 1$, dann hat $f$ einen Fixpunkt.\\\\
    \\emph{Hinweis}: Betrachten Sie für $x_0\\in\\R$ die Folge $\\Folge{x}$, wo $x_n := f(x_{n-1})$ für $n\\geq1$.
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Sei $f:D\\rightarrow\\R$ eine Lipschitz-stetige Funktion mit Konstante $C>0$. Sei zudem $\\varepsilon>0$ und $x_0\\in D$ beliebig sowie $\\delta:=\\frac{\\varepsilon}{C}$.\\\\
	Dann gilt für alle $x\\in D$ mit $\\abs{x-x_0}<\\delta$:
	\\begin{equation*}
		\\abs{f(x)-f(x_0)}\\leq C\\abs{x-x_0}<C\\delta=\\varepsilon.
	\\end{equation*}
	\\item Betrachte die stetige Funktion $f:[0,1]\\rightarrow\\R,\\ x\\mapsto x^2$. Dann ist auch $g:=f^{-1}:f([0,1])\\rightarrow[0,1]$ als Umkehrabbildung einer stetigen Abbildung wieder stetig. Nehme nun an, dass $g$ Lipschitz-stetig sei mit Konstante $C>0$ und setze~\${y:=0}$ sowie~\${x:=\\min\\left\\{\\frac{1}{2},\\frac{1}{2}\\frac{1}{C^2}\\right\\}.}$ Somit gilt, dass~\${x\\leq\\frac{1}{2C^2}}$. Insgesamt folgt nun
	\\begin{align*}
		&&0<\\sqrt{x}&=\\abs{\\sqrt{x}}\\stackrel{y=0}{=}\\abs{\\sqrt{x}-\\sqrt{y}}\\leq C\\abs{x-y}=Cx&\\mid&\\square^2\\\\
		\\Leftrightarrow&&x&\\leq C^2x^2&\\mid&\\cdot\\frac{1}{C^2x}\\\\
		\\Leftrightarrow&&\\frac{1}{C^2}&\\leq x\\leq\\frac{1}{2}\\frac{1}{C^2}
	\\end{align*}
	Dies ergibt jedoch einen Widerspruch, weshalb $g$ nicht Lipschitz-stetig sein kann.
	\\item Sei $f:\\R\\rightarrow\\R$ Lipschitz-stetig mit Konstante $C$, wobei $0<C<1$ und $x_0\\in\\R$.\\\\
	Definiere rekursive Folge \\Folge{x} durch~$x_n:=f(x_{n-1})$ für alle $n\\in\\N$. Sei $i\\in\\N$ beliebig. Dann gilt
	\\begin{equation*}
		\\abs{x_{i+1}-x_i}=\\abs{f(x_i)-f(x_{i-1})}\\leq C\\abs{x_i-x_{i-1}}\\stackrel{i-mal}{\\leq}C^i\\abs{x_1-x_0}=C^ia
	\\end{equation*} mit $a:=\\abs{x_1-x_0}$.\\\\
	Sei nun $m,k\\in\\N, m>k$, somit folgt
	\\begin{align*}
		\\abs{x_m-x_k}&=\\abs{\\sum\\limits_{i=k}^{m-1}\\left(x_{i+1}x_i\\right)}\\leq\\sum\\limits_{i=k}^{m-1}\\abs{x_{i+1}x_i}\\leq\\sum\\limits_{i=k}^{m-1}C^ia\\\\
		&=a\\sum\\limits_{i=0}^{m-k-1}C^{i+k}=aC^k\\sum\\limits_{i=0}^{m-k-1}C^{i}\\leq aC^k\\sum\\limits_{i=0}^\\infty C^{i}\\\\
		&=aC^k\\frac{1}{1-C}=\\frac{a}{1-C}\\cdot C^k.
	\\end{align*}
	Hier folgt nun, dass $\\lim\\limits_{k\\rightarrow\\infty}\\abs{x_m-x_k}=0$, weshalb \\Folge{x} eine konvergente Folge ist. Sei nun $x:=\\lim\\limits_{n\\rightarrow\\infty} x_n$ wodurch für den Grenzwert $x$ folgt:
	\\begin{equation*}
		x=\\lim\\limits_{n\\rightarrow\\infty} x_{n+1}=\\lim\\limits_{n\\rightarrow\\infty} f(x_n)=f(\\lim\\limits_{n\\rightarrow\\infty} x_n)=f(x).
	\\end{equation*}
\\end{enumerate}
\\end{taggedblock}`,preview:"82a60342-5240-4bb6-b92d-51488f9b77b1.png"},{uuid:"57941d59-60d4-4234-bbd9-ed26d668df31",title:["Relle Zahlen","Satz von Archimedes"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:2,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`


\\aufgabe{} 


\\begin{taggedblock}{GermanExercise}
Zeigen Sie folgende Aussagen über reelle Zahlen:
\\begin{enumerate}
    \\item Ist $x\\in\\R$ mit $x > 0$, so gibt es zu jedem $N\\in\\R$ ein $n\\in\\N$, so dass $nx>N$.
    \\item Ist $a\\in\\R$ mit $a > 1$, so gibt es zu jedem $N\\in\\R$ ein $n\\in\\N$, so dass $a^n>N$.
    \\item Ist $b\\in\\R$ mit $0 < b < 1$, so gibt es zu jedem $\\eps\\in\\R$ mit $\\eps>0$ ein $n\\in\\N$, so dass $b^n<\\eps$.
\\end{enumerate}
\\emph{Hinweis}: Den Beweis zu Aufgabe i) kann man analog zum Beweis des Satzes von Archimedes
führen. Betrachten Sie dazu die Menge $\\left\\{nx\\mid n\\in\\N\\right\\}$ anstatt der Menge $N$. Benutzen Sie i), um ii) zu zeigen. Beachten Sie dabei, dass man jede Zahl $a > 1$ in der Form $a = 1 + x$ mit $x > 0$
schreiben kann. Aus ii) kann man dann iii) folgern.
\\end{taggedblock}




\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Sei $x\\in\\R$ mit $x>0$.\\\\ 
	Angenommen es existiert ein $N\\in\\R$, sodass für alle $n\\in\\N$ gilt, dass $nx<N$.\\\\
	Sei nun $M:=\\left\\{nx\\mid n\\in\\N\\right\\}$ eine Menge, die durch $N$ nach oben beschränkt wäre.\\\\
	Dann existiert nach Vollständigkeitsaxiom also ein $m:=\\sup M$ als kleinste obere Schranke.\\\\
	Dann gilt aber für $m-x$ da $x>0$ und $m$ die kleinste obere Schranke ist, dass
	$m-x<nx$ und somit $m<nx+x=(n+1)x\\in M$\\\\
	Dies ist aber im Widerspruch, dass m eine obere Schranke ist. \\\\
	Somit ist M nicht nach oben beschränkt und es existiert kein $N\\in\\R$, sodass $nx<N$ für alle $n\\in\\N$ gilt.
	\\item Sei $N\\in\\R$ beliebig und sei $x\\in\\Rspos$ so, dass für ein $a\\in\\R, a>1$ gilt: $a=1+x$.\\\\
	Dann folgt aus der Bernoulli Ungleichung: $a^n=(1+x)^n\\geq1+nx>nx$ für alle $n\\in\\N$. Nach Teilaufgabe i) existiert für jedes $N\\in\\R$ ein $n\\in\\N$, sodass $nx>N$ und somit auch $a^n>nx>N$, woraus die Behauptung folgt.
	\\item Sei $b\\in\\R,0<b<1$ und $\\eps\\in\\Rspos$ beliebig.\\\\
	Da $0<b<1$ gilt $1<b^{-1}$ und da $\\eps\\in\\Rspos$ gilt $\\eps^{-1}>0$.\\\\
	Da $b^{-1}>1$ und $\\eps^{-1}\\in\\R$ gilt aus ii):\\\\
	Es existiert ein $n\\in\\N$, sodass $(b^{-1})^n=(b^n)^{-1}>\\eps^{-1}$ und somit gilt $b^n<\\eps$\\\\
	Damit folgt die Behauptung iii).\\hfill$\\square$
\\end{enumerate}	
\\end{taggedblock}
`,preview:"57941d59-60d4-4234-bbd9-ed26d668df31.png"},{uuid:"c31224bd-1441-4421-8f04-cb15b06c7492",title:["Intervalle","Rationale Zahlen","Irrationale Zahlen","Abzählbare Mengen","Überabzählbare Mengen"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:7,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Beweisen Sie die folgenden Aussagen:
\\begin{enumerate}
    \\item Jedes nichtleere offene Intervall $(a, b)\\customsubset\\R$ ist überabzählbar.
    \\item Für jedes nichtleere offene Intervall $(a, b)\\customsubset\\R$ ist die Menge $(a, b)\\cap\\Q$ abzählbar unendlich, und die Menge $(a, b)\\backslash\\Q$ ist überabzählbar.
    \\emph{Hinweis}: Zeigen Sie zunächst, dass $(a, b)\\cap\\Q$ nicht leer ist. Führen Sie dann die Annahme, dass $(a, b)\\cap\\Q$ endlich ist, zum Widerspruch.
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
		\\item Falls $a=-\\infty$ oder $b=+\\infty$ lässt sich ein nicht-leeres Intervall $(a',b')\\customsubset(a,b)$ finden mit~$a'>-\\infty$ und~$b'<+\\infty$.\\\\
		Es reicht somit den Fall $a,b\\in\\R$ zu betrachten.\\\\
		Betrachte die Funktion $f:(a,b)\\rightarrow (0,1)$ mit $f(x)=\\frac{x-a}{b-a}$. Dabei gilt, \\\\
		dass~$0<f(x)<1$ für alle~$x\\in(a,b)$.\\\\
		Zeige nun, dass diese Funktion bijektiv ist.
		\\begin{itemize}
			\\item Injektiv: Seien $x,x'\\in(a,b)$ mit $f(x)=f(x')$.
			Dann gilt:
			\\begin{equation*}
				f(x)=\\frac{x-a}{b-a}=\\frac{x'-a}{b-a}=f(x')\\stackrel{\\cdot(b-a)}{\\Leftrightarrow}x-a=x'-a\\stackrel{-a}{\\Leftrightarrow}x=x'
			\\end{equation*}
			Somit ist $f$ injektiv.
			\\item Surjektiv: Sei $y\\in(0,1)$ beliebig. Dann gilt für $x=y(b-a)+a$:
			\\begin{equation*}
				a=0(b-a)+a<y(b-a)+a<(b-a)+a=b
			\\end{equation*}
			bzw. $x\\in(a,b)$ sowie
			\\begin{equation*}
				f(x)=f(y(b-a)+a)=\\frac{y(b-a)+a-a}{b-a}=\\frac{y(b-a)}{b-a}=y
			\\end{equation*}
			Somit ist $f$ surjektiv und da $f$ auch injektiv ist ist $f$ bijektiv.
		\\end{itemize}
		Da es eine Bijektion zwischen $(a,b)$ und $(0,1)$ gibt, sind die beiden Mengen gleich mächtig.\\\\
		In der Vorlesung wurde bereits gezeigt, dass $(0,1)$ überabzählbar unendlich ist. Somit ist also auch $(a,b)$ überabzählbar.
		\\item Zeige zunächst, dass $(a,b)\\cap\\Q\\neq\\emptyset$.\\\\
		Falls $b-a\\geq1$ existiert ein $x\\in\\Z$ mit $x\\in(a,b)\\cap\\Q$. Betrachte somit den Fall~$\\eps:=(b-a)<1$.\\\\
		Nach Archimedes existiert ein $N\\in\\N,\\ N>\\frac{2}{\\eps}$, sodass $\\frac{1}{N}<\\frac{\\eps}{2}$. \\\\
		Sei au"serdem~$z\\in\\Z$ mit~$z=max\\left\\{z\\in\\Z\\mid z\\leq a\\right\\}\\customsubset\\Z$. Dieses existiert, da die Menge nach oben beschränkt ist.\\\\
		Somit existiert ein $k\\in\\{1,...,N\\}$ mit $z+\\frac{k}{N}\\in(a,b)\\cap\\Q$, da
		\\begin{equation*}
			\\abs{\\left(z+\\frac{k}{N}\\right)-\\left(z+\\frac{k+1}{N}\\right)}=\\frac{1}{N}<\\frac{\\eps}{2}<b-a.
		\\end{equation*}
		Damit haben wir ein $q\\in(a,b)\\cap\\Q$ gefunden.\\\\
		Nehme nun an, dass $(a,b)\\cap\\Q$ endlich wäre mit $m$ Elementen. Dann lässt sich die Menge darstellen als
		\\begin{equation*}
			(a,b)\\cap\\Q=\\left\\{q_n\\mid n\\in\\left\\{1,...,m\\right\\},~q_i<q_{i+1}\\forall~i\\in\\left\\{1,...,m-1\\right\\}\\right\\}=:I.
		\\end{equation*}
		Nun gilt jedoch für $q:=\\frac{q_1+q_2}{2}$ dass $q_1<q<q_2$ und $q\\in(a,b)\\cap\\Q$ aber $q\\notin~I$. Somit ist die Menge $(a,b)\\cap\\Q\\customsubset~Q$ nicht endlich.\\\\
		Da $\\Q$ abzählbar und $(a,b)\\cap\\Q\\customsubset\\Q$ ist, ist somit auch $(a,b)\\cap\\Q$ abzählbar.\\\\
		Nehme nun an, dass auch $(a,b)\\backslash\\Q$ abzählbar wäre.\\\\
		Dann ist aber $(a,b)=\\left((a,b)\\cap\\Q\\right)\\cup\\left((a,b)\\backslash\\Q\\right)$ eine Vereinigung zweier abzählbarer Mengen und somit selbst abzählbar, was ein Widerspruch zu Teilaufgabe i) ist.\\\\
		Somit muss $(a,b)\\backslash\\Q$ überabzählbar sein.\\\\
	\\end{enumerate}
\\end{taggedblock}
`,preview:"c31224bd-1441-4421-8f04-cb15b06c7492.png"},{uuid:"21c6dd7d-c6be-450a-88bb-5aa2aa33697d",title:["Folgen","Konvergenz"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:7,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
\\begin{enumerate}
    \\item Seien \\Folge{a} und \\Folge{b} zwei reelle konvergente Folgen mit $a_n\\leq b_n$ für alle $n\\in\\N$. Zeigen Sie, dass $\\lim\\limits_{n\\rightarrow\\infty}a_n\\leq\\lim\\limits_{n\\rightarrow\\infty} b_n$ gilt.
    \\item Seien \\Folge{a} und \\Folge{b} zwei reelle Folgen. Man schreibt $\\lim\\limits_{n\\rightarrow\\infty}a_n=+\\infty$, falls $$\\forall C > 0 \\exists N\\in\\N : a_n > C \\forall n \\geq N.$$ 
    Beweisen Sie: Falls $\\lim\\limits_{n\\rightarrow\\infty}a_n=+\\infty$ und die Folge $b_n > 0$ besitzt null nicht als Häufungspunkt, dann gilt $$\\lim\\limits_{n\\rightarrow\\infty} a_nb_n = +\\infty$$
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Nehme an, dass $\\lim\\limits_{n\\rightarrow\\infty}a_n>\\lim\\limits_{n\\rightarrow\\infty}b_n$.
	Da \\Folge{a} und \\Folge{b} konvergieren existiert für~\${\\eps:=\\frac{a-b}{4}>0}$ ein~$N\\in\\N$, sodass $\\abs{a_n-a}<\\eps$ sowie~$\\abs{b_n-b}<\\eps$ für alle $n>N$ gilt.\\\\
	Somit existiert ein $n\\in\\N$ sodass $a_n\\in\\left(a-\\eps,a+\\eps\\right)$ und $b_n\\in\\left(b-\\eps,b+\\eps\\right)$.\\\\
	Da aber $a>b$ und $\\left(a-\\eps,a+\\eps\\right)\\cap\\left(b-\\eps,b+\\eps\\right)=\\emptyset$ gilt, folgt somit $a_n<b_n$.\\\\
	Dies ist ein Widerspruch zur Voraussetzung, weshalb $a\\leq b$ gelten muss.
	\\item Da $b_n>0$ für alle $n\\in\\N$ und \\Folge{b} in 0 keinen Häufungspunkt besitzt, existiert ein $\\eps>0$ und ein $N\\in\\N$ sodass für alle~$n>N$ gilt~$b_n>\\eps$.\\\\
	Sei nun $C>0$ beliebig und $\\bar{N}$ so, dass für alle $n>\\bar{N}$ gilt $a_n>\\frac{C}{\\eps}$.\\\\
	Somit folgt für alle $n>\\max{N,\\bar{N}}$ nun:
	\\begin{equation*}
		a_nb_n>a_n\\eps>\\frac{C}{\\eps}\\eps=C
	\\end{equation*}
%	Somit folgt, dass $lim\\limits_{n\\rightarrow\\infty}a_nb_n=+\\infty$
\\end{enumerate}	
\\end{taggedblock}
`,preview:"21c6dd7d-c6be-450a-88bb-5aa2aa33697d.png"},{uuid:"1a7d00a0-3d39-4473-a7e3-d54a0934409a",title:["Riemann","integrierbar"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:11,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Zeigen Sie, dass die Funktion $f : [0, 1] \\rightarrow \\R$
$$f(x)=\\left\\{\\begin{tabular}{ll}
			$1$ &falls $x$ rational\\\\
			$0$ &falls $x$ irrational
		\\end{tabular}\\right.$$
nicht Riemann-integrierbar ist.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Nehme an die Funktion wäre integrierbar. Dann existiert für jedes $\\eps>0$ eine Zerlegung $Z$ mit 
	\\begin{align*}
		\\overline{S}_Z(f)-\\underline{S}_Z(f)&<\\eps.&1)
	\\end{align*}
	Setze nun $\\eps=\\frac{1}{2}$ und sei $Z:={x_0,...,x_n}$ eine beliebige Zerlegung mit der $1)$ erfüllt ist.\\\\
	Seien des weiteren für $1\\leq i\\leq n,\\ I_i:=[x_i-1,x_i]$ die in der Zerlegung betrachteten Intervalle.\\\\
	Es gilt, dass:
	\\begin{itemize}
		\\item $\\forall i\\in\\Z, 1\\leq i\\leq n:\\ I_i\\cap\\Q\\neq\\emptyset\\Rightarrow \\sup(f(I_i))=1$
		\\item $\\forall i\\in\\Z, 1\\leq i\\leq n:\\ I_i\\cap\\left(\\R\\setminus\\Q\\right)\\neq\\emptyset\\Rightarrow \\inf(f(I_i))=0$
	\\end{itemize}
	Also folgt 
	\\begin{equation*}
		\\overline{S}_Z(f)-\\underline{S}_Z(f)=\\sum\\limits_{j=1}^n\\left(\\stackrel{=1}{\\sup(f(I_j))}-\\stackrel{=0}{\\inf(f(I_j))}\\right)\\abs{I_j}
		=\\sum\\limits_{j=1}^n\\abs{I_j}=\\abs{I}=1>\\frac{1}{2}=\\eps
	\\end{equation*}
	Dies ist ein Widerspruch zur Annahme, dass die Zerlegung $Z$ die Bedingung erfüllt, weshalb $f$ nicht Rieman-integrierbar sein kann.
\\end{taggedblock}`,preview:"1a7d00a0-3d39-4473-a7e3-d54a0934409a.png"},{uuid:"87e247d5-fd36-436e-a017-55346e141405",title:["Folgen","Konvergenz","Intervallschachtelung"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:4,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Für ein Intervall $I \\customsubset  \\R$ der Form $[a, b]$ mit $a < b$ definiert man die Länge $\\abs{I}$ des Intervalls $I$ als $b - a$.\\\\
Eine Intervallschachtelung ist eine Folge $I_1, I_2, I_3,\\dots$ von Intervallen der Form $I_n = [a_n, b_n] \\customsubset  \\R$
mit $a_n < b_n$, die folgende Eigenschaften besitzt:
\\begin{enumerate}
    \\item $I_{n+1}\\customsubset I_n$ für $n=1, 2, 3,\\dots$
    \\item Zu jedem $\\eps > 0$ gibt es ein Intervall in der Länge $\\abs{I_n}<\\eps$.
\\end{enumerate}
Zeigen Sie, dass es zu einer Intervallschachtelung \\Folge{I} genau eine reelle Zahl $a$ gibt, so dass
$a\\in I_n$ für alle $n\\in\\N$.\\\\
\\emph{Hinweis}: Beweisen Sie zuerst, dass man durch eine Intervallschachtelung zwei konvergente Folgen \\Folge{a} und \\Folge{b} erhält. Zeigen Sie dann, dass die jeweiligen Limites übereinstimmen, also
$\\lim\\limits{n\\rightarrow\\infty} a_n = \\lim\\limits{n\\rightarrow\\infty} b_n$.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Zeige zunächst, dass zwei konvergente Folgen $(a_n)_{n\\in\\N }$ und $(b_n)_{n\\in\\N }$ in $I_1$ existieren, wobei $a_n=\\min\\left(I_n\\right)$ und $b_n=\\max\\left(I_n\\right)$ für alle $n\\in\\N $ gilt.\\\\
	Dabei gilt offensichtlich, dass $a_n,b_n\\in I_n$ für alle $n\\in\\N $.\\\\
	Durch die Voraussetzung $a_n<b_n\\ \\forall n\\in\\N $ folgt, dass $b_1$ eine obere Schranke für $a_n$ ist.\\\\
	Ebenfalls ist $a_1$ eine untere Schranke für $b_n$.\\\\
	Au"serdem gilt durch $I_{n+1}\\customsubset I_n$, dass $a_n<a_{n+1}$ sowie $b_n>b_{n+1}$ für alle $n\\in\\N $. Somit sind die Folge $(a_n)_{n\\in\\N }$ monoton steigend und $(b_n)_{n\\in\\N }$ monoton fallend sowie nach oben bzw. nach unten beschränkt.\\\\
	Somit folgt, dass sowohl $a_n$ als auch $b_n$ konvergieren.\\\\
	\\\\
	Nehme an, dass $\\lim\\limits_{n\\rightarrow\\infty}a_n=:a\\neq b:=\\lim\\limits_{n\\rightarrow\\infty}b_n$ gilt.\\\\
	Dann folgt für $\\lim\\limits_{n\\rightarrow\\infty}\\abs{I_n}=\\lim\\limits_{n\\rightarrow\\infty}b_n-a_n=b-a>0$, wodurch für $\\eps:=\\frac{b-a}{2}$ kein~$N\\in\\N $ existiert, so dass $\\abs{I_n}<\\eps$ für alle $n\\in\\N , n>N$, was ein Widerspruch zur Voraussetzung ist.\\\\
	Somit gilt, $\\lim\\limits_{n\\rightarrow\\infty}a_n=a=\\lim\\limits_{n\\rightarrow\\infty}b_n$ bzw. $\\lim\\limits_{n\\rightarrow\\infty}I_n=\\left\\{a\\right\\}$ für ein $a\\in I_1$.\\\\
	Daraus folgt, dass es genau ein $a\\in I_1$ existiert, sodass $a\\in I_n$ für alle $n\\in\\N $.\\\\
	$\\Rightarrow$Beh.\\hfill$\\square$
\\end{taggedblock}
`,preview:"87e247d5-fd36-436e-a017-55346e141405.png"},{uuid:"535ab345-3728-4245-a4d1-7fe3ae0f9ba3",title:["Reihen","Konvergenz","Absolute Konvergenz","Leibnizkriterium"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:6,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Seien \\Folge{a}, \\Folge{b} Folgen reeller (oder komplexer) Zahlen.
\\begin{enumerate}
    \\item i) Sei \\Reihe{1}{a_n} eine konvergente Reihe, und sei \\Folge{b} eine konvergente Folge.\\\\ Konvergiert die Reihe \\Reihe{1}{a_nb_n}? (Beweis oder Gegenbeispiel!)
    \\item Sei nun \\Reihe{1}{a_n} eine absolut konvergente Reihe, und sei \\Folge{b} eine konvergente Folge.\\\\
    Was kann man hier über die Konvergenz der Reihe \\Reihe{1}{a_nb_n} sagen? (Begründung!)
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Sei $a_n=b_n:=\\left(-1\\right)^n\\frac{1}{\\sqrt{n}}$.\\\\
	Dabei ist $\\frac{1}{\\sqrt{n}}$ eine Nullfolge und monoton fallend, da für alle~$n\\in\\N$ gilt~$\\sqrt{n}~<~\\sqrt{n+1}$.	Dadurch ist nach Leibnizkriterium die Reihe $\\Reihe{1}{a_n}$ konvergent.
	Zudem ist $\\left(-1\\right)^n$ beschränkt, wodurch auch $\\lim\\limits_{n\\rightarrow\\infty}b_n=0$ gilt.\\\\ 
    Jedoch divergiert die Reihe $\\Reihe{1}{a_nb_n}=\\Reihe{1}{\\left(-1\\right)^n\\frac{1}{\\sqrt{n}}\\cdot\\left(-1\\right)^n\\frac{1}{\\sqrt{n}}}=\\Reihe{1}{\\frac{1}{n}}$.
	\\item Sei nun $\\Reihe{1}{a_n}$ absolut konvergent.\\\\
	Da $\\Folge{b}$ konvergiert, existiert ein $C\\in\\R$ mit $\\abs{a_nb_n}=\\abs{a_n}\\abs{b_n}<C\\abs{a_n}$ für alle~$n\\in\\N$. Da~$\\Reihe{1}{a_n}$ absolut konvergiert und C eine Konstante ist, ist $\\Reihe{1}{\\abs{a_n}C}=C\\Reihe{1}{\\abs{a_n}}$ eine konvergente Majorante zu $\\Reihe{1}{a_nb_n}$.\\\\
	Somit konvergiert auch die Reihe $\\Reihe{1}{a_nb_n}$ absolut.
\\end{enumerate}
\\end{taggedblock}
`,preview:"535ab345-3728-4245-a4d1-7fe3ae0f9ba3.png"},{uuid:"6f7b32d2-8e07-4441-9b45-de437d795fb0",title:["Partialbruchzerlegung","Stammfunktion"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:12,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Finden Sie Stammfunktionen zu den folgenden Funktionen:
\\begin{enumerate}
    \\item $$f (x) = \\frac{x}{x^2-3x+2},\\quad           x\\neq 1, 2$$
    \\item $$g(x) = \\frac{x^3}{x^3-x^2-x+1} ,\\quad      x\\neq -1, 1$$
    \\item $$h(x) = \\frac{1}{(x-1)^2(x-2)} ,\\quad       x\\neq 1, 2$$
    \\item $$i(x) = \\frac{2+x}{x^3+3x^2+4x+2} ,\\quad    x\\neq -1, -1 + \\ii, -1 - \\ii.$$
\\end{enumerate}
\\emph{Hinweis:} Benutzen Sie das folgende Resultat (Partialbruchzerlegung):\\\\
Ist $\\frac{p(x)}{q(x)}$ ein Quotient zweier Polynome, wobei der Grad des Zählers echt kleiner ist als der Grad des Nenners und der Nenner nur reelle Nullstellen besitzt, dann kann man den Bruch in der Form
$$\\frac{p(x)}{q(x)}=\\frac{A_1}{(x-a_1)} + \\frac{A_2}{(x-a_1)^2}+\\dots+\\frac{A_{k_1}}{(x-a_1)^{k_1}}+\\frac{B_1}{(x-a_2)}+
\\dots+\\frac{B_{k_2}}{(x-a_2)^{k_2}}$$

zerlegen. Dabei sind $a_1, a_2,\\dots$ die verschiedenen Nullstellen des Nenners $q(x)$ mit Vielfachheiten $k_1, k_2,\\dots$ und die Koeffizienten $A_1,\\dots, A_{k_1}, B_1,\\dots, B_{k_2},\\dots$ sind reelle Zahlen. Bestimmen Sie diese Zerlegung für die Funktionen $f, g, h$ und verwenden Sie anschließend die Rechenregeln für Riemann-Integrale.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
\\item 
\\begin{align*}
	\\int \\frac{x}{x^2-3x+2}\\diff x&=\\int\\left(\\frac{2x-3}{2\\left(x^2-3x+2\\right)}+\\frac{3}{2\\left(x^2-3x+2\\right)}\\right)\\diff x\\\\
	&=\\frac{1}{2}\\underbrace{\\int\\frac{2x-3}{x^2-3x+2}\\diff x}_{=:A(x)}+\\frac{3}{2}\\underbrace{\\int\\frac{1}{x^2-3x+2}\\diff x}_{=:B(x)}\\\\
	&=\\frac{1}{2}A(x)+\\frac{3}{2}B(x)
\\end{align*}
Betrachte nun $A(x)$ und $B(x)$ einzeln. Sei $c\\in\\R$ beliebig.
\\begin{align*}
	\\intertext{Substituiere $u:=x^2-3x+2$, dann ist $\\diff x=\\frac{1}{2x-3}\\diff u$}
	A(x)&=\\int\\frac{2x-3}{u}\\frac{1}{2x-3}\\diff u=\\int\\frac{1}{u}\\diff u\\\\
	&=\\ln\\left(\\abs{u}\\right)=\\ln\\left(\\abs{x^2-3x+2}\\right)+\\frac{c}{2}\\\\
	&=\\ln\\left(\\abs{x-2}\\abs{x-1}\\right)=\\ln\\left(\\abs{x-2}\\right)+\\ln\\left(\\abs{x-1}\\right)\\\\
	B(x)&=\\int\\frac{1}{x^2-3x+2}\\diff x=\\int\\frac{1}{\\left(x-2\\right)\\left(x-1\\right)}\\diff x=\\int\\frac{1}{x-2}-\\frac{1}{x-1}\\diff x\\\\
	&=\\int\\frac{1}{x-2}\\diff x-\\int\\frac{1}{x-1}\\diff x
	\\intertext{Substituriere $v_1:=x-1,\\ v_2:=x-2$ dann ist $\\diff x=\\diff v_1=\\diff v_2$}
	&=\\int\\frac{1}{v_2}\\diff v_2-\\int\\frac{1}{v_1}\\diff v_1=\\ln\\left(\\abs{v_2}\\right)-\\ln\\left(\\abs{v_1}\\right)+\\frac{c}{2}\\\\
	&=\\ln\\left(\\abs{x-2}\\right)-\\ln\\left(\\abs{x-1}\\right)+\\frac{c}{2}.
\\end{align*}
Zusammen ergibt sich somit:
\\begin{align*}
	\\int f(x)\\diff x&=\\frac{1}{2}A(x)+\\frac{3}{2}B(x)\\\\
	&=\\frac{1}{2}\\left(\\ln\\left(\\abs{x-2}\\right)+\\ln\\left(\\abs{x-1}\\right)\\right)+\\frac{3}{2}\\left(\\ln\\left(\\abs{x-2}\\right)-\\ln\\left(\\abs{x-1}\\right)\\right)+c\\\\
	&=2\\ln\\left(\\abs{x-2}\\right)-\\ln\\left(\\abs{x-1}\\right)+c
\\end{align*}
\\item Sei $c\\in\\R$ beliebig.
\\begin{align*}
	\\int\\frac{x^3}{x^3-x^2-x+1}\\diff x&=\\int\\frac{x^2+x-1}{x^3-x^2-x+1}+1\\diff x\\\\
	&=\\int\\frac{x^2+x-1}{\\left(x-1\\right)^2\\left(x+1\\right)}\\diff x+\\int1\\diff x\\\\
	&=\\int\\left(-\\frac{1}{4(x+1)}+\\frac{5}{4(x-1)}+\\frac{1}{2(x-1)^2}\\right)\\diff x+x\\\\
	&=-\\frac{1}{4}\\int\\frac{1}{x+1}\\diff x+\\frac{5}{4}\\int\\frac{1}{x-1}\\diff x+\\frac{1}{2}\\int\\frac{1}{(x-1)^2}\\diff x+x\\\\
	&=-\\frac{1}{4}\\ln\\left(\\abs{x+1}\\right)+\\frac{5}{4}\\ln\\left(\\abs{x-1}\\right)-\\frac{1}{2(x+1)}+x\\ (+c)
\\end{align*}
\\item Sei $c\\in\\R$ beliebig.
\\begin{align*}
		\\int\\frac{1}{\\left(x-1\\right)^2\\left(x-2\\right)}\\diff x&=\\int\\left(-\\frac{1}{x-1}-\\frac{1}{\\left(x-1\\right)^2}+\\frac{1}{x-2}\\right)\\diff x\\\\
		&=-\\int\\frac{1}{x-1}\\diff x-\\int\\frac{1}{\\left(x-1\\right)^2}\\diff x+\\int\\frac{1}{x-2}\\diff x\\\\
		&\\stackrel{ii)}{=}-\\ln\\left(\\abs{x-1}\\right)+\\frac{1}{x-1}+\\int\\frac{1}{x-2}\\diff x
		\\intertext{Substituiere $u:=x-2$, dann ist $\\diff x=\\diff u$}
		&=-\\ln\\left(\\abs{x-1}\\right)+\\frac{1}{x-1}+\\int\\frac{1}{u}\\diff u\\\\
		&=-\\ln\\left(\\abs{x-1}\\right)+\\frac{1}{x-1}+\\ln\\left(\\abs{x-2}\\right)\\ (+c)
\\end{align*}
\\item Sei $c\\in\\R$ beliebig.
\\begin{align*}
		\\int\\frac{2+x}{x^3+3^2+4x+2}\\diff x&=\\int\\frac{x+2}{(x+1)\\left(x^2+2x+2\\right)}\\diff x=\\int\\left(\\frac{1}{x+1}-\\frac{x}{x^2+2x+2}\\right)\\diff x\\\\
		&=\\underbrace{\\int\\frac{1}{x+1}\\diff x}_{=\\ln\\left(\\abs{x+1}\\right)}-\\int\\frac{x}{x^2+2x+2}\\diff x\\\\
		&=\\ln\\left(\\abs{x+1}\\right)-\\int\\left(\\frac{2x+2}{2\\left(x^2+2x+2\\right)}-\\frac{1}{x^2+2x+2}\\right)\\diff x\\\\
		&=\\ln\\left(\\abs{x+1}\\right)-\\underbrace{\\int\\frac{2x+2}{x^2+2x+2}\\diff x}_{=:A(x)}+\\underbrace{\\int\\frac{1}{x^2+2x+2}\\diff x}_{=:B(x)}
\\end{align*}
Betrachte nun $A(x)$ und $B(x)$:
\\begin{align*}
	A(x)&=\\int\\frac{2x+2}{2\\left(x^2+2x+2\\right)}\\diff x
\\intertext{Substituiere $u:=x^2+2x+2$, dann ist $\\diff x=\\frac{1}{2x+2}\\diff u$}
	&=\\frac{1}{2}\\int\\frac{1}{u}\\diff u=\\frac{1}{2}\\ln\\left(\\abs{x^2+2x+2}\\right)\\\\
	B(x)&=\\int\\frac{1}{(x+1)^2+1}\\diff x
	\\intertext{Substituiere $u:=x+1$, dann ist $\\diff x=\\diff u$}
	&=\\int\\frac{1}{u^2+1}\\diff u=\\arctan\\left(u\\right)=\\arctan\\left(x+1\\right)
\\end{align*}
Zusammen ergibt sich also
\\begin{equation*}
	\\int i(x)\\diff x=\\ln\\left(\\abs{x+1}\\right)-\\frac{1}{2}\\ln\\left(\\abs{x^2+2x+2}\\right)+\\arctan\\left(x+1\\right)\\ (+c)
\\end{equation*}
\\end{enumerate}
\\end{taggedblock}`,preview:"6f7b32d2-8e07-4441-9b45-de437d795fb0.png"},{uuid:"c63ead33-cfd7-4bd3-b2c0-15e28eca9626",title:["uneigentliches Integral","konvergenz"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:12,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Beweisen Sie: Das uneigentliche Integral
$$\\int\\limits_0^\\infty\\frac{\\sin(x)}{x}dx$$
konvergiert, aber konvergiert nicht absolut (d.h. $\\int_0^\\infty\\abs{\\frac{\\sin(x)}{x}}\\diff x$ divergiert).\\\\
\\emph{Hinweis:} Es darf verwendet werden, dass für alle $k\\in\\N$ gilt:
$$\\int\\limits_{k\\pi}^{(k+1)\\pi}\\abs{\\frac{\\sin(x)}{x}}\\diff x\\geq\\frac{1}{\\pi(k+1)}\\int\\limits_{k\\pi}^{(k+1)\\pi}\\abs{\\sin(x)}\\diff x$$
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Zunächst gilt mit L'Hospital, dass
	\\begin{align*}
		&&\\lim\\limits_{x\\rightarrow0}\\sin(x)&=0\\\\
		&&\\lim\\limits_{x\\rightarrow0}x&=0\\\\
		&&\\lim\\limits_{x\\rightarrow0}\\left(\\sin(x)\\right)'&=\\lim\\limits_{x\\rightarrow0}\\cos(x)=1\\neq0\\\\
		&&\\lim\\limits_{x\\rightarrow0}x'&=\\lim\\limits_{x\\rightarrow0}1=1\\neq0\\\\
		\\Rightarrow&&\\lim\\limits_{x\\rightarrow0}\\frac{\\sin(x)}{x}&=1.
	\\end{align*}
	Also lässt sich $\\frac{\\sin(x)}{x}$ stetig auf $0$ fortsetzen.\\\\
	Betrachte nun also 
	\\begin{align*}
		\\int\\limits_1^\\infty\\frac{\\sin(x)}{x}\\diff x&=\\int\\limits_1^\\infty\\left(-\\cos(x)\\right)'\\cdot\\frac{1}{x}\\diff x\\\\
		&=\\left[-\\frac{\\cos(x)}{x}\\right]_1^\\infty-\\int\\limits_1^\\infty\\frac{\\cos}{x^2}\\diff x.
	\\end{align*}
	Da $\\abs{-\\frac{\\cos(1)}{1}}<\\infty$ und $\\lim\\limits_{x\\rightarrow\\infty}-\\frac{1}{x}\\cos(x)=0$, ist nur die Konvergenz von $\\int_1^\\infty\\frac{\\cos}{x^2}\\diff x$ zu betrachten.\\\\
	Da Au"serdem $\\int_1^\\infty\\frac{1}{x^2}\\diff x=\\left[-\\frac{1}{x}\\right]_1^\\infty=\\lim\\limits_{x\\rightarrow\\infty}\\frac{1}{1}-\\frac{1}{x}=1<\\infty$ und~$\\frac{\\abs\\cos(x)}{x^2}<\\frac{1}{x^2}$ gilt, konvergiert also $\\int_1^\\infty\\frac{\\cos(x)}{x^2}\\diff x$ und letztlich auch $\\int_0^\\infty\\frac{\\sin(x)}{x}\\diff x$ durch das Majorantenkriterium.\\\\
	Zeige zuletzt noch, dass $\\int_0^\\infty\\abs{\\frac{\\sin(x)}{x}}\\diff x$ divergiert mithilfe einer Zerlegung. Es gilt:
	\\begin{align*}
		\\int\\limits_0^\\infty\\abs{\\frac{\\sin(x)}{x}}\\diff x&=\\sum\\limits_{k=0}^\\infty\\int\\limits_{k\\pi}^{(k+1)\\pi}\\abs{\\frac{\\sin(x)}{x}}\\diff x\\stackrel{Vor}{\\geq}\\sum\\limits_{k=0}^\\infty\\frac{1}{\\pi(k+1)}\\int\\limits_{k\\pi}^{(k+1)\\pi}\\abs{\\sin(x)}\\diff x\\\\
		&=\\sum\\limits_{k\\in\\N_0\\ gerade}\\frac{1}{\\pi(k+1)}\\int\\limits_{k\\pi}^{(k+1)\\pi}\\sin(x)\\diff x+\\sum\\limits_{k\\in\\N_0\\ ungerade}\\frac{1}{\\pi(k+1)}\\int\\limits_{k\\pi}^{(k+1)\\pi}-\\sin(x)\\diff x\\\\
		&=\\sum\\limits_{k\\in\\N_0\\ gerade}\\frac{1}{\\pi(k+1)}\\left[-\\cos(x)\\right]_{k\\pi}^{(k+1)\\pi}+\\sum\\limits_{k\\in\\N_0\\ ungerade}\\frac{1}{\\pi(k+1)}\\left[\\cos(x)\\right]_{k\\pi}^{(k+1)\\pi}\\\\
		&=\\sum\\limits_{k\\in\\N_0\\ gerade}\\frac{1}{\\pi(k+1)}(-(-1)-(-1))+\\sum\\limits_{k\\in\\N_0\\ ungerade}\\frac{1}{\\pi(k+1)}(1-(-1))\\\\
		&=\\sum\\limits_{k\\in\\N_0}\\frac{2}{\\pi(k+1)}=\\frac{2}{\\pi}\\sum\\limits_{k\\in\\N}\\frac{1}{k)}=+\\infty
	\\end{align*}
	Somit konvergiert das Integral nicht absolut.
\\end{taggedblock}`,preview:"c63ead33-cfd7-4bd3-b2c0-15e28eca9626.png"},{uuid:"b4925bd0-470e-4c5e-8fc2-1fb66ea0d2c4",title:["Folgen","Konvergenz","Cauchy-Produktformel"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:7,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
\\begin{enumerate}
    \\item Berechnen Sie $\\lim\\limits_{n\\rightarrow\\infty}\\left( \\frac{2n+10}{2n}\\right)^n.$ Sie dürfen annehmen, dass diese Folge konvergiert.
    \\item Zeigen Sie, dass die Reihe $\\Reihe{0}{\\left[\\left(\\frac{1}{2}\\right)^n\\sum\\limits_{k=0}^n\\left(\\frac{1}{2}\\right)^{n-k} \\right]}$ absolut konvergiert und berechnen Sie ihren Wert.\\\\
    \\emph{Hinweis}: Verwenden Sie die Cauchy-Produktformel.
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item 
	\\begin{align*}
		\\lim\\limits_{n\\rightarrow\\infty}\\left(\\frac{2n+10}{2n}\\right)^n&=\\lim\\limits_{n\\rightarrow\\infty}\\left(1+\\frac{5}{n}\\right)^n
		\\intertext{Setze $n:=5n'$ (Somit wird $\\lim\\limits_{n\\rightarrow\\infty}$ zu $\\lim\\limits_{5n'\\rightarrow\\infty}$)}
		&=\\lim\\limits_{5n'\\rightarrow\\infty}\\left(1+\\frac{5}{5n'}\\right)^{5n'}=\\lim\\limits_{5n'\\rightarrow\\infty}\\left(1+\\frac{1}{n'}\\right)^{5n'}\\\\
		&=\\left(\\lim\\limits_{5n'\\rightarrow\\infty}\\left(1+\\frac{}{n'}\\right)^{n'}\\right)^5=e^5
	\\end{align*}
	\\item
	\\begin{align*}
		\\Reihe{0}{\\left[\\left(\\frac{1}{2}\\right)^n\\sum\\limits_{k=0}^n\\left(\\frac{1}{2}\\right)^{n-k}\\right]}&=
		\\Reihe{0}{\\left[\\sum\\limits_{k=0}^n\\left(\\frac{1}{2}\\right)^n\\left(\\frac{1}{2}\\right)^{n-k}\\right]}\\\\
		&=\\Reihe{0}{\\left[\\sum\\limits_{k=0}^n\\left(\\frac{1}{2}\\right)^{n+k-k}\\left(\\frac{1}{2}\\right)^{n-k}\\right]}\\\\
		&=\\Reihe{0}{\\left[\\sum\\limits_{k=0}^n\\left(\\frac{1}{2}\\right)^{n-k}\\left(\\frac{1}{2}\\right)^{n-k}\\left(\\frac{1}{2}\\right)^k\\right]}\\\\
		&=\\Reihe{0}{\\left[\\sum\\limits_{k=0}^n\\left(\\frac{1}{4}\\right)^{n-k}\\left(\\frac{1}{2}\\right)^k\\right]}\\\\
		\\intertext{Nutze das Cauchy Produkt für Reihen}
		&=\\left(\\Reihe{0}{\\left(\\frac{1}{4}\\right)^n}\\right)\\cdot\\left(\\Reihe{0}{\\left(\\frac{1}{2}\\right)^n}\\right)\\\\
		&=\\frac{1}{1-\\frac{1}{4}}\\cdot\\frac{1}{1-\\frac{1}{2}}=\\frac{4}{3}\\cdot2\\\\
		&=\\frac{8}{3}
	\\end{align*}
\\end{enumerate}
\\end{taggedblock}
`,preview:"b4925bd0-470e-4c5e-8fc2-1fb66ea0d2c4.png"},{uuid:"f7ecf73d-945f-488f-a3c5-5aace7b837bd",title:["Komplexe Folgen","Folgen","Konvergenz"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:4,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $(a_n)_{n\\in\\N}$ eine Folge von Null verschiedener komplexer Zahlen mit folgender Eigenschaft:\\\\
Es gibt ein $a\\in\\C$, so dass zu jedem $C > 0$ ein $n\\in\\N$ existiert, so dass für alle $n\\in\\N$ mit $n > N$ gilt:
$$d(a_n, a) > C .$$
\\begin{enumerate}
    \\item Zeigen Sie, dass sogar jede beliebige komplexe Zahl $z\\in\\C$ für die Folge $(a_n)_{n\\in\\N}$ dieselbe Eigenschaft wie die komplexe Zahl $a$ besitzt.
    \\item Existiert $\\lim\\limits_{n\\rightarrow\\infty}\\frac{1}{a_n}$? \\\\
(Die Antwort ist durch Beweis oder Gegenbeispiel zu begr¨unden!)
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Seien $C>0$ und $z\\in\\C$ beliebig und sei $\\bar{C}:=C+\\underbrace{d\\left(a,z\\right)}_{>0}>0$.\\\\
	Dann existiert nach Voraussetzung ein $N\\in\\N$ sodass $d\\left(a_n,a\\right)>\\bar{C}$ für alle~$n\\in\\N$ mit~$n>N$.\\\\
	Nun gilt nach der umgekehrten Dreiecksungleichung:
	\\begin{align*}
		d\\left(a_n,z\\right)+d\\left(a,z\\right)&\\geq d\\left(a_n,a\\right)>\\bar{C}=C+d\\left(a,z\\right)&\\mid -d\\left(a,z\\right)\\\\
		d\\left(a_n,z\\right)&>C
	\\end{align*}
	Für alle $n\\in\\N$ mit $n>N$.\\\\
	Da~$C>0$ beliebig und ein solches $N\\in\\N$ existiert, folgt:
	\\begin{equation*}
		\\forall C>0\\ \\exists N\\in\\N: d\\left(a_n,z\\right)>C\\ \\forall n\\in\\N, n>N.
	\\end{equation*}
	Da auch $z\\in\\C$ beliebig ist, gilt die Behauptung i).
	
	\\item Nach Teilaufgabe i) gilt die Bedingung für alle $z\\in\\C$. Wähle also $z:=0$.\\\\
	Sei $\\eps>0$ beliebig, somit ist auch $\\frac{1}{\\eps}>0$.\\\\
	Nach der Voraussetzung existiert ein $N\\in\\N$ sodass $d\\left(a_n,0\\right)=\\abs{a_n}>\\frac{1}{\\eps}$ für alle~$n\\in\\N$ mit~$n>N$.\\\\
	Somit gilt für alle $n\\in\\N$ mit $n>N$:
	\\begin{align*}
		d(a_n,0)=\\abs{a_n}&>\\frac{1}{\\eps}&\\mid\\cdot\\frac{\\eps}{\\abs{a_n}}\\text{, da $a_n\\neq0$ für alle n}\\\\
		\\abs{\\frac{1}{a_n}-0}=\\frac{1}{\\abs{a_n}}&<\\eps
	\\end{align*}
	Somit konvergiert $\\frac{1}{\\abs{a_n}}$ gegen $0$.\\\\
	Da für den Betrag gilt: $\\abs{x}=0\\Rightarrow x=0$ folgt somit, dass auch die Folge $\\frac{1}{a_n}$ gegen $z=0$ konvergiert. \\\\
	Somit gilt auch Behauptung ii).
\\end{enumerate}
$\\Rightarrow$Beh.\\hfill$\\square$
\\end{taggedblock}
`,preview:"f7ecf73d-945f-488f-a3c5-5aace7b837bd.png"},{uuid:"4528e6e4-a007-4964-8f38-bfaff62d7781",title:["differenzierbar","monotonie"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:12,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Seien $f, g : [a, b] \\rightarrow \\R$ differenzierbare, positive Funktionen mit $f(a) = g(a)$ sowie
$$\\frac{f'(x)}{f(x)}\\leq\\frac{g'(x)}{g(x)},\\ \\text{für alle }x\\in[a,b].$$
Zeigen Sie, dass dann gilt: $f (x) \\leq g(x)$ für alle $x\\in[a, b]$.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Seien $F:\\left[a,b\\right]\\rightarrow\\R,x\\ \\mapsto\\ln\\left(f(x)\\right)$ und~{$G:\\left[a,b\\right]\\rightarrow\\R,x\\mapsto\\ln\\left(g(x)\\right)$} Abbildungen.\\\\
Diese sind wohldefiniert und differenzierbar, da $f,g$ positiv und differenzierbar sind. Au"serdem gilt für die Ableitungen von $F$ und $G$:		\\begin{align*}
			F'(x)&=\\frac{1}{f(x)}f'(x)=\\frac{f'(x)}{f(x)}\\\\
			G'(x)&=\\frac{1}{g(x)}g'(x)=\\frac{g'(x)}{g(x)}.
		\\end{align*}
Sei nun $x_0\\in\\left[a,b\\right]$ beliebig.
Da aus der Voraussetzung $\\frac{f'(x)}{f(x})\\leq\\frac{g'(x)}{g(x)}$ gilt, folgt durch Monotonie:
	\\begin{align*}
		&&\\int\\limits_a^{x_0}\\frac{f'(x)}{f(x)}dx=F(x_0)-F(a)&\\leq G(x_0)-G(a)=\\int\\limits_a^{x_0}\\frac{g'(x)}{g(x)}dx\\\\
		&&\\ln\\left(f(x_0)\\right)-\\ln\\left(f(a)\\right)=F(x_0)-F(a)&\\leq G(x_0)-G(a)=\\ln\\left(g(x_0)\\right)-\\ln\\left(g(a)\\right)
		\\intertext{Da $f(a)=g(a)$ gilt auch $\\ln\\left(f(a)\\right)=\\ln\\left(g(a)\\right)$}
		\\Rightarrow&&\\ln\\left(f(x_0)\\right)&\\leq\\ln\\left(g(x_0)\\right)\\\\
		\\Leftrightarrow&&f(x_0)&\\leq g(x_0).
	\\end{align*}
\\end{taggedblock}`,preview:"4528e6e4-a007-4964-8f38-bfaff62d7781.png"},{uuid:"67f2d501-43df-4812-a82c-47f90195cbb6",title:["Reihen","Konvergenz","Absolute Konvergenz"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:6,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei \\Folge{a} eine Folge reeller (oder komplexer) Zahlen, sodass die Reihe \\Reihe{1}{a_n} absolut konvergent ist. Zeigen Sie, dass dann auch die Reihe \\Reihe{1}{a_n^2} absolut konvergiert.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Da \\Reihe{1}{a_n} absolut konvergiert, ist $\\left(a_n\\right)_{n\\in\\N}$ eine Nullfolge.
	Wähle somit $N\\in\\N$, sodass $\\abs{a_n}<1$ für alle $n\\geq N$.
	Dann gilt aber auch $\\abs{a_n^2}\\leq\\abs{a_n}<1$, wodurch $\\sum\\limits_{n=1}^\\infty a_n$ eine konvergente Majorante ist.
	Nach dem Majorantenkriterium konvergiert somit $\\sum\\limits_{n=1}^\\infty a_n^2$ absolut.
\\end{taggedblock}
`,preview:"67f2d501-43df-4812-a82c-47f90195cbb6.png"},{uuid:"38eecfd5-f218-4706-9da1-1357d9ee938e",title:["Reihen","Konvergenz"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:6,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Uberprüfen Sie, ob die folgenden Reihen konvergieren:
\\begin{enumerate}
    \\item $$\\Reihe{0}{\\left(\\frac{n^2}{2n^2+n+1}\\right)^n}$$
    \\item $$\\Reihe{1}{\\frac{n!}{n^n}}$$
    \\item $$\\Reihe{1}{\\left(1-\\frac{1}{n^2}\\right)^n}$$
    \\item $$\\Reihe{2}{\\frac{2^{n+1}}{3\\cdot5^n}}  $$
\\end{enumerate}
Berechnen Sie den Wert der Reihe in Teil iv).
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
		\\item Setze $a_n=\\left(\\frac{n^2}{2n^2+n+1}\\right)^n$ und verwende das Wurzelkriterium.
		\\begin{equation*}
			\\sqrt[n]{\\abs{a_n}}=\\sqrt[n]{\\abs{\\left(\\frac{n^2}{2n^2+n+1}\\right)^n}}=\\frac{n^2}{2n^2+n+1}=\\frac{1}{2+n^{-1}+n^{-2}}\\leq\\frac{1}{2}
		\\end{equation*}
		Somit gilt für $q:=\\frac{1}{2}$, dass $\\sqrt[n]{\\abs{a_n}}\\leq q<1$ und die Reihe $\\sum\\limits_{n=0}^\\infty\\left(\\frac{n^2}{2n^2+n+1}\\right)^n$ konvergiert.
		\\item Setze $a_n=\\frac{n!}{n^n}$ und verwende das Quotientenkriterium.
		\\begin{align*}
			\\abs{\\frac{a_{n+1}}{a_n}}&=\\abs{\\frac{\\frac{\\left(n+1\\right)!}{\\left(n+1\\right)^{n+1}}}{\\frac{n!}{n^n}}}
			=\\abs{\\frac{\\left(n+1\\right)!\\cdot n^n}{n!\\cdot\\left(n+1\\right)^{n+1}}}=\\abs{\\frac{\\left(n+1\\right)\\cdot n^n}{\\left(n+1\\right)^{n+1}}}\\\\&=\\abs{\\frac{n^n}{\\left(n+1\\right)^n}}=\\abs{\\left(\\frac{n}{\\left(n+1\\right)}\\right)^n}=\\abs{\\underbrace{\\left(\\frac{1}{\\left(1+\\frac{1}{n}\\right)}\\right)^n}_{\\geq0}}\\\\
			&=\\frac{1}{\\left(1+\\frac{1}{n}\\right)^n}
			\\intertext{Mit der Zinseszinsformel folgt:}
			\\lim\\limits_{n\\rightarrow\\infty}\\abs{\\frac{a_{n+1}}{a_n}}&=\\lim\\limits_{n\\rightarrow\\infty}\\frac{1}{\\left(1+\\frac{1}{n}\\right)^n}=\\frac{1}{e}
		\\end{align*}
		Zudem folgt mit der Ungleichung
        $$\\left(1+\\frac{1}{n}\\right)^n<\\sum\\limits_{n=0}^n\\frac{1}{k!}<\\Reihe{0}{\\frac{1}{k!}}=e$$ für alle $n\\in\\N$, dass ein $N\\in\\N$ existiert, sodass für alle $n\\geq N$ gilt 
		\\begin{align*}
			\\frac{1}{\\left(1+\\frac{1}{n}\\right)^n}-\\frac{1}{e}&\\leq\\frac{1}{e}\\\\
			\\frac{1}{\\left(1+\\frac{1}{n}\\right)^n}&\\leq\\frac{2}{e}
		\\end{align*} Somit gilt, dass $\\abs{\\frac{a_{n+1}}{a_n}}\\leq\\frac{2}{e}<1$, weshalb nach Quotientenkriterium die Reihe über $a_n$ konvergiert.
		\\item Setze $a_n=\\left(1-\\frac{1}{n^2}\\right)^n=\\left(1+\\frac{1}{n}\\right)^n\\cdot\\left(1-\\frac{1}{n}\\right)^n$. Zeige, dass die Folge keine Nullfolge ist.\\\\
		Aus der Zinseszinsformel folgt bereits, dass $\\lim\\limits_{n\\rightarrow\\infty}\\left(1+\\frac{1}{n}\\right)^n=e$ gilt.\\\\
		Betrachte nun $\\lim\\limits_{n\\rightarrow\\infty}\\left(1-\\frac{1}{n}\\right)^n$:
		\\begin{align*}
			\\left(1-\\frac{1}{n}\\right)^n&=\\left(\\frac{n-1}{n}\\right)^n=\\left(\\frac{n}{n-1}\\right)^{-n}=\\left(\\frac{n-1+1}{n-1}\\right)^{-n}=\\left(1+\\frac{1}{n-1}\\right)^{-n}\\\\&=\\left(1+\\frac{1}{n-1}\\right)^{-n+1}\\left(1+\\frac{1}{n-1}\\right)^{-1}=\\frac{\\left(1+\\frac{1}{n-1}\\right)^{-1}}{\\left(1+\\frac{1}{n-1}\\right)^{n-1}}
		\\end{align*}
        Damit gilt
        $$
            \\lim\\limits_{n\\rightarrow\\infty}\\left(1-\\frac{1}{n}\\right)^n=
			\\frac{\\lim\\limits_{n\\rightarrow\\infty}\\left(1+\\frac{1}{n-1}\\right)^{-1}}{\\lim\\limits_{n\\rightarrow\\infty}\\left(1+\\frac{1}{n-1}\\right)^{n-1}}=\\frac{1}{e}
        $$
		und $\\lim\\limits_{n\\rightarrow\\infty}\\left(1-\\frac{1}{n^2}\\right)^n=
		\\left(\\lim\\limits_{n\\rightarrow\\infty}\\left(1+\\frac{1}{n}\\right)^n\\right)\\cdot\\left(\\lim\\limits_{n\\rightarrow\\infty}\\left(1-\\frac{1}{n}\\right)^n\\right)
		=\\frac{e}{e}=1\\neq0$.
		Somit ist $\\Folge{a}$ keine Nullfolge und die Reihe $\\sum\\limits_{n=1}^\\infty a_n$ divergiert.
		\\item \\begin{align*}
			\\sum\\limits_{n=2}^\\infty\\frac{2^{n+1}}{3\\cdot5^n}&=\\sum\\limits_{n=2}^\\infty\\frac{2^n}{5^n}\\cdot\\frac{2}{3}\\\\
			&=\\frac{2}{3}\\sum\\limits_{n=2}^\\infty\\left(\\frac{2}{5}\\right)^n
			=\\frac{2}{3}\\left(\\underbrace{\\sum\\limits_{n=0}^\\infty\\left(\\frac{2}{5}\\right)^n}_{\\text{geom. Reihe}}-1-\\frac{2}{5}\\right)\\\\
			&=\\frac{2}{3}\\left(\\frac{1}{1-\\frac{2}{5}}-\\frac{7}{5}\\right)=\\frac{2}{3}\\left(\\frac{5}{3}-\\frac{7}{5}\\right)\\\\
			&=\\frac{8}{45}
		\\end{align*}
	\\end{enumerate}
\\end{taggedblock}
`,preview:"38eecfd5-f218-4706-9da1-1357d9ee938e.png"},{uuid:"2b9087c0-f29d-4f04-8582-87f2cb7cd564",title:["Aussagenlogik","Logikoperatoren","Logische Operatoren"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:1,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`


\\aufgabe{} 


\\begin{taggedblock}{GermanExercise}
Seien $a$ und $b$ Aussagen. Die Aussage $a\\odot b$ sei genau dann falsche, wenn sowohl~$a$ als auch~$b$ wahr sind. Zeigen Sie mit Hilfe einer Wahrheitstabelle:
\\begin{enumerate}
    \\item$\\neg a\\Leftrightarrow a\\odot a,$
    \\item$\\left(a\\Rightarrow b\\right) \\Leftrightarrow a\\odot\\left(a\\odot b\\right).$
\\end{enumerate}
\\end{taggedblock}




\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Beweise beide Aussagen mithilfe von Wahrheitstabellen:
\\begin{enumerate}
		\\item
        \\begin{align*}
            &\\begin{tabular}{c|c}
			$a$ & $\\neg a$\\\\\\hline
			f & w \\\\
			w & f
		      \\end{tabular}
            &\\Leftrightarrow&&
            \\begin{tabular}{c}
			$a \\odot a$\\\\\\hline
			w\\\\
			f
		      \\end{tabular}
            \\end{align*}
		$\\Rightarrow$ Behauptung i).
		\\item \\begin{align*}
		    &\\begin{tabular}{c|c|c}
			a & b & $\\left(a\\Rightarrow b\\right)$\\\\\\hline
			f & f & w \\\\
			w & f & f \\\\
			f & w & w \\\\
			w & w & w
		\\end{tabular}
        &\\Leftrightarrow&&
        \\begin{tabular}{c|c}
			$a \\odot b$ & $a \\odot \\left(a \\odot b\\right)$\\\\\\hline
			w & w\\\\
			w & f\\\\
			w & w\\\\
			f & w
		\\end{tabular}
		\\end{align*}
		$\\Rightarrow$ Behauptung ii).\\hfill $\\square$
	\\end{enumerate}
\\end{taggedblock}
`,preview:"2b9087c0-f29d-4f04-8582-87f2cb7cd564.png"},{uuid:"4db94bbe-0527-4331-8ba8-b86eb3984700",title:["Integral"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:12,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Berechnen Sie die folgenden Integrale:
\\begin{enumerate}
    \\item $$\\int\\limits_0^{\\frac{1}{2}}\\frac{x}{\\sqrt{1-x^2}}\\diff x,$$
    \\item $$\\int\\limits_{-1}^{1} e^{3x-e^x}\\diff x,$$
    \\item $$\\int\\limits_{0}^{1} x^n(1 - x)^m \\diff x\\text{ für }n, m \\in \\N,$$
    \\item $$\\int\\limits_{-\\sqrt{ a\\slash2}}^{\\sqrt{a\\slash2}} \\frac{1}{\\sqrt{a-x^2}}\\diff x,\\ a \\in \\Rspos.$$
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Substituiere zunächst mit $u:=1-x^2$, dann ist $\\diff x=\\frac{-1}{2x}\\diff u$:
	\\begin{align*}
		&&\\int\\frac{x}{\\sqrt{1-x^2}}\\diff x&=-\\int\\frac{1}{2\\sqrt{u}}\\diff u=\\frac{-1}{2}\\int\\frac{1}{\\sqrt{u}}\\diff u\\\\
		&&&=\\frac{-1}{2}2\\sqrt{u}=-\\sqrt{1-x^2}\\\\
		\\stackrel{HDI}{\\Rightarrow}&&\\int\\limits_0^\\frac{1}{2}\\frac{x}{\\sqrt{1-x^2}}\\diff x&=\\sqrt{1-0}-\\sqrt{1-\\left(\\frac{1}{2}\\right)^2}\\\\
		&&&=1-\\frac{\\sqrt{3}}{2}
	\\end{align*}
	\\item Substituiere mit $u:=e^x$, dann ist $\\diff x=e^{-x}\\diff u=\\frac{1}{u}\\diff u$.
	\\begin{align*}
		&&\\int e^{3x-e^x}\\diff x&=\\int u^3e^{-u}\\frac{1}{u}\\diff u=\\int u^2e^{-u}\\diff u=\\int u^2\\left(-e^{-u}\\right)'\\diff u\\\\
		&&&=-e^{-u}u^2+2\\int e^{-u}u\\diff u=-e^{-u}u^2+2\\int u\\left(-e^{-u}\\right)'\\diff u\\\\
		&&&=-e^{-u}u^2+2\\left(-e^{-u}u+\\int e^{-u}\\diff u\\right)\\\\
		&&&=-u^2e^{-u}-2\\left(e^{-u}u-e^{-u}\\right)\\\\
		&&&=e^{-u}\\left(-u^2-2u-2\\right)=-e^{-e^x}\\left(e^{2x}+2e^x+2\\right)\\\\
		\\stackrel{HDI}{\\Rightarrow}&&\\int\\limits_{-1}^1e^{3x-e^x}\\diff x&=e^{-e^{-1}}\\left(e^{-2}+2e^{-1}+2\\right)-e^{-e}\\left(e^2+2e+2\\right)
	\\end{align*}
\\item Für $a,b\\in\\N_0$ sei $f(a,b):=\\int\\limits_0^1x^a\\left(1-x\\right)^b\\diff x$\\\\
Für beliebige $m,n\\in\\N$ berechne:
\\begin{align*}
	f(n,m)&=\\int\\limits_0^1x^n\\left(1-x\\right)^m\\diff x=\\int\\limits_0^1\\left(\\frac{1}{n+1}x^{n+1}\\right)'\\left(1-x\\right)^m\\diff x\\\\
	&=\\underbrace{\\left[\\frac{x^{n+1}}{n+1}\\cdot\\left(1-x\\right)^m\\right]_0^1}_{=0}+\\int^1_0\\frac{m}{n+1}x^{n+1}\\left(1-x\\right)^{m-1}\\diff x\\\\
	&=\\frac{m}{n+1}\\int\\limits_0^1x^{n+1}(1-x)^{m-1}\\diff x=\\frac{m}{n+1}f(n+1,m-1)
	\\intertext{Au"serdem gilt}
	f(n+m,0)&=\\int\\limits_0^1x^{n+m}\\diff x=\\frac{1}{n+m+1}
	\\intertext{Zusammen ergibt sich also:}
	f(n,m)&=\\frac{m}{n+1}f(n+1,m)=\\frac{m}{n+1}\\frac{m-1}{n+2}f(n+2,m-2)=\\dots\\\\
	&=\\underbrace{\\frac{m!}{\\prod\\limits_{i=n+1}^{n+m}i}}_{=\\frac{n!m!}{(n+m)!}}f(n+m,0)=\\frac{m!n!}{(n+m)!}\\frac{1}{n+m+1}=\\frac{n!m!}{(n+m+1)!}
\\end{align*}
\\item 
\\begin{align*}
	&&\\int\\frac{1}{\\sqrt{a-x^2}}\\diff x&=\\int\\frac{1}{\\sqrt{a}\\sqrt{1-\\left(\\frac{x}{\\sqrt{a}}\\right)^2}}\\diff x=\\frac{1}{\\sqrt{\\alpha}}\\int\\frac{1}{\\sqrt{1-\\left(\\frac{x}{\\sqrt{a}}\\right)^2}}\\diff x
	\\intertext{Substituiere mit $\\frac{x}{\\sqrt{\\alpha}}=\\sin(u),\\ u=\\arcsin\\left(\\frac{x}{\\sqrt{\\alpha}}\\right)$. Dann ist $\\diff x=\\sqrt{\\alpha}\\cos(u)\\diff u$}
	&&&=\\frac{1}{\\sqrt{\\alpha}}\\int\\frac{1}{\\sqrt{1-\\sin^2(u)}}\\cdot\\sqrt{\\alpha}\\cos(u)\\diff u=\\frac{\\sqrt{\\alpha}}{\\sqrt{\\alpha}}\\int\\frac{\\cos(u)}{\\sqrt{\\cos^2(u)}}\\diff u\\\\
	&&&=\\int1\\diff u=u\\stackrel{resubs.}{=}\\arcsin\\left(\\frac{x}{\\sqrt{\\alpha}}\\right)\\ (+c)\\\\
	\\stackrel{HDI}{\\rightarrow}&&\\int\\limits_{-\\sqrt{\\frac{a}{2}}}^{\\sqrt{\\frac{a}{2}}}\\frac{1}{\\sqrt{a-x^2}}\\diff x&=\\arcsin\\left(\\frac{1}{\\sqrt{2}}\\right)-\\arcsin\\left(-\\frac{1}{\\sqrt{2}}\\right)=\\frac{\\pi}{2}
\\end{align*}
\\end{enumerate}
\\end{taggedblock}`,preview:"4db94bbe-0527-4331-8ba8-b86eb3984700.png"},{uuid:"d3d2802e-e075-4add-95f1-3fc901eca544",title:["Stetigkeit","Stetige Funktionen"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:8,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $D\\customsubset\\R$. Gegeben seien stetige Funktionen $f, g : D\\rightarrow\\R$ und reelle Zahlen $\\mu, \\nu$. Zeigen Sie:
\\begin{enumerate}
    \\item $\\mu f + \\nu g : D\\rightarrow\\R$ ist eine stetige Funktion.
    \\item $fg : D\\rightarrow\\R$ ist eine stetige Funktion.
    \\item Ist $g(x)\\neq0$ für alle $x\\in D$, dann ist auch $\\frac{f}{g} : D\\rightarrow\\R$ eine stetige Funktion.
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Sei $\\Folge{x}$ eine Folge mit $x_n\\in D$ für alle $n\\in\\N$ und $\\lim\\limits_{n\\rightarrow\\infty}x_n=x\\in D$. \\\\
	Definiere weiterhin die Folgen $\\Folge{y}$, $\\Folge{z}$ durch $y_n:=f(x_n),z_n:=g(x_n)$ für alle $n\\in\\N$.\\\\
	Da $f,g$ stetig sind, gilt $\\lim\\limits_{n\\rightarrow\\infty}y_n=f(x)$ sowie $\\lim\\limits_{n\\rightarrow\\infty}z_n=g(x)$.
	\\begin{enumerate}
		\\item \\begin{align*}
			\\lim\\limits_{n\\rightarrow\\infty}\\left(\\mu f+\\nu g\\right)(x_n)&=\\lim\\limits_{n\\rightarrow\\infty}\\left(\\mu y_n+\\nu z_n\\right)=\\mu\\lim\\limits_{n\\rightarrow\\infty}y_n+\\nu\\lim\\limits_{n\\rightarrow\\infty}z_n\\\\
			&=\\mu f(x)+\\nu g(x)=\\left(\\mu f+\\nu g\\right)(x).
		\\end{align*}
		\\item \\begin{align*}
			\\lim\\limits_{n\\rightarrow\\infty}\\left(fg\\right)(x_n)&=\\lim\\limits_{n\\rightarrow\\infty}\\left(y_n\\cdot z_n\\right)=\\left(\\lim\\limits_{n\\rightarrow\\infty}y_n\\right)\\cdot\\left(\\lim\\limits_{n\\rightarrow\\infty}z_n\\right)\\\\
			&=f(x)\\cdot g(x)=\\left(fg\\right)(x).
		\\end{align*}
		\\item Falls $g(x)\\neq0$ für alle $x\\in D$ gilt: 
		\\begin{align*}
			\\lim\\limits_{n\\rightarrow\\infty}\\left(\\frac{f}{g}\\right)(x_n)&=\\lim\\limits_{n\\rightarrow\\infty}\\left(\\frac{y_n}{g_n}\\right)=
			\\frac{\\lim\\limits_{n\\rightarrow\\infty}y_n}{\\lim\\limits_{n\\rightarrow\\infty}z_n}\\\\
			&=\\frac{f(x)}{g(x)}=\\left(\\frac{f}{g}\\right)(x).
		\\end{align*}
	\\end{enumerate}
\\end{taggedblock}
`,preview:"d3d2802e-e075-4add-95f1-3fc901eca544.png"},{uuid:"8460ba3b-9e12-4fb1-a9aa-036ebfb9be09",title:["Ableitung","Differenzieren","Kettenregel","Produktregel"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:9,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Berechnen Sie die folgenden Ableitungen und begründen Sie ihre Schritte.
\\begin{enumerate}
    \\item $\\ddx Re(f(x)) = Re(f'(x))$, $f(x)\\in\\C,\\ x\\in\\R$
    \\item $\\ddx \\cos(x)$
    \\item $\\ddx x^\\alpha,\\ \\alpha\\in\\R$
    \\item $\\ddx \\alpha^x,\\ \\alpha\\in\\Rspos$
\\end{enumerate}
Hinweis: Verwenden Sie in ii) folgende Identität: $\\cos(x) = Re(exp(\\ii x))$
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Nutze $Re(f(x))=\\frac{f(x)+\\overline{f(x)}}{2}$:
	\\begin{align*}
		\\ddx Re(f(x))&=\\ddx\\left(\\frac{f(x)+\\overline{f(x)}}{2}\\right)=\\frac{1}{2}\\left(\\ddx f(x)+\\ddx\\overline{f(x)}\\right)=\\frac{1}{2}\\left(f'(x)+\\overline{f'(x)}\\right)\\\\
		&=Re(f'(x))
	\\end{align*}
	\\item Nutze $i)$ und $\\exp(\\ii x)=\\cos(x)+\\ii\\sin(x)$ sowie $\\ii\\exp(\\ii x)=-\\sin(x)+\\ii\\cos(x)$:
	\\begin{equation*}
		\\ddx\\cos(x)=\\ddx Re(\\exp(\\ii x))\\stackrel{i)}{=}Re(\\ii\\exp(\\ii x))=Re(-\\sin(x)+\\ii\\cos(x))=-\\sin(x)
	\\end{equation*}
	\\item Sei $\\alpha\\in\\R$.
	\\begin{align*}
		\\ddx x^\\alpha&=\\ddx\\exp(\\alpha\\log(x))=\\exp(\\alpha\\log(x))\\cdot\\ddx\\alpha\\log(x)=x^\\alpha\\cdot\\frac{\\alpha}{x}\\\\
		&=\\alpha x^{\\alpha-1}
	\\end{align*}
	\\item Sei $\\alpha\\in\\R^+$:
	\\begin{equation*}
		\\ddx\\alpha^x=\\ddx\\exp(x\\log(\\alpha))=\\exp(x\\log(\\alpha))\\cdot\\ddx x\\log(\\alpha)=\\alpha^x\\cdot\\log(\\alpha)
	\\end{equation*}
\\end{enumerate}
\\end{taggedblock}
`,preview:"8460ba3b-9e12-4fb1-a9aa-036ebfb9be09.png"},{uuid:"a8253689-9cb3-4ae5-b42e-5859eca19f11",title:["Folgen","Nullfolgen"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:4,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei \\Folge{a} eine Folge positiver reeller Zahlen mit $\\lim\\limits_{n\\rightarrow\\infty} a_n = 0$. Beweisen Sie, dass es unendlich viele Indizes $n$ gibt, so dass $a_m\\geq a_n$ für alle $m\\geq n$ gilt.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Da $\\lim\\limits_{n\\rightarrow\\infty}a_n=0$ konvergiert~$a_n$ gegen 0 und es existiert für alle~$\\eps>0$ ein~$N\\in\\N$, sd. für alle~$n\\geq N$ gilt
	\\begin{equation*}
		\\abs{a_n-0}=\\abs{a_n}\\stackrel{a_n>0}{=}a_n<\\eps
	\\end{equation*}
	Sei~$\\eps_1:=a_1$ und sei~$N_1\\in\\N$ die kleinste natürliche Zahl mit 
	\\begin{equation*}
		\\forall n>N_1:\\abs{a_n}=a_n<\\eps_1=a_1.
	\\end{equation*}
	Dann gilt: $a_{N_1}\\geq a_1$, da ansonsten~$N_1-1$ bereits ein Index \\\\
	mit $\\forall n>N_1:\\abs{a_n}=a_n<\\eps_1=a_1$ wäre.\\\\
	Somit folgt $a_{N_1}\\geq \\eps_1>a_n$ für alle~$n>N_1$, wodurch~$a_{N_1}$ die zu zeigende Eigenschaft
	\\begin{equation*}
		a_n\\geq a_{N_1}\\ \\forall n\\geq N_1
	\\end{equation*}besitzt.\\\\
	Wähle nun iterativ~$\\eps_{i+1}=a_{N_i+1}$ sowie $N_{i+1}$ als kleinste natürliche Zahl mit 
	\\begin{equation*}
		\\forall n>N_{i+1}:\\abs{a_n}=a_n<\\eps_{i+1}.
	\\end{equation*}
	Dann erfüllt $a_{N_{i+1}}$ wiederum die zu zeigende Eigenschaft.\\\\
	Somit lassen sich unendlich viele $N_i, i\\in\\N$ mit $a_{N_i}\\geq a_n$ für alle $n\\geq N_i$ erzeugen.\\\\
	$\\Rightarrow$ Beh.\\hfill$\\square$
\\end{taggedblock}
`,preview:"a8253689-9cb3-4ae5-b42e-5859eca19f11.png"},{uuid:"dd8e8c2a-2710-48be-be27-aac683655927",title:["Taylorreihe","Potenzreihe","Konvergenzradius"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:13,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Ein Hilfsmittel, um explizit die Taylorreihe einer Funktion $f : \\R \\rightarrow \\R$ um einen Punkt $x_0$ angeben zu können, ist folgende Merkregel:\\\\
Wird $f$ in einer Umgebung von $x_0$ durch eine Potenzreihe dargestellt, d.h. es existieren $\\delta > 0$ und $\\Folge{a}\\customsubset\\R$, so dass
$$f (x) = \\Reihe{0}{a_nx^n}\\qquad \\text{für alle } x\\text{ mit }\\abs{x - x_0} < \\delta,$$
dann ist diese Reihe bereits die Taylorreihe von $f$ um $x_0$.\\\\
Benutzen Sie dies, um für folgende Funktionen die Taylorreihe um $x_0$ zu berechnen. Geben Sie
außerdem den Konvergenzradius an.
\\begin{enumerate}
    \\item $$f(x) = \\frac{1}{1+x^2},\\ x_0 = 0;$$
    \\item $$g(x) = \\frac{1}{1-x},\\ x_0 = 3.$$
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Sei $\\delta:=1$ und \\Folge{a} eine Folge in $\\R$ mit $a_n:=\\left(-1\\right)^n$ für alle $n\\in\\N$. Dann gilt für $x_0=0$ und für alle $x\\in\\R$ mit~$\\abs{x}<\\delta$:
	\\begin{equation*}
		\\abs{(-1)x^2}=\\abs{x^2}<\\delta^2=1
	\\end{equation*}
	Somit erhalten wir für alle $x\\in\\R$ mit $\\abs{x}<\\delta=1$
	\\begin{equation*}
		\\sum\\limits_{n=0}^\\infty(-1)^n\\left(x^2\\right)^n=\\sum\\limits_{n=0}^\\infty\\left(-x^2\\right)^n=\\frac{1}{1-\\left(-x^2\\right)}=\\frac{1}{1+x^2}=f(x)
	\\end{equation*}
	Da die geometrische Reihe für alle $-x^2$ falls $\\abs{x}<1$ konvergiert, ist der Konvergenzradius $R=1$
	\\item Sei nun $h:\\R\\rightarrow\\R$ mit $y:=x-3$ für $x\\in\\R$ beliebig, sodass
	\\begin{equation*}
		h(y)=\\frac{1}{-2-y}=\\frac{1}{1-(y+3)}=\\frac{1}{1-x}=g(x)
	\\end{equation*}
	Ziel von $h$ ist es, dass wir um $y_0=0=x_0-3$ entwickeln können.\\\\
	Wähle $\\delta:=2$ und \\Folge{a} in $\\R$\\ mit $a_n:=\\left(-\\frac{1}{2}\\right)^{n+1}$ für alle $n\\in\\N$. Dann gilt für~$y_0=0$ und für alle $y\\in\\R$ mit $\\abs{y}<\\delta=2$, dass
	\\begin{equation*}
		\\abs{\\left(-\\frac{1}{2}\\right)y}=\\frac{1}{2}\\abs{y}<\\frac{2}{2}=1
	\\end{equation*}
	Und wir erhalten für solche $y$:
	\\begin{align*}
		\\sum\\limits_{n=0}^\\infty\\left(-\\frac{1}{2}\\right)^{n+1}y^n&=-\\frac{1}{2}\\sum\\limits_{n=0}^\\infty\\left(-\\frac{1}{2}y\\right)^n\\\\
		&=-\\frac{1}{2}\\frac{1}{1-\\left(-\\frac{1}{2}y\\right)}=-\\frac{1}{2}\\frac{1}{1+\\frac{1}{2}y}=\\frac{1}{-2-y}\\\\
		&=h(y)=g(x)
	\\end{align*}
\\end{enumerate}
\\end{taggedblock}`,preview:"dd8e8c2a-2710-48be-be27-aac683655927.png"},{uuid:"e8a26108-634d-4082-a857-bba489930ff8",title:["Quantoren","Aussagenlogik"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:1,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
\\begin{enumerate}
    \\item Drücken Sie die Aussage $\\exists!\\ x : A(x)$ (in Worten: es gibt genau ein $x$ mit der Eigenschaft $A(x)$) nur mit Hilfe der Symbole $\\exists,\\ \\forall,\\ \\land,\\ \\lor,\\ =$ und $\\neg$ aus.
    \\item Sei $\\Folge{a}$ eine Folge reeller Zahlen. Negieren Sie formal die folgende Aussage:
    $$\\forall\\eps \\in \\Rspos\\ \\exists N \\in\\N\\ \\forall n\\in\\N : (n\\geq N \\Rightarrow \\abs{a_n} \\leq\\eps),$$
wobei $\\Rspos$ die Menge der positiven reellen Zahlen ist und $\\abs{a}$ den Betrag von $a$ bezeichnet.
Beschreiben sie anhand einer Skizze, was die Aussage und ihre Negation über die Folge \\Folge{a} aussagen.
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
    \\item $$\\exists!\\ x:A(x)\\Leftrightarrow\\left(\\exists x:A(x)\\right)\\land\\left(\\forall y:\\left(\\neg A(y)\\right)\\lor\\left(A(y)\\land x=y\\right)\\right)$$
    \\item Die Negation lautet:
	$$\\exists\\eps\\in\\Rspos\\ \\forall N\\in\\N \\ \\exists n\\in\\N :\\left(n\\geq N\\Rightarrow\\abs{a_n}>\\eps\\right)$$
\\end{enumerate}
\\end{taggedblock}
`,preview:"e8a26108-634d-4082-a857-bba489930ff8.png"},{uuid:"9299b861-8d26-4658-aa03-36b166adbcb7",title:["Komplexe Zahlen"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:3,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
\\begin{enumerate}
\\item Folgende komplexe Zahlen stelle man in der Form $a+\\ii b$ mit $a, b\\in\\R$ dar:
    \\begin{align*}
        &\\frac{2+\\ii}{2-\\ii}&&,&\\left(\\frac{1+\\ii}{1-\\ii}\\right)^4.
    \\end{align*}
\\item Geben Sie drei (verschiedene) komplexe Zahlen $a_k+\\ii b_k, k = 1, 2, 3$ an, für die
    $$(a_k+\\ii b_k)^3 = 1$$
gilt.
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item
	Nutze~$(a+\\ii b)(a-\\ii b)=a^2+b^2$
	\\begin{align*}
		\\frac{2+\\ii}{2-\\ii}&=\\frac{\\left(2+\\ii\\right)^2}{(2-\\ii)(2+\\ii)}\\\\
		&=\\frac{4+2\\cdot2\\ii-1}{4+1}=\\frac{3+4\\ii}{5}\\\\
		&=\\frac{3}{5}+\\ii\\frac{4}{5}\\\\
	\\end{align*}
\\begin{align*}
	\\left(\\frac{1+\\ii}{1-\\ii}\\right)^4&=\\left(\\frac{\\left(1+\\ii\\right)^2}{\\left(1-\\ii\\right)\\left(1+\\ii\\right)}\\right)^4\\\\
	&=\\left(\\frac{1+2\\ii-1}{1+1}\\right)^4\\\\
	&=\\left(\\frac{2\\ii}{2}\\right)^4=\\left(\\ii\\right)^4\\\\
	&=1
\\end{align*}
\\item Suche drei komplexe Zahlen~$z_1,z_2,z_3\\in\\mathbb{C}$ mit~$z_j^3=1$.\\\\
Sei~$z_j:=a_j+\\ii b_j$.\\\\
Für~$b_j=0$ existiert eine Lösung:~$z_1=1$, da~$z_1^3=1^3=1$. Sei also nun~$b_j\\neq0$.
\\begin{align*}
	z_j^3&=\\left(a_j+\\ii b_j\\right)^3=a_j^3+3a_j^2\\ii b_j+3a_j(\\ii b_j)^2+(\\ii b_j)^3\\\\
	&=(\\underbrace{a_j^3-3a_jb_j^2}_{=1,\\text{da }Re(1)=1})+\\ii(\\underbrace{3a_j^2b_j-b_j^3}_{=0\\text{da }Im(1)=0})
\\end{align*}
Somit ergeben sich zwei Gleichungen~$1=a_j^3-3a_jb_j^2$ sowie~$0=3a_j^2b_j-b_j^3$
\\begin{align*}
	0&=3a_j^2b_j-b_j^3&\\mid \\cdot b_j\\text{da $b_j\\neq0$}\\\\
	0&=3a_j^2-b_j^2&\\mid +b_j^2\\\\
	b_j^2&=3a_j^2&\\mid \\sqrt{}\\\\
	b_j&=\\pm\\sqrt{3}a_j
\\end{align*}
sowie 
\\begin{align*}
	1&=a_j^3-3a_jb_j^2=a_j^3-3a_j(\\pm\\sqrt{3}a_j)^2=a_j^3-9a_j^3=-8a_j^3&\\mid\\sqrt[3]{}\\\\
	1&=-2a_j&\\mid\\cdot\\left(-\\frac{1}{2}\\right)\\\\
	-\\frac{1}{2}&=a_j.
\\end{align*}
Somit ist~$b_j=\\pm a_j\\sqrt{3}=\\pm\\frac{\\sqrt{3}}{2}$ und die drei komplexen Zahlen~$z_1,z_2,z_3$ mit~$z_j^3=1$ sind:
\\begin{align*}
	z_1&=1\\\\
	z_2&=-\\frac{1}{2}+\\ii\\frac{\\sqrt{3}}{2}\\\\
	z_3&=-\\frac{1}{2}-\\ii\\frac{\\sqrt{3}}{2}
\\end{align*}
$\\Rightarrow$Beh.\\hfill$\\square$
\\end{enumerate}
\\end{taggedblock}
`,preview:"9299b861-8d26-4658-aa03-36b166adbcb7.png"},{uuid:"d9150c92-a43e-412d-b5d1-ecfdf82332b6",title:["vollständige Induktion"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:2,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`


\\aufgabe{} 


\\begin{taggedblock}{GermanExercise}
Beweisen Sie folgende Aussagen mit vollst¨andiger Induktion.
\\begin{enumerate}
    \\item\\begin{align*}
        \\sum\\limits_{i=1}^n(2i-1)&=n^2 &&\\text{und} &\\sum\\limits_{k=1}^n \\frac{1}{k(k + 1)} &= \\frac{n}{n+1}.
    \\end{align*}
    \\item In einem $n$-Eck ist die Anzahl aller Verbindungslinien $V(n)$ zwischen den Punkten immer um $n$ größer als die Anzahl der Diagonallinien $D(n)$. Kurz $V(n)=D(n)+n$.
\\end{enumerate}

\\end{taggedblock}




\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item 
    \\begin{itemize}
	\\item[1.] Zu $\\sum\\limits_{i=1}^n\\left(2i-1\\right)=n^2$.\\\\
	I.A. Sei $n=1$.
	\\begin{equation*}
		\\sum\\limits_{i=1}^1\\left(2i-1\\right)=2-1=1^2
	\\end{equation*}
	Somit gilt die Behauptung für ein $n\\in\\mathbb{N}$\\\\
	I.S. Zeige, dass die Behauptung auch für $n+1$ gilt.
	\\begin{align*}
		\\sum\\limits_{i=1}^{n+1}\\left(2i-1\\right)&=\\sum\\limits_{i=1}^{n}\\left(2i-1\\right)+(2n+2-1)\\\\
		&\\stackrel{I.V.}{=}n^2+(2n+1)\\stackrel{Binom.Formel}{=}(n+1)^2
		n^2
	\\end{align*}
	Somit gilt die Behauptung für alle $n\\in\\mathbb{N}$
	\\item[2.] Zu $\\sum\\limits_{i=1}^n\\frac{1}{k\\left(k+1\\right)}=\\frac{n}{n+1}$.\\\\
	I.A. Sei $n=1$.
	\\begin{equation*}
		\\sum\\limits_{i=1}^1\\frac{1}{k\\left(k+1\\right)}=\\frac{1}{1(1+1)}=\\frac{1}{1+1}=\\frac{1}{2}
	\\end{equation*}
	Somit gilt die Behauptung für ein $n\\in\\mathbb{N}$\\\\
	I.S. Zeige, dass die Behauptung auch für $n+1$ gilt.
	\\begin{align*}
		\\sum\\limits_{i=1}^{n+1}\\frac{1}{k\\left(k+1\\right)}&=\\sum\\limits_{i=1}^n\\frac{1}{k\\left(k+1\\right)}+\\frac{1}{(n+1)\\left(n+2\\right)}\\\\
		&\\stackrel{I.V.}{=}\\frac{n}{n+1}+\\frac{1}{(n+1)\\left(n+2\\right)}\\\\
		&=\\frac{n^2+2n}{(n+1)(n+2)}+\\frac{1}{(n+1)\\left(n+2\\right)}\\\\
		&=\\frac{n^2+2n+1}{(n+1)\\left(n+2\\right)}=\\frac{(n+1)^2}{(n+1)\\left(n+2\\right)}\\\\
		&=\\frac{n+1}{n+2}
	\\end{align*}
	Somit gilt die Behauptung für alle $n\\in\\mathbb{N}$.
	\\end{itemize}
	\\item Zum Verständnis hier die Skizze eines Pentagramms mit Verbindungs- bzw Diagonallinien.
	\\begin{figure*}[h]
		\\begin{subfigure}{0.4\\textwidth}
			\\centering
			\\begin{tikzpicture}
				\\begin{scope}[every node/.style=fill,circle,inner sep=0pt,minimum size=1pt]
					\\node (a) at (90:2) {};
					\\node (b) at (162:2) {};
					\\node (c) at (234:2) {};
					\\node (d) at (308:2) {};
					\\node (e) at (20:2) {};
					
				\\end{scope}
				
				\\path [-] (a) edge node[left] {} (b);
				\\path [-] (a) edge node[left] {} (c);
				\\path [-] (a) edge node[left] {} (d);
				\\path [-] (a) edge node[left] {} (e);
				
				\\path [-] (b) edge node[left] {} (c);
				\\path [-] (b) edge node[left] {} (d);
				\\path [-] (b) edge node[left] {} (e);
				
				\\path [-] (c) edge node[left] {} (d);
				\\path [-] (c) edge node[left] {} (e);
				
				\\path [-] (d) edge node[left] {} (e);
			\\end{tikzpicture}
			\\subcaption*{Verbindungslinien eines Pentagramms}
		\\end{subfigure}
		\\begin{subfigure}{0.4\\textwidth}
			\\centering
			\\begin{tikzpicture}
				\\begin{scope}[every node/.style=fill,circle,inner sep=0pt,minimum size=1pt]
					\\node (a) at (90:2) {};
					\\node (b) at (162:2) {};
					\\node (c) at (234:2) {};
					\\node (d) at (308:2) {};
					\\node (e) at (20:2) {};
					
				\\end{scope}
				
%				\\path [-] (a) edge node[left] {} (b);
				\\path [-] (a) edge node[left] {} (c);
				\\path [-] (a) edge node[left] {} (d);
%				\\path [-] (a) edge node[left] {} (e);
				
%				\\path [-] (b) edge node[left] {} (c);
				\\path [-] (b) edge node[left] {} (d);
				\\path [-] (b) edge node[left] {} (e);
				
%				\\path [-] (c) edge node[left] {} (d);
				\\path [-] (c) edge node[left] {} (e);
				
%				\\path [-] (d) edge node[left] {} (e);
			\\end{tikzpicture}
			\\subcaption*{Diagonallinien eines Pentagramms}
		\\end{subfigure}
	\\end{figure*}
	
	Wenn bei einem n-Eck eine weitere Ecke hinzugefügt wird, entsehen von diesem Punkt aus n neue Linien, da das neue Eck mit allen anderen $n$ Ecken verbunden wird. Davon sind 2 jeweils an die nächsten Nachbarn und somit keine Diagonallinien, wobei zwischen diesen Nachbarn nun eine Diagonallinie entsteht, da die neue Ecke dazwischen liegt.
	Somit folgen die Gleichungen:
	\\begin{align*}
		V(n+1)&=V(n)+n
		\\intertext{und}
		D(n+1)&=D(n)+(n-1)
	\\end{align*}
	I.A. sei $n=3$.
	In einem Dreieck befinden sich 3 Verbindungslinien, jedoch keine Diagonallinien.
	Also
	\\begin{equation*}
		V(3)=3=0+3=D(3)+3.
	\\end{equation*}
	Somit gilt die Behauptung für ein $n\\in\\mathbb{N}$\\\\
	I.S. Zeige, dass die Behauptung auch für $n+1$ gilt.
	\\begin{align*}
		V(n+1)&=V(n)+n\\\\
		&\\stackrel{I.V}{=}D(n)+n+n=D(n)+(n-1)+(n-1)\\\\
		&=D(n+1)+(n+1)
	\\end{align*}
	Somit gilt die Behauptung für alle $n\\in\\mathbb{N}$.\\hfill$\\square$
 \\end{enumerate}
\\end{taggedblock}
`,preview:"d9150c92-a43e-412d-b5d1-ecfdf82332b6.png"},{uuid:"1e8cbe25-56c0-47ba-b690-bb76221e4d0a",title:["differenzierbar","Stammfunktion","monoton"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:12,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $f : [a, b]\\rightarrow\\R$ differenzierbar und streng monoton. Sei weiter $F$ eine Stammfunktion von $f$.
Geben Sie eine Stammfunktion $\\Tilde{F}$ von $f^{-1}$ an
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Berechne zunächst das folgende Integral durch substituieren mit~$f(x)=y$ beziehungsweise~$f^{-1}(y)=x$:
		\\begin{align*}
			\\Tilde{F}(y)=\\int f^{-1}(y)\\diff y&\\stackrel{subs.}{=}\\int \\underbrace{f^{-1}\\left(f(x)\\right)}_{=x}\\cdot f'(x)\\diff x=\\int xf'(x)\\diff x\\\\
			&\\stackrel{part. Int}{=}xf(x)-\\int f(x)\\diff x=xf(x)-F(x)\\\\
			&\\stackrel{resubs.}{=}f^{-1}(y)f\\left(f^{-1}(y)\\right)-F\\left(f^{-1}(y)\\right)\\\\
			&=yf^{-1}(y)-F\\left(f^{-1}(y)\\right)
		\\end{align*}
		Betrachte zum Überprüfen die Ableitung für $y\\in f\\left(\\left[a,b\\right]\\right)$ beliebig:
		\\begin{align*}
			\\tilde{F}'(y)&=\\left(yf^{-1}(y)-F\\left(f^{-1}(y)\\right)\\right)'\\\\
			&=yf'^{-1} (y)+f^{-1}(y)-\\underbrace{F'}_{=f}\\left(f^{-1}(y)\\right)\\cdot f'^{-1}(y)\\\\
			&=f^{-1}(y)+yf'^{-1}-\\underbrace{f\\left(f^{-1}(y)\\right)}_{=y}f'^{-1}(y)=\\\\
			&=f^{-1}(y)
		\\end{align*}
	Somit ist $\\tilde{F}$ eine Stammfunktion von $f^{-1}$.
\\end{taggedblock}`,preview:"1e8cbe25-56c0-47ba-b690-bb76221e4d0a.png"},{uuid:"6808d169-1222-4563-8e49-1b269cf02b0b",title:["Reihen","Wurzekriterium","Majorantenkriterium"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:6,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei \\Folge{a} eine Folge reeller (oder komplexer) Zahlen.\\\\
Beweisen Sie die folgenden Aussagen:
\\begin{enumerate}
    \\item Gibt es ein $q\\in\\R,\\ 0 < q < 1$ und ein $N\\in\\N$, so dass für alle $n\\geq N$ gilt
    $$\\sqrt[n]{\\abs{a_n}}\\leq q$$ dann konvergiert die Reihe \\Reihe{1}{a_n} absolut.\\\\\\emph{Hinweis}: Verwenden Sie das Majorantenkriterium.
    \\item Gilt $\\sqrt[n]{\\abs{a_n}}\\geq 1$ für unendlich viele $n\\in\\N$, dann divergiert die Reihe 
    \\Reihe{1}{a_n}.
\\item Zeigen Sie durch ein Beispiel, dass für $\\lim\\limits_{n\\rightarrow\\infty}\\sqrt[n]{\\abs{a_n}}=1$ keine Aussage über die Konvergenz der Reihe \\Reihe{1}{a_n} an gemacht werden kann.\\\\
\\emph{Hinweis}: Ohne Beweis darf $\\lim\\limits_{n\\rightarrow\\infty}\\sqrt[n]{n}=1$ verwendet werden.
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Sei $a_n$ eine Folge und $0<q<1$ sowie $N\\in\\N$ so, dass für alle~$n\\geq N$ gilt~$\\sqrt[n]{\\abs{a_n}}\\leq~q$.\\\\
	Dann folgt $\\sqrt[n]{\\abs{an}}\\leq q\\Leftrightarrow\\abs{a_n}\\leq q^n$.\\\\
	Da $0<q<1$ ist $\\sum\\limits_{n=1}^\\infty q^n$ als geometrische Reihe eine konvergente Majorante zu~$\\sum\\limits_{n=1}^\\infty~a_n$.\\\\
	Somit ist $\\sum\\limits_{n=1}^\\infty \\abs{a_n}$ nach dem Majorantenkriterium eine absolut konvergente Folge.
	\\item Sei $\\sqrt[n]{\\abs{a_n}}>1$ und somit $\\abs{a_n}>1^n=1$ für unendlich viele $n\\in\\N$.\\\\
	Somit ist $\\left(a_n\\right)_{n\\in\\N}$ keine Nullfolge, weshalb die Reihe $\\sum\\limits_{n=1}^\\infty a_n$ divergiert.
	\\item Betrachte die Folge $a_n:=n$ mit $\\lim\\limits_{n\\rightarrow\\infty}\\sqrt[n]{\\abs{a_n}}=1$ (siehe Hinweis).\\\\
	Zudem gilt, dass diese Folge divergiert, wodurch auch die Reihe $\\sum\\limits_{n=1}^\\infty n$ divergiert.\\\\
	Betrachte nun die Folge $b_n:=\\frac{1}{n^2}$ mit $\\lim\\limits_{n\\rightarrow\\infty}\\sqrt[n]{\\abs{\\frac{1}{n^2}}}
	=\\lim\\limits_{n\\rightarrow\\infty}\\frac{1}{\\sqrt[n]{n^2}}=1$.\\\\
	Für die Reihe $\\sum\\limits_{n=1}^\\infty\\frac{1}{n^2}$ gilt jedoch, dass sie konvergiert.\\\\
	Somit ist für $\\lim\\limits_{n\\rightarrow\\infty}\\sqrt[n]{\\abs{a_n}}=1$ keine genaue Aussage möglich.
\\end{enumerate}
\\end{taggedblock}
`,preview:"6808d169-1222-4563-8e49-1b269cf02b0b.png"},{uuid:"f33024b8-f1b0-4d41-a429-ce63d62587ec",title:["Stetigkeit","stetig","Satz von Rolle"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:10,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Seien $f, g : [a, b] \\rightarrow\\R$ stetige Funktionen, die in $(a, b)$ differenzierbar sind. \\\\Beweisen Sie: Es gibt
ein $\\xi\\in (a, b)$, so dass
$$(f (b) - f (a)) g'(\\xi) = (g(b) - g(a)) f '(\\xi) .$$
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Betrachte zunächst die Hilfsfunktion $F:\\left[a,b\\right]\\rightarrow\\R$ mit \\begin{equation*}
		F(x)=\\left(f(b)-f(a)\\right)\\cdot\\left(g(x)-g(a)\\right)-\\left(g(b)-g(a)\\right)\\cdot\\left(f(x)-f(b)\\right)
	\\end{equation*}
	Diese besitzt, da $f,g$ stetig und auf $\\left(a,b\\right)$ differenzierbar sind, die gleichen Eigenschaften.\\\\
	Außerdem gilt:
	\\begin{align*}
		F(a)&=\\left(f(b)-f(a)\\right)\\cdot\\underbrace{\\left(g(a)-g(a)\\right)}_{=0}-\\left(g(b)-g(a)\\right)\\cdot\\left(f(a)-f(b)\\right)\\\\
		&=-\\left(g(b)-g(a)\\right)\\cdot\\left(f(a)-f(b)\\right)\\\\
		&=\\left(g(b)-g(a)\\right)\\cdot\\left(f(b)-f(a)\\right)\\\\
		F(b)&=\\left(f(b)-f(a)\\right)\\cdot\\left(g(b)-g(a)\\right)-\\left(g(b)-g(a)\\right)\\cdot\\underbrace{\\left(f(b)-f(b)\\right)}_{=0}\\\\
		&=\\left(f(b)-f(a)\\right)\\cdot\\left(g(b)-g(a)\\right)=F(a)\\\\
		F'(x)&=\\left(f(b)-f(a)\\right)\\cdot g'(x)-\\left(g(b)-g(a)\\right)\\cdot f'(x)
	\\end{align*}
	Da $F(a)=F(b)$ folgt nach dem Satz von Rolle, dass ein $\\xi\\in\\left(a,b\\right)$ mit $F'(\\xi)=0$ existiert.
	Somit gilt: 
	\\begin{equation*}
		0=F'(\\xi)=\\left(f(b)-f(a)\\right)\\cdot g'(\\xi)-\\left(g(b)-g(a)\\right)\\cdot f'(\\xi)
	\\end{equation*}
	und daraus folgt die Behauptung
	\\begin{equation*}
		\\left(f(b)-f(a)\\right)\\cdot g'(\\xi)=\\left(g(b)-g(a)\\right)\\cdot f'(\\xi).
	\\end{equation*}
\\end{taggedblock}`,preview:"f33024b8-f1b0-4d41-a429-ce63d62587ec.png"},{uuid:"801c65c9-c1a9-469d-bf2a-3dc4abed89fa",title:["Konvergente rationale Folgen","Konvergente irrationale Folgen","Lineare Abbildung"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:8,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
\\begin{enumerate}
    \\item Zeigen Sie: Für jedes $x\\in\\R$ gibt es konvergente Folgen $\\Folge{x}$ in $\\Q$ und $\\Folge{y}$ in $\\R\\setminus\\Q$ mit $\\lim\\limits_{n\\rightarrow\\infty} x_n = x$ und $\\lim\\limits_{n\\rightarrow\\infty} y_n = x$.
    \\item Gegeben seien zwei stetige Funktionen $f, g : \\R\\rightarrow\\R$. Es gelte $f(x) = g(x)$ für alle $x\\in\\Q$. Zeigen Sie, dass dann schon $f(x) = g(x)$ für alle $x\\in\\R$ gilt.
    \\item Sei $f : \\R\\rightarrow\\R$ eine stetige Funktion mit der Eigenschaft 
    $$f(x + y) = f(x) + f(y) \\text{ für alle } x, y\\in\\R.$$
    Zeigen Sie, dass dann für alle $x\\in\\R$ gilt: $f(x) = ax$, wobei $a := f(1)$.\\\\
    \\emph{Hinweis}: Zeigen Sie die Behauptung zunächst für rationale $x$.
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Betrachte hierfür zwei Fällle:
    \\begin{enumerate}
		\\item Fall 1, $x\\in\\Q$:
		\\begin{itemize}
			\\item Für die Folge $\\Folge{x}$ in $\\Q$ mit $x_n:=x\\in\\Q$ für alle $n\\in\\N$ gilt, dass $\\lim\\limits_{n\\rightarrow\\infty} x_n=x$
			\\item Für die Folge $\\Folge{y}$ in $\\R\\backslash\\Q$ mit $y_n:=\\underbrace{x}_{\\in\\Q}+\\underbrace{\\frac{\\sqrt{2}}{n}}_{\\in\\R\\backslash\\Q}\\in\\R\\backslash\\Q$ für alle $n\\in\\N$ gilt, da $\\frac{\\sqrt{2}}{n}$ eine Nullfolge ist: $\\lim\\limits_{n\\rightarrow\\infty} y_n=x$
		\\end{itemize}
		\\item Fall 2, $x\\in\\R\\backslash\\Q$:
		\\begin{itemize}
			\\item Sei \\Folge{x} die Folge, die $x$ ab der n-ten Nachkommastelle abschneidet. Dann ist $x_n\\cdot10^n\\in\\Z$ und somit liegt $\\Folge{x}$ in $\\Q$. Au"serdem gilt für alle $n\\in\\N$, dass $\\abs{x_n-x}<10^{-n}$. Somit konvergiert die Folge $\\Folge{x}$ gegen $x$.
			\\item Für die Folge $\\Folge{y}$ in $\\R\\backslash\\Q$ mit $y_n:=x\\in\\R\\backslash\\Q$ für alle $n\\in\\N$ gilt, dass $\\lim\\limits_{n\\rightarrow\\infty} y_n=x$
		\\end{itemize}
	\\end{enumerate}
	\\item Sei $x\\in\\R$ beliebig. Aus Teilaufgabe $i)$ folgt, dass es eine Folge \\Folge{x} in $\\Q$ gibt, mit $\\lim\\limits_{n\\rightarrow\\infty} x_n=x$. Da $f,g$ stetig sind, folgt:
	\\begin{equation*}
		f(x)=\\lim\\limits_{n\\rightarrow\\infty} f(\\underbrace{x_n}_{\\in\\Q})=\\lim\\limits_{n\\rightarrow\\infty} g(x_n)=g(x).
	\\end{equation*}
	\\item Sei $x\\in\\Q$ beliebig und $a\\in\\Z, b\\in\\N$ mit $x=\\frac{a}{b}$.
	Zeige zunächst für beliebige $n\\in\\N$:
	\\begin{align*}
		&&f(0)&=f(0+0)=f(0)+f(0)&\\mid-f(0)\\\\
		\\Leftrightarrow&&0&=f(0)=0\\cdot f(1)\\\\
		&&0&=f(0)=f(n-n)=f(n)+f(-n)&\\mid-f(n)\\\\
		\\Leftrightarrow&&-f(n)&=f(-n).		
	\\end{align*}
	Betrachte im Folgenden den Fall $a\\in\\N$:
	\\begin{align*}
		&&bf(x)&=bf(\\frac{a}{b})=\\sum\\limits_{i=1}^{b}f(\\frac{a}{b})=f(\\sum\\limits_{i=1}^{b}\\frac{a}{b})=f(b\\cdot\\frac{a}{b})\\\\
		&&&=f(a)=f(\\sum\\limits_{i=1}^a1)=\\sum\\limits_{i=1}^{a}f(1)=af(1)&\\mid\\cdot\\frac{1}{b}\\\\
		\\Leftrightarrow&&f(x)&=\\frac{a}{b}f(1)=xf(1).
	\\end{align*}
	Im Fall $a<0$ betrachte die zuvor gezeigte Gleichheit $f(-\\frac{a}{b})=-f(\\frac{a}{b})$.\\\\
	Somit gilt für alle $x\\in\\Q$, dass $f(x)=xf(1)$.\\\\
	Sei $g:\\R\\rightarrow\\R,x\\mapsto xf(1)$. Somit ist g Produkt zweier stetiger Funktionen in $\\R$.\\\\
	Nach Teilaufgabe $ii)$ folgt nun, dass auch für alle $x\\in\\R$ gilt:
	\\begin{equation*}
		f(x)=xf(1)
	\\end{equation*}
\\end{enumerate}
\\end{taggedblock}
`,preview:"801c65c9-c1a9-469d-bf2a-3dc4abed89fa.png"},{uuid:"fedca9b6-bb17-4d1a-aec1-f9ec312c02e5",title:["Ableitung","Differenzieren","stetig Differenzierbar"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:9,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Beweisen Sie, dass die Funktion

$$f:(-1,1)\\rightarrow\\R,\\ x\\mapsto\\left\\{\\begin{array}{cl}0 & ,x=0\\\\x^2\\sin\\left(\\frac{1}{x}\\right) & ,x\\neq0\\\\\\end{array}\\right.$$
differenzierbar, aber nicht stetig differenzierbar ist.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} Sei $x_0\\in(-1,1)$. Zeige zunächst, dass $f$ differenzierbar ist.\\\\\\\\
	Falls $x_0\\neq0$ folgt die Differenzierbarkeit daraus, dass $f$ hier Komposition beziehungsweise Produkt aus differenzierbaren Funktionen ist.\\\\
	Falls $x_0=0$: 
	\\begin{equation*}
		\\lim\\limits_{x\\rightarrow x_0}\\frac{f(x)-f(x_0)}{x-x_0}=\\lim\\limits_{x\\rightarrow x_0}\\frac{x^2\\sin\\left(\\frac{1}{x}\\right)-0}{x-0}=\\lim\\limits_{x\\rightarrow x_0} x\\sin\\left(\\frac{1}{x}\\right)=0,
	\\end{equation*}
    da 
	\\begin{equation*}
		\\abs{\\lim\\limits_{x\\rightarrow x_0} x\\sin\\left(\\frac{1}{x}\\right)}=\\lim\\limits_{x\\rightarrow x_0}\\abs{x\\sin\\left(\\frac{1}{x}\\right)}=\\lim\\limits_{x\\rightarrow x_0}\\abs{x}\\underbrace{\\abs{\\sin\\left(\\frac{1}{x}\\right)}}_{\\leq1}\\leq\\lim\\limits_{x\\rightarrow x_0} \\abs{x}=0.
	\\end{equation*}
	Somit ist $f$ differenzierbar.\\\\
	Nutze Kettenregel, um abzuleiten: 
	\\begin{equation*}
		f'(x)=\\left\\{\\begin{array}{cl}0 & ,x=0\\\\2x\\sin\\left(\\frac{1}{x}\\right)-\\cos\\left(\\frac{1}{x}\\right) & ,x\\neq0\\\\		\\end{array}\\right.
	\\end{equation*}
	Betrachte nun Stetigkeit in $0$. Nutze dafür die Nullfolge \\Folge{a} mit $a_n=\\frac{1}{2\\pi n}$ für alle~$n\\in\\N$.\\\\
	\\begin{equation*}
		\\lim\\limits_{n\\rightarrow\\infty}f'(x_n)=\\lim\\limits_{n\\rightarrow\\infty}\\frac{1}{\\pi n}\\underbrace{\\sin\\left(2\\pi n\\right)}_{=0}-\\underbrace{\\cos\\left(2\\pi n\\right)}_{=1}=\\lim\\limits_{n\\rightarrow\\infty}1=1\\neq0=f'(0)
	\\end{equation*}
	Somit ist $f$ differenzierbar, jedoch nicht stetig differenzierbar.
\\end{taggedblock}
`,preview:"fedca9b6-bb17-4d1a-aec1-f9ec312c02e5.png"},{uuid:"fdfcabe0-d916-4c82-ad99-6c3ede65597b",title:["Limes Superior","Häufungspunkt","Folge","Potenzreihe"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:13,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei \\Folge{a} eine beschränkte reelle Folge. Wir definieren den Limes Superior dieser Folge durch
$$\\limsup_{n\\rightarrow\\infty} a_n := \\sup\\left\\{x \\in  \\R \\mid x\\text{ ist Häufungspunkt von } \\Folge{a}\\right\\}.$$
\\begin{enumerate}
    \\item Zeigen Sie, dass $\\limsup_{n\\rightarrow\\infty} a_n$ ein Häufungspunkt von \\Folge{a} ist, und dass es keinen größeren Häufungspunkt mehr gibt.\\\\
    \\emph{Bemerkung}: Für unbeschränkte Folgen lässt man auch $\\pm\\infty$  als Häufungspunkte zu und definiert den Limes Superior analog.
    \\item Ist $\\Reihe{0}{a_nz^n}$ eine Potenzreihe mit $a_n \\in  \\C$, so gilt für Ihren Konvergenzradius
    $$R = \\frac{1}{\\limsup\\limits_{n\\rightarrow\\infty} \\sqrt[n]{\\abs{a_n}}}.$$
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
\\item Sei $H:=\\left\\{x\\in\\R\\mid\\text{x ist Häufungspunkt von \\Folge{a}}\\right\\}$ die Menge der Häufungspunkte von \\Folge{a}. Da \\Folge{a} beschränkt ist, ist auch $H$ beschränkt.\\\\
Nach dem Vollständigkeitsaxiom existiert also ein $x^*:=\\sup H\\in\\R$. Sei nun $\\eps>0$ beliebig.\\\\
Dann existiert ein $\\bar{x}\\in H$ mit $x^*-\\frac{\\eps}{2}<\\bar{x}$, beziehungsweise $x^*-\\bar{x}<\\frac{\\eps}{2}$\\\\
Da $\\bar{x}$ ein Häufungspunkt von \\Folge{a} ist, gibt es eine Teilfolge, die gegen $\\bar{x}$ konvergiert. Insbesondere existiert ein $N\\in\\N$, sodass für alle $n\\in\\N$, $n>N$ gilt:
\\begin{equation*}
	\\abs{a_n-\\bar{x}}<\\frac{\\eps}{2}.
\\end{equation*}
Für alle $k\\in\\N$ mit $k>N$ gilt somit auch 
\\begin{align*}
	\\abs{a_{n_k}-x*}&=\\abs{a_{n_k}-x^*+\\bar{x}-\\bar{x}}\\\\
	&\\leq\\abs{a_{n_k}-\\bar{x}}+\\abs{\\bar{x}-x^*}\\\\
	&<\\frac{\\eps}{2}+\\frac{\\eps}{2}=\\eps
\\end{align*}
Somit ist $x^*$ nach Definition ein Häufungspunkt von \\Folge{a} und da $x^*:=\\sup H$ ist, existiert kein Häufungspunkt $\\bar{x}\\in H$ mit $\\bar{x}>x^*$.

\\item Sei nun $\\sum\\limits_{n=0}^\\infty a_nz^n$ eine Potenzreihe mit $\\Folge{a}\\in\\C$
\\begin{itemize}
	\\item Fall 1: $C:=\\limsup\\limits_{n\\rightarrow\\infty}\\sqrt[n]{\\abs{a_n}}<\\infty$\\\\
	Dann gilt für alle $z\\in\\C$ mit $\\abs{z}<\\frac{1}{C}$ auch
	\\begin{equation*}
		\\bar{C}=\\limsup\\limits_{n\\rightarrow\\infty}\\left(\\sqrt[n]{\\abs{a_n}}\\abs{z}\\right)=C\\cdot\\abs{z}<C\\cdot\\frac{1}{C}=1.
	\\end{equation*}
	Da $\\limsup\\limits_{n\\rightarrow\\infty}$ nach $i)$ der grö"ste Häufungspunkt der Folge $\\left(\\sqrt[n]{\\abs{a_n}}\\abs{z}\\right)$ ist, existiert ein $N\\in\\N$, sodass für alle $n\\geq N$ 
	\\begin{equation}
		\\sqrt[n]{\\abs{a_n}}\\abs{z}\\leq\\frac{1+\\bar{C}}{2}<\\frac{1+1}{2}=1
	\\end{equation} gilt.\\\\
	Somit existiert zu einem $\\eps:=\\frac{1-\\bar{C}}{2}>0$ ein $N\\in\\N$, sodass für alle $n\\geq N$
	\\begin{align}
		\\abs{\\sqrt[n]{\\abs{a_n}}\\abs{z}-\\bar{C}}<\\eps
		\\intertext{Falls $\\sqrt[n]{\\abs{a_n}}\\abs{z}\\geq\\bar{C}$}
		\\sqrt[n]{\\abs{a_n}}\\abs{z}<\\eps+\\bar{C}=\\frac{1-\\bar{C}}{2}+\\bar{C}=\\frac{1+\\bar{C}}{2}
		\\intertext{Falls $\\sqrt[n]{\\abs{a_n}}\\abs{z}<\\bar{C}$}
		\\sqrt[n]{\\abs{a_n}}\\abs{z}<\\bar{C}<\\frac{1+\\bar{C}}{2}
	\\end{align} gilt.
	Damit gilt für die Potenzreihe für alle $n\\geq N$:
	\\begin{align*}
		\\abs{a_nz^n}=\\abs{a_n}\\abs{z}^n=\\left(\\sqrt[n]{\\abs{a_n}}\\abs{z}\\right)^n\\leq\\left(\\frac{1+\\bar{C}}{2}\\right)^n.
	\\end{align*}
	Da $\\frac{1+\\bar{C}}{2}<1$ konvergiert die geometrische Reihe und somit auch die Potenzreihe.\\\\
	Sei nun $\\abs{z}>\\frac{1}{C}$. Dann gilt $\\limsup\\limits_{n\\rightarrow\\infty}\\sqrt[n]{\\abs{a_n}}z^n>C\\cdot\\frac{1}{C}=1$. Somit existiert eine Teilfolge $\\left(\\sqrt[n_k]{\\abs{a_{n_k}}}\\abs{z}\\right)_{k\\in\\N}$ sodass ein $M\\in\\N$ existiert, sodass für alle $k\\geq M$ gilt
	\\begin{equation*}
		\\sqrt[n_k]{\\abs{a_{n_k}}}\\abs{z}\\geq1.
	\\end{equation*}
	Damit divergiert aber die Teilfolge sowie die Potenzreihe nach dem Wurzelkriterium.\\\\
	Somit erfüllt $\\frac{1}{C}$ die Eigenschaften wie der Konvergenzradius und es gilt $R=\\frac{1}{C}$ durch die Eindeutigkeit des Supremums.
	\\item Fall 2: $\\limsup\\limits_{n\\rightarrow\\infty}\\sqrt[n]{\\abs{a_n}}=\\infty$\\\\
	Somit existiert eine unbeschränkte Teilfolge $\\left(\\sqrt[n_k]{\\abs{a_{n_k}}}\\right)_{k\\in\\N}$ und für alle $r\\in\\R$ existiert en $M\\in\\N$, sodass für alle $k\\geq M$ gilt
	\\begin{equation*}
		\\sqrt[n_k]{\\abs{a_{n_k}}}\\geq\\frac{1}{r}.
	\\end{equation*}
	Somit gilt für $z\\neq0$ mit $\\abs{z}=r$, dass für alle $k\\geq M$ gilt
	\\begin{equation*}
		\\sqrt[n_k]{\\abs{a_{n_k}}}\\abs{z}\\geq1
	\\end{equation*}
	Damit divergiert die Reihe $\\sum\\limits_{k=0}^\\infty a_{n_k}z^{n_k}$ und somit auch die Potenzreihe selbst für alle $z\\neq0$ und für den Konvergenzradius folgt
	\\begin{equation*}
		R=0=\\frac{1}{\\limsup\\limits_{n\\rightarrow\\infty}\\sqrt[n]{\\abs{a_n}}}
	\\end{equation*}
\\end{itemize}
\\end{enumerate}
\\end{taggedblock}`,preview:"fdfcabe0-d916-4c82-ad99-6c3ede65597b.png"},{uuid:"9bbb02b6-2ed5-493f-ab43-318e12dcd46a",title:["Exponentialfunktion","Exponentialreihe","Reihe"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:7,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Beweisen Sie die folgenden Aussagen:
\\begin{enumerate}
    \\item Für alle $x, h\\in\\R$ gilt: $\\abs{exp(x + h)-exp(x)} \\leq \\abs{h}exp(\\abs{h})exp(x)$.
    \\item Für alle $x\\in\\R$ und $h\\in\\R$ mit $0<\\abs{h}<1$ gilt: 
    $$\\abs{\\frac{exp(x + h)-exp(x)}{h}-exp(x)}\\leq 2\\abs{h} exp(x).$$
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item \\begin{equation*}\\abs{exp(x+h)-exp(x)}=\\abs{exp(x)}\\abs{exp(h)-1}=exp(x)\\abs{exp(h)-1}\\end{equation*}
	Zeige nun, dass $\\abs{exp(h)-1}\\leq\\abs{h}exp\\left(\\abs{h}\\right)$:
	\\begin{align*}
		\\abs{exp(h)-1}&=\\abs{\\Reihe{0}{\\frac{h^n}{n!}}-1}=\\abs{\\Reihe{1}{\\frac{h^n}{n!}}}\\\\
		&=\\abs{h\\Reihe{1}{\\frac{h^{n-1}}{n!}}}=\\abs{h}\\abs{\\Reihe{0}{\\frac{h^{n}}{(n+1)!}}}\\\\
		&\\leq\\abs{h}\\abs{\\Reihe{0}{\\frac{h^{n}}{(n)!}}}\\leq\\abs{h}\\Reihe{0}{\\frac{\\abs{h}^n}{n!}}\\\\
		&=\\abs{h}exp\\left(\\abs{h}\\right)
	\\end{align*}
	Somit gilt:
	\\begin{equation*}
		\\abs{exp(x+h)-exp(x)}=exp(x)\\abs{exp(h)-1}\\leq exp(x)\\abs{h}exp\\left(\\abs{h}\\right)
	\\end{equation*}
	\\item Sei $0<\\abs{h}<1$
	\\begin{align*}\\abs{\\frac{exp(x+h)-exp(x)}{h}-exp(x)}&=\\abs{exp(x)}\\abs{\\frac{exp(h)-1}{h}-1}\\\\
	&=exp(x)\\abs{\\frac{exp(h)-1-h}{h}}\\\\
	\\end{align*}
	Betrachte nun $\\abs{\\frac{exp(h)-1-h}{h}}$:
	\\begin{align*}
		\\abs{\\frac{exp(h)-1-h}{h}}&=exp(x)\\abs{\\frac{\\Reihe{0}{\\frac{h^n}{n!}}-1-h}{h}}		=\\abs{\\frac{\\Reihe{2}{\\frac{h^n}{n!}}}{h}}\\\\
		&=\\abs{\\Reihe{2}{\\frac{h^{n-1}}{n!}}}\\leq \\Reihe{2}{\\frac{\\abs{h}^{n-1}}{n!}}\\\\
		&\\leq \\Reihe{2}{\\frac{\\abs{h}}{n!}}=\\abs{h}\\Reihe{2}{\\frac{1}{n!}}\\\\
		&=\\abs{h}\\left(\\Reihe{0}{\\frac{1}{n!}}-1-1\\right)\\\\
		&=\\abs{h}\\left(\\underbrace{exp(1)-2}_{<1}\\right)=\\abs{h}
	\\end{align*}
	Somit gilt:
	\\begin{align*}
		\\abs{\\frac{exp(x+h)-exp(x)}{h}-exp(x)}&=exp(x)\\abs{\\frac{exp(h)-1-h}{h}}\\\\
		&\\leq exp(x)\\abs{h}\\\\
		&\\leq 2\\abs{h}exp(x)
	\\end{align*}
\\end{enumerate}
\\end{taggedblock}
`,preview:"9bbb02b6-2ed5-493f-ab43-318e12dcd46a.png"},{uuid:"da0e30fb-b351-419f-b208-17278a3a9366",title:["Binomischer Lehrsatz"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:1,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`


\\aufgabe{} 


\\begin{taggedblock}{GermanExercise}
Für natürliche Zahlen $n\\in\\N$ definiert man 
$$n!:=n\\cdot(n-1)\\cdot\\dots\\cdot2\\cdot1$$ und setzt $0! :=1$. Für zwei
natürliche Zahlen $n, k\\in\\N$ mit $k\\leq n$ definiert man dann den Binomialkoeffizienten $\\binom{n}{k}$ als
$$\\binom{n}{k}=\\frac{n!}{k!\\cdot(n-k)!}.$$
Beweisen Sie, dass für reelle Zahlen $a, b\\in\\R$ und $n\\in\\N$ der binomische Lehrsatz gilt:
$$(a+b)^n=\\sum\\limits^n_{k=0}\\binom{n}{k}a^kb^{n-k}.$$

\\emph{Hinweis}: Beweisen Sie die Behauptung mittels Induktion nach $n$. Dabei können Sie die folgende Identität ohne Beweis verwenden:
$$\\binom{n}{k-1}+\\binom{n}{k}=\\binom{n+1}{k}$$

für alle $n\\in\\N$ und $k\\in\\left\\{1,\\dots, n\\right\\}$.
\\end{taggedblock}




\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Induktionsstart: Sei $n=1$
	\\begin{equation*}
		(a+b)^1=a+b=\\underbrace{\\binom{1}{0}}_{=1}a^1b^0+\\underbrace{\\binom{1}{1}}_{=1}a^0b^1=\\sum\\limits_{k=0}^1\\binom{1}{k}a^kb^{1-k}
	\\end{equation*}
	$\\Rightarrow$ Der Binomische Lehrsatz gilt für ein $n\\in\\N$ (Induktionsvoraussetzung)\\\\
	Induktionsschritt: Zeige dass der Binomische Lehrsatz auch für n+1 gilt.\\\\
	Nutze hierfür $\\sum\\limits_{k=0}^nf(k)=\\sum\\limits_{k=1}^{n+1}f(k-1)$
	\\begin{align*}
		\\left(a+b\\right)^{n+1}&=\\left(a+b\\right)\\left(a+b\\right)^n\\\\
		&\\stackrel{IV}{=}\\left(a+b\\right)\\sum\\limits_{k=0}^n\\binom{n}{k}a^kb^{n-k}\\\\
		&=\\sum\\limits_{k=0}^n\\binom{n}{k}a^{k+1}b^{n-k}+\\sum\\limits_{k=0}^n\\binom{n}{k}a^kb^{n+1-k}\\\\
		&=\\sum\\limits_{k=1}^{n+1}\\binom{n}{k-1}a^{k}b^{n+1-k}+\\sum\\limits_{k=0}^n\\binom{n}{k}a^kb^{n+1-k}\\\\
		&=\\sum\\limits_{k=1}^{n}\\binom{n}{k-1}a^{k}b^{n+1-k}+\\sum\\limits_{k=1}^n\\binom{n}{k}a^kb^{n+1-k}+\\binom{n}{n}a^{n+1}+\\binom{n}{0}b^{n+1}\\\\
		&=\\sum\\limits_{k=1}^{n}\\left(\\binom{n}{k-1}+\\binom{n}{k}\\right)a^{k}b^{n+1-k}+\\binom{n}{n}a^{n+1}+\\binom{n}{0}b^{n+1}\\\\
		&=\\sum\\limits_{k=1}^{n}\\binom{n+1}{k}a^{k}b^{n+1-k}+\\binom{n+1}{n+1}a^{n+1}+\\binom{n+1}{0}b^{n+1}\\\\
		&=\\sum\\limits_{k=0}^{n+1}\\binom{n+1}{k}a^{k}b^{n+1-k}
	\\end{align*}
	Somit gilt auch der Induktionsschritt und der Binomische Lehrsatz für alle $n\\in\\N$\\\\
	$\\Rightarrow$ Behauptung.\\hfill$\\square$
\\end{taggedblock}
`,preview:"da0e30fb-b351-419f-b208-17278a3a9366.png"},{uuid:"3a03a033-c7f5-4323-a0e7-42bd818eb4a4",title:["Mengen"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:1,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`


\\aufgabe{} 


\\begin{taggedblock}{GermanExercise}
Wieviele Elemente hat die Potenzmenge der Menge $A:=\\left\\{a,x,2\\right\\}$?
\\end{taggedblock}




\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Für die Menge $A:=\\left\\{a,x,2\\right\\}$ gilt $\\abs{A}=3$. Daraus folgt für die Potenzmenge:
$$\\abs{\\mathcal{P}(A)}=2^{\\abs{A}}=2^3=8.$$
\\end{taggedblock}
`,preview:"3a03a033-c7f5-4323-a0e7-42bd818eb4a4.png"},{uuid:"ad5bf1a9-85b4-4279-95ee-4850c0206fd4",title:["Mengen","Mengenoperationen"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:1,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`


\\aufgabe{} 


\\begin{taggedblock}{GermanExercise}
Sei $X$ eine Menge. Zeigen Sie, dass für Teilmengen~$A,B$ und~$C$ von~$X$ die folgenden Aussage gelten:
\\begin{enumerate}
    \\item $A\\cup(B\\cap C)=(A\\cup B)\\cap (A\\cup C)$
    \\item $A\\cap(B\\cup C)=(A\\cap B)\\cup (A\\cap C)$
\\end{enumerate}
\\end{taggedblock}




\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item \\begin{align*}
		x\\in A\\cup\\left(B\\cap C\\right) &\\Leftrightarrow x\\in A\\lor x\\in B\\cap C
		\\Leftrightarrow x\\in A\\lor\\left(x\\in B\\land x\\in C\\right)\\\\
		&\\Leftrightarrow \\left(x\\in A\\lor x\\in B\\right)\\land\\left(x\\in A\\lor x\\in C\\right)\\\\
		&\\Leftrightarrow \\left(x\\in A\\cup B\\right)\\land\\left(x\\in A\\cup C\\right)\\\\
		&\\Leftrightarrow x\\in\\left(A\\cup B\\right)\\cap\\left(A\\cup C\\right)
	\\end{align*}
	Da x beliebig und jede der Umformungen äquivalent ist, folgt somit:
	$$A\\cup\\left(B\\cap C\\right)=\\left(A\\cup B\\right)\\cap\\left(A\\cup C\\right)$$
	$\\Rightarrow$ Behauptung i).
	\\item \\begin{align*}
		x\\in A\\cap\\left(B\\cup C\\right) &\\Leftrightarrow x\\in A\\land x\\in B\\cup C
		\\Leftrightarrow x\\in A\\land\\left(x\\in B\\lor x\\in C\\right)\\\\
		&\\Leftrightarrow \\left(x\\in A\\land x\\in B\\right)\\lor\\left(x\\in A\\land x\\in C\\right)\\\\
		&\\Leftrightarrow \\left(x\\in A\\cap B\\right)\\lor\\left(x\\in A\\cap C\\right)\\\\
		&\\Leftrightarrow x\\in\\left(A\\cap B\\right)\\cup\\left(A\\cap C\\right)
	\\end{align*}
	Da x beliebig und jede der Umformungen äquivalent ist, folgt somit:
	$$A\\cap\\left(B\\cup C\\right)=\\left(A\\cap B\\right)\\cup\\left(A\\cap C\\right)$$
    $\\Rightarrow$ Behauptung ii).\\hfill $\\square$
 \\end{enumerate}
\\end{taggedblock}
`,preview:"ad5bf1a9-85b4-4279-95ee-4850c0206fd4.png"},{uuid:"b56a6768-7523-4922-87a9-09b0da71a631",title:["Differenzierbarkeit"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:9,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Seien $a, b\\in\\R$ mit $a < b$. Sei $f : (a, b)\\rightarrow\\R$ im Punkt $x_0\\in(a, b)$ differenzierbar.
\\begin{enumerate}
    \\item Zeigen Sie, dass der Limes $$\\lim\\limits_{h\\rightarrow0}\\frac{f (x_0 + h) -f (x_0 - h)}{2h}$$ existiert und gleich  $f'(x_0)$ ist.
    \\item Zeigen Sie, dass umgekehrt aus der Existenz des obigen Limes nicht folgt, dass $f$ in $x_0$ differenzierbar ist.
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Nutze, dass $\\lim\\limits_{h\\rightarrow0}x_0\\pm h=x_0=\\lim\\limits_{x\\rightarrow x_0}x$:
    \\begin{align*}
		\\lim\\limits_{h\\rightarrow0}\\frac{f(x_0+h)-f(x_0-h)}{2h}&=\\lim\\limits_{h\\rightarrow0}\\frac{f(x_0+h)-f(x_0)+f(x_0)-f(x_0-h)}{2h}\\\\
		&=\\frac{1}{2}\\lim\\limits_{h\\rightarrow0}\\left(\\frac{f(x_0+h)-f(x_0)}{h}+\\frac{f(x_0)-f(x_0-h)}{h}\\right)\\\\
		&=\\frac{1}{2}\\left(\\lim\\limits_{h\\rightarrow0}\\frac{f(x_0+h)-f(x_0)}{(h+x_0)-x_0}+\\lim\\limits_{h\\rightarrow0}\\frac{f(x_0-h)-f(x_0)}{(x_0-h)-x_0}\\right)\\\\
		&=\\frac{1}{2}\\left(\\lim\\limits_{x\\rightarrow x_0}\\frac{f(x)-f(x_0)}{x-x_0}+\\lim\\limits_{x\\rightarrow x_0}\\frac{f(x)-f(x_0)}{x-x_0}\\right)\\\\
		&=\\frac{1}{2}\\left(f'(x_0)+f'(x_0)\\right)\\\\
		&=f'(x_0)
	\\end{align*}
	\\item Sei $f:\\R\\rightarrow\\R,\\ x\\mapsto\\abs{x}$. Es lässt sich leicht überprüfen, dass $f$ in $x=0$ nicht differenzierbar ist. Betrachte den obigen Limes für $x_0=0$
	\\begin{align*}
		\\lim\\limits_{h\\rightarrow0}\\frac{f(x_0+h)-f(x_0-h)}{2h}&=\\lim\\limits_{h\\rightarrow0}\\frac{\\abs{x_0+h}-\\abs{x_0-h}}{2h}\\\\
		&=\\lim\\limits_{h\\rightarrow0}\\frac{\\abs{h}-\\abs{-h}}{2h}=\\lim\\limits_{h\\rightarrow0}\\frac{\\abs{h}-\\abs{h}}{2h}\\\\
		&=\\lim\\limits_{h\\rightarrow0}\\frac{0}{2h}=0
	\\end{align*}
Somit existiert der obige Limes, während $f$ jedoch nicht in $x_0=0$ differenzierbar ist.
\\end{enumerate}
\\end{taggedblock}
`,preview:"b56a6768-7523-4922-87a9-09b0da71a631.png"},{uuid:"2ecf0b3d-a50d-4c3e-bbab-240374a99769",title:["Dreiecksungleichung für Beträge"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:3,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Zeigen Sie, dass für n beliebige Zahlen $z_1,\\dots, z_n\\in\\C$ gilt:
$$\\abs{\\sum\\limits_{i=1}^n z_i}  \\leq \\sum\\limits^n_{i=1}\\abs{z_i} .$$
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
	Es gilt die Dreiecksungleichung für zwei komplexe Zahlen~$z,w\\in\\mathbb{C}$: $\\abs{z+w}\\leq\\abs{z}+\\abs{w}$.\\\\\\\\
	Induktionsanfang: $n=1$
	$$\\abs{z_1}\\leq\\abs{z_1}.$$
	Somit gilt die Aussage für ein $n\\in\\mathbb{N}$.\\\\\\\\
	Induktionsschritt $n\\rightarrow n+1:$
	\\begin{align*}
		\\abs{\\sum\\limits_{k=1}^{n+1}z_k}&=\\abs{\\sum\\limits_{k=1}^{n}z_k+z_{n+1}}
		\\stackrel{\\Delta-Ungl.}{\\leq}\\abs{\\sum\\limits_{k=1}^{n}z_k}+\\abs{z_{n+1}}\\\\
		&\\stackrel{I.V.}{\\leq}\\sum\\limits_{k=1}^{n}\\abs{z_k}+\\abs{z_{n+1}}
		=\\sum\\limits_{k=1}^{n+1}\\abs{z_k}
	\\end{align*}
$\\Rightarrow$Beh.\\hfill$\\square$
\\end{taggedblock}
`,preview:"2ecf0b3d-a50d-4c3e-bbab-240374a99769.png"},{uuid:"67ad2b62-3ed9-4b63-aaf6-f61497957464",title:["Fehler","Zwischenwertsatz"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:10,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Das folgende Theorem ist falsch. Finden sie den Fehler und begründen Sie weshalb der Beweis
nicht funktioniert.\\\\
Theorem 0.1 (Zwischenwertsatz). Sei f eine stetige Funktion $\\Q \\rightarrow \\R$ auf dem beschränkten Interval $[a, b] \\customsubset Q$. Wir nehmen an, dass $f (a) < f (b)$. Dann gilt
$$(\\forall \\eta \\in [f (a), f (b)])(\\exists x \\in [a, b])$$
so dass
$$f (x) = \\eta.$$
Beweis:\\\\
Falls $\\eta = f (a)$ oder $\\eta = f (b)$ gibt es nichts zu beweisen.\\\\
Wir wählen also ein $\\eta \\in (f (a), f (b))$. Wir betrachten die folgende Menge
$$A := \\{x \\in [a, b] \\customsubset Q\\mid\\ f (x) < \\eta\\}.$$
Die Menge $A$ ist nicht leer, da $a \\in A$. Im weitern ist die Menge $A$ von oben beschränkt durch $b$.
Daraus folgt, dass das Supremum $\\xi := sup A$ existiert und dass $\\xi \\in [a, b]$. Wir wollen nun zeigen,
dass $f (\\xi) = \\eta$.\\\\
Wir beweisen einen Widerspruch in zwei Schritten.\\\\
\\textbf{Schritt 1:} Wir nehmen an, dass $f (\\xi) > \\eta$. Wir betrachten $\\eps = f (\\xi) - \\eta$ dann existiert nach Definition der Stetigkeit ein $\\delta > 0$, so dass
$$\\forall x \\in (\\xi - \\delta, \\xi + \\delta),\\  \\abs{f (x) - f (\\xi)} < \\eps\\ \\Rightarrow f (x) > \\eta.$$
und folglich $(\\xi - \\delta, \\xi + \\delta) \\customsubset A_c = [a, b]\\setminus A$.
Dies ist ein Widerspruch zur Annahme, dass $\\xi$ das Supremum von $A$ ist.\\\\
\\textbf{Schritt 2:} Wir nehmen an, dass $f (\\xi) < \\eta$. Wir betrachten $\\overline{\\eps} = \\eta - f (\\xi)$ dann existiert nach
Definition der Stetigkeit ein $\\overline{\\delta} > 0$, so dass
$$\\forall x \\in (\\xi - \\overline{\\delta}, \\xi + \\overline{\\delta}),\\ \\abs{f (x) - f (\\xi)} < \\overline{\\eps},\\ \\Rightarrow f (x) < \\eta.$$
Folglich gilt $\\exists x_1 \\in (\\xi, \\xi + \\overline{\\delta})$ mit $f (x_1) < \\eta$, i.e. $x_1 > \\xi$ und $x_1 \\in A$.
Dies ist ein Widerspruch zur Annahme, dass $\\xi$ das Supremum von $A$ ist.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Der Fehler befindet sich kurz nach der Definition der Menge $A$. Es wird gefolgert, da $A$ nicht leer und nach oben beschränkt ist, dass ein Supremum existiert. Diese Supremum muss aber, da $\\Q$ nicht vollständig ist, nicht in der Menge $A$ enthalten sein.\\\\
(Außerdem werden gegen Ende des Beweises Logikoperatoren wie Wörter benutzt.)
\\end{taggedblock}`,preview:"67ad2b62-3ed9-4b63-aaf6-f61497957464.png"},{uuid:"11d12876-19fd-4505-89c9-ee09fa8a0cc0",title:["Stetigkeit","stetige Funktion","Umkehrabbildung"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:10,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 

\\begin{taggedblock}{GermanExercise}
Sei $f : [0, 1]\\cup(2, 4] \\rightarrow [0, 3]$ die Funktion
$$f (x) =\\left\\{\\begin{tabular}{l l}
  $x$    & falls $x \\in [0, 1]$ \\\\
  $x - 1$ & falls $x \\in (2, 4]$
\\end{tabular}\\right.
$$
\\begin{enumerate}
    \\item Zeigen Sie, dass f bijektiv und stetig ist.
    \\item Ist die Umkehrfunktion auch stetig?
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
\\item Um die Bijektivität zu betrachten, zeigen wir, dass \\begin{equation*}
	f^{-1}:\\left[0,3\\right]\\rightarrow\\left[0,1\\right]\\cup\\left(2,4\\right],\\ x\\mapsto\\left\\{\\begin{tabular}{l l}
			$x$ &falls $x\\in\\left[0,1\\right]$\\\\
			$x+1$ &falls $x\\in\\left(1,3\\right]$
	\\end{tabular}\\right.
\\end{equation*} die Umkehrfunktion zu $f$ ist.\\\\
Zeige $f\\circ f^{-1}=id_{\\left[0,3\\right]}$:
\\begin{itemize}\\item Falls $y\\in\\left[0,1\\right]$ so ist $f(f^{-1}(y))=f(y)=y$
	\\item Falls $y\\in\\left(1,3\\right]$, so ist $y+1\\in\\left(2,4\\right]$ und $f(f^{-1}(y))=f(y+1)=y+1-1=y$
\\end{itemize}
Zeige au"serdem, dass $f^{-1}\\circ f=id_{\\left[0,1\\right]\\cup\\left(2,4\\right]}$
\\begin{itemize}
	\\item Falls $x\\in\\left[0,1\\right]$, so ist $f^{-1}(f(x))=f^{-1}(x)=x$
	\\item Falls $x\\in\\left(2,4\\right]$, so ist $x-1\\in\\left(1,3\\right]$ und $f^{-1}(f(x))=f^{-1}(x-1)=x-1+1=x$
\\end{itemize}
Somit ist $f^{-1}$ die Umkehrabbildung und $f$ ist bijektiv.
Um Stetigkeit zu zeigen sei $\\eps>0,\\ x_0\\in\\left[0,1\\right]\\cup\\left(2,4\\right]$ beliebig und setze $\\delta:=\\min\\left\\{\\eps,\\frac{1}{2}\\right\\}$.\\\\\\\\
Dann gilt für alle $x\\in\\left[0,1\\right]\\cup\\left(2,4\\right]$ mit $\\abs{x-x_0}<\\delta\\leq\\frac{1}{2}$:
\\begin{itemize}
	\\item Falls $x_0\\in\\left[0,1\\right]$ dann ist $x\\in\\left[0,1\\right]$ und \\begin{equation*}
		\\abs{f(x)-f(x_0)}=\\abs{x-x_0}<\\delta\\leq\\eps	\\end{equation*}
	\\item Falls $x_0\\in\\left(2,4\\right]$ dann ist $x\\in\\left(2,4\\right]$ und \\begin{equation*}
		\\abs{f(x)-f(x_0)}=\\abs{x-1-(x_0-1)}=\\abs{x-x_0}<\\delta\\leq\\eps
	\\end{equation*}
\\end{itemize}
Somit ist $f$ stetig.
\\item Betrachte nun die Stetigkeit der Umkehrfunktion $f^{-1}$ in $x_0=1$:\\\\
Sei \\Folge{x} eine Folge in $\\left[0,3\\right]$ und $x_n=x_0+\\frac{1}{n}>x_0=1$ für alle $n\\in\\N$. Dann ist
\\begin{equation*}
	f(x_0)=1\\neq2=\\lim\\limits_{n\\rightarrow\\infty}2+\\frac{1}{n}=\\lim\\limits_{n\\rightarrow\\infty}f(x_n).
\\end{equation*}
Somit ist $f^{-1}$ nicht stetig.
\\end{enumerate}
\\end{taggedblock}
`,preview:"11d12876-19fd-4505-89c9-ee09fa8a0cc0.png"},{uuid:"ff4ea4da-7e14-49b8-aa19-2ef2c62954e8",title:["Stetigkeit","stetig"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:10,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $f : \\R \\rightarrow R$ gegeben durch
$$f(x)=\\left\\{\\begin{tabular}{ll}
			1 &falls $x=0$\\\\
			$\\cos(\\frac{1}{x})$ &falls $x\\neq0$
		\\end{tabular}\\right.$$
i) Es sei \\Folge{x} die Folge $xn = \\frac{1}{2\\pi n}$. Zeigen Sie, dass $x_n$ eine Nullfolge ist und dass
$$\\lim\\limits_{n\\rightarrow\\infty} f (x_n) = f (0).$$
ii) Ist $f$ an der Stelle $x = 0$ stetig? Wie passt dies mit dem Ergebnis aus i) zusammen?
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Sei \\Folge{x} die Folge $x_n=\\frac{1}{2\\pi n}$. So gilt
	\\begin{equation*}
		\\lim\\limits_{n\\rightarrow\\infty}\\frac{1}{2\\pi n}=\\lim\\limits_{n\\rightarrow\\infty}\\frac{1}{2\\pi}\\underbrace{\\frac{1}{n}}_{\\rightarrow0}=0
	\\end{equation*}
	Au"serdem gilt 
	\\begin{equation*}
		\\lim\\limits_{n\\rightarrow\\infty}f(x_n)=\\lim\\limits_{n\\rightarrow\\infty}\\cos\\left(\\frac{1}{\\frac{1}{2\\pi n}}\\right)=
		\\lim\\limits_{n\\rightarrow\\infty}\\cos(2\\pi n)=\\lim\\limits_{n\\rightarrow\\infty}1=1=f(0)
	\\end{equation*}
	\\item Betrachte nun die Nullfolge \\Folge{y} mit $y_n:=\\frac{1}{2\\pi n+\\frac{\\pi}{2}}$.\\\\
	Mit $\\cos(\\frac{\\pi}{2})=0$ und der $2\\pi$-Periodizität folgt nun:
	\\begin{equation*}
		\\lim\\limits_{n\\rightarrow\\infty}f(y_n)=\\lim\\limits_{n\\rightarrow\\infty}\\cos\\left(\\frac{1}{\\frac{1}{2\\pi n+\\frac{\\pi}{2}}}\\right)
		=\\lim\\limits_{n\\rightarrow\\infty}\\cos\\left(2\\pi n+\\frac{\\pi}{2}\\right)
		=\\lim\\limits_{n\\rightarrow\\infty}\\cos\\left(\\frac{\\pi}{2}\\right)=0\\neq f(0).
	\\end{equation*}
	Somit ist $f$ nicht in $0$ stetig.\\\\
	Das passt mit Teilaufgabe $i)$ zusammen, da f nur dann in $x_0$ stetig ist, wenn für jede beliebige Folge die Bildfolge konvergiert.
\\end{enumerate}
\\end{taggedblock}`,preview:"ff4ea4da-7e14-49b8-aa19-2ef2c62954e8.png"},{uuid:"c3a80fee-a4a4-40ad-b495-de7b9b164de3",title:["Mittelwertsatz","Komplexwertige Funktion"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:10,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Zeigen Sie, dass der Mittelwertsatz nicht für differenzierbare Funktionen mit Werten in $\\C$ gilt.\\\\
Betrachten Sie dazu die Abbildung
$$f:\\R\\mapsto\\C ,\\ x\\mapsto x^2 + \\ii x^3 ,$$
und zeigen Sie, dass $a, b\\in\\R$ existieren, so dass für alle $\\xi\\in[a, b]$ gilt:
$$f(b)-f(a)\\neq f'(\\xi)(b-a)$$
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Zeige, dass $a,b\\in\\R$ existieren, sodass für alle $\\xi\\in\\left[a,b\\right]$ gilt:
	\\begin{equation*}
		f(b)-f(a)\\neq f'(\\xi)(b-a).
	\\end{equation*}
	Setze $a:=0,b:=1$ und nehme an, der Mittelwertsatz würde für ein $\\xi\\in\\left[0,1\\right]$ gelten, dann gilt 
	\\begin{equation*}
		f(b)-f(a)=1+\\ii=2\\xi+3\\xi\\ii^2=f'(\\xi)(1-0).
 	\\end{equation*}
	Vergleiche nun Real- und Imaginärteil:
	\\begin{align*}
		1&=2\\xi & 1&=3\\xi^2\\\\
		\\xi&=\\frac{1}{2} & \\xi&=\\pm\\sqrt{\\frac{1}{3}}
	\\end{align*}
	Dies ist ein Widerspruch, weshalb kein solches $\\xi\\in\\left[0,1\\right]$ existieren kann.
\\end{taggedblock}`,preview:"c3a80fee-a4a4-40ad-b495-de7b9b164de3.png"},{uuid:"a70e6705-2dfd-4ffc-8016-15b7ae632bf2",title:["Zinseszinsformel","Exponentialreihe","Abschätzung"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:3,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Zeigen Sie, dass für alle natürlichen Zahlen $n\\geq2$ gilt:
$$2<\\left(1 +\\frac{1}{n}\\right)^n<\\sum\\limits^n_{k=0}\\frac{1}{k!}.$$
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Sei $n\\in\\mathbb{N},n\\geq2$\\\\
	Betrachte zunächst die linke Ungleichung $2<\\left(1+\\frac{1}{n}\\right)^n$.
	\\begin{align*}
		\\left(1+\\frac{1}{n}\\right)^n&=\\left(1+\\frac{1}{n}\\right)^{n-1}\\cdot\\left(1+\\frac{1}{n}\\right)\\stackrel{Bernoulli-Ungl.}{\\geq}
		\\left(1+\\frac{n-1}{n}\\right)\\cdot\\left(1+\\frac{1}{n}\\right)\\\\
		&=\\left(1+1-\\frac{1}{n}\\right)\\cdot\\left(1+\\frac{1}{n}\\right)=\\left(2-\\frac{1}{n}\\right)\\cdot\\left(1+\\frac{1}{n}\\right)\\\\
		&=\\left(2-\\frac{1}{n}\\right)+\\left(\\frac{2}{n}-\\frac{1}{n^2}\\right)=2+\\frac{1}{n}-\\frac{1}{n^2}
		> 2&\\text{ da $\\frac{1}{n}>\\frac{1}{n^2}$ $\\forall n>1$}.
	\\end{align*}
	Somit gilt $2<\\left(1+\\frac{1}{n}\\right)^n$.\\\\
	Nun die rechte Ungleichung $\\left(1+\\frac{1}{n}\\right)^n<\\sum  _{k=0}^n\\frac{1}{k!}$:
	\\begin{align*}
		\\left(1+\\frac{1}{n}\\right)^n&\\stackrel{Binom}{=}\\sum\\limits_{k=0}^n\\binom{n}{k}1^{n-k}\\left(\\frac{1}{n}\\right)^{k}
		=\\sum\\limits_{k=0}^n\\frac{n!}{k!\\left(n-k\\right)!}\\frac{1}{n^k}\\\\
		&=\\sum\\limits_{k=0}^n\\frac{1}{k!}\\frac{n!}{\\left(n-k\\right)!\\cdot n^k}
	\\end{align*}
Betrachte nun für $k\\in\\left\\{0,1,...,n\\right\\}: \\frac{n!}{\\left(n-k\\right)!\\cdot n^k}$\\\\
Fall 1, $k=0$: $\\frac{n!}{\\left(n\\right)!\\cdot n^0}=1$\\\\
Fall 2, $0<k\\leq n$: 
\\begin{align*}
	\\frac{n!}{(n-k)!\\cdot n^k}&=\\frac{\\prod_{i=1}^ni}{\\left(\\prod_{i=1}^{n-k}i\\right)\\cdot n^k}=
	\\underbrace{\\frac{\\prod_{i=n-k+1}^ni}{n^k}}_{\\text{jeweils k Faktoren.}}=\\prod_{i=n-k+1}^n\\frac{i}{n}\\\\
	&=\\left(\\underbrace{\\prod_{i=n-k+1}^{n-1}\\frac{i}{n}}_{<1,\\text{ da }0<i<n}\\right)\\cdot\\frac{n}{n}<1.
\\end{align*}
Somit gilt für jeden der Summanden~$k>0$: $\\frac{1}{k!}\\frac{n!}{\\left(n-k\\right)!\\cdot n^k}<\\frac{1}{k!}$ bzw. für $k=0$: $\\frac{1}{0!}\\frac{n!}{\\left(n-0\\right)!\\cdot n^0}=1=\\frac{1}{0!}$, wodurch die Ungleichung~$\\left(1+\\frac{1}{n}\\right)^n=\\sum\\limits_{k=0}^n\\frac{1}{k!}\\frac{n!}{\\left(n-k\\right)!\\cdot n^k}<\\sum\\limits_{k=0}^n\\frac{1}{k!}$ bewiesen ist.\\\\
$\\Rightarrow$Beh.\\hfill$\\square$
\\end{taggedblock}
`,preview:"a70e6705-2dfd-4ffc-8016-15b7ae632bf2.png"},{uuid:"d41346a1-bd12-4206-ae86-dd2673656a28",title:["Konvergenz","L'Hospital"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:13,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Untersuchen Sie, ob die folgenden Grenzwerte existieren und berechnen Sie gegebenenfalls ihren Wert:
\\begin{enumerate}
    \\item $\\lim\\limits_{x\\rightarrow 0} \\frac{\\sin(x)-x}{x^2}$,
    \\item $\\lim\\limits_{x\\rightarrow 1} \\left(\\frac{x}{x-1} - \\frac{1}{\\ln(x)}\\right)$,
    \\item $\\lim\\limits_{x\\rightarrow \\frac{\\pi}{2}} \\frac{\\cos(x)}{\\left(x-\\frac{\\pi}{2}\\right)^2}$ ,
    \\item $\\lim\\limits_{x\\rightarrow 0} \\frac{\\sinh\\left(\\frac{1}{x}\\right)}{\\cosh\\left(\\frac{1}{x}\\right)}$.
\\end{enumerate}
Es gilt $\\sinh(x) =  \\frac{e^x-e^{-x}}{2}$ und $\\cosh(x) = \\frac{e^x+e^{-x}}{2}$ .
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Es gilt:
	\\begin{align*}
		\\lim\\limits_{x\\rightarrow0}\\sin(x)-x&=0&\\lim\\limits_{x\\rightarrow0}	x^2&=0\\\\
		\\lim\\limits_{x\\rightarrow0}\\frac{d}{dx}\\left(\\sin(x)-x\\right)&=\\lim\\limits_{x\\rightarrow0}\\cos(x)-1=0
		&\\lim\\limits_{x\\rightarrow0}\\frac{d}{dx}x^2&=\\lim\\limits_{x\\rightarrow0}2x=0\\\\
		\\lim\\limits_{x\\rightarrow0}\\frac{d^2}{dx^2}\\left(\\sin(x)-x\\right)&=\\lim\\limits_{x\\rightarrow0}-\\sin(x)=0&\\lim\\limits_{x\\rightarrow0}\\frac{d^2}{dx^2}x^2&=\\lim\\limits_{x\\rightarrow0}2=2
	\\end{align*}
	Mit L\\grq Hospital folgt somit
	\\begin{equation*}
		\\lim\\limits_{x\\rightarrow0}\\frac{\\sin(x)-x}{x^2}=\\lim\\limits_{x\\rightarrow0}\\frac{-\\sin(x)}{2}=\\frac{0}{2}=0
	\\end{equation*}
	\\item Zunächst: 
	\\begin{equation*}
		\\frac{x}{x-1}+\\frac{1}{\\ln(x)}=\\frac{x\\ln(x)-(x-1)}{x\\ln(x)-\\ln(x)}
	\\end{equation*}
	Es gilt
	\\begin{align*}
		\\lim\\limits_{x\\rightarrow1}x\\ln(x)-(x-1)&=0&\\lim\\limits_{x\\rightarrow1}x\\ln(x)-\\ln(x)&=0\\\\
		\\lim\\limits_{x\\rightarrow1}\\frac{d}{dx}\\left(x\\ln(x)-(x-1)\\right)&&
		\\lim\\limits_{x\\rightarrow1}\\frac{d}{dx}\\left(x\\ln(x)-\\ln(x)\\right)\\\\
		=\\lim\\limits_{x\\rightarrow1}\\ln(x)+1-1&=0&=\\lim\\limits_{x\\rightarrow1}\\ln(x)+1-\\frac{1}{x}&=0\\\\
		\\lim\\limits_{x\\rightarrow1}\\frac{d^2}{dx^2}\\left(x\\ln(x)-(x-1)\\right)&&
		\\lim\\limits_{x\\rightarrow1}\\frac{d^2}{dx^2}\\left(x\\ln(x)-\\ln(x)\\right)\\\\
		=\\lim\\limits_{x\\rightarrow1}\\frac{1}{x}&=1&=\\lim\\limits_{x\\rightarrow1}\\frac{1}{x}+\\frac{1}{x^2}&=2\\\\
	\\end{align*}
	Mit L\\grq Hospital folgt somit
	\\begin{equation*}
		\\lim\\limits_{x\\rightarrow1}\\frac{x\\ln(x)-(x-1)}{x\\ln(x)-\\ln(x)}=\\lim\\limits_{x\\rightarrow1}\\frac{\\frac{1}{x}}{\\frac{1}{x}+\\frac{1}{x^2}}=\\frac{1}{2}
	\\end{equation*}
	\\item Beginne zunächst mit $\\lim\\limits_{x\\rightarrow\\frac{\\pi}{2}}\\frac{\\cos(x)}{x-\\frac{\\pi}{2}}$.
	\\begin{align*}
		\\lim\\limits_{x\\rightarrow\\frac{\\pi}{2}}\\cos(x)&=0&\\lim\\limits_{x\\rightarrow\\frac{\\pi}{2}}x-\\frac{\\pi}{2}&=0\\\\
		\\lim\\limits_{x\\rightarrow\\frac{\\pi}{2}}\\frac{d}{dx}\\cos(x)&=\\lim\\limits_{x\\rightarrow\\frac{\\pi}{2}}-\\sin(x)=-1&
		\\lim\\limits_{x\\rightarrow\\frac{\\pi}{2}}\\frac{d}{dx}x-\\frac{\\pi}{2}&=1
	\\end{align*}
	Somit besitzt $\\frac{\\cos(x)}{x-\\frac{\\pi}{2}}$ für \\textbf{keine} Folge, die gegen $\\frac{\\pi}{2}$ konvergiert einen Häufungspunkt in 0.\\\\
	Des weiteren gilt, dass $\\lim\\limits_{x\\rightarrow\\frac{\\pi}{2}}\\abs{\\frac{1}{x-\\frac{\\pi}{2}}}=\\infty$.\\\\
	Mit den Konvergenzsätzen folgt, dass 
	\\begin{equation*}
		\\lim\\limits_{x\\rightarrow\\frac{\\pi}{2}}\\abs{\\frac{\\cos(x)}{\\left(x-\\frac{\\pi}{2}\\right)^2}}=\\lim\\limits_{x\\rightarrow\\frac{\\pi}{2}}\\underbrace{\\abs{\\frac{\\cos(x)}{x-\\frac{\\pi}{2}}}}_{\\rightarrow1}\\cdot\\underbrace{\\abs{\\frac{1}{x-\\frac{\\pi}{2}}}}_{\\rightarrow+\\infty}=+\\infty
	\\end{equation*}
	Somit divergiert $\\lim\\limits_{x\\rightarrow\\frac{\\pi}{2}}\\frac{\\cos(x)}{\\left(x-\\frac{\\pi}{2}\\right)^2}$.
	\\item Es gilt
	\\begin{equation*}
		\\frac{\\sinh(\\frac{1}{x})}{\\cosh(\\frac{1}{x})}=\\frac{e^{\\frac{1}{x}}-e^{-\\frac{1}{x}}}{e^{\\frac{1}{x}}+e^{-\\frac{1}{x}}}=
		\\frac{1-e^{-\\frac{2}{x}}}{1+e^{-\\frac{2}{x}}}=\\frac{e^{\\frac{2}{x}}-1}{e^{\\frac{2}{x}}+1}
	\\end{equation*}
	Damit folgt nun
	\\begin{align*}
		\\lim\\limits_{x\\searrow0}\\frac{\\sinh(\\frac{1}{x})}{\\cosh(\\frac{1}{x})}&=\\lim\\limits_{R\\rightarrow+\\infty}\\frac{1-e^{-\\frac{2}{x}}}{1+e^{-\\frac{2}{x}}}=1\\\\
		\\lim\\limits_{x\\nearrow0}\\frac{\\sinh(\\frac{1}{x})}{\\cosh(\\frac{1}{x})}&=\\lim\\limits_{R\\rightarrow-\\infty}\\frac{e^{\\frac{2}{x}}-1}{e^{\\frac{2}{x}}+1}=-1
	\\end{align*}
	Somit divergiert $\\lim\\limits_{x\\rightarrow0}\\frac{\\sinh(x)}{\\cosh(x)}$.
\\end{enumerate}
\\end{taggedblock}`,preview:"d41346a1-bd12-4206-ae86-dd2673656a28.png"},{uuid:"b379aa00-f18b-458c-bdbd-55cdb545ef3b",title:["Monotonie","Tangens","tan","Umkehrabbildung","Ableitung der Umkehrabbildung"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:10,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Der Tangens ist definiert durch
$$\\tan:(- \\frac{\\pi}{2} , \\frac{\\pi}{2})\\rightarrow \\R, x \\mapsto \\frac{\\sin(x)}{\\cos(x)}.$$
\\begin{enumerate}
    \\item Zeigen Sie, dass die Tangensfunktion streng monoton steigend ist.\\\\
    \\emph{Hinweis}: Ableitung.
    \\item Die Umkehrfunktion des Tangens ist der Arcustangens:
    $$\\arctan:\\R\\rightarrow(-\\frac{\\pi}{2},\\frac{\\pi}{2}).$$
    Berechnen Sie seine Ableitung.
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
\\item Zunächst: Da $\\cos(x)>0$ für alle $x\\in\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)$ ist, ist $\\tan$ wohldefiniert.\\\\
Nutze nun die Ableitung von $\\sin,\\cos$ sowie die Quotientenregel:
\\begin{align*}
	\\tan'(x)&=\\frac{\\sin'(x)\\cos(x)-\\sin(x)\\cos'(x)}{\\cos^2(x)}\\\\
	&=\\frac{\\cos(x)\\cos(x)-\\sin(x)\\left(-\\sin(x)\\right)}{\\cos^2(x)}\\\\
	&=\\frac{\\cos^2(x)+\\sin^2(x)}{\\cos^2(x)}\\\\
	&=1+\\frac{\\sin^2(x)}{\\cos^2(x)}=1+\\underbrace{\\tan^2(x)}_{>0}>0
\\end{align*}
Somit ist für alle $x\\in\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)\\ \\tan'(x)>0$ und die Tangensfunktion streng monoton steigend.
\\item Sei nun $\\arccos:\\R\\rightarrow\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)$ die Umkehrabbildung zum $tan$.\\\\
Da $tan(x)$ streng monoton steigend ist, ist dieser Injektiv und wir können die Ableitung der Umkehrfunktion nutzen.\\\\
Sei nun $y\\in\\R$ sowie $x\\in\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)$ so, dass $\\tan(x)=y$ (Bzw. $x=\\arctan(y)$) gilt.
\\begin{align*}
	\\arctan'(y)&=\\frac{1}{\\tan'(x)}=\\frac{1}{1+\\tan^2(x)}\\\\
	&=\\frac{1}{1+\\tan^2(\\arctan(y))}=\\frac{1}{1+y^2}
\\end{align*}
\\end{enumerate}
\\end{taggedblock}`,preview:"b379aa00-f18b-458c-bdbd-55cdb545ef3b.png"},{uuid:"7ffc2749-d884-4863-b269-9504c83ed6ec",title:["Vollständige Induktion","Kritisches Lesen"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:1,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`


\\aufgabe{} 


\\begin{taggedblock}{GermanExercise}
Wo steckt der Fehler in folgendem \`\`Beweis'' durch vollständige Induktion?\\\\
Für $n\\in\\N$ sei $a(n)$ die folgende Aussage: Ist~$M$ eine Menge von~$n$ Euro-Münzen, dann haben alle Münzen in~$M$ den gleichen Wert.\\\\
\\underline{Behauptung}: Für alle $n\\in\\N$ ist $a(n)$ wahr, d.h. alle Euro-Münzen haben den gleichen Wert.\\\\
\\underline{Beweis}: Offensichtlich ist $a(1)$ wahr. Es sei nun $a(n)$ wahr, und es sei $M=\\left\\{m1,\\dots,m_{n+1}\\right\\}$
eine Menge von $n$ + 1 Euro-Münzen. Nach $a(n)$ gilt: Alle Münzen in $\\left\\{m1, . . . ,m_n\\right\\}$ haben den
gleichen Wert und alle Münzen in $\\left\\{m2,\\dots,m_{n+1}\\right\\}$ haben den gleichen Wert. Also haben die Münzen $\\left\\{m1,\\dots,m_n\\right\\}$ den gleichen Wert wie $m_n$ und die Münzen $\\left\\{m2,\\dots,m{n+1}\\right\\}$ haben den gleichen Wert
wie $m_n$. Daher haben alle Münzen $\\left\\{m1, . . . ,m_{n+1}\\right\\}$ den gleichen Wert, d.h. es gilt $a(n + 1)$.
\\end{taggedblock}




\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Der Fehler im \`\`Beweis'' durch vollständige Induktion liegt darin, dass für 2 Münzen die Menge~$M=\\left\\{m_1,m_2\\right\\}$ in~$\\left\\{m_1\\right\\}$ und in $\\left\\{m_2\\right\\}$ aufgeteilt wird.\\\\
Diese haben jedoch keine Schnittmenge, weshalb zwar die Aussagen \`\`Alle Münzen in~$\\left\\{m_1\\right\\}$ haben den gleichen Wert'' und \`\`Alle Münzen in~$\\left\\{m_2\\right\\}$ haben den gleichen Wert'' stimmen, jedoch nicht unbedingt die Aussage \`\`Alle Münzen in~$\\left\\{m_1,m_2\\right\\}$ haben den gleichen Wert''.
\\end{taggedblock}
`,preview:"7ffc2749-d884-4863-b269-9504c83ed6ec.png"},{uuid:"e2e8f621-a350-4171-b377-64142182e33f",title:["Differenzierbarkeit","differenzierbar","wohldefiniertheit","injektiv"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:10,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $f : [0, 1] \\rightarrow \\R$ differenzierbar und $f (0) = 0$.
\\begin{enumerate}
    \\item Zeigen Sie, dass es zu jedem $x \\in (0, 1)$ ein $\\alpha \\in (0, 1)$ gibt mit 
    $$f'(\\alpha) = \\frac{f(x)}{x}.$$
    \\item Zeigen Sie durch ein Gegenbeispiel, dass die Abbildung $x \\mapsto \\alpha$ im Allgemeinen nicht wohldefiniert ist.
    \\item Zeigen Sie: Ist $f'$ injektiv, so ist die Abbildung $x \\mapsto \\alpha$ wohldefiniert.
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Sei $x\\in\\left(0,1\\right)$ beliebig. Wende nun den Mittelwertsatz auf die Einschränkung~$f_{\\mid\\left[0,x\\right]}:\\left[0,x\\right]\\rightarrow\\R$ an.\\\\
	Somit existiert ein $\\alpha\\in\\left(0,1\\right)$ mit 
	\\begin{equation*}
		f'(\\alpha)=\\frac{f(x)-f(0)}{x-0}=\\frac{f(x)}{x}
	\\end{equation*}
	\\item Betrachte hierfür die Abbildung $f:[0,1]\\rightarrow\\R,\\ x\\mapsto x$ mit $f'(x)=1$ für alle~$x\\in\\left(0,1\\right)$.\\\\
	Dann gilt aber
	\\begin{equation*}
		f'\\left(\\frac{1}{4}\\right)=f'\\left(\\frac{1}{2}\\right)=1=\\frac{f\\left(\\frac{1}{2}\\right)}{\\frac{1}{2}}=\\frac{\\frac{1}{2}}{\\frac{1}{2}}\\\\
	\\end{equation*}
	Somit ist $\\alpha$ nicht eindeutig.
	\\item Sei nun $f'$ injektiv auf $\\left(0,1\\right)$.
	Aus $i)$ gilt, dass für alle $x\\in\\left(0,1\\right)$ ein $\\alpha\\in(0,1)$ mit $f'(\\alpha)=\\frac{f(x)}{x}$ existiert.
	Aus der Injektivität von $f'$ folgt nun, dass für alle $\\alpha'\\in\\left(0,1\\right)$ mit $f'(\\alpha')=\\frac{f(x)}{x}$ bereits folgt, dass~$\\alpha'=\\alpha$.\\\\
	Somit wird jedem $x\\in\\left(0,1\\right)$ genau ein $\\alpha\\in\\left(0,1\\right)$ mit der geforderten Eigenschaft zugeordnet und die Funktion $x\\mapsto\\alpha$ ist wohldefiniert.\\\\
\\end{enumerate}
\\end{taggedblock}`,preview:"e2e8f621-a350-4171-b377-64142182e33f.png"},{uuid:"5fa1e484-ed84-402c-b2b6-861e9b8bb434",title:["Gamma Funktion","Fakultät","L'Hospital"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:13,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Die Gamma-Funktion $\\Gamma : (0, \\infty) \\rightarrow (0, \\infty )$ ist definiert durch
$$\\Gamma(x) :=\\int\\limits_0^\\infty e^{-t}t^{x-1} \\diff t.$$
Zeigen Sie: Das obige Integral konvergiert für alle $x \\in (0, \\infty )$ und es gilt: $\\Gamma(x + 1) = x\\Gamma(x)$ für
alle~\${x \\in (0, \\infty )}$, sowie $\\Gamma(n) = (n - 1)!$ für alle $n \\in \\N$.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
\\item Betrachte zwei Fälle:
	\\begin{itemize}
		\\item \\textbf{1.Fall} Sei $x\\in(0,1]$ beliebig.\\\\
		Für $t\\in\\left[0,1\\right]$ gilt 
		\\begin{equation*}
			0\\leq t\\Leftrightarrow-t\\leq0\\Leftrightarrow e^{-t}\\leq1.
		\\end{equation*}
		Für $t\\in\\left(1,\\infty\\right)$ gilt
		\\begin{equation*}
			t\\geq1\\Leftrightarrow\\ln(t)\\geq0\\stackrel{x-1\\leq0}{\\Leftrightarrow}(x-1)\\ln(t)\\leq0\\stackrel{e^\\square}{\\Leftrightarrow} t^{x-1}\\leq1.
		\\end{equation*}
	Somit lässt sich $\\Gamma$ wie folgt abschätzen:
	\\begin{align*}
		\\Gamma(x)&=\\int\\limits_0^\\infty t^{x-1}e^{-t}\\diff t=\\int\\limits_0^1 t^{x-1}\\underbrace{e^{-t}}_{\\leq1}\\diff t+\\int\\limits_1^\\infty \\underbrace{t^{x-1}}_{\\leq1}e^{-t}\\diff t\\\\
		&\\leq\\int\\limits_0^1 t^{x-1}\\diff t+\\int\\limits_1^\\infty e^{-t}\\diff t
	\\end{align*}
	und $\\Gamma$ ist nach Majorantenkriterium konvergent.
	\\item \\textbf{2.Fall} Sei $x\\in\\left(1,\\infty\\right)$ beliebig.\\\\
	Zeige nun zunächst, dass $N\\in\\N$ existiert, sodass für alle $t>n$ gilt: $t^{x-1}e^{-t}\\leq e^{-\\frac{t}{2}}$.\\\\
	Sei $f(t):=t^{x-1}$ und $g(t):=e^{\\frac{t}{2}}$. Für ein $k\\in\\N$ gilt
	\\begin{align*}
		\\lim\\limits_{t\\rightarrow\\infty}t^{x-1}&=\\infty\\\\
		\\lim\\limits_{t\\rightarrow\\infty}\\frac{\\diff ^k}{\\diff t^k}t^{x-1}&=\\lim\\limits_{t\\rightarrow\\infty}\\left(\\prod\\limits_{i=0}^{k-1}(x-1-i)\\right)t^{x-1-k}\\stackrel{x-k-1<0}{=}0\\\\
		\\lim\\limits_{t\\rightarrow\\infty}e^\\frac{t}{2}&=\\infty\\\\
		\\lim\\limits_{t\\rightarrow\\infty}\\frac{\\diff ^k}{\\diff t^k}e^\\frac{t}{2}&=\\lim\\limits_{t\\rightarrow\\infty}\\left(\\frac{1}{2}\\right)^ke^\\frac{t}{2}=\\infty
		\\intertext{Somit gilt für $k:=[x]$ mit L\\grq Hospital}
		\\lim\\limits_{t\\rightarrow\\infty}\\frac{f(t)}{g(t)}&=\\lim\\limits_{t\\rightarrow\\infty}\\frac{\\frac{\\diff ^k}{\\diff t^k}f(t)}{\\frac{\\diff ^k}{\\diff t^k}g(t)}=0\\\\
		\\Rightarrow\\exists N\\in\\N\\forall t>N:\\ \\frac{t^{x-1}}{^{\\frac{t}{2}}}\\leq1&\\Leftrightarrow t^{x-1}\\leq e^{\\frac{t}{2}}\\Leftrightarrow t^{x-1}e^{-t}\\leq e^{-\\frac{t}{2}}
	\\end{align*}
	Damit folgt für $N\\in\\N$ wie gerade gezeigt:
	\\begin{equation*}
		\\int\\limits_N^\\infty t^{x-1}e^{-t}\\diff t\\leq\\int\\limits_N^\\infty e^{-\\frac{t}{2}}\\diff t=2e^{-\\frac{N}{2}}<\\infty
	\\end{equation*}
	und 
	\\begin{equation*}
		\\int\\limits_0^\\infty t^{x-1}e^{-t}\\diff t=\\underbrace{\\int\\limits_0^N t^{x-1}e^{-t}\\diff t}_{<\\infty}+\\int\\limits_N^\\infty t^{x-1}e^{-t}\\diff t\\leq\\infty
	\\end{equation*}
	ist nach Majorantenkriterium integrierbar.
	\\end{itemize}
\\item Seien nun $x\\in(0,\\infty)$ und $R>0$ beliebig.
Mithilfe von 
\\begin{align*}
	\\int\\limits_0^Rt^{x-1}e^{-t}\\diff t&=\\left[-e^{-t}t^x\\right]_0^R+x\\int\\limits_0^R t^{x-1}e^{-t}\\diff t\\\\
	&=\\underbrace{-R^xe^{-R}}_{\\stackrel{R\\rightarrow\\infty}{\\rightarrow}0}+x\\int\\limits_0^R t^{x-1}e^{-t}\\diff t
\\end{align*}
folgt nun die zu zeigende Behauptung
\\begin{align*}
	\\Gamma(x+1)&=\\lim\\limits_{R\\rightarrow\\infty}-R^xe^{-R}+x\\int\\limits_0^R t^{x-1}e^{-t}\\diff t=x\\lim\\limits_{R\\rightarrow\\infty}\\int\\limits_0^R t^{x-1}e^{-t}\\diff t\\\\
	&=x\\Gamma(x)
\\end{align*}
\\item Sei nun $n\\in\\N$ beliebig, dann gilt:
	\\begin{align*}
		\\Gamma(n)&=(n-1)\\Gamma(n-1)=\\left(\\prod\\limits_{i=1}^{n-1}i\\right)\\Gamma(1)\\\\
		&=(n-1)!\\int\\limits_0^\\infty e^{-t}\\diff t=(n-1)!\\lim\\limits_{R\\rightarrow\\infty}\\left[e^{-t}\\right]_0^R\\\\
		&=(n-1)!
	\\end{align*}
	\\end{enumerate}
\\end{taggedblock}`,preview:"5fa1e484-ed84-402c-b2b6-861e9b8bb434.png"},{uuid:"21ea21ec-a928-4258-9b66-db36964d57f1",title:["Stetigkeit","Lineare Algebra","Menge der stetigen Abbildungen"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:10,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Zeigen Sie, dass die Menge 
$$\\left\\{f : [a, b]\\rightarrow\\R\\mid f\\text{ ist stetig}\\right\\}$$
einen unendlich-dimensionalen (d.h. nicht endlich erzeugbaren) Vektorraum bildet.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Sei $k\\in\\N_0$ und definiere die Funktion $X^k:[a,b]\\rightarrow\\R,\\ x\\mapsto x^k$.\\\\
	Dabei ist $X^k$ stetig und somit in $C^0$ enthalten.\\\\
	Betrachte nun für $m\\in\\N$ den Untervektorraum $U_m$ der Polynome mit Grad kleiner gleich $m$ mit
	\\begin{equation*}
		U_m:=span\\left\\{1,...,X^m\\right\\}.
	\\end{equation*}\\\\
	Zeige per Induktion: $\\dim U_m=m+1$
	\\begin{itemize}
		\\item Induktionsstart: $m=0$:
		Dann ist $\\dim U_m=1$, da $1\\neq0$
		\\item Induktionsschritt: $m\\mapsto m+1$:\\\\
		Es gilt, dass $X^{m+1}$ linear unabhängig zu $\\left\\{1,...,X^m\\right\\}$ ist. Somit ist~$X^{m+1}\\notin span\\left\\{1,...,X^m\\right\\}$
		Somit gilt:
		\\begin{equation*}
			\\dim\\left(span\\left\\{1,...,X^{m+1}\\right\\}\\right)=\\dim\\left(span\\left\\{1,...,X^m\\right\\}\\right)+1\\stackrel{IV}{=}m+2
		\\end{equation*}
	\\end{itemize}
	Da $U_m\\customsubset C^0$ gilt somit auch $\\dim U_m=m+1\\leq\\dim C^0$.\\\\
	Falls $\\dim C^0=m<+\\infty$ ist gilt aber auch $\\dim U_m=m+1\\leq C^0=0$ was ein Widerspruch ist.\\\\
	Daraus folgt, dass $C^0$ unendlich-dimensional ist.
\\end{taggedblock}`,preview:"21ea21ec-a928-4258-9b66-db36964d57f1.png"},{uuid:"535ab345-3728-4245-a4d1-7fe3ae0f9ba3",title:["Komplexe Zahlen"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:2,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
\\begin{enumerate}
\\item Bestimmen sie Realteil Re$(z)$ und Imaginärteil Im$(z)$ zu der gegebenen komplexen Zahl
\\begin{enumerate}
    \\item $z = \\frac{2+3\\ii}{3-4\\ii}$
    \\item $z = \\left(1-\\frac{1}{2}\\ii\\right)\\left(2+3\\ii\\right)$
\\end{enumerate}
\\item Bestimmen sie die angegebenen Teilmengen der komplexen Zahlen und skizzieren sie diese.
\\begin{enumerate}
    \\item $M_1 =\\left\\{z\\in\\C\\mid Re(z) < \\abs{z}^2\\right\\}$
    \\item $M_2 =\\left\\{z\\in\\C\\mid \\abs{z} = \\frac{z+\\overline{z}}{2}+1\\right\\}$
\\end{enumerate}
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item \\begin{enumerate}
		\\item 
		\\begin{equation*}
			z=\\frac{2+3i}{3-4i}=\\frac{\\left(2+3i\\right)\\left(3+4i\\right)}{\\left(3-4i\\right)\\left(3+4i\\right)}=
			\\frac{6-12+8i+9i}{9+16}=\\frac{-6+17i}{25}=-\\frac{6}{25}+i\\frac{17}{25}
		\\end{equation*}
	Somit gilt $Re\\left(z\\right)=-\\frac{6}{25}$ sowie $Im\\left(z\\right)=\\frac{17}{25}$
	\\item 
	\\begin{equation*}
		z=\\left(1-\\frac{1}{2}i\\right)\\left(2+3i\\right)=2-i+3i+\\frac{3}{2}=\\frac{7}{2}+2i
	\\end{equation*}
	Somit gilt $Re\\left(z\\right)=\\frac{7}{2}$ sowie $Im\\left(z\\right)=2$
	\\end{enumerate}
	\\item \\begin{enumerate}
		\\item $M_1:=\\left\\{z\\in\\mathbb{C}\\mid Re\\left(z\\right)<\\abs{z}^2\\right\\}$\\\\
		Sei $z:=a+\\ii b\\in M_1$ beliebig mit $a,b\\in\\mathbb{R}$.\\\\
		Betrachte $Re\\left(z\\right)=a<\\abs{z}^2=a^2+b^2$.\\\\
		Falls $a<0$, dann gilt für alle $b\\in\\mathbb{R}$: $a<0\\leq a^2+b^2$.\\\\
		Falls $a>1$, dann gilt für alle $b\\in\\mathbb{R}$: $a<a^2\\leq a^2+b^2$\\\\
		Falls $0\\leq a\\leq 1$, dann gilt mit $0\\leq a-a^2$:
		\\begin{align*}
			&&Re(z)=a&<a^2+b^2 &\\mid-a^2\\\\
			\\Leftrightarrow&& 0 &\\leq a-a^2<b^2 &\\mid \\sqrt{\\ }\\\\
			\\Leftrightarrow&&\\abs{b}&>\\sqrt{a-a^2}
		\\end{align*}
\\begin{center}
		\\begin{tikzpicture}[xscale=2,yscale=2,domain=0:1,samples=400][!h]
		\\path[fill=blue,draw=black, opacity=0.3]
		(-1,-1)
		-- (-1,1)
		-- (2,1)
		-- (2,-1)
		;
		\\path[fill=white,draw=black]
		(0,0)
		arc (180:-180:0.5)
		-- (1,0)
		;
		\\draw[->] (-1,0) -- (2,0) node[below] {$2$};
		\\draw[->] (0,-1) -- (0,1) node[left] {$\\ii$};
		\\foreach \\i in {0,1} {
			\\draw (\\i,0.05) -- (\\i,-0.05) node[below] {$\\i$};
		}
		\\node[circle] () at (1.5,0.5) {$M_1$};
	\\end{tikzpicture}
\\end{center}
		\\item $M_2:=\\left\\{z\\in\\mathbb{C}\\mid \\abs{z}=\\frac{z+\\bar{z}}{2}+1\\right\\}$\\\\
		Sei $z:=a+\\ii b\\in M_2$ beliebig mit $a,b\\in\\mathbb{R}$.
		\\begin{align*}
			&&\\abs{z}=\\sqrt{a^2+b^2}&=\\frac{z+\\bar{z}}{2}+1=a+1 &\\mid\\square^2\\\\
			\\Leftrightarrow &&a^2+b^2&=a^2+2a+1&\\mid-a^2\\\\
			\\Leftrightarrow &&b^2&=2a+1&\\mid\\sqrt{\\ }	\\\\
			\\Leftrightarrow&&\\abs{b}&=\\sqrt{2a+1}
		\\end{align*}
  
		\\begin{center}
			\\begin{tikzpicture}[xscale=2,yscale=1,domain=-0.5:3,samples=400]
		\\draw[->] (-1,0) -- (3,0) node[below] {$1$};
		\\draw[->] (0,-3) -- (0,3) node[left] {$i$};
		\\foreach \\i in {1} {
			\\draw (0.05,\\i) -- (-0.05,\\i) node[below] {$\\i$};
		}
		\\foreach \\i in {-0.5} {
			\\draw (\\i,0.05) -- (\\i,-0.05) node[below] {$\\i$};
		}
				\\draw[blue] plot (\\x,{sqrt(2*\\x+1});
				\\draw[blue] plot (\\x,-{sqrt(2*\\x+1});
				\\node[circle] () at (1.35,2.2) {$M_2$};
	\\end{tikzpicture}
		\\end{center}
	\\end{enumerate}
\\end{enumerate}
\\end{taggedblock}
`,preview:"535ab345-3728-4245-a4d1-7fe3ae0f9ba3.png"},{uuid:"2a8859fe-dacb-408b-a80a-3ceaa12c2016",title:["Symmetrische Differenz","Mengenoperationen"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:1,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`


\\aufgabe{} 


\\begin{taggedblock}{GermanExercise}
Sei $X$ eine Menge. Dann definiert man für Teilmengen~$A$ und~$B$ von~$X$ die symmetrische Differenz
als
$$A\\Delta B := (A \\cup B)\\setminus(A \\cap B).$$
Zeigen Sie, dass dann folgende Aussagen gelten:
\\begin{enumerate}
    \\item$A\\Delta B = (A\\setminus B) \\cup (B\\setminus A)$.
    \\item$(A \\cup B)\\Delta(C \\cup D) \\customsubset(A\\Delta C) \\cup (B\\Delta D)$, wobei $C$ und $D$ Teilmengen von $X$ sind.\\\\
\\emph{Hinweis}: Verwenden Sie Aufgabenteil i).
\\end{enumerate}


\\end{taggedblock}




\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
		\\item 
		\\begin{align*}
			x\\in A\\Delta B &\\Leftrightarrow x\\in(A\\cup B)\\setminus(A\\cap B)
			\\Leftrightarrow x\\in(A\\cup B)\\land x\\notin (A\\cap B)\\\\
			&\\Leftrightarrow (x\\in A\\lor x\\in B)\\land x\\notin (A\\cap B)
			\\intertext{Nutze Distributivgesetz für Junktoren}
			&\\Leftrightarrow (x\\in A\\land x\\notin (A\\cap B))\\lor (x\\in B\\land x\\notin (A\\cap B))\\\\
			&\\Leftrightarrow x\\in (A\\setminus(A\\cap B))\\lor x\\in(B\\setminus(A\\cap B))\\\\
			&\\Leftrightarrow x\\in (A\\setminus B)\\lor x\\in(B\\setminus A)\\\\
			&\\Leftrightarrow x\\in (A\\setminus B)\\cup(B\\setminus A)
		\\end{align*}
		Da x beliebig gewählt werden kann und jede Umformung äquivalent ist, folgt die Gleichheit
		\\begin{equation*}
			A\\Delta B=(A\\setminus B)\\cup(B\\setminus A)
		\\end{equation*}
		\\item Bringe um diese Aussage zu beweisen beide Seiten auf eine ähnliche Form und vergleiche die einzelnen Teilmengen miteinander. Nutze hierfür Teilaufgabe i)
		\\begin{align*}
			x\\in(A\\cup B)\\Delta(C\\cup D)&\\stackrel{i)}{\\Leftrightarrow} x\\in\\left[(A\\cup B)\\setminus(C\\cup D)\\right]\\cup\\left[(C\\cup D)\\setminus(A\\cup B)\\right]\\\\
			&\\Leftrightarrow \\left[x\\in(A\\cup B)\\land x\\notin(C\\cup D)\\right]\\lor\\left[x\\in(C\\cup D)\\land x\\notin(A\\cup B)\\right]\\\\
			&\\Leftrightarrow \\left[(x\\in A\\lor x\\in B)\\land x\\notin(C\\cup D)\\right]\\\\
			&\\ \\quad\\lor\\left[(x\\in C\\land x\\in D)\\land x\\notin(A\\cup B)\\right]\\\\
			&\\Leftrightarrow \\left[(x\\in A\\land x\\notin(C\\cup D))\\lor(x\\in B\\land x\\notin(C\\cup D))\\right]\\\\
			&\\ \\quad\\lor\\left[(x\\in C\\land x\\notin(A\\cup B))\\lor(x\\in D\\land x\\notin(A\\cup B))\\right]\\\\
			&\\Leftrightarrow\\left[(x\\in A\\setminus(C\\cup D))\\lor(x\\in B\\setminus(C\\cup D))\\right]\\\\
			&\\quad\\ \\lor \\left[(x\\in C\\setminus(A\\cup B))\\lor(x\\in D\\setminus(A\\cup B))\\right]\\\\
			&\\Leftrightarrow x\\in\\left[A\\setminus(C\\cup D)\\right]\\cup \\left[B\\setminus(C\\cup D)\\right]\\cup\\left[C\\setminus(A\\cup B)\\right]\\cup\\left[D\\setminus(A\\cup B)\\right]
		\\end{align*}
		\\begin{align*}
			x\\in(A\\Delta C)\\cup(B\\Delta D)&\\stackrel{i)}{\\Leftrightarrow}
			x\\in\\left[(A\\setminus C)\\cup(C\\setminus A)\\right]\\cup\\left[(B\\setminus D)\\cup(D\\setminus B)\\right]
		\\end{align*}
		Nutze nun, dass für Mengen $\\bar{A},\\bar{B},\\bar{C}\\customsubset\\bar{X}$ mit $\\bar{B}\\customsubset\\bar{C}$ folgt: $\\bar{A}\\setminus\\bar{C}\\customsubset\\bar{A}\\setminus\\bar{B}$.\\\\
		Da $A\\cup B\\customsubset A$ bzw $A\\cup B\\customsubset B$ sowie $C\\cup D\\customsubset C$ bzw $C\\cup D\\customsubset D$ gilt folgt:
		\\begin{align*}
			A\\setminus(C\\cup D)&\\customsubset A\\setminus C\\\\
			B\\setminus(C\\cup D)&\\customsubset B\\setminus D\\\\
			C\\setminus(A\\cup B)&\\customsubset C\\setminus A\\\\
			D\\setminus(A\\cup B)&\\customsubset D\\setminus B.
		\\end{align*}
		Und somit gilt die Behauptete Aussage:
		\\begin{equation*}
			(A\\cup B)\\Delta(C\\cup D)\\customsubset(A\\Delta C)\\cup(B\\Delta D)
		\\end{equation*}
	\\end{enumerate}
	$\\Rightarrow$ Behauptung.\\hfill $\\square$
\\end{taggedblock}
`,preview:"2a8859fe-dacb-408b-a80a-3ceaa12c2016.png"},{uuid:"3855ded1-9b25-4228-96dd-dc64bd9f597f",title:["Folgen","Konvergenz","Konvergenzsätze"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:4,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Es seien \\Folge{a} und \\Folge{b} zwei komplexe konvergente Folgen mit $\\lim\\limits_{n\\rightarrow\\infty} a_n = a$ und
$\\lim\\limits_{n\\rightarrow\\infty} b_n = b$.\\\\
Zeigen Sie:
\\begin{enumerate}
\\item $$\\lim\\limits_{n\\rightarrow\\infty}(a_n + b_n) = a + b.$$
\\item Im Fall $b \\neq0$ gilt
$$\\lim\\limits_{n\\rightarrow\\infty}\\frac{1}{b_n}=\\frac{1}{b}.$$
\\emph{Hinweis}: Beweisen Sie zunächst, dass es ein $N\\in\\N$ gibt, so dass für alle $n \\geq N$ gilt:
$\\abs{b_n}\\geq \\frac{1}{2}\\abs{b}.$
\\item Im Fall $b\\neq0$ gilt weiterhin
$$\\lim\\limits_{n\\rightarrow\\infty}\\frac{a_n}{b_n}=\\frac{a}{b}.$$
\\end{enumerate}
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
\\begin{enumerate}
	\\item Sei $\\eps>0$ beliebig.\\\\
	Da $\\lim\\limits_{n\\rightarrow\\infty}a_n=a$ existiert ein $N_a\\in\\N $, so dass für alle $n>N_a$ gilt: $\\abs{a_n,a}<\\frac{\\eps}{2}$.\\\\
	Da $\\lim\\limits_{n\\rightarrow\\infty}b_n=b$ existiert ein $N_b\\in\\N $, so dass für alle $n>N_b$ gilt: $\\abs{b_n,b}<\\frac{\\eps}{2}$.\\\\
	Somit gilt für alle $n>N:=\\max{N_a,N_b}$:
	\\begin{equation*}
		\\abs{(a_n+b_n)-(a+b)}=\\abs{(a_n-a)+(b_n-b)}\\leq\\abs{a_n-a}+\\abs{b_n-b}<\\frac{\\eps}{2}+\\frac{\\eps}{2}=\\eps
	\\end{equation*}
	Da $\\eps>0$ beliebig und durch $\\abs{(a_n+b_n)-(a+b)}<\\eps$ für alle $n\\in\\N ,n>N$ folgt:\\\\
	\\begin{equation*}
		\\lim\\limits_{n\\rightarrow\\infty}a_n+b_n=a+b
	\\end{equation*}
	$\\Rightarrow$ Behauptung i).
	
	\\item Sei $b,b_n\\neq0$ und $\\eps>0$ beliebig. Da $\\abs{b}>0$ folgt $\\frac{\\abs{b}}{2}>0$.\\\\
	Somit existiert, da $\\lim\\limits_{n\\rightarrow\\infty}b_n=b$, ein~$N_1\\in\\N $ so dass für alle $n\\geq N_1$ gilt:
	\\begin{equation*}
		\\abs{b_n-b}<\\frac{\\abs{b}}{2}.
	\\end{equation*}
	Somit gilt für alle $n\\geq N_1$:
	\\begin{equation*}
		\\abs{b_n}=\\abs{b_n-b+b}\\geq\\abs{b}-\\abs{b_n-b}\\geq\\abs{b}-\\frac{\\abs{b}}{2}=\\frac{\\abs{b}}{2}\\\\
	\\end{equation*}
	Sei nun $\\eps':=\\frac{\\eps}{2\\abs{b}^2}$, dann existiert ein $N_2\\in\\N $ sodass für alle $n\\geq N_2$ \\\\
	folgt~$\\abs{b_n-b}<\\eps'$.\\\\
	Somit gilt für alle $n\\geq N:=\\max\\left\\{N_1,N_2\\right\\}$:
	\\begin{equation*}
		\\abs{\\frac{1}{b_n}-\\frac{1}{b}}=\\frac{\\abs{b-b_n}}{\\abs{b}\\abs{b_n}}\\geq\\frac{\\abs{b-b_n}}{\\frac{\\abs{b}}{2}\\abs{b}}=
		\\abs{b-b_n}\\frac{2}{\\abs{b}^2}<\\frac{2}{\\abs{b}^2}\\eps'=\\eps
	\\end{equation*}
	$\\Rightarrow$ $\\frac{1}{b_n}$ konvergiert gegen $\\frac{1}{b}$.
	$\\Rightarrow$ Behauptung ii).

	\\item Aus Teilaufgabe ii) folgt, dass $\\left(\\frac{1}{b_n}\\right)_{n\\in\\N }$ gegen $\\frac{1}{b}$ konvergiert.\\\\
	Da somit sowohl $a_n$ als auch $\\frac{1}{b_n}$ konvergieren folgt, dass:
	\\begin{equation*}
		\\lim\\limits_{n\\rightarrow\\infty}a_n\\cdot\\frac{1}{b_n}=a\\cdot\\frac{1}{b}=\\frac{a}{b}.
	\\end{equation*}
$\\Rightarrow$ Behauptung iii).
\\end{enumerate}
$\\Rightarrow$Beh.\\hfill$\\square$
\\end{taggedblock}
`,preview:"3855ded1-9b25-4228-96dd-dc64bd9f597f.png"},{uuid:"06824c52-c81e-4ab8-a957-273c0658c84f",title:["stetig","Riemann Integral","Integrierbar","Riemann"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:11,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $f : [a, b] \\rightarrow \\R$ stetig und $f (x) \\geq 0$ für alle $x \\in [a, b]$.\\\\
Zeigen Sie, dass genau dann $\\int_a^bf(x)\\diff x>0$, wenn $f (x) > 0$ für ein $x \\in (a, b)$.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Betrachte beide Richtungen separat:
\\begin{itemize}
	\\item Richtung 1: $\\int_a^bf(x)\\diff x>0\\Rightarrow f(x)>0,\\text{ für ein }x\\in\\left(a,b\\right)$\\\\
	Nehme also an, dass $\\int_a^bf(x)\\diff x>0$ gilt und das für alle $x\\in(a,b)\\ f(x)=0$ gilt.\\\\
	Dann folgt aber
	\\begin{equation*}
		0<\\int\\limits_a^bf(x)\\diff x=\\int\\limits_a^b0\\diff x=0
	\\end{equation*}
	was ein Widerspruch ist. Somit muss ein $x\\in(a,b)$ mit $f(x)>0$ existieren.
	\\item Richtung 2: $\\int_a^bf(x)\\diff x>0\\Leftarrow f(x)>0,\\text{ für ein }x\\in\\left(a,b\\right)$\\\\
	Sei $x_0\\in(a,b)$ mit $f(x_0):=2\\eps>0$. Da $f$ stetig ist, muss somit auch ein $\\delta_1>0$ existieren, sodass 
	\\begin{equation*}
		f\\left(B_{\\delta_1}\\left(x_0\\right)\\right)\\customsubset B_\\eps(f(x_0)).
	\\end{equation*}
	Au"serdem da $x\\in\\left(a,b\\right)$ existiert ein $\\delta_2$ mit $B_{\\delta_2}(x_0)\\customsubset\\left[a,b\\right]$.\\\\
	Sei $\\delta:=\\min\\left\\{\\delta_1,\\delta_2\\right\\}$, dann folgt:
	\\begin{equation*}
		\\forall x\\in B_\\delta\\left(x_0\\right):\\ f(x)\\geq f\\left(x_0\\right)-\\eps=\\eps>0
	\\end{equation*}
	und es folgt
	\\begin{equation*}
		\\int\\limits_a^bf(x)\\diff x\\stackrel{f\\geq0}{\\geq}\\int\\limits_{x_0-\\delta}^{x_0+\\delta}f(x)\\diff x
		\\geq\\int\\limits_{x_0-\\delta}^{x_0+\\delta}\\eps \\diff x=2\\delta\\eps>0
	\\end{equation*}
\\end{itemize}
\\end{taggedblock}`,preview:"06824c52-c81e-4ab8-a957-273c0658c84f.png"},{uuid:"a31bb124-1b7f-4bcc-bb11-0f611b015179",title:["Stetigkeit","stetige Funktion"],tags:["Analysis 1","Ana1TuloU1"],languages:["GermanExercise","GermanSolution"],semesterwoche:10,solution:"droptag",author:["Prof. Dr. Felix Finster","Dr. Claudio Paganini"],license:"CC SA",headers:["e1ac4414-8587-40f6-a1c6-13d7d452a779"],content:`
\\aufgabe{} 
 
\\begin{taggedblock}{GermanExercise}
Sei $f : \\R\\rightarrow\\R$ eine relle Funktion. Beweisen Sie: Existieren die Limites
$$\\lim_{\\begin{subarray}{c} x\\rightarrow 0\\\\ x>0 \\end{subarray}}f(x),\\ \\lim_{\\begin{subarray}{c} x\\rightarrow 0\\\\ x<0 \\end{subarray}}
f(x)$$
und sind gleich zu $f(0)$, so existiert auch $\\lim\\limits_{x\\rightarrow0}f(x)$.\\\\
\\emph{Hinweis}: Argumentieren Sie gemäß der Definition des Grenzwertes mit der Konvergenz zugehöriger Folgen.
\\end{taggedblock}



\\begin{taggedblock}{GermanSolution}
\\noindent \\emph{L\\"osung.} 
Sei \\Folge{x} eine reelle Nullfolge und sei $\\eps>0$. Sei zudem $P\\customsubset\\N$ die Menge der Indizes $i\\in\\N$ mit $x_i<0$ sowie $Q\\customsubset\\N$ die Menge der Indizes $i\\in\\N$ mit $x_i>0$.
	\\begin{itemize}
		\\item Falls $Q$ endlich ist, wähle $N_1=\\max Q+1$. Falls $Q$ nicht endlich ist, betrachte die Teilfolge $\\left(x_i\\right)_{i\\in Q}$.\\\\ Diese ist, da \\Folge{x} eine Nullfolge ist, ebenfalls eine Nullfolge. Da zudem $x_i>0$ für alle $i\\in Q$ ist, konvergiert nach Voraussetzung ebenfalls die Bildfolge $\\left(f(x_i)\\right)_{i\\in Q}$ gegen $f(0)$.\\\\
		Sei nun $N_1$ so, dass für alle $i\\in Q, i>N_1$ gilt $\\abs{f(x_i)-f(0)}<\\eps$.
		\\item Falls $P$ endlich ist, wähle $N_2=\\max P+1$. Falls $P$ nicht endlich ist, betrachte die Teilfolge $\\left(x_l\\right)_{l\\in P}$.\\\\
		Diese ist, da \\Folge{x} eine Nullfolge ist, ebenfalls eine Nullfolge. Da zudem $x_l<0$ für alle $l\\in P$ ist, konvergiert nach Voraussetzung ebenfalls die Bildfolge $\\left(f(x_l)\\right)_{l\\in P}$ gegen $f(0)$.\\\\
		Sei nun $N_2$ so, dass für alle $l\\in P, l>N_2$ gilt $\\abs{f(x_l)-f(0)}<\\eps$.\\\\
	\\end{itemize}
	Nun gilt für $n\\in\\N$ entweder $n\\in Q$, $n\\in P$ oder $x_n=0$, weshalb für alle~$n>\\max\\left\\{N_1,N_2\\right\\}$folgt, dass $\\abs{f(x_n)-f(0)}<\\eps$.\\\\
	Somit existiert auch $\\lim\\limits_{x\\rightarrow0} f(x)=f(0)$.
\\end{taggedblock}`,preview:"a31bb124-1b7f-4bcc-bb11-0f611b015179.png"}],rr={templates:Wu,headers:Vu,exercises:Hu};var lt=(e=>(e[e.All=0]="All",e[e.Exercise=1]="Exercise",e[e.Template=2]="Template",e[e.Header=3]="Header",e))(lt||{});class Ku{}class Yu{}class Qu{}function vl(e){var n=[];for(var t of e)for(var i of rr.exercises)if((!t.uuid||i.uuid==t.uuid)&&(!t.author||i.author==t.author)){var a=new Ku;a.uuid=i.uuid,a.author=i.author,a.title=i.title,a.headers=i.headers,a.license=i.license,a.content=i.content,a.preview=i.preview,n.push(a)}return n}function Ju(e){var n=[];for(var t of e)for(var i of rr.headers)if((!t.uuid||i.uuid==t.uuid)&&(!t.author||i.author==t.author)){var a=new Yu;a.uuid=i.uuid,a.author=i.author,a.content=i.content,n.push(a)}return n}function Al(e){var n=[];for(var t of e)for(var i of rr.templates)if(!t.uuid||i.uuid==t.uuid){let a=new Qu;a.uuid=i.uuid,a.title=i.title,a.author=i.author,a.fields=i.fields,a.license=i.license,a.content=i.content,n.push(a)}return n}function ec(e){var n=[];for(var t of e.itemSelection)n.push({itemType:lt.Exercise,uuid:t.uuid});var i=vl(n),a=i.map(p=>p.content).join(`
`);let r=[];for(var s of i)for(var l of s.headers)r.push(l);r=Array.from(new Set(r));let o=[];for(let p of r)o.push({itemType:lt.Header,uuid:p});var f=Ju(o),u=f.map(p=>p.content).join(`
`);e.isoLang=="de"?(u+="\\usetag{GermanExercise}",e.solution&&(u+="\\usetag{GermanSolution}")):(u+="\\usetag{EnglishExercise}",e.solution&&(u+="\\usetag{EnglishSolution}"));var d=[{itemType:lt.Template,uuid:e.template.uuid}];let $=Al(d)[0],m=$.content;return Object.entries($.fields).forEach(([p,v],O)=>{if(v[0]=="EXERCISES"){let X="((* "+v[0]+" *))";m=m.replace(X,()=>a)}else if(v[0]=="HEADERS"){let X="((* "+v[0]+" *))";m=m.replace(X,u)}else{let X="((* "+v[0]+" *))",T="";e.template.fields.has(v[0])&&(T=e.template.fields.get(v[0])),m=m.replace(X,T)}}),m}var sr=(e=>(e.PDF="PDF",e.Source="SOURCE",e))(sr||{});class nc{constructor(n,t){this.exercises=n,this.tags=t}}function tc(e){const n=[{itemType:lt.Exercise}];let t=vl(n),i=[];return new nc(t,i)}function ic(e){const n=[{itemType:lt.Template}];return Al(n)}async function aa(e){let n=ec(e);if(e.docType=="PDF")return Uu(n);if(e.docType=="SOURCE")return n;throw Error("Wrong configuration")}class ac{}class rc{}class sc{constructor(){this.docType=sr.PDF}}const Xi=Zu({id:"selectExercises",state:()=>({items:[],templateUuid:"",templateStr:[],langCode:""}),actions:{set(e){e&&(this.items.length=0,this.items.push(...e))},add(e){e&&this.items.push(e)},setTemplateOptions(e){if(e){this.templateStr.length=0;for(let[n,t]of e)t&&this.templateStr.push([n,t])}},generateConfig(e=!1){let n=new ac;n.uuid=this.templateUuid,n.fields=new Map(this.templateStr);let t=[];for(var i of this.items){let r=new rc;r.uuid=i.uuid,r.subElements=[],t.push(r)}let a=new sc;return a.template=n,a.itemSelection=t,a.isoLang=this.langCode,a.solution=e,console.log(a),a}}});/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function rs(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,i)}return t}function ln(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?rs(Object(t),!0).forEach(function(i){lc(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):rs(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}function fi(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?fi=function(n){return typeof n}:fi=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},fi(e)}function lc(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function $n(){return $n=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},$n.apply(this,arguments)}function oc(e,n){if(e==null)return{};var t={},i=Object.keys(e),a,r;for(r=0;r<i.length;r++)a=i[r],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function fc(e,n){if(e==null)return{};var t=oc(e,n),i,a;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],!(n.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var uc="1.14.0";function dn(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var mn=dn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Xt=dn(/Edge/i),ss=dn(/firefox/i),Dt=dn(/safari/i)&&!dn(/chrome/i)&&!dn(/android/i),Sl=dn(/iP(ad|od|hone)/i),cc=dn(/chrome/i)&&dn(/android/i),El={capture:!1,passive:!1};function ne(e,n,t){e.addEventListener(n,t,!mn&&El)}function Q(e,n,t){e.removeEventListener(n,t,!mn&&El)}function yi(e,n){if(n){if(n[0]===">"&&(n=n.substring(1)),e)try{if(e.matches)return e.matches(n);if(e.msMatchesSelector)return e.msMatchesSelector(n);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(n)}catch{return!1}return!1}}function gc(e){return e.host&&e!==document&&e.host.nodeType?e.host:e.parentNode}function nn(e,n,t,i){if(e){t=t||document;do{if(n!=null&&(n[0]===">"?e.parentNode===t&&yi(e,n):yi(e,n))||i&&e===t)return e;if(e===t)break}while(e=gc(e))}return null}var ls=/\s+/g;function Be(e,n,t){if(e&&n)if(e.classList)e.classList[t?"add":"remove"](n);else{var i=(" "+e.className+" ").replace(ls," ").replace(" "+n+" "," ");e.className=(i+(t?" "+n:"")).replace(ls," ")}}function B(e,n,t){var i=e&&e.style;if(i){if(t===void 0)return document.defaultView&&document.defaultView.getComputedStyle?t=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(t=e.currentStyle),n===void 0?t:t[n];!(n in i)&&n.indexOf("webkit")===-1&&(n="-webkit-"+n),i[n]=t+(typeof t=="string"?"":"px")}}function ot(e,n){var t="";if(typeof e=="string")t=e;else do{var i=B(e,"transform");i&&i!=="none"&&(t=i+" "+t)}while(!n&&(e=e.parentNode));var a=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return a&&new a(t)}function ql(e,n,t){if(e){var i=e.getElementsByTagName(n),a=0,r=i.length;if(t)for(;a<r;a++)t(i[a],a);return i}return[]}function rn(){var e=document.scrollingElement;return e||document.documentElement}function pe(e,n,t,i,a){if(!(!e.getBoundingClientRect&&e!==window)){var r,s,l,o,f,u,d;if(e!==window&&e.parentNode&&e!==rn()?(r=e.getBoundingClientRect(),s=r.top,l=r.left,o=r.bottom,f=r.right,u=r.height,d=r.width):(s=0,l=0,o=window.innerHeight,f=window.innerWidth,u=window.innerHeight,d=window.innerWidth),(n||t)&&e!==window&&(a=a||e.parentNode,!mn))do if(a&&a.getBoundingClientRect&&(B(a,"transform")!=="none"||t&&B(a,"position")!=="static")){var $=a.getBoundingClientRect();s-=$.top+parseInt(B(a,"border-top-width")),l-=$.left+parseInt(B(a,"border-left-width")),o=s+r.height,f=l+r.width;break}while(a=a.parentNode);if(i&&e!==window){var m=ot(a||e),p=m&&m.a,v=m&&m.d;m&&(s/=v,l/=p,d/=p,u/=v,o=s+u,f=l+d)}return{top:s,left:l,bottom:o,right:f,width:d,height:u}}}function os(e,n,t){for(var i=Sn(e,!0),a=pe(e)[n];i;){var r=pe(i)[t],s=void 0;if(t==="top"||t==="left"?s=a>=r:s=a<=r,!s)return i;if(i===rn())break;i=Sn(i,!1)}return!1}function dt(e,n,t,i){for(var a=0,r=0,s=e.children;r<s.length;){if(s[r].style.display!=="none"&&s[r]!==j.ghost&&(i||s[r]!==j.dragged)&&nn(s[r],t.draggable,e,!1)){if(a===n)return s[r];a++}r++}return null}function lr(e,n){for(var t=e.lastElementChild;t&&(t===j.ghost||B(t,"display")==="none"||n&&!yi(t,n));)t=t.previousElementSibling;return t||null}function Le(e,n){var t=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==j.clone&&(!n||yi(e,n))&&t++;return t}function fs(e){var n=0,t=0,i=rn();if(e)do{var a=ot(e),r=a.a,s=a.d;n+=e.scrollLeft*r,t+=e.scrollTop*s}while(e!==i&&(e=e.parentNode));return[n,t]}function dc(e,n){for(var t in e)if(e.hasOwnProperty(t)){for(var i in n)if(n.hasOwnProperty(i)&&n[i]===e[t][i])return Number(t)}return-1}function Sn(e,n){if(!e||!e.getBoundingClientRect)return rn();var t=e,i=!1;do if(t.clientWidth<t.scrollWidth||t.clientHeight<t.scrollHeight){var a=B(t);if(t.clientWidth<t.scrollWidth&&(a.overflowX=="auto"||a.overflowX=="scroll")||t.clientHeight<t.scrollHeight&&(a.overflowY=="auto"||a.overflowY=="scroll")){if(!t.getBoundingClientRect||t===document.body)return rn();if(i||n)return t;i=!0}}while(t=t.parentNode);return rn()}function $c(e,n){if(e&&n)for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e}function ra(e,n){return Math.round(e.top)===Math.round(n.top)&&Math.round(e.left)===Math.round(n.left)&&Math.round(e.height)===Math.round(n.height)&&Math.round(e.width)===Math.round(n.width)}var Rt;function Cl(e,n){return function(){if(!Rt){var t=arguments,i=this;t.length===1?e.call(i,t[0]):e.apply(i,t),Rt=setTimeout(function(){Rt=void 0},n)}}}function hc(){clearTimeout(Rt),Rt=void 0}function Fl(e,n,t){e.scrollLeft+=n,e.scrollTop+=t}function Dl(e){var n=window.Polymer,t=window.jQuery||window.Zepto;return n&&n.dom?n.dom(e).cloneNode(!0):t?t(e).clone(!0)[0]:e.cloneNode(!0)}var Te="Sortable"+new Date().getTime();function mc(){var e=[],n;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var i=[].slice.call(this.el.children);i.forEach(function(a){if(!(B(a,"display")==="none"||a===j.ghost)){e.push({target:a,rect:pe(a)});var r=ln({},e[e.length-1].rect);if(a.thisAnimationDuration){var s=ot(a,!0);s&&(r.top-=s.f,r.left-=s.e)}a.fromRect=r}})}},addAnimationState:function(i){e.push(i)},removeAnimationState:function(i){e.splice(dc(e,{target:i}),1)},animateAll:function(i){var a=this;if(!this.options.animation){clearTimeout(n),typeof i=="function"&&i();return}var r=!1,s=0;e.forEach(function(l){var o=0,f=l.target,u=f.fromRect,d=pe(f),$=f.prevFromRect,m=f.prevToRect,p=l.rect,v=ot(f,!0);v&&(d.top-=v.f,d.left-=v.e),f.toRect=d,f.thisAnimationDuration&&ra($,d)&&!ra(u,d)&&(p.top-d.top)/(p.left-d.left)===(u.top-d.top)/(u.left-d.left)&&(o=_c(p,$,m,a.options)),ra(d,u)||(f.prevFromRect=u,f.prevToRect=d,o||(o=a.options.animation),a.animate(f,p,d,o)),o&&(r=!0,s=Math.max(s,o),clearTimeout(f.animationResetTimer),f.animationResetTimer=setTimeout(function(){f.animationTime=0,f.prevFromRect=null,f.fromRect=null,f.prevToRect=null,f.thisAnimationDuration=null},o),f.thisAnimationDuration=o)}),clearTimeout(n),r?n=setTimeout(function(){typeof i=="function"&&i()},s):typeof i=="function"&&i(),e=[]},animate:function(i,a,r,s){if(s){B(i,"transition",""),B(i,"transform","");var l=ot(this.el),o=l&&l.a,f=l&&l.d,u=(a.left-r.left)/(o||1),d=(a.top-r.top)/(f||1);i.animatingX=!!u,i.animatingY=!!d,B(i,"transform","translate3d("+u+"px,"+d+"px,0)"),this.forRepaintDummy=bc(i),B(i,"transition","transform "+s+"ms"+(this.options.easing?" "+this.options.easing:"")),B(i,"transform","translate3d(0,0,0)"),typeof i.animated=="number"&&clearTimeout(i.animated),i.animated=setTimeout(function(){B(i,"transition",""),B(i,"transform",""),i.animated=!1,i.animatingX=!1,i.animatingY=!1},s)}}}}function bc(e){return e.offsetWidth}function _c(e,n,t,i){return Math.sqrt(Math.pow(n.top-e.top,2)+Math.pow(n.left-e.left,2))/Math.sqrt(Math.pow(n.top-t.top,2)+Math.pow(n.left-t.left,2))*i.animation}var Qn=[],sa={initializeByDefault:!0},Ot={mount:function(n){for(var t in sa)sa.hasOwnProperty(t)&&!(t in n)&&(n[t]=sa[t]);Qn.forEach(function(i){if(i.pluginName===n.pluginName)throw"Sortable: Cannot mount plugin ".concat(n.pluginName," more than once")}),Qn.push(n)},pluginEvent:function(n,t,i){var a=this;this.eventCanceled=!1,i.cancel=function(){a.eventCanceled=!0};var r=n+"Global";Qn.forEach(function(s){t[s.pluginName]&&(t[s.pluginName][r]&&t[s.pluginName][r](ln({sortable:t},i)),t.options[s.pluginName]&&t[s.pluginName][n]&&t[s.pluginName][n](ln({sortable:t},i)))})},initializePlugins:function(n,t,i,a){Qn.forEach(function(l){var o=l.pluginName;if(!(!n.options[o]&&!l.initializeByDefault)){var f=new l(n,t,n.options);f.sortable=n,f.options=n.options,n[o]=f,$n(i,f.defaults)}});for(var r in n.options)if(n.options.hasOwnProperty(r)){var s=this.modifyOption(n,r,n.options[r]);typeof s<"u"&&(n.options[r]=s)}},getEventProperties:function(n,t){var i={};return Qn.forEach(function(a){typeof a.eventProperties=="function"&&$n(i,a.eventProperties.call(t[a.pluginName],n))}),i},modifyOption:function(n,t,i){var a;return Qn.forEach(function(r){n[r.pluginName]&&r.optionListeners&&typeof r.optionListeners[t]=="function"&&(a=r.optionListeners[t].call(n[r.pluginName],i))}),a}};function xc(e){var n=e.sortable,t=e.rootEl,i=e.name,a=e.targetEl,r=e.cloneEl,s=e.toEl,l=e.fromEl,o=e.oldIndex,f=e.newIndex,u=e.oldDraggableIndex,d=e.newDraggableIndex,$=e.originalEvent,m=e.putSortable,p=e.extraEventProperties;if(n=n||t&&t[Te],!!n){var v,O=n.options,X="on"+i.charAt(0).toUpperCase()+i.substr(1);window.CustomEvent&&!mn&&!Xt?v=new CustomEvent(i,{bubbles:!0,cancelable:!0}):(v=document.createEvent("Event"),v.initEvent(i,!0,!0)),v.to=s||t,v.from=l||t,v.item=a||t,v.clone=r,v.oldIndex=o,v.newIndex=f,v.oldDraggableIndex=u,v.newDraggableIndex=d,v.originalEvent=$,v.pullMode=m?m.lastPutMode:void 0;var T=ln(ln({},p),Ot.getEventProperties(i,n));for(var V in T)v[V]=T[V];t&&t.dispatchEvent(v),O[X]&&O[X].call(n,v)}}var pc=["evt"],De=function(n,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=i.evt,r=fc(i,pc);Ot.pluginEvent.bind(j)(n,t,ln({dragEl:y,parentEl:ce,ghostEl:G,rootEl:oe,nextEl:Pn,lastDownEl:ui,cloneEl:ge,cloneHidden:vn,dragStarted:yt,putSortable:ye,activeSortable:j.active,originalEvent:a,oldIndex:tt,oldDraggableIndex:zt,newIndex:je,newDraggableIndex:yn,hideGhostForTarget:Il,unhideGhostForTarget:Bl,cloneNowHidden:function(){vn=!0},cloneNowShown:function(){vn=!1},dispatchSortableEvent:function(l){qe({sortable:t,name:l,originalEvent:a})}},r))};function qe(e){xc(ln({putSortable:ye,cloneEl:ge,targetEl:y,rootEl:oe,oldIndex:tt,oldDraggableIndex:zt,newIndex:je,newDraggableIndex:yn},e))}var y,ce,G,oe,Pn,ui,ge,vn,tt,je,zt,yn,ei,ye,nt=!1,vi=!1,Ai=[],Bn,Oe,la,oa,us,cs,yt,Jn,Nt,It=!1,ni=!1,ci,ve,fa=[],Na=!1,Si=[],Oi=typeof document<"u",ti=Sl,gs=Xt||mn?"cssFloat":"float",wc=Oi&&!cc&&!Sl&&"draggable"in document.createElement("div"),Rl=function(){if(Oi){if(mn)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}}(),zl=function(n,t){var i=B(n),a=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),r=dt(n,0,t),s=dt(n,1,t),l=r&&B(r),o=s&&B(s),f=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+pe(r).width,u=o&&parseInt(o.marginLeft)+parseInt(o.marginRight)+pe(s).width;if(i.display==="flex")return i.flexDirection==="column"||i.flexDirection==="column-reverse"?"vertical":"horizontal";if(i.display==="grid")return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&l.float&&l.float!=="none"){var d=l.float==="left"?"left":"right";return s&&(o.clear==="both"||o.clear===d)?"vertical":"horizontal"}return r&&(l.display==="block"||l.display==="flex"||l.display==="table"||l.display==="grid"||f>=a&&i[gs]==="none"||s&&i[gs]==="none"&&f+u>a)?"vertical":"horizontal"},kc=function(n,t,i){var a=i?n.left:n.top,r=i?n.right:n.bottom,s=i?n.width:n.height,l=i?t.left:t.top,o=i?t.right:t.bottom,f=i?t.width:t.height;return a===l||r===o||a+s/2===l+f/2},yc=function(n,t){var i;return Ai.some(function(a){var r=a[Te].options.emptyInsertThreshold;if(!(!r||lr(a))){var s=pe(a),l=n>=s.left-r&&n<=s.right+r,o=t>=s.top-r&&t<=s.bottom+r;if(l&&o)return i=a}}),i},Nl=function(n){function t(r,s){return function(l,o,f,u){var d=l.options.group.name&&o.options.group.name&&l.options.group.name===o.options.group.name;if(r==null&&(s||d))return!0;if(r==null||r===!1)return!1;if(s&&r==="clone")return r;if(typeof r=="function")return t(r(l,o,f,u),s)(l,o,f,u);var $=(s?l:o).options.group.name;return r===!0||typeof r=="string"&&r===$||r.join&&r.indexOf($)>-1}}var i={},a=n.group;(!a||fi(a)!="object")&&(a={name:a}),i.name=a.name,i.checkPull=t(a.pull,!0),i.checkPut=t(a.put),i.revertClone=a.revertClone,n.group=i},Il=function(){!Rl&&G&&B(G,"display","none")},Bl=function(){!Rl&&G&&B(G,"display","")};Oi&&document.addEventListener("click",function(e){if(vi)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),vi=!1,!1},!0);var jn=function(n){if(y){n=n.touches?n.touches[0]:n;var t=yc(n.clientX,n.clientY);if(t){var i={};for(var a in n)n.hasOwnProperty(a)&&(i[a]=n[a]);i.target=i.rootEl=t,i.preventDefault=void 0,i.stopPropagation=void 0,t[Te]._onDragOver(i)}}},vc=function(n){y&&y.parentNode[Te]._isOutsideThisEl(n.target)};function j(e,n){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=n=$n({},n),e[Te]=this;var t={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return zl(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(s,l){s.setData("Text",l.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:j.supportPointer!==!1&&"PointerEvent"in window&&!Dt,emptyInsertThreshold:5};Ot.initializePlugins(this,e,t);for(var i in t)!(i in n)&&(n[i]=t[i]);Nl(n);for(var a in this)a.charAt(0)==="_"&&typeof this[a]=="function"&&(this[a]=this[a].bind(this));this.nativeDraggable=n.forceFallback?!1:wc,this.nativeDraggable&&(this.options.touchStartThreshold=1),n.supportPointer?ne(e,"pointerdown",this._onTapStart):(ne(e,"mousedown",this._onTapStart),ne(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(ne(e,"dragover",this),ne(e,"dragenter",this)),Ai.push(this.el),n.store&&n.store.get&&this.sort(n.store.get(this)||[]),$n(this,mc())}j.prototype={constructor:j,_isOutsideThisEl:function(n){!this.el.contains(n)&&n!==this.el&&(Jn=null)},_getDirection:function(n,t){return typeof this.options.direction=="function"?this.options.direction.call(this,n,t,y):this.options.direction},_onTapStart:function(n){if(n.cancelable){var t=this,i=this.el,a=this.options,r=a.preventOnFilter,s=n.type,l=n.touches&&n.touches[0]||n.pointerType&&n.pointerType==="touch"&&n,o=(l||n).target,f=n.target.shadowRoot&&(n.path&&n.path[0]||n.composedPath&&n.composedPath()[0])||o,u=a.filter;if(Rc(i),!y&&!(/mousedown|pointerdown/.test(s)&&n.button!==0||a.disabled)&&!f.isContentEditable&&!(!this.nativeDraggable&&Dt&&o&&o.tagName.toUpperCase()==="SELECT")&&(o=nn(o,a.draggable,i,!1),!(o&&o.animated)&&ui!==o)){if(tt=Le(o),zt=Le(o,a.draggable),typeof u=="function"){if(u.call(this,n,o,this)){qe({sortable:t,rootEl:f,name:"filter",targetEl:o,toEl:i,fromEl:i}),De("filter",t,{evt:n}),r&&n.cancelable&&n.preventDefault();return}}else if(u&&(u=u.split(",").some(function(d){if(d=nn(f,d.trim(),i,!1),d)return qe({sortable:t,rootEl:d,name:"filter",targetEl:o,fromEl:i,toEl:i}),De("filter",t,{evt:n}),!0}),u)){r&&n.cancelable&&n.preventDefault();return}a.handle&&!nn(f,a.handle,i,!1)||this._prepareDragStart(n,l,o)}}},_prepareDragStart:function(n,t,i){var a=this,r=a.el,s=a.options,l=r.ownerDocument,o;if(i&&!y&&i.parentNode===r){var f=pe(i);if(oe=r,y=i,ce=y.parentNode,Pn=y.nextSibling,ui=i,ei=s.group,j.dragged=y,Bn={target:y,clientX:(t||n).clientX,clientY:(t||n).clientY},us=Bn.clientX-f.left,cs=Bn.clientY-f.top,this._lastX=(t||n).clientX,this._lastY=(t||n).clientY,y.style["will-change"]="all",o=function(){if(De("delayEnded",a,{evt:n}),j.eventCanceled){a._onDrop();return}a._disableDelayedDragEvents(),!ss&&a.nativeDraggable&&(y.draggable=!0),a._triggerDragStart(n,t),qe({sortable:a,name:"choose",originalEvent:n}),Be(y,s.chosenClass,!0)},s.ignore.split(",").forEach(function(u){ql(y,u.trim(),ua)}),ne(l,"dragover",jn),ne(l,"mousemove",jn),ne(l,"touchmove",jn),ne(l,"mouseup",a._onDrop),ne(l,"touchend",a._onDrop),ne(l,"touchcancel",a._onDrop),ss&&this.nativeDraggable&&(this.options.touchStartThreshold=4,y.draggable=!0),De("delayStart",this,{evt:n}),s.delay&&(!s.delayOnTouchOnly||t)&&(!this.nativeDraggable||!(Xt||mn))){if(j.eventCanceled){this._onDrop();return}ne(l,"mouseup",a._disableDelayedDrag),ne(l,"touchend",a._disableDelayedDrag),ne(l,"touchcancel",a._disableDelayedDrag),ne(l,"mousemove",a._delayedDragTouchMoveHandler),ne(l,"touchmove",a._delayedDragTouchMoveHandler),s.supportPointer&&ne(l,"pointermove",a._delayedDragTouchMoveHandler),a._dragStartTimer=setTimeout(o,s.delay)}else o()}},_delayedDragTouchMoveHandler:function(n){var t=n.touches?n.touches[0]:n;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){y&&ua(y),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var n=this.el.ownerDocument;Q(n,"mouseup",this._disableDelayedDrag),Q(n,"touchend",this._disableDelayedDrag),Q(n,"touchcancel",this._disableDelayedDrag),Q(n,"mousemove",this._delayedDragTouchMoveHandler),Q(n,"touchmove",this._delayedDragTouchMoveHandler),Q(n,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(n,t){t=t||n.pointerType=="touch"&&n,!this.nativeDraggable||t?this.options.supportPointer?ne(document,"pointermove",this._onTouchMove):t?ne(document,"touchmove",this._onTouchMove):ne(document,"mousemove",this._onTouchMove):(ne(y,"dragend",this),ne(oe,"dragstart",this._onDragStart));try{document.selection?gi(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(n,t){if(nt=!1,oe&&y){De("dragStarted",this,{evt:t}),this.nativeDraggable&&ne(document,"dragover",vc);var i=this.options;!n&&Be(y,i.dragClass,!1),Be(y,i.ghostClass,!0),j.active=this,n&&this._appendGhost(),qe({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(Oe){this._lastX=Oe.clientX,this._lastY=Oe.clientY,Il();for(var n=document.elementFromPoint(Oe.clientX,Oe.clientY),t=n;n&&n.shadowRoot&&(n=n.shadowRoot.elementFromPoint(Oe.clientX,Oe.clientY),n!==t);)t=n;if(y.parentNode[Te]._isOutsideThisEl(n),t)do{if(t[Te]){var i=void 0;if(i=t[Te]._onDragOver({clientX:Oe.clientX,clientY:Oe.clientY,target:n,rootEl:t}),i&&!this.options.dragoverBubble)break}n=t}while(t=t.parentNode);Bl()}},_onTouchMove:function(n){if(Bn){var t=this.options,i=t.fallbackTolerance,a=t.fallbackOffset,r=n.touches?n.touches[0]:n,s=G&&ot(G,!0),l=G&&s&&s.a,o=G&&s&&s.d,f=ti&&ve&&fs(ve),u=(r.clientX-Bn.clientX+a.x)/(l||1)+(f?f[0]-fa[0]:0)/(l||1),d=(r.clientY-Bn.clientY+a.y)/(o||1)+(f?f[1]-fa[1]:0)/(o||1);if(!j.active&&!nt){if(i&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<i)return;this._onDragStart(n,!0)}if(G){s?(s.e+=u-(la||0),s.f+=d-(oa||0)):s={a:1,b:0,c:0,d:1,e:u,f:d};var $="matrix(".concat(s.a,",").concat(s.b,",").concat(s.c,",").concat(s.d,",").concat(s.e,",").concat(s.f,")");B(G,"webkitTransform",$),B(G,"mozTransform",$),B(G,"msTransform",$),B(G,"transform",$),la=u,oa=d,Oe=r}n.cancelable&&n.preventDefault()}},_appendGhost:function(){if(!G){var n=this.options.fallbackOnBody?document.body:oe,t=pe(y,!0,ti,!0,n),i=this.options;if(ti){for(ve=n;B(ve,"position")==="static"&&B(ve,"transform")==="none"&&ve!==document;)ve=ve.parentNode;ve!==document.body&&ve!==document.documentElement?(ve===document&&(ve=rn()),t.top+=ve.scrollTop,t.left+=ve.scrollLeft):ve=rn(),fa=fs(ve)}G=y.cloneNode(!0),Be(G,i.ghostClass,!1),Be(G,i.fallbackClass,!0),Be(G,i.dragClass,!0),B(G,"transition",""),B(G,"transform",""),B(G,"box-sizing","border-box"),B(G,"margin",0),B(G,"top",t.top),B(G,"left",t.left),B(G,"width",t.width),B(G,"height",t.height),B(G,"opacity","0.8"),B(G,"position",ti?"absolute":"fixed"),B(G,"zIndex","100000"),B(G,"pointerEvents","none"),j.ghost=G,n.appendChild(G),B(G,"transform-origin",us/parseInt(G.style.width)*100+"% "+cs/parseInt(G.style.height)*100+"%")}},_onDragStart:function(n,t){var i=this,a=n.dataTransfer,r=i.options;if(De("dragStart",this,{evt:n}),j.eventCanceled){this._onDrop();return}De("setupClone",this),j.eventCanceled||(ge=Dl(y),ge.draggable=!1,ge.style["will-change"]="",this._hideClone(),Be(ge,this.options.chosenClass,!1),j.clone=ge),i.cloneId=gi(function(){De("clone",i),!j.eventCanceled&&(i.options.removeCloneOnHide||oe.insertBefore(ge,y),i._hideClone(),qe({sortable:i,name:"clone"}))}),!t&&Be(y,r.dragClass,!0),t?(vi=!0,i._loopId=setInterval(i._emulateDragOver,50)):(Q(document,"mouseup",i._onDrop),Q(document,"touchend",i._onDrop),Q(document,"touchcancel",i._onDrop),a&&(a.effectAllowed="move",r.setData&&r.setData.call(i,a,y)),ne(document,"drop",i),B(y,"transform","translateZ(0)")),nt=!0,i._dragStartId=gi(i._dragStarted.bind(i,t,n)),ne(document,"selectstart",i),yt=!0,Dt&&B(document.body,"user-select","none")},_onDragOver:function(n){var t=this.el,i=n.target,a,r,s,l=this.options,o=l.group,f=j.active,u=ei===o,d=l.sort,$=ye||f,m,p=this,v=!1;if(Na)return;function O(ee,on){De(ee,p,ln({evt:n,isOwner:u,axis:m?"vertical":"horizontal",revert:s,dragRect:a,targetRect:r,canSort:d,fromSortable:$,target:i,completed:T,onMove:function(Ke,Me){return ii(oe,t,y,a,Ke,pe(Ke),n,Me)},changed:V},on))}function X(){O("dragOverAnimationCapture"),p.captureAnimationState(),p!==$&&$.captureAnimationState()}function T(ee){return O("dragOverCompleted",{insertion:ee}),ee&&(u?f._hideClone():f._showClone(p),p!==$&&(Be(y,ye?ye.options.ghostClass:f.options.ghostClass,!1),Be(y,l.ghostClass,!0)),ye!==p&&p!==j.active?ye=p:p===j.active&&ye&&(ye=null),$===p&&(p._ignoreWhileAnimating=i),p.animateAll(function(){O("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==$&&($.animateAll(),$._ignoreWhileAnimating=null)),(i===y&&!y.animated||i===t&&!i.animated)&&(Jn=null),!l.dragoverBubble&&!n.rootEl&&i!==document&&(y.parentNode[Te]._isOutsideThisEl(n.target),!ee&&jn(n)),!l.dragoverBubble&&n.stopPropagation&&n.stopPropagation(),v=!0}function V(){je=Le(y),yn=Le(y,l.draggable),qe({sortable:p,name:"change",toEl:t,newIndex:je,newDraggableIndex:yn,originalEvent:n})}if(n.preventDefault!==void 0&&n.cancelable&&n.preventDefault(),i=nn(i,l.draggable,t,!0),O("dragOver"),j.eventCanceled)return v;if(y.contains(n.target)||i.animated&&i.animatingX&&i.animatingY||p._ignoreWhileAnimating===i)return T(!1);if(vi=!1,f&&!l.disabled&&(u?d||(s=ce!==oe):ye===this||(this.lastPutMode=ei.checkPull(this,f,y,n))&&o.checkPut(this,f,y,n))){if(m=this._getDirection(n,i)==="vertical",a=pe(y),O("dragOverValid"),j.eventCanceled)return v;if(s)return ce=oe,X(),this._hideClone(),O("revert"),j.eventCanceled||(Pn?oe.insertBefore(y,Pn):oe.appendChild(y)),T(!0);var R=lr(t,l.draggable);if(!R||qc(n,m,this)&&!R.animated){if(R===y)return T(!1);if(R&&t===n.target&&(i=R),i&&(r=pe(i)),ii(oe,t,y,a,i,r,n,!!i)!==!1)return X(),t.appendChild(y),ce=t,V(),T(!0)}else if(R&&Ec(n,m,this)){var U=dt(t,0,l,!0);if(U===y)return T(!1);if(i=U,r=pe(i),ii(oe,t,y,a,i,r,n,!1)!==!1)return X(),t.insertBefore(y,U),ce=t,V(),T(!0)}else if(i.parentNode===t){r=pe(i);var ue=0,le,E=y.parentNode!==t,C=!kc(y.animated&&y.toRect||a,i.animated&&i.toRect||r,m),M=m?"top":"left",Y=os(i,"top","top")||os(y,"top","top"),q=Y?Y.scrollTop:void 0;Jn!==i&&(le=r[M],It=!1,ni=!C&&l.invertSwap||E),ue=Cc(n,i,r,m,C?1:l.swapThreshold,l.invertedSwapThreshold==null?l.swapThreshold:l.invertedSwapThreshold,ni,Jn===i);var H;if(ue!==0){var fe=Le(y);do fe-=ue,H=ce.children[fe];while(H&&(B(H,"display")==="none"||H===G))}if(ue===0||H===i)return T(!1);Jn=i,Nt=ue;var ke=i.nextElementSibling,Z=!1;Z=ue===1;var ie=ii(oe,t,y,a,i,r,n,Z);if(ie!==!1)return(ie===1||ie===-1)&&(Z=ie===1),Na=!0,setTimeout(Sc,30),X(),Z&&!ke?t.appendChild(y):i.parentNode.insertBefore(y,Z?ke:i),Y&&Fl(Y,0,q-Y.scrollTop),ce=y.parentNode,le!==void 0&&!ni&&(ci=Math.abs(le-pe(i)[M])),V(),T(!0)}if(t.contains(y))return T(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){Q(document,"mousemove",this._onTouchMove),Q(document,"touchmove",this._onTouchMove),Q(document,"pointermove",this._onTouchMove),Q(document,"dragover",jn),Q(document,"mousemove",jn),Q(document,"touchmove",jn)},_offUpEvents:function(){var n=this.el.ownerDocument;Q(n,"mouseup",this._onDrop),Q(n,"touchend",this._onDrop),Q(n,"pointerup",this._onDrop),Q(n,"touchcancel",this._onDrop),Q(document,"selectstart",this)},_onDrop:function(n){var t=this.el,i=this.options;if(je=Le(y),yn=Le(y,i.draggable),De("drop",this,{evt:n}),ce=y&&y.parentNode,je=Le(y),yn=Le(y,i.draggable),j.eventCanceled){this._nulling();return}nt=!1,ni=!1,It=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Ia(this.cloneId),Ia(this._dragStartId),this.nativeDraggable&&(Q(document,"drop",this),Q(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Dt&&B(document.body,"user-select",""),B(y,"transform",""),n&&(yt&&(n.cancelable&&n.preventDefault(),!i.dropBubble&&n.stopPropagation()),G&&G.parentNode&&G.parentNode.removeChild(G),(oe===ce||ye&&ye.lastPutMode!=="clone")&&ge&&ge.parentNode&&ge.parentNode.removeChild(ge),y&&(this.nativeDraggable&&Q(y,"dragend",this),ua(y),y.style["will-change"]="",yt&&!nt&&Be(y,ye?ye.options.ghostClass:this.options.ghostClass,!1),Be(y,this.options.chosenClass,!1),qe({sortable:this,name:"unchoose",toEl:ce,newIndex:null,newDraggableIndex:null,originalEvent:n}),oe!==ce?(je>=0&&(qe({rootEl:ce,name:"add",toEl:ce,fromEl:oe,originalEvent:n}),qe({sortable:this,name:"remove",toEl:ce,originalEvent:n}),qe({rootEl:ce,name:"sort",toEl:ce,fromEl:oe,originalEvent:n}),qe({sortable:this,name:"sort",toEl:ce,originalEvent:n})),ye&&ye.save()):je!==tt&&je>=0&&(qe({sortable:this,name:"update",toEl:ce,originalEvent:n}),qe({sortable:this,name:"sort",toEl:ce,originalEvent:n})),j.active&&((je==null||je===-1)&&(je=tt,yn=zt),qe({sortable:this,name:"end",toEl:ce,originalEvent:n}),this.save()))),this._nulling()},_nulling:function(){De("nulling",this),oe=y=ce=G=Pn=ge=ui=vn=Bn=Oe=yt=je=yn=tt=zt=Jn=Nt=ye=ei=j.dragged=j.ghost=j.clone=j.active=null,Si.forEach(function(n){n.checked=!0}),Si.length=la=oa=0},handleEvent:function(n){switch(n.type){case"drop":case"dragend":this._onDrop(n);break;case"dragenter":case"dragover":y&&(this._onDragOver(n),Ac(n));break;case"selectstart":n.preventDefault();break}},toArray:function(){for(var n=[],t,i=this.el.children,a=0,r=i.length,s=this.options;a<r;a++)t=i[a],nn(t,s.draggable,this.el,!1)&&n.push(t.getAttribute(s.dataIdAttr)||Dc(t));return n},sort:function(n,t){var i={},a=this.el;this.toArray().forEach(function(r,s){var l=a.children[s];nn(l,this.options.draggable,a,!1)&&(i[r]=l)},this),t&&this.captureAnimationState(),n.forEach(function(r){i[r]&&(a.removeChild(i[r]),a.appendChild(i[r]))}),t&&this.animateAll()},save:function(){var n=this.options.store;n&&n.set&&n.set(this)},closest:function(n,t){return nn(n,t||this.options.draggable,this.el,!1)},option:function(n,t){var i=this.options;if(t===void 0)return i[n];var a=Ot.modifyOption(this,n,t);typeof a<"u"?i[n]=a:i[n]=t,n==="group"&&Nl(i)},destroy:function(){De("destroy",this);var n=this.el;n[Te]=null,Q(n,"mousedown",this._onTapStart),Q(n,"touchstart",this._onTapStart),Q(n,"pointerdown",this._onTapStart),this.nativeDraggable&&(Q(n,"dragover",this),Q(n,"dragenter",this)),Array.prototype.forEach.call(n.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Ai.splice(Ai.indexOf(this.el),1),this.el=n=null},_hideClone:function(){if(!vn){if(De("hideClone",this),j.eventCanceled)return;B(ge,"display","none"),this.options.removeCloneOnHide&&ge.parentNode&&ge.parentNode.removeChild(ge),vn=!0}},_showClone:function(n){if(n.lastPutMode!=="clone"){this._hideClone();return}if(vn){if(De("showClone",this),j.eventCanceled)return;y.parentNode==oe&&!this.options.group.revertClone?oe.insertBefore(ge,y):Pn?oe.insertBefore(ge,Pn):oe.appendChild(ge),this.options.group.revertClone&&this.animate(y,ge),B(ge,"display",""),vn=!1}}};function Ac(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function ii(e,n,t,i,a,r,s,l){var o,f=e[Te],u=f.options.onMove,d;return window.CustomEvent&&!mn&&!Xt?o=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(o=document.createEvent("Event"),o.initEvent("move",!0,!0)),o.to=n,o.from=e,o.dragged=t,o.draggedRect=i,o.related=a||n,o.relatedRect=r||pe(n),o.willInsertAfter=l,o.originalEvent=s,e.dispatchEvent(o),u&&(d=u.call(f,o,s)),d}function ua(e){e.draggable=!1}function Sc(){Na=!1}function Ec(e,n,t){var i=pe(dt(t.el,0,t.options,!0)),a=10;return n?e.clientX<i.left-a||e.clientY<i.top&&e.clientX<i.right:e.clientY<i.top-a||e.clientY<i.bottom&&e.clientX<i.left}function qc(e,n,t){var i=pe(lr(t.el,t.options.draggable)),a=10;return n?e.clientX>i.right+a||e.clientX<=i.right&&e.clientY>i.bottom&&e.clientX>=i.left:e.clientX>i.right&&e.clientY>i.top||e.clientX<=i.right&&e.clientY>i.bottom+a}function Cc(e,n,t,i,a,r,s,l){var o=i?e.clientY:e.clientX,f=i?t.height:t.width,u=i?t.top:t.left,d=i?t.bottom:t.right,$=!1;if(!s){if(l&&ci<f*a){if(!It&&(Nt===1?o>u+f*r/2:o<d-f*r/2)&&(It=!0),It)$=!0;else if(Nt===1?o<u+ci:o>d-ci)return-Nt}else if(o>u+f*(1-a)/2&&o<d-f*(1-a)/2)return Fc(n)}return $=$||s,$&&(o<u+f*r/2||o>d-f*r/2)?o>u+f/2?1:-1:0}function Fc(e){return Le(y)<Le(e)?1:-1}function Dc(e){for(var n=e.tagName+e.className+e.src+e.href+e.textContent,t=n.length,i=0;t--;)i+=n.charCodeAt(t);return i.toString(36)}function Rc(e){Si.length=0;for(var n=e.getElementsByTagName("input"),t=n.length;t--;){var i=n[t];i.checked&&Si.push(i)}}function gi(e){return setTimeout(e,0)}function Ia(e){return clearTimeout(e)}Oi&&ne(document,"touchmove",function(e){(j.active||nt)&&e.cancelable&&e.preventDefault()});j.utils={on:ne,off:Q,css:B,find:ql,is:function(n,t){return!!nn(n,t,n,!1)},extend:$c,throttle:Cl,closest:nn,toggleClass:Be,clone:Dl,index:Le,nextTick:gi,cancelNextTick:Ia,detectDirection:zl,getChild:dt};j.get=function(e){return e[Te]};j.mount=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];n[0].constructor===Array&&(n=n[0]),n.forEach(function(i){if(!i.prototype||!i.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));i.utils&&(j.utils=ln(ln({},j.utils),i.utils)),Ot.mount(i)})};j.create=function(e,n){return new j(e,n)};j.version=uc;var me=[],vt,Ba,ja=!1,ca,ga,Ei,At;function zc(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this))}return e.prototype={dragStarted:function(t){var i=t.originalEvent;this.sortable.nativeDraggable?ne(document,"dragover",this._handleAutoScroll):this.options.supportPointer?ne(document,"pointermove",this._handleFallbackAutoScroll):i.touches?ne(document,"touchmove",this._handleFallbackAutoScroll):ne(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var i=t.originalEvent;!this.options.dragOverBubble&&!i.rootEl&&this._handleAutoScroll(i)},drop:function(){this.sortable.nativeDraggable?Q(document,"dragover",this._handleAutoScroll):(Q(document,"pointermove",this._handleFallbackAutoScroll),Q(document,"touchmove",this._handleFallbackAutoScroll),Q(document,"mousemove",this._handleFallbackAutoScroll)),ds(),di(),hc()},nulling:function(){Ei=Ba=vt=ja=At=ca=ga=null,me.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,i){var a=this,r=(t.touches?t.touches[0]:t).clientX,s=(t.touches?t.touches[0]:t).clientY,l=document.elementFromPoint(r,s);if(Ei=t,i||this.options.forceAutoScrollFallback||Xt||mn||Dt){da(t,this.options,l,i);var o=Sn(l,!0);ja&&(!At||r!==ca||s!==ga)&&(At&&ds(),At=setInterval(function(){var f=Sn(document.elementFromPoint(r,s),!0);f!==o&&(o=f,di()),da(t,a.options,f,i)},10),ca=r,ga=s)}else{if(!this.options.bubbleScroll||Sn(l,!0)===rn()){di();return}da(t,this.options,Sn(l,!1),!1)}}},$n(e,{pluginName:"scroll",initializeByDefault:!0})}function di(){me.forEach(function(e){clearInterval(e.pid)}),me=[]}function ds(){clearInterval(At)}var da=Cl(function(e,n,t,i){if(n.scroll){var a=(e.touches?e.touches[0]:e).clientX,r=(e.touches?e.touches[0]:e).clientY,s=n.scrollSensitivity,l=n.scrollSpeed,o=rn(),f=!1,u;Ba!==t&&(Ba=t,di(),vt=n.scroll,u=n.scrollFn,vt===!0&&(vt=Sn(t,!0)));var d=0,$=vt;do{var m=$,p=pe(m),v=p.top,O=p.bottom,X=p.left,T=p.right,V=p.width,R=p.height,U=void 0,ue=void 0,le=m.scrollWidth,E=m.scrollHeight,C=B(m),M=m.scrollLeft,Y=m.scrollTop;m===o?(U=V<le&&(C.overflowX==="auto"||C.overflowX==="scroll"||C.overflowX==="visible"),ue=R<E&&(C.overflowY==="auto"||C.overflowY==="scroll"||C.overflowY==="visible")):(U=V<le&&(C.overflowX==="auto"||C.overflowX==="scroll"),ue=R<E&&(C.overflowY==="auto"||C.overflowY==="scroll"));var q=U&&(Math.abs(T-a)<=s&&M+V<le)-(Math.abs(X-a)<=s&&!!M),H=ue&&(Math.abs(O-r)<=s&&Y+R<E)-(Math.abs(v-r)<=s&&!!Y);if(!me[d])for(var fe=0;fe<=d;fe++)me[fe]||(me[fe]={});(me[d].vx!=q||me[d].vy!=H||me[d].el!==m)&&(me[d].el=m,me[d].vx=q,me[d].vy=H,clearInterval(me[d].pid),(q!=0||H!=0)&&(f=!0,me[d].pid=setInterval((function(){i&&this.layer===0&&j.active._onTouchMove(Ei);var ke=me[this.layer].vy?me[this.layer].vy*l:0,Z=me[this.layer].vx?me[this.layer].vx*l:0;typeof u=="function"&&u.call(j.dragged.parentNode[Te],Z,ke,e,Ei,me[this.layer].el)!=="continue"||Fl(me[this.layer].el,Z,ke)}).bind({layer:d}),24))),d++}while(n.bubbleScroll&&$!==o&&($=Sn($,!1)));ja=f}},30),jl=function(n){var t=n.originalEvent,i=n.putSortable,a=n.dragEl,r=n.activeSortable,s=n.dispatchSortableEvent,l=n.hideGhostForTarget,o=n.unhideGhostForTarget;if(t){var f=i||r;l();var u=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,d=document.elementFromPoint(u.clientX,u.clientY);o(),f&&!f.el.contains(d)&&(s("spill"),this.onSpill({dragEl:a,putSortable:i}))}};function or(){}or.prototype={startIndex:null,dragStart:function(n){var t=n.oldDraggableIndex;this.startIndex=t},onSpill:function(n){var t=n.dragEl,i=n.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var a=dt(this.sortable.el,this.startIndex,this.options);a?this.sortable.el.insertBefore(t,a):this.sortable.el.appendChild(t),this.sortable.animateAll(),i&&i.animateAll()},drop:jl};$n(or,{pluginName:"revertOnSpill"});function fr(){}fr.prototype={onSpill:function(n){var t=n.dragEl,i=n.putSortable,a=i||this.sortable;a.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),a.animateAll()},drop:jl};$n(fr,{pluginName:"removeOnSpill"});j.mount(new zc);j.mount(fr,or);function $a(e){e.parentElement!==null&&e.parentElement.removeChild(e)}function $s(e,n,t){const i=t===0?e.children[0]:e.children[t-1].nextSibling;e.insertBefore(n,i)}function Nc(){return typeof window<"u"?window.console:global.console}const Ic=Nc();function Bc(e){const n=Object.create(null);return function(i){return n[i]||(n[i]=e(i))}}const jc=/-(\w)/g,Pc=Bc(e=>e.replace(jc,(n,t)=>t.toUpperCase())),Pl=["Start","Add","Remove","Update","End"],Tl=["Choose","Unchoose","Sort","Filter","Clone"],Ml=["Move"],Tc=[Ml,Pl,Tl].flatMap(e=>e).map(e=>`on${e}`),Pa={manage:Ml,manageAndEmit:Pl,emit:Tl};function Mc(e){return Tc.indexOf(e)!==-1}const Gc=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];function Lc(e){return Gc.includes(e)}function Zc(e){return["transition-group","TransitionGroup"].includes(e)}function Gl(e){return["id","class","role","style"].includes(e)||e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("on")}function Ll(e){return e.reduce((n,[t,i])=>(n[t]=i,n),{})}function Xc({$attrs:e,componentData:n={}}){return{...Ll(Object.entries(e).filter(([i,a])=>Gl(i))),...n}}function Oc({$attrs:e,callBackBuilder:n}){const t=Ll(Zl(e));Object.entries(n).forEach(([a,r])=>{Pa[a].forEach(s=>{t[`on${s}`]=r(s)})});const i=`[data-draggable]${t.draggable||""}`;return{...t,draggable:i}}function Zl(e){return Object.entries(e).filter(([n,t])=>!Gl(n)).map(([n,t])=>[Pc(n),t]).filter(([n,t])=>!Mc(n))}const hs=({el:e})=>e,Uc=(e,n)=>e.__draggable_context=n,ms=e=>e.__draggable_context;class Wc{constructor({nodes:{header:n,default:t,footer:i},root:a,realList:r}){this.defaultNodes=t,this.children=[...n,...t,...i],this.externalComponent=a.externalComponent,this.rootTransition=a.transition,this.tag=a.tag,this.realList=r}get _isRootComponent(){return this.externalComponent||this.rootTransition}render(n,t){const{tag:i,children:a,_isRootComponent:r}=this;return n(i,t,r?{default:()=>a}:a)}updated(){const{defaultNodes:n,realList:t}=this;n.forEach((i,a)=>{Uc(hs(i),{element:t[a],index:a})})}getUnderlyingVm(n){return ms(n)}getVmIndexFromDomIndex(n,t){const{defaultNodes:i}=this,{length:a}=i,r=t.children,s=r.item(n);if(s===null)return a;const l=ms(s);if(l)return l.index;if(a===0)return 0;const o=hs(i[0]),f=[...r].findIndex(u=>u===o);return n<f?0:a}}function Vc(e,n){const t=e[n];return t?t():[]}function Hc({$slots:e,realList:n,getKey:t}){const i=n||[],[a,r]=["header","footer"].map(o=>Vc(e,o)),{item:s}=e;if(!s)throw new Error("draggable element must have an item slot");const l=i.flatMap((o,f)=>s({element:o,index:f}).map(u=>(u.key=t(o),u.props={...u.props||{},"data-draggable":!0},u)));if(l.length!==i.length)throw new Error("Item slot must have only one child");return{header:a,footer:r,default:l}}function Kc(e){const n=Zc(e),t=!Lc(e)&&!n;return{transition:n,externalComponent:t,tag:t?Tt(e):n?Au:e}}function Yc({$slots:e,tag:n,realList:t,getKey:i}){const a=Hc({$slots:e,realList:t,getKey:i}),r=Kc(n);return new Wc({nodes:a,root:r,realList:t})}function Xl(e,n){ji(()=>this.$emit(e.toLowerCase(),n))}function Ol(e){return(n,t)=>{if(this.realList!==null)return this[`onDrag${e}`](n,t)}}function Qc(e){const n=Ol.call(this,e);return(t,i)=>{n.call(this,t,i),Xl.call(this,e,t)}}let ha=null;const Jc={list:{type:Array,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},itemKey:{type:[String,Function],required:!0},clone:{type:Function,default:e=>e},tag:{type:String,default:"div"},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null}},eg=["update:modelValue","change",...[...Pa.manageAndEmit,...Pa.emit].map(e=>e.toLowerCase())],Ul=of({name:"draggable",inheritAttrs:!1,props:Jc,emits:eg,data(){return{error:!1}},render(){try{this.error=!1;const{$slots:e,$attrs:n,tag:t,componentData:i,realList:a,getKey:r}=this,s=Yc({$slots:e,tag:t,realList:a,getKey:r});this.componentStructure=s;const l=Xc({$attrs:n,componentData:i});return s.render(Mr,l)}catch(e){return this.error=!0,Mr("pre",{style:{color:"red"}},e.stack)}},created(){this.list!==null&&this.modelValue!==null&&Ic.error("modelValue and list props are mutually exclusive! Please set one or another.")},mounted(){if(this.error)return;const{$attrs:e,$el:n,componentStructure:t}=this;t.updated();const i=Oc({$attrs:e,callBackBuilder:{manageAndEmit:r=>Qc.call(this,r),emit:r=>Xl.bind(this,r),manage:r=>Ol.call(this,r)}}),a=n.nodeType===1?n:n.parentElement;this._sortable=new j(a,i),this.targetDomElement=a,a.__draggable_component__=this},updated(){this.componentStructure.updated()},beforeUnmount(){this._sortable!==void 0&&this._sortable.destroy()},computed:{realList(){const{list:e}=this;return e||this.modelValue},getKey(){const{itemKey:e}=this;return typeof e=="function"?e:n=>n[e]}},watch:{$attrs:{handler(e){const{_sortable:n}=this;n&&Zl(e).forEach(([t,i])=>{n.option(t,i)})},deep:!0}},methods:{getUnderlyingVm(e){return this.componentStructure.getUnderlyingVm(e)||null},getUnderlyingPotencialDraggableComponent(e){return e.__draggable_component__},emitChanges(e){ji(()=>this.$emit("change",e))},alterList(e){if(this.list){e(this.list);return}const n=[...this.modelValue];e(n),this.$emit("update:modelValue",n)},spliceList(){const e=n=>n.splice(...arguments);this.alterList(e)},updatePosition(e,n){const t=i=>i.splice(n,0,i.splice(e,1)[0]);this.alterList(t)},getRelatedContextFromMoveEvent({to:e,related:n}){const t=this.getUnderlyingPotencialDraggableComponent(e);if(!t)return{component:t};const i=t.realList,a={list:i,component:t};return e!==n&&i?{...t.getUnderlyingVm(n)||{},...a}:a},getVmIndexFromDomIndex(e){return this.componentStructure.getVmIndexFromDomIndex(e,this.targetDomElement)},onDragStart(e){this.context=this.getUnderlyingVm(e.item),e.item._underlying_vm_=this.clone(this.context.element),ha=e.item},onDragAdd(e){const n=e.item._underlying_vm_;if(n===void 0)return;$a(e.item);const t=this.getVmIndexFromDomIndex(e.newIndex);this.spliceList(t,0,n);const i={element:n,newIndex:t};this.emitChanges({added:i})},onDragRemove(e){if($s(this.$el,e.item,e.oldIndex),e.pullMode==="clone"){$a(e.clone);return}const{index:n,element:t}=this.context;this.spliceList(n,1);const i={element:t,oldIndex:n};this.emitChanges({removed:i})},onDragUpdate(e){$a(e.item),$s(e.from,e.item,e.oldIndex);const n=this.context.index,t=this.getVmIndexFromDomIndex(e.newIndex);this.updatePosition(n,t);const i={element:this.context.element,oldIndex:n,newIndex:t};this.emitChanges({moved:i})},computeFutureIndex(e,n){if(!e.element)return 0;const t=[...n.to.children].filter(s=>s.style.display!=="none"),i=t.indexOf(n.related),a=e.component.getVmIndexFromDomIndex(i);return t.indexOf(ha)!==-1||!n.willInsertAfter?a:a+1},onDragMove(e,n){const{move:t,realList:i}=this;if(!t||!i)return!0;const a=this.getRelatedContextFromMoveEvent(e),r=this.computeFutureIndex(a,e),s={...this.context,futureIndex:r},l={...e,relatedContext:a,draggedContext:s};return t(l,n)},onDragEnd(){ha=null}}}),Ui=(e,n)=>{const t=e.__vccOpts||e;for(const[i,a]of n)t[i]=a;return t},ng={name:"ExerTagFilter",order:1,components:{draggable:Ul},data(){return{isRowVisible:{1:!0},mainStore:Xi()}},methods:{toggleRowVisibility:function(e){this.isRowVisible[e]=!this.isRowVisible[e]}}},tg=D("h3",{class:"text-lg"},"Exercises Filter",-1);function ig(e,n,t,i,a,r){return Ae(),Ce("div",null,[D("div",null,[D("button",{onClick:n[0]||(n[0]=s=>r.toggleRowVisibility(1)),class:"text-black focus:outline-none"},[D("span",{class:de(["symbol",{hidden:!a.isRowVisible[1]}])},"▲",2),D("span",{class:de(["symbol",{hidden:a.isRowVisible[1]}])},"▼",2)]),tg]),D("div",{class:de({hidden:!a.isRowVisible[1]})},"dinmi mueter",2)])}const ag=Ui(ng,[["render",ig]]),rg={name:"ExerMenu",display:"Exercises Selector Menu",order:1,components:{draggable:Ul,ExerTagFilter:ag},data(){return{list1:[],list2:tc().exercises,isRowVisible:{1:!0},mainStore:Xi()}},methods:{toggleRowVisibility:function(e){this.isRowVisible[e]=!this.isRowVisible[e]},log:function(e){this.mainStore.set(this.list1)}}},sg=D("h3",{class:"text-lg"},"Exercises Configuration",-1),lg={class:"flex"},og={class:"w-1/2 p-4"},fg=D("h2",{class:"text-lg font-bold"},"Filter",-1),ug=D("h2",{class:"text-lg font-bold"},"Available Items",-1),cg={class:"p-2 bg-white border mb-2 cursor-move"},gg=D("br",null,null,-1),dg=["src"],$g={class:"w-1/2 p-4"},hg=D("h2",{class:"text-lg font-bold"},"Selected Items",-1),mg={class:"p-2 bg-white border mb-2 cursor-move"},bg=["src"];function _g(e,n,t,i,a,r){const s=Tt("ExerTagFilter"),l=Tt("draggable");return Ae(),Ce("div",null,[be(s),D("div",null,[D("button",{onClick:n[0]||(n[0]=o=>r.toggleRowVisibility(1)),class:"text-black focus:outline-none"},[D("span",{class:de(["symbol",{hidden:!a.isRowVisible[1]}])},"▲",2),D("span",{class:de(["symbol",{hidden:a.isRowVisible[1]}])},"▼",2)]),sg]),D("div",lg,[D("div",og,[D("div",{class:de(["border p-4 bg-gray-100 text-gray-800 mb-4",{hidden:!a.isRowVisible[1]}])},[fg,Fa(" Here be dragons or filters. ")],2),D("div",{class:de(["border p-4 bg-gray-100 text-gray-800",{hidden:!a.isRowVisible[1]}])},[ug,be(l,{class:"list-group",list:a.list2,group:"people",itemKey:"name"},{item:wa(({element:o,index:f})=>[D("div",cg,[Fa(An(o.title)+" ",1),gg,D("img",{src:`previews/${o.preview}`},null,8,dg)])]),_:1},8,["list"])],2)]),D("div",$g,[D("div",{class:de(["border p-4 bg-gray-100 text-gray-800",{hidden:!a.isRowVisible[1]}])},[hg,be(l,{class:"list-group",list:a.list1,group:"people",onChange:r.log,itemKey:"name"},{item:wa(({element:o})=>[D("div",mg,[D("img",{src:`previews/${o.preview}`},null,8,bg)])]),_:1},8,["list","onChange"])],2)])])])}const xg=Ui(rg,[["render",_g]]),pg={data(){return{selectedOption:-1,options:ic(),languageoptions:[{key:"en",desc:"English"},{key:"de",desc:"Deutsch"}],selectedLanguage:1,strings:null,stringsArr:{},mainStore:Xi(),isRowVisible:{1:!0}}},methods:{updateStrings(){const e=this.options[this.selectedOption];e?(e.strings,this.mainStore.templateUuid=e.uuid,this.mainStore.langCode=this.languageoptions[this.selectedLanguage].key,this.strings=new Map(e.fields)):this.strings=new Map},updateStringMap(){let e=new Map;for(let[n,t]of Object.entries(this.stringsArr))e.set(n,t);this.mainStore.setTemplateOptions(e)},toggleRowVisibility:function(e){this.isRowVisible[e]=!this.isRowVisible[e]}}},wg={class:"grid gap-4"},kg={class:"flex justify-between items-center"},yg=D("h3",{class:"text-lg"},"Template Configuration",-1),vg=["value"],Ag=["value"],Sg=D("p",{class:"text-gray-700"},"Resulting Strings:",-1),Eg={key:0,class:"block text-sm font-medium text-gray-700"},qg=["onUpdate:modelValue"];function Cg(e,n,t,i,a,r){return Ae(),Ce("div",wg,[D("div",kg,[yg,D("button",{onClick:n[0]||(n[0]=s=>r.toggleRowVisibility(1)),class:"text-white focus:outline-none"},[D("span",{class:de(["symbol",{hidden:!a.isRowVisible[1]}])},"▲",2),D("span",{class:de(["symbol",{hidden:a.isRowVisible[1]}])},"▼",2)])]),D("label",{class:de(["block text-sm font-medium text-gray-700 mb-2",{hidden:!a.isRowVisible[1]}])}," Select output language: ",2),en(D("select",{"onUpdate:modelValue":n[1]||(n[1]=s=>a.selectedLanguage=s),onChange:n[2]||(n[2]=(...s)=>r.updateStrings&&r.updateStrings(...s)),class:de(["w-full border p-2 rounded-md text-gray-700",{hidden:!a.isRowVisible[1]}])},[(Ae(!0),Ce(Fe,null,li(a.languageoptions,(s,l)=>(Ae(),Ce("option",{key:l,value:l},An(s.desc),9,vg))),128))],34),[[ns,a.selectedLanguage]]),D("label",{class:de(["block text-sm font-medium text-gray-700 mb-2",{hidden:!a.isRowVisible[1]}])}," Select a template: ",2),en(D("select",{"onUpdate:modelValue":n[3]||(n[3]=s=>a.selectedOption=s),onChange:n[4]||(n[4]=(...s)=>r.updateStrings&&r.updateStrings(...s)),class:de(["w-full border p-2 rounded-md text-gray-700",{hidden:!a.isRowVisible[1]}])},[(Ae(!0),Ce(Fe,null,li(a.options,(s,l)=>(Ae(),Ce("option",{key:l,value:l},An(l)+" – "+An(s.title),9,Ag))),128))],34),[[ns,a.selectedOption]]),D("div",{class:de(["mt-4",{hidden:!a.isRowVisible[1]}])},[Sg,(Ae(!0),Ce(Fe,null,li(a.strings,(s,l)=>(Ae(),Ce("div",{key:l,class:"mt-2"},[s[1]?(Ae(),Ce("label",Eg,An(s[1])+": ",1)):Br("",!0),s[1]?en((Ae(),Ce("input",{key:1,"onUpdate:modelValue":o=>a.stringsArr[s[0]]=o,type:"text",onInput:n[5]||(n[5]=(...o)=>r.updateStringMap&&r.updateStringMap(...o)),onChange:n[6]||(n[6]=(...o)=>r.updateStringMap&&r.updateStringMap(...o)),class:"w-full border p-2 text-gray-700"},null,40,qg)),[[Du,a.stringsArr[s[0]]]]):Br("",!0)]))),128))],2)])}const Fg=Ui(pg,[["render",Cg]]),Dg={name:"GenViewDocument",components:{TheMenu:xg,TemplateMenu:Fg},setup(){const e=wn(),n=Xi(),t=wn(),i=wn(),a=wn([{name:"Template"},{name:"Exercises"},{name:"Exercise PDF"},{name:"Solutions PDF"},{name:"Configuration"},{name:"Source"},{name:"Log"}]),r=wn(0),s=u=>{r.value=u},l=wn(!1);return Qa(()=>{e.value=n.items}),St(n.$state,u=>{t.value=JSON.stringify(u);let d=n.generateConfig();d.docType=sr.Source,aa(d).then($=>{i.value=$})}),{items:e,compilebtn:async()=>{const u=document.getElementById("pdfbox"),d=document.getElementById("pdflog");l.value=!0;let $=await aa(n.generateConfig());if(l.value=!1,u&&$.status==0){const m=new Blob([$.pdf],{type:"application/pdf"}),p=URL.createObjectURL(m);setTimeout(()=>{URL.revokeObjectURL(p)},3e4),console.log(p),u.innerHTML=`<embed src="${p}" width="100%" style="height: 100vh;" type="application/pdf">`}d.innerHTML=`${$.log}`},compilebtnsol:async()=>{const u=document.getElementById("pdfsolbox"),d=document.getElementById("pdflog");l.value=!0;let $=await aa(n.generateConfig(!0));if(l.value=!1,u&&$.status==0){const m=new Blob([$.pdf],{type:"application/pdf"}),p=URL.createObjectURL(m);setTimeout(()=>{URL.revokeObjectURL(p)},3e4),console.log(p),u.innerHTML=`<embed src="${p}" width="100%" style="height: 100vh;" type="application/pdf">`}d.innerHTML=`${$.log}`},tabs:a,selectedTab:ir(()=>r.value),selectTab:s,pdfConfig:t,pdfSource:i,isButtonDisabled:l}}},Rg={class:"flex p-4 space-x-4 bg-gray-400"},zg={class:"pr-5"},Ng=["onClick"],Ig={class:"p-4"},Bg={class:"mt-4"},jg={class:"mt-4"},Pg={class:"mt-4"},Tg=D("div",{class:"p-4",id:"pdfbox"},null,-1),Mg=[Tg],Gg={class:"mt-4"},Lg=D("div",{class:"p-4",id:"pdfsolbox"},null,-1),Zg=[Lg],Xg={class:"mt-4"},Og={class:"p-4",id:"pdfconfig"},Ug={class:"mt-4",style:{"overflow-x":"auto"}},Wg={class:"p-4",id:"pdfsource"},Vg={style:{"white-space":"pre","font-family":"monospace"}},Hg={class:"mt-4"},Kg=D("div",{class:"p-4",style:{"white-space":"pre","font-family":"monospace"},id:"pdflog"},null,-1),Yg=[Kg];function Qg(e,n,t,i,a,r){const s=Tt("TemplateMenu"),l=Tt("TheMenu");return Ae(),Ce("div",null,[D("div",Rg,[D("div",zg,[D("button",{class:de(["p-2","rounded",{"bg-gray-500":i.isButtonDisabled},{"bg-blue-500 text-white":!i.isButtonDisabled}]),type:"button",onClick:n[0]||(n[0]=(...o)=>i.compilebtn&&i.compilebtn(...o)),id:"compilebtn"}," Compile ",2),D("button",{class:de(["p-2","mx-5","rounded",{"bg-gray-500":i.isButtonDisabled},{"bg-blue-500 text-white":!i.isButtonDisabled}]),type:"button",onClick:n[1]||(n[1]=(...o)=>i.compilebtnsol&&i.compilebtnsol(...o)),id:"compilebtnsol"}," Compile Solution ",2)]),(Ae(!0),Ce(Fe,null,li(i.tabs,(o,f)=>(Ae(),Ce("div",{key:f,onClick:u=>i.selectTab(f),class:de({"bg-gray-400 text-black":i.selectedTab===f,"bg-gray-200":i.selectedTab!==f,"cursor-pointer":!0,"p-2":!0})},An(o.name),11,Ng))),128))]),D("div",Ig,[en(D("div",Bg,[be(s)],512),[[In,i.selectedTab===0]]),en(D("div",jg,[be(l)],512),[[In,i.selectedTab===1]]),en(D("div",Pg,Mg,512),[[In,i.selectedTab===2]]),en(D("div",Gg,Zg,512),[[In,i.selectedTab===3]]),en(D("div",Xg,[D("div",Og,An(i.pdfConfig),1)],512),[[In,i.selectedTab===4]]),en(D("div",Ug,[D("div",Wg,[D("div",Vg,An(i.pdfSource),1)])],512),[[In,i.selectedTab===5]]),en(D("div",Hg,Yg,512),[[In,i.selectedTab===6]])])])}const Jg=Ui(Dg,[["render",Qg]]),ed={class:"flex flex-col min-h-screen"},nd=D("header",{class:"bg-gray-500 p-4 text-white"},[D("h1",{class:"text-2xl"},"Exercise Collection Generator")],-1),td={class:"flex flex-1"},id={class:"flex-1"},ad={__name:"App",setup(e){return(n,t)=>(Ae(),Ce("div",ed,[nd,D("div",td,[D("main",id,[be(Jg)])])]))}};Nu(ad).use(ju()).mount("#app")});export default rd();
