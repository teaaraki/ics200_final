const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/ts/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  // Add other config like module rules and Svelte support here
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/index.html'
    })
  ]
};
