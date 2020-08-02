<template>
  <div class="home">
    <banner/>
    <home-main>
      <span slot="title">精品课程</span>
    </home-main>
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

