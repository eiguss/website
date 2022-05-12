<template>
    <v-app>
        <app-sidebar></app-sidebar>
        <app-header></app-header>
        <v-main>
            <v-container fluid>
                <Nuxt />
            </v-container>
        </v-main>
        <v-divider class="footer__divider"></v-divider>
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