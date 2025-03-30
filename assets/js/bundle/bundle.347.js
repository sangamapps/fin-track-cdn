"use strict";(self.webpackChunkfin_track_ui=self.webpackChunkfin_track_ui||[]).push([[347],{448:(e,t,n)=>{n.d(t,{A:()=>m});var a=n(3029),o=n(2901),c=n(4441),r=n(3954),l=n(5501),u=n(6540),s=n(6634);function i(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(i=function(){return!!e})()}var m=function(e){function t(){return(0,a.A)(this,t),e=this,n=t,o=arguments,n=(0,r.A)(n),(0,c.A)(e,i()?Reflect.construct(n,o||[],(0,r.A)(e).constructor):n.apply(e,o));var e,n,o}return(0,l.A)(t,e),(0,o.A)(t,[{key:"getModalTitle",value:function(){return u.createElement("h5",{className:"modal-title"},this.props.title)}},{key:"getCloseButton",value:function(){return u.createElement("button",{type:"button",className:"btn-close",onClick:this.props.onClose})}},{key:"getModalHeader",value:function(){return u.createElement("div",{className:"modal-header"},this.getModalTitle(),this.getCloseButton())}},{key:"getModalBody",value:function(){var e=this.props.body;return e&&u.createElement("div",{className:"modal-body"},e)}},{key:"getCancelButton",value:function(){return u.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.props.onClose},"Cancel")}},{key:"getSubmitButton",value:function(){return u.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.props.onSubmitClick},"Submit")}},{key:"getModalFooter",value:function(){return u.createElement("div",{className:"modal-footer"},this.getCancelButton(),this.getSubmitButton())}},{key:"render",value:function(){return u.createElement(s.A,{in:this.props.show,timeout:500,classNames:"modal-container",unmountOnExit:!0},u.createElement("div",null,u.createElement("div",{className:"modal-backdrop fade show"}),u.createElement("div",{className:"modal fade show d-block"},u.createElement("div",{className:"modal-dialog"},u.createElement("div",{className:"modal-content"},this.getModalHeader(),this.getModalBody(),this.getModalFooter())))))}}])}(u.Component)},1967:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(4467),o=n(467),c=n(4756),r=n.n(c),l=n(1083);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,a.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){return m.apply(this,arguments)}function m(){return m=(0,o.A)(r().mark((function e(t,n){var a,o,c,u=arguments;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>3?u[3]:void 0,o=s({url:t,method:n},u.length>2&&void 0!==u[2]?u[2]:{}),a&&(o.headers=a),e.next=6,(0,l.A)(o);case 6:return c=e.sent,e.abrupt("return",c.data);case 8:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}const d={get:function(e,t){return i(e,"GET",{params:t})},post:function(e,t,n){return i(e,"POST",{data:t},n)},delete:function(e){return i(e,"DELETE")}}},2347:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var a=n(3029),o=n(2901),c=n(4441),r=n(3954),l=n(5501),u=n(4467),s=n(6540),i=n(378),m=n(5474),d=n(448),p=n(8573),f=n(2543);function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}function v(e){var t,n,a,o;return{accountGroup:(null===(t=e.account)||void 0===t?void 0:t.accountGroup)||"",name:(null===(n=e.account)||void 0===n?void 0:n.name)||"",amount:(null===(a=e.account)||void 0===a?void 0:a.amount)||"",description:(null===(o=e.account)||void 0===o?void 0:o.description)||""}}var A=function(e){function t(e){var n,o,l,m;return(0,a.A)(this,t),o=this,l=t,m=[e],l=(0,r.A)(l),n=(0,c.A)(o,h()?Reflect.construct(l,m||[],(0,r.A)(o).constructor):l.apply(o,m)),(0,u.A)(n,"handleChange",(function(e){n.setState((0,u.A)({},e.target.name,e.target.value))})),(0,u.A)(n,"handleSubmit",(function(e){var t;e.preventDefault();var a=n.state,o=a.accountGroup,c=a.name,r=a.amount,l=a.description;p.A.upsert({_id:(null===(t=n.props.account)||void 0===t?void 0:t._id)||null,accountGroup:o,name:c,amount:parseFloat(r),description:l}).then((function(e){i.oR.info("Account saved successfully"),n.props.onSave(e)}))})),(0,u.A)(n,"onSubmitClick",(function(){n.formRef.current&&n.formRef.current.requestSubmit()})),n.state=v(e),n.formRef=s.createRef(),n}return(0,l.A)(t,e),(0,o.A)(t,[{key:"componentDidUpdate",value:function(e){e.account!==this.props.account&&this.setState(v(this.props))}},{key:"getModalTitle",value:function(){return this.props.account?"Edit Account":"Add Account"}},{key:"getModalBody",value:function(){var e=this.state,t=e.accountGroup,n=e.name,a=e.amount,o=e.description;return s.createElement("form",{ref:this.formRef,onSubmit:this.handleSubmit},s.createElement("div",{className:"mb-2"},s.createElement("label",{className:"form-label"},"Account Group"),s.createElement("select",{className:"form-control",name:"accountGroup",value:t,onChange:this.handleChange,required:!0},s.createElement("option",null),f.keys(m._Y).map((function(e,t){return s.createElement("option",{key:t,value:e},m._Y[e])})))),s.createElement("div",{className:"mb-2"},s.createElement("label",{className:"form-label"},"Name"),s.createElement("input",{type:"text",className:"form-control",name:"name",value:n,onChange:this.handleChange,required:!0})),s.createElement("div",{className:"mb-2"},s.createElement("label",{className:"form-label"},"Amount"),s.createElement("input",{type:"number",className:"form-control",name:"amount",value:a,onChange:this.handleChange})),s.createElement("div",{className:"mb-2"},s.createElement("label",{className:"form-label"},"Description"),s.createElement("textarea",{className:"form-control",name:"description",value:o,onChange:this.handleChange})))}},{key:"render",value:function(){return s.createElement(d.A,{show:this.props.show,title:this.getModalTitle(),body:this.getModalBody(),onClose:this.props.onClose,onSubmitClick:this.onSubmitClick})}}])}(s.Component),g=n(2543);function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}var y=function(e){function t(){var e,n,o,l;(0,a.A)(this,t);for(var s=arguments.length,m=new Array(s),d=0;d<s;d++)m[d]=arguments[d];return n=this,o=t,l=[].concat(m),o=(0,r.A)(o),e=(0,c.A)(n,b()?Reflect.construct(o,l||[],(0,r.A)(n).constructor):o.apply(n,l)),(0,u.A)(e,"state",{getAccountsLoadingStatus:!0,accounts:[],selectedAccount:null,showModal:!1}),(0,u.A)(e,"toggleModal",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise((function(n){e.setState({showModal:!e.state.showModal,selectedAccount:t},n)}))})),(0,u.A)(e,"handleSave",(function(t){var n=g.find(e.state.accounts,{_id:t._id});n?g.assign(n,t):e.state.accounts.push(t),e.toggleModal()})),(0,u.A)(e,"handleDelete",(function(t){p.A.delete(t).then((function(){i.oR.info("Account deleted successfully"),e.getAccounts()}))})),(0,u.A)(e,"getAccounts",(function(){p.A.getAll().then((function(t){e.setState({getAccountsLoadingStatus:!1,accounts:t.accounts})}))})),e}return(0,l.A)(t,e),(0,o.A)(t,[{key:"getAccountsContainer",value:function(){var e=this,t=this.state.accounts;if(0===t.length)return this.state.getAccountsLoadingStatus?s.createElement("div",{className:"spinner-border text-primary",role:"status"},s.createElement("span",{className:"visually-hidden"},"Loading...")):s.createElement("div",{className:"alert alert-info",role:"alert"},"No accounts found");var n=g.groupBy(t,"accountGroup");return g.keys(n).map((function(t){return s.createElement("div",{key:t,className:"mt-3"},s.createElement("h3",null,m._Y[t]),s.createElement("ul",{className:"list-group"},n[t].map((function(t){return s.createElement("li",{key:t._id,className:"list-group-item d-flex justify-content-between align-items-center"},s.createElement("div",null,s.createElement("strong",null,t.name),s.createElement("p",{className:"mb-0 text-muted"},t.description)),s.createElement("div",null,s.createElement("span",{className:"badge bg-success me-2"},"₹",t.amount),s.createElement("button",{className:"btn btn-sm btn-warning me-2",onClick:function(){return e.toggleModal(t)}},"Edit"),s.createElement("button",{className:"btn btn-sm btn-danger",onClick:function(){return e.handleDelete(t._id)}},"Delete")))}))))}))}},{key:"getCrudAccountModal",value:function(){var e=this;return s.createElement(A,{show:this.state.showModal,account:this.state.selectedAccount,onSave:this.handleSave,onClose:function(){return e.toggleModal()}})}},{key:"getAddButton",value:function(){var e=this;return s.createElement("button",{className:"btn btn-primary rounded-circle position-fixed bottom-0 end-0 m-4",onClick:function(){return e.toggleModal()},style:{width:"50px",height:"50px"}},"+")}},{key:"render",value:function(){return s.createElement("div",{className:"container mt-3"},s.createElement("h1",null,"Accounts"),this.getAccountsContainer(),this.getCrudAccountModal(),this.getAddButton())}},{key:"componentDidMount",value:function(){this.getAccounts()}}])}(s.Component)},5474:(e,t,n)=>{n.d(t,{E5:()=>o,Tv:()=>s,WB:()=>r,_Y:()=>c,jy:()=>l,t2:()=>u});var a=n(4467),o="681626859343-dtkml0ds42u48qg1q5nr07kevma99tfk.apps.googleusercontent.com",c={bank:"Bank",cash:"Cash",credit_card:"Credit Card"},r={DATE:"date",ACCOUNT_GROUP:"accountGroup",ACCOUNT:"account",DESCRIPTION:"description",TYPE:"transactionType",AMOUNT:"amount",DEBIT:"debit",CREDIT:"credit",BALANCE:"balance"},l=(0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)({},r.DATE,"Date"),r.ACCOUNT_GROUP,"Account Group"),r.ACCOUNT,"Account"),r.TYPE,"Transaction Type"),r.AMOUNT,"Amount"),r.DESCRIPTION,"Description"),u={DEBIT:"DEBIT",CREDIT:"CREDIT"},s={HDFC_AS_XLS_V1:"HDFC - XLS - V1",SBI_AS_XLS_V1:"SBI - XLS - V1",AXIS_AS_PDF_V1:"AXIS - PDF - V1"}},8573:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(1967);const o={getAll:function(){return a.A.get("/api/v1/accounts")},upsert:function(e){return a.A.post("/api/v1/account",e)},delete:function(e){return a.A.delete("/api/v1/account/".concat(e))}}}}]);