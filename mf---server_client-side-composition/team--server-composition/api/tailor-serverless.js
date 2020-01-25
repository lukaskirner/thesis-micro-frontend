'use strict';

module.exports = (req, res) => {
	const Tailor = require('node-tailor');
	const tailor = new Tailor({
		maxAssetLinks: 4,
		templatesPath: __dirname + '/../templates/'
	});

	tailor.on('error', function(_, error) {
		console.log(error)
	})

	// save path
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

	tailor.requestHandler(req, res);
}
