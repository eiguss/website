<template>
    <v-col
        lg="4"
        sm="6"
        cols="12"
    >
        <v-card
            class="mx-auto"
            height="100%"
        >
            <v-img class="mx-auto" max-width="180" :src="img"></v-img>
            <v-card-title class="text--primary">
                <div class="text--primary">
                    {{$t("landlords.ownerSolutions."+label+"Title")}}
                </div>
            </v-card-title>
            <v-card-text class="text--primary">
                    {{$t("landlords.ownerSolutions."+label+"Description")}}
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