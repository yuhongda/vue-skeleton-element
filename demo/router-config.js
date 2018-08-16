import App from './app.vue'
import VueRouter from 'vue-router'


export function routerConfig(router){

    let promise = new Promise(function(resolve, reject) {
        
        const Page = resolve => require.ensure(['./DemoPage.vue'], () => resolve(require('./DemoPage.vue')), 'page')

        const routes = [
            { path: '/', component: Page }
        ]

        router = new VueRouter({
            routes
        })

        resolve(router);
    });

    return promise
}

