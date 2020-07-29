<template>
    <div class="course-detail">
        <div class="top">
            <div class="list-tab" v-for="(item,index) in lists" :key=index :class="{'active':index===currentIndex}"
                @click="handleClick(index)">{{item}}</div>
            
        </div>
        <div class="content">
            <course-description></course-description>
        </div>
    </div>
</template>
<script>
     import CourseDescription from '../detail/CourseDescription'
    export default {
        data() {
            return {
                currentIndex: 0,
                lists: ["课程介绍", "课程目录", "讲师介绍"]
            }
        },
        methods: {
            handleClick(index) {
                this.currentIndex = index
            }
        },
        components:{
            CourseDescription
        }
    }
</script>
<style scoped>
    .course-detail {
        background-color: #fff;
    }

    .top {
        display: flex;
    }

    .list-tab {
        width: 400px;
        height: 64px;
        line-height: 64px;
        background-color: #f7f7f7;
        border-top: 1px solid #ddd;
        color: #36363A;
    }

    .active {
        border-top-style: #98B702;
        color: #98B702;
        background-color: #fff;
    }
    .content{
        padding: 30px;
    }
</style>