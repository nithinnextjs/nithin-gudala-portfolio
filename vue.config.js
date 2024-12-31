const webpack = require('webpack');

module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL || '/',
  outputDir: 'dist', // Output directory for the build
  assetsDir: 'assets', // Folder for assets

  chainWebpack(config) {
    config.plugin('define')
      .use(webpack.DefinePlugin, [{
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      }]);

    config.module
      .rule('assets')
      .test(/\.(pdf|docx|txt)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]',
      })
      .end();
  },

  transpileDependencies: true,
};
