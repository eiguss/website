<template>
    <v-menu
        v-model="opened"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="auto"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="dateRangeText"
                label="Date range"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
            ></v-text-field>
        </template>
        <v-date-picker
            :allowed-dates="allowedDates"
            show-adjacent-months
            v-model="dates"
            elevation="5"
            range
        ></v-date-picker>
    </v-menu>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data: () => ({
        opened: false,
        dates: [],
    }),
    computed: {
        dateRangeText () {
            return this.dates.join(' to  ')
        },
    },
    methods: {
        allowedDates: (val) => {
            let valInt = parseInt(val.replace(/-/g, ''), 10);

            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            let todayInt = parseInt(yyyy+mm+dd);

            return valInt  >= todayInt;
        }
    },
};
</script>