import Axios from "axios";

export default {
    namespaced: true,
    state: {
        contactinfo: null,
        quote: null,
        stats: null
    },
    getters: {
        getStats(state) {
            return state.stats;
        },
        getQuote(state) {
            return state.quote;
        },
        getContactInfo(state) {
            return state.contactinfo;
        }
    },
    mutations: {
        setStats(state, data) {
            state.stats = data;
        },
        setQuote(state, data) {
            state.quote = data;
        },
        setContactInfo(state, data) {
            state.contactinfo = data;
        }
    },
    actions: {
        receiveStats({ commit }) {
            return Axios.get("https://natali.onesoul.io/api/user/about/get")
                .then(response => {
                    commit("setStats", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.log({ error: err });
                });
        },
        receiveQuotes({ commit }, id) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/quote/get/" + id
            )
                .then(response => {
                    commit("setQuote", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.log({ error: err });
                });
        },
        receiveContactInfo({ commit }, id) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/contactinfo/get/" + id
            )
                .then(response => {
                    commit("setContactInfo", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.log({ error: err });
                });
        },
        sendFillForm({ commit, dispatch }, dt) {
            return Axios.post(
                "https://natali.onesoul.io/api/user/fillForm/create",
                dt
            )
                .then(response => {
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.error({ error: err });
                });
        },
        sendContactUs({ commit, dispatch }, dt) {
            return Axios.post(
                "https://natali.onesoul.io/api/user/contactus/create",
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
