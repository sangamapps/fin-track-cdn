"use strict";(self.webpackChunkfin_track_ui=self.webpackChunkfin_track_ui||[]).push([[425],{3145:(t,e,n)=>{function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=Array(e);n<e;n++)a[n]=t[n];return a}n.d(e,{A:()=>a})},5474:(t,e,n)=>{n.d(e,{E5:()=>r,Tv:()=>l,WB:()=>s,_Y:()=>i,jy:()=>o,t2:()=>c});var a=n(4467),r="681626859343-dtkml0ds42u48qg1q5nr07kevma99tfk.apps.googleusercontent.com",i={bank:"Bank",cash:"Cash",credit_card:"Credit Card"},s={DATE:"date",ACCOUNT_GROUP:"accountGroup",ACCOUNT_ID:"accountId",DESCRIPTION:"description",TYPE:"transactionType",AMOUNT:"amount",DEBIT:"debit",CREDIT:"credit",BALANCE:"balance"},o=(0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)({},s.DATE,"Date"),s.ACCOUNT_GROUP,"Account Group"),s.ACCOUNT_ID,"Account"),s.TYPE,"Transaction Type"),s.AMOUNT,"Amount"),s.DESCRIPTION,"Description"),c={DEBIT:"DEBIT",CREDIT:"CREDIT"},l={HDFC_AS_XLS_V1:"HDFC - XLS - V1",SBI_AS_XLS_V1:"SBI - XLS - V1",AXIS_AS_PDF_V1:"AXIS - PDF - V1"}},7425:(t,e,n)=>{n.r(e),n.d(e,{default:()=>O});var a=n(3145),r=n(7800);var i=n(3029),s=n(2901),o=n(4441),c=n(3954),l=n(5501),u=n(4467),p=n(6540),m=n(1225),d=n(378),f=n(8736),h=n(5474),g=n(2543);function v(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(v=function(){return!!t})()}var F=function(t){function e(){var t,n,a,r;(0,i.A)(this,e);for(var s=arguments.length,l=new Array(s),p=0;p<s;p++)l[p]=arguments[p];return n=this,a=e,r=[].concat(l),a=(0,c.A)(a),t=(0,o.A)(n,v()?Reflect.construct(a,r||[],(0,c.A)(n).constructor):a.apply(n,r)),(0,u.A)(t,"state",{showFiltersView:!1}),(0,u.A)(t,"handleFilterChange",(function(e){t.props.handleFilterChange(e.target.name,e.target.value)})),t}return(0,l.A)(e,t),(0,s.A)(e,[{key:"toggleFiltersView",value:function(){this.setState({showFiltersView:!this.state.showFiltersView})}},{key:"getFilters",value:function(){if(this.state.showFiltersView){var t=this.props,e=t.accountsMap,n=t.rulesMap,a=t.filters;return p.createElement("div",{className:"p-3 bg-primary-subtle"},p.createElement("div",{className:"row"},p.createElement("div",{className:"col-lg-3 col-md-4 col-sm-12 mb-2"},p.createElement("div",{className:"input-group"},p.createElement("span",{className:"input-group-text"},"From"),p.createElement("input",{type:"date",name:"startDateFilter",value:a.startDateFilter,className:"form-control",onChange:this.handleFilterChange}))),p.createElement("div",{className:"col-lg-3 col-md-4 col-sm-12 mb-2"},p.createElement("div",{className:"input-group"},p.createElement("span",{className:"input-group-text"},"To"),p.createElement("input",{type:"date",name:"endDateFilter",value:a.endDateFilter,className:"form-control",onChange:this.handleFilterChange}))),e&&p.createElement("div",{className:"col-lg-3 col-md-4 col-sm-12 mb-2"},p.createElement("div",{className:"input-group"},p.createElement("span",{className:"input-group-text"},"Account Group"),p.createElement("select",{name:"accountGroupFilter",value:a.accountGroupFilter,className:"form-control",onChange:this.handleFilterChange},p.createElement("option",{value:""},"All"),g.keys(g.groupBy(this.props.accountsMap,"accountGroup")).map((function(t,e){return p.createElement("option",{key:e,value:t},h._Y[t])}))))),e&&p.createElement("div",{className:"col-lg-3 col-md-4 col-sm-12 mb-2"},p.createElement("div",{className:"input-group"},p.createElement("span",{className:"input-group-text"},"Account"),p.createElement("select",{name:"accountIdFilter",value:a.accountIdFilter,className:"form-control",onChange:this.handleFilterChange},p.createElement("option",{value:""},"All"),g.values(this.props.accountsMap).map((function(t,e){return p.createElement("option",{key:e,value:t._id},t.name," (",h._Y[t.accountGroup],")")}))))),p.createElement("div",{className:"col-lg-3 col-md-4 col-sm-12 mb-2"},p.createElement("div",{className:"input-group"},p.createElement("span",{className:"input-group-text"},"Transaction Type"),p.createElement("select",{name:"transactionTypeFilter",value:a.transactionTypeFilter,className:"form-control",onChange:this.handleFilterChange},p.createElement("option",{value:""},"All"),p.createElement("option",{value:h.t2.DEBIT},"Debit"),p.createElement("option",{value:h.t2.CREDIT},"Credit")))),p.createElement("div",{className:"col-lg-3 col-md-4 col-sm-12 mb-2"},p.createElement("div",{className:"input-group"},p.createElement("span",{className:"input-group-text"},"Tag"),p.createElement("select",{name:"tagFilter",value:a.tagFilter,className:"form-control",onChange:this.handleFilterChange},p.createElement("option",{value:""},"All"),p.createElement("option",{value:"__NONE__"},"Others"),g.values(n).map((function(t,e){return p.createElement("option",{key:e,value:t._id},t.tag)}))))),p.createElement("div",{className:"col-lg-3 col-md-4 col-sm-12 mb-2"},p.createElement("div",{className:"input-group"},p.createElement("span",{className:"input-group-text"},"Search"),p.createElement("input",{type:"search",name:"searchFilter",value:a.searchFilter,className:"form-control",onChange:this.handleFilterChange})))),p.createElement("button",{className:"btn btn-sm btn-primary me-2",onClick:this.props.resetFilters},"Reset Filters"))}}},{key:"getFiltersButton",value:function(){var t=this;return p.createElement("button",{className:"btn btn-primary rounded-circle position-fixed bottom-0 start-0 m-4",onClick:function(){return t.toggleFiltersView()},style:{width:"50px",height:"50px"}},p.createElement("i",{class:"bi bi-funnel-fill"}))}},{key:"render",value:function(){return p.createElement("div",{className:""},this.getFilters(),this.getFiltersButton())}}])}(p.Component);const y=(0,m.Ng)((function(t){return g.pick(t.user,["accountsMap","rulesMap"])}))(F);var A=n(2543);var E=n(2543);const N=function(t,e,n,a){return E.filter(t,(function(t){var r=n&&n[t.accountId]||{};return t.accountGroup=h._Y[r.accountGroup]||"",t.accountName=r.name||"",!(!E.isEmpty(e.accountGroupFilter)&&r.accountGroup!=e.accountGroupFilter||!E.isEmpty(e.accountIdFilter)&&t.accountId!=e.accountIdFilter||!E.isEmpty(e.transactionTypeFilter)&&t.transactionType!=e.transactionTypeFilter||(function(t,e){var n=[];e.forEach((function(e){var a=e._id,r=e.contains,i=e.tag;if(t.appliedRules=t.appliedRules||{},!(a in t.appliedRules)){var s=A.lowerCase(t.description),o=A.split(A.lowerCase(r),",");A.some(o,(function(t){return s.includes(t)}))&&(t.appliedRules[a]=1,n.push(i))}})),t.tags=n}(t,a),E.isEmpty(e.tagFilter)?!E.isEmpty(e.searchFilter)&&!E.includes(E.lowerCase(t.description),E.lowerCase(e.searchFilter)):!("__NONE__"==e.tagFilter&&0==t.tags.length||e.tagFilter in t.appliedRules&&1==t.appliedRules[e.tagFilter])))}))};var T=n(9097),C=n(3632),D=n(2543);function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){(0,u.A)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function I(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(I=function(){return!!t})()}var k=function(t){function e(){var t,n,s,l;(0,i.A)(this,e);for(var p=arguments.length,m=new Array(p),h=0;h<p;h++)m[h]=arguments[h];return n=this,s=e,l=[].concat(m),s=(0,c.A)(s),t=(0,o.A)(n,I()?Reflect.construct(s,l||[],(0,c.A)(n).constructor):s.apply(n,l)),(0,u.A)(t,"state",_(_({},t.getInitialFilters()),{},{transactions:[],transactionsLoading:!1})),(0,u.A)(t,"handleFilterChange",(function(e,n){t.setState((0,u.A)({},e,n),(function(){"startDateFilter"!=e&&"endDateFilter"!=e||t.fetchTransactions()}))})),(0,u.A)(t,"resetFilters",(function(){t.setState(t.getInitialFilters(),t.fetchTransactions)})),(0,u.A)(t,"updateTransaction",(function(e){t.setState((function(t){var n,i=function(t){if(Array.isArray(t))return(0,a.A)(t)}(n=t.transactions)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||(0,r.A)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),s=D.findIndex(i,(function(t){return t._id===e._id}));return s>=0?i[s]=e:i.push(e),{transactions:i,showTransactionModal:!1}}))})),(0,u.A)(t,"deleteTransaction",(function(e){f.A.delete(e._id).then((function(e){t.setState((function(t){return{transactions:t.transactions.filter((function(t){return t._id!==e._id}))}}),(function(){return d.oR.info("Transaction deleted ✅")}))}))})),(0,u.A)(t,"fetchTransactions",(function(){t.setState({transactions:[],transactionsLoading:!0}),f.A.getAll(t.state.startDateFilter,t.state.endDateFilter,t.props.isDraft).then((function(e){t.setState({transactions:e.transactions,transactionsLoading:!1})}))})),t}return(0,l.A)(e,t),(0,s.A)(e,[{key:"getInitialFilters",value:function(){return{startDateFilter:this.props.startDateFilter||"",endDateFilter:this.props.endDateFilter||"",accountGroupFilter:"",accountIdFilter:"",transactionTypeFilter:"",tagFilter:"",searchFilter:""}}},{key:"getFilters",value:function(){return{startDateFilter:this.state.startDateFilter,endDateFilter:this.state.endDateFilter,accountGroupFilter:this.state.accountGroupFilter,accountIdFilter:this.state.accountIdFilter,transactionTypeFilter:this.state.transactionTypeFilter,tagFilter:this.state.tagFilter,searchFilter:this.state.searchFilter}}},{key:"getFiltersView",value:function(){return p.createElement(y,{filters:this.getFilters(),handleFilterChange:this.handleFilterChange,resetFilters:this.resetFilters})}},{key:"getNoTransactionsLabel",value:function(){return this.props.isDraft?p.createElement("div",{className:"text-muted"},"No drafts transactions found."):p.createElement("div",{className:"text-muted"},"No transactions found.")}},{key:"getLoader",value:function(){return this.state.transactionsLoading?C.A.spinnerLoader("mt-3"):0==this.state.transactions.length?p.createElement("div",{className:"mt-3 mb-3 text-center"},this.getNoTransactionsLabel()):void 0}},{key:"getFilteredTransactions",value:function(){return N(this.state.transactions,this.getFilters(),this.props.accountsMap,this.props.rules)}},{key:"getLayoutBody",value:function(){var t=this.props.LayoutBody,e=this.getFilteredTransactions();return p.createElement(T.A,{component:t,isDraft:this.props.isDraft,transactions:this.state.transactions,filteredTransactions:e,updateTransaction:this.updateTransaction,deleteTransaction:this.deleteTransaction,fetchTransactions:this.fetchTransactions})}},{key:"render",value:function(){return p.createElement("div",{className:""},this.getFiltersView(),this.getLoader(),this.getLayoutBody())}},{key:"componentDidMount",value:function(){this.fetchTransactions()}}])}(p.Component);const O=(0,m.Ng)((function(t){return D.pick(t.user,["accountsMap","rules"])}))(k)},7800:(t,e,n)=>{n.d(e,{A:()=>r});var a=n(3145);function r(t,e){if(t){if("string"==typeof t)return(0,a.A)(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,a.A)(t,e):void 0}}},8736:(t,e,n)=>{n.d(e,{A:()=>r});var a=n(4297);const r={extract:function(t,e,n){var r=new FormData;return r.append("accountId",t),r.append("extractor",e),r.append("file",n),a.A.post("/api/v1/transactions/extract",r,{"Content-Type":"multipart/form-data"})},saveDrafts:function(){return a.A.post("/api/v1/transactions/save-drafts")},deleteDrafts:function(){return a.A.post("/api/v1/transactions/delete-drafts")},getAll:function(t,e,n){return a.A.get("/api/v1/transactions",{startDate:t,endDate:e,isDraft:n})},upsert:function(t){return a.A.post("/api/v1/transaction",t)},delete:function(t){return a.A.delete("/api/v1/transaction/".concat(t))}}}}]);