<template>
    <!--    <div>-->
    <van-tabbar v-model="active"
                active-color="#07c160"
                inactive-color="#000"
                route
                safe-area-inset-bottom
                @change="tabbarChange"
    >
        <template v-for="item in tabbarList">
            <van-tabbar-item
                    :name="item.name"
                    :icon="item.name==tabbarActive?item.iconActive:item.icon"
                    replace
                    :to="'/'+item.name"

            >{{item.title}}
            </van-tabbar-item>

            <!--            <van-tabbar-item :name="item.name">-->
            <!--                <span>{{item.title}}</span>-->
            <!--                <template #icon="props">-->
            <!--                    <img :src="props.active ? item.active : item.inactive"/>-->
            <!--                </template>-->
            <!--            </van-tabbar-item>-->
        </template>
    </van-tabbar>
    <!--    </div>-->
</template>

<script>
    export default {
        name: "tabbar",
        props: ['tabbarActive'],
        data() {
            return {
                tabbarList: [
                    {
                        title: 'Home',
                        name: 'home',
                        icon: 'wap-home-o',
                        iconActive: 'wap-home',
                        active: 'https://img.yzcdn.cn/vant/user-active.png',
                        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
                    }, {
                        title: 'TimeZone',
                        name: 'timeZone',
                        icon: 'clock-o',
                        iconActive: 'clock',
                        active: 'https://img.yzcdn.cn/vant/user-active.png',
                        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
                    }, {
                        title: 'Daydream',
                        name: 'daydream',
                        icon: "friends-o",
                        iconActive: 'friends',
                        active: 'https://img.yzcdn.cn/vant/user-active.png',
                        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
                    }, {
                        title: 'Me',
                        name: 'me',
                        icon: 'like-o',
                        iconActive: 'like',
                        active: 'https://img.yzcdn.cn/vant/user-active.png',
                        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
                    },
                ]
            }
        },
        computed: {
            active: {
                get() {
                    return this.tabbarActive
                },
                set() {

                }
            }
        },
        methods: {
            tabbarChange(index) {

            }
        },
    }
</script>

<style scoped>

</style>