const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
  configureWebpack: {
    plugins: [
			new WebpackAssetsManifest({})
				.set('entrypoint', 'team-list.min.js'),
    ],
    optimization: {
			splitChunks: false
    }
  }
}
