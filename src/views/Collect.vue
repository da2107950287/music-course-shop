<template>
    <div class="collect">
        <profile-header>
            <div slot="title">我的收藏</div>
        </profile-header>
        <div class="collect-bottom" :style="{'margin-bottom':total<=pageSize?'30px':''}">
            <course-item v-for="(item,index) in list" :key="index" :list="item.courseEntity" @click.native="seeDetail(item.couId)">
                <img slot="img" :src="item.courseEntity.cover">
                <div slot="collect" class="iscollected" ></div>
              
                <div slot="last" class="btn">
                    <span>会员价：&yen;</span>
                    <span class="price">{{item.courseEntity.pricevip}}</span>
                </div>
            </course-item>
        </div>
        <el-pagination v-if="total>pageSize" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize"
            background layout="prev, pager, next" :total="total" class="pagination">
        </el-pagination>
    </div>
</template>
<script>
    import ProfileHeader from "components/ProfileHeader.vue";
    import CourseItem from "components/CourseItem.vue"
    export default {
      
        data() {
            return {
                currentPage: 1,//当前页码
                pageSize: 10,
                total: 0,
                list: [],
            }
        },
        created() {
            this.getData()
        },
        methods: {
            getData() {
                this.$post('/course/getCourseColl', { PageNumber: this.currentPage, PageSize: this.pageSize }).then(res => {
                    if (res.code == 200) {
                        this.list = res.data.list;
                        this.total = res.data.PageCount * this.pageSize;
                    }
                })
            },
            handleCurrentChange(currentPage) {
                this.currentPage = currentPage;
                this.getData()
            },
            seeDetail(couId){
                console.log(9999)
                this.$router.push({path:'/index/detail',query:{couId}})
            }
        },
        components: {
            ProfileHeader,
            CourseItem
        }
    }
</script>
<style lang="scss" scoped>
    @import "~assets/css/pagination.css";

    .collect {
        width: 950px;
    }

    .collect-bottom {
        padding: 0 30px;
        box-sizing: border-box;
        background-color: #fff;

        >div {
            border-bottom: 1px solid #EEEEEE
        }
    }
    .iscollected{
        width: 20px;
        height: 20px;
        background-image: url(~assets/image/icon.png);
                background-position: -470px -90px;
    }
    .btn {
        font-size: 18px;
        color: #36363A;
        line-height: 25px;
        font-family:"PingFangSC-Regular","PingFang SC";
        font-weight: 400;

        .price {
            font-size: 32px;
            
        }
    }
</style>