<template>
    <v-card
        elevation="2"
        class="room_reservation-info"
    >
        <v-card-title>
            {{$t("searchRoom.room.reservationInfo.title")}}
        </v-card-title>
Google maps sin relieve de montañas
        <v-card-text>
            <date-pickers></date-pickers>
            <number-of-guests></number-of-guests>
            <div class="room-prices">
                <v-row>
                    <v-col cols="8">{{$t("searchRoom.room.reservationInfo.monthlyRent")}}</v-col>
                    <v-col cols="4">{{room.price}}€</v-col>
                </v-row>
                <v-row>
                    <v-col cols="8">{{$t("searchRoom.room.reservationInfo.securityDeposit")}}</v-col>
                    <v-col cols="4">{{room.price}}€</v-col>
                </v-row>
                <v-row>
                    <v-col cols="8">{{$t("searchRoom.room.reservationInfo.manageCosts")}}</v-col>
                    <v-col cols="4">100€</v-col>
                </v-row>
                <v-row class="total">
                    <v-col cols="8">{{$t("searchRoom.room.reservationInfo.firstPayment")}}</v-col>
                    <v-col cols="4">{{room.price*2+100}}€</v-col>
                </v-row>
            </div>
        </v-card-text>

        <v-card-actions>
            <v-btn
                depressed
                large
                color="primary"
                to="/contact"
                class="contact"
            >
                {{$t('searchRoom.room.reservationInfo.contactButton')}}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
import datePickers from '~/components/rooms-filters/date-pickers.vue';
import numberOfGuests from '~/components/rooms-filters/number-of-guests.vue';
import { mapGetters } from 'vuex';
export default {
    components: {
        datePickers,
        numberOfGuests,
    },
    computed: {
        ...mapGetters('rooms', {
            room: 'room',
        }),
    },
}
</script>