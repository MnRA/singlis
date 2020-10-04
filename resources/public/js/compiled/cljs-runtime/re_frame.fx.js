goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52885 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52886 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52886);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___52964 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___52964)){
var new_db_52965 = temp__5735__auto___52964;
var fexpr__52889_52966 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__52889_52966.cljs$core$IFn$_invoke$arity$1 ? fexpr__52889_52966.cljs$core$IFn$_invoke$arity$1(new_db_52965) : fexpr__52889_52966.call(null,new_db_52965));
} else {
}

var seq__52890 = cljs.core.seq(effects_without_db);
var chunk__52891 = null;
var count__52892 = (0);
var i__52893 = (0);
while(true){
if((i__52893 < count__52892)){
var vec__52903 = chunk__52891.cljs$core$IIndexed$_nth$arity$2(null,i__52893);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52903,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52903,(1),null);
var temp__5733__auto___52967 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52967)){
var effect_fn_52968 = temp__5733__auto___52967;
(effect_fn_52968.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52968.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52968.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52969 = seq__52890;
var G__52970 = chunk__52891;
var G__52971 = count__52892;
var G__52972 = (i__52893 + (1));
seq__52890 = G__52969;
chunk__52891 = G__52970;
count__52892 = G__52971;
i__52893 = G__52972;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52890);
if(temp__5735__auto__){
var seq__52890__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52890__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52890__$1);
var G__52973 = cljs.core.chunk_rest(seq__52890__$1);
var G__52974 = c__4556__auto__;
var G__52975 = cljs.core.count(c__4556__auto__);
var G__52976 = (0);
seq__52890 = G__52973;
chunk__52891 = G__52974;
count__52892 = G__52975;
i__52893 = G__52976;
continue;
} else {
var vec__52907 = cljs.core.first(seq__52890__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52907,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52907,(1),null);
var temp__5733__auto___52977 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52977)){
var effect_fn_52978 = temp__5733__auto___52977;
(effect_fn_52978.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52978.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52978.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52981 = cljs.core.next(seq__52890__$1);
var G__52982 = null;
var G__52983 = (0);
var G__52984 = (0);
seq__52890 = G__52981;
chunk__52891 = G__52982;
count__52892 = G__52983;
i__52893 = G__52984;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52615__auto___52985 = re_frame.interop.now();
var duration__52616__auto___52986 = (end__52615__auto___52985 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52616__auto___52986,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52615__auto___52985);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52885);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___52987 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___52987)){
var new_db_52988 = temp__5735__auto___52987;
var fexpr__52912_52989 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__52912_52989.cljs$core$IFn$_invoke$arity$1 ? fexpr__52912_52989.cljs$core$IFn$_invoke$arity$1(new_db_52988) : fexpr__52912_52989.call(null,new_db_52988));
} else {
}

