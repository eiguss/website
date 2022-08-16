<template>
    <div class="room__text text-page">
        <v-row>
            <v-col cols="10">
                <h1>{{room.title}}</h1>
            </v-col>
            <v-col cols="2">
                <p class="price">{{room.price}}{{$t("searchRoom.price")}}</p>
                <p class="services-included">{{$t("searchRoom.room.allServicesIncluded")}}</p>
            </v-col>
        </v-row>
        <h1>{{$t("searchRoom.room.aboutRoom")}}</h1>
        <p>{{room.descriptionRoom}}</p>
        <h1>{{$t("searchRoom.room.aboutApartment")}}</h1>
        <p>{{room.aboutApartment}}</p>
        <h1>{{$t("searchRoom.room.aboutLocation")}}</h1>
        <p>{{room.aboutLocation}}</p>
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