<template>
    <div class="content">
        <div class="course-name">{{list.couName}}</div>
        <div class="course-time common">
            <img src="../assets/image/icon_zks.png" class="img-icon">
            <span>总 课 时：</span>
            <span>{{list.totalHours}}</span>
        </div>
        <div class="blank"></div>
        <div class="period-of-validity common">
            <img src="../assets/image/icon_yxq.png" class="img-icon">
            <span>有 效 期：</span>
            <span>{{list.termOfValidity}}</span>
        </div>
        <div class="blank"></div>
        <div class="teacher-name common">
            <img src="../assets/image/icon_skls.png" class="img-icon">
            <span>授课老师：</span>
            <span>{{list.lecturer}}</span>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            list:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>
<style scoped>
     .content {
        padding: 0 20px;
        /* background-color: #F7F7F7; */
        color: #9899A1;
        font-size: 16px;
        /* text-align: left; */

    }

    .course-name {
        margin-bottom: 16px;
        line-height: 36px;
        color: #36363A;
        font-size: 22px;
        font-weight: 500;
        
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
</style>