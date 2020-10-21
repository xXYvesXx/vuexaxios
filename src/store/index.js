import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    },
  },
  actions: {
    loadPosts() {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((data) => {
          let posts = data
          this.commit('SET_POSTS', posts)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  modules: {},
})
