<template>
    <div class="landlords__owners-solutions section section__container  text-page">
        <h1>{{$t("landlords.ownerSolutions.title")}}</h1>
        <v-row>
            <solution-card 
                :img="require('@/assets/images/landlords/solutions/solution1.png')"
                label="solution1">
            </solution-card>
            <solution-card 
                :img="require('@/assets/images/landlords/solutions/solution2.png')"
                label="solution2">
            </solution-card>
            <solution-card 
                :img="require('@/assets/images/landlords/solutions/solution3.png')"
                label="solution3">
            </solution-card>
            <solution-card 
                :img="require('@/assets/images/landlords/solutions/solution4.png')"
                label="solution4">
            </solution-card>
            <solution-card 
                :img="require('@/assets/images/landlords/solutions/solution5.png')"
                label="solution5">
            </solution-card>
            <solution-card 
                :img="require('@/assets/images/landlords/solutions/solution6.png')"
                label="solution6">
            </solution-card>
        </v-row>
    </div>
</template>
<script>
import solutionCard from '~/components/landlords-sections/subcomponents/solution-card.vue';
export default {
    components: {
        solutionCard,
    },
};
</script>