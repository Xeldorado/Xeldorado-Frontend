(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9303],{26028:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shoutout",function(){return r(90919)}])},90919:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var o=r(85893),l=r(67294),n=r(41120),s=r(57821),a=r(41423),i=r(79895),u=r(9008),c=r.n(u),d=r(11163),v=r(52135),h=r(17563),f=r(67044);let x=(0,n.Z)({tab:{fontSize:"16px",fontWeight:500}});function p(){var e,t,r,n,u,p;let g;let j=(0,d.useRouter)(),{type:b,platform:y,creator:m}=j.query,w=j.asPath;b||(b=null===(e=h.parseUrl(w))||void 0===e?void 0:null===(t=e.query)||void 0===t?void 0:t.type),y||(y=null===(r=h.parseUrl(w))||void 0===r?void 0:null===(n=r.query)||void 0===n?void 0:n.platform),m||(m=null===(u=h.parseUrl(w))||void 0===u?void 0:null===(p=u.query)||void 0===p?void 0:p.creator);let[Z,_]=(0,l.useState)(""),[k,N]=(0,l.useState)(!1),S=x();(0,l.useEffect)(()=>{!async function(){console.log("AuthService.refresh()"),console.log(await v.Z.refresh()),N(v.Z.validateCurrentUserRefreshToken()&&v.Z.validateCurrentUserAccessToken())}()},[]),(0,l.useEffect)(()=>{_(v.Z.getUsername())},[k]),b||(b="user"),y||(y="0"),m||(m=Z);let[C,T]=l.useState(parseInt(null==y?void 0:y.toString())),E=(e,t)=>{T(t)};return("creator"==b||"user"==b)&&(g=[(0,o.jsx)(f.Z,{type:b,category:"shoutout",platform:"0",creator:null==m?void 0:m.toString()},1),(0,o.jsx)(f.Z,{type:b,category:"shoutout",platform:"1",creator:null==m?void 0:m.toString()},2),(0,o.jsx)(f.Z,{type:b,category:"shoutout",platform:"2",creator:null==m?void 0:m.toString()},3)]),(0,o.jsxs)("div",{children:[(0,o.jsxs)(c(),{children:[(0,o.jsx)("title",{children:"Crezalo: Shoutout Requests"}),(0,o.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,o.jsx)("div",{className:"blueTextBlackBackground",children:k&&("0"==y||"1"==y||"2"==y)?(0,o.jsxs)("div",{style:{backgroundColor:"black",display:"flex",flexDirection:"row",width:"100%"},children:[(0,o.jsx)("div",{children:(0,o.jsxs)(s.Z,{value:C,onChange:E,centered:!0,TabIndicatorProps:{style:{backgroundColor:"#3B82F6"}},className:"nftTabs",orientation:"vertical",children:[(0,o.jsx)(a.Z,{label:"Instagram",className:S.tab}),(0,o.jsx)(a.Z,{label:"Youtube",className:S.tab}),(0,o.jsx)(a.Z,{label:"Twitter",className:S.tab})]})}),(0,o.jsx)("div",{style:{width:"100%"},children:(0,o.jsx)(i.Z,{children:g[C]})})]}):(0,o.jsx)(o.Fragment,{})})]})}}},function(e){e.O(0,[6950,7044,9774,2888,179],function(){return e(e.s=26028)}),_N_E=e.O()}]);