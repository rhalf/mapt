export default {
    state: () => ({
        data: {},
        profile: {},
        vmgo: {},

        services: [],
        clients: [],
        projects: [],
        mining: [],
        personnels: [],
        vehicles: [],
        equipments: [],
        documents: [],
        vers: "0.0.1",
        auth: "rhalfcaacbay@gmail.com"
    }),
    mutations: {
        setProfile: (state, payload) => {
            state.profile = payload
        },
        setData: (state, payload) => {
            state.data = payload
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
        setMining: (state, payload) => {
            state.mining = payload
        },
        setDocuments: (state, payload) => {
            state.documents = payload
        },


    },
    actions: {
        setProfile: (contex, payload) => {
            contex.commit('setProfile', payload);
        }, 
        setData: (contex, payload) => {
            contex.commit('setData', payload);
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
        setMining: (contex, payload) => {
            contex.commit('setMining', payload);
        },
        setDocuments: (contex, payload) => {
            contex.commit('setDocuments', payload);
        },
    },
    getters: {
        app: state => {
            return state.app
        }
    }
}