import{j as v,r as o,R as _,a as g,b as k,c as B,H as D}from"./vendor.c514e21a.js";const w=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}};w();const P="modulepreload",F={},j="/PWA/dist/",L=function(c,l){return!l||l.length===0?c():Promise.all(l.map(n=>{if(n=`${j}${n}`,n in F)return;F[n]=!0;const t=n.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const a=document.createElement("link");if(a.rel=t?"stylesheet":P,t||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),t)return new Promise((p,d)=>{a.addEventListener("load",p),a.addEventListener("error",d)})})).then(()=>c())};var R="/PWA/dist/assets/bg.3c16ecaf.png",W="/PWA/dist/assets/info_702_788.f76f53ea.png",M="/PWA/dist/assets/other_info_704_252.95fd9c05.png",O="/PWA/dist/assets/yuekangma_bot.957c9325.jpeg";const e=v.exports.jsx,u=v.exports.jsxs,y=document.body.clientWidth,H=y*(683/375),T=new Array(Math.ceil(H/40)+10).fill(1),q=new Array(Math.ceil(y/80)).fill(1),N=()=>{const[m,c]=o.exports.useState(""),[l,n]=o.exports.useState(localStorage.getItem("name")||"\u67D0*\u67D0"),[t,r]=o.exports.useState(localStorage.getItem("address")||"\u5E7F\u5DDE"),[a,p]=o.exports.useState(localStorage.getItem("yimiao")||""),[d,C]=o.exports.useState(localStorage.getItem("hesuan")||"");o.exports.useEffect(()=>{const s=setInterval(()=>{const i=new Date,f=`${i.getMonth()+1}`.padStart(2,"0"),h=`${i.getDate()}`.padStart(2,"0"),I=`${i.getHours()}`.padStart(2,"0"),E=`${i.getMinutes()}`.padStart(2,"0"),$=`${i.getSeconds()}`.padStart(2,"0");c(`${f}-${h} ${I}:${E}:${$}`)},1e3);return()=>{clearInterval(s)}},[]);const S=o.exports.useCallback(()=>{const s=prompt("\u8BF7\u8F93\u5165\u5730\u5740","");s&&s!==""&&(r(s),localStorage.setItem("address",s))},[]),x=o.exports.useCallback(()=>{const s=prompt("\u8BF7\u8F93\u5165\u540D\u5B57","");if(s&&s!==""){const i=s.length>2?`${s[0]}*${s[s.length-1]}`:`${s[0]}*`;n(i),localStorage.setItem("name",i)}},[]),A=o.exports.useCallback(()=>{const s=prompt("\u8BF7\u8F93\u5165\u6838\u9178\u65F6\u95F4\uFF0C\u6309\u89C4\u5219\uFF01","");C(s||""),localStorage.setItem("hesuan",s||"")},[]),b=o.exports.useCallback(()=>{const s=prompt("\u8BF7\u8F93\u5165\u75AB\u82D7\u65F6\u95F4\uFF0C\u6309\u89C4\u5219\uFF01","");p(s||""),localStorage.setItem("yimiao",s||"")},[]);return u("div",{style:{width:"100vw"},children:[u("div",{className:"container",children:[e("div",{className:"bgContainer",children:T.map((s,i)=>e("div",{className:"bgLineContainer",children:q.map((f,h)=>e("img",{className:"bgImg",src:R},`img_${h}`))},`line_${i}`))}),u("div",{className:"titleBar",children:[e("div",{className:"leftArrow"}),e("div",{className:"title",children:"\u7CA4\u5EB7\u7801"}),u("div",{className:"rightIcon",children:[u("div",{className:"left",children:[e("div",{className:"smallCircle circle"}),e("div",{className:"bigCircle circle"}),e("div",{className:"smallCircle circle"})]}),e("div",{className:"middle"}),e("div",{className:"circle right",children:e("div",{className:"middleCircle circle"})})]})]}),e("img",{className:"infoContainer",src:W}),e("img",{className:"otherInfoContainer",src:M}),e("div",{onClick:S,className:"address",children:t}),e("div",{onClick:x,className:"name",children:l}),e("div",{onClick:A,className:"hesuan",style:d?{}:{backgroundColor:"transparent"},children:d}),e("div",{onClick:b,className:"yimiao",style:a?{}:{backgroundColor:"transparent"},children:a}),e("div",{className:"time",children:m}),u("div",{className:"text",children:[e("div",{children:"\u4F9D\u6258\u5168\u56FD\u4E00\u4F53\u5316\u653F\u52A1\u670D\u52A1\u5E73\u53F0"}),e("div",{children:"\u5B9E\u73B0\u8DE8\u7701\uFF08\u533A\u3001\u5E02\uFF09\u6570\u636E\u5171\u4EAB\u548C\u4E92\u901A\u4E92\u8BA4"})]})]}),e("img",{className:"img",src:O})]})},K=o.exports.lazy(()=>L(()=>import("./index.73eb8cb0.js"),["assets/index.73eb8cb0.js","assets/vendor.c514e21a.js"])),Y=()=>e(o.exports.Suspense,{fallback:e("span",{children:"loading"}),children:u(_,{children:[e(g,{path:"/",element:e(N,{})}),e(g,{path:"/yuekangcode",element:e(N,{})}),e(g,{path:"/about",element:e(K,{})})]})});k.render(e(B.StrictMode,{children:e(D,{children:e(Y,{})})}),document.getElementById("root"));export{e as j};
