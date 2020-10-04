goog.provide('singlis.events');
re_frame.core.reg_fx(new cljs.core.Keyword(null,"enable-metamask","enable-metamask",1389080078),(function (_){
return singlis.streaming.enable_metamask();
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"create-stream","create-stream",-422399452),(function (stream_values){
return singlis.streaming.process_form(stream_values);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"enable-metamask","enable-metamask",1389080078),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enable-metamask","enable-metamask",1389080078),true], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-stream","create-stream",-422399452),(function (p__46686,_){
var map__46687 = p__46686;
var map__46687__$1 = (((((!((map__46687 == null))))?(((((map__46687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46687):map__46687);
var coeffects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46687__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"requesting-approval","requesting-approval",1771256270)),new cljs.core.Keyword(null,"create-stream","create-stream",-422399452),new cljs.core.Keyword(null,"stream-values","stream-values",1710399854).cljs$core$IFn$_invoke$arity$1(coeffects)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stream-values","stream-values",1710399854),(function (db,p__46690){
var vec__46691 = p__46690;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46691,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46691,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46691,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-values","stream-values",1710399854),k], null),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-status","update-status",22520609),(function (db,p__46694){
var vec__46695 = p__46694;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46695,(0),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46695,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"status","status",-1997798413),status);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("singlis.events","initialize-db","singlis.events/initialize-db",-871814944),(function (_,___$1){
return singlis.db.default_db;
}));

//# sourceMappingURL=singlis.events.js.map
