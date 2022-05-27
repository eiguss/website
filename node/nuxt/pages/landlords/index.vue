<template>
    <div class="landlords">
        <base-image></base-image>
        <landlords-text></landlords-text>
        <owners-solutions></owners-solutions>
        <owners-guarantee></owners-guarantee>
        <landlords-form id="landlords-form"></landlords-form>
    </div>
</template>

<script>
import baseImage from '~/components/landlords-sections/base-image.vue';
import landlordsText from '~/components/landlords-sections/text.vue';
import ownersSolutions from '~/components/landlords-sections/owners-solutions.vue';
import ownersGuarantee from '~/components/landlords-sections/guarantee.vue';
import landlordsForm from '~/components/landlords-sections/form.vue';
export default {
    components: {
        baseImage,
        landlordsText,
        ownersSolutions,
        ownersGuarantee,
        landlordsForm,
    },
}
</script>