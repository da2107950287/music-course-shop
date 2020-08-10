<template>
  <div class="order">
    <div class="order-header">
      <div v-for="(item,index) in lists" :key="index" class="list" @click="handleClick(item.olState,index)">
        <div :class="{'active':currentIndex==index}">{{item.name}}</div>
      </div>
    </div>
    <div class="order-list" v-if="currentIndex==0">
      <div class="order-item" v-for="(item,index) in list" :key="index">
        <div class="title" v-show="item.olState===1">
          <div>待支付</div>
          <div>请在29分29秒内完成支付，超时订单将被自动取消哦〜</div>
        </div>
        <div class="title" v-show="item.olState==5">
          <div>已完成</div>
        </div>
        <div class="title" v-show="item.olState==6">
          <div>已取消 </div>
        </div>
        <div class="table">
          <div class="table-header">
            <div>
              <span>订单号：</span>
              <span>{{item.orderId}}</span>
            </div>
            <div>
              <span>下单时间：</span>
              <span>{{item.olTime}}</span>
            </div>
          </div>
          <div class="table-body" v-for="(el,index) in item.orderlistCourse" :key="index+'1'">
            <div class="left">{{el.couName}}</div>
            <div class="right">
              <span>总课时：{{el.totalHours}}</span>
              <span>&yen;{{el.price}}</span>
              <span>&times;{{el.number}}</span>
            </div>
          </div>
        </div>
        <div class="total">
          <span>合计：2件商品</span>
          <div>
            <span>共计：</span>
            <span class="price">&yen;{{item.cdyPrice}}</span>
          </div>
        </div>
        <div class="btn-box">
          <div class="cancel btn" v-show="item.olState==1">取消订单</div>
          <div class="pay btn" v-show="item.olState==1">去支付</div>
          <div class="pay btn" v-show="item.olState==6">再次购买</div>
          <div class="study btn" v-show="item.olState==5">去学习</div>

        </div>
      </div>
    </div>
    <div class="order-list" v-if="currentIndex==1">
      <div class="order-item" v-for="(item,index) in list" :key="index">
        <div class="title">
          <div>待支付</div>
          <div>请在{{item.countTime}}内完成支付，超时订单将被自动取消哦〜</div>
        </div>
        <!-- <div class="title">
          <div>已完成</div>
        </div> -->
        <!-- <div class="title">
          <div>已取消 </div>
        </div> -->
        <div class="table">
          <div class="table-header">
            <div>
              <span>订单号：</span>
              <span>{{item.orderId}}</span>
            </div>
            <div>
              <span>下单时间：</span>
              <span>{{item.olTime}}</span>
            </div>
          </div>
          <div class="table-body" v-for="(el,index) in item.orderlistCourse" :key="index+'1'">
            <div class="left">{{el.couName}}</div>
            <div class="right">
              <span>总课时：{{el.totalHours}}</span>
              <span>&yen;{{el.price}}</span>
              <span>&times;{{el.number}}</span>
            </div>
          </div>
        </div>
        <div class="total">
          <span>合计：2件商品</span>
          <div>
            <span>共计：</span>
            <span class="price">&yen;{{item.cdyPrice}}</span>
          </div>
        </div>
        <div class="btn-box">
          <div class="cancel btn">取消订单</div>
          <div class="pay btn">去支付</div>
          <!-- <div class="pay btn">再次购买</div>
          <div class="study btn">去学习</div> -->

        </div>
      </div>
    </div>
    <div class="order-list" v-if="currentIndex==2">
      <div class="order-item" v-for="(item,index) in list" :key="index">

        <!-- <div class="title" >
          <div>待支付</div>
          <div>请在29分29秒内完成支付，超时订单将被自动取消哦〜</div>
        </div> -->
        <div class="title">
          <div>已完成</div>
        </div>
        <!-- <div class="title">
          <div>已取消 </div>
        </div> -->
        <div class="table">
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
        <div class="total">
          <span>合计：2件商品</span>
          <div>
            <span>共计：</span>
            <span class="price">&yen;598.00</span>
          </div>
        </div>
        <div class="btn-box">
          <!-- <div class="cancel btn">取消订单</div>
          <div class="pay btn">去支付</div> -->
          <!-- <div class="pay btn">再次购买</div> -->
          <div class="study btn">去学习</div>

        </div>
      </div>
    </div>
    <div class="order-list" v-if="currentIndex==3">
      <div class="order-item" v-for="(item,index) in list" :key="index">

        <!-- <div class="title" >
          <div>待支付</div>
          <div>请在29分29秒内完成支付，超时订单将被自动取消哦〜</div>
        </div> -->
        <!-- <div class="title">
          <div>已完成</div>
        </div> -->
        <div class="title">
          <div>已取消 </div>
        </div>
        <div class="table">
          <div class="table-header">
            <div>
              <span>订单号：</span>
              <span>{{item.orderId}}</span>
            </div>
            <div>
              <span>下单时间：</span>
              <span>{{item.olTime}}</span>
            </div>
          </div>
          <div class="table-body" v-for="(el,index) in item.orderlistCourse" :key="index+'1'">
            <div class="left">{{el.couName}}</div>
            <div class="right">
              <span>总课时：{{el.totalHours}}</span>
              <span>&yen;{{el.price}}</span>
              <span>&times;{{el.number}}</span>
            </div>
          </div>
        </div>
        <div class="total">
          <span>合计：2件商品</span>
          <div>
            <span>共计：</span>
            <span class="price">&yen;{{item.cdyPrice}}</span>
          </div>

        </div>
        <div class="btn-box">
          <!-- <div class="cancel btn">取消订单</div>
          <div class="pay btn">去支付</div> -->
          <div class="pay btn">再次购买</div>
          <!-- <div class="study btn">去学习</div> -->

        </div>
      </div>


    </div>
    <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" background
      layout="prev, pager, next" :total="total" class="pagination">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        status: 0,
        currentIndex: 0,
        currentPage: 1,
        pageSize: 10,
        total: null,
        type: 1,
        time: null,

        lists: [
          { name: "全部", olState: "all" },
          { name: "待付款", olState: "1" },
          { name: "已完成", olState: "5" },
          { name: "已取消", olState: "6" },

        ],
        list: []

      };
    },
    watch: {
      time() {

      }
    },
    created() {
      this.getData("all")
    },
    methods: {
      countTime() {
        //获取当前时间
        var date = new Date();
        var now = date.getTime();
        //设置截止时间
        var endDate = new Date();
        var end = endDate.getTime();
        //时间差
        var leftTime = end - now;
        //定义变量 d,h,m,s保存倒计时的时间
        if (leftTime >= 0) {
          d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
          this.h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
          this.m = Math.floor(leftTime / 1000 / 60 % 60);
          this.s = Math.floor(leftTime / 1000 % 60);
        }

        console.log(this.s);
        //递归每秒调用countTime方法，显示动态时间效果
        setTimeout(this.countTime, 1000);
      },
      getData(olState) {
        this.$post('/orderlist/getOrderlist', { olState, type: this.type, PageNumber: this.currentPage, PageSize: this.pageSize }).then(res => {
          if (res.code == 200) {
            this.total = res.data.PageCount
            this.list = res.data.list;
            this.list.forEach(item => {
              if (item.olState == 1) {
                let data = item.olTime;
                let now = data.getTime()
                let end = now + 30 * 1000 * 60;
                let leftTIme = end - now;
                if (leftTIme >= 0) {
                  d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
                  let m = Math.floor(leftTime / 1000 / 60 % 60);
                  let s = Math.floor(leftTime / 1000 % 60);
                  this.$set(item,"countTime",m+"分"+s+"秒")
                }

                // this.$set(item,'',)
              }
            })
          }
        })
      },
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage;
        this.getData()
      },
      handleClick(olState, index) {
        console.l
        this.currentIndex = index;
        this.getData(olState)

      },
    },
  };
</script>
<style lang="scss" scoped>
  @import '../assets/css/pagination.css';

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
        cursor: default;
      }

      .active {
        border-bottom: 3px solid #98b702;
        color: #98b702;
        font-weight: 500;
      }
    }
  }

  .order-list {}

  .order-item {
    margin-top: 10px;
    padding: 30px;
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

      .table-header {
        height: 62px;
        padding: 0 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f7f7f7;
        color: #9899a1;
      }

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
        }
      }
    }

    .total,
    .btn-box {
      display: flex;
      justify-content: flex-end;

      div {
        cursor: default;
      }
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
        color: #36363A;
        background-color: #f7f7f7;
        border: 1px solid #ddd;
      }

      .pay {
        color: #fff;
        background-color: #98b702;
      }

      .study {
        color: #fff;
        background-color: #FB9715;
      }
    }
  }
</style>