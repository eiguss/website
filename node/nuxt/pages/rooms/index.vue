<template>
    <div class="search-room">
        <v-row>
            <v-col
                xl="4"
                lg="6"
                md="6"
                cols="12"
                class="search-room__rooms_list"
            >
                <rooms></rooms>
            </v-col>
            <v-col
                xl="8"
                lg="6"
                md="6"
                cols="12"
                class="search-room__maps"
            >
                <gmaps></gmaps>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import gmaps from '~/components/rooms-sections/gmaps.vue';
import rooms from '~/components/rooms-sections/rooms.vue';
export default {
    components: {
        gmaps,
        rooms,
    },
    async asyncData({ store }) {
        await Promise.all([
            store.dispatch('rooms/getRooms'),
        ]);
    },
};
</script>