const path = require('path')
const HTMLwebplugin = require('html-webpack-plugin')

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader'],
  },
  {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  },
]
module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
  },
  devServer: {
    contentBase: './build',
  },
  module: { rules },
  plugins: [
    new HTMLwebplugin({
      template: './public/index.html',
    }),
  ],
}
