<template>
    <div class="single-brand">
        <Poster :img="brand.img1" />
        <div class="container">
            <p class="brand-title">{{ brand.name }}</p>
            <p class="text text-1">{{ brand.text1 }}</p>
        </div>
        <ImagesSlider :slides="brand.slides" />
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-7 col-sm-12 col-xs-12">
                    <p class="text text-2">{{ brand.text2 }}</p>
                </div>
                <div class="col-lg-4 col-md-5 col-sm-12 col-xs-12">
                    <div class="img-wrapper-1">
                        <img :src="brand.img2" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Poster from "../medium/poster";
import ImagesSlider from "../small/imagesSlider";

export default {
    name: "SingleBrand",
    props: ["brand"],
    components: {
        Poster,
        ImagesSlider,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.single-brand {
    padding-bottom: 30px;
    .brand-title {
        font-family: "Prompt";
        font-weight: 500;
        font-size: 28px;
        margin: 20px 0;
    }
    .text {
        font-family: "Prompt";
        font-weight: 300;
        font-size: 17px;
        &.text-2 {
            margin: 0 -8px;
        }
    }
    .img-wrapper-1 {
        display: block;
        margin: 0 auto;
        width: 350px;
        height: 320px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

@media screen and (max-width: 600px) {
    .single-brand {
        .brand-title {
            font-size: 24px;
        }
        .text {
            font-size: 16px;
        }
    }
}

@media screen and (max-width: 400px) {
    .single-brand {
        .img-wrapper-1 {
            width: 100%;
            height: 260px;
        }
    }
}
</style>