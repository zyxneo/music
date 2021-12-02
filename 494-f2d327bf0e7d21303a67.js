(self.webpackChunkmusic=self.webpackChunkmusic||[]).push([[494],{7757:function(t,e,r){t.exports=r(5666)},5837:function(t,e,r){r(2109)({global:!0},{globalThis:r(7854)})},5743:function(t,e,r){r(5837)},8462:function(t,e,r){"use strict";r.r(e);var n=r(2982),o=r(7294),i=r(5122),a=r(5083),c=r(1253);e.default=function(){i.ZP.Flow;var t=(0,o.useRef)(null),e=(0,o.useState)(null),r=(e[0],e[1],(0,o.useState)(null)),u=(r[0],r[1],(0,o.useState)(null)),l=u[0],f=u[1],s=(0,o.useState)("c4/w"),h=s[0],p=s[1],y=(0,o.useState)([]),d=y[0],v=y[1],m=(0,o.useState)([]),g=m[0],w=m[1],b=a.qM.fromNote("c3"),E=a.qM.fromNote("c5"),L=a.WX.create({firstNote:b,lastNote:E,keyboardConfig:a.WX.HOME_ROW});function N(){var t=Math.floor(Math.random()*(E-b+1)+b);f(t);var e=Math.floor(t/12)-1,r=c.mN[t%12];v([{midiNumber:t,className:"Piano__Key--toPress"}]),p(""+r+e+"/w")}return(0,o.useEffect)((function(){if(t){t.current.innerHTML="";var e=new i.ZP.Flow.Factory({renderer:{elementId:t.current,width:800,height:260}}),r=e.EasyScore(),n=e.System({x:20,width:760});n.addStave({voices:[r.voice(r.notes(h))]}).addClef("treble").addTimeSignature("4/4"),n.addStave({voices:[r.voice(r.notes("B3/1/r",{clef:"bass",stem:"up"}))]}).addClef("bass").addTimeSignature("4/4"),n.addConnector("singleLeft"),n.addConnector("boldDoubleRight"),n.addConnector("brace"),e.draw()}}),[h]),(0,o.useEffect)((function(){N()}),[]),console.log(h),o.createElement(a.Ar,{className:"home"},o.createElement(a.HJ,{title:"TODO"}),o.createElement("section",{className:"home__intro"},o.createElement("div",{className:"container intro"},o.createElement("div",{className:"intro__logo"},"hi"),o.createElement("h1",{className:"intro__title"},"TODO")),o.createElement("div",{className:"staff",ref:t}),o.createElement("button",{onClick:function(){return N()}},"renderNote"),g.map((function(t){return o.createElement("b",null,t,", ")})),o.createElement("div",{className:"Piano__wrapper"},o.createElement(a.id,{noteRange:{first:b,last:E},playNote:function(t){!function(t){var e=[].concat((0,n.Z)(g),[t]);w(e),console.log("playNote",t,e,l),e.sort().toString()===[l].sort().toString()&&N()}(t)},stopNote:function(t){!function(t){w((0,n.Z)(g).filter((function(e){return e!==t}))),console.log("stopNote",t)}(t)},width:600,keyboardShortcuts:L,renderNoteLabel:function(t){t.keyboardShortcut;var e=t.midiNumber,r=t.isActive,n=t.isAccidental;return o.createElement("div",{className:"Piano__NoteLabel "+(n?"Piano__NoteLabel--accidental":"Piano__NoteLabel--natural")+" "+(r&&"Piano__NoteLabel--active")},e)},noteClasses:d}))))}},5666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(R){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(t,e,r){var n=s;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===s)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?y:h,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(R){return{type:"throw",arg:R}}}t.wrap=l;var s="suspendedStart",h="suspendedYield",p="executing",y="completed",d={};function v(){}function m(){}function g(){}var w={};u(w,i,(function(){return this}));var b=Object.getPrototypeOf,E=b&&b(b(j([])));E&&E!==r&&n.call(E,i)&&(w=E);var L=g.prototype=v.prototype=Object.create(w);function N(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,x(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:k}}function k(){return{value:e,done:!0}}return m.prototype=g,u(L,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},N(_.prototype),u(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},N(L),u(L,c,"Generator"),u(L,i,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},8052:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(1120);function o(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=(0,n.Z)(t)););return t}function i(){return i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=o(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(arguments.length<3?t:r):i.value}},i.apply(this,arguments)}},885:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(181);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(t,e)||(0,n.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2407:function(t,e,r){"use strict";r.d(e,{Z:function(){return c}});var n=r(1120),o=r(9611);function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function a(t,e,r){return a=i()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var i=new(Function.bind.apply(t,n));return r&&(0,o.Z)(i,r.prototype),i},a.apply(null,arguments)}function c(t){var e="function"==typeof Map?new Map:void 0;return c=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return a(t,arguments,(0,n.Z)(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),(0,o.Z)(i,t)},c(t)}}}]);
//# sourceMappingURL=494-f2d327bf0e7d21303a67.js.map