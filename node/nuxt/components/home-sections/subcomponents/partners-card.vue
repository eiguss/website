<template>
    <v-col
        md="3"
        sm="6"
        cols="12"
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