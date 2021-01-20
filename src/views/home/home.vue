<template>
    <div>
        HOME
        <Tabbar :tabbarActive="tabbarActive"></Tabbar>
    </div>
</template>

<script>
    import Tabbar from '../tabbar/tabbar'

    export default {
        name: "home",
        components:{
            Tabbar
        },
        data(){
            return{
                tabbarActive:'home'
            }
        },
    }
</script>

<style scoped>

</style>