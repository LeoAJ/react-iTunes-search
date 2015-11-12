import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config';

const port = 3000,
      host = 'localhost';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true
  },
  historyApiFallback: true
}).listen(port, host, function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log(`Listening at ${host}:${port}`);
});
