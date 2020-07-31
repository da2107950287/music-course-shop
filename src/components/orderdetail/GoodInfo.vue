<template>
  <div class="good-info">

    <div class="title">
      <div>商品信息</div>
    </div>
    <div class="table">
      <div class="table-body">
        <div class="left">大提琴乐曲《赛马》提升课——琴艺技能提升</div>
        <div class="right">
          <span>总课时：3.0</span>
          <span>&yen;299.00</span>
          <span class="num">&times;1</span>
        </div>
      </div>
    </div>
    <div class="total">
      <span>合计：2件商品</span>
      <div>
        <span>共计：</span>
        <span class="price">&yen;598.00</span>
      </div>
    </div>
    <div class="btn-box">
      <!-- <div class="cancel btn">取消订单</div>
      <div class="pay btn">去支付</div>-->
      <!-- <div class="pay btn">再次购买</div> -->
      <div class="study btn">去学习</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.good-info {
  padding: 30px;
  margin-top: 10px;
  box-sizing: border-box;
  background-color: #fff;
  .title {
    display: flex;
    align-items: center;
    position: relative;
    div:first-child {
      font-size: 20px;
      font-weight: 500;
      color: #36363a;
    }
    div:nth-child(2) {
      margin-left: 10px;
      font-size: 16px;
      color: #ff4545;
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
    margin-top: 20px;
    border: 1px solid #eee;
    .table-body {
      padding: 30px;
      display: flex;
      justify-content: space-between;
      .left {
        color: #36363a;
        font-weight: 500;
      }
      .right {
        color: #9899a1;
        span:nth-child(2) {
          margin: 0 60px;
        }
        .num{
            color: #6A6A6F;
        }
      }
    }
  }
  .total,
  .btn-box {
    display: flex;
    justify-content: flex-end;
  }
  .total {
    margin: 30px 0;
    color: #9899a1;
    div {
      margin-left: 30px;
      .price {
        color: #36363a;
      }
    }
  }
  .btn-box {
    .btn {
      width: 108px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      border-radius: 2px;
      margin-left: 15px;
      font-size: 14px;
    }
    .cancel {
      box-sizing: border-box;
      color: #36363a;
      background-color: #f7f7f7;
      border: 1px solid #ddd;
    }
    .pay {
      color: #fff;
      background-color: #98b702;
    }
    .study {
      color: #fff;
      background-color: #fb9715;
    }
  }
}
</style>