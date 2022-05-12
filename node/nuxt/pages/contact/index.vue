<script>
import textPageMixin from "@/mixins/textPageMixin.vue";
export default {
    mixins: [textPageMixin],
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