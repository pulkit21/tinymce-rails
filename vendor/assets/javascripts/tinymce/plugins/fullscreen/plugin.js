!function(){var a={},b=function(b){for(var c=a[b],e=c.deps,f=c.defn,g=e.length,h=new Array(g),i=0;i<g;++i)h[i]=d(e[i]);var j=f.apply(null,h);if(void 0===j)throw"module ["+b+"] returned undefined";c.instance=j},c=function(b,c,d){if("string"!=typeof b)throw"module id must be a string";if(void 0===c)throw"no dependencies for "+b;if(void 0===d)throw"no definition function for "+b;a[b]={deps:c,defn:d,instance:void 0}},d=function(c){var d=a[c];if(void 0===d)throw"module ["+c+"] was undefined";return void 0===d.instance&&b(c),d.instance},e=function(a,b){for(var c=a.length,e=new Array(c),f=0;f<c;++f)e[f]=d(a[f]);b.apply(null,e)},f={};f.bolt={module:{api:{define:c,require:e,demand:d}}};var g=c,h=function(a,b){g(a,[],function(){return b})};g("1",[],function(){var a=function(b){var c=b,d=function(){return c},e=function(a){c=a},f=function(){return a(d())};return{get:d,set:e,clone:f}};return a}),h("6",tinymce.util.Tools.resolve),g("2",["6"],function(a){return a("tinymce.PluginManager")}),g("3",[],function(){var a=function(a){return{isFullscreen:function(){return null!==a.get()}}};return{get:a}}),h("8",document),h("9",window),g("a",["6"],function(a){return a("tinymce.dom.DOMUtils")}),g("b",[],function(){var a=function(a,b){a.fire("FullscreenStateChanged",{state:b})};return{fireFullscreenStateChanged:a}}),g("7",["8","9","a","b"],function(a,b,c,d){var e=c.DOM,f=function(){var c,d,e=b,f=a,g=f.body;return g.offsetWidth&&(c=g.offsetWidth,d=g.offsetHeight),e.innerWidth&&e.innerHeight&&(c=e.innerWidth,d=e.innerHeight),{w:c,h:d}},g=function(){var a=e.getViewPort();return{x:a.x,y:a.y}},h=function(a){b.scrollTo(a.x,a.y)},i=function(c,i){var j,k,l,m,n=a.body,o=a.documentElement,p=function(){e.setStyle(l,"height",f().h-(k.clientHeight-l.clientHeight))},q=function(){e.unbind(b,"resize",p)};if(k=c.getContainer(),j=k.style,l=c.getContentAreaContainer().firstChild,m=l.style,i)return m.width=i.iframeWidth,m.height=i.iframeHeight,i.containerWidth&&(j.width=i.containerWidth),i.containerHeight&&(j.height=i.containerHeight),e.removeClass(n,"mce-fullscreen"),e.removeClass(o,"mce-fullscreen"),e.removeClass(k,"mce-fullscreen"),h(i.scrollPos),e.unbind(b,"resize",i.resizeHandler),c.off("remove",i.removeHandler),d.fireFullscreenStateChanged(c,!1),null;var r={scrollPos:g(),containerWidth:j.width,containerHeight:j.height,iframeWidth:m.width,iframeHeight:m.height,resizeHandler:p,removeHandler:q};return m.width=m.height="100%",j.width=j.height="",e.addClass(n,"mce-fullscreen"),e.addClass(o,"mce-fullscreen"),e.addClass(k,"mce-fullscreen"),e.bind(b,"resize",p),c.on("remove",q),p(),d.fireFullscreenStateChanged(c,!0),r};return{toggleFullscreen:i}}),g("4",["7"],function(a){var b=function(b,c){b.addCommand("mceFullScreen",function(){c.set(a.toggleFullscreen(b,c.get()))})};return{register:b}}),g("5",[],function(){var a=function(a){return function(b){var c=b.control;a.on("FullscreenStateChanged",function(a){c.active(a.state)})}},b=function(b){b.addMenuItem("fullscreen",{text:"Fullscreen",shortcut:"Ctrl+Shift+F",selectable:!0,cmd:"mceFullScreen",onPostRender:a(b),context:"view"}),b.addButton("fullscreen",{tooltip:"Fullscreen",shortcut:"Ctrl+Shift+F",cmd:"mceFullScreen",onPostRender:a(b)})};return{register:b}}),g("0",["1","2","3","4","5"],function(a,b,c,d,e){return b.add("fullscreen",function(b){var f=a(null);return d.register(b,f),e.register(b),b.addShortcut("Ctrl+Shift+F","","mceFullScreen"),c.get(f)}),function(){}}),d("0")()}();