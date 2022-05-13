<template>
    <div class="about-us">
        <text-page :labelsKey="labelsKey" :elements="elements" ></text-page>
        <v-row>
            <v-col cols="3" />
            <v-col cols="3" class="text-center">
                <v-btn
                    depressed
                    large
                    color="primary"
                    to="/landlords"
                >
                    {{$t('aboutUs.landlords')}}
                </v-btn>
            </v-col>
            <v-col cols="3" class="text-center">
                <v-btn
                    depressed
                    large
                    color="primary"
                    to="/search-room"
                >
                    {{$t('aboutUs.tenants')}}
                </v-btn>
            </v-col>
            <v-col cols="3" />
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