import{j as g,r as o,R as b,a as u,b as N,c as A,H as I}from"./vendor.c514e21a.js";const w=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=l(t);fetch(t.href,n)}};w();var C="/PWA/dist/assets/bg.f16cec6e.png",D="/PWA/dist/assets/info_702_788.7e927c30.png";const e=g.exports.jsx,f=g.exports.jsxs,h=document.body.clientWidth,j=h*(683/375),M=new Array(Math.ceil(j/40)+10).fill(1),R=new Array(Math.ceil(h/80)).fill(1),v=()=>{const[m,a]=o.exports.useState(""),[l,i]=o.exports.useState(localStorage.getItem("name")||"\u67D0*\u67D0"),[t,n]=o.exports.useState(localStorage.getItem("address")||"\u5E7F\u5DDE");o.exports.useEffect(()=>{const s=setInterval(()=>{const r=new Date,p=`${r.getMonth()+1}`.padStart(2,"0"),d=`${r.getDate()}`.padStart(2,"0"),y=`${r.getHours()}`.padStart(2,"0"),S=`${r.getMinutes()}`.padStart(2,"0"),$=`${r.getSeconds()}`.padStart(2,"0");a(`${p}-${d} ${y}:${S}:${$}`)},1e3);return()=>{clearInterval(s)}},[]);const c=o.exports.useCallback(()=>{const s=prompt("\u8BF7\u8F93\u5165\u5730\u5740","");s&&s!==""&&(n(s),localStorage.setItem("address",s))},[]),x=o.exports.useCallback(()=>{const s=prompt("\u8BF7\u8F93\u5165\u540D\u5B57","");if(s&&s!==""){const r=s.length>2?`${s[0]}*${s[s.length-1]}`:`${s[0]}*`;i(r),localStorage.setItem("name",r)}},[]);return f("div",{className:"container",children:[e("div",{className:"bgContainer",children:M.map((s,r)=>e("div",{className:"bgLineContainer",children:R.map((p,d)=>e("img",{className:"bgImg",src:C},`img_${d}`))},`line_${r}`))}),e("img",{className:"infoContainer",src:D}),e("div",{onClick:c,className:"address",children:t}),e("div",{onClick:x,className:"name",children:l}),e("div",{className:"time",children:m})]})},k=()=>e("div",{children:"321"}),F=()=>e(o.exports.Suspense,{fallback:e("span",{children:"loading"}),children:f(b,{children:[e(u,{path:"/",element:e(v,{})}),e(u,{path:"/yuekangcode",element:e(v,{})}),e(u,{path:"/about",element:e(k,{})})]})});N.render(e(A.StrictMode,{children:e(I,{children:e(F,{})})}),document.getElementById("root"));
