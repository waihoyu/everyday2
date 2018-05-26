<template>
  <div id="app">
    <app-header v-bind:title="title" v-on:titleChange="update($event)"></app-header>
    <users v-bind:users="users"></users>
    <app-footer></app-footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Users from "./components/Users";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  data() {
    return {
      title: "标题",
      users: [
        {
          name: "Henry",
          position: "web开发",
          show: false
        },
        { name: "Bucky", position: "web开发", show: false },
        { name: "Emily", position: "web开发", show: false },
        { name: "Emily", position: "web开发", show: false },
        { name: "Emily", position: "web开发", show: false },
        { name: "Emily", position: "web开发", show: false },
        { name: "Emily", position: "web开发", show: false },
        { name: "Emily", position: "web开发", show: false },
        { name: "Emily", position: "web开发", show: false }
      ]
    };
  },
  methods: {
    update: function(title) {
      this.title = title;
    }
  },
  components: {
    HelloWorld,
    Users,
    "app-header": Header,
    "app-footer": Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
