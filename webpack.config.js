const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/ts/main.ts', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', 
  },
  module: {
    rules: [
    
      {
        test: /\.ts$/,
        use: 'ts-loader', 
        exclude: /node_modules/,
      },
     
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
     
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'assets/', 
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/index.html', 
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
  stats: {
    children: true,
  },
};
