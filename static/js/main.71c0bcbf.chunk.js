(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{33:function(e,t,a){},45:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},83:function(e,t,a){},94:function(e,t){},97:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(46),r=a.n(s),n=(a(55),a(56),a(14)),i=a.n(n),l=a(17),j=a(10),o=a(16),b=a.n(o),d=(a(33),a(6)),u=a(0);function h(e){var t=e.article,a=e.author;return Object(u.jsxs)("div",{className:"post-preview",children:[Object(u.jsxs)(d.b,{className:"article-title",to:"".concat("/juicer-blog-frontend","/").concat(t.slug),children:[" ",t.title," "]}),Object(u.jsxs)("div",{className:"author-date-div",children:[Object(u.jsxs)("h6",{className:"article-author",children:[" ",a.name," "]}),Object(u.jsxs)("h6",{className:"article-date",children:[" ",O(t.publishedAt)," "]})]}),Object(u.jsxs)("h4",{className:"article-desc",children:[" ",t.description," "]})]})}function O(e){var t=new Date(e);return["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]+"\n"+String(t.getDate()).padStart(2,"0")+", "+t.getFullYear()}a(83),a.p;var p=a.p+"static/media/Adit Bala.535e80d0.png",m=a.p+"static/media/Ben DiMarco.7f37dab0.png",x=function(e){var t=e.author,a=e.switchAuthor,c=e.articlePage,s="Adit Bala"===t.name?p:m,r=s===p?m:p;return Object(u.jsxs)("div",{className:"sidebar-container",children:[Object(u.jsxs)("div",{className:"top-sidebar",children:[Object(u.jsxs)("div",{className:"pfp-container",children:[Object(u.jsx)("img",{className:"pfp",src:s}),Object(u.jsx)("img",{className:"pfp-inactive",src:r})]}),Object(u.jsxs)("div",{className:"blog-name-div",children:[Object(u.jsx)("h1",{className:"blog-name-1",children:"the juicer"}),Object(u.jsx)("h1",{className:"blog-name-2",children:"blog"})]}),Object(u.jsx)("div",{className:"divider"})]}),Object(u.jsxs)("div",{className:"author-desc-container",children:[Object(u.jsx)("div",{className:"author-name-div",children:Object(u.jsx)("h1",{className:"author-name",children:t.name})}),Object(u.jsx)("p",{className:"author-desc",children:t.bio})]}),c?Object(u.jsx)(u.Fragment,{}):Object(u.jsxs)("div",{onClick:a,className:"switch-div",children:[Object(u.jsx)("svg",{class:"switch-icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(u.jsx)("path",{id:"switch-path",d:"M20.944 12.979c-.489 4.509-4.306 8.021-8.944 8.021-2.698 0-5.112-1.194-6.763-3.075l1.245-1.633c1.283 1.645 3.276 2.708 5.518 2.708 3.526 0 6.444-2.624 6.923-6.021h-2.923l4-5.25 4 5.25h-3.056zm-15.864-1.979c.487-3.387 3.4-6 6.92-6 2.237 0 4.228 1.059 5.51 2.698l1.244-1.632c-1.65-1.876-4.061-3.066-6.754-3.066-4.632 0-8.443 3.501-8.941 8h-3.059l4 5.25 4-5.25h-2.92z"})}),Object(u.jsx)("a",{class:"switch-btn",children:"Switch Blogs"})]}),Object(u.jsxs)("div",{className:"navbar",children:[Object(u.jsx)("div",{className:"nav-link-div",children:Object(u.jsx)(d.b,{className:"nav-link",to:"".concat("/juicer-blog-frontend","/"),children:"Home"})}),Object(u.jsx)("div",{className:"nav-link-div",children:Object(u.jsx)(d.b,{className:"nav-link",to:"".concat("/juicer-blog-frontend","/about"),children:"About"})})]})]})};function v(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)({}),n=Object(j.a)(r,2),o=n[0],O=n[1],p=Object(c.useState)({}),m=Object(j.a)(p,2),v=m[0],g=m[1],f=Object(c.useState)({}),N=Object(j.a)(f,2),w=N[0],k=N[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://juicer-blogs.herokuapp.com/api/creators/1?populate=%2A");case 3:return t=e.sent,s(t.data.data.attributes.creators.data),O(t.data.data.attributes),e.next=8,b.a.get("https://juicer-blogs.herokuapp.com/api/creators/2?populate=%2A");case 8:a=e.sent,g(a.data.data.attributes.creators.data),k(a.data.data.attributes),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"page-content",children:[Object(u.jsx)(x,{author:o,switchAuthor:function(){var e=a,t=o;s(v),O(w),g(e),k(t)},articlePage:!1}),Object(u.jsx)("div",{className:"article-list-container",children:a.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)(h,{article:e.attributes,author:o},e.attributes.slug.toString()),Object(u.jsx)("div",{className:"read-btn-container",children:Object(u.jsx)(d.b,{className:"read-btn",to:"".concat("/juicer-blog-frontend","/").concat(e.attributes.slug),children:"Read More"},e.id.toString())})]},e.id.toString())}))})]})})}var g=a(2),f=a(49);a(45);function N(e){var t=e.article;return Object(u.jsxs)("div",{className:"post-preview",children:[Object(u.jsxs)("h1",{className:"title",children:[" ",t.attributes.title," "]}),Object(u.jsxs)("h4",{className:"desc",children:[" ",t.attributes.description," "]}),Object(u.jsxs)("div",{className:"author-date-container",children:[Object(u.jsxs)("h6",{className:"author",children:[" ",t.attributes.creator.data.attributes.name," "]}),Object(u.jsxs)("h6",{className:"date",children:[" ",w(t.attributes.publishedAt)," "]})]})]})}function w(e){var t=new Date(e);return["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]+"\n"+String(t.getDate()).padStart(2,"0")+", "+t.getFullYear()}function k(){var e=Object(g.g)().slug,t=Object(g.f)(),a=Object(c.useState)(!0),s=Object(j.a)(a,2),r=s[0],n=s[1],o=Object(c.useState)({articles:[],errors:null}),d=Object(j.a)(o,2),h=d[0],O=d[1];Object(c.useEffect)((function(){function t(){return(t=Object(l.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get("https://juicer-blogs.herokuapp.com/api/articles?populate=%2a&filters[slug][$eq]=".concat(e));case 3:a=t.sent,O({articles:a.data.data}),n(!1),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),O({errors:t.t0});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]);var p=h.articles,m=h.errors,v=p[0];return m?Object(u.jsxs)("div",{children:["An error occured: ",m.message]}):r?Object(u.jsx)("div",{}):Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"page-content",children:[Object(u.jsx)(x,{author:v.attributes.creator.data.attributes,articlePage:!0}),Object(u.jsxs)("div",{className:"article-list-container",children:[Object(u.jsx)("button",{class:"article-content",onClick:function(){return t.goBack()},children:"Back"}),Object(u.jsx)(N,{article:v}),Object(u.jsx)("div",{className:"article-content",children:Object(u.jsx)(f.a,{markdown:v.attributes.body})})]})]})})}function S(){return Object(u.jsx)("div",{children:Object(u.jsx)(d.a,{basename:"/juicer-blog-frontend",children:Object(u.jsxs)(g.c,{children:[Object(u.jsx)(g.a,{path:"".concat("/juicer-blog-frontend","/"),exact:!0,children:Object(u.jsx)(v,{})}),Object(u.jsx)(g.a,{path:"".concat("/juicer-blog-frontend","/:slug"),children:Object(u.jsx)(k,{})})]})})})}var y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,98)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),r(e),n(e)}))};r.a.render(Object(u.jsx)(d.a,{children:Object(u.jsx)(S,{})}),document.getElementById("root")),y()}},[[97,1,2]]]);
//# sourceMappingURL=main.71c0bcbf.chunk.js.map