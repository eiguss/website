<template>
    <div class="section section__container home-page__customers-cards">
        <v-row>
            <v-col
                md="6"
                cols="12"
                align-self="end"
            >
                <v-img
                    max-width="550"
                    class="ml-md-auto rounded"
                    :src="require('@/assets/images/home/landlords.jpg')"
                >
                    <div class="home-page__customers-cards__img-container">
                        <div class="home-page__customers-cards__img-container__text">
                            <h2>{{$t('home.landlordsTitle')}}</h2>
                            <p>{{$t('home.landlordsText')}}</p>
                        </div>
                        <v-btn 
                            large
                            color="primary"
                            to="/landlords"
                        >{{$t('home.landlordsButton')}}</v-btn>
                    </div>
                </v-img>
            </v-col>
            <v-col
                md="6"
                cols="12"
            >
                <v-img
                    max-width="550"
                    class="rounded"
                    :src="require('@/assets/images/home/tenants.jpg')"
                >
                    <div class="home-page__customers-cards__img-container">
                        <div class="home-page__customers-cards__img-container__text">
                            <h2>{{$t('home.tenantsTitle')}}</h2>
                            <p>{{$t('home.tenantsText')}}</p>
                        </div>
                        <v-btn 
                            large
                            color="primary"
                            to="/search-room"
                        >{{$t('home.tenantsButton')}}</v-btn>
                    </div>
                </v-img>
            </v-col>
        </v-row>
    </div>
</template>