<template>
    <v-navigation-drawer
        class="hidden-lg-and-up"
        v-model="showSidebar"
        temporary
        app
    >
        <v-list dense>
            <v-list-item
                v-for="(item, key) in navigationItems"
                :key="key"
                :to="item.path"
            >
                <v-list-item-title>
                    {{$t('navigation.'+item.title)}}
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
export default {
    data: function () {
        return {
            navigationItems: [
                { title: 'bookYourRoom', path: '/search-room' },
                { title: 'landlords', path: '/landlords' },
                { title: 'contact', path: '/contact' },
            ],
        }
    },
    computed: {
        ...mapGetters('global', {
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