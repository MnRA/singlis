
shadow.cljs.devtools.client.env.module_loaded('app');

try { singlis.core.init(); } catch (e) { console.error("An error occurred when calling (singlis.core/init)"); throw(e); }