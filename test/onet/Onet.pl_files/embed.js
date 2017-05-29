//to PROD deployment please use OnetonTE\tools\upload_ocdn.js
var renderEmbeds = function() {
    var _inited = false;
var _stats = false;
var _visibility = false;
var _onStatsComingCbs = [];
var _onVisibilityChangeCbs = [];
var dataConf = {};
var playerConfig = {
    contextPlayer: false,
    volume: 100,
    ads: 1,
    ht: false,
    embedType: 'externalVideo',
    autoPlay: 0
};
var expand = false;
var _videoId;

var urlContextPlayer = 'http://onet.tv/embed-context-player-poster.html?mvp=';
var contextPlayerDetailCss = 'border: 0; position: fixed; z-index: 5000002; width: 100%; height: 100%; top:0; left: 0;';
var urlExpand = 'http://onet.tv/embed-context-player-detail.html?mvp=';
var urlPlaylist = 'http://onet.tv/embed-playlist.html?uuid=';
var urlExternal = 'http://onet.tv/embed-external.html?mvp=';
var urlNoise = 'http://onet.tv/embed-external.html?mvp=328354.266030470';

if (location.protocol==='https:') {
    urlContextPlayer = urlContextPlayer.replace("http://", "https://");
    urlExpand = urlExpand.replace("http://", "https://");
    urlPlaylist = urlPlaylist.replace("http://", "https://");
    urlExternal = urlExternal.replace("http://", "https://");
    urlNoise = urlNoise.replace("http://", "https://");
}
    var init = function() {
        var posterArray = document.getElementsByClassName('onettvEmbed notRendered');
        for (var i = 0; i < posterArray.length; i++) {
            _render(posterArray[i]);
        }
        if (!_inited) {
            document.addEventListener("DOMContentLoaded", init);
            _inited = true;
        }
    };

    var _render = function(domElement) {

        domElement.className = 'onettvEmbed';
        var url;

        var iframe = document.createElement('iframe');
        var contener = document.createElement('div');
        var domElementsObj = {
            contener: contener,
            iframe: iframe,
            domElement: domElement
        };
        contener.className = 'onettvEmbedContener';

        contener.style.position = "relative";
        contener.style.padding = "56.25% 0 0px";
        contener.style.height = "0";

        iframe.style.position = "absolute";
        iframe.style.top = 0;
        iframe.style.left = 0;
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";

        iframe.setAttribute('allowfullscreen', '');
        contener.appendChild(iframe);

        _videoId = { mvp: domElement.getAttribute('data-mvp') };
        if (_checkIfPulsEmbed()) {
            if (!_videoId.mvp) {
                _videoId = { playlist: domElement.getAttribute('data-playlist') };
            }

            window.pulsembed.sendEmbedConfigQuery('OnettvVideo');
            _onPostMessage(function(messageData) { _handlePostMessage(messageData, domElementsObj); });

        } else {
            if (!_videoId.mvp) {
                _videoId = { playlist: domElement.getAttribute('data-playlist') };
            }
            url = _createExternalUrl(_videoId);
            iframe.setAttribute('src', url);
            domElement.appendChild(contener);
        }
    };


    var _createPulsEmbedUrl = function(videoId, callback) {
    var url;

    if (expand) {
        url = urlExpand + videoId.mvp;
    } else {
        url = _createUrl(videoId);
    }
    _onStatsComing(function(stats) {
        var context = 'INTEXT';
        if (typeof embedContext !== 'undefined' && _validContext(embedContext)) {
            context = embedContext;
        }
        var params = _prepareParamsToUrl([
            { value: playerConfig.volume, key: 'volume', prefix: '&' },
            { value: playerConfig.ads, key: 'ads', prefix: '&' },
            { value: playerConfig.ht, key: 'ht', prefix: '&' },
            { value: playerConfig.embedType, key: 'et', prefix: '&' },
            { value: playerConfig.autoPlay, key: 'autoPlay', prefix: '&' },
            { value: playerConfig.fc, key: 'fc', prefix: '&' },
            { value: playerConfig.bitrate, key: 'bitrate', prefix: '&' },
            { value: playerConfig.preset, key: 'preset', prefix: '&' },
            { value: playerConfig.mvpVersion, key: 'mvpVersion', prefix: '&' },
            { value: playerConfig.autoplayRelated, key: 'autoplayRelated', prefix: '&' },
            { value: stats.DV, key: 'dv', prefix: '&' },
            { value: stats.target, key: 'target', prefix: '&' },
            { value: stats.du, key: 'du', prefix: '&' },
            { value: stats.adbeta, key: 'adbeta', prefix: '&' },
            { value: context, key: 'context', prefix: '&' },
            { value: stats.dr, key: 'dr', prefix: '#' }

        ]);
        if (playerConfig.contextPlayer === false || expand === true) {
            url += '&' + params;
        }
        callback(url);
    });
};

var _createExternalUrl = function(videoId) {
    var url = _createUrl(videoId);
    var currentSiteUrl = location.href.replace(location.hash, "");
    var params = _prepareParamsToUrl([
        { value: currentSiteUrl, key: 'du', prefix: '&' }
    ]);
    url += '&' + params;
    return url;
};

var _createUrl = function(videoId) {
    var url;
    if (playerConfig.contextPlayer) {
        return url = urlContextPlayer + videoId.mvp;
    } else if (videoId.playlist && videoId.playlist !== 'undefined') {
        return url = urlPlaylist + videoId.playlist;
    } else if (videoId.mvp && videoId.mvp !== 'undefined') {
        return url = urlExternal + videoId.mvp;
    } else {
        return url = urlNoise;
    }
};

var _prepareParamsToUrl = function(params) {

    var getParams = '';
    var hashParams = '';

    for (var i = 0; i < params.length; i++) {
        var param = params[i];
        if (param.value && param.value !== '' || param.value == 0) {
            var urlParam = param.key + '=' + encodeURIComponent(param.value);
            if (param.prefix === '#') {
                if (hashParams.length > 0) {
                    hashParams += '&';
                }
                hashParams += urlParam;
            } else if (param.prefix === '&') {
                if (getParams.length > 0) {
                    getParams += '&';
                }
                getParams += urlParam;
            }
        }
    }
    var result = getParams;
    if (hashParams) {
        result += '#' + hashParams;
    }
    return result;
};


    var _handlePostMessage = function(messageData, domElementsObj) {
        var data = _prepareData(messageData);

        if (data.embedUuid === _videoId.mvp && data.message === "expandWrapper") {
            expand = true;
            _createPulsEmbedUrl(_videoId,
                function(url) {
                    window.pulsembed.sendExpand(url, contextPlayerDetailCss);
                });
        } else if (data.pulse2EmbedConfig) {
            playerConfig = _pulse2EmbedConfig(data);

            _createPulsEmbedUrl(_videoId,
                function(url) {
                    domElementsObj.iframe.setAttribute('src', url);
                    if (playerConfig.contextPlayer) {
                        domElementsObj.contener.style.position = "static";
                        domElementsObj.contener.style.padding = "0";
                    } else {
                        if (playerConfig.fc === 0) {
                            domElementsObj.contener.style.padding = "56.25% 0px 80px";
                            window.pulsembed.sendHeight('80');
                        }
                        window.pulsembed.addClass('mvp-embed-wrapper');
                    }
                    domElementsObj.domElement.appendChild(domElementsObj.contener);
                    _onVisibilityChange(function(visibility) {
                        _sendVisibilityToPlayer(visibility, domElementsObj.iframe);
                    });
                });
        } else if (typeof data.adsAndStats !== 'undefined') {
            _onStatsComing(null, data);
        } else if (typeof data.vis !== 'undefined') {
            _onVisibilityChange(function(visibility) {
                _sendVisibilityToPlayer(visibility, domElementsObj.iframe);
            }, data);
        }
    };

    var _prepareData = function(messageData) {
        var data;
        try {
            data = JSON.parse(messageData.data);
        } catch (e) {
            data = messageData.data;
        }
        return data;
    };

    var _validContext = function(context) {
        validContexts = ['INTEXT', 'MAIN_ELEMENT', 'GALLERY_ELEMENT'];
        if (validContexts.indexOf(context) !== -1) {
            return true;
        }
        return false;
    };

    var _onStatsComing = function(callback, data) {
        if (_stats && callback) {
            callback(_stats);
        } else if (data && data.adsAndStats) {
            _stats = data.adsAndStats;
            for (var i = 0; i < _onStatsComingCbs.length; i++) {
                _onStatsComingCbs[i](_stats);
            }
            _onStatsComingCbs = [];
        } else if (callback) {
            _onStatsComingCbs.push(callback);
        }
    };

    var _sendVisibilityToPlayer = function(visibility, iframe) {

        var dataToSend = JSON.stringify({ vis: visibility });
        iframe.contentWindow.postMessage(dataToSend, '*');

        iframe.onload = function() {
            _sendVisibilityToPlayer(visibility, iframe);
        };

    };

    var _onVisibilityChange = function(callback, data) {
        if (data && typeof data.vis !== 'undefined') {
            _visibility = data.vis;
            for (var i = 0; i < _onVisibilityChangeCbs.length; i++) {
                _onVisibilityChangeCbs[i](_visibility);
            }
            callback(_visibility);
        } else if (_visibility) {
            callback(_visibility);
        } else {
            _onVisibilityChangeCbs.push(callback);
        }
    };

    var _onPostMessage = function(callback) {
        if (window.addEventListener) {
            addEventListener("message", callback, false);
        } else {
            attachEvent("onmessage", callback);
        }
    };

    var _checkIfPulsEmbed = function() {
    if (document.location.href.indexOf('pulsembed.eu') > -1) {
        return true;
    }
    return false;
};

var _pulse2EmbedConfig = function(dataConf) {
    var pulseEmbedHref = (window.location.pathname).split('/');
    var pulseEmbedId = pulseEmbedHref[pulseEmbedHref.length - 2];
    if (dataConf.test) {
        pulseEmbedId = dataConf.test;
    }
    var configOnettvVideo = '';

    var cp = false;
    var vol = 100;
    var ads = 1;
    var ht = false;
    var et = 'externalVideo';
    var ap = 0;
    var fc = 1;
    var bt = null;
    var preset = null;
    var autoplayRelated = null;
    if (dataConf.pulse2EmbedConfig && dataConf.pulse2EmbedConfig.config &&
        dataConf.pulse2EmbedConfig.config.OnettvVideo) {
        configOnettvVideo = dataConf.pulse2EmbedConfig.config.OnettvVideo;
    }

    if (configOnettvVideo[pulseEmbedId]) {
        if (configOnettvVideo[pulseEmbedId].preset !== 'undefined') {
            preset = configOnettvVideo[pulseEmbedId].preset;
            vol = null;
            ads = null;
            ht = null;
            et = null;
            ap = null;
            fc = null;
            bt = null;
            autoplayRelated = null;
        }
        if (configOnettvVideo[pulseEmbedId].context_player) {
            cp = configOnettvVideo[pulseEmbedId].context_player;
        }
        if (configOnettvVideo[pulseEmbedId].volume !== 'undefined') {
            vol = configOnettvVideo[pulseEmbedId].volume;
        }
        if (configOnettvVideo[pulseEmbedId].ads !== 'undefined') {
            ads = configOnettvVideo[pulseEmbedId].ads;
        }
        if (configOnettvVideo[pulseEmbedId].ht !== 'undefined') {
            ht = configOnettvVideo[pulseEmbedId].ht;
        }
        if (configOnettvVideo[pulseEmbedId].embedType !== 'undefined') {
            et = configOnettvVideo[pulseEmbedId].embedType;
        }
        if (configOnettvVideo[pulseEmbedId].autoPlay !== 'undefined') {
            ap = configOnettvVideo[pulseEmbedId].autoPlay;
        }
        if (configOnettvVideo[pulseEmbedId].fc !== 'undefined') {
            fc = configOnettvVideo[pulseEmbedId].fc;
        }
        if (configOnettvVideo[pulseEmbedId].bt !== 'undefined') {
            bt = configOnettvVideo[pulseEmbedId].bitrate;
        }
        if (configOnettvVideo[pulseEmbedId].autoplayRelated !== 'undefined') {
            autoplayRelated = configOnettvVideo[pulseEmbedId].autoplayRelated;
        }
    }

    return data = {
        contextPlayer: cp,
        volume: vol,
        ads: ads,
        ht: ht,
        embedType: et,
        autoPlay: ap,
        fc: fc,
        bitrate: bt,
        preset: preset,
        autoplayRelated: autoplayRelated
    };
};


    return {
        init: init
    };
}();

renderEmbeds.init();
