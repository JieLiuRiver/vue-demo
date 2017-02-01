<template>
  <div class="swiper-container f-pr" @mouseenter="stopSwiperRun" @mouseleave="startSwiperRun">
    <ul class="swiper-list f-m0 f-h clearfix" :style="swiperanimate()" v-el:swiper-list-hook>
      <li class="swiper-item f-h f-fl">
        <img src="http://heliujie.com/public/works/qimin/public/images/swiper-1.jpg" alt="" width="100%" height="100%">
      </li>
      <li class="swiper-item f-h f-fl">
        <img src="http://heliujie.com/public/works/qimin/public/images/swiper-2.jpg" alt="" width="100%" height="100%">
      </li>
      <li class="swiper-item f-h f-fl">
        <img src="http://heliujie.com/public/works/qimin/public/images/swiper-1.jpg" alt="" width="100%" height="100%">
      </li>
    </ul>
    <ul class="swiper-dots-list f-pa f-tc f-m0">
      <li class="swiper-dots-item f-ib f-pr" v-for="item in 2">
        <button type="button" class="swiper-dot f-ib" @click="choseSwiperItem($event, $index)" :class="{'active': activeIndex===$index || (activeIndex==2 && $index == 0)}"></button>
      </li>
    </ul>
  </div>
</template>
<script>
  const ITEMWIDTH = 1140;
  export default {
    data() {
      return {
        timer: this.$store.state.swiperTimer,
        activeIndex: 0
      }
    },
    methods: {
      _startRun() {
        let self = this;
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          self.activeIndex++;
          self.swiperanimate();
          if (self.activeIndex === 2) { // 实现无缝切换
            setTimeout(() => {
              if (self.$els.swiperListHook != null) {
                self.$els.swiperListHook.style.transition = 'none';
                self.activeIndex = 0;
                self.$els.swiperListHook.style.transform =
                  `translate3d(-${ITEMWIDTH * this.activeIndex }px, 0, 0)`;
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
          transform: `translate3d(-${ITEMWIDTH * this.activeIndex}px, 0, 0)`
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
      _choseRouter() {

      }
    },
    computed: {

    },
    ready() {
      console.log(this.$router._currentRoute.path)
      this._startRun();
      this._choseRouter();
    }
  }

</script>
<style>
  .swiper-container {
    height: 704px;
    overflow: hidden;
  }

  .swiper-list {
    width: 3420px;
    transition: 1s all ease;
  }

  .swiper-item {
    width: 1140px;
  }

  .swiper-dots-list {
    width: 100%;
    height: 25px;
    left: 0;
    bottom: 0px;
  }

  .swiper-dots-item {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .swiper-dot {
    font-size: 0;
    line-height: 0;
    width: 10px;
    height: 10px;
    background: rbga(204, 204, 204, .8);
    border: 0;
    border-radius: 5px;
  }

  .swiper-dots-item .active {
    background-color: rgba(0, 0, 0, .8)
  }

</style>
