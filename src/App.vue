<template>
  <div id="app">
    <h1 v-for="posts in posts" :key="posts.id">{{ posts.title }}</h1>
    {{ posts }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  mounted() {
    this.$store.dispatch("loadPosts");
  },
  computed: {
    ...mapState(["posts"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
