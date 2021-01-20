<template>
    <div class="safeCode">
        <van-nav-bar
                title=""
                left-text="健康通行码"
                left-arrow
                @click-left="onClickLeft"
        >
            <template #right>
                <!--                <van-icon name="search" size="18" />-->
                这里可以增加插槽 这个挺好哦
            </template>
        </van-nav-bar>
    </div>
</template>

<script>
    export default {
        name: "safeCode",
        methods: {
            onClickLeft() {

            }
        }
    }
</script>

<style lang="scss">
    .safeCode {
        .van-icon-arrow-left {
            color: black;
        }

        .van-nav-bar__text {
            color: black;
        }
    }
</style>