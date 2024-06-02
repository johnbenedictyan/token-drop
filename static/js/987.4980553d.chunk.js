"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[987],{92160:(t,r,a)=>{a.d(r,{C:()=>e});class e{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},45329:(t,r,a)=>{a.d(r,{C:()=>n});var e=a(54705),s=a(40685),c=a(40021);class n{constructor(t){(0,e.A)(this,"featureName",c.dr.name),(0,e.A)(this,"set",(0,s.f)((async t=>{const r=await c.bH.parseAsync(t);return s.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[r.platform_fee_recipient,r.platform_fee_basis_points]})}))),this.contractWrapper=t}async get(){const[t,r]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return c.bH.parseAsync({platform_fee_recipient:t,platform_fee_basis_points:r})}}},39081:(t,r,a)=>{a.d(r,{C:()=>n});var e=a(54705),s=a(40685),c=a(40021);class n{constructor(t){(0,e.A)(this,"featureName",c.d4.name),(0,e.A)(this,"setRecipient",(0,s.f)((async t=>s.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPrimarySaleRecipient",args:[t]})))),this.contractWrapper=t}async getRecipient(){return await this.contractWrapper.read("primarySaleRecipient",[])}}},29919:(t,r,a)=>{a.d(r,{S:()=>n});var e=a(54705),s=a(40685),c=a(2583);class n{get chainId(){return this._chainId}constructor(t,r,a){(0,e.A)(this,"transfer",(0,s.f)((async(t,r)=>this.erc20.transfer.prepare(t,r)))),(0,e.A)(this,"transferFrom",(0,s.f)((async(t,r,a)=>this.erc20.transferFrom.prepare(t,r,a)))),(0,e.A)(this,"setAllowance",(0,s.f)((async(t,r)=>this.erc20.setAllowance.prepare(t,r)))),(0,e.A)(this,"transferBatch",(0,s.f)((async t=>this.erc20.transferBatch.prepare(t)))),this.contractWrapper=t,this.storage=r,this.erc20=new c.E(this.contractWrapper,this.storage,a),this._chainId=a}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(){return this.erc20.get()}async balance(){return await this.erc20.balance()}async balanceOf(t){return this.erc20.balanceOf(t)}async totalSupply(){return await this.erc20.totalSupply()}async allowance(t){return await this.erc20.allowance(t)}async allowanceOf(t,r){return await this.erc20.allowanceOf(t,r)}}},20987:(t,r,a)=>{a.r(r),a.d(r,{TokenDrop:()=>g});var e=a(54705),s=a(83042),c=a(40021),n=a(40685),i=a(23605),p=a(25399),o=a(92160),h=a(45329),l=a(98802),d=a(39081),f=a(80447),u=a(29919);a(2914),a(70689),a(61718),a(45355);class g extends u.S{constructor(t,r,a){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=arguments.length>4?arguments[4]:void 0,w=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new c.cs(t,r,u,s,a),a,w),(0,e.A)(this,"claim",(0,n.f)((()=>{var t=this;return async function(r){let a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.claimTo.prepare(await t.contractWrapper.getSignerAddress(),r,a)}})())),(0,e.A)(this,"claimTo",(0,n.f)((()=>{var t=this;return async function(r,a){let e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.erc20.claimTo.prepare(r,a,{checkERC20Allowance:e})}})())),(0,e.A)(this,"delegateTo",(0,n.f)((async t=>n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await(0,c.aM)(t)]})))),(0,e.A)(this,"burnTokens",(0,n.f)((async t=>this.erc20.burn.prepare(t)))),(0,e.A)(this,"burnFrom",(0,n.f)((async(t,r)=>this.erc20.burnFrom.prepare(t,r)))),this.abi=c.bk.parse(u||[]),this.metadata=new i.C(this.contractWrapper,c.dL,this.storage),this.app=new i.b(this.contractWrapper,this.metadata,this.storage),this.roles=new l.C(this.contractWrapper,g.contractRoles),this.encoder=new p.C(this.contractWrapper),this.estimator=new i.G(this.contractWrapper),this.events=new i.a(this.contractWrapper),this.sales=new d.C(this.contractWrapper),this.platformFees=new h.C(this.contractWrapper),this.interceptor=new o.C(this.contractWrapper),this.claimConditions=new f.D(this.contractWrapper,this.metadata,this.storage)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.read("getVotes",[await(0,c.aM)(t)]))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.read("delegates",[await(0,c.aM)(t)])}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[(0,c.H)("transfer"),s.L])}async prepare(t,r,a){return n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}}(0,e.A)(g,"contractRoles",c.dK)}}]);