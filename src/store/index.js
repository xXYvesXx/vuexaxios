import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    psots: [],
  },
  mutations: {},
  actions: {
    loadPosts() {
      console.log('loading posts')
    },
  },
  modules: {},
})
