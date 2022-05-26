<template>
    <div class="section section__container text-page home-page__our-accomodations">
        <h1>{{$t("home.ourAccomodationsTitle")}}</h1>
        <v-row>
            <accomodation-card 
                :img="require('@/assets/images/home/landlords.jpg')"
                label="ourAccomodations1">
            </accomodation-card>
            <accomodation-card 
                :img="require('@/assets/images/home/landlords.jpg')"
                label="ourAccomodations2">
            </accomodation-card>
            <accomodation-card 
                :img="require('@/assets/images/home/landlords.jpg')"
                label="ourAccomodations3">
            </accomodation-card>
            <accomodation-card 
                :img="require('@/assets/images/home/landlords.jpg')"
                label="ourAccomodations4">
            </accomodation-card>
            <accomodation-card 
                :img="require('@/assets/images/home/landlords.jpg')"
                label="ourAccomodations1">
            </accomodation-card>
            <accomodation-card 
                :img="require('@/assets/images/home/landlords.jpg')"
                label="ourAccomodations2">
            </accomodation-card>
            <accomodation-card 
                :img="require('@/assets/images/home/landlords.jpg')"
                label="ourAccomodations3">
            </accomodation-card>
            <accomodation-card 
                :img="require('@/assets/images/home/landlords.jpg')"
                label="ourAccomodations4">
            </accomodation-card>
        </v-row>
    </div>
</template>
<script>
import accomodationCard from '~/components/home-sections/subcomponents/accomodation-card.vue';
export default {
    components: {
        accomodationCard,
    },
};
</script>