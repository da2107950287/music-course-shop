<template>
    <div class="submit-order">
        <shipping-address @editAddress="showForm" :addressInfo="addressInfo">
            <div slot="right">
                <div class="title-left">
                    <img src="~assets/image/icon_xgdz.png" alt="">
                    <span v-if="addressInfo">修改地址</span>
                    <span v-else>添加地址</span>
                </div>
            </div>
        </shipping-address>
        <course-info :detail="detail"></course-info>
        <pay-order :totalPrice="totalPrice" @pay="pay"></pay-order>
        <edit-address :isShowForm="isShow" :aa="aa" @hideForm="hideForm" :addressInfo="addressInfo"></edit-address>
    </div>
</template>
<script>
    import ShippingAddress from 'components/submitorder/ShippingAddress.vue'
    import CourseInfo from 'components/submitorder/CourseInfo.vue'
    import PayOrder from 'components/submitorder/PayOrder.vue'
    import EditAddress from 'components/submitorder/EditAddress.vue'
    export default {
        data() {
            return {
                couId: '',
                detail: {},
                isVip: 0,
                integral: 0,
                pricevip: null,
                price: null,
                couName: "",
                isShow: false,//是否显示编辑地址框
                addressInfo: {},
                aa: {}
            }
        },
        computed: {
            totalPrice() {
                if (this.vip == 0) {
                    return this.price
                } else {
                    return this.pricevip
                }
            }
        },
        created() {
            this.couId = this.$route.query.couId;
            //获取地址
            this.$post("/address/getAddress", {}).then(res => {
                if (res.code == 200) {
                    let data = res.data;
                    data.forEach((item, index) => {
                        if (item.state == 1) {
                            this.addressInfo = item;
                        }
                    })
                }
            })
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
                console.log(this.addressInfo)
                this.$router.push({
                    path: '/index/scanPay', query: {
                        totalPrice: this.totalPrice,
                        couId: this.couId,
                        integral: this.integral,
                        payMethod,
                        couName: this.couName,
                        fullname: this.addressInfo.fullname,
                        address:this.addressInfo.addressinfo+ this.addressInfo.detailed,
                        mobile: this.addressInfo.mobile
                    }
                });
            },
            showForm() {
                this.isShow = true;
            },
            hideForm() {
                this.isShow = false;
            }
        },
        components: {
            ShippingAddress,
            CourseInfo,
            PayOrder,
            EditAddress
        }
    }
</script>
<style scoped>
    .submit-order {
        width: 1200px;
        margin: 0 auto;
    }
</style>