<template>
  <div class="course">
    <profile-header>
      <div slot="title">我的课程</div>
      <div slot="right">累计学习：3200分钟</div>
    </profile-header>
    <div class="course-bottom">
      <course-item>
        <img slot="img" src="../assets/image/img_kc_01.png" alt />
        <div slot="progress" class="bg-progress">
          <el-progress
            type="circle"
            :percentage="43"
            :width="100"
            color="#fff"
            class="progress"
          ></el-progress>
          <div class="progress-text">已学习</div>
        </div>

        <div slot="last" class="btn" @click="toStudy">去学习</div>
      </course-item>
    </div>
  </div>
</template>
<script>
import ProfileHeader from "../components/ProfileHeader.vue";
import CourseItem from "../components/CourseItem.vue";
export default {
  data() {
    return {};
  },
  methods:{
    toStudy(){
      this.$router.push({path:'/courseLearning'})
    }
  },
  components: {
    ProfileHeader,
    CourseItem,
  },
};
</script>
<style lang="scss" scoped>
.course-bottom {
  width: 950px;

  padding: 0 30px;
  box-sizing: border-box;
  background-color: #fff;

  .bg-progress {
    width: 282px;
    height: 185px;
    position: absolute;
    top: 0;
    background-color: rgba(54, 54, 58, 0.3);
    .progress {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50px, -50px);
    }
    .progress-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-22px, 10px);
      font-size: 14px;
      color: #fff;
      line-height: 20px;
    }
  }
}

.btn {
  width: 88px;
  height: 32px;
  border-radius: 2px;
  line-height: 32px;
  text-align: center;
  color: #fff;
  background-color: #fb9715;
}

.el-progress /deep/ path:first-child {
  stroke: #d2d2d2;
}

.el-progress /deep/ .el-progress__text {
  color: #fff;
  font-size: 16px !important;
}
</style>