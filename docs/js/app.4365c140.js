(function(t){function e(e){for(var i,s,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)s=r[d],a[s]&&m.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},o=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"34d9":function(t,e,n){t.exports=n.p+"img/home-1.a2b522d6.png"},"4c0d":function(t,e,n){"use strict";var i=n("cad8"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"nav"}},[i("div",{staticClass:"logo"},[i("img",{staticClass:"logo-img",attrs:{src:n("f295")},on:{click:function(e){return t.$router.push({path:"/home"})}}})]),i("div",{staticClass:"nav-items"},t._l(t.menu,function(e){return i("div",{key:e.path,staticClass:"nav-item",class:e.path===t.$route.path?"nav-active":"",on:{click:function(n){return t.toPath(e.path)}}},[t._v(t._s(e.name))])}),0)]),i("router-view")],1)},o=[],s={data:function(){return{menu:[{path:"/home",name:"主页"},{path:"/articles",name:"文章"},{path:"/about",name:"关于"}]}},methods:{toPath:function(t){this.$router.push({path:t})},setRootFontSize:function(){var t=document.getElementsByTagName("html")[0],e=t.clientWidth;t.style.fontSize=e/1280*12+"px"}},mounted:function(){var t=this;this.setRootFontSize(),window.onresize=function(){t.setRootFontSize()}}},r=s,c=(n("7c55"),n("2877")),l=Object(c["a"])(r,a,o,!1,null,null,null),u=l.exports,d=n("8c4f"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[t._m(0),i("div",{staticClass:"home-box"},[i("div",{staticClass:"home-box-title"},[t._v("最新文章")]),i("div",{staticClass:"home-box-link-box"},[t._l(t.latestData,function(e){return i("div",{key:e.id,staticClass:"home-box-link-item",on:{click:function(n){return t.showDetailBox(e)},mouseenter:function(n){t.showText=e.id},mouseleave:function(e){t.showText=""}}},[i("transition",{attrs:{name:"slide-top"}},[t.showText===e.id?i("div",{staticClass:"home-box-link-item-mask"},[t._v(t._s(e.text))]):t._e()]),i("div",{staticClass:"home-box-link-item-img",style:t.imgStyle(e.img)})],1)}),i("div",{staticClass:"home-box-link-last"},[t._v("\n        MORE\n        "),i("img",{staticClass:"home-box-link-item-more",attrs:{src:n("f51c"),alt:""}})])],2)]),i("transition",{attrs:{name:"slide-top"}},[t.showDetail?i("Detail",{attrs:{id:t.info.id,info:t.info},on:{close:function(e){t.showDetail=!1}}}):t._e()],1)],1)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-banner"},[n("div",{staticClass:"home-banner-title"},[n("div",{staticStyle:{"margin-right":"10%"}},[t._v("你还未来")]),n("div",{staticStyle:{"margin-left":"10%","margin-top":"1%"}},[t._v("怎敢老去")])]),n("div",{staticClass:"home-banner-tip"},[t._v("-- Designed By Joe Yang")]),n("div",{staticClass:"home-banner-img-left"}),n("div",{staticClass:"home-banner-img-right"}),n("div",{staticClass:"home-banner-mask"})])}],h=[{id:"20190614-1",text:"你还未来 怎敢老去",img:"home-1",detailImg:"detail-1"},{id:"20190614-2",text:"未来的我 奉陪到底",img:"home-2",detailImg:"detail-2"}],p=h,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail"},[n("div",{staticClass:"detail-container"},[n("div",{staticClass:"detail-container-header"},[n("div",{staticClass:"detail-container-header-img",style:t.imgStyle(t.info.detailImg)}),n("div",{staticClass:"detail-container-header-title"},[t._v(t._s(t.info.text))]),n("div",{staticClass:"detail-container-header-rect"})])]),n("div",{staticClass:"detail-mask",on:{click:t.close}})])},g=[],b={name:"Detail",props:{info:{},id:{type:String,required:!0}},methods:{close:function(){this.$emit("close")},imgStyle:function(t){return{backgroundImage:"url("+n("b967")("./".concat(t,".png"))+")"}}},mounted:function(){var t=document.getElementsByTagName("body")[0],e=document.getElementsByClassName("detail")[0],n=t.scrollHeight;e.style.height=n+"px",t.style.overflow="hidden",window.scrollTo(0,0)},destroyed:function(){var t=document.getElementsByTagName("body")[0];t.style.overflow=""}},_=b,y=(n("d4f4"),Object(c["a"])(_,v,g,!1,null,null,null)),x=y.exports,w={name:"home",components:{Detail:x},data:function(){return{latestData:[],showText:"",showDetail:!1,info:p[0]}},methods:{imgStyle:function(t){var e={};return e.backgroundImage="url("+n("b967")("./".concat(t,".png"))+") ",e},showDetailBox:function(t){this.info=t,this.showDetail=!0}},mounted:function(){this.latestData=p.reverse()}},C=w,k=(n("de16"),Object(c["a"])(C,m,f,!1,null,null,null)),O=k.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"articles"},[n("h1",[t._v("This is an page")])])}],D=(n("4c0d"),{}),j=Object(c["a"])(D,S,E,!1,null,null,null),T=j.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],B=(n("5795"),{}),M=Object(c["a"])(B,$,P,!1,null,null,null),N=M.exports;i["a"].use(d["a"]);var z=new d["a"]({routes:[{path:"/home",name:"home",component:O},{path:"/articles",name:"articles",component:T},{path:"/about",name:"about",component:N}]}),I=n("2f62");i["a"].use(I["a"]);var F=new I["a"].Store({state:{},mutations:{},actions:{}});i["a"].config.productionTip=!1,z.beforeEach(function(t,e,n){"/"===t.path?n({path:"/home"}):n()}),new i["a"]({router:z,store:F,render:function(t){return t(u)}}).$mount("#app")},5795:function(t,e,n){"use strict";var i=n("7513"),a=n.n(i);a.a},"5c48":function(t,e,n){},7513:function(t,e,n){},"7c55":function(t,e,n){"use strict";var i=n("5c48"),a=n.n(i);a.a},"7d57":function(t,e,n){t.exports=n.p+"img/detail-1.f48a4209.png"},b068:function(t,e,n){t.exports=n.p+"img/detail-2.775a6a24.png"},b967:function(t,e,n){var i={"./detail-1.png":"7d57","./detail-2.png":"b068","./home-1.png":"34d9","./home-2.png":"eca7"};function a(t){var e=o(t);return n(e)}function o(t){var e=i[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(i)},a.resolve=o,t.exports=a,a.id="b967"},ba55:function(t,e,n){},cad8:function(t,e,n){},d4f4:function(t,e,n){"use strict";var i=n("ba55"),a=n.n(i);a.a},de16:function(t,e,n){"use strict";var i=n("f3e7"),a=n.n(i);a.a},eca7:function(t,e,n){t.exports=n.p+"img/home-2.8906a619.png"},f295:function(t,e,n){t.exports=n.p+"img/logo-white.17760003.svg"},f3e7:function(t,e,n){},f51c:function(t,e,n){t.exports=n.p+"img/more.bdba9be5.svg"}});
//# sourceMappingURL=app.4365c140.js.map