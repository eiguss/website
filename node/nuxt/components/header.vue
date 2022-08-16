<template>
<v-app-bar
    app
    color="white"
    elevate-on-scroll
>   
        <v-toolbar-title>
            <a href="/">
                <img class="logo" src="~/assets/images/main-logo2.png" >
            </a>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-md-and-down">
            <v-btn
                v-for="item in navigationItems"
                :key="item.title"
                :to="item.path"
                text
                rounded
            >
            {{ $t('navigation.'+item.title) }}
            </v-btn>
        </v-toolbar-items>
        <v-app-bar-nav-icon 
            @click.stop="toggleSidebarVisibility()"
            class="hidden-lg-and-up"
        ></v-app-bar-nav-icon>
        <v-menu
            left
            bottom
        >
            <template v-slot:activator="{ on, attrs }">
            <v-btn
                icon
                v-bind="attrs"
                v-on="on"
            >
                <v-icon>mdi-web</v-icon>
            </v-btn>
            </template>
            <v-list>
                <v-list-item
                    v-for="(item, key) in locales"
                    :key="key"
                    @click="() => {
                        setLocale(key)
                    }"
                >
                    <v-list-item-title 
                        :class="[item===locales[locale] ? 'active' : '']"
                    >
                        {{item}}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu> 
</v-app-bar>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
export default {
    data: function () {
        return {
            navigationItems: [
                { title: 'home', path: '/' },
                { title: 'bookYourRoom', path: '/rooms' },
                { title: 'landlords', path: '/landlords' },
                { title: 'contact', path: '/contact' },
            ],
        }
    },
    computed: {
        ...mapGetters('global', {
            locale: 'locale',
            locales: 'locales',
            sidebarVisible: 'sidebarVisible',
        }),
        showSidebar: {
            get () {
                return this.sidebarVisible;
            },
            set (visibility) {
                this.setSidebarVisibility(visibility);
            }
        }
    },
    methods: {
        ...mapMutations('global',{
            'setSelectedLocale': 'SET_LOCALE',
            'setSidebarVisibility': 'SET_SIDEBAR_VISIBILITY',
            'toggleSidebarVisibility': 'TOGGLE_SIDEBAR_VISIBILITY',
        }),
        setLocale(locale){
            this.setSelectedLocale(locale);
            console.log(locale);
        }
    },
}
</script>