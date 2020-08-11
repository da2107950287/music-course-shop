<template>
    <div>
        <div class="main-detail">
            <top-detail :topDetail="topDetail" @collectCourse="collectCourse" @buy="buy" :collected="collected"></top-detail>
            <course-detail :couresDetail="couresDetail" :catalogue="catalogue" class="margin30"></course-detail>
        </div>

    </div>
</template>
<script>
    
    import TopDetail from 'components/detail/TopDetail'
    import CourseDetail from 'components/detail/CourseDetail'
    export default {
        inject:['reload'],
        data() {
            return {
                couId: '',
                couType:'',
                couresDetail: {},
                topDetail: {},
                catalogue:[],
                collected:false
            }
        },
        created() {
            this.couId = this.$route.query.couId
            //获取课程详情
            this.$post('/course/showCourse', { couId: this.couId }).then(res => {
                if (res.code == 200) {
                    this.couresDetail = res.data;
                
                    this.couType=res.data.couType;
                    this.topDetail = {
                        cover: res.data.cover,
                        couName: res.data.couName,
                        courseCollState: res.data.courseCollState,
                        priceVip: res.data.pricevip,
                        price: res.data.price,
                        totalHours: res.data.totalHours,
                        termOfValidity: res.data.termOfValidity,
                        lecturer: res.data.lecturer
                    }
                }
            })
            // 获取课程目录
            this.$post('/course/getCatalogue',{couId: this.couId}).then(res=>{
                if(res.code==200){
                    this.catalogue=res.data;
                }
            })
        },
        methods:{
            //收藏课程
            collectCourse(){
                this.$post('/course/setCourseColl',{couId: this.couId}).then(res=>{
                    if(res.code==200){
                        this.collected=true;
                        this.reload()
                        this.$message.success(res.msg)
                    }
                })
            },
            //立即购买
            buy(){
                this.$router.push({path:'/index/submitOrder',query:{couType:this.couType,couId:this.couId}})
            }
        },
        components: {
            TopDetail,
            CourseDetail
        }
    }
</script>
<style scoped>
    .main-detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #F7F7F7;
    }

    .margin30 {
        margin-top: 30px;
    }
</style>