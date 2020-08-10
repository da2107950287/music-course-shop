<template>
  <div class="top-header-box">
    <div class="top-header" id="top-header">
      <div class="left">
        <div class="logo">芥末</div>
        <div class="title">芥末音乐</div>
      </div>
      <div class="top-center">
        <div :class="{'active':$route.path=='/index/home'}" class="item" @click="select('/index/home')">推荐课程</div>
        <div v-for="(item,index) in list" :key="index" class="item"
          :class="{'active': $route.query.couType===item.dicId}" @click="select('/index/courses',item.dicId)">
          {{item.dicName}}</div>
      </div>
      <div class="right">
        <div @click="go('/index/user/news')" class="notification">
          <img src="../assets/image/icon_hender_xx.png" class="notification-message" />
          <div class="red-box">{{notReadNUm}}</div>
        </div>
        <div v-if="isShow" class="login" @click="showLogin">
          <img src="../assets/image/pho_def.png" class="login-icon" />
          <span class="login-text">点击登录</span>
        </div>
        <div v-else class="login" @click="showMenu">
          <img :src="avatar" class="login-icon" />
          <span class="login-text">{{nickName}}</span>
        </div>
        <top-menu v-if="isShowMenu" @hideMenu="hideMenu"></top-menu>

      </div>
    </div>
    <!-- 登录弹窗 -->
    <el-dialog :visible.sync="dialogFormVisible" center width="480px">
      <el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-ruleForm">
        <div class="left self-left">
          <div class="logo">芥末</div>
          <div class="title">芥末音乐</div>
        </div>
        <el-form-item prop="phone">
          <el-input v-model="loginForm.phone" maxlength="11" placeholder="请输入手机号"></el-input>
        </el-form-item>

        <el-form-item prop="smsCode" class="graphics-code">
          <el-input v-model="loginForm.smsCode" placeholder="请输入验证码"></el-input>
          <div class="code" :class="{'can-click':canClick}" @click="codeClick">{{codeMsg}}</div>
        </el-form-item>
      </el-form>
      <div class="agreement">
        <span>首次登陆默认同意</span>
        <span @click="seeUserAgreement">《用户协议》</span>
      </div>
      <button @click="submitForm" class="login-button">登 录</button>

      <div class="contact">
        <span>登录遇到问题请联系客服：</span>
        <span>400-555-666</span>
      </div>
    </el-dialog>
    <div class="btn">
      <a href="#top-header">
        <img src="../assets/image/bnt_top.png" alt @click="consult" />
      </a>
      <img src="../assets/image/bnt_zxzx.png" alt />
    </div>
    <!-- <consult></consult> -->
  </div>
