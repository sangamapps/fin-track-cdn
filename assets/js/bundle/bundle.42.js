"use strict";(self.webpackChunkfin_track_ui=self.webpackChunkfin_track_ui||[]).push([[42],{4731:(t,e,n)=>{n.d(e,{yP:()=>p});var a=n(6540),r=n(2262);const s="label";function c(t,e){"function"==typeof t?t(e):t&&(t.current=e)}function u(t,e){t.labels=e}function l(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s;const a=[];t.datasets=e.map((e=>{const r=t.datasets.find((t=>t[n]===e[n]));return r&&e.data&&!a.includes(r)?(a.push(r),Object.assign(r,e),r):{...e}}))}function o(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;const n={labels:[],datasets:[]};return u(n,t.labels),l(n,t.datasets,e),n}function i(t,e){const{height:n=150,width:s=300,redraw:i=!1,datasetIdKey:f,type:d,data:p,options:g,plugins:b=[],fallbackContent:h,updateMode:m,...E}=t,v=(0,a.useRef)(null),w=(0,a.useRef)(null),y=()=>{v.current&&(w.current=new r.t1(v.current,{type:d,data:o(p,f),options:g&&{...g},plugins:b}),c(e,w.current))},k=()=>{c(e,null),w.current&&(w.current.destroy(),w.current=null)};return(0,a.useEffect)((()=>{!i&&w.current&&g&&function(t,e){const n=t.options;n&&e&&Object.assign(n,e)}(w.current,g)}),[i,g]),(0,a.useEffect)((()=>{!i&&w.current&&u(w.current.config.data,p.labels)}),[i,p.labels]),(0,a.useEffect)((()=>{!i&&w.current&&p.datasets&&l(w.current.config.data,p.datasets,f)}),[i,p.datasets]),(0,a.useEffect)((()=>{w.current&&(i?(k(),setTimeout(y)):w.current.update(m))}),[i,g,p.labels,p.datasets,m]),(0,a.useEffect)((()=>{w.current&&(k(),setTimeout(y))}),[d]),(0,a.useEffect)((()=>(y(),()=>k())),[]),a.createElement("canvas",{ref:v,role:"img",height:n,width:s,...E},h)}const f=(0,a.forwardRef)(i);function d(t,e){return r.t1.register(e),(0,a.forwardRef)(((e,n)=>a.createElement(f,{...e,ref:n,type:t})))}const p=d("bar",r.A6)},8042:(t,e,n)=>{n.r(e),n.d(e,{default:()=>c});var a=n(6540),r=n(4731),s=n(1225);const c=function(t){var e=t.filteredTransactions,n=(0,s.d4)((function(t){return t.user.rules})).map((function(t){var n=t._id;return{label:t.tag,count:e.filter((function(t){return 1==t.appliedRules[n]})).length}}));n.push({label:"Untagged",count:e.filter((function(t){return 0==t.tags.length})).length});var c={labels:n.map((function(t){return t.label})),datasets:[{label:"No. of Transactions",data:n.map((function(t){return t.count})),backgroundColor:"rgba(140, 167, 40, 0.63)"}]};return a.createElement("div",{className:"card shadow-sm p-3"},a.createElement("h5",{className:"card-title"},"Transaction Count by Tags"),a.createElement("div",{className:"chart-container"},a.createElement(r.yP,{data:c})))}}}]);