<template>
    <div>
        daydream
        <Tabbar :tabbarActive="tabbarActive"></Tabbar>
    </div>
</template>

<script>
    import Tabbar from '../tabbar/tabbar'

    export default {
        name: "daydream",
        components: {
            Tabbar,
        },
        data(){
            return{
                tabbarActive:'daydream'
            }
        },
    }
</script>

<style scoped>

</style>