(function(t){function e(e){for(var i,a,s=e[0],c=e[1],l=e[2],d=0,h=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2b29":function(t,e,n){},"4f98":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("25ba"),n("5f1c"),n("6ba0"),n("b47f");var i=n("430a"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a={data:function(){return{}},methods:{}},s=a,c=(n("5c0b"),n("cba8")),l=Object(c["a"])(s,o,r,!1,null,null,null),u=l.exports,d=n("ac56"),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"swipeup",rawName:"v-swipeup",value:t.showCenter,expression:"showCenter"}],attrs:{id:"home"},on:{mousewheel:t.handleMouseWheel}},[t.flag?t._e():i("div",{staticClass:"mask_ban_touch",staticStyle:{width:"100%",height:"100%","z-index":"999",position:"absolute"}}),t.$config.GITHUB?i("a",{staticClass:"github mdi mdi-github-circle",attrs:{href:t.$config.GITHUB}}):t._e(),i("div",{class:[{wrapper_blur:t.centerShow},"wrapper","bg-blur"],style:{background:"url("+t.imgUrl+")"}},[i("div",{class:["img_shadow",{img_shadow_show:t.imgLoded}]}),i("div",{staticClass:"inner",staticStyle:{cursor:"pointer"},on:{click:t.goToBlog}},[i("img",{class:["R_logo",{R_logo_top:t.flag}],attrs:{src:n("9b19")}}),i("div",{class:["hello",{hello_bottom:t.flag}]},[i("div",[t._v(t._s(t.slogan[t.i]))]),i("div",{staticClass:"hello_bottom_text"},[t._v("\n          点击以访问 "+t._s(t.$config.BLOG_NAME)+"\n        ")])])])]),i("div",{class:["bottom",{bottom_show:t.flag}],staticStyle:{cursor:"pointer"},on:{click:function(e){t.centerShow=!t.centerShow}}},[i("div",{staticClass:"bottom-icon"},[i("transition",{attrs:{name:"fade"}},[t.centerShow?t._e():i("i",{staticClass:"mdi-chevron-up mdi"}),t.centerShow?i("i",{staticClass:"mdi-chevron-down mdi"}):t._e()])],1),i("div",{staticClass:"bottom-info"},[t._v("Slide UP")])]),t.recordNumber?i("a",{staticClass:"record_number",class:{record_number_show:t.flag},attrs:{href:"http://beian.miit.gov.cn/"}},[t._v(t._s(t.recordNumber))]):t._e(),i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.centerShow,expression:"centerShow"}],staticClass:"shadow"})]),i("transition",{attrs:{name:"slide"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.centerShow,expression:"centerShow"}],staticClass:"center_wrapper",on:{click:t.hideCenter}},[i("div",{staticClass:"center_inner",on:{click:t.stopPropagation}},[i("center",{ref:"center",on:{hide:t.hideCenter}})],1)])])],1)},p=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"center"}},[n("div",{staticClass:"top"},[n("nav",{staticClass:"nav_wrap"},t._l(t.sortData,(function(e,i){return n("div",{key:e.sortId,class:["nav_item",{active:t.sortData[t.sortIndex].sortId==e.sortId}],on:{click:function(e){return t.changeSortIndex(i)}}},[t._v("\n        "+t._s(e.title)+"\n      ")])})),0),n("div",{staticClass:"close"},[n("i",{staticClass:"mdi mdi-close-box",on:{click:t.handleClose}})])]),n("div",{staticClass:"scroll-wrapper main"},[n("transition-group",{staticClass:"row scroll-content",attrs:{tag:"div",name:"list"}},t._l(t.pagesData,(function(e){return n("div",{key:e.pageId,staticClass:"col page_item"},[n("a",{staticClass:"page",attrs:{href:e.url,title:e.title}},[n("div",{staticClass:"left"},[n("div",{staticClass:"title"},[t._v(t._s(e.title))]),n("div",{staticClass:"subtitle"},[t._v(t._s(e.subtitle))])]),n("div",{staticClass:"right"},[n("img",{attrs:{src:""==e.icon?"http://img.cdn.esunr.xyz/Aquarium.png":e.icon}})])])])})),0)],1),t.$config.FOOTER_INFO?n("div",{staticClass:"footer"},[n("i",{staticClass:"mdi mdi-fountain-pen-tip"}),t._v(" Designed By\n    "),n("a",{attrs:{href:"https://ardao.cn"}},[t._v("Ardao")])]):t._e()])},f=[],m=n("ecd2"),b={data:function(){return{sortData:[],sortIndex:0,pagesData:[],scroller:null}},computed:{parentCenterShow:function(){return this.$parent.centerShow}},watch:{parentCenterShow:function(t){t&&this.scrollerResize()}},methods:{getPages:function(){var t=this;return new Promise((function(e,n){var i=t.sortData[t.sortIndex].sortId;if(t.$config.SERVE)t.axios.get("/getPages?sortId="+i).then((function(n){t.pagesData=n.data.data,e()})).catch((function(t){console.log(t),n(t)}));else{for(var o in t.pagesData=[],t.$config.PAGES_DATA){var r=t.$config.PAGES_DATA[o];r.sortId==i&&t.pagesData.push(r)}e()}}))},getSort:function(){var t=this;return new Promise((function(e,n){t.$config.SERVE?t.axios.get("/getSort").then((function(i){1==i.data.code?(t.sortData=i.data.data,e()):n()})).catch((function(t){console.log(t),n(t)})):(t.sortData=t.$config.SORT_DATA,e())}))},changeSortIndex:function(t){this.sortIndex=t,this.getPages()},handleClose:function(){this.$emit("hide")},_getStyleNumber:function(t,e){return parseInt(window.getComputedStyle(t).getPropertyValue(e))},scrollerResize:function(){if(this.parentCenterShow){var t=document.querySelector("#center"),e=this._getStyleNumber(t,"height")-this._getStyleNumber(t,"padding-top")-this._getStyleNumber(t,"padding-bottom"),n=document.querySelector("#center .top"),i=this._getStyleNumber(n,"height"),o=document.querySelector("#center .footer"),r=this._getStyleNumber(o,"height"),a=document.querySelector(".scroll-wrapper");if(a.style.height="".concat(e-r-i,"px"),this.scroller)this.scroller.refresh();else{var s=document.querySelector(".scroll-wrapper");this.scroller=new m["a"](s,{click:!0})}}}},mounted:function(){var t=this;this.getSort().then((function(){return t.getPages()})).then((function(){t.scrollerResize()})),window.addEventListener("resize",this.scrollerResize)}},v=b,w=(n("c390"),Object(c["a"])(v,g,f,!1,null,"1985e1c4",null)),_=w.exports;function y(t,e){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);case 2:return parseInt(Math.random()*(e-t+1)+t,10);default:return 0}}var S={name:"home",data:function(){return this.startTime=new Date,{flag:!1,slogan:[],i:0,centerShow:!1,imgLoded:!1,imgUrl:""}},components:{center:_},computed:{recordNumber:function(){return this.$config.RECORD_NUMBER}},methods:{goToBlog:function(){window.location.href=this.$config.BLOG_URL},_jieliu:function(t,e){var n=new Date;n-this.startTime>e&&(t(),this.startTime=new Date)},handleMouseWheel:function(t){var e=this;if(t.deltaY<0)this.centerShow?this._jieliu((function(){e.$refs.center.scroller.scrollBy(0,100,500,"cubic-bezier(0.23, 1, 0.32, 1)")}),500):this.centerShow=!0;else{if(!this.centerShow)return;this._jieliu((function(){e.$refs.center.scroller.scrollBy(0,-100,500,"cubic-bezier(0.23, 1, 0.32, 1)")}),500)}},showCenter:function(){this.centerShow=!0},hideCenter:function(){this.centerShow=!1},stopPropagation:function(t){t.stopPropagation()}},mounted:function(){var t=this;setTimeout((function(){t.flag=!0}),1300),this.imgUrl=this.$config.BACKGROUND_IMG_URL;var e=new Image;e.src=this.imgUrl,e.onload=function(){t.imgLoded=!0},this.slogan=this.$config.SLOGAN,this.i=y(0,this.slogan.length-1)}},I=S,T=(n("a9b2"),Object(c["a"])(I,h,p,!1,null,"85b37e22",null)),C=T.exports;i["a"].use(d["a"]);var O=new d["a"]({routes:[{path:"*",redirect:"/home"},{path:"/home",component:C},{path:"/center",component:_}]}),x=(n("bfd0"),n("47b4")),k=n("ddb5"),P=n("bedc"),B=function(){function t(e,n,i){Object(k["a"])(this,t);var o=this;o.obj=e,o.binding=n,o.touchType=i,o.firstTouchPosition={x:0,y:0},o.firstTouchTime=0,o.callBack="object"===Object(x["a"])(n.value)?n.value.fn:n.value,o.moved=!1,o.leaved=!1,o.longTouched=!1;var r=Object.create(null),a=function(t){return function(e){var n=o.binding.modifiers,i=n.stop,a=n.prevent,s=n.self,c=n.once;i&&e.stopPropagation(),a&&e.preventDefault(),c&&o.obj.removeEventListener("touch"+t,r[t]),s&&e.target!==e.currentTarget||o[t](e)}};r.start=a("start"),r.end=a("end"),r.move=a("move"),this.obj.addEventListener("touchstart",r.start,!1),this.obj.addEventListener("touchend",r.end,!1),this.obj.addEventListener("touchmove",r.move,!1)}return Object(P["a"])(t,[{key:"start",value:function(t){var e=this;e.moved=!1,e.leaved=!1,e.longTouched=!1,e.firstTouchPosition=e.getMultiCenter(t.changedTouches),e.firstTouchTime=t.timeStamp,e.time=setTimeout(function(){e.leaved||e.moved||("longtap"===e.touchType&&e.callBack(t,e.binding.value),e.longTouched=!0)}.bind(e),1e3)}},{key:"end",value:function(t){var e=this,n=e.getMultiCenter(t.changedTouches),i=n.x,o=n.y,r=i-e.firstTouchPosition.x,a=o-e.firstTouchPosition.y,s=Math.sqrt(r*r+a*a),c=t.timeStamp-e.firstTouchTime;clearTimeout(e.time);var l=this.getAngle(r,a);s>18&&c<300?("swipe"===e.touchType&&e.callBack(t,e.binding.value),l>=60&&l<=120&&"swipedown"===e.touchType&&e.callBack(t,e.binding.value),l<=-60&&l>=-120&&"swipeup"===e.touchType&&e.callBack(t,e.binding.value),l<=20&&l>=-20&&"swipeleft"===e.touchType&&e.callBack(t,e.binding.value),(l<=-160&&l>-180||l>=160&&l<=180)&&"swiperight"===e.touchType&&e.callBack(t,e.binding.value)):e.longTouched||e.moved||("tap"===e.touchType&&e.callBack(t,e.binding.value),e.leaved=!0)}},{key:"move",value:function(){this.moved=!0}},{key:"getMultiCenter",value:function(t){for(var e=0,n=0,i=t.length,o=0;o<i;o++)e+=t[o].pageX,n+=t[o].pageY;return{x:Math.round(e/i),y:Math.round(n/i)}}},{key:"getAngle",value:function(t,e){return"number"!==typeof t||"number"!==typeof e?45:180*Math.atan2(e,t)/Math.PI}}]),t}();i["a"].directive("tap",{bind:function(t,e){new B(t,e,"tap")}}),i["a"].directive("swipe",{bind:function(t,e){new B(t,e,"swipe")}}),i["a"].directive("swipeleft",{bind:function(t,e){new B(t,e,"swipeleft")}}),i["a"].directive("swiperight",{bind:function(t,e){new B(t,e,"swiperight")}}),i["a"].directive("swipedown",{bind:function(t,e){new B(t,e,"swipedown")}}),i["a"].directive("swipeup",{bind:function(t,e){new B(t,e,"swipeup")}}),i["a"].directive("longtap",{bind:function(t,e){new B(t,e,"longtap")}});var R=n("82ae"),A=n.n(R),D=n("e7aa"),j=n.n(D),E=!1,N="https://",L="林间麋鹿",M="https://blog.nbbbx.icu",$="https://github.com/EsunR",U="https://gitee.com/starfall-dust/tuchuang/raw/master/img4/202201301852008.jpg",G=[{sortId:1,title:"Blog"},{sortId:2,title:"Severs"},{sortId:3,title:"Github"}],z="浙ICP备2021004450号-3",q=[{pageId:1,sortId:1,title:"安冉岛",subtitle:"Typecho",url:"http://ardao.cn",icon:"https://gitee.com/starfall-dust/tuchuang/raw/master/img4/202201301911639.png"},{pageId:1,sortId:1,title:"深海",subtitle:"WordPress",url:"http://deepsea.work",icon:"https://gitee.com/starfall-dust/tuchuang/raw/master/img4/202201301911639.png"},{pageId:1,sortId:1,title:"安冉小岛",subtitle:"Notion",url:"https://zbnstudio.notion.site/zbnstudio/353578360c8e41bf9a96b7d35992f633",icon:"https://gitee.com/starfall-dust/tuchuang/raw/master/img4/202201301911639.png"},{pageId:2,sortId:2,title:"Notion Team",subtitle:"NBBBX.ICU 董事会",url:"https://www.notion.so/zbnstudio/Nbbbx-ICU-c162e59f83f54053bd78d729a9e2296f",icon:"https://gitee.com/starfall-dust/tuchuang/raw/master/img4/202201301909171.png"},{pageId:2,sortId:2,title:"Website Advice",subtitle:"B站-LKs-良心的网站推荐",url:"https://king-zhangbn.github.io/lks/",icon:"https://gitee.com/starfall-dust/tuchuang/raw/master/img4/202201301909834.png"},{pageId:2,sortId:2,title:"Deep Sea - 深海",subtitle:"深海服务中心（未WALL）",url:"http://home.deepsea.work",icon:"https://gitee.com/starfall-dust/tuchuang/raw/master/img4/202201301910162.png"},{pageId:2,sortId:2,title:"Deep Sea - 深海",subtitle:"深海服务中心（已WALL）",url:"http://king-zhangbn.github.io/",icon:"https://gitee.com/starfall-dust/tuchuang/raw/master/img4/202201301910162.png"},{pageId:2,sortId:2,title:"Astrolabe - 星盘",subtitle:"CloudReve",url:"http://pan.nbbbx.icu",icon:"https://gitee.com/starfall-dust/tuchuang/raw/master/img4/202201301911760.png"},{pageId:2,sortId:2,title:"Clinical - 临床",subtitle:"Lsky Pro",url:"http://photo.nbbbx.icu",icon:"https://gitee.com/starfall-dust/tuchuang/raw/master/img4/202201301911700.png"},{pageId:2,sortId:2,title:"FIMS - 白银要塞",subtitle:"Fortress Interstellar monitoring station",url:"https://status.nbbbx.icu/",icon:"https://gitee.com/starfall-dust/tuchuang/raw/master/img4/202201301911258.png"}],W=["欢迎拜访","歡迎拜訪","Welcome, my friend!","訪問へようこそ","嗨，别来无恙","不忘初心，一生浪漫","最近还好吗？","流星，落花，萤火","马车越空，晃荡越响"],F=!0,H={SERVE:E,HOST:N,BLOG_URL:M,BLOG_NAME:L,SORT_DATA:G,PAGES_DATA:q,SLOGAN:W,GITHUB:$,FOOTER_INFO:F,BACKGROUND_IMG_URL:U,RECORD_NUMBER:z};i["a"].prototype.$config=H,i["a"].use(j.a,A.a),A.a.defaults.baseURL=H.HOST,i["a"].config.productionTip=!1,new i["a"]({router:O,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("b3bf")},"9b19":function(t,e,n){t.exports=n.p+"img/logo.baa60009.svg"},a9b2:function(t,e,n){"use strict";n("2b29")},b3bf:function(t,e,n){},c390:function(t,e,n){"use strict";n("4f98")}});