import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack/webpack.config.dev';

const port = 3000;
const host = 'localhost';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true
  },
  historyApiFallback: true
}).listen(port, host, (err, result) => {
  if (err) {
    console.log(err);
  }

  console.log(`Listening at ${host}:${port}`);
});
