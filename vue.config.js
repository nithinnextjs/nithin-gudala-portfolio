const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  // your existing configuration
  publicPath: process.env.NODE_ENV === 'production' ? '/nithin-gudala-portfolio/' : '/',

  // Adding rule to handle binary files
  chainWebpack: config => {
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
});
