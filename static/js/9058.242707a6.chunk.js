"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[9058],{92160:(t,r,e)=>{e.d(r,{C:()=>a});class a{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},45329:(t,r,e)=>{e.d(r,{C:()=>s});var a=e(54705),n=e(40685),c=e(40021);class s{constructor(t){(0,a.A)(this,"featureName",c.dr.name),(0,a.A)(this,"set",(0,n.f)((async t=>{const r=await c.bH.parseAsync(t);return n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[r.platform_fee_recipient,r.platform_fee_basis_points]})}))),this.contractWrapper=t}async get(){const[t,r]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return c.bH.parseAsync({platform_fee_recipient:t,platform_fee_basis_points:r})}}},39081:(t,r,e)=>{e.d(r,{C:()=>s});var a=e(54705),n=e(40685),c=e(40021);class s{constructor(t){(0,a.A)(this,"featureName",c.d4.name),(0,a.A)(this,"setRecipient",(0,n.f)((async t=>n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPrimarySaleRecipient",args:[t]})))),this.contractWrapper=t}async getRecipient(){return await this.contractWrapper.read("primarySaleRecipient",[])}}},2561:(t,r,e)=>{e.d(r,{S:()=>i});var a=e(54705),n=e(40021),c=e(40685),s=e(86620);class i{get chainId(){return this._chainId}constructor(t,r,e){(0,a.A)(this,"transfer",(0,c.f)((async(t,r)=>this.erc721.transfer.prepare(t,r)))),(0,a.A)(this,"setApprovalForAll",(0,c.f)((async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r)))),(0,a.A)(this,"setApprovalForToken",(0,c.f)((async(t,r)=>c.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await(0,n.aM)(t),r]})))),this.contractWrapper=t,this.storage=r,this.erc721=new s.E(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc721.getAll(t)}async getOwned(t,r){return t&&(t=await(0,n.aM)(t)),this.erc721.getOwned(t,r)}async getOwnedTokenIds(t){return t&&(t=await(0,n.aM)(t)),this.erc721.getOwnedTokenIds(t)}async totalSupply(){return this.erc721.totalCirculatingSupply()}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}}},29058:(t,r,e)=>{e.r(r),e.d(r,{NFTDrop:()=>W});var a=e(54705),n=e(42151),c=e(83042),s=e(31733),i=e(40021),o=e(40685),p=e(23605),h=e(25399),l=e(92160),d=e(77476),u=e(45329),m=e(98802),y=e(39081),f=e(80447),g=e(2561),w=e(55121);e(2914),e(70689),e(61718),e(45355);class W extends g.S{constructor(t,r,e){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new i.cs(t,r,c,n,e),e,s),(0,a.A)(this,"createBatch",(0,o.f)((async(t,r)=>this.erc721.lazyMint.prepare(t,r)))),(0,a.A)(this,"claimTo",(0,o.f)((()=>{var t=this;return async function(r,e){let a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.erc721.claimTo.prepare(r,e,{checkERC20Allowance:a})}})())),(0,a.A)(this,"claim",(0,o.f)((()=>{var t=this;return async function(r){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.claimTo.prepare(await t.contractWrapper.getSignerAddress(),r,e)}})())),(0,a.A)(this,"burn",(0,o.f)((async t=>this.erc721.burn.prepare(t)))),(0,a.A)(this,"transfer",(0,o.f)((async(t,r)=>this.erc721.transfer.prepare(t,r)))),(0,a.A)(this,"setApprovalForAll",(0,o.f)((async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r)))),(0,a.A)(this,"setApprovalForToken",(0,o.f)((async(t,r)=>o.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[t,r]})))),this.abi=i.bk.parse(c||[]),this.metadata=new p.C(this.contractWrapper,i.bT,this.storage),this.app=new p.b(this.contractWrapper,this.metadata,this.storage),this.roles=new m.C(this.contractWrapper,W.contractRoles),this.royalties=new d.C(this.contractWrapper,this.metadata),this.sales=new y.C(this.contractWrapper),this.claimConditions=new f.D(this.contractWrapper,this.metadata,this.storage),this.encoder=new h.C(this.contractWrapper),this.estimator=new p.G(this.contractWrapper),this.events=new p.a(this.contractWrapper),this.platformFees=new u.C(this.contractWrapper),this.revealer=new d.D(this.contractWrapper,this.storage,i.cQ.name,(()=>this.erc721.nextTokenIdToMint())),this.interceptor=new l.C(this.contractWrapper),this.owner=new d.a(this.contractWrapper),this.checkout=new w.P(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async totalSupply(){const[t,r]=await Promise.all([this.totalClaimedSupply(),this.totalUnclaimedSupply()]);return t.add(r)}async getAllClaimed(t){const r=n.gH.from((null===t||void 0===t?void 0:t.start)||0).toNumber(),e=n.gH.from((null===t||void 0===t?void 0:t.count)||s.D).toNumber(),a=Math.min((await this.contractWrapper.read("nextTokenIdToClaim",[])).toNumber(),r+e);return await Promise.all(Array.from(Array(a).keys()).map((t=>this.get(t.toString()))))}async getAllUnclaimed(t){const r=n.gH.from((null===t||void 0===t?void 0:t.start)||0).toNumber(),e=n.gH.from((null===t||void 0===t?void 0:t.count)||s.D).toNumber(),a=n.gH.from(Math.max((await this.contractWrapper.read("nextTokenIdToClaim",[])).toNumber(),r)),c=n.gH.from(Math.min((await this.contractWrapper.read("nextTokenIdToMint",[])).toNumber(),a.toNumber()+e));return await Promise.all(Array.from(Array(c.sub(a).toNumber()).keys()).map((t=>this.erc721.getTokenMetadata(a.add(t).toString()))))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[(0,i.H)("transfer"),c.L])}async getClaimTransaction(t,r){let e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.erc721.getClaimTransaction(t,r,{checkERC20Allowance:e})}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}async prepare(t,r,e){return o.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}(0,a.A)(W,"contractRoles",i.dD)},55121:(t,r,e)=>{e.d(r,{P:()=>p});var a=e(40021),n=e(67033);const c="".concat("https://paper.xyz/api","/").concat("2022-08-12","/platform/thirdweb"),s={[a.aT.Mainnet]:"Ethereum",[a.aT.Goerli]:"Goerli",[a.aT.Polygon]:"Polygon",[a.aT.Mumbai]:"Mumbai",[a.aT.Avalanche]:"Avalanche"};async function i(t,r){const e=function(t){return(0,n.A)(t in s,"chainId not supported by paper: ".concat(t)),s[t]}(r),a=await fetch("".concat(c,"/register-contract?contractAddress=").concat(t,"&chain=").concat(e)),i=await a.json();return(0,n.A)(i.result.id,"Contract is not registered with paper"),i.result.id}const o={expiresInMinutes:15,feeBearer:"BUYER",sendEmailOnSuccess:!0,redirectAfterPayment:!1};class p{constructor(t){this.contractWrapper=t}async getCheckoutId(){return i(this.contractWrapper.address,await this.contractWrapper.getChainID())}async isEnabled(){try{return!!await this.getCheckoutId()}catch(t){return!1}}async createLinkIntent(t){return await async function(t,r){const e=await fetch("".concat(c,"/checkout-link-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contractId:t,...o,...r,metadata:{...r.metadata,via_platform:"thirdweb"},hideNativeMint:!0,hidePaperWallet:!!r.walletAddress,hideExternalWallet:!0,hidePayWithCrypto:!0,usePaperKey:!1})}),a=await e.json();return(0,n.A)(a.checkoutLinkIntentUrl,"Failed to create checkout link intent"),a.checkoutLinkIntentUrl}(await this.getCheckoutId(),t)}}}}]);