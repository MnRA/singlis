goog.provide('singlis.streaming');
singlis.streaming.sablier_address = "0xc04Ad234E01327b24a831e3718DBFcbE245904CC";
singlis.streaming.testnetDAI_address = "0xc3dbf84Abb494ce5199D5d4D815b10EC29529ff8";
singlis.streaming.current_address = (function singlis$streaming$current_address(){
return window.ethereum.selectedAddress;
});
singlis.streaming.format_units = (function singlis$streaming$format_units(number){
return ethers.utils.formatUnits(number);
});
singlis.streaming.metamask_installed_QMARK_ = (function singlis$streaming$metamask_installed_QMARK_(){
return window.hasOwnProperty("ethereum");
});
singlis.streaming.metamask_connected_QMARK_ = (function singlis$streaming$metamask_connected_QMARK_(){
var and__4115__auto__ = singlis.streaming.metamask_installed_QMARK_();
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = window.ethereum.isConnected();
if(cljs.core.truth_(and__4115__auto____$1)){
return window.ethereum.selectedAddress;
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
singlis.streaming.enable_metamask = (function singlis$streaming$enable_metamask(){
return window.ethereum.enable();
});
singlis.streaming.provider = (function singlis$streaming$provider(){
return (new ethers.providers.Web3Provider(window.ethereum));
});
singlis.streaming.signer = (function singlis$streaming$signer(){
return singlis.streaming.provider().getSigner();
});
singlis.streaming.sablier = (function singlis$streaming$sablier(signer){
return (new ethers.Contract(singlis.streaming.sablier_address,singlis.config.sablierABI,signer));
});
singlis.streaming.token = (function singlis$streaming$token(signer){
return (new ethers.Contract(singlis.streaming.testnetDAI_address,singlis.config.ierc20ABI,signer));
});
singlis.streaming.check_balance = (function singlis$streaming$check_balance(){
if(cljs.core.truth_(singlis.streaming.metamask_connected_QMARK_())){
return singlis.streaming.token(singlis.streaming.signer()).balanceOf(singlis.streaming.current_address()).then(singlis.streaming.format_units).then((function (p1__43108_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-balance","update-balance",-1850850751),p1__43108_SHARP_], null));
}));
} else {
return null;
}
});
singlis.streaming.approve_token = (function singlis$streaming$approve_token(token,deposit){
return token.approve(singlis.streaming.sablier_address,deposit).then((function (p1__43109_SHARP_){
return p1__43109_SHARP_.wait();
}));
});
singlis.streaming.create_stream = (function singlis$streaming$create_stream(sablier,start_time,stop_time,recipient,deposit){
return sablier.createStream(recipient,deposit,singlis.streaming.testnetDAI_address,start_time,stop_time).then((function (p1__43110_SHARP_){
return p1__43110_SHARP_.wait();
}));
});
singlis.streaming.now = (function singlis$streaming$now(){
return Math.round(((new Date()).getTime() / (1000)));
});
singlis.streaming.process_form = (function singlis$streaming$process_form(p__43111){
var map__43112 = p__43111;
var map__43112__$1 = (((((!((map__43112 == null))))?(((((map__43112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43112):map__43112);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43112__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43112__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
var recipient = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43112__$1,new cljs.core.Keyword(null,"recipient","recipient",1650072234));
var token = singlis.streaming.token(singlis.streaming.signer());
var sablier = singlis.streaming.sablier(singlis.streaming.signer());
var now = singlis.streaming.now();
var duration = ((3600) * (hours | (0)));
var delay = (60);
var deposit = cljs.core.str.cljs$core$IFn$_invoke$arity$1((quantity - cljs.core.mod(quantity,duration)));
return singlis.streaming.approve_token(token,deposit).then((function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-status","update-status",22520609),new cljs.core.Keyword(null,"processing","processing",-1576405467)], null));
})).then((function (){
return singlis.streaming.create_stream(sablier,(now + delay),((now + duration) + delay),recipient,deposit);
})).then((function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-status","update-status",22520609),new cljs.core.Keyword(null,"finished","finished",-1018867731)], null));
})).then((function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"check-balance","check-balance",780027317)], null));
})).catch((function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-status","update-status",22520609),new cljs.core.Keyword(null,"failed","failed",-1397425762)], null));
}));
});

//# sourceMappingURL=singlis.streaming.js.map
