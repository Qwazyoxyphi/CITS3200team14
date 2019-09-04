const pkg = require('./package')

module.exports = {
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
    script: [
      {
        src: 'https://player.vimeo.com/api/player.js'
      },
      {
        defer: true,
        src: 'https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.js',
        integrity:
          'sha384-K3vbOmF2BtaVai+Qk37uypf7VrgBubhQreNQe9aGsz9lB63dIFiQVlJbr92dw2Lx',
        crossOrigin: 'anonymous'
      },
      {
        defer: true,
        src:
          'https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/contrib/auto-render.min.js',
        integrity:
          'sha384-kmZOZB5ObwgQnS/DuDg6TScgOiWWBiVt0plIRkZCmE6rDZGrEOQeHM5PcHi+nyqe',
        crossOrigin: 'anonymous'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.3.5/jsxgraphcore.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito:400,700,800'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css',
        integrity:
          'sha384-9eLZqc9ds8eNjO3TmqPeYcDj8n+Qfa4nuSiGYa6DjLNcv9BtN69ZIulL9+8CqC9Y',
        crossOrigin: 'anonymous'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.3.5/jsxgraph.css'
      },
      { rel: 'stylesheet', https: 'https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~plugins/vee-validate.js', ssr: true }],

  /*
  ** Nuxt.js modules
  */
 
  modules: [
    '@nuxtjs/axios'
  ],


  axios: {
    baseURL:
      process.env.BASE_URL || 'https://team-14-ontologies.firebaseio.com/'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      /*
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }*/
    }
  }
}
