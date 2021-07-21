<template>
    <div class="events-listing">
        <div class="container">
            <div class="date-bar"></div>
            <div class="listing">
                <template v-for="(event, index) of data">
                    <OneEvent :key="index" />
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import OneEvent from "../small/oneEvent";

export default {
    name: "EventsListing",
    props: ["data"],
    components: {
        OneEvent
    },
    mounted() {},
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.events-listing {
    padding-bottom: 40px;
    .listing {
        display: flex;
        flex-direction: column;
        align-items: center;
        .one-event:not(:last-child) {
            margin-bottom: 32px;
        }
    }
}
</style>
