<template>
    <div class="library">
        <PDFAcademy />
        <PDFAcademySlider />
        <FormPosterAcademy />
        <PDFAcademyPoster />
        <PDFAcademyPoster :reverse="true" />
        <DonationCharity :onlyText="true" />
        <PDFAcademy grid="x2" />
    </div>
</template>

<script>
import PDFAcademy from "../../components/medium/pdfAcademy";
import PDFAcademySlider from "../../components/medium/pdfAcademySlider";
import FormPosterAcademy from "../../components/big/formPosterAcademy";
import PDFAcademyPoster from "../../components/medium/pdfAcademyPoster";
import DonationCharity from "../../components/medium/donationCharity";

export default {
    name: "Library",
    components: {
        PDFAcademy,
        PDFAcademySlider,
        FormPosterAcademy,
        PDFAcademyPoster,
        DonationCharity,
    },
};
</script>

<style lang="scss" scoped>
</style>