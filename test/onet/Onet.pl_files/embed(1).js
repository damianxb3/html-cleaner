var isOnetTv = function () {
    if (self === top && window.location.host.indexOf('onet.tv') !== (-1))
        return true;
    if (self === top && window.location.host.indexOf('onet.tv') === (-1))
        return false;
    try {
        if (self !== top && top.location.host.indexOf('onet.tv') !== (-1))
            return true;
        else{
            return false;
        }
    } catch (e) {
        return false;
    }
    return false;
    ;
}();

var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function _(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(M(i[e])||A(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||r.getPropertyValue(t);if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return W(this,"");i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)m(r,o.headers[r]);if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==x){u=u||w(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",S,o,s):v(e,S,o,s)}else y(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);
var oldLoad = $.fn.load;
$.fn.load = function(a,b,c){
    if (typeof(a)==="function"){
        $(window).on('load', a);
    }else
    oldLoad(a,b,c);
};

//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?void(this._wrapped=n):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.6.0";var A=j.each=j.forEach=function(n,t,e){if(null==n)return n;if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return;return n};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var O="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},j.find=j.detect=function(n,t,r){var e;return k(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var k=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:k(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,j.property(t))},j.where=function(n,t){return j.filter(n,j.matches(t))},j.findWhere=function(n,t){return j.find(n,j.matches(t))},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);var e=-1/0,u=-1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;o>u&&(e=n,u=o)}),e},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);var e=1/0,u=1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;u>o&&(e=n,u=o)}),e},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=j.values(n)),n[j.random(n.length-1)]):j.shuffle(n).slice(0,Math.max(0,t))};var E=function(n){return null==n?j.identity:j.isFunction(n)?n:j.property(n)};j.sortBy=function(n,t,r){return t=E(t),j.pluck(j.map(n,function(n,e,u){return{value:n,index:e,criteria:t.call(r,n,e,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=E(r),A(t,function(i,a){var o=r.call(e,i,a,t);n(u,o,i)}),u}};j.groupBy=F(function(n,t,r){j.has(n,t)?n[t].push(r):n[t]=[r]}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=E(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.partition=function(n,t){var r=[],e=[];return A(n,function(n){(t(n)?r:e).push(n)}),[r,e]},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.contains(t,n)})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===j&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:j.now(),a=null,i=n.apply(e,u),e=u=null};return function(){var l=j.now();o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u),e=u=null):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o,c=function(){var l=j.now()-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u),i=u=null))};return function(){i=this,u=arguments,a=j.now();var l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u),i=u=null),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return j.partial(t,n)},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=function(n){if(!j.isObject(n))return[];if(w)return w(n);var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o)&&"constructor"in n&&"constructor"in t)return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.constant=function(n){return function(){return n}},j.property=function(n){return function(t){return t[n]}},j.matches=function(n){return function(t){if(t===n)return!0;for(var r in n)if(n[r]!==t[r])return!1;return!0}},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},j.now=Date.now||function(){return(new Date).getTime()};var T={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};T.unescape=j.invert(T.escape);var I={escape:new RegExp("["+j.keys(T.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(T.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(I[n],function(t){return T[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return j})}).call(this);


(function(t,e){if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,s){t.Backbone=e(t,s,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore");e(t,exports,i)}else{t.Backbone=e(t,{},t._,t.jQuery||t.Zepto||t.ender||t.$)}})(this,function(t,e,i,r){var s=t.Backbone;var n=[];var a=n.push;var o=n.slice;var h=n.splice;e.VERSION="1.1.2";e.$=r;e.noConflict=function(){t.Backbone=s;return this};e.emulateHTTP=false;e.emulateJSON=false;var u=e.Events={on:function(t,e,i){if(!c(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,r){if(!c(this,"once",t,[e,r])||!e)return this;var s=this;var n=i.once(function(){s.off(t,n);e.apply(this,arguments)});n._callback=e;return this.on(t,n,r)},off:function(t,e,r){var s,n,a,o,h,u,l,f;if(!this._events||!c(this,"off",t,[e,r]))return this;if(!t&&!e&&!r){this._events=void 0;return this}o=t?[t]:i.keys(this._events);for(h=0,u=o.length;h<u;h++){t=o[h];if(a=this._events[t]){this._events[t]=s=[];if(e||r){for(l=0,f=a.length;l<f;l++){n=a[l];if(e&&e!==n.callback&&e!==n.callback._callback||r&&r!==n.context){s.push(n)}}}if(!s.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=o.call(arguments,1);if(!c(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)f(i,e);if(r)f(r,arguments);return this},stopListening:function(t,e,r){var s=this._listeningTo;if(!s)return this;var n=!e&&!r;if(!r&&typeof e==="object")r=this;if(t)(s={})[t._listenId]=t;for(var a in s){t=s[a];t.off(e,r,this);if(n||i.isEmpty(t._events))delete this._listeningTo[a]}return this}};var l=/\s+/;var c=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(l.test(i)){var n=i.split(l);for(var a=0,o=n.length;a<o;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var f=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,o);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e);return}};var d={listenTo:"on",listenToOnce:"once"};i.each(d,function(t,e){u[e]=function(e,r,s){var n=this._listeningTo||(this._listeningTo={});var a=e._listenId||(e._listenId=i.uniqueId("l"));n[a]=e;if(!s&&typeof r==="object")s=this;e[t](r,s,this);return this}});u.bind=u.on;u.unbind=u.off;i.extend(e,u);var p=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId("c");this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(p.prototype,u,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,r){var s,n,a,o,h,u,l,c;if(t==null)return this;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;a=r.unset;h=r.silent;o=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=i.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in n)this.id=n[this.idAttribute];for(s in n){e=n[s];if(!i.isEqual(c[s],e))o.push(s);if(!i.isEqual(l[s],e)){this.changed[s]=e}else{delete this.changed[s]}a?delete c[s]:c[s]=e}if(!h){if(o.length)this._pending=r;for(var f=0,d=o.length;f<d;f++){this.trigger("change:"+o[f],this,c[o[f]],r)}}if(u)return this;if(!h){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e,r=false;var s=this._changing?this._previousAttributes:this.attributes;for(var n in t){if(i.isEqual(s[n],e=t[n]))continue;(r||(r={}))[n]=e}return r},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=t?i.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var r=t.success;t.success=function(i){if(!e.set(e.parse(i,t),t))return false;if(r)r(e,i,t);e.trigger("sync",e,i,t)};q(this,t);return this.sync("read",this,t)},save:function(t,e,r){var s,n,a,o=this.attributes;if(t==null||typeof t==="object"){s=t;r=e}else{(s={})[t]=e}r=i.extend({validate:true},r);if(s&&!r.wait){if(!this.set(s,r))return false}else{if(!this._validate(s,r))return false}if(s&&r.wait){this.attributes=i.extend({},o,s)}if(r.parse===void 0)r.parse=true;var h=this;var u=r.success;r.success=function(t){h.attributes=o;var e=h.parse(t,r);if(r.wait)e=i.extend(s||{},e);if(i.isObject(e)&&!h.set(e,r)){return false}if(u)u(h,t,r);h.trigger("sync",h,t,r)};q(this,r);n=this.isNew()?"create":r.patch?"patch":"update";if(n==="patch")r.attrs=s;a=this.sync(n,this,r);if(s&&r.wait)this.attributes=o;return a},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var s=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(t.wait||e.isNew())s();if(r)r(e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};if(this.isNew()){t.success();return false}q(this,t);var n=this.sync("delete",this,t);if(!t.wait)s();return n},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||M();if(this.isNew())return t;return t.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var v=["keys","values","pairs","invert","pick","omit"];i.each(v,function(t){p.prototype[t]=function(){var e=o.call(arguments);e.unshift(this.attributes);return i[t].apply(i,e)}});var g=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var m={add:true,remove:true,merge:true};var y={add:true,remove:false};i.extend(g.prototype,u,{model:p,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,y))},remove:function(t,e){var r=!i.isArray(t);t=r?[t]:i.clone(t);e||(e={});var s,n,a,o;for(s=0,n=t.length;s<n;s++){o=t[s]=this.get(t[s]);if(!o)continue;delete this._byId[o.id];delete this._byId[o.cid];a=this.indexOf(o);this.models.splice(a,1);this.length--;if(!e.silent){e.index=a;o.trigger("remove",o,this,e)}this._removeReference(o,e)}return r?t[0]:t},set:function(t,e){e=i.defaults({},e,m);if(e.parse)t=this.parse(t,e);var r=!i.isArray(t);t=r?t?[t]:[]:i.clone(t);var s,n,a,o,h,u,l;var c=e.at;var f=this.model;var d=this.comparator&&c==null&&e.sort!==false;var v=i.isString(this.comparator)?this.comparator:null;var g=[],y=[],_={};var b=e.add,w=e.merge,x=e.remove;var E=!d&&b&&x?[]:false;for(s=0,n=t.length;s<n;s++){h=t[s]||{};if(h instanceof p){a=o=h}else{a=h[f.prototype.idAttribute||"id"]}if(u=this.get(a)){if(x)_[u.cid]=true;if(w){h=h===o?o.attributes:h;if(e.parse)h=u.parse(h,e);u.set(h,e);if(d&&!l&&u.hasChanged(v))l=true}t[s]=u}else if(b){o=t[s]=this._prepareModel(h,e);if(!o)continue;g.push(o);this._addReference(o,e)}o=u||o;if(E&&(o.isNew()||!_[o.id]))E.push(o);_[o.id]=true}if(x){for(s=0,n=this.length;s<n;++s){if(!_[(o=this.models[s]).cid])y.push(o)}if(y.length)this.remove(y,e)}if(g.length||E&&E.length){if(d)l=true;this.length+=g.length;if(c!=null){for(s=0,n=g.length;s<n;s++){this.models.splice(c+s,0,g[s])}}else{if(E)this.models.length=0;var k=E||g;for(s=0,n=k.length;s<n;s++){this.models.push(k[s])}}}if(l)this.sort({silent:true});if(!e.silent){for(s=0,n=g.length;s<n;s++){(o=g[s]).trigger("add",o,this,e)}if(l||E&&E.length)this.trigger("sort",this,e)}return r?t[0]:t},reset:function(t,e){e||(e={});for(var r=0,s=this.models.length;r<s;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(){return o.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[t.id]||this._byId[t.cid]},at:function(t){return this.models[t]},where:function(t,e){if(i.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(i.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(i.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=t?i.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var r=this;t.success=function(i){var s=t.reset?"reset":"set";r[s](i,t);if(e)e(r,i,t);r.trigger("sync",r,i,t)};q(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var r=this;var s=e.success;e.success=function(t,i){if(e.wait)r.add(t,e);if(s)s(t,i,e)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof p)return t;e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_addReference:function(t,e){this._byId[t.cid]=t;if(t.id!=null)this._byId[t.id]=t;if(!t.collection)t.collection=this;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];i.each(_,function(t){g.prototype[t]=function(){var e=o.call(arguments);e.unshift(this.models);return i[t].apply(i,e)}});var b=["groupBy","countBy","sortBy","indexBy"];i.each(b,function(t){g.prototype[t]=function(e,r){var s=i.isFunction(e)?e:function(t){return t.get(e)};return i[t](this.models,s,r)}});var w=e.View=function(t){this.cid=i.uniqueId("view");t||(t={});i.extend(this,i.pick(t,E));this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var x=/^(\S+)\s*(.*)$/;var E=["model","collection","el","id","attributes","className","tagName","events"];i.extend(w.prototype,u,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,i){if(this.$el)this.undelegateEvents();this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0];if(i!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=i.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[t[e]];if(!r)continue;var s=e.match(x);var n=s[1],a=s[2];r=i.bind(r,this);n+=".delegateEvents"+this.cid;if(a===""){this.$el.on(n,r)}else{this.$el.on(n,a,r)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");var r=e.$("<"+i.result(this,"tagName")+">").attr(t);this.setElement(r,false)}else{this.setElement(i.result(this,"el"),false)}}});e.sync=function(t,r,s){var n=T[t];i.defaults(s||(s={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:n,dataType:"json"};if(!s.url){a.url=i.result(r,"url")||M()}if(s.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(s.attrs||r.toJSON(s))}if(s.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(s.emulateHTTP&&(n==="PUT"||n==="DELETE"||n==="PATCH")){a.type="POST";if(s.emulateJSON)a.data._method=n;var o=s.beforeSend;s.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",n);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!s.emulateJSON){a.processData=false}if(a.type==="PATCH"&&k){a.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var h=s.xhr=e.ajax(i.extend(a,s));r.trigger("request",r,h,s);return h};var k=typeof window!=="undefined"&&!!window.ActiveXObject&&!(window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent);var T={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var S=/\((.*?)\)/g;var H=/(\(\?)?:\w+/g;var A=/\*\w+/g;var I=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,u,{initialize:function(){},route:function(t,r,s){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){s=r;r=""}if(!s)s=this[r];var n=this;e.history.route(t,function(i){var a=n._extractParameters(t,i);n.execute(s,a);n.trigger.apply(n,["route:"+r].concat(a));n.trigger("route",r,a);e.history.trigger("route",n,r,a)});return this},execute:function(t,e){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(I,"\\$&").replace(S,"(?:$1)?").replace(H,function(t,e){return e?t:"([^/?]+)"}).replace(A,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var N=e.History=function(){this.handlers=[];i.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var R=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var P=/msie [\w.]+/;var C=/\/$/;var j=/#.*$/;N.started=false;i.extend(N.prototype,u,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=decodeURI(this.location.pathname+this.location.search);var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.slice(i.length)}else{t=this.getHash()}}return t.replace(R,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started");N.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var r=this.getFragment();var s=document.documentMode;var n=P.exec(navigator.userAgent.toLowerCase())&&(!s||s<=7);this.root=("/"+this.root+"/").replace(O,"/");if(n&&this._wantsHashChange){var a=e.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=a.hide().appendTo("body")[0].contentWindow;this.navigate(r)}if(this._hasPushState){e.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!n){e.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=r;var o=this.location;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){this.fragment=this.getFragment(null,true);this.location.replace(this.root+"#"+this.fragment);return true}else if(this._hasPushState&&this.atRoot()&&o.hash){this.fragment=this.getHash().replace(R,"");this.history.replaceState({},document.title,this.root+this.fragment)}}if(!this.options.silent)return this.loadUrl()},stop:function(){e.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);N.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){t=this.fragment=this.getFragment(t);return i.any(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!N.started)return false;if(!e||e===true)e={trigger:!!e};var i=this.root+(t=this.getFragment(t||""));t=t.replace(j,"");if(this.fragment===t)return;this.fragment=t;if(t===""&&i!=="/")i=i.slice(0,-1);if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new N;var U=function(t,e){var r=this;var s;if(t&&i.has(t,"constructor")){s=t.constructor}else{s=function(){return r.apply(this,arguments)}}i.extend(s,r,e);var n=function(){this.constructor=s};n.prototype=r.prototype;s.prototype=new n;if(t)i.extend(s.prototype,t);s.__super__=r.prototype;return s};p.extend=g.extend=$.extend=w.extend=N.extend=U;var M=function(){throw new Error('A "url" property or function must be specified')};var q=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}};return e});


