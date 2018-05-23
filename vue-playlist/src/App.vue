<template>
  <div id="app">
    <app-header></app-header>
    <users></users>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Users from './components/Users'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Users,
    "app-header":Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
