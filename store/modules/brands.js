import Axios from "axios";

export default {
    namespaced: true,
    state: {
        allBrands: []
    },
    getters: {
        getAllBrands(state) {
            return state.allBrands;
        }
    },
    mutations: {
        setAllBrands(state, data) {
            state.allBrands = data;
        }
    },
    actions: {
        receiveAllBrands({ commit }, id) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/brand/branch/" + id
            )
                .then(response => {
                    commit("setAllBrands", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.error({ error: err });
                });
        }
    }
};
