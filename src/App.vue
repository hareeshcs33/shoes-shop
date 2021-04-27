<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <br>
    <router-view/>
  </div>
</template>

<script>
import navigationBar from './components/navigation-bar.vue'
export default {
  components: { navigationBar },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
