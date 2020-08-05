<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  import TopHeader from "../src/components/TopHeader.vue";
  import BottomFooter from "../src/components/BottomFooter.vue"
  export default {
    components: {
      TopHeader,
      BottomFooter
    }
  }
</script>
<style>
  /* @font-face{
    font-family: 'PingFang SC';
    src: url('./assets/font/苹方\ 常规.ttf');
    font-weight: normal;
    font-style: normal;
}
@font-face {
  font-family: "PingFangSC-Medium";
  src: url('./assets/font/PingFangSC-Medium.otf');
} */
  html,
  body,
  #app {
    width: 100%;
    /* height: 100% !important; */
    background-color: #F5F5F5;


  }

  #app {
    /* background-color: #F5F5F5; */
    /* font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif; */
  }
</style>