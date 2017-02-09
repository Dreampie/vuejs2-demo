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
                console.log("start")
                this.show = true
                const progress = $(this.$el).find('.progress')

                this.progressInterval = window.setInterval(() => {
                    if (progress.progress('get value') < 85) {
                        const increment = Math.floor((Math.random() * 10) + 1)
                        progress.progress('increment(' + increment + ')');
                    }
                }, 10);
            },
            complete(){
                console.log("complete")
                const progress = $(this.$el).find('.progress')
                window.clearInterval(this.progressInterval)
                progress.progress('complete')
                this.show = false
                progress.progress('reset')
            }
        },
        mounted () {
            this.$bus.$on('v-loading:start', this.start)
            this.$bus.$on('v-loading:complete', this.complete)
        }
    }
</script>