var appEvents = {};
_.extend(appEvents, Backbone.Events);

appEvents.PLAY_NEXT = 'player_play_next'; // player włączka kolejny plik który miał wczesniej zbuforowany
appEvents.CHANGE_RELOAD_MODE = 'change_reload_mode';// zmiana trybu przeładowania w routerze
appEvents.PLAY_CLIP_ON_URL = 'play_clip_on_url';// playlista wysyła sygnał że player bedzie odtwarzal clip o takim urlu
appEvents.PLAY_CLIP_ON_MVP = 'play_clip_on_mvp'; //playlista wysyla sygnal ze takie mvpId ma grac w tym momencie. reakcja na wstecz / next
appEvents.SET_NEW_URL = 'set_new_ulr'; // zostal ustawiony nowy ULR. Wejscie na serwis lub klikanie wstecz next
appEvents.NEXT_CLIP_INFO = 'next_clip_info';// play lista informuje co bedzie grane po biezacym klipie
appEvents.PLAYER_READY = 'player_ready';// player jest gotowy do grania
appEvents.PLAYER_ERROR = 'player_error';// player zwraca blad
appEvents.KEEP_PLAYING = 'keep_playint';//trigerowane co 15s odtwarzania 
appEvents.PLAYER_START = 'player_start';//trigerowane po starcie
appEvents.PLAYER_PAUSED = 'player_paused';//pause click
appEvents.PLAYER_RESUME = 'player_resume';//resume click
appEvents.AD_PLAY = 'ad_play';//ad start playing
appEvents.AD_STOP = 'ad_stop';//ad finish
appEvents.ON_PLAYER_CLICK = 'on_player_click';// gdy ktos kliknie w obszar playera

//-------- debug
/*appEvents.oldtrigger = appEvents.trigger;
 appEvents.trigger = function(a,b,c,d,e,f,g){
 console.log('<<< EVENT >>>',a,b);
 appEvents.oldtrigger(a,b,c,d,e,f,g);
 };*/


