(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[4080],{57764:(e,t,n)=>{const s=n(28981),i=!1;e.exports=class extends s{constructor(e,t,n){super(),this.targets=t,this.options=n,this.connections=e,this.connected=!1,this.status="loading",this.interval=n.interval||5e3,this.name=n.name||"default",this.inSetup=!0,this.connect()}connect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.connection&&"connected"===this.connection.status&&e>=this.connection.index)i;else if(0===this.targets.length)i;else{const{protocol:t,location:n}=this.targets[e];this.connection=this.connections[t](n,this.options);const s=t=>this.connectionError(e,t);this.connection.once("error",s),this.connection.on("connect",(()=>{this.connection.off("error",s),this.connection.once("error",(e=>this.onError(e))),this.connection.once("close",(()=>{this.connected=!1,this.emitClose(),this.closing||this.refresh()})),this.connection.target=this.targets[e],this.connection.index=e,this.targets[e].status=this.connection.status,this.connected=!0,this.inSetup=!1,this.emit("connect")})),this.connection.on("data",(e=>this.emit("data",e))),this.connection.on("payload",(e=>this.emit("payload",e)))}}onError(e){if(this.listenerCount("error"))return this.emit("error",e);console.warn("[eth-provider] Uncaught connection error: "+e.message)}refresh(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.interval;clearTimeout(this.connectTimer),this.connectTimer=setTimeout((()=>this.connect()),e)}connectionError(e,t){this.connection&&this.connection.close&&this.connection.close(),this.targets[e].status=t,this.targets.length-1===e?(this.inSetup=!1,this.refresh()):this.connect(++e)}emitClose(){this.emit("close")}close(){this.closing=!0,this.connection&&this.connection.close&&!this.connection.closed?this.connection.close():this.emit("close"),clearTimeout(this.connectTimer),clearTimeout(this.setupTimer)}error(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;this.emit("payload",{id:e.id,jsonrpc:e.jsonrpc,error:{message:t,code:n}})}send(e){this.inSetup?this.setupTimer=setTimeout((()=>this.send(e)),100):this.connection.closed?this.error(e,"Not connected",4900):this.connection.send(e)}}},24080:(e,t,n)=>{const s=n(28643),i=n(32832),o=n(29343),r={ethereum:"undefined"!==typeof window&&"undefined"!==typeof window.ethereum?window.ethereum:null,web3:"undefined"!==typeof window&&"undefined"!==typeof window.web3?window.web3.currentProvider:null},c="undefined"!==typeof window&&"undefined"!==typeof window.WebSocket?window.WebSocket:null,a="undefined"!==typeof window&&"undefined"!==typeof window.XMLHttpRequest?window.XMLHttpRequest:null;r.ethereum&&(r.ethereum.__isProvider=!0);const d={injected:r.ethereum||n(36168)(r.web3),ipc:n(79464)("IPC connections are unavliable in the browser"),ws:n(5842)(c),http:n(76652)(a)};e.exports=(e,t)=>{!e||Array.isArray(e)||"object"!==typeof e||t||(t=e,e=void 0),e||(e=["injected","frame"]),t||(t={}),(e=[].concat(e)).forEach((e=>{if(e.startsWith("alchemy")&&!t.alchemyId)throw new Error("Alchemy was included as a connection target but no Alchemy project ID was passed in options e.g. { alchemyId: '123abc' }");if(e.startsWith("infura")&&!t.infuraId)throw new Error("Infura was included as a connection target but no Infura project ID was passed in options e.g. { infuraId: '123abc' }")}));const n=o(t);return i(d,s(e,n),t)}},76652:(e,t,n)=>{const s=n(28981),{v4:i}=n(98358),o=!1;let r;class c extends s{constructor(e,t,n){var s;super(),s=this,r=e,this.options=n,this.connected=!1,this.subscriptions=!1,this.status="loading",this.url=t,this.pollId=i(),setTimeout((()=>this.create()),0),this._emit=function(){return s.closed?null:s.emit(...arguments)}}onError(e){!this.closed&&this.listenerCount("error")&&this.emit("error",e)}create(){if(!r)return this.onError(new Error("No HTTP transport available"));this.on("error",(()=>{this.connected&&this.close()})),this.init()}init(){this.send({jsonrpc:"2.0",method:"net_version",params:[],id:1},((e,t)=>{if(e)return this.onError(e);this.connected=!0,this._emit("connect"),this.send({jsonrpc:"2.0",id:1,method:"eth_pollSubscriptions",params:[this.pollId,"immediate"]},((e,t)=>{e||(this.subscriptions=!0,this.pollSubscriptions())}))}))}pollSubscriptions(){this.send({jsonrpc:"2.0",id:1,method:"eth_pollSubscriptions",params:[this.pollId]},((e,t)=>{if(e)return this.subscriptionTimeout=setTimeout((()=>this.pollSubscriptions()),1e4),this.onError(e);this.closed||(this.subscriptionTimeout=this.pollSubscriptions()),t&&t.map((e=>{let t;try{t=JSON.parse(e)}catch(n){t=!1}return t})).filter((e=>e)).forEach((e=>this._emit("payload",e)))}))}close(){clearTimeout(this.subscriptionTimeout),this._emit("close"),this.closed=!0,this.removeAllListeners()}filterStatus(e){if(e.status>=200&&e.status<300)return e;const t=new Error(e.statusText);throw t.res=e,t.message}error(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;this._emit("payload",{id:e.id,jsonrpc:e.jsonrpc,error:{message:t,code:n}})}send(e,t){if(this.closed)return this.error(e,"Not connected");if("eth_subscribe"===e.method){if(!this.subscriptions)return this.error(e,"Subscriptions are not supported by this HTTP endpoint");e.pollId=this.pollId}const n=new r;let s=!1;const i=(i,o)=>{if(!s)if(n.abort(),s=!0,t)t(i,o);else{const{id:t,jsonrpc:n}=e,s=i?{id:t,jsonrpc:n,error:{message:i.message,code:i.code}}:{id:t,jsonrpc:n,result:o};this._emit("payload",s)}};try{n.open("POST",this.url,!0),n.setRequestHeader("Content-Type","application/json"),n.timeout=6e4,n.onerror=i,n.ontimeout=i,n.onreadystatechange=()=>{if(4===n.readyState)try{const e=JSON.parse(n.responseText);i(e.error,e.result)}catch(e){i(e)}},n.send(JSON.stringify(e))}catch(c){o,i({message:c.message,code:-1})}}}e.exports=e=>(t,n)=>new c(e,t,n)},36168:(e,t,n)=>{const s=n(28981);class i extends s{constructor(e,t){super(),e?setTimeout((()=>this.onError(new Error("Injected web3 provider is not currently supported"))),0):setTimeout((()=>this.onError(new Error("No injected provider found"))),0)}onError(e){this.listenerCount("error")&&this.emit("error",e)}}e.exports=e=>t=>new i(e,t)},79464:(e,t,n)=>{const s=n(28981);class i extends s{constructor(e){super(),setTimeout((()=>this.onError(new Error(e))),0)}onError(e){this.listenerCount("error")&&this.emit("error",e)}}e.exports=e=>()=>new i(e)},5842:(e,t,n)=>{const s=n(28981),i=n(10784),o=!1;let r;class c extends s{constructor(e,t,n){super(),this.socketListeners=[],r=e,setTimeout((()=>this.create(t,n)),0)}create(e,t){if(!r)return this.onError(new Error("No WebSocket transport available"));try{this.socket=new r(e,[],{origin:t.origin})}catch(n){return this.onError(n)}this.addSocketListener("error",this.onError.bind(this)),this.addSocketListener("open",this.onOpen.bind(this)),this.addSocketListener("close",this.onClose.bind(this))}addSocketListener(e,t){this.socket.addEventListener(e,t),this.socketListeners.push({event:e,handler:t})}removeAllSocketListeners(){this.socketListeners.forEach((e=>{let{event:t,handler:n}=e;this.socket.removeEventListener(t,n)})),this.socketListeners=[]}onOpen(){this.emit("connect"),this.addSocketListener("message",this.onMessage.bind(this))}onMessage(e){const t="string"===typeof e.data?e.data:"";i(t,((e,t)=>{e||t.forEach((e=>{Array.isArray(e)?e.forEach((e=>this.emit("payload",e))):this.emit("payload",e)}))}))}onError(e){this.listenerCount("error")&&this.emit("error",e)}onClose(e){e&&e.reason,e&&e.code;this.socket&&(this.removeAllSocketListeners(),this.socket=null),this.closed=!0,this.emit("close"),this.removeAllListeners()}close(){this.socket&&r&&this.socket.readyState!==r.CLOSED?(this.removeAllSocketListeners(),this.addSocketListener("error",(()=>{})),this.addSocketListener("close",this.onClose.bind(this)),this.socket.terminate?this.socket.terminate():this.socket.close()):this.onClose()}error(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;this.emit("payload",{id:e.id,jsonrpc:e.jsonrpc,error:{message:t,code:n}})}send(e){try{this.socket&&this.socket.readyState===this.socket.CONNECTING?setTimeout((t=>this.send(e)),10):!this.socket||this.socket.readyState>1?(this.connected=!1,this.error(e,"Not connected")):this.socket.send(JSON.stringify(e))}catch(t){o,this.error(e,t.message)}}}e.exports=e=>(t,n)=>new c(e,t,n)},98358:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NIL",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"v1",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"v3",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"v4",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"v5",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"validate",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"version",{enumerable:!0,get:function(){return a.default}});var s=l(n(37601)),i=l(n(18783)),o=l(n(28286)),r=l(n(38205)),c=l(n(55817)),a=l(n(6626)),d=l(n(3106)),h=l(n(51403)),u=l(n(46901));function l(e){return e&&e.__esModule?e:{default:e}}},44914:(e,t)=>{"use strict";function n(e){return 14+(e+64>>>9<<4)+1}function s(e,t){const n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function i(e,t,n,i,o,r){return s((c=s(s(t,e),s(i,r)))<<(a=o)|c>>>32-a,n);var c,a}function o(e,t,n,s,o,r,c){return i(t&n|~t&s,e,t,o,r,c)}function r(e,t,n,s,o,r,c){return i(t&s|n&~s,e,t,o,r,c)}function c(e,t,n,s,o,r,c){return i(t^n^s,e,t,o,r,c)}function a(e,t,n,s,o,r,c){return i(n^(t|~s),e,t,o,r,c)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=function(e){if("string"===typeof e){const t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(let n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return function(e){const t=[],n=32*e.length,s="0123456789abcdef";for(let i=0;i<n;i+=8){const n=e[i>>5]>>>i%32&255,o=parseInt(s.charAt(n>>>4&15)+s.charAt(15&n),16);t.push(o)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[n(t)-1]=t;let i=1732584193,d=-271733879,h=-1732584194,u=271733878;for(let n=0;n<e.length;n+=16){const t=i,l=d,p=h,f=u;i=o(i,d,h,u,e[n],7,-680876936),u=o(u,i,d,h,e[n+1],12,-389564586),h=o(h,u,i,d,e[n+2],17,606105819),d=o(d,h,u,i,e[n+3],22,-1044525330),i=o(i,d,h,u,e[n+4],7,-176418897),u=o(u,i,d,h,e[n+5],12,1200080426),h=o(h,u,i,d,e[n+6],17,-1473231341),d=o(d,h,u,i,e[n+7],22,-45705983),i=o(i,d,h,u,e[n+8],7,1770035416),u=o(u,i,d,h,e[n+9],12,-1958414417),h=o(h,u,i,d,e[n+10],17,-42063),d=o(d,h,u,i,e[n+11],22,-1990404162),i=o(i,d,h,u,e[n+12],7,1804603682),u=o(u,i,d,h,e[n+13],12,-40341101),h=o(h,u,i,d,e[n+14],17,-1502002290),d=o(d,h,u,i,e[n+15],22,1236535329),i=r(i,d,h,u,e[n+1],5,-165796510),u=r(u,i,d,h,e[n+6],9,-1069501632),h=r(h,u,i,d,e[n+11],14,643717713),d=r(d,h,u,i,e[n],20,-373897302),i=r(i,d,h,u,e[n+5],5,-701558691),u=r(u,i,d,h,e[n+10],9,38016083),h=r(h,u,i,d,e[n+15],14,-660478335),d=r(d,h,u,i,e[n+4],20,-405537848),i=r(i,d,h,u,e[n+9],5,568446438),u=r(u,i,d,h,e[n+14],9,-1019803690),h=r(h,u,i,d,e[n+3],14,-187363961),d=r(d,h,u,i,e[n+8],20,1163531501),i=r(i,d,h,u,e[n+13],5,-1444681467),u=r(u,i,d,h,e[n+2],9,-51403784),h=r(h,u,i,d,e[n+7],14,1735328473),d=r(d,h,u,i,e[n+12],20,-1926607734),i=c(i,d,h,u,e[n+5],4,-378558),u=c(u,i,d,h,e[n+8],11,-2022574463),h=c(h,u,i,d,e[n+11],16,1839030562),d=c(d,h,u,i,e[n+14],23,-35309556),i=c(i,d,h,u,e[n+1],4,-1530992060),u=c(u,i,d,h,e[n+4],11,1272893353),h=c(h,u,i,d,e[n+7],16,-155497632),d=c(d,h,u,i,e[n+10],23,-1094730640),i=c(i,d,h,u,e[n+13],4,681279174),u=c(u,i,d,h,e[n],11,-358537222),h=c(h,u,i,d,e[n+3],16,-722521979),d=c(d,h,u,i,e[n+6],23,76029189),i=c(i,d,h,u,e[n+9],4,-640364487),u=c(u,i,d,h,e[n+12],11,-421815835),h=c(h,u,i,d,e[n+15],16,530742520),d=c(d,h,u,i,e[n+2],23,-995338651),i=a(i,d,h,u,e[n],6,-198630844),u=a(u,i,d,h,e[n+7],10,1126891415),h=a(h,u,i,d,e[n+14],15,-1416354905),d=a(d,h,u,i,e[n+5],21,-57434055),i=a(i,d,h,u,e[n+12],6,1700485571),u=a(u,i,d,h,e[n+3],10,-1894986606),h=a(h,u,i,d,e[n+10],15,-1051523),d=a(d,h,u,i,e[n+1],21,-2054922799),i=a(i,d,h,u,e[n+8],6,1873313359),u=a(u,i,d,h,e[n+15],10,-30611744),h=a(h,u,i,d,e[n+6],15,-1560198380),d=a(d,h,u,i,e[n+13],21,1309151649),i=a(i,d,h,u,e[n+4],6,-145523070),u=a(u,i,d,h,e[n+11],10,-1120210379),h=a(h,u,i,d,e[n+2],15,718787259),d=a(d,h,u,i,e[n+9],21,-343485551),i=s(i,t),d=s(d,l),h=s(h,p),u=s(u,f)}return[i,d,h,u]}(function(e){if(0===e.length)return[];const t=8*e.length,s=new Uint32Array(n(t));for(let n=0;n<t;n+=8)s[n>>5]|=(255&e[n/8])<<n%32;return s}(e),8*e.length))};t.default=d},37395:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};t.default=n},55817:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default="00000000-0000-0000-0000-000000000000"},46901:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,i=(s=n(3106))&&s.__esModule?s:{default:s};var o=function(e){if(!(0,i.default)(e))throw TypeError("Invalid UUID");let t;const n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=255&t,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=255&t,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=255&t,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=255&t,n};t.default=o},31769:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i},99011:(e,t)=>{"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!n&&(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(s)};const s=new Uint8Array(16)},28365:(e,t)=>{"use strict";function n(e,t,n,s){switch(e){case 0:return t&n^~t&s;case 1:case 3:return t^n^s;case 2:return t&n^t&s^n&s}}function s(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e){const t=[1518500249,1859775393,2400959708,3395469782],i=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"===typeof e){const t=unescape(encodeURIComponent(e));e=[];for(let n=0;n<t.length;++n)e.push(t.charCodeAt(n))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);const o=e.length/4+2,r=Math.ceil(o/16),c=new Array(r);for(let n=0;n<r;++n){const t=new Uint32Array(16);for(let s=0;s<16;++s)t[s]=e[64*n+4*s]<<24|e[64*n+4*s+1]<<16|e[64*n+4*s+2]<<8|e[64*n+4*s+3];c[n]=t}c[r-1][14]=8*(e.length-1)/Math.pow(2,32),c[r-1][14]=Math.floor(c[r-1][14]),c[r-1][15]=8*(e.length-1)&4294967295;for(let a=0;a<r;++a){const e=new Uint32Array(80);for(let t=0;t<16;++t)e[t]=c[a][t];for(let t=16;t<80;++t)e[t]=s(e[t-3]^e[t-8]^e[t-14]^e[t-16],1);let o=i[0],r=i[1],d=i[2],h=i[3],u=i[4];for(let i=0;i<80;++i){const c=Math.floor(i/20),a=s(o,5)+n(c,r,d,h)+u+t[c]+e[i]>>>0;u=h,h=d,d=s(r,30)>>>0,r=o,o=a}i[0]=i[0]+o>>>0,i[1]=i[1]+r>>>0,i[2]=i[2]+d>>>0,i[3]=i[3]+h>>>0,i[4]=i[4]+u>>>0}return[i[0]>>24&255,i[0]>>16&255,i[0]>>8&255,255&i[0],i[1]>>24&255,i[1]>>16&255,i[1]>>8&255,255&i[1],i[2]>>24&255,i[2]>>16&255,i[2]>>8&255,255&i[2],i[3]>>24&255,i[3]>>16&255,i[3]>>8&255,255&i[3],i[4]>>24&255,i[4]>>16&255,i[4]>>8&255,255&i[4]]};t.default=i},51403:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.unsafeStringify=r;var s,i=(s=n(3106))&&s.__esModule?s:{default:s};const o=[];for(let a=0;a<256;++a)o.push((a+256).toString(16).slice(1));function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(o[e[t+0]]+o[e[t+1]]+o[e[t+2]]+o[e[t+3]]+"-"+o[e[t+4]]+o[e[t+5]]+"-"+o[e[t+6]]+o[e[t+7]]+"-"+o[e[t+8]]+o[e[t+9]]+"-"+o[e[t+10]]+o[e[t+11]]+o[e[t+12]]+o[e[t+13]]+o[e[t+14]]+o[e[t+15]]).toLowerCase()}var c=function(e){const t=r(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0);if(!(0,i.default)(t))throw TypeError("Stringified UUID is invalid");return t};t.default=c},37601:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,i=(s=n(99011))&&s.__esModule?s:{default:s},o=n(51403);let r,c,a=0,d=0;var h=function(e,t,n){let s=t&&n||0;const h=t||new Array(16);let u=(e=e||{}).node||r,l=void 0!==e.clockseq?e.clockseq:c;if(null==u||null==l){const t=e.random||(e.rng||i.default)();null==u&&(u=r=[1|t[0],t[1],t[2],t[3],t[4],t[5]]),null==l&&(l=c=16383&(t[6]<<8|t[7]))}let p=void 0!==e.msecs?e.msecs:Date.now(),f=void 0!==e.nsecs?e.nsecs:d+1;const m=p-a+(f-d)/1e4;if(m<0&&void 0===e.clockseq&&(l=l+1&16383),(m<0||p>a)&&void 0===e.nsecs&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=p,d=f,c=l,p+=122192928e5;const y=(1e4*(268435455&p)+f)%4294967296;h[s++]=y>>>24&255,h[s++]=y>>>16&255,h[s++]=y>>>8&255,h[s++]=255&y;const b=p/4294967296*1e4&268435455;h[s++]=b>>>8&255,h[s++]=255&b,h[s++]=b>>>24&15|16,h[s++]=b>>>16&255,h[s++]=l>>>8|128,h[s++]=255&l;for(let i=0;i<6;++i)h[s+i]=u[i];return t||(0,o.unsafeStringify)(h)};t.default=h},18783:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(n(80156)),i=o(n(44914));function o(e){return e&&e.__esModule?e:{default:e}}var r=(0,s.default)("v3",48,i.default);t.default=r},80156:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.URL=t.DNS=void 0,t.default=function(e,t,n){function s(e,s,r,c){var a;if("string"===typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));const t=[];for(let n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}(e)),"string"===typeof s&&(s=(0,o.default)(s)),16!==(null===(a=s)||void 0===a?void 0:a.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let d=new Uint8Array(16+e.length);if(d.set(s),d.set(e,s.length),d=n(d),d[6]=15&d[6]|t,d[8]=63&d[8]|128,r){c=c||0;for(let e=0;e<16;++e)r[c+e]=d[e];return r}return(0,i.unsafeStringify)(d)}try{s.name=e}catch(a){}return s.DNS=r,s.URL=c,s};var s,i=n(51403),o=(s=n(46901))&&s.__esModule?s:{default:s};const r="6ba7b810-9dad-11d1-80b4-00c04fd430c8";t.DNS=r;const c="6ba7b811-9dad-11d1-80b4-00c04fd430c8";t.URL=c},28286:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(n(37395)),i=r(n(99011)),o=n(51403);function r(e){return e&&e.__esModule?e:{default:e}}var c=function(e,t,n){if(s.default.randomUUID&&!t&&!e)return s.default.randomUUID();const r=(e=e||{}).random||(e.rng||i.default)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=r[e];return t}return(0,o.unsafeStringify)(r)};t.default=c},38205:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(n(80156)),i=o(n(28365));function o(e){return e&&e.__esModule?e:{default:e}}var r=(0,s.default)("v5",80,i.default);t.default=r},3106:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,i=(s=n(31769))&&s.__esModule?s:{default:s};var o=function(e){return"string"===typeof e&&i.default.test(e)};t.default=o},6626:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,i=(s=n(3106))&&s.__esModule?s:{default:s};var o=function(e){if(!(0,i.default)(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)};t.default=o},10784:e=>{let t,n;e.exports=(e,s)=>{const i=[];e.replace(/\}[\n\r]?\{/g,"}|--|{").replace(/\}\][\n\r]?\[\{/g,"}]|--|[{").replace(/\}[\n\r]?\[\{/g,"}|--|[{").replace(/\}\][\n\r]?\{/g,"}]|--|{").split("|--|").forEach((e=>{let o;t&&(e=t+e);try{o=JSON.parse(e)}catch(r){return t=e,clearTimeout(n),void(n=setTimeout((()=>s(new Error("Parse response timeout"))),15e3))}clearTimeout(n),t=null,o&&i.push(o)})),s(null,i)}},29343:e=>{e.exports=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{injected:["injected"],frame:["ws://127.0.0.1:1248","http://127.0.0.1:1248"],direct:["ws://127.0.0.1:8546","http://127.0.0.1:8545"],infura:["wss://mainnet.infura.io/ws/v3/".concat(e.infuraId),"https://mainnet.infura.io/v3/".concat(e.infuraId)],alchemy:["wss://eth-mainnet.ws.alchemyapi.io/v2/".concat(e.alchemyId),"https://eth-mainnet.alchemyapi.io/v2/".concat(e.alchemyId)],infuraGoerli:["wss://goerli.infura.io/ws/v3/".concat(e.infuraId),"https://goerli.infura.io/v3/".concat(e.infuraId)],alchemyGoerli:["wss://eth-goerli.ws.alchemyapi.io/v2/".concat(e.alchemyId),"https://eth-goerli.alchemyapi.io/v2/".concat(e.alchemyId)],infuraPolygon:["https://polygon-mainnet.infura.io/v3/".concat(e.infuraId)],infuraArbitrum:["https://arbitrum-mainnet.infura.io/v3/".concat(e.infuraId)],infuraOptimism:["https://optimism-mainnet.infura.io/v3/".concat(e.infuraId)],infuraSepolia:["wss://sepolia.infura.io/ws/v3/".concat(e.infuraId),"https://sepolia.infura.io/v3/".concat(e.infuraId)],gnosis:["https://rpc.gnosischain.com"],optimism:["https://mainnet.optimism.io"]}}},32832:(e,t,n)=>{const s=n(28981),i=n(5865).default,o=n(57764),r=e=>{function t(t){e.status=t,e instanceof s&&e.emit("status",t)}async function n(){try{await e.send("eth_syncing")&&t("syncing")}catch(n){}}async function i(){if(e.inSetup)return setTimeout(i,1e3);try{await e.send("eth_chainId"),t("connected"),setTimeout(n,500)}catch(s){t("disconnected")}}return t("loading"),i(),e.on("connect",(()=>i())),e.on("close",(()=>t("disconnected"))),e};e.exports=(e,t,n)=>{if(e.injected.__isProvider&&t.map((e=>e.type)).indexOf("injected")>-1)return delete e.injected.__isProvider,r(e.injected);const s=new i(new o(e,t,n));return s.setMaxListeners(128),r(s)}},28643:e=>{const t=e=>"injected"===e?"injected":e.endsWith(".ipc")?"ipc":e.startsWith("wss://")||e.startsWith("ws://")?"ws":e.startsWith("https://")||e.startsWith("http://")?"http":"";e.exports=(e,n)=>[].concat(...[].concat(e).map((e=>n[e]?n[e].map((n=>({type:e,location:n,protocol:t(n)}))):{type:"custom",location:e,protocol:t(e)}))).filter((e=>!(!e.protocol&&"injected"!==e.type)||(console.log('eth-provider | Invalid provider preset/location: "'+e.location+'"'),!1)))},5865:function(e,t,n){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=s(n(28981)),o=n(52415);class r extends i.default{constructor(e){super(),this.promises={},this.attemptedSubscriptions=new Set,this.subscriptions=[],this.checkConnectionRunning=!1,this.nextId=1,this.connected=!1,this.accounts=[],this.selectedAddress=void 0,this.coinbase=void 0,this.enable=this.enable.bind(this),this.doSend=this.doSend.bind(this),this.send=this.send.bind(this),this.sendBatch=this.sendBatch.bind(this),this.subscribe=this.subscribe.bind(this),this.unsubscribe=this.unsubscribe.bind(this),this.resumeSubscriptions=this.resumeSubscriptions.bind(this),this.sendAsync=this.sendAsync.bind(this),this.sendAsyncBatch=this.sendAsyncBatch.bind(this),this.isConnected=this.isConnected.bind(this),this.close=this.close.bind(this),this.request=this.request.bind(this),this.connection=e,this.on("connect",this.resumeSubscriptions),this.connection.on("connect",(()=>this.checkConnection(1e3))),this.connection.on("close",(()=>{this.connected=!1,this.attemptedSubscriptions.clear(),this.emit("close"),this.emit("disconnect")})),this.connection.on("payload",(e=>{const{id:t,method:n,error:s,result:i}=e;if("undefined"!==typeof t){if(this.promises[t]){const n=this.promises[t].method;if(n&&["eth_accounts","eth_requestAccounts"].includes(n)){const e=i||[];this.accounts=e,this.selectedAddress=e[0],this.coinbase=e[0]}e.error?this.promises[t].reject(s):this.promises[t].resolve(i),delete this.promises[t]}}else n&&n.indexOf("_subscription")>-1&&(this.emit(e.params.subscription,e.params.result),this.emit(n,e.params),this.emit("message",{type:e.method,data:{subscription:e.params.subscription,result:e.params.result}}),this.emit("data",e))})),this.on("newListener",(e=>{Object.keys(this.eventHandlers).includes(e)&&!this.attemptedSubscription(e)&&this.connected&&(this.startSubscription(e),"networkChanged"===e&&console.warn("The networkChanged event is being deprecated, use chainChanged instead"))})),this.eventHandlers={networkChanged:e=>{this.networkVersion="string"===typeof e?parseInt(e):e,this.emit("networkChanged",this.networkVersion)},chainChanged:e=>{this.providerChainId=e,this.manualChainId||this.emit("chainChanged",e)},chainsChanged:e=>{this.emit("chainsChanged",e)},accountsChanged:e=>{this.selectedAddress=e[0],this.emit("accountsChanged",e)},assetsChanged:e=>{this.emit("assetsChanged",e)}}}get chainId(){return this.manualChainId||this.providerChainId}async checkConnection(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4e3;if(!this.checkConnectionRunning&&!this.connected){clearTimeout(this.checkConnectionTimer),this.checkConnectionTimer=void 0,this.checkConnectionRunning=!0;try{this.networkVersion=await this.doSend("net_version",[],void 0,!1),this.providerChainId=await this.doSend("eth_chainId",[],void 0,!1),this.connected=!0}catch(t){this.checkConnectionTimer=setTimeout((()=>this.checkConnection()),e),this.connected=!1}finally{this.checkConnectionRunning=!1,this.connected&&this.emit("connect",{chainId:this.providerChainId})}}}attemptedSubscription(e){return this.attemptedSubscriptions.has(e)}setSubscriptionAttempted(e){this.attemptedSubscriptions.add(e)}async startSubscription(e){console.debug("starting subscription for ".concat(e," events")),this.setSubscriptionAttempted(e);try{const t=await this.subscribe("eth_subscribe",e);this.on(t,this.eventHandlers[e])}catch(t){console.warn("Unable to subscribe to ".concat(e),t)}}resumeSubscriptions(){Object.keys(this.eventHandlers).forEach((e=>{this.listenerCount(e)&&!this.attemptedSubscription(e)&&this.startSubscription(e)}))}async enable(){const e=await this.doSend("eth_accounts");if(e.length>0)return this.accounts=e,this.selectedAddress=e[0],this.coinbase=e[0],this.emit("enable"),e;{const e=new Error("User Denied Full Provider");throw e.code="4001",e}}doSend(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.manualChainId,s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const i=(s,i)=>{const r="object"===typeof e?e.method:e,c="object"===typeof e?e.params:t,a="object"===typeof e&&e.chainId||n;if(!r)return i(new Error("Method is not a valid string."));try{const e=(0,o.create)(r,c,this.nextId++,a);this.promises[e.id]={resolve:e=>s(e),reject:i,method:e.method},this.connection.send(e)}catch(d){i(d)}};return this.connected||!s?new Promise(i):new Promise(((e,t)=>{const n=()=>(clearTimeout(s),e(new Promise(i))),s=setTimeout((()=>{this.off("connect",n),t(new Error("Not connected"))}),5e3);this.once("connect",n)}))}async send(e,t){if("string"===typeof e&&(!t||Array.isArray(t))){const n=t;return this.doSend(e,n)}if(e&&"object"===typeof e&&"function"===typeof t){const n=t;return this.sendAsync(e,n)}return this.request(e)}sendBatch(e){return Promise.all(e.map((e=>this.doSend(e.method,e.params))))}async subscribe(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];const s=await this.doSend(e,[t,...n]);return this.subscriptions.push(s),s}async unsubscribe(e,t){const n=await this.doSend(e,[t]);if(n)return this.subscriptions=this.subscriptions.filter((e=>e!==t)),this.removeAllListeners(t),n}async sendAsync(e,t){if(!t||"function"!==typeof t)return new Error("Invalid or undefined callback provided to sendAsync");if(!e)return t(new Error("Invalid Payload"));if(Array.isArray(e)){const n=e.map((e=>({...e,jsonrpc:"2.0"}))),s=t;return this.sendAsyncBatch(n,s)}{const s={...e,jsonrpc:"2.0"},i=t;try{const e=await this.doSend(s.method,s.params);i(null,{id:s.id,jsonrpc:s.jsonrpc,result:e})}catch(n){i(n)}}}async sendAsyncBatch(e,t){try{const n=await this.sendBatch(e);t(null,n.map(((t,n)=>({id:e[n].id,jsonrpc:e[n].jsonrpc,result:t}))))}catch(n){t(n)}}isConnected(){return this.connected}close(){this.connection&&this.connection.close&&this.connection.close(),this.off("connect",this.resumeSubscriptions),this.connected=!1;const e=new Error("Provider closed, subscription lost, please subscribe again.");this.subscriptions.forEach((t=>this.emit(t,e))),this.subscriptions=[],this.manualChainId=void 0,this.providerChainId=void 0,this.networkVersion=void 0,this.selectedAddress=void 0,this.coinbase=void 0}async request(e){return this.doSend(e.method,e.params,e.chainId)}setChain(e){"number"===typeof e&&(e="0x"+e.toString(16));const t=e!==this.chainId;this.manualChainId=e,t&&this.emit("chainChanged",this.chainId)}}t.default=r},52415:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.create=void 0,t.create=function(e){let t=arguments.length>3?arguments[3]:void 0;const n={id:arguments.length>2?arguments[2]:void 0,method:e,params:arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],jsonrpc:"2.0"};if(t&&(n.chainId=t),"eth_sendTransaction"===n.method){const e=function(e){if("eth_sendTransaction"!==e.method)return!1;const t=e.params[0]||{},n=t.chainId;return"chainId"in t&&parseInt(n)!==parseInt(e.chainId||n)}(n);if(e)throw new Error("Payload chainId (".concat(e,") inconsistent with specified target chainId: ").concat(t));return function(e){const t=e.params[0]||{};return{...e,params:[{...t,chainId:t.chainId||e.chainId},...e.params.slice(1)]}}(n)}return n}}}]);