var seq__52913 = cljs.core.seq(effects_without_db);
var chunk__52914 = null;
var count__52915 = (0);
var i__52916 = (0);
while(true){
if((i__52916 < count__52915)){
var vec__52924 = chunk__52914.cljs$core$IIndexed$_nth$arity$2(null,i__52916);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52924,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52924,(1),null);
var temp__5733__auto___52990 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52990)){
var effect_fn_52991 = temp__5733__auto___52990;
(effect_fn_52991.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52991.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52991.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52992 = seq__52913;
var G__52993 = chunk__52914;
var G__52994 = count__52915;
var G__52995 = (i__52916 + (1));
seq__52913 = G__52992;
chunk__52914 = G__52993;
count__52915 = G__52994;
i__52916 = G__52995;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52913);
if(temp__5735__auto__){
var seq__52913__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52913__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52913__$1);
var G__52996 = cljs.core.chunk_rest(seq__52913__$1);
var G__52997 = c__4556__auto__;
var G__52998 = cljs.core.count(c__4556__auto__);
var G__52999 = (0);
seq__52913 = G__52996;
chunk__52914 = G__52997;
count__52915 = G__52998;
i__52916 = G__52999;
continue;
} else {
var vec__52928 = cljs.core.first(seq__52913__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52928,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52928,(1),null);
var temp__5733__auto___53000 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53000)){
var effect_fn_53001 = temp__5733__auto___53000;
(effect_fn_53001.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53001.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53001.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53002 = cljs.core.next(seq__52913__$1);
var G__53003 = null;
var G__53004 = (0);
var G__53005 = (0);
seq__52913 = G__53002;
chunk__52914 = G__53003;
count__52915 = G__53004;
i__52916 = G__53005;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__52931){
var map__52932 = p__52931;
var map__52932__$1 = (((((!((map__52932 == null))))?(((((map__52932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52932):map__52932);
var effect = map__52932__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52932__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52932__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__52935 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52936 = null;
var count__52937 = (0);
var i__52938 = (0);
while(true){
if((i__52938 < count__52937)){
var effect = chunk__52936.cljs$core$IIndexed$_nth$arity$2(null,i__52938);
re_frame.fx.dispatch_later(effect);


var G__53006 = seq__52935;
var G__53007 = chunk__52936;
var G__53008 = count__52937;
var G__53009 = (i__52938 + (1));
seq__52935 = G__53006;
chunk__52936 = G__53007;
count__52937 = G__53008;
i__52938 = G__53009;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52935);
if(temp__5735__auto__){
var seq__52935__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52935__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52935__$1);
var G__53010 = cljs.core.chunk_rest(seq__52935__$1);
var G__53011 = c__4556__auto__;
var G__53012 = cljs.core.count(c__4556__auto__);
var G__53013 = (0);
seq__52935 = G__53010;
chunk__52936 = G__53011;
count__52937 = G__53012;
i__52938 = G__53013;
continue;
} else {
var effect = cljs.core.first(seq__52935__$1);
re_frame.fx.dispatch_later(effect);


var G__53014 = cljs.core.next(seq__52935__$1);
var G__53015 = null;
var G__53016 = (0);
var G__53017 = (0);
seq__52935 = G__53014;
chunk__52936 = G__53015;
count__52937 = G__53016;
i__52938 = G__53017;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__52939 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__52940 = null;
var count__52941 = (0);
var i__52942 = (0);
while(true){
if((i__52942 < count__52941)){
var vec__52950 = chunk__52940.cljs$core$IIndexed$_nth$arity$2(null,i__52942);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52950,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52950,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___53018 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53018)){
var effect_fn_53019 = temp__5733__auto___53018;
(effect_fn_53019.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53019.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53019.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__53020 = seq__52939;
var G__53021 = chunk__52940;
var G__53022 = count__52941;
var G__53023 = (i__52942 + (1));
seq__52939 = G__53020;
chunk__52940 = G__53021;
count__52941 = G__53022;
i__52942 = G__53023;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52939);
if(temp__5735__auto__){
var seq__52939__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52939__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52939__$1);
var G__53024 = cljs.core.chunk_rest(seq__52939__$1);
var G__53025 = c__4556__auto__;
var G__53026 = cljs.core.count(c__4556__auto__);
var G__53027 = (0);
seq__52939 = G__53024;
chunk__52940 = G__53025;
count__52941 = G__53026;
i__52942 = G__53027;
continue;
} else {
var vec__52953 = cljs.core.first(seq__52939__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52953,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52953,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___53028 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53028)){
var effect_fn_53029 = temp__5733__auto___53028;
(effect_fn_53029.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53029.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53029.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__53030 = cljs.core.next(seq__52939__$1);
var G__53031 = null;
var G__53032 = (0);
var G__53033 = (0);
seq__52939 = G__53030;
chunk__52940 = G__53031;
count__52941 = G__53032;
i__52942 = G__53033;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__52956 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52957 = null;
var count__52958 = (0);
var i__52959 = (0);
while(true){
if((i__52959 < count__52958)){
var event = chunk__52957.cljs$core$IIndexed$_nth$arity$2(null,i__52959);
re_frame.router.dispatch(event);


var G__53035 = seq__52956;
var G__53036 = chunk__52957;
var G__53037 = count__52958;
var G__53038 = (i__52959 + (1));
seq__52956 = G__53035;
chunk__52957 = G__53036;
count__52958 = G__53037;
i__52959 = G__53038;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52956);
if(temp__5735__auto__){
var seq__52956__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52956__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52956__$1);
var G__53039 = cljs.core.chunk_rest(seq__52956__$1);
var G__53040 = c__4556__auto__;
var G__53041 = cljs.core.count(c__4556__auto__);
var G__53042 = (0);
seq__52956 = G__53039;
chunk__52957 = G__53040;
count__52958 = G__53041;
i__52959 = G__53042;
continue;
} else {
var event = cljs.core.first(seq__52956__$1);
re_frame.router.dispatch(event);


var G__53043 = cljs.core.next(seq__52956__$1);
var G__53044 = null;
var G__53045 = (0);
var G__53046 = (0);
seq__52956 = G__53043;
chunk__52957 = G__53044;
count__52958 = G__53045;
i__52959 = G__53046;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__52960 = cljs.core.seq(value);
var chunk__52961 = null;
var count__52962 = (0);
var i__52963 = (0);
while(true){
if((i__52963 < count__52962)){
var event = chunk__52961.cljs$core$IIndexed$_nth$arity$2(null,i__52963);
clear_event(event);


var G__53047 = seq__52960;
var G__53048 = chunk__52961;
var G__53049 = count__52962;
var G__53050 = (i__52963 + (1));
seq__52960 = G__53047;
chunk__52961 = G__53048;
count__52962 = G__53049;
i__52963 = G__53050;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52960);
if(temp__5735__auto__){
var seq__52960__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52960__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52960__$1);
var G__53054 = cljs.core.chunk_rest(seq__52960__$1);
var G__53055 = c__4556__auto__;
var G__53056 = cljs.core.count(c__4556__auto__);
var G__53057 = (0);
seq__52960 = G__53054;
chunk__52961 = G__53055;
count__52962 = G__53056;
i__52963 = G__53057;
continue;
} else {
var event = cljs.core.first(seq__52960__$1);
clear_event(event);


var G__53058 = cljs.core.next(seq__52960__$1);
var G__53059 = null;
var G__53060 = (0);
var G__53061 = (0);
seq__52960 = G__53058;
chunk__52961 = G__53059;
count__52962 = G__53060;
i__52963 = G__53061;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
