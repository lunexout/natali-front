<template>
    <div class="poster-video">
        <img :src="img" alt="poster" />
        <iframe
            :class="[
                {
                    active: activeFrame,
                },
            ]"
            v-if="videoLink"
            :src="urlFormat(videoLink) + '?autoplay=' + startVideo"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
        <div class="data" v-if="data">
            <p class="title">{{ data.title | truncate(50) }}</p>
            <p class="tag" :inner-html.prop="data.tag | truncate(80)"></p>
            <div class="button" @click="playVideo()">Play now</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Poster",
    props: ["img", "data", "videoLink"],
    data() {
        return {
            activeFrame: false,
            startVideo: 0,
        };
    },
    methods: {
        playVideo() {
            this.activeFrame = !this.activeFrame;
            this.startVideo = 1;
        },
        urlFormat(url) {
            if (url.includes("watch?v=")) {
                url = url.replace("watch?v=", "embed/");
            } else if (url.includes("youtu.be")) {
                url = url.replace("youtu.be", "youtube.com/embed");
            }
            return url;
        },
    },
    created() {
        let that = this;
        window.addEventListener("click", function (e) {
            let posterVideoCont = document.querySelectorAll(".poster-video");
            posterVideoCont.forEach(function (pVid) {
                if (!pVid.contains(e.target)) {
                    that.activeFrame = false;
                    that.startVideo = 0;
                }
            });
        });
    },
};
</script>

<style lang="scss" scoped>
.poster-video {
    width: 100%;
    height: 600px;
    position: relative;
    iframe {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: none;
        &.active {
            display: block;
            z-index: 9;
        }
    }
    .data {
        position: absolute;
        color: #fff;
        bottom: 80px;
        left: 100px;
        font-family: "Prompt";
        .tag {
            font-weight: 400;
            font-size: 24px;
            padding-bottom: 16px;
        }
        .title {
            font-weight: 600;
            font-size: 30px;
            padding-bottom: 4px;
        }
        .button {
            cursor: pointer;
            padding: 0 24px;
            display: block;
            width: 100px;
            text-align: center;
            font-family: "Config Condensed";
            color: #fff;
            text-decoration: none;
            background-color: #e0b763;
            font-weight: 600;
            height: 40px;
            line-height: 40px;
            font-size: 18px;
            text-transform: uppercase;
            border-radius: 10px;
        }
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

@media screen and (max-width: 1500px) {
    .poster-video {
        height: 500px !important;
    }
}

@media screen and (max-width: 1024px) {
    .poster-video {
        height: 400px !important;
    }
    .data {
        bottom: 38px !important;
        left: 60px !important;
    }
}

@media screen and (max-width: 700px) {
    .poster-video {
        height: 300px !important;
    }
}

@media screen and (max-width: 500px) {
    .poster-video {
        height: 260px !important;
    }
    .data {
        bottom: 26px !important;
        left: 36px !important;
        .tag {
            font-size: 18px !important;
        }
        .title {
            font-size: 24px !important;
        }
    }
}
</style>