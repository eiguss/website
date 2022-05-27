<template>
    <v-row>
        <v-col cols="2">
            <v-img class="ml-md-auto" max-width="70" :src="img"></v-img>
        </v-col>
        <v-col class="my-auto" cols="10">
            <p>{{$t("landlords.guarantee."+label)}}</p>
        </v-col>
    </v-row>
</template>
<script>
export default {
    props: {
        img: String,
        label: String,
    }
};
</script>