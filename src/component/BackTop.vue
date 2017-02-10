<template>
    <transition name="back-top">
        <a v-if="show" class="back-top" @click="backTop"><i class="chevron up icon"></i></a>
    </transition>
</template>

<script>
    export default {
        name: 'v-back-top',
        data(){
            return {
                show: false
            }
        },
        methods: {
            backTop(){
                $(document.body).animate({
                    scrollTop: '0px'
                }, 400, 'linear')
            }
        },
        mounted() {
            $(window).scroll(() => {
                console.log($(window).scrollTop())
                this.show = $(window).scrollTop() > 200
            })
        }
    }
</script>


<style lang="stylus">
    .back-top {
        font-size: 30px;
        position: fixed;
        bottom: 50px;
        right: 40px;
        top: auto;
        cursor: pointer;
        z-index: 999;
        color: rgba(0, 0, 0, 0.6);
    }

    .back-top:hover {
        color: rgba(0, 0, 0, 0.8);
        transition: all 0.5s ease;
    }

    .back-top-enter-active, .back-top-leave-active {
        transition: opacity .5s
    }

    .back-top-enter, .back-top-leave-active {
        opacity: 0
    }
</style>