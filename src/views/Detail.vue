<template>
<div>
    <div class="main-detail">
        <top-detail></top-detail>
        <course-detail></course-detail>
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
        padding: 0 360px;
        background-color: #F7F7F7;
    }
</style>