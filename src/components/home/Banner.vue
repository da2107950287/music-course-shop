<template>
  <el-carousel indicator-position="outside" class="banner">
    <el-carousel-item v-for="item in banners" :key="item" class="banner-item">
      <img :src="item" alt />
    </el-carousel-item>
  </el-carousel>
  
</template>
<script>
export default {
  data() {
    return {
      banners: ["../../assets/image/banner.png"],
    };
  },
};
</script>
<style scoped>
.banner,
.banner-item,
.banner-item > img {
  height: 480px;
}
.banner{
    margin-top: -30px;
}
</style>