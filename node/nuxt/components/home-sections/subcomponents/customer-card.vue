<template>
    <v-col
        md="6"
        cols="12"
        align-self="end"
    >
        <v-img
            max-width="550"
            class="rounded"
            :src="img"
            :class="classImg"
        >
            <div class="home-page__customers-cards__img-container">
                <div class="home-page__customers-cards__img-container__text">
                    <h2>{{$t('home.'+labelName+'Title')}}</h2>
                    <p>{{$t('home.'+labelName+'Text')}}</p>
                </div>
                <v-btn 
                    large
                    color="primary"
                    :to="buttonTo"
                >{{$t('home.'+labelName+'Button')}}</v-btn>
            </div>
        </v-img>
    </v-col>
</template>
<script>
export default {
    props: {
        img: String,
        labelName: String,
        buttonTo: String,
        classImg: {
            type: String,
            default: ""
        }
    }
};
</script>