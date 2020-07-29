<template>
    <div class="top-detail">
        <div class="left">
            <img src="../../assets/image/img_kcxq.png" alt="">
        </div>
        <div class="right">
            <div class="title">
                <span>大提琴乐曲《赛马》提升课——琴艺技能提升</span>
                <img src="../../assets/image/icon_kcxq_sc_def.png">
            </div>
            <div class="price">
                <div class="member-price">
                    <span>会员价：￥</span>
                    <span>299.00</span>
                </div>
                <div class="orgin-price">
                    原价：￥322.00
                </div>
            </div>
            <div>
                <div class="common">
                    <img src="../../assets/image/icon_zks.png" class="img-icon">
                    <span>总 课 时：</span>
                    <span>23.0</span>
                </div>
                <div class="blank"></div>
                <div class="common">
                    <img src="../../assets/image/icon_yxq.png" class="img-icon">
                    <span>有 效 期：</span>
                    <span>长期有效</span>
                </div>
                <div class="blank"></div>
                <div class=" common">
                    <img src="../../assets/image/icon_skls.png" class="img-icon">
                    <span>授课老师：</span>
                    <span>李萌萌</span>
                </div>
            </div>
            <div class="btn-box">
                <button>立即购买</button>
                <button>免费试听</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>
<style scoped>
    .top-detail {
        height: 440px;
        display: flex;
        padding: 30px;
        box-sizing: border-box;
        background-color: #fff;
    }

    .left>img {
        width: 580px;
        height: 380px;
    }

    .right {
        margin-left: 20px;
    }

    .title {
        font-size: 22px;
        color: #36363A;
    }

    .title>img {
        width: 20px;
        height: 20px;
        margin-left: 52px;
    }

    .price {
        height: 70px;
        display: flex;
        align-items: center;
        margin: 35px 0 20px ;
        background: rgba(251, 151, 21, 0.15);
        /* opacity: 0.15; */
    }

    .member-price {
        color: #36363A;
    }

    .member-price>span:nth-child(1) {
        font-size: 18px;
    }

    .member-price>span:nth-child(2) {
        font-size: 32px;
    }

    .orgin-price {
       margin-left: 20px;
        font-size: 14px;
        color: #9899A1;
        text-decoration: line-through;

    }


    .img-icon {
        width: 16px;
        height: 16px;
        margin-right: 3px;
    }

    .common {
        text-align: left;
    }

    .common>span:nth-child(2) {
        color: #9899A1;
    }

    .common>span:nth-child(3) {
        color: #6A6A6F;
    }

    .blank {
        width: 1px;
        height: 20px;
        background-color: #ccc;
        margin-left: 8px;
    }
    .btn-box{
        margin-top: 58px;
    }
    .btn-box>button {
        width: 200px;
        height: 55px;
        border-radius: 3px;
        font-size: 18px;

        font-weight: 400;
        border: none;
    }
    .btn-box>button:nth-child(1){
        background-color: #98B702;
        color: #fff;
        
    }
    .btn-box>button:nth-child(2){
        margin-left: 20px;
        background:rgba(251,151,21,0.1);
        color: #FB9715;
        border:1px solid #FB9715;

    }
</style>