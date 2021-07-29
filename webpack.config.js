var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: 'xuni',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 8080,
  },
};