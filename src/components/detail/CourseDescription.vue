<template>
    <div class="course-desc">
        <div class="title">课程参数</div>
    </div>
</template>
<script>
   
export default{
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.title{
    height: 52px;
    width:1140px;
    line-height: 52px;
    background-color: #f7f7f7;
    text-align: left;
}
.title::before{
    content: "";
    display: inline-block;
    width:4px;
height:12px;
background-color: #98B702;
margin-right: 20px;
}
</style>