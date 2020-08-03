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
          <div v-for="(item,index) in choose" :key="index" @click="handleClick(item)"
            :class="{'active':chooseIndex==item.id}">{{item.title}}</div>
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
          { id: 0, title: "我的资料", link: 'profile' },
          { id: 1, title: "我的课程", link: 'course' },
          { id: 2, title: "我的订单", link: 'order' },
          { id: 3, title: "我的收藏", link: 'collect' },
          { id: 4, title: "我的消息", link: 'news' },
          { id: 5, title: "我的积分", link: 'integral' },
          { id: 6, title: "退出登录", link: '' },
        ],
      };
    },
    watch:{
      
      $route(to,from){
        console.log(to,from)
      }
    },
    created(){
      
    },
    methods: {
      handleClick(item) {
        this.chooseIndex = item.id;
        this.$router.push('/user/' + item.link)
      },
    },
  };
</script>
<style lang="scss" scoped>
  .user-box {
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

      >div {
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

      >div {
        height: 60px;
        line-height: 60px;
        text-align: left;
      }

      >div::before {
        content: "";
        display: inline-block;
        width: 6px;
        height: 32px;
        background-color: #fff;
        vertical-align: middle;
        margin-right: 80px;
      }
      .active{
        background:rgba(152,183,2,0.1);
        color: #98b702;

        /* opacity: 0.1; */
      }
      .active::before {
        background-color: #98b702;
       
      }
    }
  }
</style>