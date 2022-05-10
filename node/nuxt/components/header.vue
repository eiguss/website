<template>
<div>
    <v-toolbar>
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
            >
            {{ $t('header.navigation.'+item.title) }}
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
    </v-toolbar>
    <v-navigation-drawer
        class="hidden-lg-and-up"
        v-model="showSidebar"
        absolute
        temporary
    >
        <v-list dense>
            <v-list-item
                v-for="(item, key) in navigationItems"
                :key="key"
                :to="item.path"
            >
                <v-list-item-title>
                    {{$t('header.navigation.'+item.title)}}
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters('global', {
            navigationItems: 'navigationItems',
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