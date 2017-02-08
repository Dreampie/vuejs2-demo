<template>
    <h1>
        {{welcome}}
    </h1>
</template>

<script>
    export default {
        name: 'index-view',
        data () {
            return {
                welcome: "欢迎访问Vue系统！"
            }
        }
    }
</script>