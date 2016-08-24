var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json');
var nodeModulesPath = path.resolve(__dirname, 'node_modules'),
  srcPath = path.resolve(__dirname, 'src'),
  distPath = path.resolve(__dirname, 'build');
module.exports = {
  devtool: 'eval',
  context: srcPath,
  target: 'web',
  entry: [
    './index'
  ],
  output: {
    path: distPath,
    filename: './js/bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: [nodeModulesPath],
      loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
      include: [srcPath]
    }, {
      test: /\.html$/,
      loader: [
        'file-loader?name=[path][name].[ext]',
        'template-html-loader?' + [
          'raw=true',
          'engine=lodash',
          'version=' + pkg.version
        ].join('&')
      ].join('!')
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'] // 'babel-loader' is also a
                                                                       // legal name to reference
    }, {
      test: /\.sass$/,
      loaders: ['style', 'css', 'sass?indentedSyntax']
    },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }]
  }
};
