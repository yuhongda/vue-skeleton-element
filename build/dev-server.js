// require('./check-versions')()

if(!process.env.NODE_ENV){
    process.env.NODE_ENV = '"development"'
}
process.traceDeprecation = true
const opn = require('opn')
const path = require('path')
const express = require('express')
// const Koa = require('koa')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = require('./webpack.config.dev')

const port = 8800
const autoOpenBrowser = false

const app = express()
// const app = new Koa()
const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
})
// const devMiddleware = require('koa-webpack-dev-middleware')(compiler, {
//     publicPath: webpackConfig.output.publicPath,
//     quiet: true
// })

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {}
})

compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})

app.use(require('connect-history-api-fallback')())
app.use(devMiddleware)
app.use(hotMiddleware)

const staticPath = path.posix.join('/', 'static')
app.use(staticPath, express.static('./static'))

const uri = `http://localhost:${port}`

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  if (autoOpenBrowser) {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
