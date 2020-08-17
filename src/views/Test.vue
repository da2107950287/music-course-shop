<template>
  <div>
    <div class="messagebox">
      <div class="title">聊天区</div>
      <div class="msg-box">
        <div class="nickname">芥末老师</div>
        <div class="text">同学您好，我是您的专属课程顾问刘老师，同学想要了解什么课程呢~有任何疑问都可以向我咨询，也可以添加我的QQ：217278243，有问题随时咨询哦~</div>
      </div>
      <div class="msg-box">
        <div class="nickname">芥末老师</div>
        <div class="text">同学您好，我是您的专属课程顾问刘老师，同学想要了解什么课程呢~有任何疑问都可以向我咨询，也可以添加我的QQ：217278243，有问题随时咨询哦~</div>
      </div>
      <div class="messagebox-content" ref="msgContent">
        <!-- <div class="moreMsgs" @click="loadMoreMsgs">{{loadText}}</div> -->
        <div
          v-for="(item,i) in msgList"
          :key="i"
          class="message-group"
          :style="{'float':item.bySelf ? 'right':'left'}"
        >
          <h4 style="text-align: left;margin:0">{{item.from}}</h4>
          <!-- 撤回消息 -->
          <div v-if="item.status == 'recall'" class="recallMsg">{{item.msg}}</div>
          <div v-if="item.status == 'recall'" class="recallMsg">{{renderTime(item.time)}}</div>
          <!-- 撤回消息 end -->
          <!-- <a-dropdown
            v-else
            :trigger="['contextmenu']"
            :style="{'float':item.bySelf ? 'right':'left'}"
            :disabled="!item.bySelf"
          > -->
            <!-- <span style="user-select: none"> -->
              <!-- <el-dropdown v-else @command="handleCommand(item)" trigger="click" :style="{'float':item.bySelf ? 'right':'left'}">
              <span class="el-dropdown-link">-->
              <!-- 图片消息 -->
              <img
                :key="item.msg"
                :src="item.msg?item.msg:''"
                v-if="item.type === 'img'"
                class="img-style"
              />
              
              <!-- 聊天消息 -->
              <p
                style="user-select: text"
                v-else
                v-html="renderTxt(item.msg)"
                :class="{ 'byself': item.bySelf}"
              />

              <!-- <div v-if="item.bySelf?true:false" class="status">{{status[item.status]}}</div> -->
            <!-- </span> -->
            <!-- <el-dropdown-menu slot="dropdown" >
              <el-dropdown-item command="a" :disabled="!item.bySelf">撤回</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>-->
<!-- 
            <a-menu slot="overlay">
              <a-menu-item key="1" @click="handleCommand(item)">撤回</a-menu-item>
            </a-menu>
          </a-dropdown> -->

          <!-- 聊天时间 -->
          <div
            v-if="item.status !== 'recall'"
            class="time-style"
            :style="{'text-align':item.bySelf ? 'right':'left'}"
          >{{renderTime(item.time)}} {{item.bySelf?status[item.status]:''}}</div>
        </div>
      </div>
      <div class="messagebox-footer">
        <div class="footer-icon">
          <!-- 表情组件 -->
          <ChatEmoji class="chatemoji" v-on:selectEmoji="selectEmoji" :inpMessage="message" />
          <!-- 上传图片组件 -->
          <UpLoadImage :type="this.type" :chatId="activedKey[type]" />
        </div>
        <div class="fotter-send">
          <el-input
            v-model="message"
            equired
            placeholder="消息"
            class="sengTxt"
            ref="txtDom"
          >
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

