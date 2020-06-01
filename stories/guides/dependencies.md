# 의존성 및 웹팩 설정

> 서비스연구담당 오동환 - 초안 작성 / 2020. 06.01



## 웹팩 설정

~~~javascript
require('dotenv').config()
const path = require('path')

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/tailwind.css', '@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/axios',
    '@/plugins/api-accessor',
    '@/plugins/cypress',
    '@/plugins/global-components',
    '@/plugins/validator'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'

    // 성능 최적화(파일 크기 줄이기) 때 사용
    // 'nuxt-purgecss'
  ],
  // 성능 최적화(파일 크기 줄이기) 때 사용
  // purgeCSS: {
  //   mode: 'postcss',
  //   enabled: process.env.NODE_ENV === 'production',
  //   paths: [
  //     'components/**/*.vue',
  //     'layouts/**/*.vue',
  //     'pages/**/*.vue',
  //     'plugins/**/*.js'
  //   ],
  //   styleExtensions: ['.css'],
  //   whitelist: ['body', 'html', 'nuxt-progress'],
  //   whitelistPatterns: [/^b-/],
  //   whitelistPatternsChildren: [/^tabs/, /^is-/, /^b-/, /^navbar/],
  //   extractors: [
  //     {
  //       extractor: (content) => content.match(/[A-z0-9-:\\/]+/g) || [],
  //       extensions: ['html', 'vue', 'js']
  //     }
  //   ]
  // },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
  },
  // 미들웨어에 접근인증을 위해 추가
  router: {
    middleware: 'auth'
  },
  proxy: {
    '/albums': {
      target: 'https://jsonplaceholder.typicode.com/',
      secure: false,
      changeOrigin: true
    }
  },
  dotenv: {
    filename:
      process.env.NODE_ENV === 'production'
        ? '.env'
        : `.env.${process.env.NODE_ENV}`
  },
  nuxtValidate: {
    lang: 'es',
    nuxti18n: {
      locale: {
        'zh-CN': 'zh_CN'
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: ['vee-validate/dist/rules'],
    // tailwind 수동 적용 - https://regenrek.com/posts/how-to-use-tailwind-css-with-nuxt/
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nested': {}
      },
      preset: {
        stage: 1
      }
    }
    /*
     ** You can extend webpack config here
     */
    // extend(_config, _ctx) {}
  }
}

~~~



## 의존성(Dependencies)

~~~javascript
  "dependencies": {
    "@nuxtjs/axios": "^5.3.6",
    "@nuxtjs/dotenv": "^1.4.0",
    "@nuxtjs/pwa": "^3.0.0-0",
    "cross-env": "^5.2.0",
    "express": "^4.16.4",
    "nuxt": "^2.0.0",
    "nuxt-buefy": "^0.3.2",
    "nuxt-property-decorator": "^2.7.2",
    "nuxt-validate": "^1.0.1",
    "vee-validate": "^3.3.0"
  },
  "devDependencies": {"@babel/core": "^7.9.6",
    "@nuxt/typescript-build": "^0.6.0",
    "@nuxtjs/eslint-config-typescript": "^1.0.0",
    "@nuxtjs/eslint-module": "^1.0.0",
    "@nuxtjs/tailwindcss": "^1.4.1",
    "@storybook/addon-actions": "^5.3.18",
    "@storybook/addon-knobs": "^5.3.18",
    "@storybook/addon-links": "^5.3.18",
    "@storybook/addons": "^5.3.18",
    "@storybook/vue": "^5.3.18",
    "babel-core": "^6.26.3",
    "babel-eslint": "^10.0.1",
    "babel-loader": "^8.1.0",
    "babel-preset-vue": "^2.0.2",
    "cypress": "^4.5.0",
    "eslint": "^6.1.0",
    "eslint-config-airbnb-base": "^14.1.0",
    "eslint-config-prettier": "^6.10.0",
    "eslint-plugin-nuxt": ">=0.4.2",
    "eslint-plugin-prettier": "^3.1.2",
    /**
     * 목업 서버에서 랜덤 데이터 등 목업 데이터 생성에 사용됩니다.
     * https://cdn.rawgit.com/Marak/faker.js/master/examples/browser/
     */
    "faker": "^4.1.0",
    "fork-ts-checker-webpack-plugin": "^4.1.3",
    "node-sass": "^4.14.1",
    "nodemon": "^1.18.9",
    "postcss-import": "^12.0.1",
    "postcss-nested": "^4.2.1",
    "prettier": "^1.19.1",
    "sass-loader": "^8.0.2",
    "storybook-readme": "^5.0.8",
      /**
      * 목업 서버에서 랜덤 데이터 등 목업 데이터 생성에 사용됩니다.
      * https://cdn.rawgit.com/Marak/faker.js/master/examples/browser/
      */
    "tailwindcss": "^1.4.6",
    "ts-node-dev": "^1.0.0-pre.44",
    "vuex-module-decorators": "^0.17.0"
  }
~~~

