import{r as d,k as y,g as b,a as m,c as s,b as S,d as p,i as V,h as B,F as w,e as F,S as n,T as r,o as t,f as h,j as v}from"./index.8d236b8f.js";const q={name:"SearchPage",setup(N){let l=d([]),o=d("");const c=y(),g=async()=>{console.log(c.query.search_value),o.value=c.query.search_value;const e=await n(o.value);console.log(e.data),e.data.code?l.value=e.data.data:r(e.data.msg)},f=async()=>{const e=await n(o.value);console.log(e.data),e.data.code?l.value=e.data.data:r(e.data.msg)},_=async()=>{const e=await n(o.value);console.log(e.data),e.data.code?l.value=e.data.data:r(e.data.msg)};return b(g),(e,u)=>{const k=m("van-search"),i=m("van-card");return t(),s("div",null,[S(k,{modelValue:p(o),"onUpdate:modelValue":u[0]||(u[0]=a=>V(o)?o.value=a:o=a),"show-action":"",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",onSearch:f,onCancel:_},null,8,["modelValue"]),B("ol",null,[(t(!0),s(w,null,F(p(l),a=>(t(),s("li",null,[a.freight==0?(t(),h(i,{key:0,tag:"\u5305\u90AE",price:(a.price/100).toFixed(2),desc:a.detail,title:a.name,thumb:a.pictures[0].url,onClick:C=>e.$router.push("/good/detail?id="+a.ID)},null,8,["price","desc","title","thumb","onClick"])):v("",!0),a.freight!==0?(t(),h(i,{key:1,price:(a.price/100).toFixed(2),desc:a.detail,title:a.name,thumb:a.pictures[0].url,onClick:C=>e.$router.push("/good/detail?id="+a.ID)},null,8,["price","desc","title","thumb","onClick"])):v("",!0)]))),256))])])}}};export{q as default};
