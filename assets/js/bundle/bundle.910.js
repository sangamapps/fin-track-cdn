"use strict";(self.webpackChunkfin_track_ui=self.webpackChunkfin_track_ui||[]).push([[910],{5370:(e,t,n)=>{n.d(t,{A:()=>a});const a={getFormattedAmount:function(e){return e.toLocaleString("en-IN",{minimumFractionDigits:2})}}},7910:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(3029),c=n(2901),l=n(4441),o=n(3954),r=n(5501),u=n(4467),s=n(6540),i=n(1225),m=n(378),d=n(7634),g=n(3908),f=n(5474),A=n(3632),p=n(5370),h=n(2543);function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}var E=function(e){function t(){var e,n,c,r;(0,a.A)(this,t);for(var s=arguments.length,i=new Array(s),d=0;d<s;d++)i[d]=arguments[d];return n=this,c=t,r=[].concat(i),c=(0,o.A)(c),e=(0,l.A)(n,v()?Reflect.construct(c,r||[],(0,o.A)(n).constructor):c.apply(n,r)),(0,u.A)(e,"state",{selectedAccount:null,showModal:!1}),(0,u.A)(e,"toggleModal",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e.setState({showModal:!e.state.showModal,selectedAccount:t})})),(0,u.A)(e,"handleDelete",(function(t){e.props.dispatch((0,g.mN)(t)).then((function(){m.oR.info("Account deleted ✅")}))})),e}return(0,r.A)(t,e),(0,c.A)(t,[{key:"getAccountsContainer",value:function(){var e=this,t=this.props,n=t.accounts;if(t.loadingAccounts)return A.A.spinnerLoader("mt-4");if(0===n.length)return s.createElement("div",{className:"mt-4"},s.createElement("span",{className:"text-muted"},"No accounts found."));var a=h.groupBy(n,"type");return h.keys(a).map((function(t){var n=a[t].reduce((function(e,t){return e+t.closingBalance}),0);return s.createElement("div",{key:t,className:"mt-3"},s.createElement("div",{className:"d-flex justify-content-between align-items-center"},s.createElement("h3",{className:"mb-0"},f.Z0[t]),s.createElement("span",{className:"badge bg-primary"},"Closing Balance: ₹",p.A.getFormattedAmount(n))),s.createElement("ul",{className:"list-group mt-2"},a[t].map((function(t){return s.createElement("li",{key:t._id,className:"list-group-item d-flex justify-content-between align-items-center"},s.createElement("div",null,s.createElement("strong",null,t.name),s.createElement("p",{className:"mb-0 text-muted"},t.description),s.createElement("div",{className:"text-muted mt-1 fs-6"},s.createElement("div",null,"Opening Balance:",s.createElement("span",null,"₹",p.A.getFormattedAmount(t.openingBalance))),s.createElement("div",null,"Total Credit:"," ",s.createElement("span",{className:"text-success"},"₹",p.A.getFormattedAmount(t.totalCredit))),s.createElement("div",null,"Total Debit:"," ",s.createElement("span",{className:"text-danger"},"₹",p.A.getFormattedAmount(t.totalDebit))),s.createElement("div",null,"Closing Balance:"," ",s.createElement("strong",null,"₹",p.A.getFormattedAmount(t.closingBalance))))),s.createElement("div",null,s.createElement("button",{className:"btn btn-sm btn-warning me-2",onClick:function(){return e.toggleModal(t)}},"Edit"),s.createElement("button",{className:"btn btn-sm btn-danger",onClick:function(){return e.handleDelete(t._id)}},"Delete")))}))))}))}},{key:"getCrudAccountModal",value:function(){var e=this;return s.createElement(d.A,{show:this.state.showModal,account:this.state.selectedAccount,onClose:function(){return e.toggleModal()}})}},{key:"getAddButton",value:function(){var e=this;return s.createElement("button",{className:"btn btn-dark rounded-circle position-fixed bottom-0 end-0 m-4",onClick:function(){return e.toggleModal()},style:{width:"50px",height:"50px"}},"+")}},{key:"render",value:function(){return s.createElement("div",{className:"container mt-3"},s.createElement("h1",null,"Accounts"),this.getAccountsContainer(),this.getCrudAccountModal(),this.getAddButton())}}])}(s.Component);const b=(0,i.Ng)((function(e){return h.pick(e.user,["accounts","loadingAccounts"])}))(E)}}]);