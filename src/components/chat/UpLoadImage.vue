<template>
  <label for="uploadImage" @click="clickFile">
    <!-- <van-icon name="photo-o" size="20" color="rgba(0, 0, 0, 0.65)" /> -->
    <span class="img-icon"></span>
    <input type="file" class="hide" ref="imgDom" @change="pictureChange" />
  </label>
</template>

<script>
import WebIM from "assets/js/WebIM";
import Config from "assets/js/uploadimg";

import { mapActions } from "vuex";
export default {
  data() {
    return {
      image: null
    };
  },
  methods: {
    ...mapActions(["sendImgMessage"]),
    // TODO 当前username、及type不是从pams里取
    pictureChange(e) {
      console.log(this.type)
      let isRoom = this.type == "chatroom" || this.type == "groupchat";
      let file = WebIM.utils.getFileUrl(e.target);
      if (!file.filename) {
        this.$refs.imgDom.value = null;
        return false;
      }
      // if (!Config.imgType[file.filetype.toLowerCase()]) {
      //   this.$refs.imgDom.value = null;
      //   this.$message.error("不支持此类型文件");
      //   return;
      // }

      let obj = {
        chatType: this.type,
        chatId: this.chatId, //TODO 这里在群里面应该取的是ID，后期跟进
        file: file,
        roomType: isRoom,
        callback: () => {
          this.$refs.imgDom.value = null;
        }
      };
      this.sendImgMessage(obj);
    },
    clickFile() {
      let img = this.$refs.imgDom;
      img && img.click();
    },
    
  },
  props: [
    "type", // 聊天类型 contact, group, chatroom
    "chatId" // 选中的聊天对象
  ]
};
</script>
<style scoped>
.hide {
  position: absolute;
  top: 0;
  right: 0;
  min-width: 100%;
  min-height: 100%;
  filter: alpha(opacity=0);
  opacity: 0;
  cursor: inherit;
  display: none;
}
.img-icon{
  width: 22px;
  height: 22px;
  display: inline-block;
  background-image: url(~assets/image/icon.png);
  background-position: -757px -89px;


}
</style>
