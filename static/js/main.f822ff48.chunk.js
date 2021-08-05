(this.webpackJsonpjs_string_utils=this.webpackJsonpjs_string_utils||[]).push([[0],{72:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var s=n(0),r=n.n(s),c=n(17),a=n.n(c),l=n(51),i=n(5),j=n(77),u=n(76),b=n(78),o=n(1),O=function(t){return Object(o.jsxs)(b.a,{className:t.classDef,children:[Object(o.jsx)(b.a.Link,{href:"/my_string_utils/json_to_string",children:"JsonToEscapeString"}),Object(o.jsx)(b.a.Link,{href:"/my_string_utils/string_to_json",children:"EscapeStringToJson"}),Object(o.jsx)(b.a.Link,{href:"/my_string_utils/json_to_urlparams",children:"JsonToURLParameters"}),Object(o.jsx)(b.a.Link,{href:"/my_string_utils/urlparams_to_json",children:"URLParametersToJson"})]})},h=function(){return Object(o.jsx)(j.a,{bg:"light",expand:"lg",children:Object(o.jsxs)(u.a,{children:[Object(o.jsx)(j.a.Brand,{href:"/my_string_utils/",children:"String Functions"}),Object(o.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(o.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(o.jsx)(O,{classDef:"me-auto"})})]})})},x=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Home"}),Object(o.jsx)("h3",{children:"Please Choose One"}),Object(o.jsx)(O,{classDef:"flex-column"})]})},d=function(t){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"inputlabel",children:Object(o.jsxs)("label",{className:"leftLabel",htmlFor:"inputStr",children:[t.label,":"]})}),Object(o.jsx)("div",{className:"inputTextbox",children:Object(o.jsx)("textarea",{id:"inputStr",name:"inputStr",rows:"5",cols:"50"})})]})},g=n(30),m=n(37),p=function(t){var e=Object(s.useState)(""),n=Object(g.a)(e,2),r=n[0],c=n[1],a=Object(s.useState)((function(){return t.func})),l=Object(g.a)(a,1)[0],i=Object(s.useState)(t.langauge),j=Object(g.a)(i,1)[0];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{type:"submit",value:t.btnLabel,className:"bigSubmit",onClick:function(){var t=l();c(t)}}),Object(o.jsx)("div",{className:"outputlabel",children:Object(o.jsxs)("label",{className:"leftLabel",htmlFor:"OutputText",children:[t.label,":"]})}),Object(o.jsx)("div",{className:"codepen",children:Object(o.jsx)(m.a,{language:j,text:r,showLineNumbers:!1,theme:m.b,wrapLines:!0,codeBlock:!0})})]})},f=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"JSON to Escaped String"}),Object(o.jsx)(d,{label:"JSON Input"}),Object(o.jsx)(p,{label:"Output",btnLabel:"Stringify",func:function(){try{var t=document.getElementById("inputStr").value,e=JSON.parse(t);return JSON.stringify(JSON.stringify(e))}catch(n){alert(n)}return null},langauge:"text"})]})},_=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Escaped String to JSON"}),Object(o.jsx)(d,{label:"String Input"}),Object(o.jsx)(p,{label:"Output",btnLabel:"Parse",func:function(){var t=document.getElementById("inputStr").value;0===t.indexOf('"')&&(t=t.substr(1)),'"'===t.substr(t.length-1)&&(t=t.substr(0,t.length-1)),t=t.split('\\"').join('"');var e=JSON.parse(t);return JSON.stringify(e,null,"\t")},langauge:"json"})]})},S=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"JSON to URL Parameters"}),Object(o.jsx)(d,{label:"JSON Input"}),Object(o.jsx)(p,{label:"Output",btnLabel:"Convert",func:function(){var t=document.getElementById("inputStr").value,e=JSON.parse(t),n="";return Object.keys(e).forEach((function(t){if(t&&t.length>0&&e[t]&&e[t].toString().length>0){var s=t+"="+e[t];n.length>0&&(n+="&"),n+=s}})),n},langauge:"text"})]})},v=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"URL parameters to JSON"}),Object(o.jsx)(d,{label:"URL Parameters Input"}),Object(o.jsx)(p,{label:"Output",btnLabel:"Convert",func:function(){var t=document.getElementById("inputStr").value.split("&"),e={};return t.map((function(t){e[t.split("=")[0]]=t.split("=")[1]})),JSON.stringify(e,null,"\t")},langauge:"json"})]})};var y=function(){return Object(o.jsx)(l.a,{basename:"/",children:Object(o.jsxs)("div",{className:"App container mt-5",children:[Object(o.jsx)(h,{}),Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{path:"/my_string_utils/",exact:!0,children:Object(o.jsx)(x,{})}),Object(o.jsx)(i.a,{path:"/my_string_utils/json_to_string",children:Object(o.jsx)(f,{})}),Object(o.jsx)(i.a,{path:"/my_string_utils/string_to_json",children:Object(o.jsx)(_,{})}),Object(o.jsx)(i.a,{path:"/my_string_utils/json_to_urlparams",children:Object(o.jsx)(S,{})}),Object(o.jsx)(i.a,{path:"/my_string_utils/urlparams_to_json",children:Object(o.jsx)(v,{})})]})]})})};n(72);a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root"))}},[[73,152,153]]]);
//# sourceMappingURL=main.f822ff48.chunk.js.map