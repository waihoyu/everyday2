<template>
<footer><h1>{{copyright}}</h1></footer>
</template>

<script>
export default {
  name: "app-footer",
  data() {
    return {
      copyright: "copyright 2017"
    };
  }
};
</script>

<style scoped>
header{
    background: lightgreen;
    padding:10px;
}
h1{
    color: #222;
    text-align: center;
}
</style>
