goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53999){
var map__54000 = p__53999;
var map__54000__$1 = (((((!((map__54000 == null))))?(((((map__54000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54000):map__54000);
var m = map__54000__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54000__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54000__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54003_54188 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54004_54189 = null;
var count__54005_54190 = (0);
var i__54006_54191 = (0);
while(true){
if((i__54006_54191 < count__54005_54190)){
var f_54192 = chunk__54004_54189.cljs$core$IIndexed$_nth$arity$2(null,i__54006_54191);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54192], 0));


var G__54193 = seq__54003_54188;
var G__54194 = chunk__54004_54189;
var G__54195 = count__54005_54190;
var G__54196 = (i__54006_54191 + (1));
seq__54003_54188 = G__54193;
chunk__54004_54189 = G__54194;
count__54005_54190 = G__54195;
i__54006_54191 = G__54196;
continue;
} else {
var temp__5735__auto___54198 = cljs.core.seq(seq__54003_54188);
if(temp__5735__auto___54198){
var seq__54003_54200__$1 = temp__5735__auto___54198;
if(cljs.core.chunked_seq_QMARK_(seq__54003_54200__$1)){
var c__4556__auto___54202 = cljs.core.chunk_first(seq__54003_54200__$1);
var G__54207 = cljs.core.chunk_rest(seq__54003_54200__$1);
var G__54208 = c__4556__auto___54202;
var G__54209 = cljs.core.count(c__4556__auto___54202);
var G__54210 = (0);
seq__54003_54188 = G__54207;
chunk__54004_54189 = G__54208;
count__54005_54190 = G__54209;
i__54006_54191 = G__54210;
continue;
} else {
var f_54214 = cljs.core.first(seq__54003_54200__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54214], 0));


var G__54215 = cljs.core.next(seq__54003_54200__$1);
var G__54216 = null;
var G__54217 = (0);
var G__54218 = (0);
seq__54003_54188 = G__54215;
chunk__54004_54189 = G__54216;
count__54005_54190 = G__54217;
i__54006_54191 = G__54218;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_54219 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_54219], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_54219)))?cljs.core.second(arglists_54219):arglists_54219)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54009_54220 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54010_54221 = null;
var count__54011_54222 = (0);
var i__54012_54223 = (0);
while(true){
if((i__54012_54223 < count__54011_54222)){
var vec__54024_54224 = chunk__54010_54221.cljs$core$IIndexed$_nth$arity$2(null,i__54012_54223);
var name_54225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54024_54224,(0),null);
var map__54027_54226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54024_54224,(1),null);
var map__54027_54227__$1 = (((((!((map__54027_54226 == null))))?(((((map__54027_54226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54027_54226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54027_54226):map__54027_54226);
var doc_54228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54027_54227__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54027_54227__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54225], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54229], 0));

if(cljs.core.truth_(doc_54228)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54228], 0));
} else {
}


var G__54230 = seq__54009_54220;
var G__54231 = chunk__54010_54221;
var G__54232 = count__54011_54222;
var G__54233 = (i__54012_54223 + (1));
seq__54009_54220 = G__54230;
chunk__54010_54221 = G__54231;
count__54011_54222 = G__54232;
i__54012_54223 = G__54233;
continue;
} else {
var temp__5735__auto___54234 = cljs.core.seq(seq__54009_54220);
if(temp__5735__auto___54234){
var seq__54009_54235__$1 = temp__5735__auto___54234;
if(cljs.core.chunked_seq_QMARK_(seq__54009_54235__$1)){
var c__4556__auto___54236 = cljs.core.chunk_first(seq__54009_54235__$1);
var G__54237 = cljs.core.chunk_rest(seq__54009_54235__$1);
var G__54238 = c__4556__auto___54236;
var G__54239 = cljs.core.count(c__4556__auto___54236);
var G__54240 = (0);
seq__54009_54220 = G__54237;
chunk__54010_54221 = G__54238;
count__54011_54222 = G__54239;
i__54012_54223 = G__54240;
continue;
} else {
var vec__54029_54245 = cljs.core.first(seq__54009_54235__$1);
var name_54246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54029_54245,(0),null);
var map__54032_54247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54029_54245,(1),null);
var map__54032_54248__$1 = (((((!((map__54032_54247 == null))))?(((((map__54032_54247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54032_54247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54032_54247):map__54032_54247);
var doc_54249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54032_54248__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54032_54248__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54246], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54250], 0));

if(cljs.core.truth_(doc_54249)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54249], 0));
} else {
}


var G__54255 = cljs.core.next(seq__54009_54235__$1);
var G__54256 = null;
var G__54257 = (0);
var G__54258 = (0);
seq__54009_54220 = G__54255;
chunk__54010_54221 = G__54256;
count__54011_54222 = G__54257;
i__54012_54223 = G__54258;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__54035 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__54036 = null;
var count__54037 = (0);
var i__54038 = (0);
while(true){
if((i__54038 < count__54037)){
var role = chunk__54036.cljs$core$IIndexed$_nth$arity$2(null,i__54038);
var temp__5735__auto___54259__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54259__$1)){
var spec_54260 = temp__5735__auto___54259__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54260)], 0));
} else {
}


var G__54261 = seq__54035;
var G__54262 = chunk__54036;
var G__54263 = count__54037;
var G__54264 = (i__54038 + (1));
seq__54035 = G__54261;
chunk__54036 = G__54262;
count__54037 = G__54263;
i__54038 = G__54264;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__54035);
if(temp__5735__auto____$1){
var seq__54035__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__54035__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54035__$1);
var G__54265 = cljs.core.chunk_rest(seq__54035__$1);
var G__54266 = c__4556__auto__;
var G__54267 = cljs.core.count(c__4556__auto__);
var G__54268 = (0);
seq__54035 = G__54265;
chunk__54036 = G__54266;
count__54037 = G__54267;
i__54038 = G__54268;
continue;
} else {
var role = cljs.core.first(seq__54035__$1);
var temp__5735__auto___54269__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54269__$2)){
var spec_54270 = temp__5735__auto___54269__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54270)], 0));
} else {
}


