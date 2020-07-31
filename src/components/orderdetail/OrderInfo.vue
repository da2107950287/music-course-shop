<template>
  <div class="good-info">
    <div class="title">
      <div>订单信息</div>
    </div>
    <div class="table">
      <div class="table-body">
        <div class="list">
          <div>
            <span>订单编号：</span>
            <span>1092849548906433</span>
          </div>
          <div>
            <span>下单时间：</span>
            <span>2020-10-10 12:00</span>
          </div>
          <div>
            <span>支付时间：</span>
            <span>2020-10-10 12:00</span>
          </div>
          <div>
            <span>支付方式：</span>
            <span>支付宝</span>
          </div>
          <div>
            <span>支付金额：</span>
            <span>&yen;299.00</span>
          </div>
        </div>
        <!-- <div class="list">
          <div>
            <span>下单号码：</span>
            <span>1092849548906433</span>
          </div>
          <div>
            <span>下单时间：</span>
            <span>2020-10-10 12:00</span>
          </div>
        </div> -->
      </div>
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
      padding:  0 30px 30px;
      display: flex;
      justify-content: space-between;
      .list{
         
          div{
              margin-top: 30px;
              color: #36363A;
              span:nth-child(1){
                  margin-right: 30px;
                  color:#6A6A6F
              }
          }
      }
    }
  }
}
</style>