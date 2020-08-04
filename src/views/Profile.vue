<template>
  <div class="profile">
    <div class="profile-top">
      <h3>基本资料</h3>
      <span v-if="!isShow" @click="editProfile">编辑</span>
    </div>
    <div v-if="!isShow" class="profile-bottom">
      <div>
        <span>绑定手机：</span>
        <span>15287598688</span>
        <span @click="modifyPhone">修改</span>
      </div>
      <div>
        <span>绑定微信：</span>
        <span>未绑定</span>
        <span @click="bindWeChat">去绑定</span>
      </div>
      <div>
        <span>昵称：</span>
        <span>爱听音乐的大毛</span>
      </div>
      <div>
        <span>性别：</span>
        <span>女</span>
      </div>
      <div>
        <span>所在城市：</span>
        <span>北京市朝阳区建外大街建外SOHO东区</span>
      </div>
      <div>
        <span>简介：</span>
        <span>爱音乐的大毛就是爱音乐</span>
      </div>
      <div class="personal-icon">
        <img src="../assets/image/pho_mrtx.png" alt />
        <img src="../assets/image/icon_xg.png" @click="changeImg" />
      </div>
    </div>
    <div v-else>
      <!-- <el-form ref="form" :model="form" label-width="100px" class="edit-form">
        <el-form-item label="昵称：">
          <el-input v-model="form.nickName"></el-input>
        </el-form-item>
        <el-form-item label="性别：">
          <el-select v-model="form.sex" placeholder="请选择">
            <el-option
              v-for="item in sexOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所在城市：">
          <el-cascader
            size="large"
            :options="options"
            v-model="form.city"
            @change="handleChange"
            separator
          ></el-cascader>
        </el-form-item>
        <el-form-item label="简介:">
          <el-input v-model="form.brief"></el-input>
        </el-form-item>
      </el-form>-->
      <!-- 修改用户信息 -->
      <div class="profile-bottom edit-form">
        <div>
          <span>昵称：</span>
          <el-input type="text" name id></el-input>
        </div>
        <div>
          <span>性别：</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in sexOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
        <div>
          <span>所在城市：</span>
          <el-cascader size="large" :options="options" v-model="selectedOptions" @change="handleChange" separator>
          </el-cascader>
        </div>
        <div>
          <span>简介:</span>
          <el-input type="text" name id></el-input>
        </div>
      </div>
      <div class="btn-box">
        <div class="btn cancel">取消</div>
        <div class="btn save" @click="saveEdit">保存</div>
      </div>
    </div>
    <!-- 扫描二维码绑定微信 -->
    <el-dialog :visible.sync="dialogVisible1" width="340px" :before-close="handleClose1" center>
      <div slot="title" class="popup-title">扫描二维码绑定微信</div>
      <img src="../assets/image/img_qr.png" alt />
    </el-dialog>
    <!-- 绑定、更换手机号 -->
    <el-dialog :visible.sync="dialogVisible2" width="480px" :before-close="handleClose2" center>
      <el-form :model="phoneForm" :rules="rules" ref="phoneForm" class="demo-loginForm form">
        <div class="popup-title bind-phone">绑定、更换手机号</div>
        <el-form-item prop="phone">
          <el-input v-model.number="phoneForm.phone" maxlength="11" placeholder="请输入新的手机号"></el-input>
        </el-form-item>

        <el-form-item prop="graphicsCode" class="pass graphics-code-box">
          <el-input v-model="phoneForm.graphicsCode" placeholder="请输入图形验证码" class="graphics-code-input"></el-input>
          <div @click="refreshCode" class="graphics-code">
            <s-identify :identifyCode="identifyCode"></s-identify>
          </div>
        </el-form-item>
        <el-form-item prop="smsCode" class="pass">
          <el-input v-model="phoneForm.smsCode" placeholder="请输入短信验证码"></el-input>
          <div class="code" @click="codeClick">{{codeMsg}}</div>
        </el-form-item>
        <button @click="bindPhone()" class="login-button">确 定</button>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
  import {
    provinceAndCityData,
    regionData,
    provinceAndCityDataPlus,
    regionDataPlus,
    CodeToText,
    TextToCode,
  } from "element-china-area-data";
  import SIdentify from "../components/identify/Identify";

  export default {
    data() {
      // 手机号自定义验证规则
      var validatePhone = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入新的手机号"));
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
      //图形验证码自定义验证规则
      const validategraphicsCode = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入图形验证码"));
        } else if (
          value.toLowerCase().trim() !== this.identifyCode.toLowerCase().trim()
        ) {
          this.refreshCode();
          callback(new Error("图形验证码不正确!"));
        } else {
          callback();
        }
      };
      //短信验证码自定义验证规则
      var validateSmsCode = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入短信验证码！"));
        } else {
          callback();
        }
      };
      return {
        dialogVisible1: false,
        dialogVisible2: false,
        phoneForm: {
          phone: "",
          graphicsCode: "",
          smsCode: "",
        },
        codeMsg: "获取验证码",
        rules: {
          phone: [{ validator: validatePhone, trigger: "blur" }],
          graphicsCode: [{ validator: validategraphicsCode, trigger: "blur" }],
          smsCode: [{ validator: validateSmsCode, trigger: "blur" }],
        },
        identifyCodes: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        identifyCode: "",
        canClick: false, //短信验证码开关
        totalTime: 60,
        sexOptions: [
          { value: "male", label: "男" },
          { value: "female", label: "女" },
        ],
        value: "",
        options: regionData,
        selectedOptions: [],
        isShow: false,
        form: {
          nickName: "",
          sex: "",
          city: "",
          brief: "",
        },
      };
    },
    created() {
     
    },
    created() {
      this.$post('/userinfo/showUserinfo', {}).then(res => {
        console.log(res)
      })
    },
    methods: {
      handleChange(value) {
        console.log(this.selectedOptions);
        console.log(value);
      },
      // 生成随机数
      randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      },

      // 切换验证码
      refreshCode() {
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
      },

      // 生成四位随机验证码
      makeCode(o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
          ];
        }
      },

      editProfile() {
        this.isShow = true;
      },
      changeImg() { },
      // 绑定微信
      bindWeChat() {
        this.dialogVisible1 = true;
      },

      handleClose1() {
        this.dialogVisible1 = false;
      },
      //修改手机号
      modifyPhone() {
        this.dialogVisible2 = true;
        this.refreshCode()
      },

      handleClose2() {
        this.dialogVisible2 = false;
      },
      //获取短信验证码
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
      //确定绑定手机号
      bindPhone() {
        this.$refs.phoneForm.validate((valid) => {
          if (valid) {
            this.$post('/userinfo/bindAccount2',{account:this.phoneForm.phoneForm,verify:this.phoneFormForm.validateSmsCode}).then(res=>{
              switch(res.code){
                case 200:
                  this.$message.success(res.msg);
                  this.dialogVisible2=false;
                  break;
                  default:
                    this.$message.success(res.msg);
              }
            })
          }
        });
      },
      // 保存用户信息修改
      saveEdit(){
        this.$post('/userinfo/updateUserinfo',{}).then(res=>{
          console.log(res)
        })
      }
    },
    components: {
      SIdentify,
    },
  };
