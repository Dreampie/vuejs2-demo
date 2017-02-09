<template>
    <!--body-->
    <div class="bodyer">
        <v-loading></v-loading>
        <!--head-->
        <header class="header">
            <v-menu :session="session"></v-menu>
        </header>
        <router-view class="main"></router-view>
        icon:
        <i class="chevron up icon"></i>
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
        <a class="back-top" href="javascript:void(0);"><i class="chevron up icon"></i></a>
    </div>
</template>

<script>
    import './asset/semantic-ui/semantic.min.js'

    import {mapGetters, mapActions} from 'vuex'
    import Loading from './component/Loding.vue'
    import Menu from './component/Menu.vue'

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
        /*min-height: 100%;*/
        /*position: relative;*/
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

    .back-top {
        display: none;
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
        -moz-transition: all 0.5s ease;
        -webkit-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }
</style>
