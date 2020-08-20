<template>
  <div class="course-info">
    <div class="title">
      <div class="title-right">收货地址</div>
      <div @click="editAddress">
        <slot name="right"></slot>
      </div>
      
    </div>
    <div class="table">
      <div class="tr1">
        <span>{{addresInfo.fullname}}</span>
        <span>{{addresInfo.mobile}}</span>
      </div>
      <div class="address">{{address}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      addresInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    watch:{
      addresInfo(){
        this.address=this.addresInfo.detailed.replace(/\//g, "")
      }
    },
    data(){
     return{
      address:''
     }
    },
    // computed: {
    //   // address() {
    //   //   console.log(typeof this.addresInfo.detailed)
    //   //   return 
    //   // }
    // },
    // created(){
    //   this.address=this.addresInfo.detailed.replace(/\//g, "")
    // },
    methods: {
      editAddress() {
        this.$emit("editAddress");
      }
    }
  };
</script>
<style lang="scss" scoped>
  .course-info {
    padding: 30px;
    margin-top: 10px;
    box-sizing: border-box;
    background-color: #fff;

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;

      .title-right {
        font-size: 20px;
        font-weight: 500;
        color: #36363a;
        font-family: "PingFangSC-Medium", "PingFang SC";
      }

      .title-left {
        display: flex;
        align-items: center;
        color: #0091FF;
        font-size: 18px;
        cursor: default;

        >img {
          width: 16px;
          height: 16px;
          margin-right: 4px;
        }

      }
    }

    .title::before {
      content: "";
      position: absolute;
      top: 5px;
      left: -26px;
      display: inline-block;
      width: 4px;
      height: 12px;
      background-color: #98b702;
      margin-right: 30px;
    }

    .table {
      margin-top: 30px;
      border: 1px solid #eee;
      padding: 30px;
      font-size: 18px;

      .tr1 {
        color: #36363a;
        line-height: 30px;

        >span:first-child {
          margin-right: 20px;
          font-size: 24px;
          font-weight: 500px;
          font-family: "PingFangSC-Medium", "PingFang SC";
        }
      }

      .address {
        margin-top: 30px;
        color: #6a6a6f;
      }
    }
  }
</style>