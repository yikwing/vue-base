import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueClipboard)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
