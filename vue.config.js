const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  // your existing configuration
  publicPath: process.env.NODE_ENV === 'production' ? '/nithin-gudala-portfolio/' : '/',
  transpileDependencies: true
});
