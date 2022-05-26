<template>
    <v-col
        md="3"
        cols="6"
    >
        <a href="url" target="_blank">
            <v-img 
                :src="img"
            ></v-img>
        </a>
    </v-col>
</template>
<script>
export default {
    props: {
        img: String,
        url: String,
    }
};
</script>