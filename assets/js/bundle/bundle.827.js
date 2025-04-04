"use strict";(self.webpackChunkfin_track_ui=self.webpackChunkfin_track_ui||[]).push([[827],{1555:(t,e,a)=>{a.d(e,{A:()=>c});var n=a(5093),r=a(2543);const c={formatDate:function(t,e){var a=n(e);return"daily"===t?a.format("YYYY-MM-DD"):"weekly"===t?a.endOf("week").format("YYYY-MM-DD"):"monthly"===t?a.format("YYYY-MM"):"yearly"===t?a.format("YYYY"):"Overall"},getCummulativeBalance:function(t,e){return r.sumBy(r.uniq(r.map(t,(function(t){return t.accountId}))),(function(t){return parseFloat(e[t].amount)}))},getTransactionAmountRange:function(){return[{label:"< ₹50",min:0,max:49},{label:"₹51 – ₹100",min:51,max:100},{label:"₹101 – ₹500",min:101,max:500},{label:"₹501 – ₹1,000",min:501,max:1e3},{label:"₹1,001 – ₹5,000",min:1001,max:5e3},{label:"₹5,001 – ₹10,000",min:5001,max:1e4},{label:"₹10,001 - ₹50,000",min:10001,max:5e4},{label:"> ₹50,001",min:50001,max:1/0}]}}},4731:(t,e,a)=>{a.d(e,{yP:()=>m});var n=a(6540),r=a(2262);const c="label";function s(t,e){"function"==typeof t?t(e):t&&(t.current=e)}function u(t,e){t.labels=e}function o(t,e){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c;const n=[];t.datasets=e.map((e=>{const r=t.datasets.find((t=>t[a]===e[a]));return r&&e.data&&!n.includes(r)?(n.push(r),Object.assign(r,e),r):{...e}}))}function l(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;const a={labels:[],datasets:[]};return u(a,t.labels),o(a,t.datasets,e),a}function i(t,e){const{height:a=150,width:c=300,redraw:i=!1,datasetIdKey:d,type:f,data:m,options:T,plugins:b=[],fallbackContent:E,updateMode:p,...C}=t,D=(0,n.useRef)(null),A=(0,n.useRef)(null),I=()=>{D.current&&(A.current=new r.t1(D.current,{type:f,data:l(m,d),options:T&&{...T},plugins:b}),s(e,A.current))},g=()=>{s(e,null),A.current&&(A.current.destroy(),A.current=null)};return(0,n.useEffect)((()=>{!i&&A.current&&T&&function(t,e){const a=t.options;a&&e&&Object.assign(a,e)}(A.current,T)}),[i,T]),(0,n.useEffect)((()=>{!i&&A.current&&u(A.current.config.data,m.labels)}),[i,m.labels]),(0,n.useEffect)((()=>{!i&&A.current&&m.datasets&&o(A.current.config.data,m.datasets,d)}),[i,m.datasets]),(0,n.useEffect)((()=>{A.current&&(i?(g(),setTimeout(I)):A.current.update(p))}),[i,T,m.labels,m.datasets,p]),(0,n.useEffect)((()=>{A.current&&(g(),setTimeout(I))}),[f]),(0,n.useEffect)((()=>(I(),()=>g())),[]),n.createElement("canvas",{ref:D,role:"img",height:a,width:c,...C},E)}const d=(0,n.forwardRef)(i);function f(t,e){return r.t1.register(e),(0,n.forwardRef)(((e,a)=>n.createElement(d,{...e,ref:a,type:t})))}const m=f("bar",r.A6)},5474:(t,e,a)=>{a.d(e,{E5:()=>r,Tv:()=>i,WB:()=>s,_Y:()=>c,jy:()=>u,nZ:()=>l,t2:()=>o});var n=a(4467),r="681626859343-dtkml0ds42u48qg1q5nr07kevma99tfk.apps.googleusercontent.com",c={bank:"Bank",cash:"Cash",credit_card:"Credit Card"},s={DATE:"date",ACCOUNT_GROUP:"accountGroup",ACCOUNT_ID:"accountId",DESCRIPTION:"description",TYPE:"transactionType",AMOUNT:"amount",DEBIT:"debit",CREDIT:"credit",BALANCE:"balance"},u=(0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)({},s.DATE,"Date"),s.ACCOUNT_GROUP,"Account Group"),s.ACCOUNT_ID,"Account"),s.TYPE,"Transaction Type"),s.AMOUNT,"Amount"),s.DESCRIPTION,"Description"),o={DEBIT:"DEBIT",CREDIT:"CREDIT"},l={DEBIT:"Debit",CREDIT:"Credit"},i={HDFC_AS_XLS_V1:"HDFC - XLS - V1",SBI_AS_XLS_V1:"SBI - XLS - V1",AXIS_AS_PDF_V1:"AXIS - PDF - V1"}},8827:(t,e,a)=>{a.r(e),a.d(e,{default:()=>u});var n=a(6540),r=a(4731),c=a(1555),s=a(5474);const u=function(t){var e=t.filteredTransactions,a=t.timeFilter,u=t.transactionType,o=s.nZ[u],l={};e.forEach((function(t){var e=c.A.formatDate(a,t.date);l[e]||(l[e]=0),t.transactionType===u&&(l[e]+=t.amount)}));var i=Object.keys(l),d=i.map((function(t){return l[t]})),f=[{label:"".concat(o," Transactions (INR)"),data:d,borderColor:"CREDIT"===u?"#28a745":"#dc3545",backgroundColor:"CREDIT"===u?"rgba(40, 167, 69, 0.2)":"rgba(220, 53, 69, 0.2)",fill:!0}];return n.createElement("div",{className:"card shadow-sm p-3"},n.createElement("h5",{className:"card-title"},o," Over Time"),n.createElement("div",{className:"chart-container"},n.createElement(r.yP,{data:{labels:i,datasets:f}})))}}}]);