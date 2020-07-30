<template>
  <div class="order">
    <div class="order-header">
      <div v-for="(item,index) in lists" :key="index" class="list" @click="handleClick(index)">
        <div :class="{'active':currentIndex==index}">{{item}}</div>
      </div> 
    </div>
    <div>
        <div>
            <div class="title">
                <h3>待支付</h3>
                <div>请在29分29秒内完成支付，超时订单将被自动取消哦〜</div>
            </div>
            <div>
                <div class="table-header">
                    <div>
                        <span>订单号：</span>
                        <span>1001893148786</span>
                    </div>
                    <div>
                        <span>下单时间：</span>
                        <span>2020-10-10 12:23</span>
                    </div>
                </div>
                <div class="table-body">
                    <div class="left">大提琴乐曲《赛马》提升课——琴艺技能提升</div>
                    <div class="right">
                        <span>总课时：3.0</span>
                        <span>&yen;299.00</span>
                        <span>&times;1</span>
                    </div>
                </div>
            </div>
            <div>
                <span>合计：2件商品</span>
                <div>
                    <span>共计：</span>
                    <span>$yen598.00</span>
                </div>
            </div>
            <div class="btn-box">
                <div>取消订单</div>
                <div>去支付</div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0,
      lists: ["全部", "待付款", "已完成", "已取消"],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.order {
  width: 950px;
}
.order-header {
  height: 70px;
  padding-left: 9px;
  display: flex;
  font-size: 16px;
  background-color: #fff;
  .list {
    padding: 0 20px;
    div {
      width: 80px;
      line-height: 70px;
      text-align: center;
      color: #36363a;
      font-weight: 400;
    }
    .active {
      border-bottom: 3px solid #98b702;
      color: #98b702;
      font-weight: 500;
    }
  }
}
</style>