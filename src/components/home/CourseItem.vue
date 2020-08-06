<template>
    <div class="course-box">
        <div class="course-item" @click="showCourse(course.couType)">
            <!-- <div>{{course}}</div> -->
            <div class="title">{{course.couTypeName}}</div>
            <div class="content">
                <div class="course-name">{{course.couName}}</div>
                <div class="common">
                    <img src="../../assets/image/icon_zks.png" class="img-icon">
                    <span>总 课 时：</span>
                    <span>{{course.totalHours}}</span>
                </div>
                <div class="blank"></div>
                <div class="common">
                    <img src="../../assets/image/icon_yxq.png" class="img-icon">
                    <span>有 效 期：</span>
                    <span>{{course.termOfValidity}}</span>
                </div>
                <div class="blank"></div>
                <div class="common">
                    <img src="../../assets/image/icon_skls.png" class="img-icon">
                    <span>授课老师：</span>
                    <span>{{course.lecturer}}</span>
                </div>
            </div>
            <div class="bottom">
                <div class="left" v-if="course.teachingMethods==1">
                    <img src="../../assets/image/icon_zb.png" alt="" class="img-icon">
                    <div class="live-lesson">直播课</div>
                </div>
                <div class="left" v-else></div>
                <div class="right">
                    <img src="../../assets/image/icon_vip.png">
                    <div class="money">
                        <span>&yen;</span>
                        <span>{{course.pricevip}}</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        props: {
            course: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {

            }
        },
        created() {
            console.log(this.course)
        },
        methods: {
            showCourse(couType) {
                this.$router.push({ path: '/index/detail', query: { couId: this.course.couId,couType } })
            }
        }
    }
</script>
<style scoped>
    .course-box {
        width: 384px;
        height: 306px;
        box-sizing: border-box;
        margin-top: 45px;
        background-color: #fff;
        border: 1px solid rgba(238, 238, 238, 1);

    }

    .course-item {
        position: relative;
        background: #fff;
        border-radius: 3px;
        padding: 30px 20px 15px;
        box-sizing: border-box;



    }

    .course-box:hover {
        -webkit-box-shadow: 0 4px 12px rgba(152, 183, 2, 0.2);
        box-shadow: 0 4px 12px rgba(152, 183, 2, 0.2);
        -webkit-transform: translate3d(0, -2px, 0);
        transform: translate3d(0, -2px, 0);
        cursor: pointer;
    }

    .title {
        width: 90px;
        height: 30px;
        position: absolute;
        top: -15px;
        left: 148px;
        color: #FFFFFF;
        line-height: 30px;
        background: #98B702;
        border-radius: 15px;
        text-align: center;
    }

    .content {
        padding: 20px;
        box-sizing: border-box;
        background-color: #F7F7F7;
        color: #9899A1;
        font-size: 16px;
        /* text-align: left; */
        display: block;


    }


    .course-name {
        margin-bottom: 20px;
        line-height: 36px;
        color: #36363A;
        font-size: 22px;
        font-weight: 500;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

    }

    .img-icon {
        width: 16px;
        height: 16px;
        margin-right: 3px;
    }

    .common {
        display: flex;
        align-items: center;
        line-height: 22px;
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

    .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
    }

    .left,
    .right {
        display: flex;
        align-items: center;

    }

    .live-lesson {
        color: #FB9715;
        font-weight: 400;

    }

    .right>img {
        width: 32px;
        height: 18px;
    }

    .money {
        color: #36363A;
        font-weight: 600px;
    }

    .money>span:nth-child(1) {
        font-size: 20px;
    }

    .money>span:nth-child(2) {
        font-size: 32px;
    }
</style>