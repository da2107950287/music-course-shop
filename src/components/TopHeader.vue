<template>
  <div class="top-header-box">
    <div class="top-header">
      <div class="left">
        <div class="logo">芥末</div>
        <div class="title">芥末音乐</div>
      </div>
      <div class="center">
        <div
          v-for="(item,index) in list"
          :key="index"
          class="item"
          :class="{'active':index===currentIndex}"
          @click="select(index)"
        >{{item}}</div>
      </div>
      <div class="right">
        <img src="../assets/image/icon_hender_xx.png" class="notification-message" />
        <div class="login" @click="showLogin">
          <img src="../assets/image/pho_def.png" class="login-icon" />
          <span class="login-text">点击登录</span>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="dialogFormVisible" center width="480px">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <div class="left self-left">
          <div class="logo">芥末</div>
          <div class="title">芥末音乐</div>
        </div>
        <el-form-item prop="num">
          <el-input v-model.number="ruleForm.num" maxlength="11" placeholder="请输入手机号"></el-input>
        </el-form-item>

        <el-form-item prop="pass" class="pass">
          <el-input v-model="ruleForm.pass" placeholder="请输入验证码"></el-input>
          <div class="code" :class="{'can-click':canClick}" @click="codeClick">{{codeMsg}}</div>
        </el-form-item>
      </el-form>
      <div class="agreement">
        <span>首次登陆默认同意</span>
        <span>《用户协议》</span>
      </div>
      <button @click="submitForm('ruleForm')" class="login-button">登 录</button>

      <div class="contact">
        <span>登录遇到问题请联系客服：</span>
        <span>400-555-666</span>
      </div>
    </el-dialog>
    <div class="btn">
      <img src="../assets/image/bnt_top.png" alt @click="consult" />
      <img src="../assets/image/bnt_zxzx.png" alt />
    </div>
    <consult></consult>
  </div>
</template>
<script>
import Consult from "../components/Consult"
import LoginBox from "../components/LoginBox";
export default {
  data() {
    var validatorNum = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        var isPhone = /^[1][0-9][0-9]{9}$/;
        if (!isPhone.test(value)) {
          callback(new Error("手机号输入错误"));
        } else {
          this.canClick = true;
          callback();
        }
      }
    };
    var validatorPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    };

    return {
      dialogFormVisible: false,
      currentIndex: 0,
      chooseIndex: 0,
      canClick: false, //验证码开关
      codeMsg: "发送验证码",
      totalTime: 60,
      list: ["推荐课程", "钢琴", "吉他", "尤克里里", "小提琴", "大提琴"],
      choose: [
        "我的资料",
        "我的课程",
        "我的订单",
        "我的收藏",
        "我的消息",
        "我的积分",
        "退出登录",
      ],

      ruleForm: {
        num: "",
        password: "",
      },
      rules: {
        num: [{ validator: validatorNum, trigger: "blur" }],
        pass: [{ validator: validatorPass, trigger: "blur" }],
      },
    };
  },
  methods: {
    select(index) {
      this.currentIndex = index;
    },
    showLogin() {
      this.dialogFormVisible = true;
    },
    codeClick() {
      if (!this.canClick) return;
      this.canClick = false;
      this.codeMsg = this.totalTime + "s";
      let clock = window.setInterval(() => {
        this.totalTime--;
        this.codeMsg = this.totalTime + "s";
        if (this.totalTime < 0) {
          window.clearInterval(clock);
          this.codeMsg = "重新发送验证码";
          this.totalTime = 60;
          this.canClick = true; //这里重新开启
        }
      }, 1000);
    },
    consult() {},
  },
  components: {
    LoginBox,
    Consult
  },
};
</script>
<style lang="scss" scoped>
.top-header-box {
  width: 100%;
  margin-bottom: 30px;
  background-image: url(../assets/image/bg_hander.png);
}

.top-header {
  width: 1200px;
  display: flex;
  align-items: center;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}

.left {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.self-left {
  margin-bottom: 50px;
}

.logo {
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-weight: 600;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 6px 0px rgba(129, 156, 2, 0.4);
  border-radius: 10px;
  color: #98b702;
}

.title {
  width: 96px;
  height: 25px;
  font-size: 24px;
  color: rgba(152, 183, 2, 1);
  line-height: 25px;
  margin-left: 10px;
  font-family: "STHupo";
}

.center {
  display: flex;
  align-items: center;
  margin-left: 60px;
  text-align: center;
  font-family: "PingFangSC-Medium", "PingFang SC";
}

.item {
  width: 120px;
  height: 100px;
  line-height: 100px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  color: #36363a;
  background-color: #fff;
}

.active {
  background: #98b702;
  color: #fff;
}

.notification-message {
  width: 24px;
  height: 24px;
}

.right {
  display: flex;
  align-items: center;
  margin-left: 73px;
}

.profile-choose {
  width: 154px;
  height: 324px;
  position: absolute;
  top: 70px;
  right: 38px;
  text-align: center;
  color: #36363a;
  box-sizing: border-box;
  background-image: url(../assets/image/bg_zk.png);

  .choose-box {
    padding: 20px 0;

    div {
      line-height: 40px;
      font-family: "PingFangSC-Regular", "PingFang SC";
      font-weight: 400;
    }

    .choose-active {
      color: #98b702;
    }
  }
}

.login {
  display: flex;
  align-items: center;
  margin-left: 30px;
}

.login-icon {
  width: 24px;
  height: 24px;
}

.login-text {
  margin-left: 5px;
  line-height: 60px;
}

/*修改el-input样式 */
.el-input /deep/ .el-input__inner {
  border: none;
  border-bottom: 1px solid #eee;
  font-size: 16px;
  color: #36363a;
  border-radius: 0;
}

.pass {
  position: relative;

  .code {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 14px;
    font-family: "PingFangSC-Regular", "PingFang SC";
    font-weight: 400;
    color: #ccc;
  }

  .can-click {
    color: #98b702;
  }
}

.login-button {
  width: 400px;
  height: 50px;
  background-color: #98b702;
  border-radius: 3px;
  opacity: 0.6;
  border: 0;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin: 12px 0;
}

.agreement {
  font-size: 14px;
  text-align: center;
}

.agreement > span:nth-child(1) {
  color: #36363a;
}

.agreement > span:nth-child(2) {
  color: #fb9715;
}

.contact {
  font-size: 14px;
  font-weight: 400px;
  text-align: center;
  color: #6a6a6f;
}

.contact > spam:nth-child(1) {
  color: #6a6a6f;
}

.contact > span:nth-child(2) {
  color: #0091ff;
}
.btn {
  position: fixed;
  top: 100px;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 100;
  img {
    width: 80px;
    height: 80px;
  }
}

</style>