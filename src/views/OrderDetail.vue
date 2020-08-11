<template>
    <div>
        <div class="order-detail">
            <profile-header>
                <div slot="status">支付状态：</div>
                <div slot="title" v-show="detail.olState==1">待支付</div>
                <div slot="title" v-show="detail.olState==5">已完成</div>
                <div slot="title" v-show="detail.olState==6">已取消</div>
                <div slot="dec" v-show="detail.olState==1">请在{{countTime}}内完成支付，超时订单将被自动取消哦〜</div>
            </profile-header>
            <good-info :courses="detail.orderlistCourse" :olState="detail.olState" ></good-info>
            <order-info :detail="detail"></order-info>
        </div>
    </div>
</template>
<script>
    import ProfileHeader from 'components/ProfileHeader.vue'
    import GoodInfo from 'components/orderdetail/GoodInfo.vue'
    import OrderInfo from 'components/orderdetail/OrderInfo.vue'
    export default {
        data() {
            return {
                olId: '',
                detail: {},
                countTime: ''
            }
        },
        created() {
            this.olId = this.$route.query.olId
            this.$post('/orderlist/showOrderlist', { olId: this.olId }).then(res => {
                if (res.code == 200) {
                    this.detail = res.data;
                    if (this.detail.olState == 1) {
                        //待支付倒计时
                        setInterval(() => {
                            var date = new Date();
                            var now = date.getTime();
                            let olData = new Date(this.detail.olTime.replace(/-/g, '/'))
                            let olTime = olData.getTime()
                            let end = olTime + 30 * 1000 * 60;
                            let leftTime = end - now;
                            if (leftTime >= 0) {
                                let m = Math.floor(leftTime / 1000 / 60 % 60);
                                let s = Math.floor(leftTime / 1000 % 60);
                                this.countTime = m + "分" + s + "秒"
                            }
                        }, 1000);
                    }

                }
            })
        },
        components: {
            ProfileHeader,
            GoodInfo,
            OrderInfo
        }
    }
</script>
<style lang="scss" scoped>
    .order-detail {
        width: 1200px;
        margin: 0 auto 30px;
    }
</style>