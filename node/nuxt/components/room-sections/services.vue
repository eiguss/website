<template>
    <div class="room__services">
        <h1>{{$t("searchRoom.room.servicesApartment")}}</h1>
        <v-row>
            <service
                v-for="roomService in room.roomServices"
                :key="roomService.id"
                :service="roomService"
            ></service>
        </v-row>
        <h1>{{$t("searchRoom.room.servicesRoom")}}</h1>
        <v-row>
            <service
                v-for="apartmentService in room.houseServices"
                :key="apartmentService.id"
                :service="apartmentService"
            ></service>
        </v-row>
    </div>
</template>
<script>
import service from '~/components/room-sections/subcomponents/service.vue';
import { mapGetters } from 'vuex';
export default {
    components: {
        service,
    },
    computed: {
        ...mapGetters('rooms', {
            room: 'room',
        }),
    },
};
</script>