var mvp = mvp || {};
mvp.ready = function (facade) {
    if (/cloudint.onet/.test(document.location.host) || /dev.onet/.test(document.location.host)) {
        mvp.PlaylistProxy.CKM_URL = 'http://rtxint.c1r1.onet?host-header=qi.ckm.onetapi.pl';
    }

    mvp.LocalMediator = function () { // LocalMediator został zdefiniowany w przestrzeni mvp, ale może być zdefiniowany w dowolnej przestrzeni nazw

        this.Extends = mvp.Mediator; // dopuszczalne jest dziedziczenie po Mediator, ale preferowane jest mvp.Mediator

        this.initialize = function () {
            this.parent(mvp.LocalMediator.NAME);
        };
        mvp.mvpPlayerError = false;

        this.handleNotification = function (notification) {
            switch (notification.getName()) {

                case mvp.PlaylistProxy.LOAD:
                    appEvents.trigger(appEvents.PLAYER_READY);
                    break;
                case mvp.PlayerFacade.PLAY_NEXT:
                    if (mvp.mvpPlayerError) {
                        mvp.mvpPlayerError = false;
                    } else {
                        if (!notification.body.related) {
                            appEvents.trigger(appEvents.PLAY_NEXT, notification.body);
                        }
                    }
                    break;
                case mvp.VideoScreenMediator.FULL_SCREEN_CHANGE:
                    if (notification.body.fullScreen) {
                        appEvents.trigger(appEvents.CHANGE_RELOAD_MODE, "allButUrl");
                    } else {
                        (window.mvp.PlayerFacade.getInstance()).sendNotification(window.mvp.PlayerFacade.GET_TIME, {
                            callback: function (time) {
                                var currentPlayertime = Math.floor(time / 60) + ":" + Math.floor(time % 60);
                                appEvents.trigger(appEvents.CHANGE_RELOAD_MODE, "all", "#play:" + currentPlayertime);
                            },
                            id: nextClipManager.getCurrentMvpId()
                        });
                    }
                    break;
                case mvp.PlaylistProxy.CKM_DATA_ACQUIRED:
                    if (typeof (notification.body.geoIp) !== 'undefined' && notification.body.geoIp === false) {
                        mvp.mvpPlayerError = true;
                        appEvents.trigger(appEvents.PLAYER_ERROR, notification.body, 'infoGeo');
                    }
                    break;
                case mvp.PlaylistMediator.SOFT_STRATEGY_ERROR:
                    mvp.mvpPlayerError = true;
                    appEvents.trigger(appEvents.PLAYER_ERROR, notification.body, 'infoDevice');
                    break;
                case mvp.PlaylistMediator.NO_STRATEGY:
                    mvp.mvpPlayerError = true;
                    appEvents.trigger(appEvents.PLAYER_ERROR, notification.body, 'infoDevice');
                    break;
                case mvp.VideoEvent.KEEP:
                    if (notification.body.data.playstate === "playing") {                        
                        (window.mvp.PlayerFacade.getInstance())
                                .sendNotification(window.mvp.PlayerFacade.GET_TIME, {
                            callback: function (time) {
                                appEvents.trigger(appEvents.KEEP_PLAYING, time);
                            },
                            id: nextClipManager.getCurrentMvpId()
                        });
                    }
                    break;
                case mvp.ControlsMediator.Notifications.CLICKED:
                case mvp.VideoScreenMediator.SCREEN_CLICK:
                    setTimeout(function(){
                        (window.mvp.PlayerFacade.getInstance()).sendNotification(
                                window.mvp.PlayerFacade.GET_TIME, {
                                callback: function (time) {;
                                    appEvents.trigger(appEvents.ON_PLAYER_CLICK, time);
                                },
                                id: nextClipManager.getCurrentMvpId()
                            });
                    },100);
                    break;
                case mvp.ControlsMediator.Notifications.USER_VOLUME_CHANGE:
                    if (typeof (silentPlay) !== "undefined" && silentPlay.setRunning) {
                        silentPlay.setRunning(false);
                    }
                    appEvents.trigger(appEvents.ON_PLAYER_CLICK);
                    break;
                case mvp.VideoEvent.START:
                    appEvents.trigger(appEvents.PLAYER_START);
                    break;
                case mvp.VideoEvent.PAUSED:
                    appEvents.trigger(appEvents.PLAYER_PAUSED);
                    break;
                case mvp.VideoEvent.PLAYING:
                    appEvents.trigger(appEvents.PLAYER_RESUME);
                    break;
                case mvp.VideoEvent.AD_PLAY:
                    appEvents.trigger(appEvents.AD_PLAY);
                    break;
                case mvp.VideoEvent.AD_STOP:
                    appEvents.trigger(appEvents.AD_STOP);
                    break;
                default:
                    break;
            }
        };

        this.listNotificationInterests = function () {
            return [
                mvp.VideoEvent.AD_PLAY,
                mvp.VideoEvent.AD_STOP,
                mvp.VideoEvent.START,
                mvp.VideoEvent.PAUSED,
                mvp.VideoEvent.PLAYING,
                mvp.PlayerFacade.PLAY_NEXT,
                mvp.VideoScreenMediator.FULL_SCREEN_CHANGE,
                mvp.PlaylistProxy.LOAD,
                mvp.PlaylistProxy.CKM_DATA_ACQUIRED,
                mvp.PlaylistMediator.NO_STRATEGY,
                mvp.PlaylistMediator.SOFT_STRATEGY_ERROR,
                mvp.VideoEvent.KEEP,
                mvp.ControlsMediator.Notifications.CLICKED,
                mvp.VideoScreenMediator.SCREEN_CLICK,
                mvp.ControlsMediator.Notifications.USER_VOLUME_CHANGE
            ];
        };
    };

    mvp.LocalMediator = new mvp.Class(new mvp.LocalMediator()); // Dopuszczalne jest tworzenie klasy przez Class, ale preferowane jest mvp.Class
    mvp.LocalMediator.NAME = 'mvp_LocalMediator';

    if (!facade.hasMediator(mvp.LocalMediator.NAME)) {
        var localMediator = new mvp.LocalMediator();
        facade.registerMediator(localMediator);
    }
};


var silentPlay = {
    _isActive: false,
    _isWorking: false,
    _isRunning: false,
    _playerIsReady: false,
    _playingType: '',
    _host: '',
    _validHosts: /(.*).onet.pl/,
    isWorking: function() {
        return this._isWorking;
    },
    setRunning: function(value) {
        this._isRunning = value;
    },
    isRunning: function() {
        return this._isRunning;
    },
    setHost: function(host) {
        this._host = decodeURIComponent(host);
    },
    setPlayingType: function() {

        if (this._isHostValid()) {
            this._playingType = 'delayed';
        } else {
            this._playingType = 'silent';
        }
    },
    getPlayingType: function() {
        return this._playingType;
    },
    init: function(percent) {
        if (typeof (percent) === "undefined") {
            return;
        }

        var that = this;

        this._isWorking = true;

        appEvents.on(appEvents.PLAYER_READY, function() {
            that._playerIsReady = true;
        });

        var randomDecisionresult = this._getRandomDecision(percent);

        if (randomDecisionresult) {
            this._isActive = true;
        }

        if (gracePeriodManager.getAvgTime() < 5) {
            if (randomDecisionresult) {
                $(function() {
                    dataLayer.push({
                        'event': 'gaTriggerEvent',
                        'gaEventCategory': 'SilentPlay',
                        'gaEventAction': 'positiveResult',
                        'gaEventLabel': '1'
                    });
                });
            } else {
                $(function() {
                    dataLayer.push({
                        'event': 'gaTriggerEvent',
                        'gaEventCategory': 'SilentPlay',
                        'gaEventAction': 'negativeResult',
                        'gaEventLabel': '0'
                    });
                });
            }
        } else {
            $(function() {
                dataLayer.push({
                    'event': 'gaTriggerEvent',
                    'gaEventCategory': 'SilentPlay',
                    'gaEventAction': 'outOfDecision',
                    'gaEventLabel': gracePeriodManager.getAvgTime()
                });
            });
        }

        var addEvent, eventName;
        if (window.attachEvent) {
            addEvent = window.attachEvent;
            eventName = 'onmessage';
        } else {
            addEvent = window.addEventListener;
            eventName = 'message';
        }

        var started = false;
        var paused = false;


        appEvents.on(appEvents.ON_PLAYER_CLICK, function() {
            that._blockSilentPlayInOthersPlayers();
        });
        addEvent(eventName, function(event) {
            if (event.data === 'IsManagerShouldWork?' && that._isActive) {
                window.parent.postMessage('ManagerShouldWork', '*');
            }

            var afterPlayerReady = function() {
                if (event.data === 'silentPlay') {
                    that.setRunning(true);
                    if (!started) {
                        visibilityDetector.watchContentVisibility(that._startMvpPlayer);
                        started = true;
                    }
                    if (paused) {
                        (mvp.PlayerFacade.getInstance()).sendNotification(mvp.PlayerFacade.RESUME, {
                            id: $('.mvp').attr('id')
                        });
                        paused = false;
                    }
                }
                if (started && !paused && event.data === 'stopPlayingNotVisible') {
                    if (that._playingType === 'delayed') {
                        (mvp.PlayerFacade.getInstance()).sendNotification(mvp.PlayerFacade.PAUSE, {
                            id: $('.mvp').attr('id')
                        });
                        paused = true;
                    }
                }
                if (started && !paused && event.data === 'stopPlaying') {
                    (mvp.PlayerFacade.getInstance()).sendNotification(mvp.PlayerFacade.PAUSE, {
                        id: $('.mvp').attr('id')
                    });
                    paused = true;
                }
            };

            if (!that._playerIsReady) {
                appEvents.on(appEvents.PLAYER_READY, function() {
                    afterPlayerReady();
                });
            } else {
                afterPlayerReady();
            }

        }, false);

    },
    _startMvpPlayer: function() {
        if (this._playingType === 'delayed') {
            (mvp.PlayerFacade.getInstance()).sendNotification(mvp.PlayerFacade.DELAYED_START, {
                id: $('.mvp').attr('id'),
                offset: 0,
                time: 1000
            });
        } else {
            (mvp.PlayerFacade.getInstance()).sendNotification(mvp.PlayerFacade.PLAY, {
                id: $('.mvp').attr('id'),
                offset: 0,
                silentMode: true
            });
        }
    },
    _blockSilentPlayInOthersPlayers: function() {
        if (this._playingType === 'silent') {
            window.parent.postMessage('ManagerShouldStop', '*');
        }
    },
    _getRandomDecision: function(percent) {
        var value = Math.random();
        if (value < percent / 100) {
            return true;
        } else {
            return false;
        }
    },
    _isHostValid: function() {
        if (this._host.match(new RegExp(this._validHosts)) !== null) {
            return true;
        } else {
            return false;
        }
    },
};


