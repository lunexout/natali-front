import axios from "axios";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
export default {
    namespaced: true,
    state: {
        CartItems: [],
        OffersArray: [],
        CartQuantity: 0,
        TotalAmount: 0,
        token: localStorage.getItem("userToken"),
        user: JSON.parse(localStorage.getItem("loggedinUser")),
        DetailViewOfItem: {},
        AlertInfo: {
            item_name: "",
            msg: "",
            error: false,
            deleting: false
        }
    },
    mutations: {
        SET_CART_ITEMS(state) {
            axios
                .get(
                    `https://natali.onesoul.io/api/user/basket/open/` +
                        state.user.id
                )
                .then(res => {
                    state.CartItems = res.data.data.cartItems.map(item => ({
                        ...item,
                        cart_quantity: 1
                    }));
                });
        },
        SAVE_OFFER_TO_ARRAY(state, object) {
            if (state.OffersArray.length > 0) {
                state.OffersArray.map(item => {
                    if (item.id == object.id) {
                        state.AlertInfo = {
                            item_name: "Informative",
                            error: "info",
                            msg: "Selected offer is chosen"
                        };
                    } else {
                        state.OffersArray.push(object);
                    }
                });
            } else {
                state.OffersArray.push(object);
            }
        },
        DEL_OFFER_FROM_ARRAY(state, object) {
            const removeByIndex = state.OffersArray.map(item => {
                return item.id;
            }).indexOf(object.id);
            state.OffersArray.splice(removeByIndex, 1);
        },
        ADD_OFFERS_TO_BASKET(state) {
            if (state.token == null || state.user == null) {
                state.AlertInfo = {
                    item_name: "Informative",
                    error: "info",
                    msg: "Login is required to open basket"
                };
            }else {
                if (state.token.toString().length < 1 || !state.user.id) {
                    state.AlertInfo = {
                        item_name: "Informative",
                        error: "info",
                        msg: "Login is required to open basket"
                    };
                } else {
                    state.OffersArray.map(offer => {
                        const Request = {
                            item_id: offer.id,
                            quantity: 1,
                            user_id: state.user.id,
                            type: 4
                        };
    
                        axios
                            .post(
                                `https://natali.onesoul.io/api/user/basket/add`,
                                Request
                            )
                            .then(res => {
                                if (res.data.success) {
                                    state.AlertInfo = {
                                        item_name: "ProductOffer",
                                        error: false,
                                        msg: res.data.data.message
                                    };
                                } else {
                                    state.AlertInfo = {
                                        item_name: "ProductOffer",
                                        error: true,
                                        msg: res.data.data[0]
                                    };
                                }
                            });
                    });
                }
            }
            
        },
        ADD_TO_CART(state, object) {
            if (state.token == null || state.user == null) {
                state.AlertInfo = {
                    item_name: "Informative",
                    error: "info",
                    msg: "Login is required to open basket"
                };
            } else {
                if (state.token.toString().length < 1 || !state.user.id) {
                    state.AlertInfo = {
                        item_name: "Informative",
                        error: "info",
                        msg: "Login is required to open basket"
                    };
                } else {
                    if (state.CartItems.length > 0) {
                        state.CartItems.map(item => {
                            state.CartItems.push(object);
                            state.CartQuantity++;

                            const Request = {
                                item_id: object.id,
                                quantity: object.cart_quantity,
                                user_id: state.user.id,
                                type: 1
                            };

                            axios
                                .post(
                                    `https://natali.onesoul.io/api/user/basket/add`,
                                    Request
                                )
                                .then(res => {
                                    if (res.data.success) {
                                        state.AlertInfo = {
                                            item_name: object.name,
                                            error: false,
                                            msg: res.data.data.message
                                        };
                                    } else {
                                        state.AlertInfo = {
                                            item_name: object.name,
                                            error: true,
                                            msg: res.data.data.message
                                        };
                                    }
                                });
                        });
                    } else {
                        state.CartItems.push(object);
                        state.CartQuantity++;

                        const Request = {
                            item_id: object.id,
                            quantity: object.cart_quantity,
                            user_id: state.user.id,
                            type: 1
                        };
                        axios
                            .post(
                                "https://natali.onesoul.io/api/user/basket/add",
                                Request
                            )
                            .then(res => {
                                if (res.data.success) {
                                    state.AlertInfo = {
                                        item_name: object.name,
                                        error: false,
                                        msg: res.data.data.message
                                    };
                                } else {
                                    state.AlertInfo = {
                                        item_name: "Can't add to cart",
                                        error: true,
                                        msg: res.data.data.message
                                    };
                                }
                            });
                    }
                }
            }
        },
        REMOVE_FROM_CART(state, object) {
            axios
                .get(
                    "https://natali.onesoul.io/api/user/basket/item/del/" +
                        object.id
                )
                .then(result => {
                    if (result.data.success) {
                        const removeByIndex = state.CartItems.map(item => {
                            return item.id;
                        }).indexOf(object.id);
                        state.CartItems.splice(removeByIndex, 1);

                        if (state.CartItems.length == 0) {
                            state.TotalAmount = 0;
                        }
                        axios
                            .get(
                                "https://natali.onesoul.io/api/user/basket/total/" +
                                    state.user.id
                            )
                            .then(result => {
                                state.TotalAmount = result.data.data.total;
                            });
                        state.AlertInfo = {
                            item_name: object.name,
                            error: false,
                            msg: result.data.data,
                            deleting: true
                        };
                    } else {
                        state.AlertInfo = {
                            item_name: object.name,
                            error: true,
                            msg: "Problem to deleting item"
                        };
                    }
                });
            // if (state.CartQuantity === 0) {
            //     state.CartQuantity = 0;
            // } else {
            //     state.CartQuantity--;
            // }
            // object.cart_quantity = 1;
        },
        CLEAR_CART(state) {
            state.CartItems.map(item => {
                (item.isAdd = !item.isAdd), (item.cart_quantity = 1);
            });
            state.CartItems = [];
            state.CartQuantity = 0;
        },
        ADD_QUANTITY(state, object) {
            if (object.cart_quantity == object.quantity) {
                object.cart_quantity = object.quantity;
            } else {
                object.cart_quantity++;
            }
        },
        REMOVE_QUANTITY(state, object) {
            if (object.cart_quantity == 1) {
                object.cart_quantity = 1;
            } else {
                object.cart_quantity--;
            }
        },
        TOTAL_AMOUNT(state, color) {
            axios
                .get(
                    "https://natali.onesoul.io/api/user/basket/total/" +
                        state.user.id
                )
                .then(result => {
                    if (result.data.success) {
                        state.TotalAmount = result.data.data.total;
                    } else {
                        state.TotalAmount = 0;
                    }
                });
            // let total = 0;
            // state.CartItems.map(
            //     item => (total += item.cart_quantity * item.price)
            // );
            // state.TotalAmount = total;
        },
        ADD_DETAIL_VIEW(state, object) {
            localStorage.removeItem("DetailViewOfItem");
            localStorage.setItem("DetailViewOfItem", JSON.stringify(object));
            // state.DetailViewOfItem = []
            state.DetailViewOfItem = object;
        }
    },
    actions: {
        setCartItems(ctx) {
            ctx.commit("SET_CART_ITEMS");
            ctx.commit("TOTAL_AMOUNT");
        },
        addOffersToCart(ctx) {
            ctx.commit("ADD_OFFERS_TO_BASKET");
        },
        saveOfferToArray(ctx, object) {
            ctx.commit("SAVE_OFFER_TO_ARRAY", object);
        },
        delteOfferFromArray(ctx, object) {
            ctx.commit("DEL_OFFER_FROM_ARRAY", object);
        },
        addToCart(ctx, object) {
            ctx.commit("ADD_TO_CART", object);
        },
        removeFromCart(ctx, object) {
            ctx.commit("REMOVE_FROM_CART", object);
        },
        clearCart(ctx) {
            ctx.commit("CLEAR_CART");
            ctx.commit("TOTAL_AMOUNT");
        },
        addQuantity(ctx, object) {
            ctx.commit("ADD_QUANTITY", object);
            // ctx.commit("TOTAL_AMOUNT");
        },
        removeQuantity(ctx, object) {
            ctx.commit("REMOVE_QUANTITY", object);
            // ctx.commit("TOTAL_AMOUNT");
        },
        totalAmount(ctx) {
            ctx.commit("TOTAL_AMOUNT");
        },
        detailItemShow(ctx, object) {
            ctx.commit("ADD_DETAIL_VIEW", object);
        }
    },
    getters: {
        getCartQuantity: state => {
            return state.CartQuantity;
        },
        getCartItems: state => {
            return state.CartItems;
        },
        getTotalAmount: state => {
            return state.TotalAmount;
        },
        getDetailedViewItem: state => {
            return state.DetailViewOfItem;
        },
        getOffersArray: state => {
            return state.OffersArray;
        },
        getAlertState: state => {
            return state.AlertInfo;
        }
    }
};
