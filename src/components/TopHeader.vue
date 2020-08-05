<template>
  <div class="top-header-box">
    <div class="top-header" id="top-header">
      <div class="left">
        <div class="logo">芥末</div>
        <div class="title">芥末音乐</div>
      </div>
      <div class="center">
        <div v-for="(item,index) in list" :key="index" class="item" :class="{'active':$route.path.includes(item.link)}"
          @click="select(index,item.link)">{{item.name}}</div>
      </div>
      <div class="right">
        <img src="../assets/image/icon_hender_xx.png" @click="go('/index/user/news')" class="notification-message" />
        <div v-if="isShow" class="login" @click="showLogin">
          <img src="../assets/image/pho_def.png" class="login-icon" />
          <span class="login-text">点击登录</span>
        </div>
        <div v-else class="login" @click="go('/index/user')">
          <img :src="avatar" class="login-icon" />
          <span class="login-text">{{nickName}}</span>
        </div>
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
        list: [
          {type:0, name: "推荐课程", link: '/home' },
          { name: "钢琴", link: '/1' },
          { name: "吉他", link: '/1' },
          { name: "尤克里里", link: '/1' },
          { name: "小提琴", link: '/1' },
          { name: "大提琴", link: '/1' }
        ],
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
          this.avatar = localStorage.getItem('avatar')
          console.log(localStorage.getItem("avatar"))
          this.nickName = localStorage.getItem("nickName")
          console.log(localStorage.getItem("nickName"))
          return false;
        }
      },
    },
    created() {
      this.$post("/course/getCourse",{couType:"smd1",PageNumber:1,PageSize:10}).then(res=>{
        console.log(res)
      })
    },
    methods: {
      select(index,link) {
        this.$router.push({path:'/index'+link})
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
                  console.log(res.data.headportrait, res.data.nickname);
                  localStorage.setItem("token", res.data.token);
                  localStorage.setItem("avatar", res.data.headportrait);
                  localStorage.setItem("nickName", res.data.nickname);
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
        this.$router.push({ path: "/index/about",query:{type:"A"} });
      },
      go(link){
        this.$router.push(link)
      }
    },
    components: {
      LoginBox,
      Consult,
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