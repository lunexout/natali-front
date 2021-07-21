<template>
    <div class="box">
        <div class="o"></div>
        <div class="info">
            <template v-if="variation == '1'">
                <p>Tbilisi, Georgia</p>
                <span>V. pshavela VI kv, V k</span>
                <span>0123</span>
            </template>
            <template v-if="variation == '2'">
                <p>0234 0394 3827</p>
                <p>02/22</p>
                <p>CVV 2343</p>
            </template>
        </div>
        <div class="ed">
            <img src="/assets/icons/edit-solid.svg" alt="edit" />
        </div>
    </div>
</template>

<script>
export default {
    name: "InfoBox",
    props: ["variation"],
    data() {
        return {
            //
        };
    },
};
</script>

<style lang="scss" scoped>
.box {
    background-color: #fff;
    box-shadow: 0 0px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 12px;
    max-width: 360px;
    min-height: 80px;
    margin: 22px 0;
    display: flex;
    .o {
        margin: auto 16px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: rgba(128, 128, 128, 0.5);
        position: relative;
        &::after {
            content: "";
            position: absolute;
            width: 20px;
            height: 20px;
            border: 2px solid rgba(128, 128, 128, 0.5);
            border-radius: 50%;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .info {
        padding: 12px 0;
        display: flex;
        flex-direction: column;
        p {
            font-weight: 500;
            font-size: 18px;
            &:not(:last-child) {
                margin-bottom: 6px;
            }
        }
        span {
            color: gray;
            margin-bottom: 6px;
        }
    }
    .ed {
        cursor: pointer;
        width: 20px;
        height: 20px;
        margin: 12px 12px auto auto;
        img {
            filter: opacity(0.5);
        }
    }
}
</style>