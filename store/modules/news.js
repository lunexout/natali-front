import Axios from "axios";

export default {
    namespaced: true,
    state: {
        oneNews: null,
        allNews: []
    },
    getters: {
        getOneNews(state) {
            return state.oneNews;
        },
        getAllNews(state) {
            return state.allNews;
        }
    },
    mutations: {
        setOneNews(state, data) {
            state.oneNews = data;
        },
        setAllNews(state, data) {
            state.allNews = data;
        }
    },
    actions: {
        receiveOneNews({ commit }, id) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/news/one/" + id
            )
                .then(response => {
                    commit("setOneNews", response.data.data[0]);
                    // console.log(response.data.data[0]);
                })
                .catch(err => {
                    console.error({ error: err });
                });
        },
        receiveAllNews({ commit }, id) {
            return Axios.get(`https://natali.onesoul.io/api/user/news/${id}`)
                .then(response => {
                    commit("setAllNews", response.data.data);
                    console.log(response.data.data);
                })
                .catch(err => {
                    console.error({ error: err });
                });
        }
    }
};
