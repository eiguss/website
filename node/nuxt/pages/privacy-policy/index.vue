<template>
    <text-page class="section section__container" :labelsKey="labelsKey" :elements="elements" ></text-page>
</template>
<script>
import textPage from '~/components/textPage.vue';
export default {
    components: {
        textPage,
    },
    data: function () {
        return {
            labelsKey: 'privacyPolicy',
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