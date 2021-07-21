import Axios from "axios";

export default {
    namespaced: true,
    state: {
        cart: null,
        wishlist: null,
        cartTotal: null,
        loggedinUser: {},
        userToken: "",
        errorObj: {},
        AlertInfo: {
            item_name: "",
            msg: "",
            error: false,
            deleting: false
        }
    },
    getters: {
        getLoggedinUser(state) {
            state.loggedinUser = JSON.parse(
                localStorage.getItem("loggedinUser")
            );
            return state.loggedinUser;
        },
        getUserToken(state) {
            state.userToken = localStorage.getItem("userToken");
            return state.userToken;
        },
        getCart(state) {
            return state.cart;
        },
        getWish(state) {
            return state.wishlist;
        },
        getCartTotal(state) {
            return state.cartTotal;
        },
        getError(state) {
            return state.errorObj;
        },
        getAlertState(state) {
            return state.AlertInfo;
        }
    },
    mutations: {
        setLoggedinUser(state, data) {
            localStorage.setItem("loggedinUser", JSON.stringify(data));
            state.loggedinUser = data;
        },
        setUserToken(state, token) {
            localStorage.setItem("userToken", token);
            state.userToken = token;
        },
        setCart(state, data) {
            state.cart = data;
        },
        setWish(state, data) {
            state.wishlist = data;
        },
        setCartTotal(state, data) {
            state.cartTotal = data;
        },
        setError(state, data) {
            state.errorObj = data;
        },
        setAlertAction(state, data) {
            state.AlertInfo = {
                item_name: "Login",
                error: data.isError,
                msg: data.msg,
            };
        }
    },
    actions: {
        // Sign in / Sign up
        register({ dispatch, commit }, data) {
            return Axios.post(
                "https://natali.onesoul.io/api/user/user/register",
                data
            )
                .then(response => {
                    console.log(response.data);
                    if (response.data.success == true) {
                        commit("setError", {});
                        dispatch("login", {
                            email: data.email,
                            password: data.password
                        });
                    } else {
                        const data = {
                            isError: true,
                            msg: 'This email is already used'
                        }
                        commit("setAlertAction", data)
                    }
                })
                .catch(err => {
                    console.error({ error: err });
                });
        },
        login({ commit }, data) {
            Axios.post(
                "https://natali.onesoul.io/api/user/user/login",
                data
            )
                .then(response => {
                    let d = response.data.data;
                    console.log(d);
                    if (d.success == true) {
                        const data = {
                            isError: false,
                            msg: 'Login successfully'
                        }
                        console.log(2);
                        commit("setLoggedinUser", d.user);
                        commit("setUserToken", d.token);
                        commit("setAlertAction", data)
                    } else {
                        const data = {
                            isError: true,
                            msg: d.message
                        }
                        commit("setLoggedinUser", {});
                        commit("setUserToken", "");
                        commit("setAlertAction", data)
                    }
                })
                .catch(err => {
                    console.error({ error: err });
                });
        },
        logout({ commit }) {
            commit("setUserToken", "");
            commit("setLoggedinUser", {});
        },
        // Cart
        receiveCart({ commit }, id) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/basket/open/" + id
            )
                .then(response => {
                    commit("setCart", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.error({ error: err });
                });
        },
        addToCart({ commit, dispatch }, dt) {
            return Axios.post(
                "https://natali.onesoul.io/api/user/basket/add",
                dt
            )
                .then(response => {
                    dispatch("receiveCart", dt.user_id);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.error({ error: err });
                });
        },
        cartTotal({ commit }, id) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/basket/total/" + id
            )
                .then(response => {
                    commit("setCartTotal", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.error({ error: err });
                });
        },
        deleteCart({ commit }, id) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/basket/del/" + id
            )
                .then(response => {
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.error({ error: err });
                });
        },
        deleteItemFromCart({ commit }, id) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/basket/item/del/" + id
            )
                .then(response => {
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.error({ error: err });
                });
        },
        // Wishlist
        addWish({ commit }, dt) {
            return Axios.post("https://natali.onesoul.io/api/user/wish/add", dt)
                .then(response => {
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.error({ error: err });
                });
        },
        delWish({ commit }, id) {
            return Axios.post(
                "https://natali.onesoul.io/api/user/wish/del/" + id
            )
                .then(response => {
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.error({ error: err });
                });
        },
        receiveWish({ commit }, id) {
            return Axios.get("https://natali.onesoul.io/api/user/wish/my/" + id)
                .then(response => {
                    commit("setWish", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.error({ error: err });
                });
        }
    }
};
