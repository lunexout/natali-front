import Axios from "axios";

export default {
    namespaced: true,
    state: {
        rewards: null,
        allMedia: null,
        faqs: null,
        whatWeDo: null,
        testimonials: null,
        allBeforeAfter: null,
        oneBeforeAfter: null
    },
    getters: {
        getOneBeforeAfter(state) {
            return state.oneBeforeAfter;
        },
        getAllBeforeAfter(state) {
            return state.allBeforeAfter;
        },
        getTestimonials(state) {
            return state.testimonials;
        },
        getWhatWeDo(state) {
            return state.whatWeDo;
        },
        getFaqs(state) {
            return state.faqs;
        },
        getRewards(state) {
            return state.rewards;
        },
        getAllMedia(state) {
            return state.allMedia;
        }
    },
    mutations: {
        setOneBeforeAfter(state, data) {
            state.oneBeforeAfter = data;
        },
        setAllBeforeAfter(state, data) {
            state.allBeforeAfter = data;
        },
        setAllTestimonials(state, data) {
            state.testimonials = data;
        },
        setWhatWeDo(state, data) {
            state.whatWeDo = data;
        },
        setFaqs(state, data) {
            state.faqs = data;
        },
        setRewards(state, data) {
            state.rewards = data;
        },
        setAllMedia(state, data) {
            state.allMedia = data;
        }
    },
    actions: {
        // Before After
        receiveOneBeforeAfter({ commit }, id) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/beforeAfter/show/" + id
            )
                .then(response => {
                    commit("setOneBeforeAfter", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.log({ error: err });
                });
        },
        receiveAllBeforeAfter({ commit }) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/beforeAfter/all"
            )
                .then(response => {
                    commit("setAllBeforeAfter", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.log({ error: err });
                });
        },
        //
        receiveAllTestimonials({ commit }, id) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/testimonials/branch/" + id
            )
                .then(response => {
                    commit("setAllTestimonials", response.data.data);
                    console.log(response.data.data);
                })
                .catch(err => {
                    console.log({ error: err });
                });
        },
        receiveWhatWeDo({ commit }) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/academy/weDo/all"
            )
                .then(response => {
                    commit("setWhatWeDo", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.log({ error: err });
                });
        },
        receiveFaqs({ commit }, id) {
            return Axios.get("https://natali.onesoul.io/api/user/faq/get/" + id)
                .then(response => {
                    commit("setFaqs", response.data.data);
                    console.log("faqs", response.data.data);
                })
                .catch(err => {
                    console.log({ error: err });
                });
        },
        receiveAllMedia({ commit }, id) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/media/get/" + id
            )
                .then(response => {
                    commit("setAllMedia", response.data.data.data);
                    // console.log(response.data.data.data);
                })
                .catch(err => {
                    console.log({ error: err });
                });
        },
        receiveRewards({ commit }, id) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/award/get/" + id
            )
                .then(response => {
                    commit("setRewards", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.log({ error: err });
                });
        }
    }
};
