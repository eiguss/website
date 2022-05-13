<template>
    <GmapMap
        :center="center"
        :zoom="7"
        map-type-id="terrain"
        style="width: 500px; height: 300px"
    >
        <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
        />
    </GmapMap>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data: () => ({
        center: {lat:10, lng:10},
        markers: [
            { position:{ lat: 10.772, lng: 10.214 } },
            { position:{ lat: 11.772, lng: 11.214 } },
        ]
    }),
};
</script>