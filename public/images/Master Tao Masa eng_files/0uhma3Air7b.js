/*!CK:3526500370!*//*1445827661,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["fAB4C"]); }

__d("ComposerVersion",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={MBASIC_LEGACY:"legacy",MBASIC_AMBER:"amber",MBASIC_LEGACY_SHARE:"legacy_share",MBASIC_AMBER_SHARE:"amber_share",WWW_LEGACY:"www_legacy",WWW_REACT:"www_react",WWW_REACT_WORK:"www_react_work",WWW_REACT_SHARE:"www_react_share",WWW_REACT_SHARER:"www_react_sharer"};},null,{});
__d("FollowRequestResultEnum",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={REVERT:"revert"};},null,{});
__d("ProfileSubFollowStatus",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={REGULAR_FOLLOW:"follow",RECAP:"recap",SEE_FIRST:"see_first"};},null,{});
__d("ReactComposerAttachmentType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={STATUS:"STATUS",MEDIA:"MEDIA",ALBUM:"ALBUM",MLE:"MLE",LIFE_EVENT:"LIFE_EVENT",NOTES:"NOTES",QANDA:"QANDA",PAGES_EXTRA:"PAGES_EXTRA",FILE:"FILE",QUESTION:"QUESTION",SELL:"SELL",WORK_HEADER:"WORK_HEADER"};},null,{});
__d("SeeFirstNuxEvents",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={SWITCHER_NUX_IMP:"switcher_nux_imp",SEE_FIRST_SELECTED:"see_first_selected",XOUT:"xout",NOT_NOW:"not_now",IMP:"imp",ENTER_DIALOG:"enter_dialog",BATCH_SEE_FIRST_SELECTED:"batch_see_first_selected"};},null,{});
__d('XUIBlock',['React','cx'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=h.PropTypes,k={propTypes:{background:j.oneOf(['base-wash','light-wash','white','highlight','transparent'])},getDefaultProps:function(){return {background:'transparent'};},getBackgroundClass:function(l){var m=(l.background==='base-wash'?"_4-u5":'')+(l.background==='light-wash'?' '+"_57d8":'')+(l.background==='white'?' '+"_4-u8":'')+(l.background==='highlight'?' '+"_4-u7":'');return m;}};f.exports=k;},null);
__d('XUICard.react',['React','XUIBlock','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=h.createClass({displayName:'XUICard',propTypes:i.propTypes,getDefaultProps:function(){return babelHelpers._extends({},i.getDefaultProps(),{background:'white'});},render:function(){var m=k("_4-u2",i.getBackgroundClass(this.props));return (h.createElement('div',babelHelpers._extends({},this.props,{className:k(this.props.className,m)}),this.props.children));}});f.exports=l;},null);
__d('XUICardSection.react',['React','XUIBlock','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=h.createClass({displayName:'XUICardSection',propTypes:i.propTypes,getDefaultProps:i.getDefaultProps,render:function(){var m=k("_4-u3",i.getBackgroundClass(this.props));return (h.createElement('div',babelHelpers._extends({},this.props,{className:k(this.props.className,m)}),this.props.children));}});f.exports=l;},null);
__d("XFeedSeeFirstNuxController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/feed\/control\/see_first\/nux\/",{});},null,{});
__d('ProfileHoverButton',['Arbiter','CSS','DOM','FeedBlacklistButton','ProfileSubFollowStatus','FollowRequestResultEnum','Run','AsyncRequest','Event','SubscriptionsHandler','SubscribeButton','SeeFirstNuxEvents','XFeedSeeFirstNuxController','cx','csx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){if(c.__markCompiled)c.__markCompiled();var w=1;function x(y,z,aa,ba){'use strict';this.$ProfileHoverButton1=y;this.$ProfileHoverButton2=z;this.$ProfileHoverButton3=ba;this.$ProfileHoverButton4=aa;this.$ProfileHoverButton5=null;this.$ProfileHoverButton6=new q();this.$ProfileHoverButton2.subscribe('itemclick',(function(ca,da){var ea=da.item.getValue();if(ea==='unfollow'){h.inform(r.UNSUBSCRIBED,{profile_id:this.$ProfileHoverButton3.id});h.inform(k.BLACKLIST,{profile_id:this.$ProfileHoverButton3.id});if(this.$ProfileHoverButton4)this.$ProfileHoverButton4.hide();}else{this.setSelected(ea);if(ea===l.SEE_FIRST&&this.$ProfileHoverButton4){this.$ProfileHoverButton4.hide();this.logNux(s.SEE_FIRST_SELECTED);}}}).bind(this));this.$ProfileHoverButton6.addSubscriptions(h.subscribe(r.SUBSCRIBED,this.setSelected.bind(this,l.REGULAR_FOLLOW)));this.$ProfileHoverButton6.addSubscriptions(h.subscribe(m.REVERT,this.handleResponse.bind(this)));if(this.$ProfileHoverButton4){this.$ProfileHoverButton4.show();this.logNux(s.IMP);this.$ProfileHoverButton6.addSubscriptions(p.listen(j.find(this.$ProfileHoverButton4.getRoot(),"._50zy"),'click',this.logNux.bind(this,s.XOUT)));}n.onLeave(this.cleanUp.bind(this));}x.prototype.logNux=function(event){'use strict';var y=t.getURIBuilder().getURI();new o(y).setData({event:event,id:this.$ProfileHoverButton3.id}).send();};x.prototype.getButtons=function(){'use strict';return j.scry(this.$ProfileHoverButton1,"._3oz-");};x.prototype.getSelected=function(){'use strict';var y=this.getButtons(),z=null;y.forEach(function(aa){var ba=aa.getAttribute('data-status');if(i.hasClass(aa,"_52-0"))z=ba;});return z;};x.prototype.setSelected=function(y){'use strict';this.$ProfileHoverButton5=this.getSelected();var z=this.getButtons();z.forEach(function(aa){var ba=aa.getAttribute('data-status');if(ba===y){i.addClass(aa,"_52-0");}else i.removeClass(aa,"_52-0");});this.$ProfileHoverButton2.forEachItem(function(aa){if(!aa.getValue)return;var ba=aa.getValue();if(ba==='unfollow')return;var ca=aa.getRoot();if(ba===y){i.addClass(ca,"_52-0");}else i.removeClass(ca,"_52-0");});};x.prototype.handleResponse=function(event,y){'use strict';if(y.id!==this.$ProfileHoverButton3.id||y.location!==w)return;if(event===m.REVERT)this.revert();};x.prototype.revert=function(){'use strict';if(this.$ProfileHoverButton5===null)return;this.setSelected(this.$ProfileHoverButton5);};x.prototype.cleanUp=function(){'use strict';this.$ProfileHoverButton6&&this.$ProfileHoverButton6.release();this.$ProfileHoverButton6=null;this.$ProfileHoverButton1=null;this.$ProfileHoverButton2=null;this.$ProfileHoverButton3=null;};f.exports=x;},null);
__d('TidyArbiter',['TidyArbiterMixin'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=babelHelpers._extends({},h);f.exports=i;},null);
__d('TimelineCoverCollapse',['Arbiter','DOMDimensions','Style','TidyArbiter','$'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();g.collapse=function(m,n){n--;var o=i.getViewportDimensions().height,p=i.getDocumentDimensions().height,q=o+n;if(p<=q)j.set(l('pagelet_timeline_main_column'),'min-height',q+'px');window.scrollBy(0,n);k.inform('TimelineCover/coverCollapsed',n,h.BEHAVIOR_STATE);};},null);
__d('ReactComposerAttachmentActionType',['keyMirror'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports=h({REGISTER_ATTACHMENT:null,SELECT_ATTACHMENT:null,SET_INITIALIZED:null,SET_BOOTLOADED:null,SET_BOOTSTRAPPED:null});},null);
__d('ReactComposerLoggingQueue',['requireWeak'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=false;h('ReactComposerLoggingStore',function(l){i=!!l;});var j=[],k={add:function(l){if(i)return;j.push(l);},pop:function(){return j.shift();},getLength:function(){return j.length;}};f.exports=k;},null);
__d('ReactComposerActionTypes',['keyMirror'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports=h({INIT_CONFIG:null,POST_ERROR:null,POST_STARTED:null,POST_INTENDED:null,POST_SUCCEEDED:null,PUBLISH_STARTED:null,PUBLISH_SUCCEEDED:null,COMPOSER_RESET:null});},null);
__d('ReactComposerDispatcher',['Dispatcher'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports=new h();},null);
__d('ReactComposerStoreBase',['ReactComposerActionTypes','ReactComposerDispatcher','ReactComposerEvents','EventEmitter','Map'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m,n;m=babelHelpers.inherits(o,k);n=m&&m.prototype;function o(p,q){'use strict';n.constructor.call(this);this.$ReactComposerStoreBase1=p;this.$ReactComposerStoreBase2=new l();this.$ReactComposerStoreBase3=i.register((function(r){switch(r.type){case h.COMPOSER_RESET:this.__cleanup(r);break;}q(r);}).bind(this));}o.prototype.getComposerData=function(p){'use strict';var q=this.$ReactComposerStoreBase2.get(p);if(!q){q=this.$ReactComposerStoreBase1();this.$ReactComposerStoreBase2.set(p,q);}return q;};o.prototype.clearComposerData=function(p){'use strict';this.$ReactComposerStoreBase2.set(p,this.$ReactComposerStoreBase1());};o.prototype.addChangeListener=function(p){'use strict';return this.addListener(j.CHANGE,p);};o.prototype.emitChange=function(p){'use strict';this.emit(j.CHANGE,{composerID:p});};o.prototype.getDispatchToken=function(){'use strict';return this.$ReactComposerStoreBase3;};o.prototype.validateAction=function(p,q){'use strict';q=[].concat(q);var r=q.map(function(s){if(p[s]===undefined)throw 'Action missing field: '+s;return p[s];});if(q.length===1)return r[0];return r;};o.prototype.__cleanup=function(p){'use strict';this.clearComposerData(p.composerID);this.emitChange(p.composerID);};f.exports=o;},null);
__d('ReactComposerAttachmentStore',['ReactComposerAttachmentActionType','ReactComposerLoggingQueue','ReactComposerStoreBase','ImmutableObject','performanceAbsoluteNow'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m,n;m=babelHelpers.inherits(o,j);n=m&&m.prototype;function o(){'use strict';var p;n.constructor.call(this,function(){return {attachments:[],selectedAttachment:null,isSelectedAttachmentActive:false};},function(q){switch(q.type){case h.REGISTER_ATTACHMENT:p&&p.$ReactComposerAttachmentStore1(q);break;case h.SELECT_ATTACHMENT:p&&p.$ReactComposerAttachmentStore2(q);break;case h.SET_BOOTLOADED:p&&p.$ReactComposerAttachmentStore3(q);break;case h.SET_BOOTSTRAPPED:p&&p.$ReactComposerAttachmentStore4(q);break;case h.SET_INITIALIZED:p&&p.$ReactComposerAttachmentStore5(q);break;}});p=this;}o.prototype.getAttachment=function(p,q){'use strict';var r=this.getComposerData(p);return r.attachments.find(function(s){return (s.id===q);});};o.prototype.getSelectedAttachmentID=function(p){'use strict';var q=this.getComposerData(p);if(q.selectedAttachment)return q.selectedAttachment.id;return null;};o.prototype.hasAttachment=function(p,q){'use strict';return this.getComposerData(p).attachments.some(function(r){return r.id===q;});};o.prototype.getIsAttachmentSelected=function(p,q){'use strict';var r=this.getComposerData(p).selectedAttachment;return !!r&&r.id===q;};o.prototype.isSelectedAttachmentActive=function(p){'use strict';return this.getComposerData(p).isSelectedAttachmentActive;};o.prototype.isBootstrapped=function(p,q){'use strict';var r=this.getComposerData(p),s=this.$ReactComposerAttachmentStore6(r,q);return r.attachments[s].bootstrapped;};o.prototype.getBootloadDuration=function(p,q){'use strict';var r=this.getComposerData(p),s=this.$ReactComposerAttachmentStore6(r,q);return r.attachments[s].bootloadDuration;};o.prototype.getBootstrapDuration=function(p,q){'use strict';var r=this.getComposerData(p),s=this.$ReactComposerAttachmentStore6(r,q);return r.attachments[s].bootstrapDuration;};o.prototype.$ReactComposerAttachmentStore1=function(p){'use strict';var q=this.validateAction(p,['composerID','id']),r=q[0],s=q[1],t=this.getComposerData(r),u=new k({id:s,initialized:false,bootloaded:p.bootloaded,bootstrapped:p.bootstrapped,module:p.module,postButtonModule:p.postButtonModule,initTime:null,bootloadDuration:null,bootstrapDuration:null});t.attachments.push(u);if(p.selected)t.selectedAttachment=u;this.emitChange(r);};o.prototype.$ReactComposerAttachmentStore2=function(p){'use strict';var q=this.validateAction(p,['id','composerID']),r=q[0],s=q[1],t=this.getComposerData(s),u=this.$ReactComposerAttachmentStore6(t,r);t.selectedAttachment=t.attachments[u];t.isSelectedAttachmentActive=true;i.add(p);this.emitChange(s);};o.prototype.$ReactComposerAttachmentStore3=function(p){'use strict';var q=this.validateAction(p,['id','composerID','attachmentModule']),r=q[0],s=q[1],t=q[2],u=this.getComposerData(s),v=this.$ReactComposerAttachmentStore6(u,r);u.attachments[v]=k.set(u.attachments[v],{bootloaded:true,bootloadDuration:l()-u.attachments[v].initTime,module:t,postButtonModule:p.postButtonModule});this.emitChange(s);};o.prototype.$ReactComposerAttachmentStore4=function(p){'use strict';var q=this.validateAction(p,['id','composerID']),r=q[0],s=q[1],t=this.getComposerData(s),u=this.$ReactComposerAttachmentStore6(t,r);t.attachments[u]=k.set(t.attachments[u],{bootstrapped:true,bootstrapDuration:l()-t.attachments[u].initTime});i.add(p);this.emitChange(s);};o.prototype.$ReactComposerAttachmentStore5=function(p){'use strict';var q=this.validateAction(p,['id','composerID']),r=q[0],s=q[1],t=this.getComposerData(s),u=this.$ReactComposerAttachmentStore6(t,r);t.attachments[u]=k.set(t.attachments[u],{initialized:true,initTime:l()});this.emitChange(s);};o.prototype.$ReactComposerAttachmentStore6=function(p,q){'use strict';var r=-1;for(var s in p.attachments)if(p.attachments[s].id===q){r=Number(s);break;}if(r===-1)throw "Undefined attachment id: "+q;return r;};f.exports=new o();},null);
__d('ReactComposerPostButtonContainer.react',['ReactComposerPostButtonContainerMixin','React'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=i.createClass({displayName:'ReactComposerPostButtonContainer',mixins:[h]});f.exports=j;},null);
__d('ReactComposerStatusAttachmentPlaceholder.react',['ReactComposerAttachmentActions','ReactComposerAttachmentStore','ReactComposerAttachmentType','ReactComposerConfig','ReactComposerDragDropPromptLazy.react','ReactComposerPostUtilsCore','ReactComposerProfilePhotoBlock.react','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerStatusLazyAttachmentTextareaContainer.react','ReactComposerStatusPlaceholderFooter.react','ReactComposerTaggerSummaryPlaceholder.react','ActorURI','Bootloader','Event','ReactComponentWithPureRenderMixin','React','ReactDOM','SubscriptionsHandler','curry'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){if(c.__markCompiled)c.__markCompiled();var aa=w.PropTypes,ba=w.createClass({displayName:'ReactComposerStatusAttachmentPlaceholder',_subscriptionsHandler:null,mixins:[v,o(i)],propTypes:{config:k.isRequired,expanded:aa.bool,init:aa.func.isRequired,placeholder:aa.string.isRequired},statics:{calculateState:function(ca,da){return {isActive:i.isSelectedAttachmentActive(ca)};}},componentDidMount:function(){var ca=new y();ca.addSubscriptions(u.listen(x.findDOMNode(this.refs.form),'success',z(m.handlePostSucceeded,this.context.composerID)));this._subscriptionsHandler=ca;},componentWillUnmount:function(){this._subscriptionsHandler&&this._subscriptionsHandler.release();},render:function(){var ca;if(this.state.isActive||this.props.expanded)ca=w.createElement(q,{background:this.props.expanded?'white':'light-wash',config:this.props.config});var da=this.props.config.attachmentsConfig[j.STATUS],ea=w.createElement(p,{expanded:this.props.expanded,hasProfilePic:da.showProfilePic,onFocus:this._onFocus,placeholder:this.props.placeholder}),fa;if(da.showProfilePic){fa=w.createElement(n,{profilePicSrc:da.profilePicSrc,profileURI:da.profileURI},ea);}else fa=ea;return (w.createElement('div',{onClick:this.props.init,onFocus:this.props.init,onMouseOver:this.props.init},w.createElement(l,{root:this,config:this.props.config,onFilesDrop:this._onFilesDrop,onURLDrop:this._onURLDrop}),w.createElement('form',{action:s.create('/ajax/updatestatus.php',this.context.actorID),method:'post',rel:'async',ref:'form'},fa,w.createElement(r,null),ca,this._getHiddenInputs())));},_onFocus:function(){h.selectAttachment(this.context.composerID,j.STATUS,{fromFocus:true});},_onFilesDrop:function(ca){this.props.init();var da=this.props.config.attachmentsConfig[j.MEDIA];t.loadModules(["ReactComposerStatusUtils","ReactComposerPhotoUploader"],(function(ea,fa){var ga=this.context.composerID;ea.uploadDroppedFiles(ga,ca,new fa(this.context,da.photoLimit,{disableFaceRecognition:da.disableFaceboxTagger}));}).bind(this));},_onURLDrop:function(ca){this.props.init();t.loadModules(["ReactComposerScrapedAttachmentActions","ReactComposerStatusUtils","ReactComposerAttachmentActions","ReactComposerAttachmentType"],(function(da,ea,fa,ga){var ha=this.props.config.attachmentsConfig[ga.STATUS];fa.selectAttachment(this.context.composerID,ga.STATUS);da.enabled(this.context.composerID,ha.canScrapeShare);ea.scrapeLink(this.context.composerID,this.context.targetID,ca,this.context.composerType);}).bind(this));},_getHiddenInputs:function(){var ca=m.getCoreData(this.context.composerID,this.props.config.contextInfo,this.context.targetID),da=[];for(var ea in ca)da.push(w.createElement('input',{type:'hidden',name:ea,value:ca[ea],key:ea}));return da;}});f.exports=ba;},null);
__d('ReactComposerBootloaderPropTypes',['React'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=h.PropTypes;f.exports=i.shape({statusAttachment:i.func.isRequired,mediaAttachment:i.func.isRequired,qandaAttachment:i.func,questionAttachment:i.func,extraAttachment:i.func});},null);
__d("XFacebarBootloadController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/typeahead\/search\/facebar\/bootload\/",{placeholder_id:{type:"String"}});},null,{});
__d('FacebarPlaceholderShortcut',['KeyEventController','Run','setTimeoutAcrossTransitions'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();function k(l){'use strict';this._input=l;this._listener=null;}k.prototype.enable=function(){'use strict';this._registerListener();};k.prototype._registerListener=function(){'use strict';this._listener&&this._listener.remove();this._listener=h.registerKey('SLASH',this._handleKeydown.bind(this));i.onLeave((function(){j(this._registerListener.bind(this),0);}).bind(this));};k.prototype.disable=function(){'use strict';this._listener&&this._listener.remove();this._listener=null;};k.prototype._handleKeydown=function(l){'use strict';this._input.focus();return false;};f.exports=k;},null);
__d('FacebarBootloader',['AsyncRequest','CSS','Event','$','Run','BanzaiODS','SubscriptionsHandler','getActiveElement','XFacebarBootloadController','FacebarPlaceholderShortcut'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r='facebar_bootloader',s=r+'_',t={isRequested:false,isFocused:false,isInitialized:false,init:function(u,v,w,x){this.reset();this.subscriptions=new n();this.placeholderID=w;this.searchInput=u;this.shortcutHandler=new q(u);this.loadingIndicator=v;this.shortcutHandler.enable();this.subscriptions.addSubscriptions(j.listen(u,'focus',(function(){this.requestSearch();this.showLoadingIndicator();}).bind(this)),j.listen(k(w),'mouseover',this.requestSearch.bind(this)));if(x)this.subscriptions.addSubscriptions(j.listen(window,'load',this.requestSearch.bind(this)));l.onUnload(this.reset.bind(this));this.isInitialized=true;if(u.value||o()==u){this.requestSearch();this.showLoadingIndicator();}},showLoadingIndicator:function(){if(this.loadingIndicator)i.show(this.loadingIndicator);},reset:function(){this.subscriptions&&this.subscriptions.release();this.shortcutHandler&&this.shortcutHandler.disable();this.searchInput=this.subscriptions=this.shortcutHandler=null;this.loadingIndicator=null;this.isRequested=this.isFocused=false;},requestSearch:function(){if(o()==this.searchInput&&!this.isFocused){this.isFocused=true;this.focusTime=Date.now();}if(this.isRequested||!this.isInitialized)return;this.isRequested=true;var u=p.getURIBuilder().setString('placeholder_id',this.placeholderID).getURI(),v=new h();v.setURI(u).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(true).setErrorHandler(function(w){m.bumpEntityKey(r,s+'request_failed');if(w&&w.errorSummary){m.bumpEntityKey(r,s+'request_failed_'+w.errorSummary);}else m.bumpEntityKey(r,s+'request_failed_no_error_summary');this.isRequested=false;}).send();},setFocus:function(u,v,w){if(!this.searchInput)return;m.bumpEntityKey(r,s+'response_arrived');if(this.searchInput.value||this.isFocused){u.getCore().isFocused=true;u.getCore().input.setValue(w.fromString(this.searchInput.value),true);u.getCore().setStartTime(this.focusTime);v.focus();v.setSelection({length:this.searchInput.selectionEnd-this.searchInput.selectionStart,offset:this.searchInput.selectionStart});v.togglePlaceholder();}this.reset();}};f.exports=t;},null);
__d('FacebarStructuredFragment',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(k,l){if(k&&l){return k.toLowerCase()==l.toLowerCase();}else return !k&&!l;}var i=new RegExp('['+'\\u0590-\\u07bf'+'\\u08a0-\\u08ff'+'\\ufb1d-\\ufb4f'+'\\ufb50-\\ufefc'+'\\u200e-\\u200f\\u202a-\\u202e'+']');function j(k){'use strict';this._text=String(k.text);this._uid=k.uid?String(k.uid):null;this._type=k.type?String(k.type):null;this._typeParts=null;}j.prototype.getText=function(){'use strict';return this._text;};j.prototype.getUID=function(){'use strict';return this._uid;};j.prototype.getType=function(){'use strict';return this._type;};j.prototype.getTypePart=function(k){'use strict';return this._getTypeParts()[k];};j.prototype.getLength=function(){'use strict';return this._text.length;};j.prototype.isType=function(k){'use strict';for(var l=0;l<arguments.length;l++)if(!h(arguments[l],this.getTypePart(l)))return false;return true;};j.prototype.isWhitespace=function(){'use strict';return (/^\s*$/.test(this._text));};j.prototype.hasRTL=function(){'use strict';return i.test(this._text);};j.prototype.toStruct=function(){'use strict';return {text:this._text,type:this._type,uid:this._uid};};j.prototype.getHash=function(k){'use strict';var l=k!=null?this._getTypeParts().slice(0,k).join(':'):this._type;return l+'::'+this._text;};j.prototype._getTypeParts=function(){'use strict';if(this._typeParts===null)this._typeParts=this._type?this._type.split(':'):[];return this._typeParts;};f.exports=j;},null);
__d('FacebarStructuredText',['createArrayFromMixed','FacebarStructuredFragment'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=/\s+$/;function k(o){if(!o){return [];}else if(o instanceof n){return o.toArray();}else return h(o).map(function(p){return new i(p);});}function l(o){return new i({text:o,type:'text'});}function m(o,p,q){var r=o.getText(),s=r.replace(p,q);if(r!=s){return new i({text:s,type:o.getType(),uid:o.getUID()});}else return o;}function n(o){'use strict';this._fragments=o||[];this._hash=null;}n.prototype.matches=function(o,p){'use strict';if(o){var q=this._fragments,r=o._fragments;return q.length==r.length&&!q.some(function(s,t){if(!p&&s.getUID()){return s.getUID()!=r[t].getUID();}else return s.getText()!=r[t].getText()||s.getType()!=r[t].getType();});}return false;};n.prototype.trim=function(){'use strict';var o=null,p=null;this.forEach(function(r,s){if(!r.isWhitespace()){if(o===null)o=s;p=s;}});if(p!==null){var q=this._fragments.slice(o,p+1);q.push(m(q.pop(),j,''));return new n(q);}else return new n([]);};n.prototype.pad=function(){'use strict';var o=this.getFragment(-1);if(o&&!j.test(o.getText())&&o.getText()!==''){return new n(this._fragments.concat(l(' ')));}else return this;};n.prototype.forEach=function(o){'use strict';this._fragments.forEach(o);return this;};n.prototype.matchType=function(o){'use strict';var p=null;for(var q=0;q<this._fragments.length;q++){var r=this._fragments[q],s=r.isType.apply(r,arguments);if(s&&!p){p=r;}else if(s||!r.isWhitespace())return null;}return p;};n.prototype.hasType=function(o){'use strict';var p=arguments;return this._fragments.some(function(q){return !q.isWhitespace()&&q.isType.apply(q,p);});};n.prototype.endsOnType=function(o){'use strict';var p=arguments,q=this._fragments[this._fragments.length-1];return !!q&&!q.isWhitespace()&&q.isType.apply(q,p);};n.prototype.isEmptyOrWhitespace=function(){'use strict';return !this._fragments.some(function(o){return !o.isWhitespace();});};n.prototype.hasRTL=function(){'use strict';return this._fragments.some(function(o){return o.hasRTL();});};n.prototype.isEmpty=function(){'use strict';return this.getLength()===0;};n.prototype.getFragment=function(o){'use strict';return this._fragments[o>=0?o:this._fragments.length+o];};n.prototype.getCount=function(){'use strict';return this._fragments.length;};n.prototype.getLength=function(){'use strict';return this._fragments.reduce(function(o,p){return o+p.getLength();},0);};n.prototype.toStruct=function(){'use strict';return this._fragments.map(function(o){return o.toStruct();});};n.prototype.toArray=function(){'use strict';return this._fragments.slice();};n.prototype.toString=function(){'use strict';return this._fragments.map(function(o){return o.getText();}).join('');};n.prototype.getHash=function(){'use strict';if(this._hash===null)this._hash=this._fragments.map(function(o){if(o.getUID()){return '[['+o.getHash(1)+']]';}else return o.getText();}).join('');return this._hash;};n.fromStruct=function(o){'use strict';return new n(k(o));};n.fromString=function(o){'use strict';return new n([l(o)]);};f.exports=n;},null);
__d('FacebarNavigation',['Arbiter','DOMQuery','FacebarBootloader','FacebarStructuredText','Input','QueryHistory','URI','csx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p=null,q=null,r=null,s=false,t=true,u=false;function v(y,z){if(!u)r=y;u=false;s=z;t=false;w();}function w(){if(t){return;}else if(q){s&&q.pageTransition();q.setPageQuery(r);t=true;}else if(p&&r&&!l.getValue(p))l.setValue(p,r.structure.toString()+' ');p&&p.blur();}h.subscribe('page_transition',function(y,z){if(!x.isTopControlTransition(z.uri)&&!x.isTimelineAbout(z.uri))v(m.get(z.uri),true);});h.subscribe('save_facebar_query',function(y,z){u=true;});var x={registerInput:function(y){p=i.scry(y,"._586f")[0];w();},registerBehavior:function(y){q=y;w();},setPageQuery:function(y){m.set(n.getNextURI(),y);if(!(y.structure instanceof k))y.structure=k.fromStruct(y.structure);v(y,false);j.requestSearch();},isTopControlTransition:function(y){return String(y.getPath()).startsWith('/search/')&&y.getQueryData().ref==='top_filter'&&!y.getQueryData().hard_refresh;},isTimelineAbout:function(y){return (/\/about$/.test(y.getPath())&&!y.getQueryData().hard_refresh);}};f.exports=x;},null);
__d("XReactComposerStatusAttachmentBootstrapController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/react_composer\/status\/bootstrap\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"String",required:true}});},null,{});