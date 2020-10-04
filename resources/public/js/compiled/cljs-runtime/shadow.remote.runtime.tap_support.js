goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__51091,p__51092){
var map__51093 = p__51091;
var map__51093__$1 = (((((!((map__51093 == null))))?(((((map__51093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51093):map__51093);
var svc = map__51093__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51093__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51093__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51093__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51094 = p__51092;
var map__51094__$1 = (((((!((map__51094 == null))))?(((((map__51094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51094):map__51094);
var msg = map__51094__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51094__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51094__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51094__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51094__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__51102,p__51103){
var map__51104 = p__51102;
var map__51104__$1 = (((((!((map__51104 == null))))?(((((map__51104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51104):map__51104);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51104__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__51106 = p__51103;
var map__51106__$1 = (((((!((map__51106 == null))))?(((((map__51106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51106):map__51106);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51106__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__51113,p__51114){
var map__51117 = p__51113;
var map__51117__$1 = (((((!((map__51117 == null))))?(((((map__51117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51117):map__51117);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51117__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51117__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51118 = p__51114;
var map__51118__$1 = (((((!((map__51118 == null))))?(((((map__51118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51118):map__51118);
var msg = map__51118__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51118__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__51125,tid){
var map__51126 = p__51125;
var map__51126__$1 = (((((!((map__51126 == null))))?(((((map__51126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51126):map__51126);
var svc = map__51126__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51126__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__51134 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__51135 = null;
var count__51136 = (0);
var i__51137 = (0);
while(true){
if((i__51137 < count__51136)){
var vec__51146 = chunk__51135.cljs$core$IIndexed$_nth$arity$2(null,i__51137);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51146,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51146,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51166 = seq__51134;
var G__51167 = chunk__51135;
var G__51168 = count__51136;
var G__51169 = (i__51137 + (1));
seq__51134 = G__51166;
chunk__51135 = G__51167;
count__51136 = G__51168;
i__51137 = G__51169;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51134);
if(temp__5735__auto__){
var seq__51134__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51134__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51134__$1);
var G__51170 = cljs.core.chunk_rest(seq__51134__$1);
var G__51171 = c__4556__auto__;
var G__51172 = cljs.core.count(c__4556__auto__);
var G__51173 = (0);
seq__51134 = G__51170;
chunk__51135 = G__51171;
count__51136 = G__51172;
i__51137 = G__51173;
continue;
} else {
var vec__51149 = cljs.core.first(seq__51134__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51149,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51149,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51174 = cljs.core.next(seq__51134__$1);
var G__51175 = null;
var G__51176 = (0);
var G__51177 = (0);
seq__51134 = G__51174;
chunk__51135 = G__51175;
count__51136 = G__51176;
i__51137 = G__51177;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__51130_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__51130_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__51131_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__51131_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__51132_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__51132_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__51133_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__51133_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__51162){
var map__51163 = p__51162;
var map__51163__$1 = (((((!((map__51163 == null))))?(((((map__51163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51163):map__51163);
var svc = map__51163__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51163__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51163__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
