"use strict";(self.webpackChunkfin_track_ui=self.webpackChunkfin_track_ui||[]).push([[623],{5004:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var n=a(467),r=a(3029),s=a(2901),c=a(4441),l=a(3954),o=a(5501),i=a(4467),u=a(4756),d=a.n(u),m=a(6540),f=a(378),h=a(5474),p=a(3256),v=a(8736),x=a(2543);function E(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(E=function(){return!!e})()}var b=function(e){function t(){var e,a,s,o;(0,r.A)(this,t);for(var u=arguments.length,m=new Array(u),p=0;p<u;p++)m[p]=arguments[p];return a=this,s=t,o=[].concat(m),s=(0,l.A)(s),e=(0,c.A)(a,E()?Reflect.construct(s,o||[],(0,l.A)(a).constructor):s.apply(a,o)),(0,i.A)(e,"state",{selectedExtractor:x.keys(h.Tv)[0],selectedFile:null,transactions:[],extractionStatus:!1,extracted:0}),(0,i.A)(e,"handleExtractorChange",(function(t){e.setState({selectedExtractor:t.target.value,transactions:[],extracted:0})})),(0,i.A)(e,"handleFileUpload",function(){var t=(0,n.A)(d().mark((function t(a){var n;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.target.files[0]){t.next=3;break}return t.abrupt("return",e.setState({selectedFile:null,transactions:[],extracted:0}));case 3:e.setState({selectedFile:n,transactions:[],extracted:0});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),(0,i.A)(e,"getTransactions",(function(){if(!e.state.selectedFile)return f.oR.warn("Please select a file");e.setState({extractionStatus:!0,extracted:0}),v.A.extract(e.state.selectedExtractor,e.state.selectedFile).then((function(t){e.setState({transactions:t.processed_transactions,extractionStatus:!1,extracted:1})})).catch((function(t){e.setState({transactions:[],extractionStatus:!1,extracted:0}),f.oR.error(t.message)}))})),e}return(0,o.A)(t,e),(0,s.A)(t,[{key:"getUploadCard",value:function(){return m.createElement("div",{className:"card p-3 shadow-lg"},m.createElement("h3",{className:"mb-3"},"Upload Statement"),m.createElement("div",{className:"mb-3"},m.createElement("label",{className:"form-label"},"Select Extractor"),m.createElement("select",{className:"form-select",value:this.state.selectedExtractor,onChange:this.handleExtractorChange},x.keys(h.Tv).map((function(e,t){return m.createElement("option",{key:t,value:e},h.Tv[e])})))),m.createElement("div",{className:"mb-3"},m.createElement("label",{className:"form-label"},"Upload File"),m.createElement("input",{type:"file",className:"form-control",onChange:this.handleFileUpload})),m.createElement("div",null,m.createElement("button",{className:"btn btn-primary",onClick:this.getTransactions},"Extract")))}},{key:"showTransactions",value:function(){var e=this.state.transactions;if(0==e.length){if(this.state.extractionStatus)return m.createElement("div",{className:"mt-4 d-flex justify-content-center"},m.createElement("div",{className:"spinner-border text-primary text-center",role:"status"},m.createElement("span",{className:"visually-hidden"},"Loading...")));if(this.state.extracted)return m.createElement("div",{className:"mt-4 alert alert-danger"},"No transactions found")}return m.createElement(p.A,{transactions:e,bulkSave:!0})}},{key:"render",value:function(){return m.createElement("div",{className:""},this.getUploadCard(),this.showTransactions())}}])}(m.Component)}}]);