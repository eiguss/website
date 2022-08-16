<template>
    <v-select
        :items="items"
        :label="$t('searchRoom.room.reservationInfo.numberOfGuest')"
        dense
    ></v-select>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    data: () => ({
        items: [1,2],
    }),
};
</script>