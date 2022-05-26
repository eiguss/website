<template>
    <div class="section section__container text-page home-page__our-accomodations">
        <h1>{{$t("home.ourAccomodationsTitle")}}</h1>
        <v-row>
            <v-col
                md="3"
                cols="6"
            >
                <v-card
                    class="mx-auto"
                    height="100%"
                >
                    <v-img :src="require('@/assets/images/home/landlords.jpg')"></v-img>
                    <v-card-text class="text--primary">
                        <div>{{$t("home.ourAccomodations1")}}</div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col
                md="3"
                cols="6"
            >
                <v-card
                    class="mx-auto"
                    height="100%"
                >
                    <v-img :src="require('@/assets/images/home/landlords.jpg')"></v-img>
                    <v-card-text class="text--primary">
                        <div>{{$t("home.ourAccomodations2")}}</div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col
                md="3"
                cols="6"
            >
                <v-card
                    class="mx-auto"
                    height="100%"
                >
                    <v-img :src="require('@/assets/images/home/landlords.jpg')"></v-img>
                    <v-card-text class="text--primary">
                        <div>{{$t("home.ourAccomodations3")}}</div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col
                md="3"
                cols="6"
            >
                <v-card
                    class="mx-auto"
                    height="100%"
                >
                    <v-img :src="require('@/assets/images/home/landlords.jpg')"></v-img>
                    <v-card-text class="text--primary">
                        <div>{{$t("home.ourAccomodations4")}}</div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>