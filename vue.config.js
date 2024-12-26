const webpack = require('webpack');  // Use CommonJS syntax with require

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/nithin-gudala-portfolio/' : '/',

  chainWebpack(config) {
    // Adding the DefinePlugin for hydration mismatch feature flag
    config.plugin('define')
      .use(webpack.DefinePlugin, [{
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      }]);

    // Handle .pdf, .docx, .txt files
    config.module
      .rule('assets')
      .test(/\.(pdf|docx|txt)$/) // Match PDF, DOCX, and TXT files
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]' // Customize the output path/filename
      })
      .end();
  },

  transpileDependencies: true
};