var clipListManager = {
    _clips: false,
    _mvpIds: false,
    permanentList: true,
    setClips: function (clips, mainChannel) {
        this.clearList();
        this.addClips(clips, mainChannel);
    },
    getClipByIndex: function (index) {
        return this._getClips()[this._getMvpIds()[index]];
    },
    getNextClipByMvpId: function (MvpId) {
        var nexMvpIdIndex = _.indexOf(this._getMvpIds(), MvpId) + 1;
        if (typeof (this._getMvpIds()[nexMvpIdIndex]) !== "undefined") {
            return this._getClips()[this._getMvpIds()[nexMvpIdIndex]];
        } else {
            return false;
        }
    },
    getClipByURL: function (url) {
        var currentClips = this._getClips();
        for (var i in currentClips) {
            if (currentClips[i].url === "http://"+url) {
                return currentClips[i];
            }
        }
        return false;
    },
    addClips: function (clips, mainChannel) {
        var currentClips = this._getClips();
        var currentMvpIds = this._getMvpIds();
        for (var i = 0 in clips) {
            if (clips.hasOwnProperty(i)) {
                currentMvpIds.push(clips[i].ckmId);
                currentClips[clips[i].ckmId] = {
                    channel: (mainChannel) ? mainChannel : clips[i].channel,
                    mvpId: clips[i].ckmId,
                    title: clips[i].title,
                    duration: clips[i].duration,
                    url: "http://"+clips[i].url
                };
                if (typeof (clips[i].image) !== "undefined") {
                    currentClips[clips[i].ckmId].image = clips[i].image;
                }
                if (typeof (clips[i].id) !== "undefined") {
                    currentClips[clips[i].ckmId].uuid = clips[i].id;
                }
                if (typeof (clips[i].uuid) !== "undefined") {
                    currentClips[clips[i].ckmId].uuid = clips[i].uuid;
                }
            }
        }
        this._saveClips(currentClips);
        this._saveMvpIds(currentMvpIds);
    },
    clearList: function () {
        this._saveClips({});
        this._saveMvpIds([]);
    },
    getClipByMvpId: function (MvpId) {
        return this._getClips()[MvpId];
    },
    isClipOnList: function (clip) {

        if (typeof (this.getClipByIndex(0)) === "undefined" || this.getClipByIndex(0).channel !== clip.channel) {
            return false;
        }
        var currentClips = this._getClips();
        for (var i in currentClips) {
            if (currentClips[i].uuid === clip.uuid) {
                var MvpIds = this._getMvpIds();
                MvpIds[_.indexOf(MvpIds,i)] = clip.ckmId;
                currentClips[clip.ckmId] = JSON.parse(JSON.stringify(currentClips[i]));
                currentClips[clip.ckmId].mvpId = clip.ckmId;
                currentClips[clip.ckmId].title = clip.title;
                if(clip.ckmId !== i){
                    delete currentClips[i];
                }
                this._saveClips(currentClips);
                this._saveMvpIds(MvpIds);
                return true;
            }
        }
        return false;
    },
    _saveClips: function (clips) {
        this._clips = clips;
        if (this.permanentList) {
            try {
                localStorage.setItem("clips_nextVideo", JSON.stringify(this._clips));
                localStorage.setItem("clips_nextVideo_ttl", Date.now());
            } catch (e) {
            }
        }
    },
    _saveMvpIds: function (MvpIds) {
        this._mvpIds = MvpIds;
        if (this.permanentList) {
            try {
                localStorage.setItem("MvpIds_nextVideo", JSON.stringify(this._mvpIds));
            } catch (e) {
            }
        }
    },
    _getClips: function () {
        if (this._clips)
            return this._clips;
        else {
            var clipsFromLS = JSON.parse(localStorage.getItem("clips_nextVideo"));
            var clipsFromLSTTL = parseInt(localStorage.getItem("clips_nextVideo_ttl")?localStorage.getItem("clips_nextVideo_ttl"):0);
            var ttl = 1000*60*10; //10 min
            if (clipsFromLS && clipsFromLSTTL + ttl > Date.now()
                    && clipsFromLSTTL !== 0) {
                this._clips = clipsFromLS;
                return clipsFromLS;
            } else
                return {};
        }
    },
    _getMvpIds: function () {
        if (this._mvpIds)
            return this._mvpIds;
        else {
            var MvpIdsFromLS = JSON.parse(localStorage.getItem("MvpIds_nextVideo"));
            if (MvpIdsFromLS) {
                this._mvpIds = MvpIdsFromLS;
                return MvpIdsFromLS;
            } else
                return [];
        }
    }
};

var nextClipManager = {
    embedExternal: false,
    embed: false,
    playRelated: true,
    hiddenUrl: false,
    hideVideoTitle: false,
    _currentClipMvpId: false,
    _primaryMvpId: 0,
    _playlistUuid: false,
    _allowErrorInfo: true,
    _mvpIdForGetNextQuery: false,
    _offset: 0,
    _limit: 20,
    _maxGetNextReqestAtempt: 3,
    setAutonextMode: function (currentClip, mvpIdForGetNextQuery) {
        if(typeof(mvpIdForGetNextQuery) !== 'undefined'){
            this._mvpIdForGetNextQuery = mvpIdForGetNextQuery;
        }
        this._init();
        currentClip.id = currentClip.uuid;
        this._currentClipMvpId = currentClip.ckmId;
        this._primaryMvpId = currentClip.ckmId;
        if (!clipListManager.isClipOnList(currentClip)) {
            clipListManager.setClips([currentClip]);
        }

        if (this.playRelated) {
            var error = false;
            var that = this;
            appEvents.listenToOnce(appEvents, appEvents.PLAYER_ERROR, function() {
                error = true;
            });
            appEvents.listenToOnce(appEvents, appEvents.PLAYER_READY, function() {
                if (!error) {
                    that._triggerNextClipInfo();
                }
            });

        }
    },
    setPlayListMode: function (list, playlistUUid) {
        this._init();
        currentClip.id = currentClip.uuid;
        this._currentClipMvpId = currentClip.ckmId;
        this._playlistUuid = playlistUUid;
        clipListManager.permanentList = false;
        clipListManager.setClips([currentClip]);
        this._offset = 1;
        this._triggerNextClipInfo();
    },
    getCurrentMvpId: function () {
        return this._currentClipMvpId;
    },
    _init: function () {
        var that = this;

        appEvents.on(appEvents.PLAY_NEXT, function (notification) { // player changing material
            that._currentClipMvpId = notification.nextId;
            var nextClip = clipListManager.getClipByMvpId(notification.nextId);
            appEvents.trigger(appEvents.PLAY_CLIP_ON_URL, nextClip.url);
            that._triggerNextClipInfo();
        });

        appEvents.on(appEvents.PLAYER_READY, function () { // player starting play material
            var currentClip = clipListManager.getClipByMvpId(that._currentClipMvpId);
            var notification = {
                id: $('.mvp').first().attr('id'),
                title: currentClip.title,
                titleHref: '',
                logo: '',
                logoHref: ''
            };
            if (!that.hiddenUrl &&
                location.href.indexOf('onet.tv/embed-video.html') === -1 &&
                location.href.indexOf('onet.tv/embed-detail.html') === -1 &&
                that.embed && currentClip.url !== 'http://') {
                notification.titleHref = currentClip.url;
            }
            if (!that.hideVideoTitle) {
                 (mvp.PlayerFacade.getInstance()).sendNotification(mvp.PlayerFacade.SET_TITLE_AND_LOGO, notification);
            }
        });

        appEvents.on(appEvents.SET_NEW_URL, function (url) { // user click back or foward
            var newClip = clipListManager.getClipByURL(url);
            if (newClip) {
                var oldMvp = that._currentClipMvpId;
                that._currentClipMvpId = newClip.mvpId;
                appEvents.trigger(appEvents.PLAY_CLIP_ON_MVP, {'oldMvp': oldMvp, 'newMvp': newClip.mvpId});
                that._triggerNextClipInfo();
            }
        });

        appEvents.on(appEvents.PLAYER_ERROR, function (notification, type) { // player has error while playing
            if (!that._allowErrorInfo) {
                return;
            }
            that._allowErrorInfo = false;
            var errorMvpId;
            switch (type) {
                case "infoDevice":
                    errorMvpId = "mvp:328353.1406237001";
                    //int
                    // errorMvpId = "mvp:107712.451835626";
                    break;
                case "infoGeo":
                    errorMvpId = "mvp:328356.1466628431";
                    localStorage.removeItem("deviceConfig");
                    //int
                    // errorMvpId = "mvp:107712.451835626";
                    break;
                case "missing":
                    errorMvpId = "mvp:328354.266030470";
                    //int
                    // errorMvpId = "mvp:107712.451835626";
                    break;
                default:
                    return;
                    break;
            }
                    appEvents.listenToOnce(appEvents, appEvents.PLAYER_READY, function() { //player start error material
                        that._allowErrorInfo = true;

                        appEvents.listenToOnce(appEvents, appEvents.NEXT_CLIP_INFO, function() {
                            var nextClip = clipListManager.getNextClipByMvpId(that._currentClipMvpId);
                            appEvents.trigger(appEvents.PLAY_NEXT, {nextId: nextClip.mvpId});
                        });
                        that._triggerNextClipInfo({mvpId: that._currentClipMvpId});

                    });
                    mvp.mvpPlayerError = true;

            appEvents.trigger(appEvents.PLAY_CLIP_ON_MVP, {'oldMvp': that._currentClipMvpId, 'newMvp': errorMvpId});


        });

    },
    _triggerNextClipInfo: function (currentClip) {
        var nextClip = clipListManager.getNextClipByMvpId(this._currentClipMvpId);
        var currentMvpId = (currentClip) ? currentClip.mvpId : this._currentClipMvpId;
        if (nextClip) {
            appEvents.trigger(appEvents.NEXT_CLIP_INFO, {'currentMvp': currentMvpId, 'nextClip': nextClip});
        } else {
            var that = this;
            this._getClips(function () {
                that._triggerNextClipInfo(currentClip);
            });
        }
    },
    _getClips: function (callback, atemptCount) {
        var that = this;
        DeviceInfo.getDeviceConfig(function (deviceConfig) {

            var dataParams = {
                offset: that._offset,
                limit: that._limit,
                deviceConfig: JSON.stringify(deviceConfig)
            };

            if (that.embedExternal === true) {
                dataParams.embedExternal = 1;
            }

            var mainChannel = false;

            if (that._primaryMvpId !== 0) {
                var primaryClip = clipListManager.getClipByMvpId(that._primaryMvpId);
                dataParams.mvpId = primaryClip.mvpId.replace("mvp:", "");
                if (primaryClip.channel !== "")
                {
                    dataParams.channel = primaryClip.channel;
                }
                mainChannel = primaryClip.channel;
            }
            if(that._mvpIdForGetNextQuery){
                dataParams.mvpId = that._mvpIdForGetNextQuery;
            }

            if (that._playlistUuid) {
                dataParams.playListUuid = that._playlistUuid;
            }

            $.ajax({
                url: "/_a/get-nextclips.json",
                data: dataParams,
                dataType: 'json',
                success: function (json) {
                    clipListManager.addClips(json.data, mainChannel);
                    that._offset = that._offset + json.data.length;
                    if (callback && json.data.length > 0) { ///<----autonext break
                        callback();
                    }
                },
                error: function () {
                    if (typeof (atemptCount) === "undefined") {
                        atemptCount = that._maxGetNextReqestAtempt - 1;
                    } else {
                        atemptCount = atemptCount - 1;
                    }

                    if (atemptCount === 0) {
                        return;
                    } else {
                        that._getClips(callback, atemptCount);
                    }
                }
            });
        });
    }
};



