export default {
    state: () => ({
        info: {},
        state: false,
    }),
    mutations: {
        userInfo: (state, payload) => {
            state.info = payload
        }, 
      
        userState: (state, payload) => {
            state.state = payload
        }
    },
    actions: {
        userInfo: (contex, payload) => {
            contex.commit('userInfo', payload);
        },
       
        userState: (contex, payload) => {
            contex.commit('userState', payload);
        }
    },
    getters: {
        user: state => {
            return state
        }

    }
}