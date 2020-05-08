import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Welcome from './components/welcome'
import Impossible from './components/impossible-list'
import Work from './components/work'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes =[
  {path:'/', component: Welcome},
  {path: '/impossible', component: Impossible},
  {path: '/work', component: Work}
]

const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
