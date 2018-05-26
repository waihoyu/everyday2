<template>
  <header v-on:click="changeTitle">
    <h1>{{title1}}{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: "app-header",
  props: {
    title: {
      type: String
    }
  },
  methods: {
    changeTitle: function() {
      this.$emit("titleChange", "test");
    }
  },
  data() {
    return {
      title1: "Vue.js"
    };
  }
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
