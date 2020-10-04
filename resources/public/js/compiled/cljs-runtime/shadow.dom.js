goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_49350 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_49350(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_49351 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_49351(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__48766 = coll;
var G__48767 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__48766,G__48767) : shadow.dom.lazy_native_coll_seq.call(null,G__48766,G__48767));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__48776 = arguments.length;
switch (G__48776) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__48783 = arguments.length;
switch (G__48783) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__48792 = arguments.length;
switch (G__48792) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__48799 = arguments.length;
switch (G__48799) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__48806 = arguments.length;
switch (G__48806) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__48819 = arguments.length;
switch (G__48819) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e48824){if((e48824 instanceof Object)){
var e = e48824;
return console.log("didnt support attachEvent",el,e);
} else {
throw e48824;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__48828 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__48829 = null;
var count__48830 = (0);
var i__48831 = (0);
while(true){
if((i__48831 < count__48830)){
var el = chunk__48829.cljs$core$IIndexed$_nth$arity$2(null,i__48831);
var handler_49385__$1 = ((function (seq__48828,chunk__48829,count__48830,i__48831,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48828,chunk__48829,count__48830,i__48831,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49385__$1);


var G__49388 = seq__48828;
var G__49389 = chunk__48829;
var G__49390 = count__48830;
var G__49391 = (i__48831 + (1));
seq__48828 = G__49388;
chunk__48829 = G__49389;
count__48830 = G__49390;
i__48831 = G__49391;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48828);
if(temp__5735__auto__){
var seq__48828__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48828__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48828__$1);
var G__49392 = cljs.core.chunk_rest(seq__48828__$1);
var G__49393 = c__4556__auto__;
var G__49394 = cljs.core.count(c__4556__auto__);
var G__49395 = (0);
seq__48828 = G__49392;
chunk__48829 = G__49393;
count__48830 = G__49394;
i__48831 = G__49395;
continue;
} else {
var el = cljs.core.first(seq__48828__$1);
var handler_49396__$1 = ((function (seq__48828,chunk__48829,count__48830,i__48831,el,seq__48828__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48828,chunk__48829,count__48830,i__48831,el,seq__48828__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49396__$1);


var G__49398 = cljs.core.next(seq__48828__$1);
var G__49399 = null;
var G__49400 = (0);
var G__49401 = (0);
seq__48828 = G__49398;
chunk__48829 = G__49399;
count__48830 = G__49400;
i__48831 = G__49401;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__48847 = arguments.length;
switch (G__48847) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__48851 = cljs.core.seq(events);
var chunk__48852 = null;
var count__48853 = (0);
var i__48854 = (0);
while(true){
if((i__48854 < count__48853)){
var vec__48864 = chunk__48852.cljs$core$IIndexed$_nth$arity$2(null,i__48854);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48864,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48864,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49406 = seq__48851;
var G__49407 = chunk__48852;
var G__49408 = count__48853;
var G__49409 = (i__48854 + (1));
seq__48851 = G__49406;
chunk__48852 = G__49407;
count__48853 = G__49408;
i__48854 = G__49409;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48851);
if(temp__5735__auto__){
var seq__48851__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48851__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48851__$1);
var G__49410 = cljs.core.chunk_rest(seq__48851__$1);
var G__49411 = c__4556__auto__;
var G__49412 = cljs.core.count(c__4556__auto__);
var G__49413 = (0);
seq__48851 = G__49410;
chunk__48852 = G__49411;
count__48853 = G__49412;
i__48854 = G__49413;
continue;
} else {
var vec__48870 = cljs.core.first(seq__48851__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48870,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48870,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49414 = cljs.core.next(seq__48851__$1);
var G__49415 = null;
var G__49416 = (0);
var G__49417 = (0);
seq__48851 = G__49414;
chunk__48852 = G__49415;
count__48853 = G__49416;
i__48854 = G__49417;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__48874 = cljs.core.seq(styles);
var chunk__48875 = null;
var count__48876 = (0);
var i__48877 = (0);
while(true){
if((i__48877 < count__48876)){
var vec__48891 = chunk__48875.cljs$core$IIndexed$_nth$arity$2(null,i__48877);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48891,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48891,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49420 = seq__48874;
var G__49421 = chunk__48875;
var G__49422 = count__48876;
var G__49423 = (i__48877 + (1));
seq__48874 = G__49420;
chunk__48875 = G__49421;
count__48876 = G__49422;
i__48877 = G__49423;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48874);
if(temp__5735__auto__){
var seq__48874__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48874__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48874__$1);
var G__49424 = cljs.core.chunk_rest(seq__48874__$1);
var G__49425 = c__4556__auto__;
var G__49426 = cljs.core.count(c__4556__auto__);
var G__49427 = (0);
seq__48874 = G__49424;
chunk__48875 = G__49425;
count__48876 = G__49426;
i__48877 = G__49427;
continue;
} else {
var vec__48897 = cljs.core.first(seq__48874__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48897,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48897,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49429 = cljs.core.next(seq__48874__$1);
var G__49430 = null;
var G__49431 = (0);
var G__49432 = (0);
seq__48874 = G__49429;
chunk__48875 = G__49430;
count__48876 = G__49431;
i__48877 = G__49432;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__48903_49433 = key;
var G__48903_49434__$1 = (((G__48903_49433 instanceof cljs.core.Keyword))?G__48903_49433.fqn:null);
switch (G__48903_49434__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_49439 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_49439,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_49439,"aria-");
}
})())){
el.setAttribute(ks_49439,value);
} else {
(el[ks_49439] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48909){
var map__48910 = p__48909;
var map__48910__$1 = (((((!((map__48910 == null))))?(((((map__48910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48910):map__48910);
var props = map__48910__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48910__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48912 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48912,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48912,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48912,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48915 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48915,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48915;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48919 = arguments.length;
switch (G__48919) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48928){
var vec__48929 = p__48928;
var seq__48930 = cljs.core.seq(vec__48929);
var first__48931 = cljs.core.first(seq__48930);
var seq__48930__$1 = cljs.core.next(seq__48930);
var nn = first__48931;
var first__48931__$1 = cljs.core.first(seq__48930__$1);
var seq__48930__$2 = cljs.core.next(seq__48930__$1);
var np = first__48931__$1;
var nc = seq__48930__$2;
var node = vec__48929;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48934 = nn;
var G__48935 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48934,G__48935) : create_fn.call(null,G__48934,G__48935));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48936 = nn;
var G__48937 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48936,G__48937) : create_fn.call(null,G__48936,G__48937));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48940 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48940,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48940,(1),null);
var seq__48945_49473 = cljs.core.seq(node_children);
var chunk__48946_49474 = null;
var count__48947_49475 = (0);
var i__48948_49476 = (0);
while(true){
if((i__48948_49476 < count__48947_49475)){
var child_struct_49477 = chunk__48946_49474.cljs$core$IIndexed$_nth$arity$2(null,i__48948_49476);
var children_49478 = shadow.dom.dom_node(child_struct_49477);
if(cljs.core.seq_QMARK_(children_49478)){
var seq__48976_49479 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49478));
var chunk__48978_49480 = null;
var count__48979_49481 = (0);
var i__48980_49482 = (0);
while(true){
if((i__48980_49482 < count__48979_49481)){
var child_49486 = chunk__48978_49480.cljs$core$IIndexed$_nth$arity$2(null,i__48980_49482);
if(cljs.core.truth_(child_49486)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49486);


var G__49487 = seq__48976_49479;
var G__49488 = chunk__48978_49480;
var G__49489 = count__48979_49481;
var G__49490 = (i__48980_49482 + (1));
seq__48976_49479 = G__49487;
chunk__48978_49480 = G__49488;
count__48979_49481 = G__49489;
i__48980_49482 = G__49490;
continue;
} else {
var G__49491 = seq__48976_49479;
var G__49492 = chunk__48978_49480;
var G__49493 = count__48979_49481;
var G__49494 = (i__48980_49482 + (1));
seq__48976_49479 = G__49491;
chunk__48978_49480 = G__49492;
count__48979_49481 = G__49493;
i__48980_49482 = G__49494;
continue;
}
} else {
var temp__5735__auto___49495 = cljs.core.seq(seq__48976_49479);
if(temp__5735__auto___49495){
var seq__48976_49496__$1 = temp__5735__auto___49495;
if(cljs.core.chunked_seq_QMARK_(seq__48976_49496__$1)){
var c__4556__auto___49497 = cljs.core.chunk_first(seq__48976_49496__$1);
var G__49499 = cljs.core.chunk_rest(seq__48976_49496__$1);
var G__49500 = c__4556__auto___49497;
var G__49501 = cljs.core.count(c__4556__auto___49497);
var G__49502 = (0);
seq__48976_49479 = G__49499;
chunk__48978_49480 = G__49500;
count__48979_49481 = G__49501;
i__48980_49482 = G__49502;
continue;
} else {
var child_49503 = cljs.core.first(seq__48976_49496__$1);
if(cljs.core.truth_(child_49503)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49503);


var G__49504 = cljs.core.next(seq__48976_49496__$1);
var G__49505 = null;
var G__49506 = (0);
var G__49507 = (0);
seq__48976_49479 = G__49504;
chunk__48978_49480 = G__49505;
count__48979_49481 = G__49506;
i__48980_49482 = G__49507;
continue;
} else {
var G__49508 = cljs.core.next(seq__48976_49496__$1);
var G__49509 = null;
var G__49510 = (0);
var G__49511 = (0);
seq__48976_49479 = G__49508;
chunk__48978_49480 = G__49509;
count__48979_49481 = G__49510;
i__48980_49482 = G__49511;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49478);
}


var G__49522 = seq__48945_49473;
var G__49523 = chunk__48946_49474;
var G__49524 = count__48947_49475;
var G__49525 = (i__48948_49476 + (1));
seq__48945_49473 = G__49522;
chunk__48946_49474 = G__49523;
count__48947_49475 = G__49524;
i__48948_49476 = G__49525;
continue;
} else {
var temp__5735__auto___49526 = cljs.core.seq(seq__48945_49473);
if(temp__5735__auto___49526){
var seq__48945_49528__$1 = temp__5735__auto___49526;
if(cljs.core.chunked_seq_QMARK_(seq__48945_49528__$1)){
var c__4556__auto___49529 = cljs.core.chunk_first(seq__48945_49528__$1);
var G__49531 = cljs.core.chunk_rest(seq__48945_49528__$1);
var G__49532 = c__4556__auto___49529;
var G__49533 = cljs.core.count(c__4556__auto___49529);
var G__49534 = (0);
seq__48945_49473 = G__49531;
chunk__48946_49474 = G__49532;
count__48947_49475 = G__49533;
i__48948_49476 = G__49534;
continue;
} else {
var child_struct_49535 = cljs.core.first(seq__48945_49528__$1);
var children_49536 = shadow.dom.dom_node(child_struct_49535);
if(cljs.core.seq_QMARK_(children_49536)){
var seq__48986_49537 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49536));
var chunk__48988_49538 = null;
var count__48989_49539 = (0);
var i__48990_49540 = (0);
while(true){
if((i__48990_49540 < count__48989_49539)){
var child_49541 = chunk__48988_49538.cljs$core$IIndexed$_nth$arity$2(null,i__48990_49540);
if(cljs.core.truth_(child_49541)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49541);


var G__49543 = seq__48986_49537;
var G__49544 = chunk__48988_49538;
var G__49545 = count__48989_49539;
var G__49546 = (i__48990_49540 + (1));
seq__48986_49537 = G__49543;
chunk__48988_49538 = G__49544;
count__48989_49539 = G__49545;
i__48990_49540 = G__49546;
continue;
} else {
var G__49547 = seq__48986_49537;
var G__49548 = chunk__48988_49538;
var G__49549 = count__48989_49539;
var G__49550 = (i__48990_49540 + (1));
seq__48986_49537 = G__49547;
chunk__48988_49538 = G__49548;
count__48989_49539 = G__49549;
i__48990_49540 = G__49550;
continue;
}
} else {
var temp__5735__auto___49551__$1 = cljs.core.seq(seq__48986_49537);
if(temp__5735__auto___49551__$1){
var seq__48986_49552__$1 = temp__5735__auto___49551__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48986_49552__$1)){
var c__4556__auto___49553 = cljs.core.chunk_first(seq__48986_49552__$1);
var G__49554 = cljs.core.chunk_rest(seq__48986_49552__$1);
var G__49555 = c__4556__auto___49553;
var G__49556 = cljs.core.count(c__4556__auto___49553);
var G__49557 = (0);
seq__48986_49537 = G__49554;
chunk__48988_49538 = G__49555;
count__48989_49539 = G__49556;
i__48990_49540 = G__49557;
continue;
} else {
var child_49558 = cljs.core.first(seq__48986_49552__$1);
if(cljs.core.truth_(child_49558)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49558);


var G__49560 = cljs.core.next(seq__48986_49552__$1);
var G__49561 = null;
var G__49562 = (0);
var G__49563 = (0);
seq__48986_49537 = G__49560;
chunk__48988_49538 = G__49561;
count__48989_49539 = G__49562;
i__48990_49540 = G__49563;
continue;
} else {
var G__49564 = cljs.core.next(seq__48986_49552__$1);
var G__49565 = null;
var G__49566 = (0);
var G__49567 = (0);
seq__48986_49537 = G__49564;
chunk__48988_49538 = G__49565;
count__48989_49539 = G__49566;
i__48990_49540 = G__49567;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49536);
}


var G__49568 = cljs.core.next(seq__48945_49528__$1);
var G__49569 = null;
var G__49570 = (0);
var G__49571 = (0);
seq__48945_49473 = G__49568;
chunk__48946_49474 = G__49569;
count__48947_49475 = G__49570;
i__48948_49476 = G__49571;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__49009 = cljs.core.seq(node);
var chunk__49010 = null;
var count__49011 = (0);
var i__49012 = (0);
while(true){
if((i__49012 < count__49011)){
var n = chunk__49010.cljs$core$IIndexed$_nth$arity$2(null,i__49012);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49579 = seq__49009;
var G__49580 = chunk__49010;
var G__49581 = count__49011;
var G__49582 = (i__49012 + (1));
seq__49009 = G__49579;
chunk__49010 = G__49580;
count__49011 = G__49581;
i__49012 = G__49582;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49009);
if(temp__5735__auto__){
var seq__49009__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49009__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49009__$1);
var G__49583 = cljs.core.chunk_rest(seq__49009__$1);
var G__49584 = c__4556__auto__;
var G__49585 = cljs.core.count(c__4556__auto__);
var G__49586 = (0);
seq__49009 = G__49583;
chunk__49010 = G__49584;
count__49011 = G__49585;
i__49012 = G__49586;
continue;
} else {
var n = cljs.core.first(seq__49009__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49587 = cljs.core.next(seq__49009__$1);
var G__49588 = null;
var G__49589 = (0);
var G__49590 = (0);
seq__49009 = G__49587;
chunk__49010 = G__49588;
count__49011 = G__49589;
i__49012 = G__49590;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__49019 = arguments.length;
switch (G__49019) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__49022 = arguments.length;
switch (G__49022) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__49025 = arguments.length;
switch (G__49025) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49614 = arguments.length;
var i__4737__auto___49615 = (0);
while(true){
if((i__4737__auto___49615 < len__4736__auto___49614)){
args__4742__auto__.push((arguments[i__4737__auto___49615]));

var G__49616 = (i__4737__auto___49615 + (1));
i__4737__auto___49615 = G__49616;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__49027_49624 = cljs.core.seq(nodes);
var chunk__49028_49625 = null;
var count__49029_49626 = (0);
var i__49030_49627 = (0);
while(true){
if((i__49030_49627 < count__49029_49626)){
var node_49628 = chunk__49028_49625.cljs$core$IIndexed$_nth$arity$2(null,i__49030_49627);
fragment.appendChild(shadow.dom._to_dom(node_49628));


var G__49629 = seq__49027_49624;
var G__49630 = chunk__49028_49625;
var G__49631 = count__49029_49626;
var G__49632 = (i__49030_49627 + (1));
seq__49027_49624 = G__49629;
chunk__49028_49625 = G__49630;
count__49029_49626 = G__49631;
i__49030_49627 = G__49632;
continue;
} else {
var temp__5735__auto___49633 = cljs.core.seq(seq__49027_49624);
if(temp__5735__auto___49633){
var seq__49027_49635__$1 = temp__5735__auto___49633;
if(cljs.core.chunked_seq_QMARK_(seq__49027_49635__$1)){
var c__4556__auto___49636 = cljs.core.chunk_first(seq__49027_49635__$1);
var G__49637 = cljs.core.chunk_rest(seq__49027_49635__$1);
var G__49638 = c__4556__auto___49636;
var G__49639 = cljs.core.count(c__4556__auto___49636);
var G__49640 = (0);
seq__49027_49624 = G__49637;
chunk__49028_49625 = G__49638;
count__49029_49626 = G__49639;
i__49030_49627 = G__49640;
continue;
} else {
var node_49644 = cljs.core.first(seq__49027_49635__$1);
fragment.appendChild(shadow.dom._to_dom(node_49644));


var G__49645 = cljs.core.next(seq__49027_49635__$1);
var G__49646 = null;
var G__49647 = (0);
var G__49648 = (0);
seq__49027_49624 = G__49645;
chunk__49028_49625 = G__49646;
count__49029_49626 = G__49647;
i__49030_49627 = G__49648;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq49026){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49026));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__49031_49649 = cljs.core.seq(scripts);
var chunk__49032_49650 = null;
var count__49033_49651 = (0);
var i__49034_49652 = (0);
while(true){
if((i__49034_49652 < count__49033_49651)){
var vec__49043_49653 = chunk__49032_49650.cljs$core$IIndexed$_nth$arity$2(null,i__49034_49652);
var script_tag_49654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49043_49653,(0),null);
var script_body_49655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49043_49653,(1),null);
eval(script_body_49655);


var G__49656 = seq__49031_49649;
var G__49657 = chunk__49032_49650;
var G__49658 = count__49033_49651;
var G__49659 = (i__49034_49652 + (1));
seq__49031_49649 = G__49656;
chunk__49032_49650 = G__49657;
count__49033_49651 = G__49658;
i__49034_49652 = G__49659;
continue;
} else {
var temp__5735__auto___49660 = cljs.core.seq(seq__49031_49649);
if(temp__5735__auto___49660){
var seq__49031_49661__$1 = temp__5735__auto___49660;
if(cljs.core.chunked_seq_QMARK_(seq__49031_49661__$1)){
var c__4556__auto___49662 = cljs.core.chunk_first(seq__49031_49661__$1);
var G__49663 = cljs.core.chunk_rest(seq__49031_49661__$1);
var G__49664 = c__4556__auto___49662;
var G__49665 = cljs.core.count(c__4556__auto___49662);
var G__49666 = (0);
seq__49031_49649 = G__49663;
chunk__49032_49650 = G__49664;
count__49033_49651 = G__49665;
i__49034_49652 = G__49666;
continue;
} else {
var vec__49049_49668 = cljs.core.first(seq__49031_49661__$1);
var script_tag_49669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49049_49668,(0),null);
var script_body_49670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49049_49668,(1),null);
eval(script_body_49670);


var G__49675 = cljs.core.next(seq__49031_49661__$1);
var G__49676 = null;
var G__49677 = (0);
var G__49678 = (0);
seq__49031_49649 = G__49675;
chunk__49032_49650 = G__49676;
count__49033_49651 = G__49677;
i__49034_49652 = G__49678;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__49054){
var vec__49055 = p__49054;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49055,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49055,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__49063 = arguments.length;
switch (G__49063) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__49074 = cljs.core.seq(style_keys);
var chunk__49075 = null;
var count__49076 = (0);
var i__49077 = (0);
while(true){
if((i__49077 < count__49076)){
var it = chunk__49075.cljs$core$IIndexed$_nth$arity$2(null,i__49077);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49683 = seq__49074;
var G__49684 = chunk__49075;
var G__49685 = count__49076;
var G__49686 = (i__49077 + (1));
seq__49074 = G__49683;
chunk__49075 = G__49684;
count__49076 = G__49685;
i__49077 = G__49686;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49074);
if(temp__5735__auto__){
var seq__49074__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49074__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49074__$1);
var G__49691 = cljs.core.chunk_rest(seq__49074__$1);
var G__49692 = c__4556__auto__;
var G__49693 = cljs.core.count(c__4556__auto__);
var G__49694 = (0);
seq__49074 = G__49691;
chunk__49075 = G__49692;
count__49076 = G__49693;
i__49077 = G__49694;
continue;
} else {
var it = cljs.core.first(seq__49074__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49696 = cljs.core.next(seq__49074__$1);
var G__49697 = null;
var G__49698 = (0);
var G__49699 = (0);
seq__49074 = G__49696;
chunk__49075 = G__49697;
count__49076 = G__49698;
i__49077 = G__49699;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49084,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49095 = k49084;
var G__49095__$1 = (((G__49095 instanceof cljs.core.Keyword))?G__49095.fqn:null);
switch (G__49095__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49084,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49098){
var vec__49099 = p__49098;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49099,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49099,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49083){
var self__ = this;
var G__49083__$1 = this;
return (new cljs.core.RecordIter((0),G__49083__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49085,other49086){
var self__ = this;
var this49085__$1 = this;
return (((!((other49086 == null)))) && ((this49085__$1.constructor === other49086.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49085__$1.x,other49086.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49085__$1.y,other49086.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49085__$1.__extmap,other49086.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49083){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49118 = cljs.core.keyword_identical_QMARK_;
var expr__49119 = k__4388__auto__;
if(cljs.core.truth_((pred__49118.cljs$core$IFn$_invoke$arity$2 ? pred__49118.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__49119) : pred__49118.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__49119)))){
return (new shadow.dom.Coordinate(G__49083,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49118.cljs$core$IFn$_invoke$arity$2 ? pred__49118.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__49119) : pred__49118.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__49119)))){
return (new shadow.dom.Coordinate(self__.x,G__49083,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49083),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49083){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__49083,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__49089){
var extmap__4419__auto__ = (function (){var G__49129 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49089,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__49089)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49129);
} else {
return G__49129;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__49089),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__49089),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49134,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49140 = k49134;
var G__49140__$1 = (((G__49140 instanceof cljs.core.Keyword))?G__49140.fqn:null);
switch (G__49140__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49134,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49143){
var vec__49144 = p__49143;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49144,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49144,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49133){
var self__ = this;
var G__49133__$1 = this;
return (new cljs.core.RecordIter((0),G__49133__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49135,other49136){
var self__ = this;
var this49135__$1 = this;
return (((!((other49136 == null)))) && ((this49135__$1.constructor === other49136.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49135__$1.w,other49136.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49135__$1.h,other49136.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49135__$1.__extmap,other49136.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49133){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49151 = cljs.core.keyword_identical_QMARK_;
var expr__49152 = k__4388__auto__;
if(cljs.core.truth_((pred__49151.cljs$core$IFn$_invoke$arity$2 ? pred__49151.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__49152) : pred__49151.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__49152)))){
return (new shadow.dom.Size(G__49133,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49151.cljs$core$IFn$_invoke$arity$2 ? pred__49151.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__49152) : pred__49151.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__49152)))){
return (new shadow.dom.Size(self__.w,G__49133,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49133),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49133){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__49133,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__49137){
var extmap__4419__auto__ = (function (){var G__49158 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49137,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__49137)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49158);
} else {
return G__49158;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__49137),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__49137),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__49753 = (i + (1));
var G__49754 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49753;
ret = G__49754;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49183){
var vec__49185 = p__49183;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49185,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49185,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__49191 = arguments.length;
switch (G__49191) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__49761 = ps;
var G__49762 = (i + (1));
el__$1 = G__49761;
i = G__49762;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__49216 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49216,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49216,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49216,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__49219_49770 = cljs.core.seq(props);
var chunk__49220_49771 = null;
var count__49221_49772 = (0);
var i__49222_49773 = (0);
while(true){
if((i__49222_49773 < count__49221_49772)){
var vec__49232_49775 = chunk__49220_49771.cljs$core$IIndexed$_nth$arity$2(null,i__49222_49773);
var k_49776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49232_49775,(0),null);
var v_49777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49232_49775,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_49776);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49776),v_49777);


var G__49778 = seq__49219_49770;
var G__49779 = chunk__49220_49771;
var G__49780 = count__49221_49772;
var G__49781 = (i__49222_49773 + (1));
seq__49219_49770 = G__49778;
chunk__49220_49771 = G__49779;
count__49221_49772 = G__49780;
i__49222_49773 = G__49781;
continue;
} else {
var temp__5735__auto___49782 = cljs.core.seq(seq__49219_49770);
if(temp__5735__auto___49782){
var seq__49219_49783__$1 = temp__5735__auto___49782;
if(cljs.core.chunked_seq_QMARK_(seq__49219_49783__$1)){
var c__4556__auto___49784 = cljs.core.chunk_first(seq__49219_49783__$1);
var G__49785 = cljs.core.chunk_rest(seq__49219_49783__$1);
var G__49786 = c__4556__auto___49784;
var G__49787 = cljs.core.count(c__4556__auto___49784);
var G__49788 = (0);
seq__49219_49770 = G__49785;
chunk__49220_49771 = G__49786;
count__49221_49772 = G__49787;
i__49222_49773 = G__49788;
continue;
} else {
var vec__49236_49789 = cljs.core.first(seq__49219_49783__$1);
var k_49790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49236_49789,(0),null);
var v_49791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49236_49789,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_49790);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49790),v_49791);


var G__49792 = cljs.core.next(seq__49219_49783__$1);
var G__49793 = null;
var G__49794 = (0);
var G__49795 = (0);
seq__49219_49770 = G__49792;
chunk__49220_49771 = G__49793;
count__49221_49772 = G__49794;
i__49222_49773 = G__49795;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__49241 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49241,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49241,(1),null);
var seq__49244_49813 = cljs.core.seq(node_children);
var chunk__49246_49814 = null;
var count__49247_49815 = (0);
var i__49248_49816 = (0);
while(true){
if((i__49248_49816 < count__49247_49815)){
var child_struct_49817 = chunk__49246_49814.cljs$core$IIndexed$_nth$arity$2(null,i__49248_49816);
if((!((child_struct_49817 == null)))){
if(typeof child_struct_49817 === 'string'){
var text_49818 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49818),child_struct_49817].join(''));
} else {
var children_49819 = shadow.dom.svg_node(child_struct_49817);
if(cljs.core.seq_QMARK_(children_49819)){
var seq__49279_49820 = cljs.core.seq(children_49819);
var chunk__49281_49821 = null;
var count__49282_49822 = (0);
var i__49283_49823 = (0);
while(true){
if((i__49283_49823 < count__49282_49822)){
var child_49824 = chunk__49281_49821.cljs$core$IIndexed$_nth$arity$2(null,i__49283_49823);
if(cljs.core.truth_(child_49824)){
node.appendChild(child_49824);


var G__49825 = seq__49279_49820;
var G__49826 = chunk__49281_49821;
var G__49827 = count__49282_49822;
var G__49828 = (i__49283_49823 + (1));
seq__49279_49820 = G__49825;
chunk__49281_49821 = G__49826;
count__49282_49822 = G__49827;
i__49283_49823 = G__49828;
continue;
} else {
var G__49829 = seq__49279_49820;
var G__49830 = chunk__49281_49821;
var G__49831 = count__49282_49822;
var G__49832 = (i__49283_49823 + (1));
seq__49279_49820 = G__49829;
chunk__49281_49821 = G__49830;
count__49282_49822 = G__49831;
i__49283_49823 = G__49832;
continue;
}
} else {
var temp__5735__auto___49833 = cljs.core.seq(seq__49279_49820);
if(temp__5735__auto___49833){
var seq__49279_49834__$1 = temp__5735__auto___49833;
if(cljs.core.chunked_seq_QMARK_(seq__49279_49834__$1)){
var c__4556__auto___49835 = cljs.core.chunk_first(seq__49279_49834__$1);
var G__49836 = cljs.core.chunk_rest(seq__49279_49834__$1);
var G__49837 = c__4556__auto___49835;
var G__49838 = cljs.core.count(c__4556__auto___49835);
var G__49839 = (0);
seq__49279_49820 = G__49836;
chunk__49281_49821 = G__49837;
count__49282_49822 = G__49838;
i__49283_49823 = G__49839;
continue;
} else {
var child_49840 = cljs.core.first(seq__49279_49834__$1);
if(cljs.core.truth_(child_49840)){
node.appendChild(child_49840);


var G__49841 = cljs.core.next(seq__49279_49834__$1);
var G__49842 = null;
var G__49843 = (0);
var G__49844 = (0);
seq__49279_49820 = G__49841;
chunk__49281_49821 = G__49842;
count__49282_49822 = G__49843;
i__49283_49823 = G__49844;
continue;
} else {
var G__49845 = cljs.core.next(seq__49279_49834__$1);
var G__49846 = null;
var G__49847 = (0);
var G__49848 = (0);
seq__49279_49820 = G__49845;
chunk__49281_49821 = G__49846;
count__49282_49822 = G__49847;
i__49283_49823 = G__49848;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49819);
}
}


var G__49849 = seq__49244_49813;
var G__49850 = chunk__49246_49814;
var G__49851 = count__49247_49815;
var G__49852 = (i__49248_49816 + (1));
seq__49244_49813 = G__49849;
chunk__49246_49814 = G__49850;
count__49247_49815 = G__49851;
i__49248_49816 = G__49852;
continue;
} else {
var G__49853 = seq__49244_49813;
var G__49854 = chunk__49246_49814;
var G__49855 = count__49247_49815;
var G__49856 = (i__49248_49816 + (1));
seq__49244_49813 = G__49853;
chunk__49246_49814 = G__49854;
count__49247_49815 = G__49855;
i__49248_49816 = G__49856;
continue;
}
} else {
var temp__5735__auto___49857 = cljs.core.seq(seq__49244_49813);
if(temp__5735__auto___49857){
var seq__49244_49858__$1 = temp__5735__auto___49857;
if(cljs.core.chunked_seq_QMARK_(seq__49244_49858__$1)){
var c__4556__auto___49859 = cljs.core.chunk_first(seq__49244_49858__$1);
var G__49860 = cljs.core.chunk_rest(seq__49244_49858__$1);
var G__49861 = c__4556__auto___49859;
var G__49862 = cljs.core.count(c__4556__auto___49859);
var G__49863 = (0);
seq__49244_49813 = G__49860;
chunk__49246_49814 = G__49861;
count__49247_49815 = G__49862;
i__49248_49816 = G__49863;
continue;
} else {
var child_struct_49864 = cljs.core.first(seq__49244_49858__$1);
if((!((child_struct_49864 == null)))){
if(typeof child_struct_49864 === 'string'){
var text_49865 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49865),child_struct_49864].join(''));
} else {
var children_49866 = shadow.dom.svg_node(child_struct_49864);
if(cljs.core.seq_QMARK_(children_49866)){
var seq__49293_49867 = cljs.core.seq(children_49866);
var chunk__49295_49868 = null;
var count__49296_49869 = (0);
var i__49297_49870 = (0);
while(true){
if((i__49297_49870 < count__49296_49869)){
var child_49871 = chunk__49295_49868.cljs$core$IIndexed$_nth$arity$2(null,i__49297_49870);
if(cljs.core.truth_(child_49871)){
node.appendChild(child_49871);


var G__49872 = seq__49293_49867;
var G__49873 = chunk__49295_49868;
var G__49874 = count__49296_49869;
var G__49875 = (i__49297_49870 + (1));
seq__49293_49867 = G__49872;
chunk__49295_49868 = G__49873;
count__49296_49869 = G__49874;
i__49297_49870 = G__49875;
continue;
} else {
var G__49876 = seq__49293_49867;
var G__49877 = chunk__49295_49868;
var G__49878 = count__49296_49869;
var G__49879 = (i__49297_49870 + (1));
seq__49293_49867 = G__49876;
chunk__49295_49868 = G__49877;
count__49296_49869 = G__49878;
i__49297_49870 = G__49879;
continue;
}
} else {
var temp__5735__auto___49880__$1 = cljs.core.seq(seq__49293_49867);
if(temp__5735__auto___49880__$1){
var seq__49293_49881__$1 = temp__5735__auto___49880__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49293_49881__$1)){
var c__4556__auto___49882 = cljs.core.chunk_first(seq__49293_49881__$1);
var G__49883 = cljs.core.chunk_rest(seq__49293_49881__$1);
var G__49884 = c__4556__auto___49882;
var G__49885 = cljs.core.count(c__4556__auto___49882);
var G__49886 = (0);
seq__49293_49867 = G__49883;
chunk__49295_49868 = G__49884;
count__49296_49869 = G__49885;
i__49297_49870 = G__49886;
continue;
} else {
var child_49887 = cljs.core.first(seq__49293_49881__$1);
if(cljs.core.truth_(child_49887)){
node.appendChild(child_49887);


var G__49888 = cljs.core.next(seq__49293_49881__$1);
var G__49889 = null;
var G__49890 = (0);
var G__49891 = (0);
seq__49293_49867 = G__49888;
chunk__49295_49868 = G__49889;
count__49296_49869 = G__49890;
i__49297_49870 = G__49891;
continue;
} else {
var G__49892 = cljs.core.next(seq__49293_49881__$1);
var G__49893 = null;
var G__49894 = (0);
var G__49895 = (0);
seq__49293_49867 = G__49892;
chunk__49295_49868 = G__49893;
count__49296_49869 = G__49894;
i__49297_49870 = G__49895;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49866);
}
}


var G__49896 = cljs.core.next(seq__49244_49858__$1);
var G__49897 = null;
var G__49898 = (0);
var G__49899 = (0);
seq__49244_49813 = G__49896;
chunk__49246_49814 = G__49897;
count__49247_49815 = G__49898;
i__49248_49816 = G__49899;
continue;
} else {
var G__49900 = cljs.core.next(seq__49244_49858__$1);
var G__49901 = null;
var G__49902 = (0);
var G__49903 = (0);
seq__49244_49813 = G__49900;
chunk__49246_49814 = G__49901;
count__49247_49815 = G__49902;
i__49248_49816 = G__49903;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49904 = arguments.length;
var i__4737__auto___49905 = (0);
while(true){
if((i__4737__auto___49905 < len__4736__auto___49904)){
args__4742__auto__.push((arguments[i__4737__auto___49905]));

var G__49906 = (i__4737__auto___49905 + (1));
i__4737__auto___49905 = G__49906;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq49307){
var G__49308 = cljs.core.first(seq49307);
var seq49307__$1 = cljs.core.next(seq49307);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49308,seq49307__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__49314 = arguments.length;
switch (G__49314) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__46974__auto___49910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46975__auto__ = (function (){var switch__46941__auto__ = (function (state_49328){
var state_val_49329 = (state_49328[(1)]);
if((state_val_49329 === (1))){
var state_49328__$1 = state_49328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49328__$1,(2),once_or_cleanup);
} else {
if((state_val_49329 === (2))){
var inst_49325 = (state_49328[(2)]);
var inst_49326 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_49328__$1 = (function (){var statearr_49332 = state_49328;
(statearr_49332[(7)] = inst_49325);

return statearr_49332;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49328__$1,inst_49326);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46942__auto__ = null;
var shadow$dom$state_machine__46942__auto____0 = (function (){
var statearr_49334 = [null,null,null,null,null,null,null,null];
(statearr_49334[(0)] = shadow$dom$state_machine__46942__auto__);

(statearr_49334[(1)] = (1));

return statearr_49334;
});
var shadow$dom$state_machine__46942__auto____1 = (function (state_49328){
while(true){
var ret_value__46943__auto__ = (function (){try{while(true){
var result__46944__auto__ = switch__46941__auto__(state_49328);
if(cljs.core.keyword_identical_QMARK_(result__46944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46944__auto__;
}
break;
}
}catch (e49335){var ex__46945__auto__ = e49335;
var statearr_49336_49911 = state_49328;
(statearr_49336_49911[(2)] = ex__46945__auto__);


if(cljs.core.seq((state_49328[(4)]))){
var statearr_49338_49912 = state_49328;
(statearr_49338_49912[(1)] = cljs.core.first((state_49328[(4)])));

} else {
throw ex__46945__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49913 = state_49328;
state_49328 = G__49913;
continue;
} else {
return ret_value__46943__auto__;
}
break;
}
});
shadow$dom$state_machine__46942__auto__ = function(state_49328){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46942__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46942__auto____1.call(this,state_49328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46942__auto____0;
shadow$dom$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46942__auto____1;
return shadow$dom$state_machine__46942__auto__;
})()
})();
var state__46976__auto__ = (function (){var statearr_49340 = f__46975__auto__();
(statearr_49340[(6)] = c__46974__auto___49910);

return statearr_49340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46976__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
