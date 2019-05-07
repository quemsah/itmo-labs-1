import { resolve } from 'path';

export default {
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: './docs/main.js', /* 106 KiB */
    path: resolve('.'),
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      loader: 'babel-loader',
      query: {
        babelrc: false,
        presets: [
          'react', ['env', {
            modules: false,
          }],
        ],
      },
    }],
  },
};
