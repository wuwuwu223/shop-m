import{u as h,k as P,r as u,a as s,c as V,h as m,b as a,w as c,T as _,o as x,m as y}from"./index.8d236b8f.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";const C={class:"page"},F={class:"form-box"},q={class:"form-button-box"},T=y("\u4FEE\u6539\u5BC6\u7801"),A={name:"ChangePasswordPage",setup(B){const p=h();P();const t=u(""),n=u(""),l=u(null);function i(){l.value.validate("password").then(o=>{}).catch(o=>{console.log(o)})}function v(){return new Promise(o=>{l.value.validate("password").then(e=>{o(n.value===t.value)}).catch(e=>{console.log(e)})})}const g=o=>{console.log("submit",o);const e=_.loading({message:"\u52A0\u8F7D\u4E2D..."});setTimeout(()=>{e.clear(),_.success("\u4FEE\u6539\u5BC6\u7801\u6210\u529F"),p.go(-1)},1e3)};return(o,e)=>{const d=s("van-field"),f=s("van-cell-group"),w=s("van-button"),b=s("van-form");return x(),V("div",C,[m("div",F,[a(b,{ref_key:"changePasswordForm",ref:l,onSubmit:g,"label-width":"7.2em"},{default:c(()=>[a(f,null,{default:c(()=>[a(d,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=r=>t.value=r),type:"password",name:"password",label:"\u5BC6\u7801",required:"",clearable:"",center:"",autocomplete:"off",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]},null,8,["modelValue"]),a(d,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=r=>n.value=r),type:"password",name:"passwordAgain",label:"\u518D\u6B21\u8F93\u5165\u5BC6\u7801",required:"",clearable:"",center:"",autocomplete:"off",placeholder:"\u8BF7\u8F93\u5165\u518D\u6B21\u8F93\u5165\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u518D\u6B21\u8F93\u5165\u5BC6\u7801"},{validator:v,message:"\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4"}],onFocus:i},null,8,["modelValue","rules"])]),_:1}),m("div",q,[a(w,{round:"",block:"",type:"primary","native-type":"submit"},{default:c(()=>[T]),_:1})])]),_:1},512)])])}}};var S=k(A,[["__scopeId","data-v-836718e0"]]);export{S as default};
