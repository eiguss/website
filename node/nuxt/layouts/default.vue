<template>
    <v-app>
        <app-header></app-header>
        <app-sidebar></app-sidebar>
        <v-main>
            <v-container fluid>
                <Nuxt />
            </v-container>
        </v-main>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import appHeader from '../components/header.vue';
import appFooter from '../components/footer.vue';
import appSidebar from '../components/sidebar.vue';
export default {
    components: {
        appHeader,
        appFooter,
        appSidebar,
    },
    computed: {
    },
}
</script>