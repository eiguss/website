<script>
import textPageMixin from "@/mixins/textPageMixin.vue";
export default {
    mixins: [textPageMixin],
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