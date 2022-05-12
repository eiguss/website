export const state = () => ({
    sidebarVisible: false,
    loading:0,
    navigationItems: [
        { title: 'bookYourRoom', path: '/search-room' },
        { title: 'landlords', path: '/landlords' },
        { title: 'contact', path: '/contact' },
    ],
    footerItems: [
        { title: 'bookYourRoom', path: '/search-room' },
        { title: 'landlords', path: '/landlords' },
        { title: 'contact', path: '/contact' },
        { title: 'termsConditions', path: '/terms-and-conditions' },
        { title: 'policies', path: '/privacy-policy' },
        { title: 'about', path: '/about' },
    ],
    locale:'en',
    locales: {
        'en':'English',
        'es':'Español',
    },
    socialMedia: [
        {
            "url": "https://www.facebook.com/AtikaRoomsBarcelona",
            "icon": "mdi-facebook",
        },
        {
            "url": "https://www.instagram.com/atikarooms/",
            "icon": "mdi-instagram",
        },
        {
            "url": "https://twitter.com/Atika_Rooms",
            "icon": "mdi-twitter",
        },
        {
            "url": "https://www.linkedin.com/company/atika-rooms",
            "icon": "mdi-linkedin",
        }
    ]
});

export const getters = {
    sidebarVisible: state => state.sidebarVisible,
    loading: state => state.loading>0,
    navigationItems: state => state.navigationItems,
    footerItems: state => state.footerItems,
    locale: state => state.locale,
    locales: state => state.locales,
    socialMedia: state => state.socialMedia,
};

export const mutations = {
    START_LOADING(state) {
        ++state.loading;
    },
    END_LOADING(state) {
        if(state.loading > 0) {
            --state.loading;
        }
    },
    SET_REDIRECT_PATH(state, redirectPath) {
        state.redirectPath=redirectPath;
    },
    SET_LOCALE(state, locale) {
        state.locale=locale;
        this.$i18n.locale = state.locale;
    },
    SET_SIDEBAR_VISIBILITY(state, visibility) {
        state.sidebarVisible=visibility;
    },
    TOGGLE_SIDEBAR_VISIBILITY(state){
        state.sidebarVisible=!state.sidebarVisible;
    }
};

export const actions = {
};
