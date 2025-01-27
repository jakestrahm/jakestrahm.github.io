(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{25:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var c=s(8),a=s(1),n=s(0);const i=Object(a.createContext)(),l=e=>{let{children:t}=e;const[s,c]=Object(a.useState)("light");Object(a.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");c(e.matches?"dark":"light"),e.addEventListener("change",(e=>{c(e.matches?"dark":"light")}))}),[]);return Object(n.jsx)(i.Provider,{value:[{themeName:s,toggleTheme:()=>{const e="dark"===s?"light":"dark";localStorage.setItem("themeName",e),c(e)}}],children:t})},r={homepage:"",title:"JS."},o={name:"Jake Strahm",role:"Full Stack Engineer",description:"",resume:"",social:{linkedin:"https://linkedin.com/in/jakestrahm",github:"https://github.com/jakestrahm"}},j=[{name:"T.H.R.",description:"Reminders application for team's hackathon entry. Designed application, architected system, and mentored participants through development of frontend within 48 hours.",stack:["javascript","node","express","react","mongodb"],sourceCode:"https://github.com/jakestrahm/treasure-hacks-3",livePreview:""},{name:"Computer Club Communications",description:"Forum for alma mater's computer club. Designed application, architected system, implemented the backend, and mentored participants through development of frontend.",stack:["javascript","node","express","mongodb"],sourceCode:"https://github.com/jakestrahm/forum-backend",livePreview:""},{name:"jMessage",description:"A chat service with real time updates, multiple chat rooms, user authentication, and a recreation of iMessage's mobile UI",stack:["javascript","react","tailwind","daisy-ui","firebase"],sourceCode:"https://github.com/jakestrahm/jMessage",livePreview:""}],d=[{name:"CarepathRx",description:"Engineer new features and modernize core components of CarepathRx's patient therapy management platform; developing dashboards to support both internal and client operations.",role:"Software Engineer",start:"Mar 2024",end:"Present",bullets:[],stack:["typescript","node","react","redux","bootstrap","mysql","socket.io"]},{name:"Outspoke",description:"Developed the functionality and user interface of Outspoke\u2019s data analytics platform- creating dashboards, data visualizations, and several internal tools.",role:"Developer",start:"July 2022",end:"Dec 2022",bullets:[],stack:["typescript","node","express","react","redux","material-ui","mongodb"]},{name:"Suco",description:"Designed and developed over thirty client websites with a team of developers; supporting operations by developing internal tools.",role:"Web Developer",start:"Feb 2021",end:"July 2021",stack:["typescript","node","express","react","material-ui","postgresql"]}],h=["typescript","javascript","c++","sql","css","html","node.js","express","react","redux toolkit","socket.io","d3","bootstrap","postgresql","mongodb","mysql","mssql","docker","git","aws","linux"],b={};var m=s(14),p=s.n(m),u=s(12),x=s.n(u),O=s(16),k=s.n(O),v=s(15),g=s.n(v);s(25);var f=()=>{const[{themeName:e,toggleTheme:t}]=Object(a.useContext)(i),[s,c]=Object(a.useState)(!1),l=()=>c(!s);return Object(n.jsxs)("nav",{className:"center nav",children:[Object(n.jsxs)("ul",{style:{display:s?"flex":null},className:"nav__list",children:[d.length?Object(n.jsx)("li",{className:"nav__list-item",children:Object(n.jsx)("a",{href:"#experience",onClick:l,className:"link link--nav",children:"Experience"})}):null,j.length?Object(n.jsx)("li",{className:"nav__list-item",children:Object(n.jsx)("a",{href:"#projects",onClick:l,className:"link link--nav",children:"Projects"})}):null,h.length?Object(n.jsx)("li",{className:"nav__list-item",children:Object(n.jsx)("a",{href:"#skills",onClick:l,className:"link link--nav",children:"Skills"})}):null,b.email?Object(n.jsx)("li",{className:"nav__list-item",children:Object(n.jsx)("a",{href:"#contact",onClick:l,className:"link link--nav",children:"Contact"})}):null]}),Object(n.jsx)("button",{type:"button",onClick:t,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===e?Object(n.jsx)(x.a,{}):Object(n.jsx)(p.a,{})}),Object(n.jsx)("button",{type:"button",onClick:l,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:s?Object(n.jsx)(g.a,{}):Object(n.jsx)(k.a,{})})]})};s(29);var N=()=>{const{homepage:e,title:t}=r;return Object(n.jsxs)("header",{className:"header center",children:[Object(n.jsx)("h3",{children:e?Object(n.jsx)("a",{href:e,className:"link",children:t}):t}),Object(n.jsx)(f,{})]})},_=s(7),w=s.n(_),y=s(17),C=s.n(y);s(30);var E=()=>{const{name:e,role:t,description:s,resume:c,social:a}=o;return Object(n.jsxs)("div",{className:"about center",children:[e&&Object(n.jsx)("h1",{children:Object(n.jsx)("span",{className:"about__name",children:e})}),t&&Object(n.jsx)("h2",{className:"about__role",children:t}),Object(n.jsx)("p",{className:"about__desc",children:s&&s}),Object(n.jsxs)("div",{className:"about__contact center",children:[c&&Object(n.jsx)("a",{href:c,children:Object(n.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),a&&Object(n.jsxs)(n.Fragment,{children:[a.github&&Object(n.jsx)("a",{href:a.github,"aria-label":"github",className:"link link--icon",children:Object(n.jsx)(w.a,{})}),a.linkedin&&Object(n.jsx)("a",{href:a.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(n.jsx)(C.a,{})})]})]})]})},S=s(3),P=s.n(S),D=s(9),q=s.n(D);s(32);var J=e=>{let{project:t}=e;return Object(n.jsxs)("div",{className:"project",children:[Object(n.jsx)("h3",{children:t.name}),Object(n.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(n.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(n.jsx)("li",{className:"project__stack-item",children:e},P()())))}),t.sourceCode&&Object(n.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(n.jsx)(w.a,{})}),t.livePreview&&Object(n.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(n.jsx)(q.a,{})})]})};s(33);var M=()=>j.length?Object(n.jsxs)("section",{id:"projects",className:"section projects",children:[Object(n.jsx)("h2",{className:"section__title",children:"Projects"}),Object(n.jsx)("div",{className:"projects__grid",children:j.map((e=>Object(n.jsx)(J,{project:e},P()())))})]}):null;s(34);var R=()=>h.length?Object(n.jsxs)("section",{className:"section skills",id:"skills",children:[Object(n.jsx)("h2",{className:"section__title",children:"Skills"}),Object(n.jsx)("ul",{className:"skills__list",children:h.map((e=>Object(n.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},P()())))})]}):null,F=s(18),z=s.n(F);s(35);var I=()=>{const[e,t]=Object(a.useState)(!1);return Object(a.useEffect)((()=>{const e=()=>window.pageYOffset>500?t(!0):t(!1);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),e?Object(n.jsx)("div",{className:"scroll-top",children:Object(n.jsx)("a",{href:"#top",children:Object(n.jsx)(z.a,{fontSize:"large"})})}):null};s(36);var L=()=>b.email?Object(n.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(n.jsx)("h2",{className:"section__title",children:"Contact"}),Object(n.jsx)("a",{href:"mailto:".concat(b.email),children:Object(n.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email Me"})})]}):null;s(37);var T=()=>Object(n.jsx)("footer",{className:"footer"});s(38),s(39);var A=e=>{let{experience:t}=e;return Object(n.jsxs)("div",{className:"experience",children:[Object(n.jsx)("h3",{children:t.name}),Object(n.jsx)("h5",{children:t.role}),Object(n.jsxs)("h6",{className:"experience__duration",children:[t.start," \u2014 ",t.end]}),Object(n.jsx)("p",{className:"experience__description",children:t.description}),t.bullets&&Object(n.jsx)("ul",{className:"experience__bullets",children:t.bullets.map((e=>Object(n.jsx)("li",{className:"experience__bullets-item",children:e},P()())))}),t.stack&&Object(n.jsx)("ul",{className:"experience__stack",children:t.stack.map((e=>Object(n.jsx)("li",{className:"experience__stack-item",children:e},P()())))}),t.sourceCode&&Object(n.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(n.jsx)(w.a,{})}),t.livePreview&&Object(n.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(n.jsx)(q.a,{})})]})};s(40);var B=()=>d.length?Object(n.jsxs)("section",{id:"experience",className:"section",children:[Object(n.jsx)("h2",{className:"section__title",children:"Experience"}),Object(n.jsx)("div",{className:"experience__grid",children:d.map((e=>Object(n.jsx)(A,{experience:e},P()())))})]}):null;var H=()=>{const[{themeName:e}]=Object(a.useContext)(i);return Object(n.jsxs)("div",{id:"top",className:"".concat(e," app"),children:[Object(n.jsx)(N,{}),Object(n.jsxs)("main",{children:[Object(n.jsx)(E,{}),Object(n.jsx)(B,{}),Object(n.jsx)(M,{}),Object(n.jsx)(R,{}),Object(n.jsx)(L,{})]}),Object(n.jsx)(I,{}),Object(n.jsx)(T,{})]})};s(41);Object(c.render)(Object(n.jsx)(l,{children:Object(n.jsx)(H,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.ae059fb0.chunk.js.map