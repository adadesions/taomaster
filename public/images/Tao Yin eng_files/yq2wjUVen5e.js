/*!CK:3915643438!*//*1446495289,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["LX3Ne"]); }

__d("ImageExtensions",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={GIF:"gif",JPG:"jpg",PNG:"png",ICO:"ico",BMP:"bmp",WEBP:"webp",BEST:"best"};},null,{});
__d("PUWMethods",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={DRAGDROP:"dragdrop",FILE_SELECTOR:"file_selector",VAULT:"vault",RECENT_PHOTOS:"recent_photos",PHOTOS_OF_YOU:"photos_of_you",METHOD_EDITOR:"editor",SUGGESTIONS:"suggestions",CAMERA:"camera",COPYPASTE:"copypaste"};},null,{});
__d("VideoCreatorProductType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={LEGACY:0,UNSPECIFIED:1,CORE_VIDEOS:2,LOOPS:3,ANIMATED_GIFS:4,SLIDESHOW:5,PROFILE_VIDEO:6,SPHERICAL:7,LIVE_PHOTO:8,BIRTHDAY_VIDEO:9};},null,{});
__d('ContextualLayer.react',['ContextualLayer','React','ReactDOM','ReactLayer','Style'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=i.PropTypes,n=k.createClass({propTypes:{contextRef:m.func,context:function(o,p,q){if(o.context==null==(o.contextRef==null))return new Error('Exactly one of `context` or `contextRef` must be set on `'+(q+'`.'));var r=o[p];if(r!=null){if(typeof r!=='object')return new Error('Invalid `'+p+'` supplied to `'+q+'`, '+'expected a React component.');if(i.isValidElement(r))return new Error('Invalid `'+p+'` supplied to `'+q+'`, '+'expected a React component instance. You\'re passing a React '+'descriptor.');}}},immutableProps:{modal:null},createLayer:function(o){var p=this._getContextNode(),q={context:p,contextBounds:this.props.contextBounds,position:this.props.position,alignment:this.props.alignment,offsetX:this.props.offsetX,offsetY:this.props.offsetY,addedBehaviors:this.enumerateBehaviors(this.props.behaviors),shouldSetARIAProperties:this.props.shouldSetARIAProperties},r=new h(q,o);this._node=o;this._matchContextSize(this.props);if(this.props.contextBounds)r.setContextWithBounds(p,this.props.contextBounds);r.conditionShow(this.props.shown);return r;},receiveProps:function(o,p){this.updateBehaviors(p.behaviors,o.behaviors);var q=this._getContextNode();if(o.contextBounds){this.layer.setContextWithBounds(q,o.contextBounds);}else this.layer.setContext(q);this._matchContextSize(o);this.layer.setPosition(o.position);this.layer.setAlignment(o.alignment);this.layer.setOffsetX(o.offsetX);this.layer.setOffsetY(o.offsetY);this.layer.conditionShow(o.shown);},getDefaultEnabledBehaviors:function(){return h.getDefaultBehaviorsAsObject();},_getContextNode:function(){var o;if(this.props.context){o=j.findDOMNode(this.props.context);}else if(this.props.contextRef)o=j.findDOMNode(this.props.contextRef());return o;},_matchContextSize:function(o){var p=this._node,q=this._getContextNode();if(o.containerWidthMatchContext)l.set(p,'width',q.offsetWidth+'px');if(o.containerHeightMatchContext)l.set(p,'height',q.offsetHeight+'px');}});f.exports=n;},null);
__d('XUIAmbientNUXBody.react',['React','XUICloseButton.react','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=h.PropTypes,m=h.createClass({displayName:'XUIAmbientNUXBody',propTypes:{onCloseButtonClick:l.func},render:function(){var n=k("_21es",this.props.className);return (h.createElement('div',{className:n},h.createElement(i,{shade:'light',className:"_36gl",onClick:this.props.onCloseButtonClick}),h.createElement('div',{className:"_36gn"},this.props.children)));}});f.exports=m;},null);
__d('XUIAmbientNUX.react',['HasLayerContextMixin','React','ReactLayer','ReactAbstractContextualDialog','XUIAmbientNUXTheme','XUIAmbientNUXBody.react'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=i.PropTypes,o=300,p=380,q=j.createClass(k.createSpec({displayName:'XUIAmbientNUX',theme:l})),r=i.createClass({displayName:'XUIAmbientNUX',mixins:[h],propTypes:{alignment:n.oneOf(['left','center','right']),behaviors:n.object,context:n.object,contextRef:n.func,customwidth:n.number,hasActionableContext:n.bool,offsetX:n.number,offsetY:n.number,onCloseButtonClick:n.func,position:n.oneOf(['above','below','left','right']),shown:n.bool,width:n.oneOf(['wide','normal','auto','custom'])},_getWidth:function(){switch(this.props.width){case 'wide':return p;case 'custom':return this.props.customwidth;case 'auto':return null;default:return o;}},render:function(){return (i.createElement(q,{alignment:this.props.alignment,autoFocus:false,behaviors:this.props.behaviors,context:this.getContextNode(),focusContextOnHide:false,hasActionableContext:this.props.hasActionableContext,offsetX:this.props.offsetX,offsetY:this.props.offsetY,position:this.props.position,shown:this.props.shown,width:this._getWidth(this.props)},i.createElement(m,{onCloseButtonClick:this.props.onCloseButtonClick},this.props.children)));}});f.exports=r;},null);
__d('XUINotice.react',['React','Image.react','XUICloseButton.react','cx','fbt','ix','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){'use strict';if(c.__markCompiled)c.__markCompiled();var o=h.PropTypes,p={notify:{altText:l._("\u0e42\u0e1b\u0e23\u0e14\u0e17\u0e23\u0e32\u0e1a"),className:null,iconSrc:m('/images/deprecated/glyphs/flat/info-flat_m.png')},success:{altText:l._("\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08"),className:"_3qh4",iconSrc:m('/images/deprecated/glyphs/flat/checkmark_white_m.png')},warn:{altText:l._("\u0e04\u0e33\u0e40\u0e15\u0e37\u0e2d\u0e19"),className:"_585o",iconSrc:m('/images/deprecated/glyphs/flat/error-flat_m.png')}},q=h.createClass({displayName:'XUINotice',propTypes:{onDismiss:o.func,use:o.oneOf(Object.keys(p)),size:o.oneOf(['medium','small'])},getDefaultProps:function(){return {use:'notify',size:'medium'};},render:function(){var r=this.props,s=r.children,t=r.className,u=r.onDismiss,v=r.use,w=babelHelpers.objectWithoutProperties(r,['children','className','onDismiss','use']),x=p[v];t=n("_585n",x.className,t);var y=null;if(u)y=h.createElement(j,{className:"_585q",href:'#',onClick:u});var z="_585r"+(u?' '+"_2i-a":'')+(this.props.size==='medium'?' '+"_50f4":'')+(this.props.size==='small'?' '+"_50f3":'');return (h.createElement('div',babelHelpers._extends({},w,{className:t}),h.createElement(i,{alt:x.altText,className:"_585p",src:x.iconSrc}),y,h.createElement('div',{className:z},s)));}});f.exports=q;},null);
__d('AbstractTextFieldMixin.react',['React','ReactDOM','Keys','cx','invariant','joinClasses','cloneWithProps'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=h.PropTypes,p={propTypes:{value:o.string,placeholder:o.string,tabIndex:o.string,maxLength:o.number,autoComplete:o.string,onBackspace:o.func,onBackTab:o.func,onBlur:o.func,onChange:o.func,onDownArrow:o.func,onEnter:o.func,onEscape:o.func,onFocus:o.func,onKeyDown:o.func,onLeftArrow:o.func,onNoShiftEnter:o.func,onRightArrow:o.func,onShiftEnter:o.func,onShiftDownArrow:o.func,onShiftUpArrow:o.func,onTab:o.func,onUpArrow:o.func,required:o.bool,style:o.object,type:o.string,autoCapitalize:o.string,autoCorrect:o.string},getInitialState:function(){return {focused:false,value:this.props.defaultValue||''};},getValue:function(){return this.props.value!=null?this.props.value:this.state.value;},onInputKeyDown:function(q){var r=this.props,s=q.keyCode,t=q.shiftKey;if(s===j.BACKSPACE&&!t&&r.onBackspace){r.onBackspace(q);}else if(s===j.TAB&&!t&&r.onTab){r.onTab(q);}else if(s===j.TAB&&t&&r.onBackTab){r.onBackTab(q);}else if(s===j.UP){if(t){if(r.onShiftUpArrow)r.onShiftUpArrowAttempt(q);}else if(r.onUpArrow)r.onUpArrow(q);}else if(s===j.DOWN&&r.onDownArrow){if(t){if(r.onShiftDownArrow)r.onShiftDownArrow(q);}else if(r.onDownArrow)r.onDownArrow(q);}else if(s===j.LEFT&&r.onLeftArrow){r.onLeftArrow(q);}else if(s===j.RIGHT&&r.onRightArrow){r.onRightArrow(q);}else if(s===j.RETURN){if(r.onEnter)r.onEnter(q);if(t){if(r.onShiftEnter)r.onShiftEnter(q);}else if(r.onNoShiftEnter)r.onNoShiftEnter(q);}else if(s===j.ESC&&r.onEscape)r.onEscape(q);if(r.onKeyDown)r.onKeyDown(q);},onInputChange:function(q){if(this.props.onChange)this.props.onChange(q);if(this.props.value==null)this.setState({value:q.target.value});},focusInput:function(){this.getTextFieldDOM().focus();},blurInput:function(){this.getTextFieldDOM().blur();},onInputBlur:function(event){if(this.props.onBlur)this.props.onBlur(event);if(!event.isDefaultPrevented())this.setState({focused:false});},onInputFocus:function(event){if(this.props.onFocus)this.props.onFocus(event);if(!event.isDefaultPrevented())this.setState({focused:true});},getTextFieldDOM:function(){return i.findDOMNode(this.refs[this.getTextFieldRef()]);},getTextFieldRef:function(){return 'textField';},setTextFieldPropsOn:function(q){return n(q,{'aria-activedescendant':this.props['aria-activedescendant'],'aria-autocomplete':this.props['aria-autocomplete'],'aria-label':this.props['aria-label'],'aria-expanded':this.props['aria-expanded'],'aria-owns':this.props['aria-owns'],'data-testid':this.props['data-testid'],required:this.props.required,ref:this.getTextFieldRef(),role:this.props.role,placeholder:this.props.placeholder,autoCapitalize:this.props.autoCapitalize,autoComplete:this.props.autoComplete,autoCorrect:this.props.autoCorrect,onKeyDown:this.onInputKeyDown,onBlur:this.onInputBlur,onFocus:this.onInputFocus,onChange:this.onInputChange,disabled:this.props.disabled,defaultValue:this.props.defaultValue,name:this.props.name,value:this.getValue(),id:this.props.id,maxLength:this.props.maxLength,min:this.props.min,max:this.props.max,style:this.props.style,title:this.props.title,type:this.props.type||q.props.type});},render:function(){var q=m(this.props.className,"_58ak"+(!this.getValue()?' '+"_3ct8":''));!this.renderTextField?l(0):undefined;return (h.createElement('label',{className:q},this.renderTextField()));}};f.exports=p;},null);
__d('AbstractTextInput.react',['AbstractTextFieldMixin.react','React','cx'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=i.createClass({displayName:'AbstractTextInput',mixins:[h],renderTextField:function(){return this.setTextFieldPropsOn(i.createElement('input',{type:'text',className:"_58al",size:this.props.size,tabIndex:this.props.tabIndex,onClick:this.props.onClick,onKeyUp:this.props.onKeyUp,onPaste:this.props.onPaste}));}});f.exports=k;},null);
__d('filterObject',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=Object.prototype.hasOwnProperty;function i(j,k,l){if(!j)return null;var m={};for(var n in j)if(h.call(j,n)&&k.call(l,j[n],n,j))m[n]=j[n];return m;}f.exports=i;},null);
__d('XUIError',['ARIA','Bootloader','CSS','DataStore','DOM','Event','Parent','Promise','cx','filterObject','getActiveElement','getElementText','invariant','isNode','memoize','nl2br'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){'use strict';if(c.__markCompiled)c.__markCompiled();var x='data-xui-error-alignh',y='XUIError',z='data-xui-error',aa="_1tp7",ba='data-xui-error-position';m.listen(document.documentElement,'mouseover',function(event){if(n.byClass(r(),aa))return;var oa=n.byClass(event.getTarget(),aa);if(oa){ka(oa);}else la();});m.listen(document.documentElement,'focusin',function(event){var oa=n.byClass(event.getTarget(),aa);if(oa){ka(oa);}else la();});m.listen(document.documentElement,'focusout',function(event){la();});var ca=v(function(){return new o(function(oa,pa){i.loadModules(["React","XUIErrorDialogImpl"],function(qa,ra){oa(babelHelpers._extends({React:qa},ra.getNewDialog()));});});}),da=null;function ea(oa){return babelHelpers._extends({message:oa.getAttribute(z),position:oa.getAttribute(ba),alignh:oa.getAttribute(x)},k.get(oa,y));}function fa(oa,pa){k.set(oa,y,pa);}function ga(oa,pa){k.set(oa,y,babelHelpers._extends({},k.get(oa,y),pa));}function ha(oa){k.remove(oa,y);}var ia=false,ja=false;function ka(oa){ca().done(function(pa){var qa=pa.React,ra=pa.dialog,sa=pa.dialogMessageNode,ta=ea(oa),ua=ta.message;if(ua==null)return;var va=qa.isValidElement(ua);if(ia&&!va)qa.unmountComponentAtNode(sa);if(va){qa.render(ua,sa);}else{!(typeof ua==='string'||u(ua))?t(0):undefined;if(typeof ua==='string')ua=w(ua);l.setContent(sa,ua);}ia=va;ra.setContext(oa).setPosition(ta.position||'right').setAlignment(ta.alignh||(ta.position==='above'||ta.position==='below'?'right':null)).show();h.notify(s(sa));da=oa;});ja=true;}function la(){if(!ja)return;ca().done(function(oa){var pa=oa.React,qa=oa.dialog,ra=oa.dialogMessageNode;if(!da)return;if(ia){pa.unmountComponentAtNode(ra);ia=false;}qa.hide();da=null;});}function ma(oa){if(l.contains(oa,r()))ka(oa);}var na={set:function(oa){var pa=oa.target,qa=oa.message,ra=oa.position,sa=oa.alignh;!(qa!==null)?t(0):undefined;j.addClass(pa,aa);ga(pa,q({message:qa,position:ra,alignh:sa},function(ta){return ta!==undefined;}));ma(pa);},clear:function(oa){j.removeClass(oa,aa);oa.removeAttribute(z);ha(oa);if(oa===da)la();},updatePosition:function(){if(!ja)return;ca().done(function(oa){var pa=oa.dialog;if(da)pa.updatePosition();});},__setReactError:function(oa,pa){var qa=pa.message,ra=pa.position,sa=pa.alignh;!(qa!==null)?t(0):undefined;fa(oa,{message:qa,position:ra,alignh:sa});ma(oa);},__clearReactError:function(oa){ha(oa);if(oa===da)la();}};f.exports=na;},null);
__d('XUIError.react',['React','ReactDOM','XUIError','cx','joinClasses','onlyChild'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=h.PropTypes,o="_1tp7",p=h.createClass({displayName:'ReactXUIError',propTypes:{xuiError:n.any,xuiErrorPosition:n.oneOf(['above','below','left','right']),xuiErrorAlignh:n.oneOf(['left','center','right'])},componentDidMount:function(){if(this.props.xuiError!=null)j.__setReactError(i.findDOMNode(this),{message:this.props.xuiError,position:this.props.xuiErrorPosition,alignh:this.props.xuiErrorAlignh});},componentDidUpdate:function(){if(this.props.xuiError==null){j.__clearReactError(i.findDOMNode(this));}else j.__setReactError(i.findDOMNode(this),{message:this.props.xuiError,position:this.props.xuiErrorPosition,alignh:this.props.xuiErrorAlignh});},componentWillUnmount:function(){j.__clearReactError(i.findDOMNode(this));},render:function(){var q=m(this.props.children);if(this.props.xuiError!=null)q=h.cloneElement(q,{className:l(q.props.className,o)});return q;}});f.exports=p;},null);
__d('XUITextInput.react',['AbstractTextInput.react','React','XUIError.react','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=i.createClass({displayName:'XUITextInput',propTypes:babelHelpers._extends({},h.propTypes,j.propTypes),render:function(){var n="_55r1"+(this.props.height=='tall'?' '+"_55r2":''),o=i.createElement(h,babelHelpers._extends({},this.props,{ref:'textInput',className:l(this.props.className,n)}));return (i.createElement(j,this.props,o));},focusInput:function(){this.refs.textInput.focusInput();},blurInput:function(){this.refs.textInput.blurInput();}});f.exports=m;},null);
__d('PagesEventObserver',['Banzai'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='pages_client_logging',j={VITAL_WAIT:h.VITAL_WAIT,logData_DEPRECATED:function(k,l){var m={delay:l||h.VITAL_WAIT};h.post(i,k,m);},notify:function(event,k,l,m,n){var o=babelHelpers._extends({},l,{event_name:event,page_id:k,dedupe:m!==false}),p={delay:n||h.VITAL_WAIT};h.post(i,o,p);}};f.exports=j;},null);
__d('update',['Object.assign','keyOf','invariant'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=({}).hasOwnProperty;function l(w){if(Array.isArray(w)){return w.concat();}else if(w&&typeof w==='object'){return h(new w.constructor(),w);}else return w;}var m=i({$push:null}),n=i({$unshift:null}),o=i({$splice:null}),p=i({$set:null}),q=i({$merge:null}),r=i({$apply:null}),s=[m,n,o,p,q,r],t={};s.forEach(function(w){t[w]=true;});function u(w,x,y){!Array.isArray(w)?j(0):undefined;var z=x[y];!Array.isArray(z)?j(0):undefined;}function v(w,x){!(typeof x==='object')?j(0):undefined;if(k.call(x,p)){!(Object.keys(x).length===1)?j(0):undefined;return x[p];}var y=l(w);if(k.call(x,q)){var z=x[q];!(z&&typeof z==='object')?j(0):undefined;!(y&&typeof y==='object')?j(0):undefined;h(y,x[q]);}if(k.call(x,m)){u(w,x,m);x[m].forEach(function(ba){y.push(ba);});}if(k.call(x,n)){u(w,x,n);x[n].forEach(function(ba){y.unshift(ba);});}if(k.call(x,o)){!Array.isArray(w)?j(0):undefined;!Array.isArray(x[o])?j(0):undefined;x[o].forEach(function(ba){!Array.isArray(ba)?j(0):undefined;y.splice.apply(y,ba);});}if(k.call(x,r)){!(typeof x[r]==='function')?j(0):undefined;y=x[r](y);}for(var aa in x)if(!(t.hasOwnProperty(aa)&&t[aa]))y[aa]=v(w[aa],x[aa]);return y;}f.exports=v;},null);
__d('BookmarkFeedSorter',['Run'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j={init:function(k){i=k;h.onLeave(function(){i=null;});},setChecked:function(k){if(i)i.setValue(k);}};f.exports=j;},null);
__d('LitestandComposer',['Arbiter','Bootloader','ReactComposerIDGenerator','Run','SubscriptionsHandler'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=600;function n(p,q){i.loadModules(["Animation","ComposerXController","ComposerXMarauderLogger","DOM","LitestandStream"],function(r,s,t,u,v){if(!j.isComposerID(p))s.reset(p);if(!v||!q)return;u.prependContent(v.getStreamRoot(),q);new r(q).from('opacity',0).to('opacity',1).duration(m).go();t.logCompleted(p);});}var o={initComposer:function(p){var q=new l();q.addSubscriptions(h.subscribe('LitestandComposer/publish',(function(r,s){if(s.composer_id===p)n(p,s.markup);}).bind(this)));k.onLeave(function(){q.release();});}};f.exports=o;},null);
__d('DOMClone',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={shallowClone:function(j){return i(j,false);},deepClone:function(j){return i(j,true);}};function i(j,k){var l=j.cloneNode(k);if(typeof l.__FB_TOKEN!=='undefined')delete l.__FB_TOKEN;return l;}f.exports=h;},null);
__d('ErrorDialog',['Dialog','emptyFunction'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={showAsyncError:function(k){try{return j.show(k.getErrorSummary(),k.getErrorDescription());}catch(l){alert(k);}},show:function(k,l,m,n){return new h().setTitle(k).setBody(l).setButtons([h.OK]).setStackable(true).setModal(true).setHandler(m||i).setButtonsMessage(n||'').show();}};f.exports=j;},null);
__d('FileInput',['ArbiterMixin','DOM','DOMClone','Event','Focus','Keys','UserAgent_DEPRECATED','cx','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q,r,s=n.ie();q=babelHelpers.inherits(t,p(h));r=q&&q.prototype;function t(u,v,w){'use strict';r.constructor.call(this);this.container=u;this.control=v;var x=i.scry(this.container,'a')[0];x&&x.removeAttribute('href');var y=i.create('div',{className:"_3jk"},w);i.appendContent(this.control,y);this._boundHandleChange=this._handleChange.bind(this);if(s)this._boundHandleIEKeyDown=this._handleIEKeyDown.bind(this);this._setInputElement(w);}t.prototype.getValue=function(){'use strict';return this.input.value;};t.prototype.getInput=function(){'use strict';return this.input;};t.prototype.getContainer=function(){'use strict';return this.container;};t.prototype.getControl=function(){'use strict';return this.control;};t.prototype.clear=function(){'use strict';if(s){var u=j.deepClone(this.input);i.replace(this.input,u);this._setInputElement(u);}else this.input.value='';};t.prototype.destroy=function(){'use strict';this._focus.remove();this._focus=null;this._listener.remove();this._listener=null;if(s){this._IEKeyDownListener.remove();this._IEKeyDownListener=null;}this.container=null;this.control=null;this.input=null;};t.prototype._setInputElement=function(u){'use strict';this.input=u;this._focus&&this._focus.remove();this._focus=l.relocate(u,this.control);this._listener&&this._listener.remove();this._listener=k.listen(u,'change',this._boundHandleChange);if(s){this._IEKeyDownListener&&this._IEKeyDownListener.remove();this._IEKeyDownListener=k.listen(u,'keydown',this._boundHandleIEKeyDown);}};t.prototype._handleChange=function(event){'use strict';this.inform('change',event);var u=this.input.form;if(u&&s<9)k.fire(u,'change',event);};t.prototype._handleIEKeyDown=function(event){'use strict';if(event.keyCode===m.RETURN){event.preventDefault();var u=document.createEvent('MouseEvents');u.initEvent('click',true,true);this.input.dispatchEvent(u);}};f.exports=t;},null);
__d('VideoUploadFile',['fileSlice','ImageExtensions','VideoCreatorProductType','VideoUploadFeatureDetector'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(m,n,o,p){'use strict';this.$VideoUploadFile1=m;this.$VideoUploadFile2=n;this.$VideoUploadFile3=o;this.$VideoUploadFile4=p;}l.fromFile=function(m){'use strict';var n=l.getExtensionFromFileName(m.name);return new this(null,m,m.size,n);};l.fromFileInput=function(m){'use strict';var n=null,o=null,p=l.getExtensionFromFileInput(m);if(k.supportsFileAPI()&&m.files.length){n=m.files[0];o=n.size;}return new this(m,n,o,p);};l.prototype.getFileInput=function(){'use strict';return this.$VideoUploadFile1;};l.prototype.getFile=function(){'use strict';return this.$VideoUploadFile2;};l.prototype.getSize=function(){'use strict';return this.$VideoUploadFile3;};l.prototype.getExtension=function(){'use strict';return this.$VideoUploadFile4;};l.prototype.getCreatorProduct=function(){'use strict';if(this.$VideoUploadFile4===i.GIF)return j.ANIMATED_GIFS;return j.CORE_VIDEOS;};l.prototype.getChunk=function(m,n){'use strict';return this.$VideoUploadFile2?h.call(this.$VideoUploadFile2,m,n):null;};l.getExtensionFromFileInput=function(m){'use strict';return this.getExtensionFromFileName(m.value);};l.getExtensionFromFileName=function(m){'use strict';return m.indexOf('.')!=-1?m.split('.').pop().toLowerCase():'';};f.exports=l;},null);