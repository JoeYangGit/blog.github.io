(function(t){function e(e){for(var a,l,r=e[0],o=e[1],c=e[2],d=0,m=[];d<r.length;d++)l=r[d],n[l]&&m.push(n[l][0]),n[l]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,r=1;r<i.length;r++){var o=i[r];0!==n[o]&&(a=!1)}a&&(s.splice(e--,1),t=l(l.s=i[0]))}return t}var a={},n={app:0},s=[];function l(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=a,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(i,a,function(e){return t[e]}.bind(null,a));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=o;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"34d9":function(t,e,i){t.exports=i.p+"img/home-1.a2b522d6.png"},"4a4e":function(t,e,i){},"4c0d":function(t,e,i){"use strict";var a=i("cad8"),n=i.n(a);n.a},5016:function(t,e,i){"use strict";var a=i("4a4e"),n=i.n(a);n.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("div",{staticClass:"logo"},[a("img",{staticClass:"logo-img",attrs:{src:i("f295")},on:{click:function(e){return t.$router.push({path:"/home"})}}})]),a("div",{staticClass:"nav-items"},t._l(t.menu,function(e){return a("div",{key:e.path,staticClass:"nav-item",class:e.path===t.$route.path?"nav-active":"",on:{click:function(i){return t.toPath(e.path)}}},[t._v(t._s(e.name))])}),0)]),a("router-view")],1)},s=[],l={data:function(){return{menu:[{path:"/home",name:"主页"},{path:"/articles",name:"文章"},{path:"/about",name:"关于"}]}},methods:{toPath:function(t){this.$router.push({path:t})},setRootFontSize:function(){var t=document.getElementsByTagName("html")[0],e=t.clientWidth;t.style.fontSize=e/1280*12+"px"}},mounted:function(){var t=this;this.setRootFontSize(),window.onresize=function(){t.setRootFontSize()}}},r=l,o=(i("7c55"),i("2877")),c=Object(o["a"])(r,n,s,!1,null,null,null),u=c.exports,d=i("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t._m(0),a("div",{staticClass:"home-box"},[a("div",{staticClass:"home-box-title"},[t._v("最新文章")]),a("div",{staticClass:"home-box-link-box"},[t._l(t.latestData,function(e){return a("div",{key:e.id,staticClass:"home-box-link-item",on:{click:function(i){return t.showDetailBox(e)},mouseenter:function(i){t.showText=e.id},mouseleave:function(e){t.showText=""}}},[a("transition",{attrs:{name:"fade"}},[t.showText===e.id?a("div",{staticClass:"home-box-link-item-mask"},[t._v(t._s(e.text))]):t._e()]),a("div",{staticClass:"home-box-link-item-img",style:t.imgStyle(e.img)})],1)}),a("div",{staticClass:"home-box-link-last",on:{click:function(e){return t.$router.push({path:"/articles"})}}},[t._v("\n        MORE\n        "),a("img",{staticClass:"home-box-link-item-more",attrs:{src:i("f51c"),alt:""}})])],2)]),a("transition",{attrs:{name:"fade"}},[t.showDetail?a("Detail",{attrs:{id:t.info.id,info:t.info},on:{close:function(e){t.showDetail=!1}}}):t._e()],1)],1)},f=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home-banner"},[i("div",{staticClass:"home-banner-title"},[i("div",{staticStyle:{"margin-right":"10%"}},[t._v("你还未来")]),i("div",{staticStyle:{"margin-left":"10%","margin-top":"1%"}},[t._v("怎敢老去")])]),i("div",{staticClass:"home-banner-tip"},[t._v("-- Designed By Joe Yang")]),i("div",{staticClass:"home-banner-img-left"}),i("div",{staticClass:"home-banner-img-right"}),i("div",{staticClass:"home-banner-mask"})])}],h=i("75fc"),p=[{id:"20190614-1",text:"你还未来 怎敢老去",img:"home-1",detailImg:"detail-1",time:"2019-06-14"},{id:"20190614-2",text:"未来的我 奉陪到底",img:"home-2",detailImg:"detail-2",time:"2019-06-14"}],v=p,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail"},[a("div",{staticClass:"detail-container"},[a("div",{staticClass:"detail-container-header"},[a("div",{staticClass:"detail-container-header-img",style:t.imgStyle(t.info.detailImg)}),a("div",{staticClass:"detail-container-header-title"},[t._v(t._s(t.info.text))]),a("div",{staticClass:"detail-container-header-rect"})]),t._l(t.contents,function(e){return a("div",{key:e.title,staticClass:"detail-container-content-box"},["text-left"===e.type?a("TextImage",{attrs:{type:"left",title:e.title,text:e.content,image:e.image}}):t._e(),"text-right"===e.type?a("TextImage",{attrs:{type:"right",title:e.title,text:e.content,image:e.image}}):t._e(),"text"===e.type?a("Textes",{attrs:{title:e.title,text:e.content}}):t._e(),"image"===e.type?a("Images",{attrs:{title:e.title,image:e.image}}):t._e()],1)}),a("div",{staticClass:"detail-container-footer"},[a("img",{attrs:{src:i("79d4"),alt:""}})]),a("div",{staticClass:"detail-container-rect"})],2),a("div",{staticClass:"detail-mask",on:{click:t.close}})])},x=[],y=(i("ac6a"),i("8615"),{"20190614-1":{title:"你还未来 怎敢老去",images:["detail-1"],contents:{p1:{title:"标题一",type:"text-left",content:"段很低哦洒几滴哦去哪都去哪成交额我把你从俄进口琪娃能打开吗琪娃的看起来我们农村建设",image:"detail-1"},p2:{title:"标题二",type:"text-right",content:"段很低哦洒几滴哦去哪都去哪成交额我把你从俄进口琪娃能打开吗琪娃的看起来我们农村建设",image:"detail-2"},p3:{title:"标题三",type:"text",content:"段很低哦洒几滴哦去哪都去哪成交额我把你从俄进口琪娃能打开吗琪娃的看起来我们农村建设"},p4:{title:"标题四",type:"image",content:"段很低哦洒几滴哦去哪都去哪成交额我把你从俄进口琪娃能打开吗琪娃的看起来我们农村建设",image:"detail-1"}}},"20190614-2":{title:"未来的我 奉陪到底",images:["detail-2"],contents:{p1:{title:"标题一",type:"text-left",content:"段很低哦洒几滴哦去哪都去哪成交额我把你从俄进口琪娃能打开吗琪娃的看起来我们农村建设",image:"detail-2"},p2:{title:"标题二",type:"image",content:"段很低哦洒几滴哦去哪都去哪成交额我把你从俄进口琪娃能打开吗琪娃的看起来我们农村建设",image:"detail-2"},p3:{title:"标题三",type:"text-right",content:"段很低哦洒几滴哦去哪都去哪成交额我把你从俄进口琪娃能打开吗琪娃的看起来我们农村建设",image:"detail-1"},p4:{title:"标题四",type:"text",content:"段很低哦洒几滴哦去哪都去哪成交额我把你从俄进口琪娃能打开吗琪娃的看起来我们农村建设"}}}}),_=y,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-left"},["left"===t.type?i("div",[i("div",{staticClass:"text-left-title left"},[t._v(t._s(t.title))]),i("div",{staticClass:"text-left-container"},[i("div",{staticClass:"text-left-container-text"},[t._v(t._s(t.text))]),i("div",{staticClass:"text-left-container-img",style:t.imageStyle()})])]):i("div",[i("div",{staticClass:"text-left-title right"},[t._v(t._s(t.title))]),i("div",{staticClass:"text-left-container"},[i("div",{staticClass:"text-left-container-img",style:t.imageStyle()}),i("div",{staticClass:"text-left-container-text"},[t._v(t._s(t.text))])])])])},C=[],D={name:"text-image",props:{type:{type:String,default:"left"},title:{type:String},text:{type:String},image:{type:String}},methods:{imageStyle:function(){return{backgroundImage:"url("+i("b967")("./".concat(this.image,".png"))+")"}}}},w=D,k=(i("a765"),Object(o["a"])(w,b,C,!1,null,null,null)),S=k.exports,I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text"},[i("div",{staticClass:"text-title"},[t._v(t._s(t.title))]),i("div",{staticClass:"text-container"},[i("div",{staticClass:"text-container-text"},[t._v(t._s(t.text))])])])},O=[],j={name:"textes",props:{title:{type:String},text:{type:String}}},T=j,E=(i("5016"),Object(o["a"])(T,I,O,!1,null,null,null)),$=E.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"image"},[""!==t.title?i("div",{staticClass:"image-title"},[t._v(t._s(t.title))]):t._e(),i("div",{staticClass:"image-container",style:t.imageStyle()})])},B=[],M={name:"images",props:{title:{type:String,default:""},image:{type:String}},methods:{imageStyle:function(){return{backgroundImage:"url("+i("b967")("./".concat(this.image,".png"))+")"}}}},z=M,N=(i("d408"),Object(o["a"])(z,P,B,!1,null,null,null)),F=N.exports,R={name:"Detail",props:{info:{},id:{type:String,required:!0}},components:{TextImage:S,Textes:$,Images:F},data:function(){return{details:{},contents:[]}},methods:{close:function(){this.$emit("close")},imgStyle:function(t){return{backgroundImage:"url("+i("b967")("./".concat(t,".png"))+")"}}},mounted:function(){this.details=_[this.id],this.contents=Object.values(this.details.contents);var t=document.getElementsByTagName("body")[0];t.style.overflow="hidden",window.scrollTo(0,0)},destroyed:function(){var t=document.getElementsByTagName("body")[0];t.style.overflow=""}},J=R,U=(i("d4f4"),Object(o["a"])(J,g,x,!1,null,null,null)),q=U.exports,L={name:"home",components:{Detail:q},data:function(){return{latestData:[],showText:"",showDetail:!1,info:{}}},methods:{imgStyle:function(t){var e={};return e.backgroundImage="url("+i("b967")("./".concat(t,".png"))+") ",e},showDetailBox:function(t){this.info=t,this.showDetail=!0}},mounted:function(){this.latestData=[].concat(Object(h["a"])(this.latestData),Object(h["a"])(v.slice(-3))).reverse()}},W=L,Y=(i("de16"),Object(o["a"])(W,m,f,!1,null,null,null)),A=Y.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"articles"},[t._m(0),i("div",{staticClass:"articles-list"},[i("div",{staticClass:"articles-list-left"},[i("div",{staticClass:"articles-list-left-circle",style:t.leftColor(),on:{click:function(e){return t.prevPage()}}})]),i("div",{staticClass:"articles-list-content"},[i("div",{staticClass:"articles-list-content-box"},[t._l(t.listData1,function(e,a){return i("div",{key:e.id,staticClass:"articles-list-content-item",on:{click:function(i){return t.showDetailBox(e)}}},[i("div",{staticClass:"articles-list-content-item-summary"},[i("div",{staticClass:"articles-list-content-item-summary-title"},[t._v(t._s(t.currentIndex-5+a+". "+e.text))]),i("div",{staticClass:"articles-list-content-item-summary-time"},[t._v(t._s(e.time))])])])}),t.listData1.length<3?t._l(t.emptyData,function(t){return i("div",{key:t,staticClass:"articles-list-content-item-empty"})}):t._e()],2),i("div",{staticClass:"articles-list-content-box"},[t._l(t.listData2,function(e,a){return i("div",{key:e.id,staticClass:"articles-list-content-item"},[i("div",{staticClass:"articles-list-content-item-summary"},[i("div",{staticClass:"articles-list-content-item-summary-title"},[t._v(t._s(t.currentIndex-2+a+". "+e.text))]),i("div",{staticClass:"articles-list-content-item-summary-time"},[t._v(t._s(e.time))])])])}),t.listData2.length<3?t._l(t.emptyData,function(t){return i("div",{key:t,staticClass:"articles-list-content-item-empty"})}):t._e()],2)]),i("div",{staticClass:"articles-list-right"},[i("div",{staticClass:"articles-list-right-circle",style:t.rightColor(),on:{click:function(e){return t.nextPage()}}})])])]),i("transition",{attrs:{name:"fade"}},[t.showDetail?i("Detail",{attrs:{id:t.info.id,info:t.info},on:{close:function(e){t.showDetail=!1}}}):t._e()],1)],1)},H=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"articles-left"},[i("div",{staticClass:"articles-left-img"}),i("div",{staticClass:"articles-left-title"},[t._v("全部文章")])])}],K={name:"articles",components:{Detail:q},data:function(){return{showDetail:!1,listData:[],listData1:[],listData2:[],emptyData:[],currentIndex:6,info:{}}},methods:{showDetailBox:function(t){this.info=t,this.showDetail=!0},leftColor:function(){return this.currentIndex>6?{backgroundColor:"#cca473"}:{backgroundColor:"#d8d8d8"}},rightColor:function(){return this.currentIndex<=this.listData.length?{backgroundColor:"#cca473"}:{backgroundColor:"#d8d8d8"}},prevPage:function(){if(this.currentIndex>6)if(this.currentIndex-=6,this.listData1=this.listData.slice(this.currentIndex-6,this.currentIndex-3),this.listData2=this.listData.slice(this.currentIndex-3,this.currentIndex),this.emptyData=[],this.listData1.length<3)for(var t=0;t<3-this.listData1.length;t++)this.emptyData.push(t);else if(this.listData2.length<3)for(var e=0;e<3-this.listData2.length;e++)this.emptyData.push(e)},nextPage:function(){if(this.currentIndex<=this.listData.length){if(this.listData1=this.listData.slice(0+this.currentIndex,3+this.currentIndex),this.listData2=this.listData.slice(3+this.currentIndex,6+this.currentIndex),this.emptyData=[],this.listData1.length<3)for(var t=0;t<3-this.listData1.length;t++)this.emptyData.push(t);else if(this.listData2.length<3)for(var e=0;e<3-this.listData2.length;e++)this.emptyData.push(e);this.currentIndex+=6}}},mounted:function(){if(this.listData=[].concat(Object(h["a"])(this.listData),Object(h["a"])(v)).reverse(),this.listData1=this.listData.slice(0,3),this.listData2=this.listData.slice(3,6),this.listData1.length<3)for(var t=0;t<3-this.listData1.length;t++)this.emptyData.push(t);else if(this.listData2.length<3)for(var e=0;e<3-this.listData2.length;e++)this.emptyData.push(e)}},Q=K,V=(i("4c0d"),Object(o["a"])(Q,G,H,!1,null,null,null)),X=V.exports,Z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},tt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("h1",[t._v("This is an about page")])])}],et=(i("5795"),{}),it=Object(o["a"])(et,Z,tt,!1,null,null,null),at=it.exports;a["a"].use(d["a"]);var nt=new d["a"]({routes:[{path:"/home",name:"home",component:A},{path:"/articles",name:"articles",component:X},{path:"/about",name:"about",component:at}]}),st=i("2f62");a["a"].use(st["a"]);var lt=new st["a"].Store({state:{},mutations:{},actions:{}});a["a"].config.productionTip=!1,nt.beforeEach(function(t,e,i){"/"===t.path?i({path:"/home"}):i(),window.scrollTo(0,0)}),new a["a"]({router:nt,store:lt,render:function(t){return t(u)}}).$mount("#app")},5795:function(t,e,i){"use strict";var a=i("7513"),n=i.n(a);n.a},"5c48":function(t,e,i){},"6d17":function(t,e,i){},7513:function(t,e,i){},"79d4":function(t,e,i){t.exports=i.p+"img/logo-black.5a0a10a2.svg"},"7c55":function(t,e,i){"use strict";var a=i("5c48"),n=i.n(a);n.a},"7d57":function(t,e,i){t.exports=i.p+"img/detail-1.f48a4209.png"},9803:function(t,e,i){},a765:function(t,e,i){"use strict";var a=i("6d17"),n=i.n(a);n.a},b068:function(t,e,i){t.exports=i.p+"img/detail-2.775a6a24.png"},b967:function(t,e,i){var a={"./detail-1.png":"7d57","./detail-2.png":"b068","./home-1.png":"34d9","./home-2.png":"eca7"};function n(t){var e=s(t);return i(e)}function s(t){var e=a[t];if(!(e+1)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return e}n.keys=function(){return Object.keys(a)},n.resolve=s,t.exports=n,n.id="b967"},ba55:function(t,e,i){},cad8:function(t,e,i){},d408:function(t,e,i){"use strict";var a=i("9803"),n=i.n(a);n.a},d4f4:function(t,e,i){"use strict";var a=i("ba55"),n=i.n(a);n.a},de16:function(t,e,i){"use strict";var a=i("f3e7"),n=i.n(a);n.a},eca7:function(t,e,i){t.exports=i.p+"img/home-2.8906a619.png"},f295:function(t,e,i){t.exports=i.p+"img/logo-white.17760003.svg"},f3e7:function(t,e,i){},f51c:function(t,e,i){t.exports=i.p+"img/more.bdba9be5.svg"}});
//# sourceMappingURL=app.172b2ab9.js.map