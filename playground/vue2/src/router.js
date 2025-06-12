//  vue 2 simple router setup
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('./pages/index.vue'),
      meta: {
        breadcrumb: 'Home Custom Label'
      }
    }
  ]
})