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
                <v-row>
                    <v-col
                        v-for="room in rooms"
                        :key="room.id"
                        sm="6"
                        cols="12"
                    >
                        <v-card
                            class="mx-auto search-room__rooms_list__room"
                            height="100%"
                        >
                            <v-img height="240px" class="search-room__rooms_list__room__image" :src="require('@/assets/json-images/rooms/'+room.image)"></v-img>
                            <v-card-title class="text--primary">
                                <div class="text--primary">
                                    {{room.title}}
                                </div>
                            </v-card-title>
                            <v-card-subtitle>
                                {{room.price}}€ / month
                            </v-card-subtitle>
                        </v-card>
                    </v-col>
                </v-row>
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
import { mapGetters, mapActions } from 'vuex';
import gmaps from '~/components/search-room-sections/gmaps.vue';
export default {
    components: {
        gmaps,
    },
    async asyncData({ store }) {
        await Promise.all([
            store.dispatch('rooms/getRooms'),
        ]);
    },
    data: () => ({
    }),
    computed: {
        ...mapGetters('rooms', {
            rooms: 'rooms',
        }),
    },
    methods: {
    }
};
</script>