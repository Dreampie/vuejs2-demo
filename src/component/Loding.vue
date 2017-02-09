<template>
    <div v-show="show" class="ui top attached red progress" data-value="10" data-total="100">
        <div class="bar"></div>
    </div>
</template>

<script>
    export default {
        name: 'v-loading',
        data(){
            return {
                show: false
            }
        },
        methods: {
            start(){
                this.show = true
                const progress = $(this.$el)
                const progressInterval = window.setInterval(() => {
                    if (progress.progress('get value') < 85) {
                        progress.progress('increment')
                    } else {
                        window.clearInterval(progressInterval)
                    }
                }, 10)
            },
            complete(){
                console.log('complete')
                const progress = $(this.$el)
                window.setTimeout(() => {
                    progress.progress('increment')
                }, 10)

//                this.show = false
//                progress.progress('reset')
            }
        },
        mounted () {
            this.$bus.$on('v-loading:start', this.start)
            this.$bus.$on('v-loading:complete', this.complete)
        }
    }
</script>