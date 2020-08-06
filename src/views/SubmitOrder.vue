<template>
    <div class="submit-order">
        <course-info :detail="detail"></course-info>
        <pay-order :totalPrice="totalPrice"></pay-order>
    </div>
</template>
<script>
    import CourseInfo from '../components/submitorder/CourseInfo.vue'
    import PayOrder from '../components/submitorder/PayOrder.vue'
    export default{
        data(){
            return{
                couId:'',
                detail:{},
                isVip:0,
                integral:0,
                pricevip:null,
                price:null

            }
        },
        computed:{
            totalPrice(){
                if(this.vip==0){
                    return this.pricevip;
                }else{
                    return this.price;
                }
            }
        },
        created(){
            this.couId=this.$route.query.couId;
            //获取课程相关信息
            this.$post('/course/showCourse',{couId:this.couId}).then(res=>{
                if(res.code==200){
                    console.log(res.data.price)
                    this.detail={
                        couName:res.data.couName,
                        lecturer:res.data.lecturer,
                        totalHours:res.data.totalHours,
                        pricevip:res.data.pricevip,
                        price:res.data.price
                    };
                    this.pricevip=res.data.pricevip;
                    this.price=res.data.price
                }
            })
            // 获取用户相关信息
            this.$post('/userinfo/showUserinfo',{}).then(res=>{
                if(res.code==200){
                    this.vip=res.data.userinfo.vip;
                    this.integral=res.data.userinfo.integral;
                    this.$set(this.detail,"vip",this.vip);
                    this.$set(this.detail,"integral",this.integral)
                }
            })
            this.$post('/wx/buyCourse',{couId:this.couId,integral:500,type:1}).then(res=>{
                console.log(res)
            })
        },
        components:{
            CourseInfo,
            PayOrder
        }
    }
</script>
<style scoped>
    .submit-order{
        width: 1200px;
        margin: 0 auto;
    }
</style>