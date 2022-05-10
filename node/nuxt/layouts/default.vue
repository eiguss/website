<template>
    <v-app>
        <app-header></app-header>
        <v-main>
            <v-container>
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
export default {
    components: {
        appHeader,
        appFooter,
    },
    computed: {
    },
}
</script>