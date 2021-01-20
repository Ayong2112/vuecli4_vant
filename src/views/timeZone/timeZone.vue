<template>
    <div>
        timeZone
        <Tabbar :tabbarActive="tabbarActive"></Tabbar>
    </div>
</template>

<script>
    import Tabbar from '../tabbar/tabbar'
    export default {
        name: "timeZone",
        components:{
            Tabbar,
        },
        data(){
            return{
                tabbarActive:'timeZone'
            }
        },
    }
</script>

<style scoped>

</style>