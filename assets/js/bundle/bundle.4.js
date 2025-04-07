"use strict";(self.webpackChunkfin_track_ui=self.webpackChunkfin_track_ui||[]).push([[4],{4:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var a=n(3029),s=n(2901),o=n(4441),r=n(3954),l=n(5501),i=n(4467),c=n(6540),u=n(1225),d=n(378),m=n(756),p=n(3908),f=n(3632),v=n(2543);function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}var g=function(e){function t(){var e,n,s,l;(0,a.A)(this,t);for(var c=arguments.length,u=new Array(c),m=0;m<c;m++)u[m]=arguments[m];return n=this,s=t,l=[].concat(u),s=(0,r.A)(s),e=(0,o.A)(n,h()?Reflect.construct(s,l||[],(0,r.A)(n).constructor):s.apply(n,l)),(0,i.A)(e,"state",{selectedRule:null,showModal:!1}),(0,i.A)(e,"toggleModal",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e.setState({showModal:!e.state.showModal,selectedRule:t})})),(0,i.A)(e,"handleDelete",(function(t){e.props.dispatch((0,p.NC)(t)).then((function(){d.oR.success("Rule deleted ✅")}))})),e}return(0,l.A)(t,e),(0,s.A)(t,[{key:"getRulesContainer",value:function(){var e=this,t=this.props,n=t.rules;return t.loadingRules?f.A.spinnerLoader("mt-4"):0===n.length?c.createElement("div",{className:"mt-4"},c.createElement("span",{className:"text-muted"},"No rules found.")):c.createElement("div",{className:"row"},n.map((function(t,n){return c.createElement("div",{key:n,className:"col-md-4 mb-3"},c.createElement("div",{className:"card shadow-sm"},c.createElement("div",{className:"card-body"},c.createElement("h5",{className:"card-title"},t.name),c.createElement("p",{className:"card-text"},c.createElement("strong",null,"Contains:")," ",t.contains),c.createElement("span",{className:"badge bg-primary"},t.tag),c.createElement("div",{className:"mt-3 d-flex justify-content-between"},c.createElement("button",{className:"btn btn-warning btn-sm",onClick:function(){return e.toggleModal(t)}},c.createElement("i",{className:"bi bi-pencil"})," Edit"),c.createElement("button",{className:"btn btn-danger btn-sm",onClick:function(){return e.handleDelete(t._id)}},c.createElement("i",{className:"bi bi-trash"})," Delete")))))})))}},{key:"getCrudRuleModal",value:function(){var e=this;return c.createElement(m.A,{show:this.state.showModal,rule:this.state.selectedRule,onClose:function(){return e.toggleModal()}})}},{key:"getAddButton",value:function(){var e=this;return c.createElement("button",{className:"btn btn-dark rounded-circle position-fixed bottom-0 end-0 m-4",onClick:function(){return e.toggleModal()},style:{width:"50px",height:"50px"}},"+")}},{key:"render",value:function(){return c.createElement("div",{className:"container mt-3"},c.createElement("h1",null,"Rules"),this.getRulesContainer(),this.getCrudRuleModal(),this.getAddButton())}}])}(c.Component);const E=(0,u.Ng)((function(e){return v.pick(e.user,["rules","loadingRules"])}))(g)},448:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(3029),s=n(2901),o=n(4441),r=n(3954),l=n(5501),i=n(6540),c=n(6634);function u(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(u=function(){return!!e})()}var d=function(e){function t(){return(0,a.A)(this,t),e=this,n=t,s=arguments,n=(0,r.A)(n),(0,o.A)(e,u()?Reflect.construct(n,s||[],(0,r.A)(e).constructor):n.apply(e,s));var e,n,s}return(0,l.A)(t,e),(0,s.A)(t,[{key:"getModalTitle",value:function(){return i.createElement("h5",{className:"modal-title"},this.props.title)}},{key:"getCloseButton",value:function(){return i.createElement("button",{type:"button",className:"btn-close",onClick:this.props.onClose})}},{key:"getModalHeader",value:function(){return i.createElement("div",{className:"modal-header"},this.getModalTitle(),this.getCloseButton())}},{key:"getModalBody",value:function(){var e=this.props.body;return e&&i.createElement("div",{className:"modal-body"},e)}},{key:"getCancelButton",value:function(){return i.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.props.onClose},"Cancel")}},{key:"getSubmitButton",value:function(){return i.createElement("button",{type:"submit",className:"btn btn-dark",onClick:this.props.onSubmitClick},"Submit")}},{key:"getModalFooter",value:function(){return i.createElement("div",{className:"modal-footer"},this.getCancelButton(),this.getSubmitButton())}},{key:"render",value:function(){return i.createElement(c.A,{in:this.props.show,timeout:490,classNames:"modal-container",unmountOnExit:!0},i.createElement("div",null,i.createElement("div",{className:"modal-backdrop fade show"}),i.createElement("div",{className:"modal fade show d-block"},i.createElement("div",{className:"modal-dialog"},i.createElement("div",{className:"modal-content"},this.getModalHeader(),this.getModalBody(),this.getModalFooter())))))}}])}(i.Component)},756:(e,t,n)=>{n.d(t,{A:()=>g});var a=n(3029),s=n(2901),o=n(4441),r=n(3954),l=n(5501),i=n(4467),c=n(6540),u=n(1225),d=n(378),m=n(448),p=n(3908);function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}function v(e){var t,n,a,s;return{_id:(null===(t=e.rule)||void 0===t?void 0:t._id)||"",name:(null===(n=e.rule)||void 0===n?void 0:n.name)||"",contains:(null===(a=e.rule)||void 0===a?void 0:a.contains)||"",tag:(null===(s=e.rule)||void 0===s?void 0:s.tag)||""}}var h=function(e){function t(e){var n,s,l,u;return(0,a.A)(this,t),s=this,l=t,u=[e],l=(0,r.A)(l),n=(0,o.A)(s,f()?Reflect.construct(l,u||[],(0,r.A)(s).constructor):l.apply(s,u)),(0,i.A)(n,"handleChange",(function(e){n.setState((0,i.A)({},e.target.name,e.target.value))})),(0,i.A)(n,"handleSubmit",(function(e){e.preventDefault(),n.state.tag=n.state.tag||n.state.name,n.props.dispatch((0,p.Pv)(n.state)).then((function(e){d.oR.info("Rule saved ✅"),(n.props.onSave||n.props.onClose||function(){})(e.payload)}))})),(0,i.A)(n,"onSubmitClick",(function(){n.formRef.current&&n.formRef.current.requestSubmit()})),n.state=v(e),n.formRef=c.createRef(),n}return(0,l.A)(t,e),(0,s.A)(t,[{key:"componentDidUpdate",value:function(e){e.rule!==this.props.rule&&this.setState(v(this.props))}},{key:"getModalTitle",value:function(){var e;return null!==(e=this.props.rule)&&void 0!==e&&e._id?"Edit Rule":"Add Rule"}},{key:"getModalBody",value:function(){var e=this.state,t=e.name,n=e.contains,a=e.tag;return c.createElement("form",{ref:this.formRef,onSubmit:this.handleSubmit},c.createElement("div",{className:"mb-2"},c.createElement("label",{className:"form-label"},"Name"),c.createElement("input",{type:"text",className:"form-control",name:"name",value:t,onChange:this.handleChange,placeholder:"Rule Name",required:!0})),c.createElement("div",{className:"mb-2"},c.createElement("label",{className:"form-label"},"Contains"),c.createElement("textarea",{className:"form-control",name:"contains",value:n,onChange:this.handleChange,placeholder:"Keywords (eg: Keyword1, Keyword2)",required:!0})),c.createElement("div",{className:"mb-2"},c.createElement("label",{className:"form-label"},"Tag"),c.createElement("input",{type:"text",className:"form-control",name:"tag",value:a||t,onChange:this.handleChange,placeholder:"Tag",required:!0})))}},{key:"render",value:function(){return c.createElement(m.A,{show:this.props.show,title:this.getModalTitle(),body:this.getModalBody(),onClose:this.props.onClose,onSubmitClick:this.onSubmitClick})}}])}(c.Component);const g=(0,u.Ng)()(h)},6634:(e,t,n)=>{n.d(t,{A:()=>m});var a=n(8168),s=n(8587),o=n(7387);function r(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var l=n(6540),i=n(851),c=n(2403),u=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return a=t,void((n=e).classList?n.classList.remove(a):"string"==typeof n.className?n.className=r(n.className,a):n.setAttribute("class",r(n.className&&n.className.baseVal||"",a)));var n,a}))},d=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var a=t.resolveArguments(e,n),s=a[0],o=a[1];t.removeClasses(s,"exit"),t.addClass(s,o?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var a=t.resolveArguments(e,n),s=a[0],o=a[1]?"appear":"enter";t.addClass(s,o,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var a=t.resolveArguments(e,n),s=a[0],o=a[1]?"appear":"enter";t.removeClasses(s,o),t.addClass(s,o,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,a="string"==typeof n,s=a?(a&&n?n+"-":"")+e:n[e];return{baseClassName:s,activeClassName:a?s+"-active":n[e+"Active"],doneClassName:a?s+"-done":n[e+"Done"]}},t}(0,o.A)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var a=this.getClassNames(t)[n+"ClassName"],s=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&s&&(a+=" "+s),"active"===n&&e&&(0,c.F)(e),a&&(this.appliedClasses[t][n]=a,function(e,t){e&&t&&t.split(" ").forEach((function(t){return a=t,void((n=e).classList?n.classList.add(a):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,a)||("string"==typeof n.className?n.className=n.className+" "+a:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+a)));var n,a}))}(e,a))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],a=n.base,s=n.active,o=n.done;this.appliedClasses[t]={},a&&u(e,a),s&&u(e,s),o&&u(e,o)},n.render=function(){var e=this.props,t=(e.classNames,(0,s.A)(e,["classNames"]));return l.createElement(i.Ay,(0,a.A)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(l.Component);d.defaultProps={classNames:""},d.propTypes={};const m=d}}]);