<template>
  <div>
    <div class="messagebox">
      <div class="title">
        <img src="../../assets/image/pho_kf.png" class="avator">
        <div class="nickname">芥末——刘老师</div>
        <div class="close" @click="hideChat"></div>
      </div>
      <div class="messagebox-content" ref="msgContent">
        <div v-for="(item,i) in msgList" :key="i" class="msg-box" :style="{'float':item.bySelf ? 'right':'left'}">
          <div :style="{'text-align':item.bySelf ? 'right':'left'}" class="nickname">{{item.from}}</div>
          <!-- 图片消息 -->
          <img :key="item.msg" :src="item.msg?item.msg:''" v-if="item.type === 'img'" class="img-style" />
          <!-- 聊天消息 -->
          <div style="user-select: text" v-else v-html="renderTxt(item.msg)" :class="{ 'byself': item.bySelf}"
            class="text"></div>
        </div>
      </div>
      <div class="messagebox-footer">
        <div class="footer-icon">
          <!-- 表情组件 -->
          <ChatEmoji class="chatemoji" @selectEmoji="selectEmoji" :inpMessage="message" />
          <!-- 上传图片组件 -->
          <UpLoadImage :type="chatType" :chatId="chatId" />
        </div>
        <div class="fotter-send">
          <el-input v-model="message" equired placeholder="消息" class="sengTxt" ref="txtDom">
            <div slot="suffix" class="send" @click="onSendTextMsg">发送</div>
          </el-input>
        </div>
      </div>
      <div @click="login123">123登录</div>
      <div @click="login456">456登录</div>
      <div @click="joinChatRoom">加入聊天室</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
  import ChatEmoji from "components/chat/ChatEmoji";
  import emoji from "assets/js/emoji";
  import UpLoadImage from "components/chat/UpLoadImage";
  import { mapActions, mapGetters } from "vuex";

  export default {
    data() {
      return {
        chatId: "123976401616898",
        chatType: "chatroom",
        roomId: "123976401616898", //聊天室id
        activedKey: {
          contact: "",
          group: "",
          chatroom: "",
        },
        message: "",
        isHttps: window.location.protocol === "https:",
        loadText: "加载更多",
        status: {
          sending: "发送中",
          sent: "已发送",
          read: "已读",
        },
        nowIsVideo: false,
        imgUrl: null,
        type: null,
      };
    },
    created() { },
    beforeMount() { },
    updated() {
      this.scollBottom();
    },
    computed: {
      ...mapGetters({
        contact: "onGetContactUserList",
        group: "onGetGroupUserList",
        chatroom: "onGetChatroomUserList",
        msgList: "onGetCurrentChatObjMsg",
      }),
    },
    methods: {
      ...mapActions([
        "onGetContactUserList",
        "onGetGroupUserList",
        "onGetChatroomUserList",
        "onGetCurrentChatObjMsg",
        "onSendText",
        "onCallVideo",
        "onCallVoice",
        "getGroupMembers",
        "getHistoryMessage",
        "onAddBlack",
        "onDelteFirend",
        "onGetGroupinfo",
        "recallMessage",
        "onGetGroupBlack",
        "onLogin",
        "onJoinChatRoom",
      ]),
      hideChat() {
        this.$emit("hideChat")
      },
      //加入聊天室
      joinChatRoom() {
        WebIM.conn.joinChatRoom({
          roomId: this.roomId, // 聊天室id
          success: function () {
            console.log("加入聊天室成功");
            console.log(888);
            console.log(this.$store.state, this.$store.state);

            // this.getHistoryMessage({ name: this.chatId, isGroup: true });
            this.$forceUpdate();
            if (!this.msgList) {
              setTimeout(() => {
                this.$forceUpdate();
              }, 100);
            }
          },
        });
      },
      login123() {
        this.onLogin({
          username: "123",
          password: "123",
        });
      },
      login456() {
        this.onLogin({
          username: "456",
          password: "456",
        });
      },

      loadMoreMsgs() {
        const me = this;
        const success = function (msgs) {
          if (msgs.length === 0) {
            me.loadText = "已无更多数据";
          }
        };
        let name = "";
        let isGroup = false;
        if (this.type === "contact") {
          name = this.activedKey[this.type].name;
        } else if (this.type === "group") {
          name = this.activedKey[this.type].groupid;
          isGroup = true;
        } else if (this.type === "chatroom") {
          name = this.activedKey[this.type].id;
          isGroup = true;
        }
        this.getHistoryMessage({
          name,
          isGroup,
          success,
        });
      },
      //发送文本消息
      onSendTextMsg() {
        if (this.message == "" || this.message == "\n") {
          this.message = "";
          return;
        }
        this.onSendText({
          chatType: this.chatType,
          chatId: this.chatId,
          message: this.message,
        });
        this.message = "";
      },
      //选择表情包
      selectEmoji(v) {
        this.message = v;
        this.$refs.txtDom.focus();
      },
      getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
        var dataURL = canvas.toDataURL("image/" + ext);
        return dataURL;
      },

      customEmoji(value) {
        this.imgUrl = `../../../static/faces/${value}`
        console.log(this.imgUrl)
        var image = new Image();
        image.src = this.imgUrl;
        image.onload = function () {
          var base64 = this.getBase64Image(image);
          console.log(base64);
        }
        return `<img src='../../../static/faces/${value}' style="width:20px"/>`;
      },

      renderTxt(txt = "") {
        let rnTxt = [];
        let match = null;
        const regex = /(\[.*?\])/g;
        let start = 0;
        let index = 0;
        while ((match = regex.exec(txt))) {
          index = match.index;
          if (index > start) {
            rnTxt.push(txt.substring(start, index));
          }
          if (match[1] in emoji.obj) {
            const v = emoji.obj[match[1]];
            rnTxt.push(this.customEmoji(v));
          } else {
            rnTxt.push(match[1]);
          }
          start = index + match[1].length;
        }
        rnTxt.push(txt.substring(start, txt.length));
        return rnTxt.toString().replace(/,/g, "");
      },
      scollBottom() {
        setTimeout(() => {
          const dom = this.$refs.msgContent;
          if (!dom) return;
          dom.scrollTop = dom.scrollHeight;
        }, 0);
      },
      closeGroupMessage() {
        //退出群组或解散群组时关闭聊天框
        this.activedKey["group"] = "";
      },
      closeContactMessage() {
        //删除好友时关闭当前聊天框
        this.activedKey["contact"] = "";
      },

    },
    components: {
      ChatEmoji,
      UpLoadImage,
    },
  };
