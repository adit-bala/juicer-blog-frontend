(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{21:function(e,t,a){},45:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},83:function(e,t,a){},94:function(e,t){},97:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(46),r=a.n(s),n=(a(55),a(56),a(15)),i=a.n(n),l=a(17),o=a(10),j=a(14),u=a.n(j),b=(a(21),a(4)),d=a(0);function h(e){var t=e.article,a=e.author;return Object(d.jsxs)("div",{className:"post-preview",children:[Object(d.jsxs)(b.b,{className:"article-title",to:"".concat("/juicer-blog-frontend","/").concat(t.slug),children:[" ",t.title," "]}),Object(d.jsxs)("div",{className:"author-date-div",children:[Object(d.jsxs)("h6",{className:"article-author",children:[" ",a.name," "]}),Object(d.jsxs)("h6",{className:"article-date",children:[" ",O(t.publishedAt)," "]})]}),Object(d.jsxs)("h4",{className:"article-desc",children:[" ",t.description," "]})]})}function O(e){var t=new Date(e);return["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]+"\n"+String(t.getDate()).padStart(2,"0")+", "+t.getFullYear()}a(83),a.p;var p=a.p+"static/media/Adit Bala.535e80d0.png",m=a.p+"static/media/Ben DiMarco.7f37dab0.png",x=a.p+"static/media/adit-and-ben.35156e6c.png",v=function(e){var t=e.author,a=e.switchAuthor,c=e.articlePage,s="Adit Bala"===t.name?p:m,r=(s="Adit and Ben"===t.name?x:s)===p?m:p;return Object(d.jsxs)("div",{className:"sidebar-container",children:[Object(d.jsxs)("div",{className:"top-sidebar",children:[Object(d.jsxs)("div",{className:"pfp-container",children:[Object(d.jsx)("img",{className:"pfp",src:s}),Object(d.jsx)("img",{className:"pfp-inactive",src:r})]}),Object(d.jsxs)("div",{className:"blog-name-div",children:[Object(d.jsx)("h1",{className:"blog-name-1",children:"the juicer"}),Object(d.jsx)("h1",{className:"blog-name-2",children:"blog"})]}),Object(d.jsx)("div",{className:"divider"})]}),Object(d.jsxs)("div",{className:"author-desc-container",children:[Object(d.jsx)("div",{className:"author-name-div",children:Object(d.jsx)("h1",{className:"author-name",children:t.name})}),Object(d.jsx)("p",{className:"author-desc",children:t.bio})]}),c?Object(d.jsx)(d.Fragment,{}):Object(d.jsxs)("div",{onClick:a,className:"switch-div",children:[Object(d.jsx)("svg",{class:"switch-icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{id:"switch-path",d:"M20.944 12.979c-.489 4.509-4.306 8.021-8.944 8.021-2.698 0-5.112-1.194-6.763-3.075l1.245-1.633c1.283 1.645 3.276 2.708 5.518 2.708 3.526 0 6.444-2.624 6.923-6.021h-2.923l4-5.25 4 5.25h-3.056zm-15.864-1.979c.487-3.387 3.4-6 6.92-6 2.237 0 4.228 1.059 5.51 2.698l1.244-1.632c-1.65-1.876-4.061-3.066-6.754-3.066-4.632 0-8.443 3.501-8.941 8h-3.059l4 5.25 4-5.25h-2.92z"})}),Object(d.jsx)("a",{class:"switch-btn",children:"Switch Blogs"})]}),Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsx)("div",{className:"nav-link-div",children:Object(d.jsx)(b.b,{className:"nav-link",to:"".concat("/juicer-blog-frontend","/"),children:"Home"})}),Object(d.jsx)("div",{className:"nav-link-div",children:Object(d.jsx)(b.b,{className:"nav-link",to:"".concat("/juicer-blog-frontend","/about"),children:"About"})})]})]})},g=function(e){var t=e.navAuthor,a=e.articleList,c=e.switchAuthors;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"page-content",children:[Object(d.jsx)(v,{author:t,switchAuthor:c,articlePage:!1}),Object(d.jsx)("div",{className:"article-list-container",children:a.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{article:e.attributes,author:t},e.attributes.slug.toString()),Object(d.jsx)("div",{className:"read-btn-container",children:Object(d.jsx)(b.b,{className:"read-btn",to:"".concat("/juicer-blog-frontend","/").concat(e.attributes.slug),children:"Read More"},e.id.toString())})]},e.id.toString())}))})]})})};function f(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)({}),n=Object(o.a)(r,2),j=n[0],b=n[1],h=Object(c.useState)({}),O=Object(o.a)(h,2),p=O[0],m=O[1],x=Object(c.useState)({}),v=Object(o.a)(x,2),f=v[0],N=v[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("https://juicer-blogs.herokuapp.com/api/creators/1?populate=%2A");case 3:return t=e.sent,e.next=6,u.a.get("https://juicer-blogs.herokuapp.com/api/creators/2?populate=%2A");case 6:return a=e.sent,e.abrupt("return",[t,a]);case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){var t=e[0],a=e[1];s(t.data.data.attributes.creators.data),b(t.data.data.attributes),m(a.data.data.attributes.creators.data),N(a.data.data.attributes)}))}),[]),Object(d.jsx)(g,{navAuthor:j,articleList:a,switchAuthors:function(){var e=a,t=j;s(p),b(f),m(e),N(t)}})}var N=a(2),w=a(49);a(45);function A(e){var t=e.article;return Object(d.jsxs)("div",{className:"post-preview",children:[Object(d.jsxs)("h1",{className:"title",children:[" ",t.attributes.title," "]}),Object(d.jsxs)("h4",{className:"desc",children:[" ",t.attributes.description," "]}),Object(d.jsxs)("div",{className:"author-date-container",children:[Object(d.jsxs)("h6",{className:"author",children:[" ",t.attributes.creator.data.attributes.name," "]}),Object(d.jsxs)("h6",{className:"date",children:[" ",k(t.attributes.publishedAt)," "]})]})]})}function k(e){var t=new Date(e);return["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]+"\n"+String(t.getDate()).padStart(2,"0")+", "+t.getFullYear()}function S(){var e=Object(N.g)().slug,t=Object(N.f)(),a=Object(c.useState)(!0),s=Object(o.a)(a,2),r=s[0],n=s[1],j=Object(c.useState)({articles:[],errors:null}),b=Object(o.a)(j,2),h=b[0],O=b[1];Object(c.useEffect)((function(){function t(){return(t=Object(l.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("https://juicer-blogs.herokuapp.com/api/articles?populate=%2a&filters[slug][$eq]=".concat(e));case 3:a=t.sent,O({articles:a.data.data}),n(!1),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),O({errors:t.t0});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]);var p=h.articles,m=h.errors,x=p[0];return m?Object(d.jsxs)("div",{children:["An error occured: ",m.message]}):r?Object(d.jsx)("div",{}):Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"page-content",children:[Object(d.jsx)(v,{author:x.attributes.creator.data.attributes,articlePage:!0}),Object(d.jsxs)("div",{className:"article-list-container",children:[Object(d.jsx)("button",{class:"article-content",onClick:function(){return t.goBack()},children:"Back"}),Object(d.jsx)(A,{article:x}),Object(d.jsx)("div",{className:"article-content",children:Object(d.jsx)(w.a,{markdown:x.attributes.body,options:{emoji:!0}})})]})]})})}function y(){return Object(d.jsx)("div",{children:Object(d.jsx)(b.a,{children:Object(d.jsxs)(N.c,{children:[Object(d.jsx)(N.a,{path:"".concat("/juicer-blog-frontend","/"),exact:!0,children:Object(d.jsx)(f,{})}),Object(d.jsx)(N.a,{path:"".concat("/juicer-blog-frontend","/:slug"),children:Object(d.jsx)(S,{})})]})})})}var F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,98)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),r(e),n(e)}))};r.a.render(Object(d.jsx)(b.a,{basename:"juicer-blog-frontend",children:Object(d.jsx)(y,{})}),document.getElementById("root")),F()}},[[97,1,2]]]);
//# sourceMappingURL=main.8189118c.chunk.js.map