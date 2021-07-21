<template>
    <ul class="top-bar-opts-social">
        <li v-if="lang == true">
            <LanguageDropdown />
        </li>
        <li v-if="data">
            <a :href="data.facebook_link" target="_blank">
                <img src="/assets/icons/socials/facebook-icon.svg" alt="icon" />
            </a>
        </li>
        <li v-else>
            <a href="#" target="_blank">
                <img src="/assets/icons/socials/facebook-icon.svg" alt="icon" />
            </a>
        </li>
        <!-- if not -->
        <li v-if="data">
            <a :href="data.youtube_link" target="_blank">
                <img src="/assets/icons/socials/youtube-icon.svg" alt="icon" />
            </a>
        </li>
        <li v-else>
            <a href="#" target="_blank">
                <img src="/assets/icons/socials/youtube-icon.svg" alt="icon" />
            </a>
        </li>
        <!-- if not -->
        <li v-if="data">
            <a :href="data.instagram_link" target="_blank">
                <img
                    src="/assets/icons/socials/instagram-icon.svg"
                    alt="icon"
                />
            </a>
        </li>
        <li v-else>
            <a href="#" target="_blank">
                <img
                    src="/assets/icons/socials/instagram-icon.svg"
                    alt="icon"
                />
            </a>
        </li>
        <!-- if not -->
    </ul>
</template>

<script>
import LanguageDropdown from "./languageDrop";

export default {
    name: "SocialIcons",
    props: ["lang", "data"],
    data() {
        return {};
    },
    components: {
        LanguageDropdown,
    },
};
</script>

<style lang="scss" scoped>
.top-bar-opts-social {
    display: flex;
    justify-content: space-between;
    li {
        padding: 0 10px;
        display: inline-block;
        color: #000;
        a {
            color: #494949;
            text-decoration: none;
            font-size: 20px;
            width: 26px;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
                color: #000;
            }
        }
    }
}
</style>