<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-toolbar-title class="headline text-uppercase">
                <span class="font-weight-light">Devpost User Analyzer</span>
            </v-toolbar-title>
            <v-spacer/>
            <dark-switch/>
        </v-app-bar>

        <v-content>
            <users-load-view v-if="!usersReady"/>
            <users-view v-else/>
        </v-content>
    </v-app>
</template>

<script>
    import HelloWorld from './components/HelloWorld';
    import DarkSwitch from './components/DarkSwitch';
    import {mapGetters} from 'vuex';
    import UsersLoadView from './views/UsersLoadView';
    import UsersView from './views/UsersView';

    export default {
        name: 'App',
        components: {
            UsersView,
            UsersLoadView,
            DarkSwitch,
            HelloWorld
        },
        computed: {
            ...mapGetters(['usersReady'])
        },
        data: () => ({
            //
        })
    };
</script>
