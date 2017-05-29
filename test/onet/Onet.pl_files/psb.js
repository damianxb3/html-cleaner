var frameElementId = '';
try {
    frameElementId = window.frameElement ? window.frameElement.id : '';
    if (!frameElementId) {
        frameElementId = window.name;
    }
} catch (e) { }
try {
    parent.onetAds.fetchPassback(document.tag, document.slot, frameElementId);
} catch (evt) {
    if (window.location.href.indexOf('nk.pl') !== -1) {
        parent.postMessage('fetchPassback,' + document.slot + ',' + document.tag + (frameElementId ? (',' + frameElementId) : ''), '*');
    } else {
        top.postMessage('fetchPassback,' + document.slot + ',' + document.tag + (frameElementId ? (',' + frameElementId) : '') , '*');
    }
}