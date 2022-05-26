<template>
    <div class="section section__container text-page home-page__parners">
        <h1>{{$t("home.partnersTitle")}}</h1>
        <v-row>
            <partners-card
                url="https://www.bcombinator.com/"
                :img="require('@/assets/images/home/partners/partner1.png')"
            ></partners-card>
            <partners-card
                url="https://gemassessors.com/"
                :img="require('@/assets/images/home/partners/partner2.png')"
            ></partners-card>
            <partners-card
                url="https://www.api.cat/es"
                :img="require('@/assets/images/home/partners/partner3.png')"
            ></partners-card>
            <partners-card
                url="http://sipropertybcn.com/es/"
                :img="require('@/assets/images/home/partners/partner4.png')"
            ></partners-card>
        </v-row>
    </div>
</template>
<script>
import partnersCard from '~/components/home-sections/subcomponents/partners-card.vue';
export default {
    components: {
        partnersCard,
    },
};
</script>