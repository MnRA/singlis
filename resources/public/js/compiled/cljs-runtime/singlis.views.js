goog.provide('singlis.views');
singlis.views.metamask_presence_notification = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"red"], null)], null),"MetaMask extension is required for this site, please install it at: https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"], null);
singlis.views.metamask_connectivity_notification = (function singlis$views$metamask_connectivity_notification(){
if(cljs.core.truth_(singlis.streaming.metamask_connected_QMARK_())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"green"], null)], null),"MetaMask Connected"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enable-metamask","enable-metamask",1389080078)], null));
})], null),"MetaMask Disconnected, click to connect"], null);
}
});
singlis.views.account_balance = (function singlis$views$account_balance(){
var balance = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("singlis.subs","balance","singlis.subs/balance",-1960624873)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),["Current Balance: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(balance)," testnetDAI"].join('')], null);
});
singlis.views.update_form = (function singlis$views$update_form(k,event){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-values","stream-values",1710399854),k,event.target.value], null));
});
singlis.views.form_input = (function singlis$views$form_input(t,k,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),t,new cljs.core.Keyword(null,"value","value",305978217),(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(state) : k.call(null,state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43153_SHARP_){
return singlis.views.update_form(k,p1__43153_SHARP_);
})], null)], null);
});
singlis.views.main_panel = (function singlis$views$main_panel(){
var stream_values = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("singlis.subs","stream-values","singlis.subs/stream-values",331902788)], null)));
var status = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("singlis.subs","status","singlis.subs/status",362131901)], null)));
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome to Singlis"], null),singlis.views.account_balance(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Recipient"], null),singlis.views.form_input("text",new cljs.core.Keyword(null,"recipient","recipient",1650072234),stream_values),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Quantity"], null),singlis.views.form_input("number",new cljs.core.Keyword(null,"quantity","quantity",-1929050694),stream_values),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Amount of Hours"], null),singlis.views.form_input("number",new cljs.core.Keyword(null,"hours","hours",58380855),stream_values),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-stream","create-stream",-422399452)], null));
})], null),"Submit"], null),(function (){var G__43154 = status;
var G__43154__$1 = (((G__43154 instanceof cljs.core.Keyword))?G__43154.fqn:null);
switch (G__43154__$1) {
case "finished":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Finished!"], null);

break;
case "requesting-approval":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Awaiting approval.."], null);

break;
case "processing":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Processing.."], null);

break;
case "failed":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Something seems to have gone wrong, please make sure the values are correct."], null);

break;
default:
return null;

}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),(cljs.core.truth_(singlis.streaming.metamask_installed_QMARK_())?singlis.views.metamask_connectivity_notification():singlis.views.metamask_presence_notification)], null)], null);
});

//# sourceMappingURL=singlis.views.js.map
