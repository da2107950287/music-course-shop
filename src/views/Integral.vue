<template>
  <div>
    <profile-header>
      <h3 slot="title">我的积分</h3>
      <div slot="right">当前积分：9277</div>
    </profile-header>
    <div class="integral-bottom">
      <div class="table">
        <ul class="table-header">
          <li>积分来源/用途</li>
          <li>积分变化</li>
          <li>日期</li>
        </ul>
        <ol class="table-body">
          <li>购买二胡曲《赛马》提升课-琴艺技能提升课</li>
          <li>+3000</li>
          <li>2020-10-10 12:00</li>
        </ol>
      </div>
    </div>
    <el-pagination background layout="prev, pager, next" :total="10"></el-pagination>
  </div>
</template>
<script>
import ProfileHeader from "../components/ProfileHeader.vue";
export default {
  data() {
    return {};
  },
  components: {
    ProfileHeader,
  },
};
</script>
<style lang="scss" scoped>
ul,
ol,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.integral-bottom {
  width: 950px;
  margin-top: 10px;
  padding: 30px;
  box-sizing: border-box;

  background-color: #fff;
}
.table {
  border: 1px solid #eee;
}
.table-header {
  display: flex;
  height: 50px;
  line-height: 50px;
  background-color: #f7f7f7;
  li {
    font-weight: 500;
  }
}

.table-body {
  display: flex;
  line-height: 80px;
  li:nth-child(1) {
    text-align: left;
    margin-left: 30px;
  }
}
.table-header,
.table-body {
  li {
    width: 25%;
    font-size: 14px;
    color: #36363a;
    text-align: center;
  }
  li:nth-child(1) {
    width: 50%;
  }
}
</style>