<template>
    <v-footer
        color="greyB"
        padless
    >
        <v-row
            justify="center width-100"
            no-gutters
        > 
            <v-btn
                v-for="footerItem in footerItems"
                :key="footerItem.title"
                color="white"
                text
                rounded
                class="my-2"
                :to="footerItem.path"
            >
                {{ $t('footer.navigation.'+footerItem.title) }}
            </v-btn>
        </v-row>
        <v-row
            justify="center"
            no-gutters
        > 
            <v-col
                class="pt-8 pb-6 px-16 white--text"
                cols="6"
            >
                <v-icon> mdi-copyright </v-icon>
                {{ new Date().getFullYear() }} — {{$t('footer.rightsReserved')}}
            </v-col>
            <v-col
                class="px-16 py-6 white--text text-right"
                cols="6"
            >
                <v-btn
                    v-for="item in socialMedia"
                    :key="item.icon"
                    class="mx-4 white--text"
                    :href="item.url"
                    icon
                >
                    <v-icon size="24px">
                        {{ item.icon }}
                    </v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('global', {
            socialMedia: 'socialMedia',
            footerItems: 'footerItems',
        }),
    },
}
</script>