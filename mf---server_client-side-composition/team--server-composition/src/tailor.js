'use strict';

const http = require('http');
const Tailor = require('node-tailor');
const tailor = new Tailor({
	maxAssetLinks: 4
});

http
	.createServer((req, res) => {
		req.headers['x-request-uri'] = req.url

		// adjust url form template search
		switch (req.url) {
			case '/':
				req.url = '/index'
				break
			case '/men':
				break
			case '/woman':
				break
			case (req.url.match(/detail\/[0-9]+/) || {}).input:
				req.url = '/detail'
				break
			default:
				req.url = '/error'
		}

		// template processing
		tailor.requestHandler(req, res);
	})
	.listen(8080, function() {
		console.log('Tailor server listening on port 8080');
		tailor.on('error', function(_, error) {
			console.log(error)
		})
	});
