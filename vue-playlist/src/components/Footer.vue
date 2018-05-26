<template>
  <P v-on:click="change">{{copyright}}</P>
</template>

<script>
export default {
  name: "app-footer",
  data() {
    return {
      copyright: "copyright 2017"
    };
  },methods:{
    change:function(){
      // this.
    }
  }
};
</script>

<style scoped>
footer{
    background: #222;
    padding:6px;
}
p{
    color: lightgreen;
    text-align: center;
}
</style>
