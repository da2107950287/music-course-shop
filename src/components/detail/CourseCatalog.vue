<template>
  <div class="course-catalog">
    <div v-for="(item,index) in catalogue" :key="index">
      <!-- <div class="title">第 1 章 ：基础夯实</div> -->
      <div class="lists">
        <div class="list" @click="go(item)">
          <div>
            <span>第 {{index+1}} 讲</span>
            <div v-if="item.catType==1" class="play live"></div>
            <div v-if="item.catType==2" class="play record"></div>
            <span>{{item.catName}}</span>
          </div>
          <div>{{item.lecturer}}</div>
          <div v-if="item.audition==1">
            <img src="~assets/image/bat_st_def.png" class="img-audition" />
          </div>
          <!-- 直播 -->
          <div v-else-if="item.catType==1">
            <div>{{item.playstate}}</div>
          </div>
          <!-- 录播 -->
          <div v-else-if="item.catType==2">
            <div>{{item.catTime}}</div>
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
      },
      buyState: {
        type: Number
      }
    },
    methods: {
      go(item) {
        if (item.audition == 1) {
          this.$router.push({ path: '/index/vedio', query: { url: item.catUrl, catName: item.catName } })
        } else if (this.buyState == 1) {
          if (item.catType == 1) {
            if (item.playstate == 2) {//正在直播
              this.$router.push({ path: '/index/vedio', query: { url: item.playurl, catName: item.catName } })
            } else if (item.playstate == 2) {//直播已结束
              this.$router.push({ path: '/index/vedio', query: { url: item.playback, catName: item.catName } })
            }
          } else if (item.catType == 2) {//录播
            this.$router.push({ path: '/index/vedio', query: { url: item.catUrl, catName: item.catName } })

          }
        } else {
          this.$message("请购买后，在进行观看")
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

      >div {
        display: flex;
        flex: 1;
        justify-content: flex-end;

        span {
          color: #6a6a6f;
        }

        .play {
          width: 20px;
          height: 20px;
          margin: 0 10px;
          background-image: url(~assets/image/icon.png);
        }
        .live{
          background-position: -290px -193px;

        }
        .record{
          background-position: -240px -193px;

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