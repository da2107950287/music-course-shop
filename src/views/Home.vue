<template>
  <div class="home">
    <!-- <top-header></top-header> -->
    <home-main>
      <span slot="title">精品课程</span>
    </home-main>
    <download-app></download-app>
  </div>
</template>
<script>
import BottomFooter from '../components/BottomFooter'
import HomeMain from '../components/home/HomeMain'
import TopHeader from '../components/TopHeader'
import DownloadApp from '../components/home/DownloadApp'
export default {

  components:{
    BottomFooter,
    HomeMain,
    TopHeader,
    DownloadApp
  }
};
</script>

