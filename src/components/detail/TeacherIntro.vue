<template>
  <div class="teacher-intro">
    <div class="intro-item" v-for="(item,index) in teacherList" :key="index">
      <div class="left">
        <img :src="item.headportrait" />
      </div>

      <div class="right">
        <h3>{{item.username}}</h3>
        <div>
          <span>授课内容：</span>
          <span>精品竖笛进阶课程</span>
        </div>
        <div class="intro-text">{{item.intro}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      teacherList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    created(){
      console.log(this.teacherList)
    }

  };
</script>
<style lang="scss" scoped>
  .teacher-intro {
    padding: 0 30px 30px;
  }

  .intro-item {
    padding: 30px;
    margin-top: 30px;
    display: flex;
    background-color: #f7f7f7;

    .left {
      width: 177px;
      height: 210px;

      img {
        width: 177px;
        height: 210px;
      }
    }

    .right {
      width: 883px;
      margin-left: 20px;

      h3 {
        color: #36363A;
      }

      div {
        color: #6A6A6F;
        font-size: 14px;
        line-height: 22px;
      }

      div.intro-text {
        margin-top: 15px;
      }
    }
  }
</style>