<template>
  <div class="news">
    <profile-header>
      <div slot="title">我的消息</div>
    </profile-header>
    <div class="table">
      <div class="table-header flex">
        <div @click="handleCheckedAll">
          <img v-if="!checkedAll" src="../assets/image/icon_check_normal.png" class="select-icon" />
          <img v-else src="../assets/image/icon_check_sel.png" class="select-icon" />
        </div>

        <div @click="readMsg" class="btn read">已读</div>
        <img @click="deleteMsg" src="../assets/image/bnt_sc.png" class="btn delete" />
      </div>
      <div v-for="(item,index) in arr" :key="index" class="list">
        <div class="table-body flex">
          <div @click="item.checked=!item.checked">
            <img v-if="item.checked==false" src="../assets/image/icon_check_normal.png" class="select-icon" />
            <img v-else src="../assets/image/icon_check_sel.png" class="select-icon" />
          </div>

          <div class="flex td">
            <img src="../assets/image/icon_jyxx.png" />
            <div class="td-right">
              <div class="flex">
                <!-- <span v-if="item.type==0" class="tip">交易消息</span>
                <span v-else class="tip">系统通知</span> -->
                <span>{{item.msgTitle}}</span>
                <span>{{item.msgTime}}</span>
              </div>
              <div>{{item.content}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" background
      layout="prev, pager, next" :total="total" class="pagination">
    </el-pagination>
  </div>
</template>
<script>
  import ProfileHeader from "../components/ProfileHeader.vue";
  export default {
    data() {
      return {
        checked: [],

        currentPage: 1,
        pageSize: 1,
        total: 0,
        arr: [
          {
            id: 0,
            type: 0,
            message:
              "您成功购买“大提琴乐曲《赛马》提升课——琴艺技能提升课”请查看详细信息。",
            time: "2020-1010 12:00",
          },
          {
            id: 1,
            type: 1,
            message:
              "您成功购买“大提琴乐曲《赛马》提升课——琴艺技能提升课”请查看详细信息。",
            time: "2020-1010 12:00",
          },

        ],
      };
    },
    computed: {
      checkedAll() {
        if (this.arr.length == 0) {
          return false;
        }
        return !this.arr.some(item => {
          return item.checked === false;
        })
      }
    },
    created() {
      this.$post("/other/getMessage", { PageNumber: this.currentPage, PageSize: this.pageSize }).then(res => {
        if (res.code == 200) {
          this.arr = res.data.list;
          this.total = res.data.PageCount
          this.arr.forEach((ele, index) => {
            this.$set(ele, "checked", false);
          });
        }
      })

    },
    methods: {
      handleCheckedAll() {
        let isCheckedAll = this.arr.some(item => {
          return item.checked === false;
        })
        if (isCheckedAll) {

          this.arr.forEach(item => {
            item.checked = true
          })
        } else {
          this.arr.forEach(item => {
            item.checked = false
          })
        }
      },
      // 获取已读消息
      readMsg() {
        this.$post('/other/getMessage', { PageNumber: this.pageNumber, PageSize: this.pageSize }).then(res => {
          if (res.code == 200) {
            this.arr = res.data.list;
            
            this.arr.forEach((ele, index) => {
              this.$set(ele, "checked", false);
            });
          }
        })
      },
      deleteMsg() {
        this.arr = this.arr.filter(item => {
          item.checked == false;
        })


      }
    },
    components: {
      ProfileHeader,
    },
  };
</script>
<style lang="scss" scoped>
  @import "../assets/css/pagination.css";
  .flex {
    display: flex;
  }

  .news {
    width: 950px;
  }

  .table {
    padding: 30px 30px 0;
    margin-top: 10px;
    background-color: #fff;

    .select-icon {
      width: 16px;
      height: 16px;
    }
  }

  .table-header {
    padding: 0 30px;
    align-items: center;
    height: 70px;
    background-color: #f7f7f7;

    .btn {
      width: 60px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      border-radius: 2px;
      cursor: default;
    }

    .read {
      margin-left: 60px;
      color: #6a6a6f;
      font-size: 14px;
      box-sizing: border-box;
      border: 1px solid #bbb;
      background-color: #fff;
    }

    .delete {
      margin-left: 30px;
    }
  }

  .list {
    border-bottom: 1px solid #eee;
  }

  .table-body {
    height: 108px;
    width: 100%;
    padding-left: 30px;
    box-sizing: border-box;
    align-items: center;
    color: #9899a1;

    .td {
      width: 100%;
      margin-left: 60px;
      font-size: 14px;
      line-height: 24px;

      img {
        width: 48px;
        height: 48px;
        margin-right: 10px;
      }

      .td-right {
        width: 100%;

        div {
          justify-content: space-between;

          .tip {
            color: #36363a;
            font-weight: 500;
          }
        }
      }
    }
  }


</style>