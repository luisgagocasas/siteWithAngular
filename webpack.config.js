var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./src/app/app.js",
    output: {
        path: __dirname,
        filename: "./src/dist/bundle.js"
    },
    plugins: [
        
            new BrowserSyncPlugin({
                host: 'localhost',
                port: 3000,
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
            }),
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery',
                jquery: 'jquery'
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
          { test: /\.html$/, loader: 'raw-loader' },
          { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
          { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' }
      ],
  		resolve: {
  			extensions: ['', '.js', '.styl', '.jade']
  		}
    }
};