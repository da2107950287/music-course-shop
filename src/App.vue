<template>
  <div id="app">
<!-- <keep-alive> -->
  <!-- " -->
  <!-- <keep-alive> -->
    <router-view v-if="isRouterAlive" v-loading="loading" element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)" ></router-view>
  <!-- </keep-alive> -->
<!-- </keep-alive> -->
 
  </div>
</template>
<script>

  import {mapGetter} from 'vuex';
  export default {
    provide() {
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        isRouterAlive: true,

      }
    },
    computed:{
        loading(){
          return this.$store.getters.loading;
        }
    },
    methods: {
      reload() {
        this.isRouterAlive = false;
        this.$nextTick(() => {
          this.isRouterAlive = true
        })
      }
    },

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