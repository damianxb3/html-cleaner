var mvp = mvp || {};
mvp.LOADER_VERSION = 125;
mvp.AB = 100;
mvp.CL = 0;
mvp.LANG = "PL";
mvp.VERSION = "810";
mvp.PREINITTIME = (+ new Date);
if(window.location.hash.substring(0, 9) === "#version_") {
 mvp.VERSION = window.location.hash.substring(9);
}
mvp.companionAvailable = !!mvp.companionAvailable || false;
mvp.Protocol = 'http' + (window.location.protocol == 'https:' ? 's' : '') + ':';
mvp.UrlCSS = mvp.Protocol + '//ocdn.eu/static/mvpplayer/'+mvp.VERSION+'/_s/css/compiled/';
mvp.UrlJS = mvp.Protocol + '//ocdn.eu/static/mvpplayer/'+mvp.VERSION+'/_s/js/compiled/';
mvp.injectedConfig = {"default":{"js":{"IMA_PERCENT":100,"MEDIA_MAX_TRIES":3,"CKM_REQUEST_TIMEOUT":5000,"MAX_DOT_IN_HIGH_TRAFFIC":100,"PERCENT_CCED_TO_EVENTS_API":100}},"a":"c1r1c","per_version":{"758alpha":{"js":{"MAX_BB_IN_HIGH_TRAFFIC":100}},"762alpha":{"js":{"MAX_BB_IN_HIGH_TRAFFIC":100}},"758beta":{"js":{"MAX_BB_IN_HIGH_TRAFFIC":100}}}};

mvp.DISABLE_GFK = true;
mvp.DISABLE_GEMIUS = false;
(function () {
 if (!mvp.Initialized) {
  mvp.Initialized = true;
  var ab = 'compiled',
      script,
      stylesheet;
if(!mvp.DISABLE_GEMIUS && !window['GemiusPlayer']) {
 function gemius_player_pending(obj, fun) {
  obj[fun] = obj[fun] || function () {
   var x = window['gemius_player_data'] = window['gemius_player_data'] || [];
   x[x.length] = [this, fun, arguments];
  };
 }
 gemius_player_pending(window, 'GemiusPlayer');
 gemius_player_pending(GemiusPlayer.prototype, 'newProgram');
 gemius_player_pending(GemiusPlayer.prototype, 'newAd');
 gemius_player_pending(GemiusPlayer.prototype, 'adEvent');
 gemius_player_pending(GemiusPlayer.prototype, 'programEvent');
 (function (d, t) {
  try {
   var gt = d.createElement(t),
    s = d.getElementsByTagName(t)[0];
   gt.setAttribute('async', 'async');
   gt.setAttribute('defer', 'defer');
   gt.src = mvp.Protocol + '//gapl.hit.gemius.pl/gplayer.js';
   s.parentNode.insertBefore(gt, s);
  } catch (e) {
  }
 })(document, 'script');
}
stylesheet = document.createElement('link');
stylesheet.setAttribute('href', mvp.UrlCSS + ab + '.css?_');
stylesheet.setAttribute('media', 'all');
stylesheet.setAttribute('rel', 'stylesheet');
stylesheet.setAttribute('type', 'text/css');
document.getElementsByTagName('head')[0].appendChild(stylesheet);
script = document.createElement('script');
script.setAttribute('src', mvp.UrlJS + ab + '.' + (/opera mini/i.test(window.navigator.userAgent) ? 'wso' : 'min') + '.js?_');
script.setAttribute('type', 'text/javascript');
document.getElementsByTagName('head')[0].appendChild(script);
}})();
delete mvp.AB;
delete mvp.UrlCSS;
delete mvp.UrlJS;
 ; 
 /*1495552964058*/