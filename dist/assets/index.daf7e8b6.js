import{j as a,r as d,R as p,a as u}from"./vendor.bf665133.js";const f=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};f();var h="/assets/logo.ecc203fb.svg";const t=a.exports.jsx,s=a.exports.jsxs;function g(){const[c,o]=d.exports.useState(0);return d.exports.useEffect(()=>{"serviceWorker"in window.navigator&&navigator.serviceWorker.register("/serviceWorker.js",{scope:"/"}).then(function(){console.log("registered")}).catch(function(n){console.log(n,222)})},[]),t("div",{className:"App",children:s("header",{className:"App-header",children:[t("img",{src:h,className:"App-logo",alt:"logo"}),t("p",{children:"Hello Vite + React!"}),t("p",{children:s("button",{type:"button",onClick:()=>o(n=>n+1),children:["count is: ",c]})}),s("p",{children:["Edit ",t("code",{children:"App.tsx"})," and save to test HMR updates."]}),s("p",{children:[t("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})," | ",t("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer",children:"Vite Docs"})]})]})})}p.render(t(u.StrictMode,{children:t(g,{})}),document.getElementById("root"));
