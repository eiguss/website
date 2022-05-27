<template>
    <div class="section section__container home-page__customers-cards">
        <v-row>
            <customer-card
                :img="require('@/assets/images/home/landlords.jpg')"
                labelName="landlords"
                buttonTo="/landlords"
                classImg="ml-md-auto"
            ></customer-card>
            <customer-card
                :img="require('@/assets/images/home/tenants.jpg')"
                labelName="tenants"
                buttonTo="/search-room"
            ></customer-card>
        </v-row>
    </div>
</template>
<script>
import customerCard from '~/components/home-sections/subcomponents/customer-card.vue';
export default {
    components: {
        customerCard,
    },
};
</script>