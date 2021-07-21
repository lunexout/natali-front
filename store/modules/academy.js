import Axios from "axios";

export default {
    namespaced: true,
    state: {
        oneTeacher: null,
        allAlumni: null,
        allTeachers: null,
        allLibraryById: null,
        libraryGrouped: null,
        allLibrary: null,
        allSeminars: null,
        oneSeminar: null,
        notStartedSeminars: null,
        programCourse: null
    },
    getters: {
        getProgramCourse(state) {
            return state.programCourse;
        },
        // Seminars
        getNotStartedSeminars(state) {
            return state.notStartedSeminars;
        },
        getOneSeminars(state) {
            return state.oneSeminar;
        },
        getAllSeminars(state) {
            return state.allSeminars;
        },
        // Library
        getLibraryGrouped(state) {
            return state.libraryGrouped;
        },
        getAllLibraryById(state) {
            return state.allLibraryById;
        },
        getAllLibrary(state) {
            return state.allLibrary;
        },
        // Alumni
        getAllAlumni(state) {
            return state.allAlumni;
        },
        // Teachers
        getAllTeachers(state) {
            return state.allTeachers;
        },
        getOneTeacher(state) {
            return state.oneTeacher;
        }
    },
    mutations: {
        setProgramCourse(state, data) {
            state.programCourse = data;
        },
        // Seminars
        setNotStartedSeminars(state, data) {
            state.notStartedSeminars = data;
        },
        setOneSeminar(state, data) {
            state.oneSeminar = data;
        },
        setAllSeminars(state, data) {
            state.allSeminars = data;
        },
        // Library
        setLibraryGrouped(state, data) {
            state.libraryGrouped = data;
        },
        setAllLibraryById(state, data) {
            state.allLibraryById = data;
        },
        setAllLibrary(state, data) {
            state.allLibrary = data;
        },
        // Alumni
        setAllAlumni(state, data) {
            state.allAlimni = data;
        },
        // Teachers
        setAllTeachers(state, data) {
            state.allTeachers = data;
        },
        setOneTeacher(state, data) {
            state.oneTeacher = data;
        }
    },
    actions: {
        //
        receiveProgramCourse({ commit }) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/academy/group/all"
            )
                .then(response => {
                    commit("setProgramCourse", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.log({ error: err });
                });
        },
        // Seminars
        receiveNotStartedSeminars({ commit }) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/academy/seminar/notStarted"
            )
                .then(response => {
                    commit("setNotStartedSeminars", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.log({ error: err });
                });
        },
        receiveOneSeminar({ commit }, id) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/academy/seminar/get/" + id
            )
                .then(response => {
                    commit("setOneSeminar", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.log({ error: err });
                });
        },
        receiveAllSeminars({ commit }) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/academy/seminar/all"
            )
                .then(response => {
                    commit("setAllSeminars", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.log({ error: err });
                });
        },
        // Library
        receiveLibraryGroupByShape({ commit }) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/academy/library/groupByCategory"
            )
                .then(response => {
                    commit("setLibraryGrouped", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.log({ error: err });
                });
        },
        receiveAllLibraryById({ commit }, id) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/academy/library/byCategory/" +
                    id
            )
                .then(response => {
                    commit("setAllLibraryById", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.log({ error: err });
                });
        },
        receiveAllLibrary({ commit }) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/academy/library/category/all"
            )
                .then(response => {
                    commit("setAllLibrary", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.log({ error: err });
                });
        },
        // Allumni
        receiveAllAlumni({ commit }) {
            return Axios.get("https://natali.onesoul.io/api/user/alumni/all")
                .then(response => {
                    commit("setAllAlumni", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.log({ error: err });
                });
        },
        // Teachers
        receiveAllTeachers({ commit }, id) {
            return Axios.get("https://natali.onesoul.io/api/user/teacher/all")
                .then(response => {
                    commit("setAllTeachers", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.log({ error: err });
                });
        },
        receiveOneTeacher({ commit }, id) {
            return Axios.get(
                "https://natali.onesoul.io/api/user/teacher/get/" + id
            )
                .then(response => {
                    commit("setOneTeacher", response.data.data);
                    // console.log(response.data.data);
                })
                .catch(err => {
                    console.log({ error: err });
                });
        }
    }
};
