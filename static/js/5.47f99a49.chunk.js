(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{227:function(e,a,t){"use strict";t.d(a,"b",(function(){return s})),t.d(a,"a",(function(){return n}));var s=function(e){return e?void 0:"field is req"},n=function(e){return function(a){return a.length>e?"max length is ".concat(e," symbols"):void 0}}},228:function(e,a,t){"use strict";t.d(a,"b",(function(){return o})),t.d(a,"a",(function(){return d}));var s=t(3),n=t(232),i=(t(0),t(229)),c=t.n(i),r=t(2),o=function(e){var a=e.input,t=e.meta,i=Object(n.a)(e,["input","meta"]),o=t.touched&&t.error;return Object(r.jsxs)("div",{className:"".concat(c.a.formControl," + ").concat(o?c.a.error:""," "),children:[Object(r.jsx)("div",{children:Object(r.jsx)("textarea",Object(s.a)(Object(s.a)({},a),i))}),o&&Object(r.jsx)("span",{children:t.error}),i.children]})},d=function(e){var a=e.input,t=e.meta,i=Object(n.a)(e,["input","meta"]),o=t.touched&&t.error;return Object(r.jsxs)("div",{className:"".concat(c.a.formControl," + ").concat(o?c.a.error:""," "),children:[Object(r.jsx)("div",{children:Object(r.jsx)("input",Object(s.a)(Object(s.a)({},a),i))}),o&&Object(r.jsx)("span",{children:t.error})]})}},229:function(e,a,t){e.exports={formControl:"FormsControl_formControl__V2fM1",error:"FormsControl_error__JUf5o"}},251:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__3NS-S",dialogsHeader:"Dialogs_dialogsHeader__1-FJn",dialogItems:"Dialogs_dialogItems__330fM",messages:"Dialogs_messages__FramD",message:"Dialogs_message__3Cxsz"}},301:function(e,a,t){e.exports={grid:"DialogItem_grid___5GMf",dialog:"DialogItem_dialog__ospDw",dialogUsername:"DialogItem_dialogUsername__3UNDX",active:"DialogItem_active__1Lzdv",dialogAvatar:"DialogItem_dialogAvatar__3-6Lg",dialogText:"DialogItem_dialogText__3XH3y"}},323:function(e,a,t){"use strict";t.r(a);var s=t(72),n=t(26),i=t(0),c=t.n(i),r=t(251),o=t.n(r),d=t(13),l=t(301),j=t.n(l),m=t(2),u=function(e){var a="/dialogs/"+e.id;return Object(m.jsxs)("div",{className:"".concat(j.a.dialog," ").concat(j.a.active," ").concat(j.a.grid),children:[Object(m.jsx)(d.b,{to:a,children:Object(m.jsx)("img",{src:e.img,alt:"aa",className:j.a.dialogAvatar})}),Object(m.jsx)("div",{className:j.a.dialogText,children:"some text"}),Object(m.jsx)(d.b,{to:a,activeClassName:j.a.active,className:j.a.dialogUsername,children:e.name})]})},g=function(e){return Object(m.jsx)("div",{className:o.a.message,children:e.message})},b=t(108),O=t(107),f=t(228),_=t(227),x=Object(_.a)(100),h=c.a.memo((function(e){var a=e.dialogsPage,t=e.sendMessage,s=Object(n.a)(a.dialogs).map((function(e){return Object(m.jsx)(u,{name:e.name,id:e.id,img:e.img},e.id)})),i=Object(n.a)(a.messages).map((function(e){return Object(m.jsx)(g,{message:e.message,id:e.id},e.id)}));return Object(m.jsxs)("div",{className:o.a.dialogs,children:[Object(m.jsx)("h2",{className:o.a.dialogsHeader,children:" Dialogs"}),Object(m.jsx)("div",{className:o.a.dialogItems,children:s}),Object(m.jsxs)("div",{className:o.a.messages,children:[Object(m.jsx)("div",{children:i}),Object(m.jsx)(v,{onSubmit:function(e){t(e.sendNewMessage)}})]})]})})),v=Object(b.a)({form:"dialogsAddMessageForm"})((function(e){return Object(m.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(m.jsx)(O.a,{placeholder:"create post",component:f.b,name:"sendNewMessage",validate:[_.b,x],children:" "}),Object(m.jsx)("button",{children:"send"})]})})),p=h,N=t(17),D=t(24),A=t(3),I=t(232),C=t(6),M=function(e){return{isAuth:e.auth.isAuth}};a.default=Object(D.compose)(Object(N.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(s.b)(a))}}})),(function(e){return Object(N.b)(M)((function(a){a.isAuth;var t=Object(I.a)(a,["isAuth"]);return a.isAuth?Object(m.jsx)(e,Object(A.a)({},t)):Object(m.jsx)(C.a,{to:"/login"})}))}))(p)}}]);
//# sourceMappingURL=5.47f99a49.chunk.js.map