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
                const progress = $(this.$el)
                progress.progress('reset')
                this.show = true
                const progressInterval = window.setInterval(() => {
                    if (progress.progress('get value') < 85) {
                        progress.progress('increment')
                    } else {
                        window.clearInterval(progressInterval)
                    }
                }, 500)
            },
            complete(){
                const progress = $(this.$el)
                progress.progress('complete')

                window.setTimeout(() => {
                    this.show = false
                }, 500)
            }
        },
        mounted () {
            this.$bus.$on('v-loading:start', this.start)
            this.$bus.$on('v-loading:complete', this.complete)
        }
    }
</script>