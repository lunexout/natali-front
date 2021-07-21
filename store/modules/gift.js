import Axios from "axios";

export default {
    namespaced: true,
    state: {
        giftImages: null
    },
    getters: {
        getGiftImages(state) {
            return state.giftImages;
        }
    },
    mutations: {
        setGiftImages(state, data) {
            state.giftImages = data;
        }
    },
    actions: {
        receiveGiftImages({ commit }, id) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/gift/image/all"
            )
                .then(response => {
                    commit("setGiftImages", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.log({ error: err });
                });
        },
        giftCardPay({ commit }, id) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/gift/pay/" + id
            )
                .then(response => {
                    // commit("setContactInfo", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.log({ error: err });
                });
        },
        sendGift({ commit, dispatch }, dt) {
            return Axios.post(
                "https://natali.onesoul.io/api/user/gift/create",
                dt
            )
                .then(response => {
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.error({ error: err });
                });
        }
    }
};
