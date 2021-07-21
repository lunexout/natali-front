<template>
    <div class="bussiness-page">
        <Media v-if="getAllMedia" :oneMedia="getAllMedia[0]" />
        <UpcomingSeminars v-if="getAllSeminars" :data="getAllSeminars" />
        <EventListing />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Media from "../../components/medium/media";
import UpcomingSeminars from "../../components/medium/upcomingSeminar";
import EventListing from "../../components/big/eventsListing";

export default {
    name: "BussinessPage",
    components: {
        Media,
        UpcomingSeminars,
        EventListing,
    },
    data() {
        return {};
    },
    computed: {
        ...mapGetters("General", ["getAllMedia"]),
        ...mapGetters("Academy", ["getAllSeminars"]),
    },
    methods: {
        ...mapActions("General", ["receiveAllMedia"]),
        ...mapActions("Academy", ["receiveAllSeminars"]),
    },
    mounted() {
        this.receiveAllMedia(0);
        this.receiveAllSeminars();
    },
};
</script>

<style lang="scss" scoped>
</style>