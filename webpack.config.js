var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: "./src/app/app.js",
    output: {
        path: __dirname,
        filename: "./src/dist/bundle.js"
    },
    plugins: [
        new BrowserSyncPlugin({
          host: 'localhost',
          port: 8080,
          server: {
            baseDir: ['src']
          },
          notify: false,
          //injectChanges: true,
          online: true,
          xip: false,
          tunnel: false,
          ghostMode: {
            clicks: true,
            scroll: true,
            links: true,
            forms: true
          },
          open: "ui",
        })
    ],
    stylus: {
		use: [require('nib')()],
		import: ['~nib/lib/nib/index.styl']
	},
    module: {
        loaders: [
            { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'] },
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
            { test: /\.jade$/, loader: "jade" },
            { test: /\.html$/, loader: 'raw-loader' }
        ],
		resolve: {
			extensions: ['', '.js', '.styl', '.jade']
		}
    }
};