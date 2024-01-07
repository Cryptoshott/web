"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747],{44523:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(719),u={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=(e,n)=>{let t=(0,r.forwardRef)(({color:t="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:c,children:a,...f},s)=>(0,r.createElement)("svg",{ref:s,...u,width:l,height:l,stroke:t,strokeWidth:c?24*Number(i)/Number(l):i,className:`lucide lucide-${o(e)}`,...f},[...n.map(([e,n])=>(0,r.createElement)(e,n)),...(Array.isArray(a)?a:[a])||[]]));return t.displayName=`${e}`,t}},83082:function(e,n,t){t.d(n,{Z:function(){return r}});function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}},91036:function(e,n,t){t.d(n,{M:function(){return r}});function r(e,n,{checkForDefaultPrevented:t=!0}={}){return function(r){if(null==e||e(r),!1===t||!r.defaultPrevented)return null==n?void 0:n(r)}}},61157:function(e,n,t){t.d(n,{F:function(){return u},e:function(){return o}});var r=t(719);function u(...e){return n=>e.forEach(e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)})}function o(...e){return(0,r.useCallback)(u(...e),e)}},1976:function(e,n,t){t.d(n,{b:function(){return o},k:function(){return u}});var r=t(719);function u(e,n){let t=(0,r.createContext)(n);function u(e){let{children:n,...u}=e,o=(0,r.useMemo)(()=>u,Object.values(u));return(0,r.createElement)(t.Provider,{value:o},n)}return u.displayName=e+"Provider",[u,function(u){let o=(0,r.useContext)(t);if(o)return o;if(void 0!==n)return n;throw Error(`\`${u}\` must be used within \`${e}\``)}]}function o(e,n=[]){let t=[],u=()=>{let n=t.map(e=>(0,r.createContext)(e));return function(t){let u=(null==t?void 0:t[e])||n;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...t,[e]:u}}),[t,u])}};return u.scopeName=e,[function(n,u){let o=(0,r.createContext)(u),l=t.length;function i(n){let{scope:t,children:u,...i}=n,c=(null==t?void 0:t[e][l])||o,a=(0,r.useMemo)(()=>i,Object.values(i));return(0,r.createElement)(c.Provider,{value:a},u)}return t=[...t,u],i.displayName=n+"Provider",[i,function(t,i){let c=(null==i?void 0:i[e][l])||o,a=(0,r.useContext)(c);if(a)return a;if(void 0!==u)return u;throw Error(`\`${t}\` must be used within \`${n}\``)}]},function(...e){let n=e[0];if(1===e.length)return n;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=t.reduce((n,{useScope:t,scopeName:r})=>{let u=t(e)[`__scope${r}`];return{...n,...u}},{});return(0,r.useMemo)(()=>({[`__scope${n.scopeName}`]:u}),[u])}};return t.scopeName=n.scopeName,t}(u,...n)]}},7650:function(e,n,t){t.d(n,{WV:function(){return i},jH:function(){return c}});var r=t(83082),u=t(719),o=t(86731),l=t(32820);let i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,n)=>{let t=(0,u.forwardRef)((e,t)=>{let{asChild:o,...i}=e,c=o?l.g7:n;return(0,u.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,u.createElement)(c,(0,r.Z)({},i,{ref:t}))});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function c(e,n){e&&(0,o.flushSync)(()=>e.dispatchEvent(n))}},32820:function(e,n,t){t.d(n,{A4:function(){return c},g7:function(){return l}});var r=t(83082),u=t(719),o=t(61157);let l=(0,u.forwardRef)((e,n)=>{let{children:t,...o}=e,l=u.Children.toArray(t),c=l.find(a);if(c){let e=c.props.children,t=l.map(n=>n!==c?n:u.Children.count(e)>1?u.Children.only(null):(0,u.isValidElement)(e)?e.props.children:null);return(0,u.createElement)(i,(0,r.Z)({},o,{ref:n}),(0,u.isValidElement)(e)?(0,u.cloneElement)(e,void 0,t):null)}return(0,u.createElement)(i,(0,r.Z)({},o,{ref:n}),t)});l.displayName="Slot";let i=(0,u.forwardRef)((e,n)=>{let{children:t,...r}=e;return(0,u.isValidElement)(t)?(0,u.cloneElement)(t,{...function(e,n){let t={...n};for(let r in n){let u=e[r],o=n[r];/^on[A-Z]/.test(r)?u&&o?t[r]=(...e)=>{o(...e),u(...e)}:u&&(t[r]=u):"style"===r?t[r]={...u,...o}:"className"===r&&(t[r]=[u,o].filter(Boolean).join(" "))}return{...e,...t}}(r,t.props),ref:n?(0,o.F)(n,t.ref):t.ref}):u.Children.count(t)>1?u.Children.only(null):null});i.displayName="SlotClone";let c=({children:e})=>(0,u.createElement)(u.Fragment,null,e);function a(e){return(0,u.isValidElement)(e)&&e.type===c}},30812:function(e,n,t){t.d(n,{W:function(){return u}});var r=t(719);function u(e){let n=(0,r.useRef)(e);return(0,r.useEffect)(()=>{n.current=e}),(0,r.useMemo)(()=>(...e)=>{var t;return null===(t=n.current)||void 0===t?void 0:t.call(n,...e)},[])}},71815:function(e,n,t){t.d(n,{T:function(){return o}});var r=t(719),u=t(30812);function o({prop:e,defaultProp:n,onChange:t=()=>{}}){let[o,l]=function({defaultProp:e,onChange:n}){let t=(0,r.useState)(e),[o]=t,l=(0,r.useRef)(o),i=(0,u.W)(n);return(0,r.useEffect)(()=>{l.current!==o&&(i(o),l.current=o)},[o,l,i]),t}({defaultProp:n,onChange:t}),i=void 0!==e,c=i?e:o,a=(0,u.W)(t);return[c,(0,r.useCallback)(n=>{if(i){let t="function"==typeof n?n(e):n;t!==e&&a(t)}else l(n)},[i,e,l,a])]}},73360:function(e,n,t){t.d(n,{b:function(){return u}});var r=t(719);let u=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}}}]);