export default {
    state: () => ({
        message: "Welcome",
        status: 'success',
        visible: true
    }),
    mutations: {
        notifyOpen: (state, payload) => {
            state.message = payload.message
            state.status = payload.status
            state.visible = payload.visible
        },
        notifyClose: (state) => {
            state.visible = false
        },

    },
    actions: {
        notifyOpen: (contex, payload) => {
            contex.commit('notifyOpen', payload);
        },
        notifyClose: (contex) => {
            contex.commit('notifyClose');
        },
    },
    getters: {
        notify: state => {
            return state.notify
        },
    }
}