<template>
    <div class="landlords__text section section__container">
        <text-page :labelsKey="labelsKey" :elements="elements" ></text-page>
        <v-row class="justify-center">
            <v-btn
                depressed
                large
                color="primary"
                @click="$goto('landlords-form')"
            >
                {{$t('landlords.textSection.button')}}
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
            labelsKey: 'landlords.textSection',
            elements: [
                {type:'p', label:'paragraph1'},
                {type:'p', label:'paragraph2'},
                {type:'p', label:'paragraph3'},
                {type:'p', label:'paragraph4'},
            ]
        }
    },
};
</script>