const isDev = process.env.NODE_ENV === 'development'
const useEmulators = true // manually change if emulators needed

export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'firstapp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      '@/assets/css/bootstrap.min.css'
  ],

  js: [
     '@/assets/js/bootstrap.min.js'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/barcode', ssr: false },
    // { src: '~/plugins/main', ssr: false },

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/firebase',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
    ],
            // https://go.nuxtjs.dev/axios
            [
              '@nuxtjs/firebase',
              {
                config:  {
                  apiKey: "AIzaSyAN_oMH13CltVJWfq35ytAm28KB8bYN1qo",
                  authDomain: "trial-b72e2.firebaseapp.com",
                  projectId: "trial-b72e2",
                  storageBucket: "trial-b72e2.appspot.com",
                  messagingSenderId: "572407319868",
                  appId: "1:572407319868:web:9fdf6a1ea910af6dfa6239",
                  measurementId: "G-0SGFSTE03C"
                },
                onFirebaseHosting: false,
                terminateDatabasesAfterGenerate: true,     
                services: {
                  auth: {
                    persistance: 'local',
                    initialize: {
                      // onAuthStateChangedAction: 'auth/onAuthStateChangedAction',
                      subscribeManually: false,
                    },
                    ssr: false,
                    emulatorPort: isDev && useEmulators ? 9099 : undefined,
                    // disableEmulatorWarnings: false,
                  },
                  firestore: {
                    memoryOnly: false,
                    enablePersistence: true,
                    emulatorPort: isDev && useEmulators ? 8080 : undefined,
                  },
                  functions: {
                    emulatorPort: isDev && useEmulators ? 12345 : undefined,
                  },
                  storage: true,
                },
              },
            ],
      
    ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { isDev, isClient }) {
      config.node = {
           fs: 'empty'
       }      
   }
  }
}
