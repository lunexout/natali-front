<template>
    <div class="form-poster-academy">
        <div class="img-box">
            <img src="/assets/img/formPoster.png" alt="img" />
        </div>
        <FormComponent :id="id" :branchId="0" />
    </div>
</template>

<script>
import FormComponent from "../small/formComponent";

export default {
    name: "FormPosterAcademy",
    props: ["branchId"],
    components: {
        FormComponent,
    },
    data() {
        return {
            id: null,
        };
    },
    mounted() {
        this.id = this._uid;
    },
};
</script>

<style lang="scss" scoped>
.form-poster-academy {
    position: relative;
    .img-box {
        height: 500px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .form-box {
        position: absolute;
        top: 50%;
        left: 10%;
        transform: translateY(-50%);
    }
}

@media screen and (max-width: 825px) {
    .form-box {
        left: 6% !important;
    }
}

@media screen and (max-width: 768px) {
    .img-box {
        height: 360px !important;
    }
    .form-box {
        left: unset !important;
        position: relative !important;
        transform: unset !important;
    }
}

@media screen and (max-width: 500px) {
    .img-box {
        height: 220px !important;
    }
}

@media screen and (max-width: 425px) {
    .img-box {
        height: 180px !important;
    }
}

@media screen and (min-width: 1500px) {
    .img-box {
        height: 600px !important;
    }
}
</style>