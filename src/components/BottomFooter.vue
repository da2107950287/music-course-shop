<template>
    <div class="footer-box">
        <div class="footer">
            <div class="left">
                <span>关于我们</span>
                <div class="common"></div>
                <span>用户协议</span>
                <div class="common"></div>
                <span @click="dispalyQrCode">微信公众号</span>
            </div>
            <div class="right">
                <span>芥末音乐教育有限公司 版权所有</span>
                <span>ICP备 5467983486351337865号-1</span>
            </div>
        </div>
        <div class="bg-qr" v-if="isShow">
            <img src="../assets/image/qr.png" alt="">
        </div>
       
    </div>
</template>
<script>
    export default{
        data(){
            return{
                isShow:false
            }
        },
        methods:{
            dispalyQrCode(){
                this.isShow=!this.isShow;
            }
        }
    }
</script>
<style scoped>
    .footer-box{
    width: 100%;
    background-color: #36363A;

    }
    .footer {
        /* width: 100%; */
        width: 1200px;
        height: 100px;
        
        display: flex;
        justify-content: space-between;
        margin-left: auto;
        margin-right: auto;
        background-color: #36363A;

 
    }

    .left,.right {
        display: flex;
        align-items: center;
        color: #9899A1;
    }

    .common{
        width: 1px;
        height: 10px;
        background: rgba(152, 153, 161, 1);
        margin:0 15px;
    }
    .right>:nth-child(1){
        margin-right: 20px;
    }
    .bg-qr{
        width: 120px;
        height: 120px;
        position: absolute;
        left: 508px;
        top: -66px;
        background-image: url(../assets/image/bg_wxgzh.png);
        background-size: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .bg-qr>img{
        width: 80px;
        height: 80px;
     
    }
</style>