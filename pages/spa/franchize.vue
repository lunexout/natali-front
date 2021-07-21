<template>
    <div class="spa-franchize">
        <PosterAdditional
            img="/assets/img/poster.png"
            :data="{
                title: 'Lorem ipsum dolor sit amet consectetuer adipsicunvt',
            }"
        />
        <PDFAcademyPoster :reverse="false" />
        <FormPosterAcademy />
    </div>
</template>

<script>
import PosterAdditional from "../../components/medium/posterAdditional";
import PDFAcademyPoster from "../../components/medium/pdfAcademyPoster";
import FormPosterAcademy from "../../components/big/formPosterAcademy";

export default {
    name: "Franchize",
    components: {
        PosterAdditional,
        PDFAcademyPoster,
        FormPosterAcademy,
    },
};
</script>

<style lang="scss" scoped>
</style>