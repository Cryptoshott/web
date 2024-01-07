(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47],{44523:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var r=s(719),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n=(e,t)=>{let s=(0,r.forwardRef)(({color:s="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:l,children:d,...u},c)=>(0,r.createElement)("svg",{ref:c,...a,width:n,height:n,stroke:s,strokeWidth:l?24*Number(i)/Number(n):i,className:`lucide lucide-${o(e)}`,...u},[...t.map(([e,t])=>(0,r.createElement)(e,t)),...(Array.isArray(d)?d:[d])||[]]));return s.displayName=`${e}`,s}},78915:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});let r=(0,s(44523).Z)("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]])},92310:function(e,t,s){Promise.resolve().then(s.bind(s,25578))},25578:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var r=s(18038),a=s(2587),o=s(2752),n=s(78915),i=s(91954),l=s(719),d=s(88895),u=s(82103),c=s.n(u);function m(){let[e,t]=(0,l.useState)(!1),{user:s,sendUserPasswordReset:u}=(0,a.useAuth)(),{toast:m}=(0,o.pm)(),f=(0,i.useRouter)(),{register:h,handleSubmit:p,formState:{errors:x}}=(0,d.cI)(),g=async e=>{t(!0);try{await u(e.emailAddress),m({title:"Password Reset Email Sent.",description:"We've sent you an email with a link to reset your password.",status:"success",duration:9e3,isClosable:!0}),f.push("/auth/signin")}catch(e){t(!1),console.log(e),m({title:"Something Went Wrong.",description:"We couldn't send you an email with a link to reset your password.",status:"error",duration:9e3,isClosable:!0,variant:"destructive"})}};return(0,r.jsxs)("div",{className:"flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full max-w-md mx-auto space-y-8 text-center",children:[(0,r.jsx)(c(),{src:logo,height:60,width:140,alt:"Digital Exchange Logo"}),(0,r.jsx)("h2",{className:"mt-6 text-3xl font-extrabold text-gray-900",children:"Forgot your password?"}),(0,r.jsx)("p",{className:"mt-2 text-sm text-center text-gray-600",children:"No problem. Just let us know your email address and we'll email you a link to reset your password."})]}),(0,r.jsx)("form",{onSubmit:p(g),className:"box-border w-full max-w-md p-12 mx-auto rounded-lg shadow-lg",children:(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"emailAddress",className:"block font-medium text-gray-700",children:"Email Address"}),(0,r.jsx)("input",{type:"email",id:"emailAddress",autoComplete:"email",required:!0,...h("emailAddress",{required:"Please enter your email address",pattern:{value:/^\S+@\S+$/i,message:"Please enter a valid email address"}}),className:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-kondocho-500 focus:border-kondocho-500 sm:text-sm"}),x.emailAddress&&(0,r.jsx)("p",{className:"mt-2 text-sm text-red-600",children:x.emailAddress.message})]}),e?(0,r.jsx)("div",{className:"flex justify-center mt-6",children:(0,r.jsx)("div",{className:"spinner"})}):(0,r.jsx)("button",{className:"block w-full px-4 py-3 mt-6 font-semibold text-white rounded-lg bg-kondocho-500 hover:bg-kondocho-400 focus:bg-kondocho-400",type:"submit",children:"Send Password Reset Email"})]})}),(0,r.jsx)("div",{className:"flex flex-col items-center justify-center w-full max-w-md mx-auto space-y-8 text-center",children:(0,r.jsxs)("p",{className:"mt-2 text-sm text-center text-gray-600",children:["Remember your password?"," ",(0,r.jsx)(n.Z,{href:"/auth/signin",className:"font-medium text-kondocho-600 hover:text-kondocho-500",children:"Sign in"})]})})]})}},2752:function(e,t,s){"use strict";s.d(t,{pm:function(){return m}});var r=s(719);let a=0,o=new Map,n=e=>{if(o.has(e))return;let t=setTimeout(()=>{o.delete(e),u({type:"REMOVE_TOAST",toastId:e})},1e6);o.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?n(s):e.toasts.forEach(e=>{n(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],d={toasts:[]};function u(e){d=i(d,e),l.forEach(e=>{e(d)})}function c(e){let{...t}=e,s=(a=(a+1)%Number.MAX_VALUE).toString(),r=()=>u({type:"DISMISS_TOAST",toastId:s});return u({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||r()}}}),{id:s,dismiss:r,update:e=>u({type:"UPDATE_TOAST",toast:{...e,id:s}})}}function m(){let[e,t]=r.useState(d);return r.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:c,dismiss:e=>u({type:"DISMISS_TOAST",toastId:e})}}},35836:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{unstable_getImgProps:function(){return l},default:function(){return d}});let r=s(97295),a=s(85097),o=s(1226),n=s(33729),i=r._(s(43374)),l=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,a.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}},d=n.Image},82103:function(e,t,s){e.exports=s(35836)},91954:function(e,t,s){e.exports=s(5372)}},function(e){e.O(0,[620,612,825,729,895,587,120,543,744],function(){return e(e.s=92310)}),_N_E=e.O()}]);