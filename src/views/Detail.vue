<template>
<div>
    <div class="main-detail">
        <top-detail></top-detail>
        <course-detail class="margin30"></course-detail>
    </div>

</div>
</template>
<script>
    import TopDetail from '../components/detail/TopDetail'
    import CourseDetail from '../components/detail/CourseDetail'
    export default{
        data(){
            return{

            }
        },
        components:{
            TopDetail,
            CourseDetail
    }
    }
</script>
<style scoped>
    .main-detail{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #F7F7F7;
    }
    .margin30{
        margin-top: 30px;
    }
</style>