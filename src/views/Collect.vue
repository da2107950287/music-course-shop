<template>
    <div class="collect">
        <profile-header>
            <div slot="title">我的收藏</div>
            
        </profile-header>
        <div class="collect-bottom">
            <course-item>
                <img slot="img" src="../assets/image/img_kc_01.png" alt="">
                <img slot="collect" src="../assets/image/icon_kcxq_sc_sel.png" alt="">
                <div slot="last" class="btn">
                    <span>会员价：&yen;</span>
                    <span class="price">299.00</span>
                </div>
            </course-item>
        </div>
    </div>
</template>
<script>
    import ProfileHeader from "../components/ProfileHeader.vue";
    import CourseItem from "../components/CourseItem.vue"
    export default {
        data() {
            return {

            }
        },
        created(){
            this.$post('/course/getCourseColl').then(res=>{
                console.log(res)
            })
        },
        components: {
            ProfileHeader,
            CourseItem
        }
    }
</script>
<style lang="scss" scoped>
    .collect{
        width: 950px;
    }
    .collect-bottom {
        padding: 0 30px;
        box-sizing: border-box;
        background-color: #fff;
    }

    .btn {
      font-size: 18px;
      color: #36363A;
      line-height: 25px;
      .price{
          font-size: 32px;
      }
    }
</style>