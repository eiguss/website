<template>
    <div class="search-room">
        <v-row>
            <v-col
                xl="3"
                lg="5"
                md="6"
                cols="12"
                class="search-room__rooms_list"
            >
                <rooms></rooms>
            </v-col>
            <v-col
                xl="9"
                lg="7"
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
import gmaps from '~/components/search-room-sections/gmaps.vue';
import rooms from '~/components/search-room-sections/rooms.vue';
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