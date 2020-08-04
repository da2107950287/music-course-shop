<template>
    <div class="course-learning">
        <div>
            <div class="top-box">
                <course-info></course-info>
                <div class=""></div>
            </div>
           
        </div>
    </div>
</template>
<script>
    import CourseInfo from '../components/CrouseInfo.vue'
    export default {
        data() {
            return {

            }
        },components:{
            CourseInfo
        }
    }
</script>
<style lang="scss" scoped>
    .course-learning {
        >div {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            background-color: #fff;
        }
    }
    .top-box{
        padding:30px;
    }
</style>