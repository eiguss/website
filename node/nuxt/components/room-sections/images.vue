<template>
    <div class="room__images section section__container">
        <v-carousel
            hide-delimiter-background
            height="240px"
        >
            <v-carousel-item
                height="240px"
            >
                <v-img 
                    height="240px"
                    class="search-room__rooms_list__room__image"
                    :src="require('@/assets/json-images/rooms/'+room.image)"
                ></v-img>
            </v-carousel-item>
            <v-carousel-item
                height="240px"
                v-for="image in room.images"
                :key="image.id"
                v-if="image.advertisement"
            >
                <v-img 
                    height="240px"
                    class="search-room__rooms_list__room__image"
                    :src="require('@/assets/json-images/rooms/'+image.name)"
                ></v-img>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('rooms', {
            room: 'room',
        }),
    },
};
</script>