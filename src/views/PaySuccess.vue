<template>
  <div class="pay-success">
    <div>
      <img src="../assets/image/icon_zfcg.png" alt />
      <div class="integral">购买成功，获得1000积分</div>
      <div class="tip">有效期从今天开始计算、请合理安排学习时间</div>
      <div class="order">
        <span>订单号：9377800392</span>
        <span>查看详情</span>
      </div>
      <div class="pay-money">
        <span>支付金额：</span>
        <span>￥299.00</span>
      </div>
      <div class="btn">
        <div>返回课程首页</div>
        <div>进入学习中心</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.pay-success {
  width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
  text-align: center;
  background-color: #fff;
  color: #9899a1;
  img {
    width: 60px;
    height: 60px;
  }

  .integral {
    margin-top: 20px;
    color: #36363a;
    font-size: 20px;
    line-height: 28px;
    font-family: "PingFangSC-Medium", "PingFang SC";
    font-weight: 500;
  }

  .tip {
    line-height: 22px;
    font-weight: 400;
  }
  .order {
    margin-top: 30px;
    line-height: 22px;
    span:nth-child(2) {
      margin-left: 10px;
      color: #0091ff;
    }
  }
  .pay-money {
    margin-top: 20px;
    line-height: 22px;

    span:nth-child(2) {
      color: #36363a;
      font-family: "PingFangSC-Medium", "PingFang SC";
    }
  }
  .btn {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    div {
      width: 120px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 14px;
    }
    div:nth-child(1) {
      color: #6a6a6f;
      border: 1px solid #e8e8e8;
      background-color: #f7f7f7;
      box-sizing: border-box;
    }
    div:nth-child(2) {
      margin-left: 20px;
      background-color: #98b702;
      color: #fff;
    }
  }
}
</style>