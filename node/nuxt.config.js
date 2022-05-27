export default {
    server:{
        host:'0.0.0.0'
    },
    srcDir: 'nuxt/',
    ssr: false,
    target: 'static',
    head: {
        title: 'Atikarooms',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
        ]
    },
    css: [
        '@/assets/css/main.scss'
    ],
    plugins: [
        '~/plugins/axios.js',
        '~/plugins/i18n.js',
        '~/plugins/maps.js',
        '~/plugins/goto.js',
    ],
    loading: '~/components/Loading.vue',
    components: true,
    axios: {
        baseURL: '/',
    },
    buildModules: [
        '@nuxtjs/vuetify',
    ],
    modules: [
        '@nuxtjs/axios',
    ],
    build: {
        publicPath: '/assets/',
    },
    router: {
        extendRoutes (routes) {
            routes.push(
                {
                    name: 'page404',
                    path: '*',
                    component: '~/components/page-404.vue'
                }
            );
        }
    },
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:'+process.env.PORT_NODE,
        maps_key: process.env.MAPS_KEY,
    },
    watchers: {
        webpack: {
            poll: true
        }
    }
};
