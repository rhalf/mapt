import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

import drawer from "./drawer";
import user from "./user";
import notify from "./notify";
// const store = new Vuex.Store({ /* options */ });
// store.registerModule("app", app);
import app from "./app";
// import services from "./services";

export default new Vuex.Store({
  modules: {
    drawer,
    user,
    notify,

    app,
    // services,
  }
});