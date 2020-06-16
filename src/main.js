import Vue from 'vue';
import App from './App.vue';
import store from './store';
import Vuetify from 'vuetify/lib';
import localforage from 'localforage';

localforage.config({
    name: 'canvas-playground'
});

Vue.use(Vuetify);
Vue.config.productionTip = false;

localforage.getItem('theme').then(theme =>
{
    new Vue({
        store,
        vuetify: new Vuetify({
            theme: {
                dark: theme !== 'light'
            }
        }),
        render: function(h)
        {
            return h(App);
        }
    }).$mount('#app');
});
