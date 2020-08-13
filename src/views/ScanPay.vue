<template>
  <div>
    <div class="scan-pay">
      <div class="header">
        <div>
          <div>
            <span>课程：</span>
            <span>{{couName}}</span>
          </div>
          <div class="payee">
            <span>收款方：</span>
            <span></span>
          </div>
        </div>
        <div>
          <span>应付总额：</span>
          <span>&yen;{{totalPrice}}</span>
        </div>
      </div>
      <div class="content">
        <div class="left">
          <div class="text1">使用微信扫一扫支付，方便快捷！</div>
          <div class="text2">用微信扫一扫我支付哦！</div>
          <div id="qrcode" class="qrcode" ref="qrcode"></div>
          <img class="img" src="~assets/image/img_sys.png" alt />
        </div>
        <img src="~assets/image/img_sjmx.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
  import QRCode from "qrcodejs2";
  export default {
    data() {
      return {
        couName: "",
        couId: "",
        integral: "",
        payType: "",
        qrLink: "",
        totalPrice: "",
        path: "",
        olId: ""
      };
    },

    mounted() {
      this.totalPrice = this.$route.query.totalPrice;
      this.couName = this.$route.query.couName;
      if (!this.$route.query.hasOwnProperty("olId")) {
        this.couId = this.$route.query.couId;
        this.integral = this.$route.query.integral;
        this.payType = this.$route.query.payType;
        if (this.payType == 1) {
          this.wxPay();
        } else {
          this.aliPay();
        }
      } else {
        this.olId = this.$route.query.olId;
        this.$post("/wx/buyOrderlist", { olId: this.olId, type: 1 }).then(res => {
          if (res.code == 200) {
            this.qrLink = res.data
            if (this.qrLink != "") {
              this.$nextTick(() => {
                this.qrcode();
              });
            }
          }
        })
      }

    },
    methods: {
      wxPay() {
        this.$post("/wx/buyCourse", {
          couId: this.couId,
          integral: this.integral,
          type: 1,
        }).then((res) => {
          if (res.code == 200) {
            this.qrLink = res.data;
            if (this.qrLink != "") {
              this.$nextTick(() => {
                this.qrcode();
              });
            }

          }
        });
      },
      aliPay() {
        this.$post("/alipay/buyCourse", {
          couId: this.couId,
          integral: this.integral,
          type: 1,
        }).then((res) => {
          if (res.code == 200) {
            console.log()
            this.qrLink = res.data;
            const div = document.createElement("divform");
            div.innerHTML = res.data;
            document.body.appendChild(div);
            // document.forms[0].acceptCharset='GBK'; //保持与支付宝默认编码格式一致，如果不一致将会出现：调试错误，请回到请求来源地，重新发起请求，错误代码 invalid-signature 错误原因: 验签出错，建议检查签名字符串或签名私钥与应用公钥是否匹配
            document.forms[0].submit();
          }
        });
      },
      qrcode() {
        let qr = new QRCode("qrcode", {
          width: 180,
          height: 180,
          text: this.qrLink,
        });
        // this.getOrderstate()

      },
      getOrderstate() {
        let num = 15 * 60;
        let timer = setInterval(() => {
          num--;
          this.$post("", {}).then(res => {
            if (res.code == 200) {
              if (res.data == 1) {
                this.$router.push({ path: '/index/paySuccess', query: {} });
                clearInterval(timer)
              }
            }

          })
          if (num < 0) {
            clearInterval(timer);
          }
        }, 1000)
      }
    },
  };
</script>
<style lang="scss" scoped>
  .scan-pay {
    width: 1200px;
    margin: auto;
    background-color: #fff;
    margin-bottom: 30px;
  }

  .header {
    padding: 30px;
    display: flex;
    justify-content: space-between;
    line-height: 22px;
    color: #9899a1;
    border-bottom: 1px solid #ddd;

    .payee {
      margin-top: 10px;
    }

    div {
      span:nth-child(2) {
        color: #36363a;
      }
    }
  }

  .content {
    display: flex;
    padding: 42px 200px 49px;
    justify-content: space-between;

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;

      .qrcode {

        margin: 20px 0;
        padding: 10px;
        border: 1px solid #ddd;
      }

      .text1 {
        color: #7e7b7e;
        font-size: 26px;

      }

      .text2 {
        margin-top: 20px;
        color: #9899a1;
      }

      .img {
        width: 200px;
        height: 67px;

      }
    }
  }
</style>