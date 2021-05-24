(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{103:function(t,e,c){"use strict";c.r(e);var n,r,o,a,s,u,i=c(0),b=c.n(i),j=c(26),l=c.n(j),O=c(10),d=c(29),g=c(2),f=c(18),h=c(46),p=c.n(h),C=c(3),S=c(8),m=c(11),x=Object(g.c)([],(n={},Object(C.a)(n,m.a.fetchContactsSuccess,(function(t,e){return e.payload})),Object(C.a)(n,m.a.addContactSuccess,(function(t,e){return[].concat(Object(d.a)(t),[e.payload])})),Object(C.a)(n,m.a.deleteContactSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),n)),v=Object(g.c)("",Object(C.a)({},m.a.changeFilter,(function(t,e){return e.payload}))),k=Object(g.c)(!1,(r={},Object(C.a)(r,m.a.fetchContactsRequest,(function(){return!0})),Object(C.a)(r,m.a.fetchContactsSuccess,(function(){return!1})),Object(C.a)(r,m.a.fetchContactsError,(function(){return!1})),Object(C.a)(r,m.a.addContactRequest,(function(){return!0})),Object(C.a)(r,m.a.addContactSuccess,(function(){return!1})),Object(C.a)(r,m.a.addContactError,(function(){return!1})),Object(C.a)(r,m.a.deleteContactRequest,(function(){return!0})),Object(C.a)(r,m.a.deleteContactSuccess,(function(){return!1})),Object(C.a)(r,m.a.deleteContactError,(function(){return!1})),r)),E=Object(S.b)({contacts:x,filter:v,loading:k}),y=c(4),R={name:null,email:null},q=Object(g.c)(R,(o={},Object(C.a)(o,y.a.registerSuccess,(function(t,e){return e.payload.user})),Object(C.a)(o,y.a.loginSuccess,(function(t,e){return e.payload.user})),Object(C.a)(o,y.a.logoutSuccess,(function(){return R})),Object(C.a)(o,y.a.currentUserSuccess,(function(t,e){return e.payload})),o)),U=Object(g.c)("",(a={},Object(C.a)(a,y.a.registerSuccess,(function(t,e){return e.payload.token})),Object(C.a)(a,y.a.loginSuccess,(function(t,e){return e.payload.token})),Object(C.a)(a,y.a.logoutSuccess,(function(){return null})),a)),L=Object(g.c)("",(s={},Object(C.a)(s,y.a.registerSuccess,(function(){return!0})),Object(C.a)(s,y.a.loginSuccess,(function(){return!0})),Object(C.a)(s,y.a.registerError,(function(){return!1})),Object(C.a)(s,y.a.loginError,(function(){return!1})),Object(C.a)(s,y.a.logoutSuccess,(function(){return!1})),Object(C.a)(s,y.a.currentUserError,(function(){return!1})),Object(C.a)(s,y.a.currentUserSuccess,(function(){return!0})),s)),_=Object(g.c)("",(u={},Object(C.a)(u,y.a.registerError,(function(t,e){return e.payload})),Object(C.a)(u,y.a.loginError,(function(t,e){return e.payload})),Object(C.a)(u,y.a.logoutError,(function(t,e){return e.payload})),Object(C.a)(u,y.a.currentUserError,(function(t,e){return e.payload})),u)),I=Object(S.b)({user:q,isLoggedIn:L,token:U,error:_}),w=Object(d.a)(Object(g.d)({serializableCheck:{ignoredActions:[f.a,f.f,f.b,f.c,f.d,f.e]}})),T={key:"loggedIn",storage:p.a,whitelist:["token"]},z=Object(g.a)({reducer:{userData:Object(f.g)(T,I),phonebook:E},middleware:w}),N={store:z,persistor:Object(f.h)(z)},A=c(47),F=c(16),D=(c(61),c(21)),M=c(22),B=c(24),J=c(23),H=c(7),K=c(36),G=c.n(K),P=(c(49),c(25)),Q=function(t){return t.userData.isLoggedIn},V=function(t){return t.userData.user.email},W=c(32),X=c.n(W),Y=c(1),Z=Object(O.b)((function(t){return{isLoggedIn:Q(t)}}))((function(t){var e=t.isLoggedIn;return Object(Y.jsxs)("nav",{children:[Object(Y.jsx)(F.b,{to:"/",exact:!0,className:X.a.nav_link,children:"Home"}),e&&Object(Y.jsx)(F.b,{to:"/contacts",className:X.a.nav_link,children:"Contacts"})]})})),$={onBtnClick:P.a.userLogout},tt=Object(O.b)((function(t){return{userMail:V(t)}}),$)((function(t){var e=t.userMail,c=t.onBtnClick;return Object(Y.jsxs)("div",{children:[e,Object(Y.jsx)("button",{type:"button",color:"inherit",onClick:c,children:"Logout"})]})})),et=c(35),ct=c.n(et),nt=function(){return Object(Y.jsxs)("div",{children:[Object(Y.jsx)(F.b,{to:"/register",exact:!0,className:ct.a.nav_link,children:"Register"}),Object(Y.jsx)(F.b,{to:"/login",className:ct.a.nav_link,children:"Login"})]})},rt=c(48),ot=c.n(rt),at=function(t){Object(B.a)(c,t);var e=Object(J.a)(c);function c(){return Object(D.a)(this,c),e.apply(this,arguments)}return Object(M.a)(c,[{key:"render",value:function(){return Object(Y.jsxs)("header",{className:ot.a.header,children:[Object(Y.jsx)(Z,{}),this.props.isUserLoggedIn?Object(Y.jsx)(tt,{}):Object(Y.jsx)(nt,{})]})}}]),c}(i.Component),st=Object(O.b)((function(t){return{isUserLoggedIn:Q(t)}}))(at),ut=c(17),it=c(28),bt=Object(O.b)((function(t){return{isLoggedIn:Q(t)}}))((function(t){var e=t.component,c=t.isLoggedIn,n=t.redirectTo,r=Object(it.a)(t,["component","isLoggedIn","redirectTo"]);return Object(Y.jsx)(H.b,Object(ut.a)(Object(ut.a)({},r),{},{render:function(t){return c?Object(Y.jsx)(e,Object(ut.a)({},t)):Object(Y.jsx)(H.a,{to:n})}}))})),jt=Object(O.b)((function(t){return{isLoggedIn:Q(t)}}))((function(t){var e=t.component,c=t.isLoggedIn,n=t.redirectTo,r=Object(it.a)(t,["component","isLoggedIn","redirectTo"]);return Object(Y.jsx)(H.b,Object(ut.a)(Object(ut.a)({},r),{},{render:function(t){return c&&r.restricted?Object(Y.jsx)(H.a,{to:n}):Object(Y.jsx)(e,Object(ut.a)({},t))}}))})),lt=Object(i.lazy)((function(){return c.e(0).then(c.bind(null,110))})),Ot=Object(i.lazy)((function(){return c.e(3).then(c.bind(null,113))})),dt=Object(i.lazy)((function(){return c.e(4).then(c.bind(null,111))})),gt=Object(i.lazy)((function(){return c.e(1).then(c.bind(null,112))})),ft=function(t){Object(B.a)(c,t);var e=Object(J.a)(c);function c(){return Object(D.a)(this,c),e.apply(this,arguments)}return Object(M.a)(c,[{key:"componentDidMount",value:function(){this.props.getStorageUser()}},{key:"render",value:function(){return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(st,{}),Object(Y.jsx)(i.Suspense,{fallback:Object(Y.jsx)(G.a,{type:"TailSpin",color:"teal",height:130,width:130,style:{textAlign:"center"}}),children:Object(Y.jsxs)(H.d,{children:[Object(Y.jsx)(jt,{path:"/",exact:!0,component:lt}),Object(Y.jsx)(jt,{path:"/register",restricted:!0,redirectTo:"/contacts",component:dt}),Object(Y.jsx)(jt,{path:"/login",restricted:!0,redirectTo:"/contacts",component:gt}),Object(Y.jsx)(bt,{path:"/contacts",redirectTo:"/login",component:Ot})]})})]})}}]),c}(i.Component),ht=Object(O.b)(null,(function(t){return{getStorageUser:function(){return t(P.a.getCurrentUser())}}}))(ft);l.a.render(Object(Y.jsx)(b.a.StrictMode,{children:Object(Y.jsx)(O.a,{store:N.store,children:Object(Y.jsx)(A.a,{loading:null,persistor:N.persistor,children:Object(Y.jsx)(F.a,{children:Object(Y.jsx)(ht,{})})})})}),document.getElementById("root"))},11:function(t,e,c){"use strict";var n=c(2),r=Object(n.b)("contacts/fetchContactsRequest"),o=Object(n.b)("contacts/fetchContactsSuccess"),a=Object(n.b)("contacts/fetchContactsError"),s=Object(n.b)("contacts/addContactRequest"),u=Object(n.b)("contacts/addContactSuccess"),i=Object(n.b)("contacts/addContactError"),b=Object(n.b)("contacts/deleteContactRequest"),j=Object(n.b)("contacts/deleteContactSuccess"),l=Object(n.b)("contacts/deleteContactError"),O=Object(n.b)("contacts/changeFilter");e.a={fetchContactsRequest:r,fetchContactsSuccess:o,fetchContactsError:a,addContactRequest:s,addContactSuccess:u,addContactError:i,deleteContactRequest:b,deleteContactSuccess:j,deleteContactError:l,changeFilter:O}},25:function(t,e,c){"use strict";var n=c(19),r=c.n(n),o=c(4);r.a.defaults.baseURL="https://connections-api.herokuapp.com";var a=function(t){r.a.defaults.headers.common.Authorization="Bearer ".concat(t)},s=function(){r.a.defaults.headers.common.Authorization=""};e.a={userRegister:function(t){return function(e){var c={name:t.name,email:t.email,password:t.password};e(o.a.registerRequest()),r.a.post("/users/signup",c).then((function(t){var c=t.data;a(c.token),e(o.a.registerSuccess(c))})).catch((function(t){e(o.a.registerError(t.message))}))}},userLogin:function(t){return function(e){var c={email:t.email,password:t.password};e(o.a.loginRequest()),r.a.post("/users/login",c).then((function(t){var c=t.data;a(c.token),e(o.a.loginSuccess(c))})).catch((function(t){return e(o.a.registerError(t.message))}))}},userLogout:function(){return function(t){t(o.a.logoutRequest()),r.a.post("/users/logout").then((function(){s(),t(o.a.logoutSuccess())})).catch((function(e){return t(o.a.logoutError(e.message))}))}},getCurrentUser:function(){return function(t,e){var c=e().userData.token;c&&(a(c),t(o.a.currentUserRequest()),r.a.get("/users/current").then((function(e){var c=e.data;return t(o.a.currentUserSuccess(c))})).catch((function(e){return t(o.a.currentUserError(e.message))})))}}}},32:function(t,e,c){t.exports={nav_link:"Navigation_nav_link__3CFeK"}},35:function(t,e,c){t.exports={nav_link:"AuthMenu_nav_link__1Fo8o"}},4:function(t,e,c){"use strict";var n=c(2),r=Object(n.b)("contacts/loginRequest"),o=Object(n.b)("contacts/loginSuccess"),a=Object(n.b)("contacts/loginError"),s=Object(n.b)("contacts/registerRequest"),u=Object(n.b)("contacts/registerSuccess"),i=Object(n.b)("contacts/registerError"),b=Object(n.b)("contacts/logoutRequest"),j=Object(n.b)("contacts/logoutSuccess"),l=Object(n.b)("contacts/logoutError"),O=Object(n.b)("contacts/currentUserRequest"),d=Object(n.b)("contacts/currentUserSuccess"),g=Object(n.b)("contacts/currentUserError");e.a={loginRequest:r,loginSuccess:o,loginError:a,logoutError:l,logoutRequest:b,logoutSuccess:j,registerError:i,registerRequest:s,registerSuccess:u,currentUserError:g,currentUserRequest:O,currentUserSuccess:d}},48:function(t,e,c){t.exports={header:"AppNav_header__3JIyd"}},61:function(t,e,c){}},[[103,5,6]]]);
//# sourceMappingURL=main.8836c801.chunk.js.map