var HistoryApiReloader = {
    _reloadDelay: 4000,
    _atemptCount: 0,
    _currentUrl: false,
    _previousUrl: false,
    _mode: "autonext",
    _nextUrl: false,
    _forcedChangingMovie: false,
    _playerReady: false,
    _embed: false,
    _historyMvpIds: [],
    init: function () {

        var that = this;
        appEvents.on(appEvents.PLAY_CLIP_ON_URL, function (new_url) {
            that.setCurrentSite(new_url);
        });
        appEvents.on(appEvents.PLAY_CLIP_ON_MVP, function (mvpIds) {
            if (that._currentUrl) {
                that._setNextMvpId(mvpIds.oldMvp, mvpIds.newMvp, false);
            }
        });

        appEvents.on(appEvents.SET_NEW_URL, function (new_url) {
            that.setCurrentSite(new_url);
        });

        appEvents.on(appEvents.NEXT_CLIP_INFO, function (new_clip) { //-------------TODO obslozyc przypadek jesli player bedzie szybszy niz playlista

            if (that._playerReady) {
                that._prepareNextReload(new_clip);
            } else {
                appEvents.listenToOnce(appEvents, appEvents.PLAYER_READY, function () {
                    that._prepareNextReload(new_clip);
                    that._playerReady = true;
                });
            }
        });

        appEvents.on(appEvents.PLAYER_READY, function (new_clip) {
            that._playerReady = true;
        });

    },
    setPlaylistMode: function () {
        this._mode = "playlist";
    },
    setCurrentSite: function (currentUrl) {
        var isFirstLoad = (!this._currentUrl);

        if (!isFirstLoad) {
            this.executeReload(currentUrl, true);
        }

        this._previousUrl = this._currentUrl;
        this._currentUrl = currentUrl;
    },
    _prepareNextReload: function (newClip) {

        this._setNextMvpId(newClip.currentMvp, newClip.nextClip.mvpId, true);
        if (this._mode == "autonext") {
            this._getReloadData(newClip.nextClip.url);
        } else {
            this._nextClipTitle = newClip.nextClip.title;
        }
    },
    _setNextMvpId: function (currentMvpId, nextMvpId, loadOnly) {
        this._historyMvpIds.push(currentMvpId);
        if (_.indexOf(this._historyMvpIds, nextMvpId) !== -1) {
            // location.reload();
        }
        if (loadOnly)
            (mvp.PlayerFacade.getInstance()).sendNotification(mvp.PlayerFacade.LOAD_NEXT, {
                id: currentMvpId,
                nextId: nextMvpId,
                loadOnly: loadOnly
            });
        else {
            (mvp.PlayerFacade.getInstance()).sendNotification(mvp.PlayerFacade.PLAY_NEXT, {
                currentId: currentMvpId, nextId: nextMvpId, playlist: true, autoplay: true
            });
        }
    },
    _getReloadData: function (url, cb) {
        var that = this;
        if (location.protocol=='https:') {
            url = url.replace("http://", "https://");
        }
        if (typeof (siteCache) !== "undefined" && !siteCache.isCached(url) && !this._embed) {
            Backbone.ajax({
                url: url,
                success: function (data) {
                    siteCache.addToCache(url, data);
                    if (cb) {
                        cb(data);
                    }
                    that._atemptCount = 0;
                },
                error: function (err) {
                    that._atemptCount++;
                    if (that._atemptCount < 3) {
                        setTimeout(function () {
                            that._getReloadData(url, cb);
                        }, 1000);
                    }
                }
            });
        }
        else {
            if (cb) {
                cb();
            }
        }
    },
    executeReload: function (url) {
        var that = this;
        if (this._mode == "autonext") {
            if (typeof (siteCache) !== "undefined") {
                if (siteCache.isCached(url)) {
                    this._replaceBlocks(url);
                } else {
                    this._getReloadData(url, function () {
                        that._replaceBlocks(url);
                    });
                }
            }
        } else {
            $("#o_embedTitle").text(this._nextClipTitle);
        }
    },
    _replaceBlocks: function (url) {
        var blocks = siteCache.getFromCache(url);
        for (var i in blocks) {
            if (blocks.hasOwnProperty(i)) {
                $(i).html(blocks[i]);
            }
        }
    }
};
HistoryApiReloader.init();


/**
 * Biblioteka wykrywająca DRM
 * sprawdza czy:
 *  - jest dostępny jakikolwiek DRM
 *  - niezależie od tego pozwala sprawdzić jakie pluginy obsługuje przeglądarka
 *
 * Wymaga dostępności biblioteki Silverlight oraz swfobject
 * w wersjach najnowszych na dzień 20140909
 * @author wbrygola
 */
