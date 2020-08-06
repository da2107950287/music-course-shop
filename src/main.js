import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'normalize.css/normalize.css'
import {post} from './assets/js/axios'
import axios from 'axios'
Vue.use(ElementUI);
Vue.prototype.$axios=axios
// axios.defaults.baseURL = "http://47.111.244.224/mustard";
Vue.config.productionTip = false
Vue.prototype.$post=post
Vue.prototype.$bus=new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
