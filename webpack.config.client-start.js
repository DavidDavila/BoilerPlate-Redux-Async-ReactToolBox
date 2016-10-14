var webpack = require('webpack');

var config = require('./webpack.config.client');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var hostname = 'localhost';
var port     = 3006;

config.cache   = false;
config.debug   = true;
config.devtool = 'inline-source-map';

config.entry.index.unshift(
  // http://webpack.github.io/docs/webpack-dev-server.html#inline-mode
  'webpack-dev-server/client?http://' + hostname + ':' + port,

  // http://webpack.github.io/docs/webpack-dev-server.html#hot-module-replacement
  'webpack/hot/only-dev-server'
);

config.output.publicPath = 'http://' + hostname + ':' + port + '/client';

config.plugins = [
  new webpack.DefinePlugin({
    __CLIENT__:     true,
    __SERVER__:     false,
    __PRODUCTION__: false,
    __DEV__:        true
  }),

  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('stylesRT.css')
];

config.module.loaders = [
  {
    exclude: /node_modules/,
    loader:  'babel-loader',
    test:    /\.js?$/,

    query: {
      cacheDirectory: true,

      presets: [
        'es2015',
        'react'
      ],

      // NOTE: https://github.com/gaearon/babel-plugin-react-transform
      env: {
        development: {
          plugins: [
            ['react-transform', {
              transforms: [{
                transform: 'react-transform-hmr',

                imports: [
                  'react'
                ],

                locals: [
                  'module'
                ]
              }]
            }]
          ]
        }
      }
    }
  }
,
 
  {
    test: /\.scss$/,
    exclude:  /public/,
    loader:ExtractTextPlugin.extract(
      'style', // The backup style loader
      'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
    )
  },{
    test: /\.scss$/,
     exclude:  /node_modules/,
    loader:'style!css!sass'
  }
]
config.devServer = {
  hot:    true,
  https:  false,
  inline: true,
  noInfo: true,
  port:   port
};

module.exports = config;
