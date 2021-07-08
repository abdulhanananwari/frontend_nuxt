/* eslint-disable nuxt/no-cjs-in-config */
require('dotenv').config()
    // eslint-disable-next-line nuxt/no-cjs-in-config
const axios = require('axios')
    // eslint-disable-next-line nuxt/no-cjs-in-config
const webpack = require('webpack')

const env = {
    BASE_URL: process.env.BASE_URL || 'https:liveserver.com',
    API_URL: process.env.API_URL || 'https://api.liveserver.com',
    MIDTRANS_CLIENT_KEY: process.env.MIDTRANS_CLIENT_KEY,
    MIDTRANS_SNAPJS: process.env.MIDTRANS_SNAPJS,
    NODE_ENV: process.env.NODE_ENV || 'production'
}

export default {
    // mode: 'universal',
    // Global page headers (https://go.nuxtjs.dev/config-head)
    mode: 'universal',
    server: {
        port: '3000',
        host: 'localhost'
    },
    env,
    target: 'server',
    head: {
        title: 'Test-app',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Quicksand&display=swap'
            }
        ],
        script: [
            // { src: '/plugins/jquery/jquery.min.js', body: true },
            {
                src: env.MIDTRANS_SNAPJS,
                'data-client-key': env.MIDTRANS_CLIENT_KEY,
                body: true
            }

        ],

        bodyAttrs: {
            // class: 'hold-transition sidebar-mini layout-fixed',

        }
    },

    loading: { color: '#fff' },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        // "~/assets/css/custom.css",
        // "~/assets/bootstrap/bootstrap.min.css",
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    // plugins: [
    //     '@/plugins/auth.js',
    //     '@/plugins/axios.js',
    //     '@/plugins/jq.js'
    // ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // '@nuxtjs/eslint-module',
        '@nuxtjs/dotenv'
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // '@nuxtjs/auth',
        // 'bootstrap-vue/nuxt',
        // '@nuxtjs/moment',
        // 'nuxt-vue-select',
        // '@nuxtjs/toast', [
        //     'vue-sweetalert2/nuxt',
        //     {
        //         confirmButtonColor: '#41b882',
        //         cancelButtonColor: '#ff7674'
        //     }
        // ],
        // 'vue-currency-filter/nuxt',
        // 'vue-currency-input/nuxt'

    ],


    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL: env.API_URL,

        proxyHeaders: false,
        credentials: false
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},

    // auth: {
    //     redirect: {
    //         login: '/login',
    //         logout: '/',
    //         callback: '/login',
    //         home: '/'
    //     },
    //     strategies: {
    //         // method yang akan kita gunakan untuk login
    //         local: {
    //             endpoints: {
    //                 login: { url: '/auth/login', method: 'post', propertyName: 'access_token' },
    //                 logout: { url: '/logout', method: 'post' },
    //                 user: false
    //                     // user: { url: '/auth/user', method: 'get', propertyName: 'data' }
    //             },
    //             tokenRequired: true,
    //             tokenType: 'Bearer'
    //         }
    //     },
    //     token: {
    //         name: 'token'
    //     },
    //     cookie: {
    //         name: 'token'
    //     }
    // },
    // router: {
    //     //middleware: ['auth']
    // }
}