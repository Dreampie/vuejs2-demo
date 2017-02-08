<template>
    <div class="ui secondary pointing menu">
        <router-link class="item" to="/" exact>
            <img src="../asset/logo.png">
        </router-link>
        <router-link v-for="menu in menus.left" class="item" :to="{path:menu.url}" exact>
            {{menu.name}}
        </router-link>
        <div class="right menu">
            <router-link v-for="menu in menus.right" class="item" :to="{path:menu.url}" exact>
                {{menu.name}}
            </router-link>
            <a v-if="!session" class="item" @click="login">登录</a>
            <div v-if="session" class="ui dropdown item">
                {{session.realname}} <i class="dropdown icon"></i>
                <div class="menu">
                    <a class="item">设置</a>
                    <a class="item" @click="deleteSession">退出</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import properties from '../../application.json'

    export default {
        name: 'v-menu',
        props: ['session'],
        data: function () {
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