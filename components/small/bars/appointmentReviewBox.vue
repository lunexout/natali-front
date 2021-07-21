<template>
    <div class="f-box">
        <div class="top">
            <span>Edit</span>
        </div>
        <div class="view">
            <div class="img-sec">
                <div class="img-wrapper">
                    <img src="/assets/img/gallery.png" alt="img">
                </div>
            </div>
            <div class="text">
                <p class="title">Summer Vacation Fragrance Fragrance Mist</p>
            </div>
        </div>
        <div class="details">
            <div class="det">
                <img src="/assets/icons/calendar.svg" alt="icon">
                <span>July 2, 2020</span>
            </div>
            <div class="det">
                <img src="/assets/icons/clock.svg" alt="icon">
                <span>11:00 PM</span>
            </div>
            <div class="det">
                <img src="/assets/icons/location.svg" alt="icon">
                <span>67 Merab Kostava Street</span>
            </div>
            <div class="det">
                <img src="/assets/icons/phone.svg" alt="icon">
                <span>+995 574 574 545</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ReviewBox',
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>

.f-box {
    display: flex;
    flex-direction: column;
    background-color: #F2F2F2;
    margin: 16px 0;
    border-radius: 12px;
    .top {
        padding: 0 16px;
        height: 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        span {
            font-weight: 500;
            font-size: 16px;
            color: #434343;
            cursor: pointer;
        }
    }
    .view {
        display: flex;
        padding: 0 8px;
        background: #fff;
        .img-wrapper {
            width: 92px;
            height: 92px;
            margin: 8px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .text {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            .title {
                font-weight: 500;
                font-size: 16px;
            }
        }
    }
    .details {
        padding: 18px 16px;
        display: flex;
        flex-direction: column;
        .det {
            display: flex;
            align-items: center;
            &:not(:last-child) {
                margin-bottom: 20px;
            }
            img {
                width: 20px;
                height: 24px;
                object-fit: fill;
                opacity: 0.7;
                margin: 0 6px;
            }
            span {
                color: #434343;
                font-size: 18px;
                margin-left: 12px;
            }
        }
    }
}

</style>