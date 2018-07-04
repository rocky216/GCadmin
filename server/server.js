var path = require("path")
var express = require("express")
var webpack = require("webpack")
var WebpackDevMiddle = require("webpack-dev-middleware")
var WebpackHotMiddle = require("webpack-hot-middleware")
var dotenv = require("dotenv").config()
var server = express()
var webpackConfig = require("../webpack.config")
var compiler = webpack(webpackConfig)

const staticPath=path.join(__dirname, "../dist")
server.use(express.static(staticPath));

server.use(WebpackDevMiddle(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
  stats: {
      colors: true //显示不同的颜色区分打包的文件
  },
}))
server.use(WebpackHotMiddle(compiler))

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, '/'));

server.get("*", (req, res)=>{
  res.render('index')
})

server.listen(process.env.PORT, (err)=>{
  if (!err) console.log(`localhost:${process.env.PORT}`);
})
