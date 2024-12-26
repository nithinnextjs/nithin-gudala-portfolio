const webpack = require('webpack');

module.exports = {
  publicPath: '/nithin-gudala-portfolio/',

  /**
   * @param {{ plugin: (arg0: string) => { (): any; new (): any; use: { (arg0: typeof webpack.DefinePlugin, arg1: { __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: string; }[]): void; new (): any; }; }; module: { rule: (arg0: string) => { (): any; new (): any; test: { (arg0: RegExp): { (): any; new (): any; use: { (arg0: string): { (): any; new (): any; loader: { (arg0: string): { (): any; new (): any; options: { (arg0: { name: string; }): { (): any; new (): any; end: { (): void; new (): any; }; }; new (): any; }; }; new (): any; }; }; new (): any; }; }; new (): any; }; }; }; }} config
   */
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
