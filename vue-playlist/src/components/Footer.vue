<template>
  <P>
  <h1>{{copyright}</h1>
  </P>
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
footer{
    background: #222;
    padding:6px;
}
h1{
    color: lightgreen;
    text-align: center;
}
</style>
