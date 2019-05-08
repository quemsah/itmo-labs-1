import HtmlWebpackPlugin from 'html-webpack-plugin';
import { HotModuleReplacementPlugin, NamedModulesPlugin } from 'webpack';

const myTitle = 'My Hot Awesome 30-10-2017';

export default {
  "entry": ["react-hot-loader/patch", "./src/App.jsx"],
  "resolve" : {"extensions": [".js", ".jsx"]},
  "output": {
    "publicPath": "/",
    "filename": "./dist/bundle.js"
  },
  "devtool": "sourcemap",
  "module": {
    "rules": [{
        "test": /\.jsx$/,
        "loader": "babel-loader",
        "query": {
          "babelrc": false,
          "plugins": ["transform-function-bind"],
          "presets": [
            "react", ["env", {
              "modules": false
            }]
          ]
        }
      }]
  },
  "plugins": [
    new HtmlWebpackPlugin({
      "title": myTitle,
      "template": "./src/my-index.ejs",
      "h2": myTitle
    }),
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin()
  ]
};
// this file: webpack.config.babel.js fork from https://kodaktor.ru/j/min_react_webpack
