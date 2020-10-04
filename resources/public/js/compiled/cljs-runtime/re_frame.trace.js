goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__52635){
var map__52636 = p__52635;
var map__52636__$1 = (((((!((map__52636 == null))))?(((((map__52636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52636):map__52636);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52636__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52636__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52636__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52636__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__52638_52697 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__52639_52698 = null;
var count__52640_52699 = (0);
var i__52641_52700 = (0);
while(true){
if((i__52641_52700 < count__52640_52699)){
var vec__52652_52701 = chunk__52639_52698.cljs$core$IIndexed$_nth$arity$2(null,i__52641_52700);
var k_52702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52652_52701,(0),null);
var cb_52703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52652_52701,(1),null);
try{var G__52656_52710 = cljs.core.deref(re_frame.trace.traces);
(cb_52703.cljs$core$IFn$_invoke$arity$1 ? cb_52703.cljs$core$IFn$_invoke$arity$1(G__52656_52710) : cb_52703.call(null,G__52656_52710));
}catch (e52655){var e_52711 = e52655;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52702,"while storing",cljs.core.deref(re_frame.trace.traces),e_52711], 0));
}

var G__52712 = seq__52638_52697;
var G__52713 = chunk__52639_52698;
var G__52714 = count__52640_52699;
var G__52715 = (i__52641_52700 + (1));
seq__52638_52697 = G__52712;
chunk__52639_52698 = G__52713;
count__52640_52699 = G__52714;
i__52641_52700 = G__52715;
continue;
} else {
var temp__5735__auto___52716 = cljs.core.seq(seq__52638_52697);
if(temp__5735__auto___52716){
var seq__52638_52717__$1 = temp__5735__auto___52716;
if(cljs.core.chunked_seq_QMARK_(seq__52638_52717__$1)){
var c__4556__auto___52720 = cljs.core.chunk_first(seq__52638_52717__$1);
var G__52721 = cljs.core.chunk_rest(seq__52638_52717__$1);
var G__52722 = c__4556__auto___52720;
var G__52723 = cljs.core.count(c__4556__auto___52720);
var G__52724 = (0);
seq__52638_52697 = G__52721;
chunk__52639_52698 = G__52722;
count__52640_52699 = G__52723;
i__52641_52700 = G__52724;
continue;
} else {
var vec__52657_52725 = cljs.core.first(seq__52638_52717__$1);
var k_52726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52657_52725,(0),null);
var cb_52727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52657_52725,(1),null);
try{var G__52661_52728 = cljs.core.deref(re_frame.trace.traces);
(cb_52727.cljs$core$IFn$_invoke$arity$1 ? cb_52727.cljs$core$IFn$_invoke$arity$1(G__52661_52728) : cb_52727.call(null,G__52661_52728));
}catch (e52660){var e_52729 = e52660;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52726,"while storing",cljs.core.deref(re_frame.trace.traces),e_52729], 0));
}

var G__52730 = cljs.core.next(seq__52638_52717__$1);
var G__52731 = null;
var G__52732 = (0);
var G__52733 = (0);
seq__52638_52697 = G__52730;
chunk__52639_52698 = G__52731;
count__52640_52699 = G__52732;
i__52641_52700 = G__52733;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
