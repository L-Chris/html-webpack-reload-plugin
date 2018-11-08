const io = require('socket.io')(8196)

class Socket {
  static init(data) {
    data.html = data.html.replace('</head>', `${this.getScripts()}</head>`)
  }

  static getScripts() {
    return `<script src="http://localhost:8196/socket.io/socket.io.js"></script>
            <script>
              var socket = io.connect("http://localhost:8196");
              socket.on("reload", function(){window.location.reload()});
            </script>`
  }

  static reload() {
    io.emit('reload')
  }
}

module.exports = Socket
