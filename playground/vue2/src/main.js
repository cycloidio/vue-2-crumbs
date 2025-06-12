import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vue2Crumbs from 'vue-2-crumbs'

Vue.use(Vue2Crumbs)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
