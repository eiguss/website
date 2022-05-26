<template>
    <div class="section home-page__base-image">
        <v-img
            max-height="800"
            min-height="650"
            :src="require('@/assets/images/home/home.jpg')"
        >
            <div class="title-img">
                <h1>{{$t('home.title')}}</h1>
            </div>
            <!-- <date-pickers></date-pickers> -->
        </v-img>
    </div>
</template>
<script>
import datePickers from '~/components/shared/date-pickers.vue';
export default {
    components: {
        datePickers,
    },
}
</script>