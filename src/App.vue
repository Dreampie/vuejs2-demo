<template>
    <!--body-->
    <div class="bodyer">
        <v-loading></v-loading>
        <!--head-->
        <header class="header">
            <v-menu :session="session"></v-menu>
        </header>
        <router-view class="main"></router-view>
        <!--foot-->
        <footer class="ui footer segment">
            <div class="container">
                <div>Copyright&nbsp;©&nbsp;2017&nbsp;
                    <a :href="company.url" target="_blank">@{{company.name}}</a>.
                </div>

                <div>Base on <a :href="baseOn.url" target="_blank">{{baseOn.name}}</a> | Powered by
                    <a :href="poweredBy.url">{{poweredBy.name}}.</a>
                </div>
            </div>
        </footer>
        <v-back-top></v-back-top>
    </div>
</template>

<script>
    import './asset/semantic-ui/semantic.min.js'

    import {mapGetters, mapActions} from 'vuex'
    import Loading from './component/Loding.vue'
    import Menu from './component/Menu.vue'
    import BackTop from './component/BackTop.vue'

    export default {
        name: 'app',
        data () {
            return {
                company: {name: 'xx科技有限公司', url: 'https://www.xx.com'},
                baseOn: {name: 'Vuejs', url: 'https://github.com/vuejs'},
                poweredBy: {name: 'Dreampie', url: 'https://github.com/Dreampie'}
            }
        },
        components: {
            'v-back-top': BackTop,
            'v-loading': Loading,
            'v-menu': Menu
        },
        computed: {
            ...mapGetters([
                'session'
            ])
        },
        methods: {
            ...mapActions([])
        },
        mounted () {
            this.$store.dispatch('getSession')
        }
    }
</script>

<style lang="stylus">
    @import "./asset/semantic-ui/semantic.min.css";

    body, html {
        z-index: 0;
        height: 100%;
    }

    html {
        overflow-y: scroll;
    }

    body {
        position: relative;
    }

    .bodyer {
        min-height: 100%;
        position: relative;
    }

    .bodyer .header {
        padding-bottom: 10px;
    }

    .bodyer .main {
        padding: 0 10px 76px 10px;
    }

    .bodyer .footer {
        border-radius: 0rem !important;
        margin: 0rem !important;
        width: 100%;
        position: absolute;
        bottom: 0;
    }

    .bodyer .footer .container {
        text-align: center;
    }

    .bodyer .footer .container a {
        color: rgba(0, 0, 0, 0.6);
    }

    .bodyer .footer .container a:hover {
        color: rgba(0, 0, 0, 0.8);
    }
</style>
