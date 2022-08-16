<template>
    <div class="room__services__service">
        <v-row>
            <v-img 
                aspect-ratio="1"
                contain
                class="room__services__service__image"
                :src="require('@/assets/json-images/features/'+service.image)"
            ></v-img>
        </v-row>
        <v-row
            class="room__services__service__text"
        >
            {{service.name}}
        </v-row>
    </div>
</template>
<script>
export default {
    props: {
        service: Object,
    }
};
</script>