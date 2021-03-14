import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import {store} from './content/main'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior()
    {
        return {x: 0, y: 0};
    }
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
