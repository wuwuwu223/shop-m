import{u as B,k as S,r as s,z as U,a as r,c as k,h as t,b as a,w as l,T as D,o as i,d as p,f as N,t as R,m as _}from"./index.8d236b8f.js";import{p as T,s as z}from"./formPattern.1a1470a4.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";const A={class:"page"},I={class:"form-box"},L=_("\u53D1\u9001\u9A8C\u8BC1\u7801"),j={key:1},G={class:"form-button-box"},H=_("\u4FEE\u6539\u5BC6\u7801"),J={class:"page-footer"},K={class:"page-footer-wrap van-safe-area-bottom"},M=_("\u7528\u6237\u534F\u8BAE"),O={name:"ForgetPage",setup(Q){const v=B();S();function x(){v.replace({path:"/login"})}function y(){v.replace({path:"/register"})}const f=s(null),g=s(""),b=s(""),h=s(""),u=s(!1),c=s(!0),d=U({time:60*1e3,onFinish:()=>{c.value=!0,d.reset()}});function w(){f.value.validate("phone").then(n=>{c.value=!1,d.start()}).catch(n=>{console.log(n)})}const P=n=>{if(console.log("submit",n),!u.value)return D.fail("\u8BF7\u9605\u8BFB\u5E76\u52FE\u9009\u7528\u6237\u534F\u8BAE"),!1};return(n,e)=>{const m=r("van-field"),V=r("van-button"),q=r("van-cell-group"),C=r("van-form"),F=r("van-checkbox");return i(),k("div",A,[t("div",I,[a(C,{ref_key:"logoForm",ref:f,onSubmit:P},{default:l(()=>[a(q,null,{default:l(()=>[a(m,{modelValue:g.value,"onUpdate:modelValue":e[0]||(e[0]=o=>g.value=o),name:"phone",label:"\u624B\u673A\u53F7",required:"",clearable:"",center:"",autocomplete:"tel",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{pattern:p(T),message:"\u624B\u673A\u53F7\u683C\u5F0F\u6709\u8BEF"}]},null,8,["modelValue","rules"]),a(m,{modelValue:b.value,"onUpdate:modelValue":e[1]||(e[1]=o=>b.value=o),name:"sms",label:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",required:"",clearable:"",center:"",autocomplete:"off",placeholder:"\u8BF7\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801"},{pattern:p(z),message:"\u77ED\u4FE1\u9A8C\u8BC1\u7801\u683C\u5F0F\u6709\u8BEF"}]},{button:l(()=>[c.value?(i(),N(V,{key:0,size:"small",type:"primary",onClick:w},{default:l(()=>[L]),_:1})):(i(),k("div",j,R(p(d).current.value.seconds)+"\u79D2",1))]),_:1},8,["modelValue","rules"]),a(m,{modelValue:h.value,"onUpdate:modelValue":e[2]||(e[2]=o=>h.value=o),type:"password",name:"password",label:"\u5BC6\u7801",required:"",clearable:"",center:"",autocomplete:"current-password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]},null,8,["modelValue"])]),_:1}),t("div",G,[a(V,{round:"",block:"",type:"primary","native-type":"submit"},{default:l(()=>[H]),_:1})])]),_:1},512)]),t("div",{class:"display-flex-between mg-small"},[t("div",{class:"button-text",onClick:x},"\u767B\u5F55"),t("div",{class:"button-text",onClick:y},"\u6CE8\u518C")]),t("div",J,[t("div",K,[a(F,{modelValue:u.value,"onUpdate:modelValue":e[3]||(e[3]=o=>u.value=o)},{default:l(()=>[M]),_:1},8,["modelValue"])])])])}}};var Z=E(O,[["__scopeId","data-v-6ea043de"]]);export{Z as default};
