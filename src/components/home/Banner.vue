<template>
    <el-carousel indicator-position="outside" class="banner">
        <el-carousel-item v-for="item in banners" :key="item" class="banner-item">
            <img :src="item" alt />
        </el-carousel-item>
    </el-carousel>
</template>
<style scoped>
      .banner,
    .banner-item,
    .banner-item>img {
        height: 480px;
    }
</style>