<template>
    <div class="services-slider-switch">
        <div class="controls">
            <div class="row">
                <div class="col-xs-6 sect nopadding">
                    <span class="switch-button active">Natali Spa</span>
                    <!-- on click set active class and change slider data -->
                </div>
                <div class="col-xs-6 sect nopadding">
                    <span class="switch-button">Natali Day Spa</span>
                </div>
            </div>
        </div>
        <ServicesSlider />
    </div>
</template>

<script>
import ServicesSlider from "./servicesSlider";

export default {
    name: "ServicesSliderSwitch",
    components: {
        ServicesSlider,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.services-slider-switch {
    .controls {
        .sect {
            &:first-child .switch-button {
                text-align: right;
            }
            &:last-child .switch-button {
                text-align: left;
            }
            .switch-button {
                box-sizing: border-box;
                padding: 10px 100px;
                cursor: pointer;
                display: block;
                height: 70px;
                font-size: 30px;
                border-bottom: 2px solid gray;
                width: 100%;
                line-height: 50px;
                font-weight: 400;
                font-family: "Prompt";
                white-space: nowrap;
                transition: 0.2s;
                &:hover {
                    border-bottom: 2px solid #dfaf4c;
                }
                &.active {
                    border-bottom: 2px solid #dfaf4c;
                }
            }
        }
    }
}

@media screen and (max-width: 1920px) {
    .services-slider-switch {
        .controls {
            .sect {
                .switch-button {
                    padding: 10px 80px !important;
                }
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    .services-slider-switch {
        .controls {
            .sect {
                &:first-child .switch-button {
                    text-align: center !important;
                }
                &:last-child .switch-button {
                    text-align: center !important;
                }
                .switch-button {
                    padding: 10px 20px !important;
                    font-size: 26px !important;
                }
            }
        }
    }
}

@media screen and (max-width: 600px) {
    .services-slider-switch {
        .controls {
            .sect {
                .switch-button {
                    font-size: 22px !important;
                }
            }
        }
    }
}

@media screen and (max-width: 460px) {
    .services-slider-switch {
        .controls {
            .sect {
                .switch-button {
                    font-size: 18px !important;
                }
            }
        }
    }
}
</style>