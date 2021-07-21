<template>
    <div class="wishlist">
        <div class="top-bar">
            <span>Wishlist</span>
        </div>
        <div class="content">
            <div class="list">
                <div
                    class="order-box"
                    v-for="(ord, index) in [1, 2, 3, 4]"
                    :key="index"
                >
                    <img src="/assets/img/Clip.png" alt="order" />
                    <p class="order-title">Lorem ipsum dolor sit.</p>
                    <span class="order-desc"
                        >Lorem ipsum dolor sit amet consectetur.</span
                    >
                    <span class="price">$80</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "wishlist",
    data() {
        return {
            //
        };
    },
};
</script>

<style lang="scss" scoped>
.wishlist {
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
        .list {
            display: flex;
            flex-wrap: wrap;
            .order-box {
                max-width: 250px;
                background-color: rgba(211, 211, 211, 0.452);
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px 0;
                margin: 12px auto;
                img {
                    max-width: 200px;
                    height: 200px;
                    object-fit: cover;
                }
                .order-title {
                    text-transform: uppercase;
                    display: block;
                    font-weight: 500;
                    text-transform: uppercase;
                    font-size: 17px;
                    padding-top: 8px;
                }
                .order-desc {
                    color: rgba(0, 0, 0, 0.7);
                    padding: 0 12px;
                    text-align: center;
                }
                .price {
                    padding-top: 8px;
                    display: block;
                    font-weight: 500;
                    font-size: 18px;
                }
            }
        }
    }
}
</style>