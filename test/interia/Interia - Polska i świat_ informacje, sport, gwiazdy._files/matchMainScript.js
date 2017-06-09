try{
var BTF = new function(){

this.setCookie = function(c, v, exp, enc) {
var expires = '';
if (exp > 0) {
var now = new Date();
now.setDate(now.getDate() + exp);
expires = '; expires=' + now.toGMTString();
}
document.cookie = c + '=' + (enc ? encodeURIComponent(v) : v) + expires + '; path=/;'
};

var BT_Debug = {
verbose: 0,
debug: function(s) { if (this.verbose) try { /*alert(s);*/ console.debug(s); } catch(e) {}},
setVerbose: function(v) { this.verbose = v; }
};
BT_Debug.debug('debug is ON');

var BT_Conf = new function() { 
this.TIME = new Date().getTime();
this.BTF_API = '//api.interia.nsaudience.pl/frontend/api/';
this.FINAL_SCRIPT_URI = this.BTF_API + 'sendData.js';
this.PART_SIZE = 2500;
this.GATHERING_DELAY = 3000;
this.SENDING_INTERVAL = 250;
this.TIME_SPENT_PERIOD = 10000;
this.TIME_SPENT_COUNT = 10;
this.guid = function () {
    function _p8(s) {
        var p = (Math.random().toString(16)+"000000000").substr(2,8);
        return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
    }
    return _p8() + _p8(1) + _p8(1) + _p8();
};
this.EID = this.guid();
this.BOOT = {uid: '15bf3927486210f6fc4a782a000', sourceId: 'interia'};
};

var BT_Utils=new function() {
    this.parametersToString=function(parametersMap) {
        function singleParamToString(paramName, paramValue) {
            return paramValue ? '&' + encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue) : '';
        }

        var result = '';
        for (var param in parametersMap) {
            if (parametersMap.hasOwnProperty(param)) {
                var value = parametersMap[param];
                if ((value === null) || (value === undefined)) {
                    continue;
                }

                if (value instanceof Array) {
                    for (var i = 0; i < value.length; i++) {
                        result += singleParamToString(param, value[i]);
                    }
                }
                else {
                    result += singleParamToString(param, value);
                }
            }
        }
        return result;
    };

	this.loadScript_=function(s) {
		var e = document.createElement('script');
		e.type = 'text/javascript';
		e.src = s;
		e.async = true;
		document.body.appendChild(e);
	};

	this.loadScript=function(p) {
        p = ((p === null) || (p === undefined)) ? '' : p;
        this.loadScript_(BT_Conf.FINAL_SCRIPT_URI + '?' + this.parametersToString({eid: BT_Conf.EID, time: BT_Conf.TIME}).substr(1) + p);
	};

	this.go=function(extractor) {
		setTimeout(function(){ extractor.run(); }, BT_Conf.GATHERING_DELAY);
	};
};
this.site = {
	run : function() {
		var parameters = BT_Conf.BOOT;

		var p = BT_Utils.parametersToString(parameters);
		BT_Utils.loadScript(p);
	}
};

BT_Utils.go(this.site);

};
} catch(e) {}