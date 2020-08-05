<template>
    <div class="collect">
        <profile-header>
            <div slot="title">我的收藏</div>
        </profile-header>
        <div class="collect-bottom">
            <course-item v-for="(item,index) in list" :key="index" :list="item.courseEntity">
                <img slot="img" :src="item.courseEntity.cover">
                <img slot="collect" src="../assets/image/icon_kcxq_sc_sel.png" alt="">
                <div slot="last" class="btn">
                    <span>会员价：&yen;</span>
                    <span class="price">{{item.courseEntity.pricevip}}</span>
                </div>
            </course-item>

        </div>
        <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize"
            background layout="prev, pager, next" :total="total" class="pagination">
        </el-pagination>
    </div>
</template>
<script>
    import ProfileHeader from "../components/ProfileHeader.vue";
    import CourseItem from "../components/CourseItem.vue"
    export default {
        data() {
            return {
                currentPage: 1,
                pageSize: 5,
                total: null,
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
                        this.total = res.data.list.length;
                    }
                })
            },
            handleCurrentChange(currentPage) {
                this.currentPage = currentPage;
                this.getData()
                console.log(this.currentPage)
            }
        },
        components: {
            ProfileHeader,
            CourseItem
        }
    }
</script>
<style lang="scss" scoped>
    .collect {
        width: 950px;
    }

    .collect-bottom {
        padding: 0 30px;
        box-sizing: border-box;
        background-color: #fff;
        >div{
            border-bottom:1px solid #EEEEEE
        }
    }

    .btn {
        font-size: 18px;
        color: #36363A;
        line-height: 25px;

        .price {
            font-size: 32px;
        }
    }

    .pagination {
        margin-top: 30px;
        margin-bottom: 30px;
        text-align: center;


    }

    .is-background /deep/ .el-pager li:not(.disabled).active {
        background-color: #98B702;
    }
</style>