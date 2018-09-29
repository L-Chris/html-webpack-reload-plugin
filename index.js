var io = require('socket.io')(8196)

const socket = {
  init (data) {
    data.html += '<script src="http://localhost:8196/socket.io/socket.io.js"></script>'
    data.html += '<script>var socket = io.connect("http://localhost:8196");socket.on("reload", function(){window.location.reload()});</script>'
  },
  reload () {
    io.emit('reload')
  }
}

class HtmlWebpackReloadPlugin {
  apply (compiler) {
    compiler.plugin('html-webpack-plugin-before-html-processing', function (data, callback) {
      socket.init(data)
      callback(null, data)
    })

    compiler.plugin('compilation', function (compilation) {
      compilation.plugin('html-webpack-plugin-after-emit', function (data, callback) {
        socket.reload()
        callback(null, data)
      })
    })
  }
}

module.exports = HtmlWebpackReloadPlugin