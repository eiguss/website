<template>
    <div class="home-page">
        <base-image></base-image>
        <customers-info></customers-info>
        <our-accomodations></our-accomodations>
        <partners></partners>
    </div>
</template>

<script>
import baseImage from '~/components/home-sections/base-image.vue';
import customersInfo from '~/components/home-sections/customers-info.vue';
import ourAccomodations from '~/components/home-sections/our-accomodations.vue';
import partners from '~/components/home-sections/partners.vue';
export default {
    components: {
        baseImage,
        customersInfo,
        ourAccomodations,
        partners,
    },
}
</script>