(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/logo.b0015d06.svg"},17:function(e,t,a){e.exports=a(32)},22:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),l=a.n(c),i=(a(22),a(9)),o=a.n(i),s=a(12),m=a(7),u=(a(24),a(25),a(5)),d=a.n(u),p=(a(26),a(30),a(33),a(14)),E=a.n(p),h=a(15),v=a(16);d.a.initializeApp({apiKey:"AIzaSyDtQtB9xIMxjfiL5S1sG60MNJ06zK_9GMg",authDomain:"react-curd-bef16.firebaseapp.com",projectId:"react-curd-bef16",storageBucket:"react-curd-bef16.appspot.com",messagingSenderId:"977324988674",appId:"1:977324988674:web:7ff31264f6684c35db8a1b",measurementId:"G-0JDZTQ7EYB"});var f=d.a.auth(),g=d.a.firestore();function b(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8"},r.a.createElement("div",{class:"hexagon-menu clear"},r.a.createElement("div",{class:"hexagon-item"},r.a.createElement("div",{class:"hex-item"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{class:"hex-item"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("a",{class:"hex-content"},r.a.createElement("span",{class:"hex-content-inner"},r.a.createElement("span",{class:"icon"},r.a.createElement("i",{class:"fa-brands fa-google"})),r.a.createElement("a",{className:"sign-in",onClick:function(){var e=new d.a.auth.GoogleAuthProvider;f.signInWithPopup(e)}},r.a.createElement("span",{class:"title"},"Sign in with Google"))),r.a.createElement("svg",{viewBox:"0 0 173.20508075688772 200",height:"200",width:"174",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z",fill:"#1e2530"})))))))),r.a.createElement("h3",{class:"animate-charcter d-flex justify-content-center"},"Do not violate the community guidelines or you will be banned for life!"))}function w(){return f.currentUser&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"navigation"},r.a.createElement("a",{class:"button",href:"",onClick:function(){return f.signOut()}},r.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"}),r.a.createElement("div",{class:"logout"},"SignOut"))))}function x(){var e=Object(n.useRef)(),t=g.collection("messages"),a=t.orderBy("createdAt").limit(25),c=Object(v.a)(a,{idField:"id"}),l=Object(m.a)(c,1)[0],i=Object(n.useState)(""),u=Object(m.a)(i,2),p=u[0],E=u[1],h=function(){var a=Object(s.a)(o.a.mark((function a(n){var r,c,l;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),r=f.currentUser,c=r.uid,l=r.photoURL,a.next=4,t.add({text:p,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:c,photoURL:l});case 4:E(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,l&&l.map((function(e){return r.a.createElement(y,{key:e.id,message:e})})),r.a.createElement("span",{ref:e})),r.a.createElement("form",{onSubmit:h},r.a.createElement("input",{value:p,onChange:function(e){return E(e.target.value)},class:"animate-charcter",placeholder:"say something nice"}),r.a.createElement("button",{type:"submit",disabled:!p},r.a.createElement("i",{class:"fa-solid fa-paper-plane"}))))}function y(e){var t=e.message,a=t.text,n=t.uid,c=t.photoURL,l=n===f.currentUser.uid?"sent":"received";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"message ".concat(l)},r.a.createElement("img",{src:c||"https://api.adorable.io/avatars/23/abott@adorable.png"}),r.a.createElement("p",null,a)))}var j=function(){var e=Object(h.a)(f),t=Object(m.a)(e,1)[0];return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h2",{class:"header-h1-tag"},"Chat With Sanjay"),r.a.createElement(w,null)),r.a.createElement("section",null,r.a.createElement("div",{class:"pt-table desktop-768"},r.a.createElement("div",{class:"pt-tablecell page-home relative"},r.a.createElement("div",{class:"overlay"}),t?r.a.createElement(x,null):r.a.createElement(b,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.c6f40a98.chunk.js.map