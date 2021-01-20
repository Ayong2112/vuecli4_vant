<template>
    <div>
        <van-button type="info" @click="toSafe">把入口放这吧</van-button>
        <Tabbar :tabbarActive="tabbarActive"></Tabbar>
    </div>
</template>

<script>
    import Tabbar from '../tabbar/tabbar'

    export default {
        name: "me",
        components: {
            Tabbar,
        },
        data() {
            return {
                tabbarActive: 'me'
            }
        },
        methods: {
            toSafe() {
                this.$router.push('safeCode')
            },
        }
    }
</script>

<style scoped>

</style>