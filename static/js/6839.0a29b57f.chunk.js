"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[6839],{45329:(t,r,e)=>{e.d(r,{C:()=>c});var a=e(54705),n=e(40685),s=e(40021);class c{constructor(t){(0,a.A)(this,"featureName",s.dr.name),(0,a.A)(this,"set",(0,n.f)((async t=>{const r=await s.bH.parseAsync(t);return n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[r.platform_fee_recipient,r.platform_fee_basis_points]})}))),this.contractWrapper=t}async get(){const[t,r]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return s.bH.parseAsync({platform_fee_recipient:t,platform_fee_basis_points:r})}}},39081:(t,r,e)=>{e.d(r,{C:()=>c});var a=e(54705),n=e(40685),s=e(40021);class c{constructor(t){(0,a.A)(this,"featureName",s.d4.name),(0,a.A)(this,"setRecipient",(0,n.f)((async t=>n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPrimarySaleRecipient",args:[t]})))),this.contractWrapper=t}async getRecipient(){return await this.contractWrapper.read("primarySaleRecipient",[])}}},16839:(t,r,e)=>{e.r(r),e.d(r,{EditionDrop:()=>W});var a=e(54705),n=e(42151),s=e(83042),c=e(40021),i=e(40685),o=e(23605),p=e(25399),h=e(92160),l=e(77476),d=e(45329),u=e(98802),f=e(39081),y=e(42790),g=e(41595),m=e(55121);e(2914),e(70689),e(61718),e(45355);class w{constructor(t){this.events=t}async getAllClaimerAddresses(t){const r=(await this.events.getEvents("TokensClaimed")).filter((r=>!(!r.data||!n.gH.isBigNumber(r.data.tokenId))&&r.data.tokenId.eq(t)));return Array.from(new Set(r.filter((t=>{var r;return"string"===typeof(null===(r=t.data)||void 0===r?void 0:r.claimer)})).map((t=>t.data.claimer))))}}class W extends g.S{constructor(t,r,e){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,g=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new c.cs(t,r,s,n,e),e,g),(0,a.A)(this,"createBatch",(0,i.f)((async(t,r)=>this.erc1155.lazyMint.prepare(t,r)))),(0,a.A)(this,"claimTo",(0,i.f)((()=>{var t=this;return async function(r,e,a){let n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return t.erc1155.claimTo.prepare(r,e,a,{checkERC20Allowance:n})}})())),(0,a.A)(this,"claim",(0,i.f)((()=>{var t=this;return async function(r,e){let a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const n=await t.contractWrapper.getSignerAddress();return t.claimTo.prepare(n,r,e,a)}})())),(0,a.A)(this,"burnTokens",(0,i.f)((async(t,r)=>this.erc1155.burn.prepare(t,r)))),this.abi=c.bk.parse(s),this.metadata=new o.C(this.contractWrapper,c.bX,this.storage),this.app=new o.b(this.contractWrapper,this.metadata,this.storage),this.roles=new u.C(this.contractWrapper,W.contractRoles),this.royalties=new l.C(this.contractWrapper,this.metadata),this.sales=new f.C(this.contractWrapper),this.claimConditions=new y.D(this.contractWrapper,this.metadata,this.storage),this.events=new o.a(this.contractWrapper),this.history=new w(this.events),this.encoder=new p.C(this.contractWrapper),this.estimator=new o.G(this.contractWrapper),this.platformFees=new d.C(this.contractWrapper),this.interceptor=new h.C(this.contractWrapper),this.checkout=new m.P(this.contractWrapper),this.owner=new l.a(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t,r){return this.erc1155.getOwned(t,r)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[(0,c.H)("transfer"),s.L])}async getClaimTransaction(t,r,e){let a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return this.erc1155.getClaimTransaction(t,r,e,{checkERC20Allowance:a})}async prepare(t,r,e){return i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}(0,a.A)(W,"contractRoles",c.dD)},41595:(t,r,e)=>{e.d(r,{S:()=>c});var a=e(54705),n=e(40685),s=e(42790);class c{get chainId(){return this._chainId}constructor(t,r,e){(0,a.A)(this,"transfer",(0,n.f)((()=>{var t=this;return async function(r,e,a){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0];return t.erc1155.transfer.prepare(r,e,a,n)}})())),(0,a.A)(this,"transferBatch",(0,n.f)((()=>{var t=this;return async function(r,e,a,n){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[0];return t.erc1155.transferBatch.prepare(r,e,a,n,s)}})())),(0,a.A)(this,"setApprovalForAll",(0,n.f)((async(t,r)=>this.erc1155.setApprovalForAll.prepare(t,r)))),(0,a.A)(this,"airdrop",(0,n.f)((()=>{var t=this;return async function(r,e,a){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0];return t.erc1155.airdrop.prepare(r,e,a,n)}})())),this.contractWrapper=t,this.storage=r,this.erc1155=new s.E(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){return this.erc1155.get(t)}async totalSupply(t){return this.erc1155.totalSupply(t)}async balanceOf(t,r){return this.erc1155.balanceOf(t,r)}async balance(t){return this.erc1155.balance(t)}async isApproved(t,r){return this.erc1155.isApproved(t,r)}}},55121:(t,r,e)=>{e.d(r,{P:()=>p});var a=e(40021),n=e(67033);const s="".concat("https://paper.xyz/api","/").concat("2022-08-12","/platform/thirdweb"),c={[a.aT.Mainnet]:"Ethereum",[a.aT.Goerli]:"Goerli",[a.aT.Polygon]:"Polygon",[a.aT.Mumbai]:"Mumbai",[a.aT.Avalanche]:"Avalanche"};async function i(t,r){const e=function(t){return(0,n.A)(t in c,"chainId not supported by paper: ".concat(t)),c[t]}(r),a=await fetch("".concat(s,"/register-contract?contractAddress=").concat(t,"&chain=").concat(e)),i=await a.json();return(0,n.A)(i.result.id,"Contract is not registered with paper"),i.result.id}const o={expiresInMinutes:15,feeBearer:"BUYER",sendEmailOnSuccess:!0,redirectAfterPayment:!1};class p{constructor(t){this.contractWrapper=t}async getCheckoutId(){return i(this.contractWrapper.address,await this.contractWrapper.getChainID())}async isEnabled(){try{return!!await this.getCheckoutId()}catch(t){return!1}}async createLinkIntent(t){return await async function(t,r){const e=await fetch("".concat(s,"/checkout-link-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contractId:t,...o,...r,metadata:{...r.metadata,via_platform:"thirdweb"},hideNativeMint:!0,hidePaperWallet:!!r.walletAddress,hideExternalWallet:!0,hidePayWithCrypto:!0,usePaperKey:!1})}),a=await e.json();return(0,n.A)(a.checkoutLinkIntentUrl,"Failed to create checkout link intent"),a.checkoutLinkIntentUrl}(await this.getCheckoutId(),t)}}}}]);