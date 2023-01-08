/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},p="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(a==Array.prototype||a==Object.prototype)return a;a[b]=d.value;return a},t=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var d=a[b];if(d&&d.Math==Math)return d}throw Error("Cannot find global object");
},u=t(this),v=function(a,b){if(b)a:{var d=u;a=a.split(".");for(var g=0;g<a.length-1;g++){var f=a[g];if(!(f in d))break a;d=d[f]}a=a[a.length-1];g=d[a];b=b(g);b!=g&&null!=b&&p(d,a,{configurable:!0,writable:!0,value:b})}},w=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:n(a)}},x="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},y;
if("function"==typeof Object.setPrototypeOf)y=Object.setPrototypeOf;else{var z;a:{var aa={a:!0},A={};try{A.__proto__=aa;z=A.a;break a}catch(a){}z=!1}y=z?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var B=y,F=function(a,b){a.prototype=x(b.prototype);a.prototype.constructor=a;if(B)B(a,b);else for(var d in b)if("prototype"!=d)if(Object.defineProperties){var g=Object.getOwnPropertyDescriptor(b,d);g&&Object.defineProperty(a,d,g)}else a[d]=b[d];a.ma=b.prototype};
v("Promise",function(a){function b(){this.g=null}function d(c){return c instanceof f?c:new f(function(e){e(c)})}if(a)return a;b.prototype.i=function(c){if(null==this.g){this.g=[];var e=this;this.j(function(){e.s()})}this.g.push(c)};var g=u.setTimeout;b.prototype.j=function(c){g(c,0)};b.prototype.s=function(){for(;this.g&&this.g.length;){var c=this.g;this.g=[];for(var e=0;e<c.length;++e){var h=c[e];c[e]=null;try{h()}catch(k){this.o(k)}}}this.g=null};b.prototype.o=function(c){this.j(function(){throw c;
})};var f=function(c){this.i=0;this.j=void 0;this.g=[];this.O=!1;var e=this.o();try{c(e.resolve,e.reject)}catch(h){e.reject(h)}};f.prototype.o=function(){function c(k){return function(l){h||(h=!0,k.call(e,l))}}var e=this,h=!1;return{resolve:c(this.$),reject:c(this.s)}};f.prototype.$=function(c){if(c===this)this.s(new TypeError("A Promise cannot resolve to itself"));else if(c instanceof f)this.ka(c);else{a:switch(typeof c){case "object":var e=null!=c;break a;case "function":e=!0;break a;default:e=
!1}e?this.W(c):this.N(c)}};f.prototype.W=function(c){var e=void 0;try{e=c.then}catch(h){this.s(h);return}"function"==typeof e?this.T(e,c):this.N(c)};f.prototype.s=function(c){this.H(2,c)};f.prototype.N=function(c){this.H(1,c)};f.prototype.H=function(c,e){if(0!=this.i)throw Error("Cannot settle("+c+", "+e+"): Promise already settled in state"+this.i);this.i=c;this.j=e;2===this.i&&this.ha();this.U()};f.prototype.ha=function(){var c=this;g(function(){if(c.V()){var e=u.console;"undefined"!==typeof e&&
e.error(c.j)}},1)};f.prototype.V=function(){if(this.O)return!1;var c=u.CustomEvent,e=u.Event,h=u.dispatchEvent;if("undefined"===typeof h)return!0;"function"===typeof c?c=new c("unhandledrejection",{cancelable:!0}):"function"===typeof e?c=new e("unhandledrejection",{cancelable:!0}):(c=u.document.createEvent("CustomEvent"),c.initCustomEvent("unhandledrejection",!1,!0,c));c.promise=this;c.reason=this.j;return h(c)};f.prototype.U=function(){if(null!=this.g){for(var c=0;c<this.g.length;++c)r.i(this.g[c]);
this.g=null}};var r=new b;f.prototype.ka=function(c){var e=this.o();c.u(e.resolve,e.reject)};f.prototype.T=function(c,e){var h=this.o();try{c.call(e,h.resolve,h.reject)}catch(k){h.reject(k)}};f.prototype.then=function(c,e){function h(m,q){return"function"==typeof m?function(C){try{k(m(C))}catch(D){l(D)}}:q}var k,l,E=new f(function(m,q){k=m;l=q});this.u(h(c,k),h(e,l));return E};f.prototype.catch=function(c){return this.then(void 0,c)};f.prototype.u=function(c,e){function h(){switch(k.i){case 1:c(k.j);
break;case 2:e(k.j);break;default:throw Error("Unexpected state: "+k.i);}}var k=this;null==this.g?r.i(h):this.g.push(h);this.O=!0};f.resolve=d;f.reject=function(c){return new f(function(e,h){h(c)})};f.race=function(c){return new f(function(e,h){for(var k=w(c),l=k.next();!l.done;l=k.next())d(l.value).u(e,h)})};f.all=function(c){var e=w(c),h=e.next();return h.done?d([]):new f(function(k,l){function E(C){return function(D){m[C]=D;q--;0==q&&k(m)}}var m=[],q=0;do m.push(void 0),q++,d(h.value).u(E(m.length-
1),l),h=e.next();while(!h.done)})};return f});var G=this||self,H=function(a,b){function d(){}d.prototype=b.prototype;a.ma=b.prototype;a.prototype=new d;a.prototype.constructor=a;a.na=function(g,f,r){for(var c=Array(arguments.length-2),e=2;e<arguments.length;e++)c[e-2]=arguments[e];return b.prototype[f].apply(g,c)}},I=function(a){return a};var J=function(a){this.g=a};function K(a){if(Error.captureStackTrace)Error.captureStackTrace(this,K);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}H(K,Error);K.prototype.name="CustomError";function L(a,b){a=a.split("%s");for(var d="",g=a.length-1,f=0;f<g;f++)d+=a[f]+(f<b.length?b[f]:"%s");K.call(this,d+a[g])}H(L,K);L.prototype.name="AssertionError";var M=function(a,b,d){if(!a){var g="Assertion failed";if(b){g+=": "+b;var f=Array.prototype.slice.call(arguments,2)}throw new L(""+g,f||[]);}},N=function(a,b){throw new L("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var O=function(a,b){this.g=a;this.i=b||null};F(O,J);O.prototype.then=function(a,b,d){var g;a&&(g=ba(this,a));this.g.aa(g,b,d)};var ba=function(a,b){var d=a.i;return d?function(g){b.call(this,new d(g))}:b};var ca=[];var P=function(a){this.g=a||gbar.a;this.i=null};F(P,J);var da=function(){M(!Object.isSealed(P),"Cannot use getInstance() with a sealed constructor.");var a="v";if(P.v&&P.hasOwnProperty(a))a=P.v;else{ca.push(P);var b=new P;P.v=b;M(P.hasOwnProperty(a),"Could not instantiate singleton.");a=b}a.i||(a.i=new O(a.g.bh()));return a.i};var Q;var T=function(a,b){this.g=a===R&&b||"";this.i=S};T.prototype.toString=function(){return"Const{"+this.g+"}"};var S={},R={};var V=function(a,b){this.g=b===U?a:""};V.prototype.toString=function(){return this.g+""};var U={};/*

 SPDX-License-Identifier: Apache-2.0
*/
function ea(a){var b=new T(R,"https://apis.google.com/js/client.js");b instanceof T&&b.constructor===T&&b.i===S?b=b.g:(N("expected object of type Const, got '"+b+"'"),b="type_error:Const");if(void 0===Q){var d=null;var g=G.trustedTypes;if(g&&g.createPolicy){try{d=g.createPolicy("goog#html",{createHTML:I,createScript:I,createScriptURL:I})}catch(c){G.console&&G.console.error(c.message)}Q=d}else Q=d}b=(d=Q)?d.createScriptURL(b):b;b=new V(b,U);b instanceof V&&b.constructor===V?b=b.g:(d=typeof b,N("expected object of type TrustedResourceUrl, got '"+
b+"' of type "+("object"!=d?d:b?Array.isArray(b)?"array":d:"null")),b="type_error:TrustedResourceUrl");a.src=b;var f,r;(f=(b=null==(r=(f=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:r.call(f,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",f)};var fa=function(){var a=document;var b="SCRIPT";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};function ha(){window.performance.mark("gapi_load_end");window.performance.measure("gapi_load","gapi_load_start","gapi_load_end");W()}var W,X=null,Y=window;
function Z(){if(X)return X;window.performance.mark("gapi_load_start");var a=Y.colabExperiments&&Y.colabExperiments.first_party_auth,b=Y.colabExperiments&&Y.colabExperiments.onegoogle_gapi;return a&&b&&"undefined"!==typeof gbar?X=(new Promise(function(d){da().then(function(){d()})})).then(function(){window.performance.mark("gapi_load_end");window.performance.measure("gapi_load","gapi_load_start","gapi_load_end");return new Promise(function(d){gapi.load("auth:client",d)})}):X=new Promise(function(d,
g){W=d;Y.gapi_onload=function(){a?W():gapi.load("auth:client",ha)};var f=fa();ea(f);f.async=!0;f.onerror=function(){g(Error("Error loading "+f.src))};d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(f,d)})}Y.colab_gapi_loader={load:Z};Z().then(function(){},function(){});