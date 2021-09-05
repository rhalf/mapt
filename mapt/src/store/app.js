export default {
    state: () => ({
        profile: {},
        vmgo: {},

        services: [],
        
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
    },
    getters: {
        app: state => {
            return state.app
        }
    }
}