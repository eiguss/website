<template>
    <div class="home-page">
        <base-image></base-image>
        <customers-cards></customers-cards>
        <our-accomodations></our-accomodations>
        <partners></partners>
    </div>
</template>

<script>
import baseImage from '~/components/home/base-image.vue';
import customersCards from '~/components/home/customers-cards.vue';
import ourAccomodations from '~/components/home/our-accomodations.vue';
import partners from '~/components/home/partners.vue';
export default {
    components: {
        baseImage,
        customersCards,
        ourAccomodations,
        partners,
    },
}
</script>