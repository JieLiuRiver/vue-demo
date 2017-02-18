import Vue from 'vue'
import store from  './vuex/store'
import Index from './App'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
import iView from 'iview'
import Works from 'components/JackWorks/JackWorks'
import WorkShowMobile from 'components/WorkShowMobile/WorkShowMobile'
import AdminShow from 'components/AdminShow/AdminShow'

// 开启调试模式
Vue.config.debug = true;

Vue.use(vueRouter);
Vue.use(vueResource);
Vue.use(iView);

let router = new vueRouter({
  linkActiveClass: 'active'
});
router.map({
  '/works': {
    name: 'j-works',
    component: Works
  },
  '/index': {
    name: 'j-index',
    component: Index
  },
  '/show': {
    component: WorkShowMobile,
    name: 'j-workshow'
  },
  'admin': {
    component: AdminShow,
    name: 'admin'
  }
})

let App = Vue.extend({
  store
})

router.redirect({
  '/': '/index'
})

/* eslint-disable no-new */
// new Vue({
//   store,
//   el: 'body',
//   components: { App }
// })

router.start(App, 'body')
