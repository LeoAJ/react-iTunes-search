import path from 'path';
import webpack from 'webpack';
import webpackConfig from './base';

webpackConfig.module.loaders = [
  {
    test: /\.js$/,
    loader: 'babel',
    query: { compact: false },
    exclude: /node_modules/
  },
  ...webpackConfig.module.loaders
];

export default Object.assign({}, webpackConfig, {
  devtool: 'source-map',
  entry: './js',
  output: {
    path: path.resolve(__dirname, '../', 'dist/'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ]
});
