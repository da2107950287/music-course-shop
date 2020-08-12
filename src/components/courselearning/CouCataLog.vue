<template>
  <div class="course-catalog">
    <div v-for="(item,index) in catalogue" :key="index">
      <!-- <div class="title">第 1 章 ：基础夯实</div> -->
      <div class="lists">
        <div class="list" @click="go(item)">
          <div>
            <span>第 {{index+1}} 讲</span>
            <img src="~assets/image/icon_kcml_sp.png" alt />
            <span>{{item.catName}}</span>
          </div>
          <div>主讲：{{item.lecturer}}</div>
          <!-- 直播 -->
          <div v-if="item.catType==1">
            <div>{{item.playstate}}</div>
          </div>
          <!-- 录播 -->
          <div v-if="item.catType==2">
            <div>已观看{{item.rateOfLearning}}%</div>
            <!-- <div v-if="item.rateOfLearning>0">已观看{{item.rateOfLearning}}%</div>
            <div v-else>{{item.catTime}}</div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      catalogue: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      go(item) {
        if (item.catType == 1) {//直播
          if (item.playstate == 1) {//正在直播
            this.$router.push({ path: '/index/vedio', query: { url: item.playurl, catName: item.catName } })
          } else {//已结束
            this.$router.push({ path: '/index/vedio', query: { url: item.playback, catName: item.catName } })

          }
        } else {//录播
          this.$router.push({ path: '/index/vedio', query: { url: item.catUrl, catName: item.catName } })

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
    .list {
      height: 67px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      line-height: 20px;
      border-bottom: 1px solid #eee;
      color: #9899a1;
      cursor: pointer;

      div {
        display: flex;
        flex: 1;
        justify-content: flex-end;

        span {
          color: #6a6a6f;
        }

        >img {
          width: 20px;
          height: 20px;
          margin: 0 10px;
        }
      }

      >div:first-child {
        justify-content: flex-start;
        flex: 2;
      }

      >div:nth-child(2) {
        justify-content: flex-start;

      }

      >div:nth-child(3) {
        justify-content: flex-end;

        .img-audition {
          width: 86px;
          height: 24px;
        }
      }

    }
  }

  .list:hover span,
  .list:hover div {
    color: #98b702 !important;
  }
</style>