<template>
  <div class="home">
    <banner/>
    <home-main>
      <span slot="title">精品课程</span>
    </home-main>
    <div class="recommend">
      <home-main class="recommend">
        <span slot="title">推荐</span>
      </home-main>
    </div>
    <download-app/>
  </div>
</template>
<script>
import Banner from '../components/home/Banner'
import HomeMain from '../components/home/HomeMain'

import DownloadApp from '../components/home/DownloadApp'
export default {

  components:{
    Banner,
    HomeMain,
    DownloadApp
  }
};
</script>
<style lang="scss" scoped>
.recommend{
  /* width: 100%; */
  background-color: #fff;
  margin-top: 40px;
  padding-bottom:20px ;
}


</style>

