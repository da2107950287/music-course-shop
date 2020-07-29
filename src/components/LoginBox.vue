<template>
    <div class="login-box">
        <div class="left">
            <div class="logo">芥末</div>
            <div class="title">芥末音乐</div>
        </div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="名称">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
          </el-form>
    </div>
</template>
<style scoped>
    .login-box {
        width: 480px;
        height: 471px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 10;
        display: flex;
        background: #fff;
        border-radius: 3px;

    }
    .left {
        display: flex;
        align-items: center;
        margin: 55px auto;
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
        /* margin-left: 360px; */
    }

    .title {
        width: 96px;
        height: 25px;
        font-size: 24px;
        font-family: "华文琥珀";
        color: rgba(152, 183, 2, 1);
        line-height: 25px;
        margin-left: 10px;
    }
</style>