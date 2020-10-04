goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__47035 = arguments.length;
switch (G__47035) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47036 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47036 = (function (f,blockable,meta47037){
this.f = f;
this.blockable = blockable;
this.meta47037 = meta47037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47038,meta47037__$1){
var self__ = this;
var _47038__$1 = this;
return (new cljs.core.async.t_cljs$core$async47036(self__.f,self__.blockable,meta47037__$1));
}));

(cljs.core.async.t_cljs$core$async47036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47038){
var self__ = this;
var _47038__$1 = this;
return self__.meta47037;
}));

(cljs.core.async.t_cljs$core$async47036.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47036.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47036.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async47036.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async47036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47037","meta47037",2060187002,null)], null);
}));

(cljs.core.async.t_cljs$core$async47036.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47036");

(cljs.core.async.t_cljs$core$async47036.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47036");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47036.
 */
cljs.core.async.__GT_t_cljs$core$async47036 = (function cljs$core$async$__GT_t_cljs$core$async47036(f__$1,blockable__$1,meta47037){
return (new cljs.core.async.t_cljs$core$async47036(f__$1,blockable__$1,meta47037));
});

}

return (new cljs.core.async.t_cljs$core$async47036(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__47041 = arguments.length;
switch (G__47041) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__47043 = arguments.length;
switch (G__47043) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__47045 = arguments.length;
switch (G__47045) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_48761 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48761) : fn1.call(null,val_48761));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48761) : fn1.call(null,val_48761));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__47047 = arguments.length;
switch (G__47047) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___48763 = n;
var x_48764 = (0);
while(true){
if((x_48764 < n__4613__auto___48763)){
(a[x_48764] = x_48764);

var G__48765 = (x_48764 + (1));
x_48764 = G__48765;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47048 = (function (flag,meta47049){
this.flag = flag;
this.meta47049 = meta47049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47050,meta47049__$1){
var self__ = this;
var _47050__$1 = this;
return (new cljs.core.async.t_cljs$core$async47048(self__.flag,meta47049__$1));
}));

(cljs.core.async.t_cljs$core$async47048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47050){
var self__ = this;
var _47050__$1 = this;
return self__.meta47049;
}));

(cljs.core.async.t_cljs$core$async47048.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47048.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47048.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47048.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async47048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47049","meta47049",-285694114,null)], null);
}));

(cljs.core.async.t_cljs$core$async47048.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47048");

(cljs.core.async.t_cljs$core$async47048.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47048");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47048.
 */
cljs.core.async.__GT_t_cljs$core$async47048 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47048(flag__$1,meta47049){
return (new cljs.core.async.t_cljs$core$async47048(flag__$1,meta47049));
});

}

return (new cljs.core.async.t_cljs$core$async47048(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47051 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47051 = (function (flag,cb,meta47052){
this.flag = flag;
this.cb = cb;
this.meta47052 = meta47052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47053,meta47052__$1){
var self__ = this;
var _47053__$1 = this;
return (new cljs.core.async.t_cljs$core$async47051(self__.flag,self__.cb,meta47052__$1));
}));

(cljs.core.async.t_cljs$core$async47051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47053){
var self__ = this;
var _47053__$1 = this;
return self__.meta47052;
}));

(cljs.core.async.t_cljs$core$async47051.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47051.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47051.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47051.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async47051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47052","meta47052",-1344517013,null)], null);
}));

(cljs.core.async.t_cljs$core$async47051.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47051");

(cljs.core.async.t_cljs$core$async47051.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47051");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47051.
 */
cljs.core.async.__GT_t_cljs$core$async47051 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47051(flag__$1,cb__$1,meta47052){
return (new cljs.core.async.t_cljs$core$async47051(flag__$1,cb__$1,meta47052));
});

}

