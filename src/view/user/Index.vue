<template>
    <div class="container">
        <table class="ui selectable celled table">
            <thead>
            <tr>
                <th>Id</th>
                <th>Realname</th>
                <th>Username</th>
                <th>CreaterId</th>
                <th>CreatedAt</th>
            </tr>
            </thead>
            <tbody>
            <tr v-if="users" v-for="user in users">
                <td>{{user.id}}</td>
                <td>{{user.realname}}</td>
                <td>{{user.username}}</td>
                <td>{{user.createrId}}</td>
                <td>{{user.createdAt}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'user-view',
        data () {
            return {
                name: "Vue"
            }
        },
        computed: {
            ...mapGetters([
                'users'
            ])
        },
        methods: {
            ...mapActions([])
        },
        mounted () {
            this.$store.dispatch('getUsers')
        }
    }
</script>