var Detector = (function() {
   var detectSilverlight = function (version) {
      if (version == undefined)
      {
         version = null;
      }

      var isVersionSupported = false;

      try
      {
         var tryOlderIE = false;

         // Detect installation on IE11 and non-IE browsers
         try
         {
            var plugin = navigator.plugins["Silverlight Plug-In"];
            if (plugin)
            {
               // Plugin object exists - check for version argument
               if (version === null)
               {
                  // no string to parse - plugin is installed
                  isVersionSupported = true;
               }
               else
               {
                  // there is a string to parse - check if requested version is installed
                  var actualVer = plugin.description;
                  if (actualVer === "1.0.30226.2")
                  {
                     actualVer = "2.0.30226.2";
                  }

                  var actualVerArray = actualVer.split(".");
                  while (actualVerArray.length > 3)
                  {
                     actualVerArray.pop();
                  }

                  while (actualVerArray.length < 4)
                  {
                     actualVerArray.push(0);
                  }

                  var reqVerArray = version.split(".");
                  while (reqVerArray.length > 4)
                  {
                     reqVerArray.pop();
                  }

                  var requiredVersionPart;
                  var actualVersionPart;
                  var index = 0;

                  do
                  {
                     requiredVersionPart = parseInt(reqVerArray[index]);
                     actualVersionPart = parseInt(actualVerArray[index]);
                     index++;
                  }
                  while (index < reqVerArray.length && requiredVersionPart === actualVersionPart);

                  if (requiredVersionPart <= actualVersionPart && !isNaN(requiredVersionPart))
                  {
                     isVersionSupported = true;
                  }
               }
            }
            else
            {
               // Plugin object does not exist - get ready to try the IE detection approach.
               tryOlderIE = true;
            }
         }
         catch (e)
         {
            // Exception was thrown while checking for plugin object and version - get ready to try the IE detection approach.
            tryOlderIE = true;
         }

         if (tryOlderIE)
         {
            // Detect installation on IE10 and earlier IE browsers via ActiveXObject
            var control = new ActiveXObject('AgControl.AgControl');
            if (version === null)
            {
               isVersionSupported = true;
            }
            else if (control.IsVersionSupported(version))
            {
               isVersionSupported = true;
            }
            control = null;
         }
      }
      catch (e)
      {
         isVersionSupported = false;
      }

      return isVersionSupported;
   };

   var detectFlash = function() {
      if (navigator.plugins && navigator.plugins.length > 0) {
         var type = 'application/x-shockwave-flash';
         var mimeTypes = navigator.mimeTypes;
         if (mimeTypes && mimeTypes[type] && mimeTypes[type].enabledPlugin && mimeTypes[type].enabledPlugin.description) {
            return true;
         }
      } else if (navigator.appVersion.indexOf("Mac") == -1 && window.execScript) {
         var flashObj = null;
         try {
            flashObj = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
         } catch (ex) {
            return false;
         }
         if (flashObj != null) {
            try {
               flashObj.GetVariable("$version");
            }
            catch (err) {
               return false;
            }

            return true;
         }

         return false;
      }

      return false;
   };

   var detectWideVine = function() {
      var _detectIE = function()  {
         return (navigator.userAgent.toLowerCase().indexOf("msie") != -1) || (navigator.userAgent.toLowerCase().indexOf("trident") != -1);
      }

      var _setCookie = function(c_name,value,expireseconds) 
      {
         var exdate=new Date();
         exdate.setSeconds(exdate.getSeconds()+expireseconds);
         document.cookie=c_name+ "=" +escape(value)+ ((expireseconds==null) ? "" : ";expires="+exdate.toGMTString())
      }

      var _pluginInstalledIE = function() {
         try{
            var o = new ActiveXObject("npwidevinemediaoptimizer.WidevineMediaTransformerPlugin");
            o = null;
            return true;
         }catch(e){
            return false;
         }
         return false;
      }

      if (_detectIE() && _pluginInstalledIE()) { return true; }

      if ((typeof navigator.mimeTypes['application/x-widevinemediaoptimizer'] != 'undefined') && navigator.mimeTypes['application/x-widevinemediaoptimizer']) {
         _setCookie("FirefoxDisabledCheck", "");
         return true;
      }

   };

   var detectHtml5Video =  function() {
      var result = false;

      if(typeof HTMLVideoElement != 'undefined' &&
         typeof HTMLAudioElement != 'undefined' &&
         typeof HTMLCanvasElement != 'undefined') {
         var video = document.createElement('video');

         result = typeof video.canPlayType == 'function' && (video.canPlayType('video/mp4') == 'maybe' || (video.canPlayType('video/mp4') == 'probably' && window.navigator.userAgent.toLowerCase().indexOf('lg') > -1));
         delete video;
      }

      return result;
   };

   var detectDash = function() {
      return ("WebKitMediaSource" in window) || ("MediaSource" in window);
   };

   var detectVideWineForDash = function() {
      return !!navigator.mimeTypes['application/x-ppapi-widevine-cdm'];
   };

   var result = {
      BROWSER_PLUGINS: {
         FLASH: detectFlash(),
         SILVERLIGHT: detectSilverlight(),
         WIDEVINE: detectWideVine(),
         HTML5: detectHtml5Video(),
         DASH: detectDash(),
         DASH_VIDEWINE: detectDash() && detectVideWineForDash()
      }
   };

   result.DRM_AVAILABLE = result.BROWSER_PLUGINS.DASH_VIDEWINE || (result.BROWSER_PLUGINS.SILVERLIGHT || (result.BROWSER_PLUGINS.FLASH && result.BROWSER_PLUGINS.WIDEVINE));

   return result;

})();

var DeviceInfo = {
    _callbacks: [],
    isFreshDeviceConfig: false,
    deviceConfig: false,
    isDefaultConfig: false,
    browserConfig: false,
    defaultConfig: {
        ckmdevice: "PC_DRM",
        ckmformat: ["mp4", "ism_PlayReady", "flv", "hds", "ism"],
        geo: "pl"
    },
    init: function () {
        for (var i in Detector) {
            this[i] = Detector[i];
        }
        this.browserConfig = {
            plugins: {
                sl: this.BROWSER_PLUGINS.SILVERLIGHT ? "T" : "F",
                fl: this.BROWSER_PLUGINS.FLASH ? "T" : "F"
            }, ua: navigator.userAgent
        };
        if (!this.getFromLS('browserConfig')) {
            this.setToLS('browserConfig', this.browserConfig);
        }


        if (this.getFromLS('browserConfig') && (
                this.getFromLS('browserConfig').plugins.sl !== this.browserConfig.plugins.sl
                || this.getFromLS('browserConfig').plugins.fl !== this.browserConfig.plugins.fl)
                ) {
            this.setToLS('deviceConfig', false);
            this.setToLS('browserConfig', this.browserConfig);
        }


        if (this.getFromLS('deviceConfig')) {
            this.deviceConfig = this.getFromLS('deviceConfig');
            this.isDefaultConfig = this._compareDeviceConfig(this.deviceConfig, this.defaultConfig);
        } else {
            this.isFreshDeviceConfig = true;
        }
        var that = this;

        $(document).ready(function () {
            if (typeof (onetAds) !== 'undefined' && typeof (onetAds.on) !== 'undefined') {
                
                onetAds.on('showAds', function () {

                    if (that.isFreshDeviceConfig) {

                        that.setToLS('onetAdsGeoLoc', onetAds.geoloc.P);

                    } else { //!that.isFreshDeviceConfig

                        if (that.isObjectInLS('onetAdsGeoLoc')) {

                            if (that.isAdsGeoLocChanged(onetAds.geoloc.P)) {

                                that.resetDeviceConfig();
                                that.setToLS('onetAdsGeoLoc', onetAds.geoloc.P);

                            }

                        } else { //!that.isObjectInLS('onetAdsGeoLoc')

                            if (that.isBothGeoDetectorsAreEqual(onetAds.geoloc.P)) {

                                that.setToLS('onetAdsGeoLoc', onetAds.geoloc.P);

                            } else {

                                that.resetDeviceConfig();
                                that.setToLS('onetAdsGeoLoc', onetAds.geoloc.P);

                            }
                        }
                    }
                });
            }
        });

    },
    isBothGeoDetectorsAreEqual: function (AdsGeoLocCountry) {
        return  (AdsGeoLocCountry === 31 && this.getFromLS('deviceConfig').geo === 'pl')
                || (AdsGeoLocCountry !== 31 && this.getFromLS('deviceConfig').geo !== 'pl');

    },
    resetDeviceConfig: function () {
        this.setToLS('deviceConfig', false);
    },
    isAdsGeoLocChanged: function (AdsGeoLocCountry) {
        return this.getFromLS('onetAdsGeoLoc') !== AdsGeoLocCountry;
    },
    saveDeviceConfig: function (deviceConfig) {
        this.deviceConfig = deviceConfig;
        this.isDefaultConfig = this._compareDeviceConfig(this.deviceConfig, this.defaultConfig);

        for (var i in this._callbacks) {
            if (this._callbacks.hasOwnProperty(i)) {
                try {
                    this._callbacks[i](this.deviceConfig);
                } catch (e) {

                }
            }
        }

        this.setToLS('deviceConfig', deviceConfig);

    },
    _compareDeviceConfig: function (dc1, dc2) {
        if (dc1.ckmdevice !== dc2.ckmdevice || dc1.geo !== dc2.geo ||
                dc1.ckmformat.sort().toString() !== dc2.ckmformat.sort().toString()) {
            return false;
        } else {
            return true;
        }
    },
    isObjectInLS: function (key) {
        if (localStorage.getItem(key) !== null) {
            return true;
        } else {
            return false;
        }
    },
    getDeviceConfig: function (cb) {
        if (this.deviceConfig) {
            cb(this.deviceConfig);
        } else {
            this._callbacks.push(cb);
        }
    },
    getFromLS: function (key) {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {
            return false;
        }
    },
    setToLS: function (key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {

        }
    }
};
DeviceInfo.init();


var visibilityDetector = (function () {
    var stateKey, eventKey, keys = {
        hidden: "visibilitychange",
        webkitHidden: "webkitvisibilitychange",
        mozHidden: "mozvisibilitychange",
        msHidden: "msvisibilitychange"
    };
    for (stateKey in keys) {
        if (stateKey in document) {
            eventKey = keys[stateKey];
            break;
        }
    }

    var isVisibility = function () {
        if (!document[stateKey] || document[stateKey] === 'undefined') {
            return true;
        } else {
            return false;
        }
    };

    var watchContentVisibility = function (callback) {
            if (callback) {
                if (isVisibility()) {
                    callback();
                } else {
                    var cb = function() {
                        if (isVisibility()) {
                            callback();
                            document.removeEventListener(eventKey, cb);
                        }
                    };
                    document.addEventListener(eventKey, cb);
                }
            }
            return isVisibility();
        };

    return {
        isVisibility : isVisibility,
        watchContentVisibility : watchContentVisibility
    };
})();



