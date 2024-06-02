"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[6620],{86620:(t,r,a)=>{a.d(r,{E:()=>F,a:()=>U});var e=a(54705),i=a(22741),n=a(42151),s=a(98523),c=a(83042),o=a(76035),p=a(8111),d=a(40021),h=a(5342),l=a(23605),u=a(31733),m=a(40685),g=a(80447),y=a(77476),W=a(25399),w=a(22535),f=a(86648),T=a(67033),C=a(47058),v=a(17116),M=a(22170);class b{constructor(t){(0,e.A)(this,"featureName",d.cL.name),(0,e.A)(this,"token",(0,m.f)((async t=>m.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burn",args:[t]})))),this.contractWrapper=t}}class A{constructor(t,r,a){(0,e.A)(this,"featureName",d.cM.name),(0,e.A)(this,"to",(0,m.f)((async(t,r,a)=>{const e=await this.conditions.getClaimTransaction(t,r,a);return e.setParse((t=>{const a=this.contractWrapper.parseLogs("TokensClaimed",null===t||void 0===t?void 0:t.logs)[0].args.startTokenId,e=a.add(r),i=[];for(let r=a;r.lt(e);r=r.add(1))i.push({id:r,receipt:t,data:()=>this.erc721.get(r)});return i})),e}))),this.erc721=t,this.contractWrapper=r,this.storage=a;const i=new l.C(this.contractWrapper,d.bh,this.storage);this.conditions=new g.D(this.contractWrapper,i,this.storage)}}class S{constructor(t,r){(0,e.A)(this,"featureName",d.cN.name),(0,e.A)(this,"to",(0,m.f)((async(t,r,a)=>{var e;if(t!==await(null===(e=this.contractWrapper.getSigner())||void 0===e?void 0:e.getAddress()))throw new Error("Zora Drop: Destination address must match connected wallet address");if(null!==a&&void 0!==a&&a.pricePerToken)throw new Error("Zora Drop: Custom pricePerToken is not supported. Price is automatically calculated");const s=(await this.getSaleDetails()).publicSalePrice,c=(o="0.000777",i.parseEther(d.cw.parse(o)));var o;const p=n.gH.from(s).add(c).mul(r),h=m.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"purchase",args:[r],overrides:{value:p}});return h.setParse((t=>{const a=this.contractWrapper.parseLogs("Sale",null===t||void 0===t?void 0:t.logs)[0].args.firstPurchasedTokenId,e=a.add(r),i=[];for(let r=a;r.lt(e);r=r.add(1))i.push({id:r,receipt:t,data:()=>this.erc721.get(r)});return i})),h}))),this.erc721=t,this.contractWrapper=r}async getSaleDetails(){return this.contractWrapper.read("saleDetails",[])}}class k{constructor(t,r){(0,e.A)(this,"featureName",d.cO.name),(0,e.A)(this,"to",(0,m.f)((async(t,r,a)=>{const e=await this.getClaimTransaction(t,r,a);return e.setParse((t=>{const a=this.contractWrapper.parseLogs("TokensClaimed",null===t||void 0===t?void 0:t.logs)[0].args.startTokenId,e=a.add(r),i=[];for(let r=a;r.lt(e);r=r.add(1))i.push({id:r,receipt:t,data:()=>this.erc721.get(r)});return i})),e}))),this.erc721=t,this.contractWrapper=r}async getClaimTransaction(t,r,a){let e={};return a&&a.pricePerToken&&(e=await(0,y.c)(this.contractWrapper,a.pricePerToken,r,a.currencyAddress,a.checkERC20Allowance)),m.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"claim",args:[t,r],overrides:e})}}class E{constructor(t,r,a){(0,e.A)(this,"featureName",d.cP.name),(0,e.A)(this,"lazyMint",(0,m.f)((async(t,r)=>{const a=await this.erc721.nextTokenIdToMint(),e=await(0,u.u)(t,this.storage,a.toNumber(),r),i=(0,u.g)(e);return m.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[e.length,i.endsWith("/")?i:"".concat(i,"/"),s.YW("")],parse:t=>{const r=this.contractWrapper.parseLogs("TokensLazyMinted",null===t||void 0===t?void 0:t.logs),a=r[0].args.startTokenId,e=r[0].args.endTokenId,i=[];for(let n=a;n.lte(e);n=n.add(1))i.push({id:n,receipt:t,data:()=>this.erc721.getTokenMetadata(n)});return i}})}))),(0,e.A)(this,"updateMetadata",(0,m.f)((async(t,r,a)=>{const e=await this.contractWrapper.read("getBaseURICount",[]);if(e.eq(0))throw new Error("No base URI set. Please set a base URI before updating metadata");const i=n.gH.from(t);let s=n.gH.from(0),c=n.gH.from(0),o=0;for(let n=0;n<e.toNumber()&&(o=n,c=await this.contractWrapper.read("getBatchIdAtIndex",[o]),!c.gt(i));n++)s=c;const p=Array.from({length:c.sub(s).toNumber()},((t,r)=>r+s.toNumber())),d=await Promise.all(p.map((t=>this.erc721.getTokenMetadata(t)))),h=[];for(let u=0;u<d.length;u++){const{id:t,uri:a,...e}=d[u];n.gH.from(i).eq(n.gH.from(t))?h.push(r):h.push(e)}const l=await(0,u.u)(h,this.storage,s.toNumber(),a),g=l[0].substring(0,l[0].lastIndexOf("/"));return m.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateBatchBaseURI",args:[o,"".concat(g.endsWith("/")?g:"".concat(g,"/"))]})}))),this.erc721=t,this.contractWrapper=r,this.storage=a,this.revealer=this.detectErc721Revealable()}detectErc721Revealable(){if((0,l.d)(this.contractWrapper,"ERC721Revealable"))return new y.D(this.contractWrapper,this.storage,d.cQ.name,(()=>this.erc721.nextTokenIdToMint()))}}class I{constructor(t){(0,e.A)(this,"featureName",d.cR.name),(0,e.A)(this,"cancel",(0,m.f)((async t=>m.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancel",args:[t]})))),(0,e.A)(this,"revoke",(0,m.f)((async t=>m.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"revoke",args:[t]})))),this.contractWrapper=t}}class P{constructor(t,r){(0,e.A)(this,"featureName",d.cS.name),(0,e.A)(this,"update",(0,m.f)((async(t,r)=>{const a=await(0,u.b)(r,this.storage);return m.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setTokenURI",args:[t,a]})}))),this.contractWrapper=t,this.storage=r}}class R{constructor(t,r,a){(0,e.A)(this,"featureName",d.cT.name),(0,e.A)(this,"to",(0,m.f)((async(t,r)=>{const[a,e]=await Promise.all([(0,u.u)(r,this.storage),(0,d.aM)(t)]),i=new W.C(this.contractWrapper),n=a.map((t=>i.encode("mintTo",[e,t])));return m.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[n],parse:t=>{const a=this.contractWrapper.parseLogs("TokensMinted",t.logs);if(0===a.length||a.length<r.length)throw new Error("TokenMinted event not found, minting failed");return a.map((r=>{const a=r.args.tokenIdMinted;return{id:a,receipt:t,data:()=>this.erc721.get(a)}}))}})}))),this.erc721=t,this.contractWrapper=r,this.storage=a}}class N{constructor(t,r,a){(0,e.A)(this,"featureName",d.cU.name),(0,e.A)(this,"to",(0,m.f)((async(t,r)=>{const[a,e]=await Promise.all([(0,u.b)(r,this.storage),(0,d.aM)(t)]);return m.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintTo",args:[e,a],parse:t=>{const r=this.contractWrapper.parseLogs("Transfer",null===t||void 0===t?void 0:t.logs);if(0===r.length)throw new Error("TransferEvent event not found");const a=r[0].args.tokenId;return{id:a,receipt:t,data:()=>this.erc721.get(a)}}})}))),this.erc721=t,this.contractWrapper=r,this.storage=a,this.batch=this.detectErc721BatchMintable()}async getMintTransaction(t,r){return this.to.prepare(await(0,d.aM)(t),r)}detectErc721BatchMintable(){if((0,l.d)(this.contractWrapper,"ERC721BatchMintable"))return new R(this.erc721,this.contractWrapper,this.storage)}}class L{constructor(t,r){(0,e.A)(this,"featureName",d.cV.name),(0,e.A)(this,"set",(0,m.f)((async t=>{const r=f.B.parse(t);r.description=this.sanitizeJSONString(r.description);const a=[];(0,w.uO)(r.image)?a.push(this.storage.upload(r.image)):"string"===typeof r.image?a.push(Promise.resolve(r.image)):a.push(Promise.resolve(void 0)),(0,w.uO)(r.animation_url)?a.push(this.storage.upload(r.animation_url)):"string"===typeof r.animation_url?a.push(Promise.resolve(r.animation_url)):a.push(Promise.resolve(void 0));const[e,i]=await Promise.all(a);return m.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setSharedMetadata",args:[{name:"".concat(r.name||""),description:r.description||"",imageURI:e||"",animationURI:i||""}]})}))),this.contractWrapper=t,this.storage=r}async get(){const t=await this.contractWrapper.read("sharedMetadata",[]);if(!t.every((t=>""===t)))return{name:t.name,description:t.description,image:t.imageURI,animation_url:t.animationURI}}sanitizeJSONString(t){if(!t)return t;const r=JSON.stringify(t);return r.slice(1,r.length-1)}}class O{constructor(t,r){(0,e.A)(this,"featureName",d.cW.name),this.erc721=t,this.contractWrapper=r}async all(t,r){let a=await this.tokenIds(t);if(r){const t=(null===r||void 0===r?void 0:r.start)||0,e=(null===r||void 0===r?void 0:r.count)||u.D;a=a.slice(t,t+e)}return await Promise.all(a.map((t=>this.erc721.get(t.toString()))))}async tokenIds(t){const r=await(0,d.aM)(t||await this.contractWrapper.getSignerAddress()),a=await this.contractWrapper.read("balanceOf",[r]),e=Array.from(Array(a.toNumber()).keys());return await Promise.all(e.map((t=>this.contractWrapper.read("tokenOfOwnerByIndex",[r,t]))))}}class B{constructor(t,r){(0,e.A)(this,"featureName",d.cX.name),this.erc721=t,this.contractWrapper=r}async all(t,r){let a=await this.tokenIds(t);if(r){const t=(null===r||void 0===r?void 0:r.start)||0,e=(null===r||void 0===r?void 0:r.count)||u.D;a=a.slice(t,t+e)}return await Promise.all(a.map((t=>this.erc721.get(t.toString()))))}async tokenIds(t){const r=await(0,d.aM)(t||await this.contractWrapper.getSignerAddress());return await this.contractWrapper.read("tokensOfOwner",[r])}}class D{constructor(t,r){(0,e.A)(this,"featureName",d.cY.name),this.erc721=t,this.contractWrapper=r,this.owned=this.detectErc721Owned()}async all(t){let r=n.gH.from(0);(0,l.h)("startTokenId",this.contractWrapper)&&(r=await this.contractWrapper.read("startTokenId",[]));const a=n.gH.from((null===t||void 0===t?void 0:t.start)||0).add(r).toNumber(),e=n.gH.from((null===t||void 0===t?void 0:t.count)||u.D).toNumber(),i=await this.erc721.nextTokenIdToMint(),s=Math.min(i.add(r).toNumber(),a+e);return await Promise.all([...Array(s-a).keys()].map((t=>this.erc721.get((a+t).toString()))))}async allOwners(t){let r,a=n.gH.from(0);(0,l.h)("startTokenId",this.contractWrapper)&&(a=await this.contractWrapper.read("startTokenId",[]));try{r=await this.erc721.totalClaimedSupply()}catch(s){r=await this.totalCount()}r=r.add(a);let e=[...new Array(r.toNumber()).keys()];if(t){const r=(null===t||void 0===t?void 0:t.start)||0,a=(null===t||void 0===t?void 0:t.count)||u.D;e=e.slice(r,r+a)}const i=await Promise.all(e.map((t=>this.erc721.ownerOf(t).catch((()=>c.L)))));return e.map((t=>({tokenId:t,owner:i[t]}))).filter((t=>t.owner!==c.L))}async totalCount(){return await this.erc721.nextTokenIdToMint()}async totalCirculatingSupply(){return await this.contractWrapper.read("totalSupply",[])}detectErc721Owned(){return(0,l.d)(this.contractWrapper,"ERC721Enumerable")?new O(this.erc721,this.contractWrapper):(0,l.d)(this.contractWrapper,"ERC721AQueryable")?new B(this.erc721,this.contractWrapper):void 0}}const q=(()=>M.B.extend({tierPriority:v.z.array(v.z.string()),royaltyRecipient:d.ba.default(c.L),royaltyBps:d.cC.default(0),quantity:d.b6.default(1)}))(),x=[{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"},{name:"data",type:"bytes"}];class z{constructor(t,r,a){(0,e.A)(this,"featureName",d.cZ.name),(0,e.A)(this,"createBatchWithTier",(0,m.f)((async(t,r,a)=>{const e=await this.erc721.nextTokenIdToMint(),i=await(0,u.u)(t,this.storage,e.toNumber(),a),n=(0,u.g)(i);return m.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[i.length,n.endsWith("/")?n:"".concat(n,"/"),r,s.YW("")],parse:t=>{const r=this.contractWrapper.parseLogs("TokensLazyMinted",null===t||void 0===t?void 0:t.logs),a=r[0].args[1],e=r[0].args[2],i=[];for(let n=a;n.lte(e);n=n.add(1))i.push({id:n,receipt:t,data:()=>this.erc721.getTokenMetadata(n)});return i}})}))),(0,e.A)(this,"createDelayedRevealBatchWithTier",(0,m.f)((async(t,r,a,e,i)=>{if(!a)throw new Error("Password is required");const n=await this.storage.uploadBatch([f.C.parse(t)],{rewriteFileNames:{fileStartNumber:0}}),c=(0,u.g)(n),d=await this.erc721.nextTokenIdToMint(),h=await this.storage.uploadBatch(r.map((t=>f.C.parse(t))),{onProgress:null===i||void 0===i?void 0:i.onProgress,rewriteFileNames:{fileStartNumber:d.toNumber()}}),l=(0,u.g)(h),g=await this.contractWrapper.read("getBaseURICount",[]),y=await this.contractWrapper.getChainID(),W=o.keccak256(["string","uint256","uint256","address"],[a,y,g,this.contractWrapper.address]),w=await this.contractWrapper.read("encryptDecrypt",[s.YW(l),W]),T=o.keccak256(["bytes","bytes","uint256"],[s.YW(l),W,y]),C=p.D.encode(["bytes","bytes32"],[w,T]);return m.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[h.length,c.endsWith("/")?c:"".concat(c,"/"),e,C],parse:t=>{const r=this.contractWrapper.parseLogs("TokensLazyMinted",null===t||void 0===t?void 0:t.logs),a=r[0].args[1],e=r[0].args[2],i=[];for(let n=a;n.lte(e);n=n.add(1))i.push({id:n,receipt:t,data:()=>this.erc721.getTokenMetadata(n)});return i}})}))),(0,e.A)(this,"reveal",(0,m.f)((async(t,r)=>{if(!r)throw new Error("Password is required");const a=await this.contractWrapper.getChainID(),e=o.keccak256(["string","uint256","uint256","address"],[r,a,t,this.contractWrapper.address]);try{const r=await this.contractWrapper.callStatic().reveal(t,e);if(!r.includes("://")||!r.endsWith("/"))throw new Error("invalid password")}catch(i){throw new Error("invalid password")}return m.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"reveal",args:[t,e]})}))),this.erc721=t,this.contractWrapper=r,this.storage=a}async getMetadataInTier(t){const r=(await this.contractWrapper.read("getMetadataForAllTiers",[])).find((r=>r.tier===t));if(!r)throw new Error("Tier not found in contract.");return await Promise.all(r.ranges.map(((t,a)=>{const e=[],i=r.baseURIs[a];for(let r=t.startIdInclusive.toNumber();r<t.endIdNonInclusive.toNumber();r++){const t=i.endsWith("/")?"".concat(i).concat(r):"".concat(i,"/").concat(r),a=this.storage.downloadJSON(t);e.push(a)}return e})).flat())}async getTokensInTier(t){const r=await this.contractWrapper.read("getTokensInTierLen",[]);if(r.eq(0))return[];const a=await this.contractWrapper.read("getTokensInTier",[t,0,r]);return await Promise.all(a.map((t=>{const r=[];for(let a=t.startIdInclusive.toNumber();a<t.endIdNonInclusive.toNumber();a++)r.push(this.erc721.get(a));return r})).flat())}async generate(t){const[r]=await this.generateBatch([t]);return r}async generateBatch(t){const r=await Promise.all(t.map((t=>q.parseAsync(t)))),a=await this.contractWrapper.getChainID(),e=this.contractWrapper.getSigner();return(0,T.A)(e,"No signer available"),await Promise.all(r.map((async t=>({payload:t,signature:(await this.contractWrapper.signTypedData(e,{name:"SignatureAction",version:"1",chainId:a,verifyingContract:this.contractWrapper.address},{GenericRequest:x},await this.mapPayloadToContractStruct(t))).toString()}))))}async verify(t){const r=await this.mapPayloadToContractStruct(t.payload);return(await this.contractWrapper.read("verify",[r,t.signature]))[0]}async claimWithSignature(t){const r=await this.mapPayloadToContractStruct(t.payload),a=await(0,C.n)(this.contractWrapper.getProvider(),t.payload.price,t.payload.currencyAddress),e=await this.contractWrapper.getCallOverrides();await(0,f.s)(this.contractWrapper,a,t.payload.currencyAddress,e);const i=await this.contractWrapper.sendTransaction("claimWithSignature",[r,t.signature],e),n=this.contractWrapper.parseLogs("TokensClaimed",null===i||void 0===i?void 0:i.logs),s=n[0].args.startTokenId,c=s.add(n[0].args.quantityClaimed),o=[];for(let p=s;p.lt(c);p=p.add(1))o.push({id:p,receipt:i,data:()=>this.erc721.get(p)});return o}async mapPayloadToContractStruct(t){const r=await(0,C.n)(this.contractWrapper.getProvider(),t.price,t.currencyAddress),a=p.D.encode(["string[]","address","address","uint256","address","uint256","uint256","address"],[t.tierPriority,t.to,t.royaltyRecipient,t.royaltyBps,t.primarySaleRecipient,t.quantity,r,t.currencyAddress]);return{uid:t.uid,validityStartTimestamp:t.mintStartTime,validityEndTimestamp:t.mintEndTime,data:a}}}class U{constructor(t,r){(0,e.A)(this,"featureName",d.c_.name),(0,e.A)(this,"mint",(0,m.f)((async t=>{const r=t.payload,a=t.signature,e=await this.contractWrapper.getCallOverrides(),i=t=>{const r=this.contractWrapper.parseLogs("TokensMintedWithSignature",t.logs);if(0===r.length)throw new Error("No MintWithSignature event found");return{id:r[0].args.tokenIdMinted,receipt:t}};if(await this.isLegacyNFTContract()){const t=await this.mapLegacyPayloadToContractStruct(r),n=t.price;return await(0,f.s)(this.contractWrapper,n,r.currencyAddress,e),m.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintWithSignature",args:[t,a],overrides:e,parse:i})}{const t=await this.mapPayloadToContractStruct(r),n=t.pricePerToken.mul(t.quantity);return await(0,f.s)(this.contractWrapper,n,r.currencyAddress,e),m.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintWithSignature",args:[t,a],overrides:e,parse:i})}}))),(0,e.A)(this,"mintBatch",(0,m.f)((async t=>{const r=await this.isLegacyNFTContract(),a=(await Promise.all(t.map((t=>r?this.mapLegacyPayloadToContractStruct(t.payload):this.mapPayloadToContractStruct(t.payload))))).map(((r,a)=>{const e=t[a],i=e.signature,s=e.payload.price;if(n.gH.from(s).gt(0))throw new Error("Can only batch free mints. For mints with a price, use regular mint()");return{message:r,signature:i}})),e=new W.C(this.contractWrapper),i=a.map((t=>e.encode("mintWithSignature",[t.message,t.signature])));if((0,l.h)("multicall",this.contractWrapper))return m.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[i],parse:t=>{const r=this.contractWrapper.parseLogs("TokensMintedWithSignature",t.logs);if(0===r.length)throw new Error("No MintWithSignature event found");return r.map((r=>({id:r.args.tokenIdMinted,receipt:t})))}});throw new Error("Multicall not available on this contract!")}))),this.contractWrapper=t,this.storage=r}async verify(t){const r=await this.isLegacyNFTContract(),a=t.payload,e=t.signature;let i,n;return r?(i=await this.mapLegacyPayloadToContractStruct(a),n=await this.contractWrapper.read("verify",[i,e])):(i=await this.mapPayloadToContractStruct(a),n=await this.contractWrapper.read("verify",[i,e])),n[0]}async generate(t){return(await this.generateBatch([t]))[0]}async generateBatch(t){const r=await this.isLegacyNFTContract(),a=await Promise.all(t.map((t=>M.t.parseAsync(t)))),e=a.map((t=>t.metadata)),i=await(0,u.u)(e,this.storage),n=await this.contractWrapper.getChainID(),s=this.contractWrapper.getSigner();return(0,T.A)(s,"No signer available"),await Promise.all(a.map((async(t,a)=>{const e=i[a],c=await M.u.parseAsync({...t,uri:e});let o;return o=r?await this.contractWrapper.signTypedData(s,{name:"TokenERC721",version:"1",chainId:n,verifyingContract:this.contractWrapper.address},{MintRequest:M.v},await this.mapLegacyPayloadToContractStruct(c)):await this.contractWrapper.signTypedData(s,{name:"SignatureMintERC721",version:"1",chainId:n,verifyingContract:await this.contractWrapper.address},{MintRequest:M.x},await this.mapPayloadToContractStruct(c)),{payload:c,signature:o.toString()}})))}async mapPayloadToContractStruct(t){const r=await(0,C.n)(this.contractWrapper.getProvider(),t.price,t.currencyAddress);return{to:t.to,royaltyRecipient:t.royaltyRecipient,royaltyBps:t.royaltyBps,primarySaleRecipient:t.primarySaleRecipient,uri:t.uri,quantity:t.quantity,pricePerToken:r,currency:t.currencyAddress,validityStartTimestamp:t.mintStartTime,validityEndTimestamp:t.mintEndTime,uid:t.uid}}async mapLegacyPayloadToContractStruct(t){const r=await(0,C.n)(this.contractWrapper.getProvider(),t.price,t.currencyAddress);return{to:t.to,price:r,uri:t.uri,currency:t.currencyAddress,validityEndTimestamp:t.mintEndTime,validityStartTimestamp:t.mintStartTime,uid:t.uid,royaltyRecipient:t.royaltyRecipient,royaltyBps:t.royaltyBps,primarySaleRecipient:t.primarySaleRecipient}}async isLegacyNFTContract(){return(0,l.d)(this.contractWrapper,"ERC721SignatureMintV1")}}class F{get chainId(){return this._chainId}constructor(t,r,a){(0,e.A)(this,"featureName",d.c$.name),(0,e.A)(this,"transfer",(0,m.f)((async(t,r)=>{const[a,e]=await Promise.all([this.contractWrapper.getSignerAddress(),(0,d.aM)(t)]);return m.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"transferFrom(address,address,uint256)",args:[a,e,r]})}))),(0,e.A)(this,"transferFrom",(0,m.f)((async(t,r,a)=>{const[e,i]=await Promise.all([(0,d.aM)(t),(0,d.aM)(r)]);return m.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"transferFrom(address,address,uint256)",args:[e,i,a]})}))),(0,e.A)(this,"setApprovalForAll",(0,m.f)((async(t,r)=>m.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setApprovalForAll",args:[await(0,d.aM)(t),r]})))),(0,e.A)(this,"setApprovalForToken",(0,m.f)((async(t,r)=>m.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await(0,d.aM)(t),r]})))),(0,e.A)(this,"mint",(0,m.f)((async t=>this.mintTo.prepare(await this.contractWrapper.getSignerAddress(),t)))),(0,e.A)(this,"mintTo",(0,m.f)((async(t,r)=>(0,h.a)(this.mintable,d.cU).to.prepare(t,r)))),(0,e.A)(this,"mintBatch",(0,m.f)((async t=>this.mintBatchTo.prepare(await this.contractWrapper.getSignerAddress(),t)))),(0,e.A)(this,"mintBatchTo",(0,m.f)((async(t,r)=>{var a;return(0,h.a)(null===(a=this.mintable)||void 0===a?void 0:a.batch,d.cT).to.prepare(t,r)}))),(0,e.A)(this,"burn",(0,m.f)((async t=>(0,h.a)(this.burnable,d.cL).token.prepare(t)))),(0,e.A)(this,"cancel",(0,m.f)((async t=>(0,h.a)(this.loyaltyCard,d.cR).cancel.prepare(t)))),(0,e.A)(this,"revoke",(0,m.f)((async t=>(0,h.a)(this.loyaltyCard,d.cR).revoke.prepare(t)))),(0,e.A)(this,"lazyMint",(0,m.f)((async(t,r)=>(0,h.a)(this.lazyMintable,d.cP).lazyMint.prepare(t,r)))),(0,e.A)(this,"updateMetadata",(0,m.f)((async(t,r)=>this.lazyMintable?this.lazyMintable.updateMetadata.prepare(t,r):(0,h.a)(this.updatableMetadata,d.cS).update.prepare(t,r)))),(0,e.A)(this,"claim",(0,m.f)((async(t,r)=>this.claimTo.prepare(await this.contractWrapper.getSignerAddress(),t,r)))),(0,e.A)(this,"claimTo",(0,m.f)((async(t,r,a)=>{const e=this.claimWithConditions,i=this.claimCustom,n=this.claimZora;if(e)return e.to.prepare(t,r,a);if(i)return i.to.prepare(t,r,a);if(n)return n.to.prepare(t,r,a);throw new d.x(d.cO)}))),this.contractWrapper=t,this.storage=r,this.query=this.detectErc721Enumerable(),this.mintable=this.detectErc721Mintable(),this.burnable=this.detectErc721Burnable(),this.lazyMintable=this.detectErc721LazyMintable(),this.tieredDropable=this.detectErc721TieredDrop(),this.signatureMintable=this.detectErc721SignatureMintable(),this.claimWithConditions=this.detectErc721ClaimableWithConditions(),this.claimCustom=this.detectErc721Claimable(),this.claimZora=this.detectErc721ClaimableZora(),this.erc721SharedMetadata=this.detectErc721SharedMetadata(),this.loyaltyCard=this.detectErc721LoyaltyCard(),this.updatableMetadata=this.detectErc721UpdatableMetadata(),this._chainId=a}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){const[r,a]=await Promise.all([this.ownerOf(t).catch((()=>c.L)),this.getTokenMetadata(t).catch((()=>({id:t.toString(),uri:"",...u.F})))]);return{owner:r,metadata:a,type:"ERC721",supply:"1"}}async ownerOf(t){return await this.contractWrapper.read("ownerOf",[t])}async balanceOf(t){return await this.contractWrapper.read("balanceOf",[await(0,d.aM)(t)])}async balance(){return await this.balanceOf(await this.contractWrapper.getSignerAddress())}async isApproved(t,r){const[a,e]=await Promise.all([(0,d.aM)(t),(0,d.aM)(r)]);return await this.contractWrapper.read("isApprovedForAll",[a,e])}async getAll(t){return(0,h.a)(this.query,d.cY).all(t)}async getAllOwners(t){return(0,h.a)(this.query,d.cY).allOwners(t)}async totalCount(){return this.nextTokenIdToMint()}async totalCirculatingSupply(){return(0,h.a)(this.query,d.cY).totalCirculatingSupply()}async getOwned(t,r){var a;if(t&&(t=await(0,d.aM)(t)),null!==(a=this.query)&&void 0!==a&&a.owned)return this.query.owned.all(t,r);{const[a,e]=await Promise.all([t||this.contractWrapper.getSignerAddress(),this.getAllOwners(r)]),i=(e||[]).filter((t=>{var r;return(null===a||void 0===a?void 0:a.toLowerCase())===(null===(r=t.owner)||void 0===r?void 0:r.toLowerCase())}));return await Promise.all(i.map((async t=>this.get(t.tokenId))))}}async getOwnedTokenIds(t){var r;if(t&&(t=await(0,d.aM)(t)),null!==(r=this.query)&&void 0!==r&&r.owned)return this.query.owned.tokenIds(t);{const[r,a]=await Promise.all([t||this.contractWrapper.getSignerAddress(),this.getAllOwners()]);return(a||[]).filter((t=>{var a;return(null===r||void 0===r?void 0:r.toLowerCase())===(null===(a=t.owner)||void 0===a?void 0:a.toLowerCase())})).map((t=>n.gH.from(t.tokenId)))}}async getMintTransaction(t,r){return this.mintTo.prepare(t,r)}async update(t,r){return this.updateMetadata(t,r)}async getClaimTransaction(t,r,a){const e=this.claimWithConditions,i=this.claimCustom;if(e)return e.conditions.getClaimTransaction(t,r,a);if(i)return i.getClaimTransaction(t,r,a);throw new d.x(d.cO)}async totalClaimedSupply(){const t=this.contractWrapper;if((0,l.h)("totalMinted",t))return this.contractWrapper.read("totalMinted",[]);if((0,l.h)("nextTokenIdToClaim",t))return this.contractWrapper.read("nextTokenIdToClaim",[]);throw new Error("No function found on contract to get total claimed supply")}async totalUnclaimedSupply(){const[t,r]=await Promise.all([this.nextTokenIdToMint(),this.totalClaimedSupply()]);return t.sub(r)}get claimConditions(){return(0,h.a)(this.claimWithConditions,d.cM).conditions}get tieredDrop(){return(0,h.a)(this.tieredDropable,d.cZ)}get signature(){return(0,h.a)(this.signatureMintable,d.c_)}get revealer(){var t;return(0,h.a)(null===(t=this.lazyMintable)||void 0===t?void 0:t.revealer,d.cQ)}get sharedMetadata(){return(0,h.a)(this.erc721SharedMetadata,d.cV)}async getTokenMetadata(t){const r=await this.contractWrapper.read("tokenURI",[t]);if(!r)throw new d.n;return(0,u.f)(t,r,this.storage)}async nextTokenIdToMint(){if((0,l.h)("nextTokenIdToMint",this.contractWrapper)){let t=await this.contractWrapper.read("nextTokenIdToMint",[]);return(0,l.h)("startTokenId",this.contractWrapper)&&(t=t.sub(await this.contractWrapper.read("startTokenId",[]))),t}if((0,l.h)("totalSupply",this.contractWrapper))return await this.contractWrapper.read("totalSupply",[]);throw new Error("Contract requires either `nextTokenIdToMint` or `totalSupply` function available to determine the next token ID to mint")}detectErc721Enumerable(){if((0,l.d)(this.contractWrapper,"ERC721Supply")||(0,l.h)("nextTokenIdToMint",this.contractWrapper))return new D(this,this.contractWrapper)}detectErc721Mintable(){if((0,l.d)(this.contractWrapper,"ERC721Mintable"))return new N(this,this.contractWrapper,this.storage)}detectErc721Burnable(){if((0,l.d)(this.contractWrapper,"ERC721Burnable"))return new b(this.contractWrapper)}detectErc721LazyMintable(){if((0,l.d)(this.contractWrapper,"ERC721LazyMintable"))return new E(this,this.contractWrapper,this.storage)}detectErc721TieredDrop(){if((0,l.d)(this.contractWrapper,"ERC721TieredDrop"))return new z(this,this.contractWrapper,this.storage)}detectErc721SignatureMintable(){if((0,l.d)(this.contractWrapper,"ERC721SignatureMintV1")||(0,l.d)(this.contractWrapper,"ERC721SignatureMintV2"))return new U(this.contractWrapper,this.storage)}detectErc721ClaimableWithConditions(){if((0,l.d)(this.contractWrapper,"ERC721ClaimConditionsV1")||(0,l.d)(this.contractWrapper,"ERC721ClaimConditionsV2")||(0,l.d)(this.contractWrapper,"ERC721ClaimPhasesV1")||(0,l.d)(this.contractWrapper,"ERC721ClaimPhasesV2"))return new A(this,this.contractWrapper,this.storage)}detectErc721Claimable(){if((0,l.d)(this.contractWrapper,"ERC721ClaimCustom"))return new k(this,this.contractWrapper)}detectErc721ClaimableZora(){if((0,l.d)(this.contractWrapper,"ERC721ClaimZora"))return new S(this,this.contractWrapper)}detectErc721SharedMetadata(){if((0,l.d)(this.contractWrapper,"ERC721SharedMetadata"))return new L(this.contractWrapper,this.storage)}detectErc721LoyaltyCard(){if((0,l.d)(this.contractWrapper,"ERC721LoyaltyCard"))return new I(this.contractWrapper)}detectErc721UpdatableMetadata(){if((0,l.d)(this.contractWrapper,"ERC721UpdatableMetadata"))return new P(this.contractWrapper,this.storage)}}}}]);