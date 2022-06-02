<template>
    <GmapMap
        :center="center"
        :zoom="13"
        map-type-id="terrain"
        style="width: 100%; height: 90vh"
    >
        <GmapMarker
            :key="index"
            v-for="(marker, index) in markers"
            :position="marker.position"
            :clickable="true"
            :draggable="true"
            :icon="markerIcon"
            @click="toggleInfoWindow(marker,index)">
        >
            <gmap-info-window
                :options="{pixelOffset: {height: -2}}"
                :position="marker.position"
                :opened="infoMarkerIdOpened==index"
                @closeclick="infoMarkerIdOpened=null"
            >
                <v-carousel
                    :continuous="false"
                    hide-delimiter-background
                    hide-delimiters
                    height="100%"
                >
                    <template v-slot:prev="{ on, attrs }">
                        <v-btn
                            color="success"
                            v-bind="attrs"
                            v-on="on"
                            x-small
                        >{{$t("searchRoom.gmaps.prevButton")}}</v-btn>
                    </template>
                    <template v-slot:next="{ on, attrs }">
                        <v-btn
                            color="info"
                            v-bind="attrs"
                            v-on="on"
                            x-small
                        >{{$t("searchRoom.gmaps.nextButton")}}</v-btn>
                    </template>
                    <v-carousel-item
                        v-for="roomId in marker.rooms"
                        :key="roomId"
                        height="100%"
                    >
                        <v-card
                            class="mx-auto search-room__maps__room"
                            width="325px"
                        >
                            <v-img
                                height="240px"
                                class="search-room__maps__room__image"
                                :src="require('@/assets/json-images/rooms/'+rooms[roomId].image)"
                            ></v-img>
                            <v-card-title class="text--primary">
                                <div class="text--primary">
                                    {{rooms[roomId].title}}
                                </div>
                            </v-card-title>
                            <v-card-subtitle>
                                {{rooms[roomId].price}}€ / month
                            </v-card-subtitle>
                        </v-card>
                    </v-carousel-item>
                </v-carousel>
            </gmap-info-window>
        </GmapMarker>
    </GmapMap>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    data: () => ({
        infoMarkerIdOpened: null,
        markerIcon: { 
            url: require('@/assets/images/marker.png'), 
            size: {width: 46, height: 46, f: 'px', b: 'px'},
            scaledSize: {width: 46, height: 46, f: 'px', b: 'px'}
        },
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
        toggleInfoWindow(marker, index){
            if (this.infoMarkerIdOpened == index) {
                this.infoMarkerIdOpened = null;
            }
            else {
                this.infoMarkerIdOpened = index;
            }
        },
    }
};
</script>