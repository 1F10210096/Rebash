(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8416:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function s(e){try{u(n.next(e))}catch(e){o(e)}}function a(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(s,a)}u((n=n.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(2365),u=s(r(9669));t.default=function(e,t){return void 0===e&&(e=u.default),{baseURL:(null==t?void 0:t.baseURL)||e.defaults.baseURL,fetch:function(r,s,u,l,c){var h=this,d=function(d){return function(){return i(h,void 0,void 0,function(){var i,h,f;return o(this,function(o){switch(o.label){case 0:return i=(0,a.optionToRequest)(l,c),[4,e.request(n(n(n(n({paramsSerializer:function(e){return(0,a.dataToURLString)(e)}},t),{url:s,baseURL:r,method:u,responseType:d}),null==i?void 0:i.config),{data:null==i?void 0:i.httpBody,params:null==i?void 0:i.query,headers:n(n(n({},null==t?void 0:t.headers),null===(f=null==i?void 0:i.config)||void 0===f?void 0:f.headers),null==i?void 0:i.headers)}))];case 1:return[2,{status:(h=o.sent()).status,headers:h.headers,body:h.data,originalResponse:h}]}})})}};return{send:d(),json:d("json"),text:d("text"),arrayBuffer:d("arraybuffer"),blob:d("blob"),formData:d()}}}}},4444:function(e,t,r){"use strict";r.d(t,{BH:function(){return T},L:function(){return u},LL:function(){return R},Pz:function(){return I},ZR:function(){return O},aH:function(){return E},b$:function(){return f},eu:function(){return m},hl:function(){return g},m9:function(){return x},ne:function(){return L},pd:function(){return P},q4:function(){return _},ru:function(){return d},tV:function(){return l},uI:function(){return h},vZ:function(){return function e(t,r){if(t===r)return!0;let n=Object.keys(t),i=Object.keys(r);for(let o of n){if(!i.includes(o))return!1;let n=t[o],s=r[o];if(k(n)&&k(s)){if(!e(n,s))return!1}else if(n!==s)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}},w1:function(){return p},xO:function(){return C},xb:function(){return A},z$:function(){return c},zd:function(){return N}});var n=r(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):(64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},o=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){let o=e[r++],s=e[r++],a=e[r++],u=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[n++]=String.fromCharCode(55296+(u>>10)),t[n++]=String.fromCharCode(56320+(1023&u))}else{let o=e[r++],s=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,u=a?e[t+2]:0,l=i>>2,c=(3&i)<<4|s>>4,h=(15&s)<<2|u>>6,d=63&u;a||(d=64,o||(h=64)),n.push(r[l],r[c],r[h],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],o=t<e.length,s=o?r[e.charAt(t)]:0;++t;let a=t<e.length,u=a?r[e.charAt(t)]:64;++t;let l=t<e.length,c=l?r[e.charAt(t)]:64;if(++t,null==i||null==s||null==u||null==c)throw Error();let h=i<<2|s>>4;if(n.push(h),64!==u){let e=s<<4&240|u>>2;if(n.push(e),64!==c){let e=u<<6&192|c;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){let t=i(e);return s.encodeByteArray(t,!0)},u=function(e){return a(e).replace(/\./g,"")},l=function(e){try{return s.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function h(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())}function d(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function f(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function p(){let e=c();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function g(){try{return"object"==typeof indexedDB}catch(e){return!1}}function m(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let y=()=>(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,v=()=>{if(void 0===n||void 0===n.env)return;let e=n.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},b=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&l(e[1]);return t&&JSON.parse(t)},w=()=>{try{return y()||v()||b()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},_=e=>{var t,r;return null===(r=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},E=()=>{var e;return null===(e=w())||void 0===e?void 0:e.config},I=e=>{var t;return null===(t=w())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}class O extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],o=i?i.replace(S,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",s=`${this.serviceName}: ${o} (${n}).`,a=new O(n,s,r);return a}}let S=/\{\$([^}]+)}/g;function A(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function k(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function N(e){let t={},r=e.replace(/^\?/,"").split("&");return r.forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function P(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}function L(e,t){let r=new D(e,t);return r.subscribe.bind(r)}class D{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=U),void 0===n.error&&(n.error=U),void 0===n.complete&&(n.complete=U);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function U(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){return e&&e._delegate?e._delegate:e}},2365:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.optionToRequest=t.dataToURLString=t.headersToObject=void 0;let i=n(r(6230)),o=e=>[...e.entries()].reduce((e,[t,r])=>({...e,[t]:r}),{});t.headersToObject=o;let s=(e,t)=>{for(let r in e)Array.isArray(e[r])?e[r].forEach(e=>t.append(r,e)):null!=e[r]&&t.append(r,e[r]);return t},a=e=>encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,e=>({"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"})[e]),u=e=>Object.keys(e).filter(t=>null!=e[t]).map(t=>Array.isArray(e[t])?e[t].map(e=>`${a(t)}=${a(e)}`).join("&"):`${a(t)}=${a(e[t])}`).join("&");t.dataToURLString=u;let l="undefined"!=typeof FormData,c=(e,r)=>{let n;if((null==e?void 0:e.body)===void 0)return e;let o={};switch(r){case"FormData":if(l)n=s(e.body,new FormData);else{let t=new i.default;n=s(e.body,t),o=t.getHeaders()}break;case"URLSearchParams":n=(0,t.dataToURLString)(e.body),o["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";break;case"ArrayBuffer":case"string":case"Blob":case"any":n=e.body;break;default:n=JSON.stringify(e.body),o["Content-Type"]="application/json;charset=utf-8"}return{httpBody:n,...e,headers:{...o,...e.headers}}};t.optionToRequest=c},9669:function(e,t,r){e.exports=r(1609)},5448:function(e,t,r){"use strict";var n=r(4867),i=r(6026),o=r(4372),s=r(5327),a=r(4097),u=r(4109),l=r(7985),c=r(7874),h=r(2648),d=r(644),f=r(205);e.exports=function(e){return new Promise(function(t,r){var p,g=e.data,m=e.headers,y=e.responseType;function v(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}n.isFormData(g)&&n.isStandardBrowserEnv()&&delete m["Content-Type"];var b=new XMLHttpRequest;if(e.auth){var w=e.auth.username||"",_=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(w+":"+_)}var E=a(e.baseURL,e.url);function I(){if(b){var n="getAllResponseHeaders"in b?u(b.getAllResponseHeaders()):null;i(function(e){t(e),v()},function(e){r(e),v()},{data:y&&"text"!==y&&"json"!==y?b.response:b.responseText,status:b.status,statusText:b.statusText,headers:n,config:e,request:b}),b=null}}if(b.open(e.method.toUpperCase(),s(E,e.params,e.paramsSerializer),!0),b.timeout=e.timeout,"onloadend"in b?b.onloadend=I:b.onreadystatechange=function(){b&&4===b.readyState&&(0!==b.status||b.responseURL&&0===b.responseURL.indexOf("file:"))&&setTimeout(I)},b.onabort=function(){b&&(r(new h("Request aborted",h.ECONNABORTED,e,b)),b=null)},b.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,e,b,b)),b=null},b.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||c;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new h(t,n.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,b)),b=null},n.isStandardBrowserEnv()){var T=(e.withCredentials||l(E))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;T&&(m[e.xsrfHeaderName]=T)}"setRequestHeader"in b&&n.forEach(m,function(e,t){void 0===g&&"content-type"===t.toLowerCase()?delete m[t]:b.setRequestHeader(t,e)}),n.isUndefined(e.withCredentials)||(b.withCredentials=!!e.withCredentials),y&&"json"!==y&&(b.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&b.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&b.upload&&b.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){b&&(r(!e||e&&e.type?new d:e),b.abort(),b=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),g||(g=null);var O=f(E);if(O&&-1===["http","https","file"].indexOf(O)){r(new h("Unsupported protocol "+O+":",h.ERR_BAD_REQUEST,e));return}b.send(g)})}},1609:function(e,t,r){"use strict";var n=r(4867),i=r(1849),o=r(321),s=r(7185),a=function e(t){var r=new o(t),a=i(o.prototype.request,r);return n.extend(a,o.prototype,r),n.extend(a,r),a.create=function(r){return e(s(t,r))},a}(r(5546));a.Axios=o,a.CanceledError=r(644),a.CancelToken=r(4972),a.isCancel=r(6502),a.VERSION=r(7288).version,a.toFormData=r(7675),a.AxiosError=r(2648),a.Cancel=a.CanceledError,a.all=function(e){return Promise.all(e)},a.spread=r(8713),a.isAxiosError=r(6268),e.exports=a,e.exports.default=a},4972:function(e,t,r){"use strict";var n=r(644);function i(e){if("function"!=typeof e)throw TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});var t,r=this;this.promise.then(function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}}),this.promise.then=function(e){var t,n=new Promise(function(e){r.subscribe(e),t=e}).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e(function(e){r.reason||(r.reason=new n(e),t(r.reason))})}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]},i.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},i.source=function(){var e;return{token:new i(function(t){e=t}),cancel:e}},e.exports=i},644:function(e,t,r){"use strict";var n=r(2648);function i(e){n.call(this,null==e?"canceled":e,n.ERR_CANCELED),this.name="CanceledError"}r(4867).inherits(i,n,{__CANCEL__:!0}),e.exports=i},6502:function(e){"use strict";e.exports=function(e){return!!(e&&e.__CANCEL__)}},321:function(e,t,r){"use strict";var n=r(4867),i=r(5327),o=r(782),s=r(3572),a=r(7185),u=r(4097),l=r(4875),c=l.validators;function h(e){this.defaults=e,this.interceptors={request:new o,response:new o}}h.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var r,n=t.transitional;void 0!==n&&l.assertOptions(n,{silentJSONParsing:c.transitional(c.boolean),forcedJSONParsing:c.transitional(c.boolean),clarifyTimeoutError:c.transitional(c.boolean)},!1);var i=[],o=!0;this.interceptors.request.forEach(function(e){("function"!=typeof e.runWhen||!1!==e.runWhen(t))&&(o=o&&e.synchronous,i.unshift(e.fulfilled,e.rejected))});var u=[];if(this.interceptors.response.forEach(function(e){u.push(e.fulfilled,e.rejected)}),!o){var h=[s,void 0];for(Array.prototype.unshift.apply(h,i),h=h.concat(u),r=Promise.resolve(t);h.length;)r=r.then(h.shift(),h.shift());return r}for(var d=t;i.length;){var f=i.shift(),p=i.shift();try{d=f(d)}catch(e){p(e);break}}try{r=s(d)}catch(e){return Promise.reject(e)}for(;u.length;)r=r.then(u.shift(),u.shift());return r},h.prototype.getUri=function(e){return i(u((e=a(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)},n.forEach(["delete","get","head","options"],function(e){h.prototype[e]=function(t,r){return this.request(a(r||{},{method:e,url:t,data:(r||{}).data}))}}),n.forEach(["post","put","patch"],function(e){function t(t){return function(r,n,i){return this.request(a(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}h.prototype[e]=t(),h.prototype[e+"Form"]=t(!0)}),e.exports=h},2648:function(e,t,r){"use strict";var n=r(4867);function i(e,t,r,n,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}n.inherits(i,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var o=i.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){s[e]={value:e}}),Object.defineProperties(i,s),Object.defineProperty(o,"isAxiosError",{value:!0}),i.from=function(e,t,r,s,a,u){var l=Object.create(o);return n.toFlatObject(e,l,function(e){return e!==Error.prototype}),i.call(l,e.message,t,r,s,a),l.name=e.name,u&&Object.assign(l,u),l},e.exports=i},782:function(e,t,r){"use strict";var n=r(4867);function i(){this.handlers=[]}i.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){n.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=i},4097:function(e,t,r){"use strict";var n=r(1793),i=r(7303);e.exports=function(e,t){return e&&!n(t)?i(e,t):t}},3572:function(e,t,r){"use strict";var n=r(4867),i=r(8527),o=r(6502),s=r(5546),a=r(644);function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=i.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return u(e),t.data=i.call(e,t.data,t.headers,e.transformResponse),t},function(t){return!o(t)&&(u(e),t&&t.response&&(t.response.data=i.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},7185:function(e,t,r){"use strict";var n=r(4867);e.exports=function(e,t){t=t||{};var r={};function i(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function o(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:i(void 0,e[r]):i(e[r],t[r])}function s(e){if(!n.isUndefined(t[e]))return i(void 0,t[e])}function a(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:i(void 0,e[r]):i(void 0,t[r])}function u(r){return r in t?i(e[r],t[r]):r in e?i(void 0,e[r]):void 0}var l={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return n.forEach(Object.keys(e).concat(Object.keys(t)),function(e){var t=l[e]||o,i=t(e);n.isUndefined(i)&&t!==u||(r[e]=i)}),r}},6026:function(e,t,r){"use strict";var n=r(2648);e.exports=function(e,t,r){var i=r.config.validateStatus;!r.status||!i||i(r.status)?e(r):t(new n("Request failed with status code "+r.status,[n.ERR_BAD_REQUEST,n.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}},8527:function(e,t,r){"use strict";var n=r(4867),i=r(5546);e.exports=function(e,t,r){var o=this||i;return n.forEach(r,function(r){e=r.call(o,e,t)}),e}},5546:function(e,t,r){"use strict";var n,i=r(3454),o=r(4867),s=r(6016),a=r(2648),u=r(7874),l=r(7675),c={"Content-Type":"application/x-www-form-urlencoded"};function h(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var d={transitional:u,adapter:("undefined"!=typeof XMLHttpRequest?n=r(5448):void 0!==i&&"[object process]"===Object.prototype.toString.call(i)&&(n=r(5448)),n),transformRequest:[function(e,t){if(s(t,"Accept"),s(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e))return e;if(o.isArrayBufferView(e))return e.buffer;if(o.isURLSearchParams(e))return h(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var r,n=o.isObject(e),i=t&&t["Content-Type"];if((r=o.isFileList(e))||n&&"multipart/form-data"===i){var a=this.env&&this.env.FormData;return l(r?{"files[]":e}:e,a&&new a)}return n||"application/json"===i?(h(t,"application/json"),function(e,t,r){if(o.isString(e))try{return(0,JSON.parse)(e),o.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||d.transitional,r=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,i=!r&&"json"===this.responseType;if(i||n&&o.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(i){if("SyntaxError"===e.name)throw a.from(e,a.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:r(1623)},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};o.forEach(["delete","get","head"],function(e){d.headers[e]={}}),o.forEach(["post","put","patch"],function(e){d.headers[e]=o.merge(c)}),e.exports=d},7874:function(e){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},7288:function(e){e.exports={version:"0.27.2"}},1849:function(e){"use strict";e.exports=function(e,t){return function(){for(var r=Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},5327:function(e,t,r){"use strict";var n=r(4867);function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;if(r)o=r(t);else if(n.isURLSearchParams(t))o=t.toString();else{var o,s=[];n.forEach(t,function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(i(t)+"="+i(e))}))}),o=s.join("&")}if(o){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},7303:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},4372:function(e,t,r){"use strict";var n=r(4867);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,i,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(i)&&a.push("path="+i),n.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},1793:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},6268:function(e,t,r){"use strict";var n=r(4867);e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}},7985:function(e,t,r){"use strict";var n=r(4867);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function i(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=i(window.location.href),function(t){var r=n.isString(t)?i(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},6016:function(e,t,r){"use strict";var n=r(4867);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},1623:function(e){e.exports=null},4109:function(e,t,r){"use strict";var n=r(4867),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,o,s={};return e&&n.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t&&!(s[t]&&i.indexOf(t)>=0)&&("set-cookie"===t?s[t]=(s[t]?s[t]:[]).concat([r]):s[t]=s[t]?s[t]+", "+r:r)}),s}},205:function(e){"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}},8713:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},7675:function(e,t,r){"use strict";var n=r(8764).lW,i=r(4867);e.exports=function(e,t){t=t||new FormData;var r=[];function o(e){return null===e?"":i.isDate(e)?e.toISOString():i.isArrayBuffer(e)||i.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):n.from(e):e}return!function e(n,s){if(i.isPlainObject(n)||i.isArray(n)){if(-1!==r.indexOf(n))throw Error("Circular reference detected in "+s);r.push(n),i.forEach(n,function(r,n){if(!i.isUndefined(r)){var a,u=s?s+"."+n:n;if(r&&!s&&"object"==typeof r){if(i.endsWith(n,"{}"))r=JSON.stringify(r);else if(i.endsWith(n,"[]")&&(a=i.toArray(r))){a.forEach(function(e){i.isUndefined(e)||t.append(u,o(e))});return}}e(r,u)}}),r.pop()}else t.append(s,o(n))}(e),t}},4875:function(e,t,r){"use strict";var n=r(7288).version,i=r(2648),o={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){o[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});var s={};o.transitional=function(e,t,r){function o(e,t){return"[Axios v"+n+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,n,a){if(!1===e)throw new i(o(n," has been removed"+(t?" in "+t:"")),i.ERR_DEPRECATED);return t&&!s[n]&&(s[n]=!0,console.warn(o(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,a)}},e.exports={assertOptions:function(e,t,r){if("object"!=typeof e)throw new i("options must be an object",i.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(e),o=n.length;o-- >0;){var s=n[o],a=t[s];if(a){var u=e[s],l=void 0===u||a(u,s,e);if(!0!==l)throw new i("option "+s+" must be "+l,i.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new i("Unknown option "+s,i.ERR_BAD_OPTION)}},validators:o}},4867:function(e,t,r){"use strict";var n,i,o=r(1849),s=Object.prototype.toString,a=(n=Object.create(null),function(e){var t=s.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())});function u(e){return e=e.toLowerCase(),function(t){return a(t)===e}}function l(e){return Array.isArray(e)}function c(e){return void 0===e}var h=u("ArrayBuffer");function d(e){return null!==e&&"object"==typeof e}function f(e){if("object"!==a(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var p=u("Date"),g=u("File"),m=u("Blob"),y=u("FileList");function v(e){return"[object Function]"===s.call(e)}var b=u("URLSearchParams");function w(e,t){if(null!=e){if("object"!=typeof e&&(e=[e]),l(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}}var _=(i="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return i&&e instanceof i});e.exports={isArray:l,isArrayBuffer:h,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||s.call(e)===t||v(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&h(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:d,isPlainObject:f,isUndefined:c,isDate:p,isFile:g,isBlob:m,isFunction:v,isStream:function(e){return d(e)&&v(e.pipe)},isURLSearchParams:b,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:w,merge:function e(){var t={};function r(r,n){f(t[n])&&f(r)?t[n]=e(t[n],r):f(r)?t[n]=e({},r):l(r)?t[n]=r.slice():t[n]=r}for(var n=0,i=arguments.length;n<i;n++)w(arguments[n],r);return t},extend:function(e,t,r){return w(t,function(t,n){r&&"function"==typeof t?e[n]=o(t,r):e[n]=t}),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,r,n){e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,r&&Object.assign(e.prototype,r)},toFlatObject:function(e,t,r){var n,i,o,s={};t=t||{};do{for(i=(n=Object.getOwnPropertyNames(e)).length;i-- >0;)s[o=n[i]]||(t[o]=e[o],s[o]=!0);e=Object.getPrototypeOf(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:a,kindOfTest:u,endsWith:function(e,t,r){e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return -1!==n&&n===r},toArray:function(e){if(!e)return null;var t=e.length;if(c(t))return null;for(var r=Array(t);t-- >0;)r[t]=e[t];return r},isTypedArray:_,isFileList:y}},9742:function(e,t){"use strict";t.byteLength=function(e){var t=u(e),r=t[0],n=t[1];return(r+n)*3/4-n},t.toByteArray=function(e){var t,r,o=u(e),s=o[0],a=o[1],l=new i((s+a)*3/4-a),c=0,h=a>0?s-4:s;for(r=0;r<h;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],l[c++]=t>>16&255,l[c++]=t>>8&255,l[c++]=255&t;return 2===a&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,l[c++]=255&t),1===a&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,l[c++]=t>>8&255,l[c++]=255&t),l},t.fromByteArray=function(e){for(var t,n=e.length,i=n%3,o=[],s=0,a=n-i;s<a;s+=16383)o.push(function(e,t,n){for(var i,o=[],s=t;s<n;s+=3)o.push(r[(i=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]))>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return o.join("")}(e,s,s+16383>a?a:s+16383));return 1===i?o.push(r[(t=e[n-1])>>2]+r[t<<4&63]+"=="):2===i&&o.push(r[(t=(e[n-2]<<8)+e[n-1])>>10]+r[t>>4&63]+r[t<<2&63]+"="),o.join("")};for(var r=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,a=o.length;s<a;++s)r[s]=o[s],n[o.charCodeAt(s)]=s;function u(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},8764:function(e,t,r){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */let n=r(9742),i=r(645),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function s(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,a.prototype),t}function a(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return c(e)}return u(e,t,r)}function u(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!a.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|p(e,t),n=s(r),i=n.write(e,t);return i!==r&&(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(j(e,Uint8Array)){let t=new Uint8Array(e);return d(t.buffer,t.byteOffset,t.byteLength)}return h(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(j(e,ArrayBuffer)||e&&j(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(j(e,SharedArrayBuffer)||e&&j(e.buffer,SharedArrayBuffer)))return d(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return a.from(n,t,r);let i=function(e){var t;if(a.isBuffer(e)){let t=0|f(e.length),r=s(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?s(0):h(e):"Buffer"===e.type&&Array.isArray(e.data)?h(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return a.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function l(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function c(e){return l(e),s(e<0?0:0|f(e))}function h(e){let t=e.length<0?0:0|f(e.length),r=s(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function d(e,t,r){let n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),a.prototype),n}function f(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function p(e,t){if(a.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||j(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return D(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return U(e).length;default:if(i)return n?-1:D(e).length;t=(""+t).toLowerCase(),i=!0}}function g(e,t,r){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=t;n<r;++n)i+=M[e[n]];return i}(this,t,r);case"utf8":case"utf-8":return b(this,t,r);case"ascii":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":var o,s;return o=t,s=r,0===o&&s===this.length?n.fromByteArray(this):n.fromByteArray(this.slice(o,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let n=e.slice(t,r),i="";for(let e=0;e<n.length-1;e+=2)i+=String.fromCharCode(n[e]+256*n[e+1]);return i}(this,t,r);default:if(i)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function m(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}function y(e,t,r,n,i){var o;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(o=r=+r)!=o&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof t&&(t=a.from(t,n)),a.isBuffer(t))return 0===t.length?-1:v(e,t,r,n,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):v(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function v(e,t,r,n,i){let o,s=1,a=e.length,u=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;s=2,a/=2,u/=2,r/=2}function l(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(i){let n=-1;for(o=r;o<a;o++)if(l(e,o)===l(t,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===u)return n*s}else -1!==n&&(o-=o-n),n=-1}else for(r+u>a&&(r=a-u),o=r;o>=0;o--){let r=!0;for(let n=0;n<u;n++)if(l(e,o+n)!==l(t,n)){r=!1;break}if(r)return o}return -1}function b(e,t,r){r=Math.min(e.length,r);let n=[],i=t;for(;i<r;){let t=e[i],o=null,s=t>239?4:t>223?3:t>191?2:1;if(i+s<=r){let r,n,a,u;switch(s){case 1:t<128&&(o=t);break;case 2:(192&(r=e[i+1]))==128&&(u=(31&t)<<6|63&r)>127&&(o=u);break;case 3:r=e[i+1],n=e[i+2],(192&r)==128&&(192&n)==128&&(u=(15&t)<<12|(63&r)<<6|63&n)>2047&&(u<55296||u>57343)&&(o=u);break;case 4:r=e[i+1],n=e[i+2],a=e[i+3],(192&r)==128&&(192&n)==128&&(192&a)==128&&(u=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&a)>65535&&u<1114112&&(o=u)}}null===o?(o=65533,s=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=s}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function w(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function _(e,t,r,n,i,o){if(!a.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function E(e,t,r,n,i){C(t,n,i,e,r,7);let o=Number(t&BigInt(4294967295));e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,r}function I(e,t,r,n,i){C(t,n,i,e,r,7);let o=Number(t&BigInt(4294967295));e[r+7]=o,o>>=8,e[r+6]=o,o>>=8,e[r+5]=o,o>>=8,e[r+4]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=s,s>>=8,e[r+2]=s,s>>=8,e[r+1]=s,s>>=8,e[r]=s,r+8}function T(e,t,r,n,i,o){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function O(e,t,r,n,o){return t=+t,r>>>=0,o||T(e,t,r,4,34028234663852886e22,-34028234663852886e22),i.write(e,t,r,n,23,4),r+4}function R(e,t,r,n,o){return t=+t,r>>>=0,o||T(e,t,r,8,17976931348623157e292,-17976931348623157e292),i.write(e,t,r,n,52,8),r+8}t.lW=a,t.h2=50,a.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),a.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}}),a.poolSize=8192,a.from=function(e,t,r){return u(e,t,r)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array),a.alloc=function(e,t,r){return(l(e),e<=0)?s(e):void 0!==t?"string"==typeof r?s(e).fill(t,r):s(e).fill(t):s(e)},a.allocUnsafe=function(e){return c(e)},a.allocUnsafeSlow=function(e){return c(e)},a.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==a.prototype},a.compare=function(e,t){if(j(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),j(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(e)||!a.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return a.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let n=a.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){let t=e[r];if(j(t,Uint8Array))i+t.length>n.length?(a.isBuffer(t)||(t=a.from(t)),t.copy(n,i)):Uint8Array.prototype.set.call(n,t,i);else if(a.isBuffer(t))t.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=t.length}return n},a.byteLength=p,a.prototype._isBuffer=!0,a.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)m(this,t,t+1);return this},a.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)m(this,t,t+3),m(this,t+1,t+2);return this},a.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)m(this,t,t+7),m(this,t+1,t+6),m(this,t+2,t+5),m(this,t+3,t+4);return this},a.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?b(this,0,e):g.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(e){if(!a.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===a.compare(this,e)},a.prototype.inspect=function(){let e="",r=t.h2;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},o&&(a.prototype[o]=a.prototype.inspect),a.prototype.compare=function(e,t,r,n,i){if(j(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;let o=i-n,s=r-t,u=Math.min(o,s),l=this.slice(n,i),c=e.slice(t,r);for(let e=0;e<u;++e)if(l[e]!==c[e]){o=l[e],s=c[e];break}return o<s?-1:s<o?1:0},a.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},a.prototype.indexOf=function(e,t,r){return y(this,e,t,r,!0)},a.prototype.lastIndexOf=function(e,t,r){return y(this,e,t,r,!1)},a.prototype.write=function(e,t,r,n){var i,o,s,a,u,l,c,h;if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let d=this.length-t;if((void 0===r||r>d)&&(r=d),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let f=!1;for(;;)switch(n){case"hex":return function(e,t,r,n){let i;r=Number(r)||0;let o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;let s=t.length;for(n>s/2&&(n=s/2),i=0;i<n;++i){let n=parseInt(t.substr(2*i,2),16);if(n!=n)break;e[r+i]=n}return i}(this,e,t,r);case"utf8":case"utf-8":return i=t,o=r,x(D(e,this.length-i),this,i,o);case"ascii":case"latin1":case"binary":return s=t,a=r,x(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,s,a);case"base64":return u=t,l=r,x(U(e),this,u,l);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=t,h=r,x(function(e,t){let r,n;let i=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=(r=e.charCodeAt(o))>>8,i.push(r%256),i.push(n);return i}(e,this.length-c),this,c,h);default:if(f)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),f=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},a.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,a.prototype),n},a.prototype.readUintLE=a.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||w(e,t,this.length);let n=this[e],i=1,o=0;for(;++o<t&&(i*=256);)n+=this[e+o]*i;return n},a.prototype.readUintBE=a.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||w(e,t,this.length);let n=this[e+--t],i=1;for(;t>0&&(i*=256);)n+=this[e+--t]*i;return n},a.prototype.readUint8=a.prototype.readUInt8=function(e,t){return e>>>=0,t||w(e,1,this.length),this[e]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(e,t){return e>>>=0,t||w(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(e,t){return e>>>=0,t||w(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(e,t){return e>>>=0,t||w(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(e,t){return e>>>=0,t||w(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readBigUInt64LE=B(function(e){N(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&P(e,this.length-8);let n=t+256*this[++e]+65536*this[++e]+16777216*this[++e],i=this[++e]+256*this[++e]+65536*this[++e]+16777216*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),a.prototype.readBigUInt64BE=B(function(e){N(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&P(e,this.length-8);let n=16777216*t+65536*this[++e]+256*this[++e]+this[++e],i=16777216*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),a.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||w(e,t,this.length);let n=this[e],i=1,o=0;for(;++o<t&&(i*=256);)n+=this[e+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},a.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||w(e,t,this.length);let n=t,i=1,o=this[e+--n];for(;n>0&&(i*=256);)o+=this[e+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},a.prototype.readInt8=function(e,t){return(e>>>=0,t||w(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},a.prototype.readInt16LE=function(e,t){e>>>=0,t||w(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt16BE=function(e,t){e>>>=0,t||w(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt32LE=function(e,t){return e>>>=0,t||w(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,t){return e>>>=0,t||w(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readBigInt64LE=B(function(e){N(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&P(e,this.length-8);let n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),a.prototype.readBigInt64BE=B(function(e){N(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&P(e,this.length-8);let n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+r)}),a.prototype.readFloatLE=function(e,t){return e>>>=0,t||w(e,4,this.length),i.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,t){return e>>>=0,t||w(e,4,this.length),i.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,t){return e>>>=0,t||w(e,8,this.length),i.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,t){return e>>>=0,t||w(e,8,this.length),i.read(this,e,!1,52,8)},a.prototype.writeUintLE=a.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;_(this,e,t,r,n,0)}let i=1,o=0;for(this[t]=255&e;++o<r&&(i*=256);)this[t+o]=e/i&255;return t+r},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;_(this,e,t,r,n,0)}let i=r-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+r},a.prototype.writeUint8=a.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,1,255,0),this[t]=255&e,t+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},a.prototype.writeBigUInt64LE=B(function(e,t=0){return E(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=B(function(e,t=0){return I(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);_(this,e,t,r,n-1,-n)}let i=0,o=1,s=0;for(this[t]=255&e;++i<r&&(o*=256);)e<0&&0===s&&0!==this[t+i-1]&&(s=1),this[t+i]=(e/o>>0)-s&255;return t+r},a.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);_(this,e,t,r,n-1,-n)}let i=r-1,o=1,s=0;for(this[t+i]=255&e;--i>=0&&(o*=256);)e<0&&0===s&&0!==this[t+i+1]&&(s=1),this[t+i]=(e/o>>0)-s&255;return t+r},a.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},a.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},a.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},a.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},a.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||_(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},a.prototype.writeBigInt64LE=B(function(e,t=0){return E(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=B(function(e,t=0){return I(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeFloatLE=function(e,t,r){return O(this,e,t,!0,r)},a.prototype.writeFloatBE=function(e,t,r){return O(this,e,t,!1,r)},a.prototype.writeDoubleLE=function(e,t,r){return R(this,e,t,!0,r)},a.prototype.writeDoubleBE=function(e,t,r){return R(this,e,t,!1,r)},a.prototype.copy=function(e,t,r,n){if(!a.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);let i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},a.prototype.fill=function(e,t,r,n){let i;if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!a.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){let t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{let o=a.isBuffer(e)?e:a.from(e,n),s=o.length;if(0===s)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=o[i%s]}return this};let S={};function A(e,t,r){S[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function k(e){let t="",r=e.length,n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function C(e,t,r,n,i,o){if(e>r||e<t){let n;let i="bigint"==typeof t?"n":"";throw n=o>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${(o+1)*8}${i}`:`>= -(2${i} ** ${(o+1)*8-1}${i}) and < 2 ** ${(o+1)*8-1}${i}`:`>= ${t}${i} and <= ${r}${i}`,new S.ERR_OUT_OF_RANGE("value",n,e)}N(i,"offset"),(void 0===n[i]||void 0===n[i+o])&&P(i,n.length-(o+1))}function N(e,t){if("number"!=typeof e)throw new S.ERR_INVALID_ARG_TYPE(t,"number",e)}function P(e,t,r){if(Math.floor(e)!==e)throw N(e,r),new S.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new S.ERR_BUFFER_OUT_OF_BOUNDS;throw new S.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}A("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),A("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),A("ERR_OUT_OF_RANGE",function(e,t,r){let n=`The value of "${e}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?i=k(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=k(i)),i+="n"),n+=` It must be ${t}. Received ${i}`},RangeError);let L=/[^+/0-9A-Za-z-_]/g;function D(e,t){let r;t=t||1/0;let n=e.length,i=null,o=[];for(let s=0;s<n;++s){if((r=e.charCodeAt(s))>55295&&r<57344){if(!i){if(r>56319||s+1===n){(t-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return o}function U(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(L,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function x(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}function j(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}let M=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();function B(e){return"undefined"==typeof BigInt?$:e}function $(){throw Error("BigInt not supported")}},6230:function(e){e.exports="object"==typeof self?self.FormData:window.FormData},645:function(e,t){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */t.read=function(e,t,r,n,i){var o,s,a=8*i-n-1,u=(1<<a)-1,l=u>>1,c=-7,h=r?i-1:0,d=r?-1:1,f=e[t+h];for(h+=d,o=f&(1<<-c)-1,f>>=-c,c+=a;c>0;o=256*o+e[t+h],h+=d,c-=8);for(s=o&(1<<-c)-1,o>>=-c,c+=n;c>0;s=256*s+e[t+h],h+=d,c-=8);if(0===o)o=1-l;else{if(o===u)return s?NaN:(f?-1:1)*(1/0);s+=Math.pow(2,n),o-=l}return(f?-1:1)*s*Math.pow(2,o-n)},t.write=function(e,t,r,n,i,o){var s,a,u,l=8*o-i-1,c=(1<<l)-1,h=c>>1,d=23===i?5960464477539062e-23:0,f=n?0:o-1,p=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(a=isNaN(t)?1:0,s=c):(s=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-s))<1&&(s--,u*=2),s+h>=1?t+=d/u:t+=d*Math.pow(2,1-h),t*u>=2&&(s++,u/=2),s+h>=c?(a=0,s=c):s+h>=1?(a=(t*u-1)*Math.pow(2,i),s+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;e[r+f]=255&a,f+=p,a/=256,i-=8);for(s=s<<i|a,l+=i;l>0;e[r+f]=255&s,f+=p,s/=256,l-=8);e[r+f-p]|=128*g}},3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},5492:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7405)}])},5677:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return a},default:function(){return u}});let n=r(4788),i=r(8754),o=(r(7294),i._(r(8976)));function s(e){return{default:(null==e?void 0:e.default)||e}}function a(e,t){return delete t.webpack,delete t.modules,e(t)}function u(e,t){let r=o.default,i={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?i.loader=()=>e:"function"==typeof e?i.loader=e:"object"==typeof e&&(i=n._({},i,e)),i=n._({},i,t);let u=i.loader,l=()=>null!=u?u().then(s):Promise.resolve(s(()=>null));return(i.loadableGenerated&&(i=n._({},i,i.loadableGenerated),delete i.loadableGenerated),"boolean"!=typeof i.ssr||i.ssr)?r(n._({},i,{loader:l})):(delete i.webpack,delete i.modules,a(r,i))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return o}});let n=r(8754),i=n._(r(7294)),o=i.default.createContext(null)},8976:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return p}});let n=r(4788),i=r(8754),o=i._(r(7294)),s=r(2254),a=[],u=[],l=!1;function c(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class h{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=n._({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function i(){if(!n){let t=new h(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!l){let e=r.webpack?r.webpack():r.modules;e&&u.push(t=>{for(let r of e)if(-1!==t.indexOf(r))return i()})}function a(e,t){!function(){i();let e=o.default.useContext(s.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let a=o.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return o.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),o.default.useMemo(()=>{var t;return a.loading||a.error?o.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:n.retry}):a.loaded?o.default.createElement((t=a.loaded)&&t.default?t.default:t,e):null},[e,a])}return a.preload=()=>i(),a.displayName="LoadableComponent",o.default.forwardRef(a)}(c,e)}function f(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return f(e,t)})}d.preloadAll=()=>new Promise((e,t)=>{f(a).then(e,t)}),d.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let r=()=>(l=!0,t());f(u,e).then(r,r)})},window.__NEXT_PRELOADREADY=d.preloadReady;let p=d},5371:function(e,t,r){"use strict";r.d(t,{L:function(){return i}});var n=r(24);let i=(0,n.cn)(null)},8239:function(e,t,r){"use strict";r.d(t,{g:function(){return l}});var n=r(5893),i=r(7294),o=r(3935);let s=e=>{let{children:t}=e,[r,n]=(0,i.useState)();return(0,i.useEffect)(()=>{let e=document.createElement("div");return document.body.appendChild(e),n(e),()=>{document.body.removeChild(e)}},[]),r?o.createPortal(t,r):null};var a=r(3739),u=r.n(a);let l=e=>e.visible?(0,n.jsx)(s,{children:(0,n.jsx)("div",{className:u().container,children:(0,n.jsx)("div",{className:u().loader})})}):null},5693:function(e,t,r){"use strict";r.d(t,{r:function(){return l}});var n=r(5893),i=r(24),o=r(7294),s=r(8239);let a=(0,i.cn)(0),u=(0,i.cn)(e=>e(a)>0),l=()=>{let[e,t]=(0,i.KO)(a),[r]=(0,i.KO)(u),l=(0,o.useCallback)(()=>t(e+1),[e,t]),c=(0,o.useCallback)(()=>t(e-1),[e,t]);return{loadingElm:(0,n.jsx)(s.g,{visible:r}),addLoading:l,removeLoading:c}}},7405:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var n,i=r(5893),o=r(5152),s=r.n(o),a=r(1163),u=r(7294),l=r(3454);let c=null!==(n=l.env.NEXT_PUBLIC_GA_ID)&&void 0!==n?n:"",h=e=>{window.gtag("config",c,{page_path:e})};r(7952);var d=r(6240),f=r(24),p=r(5371),g=r(1733),m=r(1290),y=r(328),v=r(3377),b=r(8239);let w=()=>{let e=(0,a.useRouter)(),[t,r]=(0,f.KO)(p.L),[n,o]=(0,u.useReducer)(()=>!0,!1);return(0,u.useEffect)(()=>{let e=(0,d.Aj)((0,y.l)(),async e=>{e?(await e.getIdToken().then(e=>m.x.session.$post({body:{id:e}})).catch(v.F),await m.x.me.$get().catch(v.F).then(r)):(await m.x.session.$delete(),r(null)),o()});return e},[r]),(0,u.useEffect)(()=>{if(!n)return;let r=async()=>{e.pathname===g.V.login.$url().pathname&&await e.push(g.V.$url())},i=async()=>{e.pathname===g.V.$url().pathname&&await e.push(g.V.login.$url())};t?r():i()},[e,n,t]),(0,i.jsx)(b.g,{visible:!n})};var _=r(5693),E=function(e){let{Component:t,pageProps:n}=e,o=s()(()=>r.e(206).then(r.bind(r,4206)),{loadableGenerated:{webpack:()=>[4206]},ssr:!1}),l=(0,a.useRouter)(),{loadingElm:c}=(0,_.r)();return(0,u.useEffect)(()=>{let e=(e,t)=>{let{shallow:r}=t;r||h(e)};return l.events.on("routeChangeComplete",e),()=>{l.events.off("routeChangeComplete",e)}},[l.events]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o,{children:[(0,i.jsx)(t,{...n}),c]}),(0,i.jsx)(w,{})]})}},1733:function(e,t,r){"use strict";r.d(t,{D:function(){return i},V:function(){return n}});let n={chat:{$url:e=>({pathname:"/chat",hash:null==e?void 0:e.hash})},login:{$url:e=>({pathname:"/login",hash:null==e?void 0:e.hash})},title:{$url:e=>({pathname:"/title",hash:null==e?void 0:e.hash})},$url:e=>({pathname:"/",hash:null==e?void 0:e.hash})},i={favicon_png:"/Rebash/favicon.png",frourio_svg:"/Rebash/frourio.svg",images:{odaiba_jpg:"/Rebash/images/odaiba.jpg"}}},1290:function(e,t,r){"use strict";r.d(t,{x:function(){return u}});var n=r(3928),i=r(8416),o=r.n(i),s=r(9669),a=r.n(s);let u=(e=>{let{baseURL:t,fetch:r}=e,i=(void 0===t?"":t).replace(/\/$/,""),o="/birth",s="/create",a="/createcomment",u="/deleteMessage",l="/edit",c="/friend",h="/health",d="/infomessage",f="/message",p="/message_get",g="/message_get2",m="/okfriend",y="/room",v="/roomcreate",b="/roomlist",w="/roomuser",_="/serchroom",E="/session",I="/tasks",T="/user",O="/usercheck",R="/userroomcreate",S="POST",A="DELETE",k="PATCH";return{birth:{post:e=>r(i,o,S,e).json(),$post:e=>r(i,o,S,e).json().then(e=>e.body),$path:()=>"".concat(i).concat(o)},create:{post:e=>r(i,s,S,e).json(),$post:e=>r(i,s,S,e).json().then(e=>e.body),$path:()=>"".concat(i).concat(s)},createcomment:{post:e=>r(i,a,S,e).json(),$post:e=>r(i,a,S,e).json().then(e=>e.body),$path:()=>"".concat(i).concat(a)},deleteMessage:{post:e=>r(i,u,S,e).json(),$post:e=>r(i,u,S,e).json().then(e=>e.body),$path:()=>"".concat(i).concat(u)},edit:{post:e=>r(i,l,S,e).json(),$post:e=>r(i,l,S,e).json().then(e=>e.body),$path:()=>"".concat(i).concat(l)},friend:{post:e=>r(i,c,S,e).json(),$post:e=>r(i,c,S,e).json().then(e=>e.body),$path:()=>"".concat(i).concat(c)},health:{get:e=>r(i,h,"GET",e).text(),$get:e=>r(i,h,"GET",e).text().then(e=>e.body),$path:()=>"".concat(i).concat(h)},infomessage:{post:e=>r(i,d,S,e).json(),$post:e=>r(i,d,S,e).json().then(e=>e.body),$path:()=>"".concat(i).concat(d)},me:{get:e=>r(i,"/me","GET",e).json(),$get:e=>r(i,"/me","GET",e).json().then(e=>e.body),$path:()=>"".concat(i).concat("/me")},message:{post:e=>r(i,f,S,e).json(),$post:e=>r(i,f,S,e).json().then(e=>e.body),$path:()=>"".concat(i).concat(f)},message_get:{post:e=>r(i,p,S,e).json(),$post:e=>r(i,p,S,e).json().then(e=>e.body),$path:()=>"".concat(i).concat(p)},message_get2:{post:e=>r(i,g,S,e).json(),$post:e=>r(i,g,S,e).json().then(e=>e.body),$path:()=>"".concat(i).concat(g)},okfriend:{post:e=>r(i,m,S,e).json(),$post:e=>r(i,m,S,e).json().then(e=>e.body),$path:()=>"".concat(i).concat(m)},room:{post:e=>r(i,y,S,e).json(),$post:e=>r(i,y,S,e).json().then(e=>e.body),$path:()=>"".concat(i).concat(y)},roomcreate:{post:e=>r(i,v,S,e).json(),$post:e=>r(i,v,S,e).json().then(e=>e.body),$path:()=>"".concat(i).concat(v)},roomlist:{post:e=>r(i,b,S,e).json(),$post:e=>r(i,b,S,e).json().then(e=>e.body),$path:()=>"".concat(i).concat(b)},roomuser:{post:e=>r(i,w,S,e).json(),$post:e=>r(i,w,S,e).json().then(e=>e.body),$path:()=>"".concat(i).concat(w)},serchroom:{get:e=>r(i,_,"GET",e).text(),$get:e=>r(i,_,"GET",e).text().then(e=>e.body),post:e=>r(i,_,S,e).json(),$post:e=>r(i,_,S,e).json().then(e=>e.body),$path:()=>"".concat(i).concat(_)},session:{post:e=>r(i,E,S,e).json(),$post:e=>r(i,E,S,e).json().then(e=>e.body),delete:e=>r(i,E,A,e).json(),$delete:e=>r(i,E,A,e).json().then(e=>e.body),$path:()=>"".concat(i).concat(E)},tasks:{_taskId:e=>{let t="".concat(I,"/").concat(e);return{patch:e=>r(i,t,k,e).send(),$patch:e=>r(i,t,k,e).send().then(e=>e.body),delete:e=>r(i,t,A,e).send(),$delete:e=>r(i,t,A,e).send().then(e=>e.body),$path:()=>"".concat(i).concat(t)}},get:e=>r(i,I,"GET",e).json(),$get:e=>r(i,I,"GET",e).json().then(e=>e.body),post:e=>r(i,I,S,e).json(),$post:e=>r(i,I,S,e).json().then(e=>e.body),$path:e=>"".concat(i).concat(I).concat(e&&e.query?"?".concat((0,n.dataToURLString)(e.query)):"")},user:{get:e=>r(i,T,"GET",e).text(),$get:e=>r(i,T,"GET",e).text().then(e=>e.body),post:e=>r(i,T,S,e).json(),$post:e=>r(i,T,S,e).json().then(e=>e.body),$path:()=>"".concat(i).concat(T)},usercheck:{post:e=>r(i,O,S,e).json(),$post:e=>r(i,O,S,e).json().then(e=>e.body),$path:()=>"".concat(i).concat(O)},userroomcreate:{get:e=>r(i,R,"GET",e).text(),$get:e=>r(i,R,"GET",e).text().then(e=>e.body),post:e=>r(i,R,S,e).json(),$post:e=>r(i,R,S,e).json().then(e=>e.body),$path:()=>"".concat(i).concat(R)},post:e=>r(i,"",S,e).json(),$post:e=>r(i,"",S,e).json().then(e=>e.body),$path:()=>"".concat(i)}})(o()(a().create({withCredentials:!0})))},328:function(e,t,r){"use strict";let n;r.d(t,{l:function(){return a}});var i=r(5816);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,i.KN)("firebase","9.15.0","app");var o=r(6240),s=r(3454);let a=()=>{if(void 0!==n)return n;if(void 0!==s.env.NEXT_PUBLIC_AUTH_EMULATOR_URL){let e=(0,o.v0)((0,i.ZF)({apiKey:"fake-api-key",authDomain:location.hostname}));return(0,o.S$)(e,s.env.NEXT_PUBLIC_AUTH_EMULATOR_URL,{disableWarnings:!0}),n=e,e}{var e;let t=JSON.parse(null!==(e=s.env.NEXT_PUBLIC_FIREBASE_CONFIG)&&void 0!==e?e:"{}"),r=(0,o.v0)((0,i.ZF)(t));return n=r,r}}},3377:function(e,t,r){"use strict";r.d(t,{F:function(){return n}});let n=()=>null},7952:function(){},3739:function(e){e.exports={container:"Loading_container__9E6cJ",loader:"Loading_loader__XRYOm",load:"Loading_load__x7rX5"}},7663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u=[],l=!1,c=-1;function h(){l&&n&&(l=!1,n.length?u=n.concat(u):c=-1,u.length&&d())}function d(){if(!l){var e=a(h);l=!0;for(var t=u.length;t;){for(n=u,u=[];++c<t;)n&&n[c].run();c=-1,t=u.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new f(e,t)),1!==u.length||l||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},s=!0;try{t[e](o,o.exports,n),s=!1}finally{s&&delete r[e]}return o.exports}n.ab="//";var i=n(229);e.exports=i}()},5152:function(e,t,r){e.exports=r(5677)},1163:function(e,t,r){e.exports=r(6885)},3928:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)s.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return s},o=this&&this.__spreadArray||function(e,t,r){if(r||2==arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.optionToRequest=t.dataToURLString=t.headersToObject=void 0;var a=s(r(3921));t.headersToObject=function(e){return o([],i(e.entries()),!1).reduce(function(e,t){var r,o=i(t,2),s=o[0],a=o[1];return n(n({},e),((r={})[s]=a,r))},{})};var u=function(e,t){var r=function(r){Array.isArray(e[r])?e[r].forEach(function(e){return t.append(r,e)}):null!=e[r]&&t.append(r,e[r])};for(var n in e)r(n);return t},l=function(e){return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return({"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"})[e]})};t.dataToURLString=function(e){return Object.keys(e).filter(function(t){return null!=e[t]}).map(function(t){return Array.isArray(e[t])?e[t].map(function(e){return"".concat(l(t),"=").concat(l(e))}).join("&"):"".concat(l(t),"=").concat(l(e[t]))}).join("&")};var c="undefined"!=typeof FormData;t.optionToRequest=function(e,r){if((null==e?void 0:e.body)===void 0)return e;var i,o={};switch(r){case"FormData":if(c)i=u(e.body,new FormData);else{var s=new a.default;i=u(e.body,s),o=s.getHeaders()}break;case"URLSearchParams":i=(0,t.dataToURLString)(e.body),o["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";break;case"ArrayBuffer":case"string":case"Blob":case"any":i=e.body;break;default:i=JSON.stringify(e.body),o["Content-Type"]="application/json;charset=utf-8"}return n(n({httpBody:i},e),{headers:n(n({},o),e.headers)})}},3921:function(e){e.exports="object"==typeof self?self.FormData:window.FormData},5816:function(e,t,r){"use strict";let n,i;r.d(t,{Jn:function(){return D},qX:function(){return N},Xd:function(){return C},Mq:function(){return x},ZF:function(){return U},KN:function(){return j}});var o,s=r(740),a=r(3333),u=r(4444);let l=(e,t)=>t.some(t=>e instanceof t),c=new WeakMap,h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return m(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function m(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(m(e.result)),n()},o=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(t=>{t instanceof IDBCursor&&c.set(t,e)}).catch(()=>{}),p.set(t,e),t}(e);if(f.has(e))return f.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(y(this),e),m(c.get(this))}:function(...e){return m(t.apply(y(this),e))}:function(e,...r){let n=t.call(y(this),e,...r);return d.set(n,e.sort?e.sort():[e]),m(n)}:(t instanceof IDBTransaction&&function(e){if(h.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),n()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});h.set(e,t)}(t),l(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,g):t;return r!==e&&(f.set(e,r),p.set(r,e)),r}let y=e=>p.get(e),v=["get","getKey","getAll","getAllKeys","count"],b=["put","add","delete","clear"],w=new Map;function _(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(w.get(t))return w.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=b.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||v.includes(r)))return;let o=async function(e,...t){let o=this.transaction(e,i?"readwrite":"readonly"),s=o.store;return n&&(s=s.index(t.shift())),(await Promise.all([s[r](...t),i&&o.done]))[0]};return w.set(t,o),o}g={...o=g,get:(e,t,r)=>_(e,t)||o.get(e,t,r),has:(e,t)=>!!_(e,t)||o.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let I="@firebase/app",T="0.9.0",O=new a.Yd("@firebase/app"),R="[DEFAULT]",S={[I]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},A=new Map,k=new Map;function C(e){let t=e.name;if(k.has(t))return O.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(k.set(t,e),A.values()))!function(e,t){try{e.container.addComponent(t)}catch(r){O.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}(r,e);return!0}function N(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}let P=new u.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new s.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw P.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let D="9.15.0";function U(e,t={}){let r=e;if("object"!=typeof t){let e=t;t={name:e}}let n=Object.assign({name:R,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw P.create("bad-app-name",{appName:String(i)});if(r||(r=(0,u.aH)()),!r)throw P.create("no-options");let o=A.get(i);if(o){if((0,u.vZ)(r,o.options)&&(0,u.vZ)(n,o.config))return o;throw P.create("duplicate-app",{appName:i})}let a=new s.H0(i);for(let e of k.values())a.addComponent(e);let l=new L(r,n,a);return A.set(i,l),l}function x(e=R){let t=A.get(e);if(!t&&e===R)return U();if(!t)throw P.create("no-app",{appName:e});return t}function j(e,t,r){var n;let i=null!==(n=S[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){let e=[`Unable to register library "${i}" with version "${t}":`];o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),O.warn(e.join(" "));return}C(new s.wA(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let M="firebase-heartbeat-store",B=null;function $(){return B||(B=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:o}={}){let s=indexedDB.open(e,1),a=m(s);return n&&s.addEventListener("upgradeneeded",e=>{n(m(s.result),e.oldVersion,e.newVersion,m(s.transaction))}),r&&s.addEventListener("blocked",()=>r()),a.then(e=>{o&&e.addEventListener("close",()=>o()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(M)}}).catch(e=>{throw P.create("idb-open",{originalErrorMessage:e.message})})),B}async function F(e){try{let t=await $();return t.transaction(M).objectStore(M).get(V(e))}catch(e){if(e instanceof u.ZR)O.warn(e.message);else{let t=P.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});O.warn(t.message)}}}async function z(e,t){try{let r=await $(),n=r.transaction(M,"readwrite"),i=n.objectStore(M);return await i.put(t,V(e)),n.done}catch(e){if(e instanceof u.ZR)O.warn(e.message);else{let t=P.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});O.warn(t.message)}}}function V(e){return`${e.name}!${e.options.appId}`}class H{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new q(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),r=W();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),r=Date.now();return r-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=W(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),G(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),G(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=(0,u.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function W(){let e=new Date;return e.toISOString().substring(0,10)}class q{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,u.hl)()&&(0,u.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await F(this.app);return e||{heartbeats:[]}}}async overwrite(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return z(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return z(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function G(e){return(0,u.L)(JSON.stringify({version:2,heartbeats:e})).length}C(new s.wA("platform-logger",e=>new E(e),"PRIVATE")),C(new s.wA("heartbeat",e=>new H(e),"PRIVATE")),j(I,T,""),j(I,T,"esm2017"),j("fire-js","")},740:function(e,t,r){"use strict";r.d(t,{H0:function(){return a},wA:function(){return i}});var n=r(4444);class i{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new n.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);r===i&&t.resolve(n)}return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let o=this.instances.get(n);return o&&e(o,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===o?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,r){"use strict";var n,i;r.d(t,{Yd:function(){return c},in:function(){return n}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o=[];(i=n||(n={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let s={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},a=n.INFO,u={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},l=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=u[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class c{constructor(e){this.name=e,this._logLevel=a,this._logHandler=l,this._userLogHandler=null,o.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...e),this._logHandler(this,n.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...e),this._logHandler(this,n.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.INFO,...e),this._logHandler(this,n.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.WARN,...e),this._logHandler(this,n.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...e),this._logHandler(this,n.ERROR,...e)}}},6240:function(e,t,r){"use strict";r.d(t,{GH:function(){return ej},S$:function(){return ep},v0:function(){return tG},Aj:function(){return eq},rh:function(){return tf}});var n,i=r(4444),o=r(5816),s=r(3333);function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}var u=r(740);function l(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let c=new i.LL("auth","Firebase",l()),h=new s.Yd("@firebase/auth");function d(e,...t){h.logLevel<=s.in.ERROR&&h.error(`Auth (${o.Jn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw m(e,...t)}function p(e,...t){return m(e,...t)}function g(e,t,r){let n=Object.assign(Object.assign({},l()),{[t]:r}),o=new i.LL("auth","Firebase",n);return o.create(t,{appName:e.name})}function m(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return c.create(e,...t)}function y(e,t,...r){if(!e)throw m(t,...r)}function v(e){let t="INTERNAL ASSERTION FAILED: "+e;throw d(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b=new Map;function w(e){e instanceof Function||v("Expected a class definition");let t=b.get(e);return t?(t instanceof e||v("Instance stored in cache mismatched with class"),t):(t=new e,b.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||v("Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===E()||"https:"===E()||(0,i.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e,t){e.emulator||v("Emulator should always be set here");let{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let R={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},S=new I(3e4,6e4);function A(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function k(e,t,r,n,o={}){return C(e,o,async()=>{let o={},s={};n&&("GET"===t?s=n:o={body:JSON.stringify(n)});let a=(0,i.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode),O.fetch()(P(e,e.config.apiHost,r,a),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},o))})}async function C(e,t,r){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},R),t);try{let t=new L(e),i=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();let o=await i.json();if("needConfirmation"in o)throw D(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{let t=i.ok?o.errorMessage:o.error.message,[r,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw D(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===r)throw D(e,"email-already-in-use",o);if("USER_DISABLED"===r)throw D(e,"user-disabled",o);let a=n[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw g(e,a,s);f(e,a)}}catch(t){if(t instanceof i.ZR)throw t;f(e,"network-request-failed")}}async function N(e,t,r,n,i={}){let o=await k(e,t,r,n,i);return"mfaPendingCredential"in o&&f(e,"multi-factor-auth-required",{_serverResponse:o}),o}function P(e,t,r,n){let i=`${t}${r}?${n}`;return e.config.emulator?T(e.config,i):`${e.config.apiScheme}://${i}`}class L{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),S.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function D(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=p(e,t,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,t){return k(e,"POST","/v1/accounts:delete",t)}async function x(e,t){return k(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function M(e,t=!1){let r=(0,i.m9)(e),n=await r.getIdToken(t),o=$(n);y(o&&o.exp&&o.auth_time&&o.iat,r.auth,"internal-error");let s="object"==typeof o.firebase?o.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:o,token:n,authTime:j(B(o.auth_time)),issuedAtTime:j(B(o.iat)),expirationTime:j(B(o.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}function B(e){return 1e3*Number(e)}function $(e){let[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return d("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,i.tV)(r);if(!e)return d("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return d("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof i.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;let e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,r=e-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=j(this.lastLoginAt),this.creationTime=j(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e){var t;let r=e.auth,n=await e.getIdToken(),i=await F(e,x(r,{idToken:n}));y(null==i?void 0:i.users.length,r,"internal-error");let o=i.users[0];e._notifyReloadListener(o);let s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map(e=>{var{providerId:t}=e,r=a(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}):[],u=function(e,t){let r=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...r,...t]}(e.providerData,s),l=e.isAnonymous,c=!(e.email&&o.passwordHash)&&!(null==u?void 0:u.length),h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new V(o.createdAt,o.lastLoginAt),isAnonymous:!!l&&c};Object.assign(e,h)}async function W(e){let t=(0,i.m9)(e);await H(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t){let r=await C(e,{},async()=>{let r=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:o}=e.config,s=P(e,n,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",O.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(void 0!==e.idToken,"internal-error"),y(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=$(e);return y(t,"internal-error"),y(void 0!==t.exp,"internal-error"),y(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await q(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,o=new G;return r&&(y("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),n&&(y("string"==typeof n,"internal-error",{appName:e}),o.accessToken=n),i&&(y("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new G,this.toJSON())}_performRefresh(){return v("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e,t){y("string"==typeof e||void 0===e,"internal-error",{appName:t})}class K{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new V(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await F(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return M(this,e)}reload(){return W(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new K(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await H(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await F(this,U(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,o,s,a,u,l;let c=null!==(r=t.displayName)&&void 0!==r?r:void 0,h=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(u=t.createdAt)&&void 0!==u?u:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:b,emailVerified:w,isAnonymous:_,providerData:E,stsTokenManager:I}=t;y(b&&I,e,"internal-error");let T=G.fromJSON(this.name,I);y("string"==typeof b,e,"internal-error"),J(c,e.name),J(h,e.name),y("boolean"==typeof w,e,"internal-error"),y("boolean"==typeof _,e,"internal-error"),J(d,e.name),J(f,e.name),J(p,e.name),J(g,e.name),J(m,e.name),J(v,e.name);let O=new K({uid:b,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:v});return E&&Array.isArray(E)&&(O.providerData=E.map(e=>Object.assign({},e))),g&&(O._redirectEventId=g),O}static async _fromIdTokenResponse(e,t,r=!1){let n=new G;n.updateFromServerResponse(t);let i=new K({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await H(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e,t,r){return`firebase:${e}:${t}:${r}`}X.type="NONE";class Z{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=Y(this.userKey,n.apiKey,i),this.fullPersistenceKey=Y("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?K._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Z(w(X),e,r);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||w(X),o=Y(r,e.config.apiKey,e.name),s=null;for(let r of t)try{let t=await r._get(o);if(t){let n=K._fromJSON(e,t);r!==i&&(s=n),i=r;break}}catch(e){}let a=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length&&(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(e){}}))),new Z(i,e,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(en(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(ee(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(eo(t))return"Blackberry";if(es(t))return"Webos";if(et(t))return"Safari";if((t.includes("chrome/")||er(t))&&!t.includes("edge/"))return"Chrome";if(ei(t))return"Android";let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==r?void 0:r.length)===2)return r[1]}return"Other"}function ee(e=(0,i.z$)()){return/firefox\//i.test(e)}function et(e=(0,i.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function er(e=(0,i.z$)()){return/crios\//i.test(e)}function en(e=(0,i.z$)()){return/iemobile/i.test(e)}function ei(e=(0,i.z$)()){return/android/i.test(e)}function eo(e=(0,i.z$)()){return/blackberry/i.test(e)}function es(e=(0,i.z$)()){return/webos/i.test(e)}function ea(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function eu(e=(0,i.z$)()){return ea(e)||ei(e)||es(e)||eo(e)||/windows phone/i.test(e)||en(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(e,t=[]){let r;switch(e){case"Browser":r=Q((0,i.z$)());break;case"Worker":r=`${Q((0,i.z$)())}-${e}`;break;default:r=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${o.Jn}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=t=>new Promise((r,n)=>{try{let n=e(t);r(n)}catch(e){n(e)}});r.onAbort=t,this.queue.push(r);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ef(this),this.idTokenSubscription=new ef(this),this.beforeStateQueue=new ec(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue(async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await Z.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let r=await this.assertedPersistence.getCurrentUser(),n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);(!r||r===o)&&(null==s?void 0:s.user)&&(n=s.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await H(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?(0,i.m9)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&w(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await Z.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return(y(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"==typeof t)?e.addObserver(t,r,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=el(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function ed(e){return(0,i.m9)(e)}class ef{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)(e=>this.observer=e)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ep(e,t,r){let n=ed(e);y(n._canInitEmulator,n,"emulator-config-failed"),y(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let i=!!(null==r?void 0:r.disableWarnings),o=eg(t),{host:s,port:a}=function(e){let t=eg(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};let n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){let e=i[1];return{host:e,port:em(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:em(t)}}}(t),u=null===a?"":`:${a}`;n.config.emulator={url:`${o}//${s}${u}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}function eg(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function em(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return v("not implemented")}_getIdTokenResponse(e){return v("not implemented")}_linkToIdToken(e,t){return v("not implemented")}_getReauthenticationResolver(e){return v("not implemented")}}async function ev(e,t){return k(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(e,t){return N(e,"POST","/v1/accounts:signInWithPassword",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ew(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}async function e_(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE extends ey{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new eE(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new eE(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return eb(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ew(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ev(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return e_(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eI(e,t){return N(e,"POST","/v1/accounts:signInWithIdp",A(e,t))}class eT extends ey{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new eT(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=a(t,["providerId","signInMethod"]);if(!r||!n)return null;let o=new eT(r,n);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){let t=this.buildRequest();return eI(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,eI(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,eI(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.xO)(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eO(e,t){return k(e,"POST","/v1/accounts:sendVerificationCode",A(e,t))}async function eR(e,t){return N(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t))}async function eS(e,t){let r=await N(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t));if(r.temporaryProof)throw D(e,"account-exists-with-different-credential",r);return r}let eA={USER_NOT_FOUND:"user-not-found"};async function ek(e,t){let r=Object.assign(Object.assign({},t),{operation:"REAUTH"});return N(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,r),eA)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC extends ey{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new eC({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new eC({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return eR(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return eS(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ek(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new eC({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}}class eN{constructor(e){var t,r,n,o,s,a;let u=(0,i.zd)((0,i.pd)(e)),l=null!==(t=u.apiKey)&&void 0!==t?t:null,c=null!==(r=u.oobCode)&&void 0!==r?r:null,h=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=u.mode)&&void 0!==n?n:null);y(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=null!==(o=u.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=u.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=u.tenantId)&&void 0!==a?a:null}static parseLink(e){let t=function(e){let t=(0,i.zd)((0,i.pd)(e)).link,r=t?(0,i.zd)((0,i.pd)(t)).deep_link_id:null,n=(0,i.zd)((0,i.pd)(e)).deep_link_id,o=n?(0,i.zd)((0,i.pd)(n)).link:null;return o||n||r||t||e}(e);try{return new eN(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(){this.providerId=eP.PROVIDER_ID}static credential(e,t){return eE._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=eN.parseLink(t);return y(r,"argument-error"),eE._fromEmailAndCode(e,r.code,r.tenantId)}}eP.PROVIDER_ID="password",eP.EMAIL_PASSWORD_SIGN_IN_METHOD="password",eP.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD extends eL{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU extends eD{constructor(){super("facebook.com")}static credential(e){return eT._fromParams({providerId:eU.PROVIDER_ID,signInMethod:eU.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eU.credentialFromTaggedObject(e)}static credentialFromError(e){return eU.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eU.credential(e.oauthAccessToken)}catch(e){return null}}}eU.FACEBOOK_SIGN_IN_METHOD="facebook.com",eU.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex extends eD{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return eT._fromParams({providerId:ex.PROVIDER_ID,signInMethod:ex.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ex.credentialFromTaggedObject(e)}static credentialFromError(e){return ex.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ex.credential(t,r)}catch(e){return null}}}ex.GOOGLE_SIGN_IN_METHOD="google.com",ex.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej extends eD{constructor(){super("github.com")}static credential(e){return eT._fromParams({providerId:ej.PROVIDER_ID,signInMethod:ej.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ej.credentialFromTaggedObject(e)}static credentialFromError(e){return ej.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ej.credential(e.oauthAccessToken)}catch(e){return null}}}ej.GITHUB_SIGN_IN_METHOD="github.com",ej.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM extends eD{constructor(){super("twitter.com")}static credential(e,t){return eT._fromParams({providerId:eM.PROVIDER_ID,signInMethod:eM.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return eM.credentialFromTaggedObject(e)}static credentialFromError(e){return eM.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return eM.credential(t,r)}catch(e){return null}}}eM.TWITTER_SIGN_IN_METHOD="twitter.com",eM.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eB{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){let i=await K._fromIdTokenResponse(e,r,n),o=e$(r),s=new eB({user:i,providerId:o,_tokenResponse:r,operationType:t});return s}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let n=e$(r);return new eB({user:e,providerId:n,_tokenResponse:r,operationType:t})}}function e$(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF extends i.ZR{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,eF.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new eF(e,t,r,n)}}function ez(e,t,r,n){let i="reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e);return i.catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw eF._fromErrorAndOperation(e,r,t,n);throw r})}async function eV(e,t,r=!1){let n=await F(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return eB._forOperation(e,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eH(e,t,r=!1){let{auth:n}=e,i="reauthenticate";try{let o=await F(e,ez(n,i,t,e),r);y(o.idToken,n,"internal-error");let s=$(o.idToken);y(s,n,"internal-error");let{sub:a}=s;return y(e.uid===a,n,"user-mismatch"),eB._forOperation(e,i,o)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&f(n,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eW(e,t,r=!1){let n="signIn",i=await ez(e,n,t),o=await eB._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(o.user),o}function eq(e,t,r,n){return(0,i.m9)(e).onAuthStateChanged(t,r,n)}new WeakMap;let eG="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eJ{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(eG,"1"),this.storage.removeItem(eG),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class eK extends eJ{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=(0,i.z$)();return et(e)||ea(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=eu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});return}let r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let n=this.storage.getItem(r);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}let n=()=>{let e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},o=this.storage.getItem(r);(0,i.w1)()&&10===document.documentMode&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}eK.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eX extends eJ{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}eX.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eY{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let r=new eY(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:r,data:n}=e.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:r});let o=Array.from(i).map(async t=>t(e.origin,n)),s=await Promise.all(o.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eZ(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}eY.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eQ{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let n,i;let o="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!o)throw Error("connection_unavailable");return new Promise((s,a)=>{let u=eZ("",20);o.port1.start();let l=setTimeout(()=>{a(Error("unsupported_event"))},r);i={messageChannel:o,onMessage(e){if(e.data.eventId===u)switch(e.data.status){case"ack":clearTimeout(l),n=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(n),s(e.data.response);break;default:clearTimeout(l),clearTimeout(n),a(Error("invalid_response"))}}},this.handlers.add(i),o.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[o.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(){return void 0!==e0().WorkerGlobalScope&&"function"==typeof e0().importScripts}async function e2(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e6="firebaseLocalStorageDb",e4="firebaseLocalStorage",e8="fbase_key";class e5{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function e3(e,t){return e.transaction([e4],t?"readwrite":"readonly").objectStore(e4)}function e7(){let e=indexedDB.open(e6,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(e4,{keyPath:e8})}catch(e){r(e)}}),e.addEventListener("success",async()=>{let r=e.result;r.objectStoreNames.contains(e4)?t(r):(r.close(),await function(){let e=indexedDB.deleteDatabase(e6);return new e5(e).toPromise()}(),t(await e7()))})})}async function e9(e,t,r){let n=e3(e,!0).put({[e8]:t,value:r});return new e5(n).toPromise()}async function te(e,t){let r=e3(e,!1).get(t),n=await new e5(r).toPromise();return void 0===n?null:n.value}function tt(e,t){let r=e3(e,!0).delete(t);return new e5(r).toPromise()}class tr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await e7()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return e1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=eY._getInstance(e1()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let r=await this._poll();return{keyProcessed:r.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await e2(),!this.activeServiceWorker)return;this.sender=new eQ(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await e7();return await e9(e,eG,"1"),await tt(e,eG),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>e9(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>te(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=e3(e,!1).getAll();return new e5(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],r=new Set;for(let{fbase_key:n,value:i}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!r.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}function tn(e){return`__${e}${Math.floor(1e6*Math.random())}`}async function ti(e,t,r){var n,i,o;let s=await r.verify();try{let a;if(y("string"==typeof s,e,"argument-error"),y("recaptcha"===r.type,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let t=a.session;if("phoneNumber"in a){y("enroll"===t.type,e,"internal-error");let r=await (i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:s}},k(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,i)));return r.phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");let r=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;y(r,e,"missing-multi-factor-info");let i=await (o={mfaPendingCredential:t.credential,mfaEnrollmentId:r,phoneSignInInfo:{recaptchaToken:s}},k(e,"POST","/v2/accounts/mfaSignIn:start",A(e,o)));return i.phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await eO(e,{phoneNumber:a.phoneNumber,recaptchaToken:s});return t}}finally{r._reset()}}tr.type="LOCAL",tn("rcb"),new I(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.providerId=to.PROVIDER_ID,this.auth=ed(e)}verifyPhoneNumber(e,t){return ti(this.auth,e,(0,i.m9)(t))}static credential(e,t){return eC._fromVerification(e,t)}static credentialFromResult(e){return to.credentialFromTaggedObject(e)}static credentialFromError(e){return to.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?eC._fromTokenResponse(t,r):null}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(e,t){return t?w(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}to.PROVIDER_ID="phone",to.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta extends ey{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eI(e,this._buildIdpRequest())}_linkToIdToken(e,t){return eI(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return eI(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tu(e){return eW(e.auth,new ta(e),e.bypassAuthState)}function tl(e){let{auth:t,user:r}=e;return y(r,t,"internal-error"),eH(r,new ta(e),e.bypassAuthState)}async function tc(e){let{auth:t,user:r}=e;return y(r,t,"internal-error"),eV(r,new ta(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:o,type:s}=e;if(o){this.reject(o);return}let a={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tu;case"linkViaPopup":case"linkViaRedirect":return tc;case"reauthViaPopup":case"reauthViaRedirect":return tl;default:f(this.auth,"internal-error")}}resolve(e){this.pendingPromise||v("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||v("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let td=new I(2e3,1e4);async function tf(e,t,r){let n=ed(e);!function(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&f(e,"argument-error"),g(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,eL);let i=ts(n,r),o=new tp(n,"signInViaPopup",t,i);return o.executeNotNull()}class tp extends th{constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,tp.currentPopupAction&&tp.currentPopupAction.cancel(),tp.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||v("Popup operations only handle one event");let e=eZ();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tp.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,td.get())};e()}}tp.currentPopupAction=null;let tg=new Map;class tm extends th{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=tg.get(this.auth._key());if(!e){try{let t=await ty(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}tg.set(this.auth._key(),e)}return this.bypassAuthState||tg.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ty(e,t){let r=Y("pendingRedirect",t.config.apiKey,t.name),n=w(e._redirectPersistence);if(!await n._isAvailable())return!1;let i=await n._get(r)==="true";return await n._remove(r),i}function tv(e,t){tg.set(e._key(),t)}async function tb(e,t,r=!1){let n=ed(e),i=ts(n,t),o=new tm(n,i,r),s=await o.execute();return s&&!r&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,t)),s}class tw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tE(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!tE(e)){let n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(p(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(t_(e))}saveEventToCache(e){this.cachedEventUids.add(t_(e)),this.lastProcessedEventTime=Date.now()}}function t_(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function tE({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tI(e,t={}){return k(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tO=/^https?/;async function tR(e){if(e.config.emulator)return;let{authorizedDomains:t}=await tI(e);for(let e of t)try{if(function(e){let t=_(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===n}if(!tO.test(r))return!1;if(tT.test(e))return n===e;let i=e.replace(/\./g,"\\."),o=RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(n)}(e))return}catch(e){}f(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tS=new I(3e4,6e4);function tA(){let e=e0().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let tk=null,tC=new I(5e3,15e3),tN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function tL(e){let t=await (tk=tk||new Promise((t,r)=>{var n,i,o,s;function a(){tA(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tA(),r(p(e,"network-request-failed"))},timeout:tS.get()})}if(null===(i=null===(n=e0().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(o=e0().gapi)||void 0===o?void 0:o.load)a();else{let t=tn("iframefcb");return e0()[t]=()=>{gapi.load?a():r(p(e,"network-request-failed"))},(s=`https://apis.google.com/js/api.js?onload=${t}`,new Promise((e,t)=>{var r,n;let i=document.createElement("script");i.setAttribute("src",s),i.onload=e,i.onerror=e=>{let r=p("internal-error");r.customData=e,t(r)},i.type="text/javascript",i.charset="UTF-8",(null!==(n=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==n?n:document).appendChild(i)})).catch(e=>r(e))}}).catch(e=>{throw tk=null,e})),r=e0().gapi;return y(r,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;y(t.authDomain,e,"auth-domain-config-required");let r=t.emulator?T(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:o.Jn},s=tP.get(e.config.apiHost);s&&(n.eid=s);let a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),`${r}?${(0,i.xO)(n).slice(1)}`}(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tN,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({setHideOnLeave:!1});let i=p(e,"network-request-failed"),o=e0().setTimeout(()=>{n(i)},tC.get());function s(){e0().clearTimeout(o),r(t)}t.ping(s).then(s,()=>{n(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class tU{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function tx(e,t,r,n,s,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");let u={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:o.Jn,eventId:s};if(t instanceof eL)for(let[r,n]of(t.setDefaultLanguage(e.languageCode),u.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(a||{})))u[r]=n;if(t instanceof eD){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(u.scopes=e.join(","))}e.tenantId&&(u.tid=e.tenantId);let l=u;for(let e of Object.keys(l))void 0===l[e]&&delete l[e];return`${function({config:e}){return e.emulator?T(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,i.xO)(l).slice(1)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tj="webStorageSupport",tM=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eX,this._completeRedirectFn=tb,this._overrideRedirectResult=tv}async _openPopup(e,t,r,n){var o;(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager)||v("_initialize() not called before _openPopup()");let s=tx(e,t,r,_(),n);return function(e,t,r,n=500,o=600){let s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString(),u="",l=Object.assign(Object.assign({},tD),{width:n.toString(),height:o.toString(),top:s,left:a}),c=(0,i.z$)().toLowerCase();r&&(u=er(c)?"_blank":r),ee(c)&&(t=t||"http://localhost",l.scrollbars="yes");let h=Object.entries(l).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=(0,i.z$)()){var t;return ea(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==u)return function(e,t){let r=document.createElement("a");r.href=e,r.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}(t||"",u),new tU(null);let d=window.open(t||"",u,h);y(d,e,"popup-blocked");try{d.focus()}catch(e){}return new tU(d)}(e,s,eZ())}async _openRedirect(e,t,r,n){var i;return await this._originValidation(e),i=tx(e,t,r,_(),n),e0().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(r||v("If manager is not set, promise should be"),r)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await tL(e),r=new tw(e);return t.register("authEvent",t=>{y(null==t?void 0:t.authEvent,e,"invalid-auth-event");let n=r.onEvent(t.authEvent);return{status:n?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){let r=this.iframes[e._key()];r.send(tj,{type:tj},r=>{var n;let i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n[tj];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return eu()||et()||ea()}};class tB{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return v("unexpected MultiFactorSessionType")}}}class t$ extends tB{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new t$(e)}_finalizeEnroll(e,t,r){return k(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return k(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}var tF="@firebase/auth",tz="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let tH=(0,i.Pz)("authIdTokenMaxAge")||300,tW=null,tq=e=>async t=>{let r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>tH)return;let i=null==r?void 0:r.token;tW!==i&&(tW=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tG(e=(0,o.Mq)()){let t=(0,o.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let r=(0,o.qX)(e,"auth");if(r.isInitialized()){let e=r.getImmediate(),n=r.getOptions();if((0,i.vZ)(n,null!=t?t:{}))return e;f(e,"already-initialized")}let n=r.initialize({options:t});return n}(e,{popupRedirectResolver:tM,persistence:[tr,eK,eX]}),n=(0,i.Pz)("authTokenSyncURL");if(n){var s,a;let e=tq(n);s=()=>e(r.currentUser),(0,i.m9)(r).beforeAuthStateChanged(e,s),a=t=>e(t),(0,i.m9)(r).onIdTokenChanged(a,void 0,void 0)}let u=(0,i.q4)("auth");return u&&ep(r,`http://${u}`),r}n="Browser",(0,o.Xd)(new u.wA("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((e,r)=>{y(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),y(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});let i={apiKey:o,authDomain:s,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:el(n)},a=new eh(e,r,i);return function(e,t){let r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(w);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(a,t),a})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{let n=e.getProvider("auth-internal");n.initialize()})),(0,o.Xd)(new u.wA("auth-internal",e=>{let t=ed(e.getProvider("auth").getImmediate());return new tV(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,o.KN)(tF,tz,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(n)),(0,o.KN)(tF,tz,"esm2017")},24:function(e,t,r){"use strict";r.d(t,{cn:function(){return v},KO:function(){return b}});var n=r(7294);let i=0;new WeakMap;let o=Symbol(),s=e=>!!e[o],a=e=>!e[o].c,u=e=>{var t;let{b:r,c:n}=e[o];n&&(n(),null==(t=d.get(r))||t())},l=(e,t)=>{let r=e[o].o,n=t[o].o;return r===n||e===n||s(r)&&l(r,t)},c=(e,t)=>{let r={b:e,o:t,c:null},n=new Promise(e=>{r.c=()=>{r.c=null,e()},t.finally(r.c)});return n[o]=r,n},h=e=>c(e[o].b,e[o].o),d=new WeakMap,f=e=>"init"in e,p=e=>{let t,r;let n=new WeakMap,i=new WeakMap,o=new Map;if(t=new Set,r=new Set,e)for(let[t,r]of e){let e={v:r,r:0,y:!0,d:new Map};Object.freeze(e),f(t)||console.warn("Found initial value for derived atom which can cause unexpected behavior",t),n.set(t,e)}let d=new WeakMap,p=(e,t,r)=>{let n=d.get(t);n||(n=new Map,d.set(t,n)),r.then(()=>{n.get(e)!==r||(n.delete(e),n.size||d.delete(t))}),n.set(e,r)},g=e=>{let t=new Set,r=d.get(e);return r&&(d.delete(e),r.forEach((e,r)=>{u(e),t.add(r)})),t},m=new WeakMap,y=e=>{let t=m.get(e);return t||(t=new Map,m.set(e,t)),t},v=(e,t)=>{if(e){let r=y(e),n=r.get(t);return!n&&((n=v(e.p,t))&&"p"in n&&a(n.p)&&(n=void 0),n&&r.set(t,n)),n}return n.get(t)},b=(e,t,r)=>{if(Object.freeze(r),e){let n=y(e);n.set(t,r)}else{let e=n.get(t);n.set(t,r),o.has(t)||o.set(t,e)}},w=(e,t=new Map,r)=>{if(!r)return t;let n=new Map,i=!1;return(r.forEach(r=>{var o;let s=(null==(o=v(e,r))?void 0:o.r)||0;n.set(r,s),t.get(r)!==s&&(i=!0)}),t.size!==n.size||i)?n:t},_=(e,t,r,n,i)=>{let o=v(e,t);if(o){if(i&&(!("p"in o)||!l(o.p,i)))return o;"p"in o&&u(o.p)}let s={v:r,r:(null==o?void 0:o.r)||0,y:!0,d:w(e,null==o?void 0:o.d,n)},a=!(null==o?void 0:o.y);return(o&&"v"in o&&Object.is(o.v,r)?s.d===o.d||s.d.size===o.d.size&&Array.from(s.d.keys()).every(e=>o.d.has(e))||(a=!0,Promise.resolve().then(()=>{M(e)})):(a=!0,++s.r,s.d.has(t)&&(s.d=new Map(s.d).set(t,s.r))),o&&!a)?o:(b(e,t,s),s)},E=(e,t,r,n,i)=>{let o=v(e,t);if(o){if(i&&(!("p"in o)||!l(o.p,i)))return o;"p"in o&&u(o.p)}let s={e:r,r:((null==o?void 0:o.r)||0)+1,y:!0,d:w(e,null==o?void 0:o.d,n)};return b(e,t,s),s},I=(e,t,r,n)=>{let i=v(e,t);if(i&&"p"in i){if(l(i.p,r)&&!a(i.p))return i.y?i:{...i,y:!0};u(i.p)}p(e,t,r);let o={p:r,r:((null==i?void 0:i.r)||0)+1,y:!0,d:w(e,null==i?void 0:i.d,n)};return b(e,t,o),o},T=(e,t,r,n)=>{if(r instanceof Promise){let i=c(r,r.then(r=>{_(e,t,r,n,i)}).catch(r=>{if(r instanceof Promise)return s(r)?r.then(()=>{R(e,t,!0)}):r;E(e,t,r,n,i)}));return I(e,t,i,n)}return _(e,t,r,n)},O=(e,t)=>{let r=v(e,t);if(r){let n={...r,y:!1};b(e,t,n)}else console.warn("[Bug] could not invalidate non existing atom",t)},R=(e,t,r)=>{if(!r){let r=v(e,t);if(r){if(r.y&&"p"in r&&!a(r.p))return r;if(r.d.forEach((r,n)=>{if(n!==t){if(i.has(n)){let t=v(e,n);t&&!t.y&&R(e,n)}else R(e,n)}}),Array.from(r.d).every(([t,r])=>{let n=v(e,t);return n&&!("p"in n)&&n.r===r}))return r.y?r:{...r,y:!0}}}let n=new Set;try{let r=t.read(r=>{n.add(r);let i=r===t?v(e,r):R(e,r);if(i){if("e"in i)throw i.e;if("p"in i)throw i.p;return i.v}if(f(r))return r.init;throw Error("no atom init")});return T(e,t,r,n)}catch(r){if(r instanceof Promise){let i=s(r)&&a(r)?h(r):c(r,r);return I(e,t,i,n)}return E(e,t,r,n)}},S=(e,t)=>{let r=R(t,e);return r},A=(e,t)=>{let r=i.get(t);return r||(r=U(e,t)),r},k=(e,t)=>!t.l.size&&(!t.t.size||1===t.t.size&&t.t.has(e)),C=(e,t)=>{let r=i.get(t);r&&k(t,r)&&x(e,t)},N=(e,t)=>{let r=i.get(t);null==r||r.t.forEach(r=>{r!==t&&(O(e,r),N(e,r))})},P=(e,t,r)=>{let n=!0,i=(t,r)=>{let n=R(e,t);if("e"in n)throw n.e;if("p"in n){if(null==r?void 0:r.unstable_promise)return n.p.then(()=>{let o=v(e,t);return o&&"p"in o&&o.p===n.p?new Promise(e=>setTimeout(e)).then(()=>i(t,r)):i(t,r)});throw console.info("Reading pending atom state in write operation. We throw a promise for now.",t),n.p}if("v"in n)return n.v;throw console.warn("[Bug] no value found while reading atom in write operation. This is probably a bug.",t),Error("no value found")},o=(r,i)=>{let o;if(r===t){if(!f(r))throw Error("atom not writable");let t=g(r);t.forEach(t=>{t!==e&&T(t,r,i)});let n=v(e,r),o=T(e,r,i);n!==o&&N(e,r)}else o=P(e,r,i);return n||M(e),o},s=t.write(i,o,r);return n=!1,s},L=(e,t,r)=>{let n=P(r,e,t);return M(r),n},D=e=>!!e.write,U=(e,t,n)=>{let o={t:new Set(n&&[n]),l:new Set};i.set(t,o),r.add(t);let s=R(void 0,t);if(s.d.forEach((r,n)=>{let o=i.get(n);o?o.t.add(t):n!==t&&U(e,n,t)}),D(t)&&t.onMount){let r=r=>L(t,r,e),n=t.onMount(r);e=void 0,n&&(o.u=n)}return o},x=(e,t)=>{var n;let o=null==(n=i.get(t))?void 0:n.u;o&&o(),i.delete(t),r.delete(t);let s=v(e,t);s?("p"in s&&u(s.p),s.d.forEach((r,n)=>{if(n!==t){let r=i.get(n);r&&(r.t.delete(t),k(n,r)&&x(e,n))}})):console.warn("[Bug] could not find atom state to unmount",t)},j=(e,t,r,n)=>{let o=new Set(r.d.keys());null==n||n.forEach((r,n)=>{if(o.has(n)){o.delete(n);return}let s=i.get(n);s&&(s.t.delete(t),k(n,s)&&x(e,n))}),o.forEach(r=>{let n=i.get(r);n?n.t.add(t):i.has(t)&&U(e,r,t)})},M=e=>{if(e){let t=y(e);t.forEach((t,r)=>{let o=n.get(r);if(t!==o){let t=i.get(r);null==t||t.l.forEach(t=>t(e))}});return}for(;o.size;){let e=Array.from(o);o.clear(),e.forEach(([e,t])=>{let r=v(void 0,e);if(r&&r.d!==(null==t?void 0:t.d)&&j(void 0,e,r,null==t?void 0:t.d),t&&!t.y&&(null==r?void 0:r.y))return;let n=i.get(e);null==n||n.l.forEach(e=>e())})}t.forEach(e=>e())},B=e=>{let t=y(e);t.forEach((t,r)=>{let i=n.get(r);(!i||t.r>i.r||t.y!==i.y||t.r===i.r&&t.d!==i.d)&&(n.set(r,t),t.d!==(null==i?void 0:i.d)&&j(e,r,t,null==i?void 0:i.d))})},$=(e,t)=>{t&&B(t),M(void 0)},F=(e,t,r)=>{let n=A(r,e),i=n.l;return i.add(t),()=>{i.delete(t),C(r,e)}},z=(e,t)=>{for(let[r,n]of e)f(r)&&(T(t,r,n),N(t,r));M(t)};return{r:S,w:L,c:$,s:F,h:z,n:e=>(t.add(e),()=>{t.delete(e)}),l:()=>r.values(),a:e=>n.get(e),m:e=>i.get(e)}},g=(e,t)=>{let r=t?t(e).SECRET_INTERNAL_store:p(e);return{s:r}},m=new Map,y=e=>(m.has(e)||m.set(e,(0,n.createContext)(g())),m.get(e));function v(e,t){return function(e,t){let r=`atom${++i}`,n={toString:()=>r};return"function"==typeof e?n.read=e:(n.init=e,n.read=e=>e(n),n.write=(e,t,r)=>t(n,"function"==typeof r?r(e(n)):r)),t&&(n.write=t),n}(e,t)}function b(e,t){return"scope"in e&&(console.warn("atom.scope is deprecated. Please do useAtom(atom, scope) instead."),t=e.scope),[function(e,t){let r=y(t),i=(0,n.useContext)(r),{s:o,v:s}=i,a=t=>{let r=o.r(e,t);if(!r.y)throw Error("should not be invalidated");if("e"in r)throw r.e;if("p"in r)throw r.p;if("v"in r)return r.v;throw Error("no atom value")},[[u,l,c],h]=(0,n.useReducer)((t,r)=>{let n=a(r);return Object.is(t[1],n)&&t[2]===e?t:[r,n,e]},s,t=>{let r=a(t);return[t,r,e]}),d=l;return c!==e&&(h(u),d=a(u)),(0,n.useEffect)(()=>{let{v:t}=i;t&&o.c(e,t);let r=o.s(e,h,t);return h(t),r},[o,e,i]),(0,n.useEffect)(()=>{o.c(e,u)}),(0,n.useDebugValue)(d),d}(e,t),function(e,t){let r=y(t),{s:i,w:o}=(0,n.useContext)(r),s=(0,n.useCallback)(t=>{if(!("write"in e))throw Error("not writable atom");let r=r=>i.w(e,t,r);return o?o(r):r()},[i,o,e]);return s}(e,t)]}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(5492),t(6885)}),_N_E=e.O()}]);