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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-stream","create-stream",-422399452),(function (p__49526,_){
var map__49528 = p__49526;
var map__49528__$1 = (((((!((map__49528 == null))))?(((((map__49528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49528):map__49528);
var coeffects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49528__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"requesting-approval","requesting-approval",1771256270)),new cljs.core.Keyword(null,"create-stream","create-stream",-422399452),new cljs.core.Keyword(null,"stream-values","stream-values",1710399854).cljs$core$IFn$_invoke$arity$1(coeffects)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stream-values","stream-values",1710399854),(function (db,p__49530){
var vec__49531 = p__49530;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49531,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49531,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49531,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-values","stream-values",1710399854),k], null),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-status","update-status",22520609),(function (db,p__49535){
var vec__49536 = p__49535;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49536,(0),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49536,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"status","status",-1997798413),status);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("singlis.events","initialize-db","singlis.events/initialize-db",-871814944),(function (_,___$1){
return singlis.db.default_db;
}));

//# sourceMappingURL=singlis.events.js.map
