<template>
    <div class="charity">
        <DonationCharity :onlyText="true" />
        <ProgramsDonation />
        <GallerySlider />
        <OngoingCauses />
    </div>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";

import GallerySlider from "../../components/medium/gallerySlider";
import ProgramsDonation from "../../components/medium/programDonation";
import OngoingCauses from "../../components/medium/ongoingCauses";
import DonationCharity from "../../components/medium/donationCharity";

export default {
    components: {
        OngoingCauses,
        GallerySlider,
        ProgramsDonation,
        DonationCharity,
    },
    data() {
        return {
            //
        };
    },
};
</script>

<style lang="scss" scoped>
</style>