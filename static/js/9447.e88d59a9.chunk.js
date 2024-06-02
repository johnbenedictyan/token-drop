"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[9447,6063],{45325:(t,e,n)=>{n.d(e,{W:()=>o});var s=n(51523),i=n(92724);class o extends i.A{constructor(t){let{chains:e=s.k9b,options:n}=t;super(),this.chains=e,this.options=n}getBlockExplorerUrls(t){var e,n;const s=null!==(e=null===(n=t.explorers)||void 0===n?void 0:n.map((t=>t.url)))&&void 0!==e?e:[];return s.length>0?s:void 0}isChainUnsupported(t){return!this.chains.some((e=>e.chainId===t))}updateChains(t){this.chains=t}}},27537:(t,e,n)=>{n.d(e,{A:()=>r,C:()=>c,R:()=>h,S:()=>d,U:()=>u,a:()=>a});var s=n(33440);class i extends Error{constructor(t,e){const{cause:n,code:s,data:i}=e;if(!Number.isInteger(s))throw new Error('"code" must be an integer.');if(!t||"string"!==typeof t)throw new Error('"message" must be a nonempty string.');super("".concat(t,". Cause: ").concat(JSON.stringify(n))),this.cause=n,this.code=s,this.data=i}}class o extends i{constructor(t,e){const{cause:n,code:s,data:i}=e;if(!(Number.isInteger(s)&&s>=1e3&&s<=4999))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(t,{cause:n,code:s,data:i})}}class r extends Error{constructor(){super(...arguments),(0,s._)(this,"name","AddChainError"),(0,s._)(this,"message","Error adding chain")}}class c extends Error{constructor(t){let{chainId:e,connectorId:n}=t;super('Chain "'.concat(e,'" not configured for connector "').concat(n,'".')),(0,s._)(this,"name","ChainNotConfigured")}}class a extends Error{constructor(){super(...arguments),(0,s._)(this,"name","ConnectorNotFoundError"),(0,s._)(this,"message","Connector not found")}}class h extends i{constructor(t){super("Resource unavailable",{cause:t,code:-32002}),(0,s._)(this,"name","ResourceUnavailable")}}class d extends o{constructor(t){super("Error switching chain",{cause:t,code:4902}),(0,s._)(this,"name","SwitchChainError")}}class u extends o{constructor(t){super("User rejected request",{cause:t,code:4001}),(0,s._)(this,"name","UserRejectedRequestError")}}},64337:(t,e,n)=>{function s(t){return"string"===typeof t?Number.parseInt(t,"0x"===t.trim().substring(0,2)?16:10):"bigint"===typeof t?Number(t):t}n.d(e,{n:()=>s})},66063:(t,e,n)=>{n.d(e,{InjectedConnector:()=>l});var s=n(33440),i=n(45325),o=n(27537),r=n(63507),c=n(84375),a=n(80708),h=n(84062),d=n(94593),u=n(64337);n(92724);class l extends i.W{constructor(t){const e={...{shimDisconnect:!0,getProvider:()=>{if((0,r.a)(globalThis.window))return globalThis.window.ethereum}},...t.options};super({chains:t.chains,options:e}),(0,s._)(this,"shimDisconnectKey","injected.shimDisconnect"),(0,s._)(this,"onAccountsChanged",(async t=>{0===t.length?this.emit("disconnect"):this.emit("change",{account:a.getAddress(t[0])})})),(0,s._)(this,"onChainChanged",(t=>{const e=(0,u.n)(t),n=this.isChainUnsupported(e);this.emit("change",{chain:{id:e,unsupported:n}})})),(0,s._)(this,"onDisconnect",(async t=>{if(1013===t.code){if(await this.getProvider())try{if(await this.getAccount())return}catch{}}this.emit("disconnect"),this.options.shimDisconnect&&await this.connectorStorage.removeItem(this.shimDisconnectKey)}));const n=e.getProvider();if("string"===typeof e.name)this.name=e.name;else if(n){const t=function(t){var e,n;if(!t)return"Injected";const s=t=>t.isAvalanche?"Core Wallet":t.isBitKeep?"BitKeep":t.isBraveWallet?"Brave Wallet":t.isCoinbaseWallet?"Coinbase Wallet":t.isExodus?"Exodus":t.isFrame?"Frame":t.isKuCoinWallet?"KuCoin Wallet":t.isMathWallet?"MathWallet":t.isOneInchIOSWallet||t.isOneInchAndroidWallet?"1inch Wallet":t.isOpera?"Opera":t.isPortal?"Ripio Portal":t.isTally?"Tally":t.isTokenPocket?"TokenPocket":t.isTokenary?"Tokenary":t.isTrust||t.isTrustWallet?"Trust Wallet":t.isMetaMask?"MetaMask":t.isImToken?"imToken":void 0;if(null!==(e=t.providers)&&void 0!==e&&e.length){var i;const e=new Set;let n=1;for(const i of t.providers){let t=s(i);t||(t="Unknown Wallet #".concat(n),n+=1),e.add(t)}const o=[...e];return o.length?o:null!==(i=o[0])&&void 0!==i?i:"Injected"}return null!==(n=s(t))&&void 0!==n?n:"Injected"}(n);e.name?this.name=e.name(t):this.name="string"===typeof t?t:t[0]}else this.name="Injected";this.id="injected",this.ready=!!n,this.connectorStorage=t.connectorStorage}async connect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{const n=await this.getProvider();if(!n)throw new o.a;this.setupListeners(),this.emit("message",{type:"connecting"});const s=await n.request({method:"eth_requestAccounts"}),i=a.getAddress(s[0]);let r=await this.getChainId(),c=this.isChainUnsupported(r);if(t.chainId&&r!==t.chainId)try{await this.switchChain(t.chainId),r=t.chainId,c=this.isChainUnsupported(t.chainId)}catch(e){console.error("Could not switch to chain id: ".concat(t.chainId),e)}this.options.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const h={account:i,chain:{id:r,unsupported:c},provider:n};return this.emit("connect",h),h}catch(n){if(this.isUserRejectedRequestError(n))throw new o.U(n);if(-32002===n.code)throw new o.R(n);throw n}}async disconnect(){const t=await this.getProvider();null!==t&&void 0!==t&&t.removeListener&&(t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&await this.connectorStorage.removeItem(this.shimDisconnectKey))}async getAccount(){const t=await this.getProvider();if(!t)throw new o.a;const e=await t.request({method:"eth_accounts"});return a.getAddress(e[0])}async getChainId(){const t=await this.getProvider();if(!t)throw new o.a;return t.request({method:"eth_chainId"}).then(u.n)}async getProvider(){const t=this.options.getProvider();return t&&(this._provider=t),this._provider}async getSigner(){let{chainId:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const[e,n]=await Promise.all([this.getProvider(),this.getAccount()]);return new h.j(e,t).getSigner(n)}async isAuthorized(){try{if(this.options.shimDisconnect&&!Boolean(await this.connectorStorage.getItem(this.shimDisconnectKey)))return!1;if(!await this.getProvider())throw new o.a;return!!await this.getAccount()}catch{return!1}}async switchChain(t){const e=await this.getProvider();if(!e)throw new o.a;const n=d.hexValue(t);try{await e.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]});const s=this.chains.find((e=>e.chainId===t));return s||{chainId:t,name:"Chain ".concat(n),slug:"".concat(n),nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],chain:"",shortName:"",testnet:!0}}catch(i){var s;const a=this.chains.find((e=>e.chainId===t));if(!a)throw new o.C({chainId:t,connectorId:this.id});if(4902===i.code||4902===(null===i||void 0===i||null===(s=i.data)||void 0===s||null===(s=s.originalError)||void 0===s?void 0:s.code))try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:(0,c.g)(a),blockExplorerUrls:this.getBlockExplorerUrls(a)}]}),a}catch(r){if(this.isUserRejectedRequestError(r))throw new o.U(i);throw new o.A}if(this.isUserRejectedRequestError(i))throw new o.U(i);throw new o.S(i)}}async setupListeners(){const t=await this.getProvider();t.on&&(t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect))}isUserRejectedRequestError(t){return 4001===t.code}}},89447:(t,e,n)=>{n.d(e,{OneKeyConnector:()=>h});var s=n(33440),i=n(27537),o=n(30223),r=n(66063),c=n(80708),a=n(23050);n(92724);class h extends r.InjectedConnector{constructor(t){const e={...{name:"OneKey Wallet",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:a.g},...t.options};super({chains:t.chains,options:e,connectorStorage:t.connectorStorage}),(0,s._)(this,"id",o.w.oneKey)}async connect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var e,n;const r=await this.getProvider();if(!r)throw new i.a;this.setupListeners(),this.emit("message",{type:"connecting"});let a=null;if(null!==(e=this.options)&&void 0!==e&&e.shimDisconnect&&!Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))){a=await this.getAccount().catch((()=>null));if(!!a)try{await r.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(s){if(this.isUserRejectedRequestError(s))throw new i.U(s)}}if(!a){const t=await r.request({method:"eth_requestAccounts"});a=c.getAddress(t[0])}let h=await this.getChainId(),d=this.isChainUnsupported(h);if(t.chainId&&h!==t.chainId)try{await this.switchChain(t.chainId),h=t.chainId,d=this.isChainUnsupported(t.chainId)}catch(o){console.error("Could not switch to chain id : ".concat(t.chainId),o)}null!==(n=this.options)&&void 0!==n&&n.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const u={chain:{id:h,unsupported:d},provider:r,account:a};return this.emit("connect",u),u}catch(s){if(this.isUserRejectedRequestError(s))throw new i.U(s);if(-32002===s.code)throw new i.R(s);throw s}}}}}]);