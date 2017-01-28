import Vue from 'vue';
import store from './vuex/store';
import VueRouter from 'vue-router';
import iView from 'iview';
import home from 'components/Home/Home';
import productlist from 'components/Productlist/Productlist';
import blog from 'components/Blog/Blog';
import special from 'components/Special/Special';
import login from 'components/Login/Login';

Vue.use(iView);
Vue.use(VueRouter);
let router = new VueRouter({
  linkActiveClass: 'active'
});

router.map({
  '/home': {
    component: home
  },
  '/productlist': {
    component: productlist
  },
  '/blog': {
    component: blog
  },
  '/special': {
    component: special
  },
  '/login': {
    component: login
  }
})

var App = Vue.extend({
  store
});

router.redirect({
  '/': '/home'
})

router.beforeEach(function (transition) {
  if (transition.from.path === '/home') { // transition.to 将要跳转的路有对象   transition.from当前路由对象,  有时需要根据当前路径和将要跳转到的路径，来决定是否走，可以这里配置
    transition.next();
  } else {
    transition.next();
  }
});

router.start(App, '#app')
