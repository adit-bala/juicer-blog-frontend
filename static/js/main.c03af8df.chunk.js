(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{21:function(e,t,a){},45:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},84:function(e,t,a){},95:function(e,t){},98:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),r=a(46),n=a.n(r),i=(a(56),a(57),a(15)),l=a.n(i),o=a(17),j=a(10),d=a(14),b=a.n(d),u=(a(21),a(4)),h=a(0);function O(e){var t=e.article,a=e.author;return Object(h.jsxs)("div",{className:"post-preview",children:[Object(h.jsxs)(u.b,{className:"article-title",to:"".concat("/juicer-blog-frontend","/").concat(t.slug),children:[" ",t.title," "]}),Object(h.jsxs)("div",{className:"author-date-div",children:[Object(h.jsxs)("h6",{className:"article-author",children:[" ",a.name," "]}),Object(h.jsxs)("h6",{className:"article-date",children:[" ",m(t.publishedAt)," "]})]}),Object(h.jsxs)("h4",{className:"article-desc",children:[" ",t.description," "]})]})}function m(e){var t=new Date(e);return["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]+"\n"+String(t.getDate()).padStart(2,"0")+", "+t.getFullYear()}a(84),a.p;var p=a.p+"static/media/Adit Bala.535e80d0.png",g=a.p+"static/media/Ben DiMarco.7f37dab0.png",v=a.p+"static/media/adit-and-ben.35156e6c.png",x=function(e){var t=e.author,a=e.switchAuthor,c=e.articlePage,s="Adit Bala"===t.name?p:g,r=(s="Adit and Ben"===t.name?v:s)===p?g:p;return Object(h.jsxs)("div",{className:"sidebar-container",children:[Object(h.jsxs)("div",{className:"top-sidebar",children:[Object(h.jsxs)("div",{className:"pfp-container",children:[Object(h.jsx)("img",{className:"pfp",src:s}),Object(h.jsx)("img",{className:"pfp-inactive",src:r})]}),Object(h.jsxs)("div",{className:"blog-name-div",children:[Object(h.jsx)("h1",{className:"blog-name-1",children:"the juicer"}),Object(h.jsx)("h1",{className:"blog-name-2",children:"blog"})]}),Object(h.jsx)("div",{className:"divider"})]}),Object(h.jsxs)("div",{className:"author-desc-container",children:[Object(h.jsx)("div",{className:"author-name-div",children:Object(h.jsx)("h1",{className:"author-name",children:t.name})}),Object(h.jsx)("p",{className:"author-desc",children:t.bio})]}),c?Object(h.jsx)(h.Fragment,{}):Object(h.jsxs)("div",{onClick:a,className:"switch-div",children:[Object(h.jsx)("svg",{class:"switch-icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{id:"switch-path",d:"M20.944 12.979c-.489 4.509-4.306 8.021-8.944 8.021-2.698 0-5.112-1.194-6.763-3.075l1.245-1.633c1.283 1.645 3.276 2.708 5.518 2.708 3.526 0 6.444-2.624 6.923-6.021h-2.923l4-5.25 4 5.25h-3.056zm-15.864-1.979c.487-3.387 3.4-6 6.92-6 2.237 0 4.228 1.059 5.51 2.698l1.244-1.632c-1.65-1.876-4.061-3.066-6.754-3.066-4.632 0-8.443 3.501-8.941 8h-3.059l4 5.25 4-5.25h-2.92z"})}),Object(h.jsx)("a",{class:"switch-btn",children:"Switch Blogs"})]}),Object(h.jsxs)("div",{className:"navbar",children:[Object(h.jsx)("div",{className:"nav-link-div",children:Object(h.jsx)(u.b,{className:"nav-link",to:"".concat("/juicer-blog-frontend","/"),children:"Home"})}),Object(h.jsx)("div",{className:"nav-link-div",children:Object(h.jsx)(u.b,{className:"nav-link",to:"".concat("/juicer-blog-frontend","/about"),children:"About"})})]})]})},f=function(e){var t=e.navAuthor,a=e.articleList,c=e.switchAuthors;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"page-content",children:[Object(h.jsx)(x,{author:t,switchAuthor:c,articlePage:!1}),Object(h.jsx)("div",{className:"article-list-container",children:a.slice(0).reverse().map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{article:e.attributes,author:t},e.attributes.slug.toString()),Object(h.jsx)("div",{className:"read-btn-container",children:Object(h.jsx)(u.b,{className:"read-btn",to:"".concat("/juicer-blog-frontend","/").concat(e.attributes.slug),children:"Read More"},e.id.toString())})]},e.id.toString())}))})]})})},N=a(49);function w(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)({}),i=Object(j.a)(n,2),d=i[0],u=i[1],O=Object(c.useState)({}),m=Object(j.a)(O,2),p=m[0],g=m[1],v=Object(c.useState)({}),x=Object(j.a)(v,2),w=x[0],A=x[1],k=Object(c.useState)(!1),S=Object(j.a)(k,2),y=S[0],F=S[1],B=s.a.useRef(null);return Object(c.useEffect)((function(){B.current=Object(N.a)({targets:".loading, .loading2, .loading3",translateX:"13rem",rotate:180,borderRadius:"8px",duration:2e3,loop:!0})}),[]),Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://juicer-blogs.herokuapp.com/api/creators/1?populate=%2A");case 3:return t=e.sent,console.log(t),e.next=7,b.a.get("https://juicer-blogs.herokuapp.com/api/creators/2?populate=%2A");case 7:return a=e.sent,F(!0),e.abrupt("return",[t,a]);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.code),console.log(e.t0.message),console.log(e.t0.stack);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){var t=e[0],a=e[1];r(t.data.data.attributes.creators.data),u(t.data.data.attributes),g(a.data.data.attributes.creators.data),A(a.data.data.attributes)}))}),[]),Object(h.jsx)("div",{children:y?Object(h.jsx)(f,{navAuthor:d,articleList:a,switchAuthors:function(){var e=a,t=d;r(p),u(w),g(e),A(t)}}):Object(h.jsxs)("div",{className:"loading-div",children:[Object(h.jsx)("div",{className:"loading"}),Object(h.jsx)("div",{className:"loading2"}),Object(h.jsx)("div",{className:"loading3"})]})})}var A=a(2),k=a(50);a(45);function S(e){var t=e.article;return Object(h.jsxs)("div",{className:"post-preview",children:[Object(h.jsxs)("h1",{className:"title",children:[" ",t.attributes.title," "]}),Object(h.jsxs)("h4",{className:"desc",children:[" ",t.attributes.description," "]}),Object(h.jsxs)("div",{className:"author-date-container",children:[Object(h.jsxs)("h6",{className:"author",children:[" ",t.attributes.creator.data.attributes.name," "]}),Object(h.jsxs)("h6",{className:"date",children:[" ",y(t.attributes.publishedAt)," "]})]})]})}function y(e){var t=new Date(e);return["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]+"\n"+String(t.getDate()).padStart(2,"0")+", "+t.getFullYear()}function F(){var e=Object(A.g)().slug,t=Object(A.f)(),a=Object(c.useState)(!0),s=Object(j.a)(a,2),r=s[0],n=s[1],i=Object(c.useState)({articles:[],errors:null}),d=Object(j.a)(i,2),u=d[0],O=d[1];Object(c.useEffect)((function(){function t(){return(t=Object(o.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get("https://juicer-blogs.herokuapp.com/api/articles?populate=%2a&filters[slug][$eq]=".concat(e));case 3:a=t.sent,O({articles:a.data.data}),n(!1),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),O({errors:t.t0});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]);var m=u.articles,p=u.errors,g=m[0];return p?Object(h.jsxs)("div",{children:["An error occured: ",p.message]}):r?Object(h.jsx)("div",{}):Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"page-content",children:[Object(h.jsx)(x,{author:g.attributes.creator.data.attributes,articlePage:!0}),Object(h.jsxs)("div",{className:"article-list-container",children:[Object(h.jsx)("button",{class:"article-content",onClick:function(){return t.goBack()},children:"Back"}),Object(h.jsx)(S,{article:g}),Object(h.jsx)("div",{className:"article-content",children:Object(h.jsx)(k.a,{markdown:g.attributes.body,options:{emoji:!0}})})]})]})})}function B(){return Object(h.jsx)("div",{children:Object(h.jsx)(u.a,{children:Object(h.jsxs)(A.c,{children:[Object(h.jsx)(A.a,{path:"".concat("/juicer-blog-frontend","/"),exact:!0,children:Object(h.jsx)(w,{})}),Object(h.jsx)(A.a,{path:"".concat("/juicer-blog-frontend","/:slug"),children:Object(h.jsx)(F,{})})]})})})}var M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,99)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),r(e),n(e)}))};n.a.render(Object(h.jsx)(u.a,{basename:"juicer-blog-frontend",children:Object(h.jsx)(B,{})}),document.getElementById("root")),M()}},[[98,1,2]]]);
//# sourceMappingURL=main.c03af8df.chunk.js.map