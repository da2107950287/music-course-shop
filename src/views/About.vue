<template>
  <div class="about">
    <div class="mian-about">
      <div class="title">关于我们</div>
      <div class="blank"></div>
      <div class="content" v-html="text">

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text: `  本《隐私政策》适用于我们提供的一切**服务。当您使用我们任何单项服务时，您同意接受本《隐私政策》以及我们在该单项服务中发出的特定隐私信息类政策条款（下列称“特定条款”）的保护，在此情况下特定条款与本政策条款同时对您产生效力。例如：使用音乐在线服务的用户，同时适用本《隐私政策》以及《网络在线用户隐私权保护和个人信息利用政策》（见附件一）；又如，使用**支付的用户，同时适用本《隐私政策》以及《**支付隐私政策》（见附件二）。如特定条款与本《隐私政策》条款存在同类条款的不一致约定，则在特定条款约束范围内应以特定条款为准。如我们提供的某一单项服务不适用本《隐私政策》的，该服务中会以适当方式明示排除适用本《隐私政策》。 请注意我们不时地会检查我们的政策，因此有关的措施会随之变化。我们恳请您定期光顾本页面，以确保对我们《隐私政策》最新版本始终保持了解。在阅读完本政策之后，如您对本《隐私政策》或与本《隐私政策》相关的事宜有任何问题； 
      目录 
      一、我们可能收集的信息 
      二、我们如何收集和使用信息 
      三、我们可能分享、转让和披露的信息 四、我们如何保留、储存和保护信息
       
      五、如何管理您的信息 
       六、第三方服务 
       七、年龄限制
        八、通知和修订 
        九、如何联系我们
        `
      }
    }
  }
</script>
<style scoped>
  .about {
    padding: 0 360px;

  }

  .mian-about {
    padding: 30px;
    background-color: #fff;
  }

  .title {
    line-height: 28px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: #36363A;
    font-family: "PingFangSC-Regular", "PingFang SC";


  }

  .blank {
    margin: 30px 0;
    width: 1140px;
    height: 1px;
    background-color: #EEE;
  }

  .content {
    width: 1140px;
    height: 668px;
    font-size: 14px;
    font-family: "PingFangSC-Regular", "PingFang SC";
    font-weight: 400;
    color: rgba(54, 54, 58, 1);
    line-height: 28px;
  }
</style>