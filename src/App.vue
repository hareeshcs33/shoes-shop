<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <router-view/>
    <footer-app></footer-app>
  </div>
</template>

<script>
import navigationBar from './components/navigation-bar.vue';
import FooterApp from './components/footer-app.vue';

export default {
  components: {
    navigationBar,
    FooterApp
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}
body {
  margin: 0;
  margin-top: 60px;
}
</style>
