import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config, { HOST, PORT, URL } from './webpack.config';

export function run() {
  const options = {
    ...config,
    entry: [
      `webpack-dev-server/client?${URL}`,
      config.entry,
    ],
  };

  console.log('options', options);

  const compiler = webpack(options);

  const server = new WebpackDevServer(compiler, {
    // contentBase: URL,
    hot: true,
  });

  /* eslint arrow-body-style:0 */
  server.listen(PORT, HOST, () => {});
}
