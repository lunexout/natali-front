<template>
    <div>
        <DonationCharity :onlyText="true" />
        <!-- <Quote
            v-if="getQuote"
            :text="getQuote[0].body"
            :author="getQuote[0].title"
        /> -->
        <JobsSlider />
        <!-- <Media v-if="getAllMedia" :oneMedia="getAllMedia[0]" /> -->
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Media from "../../components/medium/media";
import DonationCharity from "../../components/medium/donationCharity";
import Quote from "../../components/small/quote";
import JobsSlider from "../../components/medium/jobsSlider";

export default {
    name: "Career",
    components: {
        DonationCharity,
        Quote,
        JobsSlider,
        Media
    },
    computed: {
        ...mapGetters("General", ["getAllMedia"]),
        ...mapGetters("Forms", ["getQuote"])
    },
    methods: {
        ...mapActions("General", ["receiveAllMedia"]),
        ...mapActions("Forms", ["receiveQuotes"])
    },
    mounted() {
        this.receiveAllMedia(0);
        // this.receiveQuotes(this.branchId);
        this.receiveQuotes(0);
    }
};
</script>

<style lang="scss" scoped></style>
