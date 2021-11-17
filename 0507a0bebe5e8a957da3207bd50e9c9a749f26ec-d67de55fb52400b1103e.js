/*! For license information please see 0507a0bebe5e8a957da3207bd50e9c9a749f26ec-d67de55fb52400b1103e.js.LICENSE.txt */
(self.webpackChunkmusic=self.webpackChunkmusic||[]).push([[132],{862:function(e,t,n){var r=n(8).default;function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var c=o?Object.getOwnPropertyDescriptor(e,l):null;c&&(c.get||c.set)?Object.defineProperty(i,l,c):i[l]=e[l]}return i.default=e,n&&n.set(e,i),i},e.exports.default=e.exports,e.exports.__esModule=!0},5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var l,c,s,u;if(Array.isArray(e)){if((l=e.length)!=o.length)return!1;for(c=l;0!=c--;)if(!i(e[c],o[c]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!i(c.value[1],o.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((l=e.length)!=o.length)return!1;for(c=l;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((l=(s=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!i(e[s[c]],o[s[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",l),f}}},5525:function(e,t,n){"use strict";n.d(t,{$_:function(){return i},h4:function(){return o},Ar:function(){return s},HJ:function(){return xe},OU:function(){return Le}});var r=n(9703),a=n(7294);var i=function(){return a.createElement("footer",{className:"footer inverse"},a.createElement("div",{className:"container footer__container"},a.createElement("div",{className:"footer__menu"},a.createElement("nav",{className:"footerNav"},a.createElement("h3",{className:"footerNav__title"},a.createElement(r.FormattedMessage,{id:"site.contactInfo",defaultMessage:"Contact Info"})),a.createElement("ul",{className:"footerNav__list"},a.createElement("li",{className:"footerNav__item"},a.createElement("i",{className:"fab fa-github"}),a.createElement("a",{className:"footerNav__link interactive interactive--inverse",href:"https://github.com/zyxneo/music"},"Github")))))),a.createElement("div",{className:"footer__bottom"},a.createElement("div",{className:"container footer__container"},a.createElement("div",{className:"footer__copy"},"© 2021 - ",(new Date).getFullYear()," TODO."," ",a.createElement(r.FormattedMessage,{id:"site.copyright",defaultMessage:"All rights reserved."})))))};var o=function(){return a.createElement("div",{className:"header"},a.createElement("div",{className:"container header__container"},a.createElement("menu",{className:"header__menu menu"},a.createElement(r.Link,{className:"menu__item",activeClassName:"menu__item--active",to:"/"},"TODO"))))},l=n(5900),c=n.n(l);function s(e){var t=e.children,n=e.className,r=e.hasHeader,l=void 0===r||r,s=e.isModalOpen;return a.createElement(a.Fragment,null,a.createElement("div",{className:c()("layout",{isModalOpen:s})},l&&a.createElement(o,null),a.createElement("main",{className:c()("main",n)},t),a.createElement(i,null)))}var u,f,m,p,d=n(5697),y=n.n(d),h=n(4839),g=n.n(h),v=n(2993),E=n.n(v),b=n(6494),w=n.n(b),x="bodyAttributes",C="htmlAttributes",T="titleAttributes",N={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(N).map((function(e){return N[e]})),"charset"),k="cssText",A="href",L="http-equiv",S="innerHTML",j="itemprop",_="name",I="property",P="rel",M="src",H="target",B={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",z="defer",D="encodeSpecialCharacters",F="onChangeClientState",q="titleTemplate",Y=Object.keys(B).reduce((function(e,t){return e[B[t]]=t,e}),{}),U=[N.NOSCRIPT,N.SCRIPT,N.STYLE],K="data-react-helmet",W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},$=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},X=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=ae(e,N.TITLE),n=ae(e,q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ae(e,R);return t||r||void 0},ee=function(e){return ae(e,F)||function(){}},te=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return G({},e,t)}),{})},ne=function(e,t){return t.filter((function(e){return void 0!==e[N.BASE]})).map((function(e){return e[N.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},re=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&se("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],c=l.toLowerCase();-1===t.indexOf(c)||n===P&&"canonical"===e[n].toLowerCase()||c===P&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==S&&l!==k&&l!==j||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var l=i[o],c=w()({},r[l],a[l]);r[l]=c}return e}),[]).reverse()},ae=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ie=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){ie(e)}),0)}),oe=function(e){return clearTimeout(e)},le="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ie:n.g.requestAnimationFrame||ie,ce="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||oe:n.g.cancelAnimationFrame||oe,se=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ue=null,fe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,m=e.titleAttributes;de(N.BODY,r),de(N.HTML,a),pe(f,m);var p={baseTag:ye(N.BASE,n),linkTags:ye(N.LINK,i),metaTags:ye(N.META,o),noscriptTags:ye(N.NOSCRIPT,l),scriptTags:ye(N.SCRIPT,s),styleTags:ye(N.STYLE,u)},d={},y={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(y[e]=p[e].oldTags)})),t&&t(),c(e,d,y)},me=function(e){return Array.isArray(e)?e.join(""):e},pe=function(e,t){void 0!==e&&document.title!==e&&(document.title=me(e)),de(N.TITLE,t)},de=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(K),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),l=0;l<o.length;l++){var c=o[l],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===a.indexOf(c)&&a.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute(K):n.getAttribute(K)!==o.join(",")&&n.setAttribute(K,o.join(","))}},ye=function(e,t){var n=document.head||document.querySelector(N.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)n.innerHTML=t.innerHTML;else if(r===k)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(K,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},he=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ge=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)},ve=function(e,t,n){switch(e){case N.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[K]=!0,i=ge(n,r),[a.createElement(N.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var a=he(n),i=me(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Q(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Q(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case x:case C:return{toComponent:function(){return ge(t)},toString:function(){return he(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[K]=!0,r);return Object.keys(t).forEach((function(e){var n=B[e]||e;if(n===S||n===k){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),a.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===S||e===k)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+Q(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===U.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},Ee=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,m=e.titleAttributes;return{base:ve(N.BASE,t,r),bodyAttributes:ve(x,n,r),htmlAttributes:ve(C,a,r),link:ve(N.LINK,i,r),meta:ve(N.META,o,r),noscript:ve(N.NOSCRIPT,l,r),script:ve(N.SCRIPT,c,r),style:ve(N.STYLE,s,r),title:ve(N.TITLE,{title:f,titleAttributes:m},r)}},be=g()((function(e){return{baseTag:ne([A,H],e),bodyAttributes:te(x,e),defer:ae(e,z),encode:ae(e,D),htmlAttributes:te(C,e),linkTags:re(N.LINK,[P,A],e),metaTags:re(N.META,[_,O,L,I,j],e),noscriptTags:re(N.NOSCRIPT,[S],e),onChangeClientState:ee(e),scriptTags:re(N.SCRIPT,[M,S],e),styleTags:re(N.STYLE,[k],e),title:Z(e),titleAttributes:te(T,e)}}),(function(e){ue&&ce(ue),e.defer?ue=le((function(){fe(e,(function(){ue=null}))})):(fe(e),ue=null)}),Ee)((function(){return null})),we=(f=be,p=m=function(e){function t(){return V(this,t),X(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!E()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case N.SCRIPT:case N.NOSCRIPT:return{innerHTML:t};case N.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return G({},r,((t={})[n.type]=[].concat(r[n.type]||[],[G({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case N.TITLE:return G({},a,((t={})[r.type]=o,t.titleAttributes=G({},i),t));case N.BODY:return G({},a,{bodyAttributes:G({},i)});case N.HTML:return G({},a,{htmlAttributes:G({},i)})}return G({},a,((n={})[r.type]=G({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=G({},t);return Object.keys(e).forEach((function(t){var r;n=G({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Y[n]||n]=e[n],t}),t)}(J(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case N.LINK:case N.META:case N.NOSCRIPT:case N.SCRIPT:case N.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=J(e,["children"]),r=G({},n);return t&&(r=this.mapChildrenToProps(t,r)),a.createElement(f,r)},$(t,null,[{key:"canUseDOM",set:function(e){f.canUseDOM=e}}]),t}(a.Component),m.propTypes={base:y().object,bodyAttributes:y().object,children:y().oneOfType([y().arrayOf(y().node),y().node]),defaultTitle:y().string,defer:y().bool,encodeSpecialCharacters:y().bool,htmlAttributes:y().object,link:y().arrayOf(y().object),meta:y().arrayOf(y().object),noscript:y().arrayOf(y().object),onChangeClientState:y().func,script:y().arrayOf(y().object),style:y().arrayOf(y().object),title:y().string,titleAttributes:y().object,titleTemplate:y().string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=f.peek,m.rewind=function(){var e=f.rewind();return e||(e=Ee({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},p);we.renderStatic=we.rewind;function xe(e){var t=e.description,n=e.isModalOpen,i=e.keywords,o=e.meta,l=void 0===o?[]:o,s=e.title,u=(0,r.useIntl)(),f=u.locale,m=t||u.formatMessage({id:"site.description"}),p=i||"TODO";return a.createElement(we,{htmlAttributes:{lang:f},bodyAttributes:{class:c()("body ",{isModalOpen:n})},title:s,titleTemplate:"%s | hi - "+u.formatMessage({id:"site.title",defaultMessage:"Online touch typing application"}),meta:[a.createElement("meta",{name:"description",content:m}),a.createElement("meta",{name:"og:title",content:s}),a.createElement("meta",{name:"og:description",content:m}),a.createElement("meta",{name:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:"TODO"}),a.createElement("meta",{name:"twitter:title",content:s}),a.createElement("meta",{name:"twitter:description",content:m}),a.createElement("meta",{name:"keywords",content:p})].concat(l)},a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500"}),"fa"===f&&a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Cairo:300,400,500"}),a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap&text=0123456789",rel:"stylesheet"}),a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"}),a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/brands.min.css"}))}var Ce=function(){return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95.116 153.12"},a.createElement("path",{className:"trebleClef",stroke:"none",d:"m51.688 5.25c-5.427-0.1409-11.774 12.818-11.563 24.375 0.049 3.52 1.16 10.659 2.781 19.625-10.223 10.581-22.094 21.44-22.094 35.688-0.163 13.057 7.817 29.692 26.75 29.532 2.906-0.02 5.521-0.38 7.844-1 1.731 9.49 2.882 16.98 2.875 20.44 0.061 13.64-17.86 14.99-18.719 7.15 3.777-0.13 6.782-3.13 6.782-6.84 0-3.79-3.138-6.88-7.032-6.88-2.141 0-4.049 0.94-5.343 2.41-0.03 0.03-0.065 0.06-0.094 0.09-0.292 0.31-0.538 0.68-0.781 1.1-0.798 1.35-1.316 3.29-1.344 6.06 0 11.42 28.875 18.77 28.875-3.75 0.045-3.03-1.258-10.72-3.156-20.41 20.603-7.45 15.427-38.04-3.531-38.184-1.47 0.015-2.887 0.186-4.25 0.532-1.08-5.197-2.122-10.241-3.032-14.876 7.199-7.071 13.485-16.224 13.344-33.093 0.022-12.114-4.014-21.828-8.312-21.969zm1.281 11.719c2.456-0.237 4.406 2.043 4.406 7.062 0.199 8.62-5.84 16.148-13.031 23.719-0.688-4.147-1.139-7.507-1.188-9.5 0.204-13.466 5.719-20.886 9.813-21.281zm-7.719 44.687c0.877 4.515 1.824 9.272 2.781 14.063-12.548 4.464-18.57 21.954-0.781 29.781-10.843-9.231-5.506-20.158 2.312-22.062 1.966 9.816 3.886 19.502 5.438 27.872-2.107 0.74-4.566 1.17-7.438 1.19-7.181 0-21.531-4.57-21.531-21.875 0-14.494 10.047-20.384 19.219-28.969zm6.094 21.469c0.313-0.019 0.652-0.011 0.968 0 13.063 0 17.99 20.745 4.688 27.375-1.655-8.32-3.662-17.86-5.656-27.375z"}))},Te=function(){return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 744.09 1052.4",version:"1.1"},a.createElement("path",{className:"bassClef",d:"m190.85 451.25c11.66 14.71 32.32 24.49 55.84 24.49 36.40 0 65.88-23.37 65.88-52.21s-29.48-52.21-65.88-52.21c-20.31 4.15-28.59 9.00-33.14-2.90 17.97-54.32 46.91-66.70 96.54-66.70 65.91 0 96.96 59.89 96.96 142.97-18.22 190.63-205.95 286.75-246.57 316.19 5.69 13.10 5.39 12.63 5.39 12.00 189.78-86.20 330.69-204.43 330.69-320.74 0-92.41-58.57-175.59-187.72-172.8-77.57 0-170.32 86.20-118 171.93zm328.1-89.88c0 17.85 14.47 32.32 32.32 32.32s32.32-14.47 32.32-32.32-14.47-32.32-32.32-32.32-32.32 14.47-32.32 32.32zm0 136.75c0 17.85 14.47 32.32 32.32 32.32s32.32-14.47 32.32-32.32-14.47-32.32-32.32-32.32-32.32 14.47-32.32 32.32z",stroke:"none"}))},Ne=function(){return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 11 153"},a.createElement("path",{className:"grandStaffBrace",d:"m 10.761,0.030 c -0.462,0.027 -0.953,0.517 -1.790,1.719 -1.691,2.240 -4.119,7.486 -5.088,10.221 -1.454,5.739 -1.931,12.718 -1.446,19.455 0.237,2.237 0.714,7.219 1.446,11.209 C 5.089,52.119 5.337,56.109 5.337,60.099 c -0.247,6.482 -1.932,11.713 -4.603,15.204 -0.484,0.498 -0.723,0.997 -0.723,1.252 0,0.255 0.238,0.754 0.723,1.252 2.670,3.491 4.356,8.718 4.603,14.957 0,4.232 -0.248,8.216 -1.455,17.444 -0.731,4.244 -1.208,9.232 -1.446,11.227 -0.484,6.980 -0.008,13.963 1.446,19.446 1.207,4.487 5.574,12.223 6.790,12.223 0.484,0 0.970,-0.504 0.970,-1.005 0,-0.252 -0.485,-0.992 -0.970,-1.746 -2.908,-4.232 -4.127,-8.475 -4.612,-14.957 0,-3.989 0.248,-7.733 1.455,-17.206 0.484,-3.734 0.970,-8.222 1.217,-9.974 0.969,-11.966 -0.964,-22.190 -5.812,-29.668 -0.731,-0.998 -1.217,-1.993 -1.217,-1.993 0,0 0.485,-1.003 1.217,-2.002 4.847,-7.478 6.781,-17.703 5.812,-29.924 -0.246,-1.496 -0.732,-5.978 -1.217,-9.965 C 6.308,25.443 6.060,21.693 6.060,17.704 6.545,11.221 7.764,6.978 10.673,2.746 c 0.969,-1.496 1.216,-1.989 0.732,-2.487 -0.228,-0.156 -0.433,-0.241 -0.643,-0.229 z"}))},Oe=function(){return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.0",viewBox:"31.55 0 7.01 7.01"},a.createElement("g",{transform:"translate(-199.3,-536.4)",className:"wholeNote"},a.createElement("path",{d:"M 206.0,542.8 C 204.3,542.8 202.9,541.2 202.4,539.7 C 202.1,538.7 202.3,537.3 203.3,537.1 C 204.9,536.8 206.2,538.1 207.0,539.4 C 207.5,540.4 207.8,541.9 206.8,542.6 C 206.6,542.8 206.3,542.8 206.0,542.8 z M 208.7,537.4 C 206.8,536.3 204.4,536.2 202.2,536.8 C 200.9,537.3 199.4,538.3 199.3,539.9 C 199.3,541.5 200.8,542.5 202.1,543.0 C 204.2,543.7 206.6,543.6 208.5,542.5 C 209.6,541.9 210.6,540.7 210.3,539.4 C 210.1,538.5 209.4,537.9 208.7,537.4 z "})))},ke=function(){return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.0",x:"0.00",y:"0.00",width:"100",height:"100",viewBox:"0 0 65 65"},a.createElement("g",{transform:"translate(0.00,0.76)",className:"sharp"},a.createElement("g",{transform:"translate(-84.19,-436.06)"},a.createElement("path",{d:"M 86.10,447.45 L 86.10,442.75 L 88.10,442.20 L 88.10,446.88 L 86.10,447.45 z M 90.04,446.31 L 88.66,446.71 L 88.66,442.03 L 90.04,441.64 L 90.04,439.70 L 88.66,440.08 L 88.66,435.30 L 88.10,435.30 L 88.10,440.23 L 86.10,440.80 L 86.10,436.15 L 85.57,436.15 L 85.57,440.98 L 84.19,441.37 L 84.19,443.31 L 85.57,442.93 L 85.57,447.60 L 84.19,447.98 L 84.19,449.92 L 85.57,449.54 L 85.57,454.29 L 86.10,454.29 L 86.10,449.37 L 88.10,448.82 L 88.10,453.45 L 88.66,453.45 L 88.66,448.65 L 90.04,448.26 L 90.04,446.31 z "}))))},Ae=function(){return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.0",viewBox:"0 40 60 60"},a.createElement("g",{transform:"translate(0,-1.53)",className:"flat"},a.createElement("g",{transform:"translate(-94.94,-433.75)"},a.createElement("path",{className:"flat",d:"M 98.16,443.65 C 98.16,444.23 97.95,444.78 97.35,445.52 C 96.73,446.30 96.20,446.75 95.51,447.28 L 95.51,443.84 C 95.66,443.44 95.90,443.12 96.21,442.87 C 96.51,442.63 96.83,442.50 97.14,442.50 C 97.66,442.50 97.99,442.80 98.14,443.39 C 98.15,443.44 98.16,443.52 98.16,443.65 z M 98.09,441.25 C 97.66,441.25 97.22,441.37 96.77,441.61 C 96.33,441.85 95.90,442.17 95.51,442.56 L 95.51,435.29 L 94.94,435.29 L 94.94,447.75 C 94.94,448.10 95.04,448.28 95.23,448.28 C 95.34,448.28 95.48,448.18 95.69,448.06 C 96.27,447.71 96.63,447.48 97.03,447.23 C 97.48,446.95 97.99,446.63 98.66,445.99 C 99.12,445.52 99.45,445.05 99.66,444.58 C 99.87,444.11 99.97,443.64 99.97,443.17 C 99.97,442.49 99.79,442.00 99.42,441.71 C 99.01,441.40 98.56,441.25 98.09,441.25 z "}))))},Le=function(e){var t=e.note,n=t.noteIndex,r=void 0===n?0:n,i=t.cleff,o=void 0===i?"treble":i;console.log(r,o);var l,c,s,u=15,f=500,m=195,p=220;return a.createElement("div",{className:"staff"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:"staff",height:"400",width:"800",version:"1.1",viewBox:"200 0 100 250"},a.createElement("symbol",{id:"sharp"},a.createElement(ke,null)),a.createElement("symbol",{id:"flat"},a.createElement(Ae,null)),a.createElement("symbol",{id:"trebleCleff"},a.createElement(Ce,null)),a.createElement("symbol",{id:"bassCleff"},a.createElement(Te,null)),a.createElement("symbol",{id:"grandStaffBrace"},a.createElement(Ne,null)),a.createElement("symbol",{id:"wholeNote"},a.createElement(Oe,null)),a.createElement("symbol",{id:"signatures"},a.createElement("g",{className:"sharp-signatures",display:"none"},a.createElement("use",{xlinkHref:"#sharp",className:"sharp-1",x:0,y:30}),a.createElement("use",{xlinkHref:"#sharp",className:"sharp-2",x:10/6*5,y:45}),a.createElement("use",{xlinkHref:"#sharp",className:"sharp-3",x:10/6*5*2,y:25}),a.createElement("use",{xlinkHref:"#sharp",className:"sharp-4",x:25,y:40}),a.createElement("use",{xlinkHref:"#sharp",className:"sharp-5",x:10/6*5*4,y:55}),a.createElement("use",{xlinkHref:"#sharp",className:"sharp-6",x:10/6*5*5,y:35}),a.createElement("use",{xlinkHref:"#sharp",className:"sharp-7",x:50,y:50})),a.createElement("g",{className:"flat-signatures",display:"none"},a.createElement("use",{xlinkHref:"#flat",className:"flat-1",x:0,y:40}),a.createElement("use",{xlinkHref:"#flat",className:"flat-2",x:10/6*5,y:25}),a.createElement("use",{xlinkHref:"#flat",className:"flat-3",x:10/6*5*2,y:45}),a.createElement("use",{xlinkHref:"#flat",className:"flat-4",x:25,y:30}),a.createElement("use",{xlinkHref:"#flat",className:"flat-5",x:10/6*5*4,y:50}),a.createElement("use",{xlinkHref:"#flat",className:"flat-6",x:10/6*5*5,y:35}),a.createElement("use",{xlinkHref:"#flat",className:"flat-7",x:50,y:55}))),a.createElement("g",{className:"treble"},a.createElement("g",{className:"ledger"},a.createElement("line",{className:"line l4",x1:m,y1:5,x2:p,y2:5}),a.createElement("line",{className:"line l3",x1:m,y1:15,x2:p,y2:15}),a.createElement("line",{className:"line l2",x1:m,y1:25,x2:p,y2:25}),a.createElement("line",{className:"line l1",x1:m,y1:35,x2:p,y2:35})),a.createElement("line",{className:"line",x1:u,y1:45,x2:f,y2:45}),a.createElement("line",{className:"line",x1:u,y1:55,x2:f,y2:55}),a.createElement("line",{className:"line",x1:u,y1:65,x2:f,y2:65}),a.createElement("line",{className:"line",x1:u,y1:75,x2:f,y2:75}),a.createElement("line",{className:"line",x1:u,y1:85,x2:f,y2:85}),a.createElement("g",{className:"ledger"},a.createElement("line",{className:"line l-1",x1:m,y1:95,x2:p,y2:95}),a.createElement("line",{className:"line l-2",x1:m,y1:105,x2:p,y2:105}),a.createElement("line",{className:"line l-3",x1:m,y1:115,x2:p,y2:115})),a.createElement("use",{xlinkHref:"#trebleCleff",x:-12.5,y:29,height:75}),a.createElement("use",{xlinkHref:"#signatures",x:60})),a.createElement("g",{className:"bass"},a.createElement("g",{className:"ledger"},a.createElement("line",{className:"line l4",x1:m,y1:5,x2:p,y2:5}),a.createElement("line",{className:"line l3",x1:m,y1:125,x2:p,y2:125}),a.createElement("line",{className:"line l2",x1:m,y1:135,x2:p,y2:135}),a.createElement("line",{className:"line l1",x1:m,y1:145,x2:p,y2:145})),a.createElement("line",{className:"line",x1:u,y1:155,x2:f,y2:155}),a.createElement("line",{className:"line",x1:u,y1:165,x2:f,y2:165}),a.createElement("line",{className:"line",x1:u,y1:175,x2:f,y2:175}),a.createElement("line",{className:"line",x1:u,y1:185,x2:f,y2:185}),a.createElement("line",{className:"line",x1:u,y1:195,x2:f,y2:195}),a.createElement("g",{className:"ledger"},a.createElement("line",{className:"line l-1",x1:m,y1:205,x2:p,y2:205}),a.createElement("line",{className:"line l-2",x1:m,y1:215,x2:p,y2:215}),a.createElement("line",{className:"line l-3",x1:m,y1:225,x2:p,y2:225})),a.createElement("use",{xlinkHref:"#bassCleff",height:75,x:-12.5,y:135}),a.createElement("use",{xlinkHref:"#signatures",x:60,y:110})),a.createElement("g",{className:"bars"},a.createElement("use",{xlinkHref:"#grandStaffBrace",height:150,width:15,x:0,y:45}),a.createElement("line",{className:"line",x1:u,y1:45,x2:u,y2:195}),a.createElement("line",{className:"line",x1:495,y1:45,x2:495,y2:195}),a.createElement("rect",{x:497.5,y:45,width:2.5,height:150,stroke:"none"})),(l={x:200,noteIndex:r,cleff:o},c=l.x,s=5*l.noteIndex+("bass"===l.cleff?50:0),a.createElement(a.Fragment,null,a.createElement("use",{xlinkHref:"#wholeNote",height:10,x:c,y:s}),a.createElement("use",{display:"none",xlinkHref:"#flat",className:"flat",x:c-15,y:s-20})))))}},9703:function(e,t,n){"use strict";var r=n(5318),a=n(862);t.__esModule=!0;var i={Link:!0,withIntl:!0,navigate:!0,changeLocale:!0,IntlContextProvider:!0,IntlContextConsumer:!0};t.IntlContextConsumer=t.IntlContextProvider=t.changeLocale=t.navigate=t.withIntl=t.Link=void 0;var o=n(7408);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(i,e)||(t[e]=o[e]))}));var l=a(n(4687));t.Link=l.default,t.navigate=l.navigate,t.changeLocale=l.changeLocale;var c=r(n(8770));t.withIntl=c.default;var s=n(8368);t.IntlContextProvider=s.IntlContextProvider,t.IntlContextConsumer=s.IntlContextConsumer},4687:function(e,t,n){"use strict";var r=n(5318);t.__esModule=!0,t.changeLocale=t.navigate=t.default=void 0;var a=r(n(7154)),i=r(n(7316)),o=r(n(7294)),l=r(n(5697)),c=n(5444),s=n(8368),u=function(e){var t=e.to,n=e.language,r=e.children,l=e.onClick,u=(0,i.default)(e,["to","language","children","onClick"]);return o.default.createElement(s.IntlContextConsumer,null,(function(e){var i=n||e.language,s=e.routed||n?"/"+i+t:""+t;return o.default.createElement(c.Link,(0,a.default)({},u,{to:s,onClick:function(e){n&&localStorage.setItem("gatsby-intl-language",n),l&&l(e)}}),r)}))};u.propTypes={children:l.default.node.isRequired,to:l.default.string,language:l.default.string},u.defaultProps={to:""};var f=u;t.default=f;t.navigate=function(e,t){if("undefined"!=typeof window){var n=window.___gatsbyIntl,r=n.language,a=n.routed?"/"+r+e:""+e;(0,c.navigate)(a,t)}};t.changeLocale=function(e,t){if("undefined"!=typeof window){var n=window.___gatsbyIntl.routed,r="/"+e+(t||function(e){if(!n)return e;var t=e.indexOf("/",1);return e.substring(t)}(function(e){var t="/music";return 0===e.indexOf(t)&&(e=e.slice(t.length)),e}(window.location.pathname)))+window.location.search;localStorage.setItem("gatsby-intl-language",e),(0,c.navigate)(r)}}},8770:function(e,t,n){"use strict";var r=n(5318);t.__esModule=!0,t.default=void 0;var a=r(n(7294)),i=n(7408);t.default=function(e){return function(t){return console.warn("withIntl is deprecated. Please use injectIntl instead."),a.default.createElement((0,i.injectIntl)(e),t)}}}}]);
//# sourceMappingURL=0507a0bebe5e8a957da3207bd50e9c9a749f26ec-d67de55fb52400b1103e.js.map