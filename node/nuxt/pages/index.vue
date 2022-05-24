<template>
    <div class="home-page">
        <div class="home-page__base-image">
            <v-img
                max-height="800"
                min-height="650"
                :src="require('@/assets/images/home/home.jpg')"
            >
                <div class="title-img">
                    <h1>{{$t('home.title')}}</h1>
                </div>
                <filters></filters>
            </v-img>
        </div>
        
    </div>
</template>

<script>
import filters from '~/components/home/filters.vue';
export default {
    components: {
        filters,
    },
}
</script>