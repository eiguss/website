<template>
    <div class="room">
        <images></images>
        <v-row class="section section__container">
            <v-col cols="9">
                <room-text></room-text>
                <services></services>
            </v-col>
            <v-col cols="3">
                <reservationInfo></reservationInfo>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import images from '~/components/room-sections/images.vue';
import roomText from '~/components/room-sections/text.vue';
import services from '~/components/room-sections/services.vue';
import reservationInfo from '~/components/room-sections/reservation-info.vue';
import { mapMutations } from 'vuex';
export default {
    components: {
        images,
        roomText,
        services,
        reservationInfo,
    },
    async asyncData({ store }) {
        await Promise.all([
            store.dispatch('rooms/getRooms'),
        ]);
    },
    beforeMount() {
        this.setSelectedRoom(this.$route.params.room);
    },
    methods: {
        ...mapMutations('rooms', {
            setSelectedRoom: 'SET_SELECTED_ROOM',
        }),
    }
};
</script>