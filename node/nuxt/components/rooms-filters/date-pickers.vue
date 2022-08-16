<template>
    <div class="filters">
        <v-menu
            v-model="openedFrom"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="dateFrom"
                    label="Date range"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
            </template>
            <v-date-picker
                :allowed-dates="allowedDatesFrom"
                show-adjacent-months
                v-model="dateFrom"
                elevation="5"
                @input="choosedDateFrom()"
            ></v-date-picker>
        </v-menu>
        <v-menu
            v-model="openedTo"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="dateTo"
                    label="Date range"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
            </template>
            <v-date-picker
                :allowed-dates="allowedDatesTo"
                show-adjacent-months
                v-model="dateTo"
                elevation="5"
                @input="openedTo = false"
            ></v-date-picker>
        </v-menu>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    data: () => ({
        openedFrom: false,
        openedTo: false,
    }),
    computed: {
        ...mapGetters('rooms', {
            dateFromS: 'dateFrom',
            dateToS: 'dateTo',
        }),
        dateFrom: {
            get () {
                return this.dateFromS;
            },
            set (date) {
                this.setDateFrom(date);
            }
        },
        dateTo: {
            get () {
                return this.dateToS;
            },
            set (date) {
                this.setDateTo(date);
            }
        }
    },
    watch: {
        dateFrom() {
            this.dateTo="";
        }
    },
    methods: {
        ...mapMutations('rooms',{
            'setDateFrom': 'SET_DATE_FROM',
            'setDateTo': 'SET_DATE_TO',
        }),
        choosedDateFrom(){
            setTimeout(()=>{
                this.dateTo = this.getFromPlusOneMonth();
                this.openedFrom = false;
                this.openedTo = true;
            }, 0);
        },
        getTodayInt(){
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();

            return parseInt(yyyy+mm+dd);
        },
        allowedDatesFrom(val){
            let valInt = parseInt(val.replace(/-/g, ''), 10);
            let todayInt = this.getTodayInt();

            return valInt  >= todayInt;
        },
        getFromPlusOneMonth(){
            if(this.dateFrom!==""){
                let dateFrom = new Date(this.dateFrom);
                dateFrom = new Date(dateFrom.setMonth(dateFrom.getMonth()+1));


                return (dateFrom.getFullYear()
                    +'-'+("0"+(dateFrom.getMonth()+1)).slice(-2)
                    +'-'+dateFrom.getDate());
            }

            return "";
        },
        getFromPlusOneMonthInt(){
            let fromPlusOneMonth = this.getFromPlusOneMonth();
            if(fromPlusOneMonth!==""){
                return parseInt(fromPlusOneMonth.replace(/-/g, ''), 10);
            }

            return "";
        },
        allowedDatesTo(val) {
            let valInt = parseInt(val.replace(/-/g, ''), 10);
            let limit = this.getFromPlusOneMonthInt();
            if(limit==""){
                limit = this.getTodayInt();
            }
            
            return valInt  >= limit;
        }
    },
};
</script>