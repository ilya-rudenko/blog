(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{117:function(t,e,c){},118:function(t,e,c){},121:function(t,e,c){},122:function(t,e,c){},123:function(t,e,c){},124:function(t,e,c){},221:function(t,e,c){},222:function(t,e,c){"use strict";c.r(e);var a=c(0),n=c.n(a),s=c(37),r=c.n(s),o=c(16),i=c(6),l=c(17),j=c(53),d=c(31),u="ADD_POST",b="DELETE_POST",p="ADD_AUTHOR",O="ADD_TITLE",h="DELETE_TITLE",m=[],x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return[e.payload].concat(Object(d.a)(t));case b:return t.filter((function(t){return t.id!==e.payload}));default:return t}},_=[],f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return[e.payload].concat(Object(d.a)(t));default:return t}},v=[],N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return[e.payload].concat(Object(d.a)(t));case h:return t.filter((function(t){return t!==e.payload}));default:return t}},y=Object(j.a)({posts:x,authors:f,titles:N}),w=Object(j.b)(y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());window.store=w;var g=w,E=(c(117),c(235)),S=c(236),D=(c(118),c(2)),T=function(t){var e=t.title,c=t.addPost;return Object(D.jsxs)("div",{className:"header__wrapper",children:[Object(D.jsx)("h1",{className:"header__text",children:e}),Object(D.jsx)("div",{className:"header__icon-wrapper",children:c?Object(D.jsx)(o.b,{to:"/add-post",children:Object(D.jsx)(E.a,{className:"header__icon",style:{fontSize:40}})}):Object(D.jsx)(o.b,{to:"/",children:Object(D.jsx)(S.a,{className:"header__icon",style:{fontSize:40}})})})]})},C=c(51),M=c.n(C),L=(c(121),function(t){var e=t.id,c=t.title,a=t.date,n=t.authorName;return Object(D.jsx)(o.b,{to:"/post/".concat(e),className:"post-item__link",children:Object(D.jsxs)("div",{className:"post-item__wrapper",children:[Object(D.jsx)("h2",{className:"post-item__title",children:c}),Object(D.jsxs)("div",{className:"post-item__info",children:[Object(D.jsxs)("span",{className:"post-item__author",children:["\u0410\u0432\u0442\u043e\u0440: ",n]}),Object(D.jsx)("span",{className:"post-item__date",children:M()(a).format("HH:mm, D MMMM YYYY")})]})]})})}),k=(c(122),function(){var t=Object(l.c)((function(t){return t.posts}));return Object(D.jsxs)(a.Fragment,{children:[Object(D.jsx)(T,{title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",addPost:!0}),Object(D.jsx)("div",{className:"content-wrapper",children:0===t.length?Object(D.jsx)("div",{className:"placeholder",children:"\u0417\u0434\u0435\u0441\u044c \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u0435\u0439..."}):t.map((function(t){return Object(D.jsx)(L,{title:t.title,id:t.id,authorName:t.authorName,date:t.date},t.id)}))})]})}),I=(c(123),function(t){var e=t.onClick,c=t.text,a=t.type,n=t.style,s=t.to;return s?Object(D.jsx)(o.b,{to:s,children:Object(D.jsx)("button",{onClick:e,className:"button button__".concat(a),style:n,children:c})}):Object(D.jsx)("button",{onClick:e,className:"button button__".concat(a),style:n,children:c})}),Y=(c(124),function(t){var e=t.match.params.postId,c=Object(i.e)(),n=Object(l.b)(),s=Object(l.c)((function(t){return t.posts.filter((function(t){return t.id===e}))}))[0];return s?Object(D.jsxs)(a.Fragment,{children:[Object(D.jsx)(T,{title:s.title}),Object(D.jsxs)("div",{className:"content-wrapper",children:[Object(D.jsx)("div",{className:"post__author",children:s.authorName}),Object(D.jsx)("div",{className:"post__data",children:M()(s.date).format("HH:mm, D MMMM YYYY")}),Object(D.jsx)("hr",{className:"post__separator"}),Object(D.jsx)("div",{className:"post__body",dangerouslySetInnerHTML:{__html:s?s.body:""}}),Object(D.jsx)("hr",{className:"post__separator"}),Object(D.jsx)(I,{text:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c",type:"red",onClick:function(){var t;window.confirm("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c?")&&(n({type:b,payload:e}),n((t=s.title,{type:h,payload:t})),c.push("/"))}})]})]}):Object(D.jsxs)(a.Fragment,{children:[Object(D.jsx)(T,{title:"\u0422\u0430\u043a\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u043d\u0435\u0442"}),Object(D.jsx)("div",{className:"content-wrapper",children:Object(D.jsx)(I,{text:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",type:"blue",to:"/"})})]})}),H=c(54),A=c(104),F=(c(220),c(105)),P=c.n(F),R=c(52),X=c(106),U=c.n(X),z=(c(221),function(){var t=Object(a.useState)(R.EditorState.createEmpty()),e=Object(H.a)(t,2),c=e[0],n=e[1],s=Object(a.useState)(""),r=Object(H.a)(s,2),o=r[0],j=r[1],d=Object(a.useState)(""),b=Object(H.a)(d,2),h=b[0],m=b[1],x=Object(i.e)(),_=Object(l.b)(),f=Object(l.c)((function(t){return t.authors})),v=Object(l.c)((function(t){return t.titles}));return Object(D.jsxs)(a.Fragment,{children:[Object(D.jsx)(T,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c"}),Object(D.jsxs)("div",{className:"content-wrapper",children:[Object(D.jsxs)("form",{children:[Object(D.jsx)("div",{className:"form-text",children:"\u0410\u0432\u0442\u043e\u0440:"}),Object(D.jsx)("input",{value:o,onChange:function(t){j(t.target.value)},list:"authorsList"}),Object(D.jsx)("datalist",{id:"authorsList",children:f.map((function(t,e){return Object(D.jsx)("option",{value:t},e)}))})]}),Object(D.jsxs)("form",{children:[Object(D.jsx)("div",{className:"form-text",children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a:"}),Object(D.jsx)("input",{value:h,onChange:function(t){m(t.target.value)}})]}),Object(D.jsx)(A.Editor,{editorState:c,onEditorStateChange:function(t){n(t)},wrapperClassName:"editor__wrapper",editorClassName:"editor__text-area"}),Object(D.jsx)(I,{text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c",type:"blue",onClick:function(){var t=h.trim(),e=o.trim();""!==e?""!==t?v.includes(t)?alert("\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c"):(_(function(t){var e=t.id,c=t.title,a=t.authorName,n=t.date,s=t.body;return{type:u,payload:{id:e,title:c,authorName:a,date:n,body:s}}}({id:U()(),body:P()(Object(R.convertToRaw)(c.getCurrentContent())),title:h,authorName:e,date:Date.now()})),_(function(t){return{type:O,payload:t}}(t)),f.includes(e)||_(function(t){return{type:p,payload:t}}(e)),x.push("/")):alert("\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"):alert("\u0418\u043c\u044f \u0430\u0432\u0442\u043e\u0440\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c")}})]})]})}),J=function(){return Object(D.jsx)(l.a,{store:g,children:Object(D.jsx)("div",{className:"wrapper",children:Object(D.jsx)("div",{className:"container",children:Object(D.jsxs)(o.a,{basename:"/blog",children:[Object(D.jsx)(i.a,{exact:!0,path:"/",component:k}),Object(D.jsx)(i.a,{exact:!0,path:"/add-post",component:z}),Object(D.jsx)(i.a,{exact:!0,path:"/post/:postId",component:Y})]})})})})};r.a.render(Object(D.jsx)(n.a.StrictMode,{children:Object(D.jsx)(J,{})}),document.getElementById("root"))}},[[222,1,2]]]);
//# sourceMappingURL=main.31ccc7ce.chunk.js.map