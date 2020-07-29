<template>
  <div id="app">
    <top-header></top-header>
    <router-view/>
    <bottom-footer></bottom-footer>
  </div>
</template>
<script>
  import TopHeader from "../src/components/TopHeader.vue";
  import BottomFooter from "../src/components/BottomFooter.vue"
  export default{
    components:{
      TopHeader,
      BottomFooter
    }
  }
</script>
<style lang="scss">


*{
  padding: 0;
  margin: 0;
}
#app{
 
}
</style>
