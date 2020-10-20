import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    psots: [],
  },
  mutations: {},
  actions: {
    loadPosts() {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((data) => {
          console.log(data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  modules: {},
})
