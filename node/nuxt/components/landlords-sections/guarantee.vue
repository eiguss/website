<template>
    <div class="landlords__guarantee section">
        <v-img
            max-height="650"
            min-height="400"
            :src="require('@/assets/images/landlords/back_garantias_propietarios.jpg')"
        >
            <div class="landlords__guarantee__items">
                <guaranty-item
                    :img="require('@/assets/images/landlords/guarantee/guaranty1.png')"
                    label="item1"
                ></guaranty-item>
                <guaranty-item
                    :img="require('@/assets/images/landlords/guarantee/guaranty2.png')"
                    label="item2"
                ></guaranty-item>
                <guaranty-item
                    :img="require('@/assets/images/landlords/guarantee/guaranty3.png')"
                    label="item3"
                ></guaranty-item>
                <guaranty-item
                    :img="require('@/assets/images/landlords/guarantee/guaranty4.png')"
                    label="item4"
                ></guaranty-item>
                <guaranty-item
                    :img="require('@/assets/images/landlords/guarantee/guaranty5.png')"
                    label="item5"
                ></guaranty-item>
                <guaranty-item
                    :img="require('@/assets/images/landlords/guarantee/guaranty6.png')"
                    label="item6"
                ></guaranty-item>
            </div>
        </v-img>
    </div>
</template>
<script>
import guarantyItem from '~/components/landlords-sections/subcomponents/guaranty-item.vue';
export default {
    components: {
        guarantyItem,
    },
};
</script>