(this["webpackJsonpreact-bear-book"]=this["webpackJsonpreact-bear-book"]||[]).push([[0],{142:function(e,t,a){e.exports=a(251)},147:function(e,t,a){},251:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),i=(a(147),a(20)),m=a(94),o=a.n(m),u=a(113),s=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=a(260),d=a(259),g=a(32),f=E.a.Title,b=function(e){var t=e.pathname;return r.a.createElement("header",null,r.a.createElement(f,{level:3},"Beer Book App"),r.a.createElement(d.a,null,r.a.createElement(d.a.Item,null,r.a.createElement(g.b,{to:"/"},"Home")),t.length>1?r.a.createElement(d.a.Item,null,t.slice(1)):null))},p=a(253),h=a(258),v=E.a.Text,_=E.a.Link,j=function(){return r.a.createElement("footer",null,r.a.createElement(p.a,{direction:"vertical"},r.a.createElement(v,{strong:!0},"Made on React, Antd and enthusiasm by ",r.a.createElement(_,{href:"https://github.com/atomr-web",target:"_blank"},"atomr")),r.a.createElement(v,null,r.a.createElement(h.a,null)," ",r.a.createElement(_,{href:"https://github.com/atomr-web/react-bear-book",target:"_blank"},"Repository"))))},O=a(43),w=a(60),y=a(59),k=a(30),N=a(257),x=E.a.Title,S=E.a.Text,P=function(e){var t=e.image_url,a=e.name,n=e.tagline,l=e.brewed,c=e.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{lg:{span:6},xs:{span:12},style:{padding:"8px"}},r.a.createElement(N.a,{className:"beer-item"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:t,alt:a})),r.a.createElement("div",{className:"beer-item__title"},r.a.createElement(x,{level:4},a)),r.a.createElement("div",{className:"beer-item__tagline"},r.a.createElement(S,{strong:!0},n)),r.a.createElement("div",{className:"beer-item__date"},r.a.createElement(S,null,"First brewed: "),r.a.createElement(S,{strong:!0},l)),r.a.createElement(g.b,{to:"/id".concat(c)},"More info"))))},L=function(e){var t=e.renderingData,a=e.isLoaded,n=e.currentPage;return a&&t.length>0?r.a.createElement(w.a,{gutter:16},t[n].map((function(e){return r.a.createElement(P,{key:e.id,image_url:e.image_url,name:e.name,tagline:e.tagline,brewed:e.first_brewed,id:e.id})}))):r.a.createElement(y.a,null)},I=a(256),T=function(e){var t=e.currentPage,a=e.paginate,n=e.totalPages;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{defaultPageSize:1,current:t,total:n,onChange:a,style:{marginTop:"30px"}}))},M=a(261),B=a(254),F=M.a.Search,C=function(e){var t=e.query,a=e.changeQuery,n=e.renderingData,l=e.currentPage,c=e.isLoaded,i=e.totalPages,m=e.paginate;return r.a.createElement("div",null,r.a.createElement(F,{placeholder:"Search by name",style:{width:298},allowClear:!0,value:t,onChange:a}),r.a.createElement(B.a,{orientation:"center",style:{color:"#333",fontWeight:"bold"}},n.flat().length," beers found"),r.a.createElement(L,{renderingData:n,currentPage:l,isLoaded:c}),i>1?r.a.createElement(T,{currentPage:l+1,paginate:m,totalPages:i}):null)},D=function(e){var t=function(e,t){var a=Object(n.useState)(!1),r=Object(i.a)(a,2),l=r[0],c=r[1],m=Object(n.useState)([]),o=Object(i.a)(m,2),u=o[0],s=o[1];return Object(n.useEffect)((function(){var a=[],n=[];!function(t,r){for(var l=0;a.length<4;l++){var c=Math.round(Math.random()*(r-t)+t);a.includes(c)||a.push(c)}a.map((function(t){return n.push(e.find((function(e){return e.id===t})))}))}(1,t),s(n),c(!0)}),[e,t]),[u,l]}(e.items,e.amountItems),a=Object(i.a)(t,2),l=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{gutter:16},r.a.createElement(B.a,{orientation:"center",style:{color:"#333",fontWeight:"bold"}},"Another beers"),c?r.a.createElement(w.a,{gutter:16},l.map((function(e){return r.a.createElement(P,{key:e.id,image_url:e.image_url,name:e.name,tagline:e.tagline,brewed:e.first_brewed,id:e.id})}))):r.a.createElement("div",null,"Loading...")))},A=E.a.Title,W=E.a.Text,q=function(e){var t=e.items,a=e.isLoaded,n=e.amountItems,l=Object(O.f)(),c=Object(O.g)(),i=Number(c.id.slice(2)),m=t.flat().find((function(e){return e.id===i}));return a&&void 0!==m?r.a.createElement("div",null,r.a.createElement(w.a,{gutter:16},r.a.createElement(k.a,{span:5,className:"inner-page__image"},r.a.createElement("img",{src:m.image_url,alt:m.name})),r.a.createElement(k.a,{span:19,className:"inner-page__content"},r.a.createElement(A,{level:1},m.name),r.a.createElement(A,{level:2},m.tagline),r.a.createElement(A,{level:4},"First brewed: ",m.first_brewed),r.a.createElement(B.a,{orientation:"center",style:{color:"#333",fontWeight:"bold"}},"Information"),r.a.createElement(w.a,null,r.a.createElement(k.a,{span:24,className:"inner-page__description-item"},r.a.createElement(p.a,{direction:"vertical"},r.a.createElement(W,{strong:!0},"Description: "),r.a.createElement(W,null,m.description))),r.a.createElement(k.a,{span:24,className:"inner-page__description-item"},r.a.createElement(p.a,{direction:"vertical"},r.a.createElement(W,{strong:!0},"Brewers tips: "),r.a.createElement(W,null,m.brewers_tips)))),r.a.createElement(w.a,null,r.a.createElement(k.a,{span:24},r.a.createElement(p.a,{direction:"vertical"},r.a.createElement(W,{strong:!0},"Food pairing:"),r.a.createElement("ul",null,m.food_pairing.map((function(e,t){return r.a.createElement("li",{key:t},e)})))))),r.a.createElement(g.b,{to:"/"},"Back to list"))),r.a.createElement(D,{items:t,amountItems:n})):r.a.createElement("div",{className:"not-found-container"},r.a.createElement(y.a,null),r.a.createElement("div",{className:"not-found-container__text"},r.a.createElement("div",null,"Not found: ",r.a.createElement(W,{strong:!0},l.pathname)),r.a.createElement("div",null,"Invalid url or id value. Max value for id: ",r.a.createElement(W,{strong:!0},n)),r.a.createElement("div",null,"Example url: ",r.a.createElement(W,{strong:!0},"/id1"))),r.a.createElement(g.b,{to:"/"},"Back to home page"))},z=a(255),J=(a(242),function(){var e=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),c=Object(i.a)(l,2),m=c[0],o=c[1];return Object(n.useEffect)((function(){s("".concat("https://api.punkapi.com/v2/beers","?per_page=").concat(80)).then((function(e){r(e),o(!0)}))}),[80]),[a,m]}(),t=Object(i.a)(e,2),a=t[0],l=t[1],c=function(e,t){var a=Object(n.useState)([]),r=Object(i.a)(a,2),l=r[0],c=r[1],m=Object(n.useState)(""),o=Object(i.a)(m,2),u=o[0],s=o[1];return Object(n.useEffect)((function(){for(var a=[],n=e.filter((function(e){return e.name.toLowerCase().startsWith(u.toLowerCase())})),r=0;r<Math.ceil(n.length/t);r++)a[r]=n.slice(r*t,r*t+t);c(a)}),[t,e,u]),[u,s,l]}(a,8),m=Object(i.a)(c,3),o=m[0],u=m[1],E=m[2],d=Object(n.useState)(0),g=Object(i.a)(d,2),f=g[0],p=g[1],h=Object(n.useState)(0),v=Object(i.a)(h,2),_=v[0],w=v[1],y=Object(O.f)().pathname;Object(n.useEffect)((function(){w(E.length)}),[E]),Object(n.useEffect)((function(){window.scrollTo(0,0),u("")}),[y,u]);return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(b,{pathname:y}),r.a.createElement("main",null,r.a.createElement(O.c,null,r.a.createElement(O.a,{exact:!0,path:"/"},r.a.createElement(C,{query:o,changeQuery:function(e){u(e.target.value),w(E.length),p(0)},renderingData:E,currentPage:f,isLoaded:l,paginate:function(e){p(e-1)},totalPages:_})),r.a.createElement(O.a,{path:"/:id"},r.a.createElement(q,{items:a,isLoaded:l,amountItems:80})))),r.a.createElement(j,null),r.a.createElement("div",{className:"spinner "+(l?"hide":"show")},r.a.createElement(z.a,{size:"large"}))))});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g.a,null,r.a.createElement(J,null))),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.76d05c7e.chunk.js.map