import{j as a,r as m,R as p,a as i,b as g,c as h,H as y}from"./vendor.c514e21a.js";const b=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}};b();var v="/PWA/dist/assets/bg.f16cec6e.png",x="/PWA/dist/assets/info_702_788.7e927c30.png";const e=a.exports.jsx,l=a.exports.jsxs,d=document.body.clientWidth,A=d*(683/375),N=new Array(Math.ceil(A/40)+10).fill(1),j=new Array(Math.ceil(d/80)).fill(1),u=()=>l("div",{className:"container",children:[e("div",{className:"bgContainer",children:N.map((f,n)=>e("div",{className:"bgLineContainer",children:j.map((c,o)=>e("img",{className:"bgImg",src:v},`img_${o}`))},`line_${n}`))}),e("img",{className:"infoContainer",src:x})]}),R=()=>e("div",{children:"321"}),w=()=>e(m.exports.Suspense,{fallback:e("span",{children:"loading"}),children:l(p,{children:[e(i,{path:"/",element:e(u,{})}),e(i,{path:"/yuekangcode",element:e(u,{})}),e(i,{path:"/about",element:e(R,{})})]})});g.render(e(h.StrictMode,{children:e(y,{children:e(w,{})})}),document.getElementById("root"));