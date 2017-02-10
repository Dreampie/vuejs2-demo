<template>
    <div class="ui menu">
        <router-link class="ui item" to="/" exact>
            <img src="../asset/logo.png">
        </router-link>
        <router-link v-for="menu in menus.left" class="ui item" :to="{path:menu.url}" exact>
            {{menu.name}}
        </router-link>
        <div class="right menu">
            <router-link v-for="menu in menus.right" class="ui item" :to="{path:menu.url}" exact>
                {{menu.name}}
            </router-link>
            <a v-if="!session.id" class="ui item" @click="login">
                您好, 请&nbsp;<span style="color: #912d2b">登录!</span>
            </a>
            <a v-if="session.id" class="ui item" @click="deleteSession">
                欢迎, {{session.realname}}&nbsp;<span style="color: #912d2b">退出!</span>
            </a>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import properties from '../../application.json'

    export default {
        name: 'v-menu',
        props: ['session'],
        data(){
            return {
                menus: {
                    left: [
                        {name: '用户', url: '/users'}
                    ],
                    right: []
                }
            }
        },
        methods: {
            login(){
                window.location.href = properties[process.env.NODE_ENV].ssoUrl
            },
            ...mapActions([
                'deleteSession'
            ])
        },
        mounted() {
            $(this.$el).find('.dropdown').dropdown()
        }
    }
</script>

<style lang="stylus">
    .menu {
        border-radius: 0rem !important;
    }
</style>