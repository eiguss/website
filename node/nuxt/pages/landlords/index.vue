<template>
    <div class="section landlords__base-image">
        <v-img
            max-height="800"
            min-height="650"
            :src="require('@/assets/images/home/home.jpg')"
        >
            <div class="title-img">
                <h1>{{$t('home.title')}}</h1>
            </div>
        </v-img>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
};
</script>