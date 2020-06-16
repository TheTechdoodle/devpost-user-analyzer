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
            <HelloWorld/>
        </v-content>
    </v-app>
</template>

<script>
    import HelloWorld from './components/HelloWorld';
    import DarkSwitch from './components/DarkSwitch';

    export default {
        name: 'App',

        components: {
            DarkSwitch,
            HelloWorld
        },

        data: () => ({
            //
        })
    };
</script>
