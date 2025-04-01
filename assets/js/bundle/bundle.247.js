"use strict";(self.webpackChunkfin_track_ui=self.webpackChunkfin_track_ui||[]).push([[247],{247:(e,n,o)=>{o.r(n),o.d(n,{default:()=>S});var t=o(3029),c=o(2901),r=o(4441),i=o(3954),l=o(5501),u=o(4467),d=o(6540);const a=(0,d.createContext)(null);function s({clientId:e,nonce:n,onScriptLoadSuccess:o,onScriptLoadError:t,children:c}){const r=function(e={}){const{nonce:n,onScriptLoadSuccess:o,onScriptLoadError:t}=e,[c,r]=(0,d.useState)(!1),i=(0,d.useRef)(o);i.current=o;const l=(0,d.useRef)(t);return l.current=t,(0,d.useEffect)((()=>{const e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,e.nonce=n,e.onload=()=>{var e;r(!0),null===(e=i.current)||void 0===e||e.call(i)},e.onerror=()=>{var e;r(!1),null===(e=l.current)||void 0===e||e.call(l)},document.body.appendChild(e),()=>{document.body.removeChild(e)}}),[n]),c}({nonce:n,onScriptLoadSuccess:o,onScriptLoadError:t}),i=(0,d.useMemo)((()=>({clientId:e,scriptLoadedSuccessfully:r})),[e,r]);return d.createElement(a.Provider,{value:i},c)}function v(e){var n;return null!==(n=null==e?void 0:e.clientId)&&void 0!==n?n:null==e?void 0:e.client_id}const f={large:40,medium:32,small:20};function p({onSuccess:e,onError:n,useOneTap:o,promptMomentNotification:t,type:c="standard",theme:r="outline",size:i="large",text:l,shape:u,logo_alignment:s,width:p,locale:m,click_listener:g,containerProps:A,...h}){const w=(0,d.useRef)(null),{clientId:E,scriptLoadedSuccessfully:S}=function(){const e=(0,d.useContext)(a);if(!e)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return e}(),_=(0,d.useRef)(e);_.current=e;const C=(0,d.useRef)(n);C.current=n;const T=(0,d.useRef)(t);return T.current=t,(0,d.useEffect)((()=>{var e,n,t,d,a,f,A,y,I;if(S)return null===(t=null===(n=null===(e=null===window||void 0===window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===n?void 0:n.id)||void 0===t||t.initialize({client_id:E,callback:e=>{var n;if(!(null==e?void 0:e.credential))return null===(n=C.current)||void 0===n?void 0:n.call(C);const{credential:o,select_by:t}=e;_.current({credential:o,clientId:v(e),select_by:t})},...h}),null===(f=null===(a=null===(d=null===window||void 0===window?void 0:window.google)||void 0===d?void 0:d.accounts)||void 0===a?void 0:a.id)||void 0===f||f.renderButton(w.current,{type:c,theme:r,size:i,text:l,shape:u,logo_alignment:s,width:p,locale:m,click_listener:g}),o&&(null===(I=null===(y=null===(A=null===window||void 0===window?void 0:window.google)||void 0===A?void 0:A.accounts)||void 0===y?void 0:y.id)||void 0===I||I.prompt(T.current)),()=>{var e,n,t;o&&(null===(t=null===(n=null===(e=null===window||void 0===window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===n?void 0:n.id)||void 0===t||t.cancel())}}),[E,S,o,c,r,i,l,u,s,p,m]),d.createElement("div",{...A,ref:w,style:{height:f[i],...null==A?void 0:A.style}})}var m=o(5474),g=o(7409),A=o(1225),h=o(3908);function w(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(w=function(){return!!e})()}var E=function(e){function n(){var e,o,c,l;(0,t.A)(this,n);for(var d=arguments.length,a=new Array(d),s=0;s<d;s++)a[s]=arguments[s];return o=this,c=n,l=[].concat(a),c=(0,i.A)(c),e=(0,r.A)(o,w()?Reflect.construct(c,l||[],(0,i.A)(o).constructor):c.apply(o,l)),(0,u.A)(e,"onSuccess",(function(n){g.A.login(n.credential).then((function(n){n.user?e.props.dispatch((0,h.m5)(n.user)):console.error("Login failed:",n.error)}))})),(0,u.A)(e,"onError",(function(){console.log("Google Login Failed")})),e}return(0,l.A)(n,e),(0,c.A)(n,[{key:"getGoogleLoginButton",value:function(){return d.createElement("div",{className:"d-flex justify-content-center"},d.createElement(s,{clientId:m.E5},d.createElement(p,{onSuccess:this.onSuccess,onError:this.onError})))}},{key:"render",value:function(){return d.createElement("div",{className:"bg-dark d-flex",style:{width:"100vw",height:"100vh"}},d.createElement("div",{className:"container text-center mt-5"},d.createElement("div",{className:"card p-4 shadow-sm mx-auto",style:{maxWidth:"400px"}},d.createElement("h2",{className:"mb-3"},"Welcome to Finance Tracker"),this.getGoogleLoginButton())))}}])}(d.Component);const S=(0,A.Ng)()(E)},5474:(e,n,o)=>{o.d(n,{E5:()=>c,Tv:()=>d,WB:()=>i,_Y:()=>r,jy:()=>l,t2:()=>u});var t=o(4467),c="681626859343-dtkml0ds42u48qg1q5nr07kevma99tfk.apps.googleusercontent.com",r={bank:"Bank",cash:"Cash",credit_card:"Credit Card"},i={DATE:"date",ACCOUNT_GROUP:"accountGroup",ACCOUNT_ID:"accountId",DESCRIPTION:"description",TYPE:"transactionType",AMOUNT:"amount",DEBIT:"debit",CREDIT:"credit",BALANCE:"balance"},l=(0,t.A)((0,t.A)((0,t.A)((0,t.A)((0,t.A)((0,t.A)({},i.DATE,"Date"),i.ACCOUNT_GROUP,"Account Group"),i.ACCOUNT_ID,"Account"),i.TYPE,"Transaction Type"),i.AMOUNT,"Amount"),i.DESCRIPTION,"Description"),u={DEBIT:"DEBIT",CREDIT:"CREDIT"},d={HDFC_AS_XLS_V1:"HDFC - XLS - V1",SBI_AS_XLS_V1:"SBI - XLS - V1",AXIS_AS_PDF_V1:"AXIS - PDF - V1"}},7409:(e,n,o)=>{o.d(n,{A:()=>c});var t=o(4297);const c={login:function(e){return t.A.post("/api/v1/user/login",{token:e})},logout:function(){return t.A.post("/api/v1/user/logout")}}}}]);