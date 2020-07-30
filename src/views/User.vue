<template>
  <div class="user-box">
    <div class="user">
      <div class="user-left">
        <div class="left-top">
          <img src="../assets/image/pho_mrtx.png" alt />
          <div>
            <span>爱听音乐的大毛</span>
            <div class="sex-icon"></div>
          </div>
        </div>
        <div class="left-bottom">
          <div
            v-for="(item,index) in choose"
            :key="index"
            @click="handleClick(index)"
            :class="{'active':chooseIndex==index}"
          >{{item}}</div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chooseIndex: 0,
      choose: [
        "我的资料",
        "我的课程",
        "我的订单",
        "我的收藏",
        "我的消息",
        "我的积分",
        "退出登录",
      ],
    };
  },
  methods: {
    handleClick(index) {
      this.chooseIndex = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.user-box {
  margin-top: 30px;
  .user {
    width: 1200px;
    margin: 0 auto;
    display: flex;
  }
}
.user-left {
  width: 240px;
  text-align: center;
  margin-right: 10px;
  .left-top {
    height: 180px;
    padding: 34px 0;
    box-sizing: border-box;
    background-color: #fff;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      color: #6a6a6f;
      font-size: 16px;
    }
    .sex-icon {
      width: 16px;
      height: 16px;
      background-image: url(../assets/image/icon.png);
      background-position: -66px -195px;
    }
  }
  .left-bottom {
    margin-top: 10px;
    background-color: #fff;
    > div {
      height: 60px;
      line-height: 60px;
      text-align: left;
    }
    > div::before {
      content: "";
      display: inline-block;
      width: 6px;
      height: 32px;
      background-color: #fff;
      vertical-align: middle;
      margin-right: 80px;
    }

    .active::before {
      background-color: #98b702;
    }
  }
}
</style>