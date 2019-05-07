export default {
  mode: 'development',
  devtool: 'sourcemap',
  resolve: {
    extensions: ['.js', '.jsx'],
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
  }
};
