<template>
    <div class="ongoing-causes">
        <div class="container">
            <h1 class="title">Ongoing Causes</h1>
        </div>
        <div class="row">
            <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 nopadding">
                <div class="img-wrapper">
                    <img src="/assets/img/ongoing.png" alt="img">
                </div>
            </div>
            <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 nopadding">
                <div class="text-wrapper">
                    <div class="inner">
                        <p class="text">Currently, the most popular professions in Georgian youth are connected with fashion. We offer you studying in our Hairdresser’s School to support your talent in this comprehensive need for beauty.  Our school program includes the newest knowledge of technologies in this field.School educational plan includes basic education programs for multifunctional hairdressers’ trainings,</p>
                        <span class="amount">$ 23.000 Donated</span>
                        <a href="#" class="donate-now">Donate now</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row reverse">
            <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 nopadding">
                <div class="img-wrapper">
                    <img src="/assets/img/ongoing.png" alt="img">
                </div>
            </div>
            <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 nopadding">
                <div class="text-wrapper">
                    <div class="inner">
                        <p class="text">Currently, the most popular professions in Georgian youth are connected with fashion. We offer you studying in our Hairdresser’s School to support your talent in this comprehensive need for beauty.  Our school program includes the newest knowledge of technologies in this field.School educational plan includes basic education programs for multifunctional hairdressers’ trainings,</p>
                        <span class="amount">$ 23.000 Donated</span>
                        <a href="#" class="donate-now">Donate now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OngoingCauses',
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>

.ongoing-causes {
    .title {
        margin: 40px 0 20px;
        font-family: 'Prompt';
        font-weight: 500;
        font-size: 30px;
    }
    .text-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 40px 36px;
        height: 100%;
        box-sizing: border-box;
        font-family: 'Prompt';
        .text {
            font-weight: 300;
            max-width: 440px;
            font-size: 16px;
        }
        .amount {
            font-weight: 600;
            font-size: 18px;
            margin-top: 20px;
            display: block;
        }
        .donate-now {
            font-family: 'Config Condensed';
            font-weight: 600;
            color: #F2B63A;
            margin-top: 22px;
            display: block;
            text-decoration: none;
            font-size: 20px;
        }
    }
    .img-wrapper {
        width: 100%;
        height: 400px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

@media screen and (max-width: 800px) {
    .img-wrapper {
        height: 300px !important;
    }
}

@media screen and (max-width: 425px) {
    .img-wrapper {
        height: 220px !important;
    }
    .text-wrapper {
        padding: 20px 16px 40px !important;
    }
}

@media screen and (min-width: 1400px) {
    .img-wrapper {
        height: 500px !important;
    }
}

</style>