</script>
<style lang="scss" scoped>
  .updateMsgList {
    height: 250px;
  }

  .messagebox-content {
    width: 100%;
    height: calc(100% - 250px);
    top: 50px;
    background: #fff;
    overflow-y: scroll;
    scrollbar-width: none; // firefox下滚动条不显示
    -ms-overflow-style: none; // IE下滚动条不显示

    //设置侧边栏滚动条不显示 chrome
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .messagebox {
    width: 400px;
    height: 600px;
    background-color: #fff;

    .title {
      height: 80px;
      position: relative;
      display: flex;
      text-align: center;
      align-items: center;
      background-color: #98b702;
      color: #fff;
      font-family: "PingFangSC-Medium", "PingFang SC";
      font-weight: 500;

      .avator {
        width: 50px;
        height: 50px;
        margin-left: 30px;
      }

      .nickname {
        margin-left: 10px;
      }

      .close {
        width: 16px;
        height: 16px;
        position: absolute;
        top: 10px;
        right: 10px;
        background-image: url(~assets/image/icon.png);
        // background-size: 100%;
        background-position: -835px -195px;
      }
    }

    .msg-box {
      margin: 15px 15px 0;
      font-size: 14px;
      box-sizing: border-box;
      clear: both;
      word-break: break-all;

      .nickname {
        color: #9899a1;
      }

      .text {
        padding: 10px;
        margin-top: 10px;
        background-color: rgba(187, 187, 187, 0.2);
        color: #6a6a6f;
        line-height: 23px;
        border-radius: 4px;
      }

      .byself {
        background: #98b702;
        color: #fff;
        float: right;
      }
    }

    .messagebox-footer {
      height: 97px;
      margin-top: 10px;
      box-shadow: 0px 0px 6px 0px rgba(54, 54, 58, 0.1);

      .footer-icon {
        height: 42px;
        padding: 10px 15px;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;

        .chatemoji {
          margin-right: 10px;
        }
      }
    }

    .fotter-send {
      width: 330px;
      height: 34px;
      margin: 10px 15px;
      box-sizing: border-box;
      border-radius: 2px;

      .el-input,
      /deep/ .el-input__inner {
        height: 34px;
        background-color: #f9f9f9;
      }

      /deep/ .el-input__inner:focus,
      /deep/ .el-input__inner:hover,
      /deep/ .el-input__inner {
        border-color: #eee;
      }

      .send {
        width: 50px;
        height: 34px;
        margin-right: -4px;
        line-height: 34px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        background-color: #98b702;
        border-radius: 0px 4px 4px 0px;
        cursor: default;
      }
    }
  }
</style>