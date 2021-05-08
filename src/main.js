import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import {store} from './content/main'

/*https://www.npmjs.com/package/@fortawesome/vue-fontawesome#using-solid-icons*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faInstagram, faLinkedinIn, faYoutube} from '@fortawesome/free-brands-svg-icons'

library.add( faGithub,faLinkedinIn, faInstagram, faYoutube, faEnvelope)


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

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
