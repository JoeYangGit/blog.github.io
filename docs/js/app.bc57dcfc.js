(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)i=s[l],a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d22d746":"2dae2a52"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=a[t]=[e,r]});e.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t),o=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[t]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},4039:function(t,e,n){t.exports=n.p+"img/banner-right.db5697ed.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[t._m(0),n("div",{staticClass:"nav-items"},t._l(t.menu,function(e){return n("div",{key:e.path,staticClass:"nav-item",class:e.path===t.$route.path?"nav-active":"",on:{click:function(n){return t.toPath(e.path)}}},[t._v(t._s(e.name))])}),0)]),n("router-view")],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logo"},[r("img",{attrs:{src:n("f295"),height:"36px"}})])}],i={data:function(){return{menu:[{path:"/home",name:"主页"},{path:"/articles",name:"文章"},{path:"/about",name:"关于"}]}},methods:{toPath:function(t){this.$router.push({path:t})}}},s=i,c=(n("7c55"),n("2877")),u=Object(c["a"])(s,a,o,!1,null,null,null),l=u.exports,f=n("8c4f"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"home-banner"},[r("div",{staticClass:"home-banner-title"},[r("div",{staticStyle:{"margin-right":"10%"}},[t._v("你还未来")]),r("div",{staticStyle:{"margin-left":"10%","margin-top":"1%"}},[t._v("怎敢老去")])]),r("div",{staticClass:"home-banner-tip"},[t._v("-- Designed By Joe Yang")]),r("img",{staticClass:"home-banner-img-left",attrs:{src:n("5e1d"),alt:""}}),r("img",{staticClass:"home-banner-img-right",attrs:{src:n("4039"),alt:""}}),r("div",{staticClass:"home-banner-mask"})])])}],d={name:"home"},m=d,v=(n("de16"),Object(c["a"])(m,p,h,!1,null,null,null)),g=v.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"articles"},[n("h1",[t._v("This is an page")])])}],y={},w=Object(c["a"])(y,b,_,!1,null,null,null),j=w.exports;r["a"].use(f["a"]);var x=new f["a"]({routes:[{path:"/home",name:"home",component:g},{path:"/articles",name:"articles",component:j},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}]}),C=n("2f62");r["a"].use(C["a"]);var O=new C["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,x.beforeEach(function(t,e,n){"/"===t.path?n({path:"/home"}):n()}),new r["a"]({router:x,store:O,render:function(t){return t(l)}}).$mount("#app")},"5c48":function(t,e,n){},"5e1d":function(t,e,n){t.exports=n.p+"img/banner-left.f489caff.png"},"7c55":function(t,e,n){"use strict";var r=n("5c48"),a=n.n(r);a.a},de16:function(t,e,n){"use strict";var r=n("f3e7"),a=n.n(r);a.a},f295:function(t,e,n){t.exports=n.p+"img/logo-white.17760003.svg"},f3e7:function(t,e,n){}});
//# sourceMappingURL=app.bc57dcfc.js.map