const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/ts/main.ts', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: './', 
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], 
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]', 
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], 
  },
  plugins: [

    new HtmlWebpackPlugin({
      template: './src/pages/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/africa.html',
      filename: 'africa.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/americas.html',
      filename: 'americas.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/asia.html',
      filename: 'asia.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/europe.html',
      filename: 'europe.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' },  
        { from: 'src/styles', to: 'styles' },       
      ],
    }),
  ],
  devServer: {
    static: './dist',
    open: true,
  },
  stats: {
    children: true,
  },
  mode: 'development',
};
