<template>
  <div class="course-catalog">
    <div v-for="(item,index) in catalogue" :key="index">
      <div class="title">第 1 章 ：基础夯实</div>
      <div class="lists">
        <a>
          <div>
            <span>第一讲</span>
            <img src="../../assets/image/icon_kcml_sp.png" alt />
            <span>胡定弦与基本乐理知识</span>
          </div>
          <div>欧阳老师</div>
          <!-- <img src="../../assets/image/bat_st_def.png" alt /> -->
          <div>2020.10.10 ~ 2020.12.12 14：00</div>
          <!-- <div>{{未开通}}</div> -->
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      catalogue:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
.course-catalog {
  padding: 30px;
}

.title {
  height: 52px;
  width: 1140px;
  line-height: 52px;
  background-color: #f7f7f7;
  text-align: left;
  color: #36363a;
  font-family: "PingFangSC-Regular", "PingFang SC";
  font-weight: 400;
}

.title::before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 12px;
  background-color: #98b702;
  margin-right: 20px;
}
.lists {
  a {
    height: 67px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
    border-bottom: 1px solid #eee;
    color: #9899a1;
    div {
      display: flex;
      span {
        color: #6a6a6f;
      }
      img {
        margin: 0 10px;
      }
    }
    // div.color {
    //   color: #9899a1;
    // }
    > img {
      width: 86px;
      height: 24px;
    }
  }
}
a:hover span,a:hover div{
  color: #98b702 !important;
}
</style>