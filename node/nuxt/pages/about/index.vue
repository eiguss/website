<template>
    <div class="about-us section section__container">
        <text-page :labelsKey="labelsKey" :elements="elements" ></text-page>
        <v-row class="justify-center">
            <v-btn
                depressed
                large
                color="primary"
                to="/landlords"
                class="mr-16"
            >
                {{$t('aboutUs.landlords')}}
            </v-btn>
            <v-btn
                depressed
                large
                color="primary"
                to="/rooms"
            >
                {{$t('aboutUs.tenants')}}
            </v-btn>
        </v-row>
    </div>
</template>
<script>
import textPage from '~/components/textPage.vue';
export default {
    components: {
        textPage,
    },
    data: function () {
        return {
            labelsKey: 'aboutUs',
            elements: [
                {type:'h1', label:'title'},
                {type:'p', label:'paragraph1'},
                {type:'p', label:'paragraph2'},
                {type:'p', label:'paragraph3'},
                {type:'p', label:'paragraph4'},
            ]
        }
    },
};
</script>