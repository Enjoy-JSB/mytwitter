(this.webpackJsonptwitter=this.webpackJsonptwitter||[]).push([[0],{32:function(e,t,a){e.exports=a(50)},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),u=a(4),i=a(16),s=a(2),o=a(5),m=a.n(o),p=a(10),f=a(18);a(38),a(40),a(51);f.initializeApp({apiKey:"AIzaSyD0qz0jsmEzI2hRLBcyJhdu1G-6GeRiJek",authDomain:"mytweeter-3b0b9.firebaseapp.com",databaseURL:"https://mytweeter-3b0b9.firebaseio.com",projectId:"mytweeter-3b0b9",storageBucket:"mytweeter-3b0b9.appspot.com",messagingSenderId:"897905125321",appId:"1:897905125321:web:14e9eb8cb9f99b0f9bea18"});var d=f,b=f.auth(),E=f.firestore(),h=f.storage(),v=function(e){var t=e.userObj,a=e.refreshUser,c=Object(s.f)(),l=Object(n.useState)(t.displayName),i=Object(u.a)(l,2),o=i[0],f=i[1],d=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.displayName===o){e.next=5;break}return e.next=4,t.updateProfile({displayName:o});case 4:a();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:d,className:"profileForm"},r.a.createElement("input",{type:"text",placeholder:"\uc774\ub984 \uc791\uc131",value:o,onChange:function(e){var t=e.target.value;f(t)},className:"formInput"}),r.a.createElement("input",{type:"submit",value:"\ud504\ub85c\ud544 \uc5c5\ub370\uc774\ud2b8",onSubmit:d,className:"formBtn",style:{marginTop:10}})),r.a.createElement("span",{className:"formBtn cancelBtn logOut",onClick:function(){b.signOut(),c.push("/")}},"\ub85c\uadf8\uc544\uc6c3"))},g=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(u.a)(l,2),s=i[0],o=i[1],f=Object(n.useState)(!0),d=Object(u.a)(f,2),E=d[0],h=d[1],v=Object(n.useState)(""),g=Object(u.a)(v,2),y=g[0],j=g[1],w=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&o(n)},O=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!E){e.next=8;break}return e.next=5,b.createUserWithEmailAndPassword(a,s);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,b.signInWithEmailAndPassword(a,s);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),j(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:O,className:"container"},r.a.createElement("input",{name:"email",type:"email",placeholder:"email",required:!0,value:a,onChange:w,className:"authInput"}),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:s,onChange:w,className:"authInput"}),r.a.createElement("input",{type:"submit",className:"authInput authSubmit",value:E?"\uacc4\uc815 \uc0dd\uc131":"\ub85c\uadf8\uc778"}),y&&r.a.createElement("span",{className:"authError"},y)),r.a.createElement("span",{onClick:function(){return h((function(e){return!e}))},className:"authSwitch"},E?"\ub85c\uadf8\uc778":"\uacc4\uc815 \uc0dd\uc131"))},y=a(6),j=a(17),w=function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new d.auth.GoogleAuthProvider:"github"===a&&(n=new d.auth.GithubAuthProvider),e.next=4,b.signInWithPopup(n);case 4:r=e.sent,console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authContainer"},r.a.createElement(y.a,{icon:j.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),r.a.createElement(g,null),r.a.createElement("div",{className:"authBtns"},r.a.createElement("button",{name:"google",onClick:e,className:"authBtn"},"\uad6c\uae00 \uacc4\uc815 \uc774\uc6a9 ",r.a.createElement(y.a,{icon:j.b})),r.a.createElement("button",{name:"github",onClick:e,className:"authBtn"},"\uae43\ud5c8\ube0c \uacc4\uc815 \uc774\uc6a9 ",r.a.createElement(y.a,{icon:j.a}))))},O=a(31),x=a(12),N=function(e){var t=e.tweetObj,a=e.isOwner,c=Object(n.useState)(!1),l=Object(u.a)(c,2),i=l[0],s=l[1],o=Object(n.useState)(t.text),f=Object(u.a)(o,2),d=f[0],b=f[1],v=function(){var e=Object(p.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=window.confirm("Are you sure you want to delete this tweet?"),console.log(a),!a){e.next=7;break}return e.next=5,E.doc("tweets/".concat(t.id)).delete();case 5:return e.next=7,h.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){return s((function(e){return!e}))},j=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,E.doc("tweets/".concat(t.id)).update({text:d});case 3:g();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,t.creatorName||"\uc775\uba85"),r.a.createElement("div",{className:"nweet",style:{marginTop:"10px"}},i?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:j},r.a.createElement("input",{type:"text",placeholder:"\ud2b8\uc717\uc744 \uc218\uc815\ud558\uc138\uc694",value:d,onChange:function(e){var t=e.target.value;b(t)},required:!0,className:"formInput"}),r.a.createElement("input",{type:"submit",value:"\ud2b8\uc717 \uc5c5\ub370\uc774\ud2b8",className:"formBtn"})),r.a.createElement("button",{onClick:g,className:"formBtn cancelBtn"},"\ucde8\uc18c")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl,width:"50px",height:"50px"}),a&&r.a.createElement("div",{class:"nweet__actions"},r.a.createElement("span",{onClick:v},r.a.createElement(y.a,{icon:x.d})),r.a.createElement("span",{onClick:g},r.a.createElement(y.a,{icon:x.a}))))))},k=a(53),S=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],i=c[1],s=Object(n.useState)(""),o=Object(u.a)(s,2),f=o[0],d=o[1],b=function(){var e=Object(p.a)(m.a.mark((function e(a){var n,r,c,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),""!==l){e.next=3;break}return e.abrupt("return");case 3:if(n="",""===f){e.next=12;break}return r=h.ref().child("".concat(t.uid,"/").concat(Object(k.a)())),e.next=8,r.putString(f,"data_url");case 8:return c=e.sent,e.next=11,c.ref.getDownloadURL();case 11:n=e.sent;case 12:return u={text:l,createdAt:Date.now(),creatorId:t.uid,creatorName:t.displayName,attachmentUrl:n},e.next=15,E.collection("tweets").add(u);case 15:i(""),d("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:b,className:"factoryForm"},r.a.createElement("div",{className:"factoryInput__container"},r.a.createElement("input",{className:"factoryInput__input",type:"text",value:l,onChange:function(e){var t=e.target.value;i(t)},placeholder:"\ubb34\uc2a8 \uc0dd\uac01\uc744 \ud558\uace0 \uacc4\uc2e0\uac00\uc694?",maxLength:120}),r.a.createElement("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})),r.a.createElement("label",{for:"attach-file",className:"factoryInput__label"},r.a.createElement("span",null,"\uc0ac\uc9c4 \ucd94\uac00"),r.a.createElement(y.a,{icon:x.b})),r.a.createElement("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;d(t)},a.readAsDataURL(t)},style:{opacity:0}}),f&&r.a.createElement("div",{className:"factoryForm__attachment"},r.a.createElement("img",{src:f,style:{backgroundImage:f}}),r.a.createElement("div",{className:"factoryForm__clear",onClick:function(){return d("")}},r.a.createElement("span",null,"\uc81c\uac70\ud558\uae30"),r.a.createElement(y.a,{icon:x.c}))))},I=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(u.a)(a,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){E.collection("tweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(O.a)({id:e.id},e.data())}));i(t)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(S,{userObj:t}),r.a.createElement("div",{style:{marginTop:30}},l.map((function(e){return r.a.createElement(N,{key:e.id,tweetObj:e,isOwner:e.creatorId===t.uid})}))))},F=function(e){var t=e.userObj;return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",justifyContent:"center",marginTop:50}},r.a.createElement("li",null,r.a.createElement(i.b,{to:"/",style:{marginRight:10}},r.a.createElement(y.a,{icon:j.c,color:"#04AAFF",size:"2x"}))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12}},r.a.createElement(y.a,{icon:x.e,color:"#04AAFF",size:"2x"}),r.a.createElement("span",{style:{marginTop:10}},t.displayName?"".concat(t.displayName,"\uc758 \ud504\ub85c\ud544"):"\ud504\ub85c\ud544")))))},C=function(e){var t=e.isLoggedIn,a=e.userObj,n=e.refreshUser;return r.a.createElement(i.a,null,t&&r.a.createElement(F,{userObj:a}),r.a.createElement(s.c,null,t?r.a.createElement("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"}},r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(I,{userObj:a})),r.a.createElement(s.a,{exact:!0,path:"/profile"},r.a.createElement(v,{userObj:a,refreshUser:n}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(w,null)))))};var A=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),i=Object(u.a)(l,2),s=i[0],o=i[1];return Object(n.useEffect)((function(){b.onAuthStateChanged((function(e){o(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(C,{refreshUser:function(){var e=b.currentUser;o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(s),userObj:s}):"Initializing...",r.a.createElement("footer",null,"\xa9 ",(new Date).getFullYear()," \ub4dc\uc704\ud130"))};a(49);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.1195861d.chunk.js.map