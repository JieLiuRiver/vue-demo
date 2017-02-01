import Vue from 'vue'
import store from  './vuex/store'
import App from './App'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
import iView from 'iview'

// 开启调试模式
Vue.config.debug = true;

Vue.use(vueRouter);
Vue.use(vueResource);
Vue.use(iView);

let router = new vueRouter();

/* eslint-disable no-new */
new Vue({
  store,
  el: 'body',
  components: { App }
})