<script>
import ChatEmoji from "components/test/ChatEmoji";
import emoji from "assets/js/emoji";
import UpLoadImage from "components/test/UpLoadImage";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
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
    };
  },
  created(){
    //登录
    // this.onLogin({
    //   username:"123",
    //   password:"123"
    // })
  },
  beforeMount() {
    this.onGetChatroomUserList();
  },
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
    userList() {
      return {
        contact: this.contact,
        group: this.group,
        chatroom: this.chatroom,
      };
    },
    selectedKeys() {
      return [this.getKey(this.activedKey[this.type]) || ""];
    },
  },
  props: [
    "type", // 聊天类型 contact, group, chatroom
    "username", // 选中的聊天对象
    "broken", // 是否适应移动端
    "showUserList",
    "hideUserList",
  ],
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
      "onJoinChatRoom"
    ]),
    joinChatRoom(){
this.onJoinChatRoom({
  roomId:"123976401616898"
})
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
    getKey(item, type) {
      let key = "";
      switch (type) {
        case "contact":
          key = item.name;
          break;
        case "group":
          key = item.groupid;
          break;
        case "chatroom":
          key = item.id;
          break;
        default:
          break;
      }
      return key;
    },
    getCurrentMsg(props) {
      this.onGetCurrentChatObjMsg({
        type: "chatroom",
        id: "123976401616898",
      });
    },
    select(key) {
      this.activedKey[this.type] = key;
      const me = this;
      me.loadText = "加载更多";
      // if( me.roomId){
      //     WebIM.conn.quitChatRoom({
      //         roomId: me.roomId // 聊天室id
      //     });
      //     me.roomId = ''
      //   }

      if (this.type === "group") {
        this.$router.push({ name: this.type, params: { id: key.groupid } });
        this.onGetCurrentChatObjMsg({ type: this.type, id: key.groupid });

        setTimeout(() => {
          Vue.$store.commit("updateMessageStatus", {
            action: "oneUserReadMsgs",
            readUser: key.groupid,
          });
          this.$forceUpdate();
        }, 100);

        if (!this.msgList) {
          this.getHistoryMessage({ name: key.groupid, isGroup: true });
        }
      } else if (this.type === "contact") {
        this.$router.push({ name: this.type, params: { id: key.name } });
        this.onGetCurrentChatObjMsg({ type: this.type, id: key.name });
        setTimeout(() => {
          Vue.$store.commit("updateMessageStatus", {
            action: "oneUserReadMsgs",
            readUser: key.name,
          });
          this.$forceUpdate();
        }, 100);

        if (!this.msgList) {
          this.getHistoryMessage({ name: key.name, isGroup: false });
        }
      } else if (this.type === "chatroom") {
        const me = this;
        // me.roomId = key.id

        this.$router.push({ name: this.type, params: { id: key.id } });
        this.onGetCurrentChatObjMsg({ type: this.type, id: key.id });

        WebIM.conn.joinChatRoom({
          roomId: key.id, // 聊天室id
          success: function () {
            // console.log("加入聊天室成功");
            if (!me.msgList) {
              me.getHistoryMessage({ name: key.id, isGroup: true });
              setTimeout(() => {
                me.$forceUpdate();
              }, 100);
            }
          },
        });
      }
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

    changeMenus() {
      if (this.type === "contact") {
      } else if (this.type === "group") {
        this.$refs.groupInfoModel.chengeInfoModel();
        this.getGroupInfo();
      }
    },
    menuClick(i) {
      this.changeMenus();
      switch (i) {
        case "1":
          // console.log("加入黑名单");
          this.onAddBlack({
            userId: this.activedKey[this.type],
          });
          this.activedKey.contact = "";
          this.$router.push({
            // 核心语句
            path: "/contact", // 跳转的路径
          });
          break;
        case "2":
          this.onDelteFirend({
            userId: this.activedKey[this.type],
            callback: () => {
              this.closeContactMessage();
            },
          });
          break;
        default:
          break;
      }
    },
    getGroupInfo() {
      this.onGetGroupinfo({
        select_id: this.activedKey[this.type].groupid,
      });
    },
    onSendTextMsg() {
      if (this.message == "" || this.message == "\n") {
        this.message = "";
        return;
      }
      this.onSendText({
        chatType: "chatroom",
        chatId: "123976401616898",
        message: this.message,
      });
      this.message = "";
    },

    selectEmoji(v) {
      this.message = v;
      this.$refs.txtDom.focus();
    },

    customEmoji(value) {
      return `<img src="../../../static/faces/${value}" style="width:20px"/>`;
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

    callVideo() {
      if (this.type == "contact") {
        this.$refs.emediaModal.showEmediaModal();
        this.$refs.emediaModal.showCallerWait(this.activedKey[this.type].name);
        const videoSetting = JSON.parse(localStorage.getItem("videoSetting"));
        const recMerge = (videoSetting && videoSetting.recMerge) || false;
        const rec = (videoSetting && videoSetting.rec) || false;
        this.onCallVideo({
          chatType: this.type,
          to: this.activedKey[this.type].name,
          rec,
          recMerge,
        });
      } else if (this.type == "group") {
        this.getGroupMembers(this.activedKey[this.type].groupid);
        this.$refs.addAvMembertModal.show();
      }
    },
    callVoice() {
      this.$refs.emediaModal.showEmediaModal();
      this.$refs.emediaModal.showCallerWait(this.activedKey[this.type].name);
      const videoSetting = JSON.parse(localStorage.getItem("videoSetting"));
      const recMerge = (videoSetting && videoSetting.recMerge) || false;
      const rec = (videoSetting && videoSetting.rec) || false;
      this.onCallVoice({
        chatType: this.type,
        to: this.activedKey[this.type].name,
        rec,
        recMerge,
      });
    },
    readablizeBytes(value) {
      let s = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
      let e = Math.floor(Math.log(value) / Math.log(1024));
      return (value / Math.pow(1024, Math.floor(e))).toFixed(2) + " " + s[e];
    },

    // TODO 可以抽离到utils
    renderTime(time) {
      console.log(time)
      // const nowStr = new Date();
      // const localStr = time ? new Date(time) : nowStr;
      // // const localMoment = moment(localStr);
      // // const localFormat = localMoment.format("MM-DD hh:mm A");
      // // return localFormat;
    },
    getLastMsg(item) {
      const { name, params } = this.$route;
      const chatList = this.$store.state.chat.msgList[name];
      let userId = "";
      if (name == "contact") {
        userId = item.name;
      } else if (name == "group") {
        userId = item.groupid;
      } else {
        userId = item.id;
      }
      const currentMsgs = chatList[userId] || [];
      const lastMsg = currentMsgs.length
        ? currentMsgs[currentMsgs.length - 1].msg
        : "";
      const msgTime = currentMsgs.length
        ? this.renderTime(currentMsgs[currentMsgs.length - 1].time)
        : "";
      return { lastMsg, msgTime };
    },
    scollBottom() {
      setTimeout(() => {
        const dom = this.$refs.msgContent;
        if (!dom) return;
        dom.scrollTop = dom.scrollHeight;
      }, 0);
    },
    handleCommand(item) {
      let name = "";
      if (this.type === "contact") {
        name = this.activedKey[this.type].name;
      } else if (this.type === "group") {
        name = this.activedKey[this.type].groupid;
      } else if (this.type === "chatroom") {
        name = this.activedKey[this.type].id;
      }
      this.recallMessage({ to: name, message: item });
    },
    closeGroupMessage() {
      //退出群组或解散群组时关闭聊天框
      this.activedKey["group"] = "";
    },
    closeContactMessage() {
      //删除好友时关闭当前聊天框
      this.activedKey["contact"] = "";
    },
    changeIsVideoState(v) {
      v ? (this.nowIsVideo = true) : (this.nowIsVideo = false);
    },
  },
  components: {
    // EmediaModal,
    // AddAVMemberModal,
    ChatEmoji,
    UpLoadImage,
    // UpLoadFile,
    // MultiAVModal,
    // GetGroupInfo,
    // RecordAudio
  },
};
</script>
<style lang="scss" scoped>
.messagebox {
  width: 360px;
  height: 675px;
  background-color: #fff;

  .title {
    height: 48px;
    line-height: 48px;
    text-align: center;
    background-color: #98b702;
    color: #fff;
    font-family: "PingFangSC-Medium", "PingFang SC";
    font-weight: 500;
  }
  .msg-box {
    margin: 20px 15px 0;
     font-size: 14px;

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