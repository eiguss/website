<template>
    <text-page :labelsKey="labelsKey" :elements="elements" ></text-page>
</template>
<script>
import textPage from '~/components/textPage.vue';
export default {
    components: {
        textPage,
    },
    data: function () {
        return {
            labelsKey: 'contact',
            elements: [
                {type:'h1', label:'title'},
                {type:'h2', label:'subTitle1'},
                {type:'p', label:'paragraph1-1'},
            ]
        }
    },
};
</script>