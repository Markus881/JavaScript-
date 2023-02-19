// Імпорт властивостей(з Webpaсk безпосередньо)
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// Підключення модулів(з Webpaсk безпосередньо)
module.exports = {
  // Точка входа(основний файл.js)
  entry: './src/index.js',
  mode: 'development',
  //Сервер
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    watchFiles: ['./src/**/*']
  },
  // Готовий проект(після роботи Webpaсk)
  output: {
    // Назва директорії готового проекту
    path: path.resolve(__dirname, 'dist'),
    // Назва основного файлу
    filename: 'bundle.js',
  },
  // Плагіни
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new MiniCssExtractPlugin(),
  ],
  // Модулі до плагінів
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};