<template>
  <div class="teacher-intro">
    <div class="intro-item">
      <div class="left">
          <img src="../../assets/image/pho_js_01.png"  />
      </div>

      <div class="right">
        <h3>李萌萌</h3>
        <div>
          <span>授课内容：</span>
          <span>精品竖笛进阶课程</span>
        </div>
        <div class="intro-text">{{text}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text:
        "从事技术经济工作30年，参与完成数百项目前期报告编制、评估、规划和专题研究。2008年被国际咨询工程师联合会（FIDIC）和中国工程咨询协会联合授予“FIDIC首届中国优秀青年咨询工程师”荣誉称号，12年一线教学经验，英国伦敦国王学院教育管理硕士，西安外国语大学英语（翻译方向）学士，幽默亲和的授课风格收获无数学生的认可与支持。",
    };
  },
};
</script>
<style lang="scss" scoped>
.teacher-intro {
  padding: 0 30px 30px;
}
.intro-item {
  padding: 30px;
  margin-top: 30px;
    display: flex;
  background-color: #f7f7f7;
  .left {
    width: 177px;
    height: 210px;
    img{
        width: 177px;
        height: 210px;
    }
  }
  .right {
      width: 883px;
    margin-left: 20px;
    h3{
        color: #36363A;
    }
    div{
        color: #6A6A6F;
        font-size: 14px;
        line-height: 22px;
    }
    div.intro-text{
        margin-top: 15px;
    }
  }
}
</style>