var listManager = {
    _lists: {},
    listAction: '/_a/list.html',
    dynamicListAction: '/_a/dlist.html',
    isHidden: false,
    addList: function (listname, listparam) {
        this._lists[listname] = new list(listname, listparam);
    },
    registerList: function (listName, cb) {
        if (this._lists[listName] !== undefined) {
            this._lists[listName].register(cb);
        } else {
            console.error(listName);
        }
        if (!this.isHidden) {
            $('head').append('<style type="text/css">.o_dynamicElement {visibility:hidden;}</style>');
            this.isHidden = true;
        }
    },
    closeAddingList: function () {
        var i;
        var query = {lists: {}};

        if (!DeviceInfo.isDefaultConfig) {
            for (i in this._lists) {
                if (this._lists[i].isDynamicCatalog) {
                    query.lists[i] = this._lists[i].getQueryParams();
                    this._lists[i].isRefreshing = true;
                }
            }

            if (DeviceInfo.deviceConfig) {
                query.deviceConfig = JSON.stringify(DeviceInfo.deviceConfig);
            } else {
                query.browserConfig = JSON.stringify(DeviceInfo.browserConfig);
            }
            if (typeof (query.browserConfig) !== "undefined" || !$.isEmptyObject(query.lists)) {
                query.lists = JSON.stringify(query.lists);
                this.getListsContent(query);
            } else {
                for (var i in this._lists) {
                    if (this._lists[i].isRegistered) {
                        this._lists[i].show();
                    } else {
                        this._lists[i].isReadyToShow = true;
                    }
                }
            }
        } else {
            for (i in this._lists) {
                this._lists[i].isReadyToShow = true;
            }
        }
    },
    getListsContent: function (query) {
        var that = this;
        $.ajax({
            url: (DeviceInfo.deviceConfig) ? that.listAction : that.dynamicListAction,
            data: query,
            success: function (data) {
                if (!DeviceInfo.deviceConfig) {
                    that.saveDeviceConfig(data);
                }
                query.lists = JSON.parse(query.lists);
                for (var index in query.lists) {
                    try {
                        var newHtml = $($(data).find('#o_List' + index + 'Wrapper ul')[0]).html();
                        that._lists[index].newHtml = newHtml;
                        that._lists[index].replaceHtml();
                        that._lists[index].isReadyToShow = true;
                        that._lists[index].show();
                    } catch (e) {
                        if (that._lists[index].isRegistered) {
                            that._lists[index].show();
                        } else {
                            that._lists[index].isReadyToShow = true;
                        }
                    }
                }
            },
            error: function () {
                for (var i in that._lists) {
                    if (that._lists[i].isRegistered) {
                        that._lists[i].show();
                    } else {
                        that._lists[i].isReadyToShow = true;
                    }
                }
            }
        });
    },
    saveDeviceConfig: function (html) {
        var deviceConfigString = $(html).find('#deviceConfig').html();
        var deviceConfig = JSON.parse(deviceConfigString);
        delete deviceConfig.ip;
        DeviceInfo.saveDeviceConfig(deviceConfig);
    },
    refreshObjectReferences: function (listName) {
        this._lists[listName].refreshObjectReferences();
    },
    reloadListWithNewQueryParams: function (listName, params) {
        this._lists[listName].setNewQueryParams(params);
        this.closeAddingList();
    }
};

var list = function (listName, listParams) {
    this.callbacks = false;
    this.newHtml = false;
    this.name = listName;
    this.isRegistered = false;
    this.isReadyToShow = false;
    this.isLoading = false;
    this.isDynamicCatalog = true;
    this.isRefreshing = false;
    this.queryParams = listParams;
    this.objectList = false;
    this.objectWrapper = false;
};


list.prototype.getQueryParams = function () {
    return this.queryParams;
};

list.prototype.setNewQueryParams = function (params) {
    this.queryParams = params;
};

list.prototype.refreshObjectReferences = function () {
    this.objectList = $($('#o_List' + this.name + 'Wrapper ul')[0]);
    this.objectWrapper = $('#o_List' + this.name + 'Wrapper');
};

list.prototype.register = function (cb) {
    if (cb) {
        this.callbacks = cb;
    }
    this.objectList = $($('#o_List' + this.name + 'Wrapper ul')[0]);
    this.objectWrapper = $('#o_List' + this.name + 'Wrapper');
    this.isRegistered = true;
    this.replaceHtml();
    if (this.isReadyToShow) {
        this.show();
    }
};

list.prototype.replaceHtml = function () {
    if (this.newHtml && this.objectList) {
        this.objectList.html(this.newHtml);
        this.newHtml = false;
        return true;
    } else {
        return false;
    }
};
list.prototype.show = function () {
    if (this.callbacks && typeof this.callbacks.onShow !== "undefined") {
        this.callbacks.onShow(this.objectList);
    }
    if (this.objectWrapper) {
        this.objectWrapper.removeClass('o_dynamicElement');
    }
};


var poloniaModule = function() {

    var logoHtmlIsLodaed = false;
    var poloniaGeoDetected = false;
    var isJustRedirected = false;
    var videoTitle = false;

    if (window.location.hash.substr(0, 12) === '#geoMessage+') {
        isJustRedirected = true;
        var title = decodeURIComponent(window.location.hash.substr(12));
        window.location.hash = '';
        $(function() {
            var message;
            if (title.substr(0, 7) === 'Channel') {
                var channel = title.substr(7);
                message = 'Przepraszamy, ale nie możemy wyświetlić zawartości kanału "' + channel + '" w Twoim kraju. <a target="_blank" href="http://pomoc.onet.pl" >Sprawdź dlaczego</a>';
            } else {
                message = 'Przepraszamy, ale nie możemy wyświetlić filmu "' + title + '". <a target="_blank" href="http://pomoc.onet.pl" >Sprawdź dlaczego</a>';

            }
            var closeButton = $('<div>', {class: 'noMaterialInfoCloseButton'});
            var infoBlock = $('<div>', {class: 'noMaterialInfo', html: message});
            infoBlock.prepend(closeButton);
            $('#o_doc').prepend(infoBlock);

            closeButton.on('click', (function() {
                infoBlock.hide('fast');
            }));

            setTimeout(function() {
                infoBlock.hide('fast');
            }, 8000);

        });
    }

    DeviceInfo.getDeviceConfig(function(config) {
        if (config.geo !== 'pl') {
            poloniaGeoDetected = true;
        }
    });
    
    var goToSgOnChannel = function(channel) {
        DeviceInfo.getDeviceConfig(function(deviceConfig) {
            if (deviceConfig.geo !== 'pl' && !isJustRedirected) {
                window.location.href = '/#geoMessage+Channel' + encodeURIComponent(channel);
            }
        });
    };

    var goToAlternativeVideo = function(url) {
        DeviceInfo.getDeviceConfig(function(deviceConfig) {
            if (deviceConfig.geo !== 'pl' && !isJustRedirected) {
                window.location.href = url + '#geoMessage+' + encodeURIComponent(videoTitle);
            }
        });
    };
    
    var setVideoTitle = function (title){
        videoTitle = title;
    };

    var onPoloniaVersion = function() {
        DeviceInfo.deviceConfig.geo = 'en';
        clipListManager.clearList();
        DeviceInfo.saveDeviceConfig(DeviceInfo.deviceConfig);
        location.reload(true);
    };

    var offPoloniaVersion = function() {
        localStorage.clear();
        location.reload(true);
    };

    var logoHtmlLoaded = function() {
        logoHtmlIsLodaed = true;
    };

    var isPoloniaVersion = function() {
        return poloniaGeoDetected;
    };

    return {
        isPoloniaVersion: isPoloniaVersion,
        logoHtmlLoaded: logoHtmlLoaded,
        onPoloniaVersion: onPoloniaVersion,
        offPoloniaVersion: offPoloniaVersion,
        goToAlternativeVideo: goToAlternativeVideo,
        goToSgOnChannel: goToSgOnChannel,
        setVideoTitle: setVideoTitle
    };
}();

var disablePlayer = function (url) {
    $(document).ready(function () {
        var a = document.createElement("a");
        a.setAttribute("href", url);
        a.setAttribute("target", "_blank");
        a.classList.add("shield");
        
        var parentDiv = document.getElementById("mainPlayer");
        parentDiv.appendChild(a); 
    });
};


