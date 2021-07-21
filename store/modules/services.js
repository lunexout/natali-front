import axios from "axios";
import Axios from "axios";

export default {
    namespaced: true,
    state: {
        services: [],
        copyServices: [],
        groups: [],
        selectedServices: [],
        totalSelected: 0,
        activeServiceStylists: [],
        stylistSelected: {}
    },
    getters: {
        getServices(state) {
            return state.services;
        },
        getGroups(state) {
            return state.groups;
        },
        getSelectedServices(state) {
            return state.selectedServices;
        },
        getTotalOfSelected(state) {
            return parseInt(state.totalSelected);
        },
        getActiveStylists(state) {
            return state.activeServiceStylists
        },
        getSelectedStylist(state) {
            return state.stylistSelected
        }
    },
    mutations: {
        setParameters(state, data) {
            state.services = [...data.services.filter(el => el.group_id == data.groups[0].id)];
            state.copyServices = [...data.services];
            state.groups = data.groups;
        },
        filterServices(state, id) {
            const filtred = state.copyServices.filter(el => el.group_id == id);
            state.services = filtred;
        },
        addServiceToSelected(state, obj) {
            let isSelected = false;
            if(state.selectedServices.length > 0) {
                state.selectedServices.map(item => {
                    if(item.id == obj.id) {
                        isSelected = true;
                    }
                })
                if(!isSelected) {
                    state.selectedServices.push(obj);
                    alert('Added Successfully');
                    state.totalSelected += parseInt(obj.discount_price ? obj.discount_price : obj.price)
                }else {
                    alert('This service already in list')
                }
            }else {
                state.selectedServices.push(obj);
                alert('Added Successfully');
                state.totalSelected += parseInt(obj.discount_price ? obj.discount_price : obj.price)
            }
        },
        getOneServiceStylists(state, service) {
            state.activeServiceStylists = [...service[0].stylists];
        },
        deleteServiceSelected(state, service) {
            const removeByIndex = state.selectedServices.map(item => {
                return item.id;
            }).indexOf(service.id);
            state.totalSelected -= parseInt(service.discount_price ? service.discount_price : service.price)
            state.selectedServices.splice(removeByIndex, 1);
        },
        setSelectedStylist(state, stylist) {
            state.stylistSelected = stylist;
        }

    },
    actions: {
        getAllServicesByBranchId({ commit }, id) {
            return Axios.get("https://natali.onesoul.io/api/user/service/all/" + id)
                .then(response => {
                    commit("setParameters", response.data.data);
                })
                .catch(err => {
                    console.error({ error: err });
                });
        },
        filterServices({commit}, id) {
            commit("filterServices", id);
        },
        addServiceToSelected({commit}, obj) {
            commit("addServiceToSelected", obj);
        },
        getOneServiceInfo({commit}, service){
            return Axios.get(`https://natali.onesoul.io/api/user/stylist/groups/` + service.id).then(resp => {
                commit("getOneServiceStylists", resp.data.data.stylists);
            })
        },
        deleteService({commit}, service) {
            commit("deleteServiceSelected", service);
        },
        selectStylist({commit}, stylist) {
            commit("setSelectedStylist", stylist)
        }

    }
};