</template>
<script>
  import Consult from "../components/Consult";
  import LoginBox from "../components/LoginBox";
  import TopMenu from "../components/TopMenu";


  export default {
    data() {
      //手机号自定义规则
      var validatorPhone = (rule, value, callback) => {
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
      //短信验证码自定义规则
      var validatorSmsCode = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入验证码"));
        } else {
          callback();
        }
      };
      return {
        dialogFormVisible: false, //登录弹窗开关
        canClick: false, //验证码开关
        codeMsg: "发送验证码",
        totalTime: 60,
        avatar: "",
        nickName: "",
        notReadNUm: 0,
        list: [],
        isShowMenu: false,
        loginForm: {
          phone: "",
          smsCode: "",
        },
        rules: {
          phone: [{ validator: validatorPhone, trigger: "blur" }],
          smsCode: [{ validator: validatorSmsCode, trigger: "blur" }],
        },
      };
    },
    computed: {
      isShow() {
        if (localStorage.getItem("token") == null) {
          return true;
        } else {
          this.avatar = localStorage.getItem('headportrait')
          this.nickName = localStorage.getItem("nickName")
          console.log(localStorage.getItem("nickName"))
          return false;
        }
      },
    },
    created() {
      //获取头部课程类
      this.$post('/other/getDictionary', { dicType: "smd1" }).then(res => {
        if (res.code == 200) {
          this.list = res.data;
        }
      })
      //获取未读消息
      this.$post('/other/getNotReadNumber', {}).then(res => {
        if (res.code == 200) {
          this.notReadNUm = res.data;
        }
      })
    },
    methods: {
      select(link, couType) {
        if (couType) {
          this.$router.push({ path: link, query: { couType } })

        } else {
          this.$router.push(link)
        }
      },
      showLogin() {
        this.dialogFormVisible = true;
      },
      codeClick() {
        if (!this.canClick) return;
        this.canClick = true;
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
        this.$post("/userinfo/send_sms", { account: this.loginForm.phone }).then(
          (res) => {
            switch (res.code) {
              case "200":
                this.$message.success(res.msg);
                break;
              case "500":
                this.$message.error(res.msg);
                break;
              default:
                console.log(res.msg);
            }
          }
        );
      },
      submitForm() {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.$post("/userinfo/login", {
              account: this.loginForm.phone,
              verify: this.loginForm.smsCode,
              inCode: "",
            }).then((res) => {
              switch (res.code) {
                case "200":
                  this.avatar = res.data.headportrait;
                  this.nickName = res.data.nickname;
                  localStorage.setItem("accLeaTime",res.data.accLeaTime);
                  localStorage.setItem("headportrait",res.data.headportrait);
                  localStorage.setItem("token",res.data.token);
                  localStorage.setItem("nickName", res.data.nickname);
                  localStorage.setItem("vip",res.data.vip);
                  localStorage.setItem("sex",res.data.sex)
                  localStorage.setItem("state",res.data.state)
                  this.$store.commit("setUserInfo",{
                    accLeaTime:res.data.accLeaTime,
                    headportrait:res.data.headportrait,
                    nickname:res.data.nickname,
                    token:res.data.token,
                    vip:res.data.vip,
                    integral:res.data.integral,
                    sex:res.data.sex,
                    status:res.data.state
                  });
                  
                  this.dialogFormVisible = false;
                case 201:
                  this.$message.success(res.msg);
                  this.dialogFormVisible = false;
                  break;
                case "401":
                case "402":
                case "500":
                  this.$message.error(res.msg);
                  break;
                default:
                  console.log(res.msg);
              }
            });
          }
        });
      },
      consult() { },
      //查看用户协议
      seeUserAgreement() {
        this.$router.push({ path: "/index/about", query: { type: "A" } });
      },
      go(link) {
        this.$router.push(link)
      },
      showMenu() {
        this.isShowMenu = !this.isShowMenu;
      },
      hideMenu() {
        console.log(888)
        this.isShowMenu = false
      }
    },
    components: {
      LoginBox,
      Consult,
      TopMenu
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
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    margin-left: auto;
    margin-right: auto;

    .top-center {
      display: flex;
      align-items: center;
      margin-left: 60px;
      text-align: center;
      font-family: "PingFangSC-Medium", "PingFang SC";
    }
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

  .notification {
    position: relative;
    display: flex;

    .notification-message {
      width: 24px;
      height: 24px;
    }

    .red-box {
      width: 14px;
      height: 14px;
      background-color: #FF4545;
      border-radius: 50%;
      position: absolute;
      left: 15px;
      top: -5px;
      font-size: 10px;
      line-height: 14px;
      text-align: center;
      color: #fff;
    }

  }

  .right {
    display: flex;
    align-items: center;
    margin-left: 73px;
  }

  .login {
    display: flex;
    align-items: center;
    margin-left: 30px;
  }

  .login-icon {
    width: 24px;
    height: 24px;
    cursor: default;
  }

  .login-text {
    margin-left: 5px;
    line-height: 60px;
    cursor: default;
  }

  /*修改el-input样式 */
  .el-input /deep/ .el-input__inner {
    border: none;
    border-bottom: 1px solid #eee;
    font-size: 16px;
    color: #36363a;
    border-radius: 0;
  }

  .graphics-code {
    position: relative;

    .code {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 14px;
      font-family: "PingFangSC-Regular", "PingFang SC";
      font-weight: 400;
      color: #ccc;
      cursor:default;
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

  .agreement>span:nth-child(1) {
    color: #36363a;
  }

  .agreement>span:nth-child(2) {
    color: #fb9715;
  }

  .contact {
    font-size: 14px;
    font-weight: 400px;
    text-align: center;
    color: #6a6a6f;
  }

  .contact>spam:nth-child(1) {
    color: #6a6a6f;
  }

  .contact>span:nth-child(2) {
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