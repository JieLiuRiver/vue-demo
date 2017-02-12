
![image](http://heliujie.com.img.800cdn.com/public/images/github-readme-1.png)
![image](http://heliujie.com.img.800cdn.com/public/images/github-readme-2.png)
![image](http://heliujie.com.img.800cdn.com/public/images/github-readme-3.png)
## 框架
    1.vue1.*
    2.vue-router
    3.vue-resource
    4.vuex
    5.vue-lazyload
    6.vue-cli

main.js
```
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex/store'
import jApp from './App'
import VueLazyload from 'vue-lazyload'
import Category from 'components/Category/Category'
import CartIndex from 'components/CartIndex/CartIndex'
import UserIndex from 'components/UserIndex/UserIndex'
import SearchIndex from 'components/SearchIndex/SearchIndex'
import VueAwesomeSwiper from 'vue-awesome-swiper'  // 轮播图

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  error: 'http://heliujie.com.img.800cdn.com/public/images/mi/index/error.png',
})
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

```

vuex/store.js

```
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state ={...}

const mutations = {

}
export default new Vuex.Store({
  state: state,
  mutations: mutations
})

```

## 动态设置html font-size

```
import {setHtmlSize} from 'common/js/utils'

setHtmlSize()
window.addEventListener("resize",setHtmlSize,false)
window.addEventListener("orientationchange",setHtmlSize,false)

```

utils.js

```
export function setHtmlSize() {
  let iW = document.documentElement.clientWidth;
  document.getElementsByTagName("html")[0].style.fontSize=iW/3.75+"px";
}
```

## vue-awesome-swiper运用
在main.js已经引入，并全局注册进来了，因此直接使用组件

```
<swiper class="swiper-component-wrapper" :options="swiperOption">
  <swiper-slide v-for="item in swiperListImgUrl" track-by="$index">
    <img :src="item" alt="" width="100%" height="100%">
  </swiper-slide>
  <div class="swiper-pagination" slot="pagination"></div>
</swiper>
```


```
data() {
    swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 3000
      }
}
```

## vue-router路由
返回首页
```
<div class="right f-fr f-ib" v-link="{name:'search-index'}">
  <div class="f-pa icon-wrapper">
    <img :src="imgUrl.url2" width="25" height="25">
  </div>
</div>
```
name在main.js写好了，当然也可以直接写path，内嵌路由多了，根据name去匹配是最简单的。 路由切换，意味着组件切换，每一个路由，都配置一个组件。如果有参数要传入，可以加query这个对象，如 query: {articleid: 1}, 当我们进入到这个路由，在组件里的this对象，可以找到$route，
能找到传递过来的参数，或者通过组件的一个钩子去判断：
```
route: {
    data(transition) {
        console.log(transition)
    }
}
```

## 组件 + v-for + v-if + ...
一个组件，里面可以判断v-if，进行循环v-for,可以传参数给组件，而在父组件也可能对子组件，进行再次的v-for，v-if等操作，这意味着，我们可以把一个布局比较复杂的结构通过这种方式实现，这是非常方便的。


## stylus

base.styl

```
// 去掉输入框获取焦点时边框高亮
input:focus
  outline:0 !important

// 去掉输入区域边框阴影问题
input, textarea
  -webkit-appearance: none

*
  box-sizing: border-box

html
  -webkit-tap-highlight-color: rgba(0,0,0,0)

.f-w
  width: 100%

.f-h
  height: 100%


.f-clearfix:after
  display:block
  clear:both
  visibility:hidden
  height:0
  overflow:hidden
  content:"."

.f-clearfix
  zoom: 1

.f-fl
  float: left

.f-fr
  float: right

.f-ib
  display: inline-block

.f-pa
  position: absolute

.f-pr
  position: relative

.f-tc
  text-align: center

/*====================  方法函数  =======================*/
full = 100

r1($name, $attr)
  {$name} ($attr / full ) * 1rem

r2($name1, $attr1, $name2, $attr2)
  {$name1} ($attr1 / full) * 1rem
  {$name2} ($attr2 / full) * 1rem

r3($name, $attr1, $attr2)
  {$name} ($attr1) * 1rem ($attr2) * 1rem

body
  r1(font-size, 12)

*
  color: inherit

bg-pos($x, $y)
  background-repeat: no-repeat
  r3(background-position, $x, $y)

```




```
npm install stylus-loader --save

npm install css-loader --save

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/font-awesome.min.css"
  @import "../../common/css/base.styl"

  .cartindex-wrapper
    r1(margin-bottom, 50)
    .header
      r1(height, 44)
      background-color: #f2f2f2
      border-bottom: 1px solid #eee
      r1(padding, 10)
      ....
</style>
```
