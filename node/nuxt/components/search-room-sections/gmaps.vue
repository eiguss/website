<template>
    <GmapMap
        :center="center"
        :zoom="13"
        map-type-id="terrain"
        style="width: 100%; height: 90vh"
    >
        <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            :icon="{ 
                url: require('@/assets/images/marker.png'), 
                size: {width: 46, height: 46, f: 'px', b: 'px'},
                scaledSize: {width: 46, height: 46, f: 'px', b: 'px'}
            }"
            @click="clickMarker(m)"
        />
    </GmapMap>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
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
        markers(){
            let markers = [];
            Object.keys(this.rooms).forEach(key => {
                let location = this.rooms[key].location;
                let index = markers.findIndex(marker => {
                    return marker.id == location.id;
                });
                if(index===-1){
                    markers.push({
                        id: location.id,
                        rooms: [this.rooms[key].id],
                        position:{
                            lat: Number(location.lat),
                            lng: Number(location.lon),
                        }
                    });
                }else{
                    markers[index].rooms.push(this.rooms[key].id);
                }
            });

            return markers;
        },
        center(){
            let lng=0;
            let lat=0;
            let num=0;
            this.markers.forEach(marker =>{
                lat+=Number(marker.position.lat);
                lng+=Number(marker.position.lng);
                ++num;
            });

            return {
                lat:lat/num,
                lng:lng/num
            };
        }
    },
    methods: {
        clickMarker(marker){
            console.log(marker);
        }
    }
};
</script>