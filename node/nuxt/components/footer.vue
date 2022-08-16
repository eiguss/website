<template>
    <v-footer white>
        <div class="footer-container">
            <v-row justify="center" no-gutters>
                <v-btn
                    v-for="footerItem in footerItems"
                    :key="footerItem.title"
                    color="black"
                    text
                    rounded
                    class="my-2"
                    :to="footerItem.path"
                >
                    {{ $t('navigation.'+footerItem.title) }}
                </v-btn>
            </v-row>
            <v-row no-gutters>
                <v-col
                    class="pt-8 pb-6"
                    cols="6"
                >
                    <v-icon> mdi-copyright </v-icon>
                    {{ new Date().getFullYear() }} — {{$t('footer.rightsReserved')}}
                </v-col>
                <v-col
                    class="py-6 text-right"
                    cols="6"
                >
                    <v-btn
                        v-for="item in socialMedia"
                        :key="item.icon"
                        class="mx-4"
                        :href="item.url"
                        icon
                    >
                        <v-icon size="24px">
                            {{ item.icon }}
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </div>
    </v-footer>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data: function () {
        return {
            footerItems: [
                { title: 'bookYourRoom', path: '/rooms' },
                { title: 'landlords', path: '/landlords' },
                { title: 'contact', path: '/contact' },
                { title: 'termsConditions', path: '/terms-and-conditions' },
                { title: 'policies', path: '/privacy-policy' },
                { title: 'about', path: '/about' },
            ],
            socialMedia: [
                {
                    "url": "https://www.facebook.com/AtikaRoomsBarcelona",
                    "icon": "mdi-facebook",
                },
                {
                    "url": "https://www.instagram.com/atikarooms/",
                    "icon": "mdi-instagram",
                },
                {
                    "url": "https://twitter.com/Atika_Rooms",
                    "icon": "mdi-twitter",
                },
                {
                    "url": "https://www.linkedin.com/company/atika-rooms",
                    "icon": "mdi-linkedin",
                }
            ],
        }
    },
}
</script>