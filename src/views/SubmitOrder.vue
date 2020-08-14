<template>
    <div class="submit-order">
        <course-info :detail="detail"></course-info>
        <pay-order :totalPrice="totalPrice" @pay="pay"></pay-order>
    </div>
</template>
<script>
    import CourseInfo from 'components/submitorder/CourseInfo.vue'
    import PayOrder from 'components/submitorder/PayOrder.vue'
    export default {
        data() {
            return {
                couId: '',
                detail: {},
                isVip: 0,
                integral: 0,
                pricevip: null,
                price: null,
                couName: ""
                
            }
        },
        computed:{
            totalPrice(){
                if(this.vip==0){
                    return this.price
                }else{
                    return this.pricevip
                }
            }
        },
        created() {
            this.couId = this.$route.query.couId;

            // 获取用户相关信息
            this.$post('/userinfo/showUserinfo', {}).then(res => {
                if (res.code == 200) {
                    this.vip = res.data.userinfo.vip;
                    this.integral = res.data.userinfo.integral;
                    this.$set(this.detail, "vip", this.vip);
                    this.$set(this.detail, "integral", this.integral)
                    //获取课程相关信息
                    this.$post('/course/showCourse', { couId: this.couId }).then(res => {
                        if (res.code == 200) {
                            this.$set(this.detail, "couName", res.data.couName);
                            this.$set(this.detail, "lecturer", res.data.lecturer);
                            this.$set(this.detail, "totalHours", res.data.totalHours);
                            this.$set(this.detail, "pricevip", res.data.pricevip);
                            this.$set(this.detail, "price", res.data.price);
                            this.couName = res.data.couName;
                            this.pricevip = res.data.pricevip;
                            this.price = res.data.price
                        }
                    })
                }
            })
        },
        methods: {
            pay(payMethod) {
                this.$router.push({ path: '/index/scanPay', query: { totalPrice: this.totalPrice, couId: this.couId, integral: this.integral, payMethod, couName: this.couName } });
            }
        },
        components: {
            CourseInfo,
            PayOrder
        }
    }
</script>
<style scoped>
    .submit-order {
        width: 1200px;
        margin: 0 auto;
    }
</style>