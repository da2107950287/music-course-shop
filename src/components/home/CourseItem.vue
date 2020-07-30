<template>
    <div class="course-box">
        <div class="course-item">
            <div class="title">钢琴</div>
            <div class="content">
                <div class="course-name">小提琴</div>
                <div class="course-time common">
                    <img src="../../assets/image/icon_zks.png" class="img-icon">
                    <span>总 课 时：</span>
                    <span>23.0</span>
                </div>
                <div class="blank"></div>
                <div class="period-of-validity common">
                    <img src="../../assets/image/icon_yxq.png" class="img-icon">
                    <span>有 效 期：</span>
                    <span>长期有效</span>
                </div>
                <div class="blank"></div>
                <div class="teacher-name common">
                    <img src="../../assets/image/icon_skls.png" class="img-icon">
                    <span>授课老师：</span>
                    <span>李萌萌</span>
                </div>
            </div>
            <div class="bottom">
                <div class="left">
                    <img src="../../assets/image/icon_zb.png" alt="" class="img-icon">
                    <div class="live-lesson">直播课</div>
                </div>
                <div class="right">
                    <img src="../../assets/image/icon_vip.png">
                    <div class="money">
                        <span>￥</span>
                        <span>199.00</span>
                    </div>
                </div>
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
    .course-box {
        width: 408px;
        height: 330px;
        box-sizing: border-box;
        /* background-image: url(../../assets/image/bg_jxkc_hover.png); */
        margin: 30px 0;
    }

    .course-item {
        position: relative;

        background: #fff;
       
        border-radius: 3px;
        border: 1px solid rgba(238, 238, 238, 1);
        padding: 30px 20px 15px;


    }

    .title {

        width: 90px;
        height: 30px;
        line-height: 30px;
        position: absolute;
        top: -15px;
        left: 148px;
        color: #FFFFFF;
        background: #98B702;
        border-radius: 15px;
        text-align: center;
    }

    .content {
        padding: 20px;
        background-color: #F7F7F7;
        color: #9899A1;
        font-size: 16px;
        /* text-align: left; */

    }

    .course-name {
        font-size: 20px;
        color: #36363A;
        font-weight: 500;
        margin-bottom: 20px;
    }

    .img-icon {
        width: 16px;
        height: 16px;
        margin-right: 3px;
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
    .bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
    }
    .left,.right{
        display: flex;
        align-items: center;
      
    }
    .live-lesson{
        color: #FB9715;
        font-weight: 400;
       
    }
    
    .right>img{
        width: 32px;
        height: 18px;
    }
    .money{
        color: #36363A;
        font-weight: 600px;
    }
    .money>span:nth-child(1){
        font-size: 20px;
    }
    .money>span:nth-child(2){
        font-size: 32px;
    }
</style>