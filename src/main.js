// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import IView from 'view-design'
import 'view-design/dist/styles/iview.css'
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false
Vue.use(IView)
/* eslint-disable no-new */
//原型挂载js技术
Vue.prototype.$axios=axios
new Vue({
  el: '#app',
  router:router,
  components: { App },
  template: '<App/>'
})
