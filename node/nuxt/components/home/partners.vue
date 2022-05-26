<template>
    <div class="section section__container text-page home-page__parners">
        <h1>{{$t("home.partnersTitle")}}</h1>
        <v-row>
            <v-col
                md="3"
                cols="6"
            >
                <a href="https://gemassessors.com/" target="_blank">
                    <v-img 
                        :src="require('@/assets/images/home/partners/partner1.png')"
                    ></v-img>
                </a>
            </v-col>
            <v-col
                md="3"
                cols="6"
            >
                <a href="https://www.bcombinator.com/" target="_blank">
                    <v-img 
                        :src="require('@/assets/images/home/partners/partner2.png')"
                    ></v-img>
                </a>
            </v-col>
            <v-col
                md="3"
                cols="6"
            >
                <a href="http://sipropertybcn.com/es/" target="_blank">
                    <v-img 
                        max-width="80"
                        :src="require('@/assets/images/home/partners/partner3.jpg')"
                    ></v-img>
                </a>
            </v-col>
            <v-col
                md="3"
                cols="6"
            >
                <a href="https://www.api.cat/es" target="_blank">
                    <v-img
                        :src="require('@/assets/images/home/partners/partner4.jpg')"
                    ></v-img>
                </a>
            </v-col>
        </v-row>
    </div>
</template>