<template>
    <div>
        <div class="order-detail">
            <profile-header>
                <div slot="status">支付状态：</div>
                <div slot="title">待支付</div>
                <div slot="dec">请在29分29秒内完成支付，超时订单将被自动取消哦〜</div>
            </profile-header>
            <good-info></good-info>
            <order-info></order-info>
        </div>
    </div>
</template>
<script>
    import ProfileHeader from '../components/ProfileHeader.vue'
    import GoodInfo from '../components/orderdetail/GoodInfo.vue'
    import OrderInfo from '../components/orderdetail/OrderInfo.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            ProfileHeader,
            GoodInfo,
            OrderInfo
        }
    }
</script>
<style lang="scss" scoped>
    .order-detail{
        width: 1200px;
        margin: 0 auto;
    }
</style>