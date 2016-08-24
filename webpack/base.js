import autoprefixer from 'autoprefixer';

export default {
  postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css!postcss',
      exclude: /node_modules/
    }, {
      test: /\.(woff|woff2|ttf|svg)$/,
      loader: 'url?limit=100000',
      exclude: /node_modules/
    }, {
      test: /\.(eot|png)$/,
      loader: 'file',
      exclude: /node_modules/
    }]
  }
};
