<template>
  <div class="news">
    <profile-header>
      <div slot="title">我的消息</div>
    </profile-header>
    <div class="table">
      <div class="table-header flex">
        <img src="../assets/image/icon_check_normal.png" class="select-icon" />
        <div class="btn read">已读</div>
        <img src="../assets/image/bnt_sc.png" class="btn delete" />
      </div>
      <div v-for="(item,index) in arr" :key="index">
        <div class="table-body flex">
          <img v-if="item.checked==0" src="../assets/image/icon_check_normal.png" class="select-icon"/>
          <img v-else src="../assets/image/icon_check_sel.png" class="select-icon" />
          <div class="flex td">
            <img src="../assets/image/icon_jyxx.png" />
            <div class="td-right">
              <div class="flex">
                <span v-if="item.type==0" class="tip">交易消息</span>
                <span v-else class="tip">系统通知</span>
                <span>{{item.time}}</span>
              </div>
              <div>{{item.message}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProfileHeader from "../components/ProfileHeader.vue";
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
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
  created() {
    this.arr.forEach((ele, index) => {
      this.$set(ele, "checked", 0);
    });
    console.log(this.arr);
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
  },
  components: {
    ProfileHeader,
  },
};
</script>
<style lang="scss" scoped>
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
  }
  .read {
    margin-left: 60px;
    color: #6a6a6f;
    box-sizing: border-box;
    border: 1px solid #bbb;
    background-color: #fff;
  }
  .delete {
    margin-left: 30px;
  }
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