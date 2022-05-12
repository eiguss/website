<script>
import textPageMixin from "@/mixins/textPageMixin.vue";
export default {
    mixins: [textPageMixin],
    data: function () {
        return {
            labelsKey: 'termsConditions',
            elements: [
                {type:'h1', label:'title'},
                
                {type:'h2', label:'subTitle1'},
                {type:'p', label:'paragraph1-1'},
                {type:'p', label:'paragraph1-2'},
                {type:'p', label:'paragraph1-3'},
                {type:'p', label:'paragraph1-4'},
                {type:'p', label:'paragraph1-5'},
                
                {type:'h2', label:'subTitle2'},
                {type:'p', label:'paragraph2-1'},
                {type:'p', label:'paragraph2-2'},
                {type:'p', label:'paragraph2-3'},
                {type:'p', label:'paragraph2-4'},
                {type:'p', label:'paragraph2-5'},
                {type:'p', label:'paragraph2-6'},
                {type:'p', label:'paragraph2-7'},
                {type:'p', label:'paragraph2-8'},
                {type:'p', label:'paragraph2-9'},
                {type:'p', label:'paragraph2-10'},
                {type:'p', label:'paragraph2-11'},
                {type:'p', label:'paragraph2-12'},
                
                {type:'h2', label:'subTitle3'},
                {type:'p', label:'paragraph3-1'},             
                {type:'p', label:'paragraph3-2'},
                {type:'p', label:'paragraph3-3'},
                {type:'p', label:'paragraph3-4'},
                {type:'p', label:'paragraph3-5'}, 
                
                {type:'h2', label:'subTitle4'},
                {type:'p', label:'paragraph4-1'}, 
                {type:'p', label:'paragraph4-2'}, 
                {type:'p', label:'paragraph4-3'}, 
                {type:'p', label:'paragraph4-4'}, 
                {type:'p', label:'paragraph4-5'}, 

            ]
        }
    },
};
</script>