</script>
<style lang="scss" scoped>
  .profile {
    width: 950px;
    height: 622px;
    padding: 24px 60px;
    box-sizing: border-box;
    background-color: #fff;
    margin-bottom: 30px;
  }

  .profile-top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: #ff4545;
      font-size: 14px;
      line-height: 20px;
    }
  }

  .profile-bottom {
    width: 830px;
    height: 446px;
    padding: 0 60px;
    position: relative;
    box-sizing: border-box;
    border: 1px solid #e8e8e8;

    >div {
      margin-top: 30px;
      font-size: 16px;

      span:nth-child(1) {
        width: 80px;
        display: inline-block;
        color: #9899a1;
      }

      span:nth-child(2) {
        color: #36363a;
        margin-left: 20px;
      }

      span:nth-child(3) {
        margin-left: 10px;
        color: #98b702;
      }
    }

    .personal-icon {
      position: absolute;
      top: 40px;
      right: 60px;

      img:nth-child(1) {
        width: 100px;
        height: 100px;
      }

      img:nth-child(2) {
        position: absolute;
        bottom: 0;
        right: 8px;
      }
    }
  }

  .edit-form {
    div {
      display: flex;
      // align-items: center;
      height: 40px;
      line-height: 40px;
    }

    /deep/ .el-input__inner,
    /deep/ .el-input {
      width: 400px;
      height: 40px;
    }
  }

  .btn-box {
    margin-top: 30px;
    display: flex;
    justify-content: center;

    .btn {
      width: 100px;
      height: 40px;
      line-height: 40px;
      border-radius: 3px;
      text-align: center;
      font-size: 14px;
    }

    .cancel {
      background-color: #f7f7f7;
      border: 1px solid #ddd;
      color: #36363a;
    }

    .save {
      background-color: #98b702;
      border: 1px solid #98b702;
      color: #fff;
      margin-left: 16px;
    }
  }

  .popup-title {
    color: #36363A;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    font-family: "PingFangSC-Medium";
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;

    .bind-phone {
      margin: 15px 0 40px;
    }

    /*修改el-input样式 */
    .el-input /deep/ .el-input__inner {
      width: 300px;
      border: none;
      border: 1px solid #ddd;
      font-size: 14px;
      color: #36363a;
      border-radius: 2px;
      background-color: #f7f7f7;
    }

    .pass {
      position: relative;

      .code {
        position: absolute;
        top: 0;
        right: 20px;
        font-size: 14px;
        font-family: "PingFangSC-Regular", "PingFang SC";
        font-weight: 400;
        color: #98b702;
      }

      .can-click {
        color: #98b702;
      }
    }

    .graphics-code-box {
      width: 300px;

      /deep/ .el-form-item__content {
        display: flex;
      }

      /deep/ .el-input,
      .graphics-code-input /deep/ .el-input__inner {
        width: 188px;
      }

      .graphics-code {
        margin-left: 10px;
      }
    }

    .login-button {
      width: 300px;
      height: 40px;
      background-color: #98b702;
      border-radius: 2px;
      border: 0;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      margin: 12px 0;
    }
  }
</style>