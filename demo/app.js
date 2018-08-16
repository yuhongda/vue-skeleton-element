import Vue from 'vue'
import VueRouter from 'vue-router'
import { routerConfig } from './router-config'
import App from './app.vue'

Vue.use(VueRouter)

var router;
routerConfig(router).then((router) => {

    new Vue({
        el: '#app',
        components:{
            App
        },
        router
    });

})
