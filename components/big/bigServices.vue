<template>
    <div class="b-services">
        <div class="service-filter">
            <!-- <p class="s-title">Services</p> -->
            <div class="filter-bar">
                <span class="fil" @click="filter($event)">Filter</span>
                <div class="inner-box">
                    <div
                        class="cat-box"
                        v-for="(cat, index) of getGroups"
                        :key="index"
                    >
                        <span
                            @click="spanActive($event, cat)"
                            :class="[
                                {
                                    active: index == 0,
                                },
                            ]"
                            >{{ cat.name }}</span
                        >
                    </div>
                </div>
            </div>
        </div>
        <div class="list-cont">
            <div class="section">
                <p class="section-title">{{ activeSectionName ? activeSectionName : getGroups[0].name }}</p>
                <div class="list">
                    <div class="row">
                        <div
                            class="col-lg-4 col-md-6 col-sm-6 col-xs-12 b-w"
                            v-for="(service, index) in getServices"
                            :key="index"
                        >
                            <ServiceBox :oneService="service" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ServiceBox from "../small/serviceBox";
import { mapActions, mapGetters } from 'vuex';
export default {
    name: "BigServices",
    components: {
        ServiceBox,
    },
    props: ['branch_id'],
    data() {
        return {
            activeSectionName: "",
        };
    },
    methods: {
        filter(event) {
            event.target.parentNode.classList.toggle("active");
        },
        spanActive(event, cat) {
            event.target.parentNode.parentNode
                .querySelectorAll(".cat-box span")
                .forEach((elem) => {
                    elem.classList.remove("active");
                });
            event.target.classList.toggle("active");
            this.activeSectionName = cat.name;
            this.filterServices(cat.id)
        },
        ...mapActions("Services", ["getAllServicesByBranchId", "filterServices"])
    },
    computed: {
        ...mapGetters("Services",["getServices", "getGroups"])
    },
    mounted() {
        this.getAllServicesByBranchId(this.branch_id);
    }
};
</script>

<style lang="scss" scoped>
.b-services {
    .list-cont {
        .section {
            &-title {
                text-align: center;
                font-weight: 500;
                font-family: "Prompt";
                font-size: 24px;
            }
            .list {
                padding-top: 30px;
                padding-bottom: 30px;
                .b-w {
                    .service-box {
                        margin: 15px auto 15px !important;
                    }
                }
            }
        }
    }
    .service-filter {
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
        text-align: center;
        margin-bottom: 70px;
    }
    .s-title {
        display: inline-block;
        padding-top: 14px;
        text-transform: uppercase;
        font-weight: 500;
        font-family: "Prompt";
        font-size: 32px;
        position: relative;
        &::before {
            content: "";
            position: absolute;
            top: 0;
            width: 100%;
            height: 3px;
            background-color: gray;
        }
    }
    .filter-bar {
        transition: 0.4s;
        padding: 0 16px;
        height: 100px;
        border-bottom: 2px solid rgba($color: #707070, $alpha: 0.3);
        box-sizing: border-box;
        &.active {
            height: unset !important;
        }
        .fil {
            color: #e0b763;
            font-weight: 500;
            font-family: "Prompt";
            text-align: center;
            display: none;
            font-size: 20px;
            height: 50px;
            line-height: 50px;
            cursor: pointer;
            border-bottom: 1px solid #e0b763;
        }
        .inner-box {
            height: 100%;
            max-width: 1100px;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            .cat-box {
                height: 100%;
                cursor: pointer;
                margin: 0 auto;
                span {
                    position: relative;
                    bottom: -2px;
                    box-sizing: border-box;
                    white-space: nowrap;
                    font-family: "Prompt";
                    color: #424242;
                    height: 100%;
                    width: 100%;
                    line-height: 100px;
                    display: block;
                    border-bottom: 2px solid transparent;
                    &.active {
                        color: #e0b763;
                        border-bottom-color: #e0b763;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1100px) {
    .b-services {
        .filter-bar {
            overflow: hidden !important;
            height: 50px !important;
            .fil {
                display: block;
            }
            .inner-box {
                flex-direction: column !important;
                justify-content: flex-start !important;
                .cat-box {
                    height: 50px !important;
                    margin: unset !important;
                    span {
                        border-bottom: unset !important;
                        line-height: 50px !important;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 650px) {
    .b-services {
        .s-title {
            font-size: 25px;
        }
        .list {
            padding-top: 8px;
            padding-bottom: 8px;
        }
        .service-filter {
            margin-bottom: 32px;
        }
    }
}
</style>