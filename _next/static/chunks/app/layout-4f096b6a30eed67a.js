(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{98955:function(e,t,s){Promise.resolve().then(s.t.bind(s,45917,23)),Promise.resolve().then(s.t.bind(s,89868,23)),Promise.resolve().then(s.bind(s,95316)),Promise.resolve().then(s.bind(s,32426)),Promise.resolve().then(s.bind(s,8815)),Promise.resolve().then(s.bind(s,2587)),Promise.resolve().then(s.t.bind(s,92235,23)),Promise.resolve().then(s.t.bind(s,27287,23))},95316:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return w}});var r=s(18038),a=s(719),o=s(8815),n=s(2973),i=s.n(n),l=s(90131),d=s.n(l),u=e=>{let{companyName:t="Front Desk",message:s="Hello! \uD83D\uDC4B\uD83C\uDFFC \n\nHow can we help you?"}=e,a=new Date().toTimeString().split(":").slice(0,2).join(":");return(0,r.jsx)("div",{className:d().root,children:(0,r.jsxs)("div",{className:d().message,children:[(0,r.jsx)("span",{className:d().triangle_top_right}),(0,r.jsx)("span",{className:d().message_title,children:t}),(0,r.jsx)("p",{className:d().message_body,children:s}),(0,r.jsx)("span",{className:d().message_time,children:a})]})})},c=s(57277),f=s.n(c),p=s(95313),m=()=>{let{isChatOpen:e,setIsChatOpen:t}=(0,o.useAppContext)();return(0,r.jsx)("div",{className:f().root,onClick:()=>{t(!e)},children:(0,r.jsx)(p.Z,{})})},x=s(44801),h=s(25797),_=s(7811),g=s.n(_),v=e=>{let{CompanyIcon:t,companyName:s="Front Desk",replyTimeText:a="Here to hold your hand, every step 24/7"}=e,{setIsChatOpen:n}=(0,o.useAppContext)();return(0,r.jsxs)("div",{className:g().root,children:[(0,r.jsx)("span",{className:g().close_btn,onClick:()=>{n(!1)},children:(0,r.jsx)(h.oHP,{})}),(0,r.jsx)("div",{className:g().logo,children:t&&(0,r.jsx)(t,{})||(0,r.jsx)(x.LVi,{})}),(0,r.jsxs)("div",{className:g().texts,children:[(0,r.jsx)("span",{className:g().texts_h1,children:s}),(0,r.jsx)("span",{className:g().texts_span,children:a})]})]})},b=e=>{let{phoneNumber:t="2330591451397",inputPlaceHolder:s="Type a message"}=e,[o,n]=(0,a.useState)("");return(0,r.jsxs)("div",{className:"flex flex-col p-4 bg-gray-100",children:[(0,r.jsx)("input",{placeholder:s,className:"flex-grow px-4 py-2 mb-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-kondocho-500",onChange:e=>{n(e.target.value)},value:o}),(0,r.jsx)("button",{className:"w-full px-4 py-2 text-white bg-kondocho-500 rounded-md hover:bg-kondocho-400",onClick:()=>{if(!t)return window.alert("Invalid Phone Number"),!1;window.open("https://api.whatsapp.com/send/?phone=".concat(t,"&text=").concat(o)),n("")},children:"Send"})]})},w=e=>{let{isChatOpen:t,setIsChatOpen:s}=(0,o.useAppContext)();return(0,a.useEffect)(()=>{e.open&&s(!0)},[e.open,s]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"".concat(i().root," ").concat(t?i().open:i().close),children:[(0,r.jsx)(v,{...e}),(0,r.jsx)(u,{...e}),(0,r.jsx)(b,{...e})]}),(0,r.jsx)(m,{})]})}},32426:function(e,t,s){"use strict";s.r(t),s.d(t,{Toaster:function(){return _}});var r=s(18038),a=s(719),o=s(40739),n=s(38786),i=s(46737),l=s(72257);let d=o.zt,u=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(o.l_,{ref:t,className:(0,l.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",s),...a})});u.displayName=o.l_.displayName;let c=(0,n.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-slate-200 p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full dark:border-slate-800",{variants:{variant:{default:"border bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",destructive:"destructive group border-red-500 bg-red-500 text-slate-50 dark:border-red-900 dark:bg-red-900 dark:text-slate-50"}},defaultVariants:{variant:"default"}}),f=a.forwardRef((e,t)=>{let{className:s,variant:a,...n}=e;return(0,r.jsx)(o.fC,{ref:t,className:(0,l.cn)(c({variant:a}),s),...n})});f.displayName=o.fC.displayName,a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(o.aU,{ref:t,className:(0,l.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-transparent px-3 text-sm font-medium ring-offset-white transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-slate-100/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-slate-50 group-[.destructive]:focus:ring-red-500 dark:border-slate-800 dark:ring-offset-slate-950 dark:hover:bg-slate-800 dark:focus:ring-slate-300 dark:group-[.destructive]:border-slate-800/40 dark:group-[.destructive]:hover:border-red-900/30 dark:group-[.destructive]:hover:bg-red-900 dark:group-[.destructive]:hover:text-slate-50 dark:group-[.destructive]:focus:ring-red-900",s),...a})}).displayName=o.aU.displayName;let p=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(o.x8,{ref:t,className:(0,l.cn)("absolute right-2 top-2 rounded-md p-1 text-slate-950/50 opacity-0 transition-opacity hover:text-slate-950 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-slate-50/50 dark:hover:text-slate-50",s),"toast-close":"",...a,children:(0,r.jsx)(i.Z,{className:"h-4 w-4"})})});p.displayName=o.x8.displayName;let m=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(o.Dx,{ref:t,className:(0,l.cn)("text-sm font-semibold",s),...a})});m.displayName=o.Dx.displayName;let x=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(o.dk,{ref:t,className:(0,l.cn)("text-sm opacity-90",s),...a})});x.displayName=o.dk.displayName;var h=s(2752);function _(){let{toasts:e}=(0,h.pm)();return(0,r.jsxs)(d,{children:[e.map(function(e){let{id:t,title:s,description:a,action:o,...n}=e;return(0,r.jsxs)(f,{...n,children:[(0,r.jsxs)("div",{className:"grid gap-1",children:[s&&(0,r.jsx)(m,{children:s}),a&&(0,r.jsx)(x,{children:a})]}),o,(0,r.jsx)(p,{})]},t)}),(0,r.jsx)(u,{})]})}},2752:function(e,t,s){"use strict";s.d(t,{pm:function(){return f}});var r=s(719);let a=0,o=new Map,n=e=>{if(o.has(e))return;let t=setTimeout(()=>{o.delete(e),u({type:"REMOVE_TOAST",toastId:e})},1e6);o.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?n(s):e.toasts.forEach(e=>{n(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],d={toasts:[]};function u(e){d=i(d,e),l.forEach(e=>{e(d)})}function c(e){let{...t}=e,s=(a=(a+1)%Number.MAX_VALUE).toString(),r=()=>u({type:"DISMISS_TOAST",toastId:s});return u({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||r()}}}),{id:s,dismiss:r,update:e=>u({type:"UPDATE_TOAST",toast:{...e,id:s}})}}function f(){let[e,t]=r.useState(d);return r.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:c,dismiss:e=>u({type:"DISMISS_TOAST",toastId:e})}}},8815:function(e,t,s){"use strict";s.r(t),s.d(t,{AppProvider:function(){return n},useAppContext:function(){return i}});var r=s(18038),a=s(719);let o=(0,a.createContext)(),n=e=>{let{children:t}=e,[s,n]=(0,a.useState)(null),[i,l]=(0,a.useState)(!1),[d,u]=(0,a.useState)(!1);return(0,r.jsx)(o.Provider,{value:{transactionInView:s,viewingTransaction:i,setTransactionInView:n,setViewingTransaction:l,closeTransactionView:()=>{l(!1),n(null)},isChatOpen:d,setIsChatOpen:u},children:t})},i=()=>(0,a.useContext)(o)},72257:function(e,t,s){"use strict";s.d(t,{Ft:function(){return n},L$:function(){return o},Qw:function(){return d},cn:function(){return f},dt:function(){return u},lt:function(){return c},oB:function(){return i},zN:function(){return l}});var r=s(33501),a=s(82701);s(20102);let o=e=>{let t=document.createElement("canvas");t.width=100,t.height=100;let s=t.getContext("2d");return s.fillStyle="#26B29D",s.fillRect(0,0,t.width,t.height),s.font="bold 50px Arial",s.fillStyle="#fff",s.textAlign="center",s.textBaseline="middle",s.fillText(null==e?void 0:e.charAt(0),t.width/2,t.height/2),t.toDataURL()},n=e=>{let t=new Date(1e3*e.seconds+e.nanoseconds/1e6),s=t.toDateString(),r=t.toLocaleTimeString(),a=new Date,o=new Date(a);return(o.setDate(o.getDate()-1),s===a.toDateString())?"Today at "+r+" GMT":s===o.toDateString()?"Yesterday at "+r+" GMT":s+" at "+r+" GMT"},i=e=>new Date(1e3*e.seconds+e.nanoseconds/1e6).toISOString(),l=()=>Math.random().toString(36).substring(2,8),d=()=>{let e=new Date().getHours();return e<12?"Good Morning":e<18?"Good Afternoon":"Good Evening"},u=async e=>e.startsWith("020")||e.startsWith("050")?"vod":e.startsWith("024")||e.startsWith("054")||e.startsWith("055")||e.startsWith("025")||e.startsWith("059")||e.startsWith("59")||e.startsWith("24")||e.startsWith("54")||e.startsWith("55")?"mtn":"UNKNOWN",c=e=>/^[a-fA-F0-9]{64}$/.test(e);function f(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,a.m)((0,r.W)(t))}},19795:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{requestIdleCallback:function(){return s},cancelIdleCallback:function(){return r}});let s="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},45917:function(){},89868:function(){},90131:function(e){e.exports={root:"chatBox_root__uV__v",message:"chatBox_message__HUXlt",message_title:"chatBox_message_title__zq_ii",message_body:"chatBox_message_body__6WwxD",triangle_top_right:"chatBox_triangle_top_right__zqhiO",message_time:"chatBox_message_time__ZCAmP"}},57277:function(e){e.exports={root:"supportButton_root__2aElo"}},2973:function(e){e.exports={root:"supportChat_root__HVJZD",open:"supportChat_open__9CHNm",customTransition:"supportChat_customTransition__VwxXa",close:"supportChat_close___J_Aj"}},7811:function(e){e.exports={root:"supportHeader_root__rddS0",close_btn:"supportHeader_close_btn__rqZ4q",logo:"supportHeader_logo__iJRkt",texts:"supportHeader_texts__u6nB_",texts_h1:"supportHeader_texts_h1__BjAMK",texts_span:"supportHeader_texts_span__5TR9P"}},27287:function(e){e.exports={style:{fontFamily:"'__Lexend_Deca_20018d', '__Lexend_Deca_Fallback_20018d'",fontStyle:"normal"},className:"__className_20018d"}}},function(e){e.O(0,[620,612,853,232,825,394,747,840,790,587,120,543,744],function(){return e(e.s=98955)}),_N_E=e.O()}]);