const path = require('path');

const clientSrcPath = 'src/client';
const buildPath = 'build';

// Resolve paths from process.cwd
const resolve = dir => path.join(process.cwd(), dir);

module.exports = {

  entry: resolve(path.join(clientSrcPath, 'index.js')),

  output: {
    filename: path.join(buildPath, 'bundle.js'),
    publicPath: '/',
  },

  devtool: 'source-map',

  // Loaders
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|lib)/,
        use: ['babel-loader'],
      },
    ],
  },

  // Allows absolute imports from src directory (@) and node_modules
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
    modules: [
      'node_modules',
    ],
  },
};
