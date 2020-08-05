<template>
  <div class="vedio">
    <!-- <div style="float:left;width:550px;">
          直播
          <ali-player @play="play($event)"
          :useFlashPrism="true" 
          :autoplay="true" 
          :isLive="true" 
          :rePlay="false"
          :showBuffer="true"
          showBarTime="5000"
          width="500px" 
          height="400px" 
          controlBarVisibility="hover"
          source="https://banlvresources.oss-cn-chengdu.aliyuncs.com/video/1595904529175.mp4" ></ali-player>
    </div>-->

   
   
      <ali-player
        @play="play"
        @seek="seek"
        :useFlashPrism="true"
        :autoplay="true"
        :isLive="false"
        :rePlay="false"
        :showBuffer="true"
        :enableSystemMenu="true"
        :disableSeek="true"
        showBarTime="5000"
        width="1200px"
        height="675px"
        controlBarVisibility="hover"
        source="https://banlvresources.oss-cn-chengdu.aliyuncs.com/video/1595904529175.mp4"
      ></ali-player>
    
    
    <!-- <img src="../" alt=""> -->
  </div>
</template>
  
  <script>
import aliplayer from "../components/VueAliplayer";
export default {
  components: {
    "ali-player": aliplayer,
  },
  methods: {
    play(event) {
      console.log(event);
    },
    seek(e){
      this.$refs.aliplayer.seek()
    }
  },
};
</script>
<style scoped>
.vedio {
  width: 1200px;
  height: 675px;
  margin: 0 auto;
}
</style>
  
  