var gracePeriodManager = function () {
    var _numberOfDays = 1;
    var _periods = [
        {from: 0, to: 55, onetTvGracePeriod: 180, portalGracePeriod: 180},
        {from: 55, to: 145, onetTvGracePeriod: 180, portalGracePeriod: 180},
        {from: 145, to: 280, onetTvGracePeriod: 180, portalGracePeriod: 180},
        {from: 280, to: "max", onetTvGracePeriod: 180, portalGracePeriod: 180}
    ];
    /** inicjalizacja obiektu
     * 
     * @param {type} periods
     * @param {type} numberOfdays
     * @returns {undefined}
     */
    function init(periods, numberOfdays) {
        if (periods)
            _periods = periods;
        if (numberOfdays) {
            _numberOfDays = numberOfdays;
        }
        _listenPlayerEvents();
        _clearRubbish();
    }

    function getGracePeriod() {
        var avg = _getSpendTimeAvg();
        for (var i in _periods) {
            if (avg >= _periods[i].from) {
                if (_periods[i].to === "max" || avg < _periods[i].to) {
                    if (typeof (onetAds) !== "undefined") {
                        if (typeof (onetAds.time) !== "undefined") {
                            onetAds.time['TPSEG'] = (parseInt(i) + 1);
                        } else {
                            onetAds.time = {
                                TPSEG: (parseInt(i) + 1)
                            };
                        }

                        appEvents.once(appEvents.PLAYER_START, function () {
                            if (typeof (silentPlay) === "undefined" || !silentPlay.isRunning()) {
                                dataLayer.push({
                                    'event': 'gaTriggerEvent',
                                    'gaEventCategory': 'playerOnSegment',
                                    'gaEventAction': (parseInt(i) + 1),
                                    'gaEventLabel': avg
                                });
                            }
                        });
                    }

                    return {
                        onettv: _periods[i].onetTvGracePeriod,
                        portal: _periods[i].portalGracePeriod
                    };
                }
            }
        }
    }

    function _getSpendTimeAvg() {
        var data = _getData();
        var days = _getLatestDates(_getSaveDates(), _numberOfDays);
        var allSpendTime = 0;
        for (var i in days) {
            if (data[days[i]] !== undefined) {
                allSpendTime += data[days[i]];
            }
        }
        return allSpendTime === 0 ? 0 : allSpendTime / days.length;
    }

    function _dateToString(date) {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }

    function _getData() {
        try {
            var data = JSON.parse(localStorage.gracePeriodData);
        } catch (e) {
            data = {};
        }
        return data;
    }

    function _getLatestDates(dates, count) {
        dates.sort(function (a, b) {
            var dateA = a.split('-');
            var dateB = b.split('-');
            if (parseInt(dateA[0]) > parseInt(dateB[0])) {
                return -1;
            } else {
                if (parseInt(dateA[0]) < parseInt(dateB[0])) {
                    return 1;
                } else {
                    if (parseInt(dateA[1]) > parseInt(dateB[1])) {
                        return -1;
                    } else {
                        if (parseInt(dateA[1]) < parseInt(dateB[1])) {
                            return 1;
                        } else {
                            if (parseInt(dateA[2]) > parseInt(dateB[2])) {
                                return -1;
                            } else {
                                return 1;
                            }
                        }
                    }
                }
            }
        });
        return dates.slice(0, count);
    }

    function _setData(data) {
        try {
            localStorage.gracePeriodData = JSON.stringify(data);
        } catch (e) {

        }
    }

    function _listenPlayerEvents() {
        var startPlaying = false;
        var eventHistory = [];
        appEvents.once(appEvents.PLAYER_START, function () {
            eventHistory.push(appEvents.PLAYER_START);
            if (typeof (silentPlay) === "undefined" || !silentPlay.isRunning()) {
                startPlaying = new Date();
            }
        });
        appEvents.on(appEvents.PLAYER_RESUME, function () {           
            eventHistory.push(appEvents.PLAYER_RESUME);
            if (typeof (silentPlay) === "undefined" || !silentPlay.isRunning()) {
                startPlaying = new Date();
            }
        });
        appEvents.on(appEvents.KEEP_PLAYING, function () {
            eventHistory.push(appEvents.KEEP_PLAYING);
            if (startPlaying && (typeof (silentPlay) === "undefined" || !silentPlay.isRunning())) {
                _addWatchTime(new Date() - startPlaying);
                startPlaying = new Date();
            }
        });
        appEvents.on(appEvents.PLAYER_PAUSED, function () {
            eventHistory.push(appEvents.PLAYER_PAUSED);
            if (typeof (silentPlay) === "undefined" || !silentPlay.isRunning()) {
                _addWatchTime(new Date() - startPlaying);
                startPlaying = false;
            }
        });
        appEvents.on(appEvents.AD_PLAY, function () {
            eventHistory.push(appEvents.AD_PLAY);
            if (typeof (silentPlay) === "undefined" || !silentPlay.isRunning()) {
                if(!(eventHistory[0] === appEvents.PLAYER_START &&
                        eventHistory[1] === appEvents.AD_PLAY &&
                        eventHistory.length === 2)){
                    _addWatchTime(new Date() - startPlaying);
                }
                startPlaying = false;
            }
        });
        appEvents.on(appEvents.AD_STOP, function () {
            eventHistory.push(appEvents.AD_STOP);
            if (typeof (silentPlay) === "undefined" || !silentPlay.isRunning()) {
                startPlaying = new Date();
            }
        });
    }


    function _addWatchTime(value) {
        value = parseInt(value / 1000);
        var data = _getData();
        var today = _dateToString(new Date());

        if (data[today] === undefined) {
            data[today] = value;
        } else {
            data[today] += value;
        }
        _setData(data);

    }

    function _clearRubbish() {
        var data = _getData();
        var importantDays = _getLatestDates(_getSaveDates(), _numberOfDays * 3);
        var newData = {};
        for (var i in importantDays) {
            if (data[importantDays[i]] !== undefined) {
                newData[importantDays[i]] = data[importantDays[i]];
            }
        }
        _setData(newData);
    }

    function _getSaveDates() {
        var dates = [];
        var data = _getData();
        for (var i in data) {
            if (data.hasOwnProperty(i)) {
                dates.push(i);
            }
        }
        return dates;
    }

    return{
        init: init,
        getGracePeriod: getGracePeriod,
        getAvgTime: _getSpendTimeAvg
    };

}();


var delayPlay = function() {

    var _isPlayerReady = false;
    var _minVisibilityToPlay = 0.5;
    var _delayTime = 1000;
    var _playerState = 'off';

    function init() {
        _onPlayerReady(function() {
            _isPlayerReady = true;
        });
        _onPostMessage(function(event) {
            var visibility = _getVisibilityValue(event);
            if (visibility !== false) {
                _onPlayerReady(function() {
                    if (_shouldPlayerPlay(visibility)) {
                        if (_playerState === 'off') {
                            if (onetAds && onetAds.target.indexOf('GLOWNA/') !== -1) {
                                visibilityDetector.watchContentVisibility(_standardStartPlayer);
                            } else {
                                visibilityDetector.watchContentVisibility(_delayStartPlayer);
                            }
                        }

                        if (_playerState === 'pause') {
                            _resumePlayer();
                        }

                    } else {
                        if (_playerState === 'playing') {
                            _pausePlayer();
                        }
                    }
                });
            }
        });
    }

    function _getVisibilityValue(PMevent) {

        try {
            var data = JSON.parse(PMevent.data);
            if (typeof data.vis !== 'undefined') {
                if (data.vis) {
                    return data.vis;
                } else {
                    return 0;
                }
            }
            return false;

        } catch (e) {
            return false;
        }

    }

    function _standardStartPlayer() {
        _playerState = 'playing';
        (mvp.PlayerFacade.getInstance()).sendNotification(mvp.PlayerFacade.PLAY, {
            id: $('.mvp').attr('id'),
            offset: 0
        });
    }

    function _delayStartPlayer() {
        _playerState = 'playing';
        (mvp.PlayerFacade.getInstance()).sendNotification(mvp.PlayerFacade.DELAYED_START, {
            id: $('.mvp').attr('id'),
            offset: 0,
            time: _delayTime
        });
    }

    function _resumePlayer() {
        _playerState = 'playing';
        (mvp.PlayerFacade.getInstance()).sendNotification(mvp.PlayerFacade.RESUME, {
            id: $('.mvp').attr('id')
        });
    }

    function _pausePlayer() {
        _playerState = 'pause';
        (mvp.PlayerFacade.getInstance()).sendNotification(mvp.PlayerFacade.PAUSE, {
            id: $('.mvp').attr('id')
        });
    }

    function _shouldPlayerPlay(visibility) {
        if (visibility >= _minVisibilityToPlay) {
            return true;
        } else {
            return false;
        }
    }

    function _onPostMessage(callback) {
        if (window.addEventListener) {
            addEventListener("message", callback, false);
        } else {
            attachEvent("onmessage", callback);
        }
    }

    function _onPlayerReady(callback) {
        if (_isPlayerReady) {
            callback();
            return;
        }
        appEvents.on(appEvents.PLAYER_READY, function() {
            if (typeof callback === 'function') {
                callback();
                callback = null;
            }
        });
    }

    function autoPlay() {
        _onPlayerReady(function(){
            visibilityDetector.watchContentVisibility(_standardStartPlayer);
        });
    }

    return {
        init: init,
        autoPlay : autoPlay
    };
} ();


var hash = function () {
    var hashParams = null;
    var offsetHash = false;

    var getParams = function (url) {
        var resultParams = {};
        var hashSplitParams = location.hash.substring(1).split('&');

        if (url) {
            hashSplitParams = null;
            var hashInUrl = url.indexOf('#');
            if (hashInUrl > -1) {
                hashSplitParams = url.substr(hashInUrl + 1).split('&');
            }
        }

        if (hashSplitParams) {
            for (var i=0 ; i < hashSplitParams.length ; i++) {
                if (hashSplitParams[i].indexOf('=') > -1) {
                    param = hashSplitParams[i].split('=');
                    resultParams[param[0]] = param[1];
                }
                else if (hashSplitParams[i].indexOf(':') > -1) {
                    param = hashSplitParams[i].split(':');
                    resultParams[param[0]] = param[1];
                }
            }
        }
        if (url) {
            return resultParams;
        } else {
            if (!offsetHash && resultParams != {}) {
                hashParams = resultParams;
            }
            return hashParams;
        }
    };

    var setPlayOffset = function (context, du) {
        var params = getParams();
        if (params && params['play']) {
            document.location.hash = 'play:' + params['play'];
            offsetHash = true;
        } else {
            if (context === 'MAIN_ELEMENT') {
                du = decodeURIComponent(du);
                params = getParams(du);
                if (params && params['play']) {
                    document.location.hash = 'play:' + params['play'];
                    offsetHash = true;
                }
            }
        }
    };

    return {getParams : getParams,
            setPlayOffset : setPlayOffset
            };
}();

