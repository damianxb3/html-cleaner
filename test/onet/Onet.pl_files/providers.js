!function(){"use strict";var n,e=function(n){var e={};e.pulsembed=n,window.parent.postMessage(e,"*")},t=function(n){e({height:n})},i=function(){e({loaded:"0.12.3"})},o=function(n){e({scrollingIframe:n})},d=function(n,e){window.addEventListener?window.addEventListener(n,e,!1):window.attachEvent&&window.attachEvent("on"+n,e)},r=!1,a=function(n){var e=n.offsetHeight,t=window.getComputedStyle?window.getComputedStyle(n):n.currentStyle;return e+=parseInt(t.marginTop,10)+parseInt(t.marginBottom,10)},s=function(){r=!1,t(a(n))},u=function(){r||(r=!0,window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,100))},c=function(e){n=e,d("resize",u),u()},w=function(n){return e({addClass:n})},f=function(n){e({getConfigFor:n})},m=function(n,t){e({expand:{src:n,style:t}})};d("load",i),window.pulsembed={sendHeight:t,resizeWithElement:c,forceResize:u,addWindowEventListener:d,addClass:w,sendEmbedConfigQuery:f,sendExpand:m,scrollingIframe:o}}();