module.exports = {
    i18n: {
      defaultLocale: 'es',
      locales: ['es', 'en', 'fr', 'it'],
      defaultNS: 'default',
      localePath: './public/locales',
      localeExtension: 'json',
      localeStructure: '{{lng}}/{{ns}}',
      /** To avoid issues when deploying to some paas (vercel...) */
      localePath:
        typeof window === 'undefined'
          ? require('path').resolve('./public/locales')
          : '/locales',
    },
  }