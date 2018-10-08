const pkg = require('./package')

module.exports = {
  env: {
    baseUrl: 'http://185.146.3.65/'
  },
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { 
    color: 'black'
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/basic.scss',
    '@/assets/scss/fonts.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: "~/plugins/Swiper",
      ssr: false
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-sass-resources-loader', '@/assets/scss/variables.scss']
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    postCss: [
      /* eslint-disable global-require */
      require("autoprefixer")({
        browsers: ["last 3 versions", "iOS >= 8", "Safari >= 8", "ie >= 9"],
        cascade: false,
        flexbox: "no-2009"
      })
      /* eslint-enable global-require */
    ],
    vendor: [
      "vue-awesome-swiper",
      "axios"
    ],
    extend(config, ctx) {
      
    }
  }
}
