_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery,c=void 0!==o&&o;return n||r&&c}},"20a2":function(e,t,n){e.exports=n("nOHt")},"7W2i":function(e,t,n){var a=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},c=n("lwAK"),s=n("FYa8"),i=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0,c=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){c=!0;var s=r.key.slice(r.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var i=0,l=p.length;i<l;i++){var u=p[i];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var d=r.props[u],f=a[u]||new Set;"name"===u&&c||!f.has(d)?(f.add(d),a[u]=f):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,r.useContext)(c.AmpStateContext),a=(0,r.useContext)(s.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:f,headManager:a,inAmpMode:(0,i.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},A3pG:function(e,t,n){e.exports={list:"MeetupList_list__1iafn",mainDiv:"MeetupList_mainDiv__1Z6yf",searchDiv:"MeetupList_searchDiv__1qx6I",searchItem:"MeetupList_searchItem__3hm_7",indSpan:"MeetupList_indSpan__34xcz",h3Span:"MeetupList_h3Span__3PXOi",h3Count:"MeetupList_h3Count__3Ps_J",switch:"MeetupList_switch__YfrEj",slider:"MeetupList_slider__1MMiu",round:"MeetupList_round__3CeTw"}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=r},H1Ta:function(e,t,n){},"HaE+":function(e,t,n){"use strict";function a(e,t,n,a,r,o,c){try{var s=e[o](c),i=s.value}catch(l){return void n(l)}s.done?t(i):Promise.resolve(i).then(a,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var c=e.apply(t,n);function s(e){a(c,r,o,s,i,"next",e)}function i(e){a(c,r,o,s,i,"throw",e)}s(void 0)}))}}n.d(t,"a",(function(){return r}))},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||c()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return S}));var a=n("nKUr"),r=n("o0o1"),o=n.n(r),c=n("HaE+");function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function i(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n("q1tI"),u=n("g4pe"),d=n.n(u),p=n("A3pG"),f=n.n(p),h=(n("H1Ta"),n("20a2")),m=n("leqP"),j=n("RPSF"),b=n.n(j);var g=function(e){var t=Object(h.useRouter)();return Object(a.jsx)("li",{className:b.a.item,children:Object(a.jsxs)(m.a,{children:[Object(a.jsx)("div",{className:b.a.image,children:Object(a.jsx)("img",{src:e.image,alt:e.title})}),Object(a.jsxs)("div",{className:b.a.content,children:[Object(a.jsx)("h3",{children:e.title}),Object(a.jsx)("address",{children:e.address})]}),Object(a.jsxs)("div",{className:b.a.detailsFlex,children:[Object(a.jsxs)("div",{className:b.a.detailsFlexColumn,children:[Object(a.jsxs)("h6",{children:[Object(a.jsx)("span",{children:Object(a.jsx)("i",{className:"fas fa-map-marker-alt",style:{color:"#77002e"}})}),"Amsterdam"]}),Object(a.jsxs)("h6",{children:[Object(a.jsx)("span",{children:Object(a.jsx)("i",{className:"fas fa-male",style:{color:"#77002e"}})}),"Bachelors"]})]}),Object(a.jsxs)("div",{className:b.a.detailsFlexColumn,children:[Object(a.jsxs)("h6",{children:[Object(a.jsx)("span",{children:Object(a.jsx)("i",{className:"fas fa-building",style:{color:"#77002e"}})}),"1BHK"]}),Object(a.jsxs)("h6",{children:[Object(a.jsx)("span",{children:Object(a.jsx)("i",{className:"fas fa-tag",style:{color:"#77002e"}})}),"$58000"]})]})]}),Object(a.jsx)("div",{className:b.a.actions,children:Object(a.jsx)("button",{onClick:function(){t.push("/"+e.id)},children:"Show Details"})})]})})};var v,x=function(e){var t=Object(l.useState)(!1),n=t[0];return t[1],console.log(n),Object(a.jsx)(l.Fragment,{children:Object(a.jsx)("ul",{className:f.a.list,children:e.meetups.map((function(e){return Object(a.jsx)(g,{id:e.id,image:e.image,title:e.title,address:e.address},e.id)}))})})},O=!1,y=[],_=[],w=[];var S=!0;t.default=function(e){console.log("inside HOme page"),console.log(e);var t=e.locationArray.map((function(e){return e._id})),n=e.priceArray.map((function(e){return e._id})),r=e.tenantArray.map((function(e){return e._id})),s=e.apartmentArray.map((function(e){return e._id}));console.log("inside HOme page 2");var u=Object(l.useState)(new Array(t.length).fill(!0)),p=u[0],h=u[1],m=Object(l.useState)(new Array(n.length).fill(!0)),j=m[0],b=m[1],g=Object(l.useState)(new Array(r.length).fill(!0)),S=g[0],M=g[1],N=Object(l.useState)(new Array(s.length).fill(!0)),A=N[0],I=N[1];console.log("inside HOme page 3");var C=Object(l.useState)(!1),k=(C[0],C[1],[2e4,4e4,6e4,8e4]),P=function(e){return console.log(e),e.map((function(e){var t=k.find((function(t){return t>e}));return t?[e,t]:[e]}))},E=P(n);console.log(E),console.log("inside HOme page 4");var H=function(e){switch(console.log(e),console.log(e.target.name),e.target.name){case"location":!0,console.log("inside location");var a=t.findIndex((function(t){return console.log(t),console.log(e.target.value),t==e.target.value}));console.log(a);var o=p.map((function(e,t){return t===a?!e:e}));h(o);case"tenant":!0,console.log("inside tenant");var c=r.findIndex((function(t){return console.log(t),console.log(e.target.value),t==e.target.value}));console.log(c);var i=S.map((function(e,t){return t===c?!e:e}));M(i);case"apartment":!0,console.log("inside apartment");var l=s.findIndex((function(t){return console.log(t),console.log(e.target.value),t==e.target.value}));console.log(l);var u=A.map((function(e,t){return t===l?!e:e}));I(u);case"price":O=!0,console.log("inside price");var d=n.findIndex((function(t){return console.log(t),console.log(e.target.value),t==e.target.value}));console.log(d);var f=j.map((function(e,t){return t===d?!e:e}));b(f)}};return console.log("inside HOme page 5"),Object(a.jsxs)(l.Fragment,{children:[Object(a.jsxs)(d.a,{children:[Object(a.jsx)("title",{children:"React Meetups"}),Object(a.jsx)("meta",{name:"description",content:"Browse a huge list of highly active React meetups!"}),Object(a.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),Object(a.jsx)("script",{src:"https://kit.fontawesome.com/fdba8ed509.js",crossorigin:"anonymous"})]}),Object(a.jsxs)("div",{className:f.a.mainDiv,children:[Object(a.jsxs)("div",{className:f.a.searchDiv,children:[e.locationArray&&Object(a.jsxs)("div",{className:f.a.searchItem,children:[Object(a.jsx)("h3",{children:"Location"}),e.locationArray.map((function(e,t){return Object(a.jsxs)("span",{className:f.a.indSpan,children:[Object(a.jsxs)("label",{className:f.a.switch,children:[Object(a.jsx)("input",{type:"checkbox",name:"location",value:e._id,checked:p[t],onChange:H.bind(t)}),Object(a.jsx)("span",{className:f.a.slider})]}),Object(a.jsx)("span",{className:f.a.h3Span,children:e._id}),Object(a.jsx)("span",{className:f.a.h3Count,children:e.count})]})}))]}),e.priceArray&&Object(a.jsxs)("div",{className:f.a.searchItem,children:[Object(a.jsx)("h3",{children:"Price"}),E.map((function(t,n,r){return Object(a.jsxs)("span",{className:f.a.indSpan,children:[Object(a.jsxs)("label",{className:f.a.switch,children:[Object(a.jsx)("input",{type:"checkbox",name:"price",value:t[0],checked:j[n],onChange:H.bind(n)}),Object(a.jsx)("span",{className:f.a.slider})]}),t.length>1&&Object(a.jsxs)("span",{className:f.a.h3Span,children:[t[0]," - ",t[1]]}),t.length<2&&Object(a.jsxs)("span",{className:f.a.h3Span,children:["Greater than ",t[0]]}),Object(a.jsx)("span",{className:f.a.h3Count,children:e.priceArray[n].count})]})}))]}),e.tenantArray&&Object(a.jsxs)("div",{className:f.a.searchItem,children:[Object(a.jsx)("h3",{children:"Tenant Allowed"}),e.tenantArray.map((function(e,t){return Object(a.jsxs)("span",{className:f.a.indSpan,children:[Object(a.jsxs)("label",{className:f.a.switch,children:[Object(a.jsx)("input",{type:"checkbox",name:"tenant",value:e._id,checked:S[t],onChange:H.bind(t)}),Object(a.jsx)("span",{className:f.a.slider})]}),Object(a.jsx)("span",{className:f.a.h3Span,children:e._id}),Object(a.jsx)("span",{className:f.a.h3Count,children:e.count})]})}))]}),e.apartmentArray&&Object(a.jsxs)("div",{className:f.a.searchItem,children:[Object(a.jsx)("h3",{children:"Apartment Type"}),e.apartmentArray.map((function(e,t){return Object(a.jsxs)("span",{className:f.a.indSpan,children:[Object(a.jsxs)("label",{className:f.a.switch,children:[Object(a.jsx)("input",{type:"checkbox",name:"apartment",value:e._id,checked:A[t],onChange:H.bind(t)}),Object(a.jsx)("span",{className:f.a.slider})]}),Object(a.jsx)("span",{className:f.a.h3Span,children:e._id}),Object(a.jsx)("span",{className:f.a.h3Count,children:e.count})]})}))]}),Object(a.jsx)("button",{type:"button",onClick:function(){console.log(p);var a=t.filter((function(e,t){return console.log("inside button"),p[t]})),l=n.filter((function(e,t){return console.log("inside button"),j[t]}));r.length>0&&(_=r.filter((function(e,t){return console.log("inside button"),S[t]}))),s.length>0&&(w=s.filter((function(e,t){return console.log("inside button"),A[t]}))),console.log("after button"),console.log(a);var u={price:{$in:i(a)}},d={tenant:{$in:i(_)}},f={apartment:{$in:i(w)}};if(console.log(u),O){console.log("inside pricechanged"),console.log(l);var h=P(l);console.log(h),h.forEach((function(e,t){console.log("inside swarch array"),console.log(e),e.length>1?y[t]={$and:[{$expr:{$gte:[{$toInt:"$location"},e[0]]}},{$expr:{$lte:[{$toInt:"$location"},e[1]]}}]}:y[t]={$expr:{$gte:[{$toInt:"$location"},e[0]]}}}));var m={$or:[].concat(y)};console.log(m),v={$and:[m,u,d,f]},console.log("totQuery"),console.log(v)}function b(){return(b=Object(c.a)(o.a.mark((function t(){var n,a,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("innside async hand"),n="/api/"+e.meetups[0].price,console.log(n),t.next=5,fetch(n,{method:"POST",body:JSON.stringify(v),headers:{"Content-Type":"application/json"}});case 5:return a=t.sent,t.next=8,a.json();case 8:r=t.sent,console.log("RESPONSE"),console.log(r),console.log(r.result);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){b.apply(this,arguments)}()},children:"Submit"})]}),Object(a.jsx)(x,{meetups:e.meetups})]})]})}},RPSF:function(e,t,n){e.exports={item:"MeetupItem_item__3siMU",detailsFlexColumn:"MeetupItem_detailsFlexColumn__1dKjR",detailsFlex:"MeetupItem_detailsFlex__33616",image:"MeetupItem_image__13rAP",content:"MeetupItem_content__3uEkT",actions:"MeetupItem_actions__LvT9B"}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),s=n("a1gu"),i=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=i(e);if(t){var r=i(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){c(n,e);var t=l(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},a1gu:function(e,t,n){var a=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?r(e):t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},leqP:function(e,t,n){"use strict";var a=n("nKUr"),r=n("rQAc"),o=n.n(r);t.a=function(e){return Object(a.jsx)("div",{className:o.a.card,children:e.children})}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},rQAc:function(e,t,n){e.exports={card:"Card_card__3KSLO"}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2,3]]]);