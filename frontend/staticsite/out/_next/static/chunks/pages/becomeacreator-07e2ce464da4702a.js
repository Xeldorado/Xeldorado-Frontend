(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8422],{6236:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/becomeacreator",function(){return a(97073)}])},25797:function(e,t){"use strict";t.Z=["Bank of Baroda","Bank of India","Bank of Maharashtra","Canara Bank","Central Bank of India","Indian Bank","Indian Overseas Bank","Punjab & Sind Bank","Punjab National Bank","State Bank of India","UCO Bank","Union Bank of India","Axis Bank Ltd.","Bandhan Bank Ltd.","CSB Bank Ltd.","City Union Bank Ltd.","DCB Bank Ltd.","Dhanlaxmi Bank Ltd.","Federal Bank Ltd.","HDFC Bank Ltd","ICICI Bank Ltd.","Induslnd Bank Ltd","IDFC First Bank Ltd.","Jammu & Kashmir Bank Ltd.","Karnataka Bank Ltd.","Karur Vysya Bank Ltd.","Kotak Mahindra Bank Ltd","Nainital Bank Ltd.","RBL Bank Ltd.","South Indian Bank Ltd.","Tamilnad Mercantile Bank Ltd.","YES Bank Ltd.","IDBI Bank Ltd.","Au Small Finance Bank Limited","Capital Small Finance Bank Limited","Equitas Small Finance Bank Limited","Suryoday Small Finance Bank Limited","Ujjivan Small Finance Bank Limited","Utkarsh Small Finance Bank Limited","ESAF Small Finance Bank Limited","Fincare Small Finance Bank Limited","Jana Small Finance Bank Limited","North East Small Finance Bank Limited","Shivalik Small Finance Bank Limited"]},97073:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return D}});var n=a(85893),i=a(67294),r=a(41120),l=a(83559),o=a(55006),s=a(72535),d=a(9008),u=a.n(d),c=a(52135),h=a(38196),f=a(50450),p=a(25675),m=a.n(p),x=a(94964),g=a(81760),y=a(42129),b=a(13056),w=a.n(b),v=a(22493),j=a(86554),k=a(9669),L=a.n(k),B=a(76095),C=a(93225),S={src:"/_next/static/media/celebrations.7da48b27.gif",height:400,width:400},N=a(37497),I=a(25797),_=a(33057),z=a(97520);let F=()=>{var e,t,a;let[r,l]=(0,i.useState)(null),[o,s]=(0,i.useState)("NO FILE ADDED"),[d,u]=(0,i.useState)(""),c=(null===(e=(0,z.eI)())||void 0===e?void 0:e.width)<(null===(t=(0,z.eI)())||void 0===t?void 0:t.height),h=async e=>{e.preventDefault();try{if((0,B.z)().Authorization){let t=new FormData;t.append("pancard",r[0]),s("UPLOADING");let a=await L().post(N.uy+"content/creator_info/upload",t,{headers:{"Content-Type":"multipart/form-data",Authorization:(0,B.z)().Authorization}});if(a.data.isSuccessful){let n=await (0,_.Zl)(e.target.aadharnumber.value,e.target.pannumber.value,e.target.bank_name.value,e.target.ifsccode.value,e.target.aacnumber.value);"string"!=typeof n?(s("COMPLETE"),await (0,z.gw)(2e3),window.location.reload()):(s("Failed To Upload Retry!"),u(n))}else s("Failed To Upload Retry!"),u(a.data.errorMsg)}else s("Failed To Upload Retry!"),u("User Not Logged In")}catch(i){s("Failed To Upload Retry!"),u("err.message")}};return(0,n.jsxs)("div",{style:{overflowY:"auto",overflowX:"hidden",maxHeight:"80vh",backgroundColor:"#3b82f6",padding:"5px",borderRadius:"1%"},children:["Failed To Upload Retry!"===o?(0,n.jsxs)("div",{style:{textAlign:"center"},children:[(0,n.jsx)("p",{style:{color:"red"},children:o}),(0,n.jsx)("p",{style:{color:"red"},children:d})]}):(0,n.jsx)(n.Fragment,{}),"COMPLETE"!==o&&"UPLOADING"!==o?(0,n.jsxs)("form",{onSubmit:h,className:"form",children:[(0,n.jsx)("label",{className:"form label",children:"KYC Verification"}),(0,n.jsx)("label",{className:"form label",style:{fontSize:"medium"},children:"Upload Pan Card Image"}),(0,n.jsx)("input",{type:"file",onChange(e){l(e.target.files)},accept:"image/*",required:!0,className:"form inputFile"}),r?(0,n.jsx)("div",{style:{margin:"10px",width:"100%",height:"100%"},children:(0,n.jsx)(m(),{id:"thumb_image",src:(a=r[0],window.URL.createObjectURL(a)),width:"350",height:"220",alt:""})}):(0,n.jsx)(n.Fragment,{}),(0,n.jsxs)("div",{style:{justifyContent:"center",flexDirection:"column",display:"flex"},children:[(0,n.jsx)("label",{children:"Pan Number"}),(0,n.jsx)("input",{className:"mb-4 border-b-2 form inputSingleLineText",type:"text",id:"pannumber",name:"pannumber",minLength:10,maxLength:10,placeholder:"ABCTY1234D",style:{color:"black",resize:"both",width:c?"80vw":"30vw",overflow:"none"},required:!0}),(0,n.jsx)("label",{children:"Aadhar Number"}),(0,n.jsx)("input",{className:"mb-4 border-b-2 form inputSingleLineText",type:"text",id:"aadharnumber",name:"aadharnumber",minLength:12,maxLength:12,placeholder:"000000000000",onChange(e){e.target.value=e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*?)\..*/g,"$1")},style:{color:"black",resize:"both",width:c?"80vw":"30vw",overflow:"none"},required:!0}),(0,n.jsx)("label",{className:"form label",children:"Bank Details"}),(0,n.jsxs)("label",{children:["*You can change banking details in future.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]}),(0,n.jsx)("label",{children:"Bank Name"}),(0,n.jsx)("select",{id:"bank_name",name:"bank_name",className:"mb-4 border-b-2 form inputSingleLineText",style:{color:"black",resize:"both",width:c?"80vw":"30vw",overflow:"none"},required:!0,children:I.Z.map(e=>(0,n.jsx)("option",{value:e,children:e}))}),(0,n.jsx)("label",{children:"IFSC Code"}),(0,n.jsx)("input",{className:"mb-4 border-b-2 form inputSingleLineText",type:"text",id:"ifsccode",name:"ifsccode",minLength:11,maxLength:11,placeholder:"ABCD0000000",style:{color:"black",resize:"both",width:c?"80vw":"30vw",overflow:"none"},required:!0}),(0,n.jsx)("label",{children:"Account Number"}),(0,n.jsx)("input",{className:"mb-4 border-b-2 form inputSingleLineText",type:"text",id:"aacnumber",name:"aacnumber",minLength:18,maxLength:18,placeholder:"000000000000000000",onChange(e){e.target.value=e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*?)\..*/g,"$1")},style:{color:"black",resize:"both",width:c?"80vw":"30vw",overflow:"none"},required:!0})]}),(0,n.jsx)("button",{type:"submit",className:"outline outline-offset-0 px-2 py-2 rounded buyButton",children:"Become A Creator"})]}):(0,n.jsx)(n.Fragment,{children:"UPLOADING"===o?(0,n.jsx)("div",{children:(0,n.jsx)(m(),{src:C.Z,alt:"",width:200,height:200})}):(0,n.jsx)("div",{children:(0,n.jsx)(m(),{src:S,alt:"",width:200,height:200})})})]})};var A=a(50717);let P=(0,r.Z)(e=>({modal:{display:"flex",alignItems:"center",justifyContent:"center",overflowY:"scroll"},paper:{borderRadius:"5px",boxShadow:e.shadows[5],color:"white",display:"flex",flexDirection:"column",width:"50%",justifyContent:"center",margin:"0 20px 20px 20px",padding:e.spacing(0,4,3)},paperMobile:{borderRadius:"5px",boxShadow:e.shadows[5],color:"white",display:"flex",flexDirection:"column",width:"100%",justifyContent:"center",margin:"0",padding:e.spacing(0,4,3)},button:{fontSize:20,fontWeight:"bold",textAlign:"center",width:"40%",margin:"20px 20px 10px 0px"},edit:{margin:"10px","&:hover":{color:"rgb(76, 175, 80)"}},error:{color:"red",fontSize:"16px",backgroundColor:"white",borderRadius:"5px"},successful:{color:"green",fontSize:"16px",marginTop:"5px",borderRadius:"5px"},textfield:{width:"80%",margin:"10px 0 10px 0","& .MuiFormLabel-root":{fontSize:"18px"},"& label.Mui-focused":{color:"white"},"& .MuiInput-underline:after":{borderBottomColor:"#3b82f6"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:"#3b82f6"}}},textfieldMobile:{width:"100%",margin:"10px 0 10px 0","& .MuiFormLabel-root":{fontSize:"18px"},"& label.Mui-focused":{color:"white"},"& .MuiInput-underline:after":{borderBottomColor:"#3b82f6"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:"#3b82f6"}}}}));(0,l.Z)({overrides:{MuiTooltip:{tooltip:{fontSize:"15px"}}}});let M={autoPlay:!0,animation:"fade",indicators:!1,duration:500,navButtonsAlwaysVisible:!0,navButtonsAlwaysInvisible:!1,cycleNavigation:!0,fullHeightHover:!0,swipe:!1};function D(){let e=P(),[t,a]=(0,i.useState)(""),[r,l]=(0,i.useState)(!1),[d,p]=(0,i.useState)(""),[b,k]=(0,i.useState)("");var L,B,[C,S]=(0,i.useState)([]),[N,I]=(0,i.useState)(-1);let[D,T]=(0,i.useState)(M),[Z,E]=(0,i.useState)(null),[U,R]=(0,i.useState)(""),[O,V]=(0,i.useState)("0"),[H,Y]=(0,i.useState)("0"),[q,K]=(0,i.useState)("0"),[W,X]=(0,i.useState)(""),[G,J]=(0,i.useState)("0"),[$,Q]=(0,i.useState)("0"),[ee,et]=(0,i.useState)("0"),[ea,en]=(0,i.useState)("0"),[ei,er]=(0,i.useState)(""),[el,eo]=(0,i.useState)(""),es=(null===(L=(0,z.eI)())||void 0===L?void 0:L.width)<(null===(B=(0,z.eI)())||void 0===B?void 0:B.height);(0,i.useEffect)(()=>{!async function(){console.log("AuthService.refresh()"),console.log(await c.Z.refresh()),l(c.Z.validateCurrentUserRefreshToken()&&c.Z.validateCurrentUserAccessToken())}()},[]),(0,i.useEffect)(()=>{a(c.Z.getUsername())},[r]);let[ed,eu]=(0,i.useState)({emailaddress:"",signuptype:1,username:"",fname:"",lname:"",bio:"",iscreator:null,displaypicture:"",twitterhandle:"",instagram:"",youtube:"",website:""});(0,i.useEffect)(()=>{!async function(){if(""!=t){let e=await (0,h.is)(t);eu(e[0]);let a=await (0,y.O)("profilepic",t);"string"!=typeof a&&p(a[0].signedurl);let n=await (0,y.O)("oimages",t);"string"!=typeof n&&(S(n[0].signedurls),I(n[0].signedurls.length))}}()},[t]),(0,i.useEffect)(()=>{!async function(){let e=await (0,_.tf)();"string"!=typeof e&&E(e[0])}()},[]),function(){if((null==C?void 0:C.length)>0){for(let e=0;e<C.length;e++){var t=new XMLHttpRequest;t.open("HEAD",C[e]),t.onreadystatechange=function(){this.readyState==this.DONE&&403==this.status&&-1==N&&I(e)},t.send()}-1!=N&&(C.length=N)}}();let ec=async()=>{eo(""),er("");let e=await (0,h.Al)(U,O,H,q,W,G,$,ee,ea);"string"!=typeof e?eo("Successful"):er(e)};return console.log(Z),(0,n.jsxs)("div",{children:[(0,n.jsxs)(u(),{children:[(0,n.jsx)("title",{children:"Crezalo: Become A Creator"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsx)("div",{style:{backgroundColor:"black"},children:r&&t&&(null==ed?void 0:ed.username)!=""?(0,n.jsx)("div",{className:es?"blueTextBlackBackgroundMobile":"blueTextBlackBackground",style:{fontSize:"18px",display:"flex",flexDirection:es?"column":"row"},children:ed.iscreator||(null==Z?void 0:Z.creator)?(0,n.jsx)("div",{style:{textAlign:"center",width:"100vw",margin:"20vh 0 20vh 0"},children:ed.iscreator?(0,n.jsx)("h1",{children:"You Are Already A Creator!!! Enjoy!!!"}):(0,n.jsx)("h1",{children:"We have received your KYC details and our team will update you after we verify them in 6-12 hours."})}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{style:{width:es?"100%":"50%",display:"flex",flexDirection:"column",padding:es?"0":"50px",justifyContent:"center"},children:[(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,n.jsx)("div",{style:{},children:(null==C?void 0:C.length)>0?(0,n.jsx)(w(),{className:"editPageCarousel",...D,navButtonsProps:{style:{backgroundColor:"cornflowerblue",borderRadius:5}},children:Array.from(C).map((e,t)=>(0,n.jsx)("img",{src:e,alt:"Loading ...",width:"100%",height:"100%",onError(e){let{currentTarget:a}=e;I(t),a.onerror=null,a.src=s.Z.src}}))}):(0,n.jsx)("div",{className:"editPageCarousel shimmer"})}),(0,n.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:(0,n.jsxs)("div",{className:"creatorImageDiv",style:{justifyContent:"center",width:"30%",display:"table",position:"relative"},children:[(0,n.jsx)(j.Z,{creator:null==ed?void 0:ed.username,height:250,width:250}),(0,n.jsx)("div",{className:"bottom-right",children:(0,n.jsx)(g.Z,{modalButtonText:(0,n.jsx)(x.Z,{}),modalBody:(0,n.jsx)(v.Z,{})})})]})})]}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:es?"column":"row",justifyContent:"center"},children:[(0,n.jsxs)("div",{style:{justifyContent:"center",marginRight:es?"0":"10px"},children:[(0,n.jsx)(f.__,{style:{margin:"10px"},children:"First Name"}),(0,n.jsx)(o.Z,{className:es?e.textfieldMobile:e.textfield,placeholder:"First Name Here ...",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:ed.fname,inputProps:{style:{color:"white"}},onChange(e){V(e.target.value)}})]}),(0,n.jsxs)("div",{style:{justifyContent:"center",marginLeft:es?"0":"10px"},children:[(0,n.jsx)(f.__,{style:{margin:"10px"},children:"Last Name"}),(0,n.jsx)(o.Z,{className:es?e.textfieldMobile:e.textfield,placeholder:"Last Name Here ...",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:ed.lname,inputProps:{style:{color:"white"}},onChange(e){Y(e.target.value)}})]})]}),es?(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,n.jsx)(f.__,{style:{margin:"10px 0 0 10px"},children:"Bio"}),(0,n.jsx)(o.Z,{className:e.textfieldMobile,placeholder:"Bio Here ...",type:"text",multiline:!0,rows:3,inputProps:{style:{color:"white"}},InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:ed.bio,onChange(e){K(e.target.value)}})]}):(0,n.jsx)(n.Fragment,{}),(0,n.jsx)("div",{style:{marginTop:"50px",justifyContent:"center"},children:(0,n.jsx)(g.Z,{modalButtonText:"Become A Creator",modalBody:(0,n.jsx)(F,{}),onClickFunction:ec})}),(0,n.jsx)("p",{className:e.error,children:ei}),(0,n.jsx)("p",{className:e.successful,children:el})]}),es?(0,n.jsx)(n.Fragment,{}):(0,n.jsxs)("div",{className:e.paper,children:[(0,n.jsx)(f.__,{style:{margin:"10px 0 0 10px"},children:"Bio"}),(0,n.jsx)(o.Z,{className:e.textfield,placeholder:"Bio Here ...",type:"text",multiline:!0,rows:3,inputProps:{style:{color:"white"}},InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:ed.bio,onChange(e){K(e.target.value)}}),(0,n.jsx)(f.__,{style:{margin:"10px 0 0 10px"},children:"Twitter"}),(0,n.jsx)(o.Z,{className:e.textfield,placeholder:"@YourTwitterHandle",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",inputProps:{style:{color:"white"}},defaultValue:ed.twitterhandle,onChange(e){J(e.target.value)}}),(0,n.jsx)(f.__,{style:{margin:"10px 0 0 10px"},children:"Instagram"}),(0,n.jsx)(o.Z,{className:e.textfield,placeholder:"@YourInstagramUsername",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",inputProps:{style:{color:"white"}},defaultValue:ed.instagram,onChange(e){Q(e.target.value)}}),(0,n.jsx)(f.__,{style:{margin:"10px 0 0 10px"},children:"Youtube Channel"}),(0,n.jsx)(o.Z,{className:e.textfield,placeholder:"https://www.youtube.com/c/channelid",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",inputProps:{style:{color:"white"}},defaultValue:ed.youtube,onChange(e){et(e.target.value)}}),(0,n.jsx)(f.__,{style:{margin:"10px 0 0 10px"},children:"Website"}),(0,n.jsx)(o.Z,{className:e.textfield,placeholder:"https://www.mywebsite.com/",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",inputProps:{style:{color:"white"}},defaultValue:ed.youtube,onChange(e){en(e.target.value)}})]})]})}):(0,n.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",paddingTop:"30vh",height:"100vh",width:"100vw"},children:(0,n.jsx)(m(),{src:A.Z,height:"150",width:"150",alt:"",style:{width:"150px",height:"150px"}})})})]})}},33057:function(e,t,a){"use strict";a.d(t,{V7:function(){return c},Zl:function(){return o},Zw:function(){return s},eW:function(){return u},tf:function(){return d},u3:function(){return h}});var n=a(9669),i=a.n(n),r=a(76095);let l="https://crezalo.com/api/";async function o(e,t,a,n,o){try{if(!(0,r.z)().Authorization)return"Not Logged In";{let s=await i().post(l+"fininfo/kyc",{aadharnumber:e,pannumber:t,bank_name:a,ifsc_code:n,acc_number:o},{headers:(0,r.z)()});if(s.data.isSuccessful)return s.data.result;return s.data.errorMsg}}catch(d){console.log(d)}}async function s(){try{if(!(0,r.z)().Authorization)return"Not Logged In";{let e=await i().get(l+"fininfo/kyc/alldetailsforadmin",{headers:(0,r.z)()});if(e.data.isSuccessful)return e.data.result;return e.data.errorMsg}}catch(t){console.log(t)}}async function d(){try{if(!(0,r.z)().Authorization)return"Not Logged In";{let e=await i().get(l+"fininfo/kyc/applied",{headers:(0,r.z)()});if(e.data.isSuccessful)return e.data.result;return e.data.errorMsg}}catch(t){console.log(t)}}async function u(e){try{if(!(0,r.z)().Authorization)return"Not Logged In";{let t=await i().post(l+"fininfo",{creator:e},{headers:(0,r.z)()});if(t.data.isSuccessful)return t.data.result;return t.data.errorMsg}}catch(a){console.log(a)}}async function c(){try{if(!(0,r.z)().Authorization)return"Not Logged In";{let e=await i().get(l+"fininfo/alldetails",{headers:(0,r.z)()});if(e.data.isSuccessful)return e.data.result;return e.data.errorMsg}}catch(t){console.log(t)}}async function h(e,t,a){try{if(!(0,r.z)().Authorization)return"Not Logged In";{let n=await i().put(l+"FinInfo",{bank_name:e,ifsc_code:t,acc_number:a},{headers:(0,r.z)()});if(n.data.isSuccessful)return n.data.result;return n.data.errorMsg}}catch(o){console.log(o)}}}},function(e){e.O(0,[6319,260,9565,8410,9774,2888,179],function(){return e(e.s=6236)}),_N_E=e.O()}]);