return (new cljs.core.async.t_cljs$core$async47051(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47054_SHARP_){
var G__47056 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47054_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47056) : fret.call(null,G__47056));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47055_SHARP_){
var G__47058 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47055_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47058) : fret.call(null,G__47058));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48768 = (i + (1));
i = G__48768;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48769 = arguments.length;
var i__4737__auto___48770 = (0);
while(true){
if((i__4737__auto___48770 < len__4736__auto___48769)){
args__4742__auto__.push((arguments[i__4737__auto___48770]));

var G__48771 = (i__4737__auto___48770 + (1));
i__4737__auto___48770 = G__48771;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47062){
var map__47063 = p__47062;
var map__47063__$1 = (((((!((map__47063 == null))))?(((((map__47063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47063):map__47063);
var opts = map__47063__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47060){
var G__47061 = cljs.core.first(seq47060);
var seq47060__$1 = cljs.core.next(seq47060);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47061,seq47060__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__47067 = arguments.length;
switch (G__47067) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46974__auto___48774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46975__auto__ = (function (){var switch__46941__auto__ = (function (state_47100){
var state_val_47101 = (state_47100[(1)]);
if((state_val_47101 === (7))){
var inst_47093 = (state_47100[(2)]);
var state_47100__$1 = state_47100;
var statearr_47107_48777 = state_47100__$1;
(statearr_47107_48777[(2)] = inst_47093);

(statearr_47107_48777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47101 === (1))){
var state_47100__$1 = state_47100;
var statearr_47108_48778 = state_47100__$1;
(statearr_47108_48778[(2)] = null);

(statearr_47108_48778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47101 === (4))){
var inst_47076 = (state_47100[(7)]);
var inst_47076__$1 = (state_47100[(2)]);
var inst_47077 = (inst_47076__$1 == null);
var state_47100__$1 = (function (){var statearr_47109 = state_47100;
(statearr_47109[(7)] = inst_47076__$1);

return statearr_47109;
})();
if(cljs.core.truth_(inst_47077)){
var statearr_47110_48779 = state_47100__$1;
(statearr_47110_48779[(1)] = (5));

} else {
var statearr_47114_48780 = state_47100__$1;
(statearr_47114_48780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47101 === (13))){
var state_47100__$1 = state_47100;
var statearr_47115_48781 = state_47100__$1;
(statearr_47115_48781[(2)] = null);

(statearr_47115_48781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47101 === (6))){
var inst_47076 = (state_47100[(7)]);
var state_47100__$1 = state_47100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47100__$1,(11),to,inst_47076);
} else {
if((state_val_47101 === (3))){
var inst_47095 = (state_47100[(2)]);
var state_47100__$1 = state_47100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47100__$1,inst_47095);
} else {
if((state_val_47101 === (12))){
var state_47100__$1 = state_47100;
var statearr_47117_48784 = state_47100__$1;
(statearr_47117_48784[(2)] = null);

(statearr_47117_48784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47101 === (2))){
var state_47100__$1 = state_47100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47100__$1,(4),from);
} else {
if((state_val_47101 === (11))){
var inst_47086 = (state_47100[(2)]);
var state_47100__$1 = state_47100;
if(cljs.core.truth_(inst_47086)){
var statearr_47118_48785 = state_47100__$1;
(statearr_47118_48785[(1)] = (12));

} else {
var statearr_47119_48786 = state_47100__$1;
(statearr_47119_48786[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47101 === (9))){
var state_47100__$1 = state_47100;
var statearr_47120_48787 = state_47100__$1;
(statearr_47120_48787[(2)] = null);

(statearr_47120_48787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47101 === (5))){
var state_47100__$1 = state_47100;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47121_48788 = state_47100__$1;
(statearr_47121_48788[(1)] = (8));

} else {
var statearr_47122_48789 = state_47100__$1;
(statearr_47122_48789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47101 === (14))){
var inst_47091 = (state_47100[(2)]);
var state_47100__$1 = state_47100;
var statearr_47123_48791 = state_47100__$1;
(statearr_47123_48791[(2)] = inst_47091);

(statearr_47123_48791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47101 === (10))){
var inst_47083 = (state_47100[(2)]);
var state_47100__$1 = state_47100;
var statearr_47125_48793 = state_47100__$1;
(statearr_47125_48793[(2)] = inst_47083);

(statearr_47125_48793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47101 === (8))){
var inst_47080 = cljs.core.async.close_BANG_(to);
var state_47100__$1 = state_47100;
var statearr_47126_48794 = state_47100__$1;
(statearr_47126_48794[(2)] = inst_47080);

(statearr_47126_48794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46942__auto__ = null;
var cljs$core$async$state_machine__46942__auto____0 = (function (){
var statearr_47127 = [null,null,null,null,null,null,null,null];
(statearr_47127[(0)] = cljs$core$async$state_machine__46942__auto__);

(statearr_47127[(1)] = (1));

return statearr_47127;
});
var cljs$core$async$state_machine__46942__auto____1 = (function (state_47100){
while(true){
var ret_value__46943__auto__ = (function (){try{while(true){
var result__46944__auto__ = switch__46941__auto__(state_47100);
if(cljs.core.keyword_identical_QMARK_(result__46944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46944__auto__;
}
break;
}
}catch (e47128){var ex__46945__auto__ = e47128;
var statearr_47129_48795 = state_47100;
(statearr_47129_48795[(2)] = ex__46945__auto__);


if(cljs.core.seq((state_47100[(4)]))){
var statearr_47130_48796 = state_47100;
(statearr_47130_48796[(1)] = cljs.core.first((state_47100[(4)])));

} else {
throw ex__46945__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48797 = state_47100;
state_47100 = G__48797;
continue;
} else {
return ret_value__46943__auto__;
}
break;
}
});
cljs$core$async$state_machine__46942__auto__ = function(state_47100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46942__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46942__auto____1.call(this,state_47100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46942__auto____0;
cljs$core$async$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46942__auto____1;
return cljs$core$async$state_machine__46942__auto__;
})()
})();
var state__46976__auto__ = (function (){var statearr_47132 = f__46975__auto__();
(statearr_47132[(6)] = c__46974__auto___48774);

return statearr_47132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46976__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__47133){
var vec__47134 = p__47133;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47134,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47134,(1),null);
var job = vec__47134;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46974__auto___48800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46975__auto__ = (function (){var switch__46941__auto__ = (function (state_47144){
var state_val_47145 = (state_47144[(1)]);
if((state_val_47145 === (1))){
var state_47144__$1 = state_47144;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47144__$1,(2),res,v);
} else {
if((state_val_47145 === (2))){
var inst_47141 = (state_47144[(2)]);
var inst_47142 = cljs.core.async.close_BANG_(res);
var state_47144__$1 = (function (){var statearr_47147 = state_47144;
(statearr_47147[(7)] = inst_47141);

return statearr_47147;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47144__$1,inst_47142);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____0 = (function (){
var statearr_47148 = [null,null,null,null,null,null,null,null];
(statearr_47148[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__);

(statearr_47148[(1)] = (1));

return statearr_47148;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____1 = (function (state_47144){
while(true){
var ret_value__46943__auto__ = (function (){try{while(true){
var result__46944__auto__ = switch__46941__auto__(state_47144);
if(cljs.core.keyword_identical_QMARK_(result__46944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46944__auto__;
}
break;
}
}catch (e47149){var ex__46945__auto__ = e47149;
var statearr_47150_48801 = state_47144;
(statearr_47150_48801[(2)] = ex__46945__auto__);


if(cljs.core.seq((state_47144[(4)]))){
var statearr_47151_48802 = state_47144;
(statearr_47151_48802[(1)] = cljs.core.first((state_47144[(4)])));

} else {
throw ex__46945__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48803 = state_47144;
state_47144 = G__48803;
continue;
} else {
return ret_value__46943__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__ = function(state_47144){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____1.call(this,state_47144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__;
})()
})();
var state__46976__auto__ = (function (){var statearr_47152 = f__46975__auto__();
(statearr_47152[(6)] = c__46974__auto___48800);

return statearr_47152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46976__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__47153){
var vec__47154 = p__47153;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47154,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47154,(1),null);
var job = vec__47154;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___48805 = n;
var __48807 = (0);
while(true){
if((__48807 < n__4613__auto___48805)){
var G__47157_48808 = type;
var G__47157_48809__$1 = (((G__47157_48808 instanceof cljs.core.Keyword))?G__47157_48808.fqn:null);
switch (G__47157_48809__$1) {
case "compute":
var c__46974__auto___48811 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48807,c__46974__auto___48811,G__47157_48808,G__47157_48809__$1,n__4613__auto___48805,jobs,results,process,async){
return (function (){
var f__46975__auto__ = (function (){var switch__46941__auto__ = ((function (__48807,c__46974__auto___48811,G__47157_48808,G__47157_48809__$1,n__4613__auto___48805,jobs,results,process,async){
return (function (state_47170){
var state_val_47171 = (state_47170[(1)]);
if((state_val_47171 === (1))){
var state_47170__$1 = state_47170;
var statearr_47173_48812 = state_47170__$1;
(statearr_47173_48812[(2)] = null);

(statearr_47173_48812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (2))){
var state_47170__$1 = state_47170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47170__$1,(4),jobs);
} else {
if((state_val_47171 === (3))){
var inst_47168 = (state_47170[(2)]);
var state_47170__$1 = state_47170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47170__$1,inst_47168);
} else {
if((state_val_47171 === (4))){
var inst_47160 = (state_47170[(2)]);
var inst_47161 = process(inst_47160);
var state_47170__$1 = state_47170;
if(cljs.core.truth_(inst_47161)){
var statearr_47174_48813 = state_47170__$1;
(statearr_47174_48813[(1)] = (5));

} else {
var statearr_47175_48814 = state_47170__$1;
(statearr_47175_48814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (5))){
var state_47170__$1 = state_47170;
var statearr_47176_48815 = state_47170__$1;
(statearr_47176_48815[(2)] = null);

(statearr_47176_48815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (6))){
var state_47170__$1 = state_47170;
var statearr_47178_48816 = state_47170__$1;
(statearr_47178_48816[(2)] = null);

(statearr_47178_48816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (7))){
var inst_47166 = (state_47170[(2)]);
var state_47170__$1 = state_47170;
var statearr_47179_48818 = state_47170__$1;
(statearr_47179_48818[(2)] = inst_47166);

(statearr_47179_48818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48807,c__46974__auto___48811,G__47157_48808,G__47157_48809__$1,n__4613__auto___48805,jobs,results,process,async))
;
return ((function (__48807,switch__46941__auto__,c__46974__auto___48811,G__47157_48808,G__47157_48809__$1,n__4613__auto___48805,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____0 = (function (){
var statearr_47181 = [null,null,null,null,null,null,null];
(statearr_47181[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__);

(statearr_47181[(1)] = (1));

return statearr_47181;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____1 = (function (state_47170){
while(true){
var ret_value__46943__auto__ = (function (){try{while(true){
var result__46944__auto__ = switch__46941__auto__(state_47170);
if(cljs.core.keyword_identical_QMARK_(result__46944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46944__auto__;
}
break;
}
}catch (e47182){var ex__46945__auto__ = e47182;
var statearr_47183_48820 = state_47170;
(statearr_47183_48820[(2)] = ex__46945__auto__);


if(cljs.core.seq((state_47170[(4)]))){
var statearr_47184_48821 = state_47170;
(statearr_47184_48821[(1)] = cljs.core.first((state_47170[(4)])));

} else {
throw ex__46945__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48822 = state_47170;
state_47170 = G__48822;
continue;
} else {
return ret_value__46943__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__ = function(state_47170){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____1.call(this,state_47170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__;
})()
;})(__48807,switch__46941__auto__,c__46974__auto___48811,G__47157_48808,G__47157_48809__$1,n__4613__auto___48805,jobs,results,process,async))
})();
var state__46976__auto__ = (function (){var statearr_47185 = f__46975__auto__();
(statearr_47185[(6)] = c__46974__auto___48811);

return statearr_47185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46976__auto__);
});})(__48807,c__46974__auto___48811,G__47157_48808,G__47157_48809__$1,n__4613__auto___48805,jobs,results,process,async))
);


break;
case "async":
var c__46974__auto___48823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48807,c__46974__auto___48823,G__47157_48808,G__47157_48809__$1,n__4613__auto___48805,jobs,results,process,async){
return (function (){
var f__46975__auto__ = (function (){var switch__46941__auto__ = ((function (__48807,c__46974__auto___48823,G__47157_48808,G__47157_48809__$1,n__4613__auto___48805,jobs,results,process,async){
return (function (state_47198){
var state_val_47199 = (state_47198[(1)]);
if((state_val_47199 === (1))){
var state_47198__$1 = state_47198;
var statearr_47201_48825 = state_47198__$1;
(statearr_47201_48825[(2)] = null);

(statearr_47201_48825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47199 === (2))){
var state_47198__$1 = state_47198;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47198__$1,(4),jobs);
} else {
if((state_val_47199 === (3))){
var inst_47196 = (state_47198[(2)]);
var state_47198__$1 = state_47198;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47198__$1,inst_47196);
} else {
if((state_val_47199 === (4))){
var inst_47188 = (state_47198[(2)]);
var inst_47189 = async(inst_47188);
var state_47198__$1 = state_47198;
if(cljs.core.truth_(inst_47189)){
var statearr_47203_48826 = state_47198__$1;
(statearr_47203_48826[(1)] = (5));

} else {
var statearr_47204_48827 = state_47198__$1;
(statearr_47204_48827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47199 === (5))){
var state_47198__$1 = state_47198;
var statearr_47205_48832 = state_47198__$1;
(statearr_47205_48832[(2)] = null);

(statearr_47205_48832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47199 === (6))){
var state_47198__$1 = state_47198;
var statearr_47207_48833 = state_47198__$1;
(statearr_47207_48833[(2)] = null);

(statearr_47207_48833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47199 === (7))){
var inst_47194 = (state_47198[(2)]);
var state_47198__$1 = state_47198;
var statearr_47208_48834 = state_47198__$1;
(statearr_47208_48834[(2)] = inst_47194);

(statearr_47208_48834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48807,c__46974__auto___48823,G__47157_48808,G__47157_48809__$1,n__4613__auto___48805,jobs,results,process,async))
;
return ((function (__48807,switch__46941__auto__,c__46974__auto___48823,G__47157_48808,G__47157_48809__$1,n__4613__auto___48805,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____0 = (function (){
var statearr_47209 = [null,null,null,null,null,null,null];
(statearr_47209[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__);

(statearr_47209[(1)] = (1));

return statearr_47209;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____1 = (function (state_47198){
while(true){
var ret_value__46943__auto__ = (function (){try{while(true){
var result__46944__auto__ = switch__46941__auto__(state_47198);
if(cljs.core.keyword_identical_QMARK_(result__46944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46944__auto__;
}
break;
}
}catch (e47210){var ex__46945__auto__ = e47210;
var statearr_47211_48835 = state_47198;
(statearr_47211_48835[(2)] = ex__46945__auto__);


if(cljs.core.seq((state_47198[(4)]))){
var statearr_47212_48836 = state_47198;
(statearr_47212_48836[(1)] = cljs.core.first((state_47198[(4)])));

} else {
throw ex__46945__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48837 = state_47198;
state_47198 = G__48837;
continue;
} else {
return ret_value__46943__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__ = function(state_47198){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____1.call(this,state_47198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__;
})()
;})(__48807,switch__46941__auto__,c__46974__auto___48823,G__47157_48808,G__47157_48809__$1,n__4613__auto___48805,jobs,results,process,async))
})();
var state__46976__auto__ = (function (){var statearr_47213 = f__46975__auto__();
(statearr_47213[(6)] = c__46974__auto___48823);

return statearr_47213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46976__auto__);
});})(__48807,c__46974__auto___48823,G__47157_48808,G__47157_48809__$1,n__4613__auto___48805,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47157_48809__$1)].join('')));

}

var G__48838 = (__48807 + (1));
__48807 = G__48838;
continue;
} else {
}
break;
}

var c__46974__auto___48839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46975__auto__ = (function (){var switch__46941__auto__ = (function (state_47237){
var state_val_47238 = (state_47237[(1)]);
if((state_val_47238 === (7))){
var inst_47233 = (state_47237[(2)]);
var state_47237__$1 = state_47237;
var statearr_47243_48840 = state_47237__$1;
(statearr_47243_48840[(2)] = inst_47233);

(statearr_47243_48840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (1))){
var state_47237__$1 = state_47237;
var statearr_47244_48841 = state_47237__$1;
(statearr_47244_48841[(2)] = null);

(statearr_47244_48841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (4))){
var inst_47216 = (state_47237[(7)]);
var inst_47216__$1 = (state_47237[(2)]);
var inst_47218 = (inst_47216__$1 == null);
var state_47237__$1 = (function (){var statearr_47245 = state_47237;
(statearr_47245[(7)] = inst_47216__$1);

return statearr_47245;
})();
if(cljs.core.truth_(inst_47218)){
var statearr_47246_48842 = state_47237__$1;
(statearr_47246_48842[(1)] = (5));

} else {
var statearr_47247_48843 = state_47237__$1;
(statearr_47247_48843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (6))){
var inst_47222 = (state_47237[(8)]);
var inst_47216 = (state_47237[(7)]);
var inst_47222__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47224 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47225 = [inst_47216,inst_47222__$1];
var inst_47226 = (new cljs.core.PersistentVector(null,2,(5),inst_47224,inst_47225,null));
var state_47237__$1 = (function (){var statearr_47248 = state_47237;
(statearr_47248[(8)] = inst_47222__$1);

return statearr_47248;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47237__$1,(8),jobs,inst_47226);
} else {
if((state_val_47238 === (3))){
var inst_47235 = (state_47237[(2)]);
var state_47237__$1 = state_47237;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47237__$1,inst_47235);
} else {
if((state_val_47238 === (2))){
var state_47237__$1 = state_47237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47237__$1,(4),from);
} else {
if((state_val_47238 === (9))){
var inst_47230 = (state_47237[(2)]);
var state_47237__$1 = (function (){var statearr_47251 = state_47237;
(statearr_47251[(9)] = inst_47230);

return statearr_47251;
})();
var statearr_47252_48844 = state_47237__$1;
(statearr_47252_48844[(2)] = null);

(statearr_47252_48844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (5))){
var inst_47220 = cljs.core.async.close_BANG_(jobs);
var state_47237__$1 = state_47237;
var statearr_47253_48845 = state_47237__$1;
(statearr_47253_48845[(2)] = inst_47220);

(statearr_47253_48845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47238 === (8))){
var inst_47222 = (state_47237[(8)]);
var inst_47228 = (state_47237[(2)]);
var state_47237__$1 = (function (){var statearr_47254 = state_47237;
(statearr_47254[(10)] = inst_47228);

return statearr_47254;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47237__$1,(9),results,inst_47222);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____0 = (function (){
var statearr_47255 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47255[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__);

(statearr_47255[(1)] = (1));

return statearr_47255;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____1 = (function (state_47237){
while(true){
var ret_value__46943__auto__ = (function (){try{while(true){
var result__46944__auto__ = switch__46941__auto__(state_47237);
if(cljs.core.keyword_identical_QMARK_(result__46944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46944__auto__;
}
break;
}
}catch (e47256){var ex__46945__auto__ = e47256;
var statearr_47257_48848 = state_47237;
(statearr_47257_48848[(2)] = ex__46945__auto__);


if(cljs.core.seq((state_47237[(4)]))){
var statearr_47258_48849 = state_47237;
(statearr_47258_48849[(1)] = cljs.core.first((state_47237[(4)])));

} else {
throw ex__46945__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48850 = state_47237;
state_47237 = G__48850;
continue;
} else {
return ret_value__46943__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__ = function(state_47237){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____1.call(this,state_47237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__;
})()
})();
var state__46976__auto__ = (function (){var statearr_47259 = f__46975__auto__();
(statearr_47259[(6)] = c__46974__auto___48839);

return statearr_47259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46976__auto__);
}));


var c__46974__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46975__auto__ = (function (){var switch__46941__auto__ = (function (state_47300){
var state_val_47301 = (state_47300[(1)]);
if((state_val_47301 === (7))){
var inst_47296 = (state_47300[(2)]);
var state_47300__$1 = state_47300;
var statearr_47303_48858 = state_47300__$1;
(statearr_47303_48858[(2)] = inst_47296);

(statearr_47303_48858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47301 === (20))){
var state_47300__$1 = state_47300;
var statearr_47304_48862 = state_47300__$1;
(statearr_47304_48862[(2)] = null);

(statearr_47304_48862[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47301 === (1))){
var state_47300__$1 = state_47300;
var statearr_47305_48863 = state_47300__$1;
(statearr_47305_48863[(2)] = null);

(statearr_47305_48863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47301 === (4))){
var inst_47263 = (state_47300[(7)]);
var inst_47263__$1 = (state_47300[(2)]);
var inst_47264 = (inst_47263__$1 == null);
var state_47300__$1 = (function (){var statearr_47306 = state_47300;
(statearr_47306[(7)] = inst_47263__$1);

return statearr_47306;
})();
if(cljs.core.truth_(inst_47264)){
var statearr_47307_48867 = state_47300__$1;
(statearr_47307_48867[(1)] = (5));

} else {
var statearr_47308_48868 = state_47300__$1;
(statearr_47308_48868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47301 === (15))){
var inst_47276 = (state_47300[(8)]);
var state_47300__$1 = state_47300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47300__$1,(18),to,inst_47276);
} else {
if((state_val_47301 === (21))){
var inst_47291 = (state_47300[(2)]);
var state_47300__$1 = state_47300;
var statearr_47311_48869 = state_47300__$1;
(statearr_47311_48869[(2)] = inst_47291);

(statearr_47311_48869[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47301 === (13))){
var inst_47293 = (state_47300[(2)]);
var state_47300__$1 = (function (){var statearr_47316 = state_47300;
(statearr_47316[(9)] = inst_47293);

return statearr_47316;
})();
var statearr_47318_48873 = state_47300__$1;
(statearr_47318_48873[(2)] = null);

(statearr_47318_48873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47301 === (6))){
var inst_47263 = (state_47300[(7)]);
var state_47300__$1 = state_47300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47300__$1,(11),inst_47263);
} else {
if((state_val_47301 === (17))){
var inst_47286 = (state_47300[(2)]);
var state_47300__$1 = state_47300;
if(cljs.core.truth_(inst_47286)){
var statearr_47320_48878 = state_47300__$1;
(statearr_47320_48878[(1)] = (19));

} else {
var statearr_47321_48879 = state_47300__$1;
(statearr_47321_48879[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47301 === (3))){
var inst_47298 = (state_47300[(2)]);
var state_47300__$1 = state_47300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47300__$1,inst_47298);
} else {
if((state_val_47301 === (12))){
var inst_47273 = (state_47300[(10)]);
var state_47300__$1 = state_47300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47300__$1,(14),inst_47273);
} else {
if((state_val_47301 === (2))){
var state_47300__$1 = state_47300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47300__$1,(4),results);
} else {
if((state_val_47301 === (19))){
var state_47300__$1 = state_47300;
var statearr_47328_48883 = state_47300__$1;
(statearr_47328_48883[(2)] = null);

(statearr_47328_48883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47301 === (11))){
var inst_47273 = (state_47300[(2)]);
var state_47300__$1 = (function (){var statearr_47329 = state_47300;
(statearr_47329[(10)] = inst_47273);

return statearr_47329;
})();
var statearr_47330_48884 = state_47300__$1;
(statearr_47330_48884[(2)] = null);

(statearr_47330_48884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47301 === (9))){
var state_47300__$1 = state_47300;
var statearr_47332_48888 = state_47300__$1;
(statearr_47332_48888[(2)] = null);

(statearr_47332_48888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47301 === (5))){
var state_47300__$1 = state_47300;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47342_48889 = state_47300__$1;
(statearr_47342_48889[(1)] = (8));

} else {
var statearr_47343_48890 = state_47300__$1;
(statearr_47343_48890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47301 === (14))){
var inst_47276 = (state_47300[(8)]);
var inst_47276__$1 = (state_47300[(2)]);
var inst_47277 = (inst_47276__$1 == null);
var inst_47278 = cljs.core.not(inst_47277);
var state_47300__$1 = (function (){var statearr_47347 = state_47300;
(statearr_47347[(8)] = inst_47276__$1);

return statearr_47347;
})();
if(inst_47278){
var statearr_47348_48894 = state_47300__$1;
(statearr_47348_48894[(1)] = (15));

} else {
var statearr_47349_48895 = state_47300__$1;
(statearr_47349_48895[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47301 === (16))){
var state_47300__$1 = state_47300;
var statearr_47351_48896 = state_47300__$1;
(statearr_47351_48896[(2)] = false);

(statearr_47351_48896[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47301 === (10))){
var inst_47270 = (state_47300[(2)]);
var state_47300__$1 = state_47300;
var statearr_47352_48900 = state_47300__$1;
(statearr_47352_48900[(2)] = inst_47270);

(statearr_47352_48900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47301 === (18))){
var inst_47283 = (state_47300[(2)]);
var state_47300__$1 = state_47300;
var statearr_47353_48901 = state_47300__$1;
(statearr_47353_48901[(2)] = inst_47283);

(statearr_47353_48901[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47301 === (8))){
var inst_47267 = cljs.core.async.close_BANG_(to);
var state_47300__$1 = state_47300;
var statearr_47354_48902 = state_47300__$1;
(statearr_47354_48902[(2)] = inst_47267);

(statearr_47354_48902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____0 = (function (){
var statearr_47355 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47355[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__);

(statearr_47355[(1)] = (1));

return statearr_47355;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____1 = (function (state_47300){
while(true){
var ret_value__46943__auto__ = (function (){try{while(true){
var result__46944__auto__ = switch__46941__auto__(state_47300);
if(cljs.core.keyword_identical_QMARK_(result__46944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46944__auto__;
}
break;
}
}catch (e47356){var ex__46945__auto__ = e47356;
var statearr_47357_48904 = state_47300;
(statearr_47357_48904[(2)] = ex__46945__auto__);


if(cljs.core.seq((state_47300[(4)]))){
var statearr_47358_48905 = state_47300;
(statearr_47358_48905[(1)] = cljs.core.first((state_47300[(4)])));

} else {
throw ex__46945__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48906 = state_47300;
state_47300 = G__48906;
continue;
} else {
return ret_value__46943__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__ = function(state_47300){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____1.call(this,state_47300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46942__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46942__auto__;
})()
})();
var state__46976__auto__ = (function (){var statearr_47367 = f__46975__auto__();
(statearr_47367[(6)] = c__46974__auto__);

return statearr_47367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46976__auto__);
}));

return c__46974__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__47372 = arguments.length;
switch (G__47372) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__47374 = arguments.length;
switch (G__47374) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__47379 = arguments.length;
switch (G__47379) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__46974__auto___48918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46975__auto__ = (function (){var switch__46941__auto__ = (function (state_47409){
var state_val_47410 = (state_47409[(1)]);
if((state_val_47410 === (7))){
var inst_47405 = (state_47409[(2)]);
var state_47409__$1 = state_47409;
var statearr_47411_48920 = state_47409__$1;
(statearr_47411_48920[(2)] = inst_47405);

(statearr_47411_48920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (1))){
var state_47409__$1 = state_47409;
var statearr_47412_48921 = state_47409__$1;
(statearr_47412_48921[(2)] = null);

(statearr_47412_48921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (4))){
var inst_47386 = (state_47409[(7)]);
var inst_47386__$1 = (state_47409[(2)]);
var inst_47387 = (inst_47386__$1 == null);
var state_47409__$1 = (function (){var statearr_47413 = state_47409;
(statearr_47413[(7)] = inst_47386__$1);

return statearr_47413;
})();
if(cljs.core.truth_(inst_47387)){
var statearr_47414_48922 = state_47409__$1;
(statearr_47414_48922[(1)] = (5));

} else {
var statearr_47415_48923 = state_47409__$1;
(statearr_47415_48923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (13))){
var state_47409__$1 = state_47409;
var statearr_47417_48924 = state_47409__$1;
(statearr_47417_48924[(2)] = null);

(statearr_47417_48924[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (6))){
var inst_47386 = (state_47409[(7)]);
var inst_47392 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47386) : p.call(null,inst_47386));
var state_47409__$1 = state_47409;
if(cljs.core.truth_(inst_47392)){
var statearr_47419_48925 = state_47409__$1;
(statearr_47419_48925[(1)] = (9));

} else {
var statearr_47420_48926 = state_47409__$1;
(statearr_47420_48926[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (3))){
var inst_47407 = (state_47409[(2)]);
var state_47409__$1 = state_47409;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47409__$1,inst_47407);
} else {
if((state_val_47410 === (12))){
var state_47409__$1 = state_47409;
var statearr_47430_48927 = state_47409__$1;
(statearr_47430_48927[(2)] = null);

(statearr_47430_48927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (2))){
var state_47409__$1 = state_47409;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47409__$1,(4),ch);
} else {
if((state_val_47410 === (11))){
var inst_47386 = (state_47409[(7)]);
var inst_47396 = (state_47409[(2)]);
var state_47409__$1 = state_47409;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47409__$1,(8),inst_47396,inst_47386);
} else {
if((state_val_47410 === (9))){
var state_47409__$1 = state_47409;
var statearr_47434_48932 = state_47409__$1;
(statearr_47434_48932[(2)] = tc);

(statearr_47434_48932[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (5))){
var inst_47389 = cljs.core.async.close_BANG_(tc);
var inst_47390 = cljs.core.async.close_BANG_(fc);
var state_47409__$1 = (function (){var statearr_47439 = state_47409;
(statearr_47439[(8)] = inst_47389);

return statearr_47439;
})();
var statearr_47440_48933 = state_47409__$1;
(statearr_47440_48933[(2)] = inst_47390);

(statearr_47440_48933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (14))){
var inst_47403 = (state_47409[(2)]);
var state_47409__$1 = state_47409;
var statearr_47444_48938 = state_47409__$1;
(statearr_47444_48938[(2)] = inst_47403);

(statearr_47444_48938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (10))){
var state_47409__$1 = state_47409;
var statearr_47445_48939 = state_47409__$1;
(statearr_47445_48939[(2)] = fc);

(statearr_47445_48939[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47410 === (8))){
var inst_47398 = (state_47409[(2)]);
var state_47409__$1 = state_47409;
if(cljs.core.truth_(inst_47398)){
var statearr_47446_48943 = state_47409__$1;
(statearr_47446_48943[(1)] = (12));

} else {
var statearr_47447_48944 = state_47409__$1;
(statearr_47447_48944[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46942__auto__ = null;
var cljs$core$async$state_machine__46942__auto____0 = (function (){
var statearr_47448 = [null,null,null,null,null,null,null,null,null];
(statearr_47448[(0)] = cljs$core$async$state_machine__46942__auto__);

(statearr_47448[(1)] = (1));

return statearr_47448;
});
var cljs$core$async$state_machine__46942__auto____1 = (function (state_47409){
while(true){
var ret_value__46943__auto__ = (function (){try{while(true){
var result__46944__auto__ = switch__46941__auto__(state_47409);
if(cljs.core.keyword_identical_QMARK_(result__46944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46944__auto__;
}
break;
}
}catch (e47450){var ex__46945__auto__ = e47450;
var statearr_47451_48955 = state_47409;
(statearr_47451_48955[(2)] = ex__46945__auto__);


if(cljs.core.seq((state_47409[(4)]))){
var statearr_47452_48956 = state_47409;
(statearr_47452_48956[(1)] = cljs.core.first((state_47409[(4)])));

} else {
throw ex__46945__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48957 = state_47409;
state_47409 = G__48957;
continue;
} else {
return ret_value__46943__auto__;
}
break;
}
});
cljs$core$async$state_machine__46942__auto__ = function(state_47409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46942__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46942__auto____1.call(this,state_47409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46942__auto____0;
cljs$core$async$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46942__auto____1;
return cljs$core$async$state_machine__46942__auto__;
})()
})();
var state__46976__auto__ = (function (){var statearr_47453 = f__46975__auto__();
(statearr_47453[(6)] = c__46974__auto___48918);

return statearr_47453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46976__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__46974__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46975__auto__ = (function (){var switch__46941__auto__ = (function (state_47482){
var state_val_47483 = (state_47482[(1)]);
if((state_val_47483 === (7))){
var inst_47478 = (state_47482[(2)]);
var state_47482__$1 = state_47482;
var statearr_47484_48958 = state_47482__$1;
(statearr_47484_48958[(2)] = inst_47478);

(statearr_47484_48958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47483 === (1))){
var inst_47460 = init;
var inst_47461 = inst_47460;
var state_47482__$1 = (function (){var statearr_47485 = state_47482;
(statearr_47485[(7)] = inst_47461);

return statearr_47485;
})();
var statearr_47486_48959 = state_47482__$1;
(statearr_47486_48959[(2)] = null);

(statearr_47486_48959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47483 === (4))){
var inst_47465 = (state_47482[(8)]);
var inst_47465__$1 = (state_47482[(2)]);
var inst_47466 = (inst_47465__$1 == null);
var state_47482__$1 = (function (){var statearr_47487 = state_47482;
(statearr_47487[(8)] = inst_47465__$1);

return statearr_47487;
})();
if(cljs.core.truth_(inst_47466)){
var statearr_47488_48960 = state_47482__$1;
(statearr_47488_48960[(1)] = (5));

} else {
var statearr_47489_48961 = state_47482__$1;
(statearr_47489_48961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47483 === (6))){
var inst_47465 = (state_47482[(8)]);
var inst_47469 = (state_47482[(9)]);
var inst_47461 = (state_47482[(7)]);
var inst_47469__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_47461,inst_47465) : f.call(null,inst_47461,inst_47465));
var inst_47470 = cljs.core.reduced_QMARK_(inst_47469__$1);
var state_47482__$1 = (function (){var statearr_47490 = state_47482;
(statearr_47490[(9)] = inst_47469__$1);

return statearr_47490;
})();
if(inst_47470){
var statearr_47491_48968 = state_47482__$1;
(statearr_47491_48968[(1)] = (8));

} else {
var statearr_47492_48969 = state_47482__$1;
(statearr_47492_48969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47483 === (3))){
var inst_47480 = (state_47482[(2)]);
var state_47482__$1 = state_47482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47482__$1,inst_47480);
} else {
if((state_val_47483 === (2))){
var state_47482__$1 = state_47482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47482__$1,(4),ch);
} else {
if((state_val_47483 === (9))){
var inst_47469 = (state_47482[(9)]);
var inst_47461 = inst_47469;
var state_47482__$1 = (function (){var statearr_47493 = state_47482;
(statearr_47493[(7)] = inst_47461);

return statearr_47493;
})();
var statearr_47494_48970 = state_47482__$1;
(statearr_47494_48970[(2)] = null);

(statearr_47494_48970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47483 === (5))){
var inst_47461 = (state_47482[(7)]);
var state_47482__$1 = state_47482;
var statearr_47495_48971 = state_47482__$1;
(statearr_47495_48971[(2)] = inst_47461);

(statearr_47495_48971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47483 === (10))){
var inst_47476 = (state_47482[(2)]);
var state_47482__$1 = state_47482;
var statearr_47497_48972 = state_47482__$1;
(statearr_47497_48972[(2)] = inst_47476);

(statearr_47497_48972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47483 === (8))){
var inst_47469 = (state_47482[(9)]);
var inst_47472 = cljs.core.deref(inst_47469);
var state_47482__$1 = state_47482;
var statearr_47498_48973 = state_47482__$1;
(statearr_47498_48973[(2)] = inst_47472);

(statearr_47498_48973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__46942__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46942__auto____0 = (function (){
var statearr_47499 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47499[(0)] = cljs$core$async$reduce_$_state_machine__46942__auto__);

(statearr_47499[(1)] = (1));

return statearr_47499;
});
var cljs$core$async$reduce_$_state_machine__46942__auto____1 = (function (state_47482){
while(true){
var ret_value__46943__auto__ = (function (){try{while(true){
var result__46944__auto__ = switch__46941__auto__(state_47482);
if(cljs.core.keyword_identical_QMARK_(result__46944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46944__auto__;
}
break;
}
}catch (e47500){var ex__46945__auto__ = e47500;
var statearr_47501_48974 = state_47482;
(statearr_47501_48974[(2)] = ex__46945__auto__);


if(cljs.core.seq((state_47482[(4)]))){
var statearr_47502_48975 = state_47482;
(statearr_47502_48975[(1)] = cljs.core.first((state_47482[(4)])));

} else {
throw ex__46945__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48982 = state_47482;
state_47482 = G__48982;
continue;
} else {
return ret_value__46943__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46942__auto__ = function(state_47482){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46942__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46942__auto____1.call(this,state_47482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46942__auto____0;
cljs$core$async$reduce_$_state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46942__auto____1;
return cljs$core$async$reduce_$_state_machine__46942__auto__;
})()
})();
var state__46976__auto__ = (function (){var statearr_47503 = f__46975__auto__();
(statearr_47503[(6)] = c__46974__auto__);

return statearr_47503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46976__auto__);
}));

return c__46974__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46974__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46975__auto__ = (function (){var switch__46941__auto__ = (function (state_47509){
var state_val_47510 = (state_47509[(1)]);
if((state_val_47510 === (1))){
var inst_47504 = cljs.core.async.reduce(f__$1,init,ch);
var state_47509__$1 = state_47509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47509__$1,(2),inst_47504);
} else {
if((state_val_47510 === (2))){
var inst_47506 = (state_47509[(2)]);
var inst_47507 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_47506) : f__$1.call(null,inst_47506));
var state_47509__$1 = state_47509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47509__$1,inst_47507);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__46942__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46942__auto____0 = (function (){
var statearr_47528 = [null,null,null,null,null,null,null];
(statearr_47528[(0)] = cljs$core$async$transduce_$_state_machine__46942__auto__);

(statearr_47528[(1)] = (1));

return statearr_47528;
});
var cljs$core$async$transduce_$_state_machine__46942__auto____1 = (function (state_47509){
while(true){
var ret_value__46943__auto__ = (function (){try{while(true){
var result__46944__auto__ = switch__46941__auto__(state_47509);
if(cljs.core.keyword_identical_QMARK_(result__46944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46944__auto__;
}
break;
}
}catch (e47533){var ex__46945__auto__ = e47533;
var statearr_47538_48983 = state_47509;
(statearr_47538_48983[(2)] = ex__46945__auto__);


if(cljs.core.seq((state_47509[(4)]))){
var statearr_47542_48984 = state_47509;
(statearr_47542_48984[(1)] = cljs.core.first((state_47509[(4)])));

} else {
throw ex__46945__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48985 = state_47509;
state_47509 = G__48985;
continue;
} else {
return ret_value__46943__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46942__auto__ = function(state_47509){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46942__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46942__auto____1.call(this,state_47509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46942__auto____0;
cljs$core$async$transduce_$_state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46942__auto____1;
return cljs$core$async$transduce_$_state_machine__46942__auto__;
})()
})();
var state__46976__auto__ = (function (){var statearr_47561 = f__46975__auto__();
(statearr_47561[(6)] = c__46974__auto__);

return statearr_47561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46976__auto__);
}));

return c__46974__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__47564 = arguments.length;
switch (G__47564) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46974__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46975__auto__ = (function (){var switch__46941__auto__ = (function (state_47590){
var state_val_47591 = (state_47590[(1)]);
if((state_val_47591 === (7))){
var inst_47571 = (state_47590[(2)]);
var state_47590__$1 = state_47590;
var statearr_47592_48993 = state_47590__$1;
(statearr_47592_48993[(2)] = inst_47571);

(statearr_47592_48993[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (1))){
var inst_47565 = cljs.core.seq(coll);
var inst_47566 = inst_47565;
var state_47590__$1 = (function (){var statearr_47593 = state_47590;
(statearr_47593[(7)] = inst_47566);

return statearr_47593;
})();
var statearr_47594_48994 = state_47590__$1;
(statearr_47594_48994[(2)] = null);

(statearr_47594_48994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (4))){
var inst_47566 = (state_47590[(7)]);
var inst_47569 = cljs.core.first(inst_47566);
var state_47590__$1 = state_47590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47590__$1,(7),ch,inst_47569);
} else {
if((state_val_47591 === (13))){
var inst_47584 = (state_47590[(2)]);
var state_47590__$1 = state_47590;
var statearr_47595_48995 = state_47590__$1;
(statearr_47595_48995[(2)] = inst_47584);

(statearr_47595_48995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (6))){
var inst_47574 = (state_47590[(2)]);
var state_47590__$1 = state_47590;
if(cljs.core.truth_(inst_47574)){
var statearr_47596_48996 = state_47590__$1;
(statearr_47596_48996[(1)] = (8));

} else {
var statearr_47597_48997 = state_47590__$1;
(statearr_47597_48997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (3))){
var inst_47588 = (state_47590[(2)]);
var state_47590__$1 = state_47590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47590__$1,inst_47588);
} else {
if((state_val_47591 === (12))){
var state_47590__$1 = state_47590;
var statearr_47598_48998 = state_47590__$1;
(statearr_47598_48998[(2)] = null);

(statearr_47598_48998[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (2))){
var inst_47566 = (state_47590[(7)]);
var state_47590__$1 = state_47590;
if(cljs.core.truth_(inst_47566)){
var statearr_47599_48999 = state_47590__$1;
(statearr_47599_48999[(1)] = (4));

} else {
var statearr_47600_49000 = state_47590__$1;
(statearr_47600_49000[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (11))){
var inst_47581 = cljs.core.async.close_BANG_(ch);
var state_47590__$1 = state_47590;
var statearr_47601_49001 = state_47590__$1;
(statearr_47601_49001[(2)] = inst_47581);

(statearr_47601_49001[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (9))){
var state_47590__$1 = state_47590;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47602_49002 = state_47590__$1;
(statearr_47602_49002[(1)] = (11));

} else {
var statearr_47603_49003 = state_47590__$1;
(statearr_47603_49003[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (5))){
var inst_47566 = (state_47590[(7)]);
var state_47590__$1 = state_47590;
var statearr_47604_49004 = state_47590__$1;
(statearr_47604_49004[(2)] = inst_47566);

(statearr_47604_49004[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (10))){
var inst_47586 = (state_47590[(2)]);
var state_47590__$1 = state_47590;
var statearr_47605_49005 = state_47590__$1;
(statearr_47605_49005[(2)] = inst_47586);

(statearr_47605_49005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47591 === (8))){
var inst_47566 = (state_47590[(7)]);
var inst_47577 = cljs.core.next(inst_47566);
var inst_47566__$1 = inst_47577;
var state_47590__$1 = (function (){var statearr_47606 = state_47590;
(statearr_47606[(7)] = inst_47566__$1);

return statearr_47606;
})();
var statearr_47607_49006 = state_47590__$1;
(statearr_47607_49006[(2)] = null);

(statearr_47607_49006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46942__auto__ = null;
var cljs$core$async$state_machine__46942__auto____0 = (function (){
var statearr_47608 = [null,null,null,null,null,null,null,null];
(statearr_47608[(0)] = cljs$core$async$state_machine__46942__auto__);

(statearr_47608[(1)] = (1));

return statearr_47608;
});
var cljs$core$async$state_machine__46942__auto____1 = (function (state_47590){
while(true){
var ret_value__46943__auto__ = (function (){try{while(true){
var result__46944__auto__ = switch__46941__auto__(state_47590);
if(cljs.core.keyword_identical_QMARK_(result__46944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46944__auto__;
}
break;
}
}catch (e47609){var ex__46945__auto__ = e47609;
var statearr_47610_49008 = state_47590;
(statearr_47610_49008[(2)] = ex__46945__auto__);


if(cljs.core.seq((state_47590[(4)]))){
var statearr_47611_49013 = state_47590;
(statearr_47611_49013[(1)] = cljs.core.first((state_47590[(4)])));

} else {
throw ex__46945__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49014 = state_47590;
state_47590 = G__49014;
continue;
} else {
return ret_value__46943__auto__;
}
break;
}
});
cljs$core$async$state_machine__46942__auto__ = function(state_47590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46942__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46942__auto____1.call(this,state_47590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46942__auto____0;
cljs$core$async$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46942__auto____1;
return cljs$core$async$state_machine__46942__auto__;
})()
})();
var state__46976__auto__ = (function (){var statearr_47612 = f__46975__auto__();
(statearr_47612[(6)] = c__46974__auto__);

return statearr_47612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46976__auto__);
}));

return c__46974__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__47614 = arguments.length;
switch (G__47614) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_49016 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_49016(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_49017 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_49017(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_49020 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_49020(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_49023 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_49023(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47615 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47615 = (function (ch,cs,meta47616){
this.ch = ch;
this.cs = cs;
this.meta47616 = meta47616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47617,meta47616__$1){
var self__ = this;
var _47617__$1 = this;
return (new cljs.core.async.t_cljs$core$async47615(self__.ch,self__.cs,meta47616__$1));
}));

(cljs.core.async.t_cljs$core$async47615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47617){
var self__ = this;
var _47617__$1 = this;
return self__.meta47616;
}));

(cljs.core.async.t_cljs$core$async47615.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47615.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47615.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47615.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async47615.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async47615.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async47615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47616","meta47616",1039647081,null)], null);
}));

(cljs.core.async.t_cljs$core$async47615.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47615");

(cljs.core.async.t_cljs$core$async47615.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47615");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47615.
 */
cljs.core.async.__GT_t_cljs$core$async47615 = (function cljs$core$async$mult_$___GT_t_cljs$core$async47615(ch__$1,cs__$1,meta47616){
return (new cljs.core.async.t_cljs$core$async47615(ch__$1,cs__$1,meta47616));
});

}

return (new cljs.core.async.t_cljs$core$async47615(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__46974__auto___49038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46975__auto__ = (function (){var switch__46941__auto__ = (function (state_47750){
var state_val_47751 = (state_47750[(1)]);
if((state_val_47751 === (7))){
var inst_47746 = (state_47750[(2)]);
var state_47750__$1 = state_47750;
var statearr_47754_49039 = state_47750__$1;
(statearr_47754_49039[(2)] = inst_47746);

(statearr_47754_49039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (20))){
var inst_47651 = (state_47750[(7)]);
var inst_47663 = cljs.core.first(inst_47651);
var inst_47664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47663,(0),null);
var inst_47665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47663,(1),null);
var state_47750__$1 = (function (){var statearr_47755 = state_47750;
(statearr_47755[(8)] = inst_47664);

return statearr_47755;
})();
if(cljs.core.truth_(inst_47665)){
var statearr_47757_49046 = state_47750__$1;
(statearr_47757_49046[(1)] = (22));

} else {
var statearr_47759_49047 = state_47750__$1;
(statearr_47759_49047[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (27))){
var inst_47700 = (state_47750[(9)]);
var inst_47695 = (state_47750[(10)]);
var inst_47620 = (state_47750[(11)]);
var inst_47693 = (state_47750[(12)]);
var inst_47700__$1 = cljs.core._nth(inst_47693,inst_47695);
var inst_47701 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47700__$1,inst_47620,done);
var state_47750__$1 = (function (){var statearr_47765 = state_47750;
(statearr_47765[(9)] = inst_47700__$1);

return statearr_47765;
})();
if(cljs.core.truth_(inst_47701)){
var statearr_47766_49048 = state_47750__$1;
(statearr_47766_49048[(1)] = (30));

} else {
var statearr_47767_49052 = state_47750__$1;
(statearr_47767_49052[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (1))){
var state_47750__$1 = state_47750;
var statearr_47769_49053 = state_47750__$1;
(statearr_47769_49053[(2)] = null);

(statearr_47769_49053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (24))){
var inst_47651 = (state_47750[(7)]);
var inst_47670 = (state_47750[(2)]);
var inst_47671 = cljs.core.next(inst_47651);
var inst_47629 = inst_47671;
var inst_47630 = null;
var inst_47631 = (0);
var inst_47632 = (0);
var state_47750__$1 = (function (){var statearr_47770 = state_47750;
(statearr_47770[(13)] = inst_47629);

(statearr_47770[(14)] = inst_47631);

(statearr_47770[(15)] = inst_47670);

(statearr_47770[(16)] = inst_47630);

(statearr_47770[(17)] = inst_47632);

return statearr_47770;
})();
var statearr_47771_49058 = state_47750__$1;
(statearr_47771_49058[(2)] = null);

(statearr_47771_49058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (39))){
var state_47750__$1 = state_47750;
var statearr_47783_49059 = state_47750__$1;
(statearr_47783_49059[(2)] = null);

(statearr_47783_49059[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (4))){
var inst_47620 = (state_47750[(11)]);
var inst_47620__$1 = (state_47750[(2)]);
var inst_47621 = (inst_47620__$1 == null);
var state_47750__$1 = (function (){var statearr_47784 = state_47750;
(statearr_47784[(11)] = inst_47620__$1);

return statearr_47784;
})();
if(cljs.core.truth_(inst_47621)){
var statearr_47785_49060 = state_47750__$1;
(statearr_47785_49060[(1)] = (5));

} else {
var statearr_47786_49061 = state_47750__$1;
(statearr_47786_49061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (15))){
var inst_47629 = (state_47750[(13)]);
var inst_47631 = (state_47750[(14)]);
var inst_47630 = (state_47750[(16)]);
var inst_47632 = (state_47750[(17)]);
var inst_47647 = (state_47750[(2)]);
var inst_47648 = (inst_47632 + (1));
var tmp47780 = inst_47629;
var tmp47781 = inst_47631;
var tmp47782 = inst_47630;
var inst_47629__$1 = tmp47780;
var inst_47630__$1 = tmp47782;
var inst_47631__$1 = tmp47781;
var inst_47632__$1 = inst_47648;
var state_47750__$1 = (function (){var statearr_47792 = state_47750;
(statearr_47792[(13)] = inst_47629__$1);

(statearr_47792[(14)] = inst_47631__$1);

(statearr_47792[(16)] = inst_47630__$1);

(statearr_47792[(18)] = inst_47647);

(statearr_47792[(17)] = inst_47632__$1);

return statearr_47792;
})();
var statearr_47795_49064 = state_47750__$1;
(statearr_47795_49064[(2)] = null);

(statearr_47795_49064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (21))){
var inst_47674 = (state_47750[(2)]);
var state_47750__$1 = state_47750;
var statearr_47800_49065 = state_47750__$1;
(statearr_47800_49065[(2)] = inst_47674);

(statearr_47800_49065[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (31))){
var inst_47700 = (state_47750[(9)]);
var inst_47704 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47700);
var state_47750__$1 = state_47750;
var statearr_47803_49066 = state_47750__$1;
(statearr_47803_49066[(2)] = inst_47704);

(statearr_47803_49066[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (32))){
var inst_47692 = (state_47750[(19)]);
var inst_47695 = (state_47750[(10)]);
var inst_47694 = (state_47750[(20)]);
var inst_47693 = (state_47750[(12)]);
var inst_47706 = (state_47750[(2)]);
var inst_47707 = (inst_47695 + (1));
var tmp47797 = inst_47692;
var tmp47798 = inst_47694;
var tmp47799 = inst_47693;
var inst_47692__$1 = tmp47797;
var inst_47693__$1 = tmp47799;
var inst_47694__$1 = tmp47798;
var inst_47695__$1 = inst_47707;
var state_47750__$1 = (function (){var statearr_47808 = state_47750;
(statearr_47808[(19)] = inst_47692__$1);

(statearr_47808[(10)] = inst_47695__$1);

(statearr_47808[(21)] = inst_47706);

(statearr_47808[(20)] = inst_47694__$1);

(statearr_47808[(12)] = inst_47693__$1);

return statearr_47808;
})();
var statearr_47810_49067 = state_47750__$1;
(statearr_47810_49067[(2)] = null);

(statearr_47810_49067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (40))){
var inst_47719 = (state_47750[(22)]);
var inst_47723 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47719);
var state_47750__$1 = state_47750;
var statearr_47811_49068 = state_47750__$1;
(statearr_47811_49068[(2)] = inst_47723);

(statearr_47811_49068[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (33))){
var inst_47710 = (state_47750[(23)]);
var inst_47712 = cljs.core.chunked_seq_QMARK_(inst_47710);
var state_47750__$1 = state_47750;
if(inst_47712){
var statearr_47814_49069 = state_47750__$1;
(statearr_47814_49069[(1)] = (36));

} else {
var statearr_47815_49070 = state_47750__$1;
(statearr_47815_49070[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (13))){
var inst_47641 = (state_47750[(24)]);
var inst_47644 = cljs.core.async.close_BANG_(inst_47641);
var state_47750__$1 = state_47750;
var statearr_47818_49071 = state_47750__$1;
(statearr_47818_49071[(2)] = inst_47644);

(statearr_47818_49071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (22))){
var inst_47664 = (state_47750[(8)]);
var inst_47667 = cljs.core.async.close_BANG_(inst_47664);
var state_47750__$1 = state_47750;
var statearr_47824_49072 = state_47750__$1;
(statearr_47824_49072[(2)] = inst_47667);

(statearr_47824_49072[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (36))){
var inst_47710 = (state_47750[(23)]);
var inst_47714 = cljs.core.chunk_first(inst_47710);
var inst_47715 = cljs.core.chunk_rest(inst_47710);
var inst_47716 = cljs.core.count(inst_47714);
var inst_47692 = inst_47715;
var inst_47693 = inst_47714;
var inst_47694 = inst_47716;
var inst_47695 = (0);
var state_47750__$1 = (function (){var statearr_47826 = state_47750;
(statearr_47826[(19)] = inst_47692);

(statearr_47826[(10)] = inst_47695);

(statearr_47826[(20)] = inst_47694);

(statearr_47826[(12)] = inst_47693);

return statearr_47826;
})();
var statearr_47827_49073 = state_47750__$1;
(statearr_47827_49073[(2)] = null);

(statearr_47827_49073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (41))){
var inst_47710 = (state_47750[(23)]);
var inst_47725 = (state_47750[(2)]);
var inst_47726 = cljs.core.next(inst_47710);
var inst_47692 = inst_47726;
var inst_47693 = null;
var inst_47694 = (0);
var inst_47695 = (0);
var state_47750__$1 = (function (){var statearr_47828 = state_47750;
(statearr_47828[(19)] = inst_47692);

(statearr_47828[(10)] = inst_47695);

(statearr_47828[(20)] = inst_47694);

(statearr_47828[(25)] = inst_47725);

(statearr_47828[(12)] = inst_47693);

return statearr_47828;
})();
var statearr_47829_49078 = state_47750__$1;
(statearr_47829_49078[(2)] = null);

(statearr_47829_49078[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (43))){
var state_47750__$1 = state_47750;
var statearr_47832_49079 = state_47750__$1;
(statearr_47832_49079[(2)] = null);

(statearr_47832_49079[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (29))){
var inst_47734 = (state_47750[(2)]);
var state_47750__$1 = state_47750;
var statearr_47833_49080 = state_47750__$1;
(statearr_47833_49080[(2)] = inst_47734);

(statearr_47833_49080[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (44))){
var inst_47743 = (state_47750[(2)]);
var state_47750__$1 = (function (){var statearr_47836 = state_47750;
(statearr_47836[(26)] = inst_47743);

return statearr_47836;
})();
var statearr_47837_49081 = state_47750__$1;
(statearr_47837_49081[(2)] = null);

(statearr_47837_49081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (6))){
var inst_47684 = (state_47750[(27)]);
var inst_47683 = cljs.core.deref(cs);
var inst_47684__$1 = cljs.core.keys(inst_47683);
var inst_47685 = cljs.core.count(inst_47684__$1);
var inst_47686 = cljs.core.reset_BANG_(dctr,inst_47685);
var inst_47691 = cljs.core.seq(inst_47684__$1);
var inst_47692 = inst_47691;
var inst_47693 = null;
var inst_47694 = (0);
var inst_47695 = (0);
var state_47750__$1 = (function (){var statearr_47839 = state_47750;
(statearr_47839[(19)] = inst_47692);

(statearr_47839[(10)] = inst_47695);

(statearr_47839[(20)] = inst_47694);

(statearr_47839[(28)] = inst_47686);

(statearr_47839[(27)] = inst_47684__$1);

(statearr_47839[(12)] = inst_47693);

return statearr_47839;
})();
var statearr_47840_49082 = state_47750__$1;
(statearr_47840_49082[(2)] = null);

(statearr_47840_49082[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (28))){
var inst_47692 = (state_47750[(19)]);
var inst_47710 = (state_47750[(23)]);
var inst_47710__$1 = cljs.core.seq(inst_47692);
var state_47750__$1 = (function (){var statearr_47841 = state_47750;
(statearr_47841[(23)] = inst_47710__$1);

return statearr_47841;
})();
if(inst_47710__$1){
var statearr_47842_49087 = state_47750__$1;
(statearr_47842_49087[(1)] = (33));

} else {
var statearr_47843_49088 = state_47750__$1;
(statearr_47843_49088[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (25))){
var inst_47695 = (state_47750[(10)]);
var inst_47694 = (state_47750[(20)]);
var inst_47697 = (inst_47695 < inst_47694);
var inst_47698 = inst_47697;
var state_47750__$1 = state_47750;
if(cljs.core.truth_(inst_47698)){
var statearr_47844_49090 = state_47750__$1;
(statearr_47844_49090[(1)] = (27));

} else {
var statearr_47845_49091 = state_47750__$1;
(statearr_47845_49091[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (34))){
var state_47750__$1 = state_47750;
var statearr_47846_49092 = state_47750__$1;
(statearr_47846_49092[(2)] = null);

(statearr_47846_49092[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (17))){
var state_47750__$1 = state_47750;
var statearr_47847_49093 = state_47750__$1;
(statearr_47847_49093[(2)] = null);

(statearr_47847_49093[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (3))){
var inst_47748 = (state_47750[(2)]);
var state_47750__$1 = state_47750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47750__$1,inst_47748);
} else {
if((state_val_47751 === (12))){
var inst_47679 = (state_47750[(2)]);
var state_47750__$1 = state_47750;
var statearr_47857_49094 = state_47750__$1;
(statearr_47857_49094[(2)] = inst_47679);

(statearr_47857_49094[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (2))){
var state_47750__$1 = state_47750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47750__$1,(4),ch);
} else {
if((state_val_47751 === (23))){
var state_47750__$1 = state_47750;
var statearr_47858_49096 = state_47750__$1;
(statearr_47858_49096[(2)] = null);

(statearr_47858_49096[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (35))){
var inst_47732 = (state_47750[(2)]);
var state_47750__$1 = state_47750;
var statearr_47859_49097 = state_47750__$1;
(statearr_47859_49097[(2)] = inst_47732);

(statearr_47859_49097[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (19))){
var inst_47651 = (state_47750[(7)]);
var inst_47655 = cljs.core.chunk_first(inst_47651);
var inst_47656 = cljs.core.chunk_rest(inst_47651);
var inst_47657 = cljs.core.count(inst_47655);
var inst_47629 = inst_47656;
var inst_47630 = inst_47655;
var inst_47631 = inst_47657;
var inst_47632 = (0);
var state_47750__$1 = (function (){var statearr_47860 = state_47750;
(statearr_47860[(13)] = inst_47629);

(statearr_47860[(14)] = inst_47631);

(statearr_47860[(16)] = inst_47630);

(statearr_47860[(17)] = inst_47632);

return statearr_47860;
})();
var statearr_47861_49102 = state_47750__$1;
(statearr_47861_49102[(2)] = null);

(statearr_47861_49102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (11))){
var inst_47651 = (state_47750[(7)]);
var inst_47629 = (state_47750[(13)]);
var inst_47651__$1 = cljs.core.seq(inst_47629);
var state_47750__$1 = (function (){var statearr_47862 = state_47750;
(statearr_47862[(7)] = inst_47651__$1);

return statearr_47862;
})();
if(inst_47651__$1){
var statearr_47863_49103 = state_47750__$1;
(statearr_47863_49103[(1)] = (16));

} else {
var statearr_47864_49104 = state_47750__$1;
(statearr_47864_49104[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (9))){
var inst_47681 = (state_47750[(2)]);
var state_47750__$1 = state_47750;
var statearr_47865_49105 = state_47750__$1;
(statearr_47865_49105[(2)] = inst_47681);

(statearr_47865_49105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (5))){
var inst_47627 = cljs.core.deref(cs);
var inst_47628 = cljs.core.seq(inst_47627);
var inst_47629 = inst_47628;
var inst_47630 = null;
var inst_47631 = (0);
var inst_47632 = (0);
var state_47750__$1 = (function (){var statearr_47866 = state_47750;
(statearr_47866[(13)] = inst_47629);

(statearr_47866[(14)] = inst_47631);

(statearr_47866[(16)] = inst_47630);

(statearr_47866[(17)] = inst_47632);

return statearr_47866;
})();
var statearr_47867_49106 = state_47750__$1;
(statearr_47867_49106[(2)] = null);

(statearr_47867_49106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (14))){
var state_47750__$1 = state_47750;
var statearr_47868_49107 = state_47750__$1;
(statearr_47868_49107[(2)] = null);

(statearr_47868_49107[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (45))){
var inst_47740 = (state_47750[(2)]);
var state_47750__$1 = state_47750;
var statearr_47869_49108 = state_47750__$1;
(statearr_47869_49108[(2)] = inst_47740);

(statearr_47869_49108[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (26))){
var inst_47684 = (state_47750[(27)]);
var inst_47736 = (state_47750[(2)]);
var inst_47737 = cljs.core.seq(inst_47684);
var state_47750__$1 = (function (){var statearr_47870 = state_47750;
(statearr_47870[(29)] = inst_47736);

return statearr_47870;
})();
if(inst_47737){
var statearr_47871_49109 = state_47750__$1;
(statearr_47871_49109[(1)] = (42));

} else {
var statearr_47872_49110 = state_47750__$1;
(statearr_47872_49110[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (16))){
var inst_47651 = (state_47750[(7)]);
var inst_47653 = cljs.core.chunked_seq_QMARK_(inst_47651);
var state_47750__$1 = state_47750;
if(inst_47653){
var statearr_47879_49111 = state_47750__$1;
(statearr_47879_49111[(1)] = (19));

} else {
var statearr_47880_49112 = state_47750__$1;
(statearr_47880_49112[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (38))){
var inst_47729 = (state_47750[(2)]);
var state_47750__$1 = state_47750;
var statearr_47882_49113 = state_47750__$1;
(statearr_47882_49113[(2)] = inst_47729);

(statearr_47882_49113[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (30))){
var state_47750__$1 = state_47750;
var statearr_47883_49114 = state_47750__$1;
(statearr_47883_49114[(2)] = null);

(statearr_47883_49114[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (10))){
var inst_47630 = (state_47750[(16)]);
var inst_47632 = (state_47750[(17)]);
var inst_47640 = cljs.core._nth(inst_47630,inst_47632);
var inst_47641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47640,(0),null);
var inst_47642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47640,(1),null);
var state_47750__$1 = (function (){var statearr_47884 = state_47750;
(statearr_47884[(24)] = inst_47641);

return statearr_47884;
})();
if(cljs.core.truth_(inst_47642)){
var statearr_47885_49115 = state_47750__$1;
(statearr_47885_49115[(1)] = (13));

} else {
var statearr_47886_49116 = state_47750__$1;
(statearr_47886_49116[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (18))){
var inst_47677 = (state_47750[(2)]);
var state_47750__$1 = state_47750;
var statearr_47887_49117 = state_47750__$1;
(statearr_47887_49117[(2)] = inst_47677);

(statearr_47887_49117[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (42))){
var state_47750__$1 = state_47750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47750__$1,(45),dchan);
} else {
if((state_val_47751 === (37))){
var inst_47620 = (state_47750[(11)]);
var inst_47710 = (state_47750[(23)]);
var inst_47719 = (state_47750[(22)]);
var inst_47719__$1 = cljs.core.first(inst_47710);
var inst_47720 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47719__$1,inst_47620,done);
var state_47750__$1 = (function (){var statearr_47889 = state_47750;
(statearr_47889[(22)] = inst_47719__$1);

return statearr_47889;
})();
if(cljs.core.truth_(inst_47720)){
var statearr_47890_49121 = state_47750__$1;
(statearr_47890_49121[(1)] = (39));

} else {
var statearr_47891_49122 = state_47750__$1;
(statearr_47891_49122[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47751 === (8))){
var inst_47631 = (state_47750[(14)]);
var inst_47632 = (state_47750[(17)]);
var inst_47634 = (inst_47632 < inst_47631);
var inst_47635 = inst_47634;
var state_47750__$1 = state_47750;
if(cljs.core.truth_(inst_47635)){
var statearr_47894_49123 = state_47750__$1;
(statearr_47894_49123[(1)] = (10));

} else {
var statearr_47896_49124 = state_47750__$1;
(statearr_47896_49124[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__46942__auto__ = null;
var cljs$core$async$mult_$_state_machine__46942__auto____0 = (function (){
var statearr_47897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47897[(0)] = cljs$core$async$mult_$_state_machine__46942__auto__);

(statearr_47897[(1)] = (1));

return statearr_47897;
});
var cljs$core$async$mult_$_state_machine__46942__auto____1 = (function (state_47750){
while(true){
var ret_value__46943__auto__ = (function (){try{while(true){
var result__46944__auto__ = switch__46941__auto__(state_47750);
if(cljs.core.keyword_identical_QMARK_(result__46944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46944__auto__;
}
break;
}
}catch (e47898){var ex__46945__auto__ = e47898;
var statearr_47899_49125 = state_47750;
(statearr_47899_49125[(2)] = ex__46945__auto__);


if(cljs.core.seq((state_47750[(4)]))){
var statearr_47900_49126 = state_47750;
(statearr_47900_49126[(1)] = cljs.core.first((state_47750[(4)])));

} else {
throw ex__46945__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49127 = state_47750;
state_47750 = G__49127;
continue;
} else {
return ret_value__46943__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46942__auto__ = function(state_47750){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46942__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46942__auto____1.call(this,state_47750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46942__auto____0;
cljs$core$async$mult_$_state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46942__auto____1;
return cljs$core$async$mult_$_state_machine__46942__auto__;
})()
})();
var state__46976__auto__ = (function (){var statearr_47901 = f__46975__auto__();
(statearr_47901[(6)] = c__46974__auto___49038);

return statearr_47901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46976__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__47903 = arguments.length;
switch (G__47903) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_49130 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_49130(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_49131 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_49131(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_49132 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_49132(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_49138 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_49138(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_49139 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_49139(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49141 = arguments.length;
var i__4737__auto___49142 = (0);
while(true){
if((i__4737__auto___49142 < len__4736__auto___49141)){
args__4742__auto__.push((arguments[i__4737__auto___49142]));

var G__49147 = (i__4737__auto___49142 + (1));
i__4737__auto___49142 = G__49147;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47908){
var map__47909 = p__47908;
var map__47909__$1 = (((((!((map__47909 == null))))?(((((map__47909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47909):map__47909);
var opts = map__47909__$1;
var statearr_47911_49148 = state;
(statearr_47911_49148[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_47912_49149 = state;
(statearr_47912_49149[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_47913_49150 = state;
(statearr_47913_49150[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47904){
var G__47905 = cljs.core.first(seq47904);
var seq47904__$1 = cljs.core.next(seq47904);
var G__47906 = cljs.core.first(seq47904__$1);
var seq47904__$2 = cljs.core.next(seq47904__$1);
var G__47907 = cljs.core.first(seq47904__$2);
var seq47904__$3 = cljs.core.next(seq47904__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47905,G__47906,G__47907,seq47904__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47914 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47914 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47915){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47915 = meta47915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47916,meta47915__$1){
var self__ = this;
var _47916__$1 = this;
return (new cljs.core.async.t_cljs$core$async47914(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47915__$1));
}));

(cljs.core.async.t_cljs$core$async47914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47916){
var self__ = this;
var _47916__$1 = this;
return self__.meta47915;
}));

(cljs.core.async.t_cljs$core$async47914.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47914.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async47914.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47914.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47914.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47914.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47914.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47914.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47914.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47915","meta47915",1324683098,null)], null);
}));

(cljs.core.async.t_cljs$core$async47914.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47914");

(cljs.core.async.t_cljs$core$async47914.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47914");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47914.
 */
cljs.core.async.__GT_t_cljs$core$async47914 = (function cljs$core$async$mix_$___GT_t_cljs$core$async47914(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47915){
return (new cljs.core.async.t_cljs$core$async47914(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47915));
});

}

return (new cljs.core.async.t_cljs$core$async47914(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46974__auto___49154 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46975__auto__ = (function (){var switch__46941__auto__ = (function (state_48018){
var state_val_48019 = (state_48018[(1)]);
if((state_val_48019 === (7))){
var inst_47933 = (state_48018[(2)]);
var state_48018__$1 = state_48018;
var statearr_48020_49155 = state_48018__$1;
(statearr_48020_49155[(2)] = inst_47933);

(statearr_48020_49155[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (20))){
var inst_47945 = (state_48018[(7)]);
var state_48018__$1 = state_48018;
var statearr_48021_49156 = state_48018__$1;
(statearr_48021_49156[(2)] = inst_47945);

(statearr_48021_49156[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (27))){
var state_48018__$1 = state_48018;
var statearr_48022_49157 = state_48018__$1;
(statearr_48022_49157[(2)] = null);

(statearr_48022_49157[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (1))){
var inst_47920 = (state_48018[(8)]);
var inst_47920__$1 = calc_state();
var inst_47922 = (inst_47920__$1 == null);
var inst_47923 = cljs.core.not(inst_47922);
var state_48018__$1 = (function (){var statearr_48023 = state_48018;
(statearr_48023[(8)] = inst_47920__$1);

return statearr_48023;
})();
if(inst_47923){
var statearr_48024_49159 = state_48018__$1;
(statearr_48024_49159[(1)] = (2));

} else {
var statearr_48025_49160 = state_48018__$1;
(statearr_48025_49160[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (24))){
var inst_47969 = (state_48018[(9)]);
var inst_47978 = (state_48018[(10)]);
var inst_47992 = (state_48018[(11)]);
var inst_47992__$1 = (inst_47969.cljs$core$IFn$_invoke$arity$1 ? inst_47969.cljs$core$IFn$_invoke$arity$1(inst_47978) : inst_47969.call(null,inst_47978));
var state_48018__$1 = (function (){var statearr_48026 = state_48018;
(statearr_48026[(11)] = inst_47992__$1);

return statearr_48026;
})();
if(cljs.core.truth_(inst_47992__$1)){
var statearr_48027_49161 = state_48018__$1;
(statearr_48027_49161[(1)] = (29));

} else {
var statearr_48028_49162 = state_48018__$1;
(statearr_48028_49162[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (4))){
var inst_47936 = (state_48018[(2)]);
var state_48018__$1 = state_48018;
if(cljs.core.truth_(inst_47936)){
var statearr_48029_49163 = state_48018__$1;
(statearr_48029_49163[(1)] = (8));

} else {
var statearr_48030_49164 = state_48018__$1;
(statearr_48030_49164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (15))){
var inst_47963 = (state_48018[(2)]);
var state_48018__$1 = state_48018;
if(cljs.core.truth_(inst_47963)){
var statearr_48031_49165 = state_48018__$1;
(statearr_48031_49165[(1)] = (19));

} else {
var statearr_48032_49166 = state_48018__$1;
(statearr_48032_49166[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (21))){
var inst_47968 = (state_48018[(12)]);
var inst_47968__$1 = (state_48018[(2)]);
var inst_47969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47968__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47968__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47968__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48018__$1 = (function (){var statearr_48033 = state_48018;
(statearr_48033[(12)] = inst_47968__$1);

(statearr_48033[(9)] = inst_47969);

(statearr_48033[(13)] = inst_47970);

return statearr_48033;
})();
return cljs.core.async.ioc_alts_BANG_(state_48018__$1,(22),inst_47971);
} else {
if((state_val_48019 === (31))){
var inst_48000 = (state_48018[(2)]);
var state_48018__$1 = state_48018;
if(cljs.core.truth_(inst_48000)){
var statearr_48034_49167 = state_48018__$1;
(statearr_48034_49167[(1)] = (32));

} else {
var statearr_48035_49168 = state_48018__$1;
(statearr_48035_49168[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (32))){
var inst_47977 = (state_48018[(14)]);
var state_48018__$1 = state_48018;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48018__$1,(35),out,inst_47977);
} else {
if((state_val_48019 === (33))){
var inst_47968 = (state_48018[(12)]);
var inst_47945 = inst_47968;
var state_48018__$1 = (function (){var statearr_48036 = state_48018;
(statearr_48036[(7)] = inst_47945);

return statearr_48036;
})();
var statearr_48037_49169 = state_48018__$1;
(statearr_48037_49169[(2)] = null);

(statearr_48037_49169[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (13))){
var inst_47945 = (state_48018[(7)]);
var inst_47952 = inst_47945.cljs$lang$protocol_mask$partition0$;
var inst_47953 = (inst_47952 & (64));
var inst_47954 = inst_47945.cljs$core$ISeq$;
var inst_47955 = (cljs.core.PROTOCOL_SENTINEL === inst_47954);
var inst_47956 = ((inst_47953) || (inst_47955));
var state_48018__$1 = state_48018;
if(cljs.core.truth_(inst_47956)){
var statearr_48038_49170 = state_48018__$1;
(statearr_48038_49170[(1)] = (16));

} else {
var statearr_48039_49171 = state_48018__$1;
(statearr_48039_49171[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (22))){
var inst_47978 = (state_48018[(10)]);
var inst_47977 = (state_48018[(14)]);
var inst_47976 = (state_48018[(2)]);
var inst_47977__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47976,(0),null);
var inst_47978__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47976,(1),null);
var inst_47979 = (inst_47977__$1 == null);
var inst_47980 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47978__$1,change);
var inst_47981 = ((inst_47979) || (inst_47980));
var state_48018__$1 = (function (){var statearr_48040 = state_48018;
(statearr_48040[(10)] = inst_47978__$1);

(statearr_48040[(14)] = inst_47977__$1);

return statearr_48040;
})();
if(cljs.core.truth_(inst_47981)){
var statearr_48041_49172 = state_48018__$1;
(statearr_48041_49172[(1)] = (23));

} else {
var statearr_48042_49173 = state_48018__$1;
(statearr_48042_49173[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (36))){
var inst_47968 = (state_48018[(12)]);
var inst_47945 = inst_47968;
var state_48018__$1 = (function (){var statearr_48043 = state_48018;
(statearr_48043[(7)] = inst_47945);

return statearr_48043;
})();
var statearr_48044_49174 = state_48018__$1;
(statearr_48044_49174[(2)] = null);

(statearr_48044_49174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (29))){
var inst_47992 = (state_48018[(11)]);
var state_48018__$1 = state_48018;
var statearr_48045_49175 = state_48018__$1;
(statearr_48045_49175[(2)] = inst_47992);

(statearr_48045_49175[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (6))){
var state_48018__$1 = state_48018;
var statearr_48046_49176 = state_48018__$1;
(statearr_48046_49176[(2)] = false);

(statearr_48046_49176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (28))){
var inst_47988 = (state_48018[(2)]);
var inst_47989 = calc_state();
var inst_47945 = inst_47989;
var state_48018__$1 = (function (){var statearr_48047 = state_48018;
(statearr_48047[(7)] = inst_47945);

(statearr_48047[(15)] = inst_47988);

return statearr_48047;
})();
var statearr_48048_49181 = state_48018__$1;
(statearr_48048_49181[(2)] = null);

(statearr_48048_49181[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (25))){
var inst_48014 = (state_48018[(2)]);
var state_48018__$1 = state_48018;
var statearr_48049_49182 = state_48018__$1;
(statearr_48049_49182[(2)] = inst_48014);

(statearr_48049_49182[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (34))){
var inst_48012 = (state_48018[(2)]);
var state_48018__$1 = state_48018;
var statearr_48050_49184 = state_48018__$1;
(statearr_48050_49184[(2)] = inst_48012);

(statearr_48050_49184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (17))){
var state_48018__$1 = state_48018;
var statearr_48051_49188 = state_48018__$1;
(statearr_48051_49188[(2)] = false);

(statearr_48051_49188[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (3))){
var state_48018__$1 = state_48018;
var statearr_48052_49189 = state_48018__$1;
(statearr_48052_49189[(2)] = false);

(statearr_48052_49189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (12))){
var inst_48016 = (state_48018[(2)]);
var state_48018__$1 = state_48018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48018__$1,inst_48016);
} else {
if((state_val_48019 === (2))){
var inst_47920 = (state_48018[(8)]);
var inst_47925 = inst_47920.cljs$lang$protocol_mask$partition0$;
var inst_47926 = (inst_47925 & (64));
var inst_47927 = inst_47920.cljs$core$ISeq$;
var inst_47928 = (cljs.core.PROTOCOL_SENTINEL === inst_47927);
var inst_47929 = ((inst_47926) || (inst_47928));
var state_48018__$1 = state_48018;
if(cljs.core.truth_(inst_47929)){
var statearr_48053_49192 = state_48018__$1;
(statearr_48053_49192[(1)] = (5));

} else {
var statearr_48054_49193 = state_48018__$1;
(statearr_48054_49193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (23))){
var inst_47977 = (state_48018[(14)]);
var inst_47983 = (inst_47977 == null);
var state_48018__$1 = state_48018;
if(cljs.core.truth_(inst_47983)){
var statearr_48055_49194 = state_48018__$1;
(statearr_48055_49194[(1)] = (26));

} else {
var statearr_48056_49195 = state_48018__$1;
(statearr_48056_49195[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (35))){
var inst_48003 = (state_48018[(2)]);
var state_48018__$1 = state_48018;
if(cljs.core.truth_(inst_48003)){
var statearr_48057_49196 = state_48018__$1;
(statearr_48057_49196[(1)] = (36));

} else {
var statearr_48058_49197 = state_48018__$1;
(statearr_48058_49197[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (19))){
var inst_47945 = (state_48018[(7)]);
var inst_47965 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47945);
var state_48018__$1 = state_48018;
var statearr_48059_49198 = state_48018__$1;
(statearr_48059_49198[(2)] = inst_47965);

(statearr_48059_49198[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (11))){
var inst_47945 = (state_48018[(7)]);
var inst_47949 = (inst_47945 == null);
var inst_47950 = cljs.core.not(inst_47949);
var state_48018__$1 = state_48018;
if(inst_47950){
var statearr_48060_49199 = state_48018__$1;
(statearr_48060_49199[(1)] = (13));

} else {
var statearr_48061_49200 = state_48018__$1;
(statearr_48061_49200[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (9))){
var inst_47920 = (state_48018[(8)]);
var state_48018__$1 = state_48018;
var statearr_48062_49201 = state_48018__$1;
(statearr_48062_49201[(2)] = inst_47920);

(statearr_48062_49201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (5))){
var state_48018__$1 = state_48018;
var statearr_48063_49202 = state_48018__$1;
(statearr_48063_49202[(2)] = true);

(statearr_48063_49202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (14))){
var state_48018__$1 = state_48018;
var statearr_48064_49203 = state_48018__$1;
(statearr_48064_49203[(2)] = false);

(statearr_48064_49203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (26))){
var inst_47978 = (state_48018[(10)]);
var inst_47985 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47978);
var state_48018__$1 = state_48018;
var statearr_48065_49204 = state_48018__$1;
(statearr_48065_49204[(2)] = inst_47985);

(statearr_48065_49204[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (16))){
var state_48018__$1 = state_48018;
var statearr_48066_49205 = state_48018__$1;
(statearr_48066_49205[(2)] = true);

(statearr_48066_49205[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (38))){
var inst_48008 = (state_48018[(2)]);
var state_48018__$1 = state_48018;
var statearr_48067_49206 = state_48018__$1;
(statearr_48067_49206[(2)] = inst_48008);

(statearr_48067_49206[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (30))){
var inst_47969 = (state_48018[(9)]);
var inst_47970 = (state_48018[(13)]);
var inst_47978 = (state_48018[(10)]);
var inst_47995 = cljs.core.empty_QMARK_(inst_47969);
var inst_47996 = (inst_47970.cljs$core$IFn$_invoke$arity$1 ? inst_47970.cljs$core$IFn$_invoke$arity$1(inst_47978) : inst_47970.call(null,inst_47978));
var inst_47997 = cljs.core.not(inst_47996);
var inst_47998 = ((inst_47995) && (inst_47997));
var state_48018__$1 = state_48018;
var statearr_48068_49207 = state_48018__$1;
(statearr_48068_49207[(2)] = inst_47998);

(statearr_48068_49207[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (10))){
var inst_47920 = (state_48018[(8)]);
var inst_47941 = (state_48018[(2)]);
var inst_47942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47941,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47941,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47941,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47945 = inst_47920;
var state_48018__$1 = (function (){var statearr_48069 = state_48018;
(statearr_48069[(16)] = inst_47943);

(statearr_48069[(7)] = inst_47945);

(statearr_48069[(17)] = inst_47944);

(statearr_48069[(18)] = inst_47942);

return statearr_48069;
})();
var statearr_48070_49208 = state_48018__$1;
(statearr_48070_49208[(2)] = null);

(statearr_48070_49208[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (18))){
var inst_47960 = (state_48018[(2)]);
var state_48018__$1 = state_48018;
var statearr_48071_49209 = state_48018__$1;
(statearr_48071_49209[(2)] = inst_47960);

(statearr_48071_49209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (37))){
var state_48018__$1 = state_48018;
var statearr_48072_49210 = state_48018__$1;
(statearr_48072_49210[(2)] = null);

(statearr_48072_49210[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48019 === (8))){
var inst_47920 = (state_48018[(8)]);
var inst_47938 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47920);
var state_48018__$1 = state_48018;
var statearr_48073_49211 = state_48018__$1;
(statearr_48073_49211[(2)] = inst_47938);

(statearr_48073_49211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__46942__auto__ = null;
var cljs$core$async$mix_$_state_machine__46942__auto____0 = (function (){
var statearr_48074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48074[(0)] = cljs$core$async$mix_$_state_machine__46942__auto__);

(statearr_48074[(1)] = (1));

return statearr_48074;
});
var cljs$core$async$mix_$_state_machine__46942__auto____1 = (function (state_48018){
while(true){
var ret_value__46943__auto__ = (function (){try{while(true){
var result__46944__auto__ = switch__46941__auto__(state_48018);
if(cljs.core.keyword_identical_QMARK_(result__46944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46944__auto__;
}
break;
}
}catch (e48075){var ex__46945__auto__ = e48075;
var statearr_48076_49212 = state_48018;
(statearr_48076_49212[(2)] = ex__46945__auto__);


if(cljs.core.seq((state_48018[(4)]))){
var statearr_48077_49213 = state_48018;
(statearr_48077_49213[(1)] = cljs.core.first((state_48018[(4)])));

} else {
throw ex__46945__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49214 = state_48018;
state_48018 = G__49214;
continue;
} else {
return ret_value__46943__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46942__auto__ = function(state_48018){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46942__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46942__auto____1.call(this,state_48018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46942__auto____0;
cljs$core$async$mix_$_state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46942__auto____1;
return cljs$core$async$mix_$_state_machine__46942__auto__;
})()
})();
var state__46976__auto__ = (function (){var statearr_48078 = f__46975__auto__();
(statearr_48078[(6)] = c__46974__auto___49154);

return statearr_48078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46976__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_49215 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_49215(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_49223 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_49223(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_49227 = (function() {
var G__49228 = null;
var G__49228__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__49228__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__49228 = function(p,v){
switch(arguments.length){
case 1:
return G__49228__1.call(this,p);
case 2:
return G__49228__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49228.cljs$core$IFn$_invoke$arity$1 = G__49228__1;
G__49228.cljs$core$IFn$_invoke$arity$2 = G__49228__2;
return G__49228;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48080 = arguments.length;
switch (G__48080) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49227(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49227(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__48083 = arguments.length;
switch (G__48083) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__48081_SHARP_){
if(cljs.core.truth_((p1__48081_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48081_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__48081_SHARP_.call(null,topic)))){
return p1__48081_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48081_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48084 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48084 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48085){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48085 = meta48085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48086,meta48085__$1){
var self__ = this;
var _48086__$1 = this;
return (new cljs.core.async.t_cljs$core$async48084(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48085__$1));
}));

(cljs.core.async.t_cljs$core$async48084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48086){
var self__ = this;
var _48086__$1 = this;
return self__.meta48085;
}));

(cljs.core.async.t_cljs$core$async48084.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48084.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48084.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48084.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async48084.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async48084.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async48084.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async48084.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48085","meta48085",-726755543,null)], null);
}));

(cljs.core.async.t_cljs$core$async48084.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48084.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48084");

(cljs.core.async.t_cljs$core$async48084.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48084");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48084.
 */
cljs.core.async.__GT_t_cljs$core$async48084 = (function cljs$core$async$__GT_t_cljs$core$async48084(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48085){
return (new cljs.core.async.t_cljs$core$async48084(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48085));
});

}

return (new cljs.core.async.t_cljs$core$async48084(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46974__auto___49256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46975__auto__ = (function (){var switch__46941__auto__ = (function (state_48158){
var state_val_48159 = (state_48158[(1)]);
if((state_val_48159 === (7))){
var inst_48154 = (state_48158[(2)]);
var state_48158__$1 = state_48158;
var statearr_48160_49257 = state_48158__$1;
(statearr_48160_49257[(2)] = inst_48154);

(statearr_48160_49257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48159 === (20))){
var state_48158__$1 = state_48158;
var statearr_48161_49258 = state_48158__$1;
(statearr_48161_49258[(2)] = null);

(statearr_48161_49258[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48159 === (1))){
var state_48158__$1 = state_48158;
var statearr_48162_49259 = state_48158__$1;
(statearr_48162_49259[(2)] = null);

(statearr_48162_49259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48159 === (24))){
var inst_48137 = (state_48158[(7)]);
var inst_48146 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_48137);
var state_48158__$1 = state_48158;
var statearr_48163_49260 = state_48158__$1;
(statearr_48163_49260[(2)] = inst_48146);

(statearr_48163_49260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48159 === (4))){
var inst_48089 = (state_48158[(8)]);
var inst_48089__$1 = (state_48158[(2)]);
var inst_48090 = (inst_48089__$1 == null);
var state_48158__$1 = (function (){var statearr_48164 = state_48158;
(statearr_48164[(8)] = inst_48089__$1);

return statearr_48164;
})();
if(cljs.core.truth_(inst_48090)){
var statearr_48165_49261 = state_48158__$1;
(statearr_48165_49261[(1)] = (5));

} else {
var statearr_48166_49268 = state_48158__$1;
(statearr_48166_49268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48159 === (15))){
var inst_48131 = (state_48158[(2)]);
var state_48158__$1 = state_48158;
var statearr_48167_49269 = state_48158__$1;
(statearr_48167_49269[(2)] = inst_48131);

(statearr_48167_49269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48159 === (21))){
var inst_48151 = (state_48158[(2)]);
var state_48158__$1 = (function (){var statearr_48168 = state_48158;
(statearr_48168[(9)] = inst_48151);

return statearr_48168;
})();
var statearr_48169_49270 = state_48158__$1;
(statearr_48169_49270[(2)] = null);

(statearr_48169_49270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48159 === (13))){
var inst_48113 = (state_48158[(10)]);
var inst_48115 = cljs.core.chunked_seq_QMARK_(inst_48113);
var state_48158__$1 = state_48158;
if(inst_48115){
var statearr_48170_49271 = state_48158__$1;
(statearr_48170_49271[(1)] = (16));

} else {
var statearr_48171_49272 = state_48158__$1;
(statearr_48171_49272[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48159 === (22))){
var inst_48143 = (state_48158[(2)]);
var state_48158__$1 = state_48158;
if(cljs.core.truth_(inst_48143)){
var statearr_48172_49273 = state_48158__$1;
(statearr_48172_49273[(1)] = (23));

} else {
var statearr_48173_49274 = state_48158__$1;
(statearr_48173_49274[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48159 === (6))){
var inst_48137 = (state_48158[(7)]);
var inst_48139 = (state_48158[(11)]);
var inst_48089 = (state_48158[(8)]);
var inst_48137__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_48089) : topic_fn.call(null,inst_48089));
var inst_48138 = cljs.core.deref(mults);
var inst_48139__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48138,inst_48137__$1);
var state_48158__$1 = (function (){var statearr_48174 = state_48158;
(statearr_48174[(7)] = inst_48137__$1);

(statearr_48174[(11)] = inst_48139__$1);

return statearr_48174;
})();
if(cljs.core.truth_(inst_48139__$1)){
var statearr_48175_49275 = state_48158__$1;
(statearr_48175_49275[(1)] = (19));

} else {
var statearr_48176_49276 = state_48158__$1;
(statearr_48176_49276[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48159 === (25))){
var inst_48148 = (state_48158[(2)]);
var state_48158__$1 = state_48158;
var statearr_48177_49277 = state_48158__$1;
(statearr_48177_49277[(2)] = inst_48148);

(statearr_48177_49277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48159 === (17))){
var inst_48113 = (state_48158[(10)]);
var inst_48122 = cljs.core.first(inst_48113);
var inst_48123 = cljs.core.async.muxch_STAR_(inst_48122);
var inst_48124 = cljs.core.async.close_BANG_(inst_48123);
var inst_48125 = cljs.core.next(inst_48113);
var inst_48099 = inst_48125;
var inst_48100 = null;
var inst_48101 = (0);
var inst_48102 = (0);
var state_48158__$1 = (function (){var statearr_48178 = state_48158;
(statearr_48178[(12)] = inst_48099);

(statearr_48178[(13)] = inst_48100);

(statearr_48178[(14)] = inst_48124);

(statearr_48178[(15)] = inst_48102);

(statearr_48178[(16)] = inst_48101);

return statearr_48178;
})();
var statearr_48179_49278 = state_48158__$1;
(statearr_48179_49278[(2)] = null);

(statearr_48179_49278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48159 === (3))){
var inst_48156 = (state_48158[(2)]);
var state_48158__$1 = state_48158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48158__$1,inst_48156);
} else {
if((state_val_48159 === (12))){
var inst_48133 = (state_48158[(2)]);
var state_48158__$1 = state_48158;
var statearr_48180_49285 = state_48158__$1;
(statearr_48180_49285[(2)] = inst_48133);

(statearr_48180_49285[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48159 === (2))){
var state_48158__$1 = state_48158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48158__$1,(4),ch);
} else {
if((state_val_48159 === (23))){
var state_48158__$1 = state_48158;
var statearr_48181_49286 = state_48158__$1;
(statearr_48181_49286[(2)] = null);

(statearr_48181_49286[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48159 === (19))){
var inst_48139 = (state_48158[(11)]);
var inst_48089 = (state_48158[(8)]);
var inst_48141 = cljs.core.async.muxch_STAR_(inst_48139);
var state_48158__$1 = state_48158;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48158__$1,(22),inst_48141,inst_48089);
} else {
if((state_val_48159 === (11))){
var inst_48099 = (state_48158[(12)]);
var inst_48113 = (state_48158[(10)]);
var inst_48113__$1 = cljs.core.seq(inst_48099);
var state_48158__$1 = (function (){var statearr_48182 = state_48158;
(statearr_48182[(10)] = inst_48113__$1);

return statearr_48182;
})();
if(inst_48113__$1){
var statearr_48183_49287 = state_48158__$1;
(statearr_48183_49287[(1)] = (13));

} else {
var statearr_48184_49288 = state_48158__$1;
(statearr_48184_49288[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48159 === (9))){
var inst_48135 = (state_48158[(2)]);
var state_48158__$1 = state_48158;
var statearr_48185_49289 = state_48158__$1;
(statearr_48185_49289[(2)] = inst_48135);

(statearr_48185_49289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48159 === (5))){
var inst_48096 = cljs.core.deref(mults);
var inst_48097 = cljs.core.vals(inst_48096);
var inst_48098 = cljs.core.seq(inst_48097);
var inst_48099 = inst_48098;
var inst_48100 = null;
var inst_48101 = (0);
var inst_48102 = (0);
var state_48158__$1 = (function (){var statearr_48186 = state_48158;
(statearr_48186[(12)] = inst_48099);

(statearr_48186[(13)] = inst_48100);

(statearr_48186[(15)] = inst_48102);

(statearr_48186[(16)] = inst_48101);

return statearr_48186;
})();
var statearr_48187_49290 = state_48158__$1;
(statearr_48187_49290[(2)] = null);

(statearr_48187_49290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48159 === (14))){
var state_48158__$1 = state_48158;
var statearr_48191_49291 = state_48158__$1;
(statearr_48191_49291[(2)] = null);

(statearr_48191_49291[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48159 === (16))){
var inst_48113 = (state_48158[(10)]);
var inst_48117 = cljs.core.chunk_first(inst_48113);
var inst_48118 = cljs.core.chunk_rest(inst_48113);
var inst_48119 = cljs.core.count(inst_48117);
var inst_48099 = inst_48118;
var inst_48100 = inst_48117;
var inst_48101 = inst_48119;
var inst_48102 = (0);
var state_48158__$1 = (function (){var statearr_48192 = state_48158;
(statearr_48192[(12)] = inst_48099);

(statearr_48192[(13)] = inst_48100);

(statearr_48192[(15)] = inst_48102);

(statearr_48192[(16)] = inst_48101);

return statearr_48192;
})();
var statearr_48193_49292 = state_48158__$1;
(statearr_48193_49292[(2)] = null);

(statearr_48193_49292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48159 === (10))){
var inst_48099 = (state_48158[(12)]);
var inst_48100 = (state_48158[(13)]);
var inst_48102 = (state_48158[(15)]);
var inst_48101 = (state_48158[(16)]);
var inst_48107 = cljs.core._nth(inst_48100,inst_48102);
var inst_48108 = cljs.core.async.muxch_STAR_(inst_48107);
var inst_48109 = cljs.core.async.close_BANG_(inst_48108);
var inst_48110 = (inst_48102 + (1));
var tmp48188 = inst_48099;
var tmp48189 = inst_48100;
var tmp48190 = inst_48101;
var inst_48099__$1 = tmp48188;
var inst_48100__$1 = tmp48189;
var inst_48101__$1 = tmp48190;
var inst_48102__$1 = inst_48110;
var state_48158__$1 = (function (){var statearr_48194 = state_48158;
(statearr_48194[(12)] = inst_48099__$1);

(statearr_48194[(13)] = inst_48100__$1);

(statearr_48194[(17)] = inst_48109);

(statearr_48194[(15)] = inst_48102__$1);

(statearr_48194[(16)] = inst_48101__$1);

return statearr_48194;
})();
var statearr_48195_49299 = state_48158__$1;
(statearr_48195_49299[(2)] = null);

(statearr_48195_49299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48159 === (18))){
var inst_48128 = (state_48158[(2)]);
var state_48158__$1 = state_48158;
var statearr_48196_49300 = state_48158__$1;
(statearr_48196_49300[(2)] = inst_48128);

(statearr_48196_49300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48159 === (8))){
var inst_48102 = (state_48158[(15)]);
var inst_48101 = (state_48158[(16)]);
var inst_48104 = (inst_48102 < inst_48101);
var inst_48105 = inst_48104;
var state_48158__$1 = state_48158;
if(cljs.core.truth_(inst_48105)){
var statearr_48197_49301 = state_48158__$1;
(statearr_48197_49301[(1)] = (10));

} else {
var statearr_48198_49302 = state_48158__$1;
(statearr_48198_49302[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46942__auto__ = null;
var cljs$core$async$state_machine__46942__auto____0 = (function (){
var statearr_48199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48199[(0)] = cljs$core$async$state_machine__46942__auto__);

(statearr_48199[(1)] = (1));

return statearr_48199;
});
var cljs$core$async$state_machine__46942__auto____1 = (function (state_48158){
while(true){
var ret_value__46943__auto__ = (function (){try{while(true){
var result__46944__auto__ = switch__46941__auto__(state_48158);
if(cljs.core.keyword_identical_QMARK_(result__46944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46944__auto__;
}
break;
}
}catch (e48200){var ex__46945__auto__ = e48200;
var statearr_48201_49303 = state_48158;
(statearr_48201_49303[(2)] = ex__46945__auto__);


if(cljs.core.seq((state_48158[(4)]))){
var statearr_48202_49304 = state_48158;
(statearr_48202_49304[(1)] = cljs.core.first((state_48158[(4)])));

} else {
throw ex__46945__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49305 = state_48158;
state_48158 = G__49305;
continue;
} else {
return ret_value__46943__auto__;
}
break;
}
});
cljs$core$async$state_machine__46942__auto__ = function(state_48158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46942__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46942__auto____1.call(this,state_48158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46942__auto____0;
cljs$core$async$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46942__auto____1;
return cljs$core$async$state_machine__46942__auto__;
})()
})();
var state__46976__auto__ = (function (){var statearr_48203 = f__46975__auto__();
(statearr_48203[(6)] = c__46974__auto___49256);

return statearr_48203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46976__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__48205 = arguments.length;
switch (G__48205) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__48207 = arguments.length;
switch (G__48207) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__48209 = arguments.length;
switch (G__48209) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__46974__auto___49311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46975__auto__ = (function (){var switch__46941__auto__ = (function (state_48252){
var state_val_48253 = (state_48252[(1)]);
if((state_val_48253 === (7))){
var state_48252__$1 = state_48252;
var statearr_48254_49313 = state_48252__$1;
(statearr_48254_49313[(2)] = null);

(statearr_48254_49313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (1))){
var state_48252__$1 = state_48252;
var statearr_48255_49315 = state_48252__$1;
(statearr_48255_49315[(2)] = null);

(statearr_48255_49315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (4))){
var inst_48213 = (state_48252[(7)]);
var inst_48212 = (state_48252[(8)]);
var inst_48215 = (inst_48213 < inst_48212);
var state_48252__$1 = state_48252;
if(cljs.core.truth_(inst_48215)){
var statearr_48256_49316 = state_48252__$1;
(statearr_48256_49316[(1)] = (6));

} else {
var statearr_48257_49317 = state_48252__$1;
(statearr_48257_49317[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (15))){
var inst_48238 = (state_48252[(9)]);
var inst_48243 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48238);
var state_48252__$1 = state_48252;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48252__$1,(17),out,inst_48243);
} else {
if((state_val_48253 === (13))){
var inst_48238 = (state_48252[(9)]);
var inst_48238__$1 = (state_48252[(2)]);
var inst_48239 = cljs.core.some(cljs.core.nil_QMARK_,inst_48238__$1);
var state_48252__$1 = (function (){var statearr_48258 = state_48252;
(statearr_48258[(9)] = inst_48238__$1);

return statearr_48258;
})();
if(cljs.core.truth_(inst_48239)){
var statearr_48259_49318 = state_48252__$1;
(statearr_48259_49318[(1)] = (14));

} else {
var statearr_48260_49319 = state_48252__$1;
(statearr_48260_49319[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (6))){
var state_48252__$1 = state_48252;
var statearr_48261_49320 = state_48252__$1;
(statearr_48261_49320[(2)] = null);

(statearr_48261_49320[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (17))){
var inst_48245 = (state_48252[(2)]);
var state_48252__$1 = (function (){var statearr_48263 = state_48252;
(statearr_48263[(10)] = inst_48245);

return statearr_48263;
})();
var statearr_48264_49321 = state_48252__$1;
(statearr_48264_49321[(2)] = null);

(statearr_48264_49321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (3))){
var inst_48250 = (state_48252[(2)]);
var state_48252__$1 = state_48252;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48252__$1,inst_48250);
} else {
if((state_val_48253 === (12))){
var _ = (function (){var statearr_48265 = state_48252;
(statearr_48265[(4)] = cljs.core.rest((state_48252[(4)])));

return statearr_48265;
})();
var state_48252__$1 = state_48252;
var ex48262 = (state_48252__$1[(2)]);
var statearr_48266_49322 = state_48252__$1;
(statearr_48266_49322[(5)] = ex48262);


if((ex48262 instanceof Object)){
var statearr_48267_49324 = state_48252__$1;
(statearr_48267_49324[(1)] = (11));

(statearr_48267_49324[(5)] = null);

} else {
throw ex48262;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (2))){
var inst_48211 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48212 = cnt;
var inst_48213 = (0);
var state_48252__$1 = (function (){var statearr_48268 = state_48252;
(statearr_48268[(7)] = inst_48213);

(statearr_48268[(8)] = inst_48212);

(statearr_48268[(11)] = inst_48211);

return statearr_48268;
})();
var statearr_48269_49330 = state_48252__$1;
(statearr_48269_49330[(2)] = null);

(statearr_48269_49330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (11))){
var inst_48217 = (state_48252[(2)]);
var inst_48218 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_48252__$1 = (function (){var statearr_48270 = state_48252;
(statearr_48270[(12)] = inst_48217);

return statearr_48270;
})();
var statearr_48271_49331 = state_48252__$1;
(statearr_48271_49331[(2)] = inst_48218);

(statearr_48271_49331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (9))){
var inst_48213 = (state_48252[(7)]);
var _ = (function (){var statearr_48272 = state_48252;
(statearr_48272[(4)] = cljs.core.cons((12),(state_48252[(4)])));

return statearr_48272;
})();
var inst_48224 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48213) : chs__$1.call(null,inst_48213));
var inst_48225 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48213) : done.call(null,inst_48213));
var inst_48226 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48224,inst_48225);
var ___$1 = (function (){var statearr_48273 = state_48252;
(statearr_48273[(4)] = cljs.core.rest((state_48252[(4)])));

return statearr_48273;
})();
var state_48252__$1 = state_48252;
var statearr_48274_49333 = state_48252__$1;
(statearr_48274_49333[(2)] = inst_48226);

(statearr_48274_49333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (5))){
var inst_48236 = (state_48252[(2)]);
var state_48252__$1 = (function (){var statearr_48275 = state_48252;
(statearr_48275[(13)] = inst_48236);

return statearr_48275;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48252__$1,(13),dchan);
} else {
if((state_val_48253 === (14))){
var inst_48241 = cljs.core.async.close_BANG_(out);
var state_48252__$1 = state_48252;
var statearr_48276_49337 = state_48252__$1;
(statearr_48276_49337[(2)] = inst_48241);

(statearr_48276_49337[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (16))){
var inst_48248 = (state_48252[(2)]);
var state_48252__$1 = state_48252;
var statearr_48277_49339 = state_48252__$1;
(statearr_48277_49339[(2)] = inst_48248);

(statearr_48277_49339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (10))){
var inst_48213 = (state_48252[(7)]);
var inst_48229 = (state_48252[(2)]);
var inst_48230 = (inst_48213 + (1));
var inst_48213__$1 = inst_48230;
var state_48252__$1 = (function (){var statearr_48278 = state_48252;
(statearr_48278[(7)] = inst_48213__$1);

(statearr_48278[(14)] = inst_48229);

return statearr_48278;
})();
var statearr_48279_49341 = state_48252__$1;
(statearr_48279_49341[(2)] = null);

(statearr_48279_49341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48253 === (8))){
var inst_48234 = (state_48252[(2)]);
var state_48252__$1 = state_48252;
var statearr_48280_49342 = state_48252__$1;
(statearr_48280_49342[(2)] = inst_48234);

(statearr_48280_49342[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46942__auto__ = null;
var cljs$core$async$state_machine__46942__auto____0 = (function (){
var statearr_48281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48281[(0)] = cljs$core$async$state_machine__46942__auto__);

(statearr_48281[(1)] = (1));

return statearr_48281;
});
var cljs$core$async$state_machine__46942__auto____1 = (function (state_48252){
while(true){
var ret_value__46943__auto__ = (function (){try{while(true){
var result__46944__auto__ = switch__46941__auto__(state_48252);
if(cljs.core.keyword_identical_QMARK_(result__46944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46944__auto__;
}
break;
}
}catch (e48282){var ex__46945__auto__ = e48282;
var statearr_48283_49343 = state_48252;
(statearr_48283_49343[(2)] = ex__46945__auto__);


if(cljs.core.seq((state_48252[(4)]))){
var statearr_48284_49344 = state_48252;
(statearr_48284_49344[(1)] = cljs.core.first((state_48252[(4)])));

} else {
throw ex__46945__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49345 = state_48252;
state_48252 = G__49345;
continue;
} else {
return ret_value__46943__auto__;
}
break;
}
});
cljs$core$async$state_machine__46942__auto__ = function(state_48252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46942__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46942__auto____1.call(this,state_48252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46942__auto____0;
cljs$core$async$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46942__auto____1;
return cljs$core$async$state_machine__46942__auto__;
})()
})();
var state__46976__auto__ = (function (){var statearr_48285 = f__46975__auto__();
(statearr_48285[(6)] = c__46974__auto___49311);

return statearr_48285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46976__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__48288 = arguments.length;
switch (G__48288) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46974__auto___49347 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46975__auto__ = (function (){var switch__46941__auto__ = (function (state_48320){
var state_val_48321 = (state_48320[(1)]);
if((state_val_48321 === (7))){
var inst_48300 = (state_48320[(7)]);
var inst_48299 = (state_48320[(8)]);
var inst_48299__$1 = (state_48320[(2)]);
var inst_48300__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48299__$1,(0),null);
var inst_48301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48299__$1,(1),null);
var inst_48302 = (inst_48300__$1 == null);
var state_48320__$1 = (function (){var statearr_48322 = state_48320;
(statearr_48322[(7)] = inst_48300__$1);

(statearr_48322[(9)] = inst_48301);

(statearr_48322[(8)] = inst_48299__$1);

return statearr_48322;
})();
if(cljs.core.truth_(inst_48302)){
var statearr_48323_49348 = state_48320__$1;
(statearr_48323_49348[(1)] = (8));

} else {
var statearr_48324_49349 = state_48320__$1;
(statearr_48324_49349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48321 === (1))){
var inst_48289 = cljs.core.vec(chs);
var inst_48290 = inst_48289;
var state_48320__$1 = (function (){var statearr_48325 = state_48320;
(statearr_48325[(10)] = inst_48290);

return statearr_48325;
})();
var statearr_48326_49352 = state_48320__$1;
(statearr_48326_49352[(2)] = null);

(statearr_48326_49352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48321 === (4))){
var inst_48290 = (state_48320[(10)]);
var state_48320__$1 = state_48320;
return cljs.core.async.ioc_alts_BANG_(state_48320__$1,(7),inst_48290);
} else {
if((state_val_48321 === (6))){
var inst_48316 = (state_48320[(2)]);
var state_48320__$1 = state_48320;
var statearr_48327_49353 = state_48320__$1;
(statearr_48327_49353[(2)] = inst_48316);

(statearr_48327_49353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48321 === (3))){
var inst_48318 = (state_48320[(2)]);
var state_48320__$1 = state_48320;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48320__$1,inst_48318);
} else {
if((state_val_48321 === (2))){
var inst_48290 = (state_48320[(10)]);
var inst_48292 = cljs.core.count(inst_48290);
var inst_48293 = (inst_48292 > (0));
var state_48320__$1 = state_48320;
if(cljs.core.truth_(inst_48293)){
var statearr_48329_49354 = state_48320__$1;
(statearr_48329_49354[(1)] = (4));

} else {
var statearr_48330_49355 = state_48320__$1;
(statearr_48330_49355[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48321 === (11))){
var inst_48290 = (state_48320[(10)]);
var inst_48309 = (state_48320[(2)]);
var tmp48328 = inst_48290;
var inst_48290__$1 = tmp48328;
var state_48320__$1 = (function (){var statearr_48331 = state_48320;
(statearr_48331[(11)] = inst_48309);

(statearr_48331[(10)] = inst_48290__$1);

return statearr_48331;
})();
var statearr_48332_49356 = state_48320__$1;
(statearr_48332_49356[(2)] = null);

(statearr_48332_49356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48321 === (9))){
var inst_48300 = (state_48320[(7)]);
var state_48320__$1 = state_48320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48320__$1,(11),out,inst_48300);
} else {
if((state_val_48321 === (5))){
var inst_48314 = cljs.core.async.close_BANG_(out);
var state_48320__$1 = state_48320;
var statearr_48333_49357 = state_48320__$1;
(statearr_48333_49357[(2)] = inst_48314);

(statearr_48333_49357[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48321 === (10))){
var inst_48312 = (state_48320[(2)]);
var state_48320__$1 = state_48320;
var statearr_48334_49358 = state_48320__$1;
(statearr_48334_49358[(2)] = inst_48312);

(statearr_48334_49358[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48321 === (8))){
var inst_48300 = (state_48320[(7)]);
var inst_48301 = (state_48320[(9)]);
var inst_48290 = (state_48320[(10)]);
var inst_48299 = (state_48320[(8)]);
var inst_48304 = (function (){var cs = inst_48290;
var vec__48295 = inst_48299;
var v = inst_48300;
var c = inst_48301;
return (function (p1__48286_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__48286_SHARP_);
});
})();
var inst_48305 = cljs.core.filterv(inst_48304,inst_48290);
var inst_48290__$1 = inst_48305;
var state_48320__$1 = (function (){var statearr_48335 = state_48320;
(statearr_48335[(10)] = inst_48290__$1);

return statearr_48335;
})();
var statearr_48336_49359 = state_48320__$1;
(statearr_48336_49359[(2)] = null);

(statearr_48336_49359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46942__auto__ = null;
var cljs$core$async$state_machine__46942__auto____0 = (function (){
var statearr_48337 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48337[(0)] = cljs$core$async$state_machine__46942__auto__);

(statearr_48337[(1)] = (1));

return statearr_48337;
});
var cljs$core$async$state_machine__46942__auto____1 = (function (state_48320){
while(true){
var ret_value__46943__auto__ = (function (){try{while(true){
var result__46944__auto__ = switch__46941__auto__(state_48320);
if(cljs.core.keyword_identical_QMARK_(result__46944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46944__auto__;
}
break;
}
}catch (e48338){var ex__46945__auto__ = e48338;
var statearr_48339_49360 = state_48320;
(statearr_48339_49360[(2)] = ex__46945__auto__);


if(cljs.core.seq((state_48320[(4)]))){
var statearr_48340_49361 = state_48320;
(statearr_48340_49361[(1)] = cljs.core.first((state_48320[(4)])));

} else {
throw ex__46945__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49362 = state_48320;
state_48320 = G__49362;
continue;
} else {
return ret_value__46943__auto__;
}
break;
}
});
cljs$core$async$state_machine__46942__auto__ = function(state_48320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46942__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46942__auto____1.call(this,state_48320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46942__auto____0;
cljs$core$async$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46942__auto____1;
return cljs$core$async$state_machine__46942__auto__;
})()
})();
var state__46976__auto__ = (function (){var statearr_48341 = f__46975__auto__();
(statearr_48341[(6)] = c__46974__auto___49347);

return statearr_48341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46976__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__48343 = arguments.length;
switch (G__48343) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46974__auto___49364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46975__auto__ = (function (){var switch__46941__auto__ = (function (state_48367){
var state_val_48368 = (state_48367[(1)]);
if((state_val_48368 === (7))){
var inst_48349 = (state_48367[(7)]);
var inst_48349__$1 = (state_48367[(2)]);
var inst_48350 = (inst_48349__$1 == null);
var inst_48351 = cljs.core.not(inst_48350);
var state_48367__$1 = (function (){var statearr_48369 = state_48367;
(statearr_48369[(7)] = inst_48349__$1);

return statearr_48369;
})();
if(inst_48351){
var statearr_48370_49365 = state_48367__$1;
(statearr_48370_49365[(1)] = (8));

} else {
var statearr_48371_49366 = state_48367__$1;
(statearr_48371_49366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (1))){
var inst_48344 = (0);
var state_48367__$1 = (function (){var statearr_48372 = state_48367;
(statearr_48372[(8)] = inst_48344);

return statearr_48372;
})();
var statearr_48373_49373 = state_48367__$1;
(statearr_48373_49373[(2)] = null);

(statearr_48373_49373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (4))){
var state_48367__$1 = state_48367;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48367__$1,(7),ch);
} else {
if((state_val_48368 === (6))){
var inst_48362 = (state_48367[(2)]);
var state_48367__$1 = state_48367;
var statearr_48374_49374 = state_48367__$1;
(statearr_48374_49374[(2)] = inst_48362);

(statearr_48374_49374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (3))){
var inst_48364 = (state_48367[(2)]);
var inst_48365 = cljs.core.async.close_BANG_(out);
var state_48367__$1 = (function (){var statearr_48375 = state_48367;
(statearr_48375[(9)] = inst_48364);

return statearr_48375;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48367__$1,inst_48365);
} else {
if((state_val_48368 === (2))){
var inst_48344 = (state_48367[(8)]);
var inst_48346 = (inst_48344 < n);
var state_48367__$1 = state_48367;
if(cljs.core.truth_(inst_48346)){
var statearr_48376_49379 = state_48367__$1;
(statearr_48376_49379[(1)] = (4));

} else {
var statearr_48377_49380 = state_48367__$1;
(statearr_48377_49380[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (11))){
var inst_48344 = (state_48367[(8)]);
var inst_48354 = (state_48367[(2)]);
var inst_48355 = (inst_48344 + (1));
var inst_48344__$1 = inst_48355;
var state_48367__$1 = (function (){var statearr_48378 = state_48367;
(statearr_48378[(8)] = inst_48344__$1);

(statearr_48378[(10)] = inst_48354);

return statearr_48378;
})();
var statearr_48379_49381 = state_48367__$1;
(statearr_48379_49381[(2)] = null);

(statearr_48379_49381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (9))){
var state_48367__$1 = state_48367;
var statearr_48380_49382 = state_48367__$1;
(statearr_48380_49382[(2)] = null);

(statearr_48380_49382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (5))){
var state_48367__$1 = state_48367;
var statearr_48381_49384 = state_48367__$1;
(statearr_48381_49384[(2)] = null);

(statearr_48381_49384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (10))){
var inst_48359 = (state_48367[(2)]);
var state_48367__$1 = state_48367;
var statearr_48382_49386 = state_48367__$1;
(statearr_48382_49386[(2)] = inst_48359);

(statearr_48382_49386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48368 === (8))){
var inst_48349 = (state_48367[(7)]);
var state_48367__$1 = state_48367;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48367__$1,(11),out,inst_48349);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46942__auto__ = null;
var cljs$core$async$state_machine__46942__auto____0 = (function (){
var statearr_48383 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48383[(0)] = cljs$core$async$state_machine__46942__auto__);

(statearr_48383[(1)] = (1));

return statearr_48383;
});
var cljs$core$async$state_machine__46942__auto____1 = (function (state_48367){
while(true){
var ret_value__46943__auto__ = (function (){try{while(true){
var result__46944__auto__ = switch__46941__auto__(state_48367);
if(cljs.core.keyword_identical_QMARK_(result__46944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46944__auto__;
}
break;
}
}catch (e48384){var ex__46945__auto__ = e48384;
var statearr_48385_49397 = state_48367;
(statearr_48385_49397[(2)] = ex__46945__auto__);


if(cljs.core.seq((state_48367[(4)]))){
var statearr_48386_49402 = state_48367;
(statearr_48386_49402[(1)] = cljs.core.first((state_48367[(4)])));

} else {
throw ex__46945__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49404 = state_48367;
state_48367 = G__49404;
continue;
} else {
return ret_value__46943__auto__;
}
break;
}
});
cljs$core$async$state_machine__46942__auto__ = function(state_48367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46942__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46942__auto____1.call(this,state_48367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46942__auto____0;
cljs$core$async$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46942__auto____1;
return cljs$core$async$state_machine__46942__auto__;
})()
})();
var state__46976__auto__ = (function (){var statearr_48387 = f__46975__auto__();
(statearr_48387[(6)] = c__46974__auto___49364);

return statearr_48387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46976__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48389 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48389 = (function (f,ch,meta48390){
this.f = f;
this.ch = ch;
this.meta48390 = meta48390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48391,meta48390__$1){
var self__ = this;
var _48391__$1 = this;
return (new cljs.core.async.t_cljs$core$async48389(self__.f,self__.ch,meta48390__$1));
}));

(cljs.core.async.t_cljs$core$async48389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48391){
var self__ = this;
var _48391__$1 = this;
return self__.meta48390;
}));

(cljs.core.async.t_cljs$core$async48389.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48389.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48389.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48389.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48389.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48392 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48392 = (function (f,ch,meta48390,_,fn1,meta48393){
this.f = f;
this.ch = ch;
this.meta48390 = meta48390;
this._ = _;
this.fn1 = fn1;
this.meta48393 = meta48393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48394,meta48393__$1){
var self__ = this;
var _48394__$1 = this;
return (new cljs.core.async.t_cljs$core$async48392(self__.f,self__.ch,self__.meta48390,self__._,self__.fn1,meta48393__$1));
}));

(cljs.core.async.t_cljs$core$async48392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48394){
var self__ = this;
var _48394__$1 = this;
return self__.meta48393;
}));

(cljs.core.async.t_cljs$core$async48392.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48392.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async48392.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48392.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__48388_SHARP_){
var G__48395 = (((p1__48388_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__48388_SHARP_) : self__.f.call(null,p1__48388_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__48395) : f1.call(null,G__48395));
});
}));

(cljs.core.async.t_cljs$core$async48392.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48390","meta48390",-1970911829,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48389","cljs.core.async/t_cljs$core$async48389",512384406,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48393","meta48393",917792971,null)], null);
}));

(cljs.core.async.t_cljs$core$async48392.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48392");

(cljs.core.async.t_cljs$core$async48392.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48392");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48392.
 */
cljs.core.async.__GT_t_cljs$core$async48392 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48392(f__$1,ch__$1,meta48390__$1,___$2,fn1__$1,meta48393){
return (new cljs.core.async.t_cljs$core$async48392(f__$1,ch__$1,meta48390__$1,___$2,fn1__$1,meta48393));
});

}

return (new cljs.core.async.t_cljs$core$async48392(self__.f,self__.ch,self__.meta48390,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__48396 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48396) : self__.f.call(null,G__48396));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async48389.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48389.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async48389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48390","meta48390",-1970911829,null)], null);
}));

(cljs.core.async.t_cljs$core$async48389.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48389");

(cljs.core.async.t_cljs$core$async48389.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48389");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48389.
 */
cljs.core.async.__GT_t_cljs$core$async48389 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48389(f__$1,ch__$1,meta48390){
return (new cljs.core.async.t_cljs$core$async48389(f__$1,ch__$1,meta48390));
});

}

return (new cljs.core.async.t_cljs$core$async48389(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48397 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48397 = (function (f,ch,meta48398){
this.f = f;
this.ch = ch;
this.meta48398 = meta48398;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48399,meta48398__$1){
var self__ = this;
var _48399__$1 = this;
return (new cljs.core.async.t_cljs$core$async48397(self__.f,self__.ch,meta48398__$1));
}));

(cljs.core.async.t_cljs$core$async48397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48399){
var self__ = this;
var _48399__$1 = this;
return self__.meta48398;
}));

(cljs.core.async.t_cljs$core$async48397.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48397.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48397.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48397.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48397.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48397.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async48397.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48398","meta48398",-1760416746,null)], null);
}));

(cljs.core.async.t_cljs$core$async48397.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48397.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48397");

(cljs.core.async.t_cljs$core$async48397.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48397");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48397.
 */
cljs.core.async.__GT_t_cljs$core$async48397 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48397(f__$1,ch__$1,meta48398){
return (new cljs.core.async.t_cljs$core$async48397(f__$1,ch__$1,meta48398));
});

}

return (new cljs.core.async.t_cljs$core$async48397(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48400 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48400 = (function (p,ch,meta48401){
this.p = p;
this.ch = ch;
this.meta48401 = meta48401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48402,meta48401__$1){
var self__ = this;
var _48402__$1 = this;
return (new cljs.core.async.t_cljs$core$async48400(self__.p,self__.ch,meta48401__$1));
}));

(cljs.core.async.t_cljs$core$async48400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48402){
var self__ = this;
var _48402__$1 = this;
return self__.meta48401;
}));

(cljs.core.async.t_cljs$core$async48400.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48400.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48400.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48400.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48400.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48400.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48400.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async48400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48401","meta48401",892408907,null)], null);
}));

(cljs.core.async.t_cljs$core$async48400.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48400.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48400");

(cljs.core.async.t_cljs$core$async48400.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48400");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48400.
 */
cljs.core.async.__GT_t_cljs$core$async48400 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48400(p__$1,ch__$1,meta48401){
return (new cljs.core.async.t_cljs$core$async48400(p__$1,ch__$1,meta48401));
});

}

return (new cljs.core.async.t_cljs$core$async48400(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__48404 = arguments.length;
switch (G__48404) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46974__auto___49451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46975__auto__ = (function (){var switch__46941__auto__ = (function (state_48425){
var state_val_48426 = (state_48425[(1)]);
if((state_val_48426 === (7))){
var inst_48421 = (state_48425[(2)]);
var state_48425__$1 = state_48425;
var statearr_48427_49452 = state_48425__$1;
(statearr_48427_49452[(2)] = inst_48421);

(statearr_48427_49452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48426 === (1))){
var state_48425__$1 = state_48425;
var statearr_48428_49453 = state_48425__$1;
(statearr_48428_49453[(2)] = null);

(statearr_48428_49453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48426 === (4))){
var inst_48407 = (state_48425[(7)]);
var inst_48407__$1 = (state_48425[(2)]);
var inst_48408 = (inst_48407__$1 == null);
var state_48425__$1 = (function (){var statearr_48429 = state_48425;
(statearr_48429[(7)] = inst_48407__$1);

return statearr_48429;
})();
if(cljs.core.truth_(inst_48408)){
var statearr_48430_49454 = state_48425__$1;
(statearr_48430_49454[(1)] = (5));

} else {
var statearr_48431_49455 = state_48425__$1;
(statearr_48431_49455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48426 === (6))){
var inst_48407 = (state_48425[(7)]);
var inst_48412 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48407) : p.call(null,inst_48407));
var state_48425__$1 = state_48425;
if(cljs.core.truth_(inst_48412)){
var statearr_48432_49456 = state_48425__$1;
(statearr_48432_49456[(1)] = (8));

} else {
var statearr_48433_49457 = state_48425__$1;
(statearr_48433_49457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48426 === (3))){
var inst_48423 = (state_48425[(2)]);
var state_48425__$1 = state_48425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48425__$1,inst_48423);
} else {
if((state_val_48426 === (2))){
var state_48425__$1 = state_48425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48425__$1,(4),ch);
} else {
if((state_val_48426 === (11))){
var inst_48415 = (state_48425[(2)]);
var state_48425__$1 = state_48425;
var statearr_48434_49462 = state_48425__$1;
(statearr_48434_49462[(2)] = inst_48415);

(statearr_48434_49462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48426 === (9))){
var state_48425__$1 = state_48425;
var statearr_48435_49463 = state_48425__$1;
(statearr_48435_49463[(2)] = null);

(statearr_48435_49463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48426 === (5))){
var inst_48410 = cljs.core.async.close_BANG_(out);
var state_48425__$1 = state_48425;
var statearr_48436_49464 = state_48425__$1;
(statearr_48436_49464[(2)] = inst_48410);

(statearr_48436_49464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48426 === (10))){
var inst_48418 = (state_48425[(2)]);
var state_48425__$1 = (function (){var statearr_48437 = state_48425;
(statearr_48437[(8)] = inst_48418);

return statearr_48437;
})();
var statearr_48438_49466 = state_48425__$1;
(statearr_48438_49466[(2)] = null);

(statearr_48438_49466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48426 === (8))){
var inst_48407 = (state_48425[(7)]);
var state_48425__$1 = state_48425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48425__$1,(11),out,inst_48407);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46942__auto__ = null;
var cljs$core$async$state_machine__46942__auto____0 = (function (){
var statearr_48439 = [null,null,null,null,null,null,null,null,null];
(statearr_48439[(0)] = cljs$core$async$state_machine__46942__auto__);

(statearr_48439[(1)] = (1));

return statearr_48439;
});
var cljs$core$async$state_machine__46942__auto____1 = (function (state_48425){
while(true){
var ret_value__46943__auto__ = (function (){try{while(true){
var result__46944__auto__ = switch__46941__auto__(state_48425);
if(cljs.core.keyword_identical_QMARK_(result__46944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46944__auto__;
}
break;
}
}catch (e48440){var ex__46945__auto__ = e48440;
var statearr_48441_49467 = state_48425;
(statearr_48441_49467[(2)] = ex__46945__auto__);


if(cljs.core.seq((state_48425[(4)]))){
var statearr_48442_49468 = state_48425;
(statearr_48442_49468[(1)] = cljs.core.first((state_48425[(4)])));

} else {
throw ex__46945__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49469 = state_48425;
state_48425 = G__49469;
continue;
} else {
return ret_value__46943__auto__;
}
break;
}
});
cljs$core$async$state_machine__46942__auto__ = function(state_48425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46942__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46942__auto____1.call(this,state_48425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46942__auto____0;
cljs$core$async$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46942__auto____1;
return cljs$core$async$state_machine__46942__auto__;
})()
})();
var state__46976__auto__ = (function (){var statearr_48443 = f__46975__auto__();
(statearr_48443[(6)] = c__46974__auto___49451);

return statearr_48443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46976__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48445 = arguments.length;
switch (G__48445) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__46974__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46975__auto__ = (function (){var switch__46941__auto__ = (function (state_48507){
var state_val_48508 = (state_48507[(1)]);
if((state_val_48508 === (7))){
var inst_48503 = (state_48507[(2)]);
var state_48507__$1 = state_48507;
var statearr_48509_49512 = state_48507__$1;
(statearr_48509_49512[(2)] = inst_48503);

(statearr_48509_49512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (20))){
var inst_48473 = (state_48507[(7)]);
var inst_48484 = (state_48507[(2)]);
var inst_48485 = cljs.core.next(inst_48473);
var inst_48459 = inst_48485;
var inst_48460 = null;
var inst_48461 = (0);
var inst_48462 = (0);
var state_48507__$1 = (function (){var statearr_48510 = state_48507;
(statearr_48510[(8)] = inst_48459);

(statearr_48510[(9)] = inst_48461);

(statearr_48510[(10)] = inst_48462);

(statearr_48510[(11)] = inst_48460);

(statearr_48510[(12)] = inst_48484);

return statearr_48510;
})();
var statearr_48511_49514 = state_48507__$1;
(statearr_48511_49514[(2)] = null);

(statearr_48511_49514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (1))){
var state_48507__$1 = state_48507;
var statearr_48512_49517 = state_48507__$1;
(statearr_48512_49517[(2)] = null);

(statearr_48512_49517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (4))){
var inst_48448 = (state_48507[(13)]);
var inst_48448__$1 = (state_48507[(2)]);
var inst_48449 = (inst_48448__$1 == null);
var state_48507__$1 = (function (){var statearr_48513 = state_48507;
(statearr_48513[(13)] = inst_48448__$1);

return statearr_48513;
})();
if(cljs.core.truth_(inst_48449)){
var statearr_48514_49518 = state_48507__$1;
(statearr_48514_49518[(1)] = (5));

} else {
var statearr_48515_49519 = state_48507__$1;
(statearr_48515_49519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (15))){
var state_48507__$1 = state_48507;
var statearr_48519_49520 = state_48507__$1;
(statearr_48519_49520[(2)] = null);

(statearr_48519_49520[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (21))){
var state_48507__$1 = state_48507;
var statearr_48520_49521 = state_48507__$1;
(statearr_48520_49521[(2)] = null);

(statearr_48520_49521[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (13))){
var inst_48459 = (state_48507[(8)]);
var inst_48461 = (state_48507[(9)]);
var inst_48462 = (state_48507[(10)]);
var inst_48460 = (state_48507[(11)]);
var inst_48469 = (state_48507[(2)]);
var inst_48470 = (inst_48462 + (1));
var tmp48516 = inst_48459;
var tmp48517 = inst_48461;
var tmp48518 = inst_48460;
var inst_48459__$1 = tmp48516;
var inst_48460__$1 = tmp48518;
var inst_48461__$1 = tmp48517;
var inst_48462__$1 = inst_48470;
var state_48507__$1 = (function (){var statearr_48521 = state_48507;
(statearr_48521[(8)] = inst_48459__$1);

(statearr_48521[(9)] = inst_48461__$1);

(statearr_48521[(10)] = inst_48462__$1);

(statearr_48521[(14)] = inst_48469);

(statearr_48521[(11)] = inst_48460__$1);

return statearr_48521;
})();
var statearr_48522_49527 = state_48507__$1;
(statearr_48522_49527[(2)] = null);

(statearr_48522_49527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (22))){
var state_48507__$1 = state_48507;
var statearr_48523_49530 = state_48507__$1;
(statearr_48523_49530[(2)] = null);

(statearr_48523_49530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (6))){
var inst_48448 = (state_48507[(13)]);
var inst_48457 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48448) : f.call(null,inst_48448));
var inst_48458 = cljs.core.seq(inst_48457);
var inst_48459 = inst_48458;
var inst_48460 = null;
var inst_48461 = (0);
var inst_48462 = (0);
var state_48507__$1 = (function (){var statearr_48524 = state_48507;
(statearr_48524[(8)] = inst_48459);

(statearr_48524[(9)] = inst_48461);

(statearr_48524[(10)] = inst_48462);

(statearr_48524[(11)] = inst_48460);

return statearr_48524;
})();
var statearr_48525_49542 = state_48507__$1;
(statearr_48525_49542[(2)] = null);

(statearr_48525_49542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (17))){
var inst_48473 = (state_48507[(7)]);
var inst_48477 = cljs.core.chunk_first(inst_48473);
var inst_48478 = cljs.core.chunk_rest(inst_48473);
var inst_48479 = cljs.core.count(inst_48477);
var inst_48459 = inst_48478;
var inst_48460 = inst_48477;
var inst_48461 = inst_48479;
var inst_48462 = (0);
var state_48507__$1 = (function (){var statearr_48526 = state_48507;
(statearr_48526[(8)] = inst_48459);

(statearr_48526[(9)] = inst_48461);

(statearr_48526[(10)] = inst_48462);

(statearr_48526[(11)] = inst_48460);

return statearr_48526;
})();
var statearr_48527_49559 = state_48507__$1;
(statearr_48527_49559[(2)] = null);

(statearr_48527_49559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (3))){
var inst_48505 = (state_48507[(2)]);
var state_48507__$1 = state_48507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48507__$1,inst_48505);
} else {
if((state_val_48508 === (12))){
var inst_48493 = (state_48507[(2)]);
var state_48507__$1 = state_48507;
var statearr_48528_49572 = state_48507__$1;
(statearr_48528_49572[(2)] = inst_48493);

(statearr_48528_49572[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (2))){
var state_48507__$1 = state_48507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48507__$1,(4),in$);
} else {
if((state_val_48508 === (23))){
var inst_48501 = (state_48507[(2)]);
var state_48507__$1 = state_48507;
var statearr_48529_49573 = state_48507__$1;
(statearr_48529_49573[(2)] = inst_48501);

(statearr_48529_49573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (19))){
var inst_48488 = (state_48507[(2)]);
var state_48507__$1 = state_48507;
var statearr_48530_49574 = state_48507__$1;
(statearr_48530_49574[(2)] = inst_48488);

(statearr_48530_49574[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (11))){
var inst_48459 = (state_48507[(8)]);
var inst_48473 = (state_48507[(7)]);
var inst_48473__$1 = cljs.core.seq(inst_48459);
var state_48507__$1 = (function (){var statearr_48531 = state_48507;
(statearr_48531[(7)] = inst_48473__$1);

return statearr_48531;
})();
if(inst_48473__$1){
var statearr_48532_49600 = state_48507__$1;
(statearr_48532_49600[(1)] = (14));

} else {
var statearr_48533_49601 = state_48507__$1;
(statearr_48533_49601[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (9))){
var inst_48495 = (state_48507[(2)]);
var inst_48496 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_48507__$1 = (function (){var statearr_48534 = state_48507;
(statearr_48534[(15)] = inst_48495);

return statearr_48534;
})();
if(cljs.core.truth_(inst_48496)){
var statearr_48535_49602 = state_48507__$1;
(statearr_48535_49602[(1)] = (21));

} else {
var statearr_48536_49603 = state_48507__$1;
(statearr_48536_49603[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (5))){
var inst_48451 = cljs.core.async.close_BANG_(out);
var state_48507__$1 = state_48507;
var statearr_48537_49604 = state_48507__$1;
(statearr_48537_49604[(2)] = inst_48451);

(statearr_48537_49604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (14))){
var inst_48473 = (state_48507[(7)]);
var inst_48475 = cljs.core.chunked_seq_QMARK_(inst_48473);
var state_48507__$1 = state_48507;
if(inst_48475){
var statearr_48538_49606 = state_48507__$1;
(statearr_48538_49606[(1)] = (17));

} else {
var statearr_48539_49607 = state_48507__$1;
(statearr_48539_49607[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (16))){
var inst_48491 = (state_48507[(2)]);
var state_48507__$1 = state_48507;
var statearr_48540_49608 = state_48507__$1;
(statearr_48540_49608[(2)] = inst_48491);

(statearr_48540_49608[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (10))){
var inst_48462 = (state_48507[(10)]);
var inst_48460 = (state_48507[(11)]);
var inst_48467 = cljs.core._nth(inst_48460,inst_48462);
var state_48507__$1 = state_48507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48507__$1,(13),out,inst_48467);
} else {
if((state_val_48508 === (18))){
var inst_48473 = (state_48507[(7)]);
var inst_48482 = cljs.core.first(inst_48473);
var state_48507__$1 = state_48507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48507__$1,(20),out,inst_48482);
} else {
if((state_val_48508 === (8))){
var inst_48461 = (state_48507[(9)]);
var inst_48462 = (state_48507[(10)]);
var inst_48464 = (inst_48462 < inst_48461);
var inst_48465 = inst_48464;
var state_48507__$1 = state_48507;
if(cljs.core.truth_(inst_48465)){
var statearr_48541_49612 = state_48507__$1;
(statearr_48541_49612[(1)] = (10));

} else {
var statearr_48542_49613 = state_48507__$1;
(statearr_48542_49613[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46942__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46942__auto____0 = (function (){
var statearr_48543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48543[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46942__auto__);

(statearr_48543[(1)] = (1));

return statearr_48543;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46942__auto____1 = (function (state_48507){
while(true){
var ret_value__46943__auto__ = (function (){try{while(true){
var result__46944__auto__ = switch__46941__auto__(state_48507);
if(cljs.core.keyword_identical_QMARK_(result__46944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46944__auto__;
}
break;
}
}catch (e48544){var ex__46945__auto__ = e48544;
var statearr_48545_49617 = state_48507;
(statearr_48545_49617[(2)] = ex__46945__auto__);


if(cljs.core.seq((state_48507[(4)]))){
var statearr_48546_49621 = state_48507;
(statearr_48546_49621[(1)] = cljs.core.first((state_48507[(4)])));

} else {
throw ex__46945__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49622 = state_48507;
state_48507 = G__49622;
continue;
} else {
return ret_value__46943__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46942__auto__ = function(state_48507){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46942__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46942__auto____1.call(this,state_48507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46942__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46942__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46942__auto__;
})()
})();
var state__46976__auto__ = (function (){var statearr_48547 = f__46975__auto__();
(statearr_48547[(6)] = c__46974__auto__);

return statearr_48547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46976__auto__);
}));

return c__46974__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48549 = arguments.length;
switch (G__48549) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__48551 = arguments.length;
switch (G__48551) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__48553 = arguments.length;
switch (G__48553) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46974__auto___49679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46975__auto__ = (function (){var switch__46941__auto__ = (function (state_48577){
var state_val_48578 = (state_48577[(1)]);
if((state_val_48578 === (7))){
var inst_48572 = (state_48577[(2)]);
var state_48577__$1 = state_48577;
var statearr_48579_49680 = state_48577__$1;
(statearr_48579_49680[(2)] = inst_48572);

(statearr_48579_49680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48578 === (1))){
var inst_48554 = null;
var state_48577__$1 = (function (){var statearr_48580 = state_48577;
(statearr_48580[(7)] = inst_48554);

return statearr_48580;
})();
var statearr_48581_49682 = state_48577__$1;
(statearr_48581_49682[(2)] = null);

(statearr_48581_49682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48578 === (4))){
var inst_48557 = (state_48577[(8)]);
var inst_48557__$1 = (state_48577[(2)]);
var inst_48558 = (inst_48557__$1 == null);
var inst_48559 = cljs.core.not(inst_48558);
var state_48577__$1 = (function (){var statearr_48582 = state_48577;
(statearr_48582[(8)] = inst_48557__$1);

return statearr_48582;
})();
if(inst_48559){
var statearr_48583_49687 = state_48577__$1;
(statearr_48583_49687[(1)] = (5));

} else {
var statearr_48584_49688 = state_48577__$1;
(statearr_48584_49688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48578 === (6))){
var state_48577__$1 = state_48577;
var statearr_48585_49695 = state_48577__$1;
(statearr_48585_49695[(2)] = null);

(statearr_48585_49695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48578 === (3))){
var inst_48574 = (state_48577[(2)]);
var inst_48575 = cljs.core.async.close_BANG_(out);
var state_48577__$1 = (function (){var statearr_48586 = state_48577;
(statearr_48586[(9)] = inst_48574);

return statearr_48586;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48577__$1,inst_48575);
} else {
if((state_val_48578 === (2))){
var state_48577__$1 = state_48577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48577__$1,(4),ch);
} else {
if((state_val_48578 === (11))){
var inst_48557 = (state_48577[(8)]);
var inst_48566 = (state_48577[(2)]);
var inst_48554 = inst_48557;
var state_48577__$1 = (function (){var statearr_48587 = state_48577;
(statearr_48587[(10)] = inst_48566);

(statearr_48587[(7)] = inst_48554);

return statearr_48587;
})();
var statearr_48588_49701 = state_48577__$1;
(statearr_48588_49701[(2)] = null);

(statearr_48588_49701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48578 === (9))){
var inst_48557 = (state_48577[(8)]);
var state_48577__$1 = state_48577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48577__$1,(11),out,inst_48557);
} else {
if((state_val_48578 === (5))){
var inst_48557 = (state_48577[(8)]);
var inst_48554 = (state_48577[(7)]);
var inst_48561 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48557,inst_48554);
var state_48577__$1 = state_48577;
if(inst_48561){
var statearr_48590_49703 = state_48577__$1;
(statearr_48590_49703[(1)] = (8));

} else {
var statearr_48591_49704 = state_48577__$1;
(statearr_48591_49704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48578 === (10))){
var inst_48569 = (state_48577[(2)]);
var state_48577__$1 = state_48577;
var statearr_48592_49705 = state_48577__$1;
(statearr_48592_49705[(2)] = inst_48569);

(statearr_48592_49705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48578 === (8))){
var inst_48554 = (state_48577[(7)]);
var tmp48589 = inst_48554;
var inst_48554__$1 = tmp48589;
var state_48577__$1 = (function (){var statearr_48593 = state_48577;
(statearr_48593[(7)] = inst_48554__$1);

return statearr_48593;
})();
var statearr_48594_49706 = state_48577__$1;
(statearr_48594_49706[(2)] = null);

(statearr_48594_49706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46942__auto__ = null;
var cljs$core$async$state_machine__46942__auto____0 = (function (){
var statearr_48595 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48595[(0)] = cljs$core$async$state_machine__46942__auto__);

(statearr_48595[(1)] = (1));

return statearr_48595;
});
var cljs$core$async$state_machine__46942__auto____1 = (function (state_48577){
while(true){
var ret_value__46943__auto__ = (function (){try{while(true){
var result__46944__auto__ = switch__46941__auto__(state_48577);
if(cljs.core.keyword_identical_QMARK_(result__46944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46944__auto__;
}
break;
}
}catch (e48596){var ex__46945__auto__ = e48596;
var statearr_48597_49707 = state_48577;
(statearr_48597_49707[(2)] = ex__46945__auto__);


if(cljs.core.seq((state_48577[(4)]))){
var statearr_48598_49708 = state_48577;
(statearr_48598_49708[(1)] = cljs.core.first((state_48577[(4)])));

} else {
throw ex__46945__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49712 = state_48577;
state_48577 = G__49712;
continue;
} else {
return ret_value__46943__auto__;
}
break;
}
});
cljs$core$async$state_machine__46942__auto__ = function(state_48577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46942__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46942__auto____1.call(this,state_48577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46942__auto____0;
cljs$core$async$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46942__auto____1;
return cljs$core$async$state_machine__46942__auto__;
})()
})();
var state__46976__auto__ = (function (){var statearr_48599 = f__46975__auto__();
(statearr_48599[(6)] = c__46974__auto___49679);

return statearr_48599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46976__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48601 = arguments.length;
switch (G__48601) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46974__auto___49719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46975__auto__ = (function (){var switch__46941__auto__ = (function (state_48639){
var state_val_48640 = (state_48639[(1)]);
if((state_val_48640 === (7))){
var inst_48635 = (state_48639[(2)]);
var state_48639__$1 = state_48639;
var statearr_48641_49720 = state_48639__$1;
(statearr_48641_49720[(2)] = inst_48635);

(statearr_48641_49720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48640 === (1))){
var inst_48602 = (new Array(n));
var inst_48603 = inst_48602;
var inst_48604 = (0);
var state_48639__$1 = (function (){var statearr_48642 = state_48639;
(statearr_48642[(7)] = inst_48604);

(statearr_48642[(8)] = inst_48603);

return statearr_48642;
})();
var statearr_48643_49721 = state_48639__$1;
(statearr_48643_49721[(2)] = null);

(statearr_48643_49721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48640 === (4))){
var inst_48607 = (state_48639[(9)]);
var inst_48607__$1 = (state_48639[(2)]);
var inst_48608 = (inst_48607__$1 == null);
var inst_48609 = cljs.core.not(inst_48608);
var state_48639__$1 = (function (){var statearr_48644 = state_48639;
(statearr_48644[(9)] = inst_48607__$1);

return statearr_48644;
})();
if(inst_48609){
var statearr_48645_49723 = state_48639__$1;
(statearr_48645_49723[(1)] = (5));

} else {
var statearr_48646_49724 = state_48639__$1;
(statearr_48646_49724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48640 === (15))){
var inst_48629 = (state_48639[(2)]);
var state_48639__$1 = state_48639;
var statearr_48647_49725 = state_48639__$1;
(statearr_48647_49725[(2)] = inst_48629);

(statearr_48647_49725[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48640 === (13))){
var state_48639__$1 = state_48639;
var statearr_48648_49726 = state_48639__$1;
(statearr_48648_49726[(2)] = null);

(statearr_48648_49726[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48640 === (6))){
var inst_48604 = (state_48639[(7)]);
var inst_48625 = (inst_48604 > (0));
var state_48639__$1 = state_48639;
if(cljs.core.truth_(inst_48625)){
var statearr_48649_49731 = state_48639__$1;
(statearr_48649_49731[(1)] = (12));

} else {
var statearr_48650_49732 = state_48639__$1;
(statearr_48650_49732[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48640 === (3))){
var inst_48637 = (state_48639[(2)]);
var state_48639__$1 = state_48639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48639__$1,inst_48637);
} else {
if((state_val_48640 === (12))){
var inst_48603 = (state_48639[(8)]);
var inst_48627 = cljs.core.vec(inst_48603);
var state_48639__$1 = state_48639;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48639__$1,(15),out,inst_48627);
} else {
if((state_val_48640 === (2))){
var state_48639__$1 = state_48639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48639__$1,(4),ch);
} else {
if((state_val_48640 === (11))){
var inst_48619 = (state_48639[(2)]);
var inst_48620 = (new Array(n));
var inst_48603 = inst_48620;
var inst_48604 = (0);
var state_48639__$1 = (function (){var statearr_48651 = state_48639;
(statearr_48651[(7)] = inst_48604);

(statearr_48651[(10)] = inst_48619);

(statearr_48651[(8)] = inst_48603);

return statearr_48651;
})();
var statearr_48652_49733 = state_48639__$1;
(statearr_48652_49733[(2)] = null);

(statearr_48652_49733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48640 === (9))){
var inst_48603 = (state_48639[(8)]);
var inst_48617 = cljs.core.vec(inst_48603);
var state_48639__$1 = state_48639;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48639__$1,(11),out,inst_48617);
} else {
if((state_val_48640 === (5))){
var inst_48604 = (state_48639[(7)]);
var inst_48607 = (state_48639[(9)]);
var inst_48612 = (state_48639[(11)]);
var inst_48603 = (state_48639[(8)]);
var inst_48611 = (inst_48603[inst_48604] = inst_48607);
var inst_48612__$1 = (inst_48604 + (1));
var inst_48613 = (inst_48612__$1 < n);
var state_48639__$1 = (function (){var statearr_48653 = state_48639;
(statearr_48653[(12)] = inst_48611);

(statearr_48653[(11)] = inst_48612__$1);

return statearr_48653;
})();
if(cljs.core.truth_(inst_48613)){
var statearr_48654_49735 = state_48639__$1;
(statearr_48654_49735[(1)] = (8));

} else {
var statearr_48655_49736 = state_48639__$1;
(statearr_48655_49736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48640 === (14))){
var inst_48632 = (state_48639[(2)]);
var inst_48633 = cljs.core.async.close_BANG_(out);
var state_48639__$1 = (function (){var statearr_48657 = state_48639;
(statearr_48657[(13)] = inst_48632);

return statearr_48657;
})();
var statearr_48658_49737 = state_48639__$1;
(statearr_48658_49737[(2)] = inst_48633);

(statearr_48658_49737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48640 === (10))){
var inst_48623 = (state_48639[(2)]);
var state_48639__$1 = state_48639;
var statearr_48659_49738 = state_48639__$1;
(statearr_48659_49738[(2)] = inst_48623);

(statearr_48659_49738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48640 === (8))){
var inst_48612 = (state_48639[(11)]);
var inst_48603 = (state_48639[(8)]);
var tmp48656 = inst_48603;
var inst_48603__$1 = tmp48656;
var inst_48604 = inst_48612;
var state_48639__$1 = (function (){var statearr_48660 = state_48639;
(statearr_48660[(7)] = inst_48604);

(statearr_48660[(8)] = inst_48603__$1);

return statearr_48660;
})();
var statearr_48661_49742 = state_48639__$1;
(statearr_48661_49742[(2)] = null);

(statearr_48661_49742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46942__auto__ = null;
var cljs$core$async$state_machine__46942__auto____0 = (function (){
var statearr_48662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48662[(0)] = cljs$core$async$state_machine__46942__auto__);

(statearr_48662[(1)] = (1));

return statearr_48662;
});
var cljs$core$async$state_machine__46942__auto____1 = (function (state_48639){
while(true){
var ret_value__46943__auto__ = (function (){try{while(true){
var result__46944__auto__ = switch__46941__auto__(state_48639);
if(cljs.core.keyword_identical_QMARK_(result__46944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46944__auto__;
}
break;
}
}catch (e48663){var ex__46945__auto__ = e48663;
var statearr_48664_49743 = state_48639;
(statearr_48664_49743[(2)] = ex__46945__auto__);


if(cljs.core.seq((state_48639[(4)]))){
var statearr_48665_49744 = state_48639;
(statearr_48665_49744[(1)] = cljs.core.first((state_48639[(4)])));

} else {
throw ex__46945__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49745 = state_48639;
state_48639 = G__49745;
continue;
} else {
return ret_value__46943__auto__;
}
break;
}
});
cljs$core$async$state_machine__46942__auto__ = function(state_48639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46942__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46942__auto____1.call(this,state_48639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46942__auto____0;
cljs$core$async$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46942__auto____1;
return cljs$core$async$state_machine__46942__auto__;
})()
})();
var state__46976__auto__ = (function (){var statearr_48666 = f__46975__auto__();
(statearr_48666[(6)] = c__46974__auto___49719);

return statearr_48666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46976__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48668 = arguments.length;
switch (G__48668) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46974__auto___49747 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46975__auto__ = (function (){var switch__46941__auto__ = (function (state_48710){
var state_val_48711 = (state_48710[(1)]);
if((state_val_48711 === (7))){
var inst_48706 = (state_48710[(2)]);
var state_48710__$1 = state_48710;
var statearr_48712_49748 = state_48710__$1;
(statearr_48712_49748[(2)] = inst_48706);

(statearr_48712_49748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48711 === (1))){
var inst_48669 = [];
var inst_48670 = inst_48669;
var inst_48671 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48710__$1 = (function (){var statearr_48713 = state_48710;
(statearr_48713[(7)] = inst_48671);

(statearr_48713[(8)] = inst_48670);

return statearr_48713;
})();
var statearr_48714_49749 = state_48710__$1;
(statearr_48714_49749[(2)] = null);

(statearr_48714_49749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48711 === (4))){
var inst_48674 = (state_48710[(9)]);
var inst_48674__$1 = (state_48710[(2)]);
var inst_48675 = (inst_48674__$1 == null);
var inst_48676 = cljs.core.not(inst_48675);
var state_48710__$1 = (function (){var statearr_48715 = state_48710;
(statearr_48715[(9)] = inst_48674__$1);

return statearr_48715;
})();
if(inst_48676){
var statearr_48716_49751 = state_48710__$1;
(statearr_48716_49751[(1)] = (5));

} else {
var statearr_48717_49752 = state_48710__$1;
(statearr_48717_49752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48711 === (15))){
var inst_48700 = (state_48710[(2)]);
var state_48710__$1 = state_48710;
var statearr_48718_49755 = state_48710__$1;
(statearr_48718_49755[(2)] = inst_48700);

(statearr_48718_49755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48711 === (13))){
var state_48710__$1 = state_48710;
var statearr_48719_49758 = state_48710__$1;
(statearr_48719_49758[(2)] = null);

(statearr_48719_49758[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48711 === (6))){
var inst_48670 = (state_48710[(8)]);
var inst_48695 = inst_48670.length;
var inst_48696 = (inst_48695 > (0));
var state_48710__$1 = state_48710;
if(cljs.core.truth_(inst_48696)){
var statearr_48720_49759 = state_48710__$1;
(statearr_48720_49759[(1)] = (12));

} else {
var statearr_48721_49760 = state_48710__$1;
(statearr_48721_49760[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48711 === (3))){
var inst_48708 = (state_48710[(2)]);
var state_48710__$1 = state_48710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48710__$1,inst_48708);
} else {
if((state_val_48711 === (12))){
var inst_48670 = (state_48710[(8)]);
var inst_48698 = cljs.core.vec(inst_48670);
var state_48710__$1 = state_48710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48710__$1,(15),out,inst_48698);
} else {
if((state_val_48711 === (2))){
var state_48710__$1 = state_48710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48710__$1,(4),ch);
} else {
if((state_val_48711 === (11))){
var inst_48674 = (state_48710[(9)]);
var inst_48678 = (state_48710[(10)]);
var inst_48688 = (state_48710[(2)]);
var inst_48689 = [];
var inst_48690 = inst_48689.push(inst_48674);
var inst_48670 = inst_48689;
var inst_48671 = inst_48678;
var state_48710__$1 = (function (){var statearr_48722 = state_48710;
(statearr_48722[(11)] = inst_48688);

(statearr_48722[(12)] = inst_48690);

(statearr_48722[(7)] = inst_48671);

(statearr_48722[(8)] = inst_48670);

return statearr_48722;
})();
var statearr_48723_49763 = state_48710__$1;
(statearr_48723_49763[(2)] = null);

(statearr_48723_49763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48711 === (9))){
var inst_48670 = (state_48710[(8)]);
var inst_48686 = cljs.core.vec(inst_48670);
var state_48710__$1 = state_48710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48710__$1,(11),out,inst_48686);
} else {
if((state_val_48711 === (5))){
var inst_48674 = (state_48710[(9)]);
var inst_48678 = (state_48710[(10)]);
var inst_48671 = (state_48710[(7)]);
var inst_48678__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48674) : f.call(null,inst_48674));
var inst_48679 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48678__$1,inst_48671);
var inst_48680 = cljs.core.keyword_identical_QMARK_(inst_48671,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48681 = ((inst_48679) || (inst_48680));
var state_48710__$1 = (function (){var statearr_48724 = state_48710;
(statearr_48724[(10)] = inst_48678__$1);

return statearr_48724;
})();
if(cljs.core.truth_(inst_48681)){
var statearr_48725_49764 = state_48710__$1;
(statearr_48725_49764[(1)] = (8));

} else {
var statearr_48726_49765 = state_48710__$1;
(statearr_48726_49765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48711 === (14))){
var inst_48703 = (state_48710[(2)]);
var inst_48704 = cljs.core.async.close_BANG_(out);
var state_48710__$1 = (function (){var statearr_48728 = state_48710;
(statearr_48728[(13)] = inst_48703);

return statearr_48728;
})();
var statearr_48729_49766 = state_48710__$1;
(statearr_48729_49766[(2)] = inst_48704);

(statearr_48729_49766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48711 === (10))){
var inst_48693 = (state_48710[(2)]);
var state_48710__$1 = state_48710;
var statearr_48730_49767 = state_48710__$1;
(statearr_48730_49767[(2)] = inst_48693);

(statearr_48730_49767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48711 === (8))){
var inst_48674 = (state_48710[(9)]);
var inst_48678 = (state_48710[(10)]);
var inst_48670 = (state_48710[(8)]);
var inst_48683 = inst_48670.push(inst_48674);
var tmp48727 = inst_48670;
var inst_48670__$1 = tmp48727;
var inst_48671 = inst_48678;
var state_48710__$1 = (function (){var statearr_48731 = state_48710;
(statearr_48731[(14)] = inst_48683);

(statearr_48731[(7)] = inst_48671);

(statearr_48731[(8)] = inst_48670__$1);

return statearr_48731;
})();
var statearr_48732_49768 = state_48710__$1;
(statearr_48732_49768[(2)] = null);

(statearr_48732_49768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46942__auto__ = null;
var cljs$core$async$state_machine__46942__auto____0 = (function (){
var statearr_48733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48733[(0)] = cljs$core$async$state_machine__46942__auto__);

(statearr_48733[(1)] = (1));

return statearr_48733;
});
var cljs$core$async$state_machine__46942__auto____1 = (function (state_48710){
while(true){
var ret_value__46943__auto__ = (function (){try{while(true){
var result__46944__auto__ = switch__46941__auto__(state_48710);
if(cljs.core.keyword_identical_QMARK_(result__46944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46944__auto__;
}
break;
}
}catch (e48734){var ex__46945__auto__ = e48734;
var statearr_48735_49769 = state_48710;
(statearr_48735_49769[(2)] = ex__46945__auto__);


if(cljs.core.seq((state_48710[(4)]))){
var statearr_48736_49774 = state_48710;
(statearr_48736_49774[(1)] = cljs.core.first((state_48710[(4)])));

} else {
throw ex__46945__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49801 = state_48710;
state_48710 = G__49801;
continue;
} else {
return ret_value__46943__auto__;
}
break;
}
});
cljs$core$async$state_machine__46942__auto__ = function(state_48710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46942__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46942__auto____1.call(this,state_48710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46942__auto____0;
cljs$core$async$state_machine__46942__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46942__auto____1;
return cljs$core$async$state_machine__46942__auto__;
})()
})();
var state__46976__auto__ = (function (){var statearr_48737 = f__46975__auto__();
(statearr_48737[(6)] = c__46974__auto___49747);

return statearr_48737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46976__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
