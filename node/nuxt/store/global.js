export const state = () => ({
    sidebarVisible: false,
    loading:0,
    locale:'en',
    locales: {
        'en':'English',
        'es':'Español',
    },
});

export const getters = {
    sidebarVisible: state => state.sidebarVisible,
    loading: state => state.loading>0,
    locale: state => state.locale,
    locales: state => state.locales,
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
