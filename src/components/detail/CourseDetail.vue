<template>
    <div class="course-detail">
        <div class="top">
            <div class="list-tab" v-for="(item,index) in lists" :key=index :class="{'active':index===currentIndex}"
                @click="handleClick(index)">{{item}}</div>
            <img src="../../assets/image/lab_kcxq_kcml.png" alt="" class="audition-icon">
        </div>
        <div class="content">
            <course-description v-show="currentIndex==0"></course-description>
            <course-catalog v-show="currentIndex==1" :catalogue="catalogue"></course-catalog>
            <teacher-intro v-show="currentIndex==2" :teacherList="teacherList"></teacher-intro>
        </div>
    </div>
</template>
<script>
    import CourseDescription from '../detail/CourseDescription'
    import CourseCatalog from '../detail/CourseCatalog'
    import TeacherIntro from '../detail/TeacherIntro'
    export default {
        props: {
            couresDetail: {
                type: Object,
                default() {
                    return {}
                }
            },
            catalogue: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                currentIndex: 0,
                lists: ["课程介绍", "课程目录", "讲师介绍"],
                teacherList: []
            }
        },
        created() {
            this.teacherList = this.couresDetail.list;
        },
        methods: {
            handleClick(index) {
                this.currentIndex = index
            }
        },
        components: {
            CourseDescription,
            TeacherIntro,
            CourseCatalog
        }
    }
</script>
<style lang="scss" scoped>
    .course-detail {
        background-color: #fff;
        width: 1200px;
    }

    .top {
        display: flex;
        position: relative;

    }

    .audition-icon {
        width: 52px;
        height: 18px;
        position: absolute;
        top: 23px;
        left: 635px;
    }

    .list-tab {
        width: 400px;
        height: 64px;
        line-height: 64px;
        text-align: center;
        background-color: #f7f7f7;
        border-top: 1px solid #ddd;
        color: #36363A;
        cursor: default;
    }

    .active {
        border-top-style: #98B702;
        color: #98B702;
        background-color: #fff;
    }
</style>