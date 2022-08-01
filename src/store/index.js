import Vue from "vue";
import Vuex from "vuex";
import templates from "./modules/templates.js"
import datasets from "./modules/datasets.js";
import jobs from "./modules/jobs.js"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    templates,
    datasets,
    jobs
  },
});
