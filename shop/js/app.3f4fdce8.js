(function(t){function e(e){for(var n,o,c=e[0],s=e[1],i=e[2],l=0,p=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(p.length)p.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var t,e=0;e<u.length;e++){for(var r=u[e],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(u.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},o={app:0},a={app:0},u=[];function c(t){return s.p+"js/"+({auth:"auth",products:"products"}[t]||t)+"."+{auth:"032cd818",products:"1e798058"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r={auth:1,products:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise((function(e,r){for(var n="css/"+({auth:"auth",products:"products"}[t]||t)+"."+{auth:"78abfa07",products:"50349578"}[t]+".css",a=s.p+n,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var i=u[c],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===a))return e()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){i=p[c],l=i.getAttribute("data-href");if(l===n||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||a,u=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[t],d.parentNode.removeChild(d),r(u)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var u=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=u);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var p=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(d);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}a[t]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/shop/",s.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var p=0;p<i.length;p++)e(i[p]);var d=l;u.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"4d49":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=r("1dce"),a=r.n(o),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app__wrapper"},[t.errorShow?r("error-alert",{attrs:{errorText:"Internal server error. Please try later"}}):t._e(),r("div",{staticClass:"nav"},[t.session.user?[r("router-link",{attrs:{to:"/products"}},[t._v("Products")]),t._v(" | ")]:t._e(),r("router-link",{attrs:{to:"/auth"}},[t._v("Auth")])],2),r("div",{staticClass:"container"},[r("router-view")],1),r("footer")],1)},c=[],s=r("5530"),i=r("2f62"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"error-alert"},[r("div",{staticClass:"error-alert__inner"},[t._v(" "+t._s(t.errorText)+" ")])])},p=[],d={props:{errorText:String}},f=d,h=(r("bf37"),r("2877")),m=Object(h["a"])(f,l,p,!1,null,null,null),v=m.exports,g={data:function(){return{errorShow:!1}},components:{ErrorAlert:v},computed:Object(s["a"])({},Object(i["c"])(["session"])),methods:{showErrorAlert:function(){var t=this;t.errorShow=!0,setTimeout((function(){t.errorShow=!1}),1e3)}}},_=g,b=(r("5c0b"),Object(h["a"])(_,u,c,!1,null,null,null)),y=b.exports,w=(r("d3b7"),r("8c4f")),S=(r("99af"),r("bc3a")),E=r.n(S),O=r("0e44");n["a"].use(i["a"]);var T=new i["a"].Store({state:{session:{user:"",access_token:""},products:{data:"",last_page:1},savedFilters:{}},plugins:[Object(O["a"])()],getters:{authUser:function(t){return t.session.user}},mutations:{LOG_IN:function(t,e){t.session=e},GET_PRODUCTS:function(t,e){t.products=e},SAVE_FILTERS:function(t,e){t.savedFilters=e}},actions:{LOG_IN:function(t,e){var r=t.commit;return new Promise((function(t,n){E()({method:"post",url:"http://dummy-api.d0.acom.cloud/api/auth/login",data:e}).then((function(e){r("LOG_IN",e.data),t(e)})).catch((function(t){n(t)}))}))},GET_PRODUCTS:function(t,e){var r=t.commit,n=this.state.session.access_token;E()({method:"get",url:"http://dummy-api.d0.acom.cloud/api/products?page=".concat(e.page,"&from=").concat(e.from,"&to=").concat(e.to,"&price_from=").concat(e.price_from,"&price_to=").concat(e.price_to,"&title=").concat(e.title),headers:{Authorization:"Bearer ".concat(n)}}).then((function(t){r("GET_PRODUCTS",t.data)}))},SAVE_FILTERS:function(t,e){var r=t.commit;r("SAVE_FILTERS",e)}},modules:{}});n["a"].use(w["a"]);var P=[{path:"/products",name:"Products",component:function(){return r.e("products").then(r.bind(null,"e6dc"))}},{path:"/auth",name:"Auth",component:function(){return r.e("auth").then(r.bind(null,"2fef"))}}],j=new w["a"]({mode:"history",base:"/shop/",routes:P});j.beforeEach((function(t,e,r){T.getters.authUser||"/auth"===t.path?"/"===t.path?r({name:"Products"}):r():r({name:"Auth"})}));var A=j;n["a"].config.productionTip=!1,n["a"].use(a.a),new n["a"]({router:A,store:T,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"9c0c":function(t,e,r){},bf37:function(t,e,r){"use strict";r("4d49")}});
//# sourceMappingURL=app.3f4fdce8.js.map