var G__54271 = cljs.core.next(seq__54035__$1);
var G__54272 = null;
var G__54273 = (0);
var G__54274 = (0);
seq__54035 = G__54271;
chunk__54036 = G__54272;
count__54037 = G__54273;
i__54038 = G__54274;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__54279 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__54280 = cljs.core.ex_cause(t);
via = G__54279;
t = G__54280;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__54046 = datafied_throwable;
var map__54046__$1 = (((((!((map__54046 == null))))?(((((map__54046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54046):map__54046);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54046__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54046__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54046__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__54047 = cljs.core.last(via);
var map__54047__$1 = (((((!((map__54047 == null))))?(((((map__54047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54047):map__54047);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54047__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54047__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54047__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__54048 = data;
var map__54048__$1 = (((((!((map__54048 == null))))?(((((map__54048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54048):map__54048);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54048__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54048__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54048__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__54049 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__54049__$1 = (((((!((map__54049 == null))))?(((((map__54049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54049):map__54049);
var top_data = map__54049__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54049__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__54054 = phase;
var G__54054__$1 = (((G__54054 instanceof cljs.core.Keyword))?G__54054.fqn:null);
switch (G__54054__$1) {
case "read-source":
var map__54055 = data;
var map__54055__$1 = (((((!((map__54055 == null))))?(((((map__54055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54055):map__54055);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54055__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54055__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__54057 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__54057__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54057,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54057);
var G__54057__$2 = (cljs.core.truth_((function (){var fexpr__54059 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54059.cljs$core$IFn$_invoke$arity$1 ? fexpr__54059.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54059.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54057__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54057__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54057__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54057__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__54060 = top_data;
var G__54060__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54060,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54060);
var G__54060__$2 = (cljs.core.truth_((function (){var fexpr__54061 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54061.cljs$core$IFn$_invoke$arity$1 ? fexpr__54061.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54061.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54060__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54060__$1);
var G__54060__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54060__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54060__$2);
var G__54060__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54060__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54060__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54060__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54060__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__54063 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54063,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54063,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54063,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54063,(3),null);
var G__54066 = top_data;
var G__54066__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54066,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__54066);
var G__54066__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54066__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__54066__$1);
var G__54066__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54066__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__54066__$2);
var G__54066__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54066__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54066__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54066__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54066__$4;
}

break;
case "execution":
var vec__54067 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54067,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54067,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54067,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54067,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54045_SHARP_){
var or__4126__auto__ = (p1__54045_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__54071 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54071.cljs$core$IFn$_invoke$arity$1 ? fexpr__54071.cljs$core$IFn$_invoke$arity$1(p1__54045_SHARP_) : fexpr__54071.call(null,p1__54045_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__54072 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__54072__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54072,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__54072);
var G__54072__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54072__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54072__$1);
var G__54072__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54072__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__54072__$2);
var G__54072__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54072__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__54072__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54072__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54072__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54054__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__54075){
var map__54076 = p__54075;
var map__54076__$1 = (((((!((map__54076 == null))))?(((((map__54076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54076):map__54076);
var triage_data = map__54076__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54076__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54076__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54076__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54076__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54076__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54076__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54076__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54076__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__54099 = phase;
var G__54099__$1 = (((G__54099 instanceof cljs.core.Keyword))?G__54099.fqn:null);
switch (G__54099__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__54103 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__54104 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54105 = loc;
var G__54106 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54107_54288 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54108_54289 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54109_54290 = true;
var _STAR_print_fn_STAR__temp_val__54110_54291 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54109_54290);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54110_54291);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54073_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54073_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54108_54289);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54107_54288);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54103,G__54104,G__54105,G__54106) : format.call(null,G__54103,G__54104,G__54105,G__54106));

break;
case "macroexpansion":
var G__54125 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__54126 = cause_type;
var G__54127 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54128 = loc;
var G__54129 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54125,G__54126,G__54127,G__54128,G__54129) : format.call(null,G__54125,G__54126,G__54127,G__54128,G__54129));

break;
case "compile-syntax-check":
var G__54135 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__54139 = cause_type;
var G__54140 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54141 = loc;
var G__54142 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54135,G__54139,G__54140,G__54141,G__54142) : format.call(null,G__54135,G__54139,G__54140,G__54141,G__54142));

break;
case "compilation":
var G__54144 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__54145 = cause_type;
var G__54146 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54147 = loc;
var G__54148 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54144,G__54145,G__54146,G__54147,G__54148) : format.call(null,G__54144,G__54145,G__54146,G__54147,G__54148));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__54151 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__54152 = symbol;
var G__54153 = loc;
var G__54154 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54168_54292 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54169_54293 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54170_54294 = true;
var _STAR_print_fn_STAR__temp_val__54171_54295 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54170_54294);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54171_54295);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54074_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54074_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54169_54293);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54168_54292);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54151,G__54152,G__54153,G__54154) : format.call(null,G__54151,G__54152,G__54153,G__54154));
} else {
var G__54172 = "Execution error%s at %s(%s).\n%s\n";
var G__54173 = cause_type;
var G__54174 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54175 = loc;
var G__54176 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54172,G__54173,G__54174,G__54175,G__54176) : format.call(null,G__54172,G__54173,G__54174,G__54175,G__54176));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54099__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
