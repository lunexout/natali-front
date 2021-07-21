import Axios from "axios";

export default {
    namespaced: true,
    state: {
        onePress: null,
        allPress: []
    },
    getters: {
        getOnePress(state) {
            return state.onePress;
        },
        getAllPress(state) {
            return state.allPress;
        }
    },
    mutations: {
        setOnePress(state, data) {
            state.onePress = data;
        },
        setAllPress(state, data) {
            state.allPress = data;
        }
    },
    actions: {
        receiveOnePress({ commit }, id) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/post/one/" + id
            )
                .then(response => {
                    commit("setOnePress", response.data.data[0]);
                    // console.log(response.data.data[0]);
                })
                .catch(err => {
                    console.error({ error: err });
                });
        },
        receiveAllPress({ commit }, id) {
            return Axios.get("https://natali.onesoul.io/api/user/post/" + id)
                .then(response => {
                    commit("setAllPress", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.error({ error: err });
                });
        }
    }
};
