var path = require("path")
var webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractLess = new ExtractTextPlugin("style.css");


module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    "./src/index.js"
  ],
  output: {
    publicPath: '',
    path:  path.resolve(__dirname + '/dist/'),
    filename: "build.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    extractLess
  ],
  resolve: {
      extensions: ['.js', '.jsx'], //后缀名自动补全
      modules : [path.resolve(__dirname, "../src"), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { test: /\.css$/,loader: 'style-loader!css-loader'},
      {
        test: /\.less$/,
        use: extractLess.extract('style-loader', 'css-loader','less-loader')
        // use: [
        //   'style-loader',
        //   { loader: 'css-loader', options: { importLoaders: 1 } },
        //   'less-loader'
        // ]
      }
    ]
  }

}
