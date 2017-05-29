(function(){var e=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},f=function(a){return"string"==typeof a},h=function(a){return"boolean"==typeof a},k=function(a){return"number"==typeof a},m=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,
d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},n=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?n=ba:n=ca;return n.apply(null,arguments)},p=function(a,b){a=a.split(".");var c=e;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b},q=function(a,b){function c(){}c.prototype=b.prototype;a.O=b.prototype;a.prototype=
new c;a.N=function(a,c,l){for(var d=Array(arguments.length-2),g=2;g<arguments.length;g++)d[g-2]=arguments[g];return b.prototype[c].apply(a,d)}};var da=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))},r=function(a){a=String(a);if(da(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},t=function(a){return(new ea(void 0)).o(a)},ea=function(a){this.a=a};
ea.prototype.o=function(a){var b=[];v(this,a,b);return b.join("")};
var v=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if("array"==aa(b)){var d=b;b=d.length;c.push("[");for(var g="",l=0;l<b;l++)c.push(g),g=d[l],v(a,a.a?a.a.call(d,String(l),g):g,c),g=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");l="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(g=b[d],"function"!=typeof g&&(c.push(l),fa(d,c),c.push(":"),v(a,a.a?a.a.call(b,d,g):g,c),l=","));c.push("}");return}}switch(typeof b){case "string":fa(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},ga={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ha=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,fa=function(a,b){b.push('"',a.replace(ha,function(a){var b=ga[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),
ga[a]=b);return b}),'"')};var ia=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},w=function(a,b){return a<b?-1:a>b?1:0};var x=function(a,b,c,d){this.j=a;this.g=b;this.a=c;this.f=d},z=function(a){return new x(a.j,a.g,a.a,a.f)};var A;a:{var ja=e.navigator;if(ja){var ka=ja.userAgent;if(ka){A=ka;break a}}A=""};var ma=function(a,b){var c=la;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))};var na=-1!=A.indexOf("Opera"),B=-1!=A.indexOf("Trident")||-1!=A.indexOf("MSIE"),oa=-1!=A.indexOf("Edge"),C=-1!=A.indexOf("Gecko")&&!(-1!=A.toLowerCase().indexOf("webkit")&&-1==A.indexOf("Edge"))&&!(-1!=A.indexOf("Trident")||-1!=A.indexOf("MSIE"))&&-1==A.indexOf("Edge"),pa=-1!=A.toLowerCase().indexOf("webkit")&&-1==A.indexOf("Edge"),qa=function(){var a=e.document;return a?a.documentMode:void 0},D;
a:{var E="",F=function(){var a=A;if(C)return/rv\:([^\);]+)(\)|;)/.exec(a);if(oa)return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(pa)return/WebKit\/(\S+)/.exec(a);if(na)return/(?:Version)[ \/]?(\S+)/.exec(a)}();F&&(E=F?F[1]:"");if(B){var G=qa();if(null!=G&&G>parseFloat(E)){D=String(G);break a}}D=E}
var ra=D,la={},sa=function(a){ma(a,function(){for(var b=0,c=ia(String(ra)).split("."),d=ia(String(a)).split("."),g=Math.max(c.length,d.length),l=0;0==b&&l<g;l++){var u=c[l]||"",y=d[l]||"";do{u=/(\d*)(\D*)(.*)/.exec(u)||["","","",""];y=/(\d*)(\D*)(.*)/.exec(y)||["","","",""];if(0==u[0].length&&0==y[0].length)break;b=w(0==u[1].length?0:parseInt(u[1],10),0==y[1].length?0:parseInt(y[1],10))||w(0==u[2].length,0==y[2].length)||w(u[2],y[2]);u=u[3];y=y[3]}while(0==b)}return 0<=b})},ta;var ua=e.document;
ta=ua&&B?qa()||("CSS1Compat"==ua.compatMode?parseInt(ra,10):5):void 0;var H;if(!(H=!C&&!B)){var I;if(I=B)I=9<=Number(ta);H=I}H||C&&sa("1.9.1");B&&sa("9");var va=function(){var a=document.body.offsetHeight;this.width=document.body.offsetWidth;this.height=a};var wa=function(a,b,c,d,g,l){this.f=z(a);this.a=z(b);this.u=c;this.g=z(d);this.j=g;this.m=l},J=function(a){a=r(a);if(!(m(a)&&k(a.windowCoords_t)&&k(a.windowCoords_r)&&k(a.windowCoords_b)&&k(a.windowCoords_l)&&k(a.frameCoords_t)&&k(a.frameCoords_r)&&k(a.frameCoords_b)&&k(a.frameCoords_l)&&f(a.styleZIndex)&&k(a.allowedExpansion_t)&&k(a.allowedExpansion_r)&&k(a.allowedExpansion_b)&&k(a.allowedExpansion_l)&&k(a.xInView)&&0<=a.xInView&&1>=a.xInView&&k(a.yInView)&&0<=a.yInView&&1>=a.yInView))throw Error("Cannot parse JSON geometry");
return new wa(new x(a.windowCoords_t,a.windowCoords_r,a.windowCoords_b,a.windowCoords_l),new x(a.frameCoords_t,a.frameCoords_r,a.frameCoords_b,a.frameCoords_l),a.styleZIndex,new x(a.allowedExpansion_t,a.allowedExpansion_r,a.allowedExpansion_b,a.allowedExpansion_l),a.xInView,a.yInView)};
wa.prototype.o=function(){return t({windowCoords_t:this.f.j,windowCoords_r:this.f.g,windowCoords_b:this.f.a,windowCoords_l:this.f.f,frameCoords_t:this.a.j,frameCoords_r:this.a.g,frameCoords_b:this.a.a,frameCoords_l:this.a.f,styleZIndex:this.u,allowedExpansion_t:this.g.j,allowedExpansion_r:this.g.g,allowedExpansion_b:this.g.a,allowedExpansion_l:this.g.f,xInView:this.j,yInView:this.m})};var K=!1,L=function(a){if(a=a.match(/[\d]+/g))a.length=3};
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(K=!0,a.description)){L(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){K=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],K=!(!a||!a.enabledPlugin))){L(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");K=!0;L(b.GetVariable("$version"));return}catch(c){}try{b=
new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");K=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),K=!0,L(b.GetVariable("$version"))}catch(c){}})();var xa=function(a){this.a=a};xa.prototype.o=function(){return t(this.a)};var ya=function(a,b,c,d){this.a=a;this.f=b;this.g=c;this.j=d};ya.prototype.o=function(){return t({expandByOverlay:this.a,expandByPush:this.f,readCookie:this.g,writeCookie:this.j})};var za=function(a,b,c,d,g,l,u){this.u=a;this.a=b;this.f=c;this.m=d;this.g=g;this.A=l;this.j=u};za.prototype.o=function(){var a={uid:this.u,hostPeerName:this.a,initialGeometry:this.f.o(),permissions:this.m.o(),metadata:this.g.o(),reportCreativeGeometry:this.A,isDifferentSourceWindow:this.j};return t(a)};var Aa=/^([^;]+);(\d+);([\s\S]*)$/;var Ba=function(){this.A=this.A;this.F=this.F};Ba.prototype.A=!1;var Ca=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});e.addEventListener("test",null,b)}catch(c){}return a}(),Da=function(a,b){var c=window;c.addEventListener?c.addEventListener(a,b,Ca?void 0:!1):c.attachEvent&&c.attachEvent("on"+a,b)};var M=function(a,b,c,d,g){Ba.call(this);this.m=a;this.status=1;this.g=b;this.u=c;this.H=d;this.D=!!g;this.j=Math.random();this.a={};this.f=null;this.C=n(this.G,this)};q(M,Ba);M.prototype.G=function(a){if(a.origin===this.u&&(this.D||a.source==this.g)){var b=null;try{b=r(a.data)}catch(c){}if(m(b)&&(a=b.i,b.c===this.m&&a!=this.j&&(2!==this.status&&(this.status=2,Ea(this),this.f&&(this.f(),this.f=null)),a=b.s,b=b.p,f(a)&&(f(b)||m(b))&&this.a.hasOwnProperty(a))))this.a[a](b)}};
var Ea=function(a){var b={};b.c=a.m;b.i=a.j;a.g.postMessage(t(b),a.u)};M.prototype.B=function(){if(1===this.status){try{this.g.postMessage&&Ea(this)}catch(a){}window.setTimeout(n(this.B,this),50)}};M.prototype.connect=function(a){a&&(this.f=a);Da("message",this.C);this.H&&this.B()};var Fa=function(a,b,c){var d={};d.c=a.m;d.i=a.j;d.s=b;d.p=c;a.g.postMessage(t(d),a.u)};var Ga=function(a){this.f=a;this.j=null;this.a=this.status=0;this.g=null;this.J="sfchannel"+a},N=function(a){return 1==a.status||2==a.status};var O=function(a){this.a=a},Ha=function(a,b){this.a=a;this.version=b};q(Ha,O);Ha.prototype.o=function(){return t({uid:this.a,version:this.version})};var Ia=function(a,b,c){this.a=a;this.g=b;this.f=c};q(Ia,O);Ia.prototype.o=function(){return t({uid:this.a,initialWidth:this.g,initialHeight:this.f})};var Ja=function(a,b){this.a=a;this.f=b};q(Ja,O);Ja.prototype.o=function(){return t({uid:this.a,description:this.f})};var Ka=function(a,b,c){this.a=a;this.f=b;this.g=c};q(Ka,O);
Ka.prototype.o=function(){return t({uid:this.a,expand_t:this.f.j,expand_r:this.f.g,expand_b:this.f.a,expand_l:this.f.f,push:this.g})};var La=function(a){this.a=a};q(La,O);La.prototype.o=function(){return t({uid:this.a})};var P=function(a,b){this.a=a;this.g=b};q(P,O);var Ma=function(a){a=r(a);if(!(m(a)&&k(a.uid)&&f(a.newGeometry)))throw Error("Cannot parse JSON message");var b=J(a.newGeometry);return new P(a.uid,b)};P.prototype.o=function(){var a={uid:this.a,newGeometry:this.g.o()};return t(a)};
var Na=function(a,b,c,d,g){P.call(this,a,c);this.m=b;this.f=d;this.j=g};q(Na,P);Na.prototype.o=function(){var a={uid:this.a,success:this.m,newGeometry:this.g.o(),expand_t:this.f.j,expand_r:this.f.g,expand_b:this.f.a,expand_l:this.f.f,push:this.j};return t(a)};var Oa=function(a,b,c){this.a=a;this.width=b;this.height=c};q(Oa,O);Oa.prototype.o=function(){return t({uid:this.a,width:this.width,height:this.height})};var R=function(a){Ga.call(this,a.u);this.A=a.m;this.I=a.g;this.B=null;this.u=[];this.m=0;this.j=a.f;this.g=new M(this.J,window.parent,a.a,!0,a.j);var b=n(this.G,this);this.g.a.expand_response=b;b=n(this.C,this);this.g.a.collapse_response=b;b=n(this.H,this);this.g.a.geometry_update=b;this.g.connect(n(this.K,this));this.status=1;Q(this,"init_done",new Ha(this.f,"1-0-8"));a.A&&(a=n(R.prototype.F,this),Da("load",a),Da("resize",a))};q(R,Ga);var S=function(a,b){Q(a,"report_error",new Ja(a.f,b))};
R.prototype.K=function(){for(var a=0;a<this.u.length;a++)Fa(this.g,this.u[a].type,this.u[a].message.o())};
R.prototype.G=function(a){try{if(2!=this.status)throw Error("Container is not registered");if(3!=this.a)throw Error("Container is not expanding");if(!f(a))throw Error("Could not parse serialized message");var b,c=r(a);if(!(m(c)&&k(c.uid)&&h(c.success)&&f(c.newGeometry)&&k(c.expand_t)&&k(c.expand_r)&&k(c.expand_b)&&k(c.expand_l)&&h(c.push)))throw Error("Cannot parse JSON message");var d=J(c.newGeometry);b=new Na(c.uid,c.success,d,new x(c.expand_t,c.expand_r,c.expand_b,c.expand_l),c.push);if(this.f!=
b.a)throw Error("Wrong source container");this.a=b.m?2:0;this.j=b.g;T(this,b.m?"expanded":"failed",b.j?"exp-push":"exp-ovr","",{t:b.f.j,r:b.f.g,b:b.f.a,l:b.f.f,push:b.j})}catch(g){}};
R.prototype.C=function(a){try{if(2!=this.status)throw Error("Container is not registered");if(1!=this.a)throw Error("Container is not collapsing");if(!f(a))throw Error("Could not parse serialized message");var b=Ma(a);if(this.f!=b.a)throw Error("Wrong source container");this.a=0;this.j=b.g;T(this,"collapsed","collapse","",void 0)}catch(c){}};
R.prototype.H=function(a){try{if(!N(this))throw Error("Container is not initialized or registered");if(!f(a))throw Error("Could not parse serialized message");var b=Ma(a);if(this.f!=b.a)throw Error("Wrong source container");this.j=b.g;T(this,"geom-update","","",void 0)}catch(c){}};
var T=function(a,b,c,d,g){if(null!==a.B)try{a.B(b,{cmd:c,reason:d,info:g})}catch(l){S(a,"Could not manage to call user-supplied callback")}},Pa=function(a,b,c,d){setTimeout(n(function(){T(this,a,b,c,d)},U),0)},Q=function(a,b,c){2===a.g.status?Fa(a.g,b,c.o()):a.u.push({type:b,message:c})},Qa=function(a){var b=new va;Q(a,"creative_geometry_update",new Oa(a.f,b.width,b.height))};R.prototype.D=function(){2==this.m&&Qa(this);this.m=0};
R.prototype.F=function(){switch(this.m){case 0:Qa(this);setTimeout(n(this.D,this),200);this.m=1;break;case 1:this.m=2}};var Ra=function(a,b,c){if(2==U.status)S(U,"Called register multiple times");else if(!k(a)||0>=a)S(U,"Invalid initial width");else if(!k(b)||0>=b)S(U,"Invalid initial height");else{var d=null;if(null!=c){if("function"!=aa(c)){S(U,"Invalid callback function");return}d=c}c=U;c.status=2;c.B=d;Q(c,"register_done",new Ia(c.f,a,b))}},Sa=function(){return N(U)?{"exp-ovr":U.A.a,"exp-push":U.A.f,"read-cookie":U.A.g,"write-cookie":U.A.j}:(S(U,"Called supports on bad container"),null)},Ta=function(){if(!N(U))return S(U,
"Called geom on bad container"),null;var a=U.j;return{win:{t:a.f.j,r:a.f.g,b:a.f.a,l:a.f.f,w:a.f.g-a.f.f,h:a.f.a-a.f.j},self:{t:a.a.j,r:a.a.g,b:a.a.a,l:a.a.f,w:a.a.g-a.a.f,h:a.a.a-a.a.j,z:parseInt(a.u,10),xiv:a.j,yiv:a.m,iv:a.j*a.m},exp:{t:a.g.j,r:a.g.g,b:a.g.a,l:a.g.f,xs:!1,yx:!1}}},Ua=function(){if(!N(U))return S(U,"Called inViewPercentage on bad container"),null;var a=U.j;return a.j*a.m*100},Va=function(){if(!N(U))return S(U,"Called status on bad container"),null;switch(U.a){case 0:return"collapsed";
case 1:return"collapsing";case 2:return"expanded";case 3:return"expanding";default:return null}},Wa=function(a,b){if(!N(U))return S(U,"Called meta on bad container"),null;if(!f(a)||/^[\s\xa0]*$/.test(null==a?"":String(a)))return S(U,"Invalid property name"),null;var c="shared";if(null!=b){if(!f(b)||/^[\s\xa0]*$/.test(null==b?"":String(b)))return S(U,"Invalid owner key"),null;c=b}b=U.I;return null!=b.a[c]&&null!=b.a[c][a]?b.a[c][a]:null},Xa=function(a,b){2==U.status?!f(a)||/^[\s\xa0]*$/.test(a)?S(U,
"Invalid cookie name"):((a=null==b)||!(a=m(b)&&f(b.info))||(a=null==b.expires)||(a=b.expires,a=m(a)&&"function"==typeof a.getFullYear),a?(Pa("unsupported",null!=b?"write-cookie":"read-cookie","$sf.ext.cookie is not supported",b),S(U,"Used unsupported cookie operations")):(Pa("failed","write-cookie","Invalid $sf.ext.cookie arguments",b),S(U,"Invalid cookie data"))):S(U,"Called cookie on unregistered container")},Ya=function(a){if(2==U.status)if(0==U.a)if(m(a)&&(null!=a.t||null!=a.r||null!=a.b||null!=
a.l)&&(null==a.t||k(a.t)&&0<=a.t)&&(null==a.r||k(a.r)&&0<=a.r)&&(null==a.b||k(a.b)&&0<=a.b)&&(null==a.l||k(a.l)&&0<=a.l)&&(null==a.push||h(a.push))){var b=new x(a.t||0,a.r||0,a.b||0,a.l||0);a=a.push||!1;var c=U;c.a=3;Q(c,"expand_request",new Ka(c.f,b,a))}else Pa("failed",m(a)&&h(a.push)&&1==a.push?"exp-push":"exp-ovr","Invalid $sf.ext.expand arguments",a),S(U,"Invalid expand data");else S(U,"Called expand on uncollapsed container");else S(U,"Called expand on unregistered container")},Za=function(){if(2==
U.status)if(2==U.a){var a=U;a.a=1;Q(a,"collapse_request",new La(a.f))}else S(U,"Called collapse on unexpanded container");else S(U,"Called collapse on unregistered container")},$a;var ab=null,V=window;
if(V!=V.parent&&V.parent==V.top){try{var bb,cb;if(e.sf_)bb=f(e.sf_.cfg)?r(e.sf_.cfg):e.sf_.cfg,cb=e.sf_.v;else{var db,W=Aa.exec(window.name);if(null===W)throw Error("Cannot parse serialized data");var eb=+W[2],fb=W[3];if(eb>fb.length)throw Error("Cannot parse serialized data");db={M:W[1],content:fb.substr(0,eb),L:fb.substr(eb)};bb=r(db.L);cb=db.M}var X=bb;if("1-0-8"!=cb)throw Error("Host has different version from ext container");if(!(k(X.uid)&&f(X.hostPeerName)&&f(X.initialGeometry)&&f(X.permissions)&&
f(X.metadata)&&h(X.reportCreativeGeometry)&&h(X.isDifferentSourceWindow)))throw Error("Cannot parse config");var gb=J(X.initialGeometry),hb,Y=r(X.permissions);if(!(m(Y)&&h(Y.expandByOverlay)&&h(Y.expandByPush)&&h(Y.readCookie)&&h(Y.writeCookie)))throw Error("Cannot parse JSON permissions");hb=new ya(Y.expandByOverlay,Y.expandByPush,Y.readCookie,Y.writeCookie);var Z=r(X.metadata);if(!(m(Z)&&m(Z.shared)&&f(Z.shared.sf_ver)&&k(Z.shared.ck_on)&&f(Z.shared.flash_ver)))throw Error("Cannot parse JSON metadata");
ab=new R(new za(X.uid,X.hostPeerName,gb,hb,new xa({shared:{sf_ver:Z.shared.sf_ver,ck_on:Z.shared.ck_on,flash_ver:Z.shared.flash_ver}}),X.reportCreativeGeometry,X.isDifferentSourceWindow));p("$sf.ext.register",Ra);p("$sf.ext.supports",Sa);p("$sf.ext.geom",Ta);p("$sf.ext.inViewPercentage",Ua);p("$sf.ext.status",Va);p("$sf.ext.meta",Wa);p("$sf.ext.cookie",Xa);p("$sf.ext.expand",Ya);p("$sf.ext.collapse",Za)}catch(a){}e.sf_=void 0;window.name="";$a=ab}else $a=null;var U=$a;}).call(this);
