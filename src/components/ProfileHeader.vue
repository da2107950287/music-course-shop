<template>
    <div class="profile-header">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<style scoped>
    .profile-header {
        width: 950px;
        height: 70px;
        padding: 0 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
    }

    .right {
        color: #FB9715;
        font-size: 20px;
        font-family: "PingFangSC-Regular", "PingFang SC";
        font-weight: 400;
    }
</style>