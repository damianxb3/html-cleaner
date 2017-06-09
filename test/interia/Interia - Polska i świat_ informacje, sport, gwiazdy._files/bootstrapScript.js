try{
(function() {
    this.bootstrap = function(pP) {
	pP = pP || {};
	pP.docEval = document.evaluate ? 1 : 0;

	this.api = '//api.interia.nsaudience.pl/frontend/api/';

	this.params = function(o) {
		var result = '';
		for (var a in o)
			if (o.hasOwnProperty(a)) {
				var value = o[a];
				if ((value !== '') && (value !== null))
					result += '&' + a + '=' + encodeURIComponent(value);
			}
		return result;
	};

	

	this.go = function() {
		(function(url){
			with (document) {
				var s = createElement('script');
				s.type = 'text/javascript';
				s.async = true;
				s.src = url;
				var el = ['head', 'body'];
				for (var i = 0; i < el.length; i++) {
					var e = getElementsByTagName(el[i])[0];
					if (e) {
						e.appendChild(s);
						break;
					}
				}
			}
		})(this.api + 'matchMainScript.js?time=6' + this.params(pP));

		
	};

	this.go();
};

    new this.bootstrap({ sourceId: 'interia' });
})();
} catch(e) {}