(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{1469:(e,s,a)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),!function(e,s){for(var a in s)Object.defineProperty(e,a,{enumerable:!0,get:s[a]})}(s,{default:function(){return i},getImageProps:function(){return c}});let n=a(8229),l=a(8883),r=a(3063),t=n._(a(1193));function c(e){let{props:s}=(0,l.getImgProps)(e,{defaultLoader:t.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,a]of Object.entries(s))void 0===a&&delete s[e];return{props:s}}let i=r.Image},1656:e=>{e.exports={contactContainer:"page_contactContainer__MQMNm",contactInfo:"page_contactInfo__ojYy1",infoCard:"page_infoCard__mh7oG",iconWrapper:"page_iconWrapper__sgY9w",contactForm:"page_contactForm__g20tq",formGroup:"page_formGroup__gZIaD",submitBtn:"page_submitBtn__xjhe9",successMessage:"page_successMessage__06UDq",successIcon:"page_successIcon__bcUO_",mapSection:"page_mapSection__Fdqa7",mapWrapper:"page_mapWrapper__pgHce",mapPlaceholder:"page_mapPlaceholder__eWNTk",faqSection:"page_faqSection__dziZh"}},2249:(e,s,a)=>{Promise.resolve().then(a.bind(a,4710))},4710:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>i});var n=a(5155),l=a(2115),r=a(6766),t=a(1656),c=a.n(t);function i(){let[e,s]=(0,l.useState)({name:"",email:"",phone:"",type:"question",message:""}),[a,t]=(0,l.useState)(!1),i=e=>{let{name:a,value:n}=e.target;s(e=>({...e,[a]:n}))};return(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("section",{className:"section",children:[(0,n.jsx)("h1",{className:"section-title",children:"聯絡我們"}),(0,n.jsx)("p",{className:"section-subtitle",children:"有任何石材相關需求，歡迎與我們聯繫"}),(0,n.jsxs)("div",{className:c().contactContainer,children:[(0,n.jsxs)("div",{className:c().contactInfo,children:[(0,n.jsxs)("div",{className:c().infoCard,children:[(0,n.jsx)("div",{className:c().iconWrapper,children:(0,n.jsx)(r.default,{src:"/vercel.svg",alt:"地址",width:25,height:25})}),(0,n.jsx)("h3",{children:"地址"}),(0,n.jsx)("p",{children:"台北市XX區XX路00號"})]}),(0,n.jsxs)("div",{className:c().infoCard,children:[(0,n.jsx)("div",{className:c().iconWrapper,children:(0,n.jsx)(r.default,{src:"/vercel.svg",alt:"電話",width:25,height:25})}),(0,n.jsx)("h3",{children:"電話"}),(0,n.jsx)("p",{children:"02-XXXX-XXXX"}),(0,n.jsx)("p",{children:"0912-XXX-XXX"})]}),(0,n.jsxs)("div",{className:c().infoCard,children:[(0,n.jsx)("div",{className:c().iconWrapper,children:(0,n.jsx)(r.default,{src:"/vercel.svg",alt:"Email",width:25,height:25})}),(0,n.jsx)("h3",{children:"Email"}),(0,n.jsx)("p",{children:"info@leistone.com.tw"})]}),(0,n.jsxs)("div",{className:c().infoCard,children:[(0,n.jsx)("div",{className:c().iconWrapper,children:(0,n.jsx)(r.default,{src:"/vercel.svg",alt:"熱門時時間",width:25,height:25})}),(0,n.jsx)("h3",{children:"熱門時時間"}),(0,n.jsx)("p",{children:"週一至週五: 9:00 - 18:00"}),(0,n.jsx)("p",{children:"週六: 10:00 - 16:00"}),(0,n.jsx)("p",{children:"週日及國定假日休息"})]})]}),(0,n.jsx)("div",{className:c().contactForm,children:a?(0,n.jsxs)("div",{className:c().successMessage,children:[(0,n.jsx)("div",{className:c().successIcon,children:"✔"}),(0,n.jsx)("h3",{children:"表單已成功提交！"}),(0,n.jsx)("p",{children:"感謝您的訪問，我們的專業顧問將盡快與您聯繫。"})]}):(0,n.jsxs)("form",{onSubmit:s=>{s.preventDefault(),console.log("Form submitted:",e),t(!0)},children:[(0,n.jsxs)("div",{className:c().formGroup,children:[(0,n.jsx)("label",{htmlFor:"name",children:"姓名 *"}),(0,n.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:i,required:!0})]}),(0,n.jsxs)("div",{className:c().formGroup,children:[(0,n.jsx)("label",{htmlFor:"email",children:"Email *"}),(0,n.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:i,required:!0})]}),(0,n.jsxs)("div",{className:c().formGroup,children:[(0,n.jsx)("label",{htmlFor:"phone",children:"電話 *"}),(0,n.jsx)("input",{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:i,required:!0})]}),(0,n.jsxs)("div",{className:c().formGroup,children:[(0,n.jsx)("label",{htmlFor:"type",children:"詢問類型"}),(0,n.jsxs)("select",{id:"type",name:"type",value:e.type,onChange:i,children:[(0,n.jsx)("option",{value:"question",children:"一般問題"}),(0,n.jsx)("option",{value:"quote",children:"報價詢問"}),(0,n.jsx)("option",{value:"project",children:"專案合作"}),(0,n.jsx)("option",{value:"other",children:"其他"})]})]}),(0,n.jsxs)("div",{className:c().formGroup,children:[(0,n.jsx)("label",{htmlFor:"message",children:"訊息內容 *"}),(0,n.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:i,required:!0,rows:"5"})]}),(0,n.jsx)("button",{type:"submit",className:c().submitBtn,children:"送出訊息"})]})})]})]}),(0,n.jsx)("section",{className:c().mapSection,children:(0,n.jsx)("div",{className:c().mapWrapper,children:(0,n.jsx)("div",{className:c().mapPlaceholder,children:(0,n.jsx)("span",{children:"這裡將顯示地圖"})})})}),(0,n.jsx)("section",{className:c().faqSection,children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("h2",{children:"有問題嗎？檢視我們的常見問題"}),(0,n.jsx)("p",{children:"了解更多關於石材的常見問題與解答，幫助您做出最適合的選擇"}),(0,n.jsx)("a",{href:"/faq",className:"btn",children:"查看常見問題"})]})})]})}},6654:(e,s,a)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"useMergedRef",{enumerable:!0,get:function(){return l}});let n=a(2115);function l(e,s){let a=(0,n.useRef)(null),l=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=a.current;e&&(a.current=null,e());let s=l.current;s&&(l.current=null,s())}else e&&(a.current=r(e,n)),s&&(l.current=r(s,n))},[e,s])}function r(e,s){if("function"!=typeof e)return e.current=s,()=>{e.current=null};{let a=e(s);return"function"==typeof a?a:()=>e(null)}}("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},6766:(e,s,a)=>{"use strict";a.d(s,{default:()=>l.a});var n=a(1469),l=a.n(n)}},e=>{var s=s=>e(e.s=s);e.O(0,[291,63,441,684,358],()=>s(2249)),_N_E=e.O()}]);