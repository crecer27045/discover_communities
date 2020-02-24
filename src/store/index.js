import Vue from "vue";
import Vuex from "vuex";

import Login from "./modules/login";
import Session from "./modules/session";
import Creators from "./modules/creators";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Login,
    Session,
    Creators
  }
});
