<template>
  <!--<div class="swiper-container f-pr" @mouseenter="stopSwiperRun" @mouseleave="startSwiperRun">-->
    <!---->
    <!--<ul class="swiper-list f-m0 f-h  f-clearfix" :style="swiperanimate()" v-el:swiper-list-hook>-->
      <!--<li class="swiper-item f-h f-fl f-w" v-el:swiper-item>-->
        <!--<img src="./swiper_1.png" alt="" width="100%" height="100%">-->
      <!--</li>-->
      <!--<li class="swiper-item f-h f-fl f-w">-->
        <!--<img src="./swiper_2.png" alt="" width="100%" height="100%">-->
      <!--</li>-->
      <!--<li class="swiper-item f-h f-fl f-w">-->
        <!--<img src="./swiper_1.png" alt="" width="100%" height="100%">-->
      <!--</li>-->
    <!--</ul>-->
    <!--<ul class="swiper-dots-list f-pa f-tc f-m0">-->
      <!--<li class="swiper-dots-item f-ib f-pr" v-for="item in 2">-->
        <!--<button type="button" class="swiper-dot f-ib" @click="choseSwiperItem($event, $index)" :class="{'active': activeIndex===$index || (activeIndex==2 && $index == 0)}"></button>-->
      <!--</li>-->
    <!--</ul>-->
     <!---->
  <!--</div>-->
    <swiper :options="swiperOption" ref="mySwiperA" class="test" style="height: 200px">
      <!-- 幻灯内容 -->
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>
<script>
  import $ from 'jquery'
  import Hammer from 'hammerjs'

  const ITEMWIDTH = 375;
  export default {
    data() {
      return {
        swiperOption: {
            // 所有配置均为可选（同Swiper配置）
            // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
            // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象（假如你需要使用获取swiper对象来做什么事，那么这个属性一定要是true）
            notNextTick: true,
            autoplay: 3000,
            grabCursor : true,
            setWrapperSize :true,
            autoHeight: true,
            pagination : '.swiper-pagination',
            paginationClickable :true,
            scrollbar:'.swiper-scrollbar',
            mousewheelControl : true,
            observeParents:true,
            // if you need use plugins in the swiper, you can config in here like this
            // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
            debugger: true,
            // swiper callbacks
            // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
            onTransitionStart(swiper){
              console.log(swiper)
            }
        },
        timer: this.$store.state.swiperTimer,
        activeIndex: 0,
        itemWidth: 0
      }
    },
    methods: {
      _startRun() {
        let self = this;
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          self.activeIndex++;
          self.swiperanimate();
          if (self.activeIndex >= 2) { // 实现无缝切换
            setTimeout(() => {
              if (self.$els.swiperListHook != null) {
                self.$els.swiperListHook.style.transition = 'none';
                self.activeIndex = 0;
                self.$els.swiperListHook.style.transform =
                  `translate3d(-${this.itemWidth * this.activeIndex }px, 0, 0)`;
              } else {
                clearInterval(this.timer);
              }
            }, 1000);
          } else {
            if (self.$els.swiperListHook != null) {
              self.$els.swiperListHook.style.transition = '1s all ease';
            }
          }
        }, 3000)
      },
      swiperanimate() {
        return {
          transform: `translate3d(-${this.itemWidth * this.activeIndex}px, 0, 0)`
        }
      },
      stopSwiperRun(e) {
        clearInterval(this.timer);
      },
      startSwiperRun(e) {
        this._startRun();
      },
      choseSwiperItem(e, $index) {
        this.$els.swiperListHook.style.transition = '1s all ease';
        this.activeIndex = $index;
      },
      _onTap() {
        let self = this
        for (let i = 0; i < $('.swiper-item').length; i++) {
           let _hammer = new Hammer($('.swiper-item').eq(i).get(0))
           _hammer.on('panstart', (ev) => {
              self.stopSwiperRun()
           })
           _hammer.on('pancancel', (ev) => {
              self._startRun()
           })
           _hammer.on('panmove', (ev) => {
              self.$els.swiperListHook.style.transition = 'none';
              self.$els.swiperListHook.style.transform =
                  `translate3d(${ ev.deltaX }px, 0, 0)`;
              if (ev.deltaX < 0 && ev.deltaX > -188.5) {

              }
           })
           _hammer.on('panend', (ev) => {
              // console.log('end', ev)
              if (ev.deltaX < 0 && ev.deltaX > -188.5) {

              } else if(ev.deltaX < 0 && ev.deltaX <= -188.5) {
                if (this.activeIndex < 1) {
                  this.activeIndex++
                }
              }
              // self._startRun()
           })
           _hammer.on('panleft', (ev) => {
              // console.log('left', ev)
           })
           _hammer.on('panright', (ev) => {
              console.log('left', ev)
           })
        }
      }
    },
    computed: {

    },
    ready() {
      this.$nextTick(() => {
          this.itemWidth =  $(".swiper-item ").eq(0).width()
          this._startRun()
          this._onTap()
      })
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/base.styl"

  .swiper-container
    // r1(height, 266)
    overflow: hidden
    .swiper-wrapper
      r1(height, 200)

    .swiper-list
      transition: 1s all ease
      r1(width, 1125)
      .swiper-item
        r1(width, 375)
    .swiper-dots-list
      width: 100%
      text-align: center
      r1(height, 25)
      left: 0
      bottom: 0
      z-index: 101
      .swiper-dots-item
        r2(width, 20, height, 20)
        cursor: pointer
        .swiper-dot
          font-size: 0
          line-height: 0
          r2(width, 10, height, 10)
          background-color: rgba(250, 250, 250, .6)
          border: 0
          r1(border-radius, 12)
        .active
          background-color: rgba(0, 0, 0, .6)
</style>
