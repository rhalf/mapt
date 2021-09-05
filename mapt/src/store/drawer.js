export default {
    state: () => ({
        top: false,
        bottom: false,
        left: false,
        rigth: false
    }),
    mutations: {
        setDrawerTop: (state, payload) => {
            state.top = payload
        },
        setDrawerBottom: (state, payload) => {
            state.bottom = payload
        },
        setDrawerLeft: (state, payload) => {
            state.left = payload
        },
        setDrawerRight: (state, payload) => {
            state.right = payload
        }

    },
    actions: {
        setDrawerTop: (contex, payload) => {
            contex.commit('setDrawerTop', payload);
        },
        setDrawerBottom: (contex, payload) => {
            contex.commit('setDrawerBottom', payload);
        },
        setDrawerLeft: (contex, payload) => {
            contex.commit('setDrawerLeft', payload);
        },
        setDrawerRight: (contex, payload) => {
            contex.commit('setDrawerRight', payload);
        }
    },
    getters: {
        drawer: state => {
            return state
        }
    }
}