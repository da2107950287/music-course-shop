<template>
    <div class="top-detail">
        <div class="left">
            <img v-lazy="topDetail.cover" alt="">
        </div>
        <div class="right">
            <div class="title">
                <span>{{topDetail.couName}}</span>
                <img src="~assets/image/icon_kcxq_sc_def.png" v-if="topDetail.courseCollState==0 || collected" @click="collectCourse">
                <img src="~assets/image/icon_kcxq_sc_sel.png" v-else>
            </div>
            <div class="price">
                <div class="member-price">
                    <span>会员价：&yen;</span>
                    <span>{{topDetail.priceVip}}</span>
                </div>
                <div class="orgin-price">
                    原价：&yen;{{topDetail.price}}
                </div>
            </div>
            <div>
                <div class="common">
                    <img src="~assets/image/icon_zks.png" class="img-icon">
                    <span>总 课 时：</span>
                    <span>{{topDetail.totalHours}}</span>
                </div>
                <div class="blank"></div>
                <div class="common">
                    <img src="~assets/image/icon_yxq.png" class="img-icon">
                    <span>有 效 期：</span>
                    <span>{{topDetail.termOfValidity}}月</span>
                </div>
                <div class="blank"></div>
                <div class=" common">
                    <img src="~assets/image/icon_skls.png" class="img-icon">
                    <span>授课老师：</span>
                    <span>{{topDetail.lecturer}}</span>
                </div>
            </div>
            <div class="btn-box">
                <div @click="buy">立即购买</div>
                <div>免费试听</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        
        props:{
            topDetail:{
                type:Object,
                default(){
                    return {}
                }
            },
            collected:{
                type:Boolean,
                default(){
                    return false
                }
            }
        },
        data() {
            return {

            }
        },
        methods:{
            collectCourse(){
                this.$emit('collectCourse');
            },
            buy(){
                this.$emit("buy");
            }
        }
    }
</script>
<style scoped>
    .top-detail {
        height: 440px;
        width: 1200px;
        padding: 30px;
        display: flex;
        box-sizing: border-box;
        background-color: #fff;
    }
    .left{
    }
    .left>img {
        width: 580px;
        height: 380px;
    }

    .right {
        margin-left: 20px;
        width: 538px;

    }

    .title {
        display: flex;
        justify-content: space-between;
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
        padding-left: 20px;
        /* opacity: 0.15; */
    }

    .member-price {
        color: #36363A;
        display: flex;
        align-items: center;
        
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
        display: flex;
    }
    .btn-box>div {
        width: 200px;
        height: 55px;
        line-height: 55px;
        text-align: center;
        border-radius: 3px;
        font-size: 18px;
        font-weight: 400;
        border: none;
        cursor: default;
    }
    .btn-box>div:nth-child(1){
        background-color: #98B702;
        color: #fff;
        
    }
    .btn-box>div:nth-child(2){
        margin-left: 20px;
        background:rgba(251,151,21,0.1);
        color: #FB9715;
        border:1px solid #FB9715;

    }
</style>