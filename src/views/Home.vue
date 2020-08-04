<template>
  <div class="home">
    <banner :banners="banners"/>
    <home-main :courses="boutiqueCourses">
      <span slot="title">精品课程</span>
    </home-main>
    <div class="recommend">
      <home-main :courses="recommendedCourse" class="recommend">
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
  data(){
    return{
      banners:[],
      boutiqueCourses:[],
      recommendedCourse:[],
      pageNumber:1,
      pageSize:6

    }
  },
  created(){
    // 获取精品课
    this.$post('/course/getCourseBoutique',{}).then(res=>{
      if(res.code==200){
        this.boutiqueCourses=res.data;
      }
    })
    // 获取推荐课程
    this.$post('/course/getCourseRec',{PageNumber:this.pageNumber,PageSize:this.pageSize}).then(res=>{
      if(res.code==200){
        this.recommendedCourse=res.data.list;
      }
    })
    //获取banner列表
      this.$post('/other/getBanner',{positions:"1"}).then((res)=>{
       if(res.code==200){
         this.banners=res.data
       }
      })
  },
  components:{
    Banner,
    HomeMain,
    DownloadApp
  }
};
</script>
<style lang="scss" scoped>
.home>.recommend{
  /* width: 100%; */
  background-color: #fff;
  margin-top: 40px;
  padding-bottom:40px ;
}


</style>

