<template>
    <div class="profile-bottom">
        <div>
            <span>绑定手机：</span>
            <span>{{userinfo.account}}</span>
            <span @click="showPhoneForm">修改</span>
        </div>
        <div>
            <span>绑定微信：</span>
            <span v-if="userinfo.wx==''">未绑定</span>
            <span v-if="userinfo.wx==''" @click="bindWeChat">去绑定</span>
            <span v-else>{{userinfo.wx}}</span>
        </div>
        <div>
            <span>昵称：</span>
            <span>{{userinfo.nickname}}</span>
        </div>
        <div>
            <span>性别：</span>
            <span>{{userinfo.sex}}</span>
        </div>
        <div>
            <span>所在城市：</span>
            <span>{{userinfo.province}}{{userinfo.city}}</span>
        </div>
        <div>
            <span>简介：</span>
            <span>{{userinfo.intro}}</span>
        </div>
        <div class="personal-icon">
            <img :src="userinfo.headportrait" alt />
            <label for="inputId">
                <input style="display: none" id="inputId" ref="input" type="file"
                accept="image/gif, image/jpeg, image/jpg, image/png, image/svg" 
                @change="handleFileChange"> <img src="~assets/image/icon_xg.png" />
            </label>
            
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            userinfo: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            showPhoneForm() {
                this.$emit("showPhoneForm");
            },
            updateImg() {

            },
            bindWeChat() {
                this.$emit("bindWeChat")
            },
            handleFileChange(){
                
            }
        }
    }
</script>
<style lang="scss" scoped>
    .profile-bottom {
        width: 830px;
        height: 446px;
        padding: 0 60px;
        position: relative;
        box-sizing: border-box;
        border: 1px solid #e8e8e8;

        >div {
            margin-top: 30px;
            font-size: 16px;

            span:nth-child(1) {
                width: 80px;
                display: inline-block;
                color: #9899a1;
                cursor: default;
            }

            span:nth-child(2) {
                color: #36363a;
                margin-left: 20px;
                cursor: default;
            }

            span:nth-child(3) {
                margin-left: 10px;
                color: #98b702;
                cursor: default;
            }
        }

        .personal-icon {
            position: absolute;
            top: 40px;
            right: 60px;

            img:nth-child(1) {
                width: 100px;
                height: 100px;
            }

            img:nth-child(2) {
                position: absolute;
                bottom: 0;
                right: 8px;
            }
        }
    }
</style>