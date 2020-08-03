<template>
 <div class="banner">
  <el-carousel height="480px" trigger="click" loop >
    <el-carousel-item v-for="(item,index) in banners" :key="index">
      <img :src="item" class="banner-img"/>
    </el-carousel-item>
  </el-carousel>
 </div>
</template>
<script>
export default {
  data() {
    return {
      banners: [require("../../assets/image/banner.png"),require("../../assets/image/banner1.png"),require("../../assets/image/banner.png")],
    };
  },
};
</script>
<style scoped>
  .banner-img{
    height: 480px;
  }
.banner{
    margin-top: -30px;
}
</style>