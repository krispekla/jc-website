const aliasConfig = require('./aliases.config')

module.exports = {
  assetsDir: 'assets',
  runtimeCompiler: true,

  configureWebpack: {
    resolve: {
      alias: aliasConfig.webpack,
    },
  },

  chainWebpack: config => {
    config.plugins.delete('prefetch')

    // Only enable performance hints for production builds, outside of tests.
    config.performance.hints(process.env.NODE_ENV === 'production' && !process.env.VUE_APP_TEST && 'warning')

    config.optimization.splitChunks({ chunks: 'all' })
  },

  pluginOptions: {
    // i18n: {
    //   locale: process.env.VUE_APP_I18N_LOCALE || 'hr',
    //   fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    //   localeDir: 'lang',
    //   enableInSFC: false,
    // },
  },
  css: {
    loaderOptions: {
      // by default the `sass` option will apply to both syntaxes
      // because `scss` syntax is also processed by sass-loader underlyingly
      // but when configuring the `data` option
      // `scss` syntax requires an semicolon at the end of a statement, while `sass` syntax requires none
      // in that case, we can target the `scss` syntax separately using the `scss` option
      sass: {
        prependData: `@import "~@/styles/globals.sass"`,
      },
    },
  },
}
