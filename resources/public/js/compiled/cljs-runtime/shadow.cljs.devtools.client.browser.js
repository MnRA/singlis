goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51546 = arguments.length;
var i__4737__auto___51547 = (0);
while(true){
if((i__4737__auto___51547 < len__4736__auto___51546)){
args__4742__auto__.push((arguments[i__4737__auto___51547]));

var G__51548 = (i__4737__auto___51547 + (1));
i__4737__auto___51547 = G__51548;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq51287){
var G__51288 = cljs.core.first(seq51287);
var seq51287__$1 = cljs.core.next(seq51287);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51288,seq51287__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__51289 = cljs.core.seq(sources);
var chunk__51290 = null;
var count__51291 = (0);
var i__51292 = (0);
while(true){
if((i__51292 < count__51291)){
var map__51302 = chunk__51290.cljs$core$IIndexed$_nth$arity$2(null,i__51292);
var map__51302__$1 = (((((!((map__51302 == null))))?(((((map__51302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51302):map__51302);
var src = map__51302__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51302__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51302__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51302__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51302__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51304){var e_51549 = e51304;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51549);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51549.message)].join('')));
}

var G__51550 = seq__51289;
var G__51551 = chunk__51290;
var G__51552 = count__51291;
var G__51553 = (i__51292 + (1));
seq__51289 = G__51550;
chunk__51290 = G__51551;
count__51291 = G__51552;
i__51292 = G__51553;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51289);
if(temp__5735__auto__){
var seq__51289__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51289__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51289__$1);
var G__51554 = cljs.core.chunk_rest(seq__51289__$1);
var G__51555 = c__4556__auto__;
var G__51556 = cljs.core.count(c__4556__auto__);
var G__51557 = (0);
seq__51289 = G__51554;
chunk__51290 = G__51555;
count__51291 = G__51556;
i__51292 = G__51557;
continue;
} else {
var map__51305 = cljs.core.first(seq__51289__$1);
var map__51305__$1 = (((((!((map__51305 == null))))?(((((map__51305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51305):map__51305);
var src = map__51305__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51305__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51305__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51305__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51305__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51307){var e_51558 = e51307;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51558);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51558.message)].join('')));
}

var G__51559 = cljs.core.next(seq__51289__$1);
var G__51560 = null;
var G__51561 = (0);
var G__51562 = (0);
seq__51289 = G__51559;
chunk__51290 = G__51560;
count__51291 = G__51561;
i__51292 = G__51562;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__51309 = cljs.core.seq(js_requires);
var chunk__51310 = null;
var count__51311 = (0);
var i__51312 = (0);
while(true){
if((i__51312 < count__51311)){
var js_ns = chunk__51310.cljs$core$IIndexed$_nth$arity$2(null,i__51312);
var require_str_51563 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51563);


var G__51564 = seq__51309;
var G__51565 = chunk__51310;
var G__51566 = count__51311;
var G__51567 = (i__51312 + (1));
seq__51309 = G__51564;
chunk__51310 = G__51565;
count__51311 = G__51566;
i__51312 = G__51567;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51309);
if(temp__5735__auto__){
var seq__51309__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51309__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51309__$1);
var G__51568 = cljs.core.chunk_rest(seq__51309__$1);
var G__51569 = c__4556__auto__;
var G__51570 = cljs.core.count(c__4556__auto__);
var G__51571 = (0);
seq__51309 = G__51568;
chunk__51310 = G__51569;
count__51311 = G__51570;
i__51312 = G__51571;
continue;
} else {
var js_ns = cljs.core.first(seq__51309__$1);
var require_str_51572 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51572);


var G__51573 = cljs.core.next(seq__51309__$1);
var G__51574 = null;
var G__51575 = (0);
var G__51576 = (0);
seq__51309 = G__51573;
chunk__51310 = G__51574;
count__51311 = G__51575;
i__51312 = G__51576;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__51314){
var map__51316 = p__51314;
var map__51316__$1 = (((((!((map__51316 == null))))?(((((map__51316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51316):map__51316);
var msg = map__51316__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51316__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51316__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51325(s__51326){
return (new cljs.core.LazySeq(null,(function (){
var s__51326__$1 = s__51326;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51326__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__51331 = cljs.core.first(xs__6292__auto__);
var map__51331__$1 = (((((!((map__51331 == null))))?(((((map__51331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51331):map__51331);
var src = map__51331__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51331__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51331__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__51326__$1,map__51331,map__51331__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51316,map__51316__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51325_$_iter__51327(s__51328){
return (new cljs.core.LazySeq(null,((function (s__51326__$1,map__51331,map__51331__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51316,map__51316__$1,msg,info,reload_info){
return (function (){
var s__51328__$1 = s__51328;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51328__$1);
if(temp__5735__auto____$1){
var s__51328__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51328__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51328__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51330 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51329 = (0);
while(true){
if((i__51329 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__51329);
cljs.core.chunk_append(b__51330,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51582 = (i__51329 + (1));
i__51329 = G__51582;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51330),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51325_$_iter__51327(cljs.core.chunk_rest(s__51328__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51330),null);
}
} else {
var warning = cljs.core.first(s__51328__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51325_$_iter__51327(cljs.core.rest(s__51328__$2)));
}
} else {
return null;
}
break;
}
});})(s__51326__$1,map__51331,map__51331__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51316,map__51316__$1,msg,info,reload_info))
,null,null));
});})(s__51326__$1,map__51331,map__51331__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51316,map__51316__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51325(cljs.core.rest(s__51326__$1)));
} else {
var G__51583 = cljs.core.rest(s__51326__$1);
s__51326__$1 = G__51583;
continue;
}
} else {
var G__51584 = cljs.core.rest(s__51326__$1);
s__51326__$1 = G__51584;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__51333_51585 = cljs.core.seq(warnings);
var chunk__51334_51586 = null;
var count__51335_51587 = (0);
var i__51336_51588 = (0);
while(true){
if((i__51336_51588 < count__51335_51587)){
var map__51342_51589 = chunk__51334_51586.cljs$core$IIndexed$_nth$arity$2(null,i__51336_51588);
var map__51342_51590__$1 = (((((!((map__51342_51589 == null))))?(((((map__51342_51589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51342_51589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51342_51589):map__51342_51589);
var w_51591 = map__51342_51590__$1;
var msg_51592__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51342_51590__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51342_51590__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51342_51590__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51342_51590__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51595)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51593),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51594),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51592__$1)].join(''));


var G__51598 = seq__51333_51585;
var G__51599 = chunk__51334_51586;
var G__51600 = count__51335_51587;
var G__51601 = (i__51336_51588 + (1));
seq__51333_51585 = G__51598;
chunk__51334_51586 = G__51599;
count__51335_51587 = G__51600;
i__51336_51588 = G__51601;
continue;
} else {
var temp__5735__auto___51602 = cljs.core.seq(seq__51333_51585);
if(temp__5735__auto___51602){
var seq__51333_51603__$1 = temp__5735__auto___51602;
if(cljs.core.chunked_seq_QMARK_(seq__51333_51603__$1)){
var c__4556__auto___51604 = cljs.core.chunk_first(seq__51333_51603__$1);
var G__51605 = cljs.core.chunk_rest(seq__51333_51603__$1);
var G__51606 = c__4556__auto___51604;
var G__51607 = cljs.core.count(c__4556__auto___51604);
var G__51608 = (0);
seq__51333_51585 = G__51605;
chunk__51334_51586 = G__51606;
count__51335_51587 = G__51607;
i__51336_51588 = G__51608;
continue;
} else {
var map__51344_51609 = cljs.core.first(seq__51333_51603__$1);
var map__51344_51610__$1 = (((((!((map__51344_51609 == null))))?(((((map__51344_51609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51344_51609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51344_51609):map__51344_51609);
var w_51611 = map__51344_51610__$1;
var msg_51612__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51344_51610__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51344_51610__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51344_51610__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51344_51610__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51615)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51613),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51614),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51612__$1)].join(''));


var G__51617 = cljs.core.next(seq__51333_51603__$1);
var G__51618 = null;
var G__51619 = (0);
var G__51620 = (0);
seq__51333_51585 = G__51617;
chunk__51334_51586 = G__51618;
count__51335_51587 = G__51619;
i__51336_51588 = G__51620;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__51313_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__51313_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__51358){
var map__51359 = p__51358;
var map__51359__$1 = (((((!((map__51359 == null))))?(((((map__51359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51359):map__51359);
var msg = map__51359__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51359__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__51361 = cljs.core.seq(updates);
var chunk__51363 = null;
var count__51364 = (0);
var i__51365 = (0);
while(true){
if((i__51365 < count__51364)){
var path = chunk__51363.cljs$core$IIndexed$_nth$arity$2(null,i__51365);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51429_51622 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51434_51623 = null;
var count__51435_51624 = (0);
var i__51436_51625 = (0);
while(true){
if((i__51436_51625 < count__51435_51624)){
var node_51626 = chunk__51434_51623.cljs$core$IIndexed$_nth$arity$2(null,i__51436_51625);
var path_match_51627 = shadow.cljs.devtools.client.browser.match_paths(node_51626.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51627)){
var new_link_51628 = (function (){var G__51458 = node_51626.cloneNode(true);
G__51458.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51627),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51458;
})();
(new_link_51628.onload = ((function (seq__51429_51622,chunk__51434_51623,count__51435_51624,i__51436_51625,seq__51361,chunk__51363,count__51364,i__51365,new_link_51628,path_match_51627,node_51626,path,map__51359,map__51359__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_51626);
});})(seq__51429_51622,chunk__51434_51623,count__51435_51624,i__51436_51625,seq__51361,chunk__51363,count__51364,i__51365,new_link_51628,path_match_51627,node_51626,path,map__51359,map__51359__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51627], 0));

goog.dom.insertSiblingAfter(new_link_51628,node_51626);


var G__51630 = seq__51429_51622;
var G__51631 = chunk__51434_51623;
var G__51632 = count__51435_51624;
var G__51633 = (i__51436_51625 + (1));
seq__51429_51622 = G__51630;
chunk__51434_51623 = G__51631;
count__51435_51624 = G__51632;
i__51436_51625 = G__51633;
continue;
} else {
var G__51634 = seq__51429_51622;
var G__51635 = chunk__51434_51623;
var G__51636 = count__51435_51624;
var G__51637 = (i__51436_51625 + (1));
seq__51429_51622 = G__51634;
chunk__51434_51623 = G__51635;
count__51435_51624 = G__51636;
i__51436_51625 = G__51637;
continue;
}
} else {
var temp__5735__auto___51638 = cljs.core.seq(seq__51429_51622);
if(temp__5735__auto___51638){
var seq__51429_51639__$1 = temp__5735__auto___51638;
if(cljs.core.chunked_seq_QMARK_(seq__51429_51639__$1)){
var c__4556__auto___51640 = cljs.core.chunk_first(seq__51429_51639__$1);
var G__51641 = cljs.core.chunk_rest(seq__51429_51639__$1);
var G__51642 = c__4556__auto___51640;
var G__51643 = cljs.core.count(c__4556__auto___51640);
var G__51644 = (0);
seq__51429_51622 = G__51641;
chunk__51434_51623 = G__51642;
count__51435_51624 = G__51643;
i__51436_51625 = G__51644;
continue;
} else {
var node_51645 = cljs.core.first(seq__51429_51639__$1);
var path_match_51646 = shadow.cljs.devtools.client.browser.match_paths(node_51645.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51646)){
var new_link_51647 = (function (){var G__51463 = node_51645.cloneNode(true);
G__51463.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51646),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51463;
})();
(new_link_51647.onload = ((function (seq__51429_51622,chunk__51434_51623,count__51435_51624,i__51436_51625,seq__51361,chunk__51363,count__51364,i__51365,new_link_51647,path_match_51646,node_51645,seq__51429_51639__$1,temp__5735__auto___51638,path,map__51359,map__51359__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_51645);
});})(seq__51429_51622,chunk__51434_51623,count__51435_51624,i__51436_51625,seq__51361,chunk__51363,count__51364,i__51365,new_link_51647,path_match_51646,node_51645,seq__51429_51639__$1,temp__5735__auto___51638,path,map__51359,map__51359__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51646], 0));

goog.dom.insertSiblingAfter(new_link_51647,node_51645);


var G__51648 = cljs.core.next(seq__51429_51639__$1);
var G__51649 = null;
var G__51650 = (0);
var G__51651 = (0);
seq__51429_51622 = G__51648;
chunk__51434_51623 = G__51649;
count__51435_51624 = G__51650;
i__51436_51625 = G__51651;
continue;
} else {
var G__51652 = cljs.core.next(seq__51429_51639__$1);
var G__51653 = null;
var G__51654 = (0);
var G__51655 = (0);
seq__51429_51622 = G__51652;
chunk__51434_51623 = G__51653;
count__51435_51624 = G__51654;
i__51436_51625 = G__51655;
continue;
}
}
} else {
}
}
break;
}


var G__51656 = seq__51361;
var G__51657 = chunk__51363;
var G__51658 = count__51364;
var G__51659 = (i__51365 + (1));
seq__51361 = G__51656;
chunk__51363 = G__51657;
count__51364 = G__51658;
i__51365 = G__51659;
continue;
} else {
var G__51660 = seq__51361;
var G__51661 = chunk__51363;
var G__51662 = count__51364;
var G__51663 = (i__51365 + (1));
seq__51361 = G__51660;
chunk__51363 = G__51661;
count__51364 = G__51662;
i__51365 = G__51663;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51361);
if(temp__5735__auto__){
var seq__51361__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51361__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51361__$1);
var G__51664 = cljs.core.chunk_rest(seq__51361__$1);
var G__51665 = c__4556__auto__;
var G__51666 = cljs.core.count(c__4556__auto__);
var G__51667 = (0);
seq__51361 = G__51664;
chunk__51363 = G__51665;
count__51364 = G__51666;
i__51365 = G__51667;
continue;
} else {
var path = cljs.core.first(seq__51361__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51464_51668 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51467_51669 = null;
var count__51468_51670 = (0);
var i__51469_51671 = (0);
while(true){
if((i__51469_51671 < count__51468_51670)){
var node_51672 = chunk__51467_51669.cljs$core$IIndexed$_nth$arity$2(null,i__51469_51671);
var path_match_51673 = shadow.cljs.devtools.client.browser.match_paths(node_51672.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51673)){
var new_link_51674 = (function (){var G__51480 = node_51672.cloneNode(true);
G__51480.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51673),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51480;
})();
(new_link_51674.onload = ((function (seq__51464_51668,chunk__51467_51669,count__51468_51670,i__51469_51671,seq__51361,chunk__51363,count__51364,i__51365,new_link_51674,path_match_51673,node_51672,path,seq__51361__$1,temp__5735__auto__,map__51359,map__51359__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_51672);
});})(seq__51464_51668,chunk__51467_51669,count__51468_51670,i__51469_51671,seq__51361,chunk__51363,count__51364,i__51365,new_link_51674,path_match_51673,node_51672,path,seq__51361__$1,temp__5735__auto__,map__51359,map__51359__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51673], 0));

goog.dom.insertSiblingAfter(new_link_51674,node_51672);


var G__51675 = seq__51464_51668;
var G__51676 = chunk__51467_51669;
var G__51677 = count__51468_51670;
var G__51678 = (i__51469_51671 + (1));
seq__51464_51668 = G__51675;
chunk__51467_51669 = G__51676;
count__51468_51670 = G__51677;
i__51469_51671 = G__51678;
continue;
} else {
var G__51679 = seq__51464_51668;
var G__51680 = chunk__51467_51669;
var G__51681 = count__51468_51670;
var G__51682 = (i__51469_51671 + (1));
seq__51464_51668 = G__51679;
chunk__51467_51669 = G__51680;
count__51468_51670 = G__51681;
i__51469_51671 = G__51682;
continue;
}
} else {
var temp__5735__auto___51683__$1 = cljs.core.seq(seq__51464_51668);
if(temp__5735__auto___51683__$1){
var seq__51464_51684__$1 = temp__5735__auto___51683__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51464_51684__$1)){
var c__4556__auto___51685 = cljs.core.chunk_first(seq__51464_51684__$1);
var G__51686 = cljs.core.chunk_rest(seq__51464_51684__$1);
var G__51687 = c__4556__auto___51685;
var G__51688 = cljs.core.count(c__4556__auto___51685);
var G__51689 = (0);
seq__51464_51668 = G__51686;
chunk__51467_51669 = G__51687;
count__51468_51670 = G__51688;
i__51469_51671 = G__51689;
continue;
} else {
var node_51690 = cljs.core.first(seq__51464_51684__$1);
var path_match_51691 = shadow.cljs.devtools.client.browser.match_paths(node_51690.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51691)){
var new_link_51692 = (function (){var G__51485 = node_51690.cloneNode(true);
G__51485.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51691),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51485;
})();
(new_link_51692.onload = ((function (seq__51464_51668,chunk__51467_51669,count__51468_51670,i__51469_51671,seq__51361,chunk__51363,count__51364,i__51365,new_link_51692,path_match_51691,node_51690,seq__51464_51684__$1,temp__5735__auto___51683__$1,path,seq__51361__$1,temp__5735__auto__,map__51359,map__51359__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_51690);
});})(seq__51464_51668,chunk__51467_51669,count__51468_51670,i__51469_51671,seq__51361,chunk__51363,count__51364,i__51365,new_link_51692,path_match_51691,node_51690,seq__51464_51684__$1,temp__5735__auto___51683__$1,path,seq__51361__$1,temp__5735__auto__,map__51359,map__51359__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51691], 0));

goog.dom.insertSiblingAfter(new_link_51692,node_51690);


var G__51693 = cljs.core.next(seq__51464_51684__$1);
var G__51694 = null;
var G__51695 = (0);
var G__51696 = (0);
seq__51464_51668 = G__51693;
chunk__51467_51669 = G__51694;
count__51468_51670 = G__51695;
i__51469_51671 = G__51696;
continue;
} else {
var G__51697 = cljs.core.next(seq__51464_51684__$1);
var G__51698 = null;
var G__51699 = (0);
var G__51700 = (0);
seq__51464_51668 = G__51697;
chunk__51467_51669 = G__51698;
count__51468_51670 = G__51699;
i__51469_51671 = G__51700;
continue;
}
}
} else {
}
}
break;
}


var G__51701 = cljs.core.next(seq__51361__$1);
var G__51702 = null;
var G__51703 = (0);
var G__51704 = (0);
seq__51361 = G__51701;
chunk__51363 = G__51702;
count__51364 = G__51703;
i__51365 = G__51704;
continue;
} else {
var G__51705 = cljs.core.next(seq__51361__$1);
var G__51706 = null;
var G__51707 = (0);
var G__51708 = (0);
seq__51361 = G__51705;
chunk__51363 = G__51706;
count__51364 = G__51707;
i__51365 = G__51708;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__51487){
var map__51488 = p__51487;
var map__51488__$1 = (((((!((map__51488 == null))))?(((((map__51488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51488):map__51488);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51488__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__51499){
var map__51500 = p__51499;
var map__51500__$1 = (((((!((map__51500 == null))))?(((((map__51500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51500):map__51500);
var _ = map__51500__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51500__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__51503,done,error){
var map__51504 = p__51503;
var map__51504__$1 = (((((!((map__51504 == null))))?(((((map__51504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51504):map__51504);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51504__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__51510,done,error){
var map__51511 = p__51510;
var map__51511__$1 = (((((!((map__51511 == null))))?(((((map__51511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51511):map__51511);
var msg = map__51511__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51511__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51511__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51511__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51513){
var map__51514 = p__51513;
var map__51514__$1 = (((((!((map__51514 == null))))?(((((map__51514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51514):map__51514);
var src = map__51514__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51514__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__51519 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__51519) : done.call(null,G__51519));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__51523){
var map__51524 = p__51523;
var map__51524__$1 = (((((!((map__51524 == null))))?(((((map__51524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51524):map__51524);
var msg__$1 = map__51524__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51524__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e51526){var ex = e51526;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__51527){
var map__51530 = p__51527;
var map__51530__$1 = (((((!((map__51530 == null))))?(((((map__51530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51530):map__51530);
var env = map__51530__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51530__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__51532){
var map__51533 = p__51532;
var map__51533__$1 = (((((!((map__51533 == null))))?(((((map__51533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51533):map__51533);
var msg = map__51533__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51533__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__51535){
var map__51536 = p__51535;
var map__51536__$1 = (((((!((map__51536 == null))))?(((((map__51536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51536):map__51536);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51536__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51536__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__51538){
var map__51539 = p__51538;
var map__51539__$1 = (((((!((map__51539 == null))))?(((((map__51539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51539):map__51539);
var svc = map__51539__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51539__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
