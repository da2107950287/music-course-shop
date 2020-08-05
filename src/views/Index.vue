<template>
    <div>
        <top-header></top-header>
        <!-- <keep-alive> -->
            <router-view />
        <!-- </keep-alive> -->
        <bottom-footer></bottom-footer>
    </div>
</template>
<script>
    import TopHeader from "../components/TopHeader.vue";
    import BottomFooter from "../components/BottomFooter.vue"
    export default {
        components: {
            TopHeader,
            BottomFooter
        }
    }
</script>