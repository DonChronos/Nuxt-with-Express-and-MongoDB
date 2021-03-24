
module.exports = {
  ssr: false,
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
	'@nuxtjs/auth',
    '@nuxtjs/pwa',
  ],
  
  auth: {
	  strategies: {
		  local: {
			  endpoints: {
				  login: {
					  url: '/api/users/login',
					  method: 'post',
					  propertyName: 'token'
				  },
				  logout: true,
				  user: {
					  url: '/api/users/user',
					  method: 'get',
					  propertyName: 'user'
				  }
			  },
			  tokenRequired: true,
			  tokenType: "Bearer"
		  }
	  },
	  redirect: {
		  login: '/user/login',
		  logout: '/',
		  home: '/'
	  },
	  rewriteRedirects: true,
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  
  serverMiddleware: [
	'~/api/index.js'
	]
}
