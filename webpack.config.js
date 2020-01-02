const path = require('path');
const { genWebpackConfig } = require('@nuvolo/webpack-config');
const config = genWebpackConfig({
  envPath: path.resolve('../../.env'),
  servePath: path.resolve('./dist')
});

config.mode = 'production';
config.devtool = 'source-map';
config.output = {
  filename: 'script.js',
  path: path.resolve('../../src/sys_ui_script/x_nuvo_sinc_demo.script')
};

config.module.rules.push({
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: 'file-loader'
    }
  ]
});

module.exports = config;
