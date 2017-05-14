const path = require('path');
var webpack = require('webpack');
module.exports = {
  context:__dirname + '/app',
  entry: {
    app:'../src/app.js',
    vendor:['angular']
  },
  output: {
    path: __dirname + '/public/scripts',
    filename: 'findprof.bundle.js'
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'})
  ]
};
