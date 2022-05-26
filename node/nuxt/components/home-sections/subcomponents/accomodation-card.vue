<template>
    <v-col
        lg="3"
        sm="6"
        cols="12"
    >
        <v-card
            class="mx-auto"
            height="100%"
        >
            <v-img :src="img"></v-img>
            <v-card-title class="text--primary">
                <div class="text--primary text-truncate">
                    {{$t("home."+label)}}
                </div>
            </v-card-title>

            <v-card-subtitle>
                650€ / month
            </v-card-subtitle>
            <v-card-text class="text--primary">
                <div>{{$t("home."+label)}}</div>
            </v-card-text>
        </v-card>
    </v-col>
</template>
<script>
export default {
    props: {
        img: String,
        label: String,
    }
};
</script>