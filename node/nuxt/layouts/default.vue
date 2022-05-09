<template>
    <v-app>
        <app-header></app-header>
        <v-main>
            <v-container>
                <Nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import appHeader from '../components/header.vue';
export default {
    components: {
        appHeader,
    },
    computed: {
    },
}
</script>