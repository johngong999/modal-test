(function(t){function n(n){for(var o,i,u=n[0],l=n[1],a=n[2],f=0,d=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);s&&s(n);while(d.length)d.shift()();return c.push.apply(c,a||[]),e()}function e(){for(var t,n=0;n<c.length;n++){for(var e=c[n],o=!0,u=1;u<e.length;u++){var l=e[u];0!==r[l]&&(o=!1)}o&&(c.splice(n--,1),t=i(i.s=e[0]))}return t}var o={},r={app:0},c=[];function i(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=o,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)i.d(e,o,function(n){return t[n]}.bind(null,o));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var a=0;a<u.length;a++)n(u[a]);var s=l;c.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";e("85ec")},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o,r=e("2b0e"),c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("button",{on:{click:t.showModal}},[t._v("打开弹窗")])])},i=[],u={name:"App",methods:{showModal:function(){this.$confirm({title:"提示",content:"这是内容",confirmButtonText:"确定按钮",cancelButtonText:"取消按钮"}).then((function(){console.log("success")})).catch((function(t){console.log("error",t)}))}}},l=u,a=(e("034f"),e("2877")),s=Object(a["a"])(l,c,i,!1,null,null,null),f=s.exports,d=(e("d3b7"),e("5530")),p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"modal-container"},[e("div",{staticClass:"modal-header"},[t._v(t._s(t.title))]),e("div",{staticClass:"modal-content"},[t._v(t._s(t.content))]),e("div",{staticClass:"modal-footer"},[t.showCancelButton?e("button",{on:{click:t.close}},[t._v(t._s(t.cancelButtonText))]):t._e(),t.showConfirmButton?e("button",{on:{click:t.confirm}},[t._v(t._s(t.confirmButtonText))]):t._e()])]),e("div",{staticClass:"mask"})])},h=[],v={props:{title:String,content:String,cancelButtonText:String,confirmButtonText:String,showConfirmButton:Boolean,showCancelButton:Boolean},methods:{close:function(){this.reject(),this.$emit("close")},confirm:function(){this.resolve(),this.$emit("close")}}},m=v,b=(e("afa6"),Object(a["a"])(m,p,h,!1,null,"1b99b344",null)),w=b.exports,y={title:"",message:"",overlay:!0,closeOnClickOverlay:!0,cancelButtonText:"取消",showCancelButton:!1,confirmButtonText:"确定",showConfirmButton:!1},_=r["a"].extend(w),g=function(){o=(new _).$mount(),o.$on("close",(function(){document.body.removeChild(o.$el),o=null})),document.body.appendChild(o.$el)},O=function(t){return new Promise((function(n,e){o||g(),Object.assign(o,y,t,{resolve:n,reject:e})}))};O.install=function(t){t.prototype.$confirm=function(t){return O(Object(d["a"])(Object(d["a"])({},t),{},{showCancelButton:!0}))}};var x=O;r["a"].config.productionTip=!1,r["a"].use(x),new r["a"]({render:function(t){return t(f)}}).$mount("#app")},"85ec":function(t,n,e){},afa6:function(t,n,e){"use strict";e("da45")},da45:function(t,n,e){}});
//# sourceMappingURL=app.ef0a57ef.js.map