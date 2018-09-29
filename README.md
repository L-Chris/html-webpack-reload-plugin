# html-webpack-reload-plugin
Automatically refresh your browser whenever you make changes to templates consumed by html-webpack-plugin.
It should only be used in development.
v1 support webpack3
v2 support webpack4
Inspire by reload-html-webpack-plugin.

## Install
```
npm i html-webpack-reload-plugin -D
yarn add html-webpack-reload-plugin -D
```

## Usage

**webpack.config.js**

```
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackReloadPlugin = require('html-webpack-reload-plugin')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackReloadPlugin()
  ]
}
```