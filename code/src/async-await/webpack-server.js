import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import path from 'path';

const HOST = '127.0.0.1';
const PORT = 8080;

export function run() {
  const options = require(
    path.resolve(__dirname, 'timing/browser-demo/webpack.config.js')
  );

  const compiler = webpack(options);
  const server = new WebpackDevServer(compiler, {});

  server.listen(PORT, HOST, () => {});
}
