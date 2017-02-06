import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex/store'
import jApp from './App'
import Category from 'components/Category/Category'
import CartIndex from 'components/CartIndex/CartIndex'
import UserIndex from 'components/UserIndex/UserIndex'
import SearchIndex from 'components/SearchIndex/SearchIndex'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
let router = new VueRouter({
  linkActiveClass: 'active'
})
router.map({
  '/index': {
    name: 'index',
    component: jApp
  },
  '/category':{
    name: 'category',
    component: Category
  },
  '/cart':{
    name: 'cart-index',
    component: CartIndex
  },
  '/user':{
    name: 'user-index',
    component: UserIndex
  },
  'search': {
    name: 'search-index',
    component: SearchIndex
  }
})

let App = Vue.extend({
  store
})

router.redirect({
  '/': '/index'
})

router.beforeEach(function (transition) {
  if (transition.from.to === '/index') { // transition.to 将要跳转的路有对象   transition.from当前路由对象,  有时需要根据当前路径和将要跳转到的路径，来决定是否走，可以这里配置
    transition.next();
  } else {
    transition.next();
  }
})

router.start(App, '#app')
