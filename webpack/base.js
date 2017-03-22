const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    rules: [{
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: _ => [autoprefixer({ browsers: ['last 2 versions'] })]
          }
        }
      ]
    }, {
      test: /\.(woff|woff2|ttf|svg)$/,
      exclude: /node_modules/,
      use: [
        'url-loader?limit=100000'
      ],
    }, {
      test: /\.(eot|png)$/,
      exclude: /node_modules/,
      use: [
        'file-loader'
      ]
    }]
  }
};
