

const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('define').tap(definitions => {
      // Включаем интеграцию Vue DevTools в production-сборке
      definitions[0]['__VUE_PROD_DEVTOOLS__'] = true;

      // Включаем поддержку опций API в production-сборке
      definitions[0]['__VUE_OPTIONS_API__'] = true;

      return definitions;
    });
  },
  // Другие настройки конфигурации
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    port: 8080,
    hot: true
  }
});
