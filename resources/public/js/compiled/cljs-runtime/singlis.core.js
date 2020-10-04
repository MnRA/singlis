goog.provide('singlis.core');
singlis.core.dev_setup = (function singlis$core$dev_setup(){
if(singlis.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
singlis.core.mount_root = (function singlis$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [singlis.views.main_panel], null),root_el);
});
singlis.core.init = (function singlis$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("singlis.events","initialize-db","singlis.events/initialize-db",-871814944)], null));

singlis.core.dev_setup();

return singlis.core.mount_root();
});

//# sourceMappingURL=singlis.core.js.map
