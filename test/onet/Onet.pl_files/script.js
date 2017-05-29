var Helpers = {
    addEvent: function(el, type, handler) {
        if (el.addEventListener) {
            el.addEventListener(type, handler, false);
        } else if (el.attachEvent && htmlEvents['on' + type]) {
            el.attachEvent('on' + type, handler);
        } else {
            el['on' + type] = handler;
        }
    },
    removeEvent: function(elem, eventType, handler) {
        if (elem.removeEventListener)
            elem.removeEventListener(eventType, handler, false);
        if (elem.detachEvent)
            elem.detachEvent('on' + eventType, handler);
    },
    hasClass: function(ele, cls) {
        return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    },
    addClass: function(ele, cls) {
        if (typeof cls === 'string') {
            var clsN = ele.className + " " + cls;
            if (!this.hasClass(ele, cls)) ele.className = clsN.trim();
        }
    },
    removeClass: function(ele, cls) {
        if (typeof cls === 'string' && this.hasClass(ele, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            ele.className = ele.className.replace(reg, ' ').trim();
        }
    },
    replaceClass: function(ele, remove, add) {
        if (this.hasClass(ele, remove) && !this.hasClass(ele, add)) {
            var reg = new RegExp('(\\s|^)' + remove + '(\\s|$)');
            var rep = ' ' + add + ' ';
            ele.className = ele.className.replace(reg, rep).trim();
        }
    }
};


var NativeInFeedBeta = (function(window) {

    function init() {
        if (window.top && window.top.postMessage) {
            window.top.postMessage('native_ready', '*');
        }
        Helpers.addEvent(window, 'message', NativeInFeedBeta.receiveMessage)
    }

    function receiveMessage(event) {
        try {
            var t = JSON.parse(event.data);
            if (t.action === 'native_render') {
                NativeInFeedBeta.render(t.data);
            }
        } catch (e) {}
    }

    function render(data, elements) {
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                elements = document.querySelectorAll("[data-placeholder='" + key + "']");
                overrideData(elements, data[key]);
            }
        }
        Helpers.removeEventListener(window, 'message', NativeInFeedBeta.receiveMessage)
    }

    function overrideData (elements, val, length) {
        length = elements.length;
        if (length === 0 || !val) return;

        for(var i = 0; i < length; i++) {
            if (!elements[i].dataset.type) {
                elements[i].innerHTML = val;
            } else { //perhaps to another function?
                switch(elements[i].dataset.type) {
                    case 'switch-class-sponsorlabel':
                        var rpl = val === 'hidden' ? 'visible' : 'hidden';
                        Helpers.replaceClass(elements[i], rpl, val);
                        break;
                    default :
                        elements[i][elements[i].dataset.type] = val;
                }
            }
        }
    }

    return {
        init: init,
        receiveMessage: receiveMessage,
        render: render
    }

})(window);
NativeInFeedBeta.init();