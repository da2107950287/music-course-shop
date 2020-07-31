<template>
  <div class="profile">
    <div class="profile-top">
      <h3>基本资料</h3>
      <span>编辑</span>
    </div>
    <div class="profile-bottom">
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

    <el-dialog
      :visible.sync="dialogVisible1"
      width="340px"
      :before-close="handleClose1"
      center
    >
    <div slot="title" class="popup-title">扫描二维码绑定微信</div>
      <img src="../assets/image/img_qr.png" alt />
    </el-dialog>
      <el-dialog
      :visible.sync="dialogVisible2"
      width="340px"
      :before-close="handleClose2"
      center
    >
    <div slot="title" class="popup-title">绑定、更换手机号</div>
      <img src="../assets/image/img_qr.png" alt />
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible1:false,
      dialogVisible2:false,
      form: {},
    };
  },
  methods:{
    changeImg() {
    },
    // 绑定微信
    bindWeChat() {
      this.dialogVisible1=true
    },
    
    handleClose1(){
      this.dialogVisible1=false
    },
    modifyPhone(){
      this.dialogVisible2=true;
    },
    handleClose2(){
      this.dialogVisible2=false;
    }
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
  div {
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
.popup-title{
  color: #36363A;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
}
</style>