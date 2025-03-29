"use strict";(self.webpackChunkfin_track_ui=self.webpackChunkfin_track_ui||[]).push([[247],{247:(e,n,t)=>{t.r(n),t.d(n,{default:()=>b});var o=t(3029),r=t(2901),c=t(4441),i=t(3954),l=t(5501),u=t(4467),a=t(6540);const s=(0,a.createContext)(null);function d({clientId:e,nonce:n,onScriptLoadSuccess:t,onScriptLoadError:o,children:r}){const c=function(e={}){const{nonce:n,onScriptLoadSuccess:t,onScriptLoadError:o}=e,[r,c]=(0,a.useState)(!1),i=(0,a.useRef)(t);i.current=t;const l=(0,a.useRef)(o);return l.current=o,(0,a.useEffect)((()=>{const e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,e.nonce=n,e.onload=()=>{var e;c(!0),null===(e=i.current)||void 0===e||e.call(i)},e.onerror=()=>{var e;c(!1),null===(e=l.current)||void 0===e||e.call(l)},document.body.appendChild(e),()=>{document.body.removeChild(e)}}),[n]),r}({nonce:n,onScriptLoadSuccess:t,onScriptLoadError:o}),i=(0,a.useMemo)((()=>({clientId:e,scriptLoadedSuccessfully:c})),[e,c]);return a.createElement(s.Provider,{value:i},r)}function v(e){var n;return null!==(n=null==e?void 0:e.clientId)&&void 0!==n?n:null==e?void 0:e.client_id}const f={large:40,medium:32,small:20};function p({onSuccess:e,onError:n,useOneTap:t,promptMomentNotification:o,type:r="standard",theme:c="outline",size:i="large",text:l,shape:u,logo_alignment:d,width:p,locale:g,click_listener:m,containerProps:h,...w}){const y=(0,a.useRef)(null),{clientId:E,scriptLoadedSuccessfully:b}=function(){const e=(0,a.useContext)(s);if(!e)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return e}(),O=(0,a.useRef)(e);O.current=e;const k=(0,a.useRef)(n);k.current=n;const A=(0,a.useRef)(o);return A.current=o,(0,a.useEffect)((()=>{var e,n,o,a,s,f,h,S,_;if(b)return null===(o=null===(n=null===(e=null===window||void 0===window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===n?void 0:n.id)||void 0===o||o.initialize({client_id:E,callback:e=>{var n;if(!(null==e?void 0:e.credential))return null===(n=k.current)||void 0===n?void 0:n.call(k);const{credential:t,select_by:o}=e;O.current({credential:t,clientId:v(e),select_by:o})},...w}),null===(f=null===(s=null===(a=null===window||void 0===window?void 0:window.google)||void 0===a?void 0:a.accounts)||void 0===s?void 0:s.id)||void 0===f||f.renderButton(y.current,{type:r,theme:c,size:i,text:l,shape:u,logo_alignment:d,width:p,locale:g,click_listener:m}),t&&(null===(_=null===(S=null===(h=null===window||void 0===window?void 0:window.google)||void 0===h?void 0:h.accounts)||void 0===S?void 0:S.id)||void 0===_||_.prompt(A.current)),()=>{var e,n,o;t&&(null===(o=null===(n=null===(e=null===window||void 0===window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===n?void 0:n.id)||void 0===o||o.cancel())}}),[E,b,t,r,c,i,l,u,d,p,g]),a.createElement("div",{...h,ref:y,style:{height:f[i],...null==h?void 0:h.style}})}var g=t(5474),m=t(7409),h=t(1225),w=t(3908);function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}var E=function(e){function n(){var e,t,r,l;(0,o.A)(this,n);for(var a=arguments.length,s=new Array(a),d=0;d<a;d++)s[d]=arguments[d];return t=this,r=n,l=[].concat(s),r=(0,i.A)(r),e=(0,c.A)(t,y()?Reflect.construct(r,l||[],(0,i.A)(t).constructor):r.apply(t,l)),(0,u.A)(e,"onSuccess",(function(n){m.A.login(n.credential).then((function(n){n.success?e.props.dispatch((0,w.m)(n.user)):console.error("Login failed:",n.error)}))})),(0,u.A)(e,"onError",(function(){console.log("Google Login Failed")})),e}return(0,l.A)(n,e),(0,r.A)(n,[{key:"getGoogleLoginButton",value:function(){return a.createElement("div",{className:"d-flex justify-content-center"},a.createElement(d,{clientId:g.E},a.createElement(p,{onSuccess:this.onSuccess,onError:this.onError})))}},{key:"render",value:function(){return a.createElement("div",{className:"bg-dark d-flex",style:{width:"100vw",height:"100vh"}},a.createElement("div",{className:"container text-center mt-5"},a.createElement("div",{className:"card p-4 shadow-sm mx-auto",style:{maxWidth:"400px"}},a.createElement("h2",{className:"mb-3"},"Welcome to Finance Tracker"),this.getGoogleLoginButton())))}}])}(a.Component);const b=(0,h.Ng)()(E)},1967:(e,n,t)=>{t.d(n,{A:()=>v});var o=t(4467),r=t(467),c=t(4756),i=t.n(c),l=t(1083);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,o.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){return d.apply(this,arguments)}function d(){return d=(0,r.A)(i().mark((function e(n,t){var o,r,c,u=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>3?u[3]:void 0,r=a({url:n,method:t},u.length>2&&void 0!==u[2]?u[2]:{}),o&&(r.headers=o),e.next=6,(0,l.A)(r);case 6:return c=e.sent,e.abrupt("return",c.data);case 8:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}const v={get:function(e,n){return s(e,"GET",{params:n})},post:function(e,n,t){return s(e,"POST",{data:n},t)},delete:function(e){return s(e,"DELETE")}}},3908:(e,n,t)=>{t.d(n,{m:()=>o.m});var o=t(43)},5474:(e,n,t)=>{t.d(n,{E:()=>o,_:()=>r});var o="681626859343-dtkml0ds42u48qg1q5nr07kevma99tfk.apps.googleusercontent.com",r={bank:"Bank",cash:"Cash",credit_card:"Credit Card"}},7409:(e,n,t)=>{t.d(n,{A:()=>r});var o=t(1967);const r={login:function(e){return o.A.post("/api/v1/user/login",{token:e})},logout:function(){return o.A.post("/api/v1/user/logout")}}}}]);