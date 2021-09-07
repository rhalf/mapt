export default {
    state: () => ({
        profile: {},
        vmgo: {},

        services: [],
        clients: [],
        projects: [],
        personnels: [],
        vehicles: [],
        equipments: [],
        
        vers: "0.0.1",
        auth: "rhalfcaacbay@gmail.com"
    }),
    mutations: {
        setProfile: (state, payload) => {
            state.profile = payload
        },
        setVmgo: (state, payload) => {
            state.vmgo = payload
        },
        setServices: (state, payload) => {
            state.services = payload
        },
        setPersonnels: (state, payload) => {
            state.personnels = payload
        },

    },
    actions: {
        setProfile: (contex, payload) => {
            contex.commit('setProfile', payload);
        },
        setVmgo: (contex, payload) => {
            contex.commit('setVmgo', payload);
        },
        setServices: (contex, payload) => {
            contex.commit('setServices', payload);
        },
        setPersonnels: (contex, payload) => {
            contex.commit('setPersonnels', payload);
        },
    },
    getters: {
        app: state => {
            return state.app
        }
    }
}