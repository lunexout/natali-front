import Axios from "axios";

export default {
    namespaced: true,
    state: {
        oneProduct: null,
        mergeWithProduct: null,
        allProducts: [],
        productWithMerges: null,
        ML: 0,
    },
    getters: {
        getOneProduct(state) {
            return state.oneProduct;
        },
        getMergeWithProduct(state) {
            return state.mergeWithProduct;
        },
        getAllProducts(state) {
            return state.allProducts;
        },
        getProductWithMerges(state) {
            return state.productWithMerges;
        },
        getML(state) {
            return state.ML;
        }
    },
    mutations: {
        setMergeWithProduct(state, data) {
            data.cart_quantity = 1;
            state.mergeWithProduct = data;
        },
        setOneProduct(state, data) {
            state.oneProduct = data;
        },
        setAllProducts(state, data) {
            state.allProducts = data;
        },
        //
        setProductWithMerges(state, data) {
            state.productWithMerges = data;
        },
        setMl(state, value) {
            state.ML = value
        }
    },
    actions: {
        receiveMergeWithProduct({ commit }, id, branchId) {
            return Axios.get("https://natali.onesoul.io/api/user/merge/" + id +  "/" + branchId )
                .then(response => {

                    commit("setMergeWithProduct", response.data.data);
                })
                .catch(err => {
                    console.error({ error: err });
                });
        },
        receiveOneProduct({ commit }, id) {
            
            return Axios.get("https://natali.onesoul.io/api/user/product/" + id)
                .then(response => {
                    commit("setOneProduct", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.error({ error: err });
                });
        },
        async receiveAllProducts ({ commit }, id) {
            return await Axios.get(
                `https://natali.onesoul.io/api/user/merges/${id}`
            ).then(response => {
                    // console.log(response.data);
                    
                    commit("setAllProducts", response.data.data.products.map(item => ({...item, cart_quantity: 1})))
                })
                .catch(err => {
                    console.error({ error: err });
                });
        },
        //
        getProductByIdWithMerges({ commit }, id) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/product/merge/" + id
            )
                .then(response => {
                    commit("setProductWithMerges", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.error({ error: err });
                });
        },
        changeML({commit}, val) {
            commit("setMl", val);
        }
    }
};
