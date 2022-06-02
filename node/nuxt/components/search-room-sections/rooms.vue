<template>
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
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters('rooms', {
            rooms: 'rooms',
        }),
    },
};
</script>