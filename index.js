const Socket = require('./components/socket')

class HtmlWebpackReloadPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('HtmlWebpackReload', function(compilation) {
      // html-webpack-plugin v3
      let beforeEmit = compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing
      let afterEmit = compilation.hooks.htmlWebpackPluginAfterEmit

      if (!beforeEmit && !afterEmit) {
        const HtmlWebpackPlugin = require('html-webpack-plugin')
        beforeEmit = HtmlWebpackPlugin.getHooks(compilation)
          .afterTemplateExecution
        afterEmit = HtmlWebpackPlugin.getHooks(compilation).afterEmit
      }

      beforeEmit.tapAsync('HtmlWebpackReload', function(data, callback) {
        Socket.init(data)
        callback(null, data)
      })

      afterEmit.tapAsync('HtmlWebpackReload', function(data, callback) {
        Socket.reload()
        callback(null, data)
      })
    })
  }
}

module.exports = HtmlWebpackReloadPlugin
