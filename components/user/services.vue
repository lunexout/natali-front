<template>
    <div class="service-wrapper">
        <div class="top-bar">
            <span>Service</span>
        </div>
        <div class="content">
            <div
                class="service-box"
                v-for="(index) in [1, 2, 3]"
                :key="index"
            >
                <div class="info">
                    <div class="img-wrapper">
                        <img src="/assets/img/rect.png" alt="serviceimage" />
                    </div>
                    <div class="t">
                        <p class="service-name">Lorem ipsum dolor sit amet.</p>
                        <span class="service-desc"
                            >Lorem ipsum dolor sit amet consectetur.</span
                        >
                    </div>
                </div>
                <div class="date-time">
                    <p class="date">12 July, monday</p>
                    <p class="time">11:30 pm</p>
                </div>
                <div class="price">
                    <span>$80</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "services",
};
</script>

<style lang="scss" scoped>
.service-wrapper {
    .top-bar {
        box-shadow: 0 3px 12px -12px grey;
        height: 50px;
        display: flex;
        // justify-content: space-around;
        align-items: center;
        span {
            margin: 0 20px;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0 12px;
            box-sizing: border-box;
            cursor: pointer;
            font-weight: 500;
            border-bottom: 2px solid transparent;
        }
    }
    .content {
        .service-box {
            margin: 8px 0;
            padding: 16px 16px 16px 0;
            display: flex;
            justify-content: space-between;
            .info {
                display: flex;
                .img-wrapper {
                    margin: 0 16px;
                    width: 100px;
                    height: 100px;
                    border-radius: 8px;
                    overflow: hidden;
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
                .t {
                    display: flex;
                    flex-direction: column;
                    padding: 12px 0;
                    .service-name {
                        font-weight: 500;
                        font-size: 18px;
                        margin-bottom: 8px;
                    }
                    .service-desc {
                        color: #5e5e5e;
                    }
                }
            }
            .date-time {
                position: relative;
                display: flex;
                flex-direction: column;
                padding: 12px 16px;
                font-weight: 500;
                color: #636363;
                &::before,
                &::after {
                    content: "";
                    position: absolute;
                    background-color: #d4d4d4;
                    height: 70%;
                    width: 1px;
                    top: 0;
                    bottom: 0;
                }
                &::before {
                    left: 0;
                }
                &::after {
                    right: 0;
                }
            }
            .price {
                padding: 12px;
                font-family: "Prompt";
                span {
                    font-weight: 500;
                    font-size: 20px;
                }
            }
        }
    }
}

@media screen and (max-width: 600px) {
    .service-box {
        //
    }
}
</style>