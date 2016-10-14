var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
 
var config = require('./webpack.config.server');

config.cache   = true;
config.debug   = true;
config.devtool = 'source-map';
config.watch   = true;

config.entry.index.unshift(
  'webpack/hot/poll?1000'
);

config.plugins = [
  new webpack.DefinePlugin({
    __CLIENT__:     false,
    __SERVER__:     true,
    __PRODUCTION__: false,
    __DEV__:        true
  }),

  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('stylesRT.css')
];
config.module.postLoaders = [{
  exclude: /node_modules/,
  loader:  'babel-loader',
  test:    /\.jsx?$/,

  query: {
    cacheDirectory: true,

    presets: [
      'es2015',
      'react'
    ]
  }
},
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
    loader:'css!sass'
  }
];

module.exports = config;
