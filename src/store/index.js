import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    events: [],
  },
  mutations: {
    signIn(state, payload) {
      state.user = payload;
    },
    signOut(state) {
      state.user = {};
    },
    setEvents(state, payload) {
      state.events = payload;
    },
  },
  actions: {
    signIn({ commit }, user) {
      commit("signIn", user);
    },
    signOut({ commit }) {
      commit("signOut");
    },
    setEvents({ commit }, payload) {
      commit("setEvents", payload);
    },
  },
  modules: {},
});
