<template>
    <div class="category-wrapper f-w">
      <div class="header f-w f-clearfix">
        <div class="left f-fl f-ib" @click="backToIndex">
          <img src="./icon_back.png" width="100%" height="100%">
        </div>
        <div class="title f-fl f-ib">
          <h3 class="f-ib f-h f-w">商品分类</h3>
        </div>
        <div class="right f-fr f-ib" v-link="{name:'search-index'}">
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
      <!--<div class="list-nav-wrapper f-w" v-el:nav-wrapper-hook>-->
        <!--<ul class="nav-list f-h f-clearfix f-ib" :style="{width:navListWidth + 'px'}">-->
          <!--<li class="nav-item f-h f-ib f-fl" v-for="navItem in navListData">-->
              <!--<span class="f-ib f-w f-h">{{navItem.navname}}</span>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
      <swiper :options="swiperOption" class="list-nav-wrapper f-w" ref="mySwiperA">
        <swiper-slide class="nav-item f-h f-ib" v-for="navItem in navListData">
          <span class="f-ib f-w f-h f-tc">{{navItem.navname}}</span>
        </swiper-slide>
      </swiper>
      <tabbar></tabbar>
    </div>
</template>
<script type="text/ecmascript-6">
  import {setHtmlSize} from 'common/js/utils'
  import tabbar from 'components/Tabbar/Tabbar'
  import $ from 'jquery'


  export default{
    props: {},
    methods: {
      // 初始化设置rem
      _initRem() {
        setHtmlSize()
        window.addEventListener("resize",setHtmlSize,false)
        window.addEventListener("orientationchange",setHtmlSize,false)
      },
      backToIndex() {
        this.$router.go({name: 'index'})
        this.$store.state.homeTabs.forEach((item) => {
          if ( item.routename === 'index' ) {
            item.isSelected = true
          } else {
            item.isSelected = false
          }
        })
      },
      _checkTabbarActiveStatus() {
        this.$store.state.homeTabs.forEach((item) => {
          if (item.routename === 'category' && !item.isSelected) {
            this.$store.state.homeTabs.forEach((tab) => {
              tab.isSelected = false
            })
            item.isSelected = true
          }
        })
      },
      _computedListWidth() {
        let _width = 0
        for (let i = 0; i< this.navListData.length; i++) {
          _width += $(".nav-item").eq(i).outerWidth()
        }
        this.itemWidth = _width
      },
      _initScroll() {
          this.scroll = new BScroll(this.$els.test, {click: true})
          if (!this.navScroll) {
            this.navScroll = new BScroll(this.$els.navWrapperHook, {
               click: true,
               scrollY: true
            })
          } else {
            this.navScroll.refresh()
          }
      }
    },
    computed: {
      navListWidth() {
        return this.itemWidth < 0 ? '1000' : this.itemWidth
      },
      mySwiper() {
        return this.$refs.mySwiperA.swiper
      }
    },
    components: {
      tabbar
    },
    data() {
      return {
        itemWidth: -1,
        navListData: this.$store.state.categoryData.navListData,
        swiperOption: {
          notNextTick: true,
          slidesPerView: 3,
          freeMode: true,
          onTouchMove(swiper){
            console.log(swiper.translate)
            // if (swiper.translate <= -570) {
            //   console.log('oo')
            //   swiper.setWrapperTranslate(-570)
            // }
          }
        }
      }
    },
    created() {
      this.$nextTick(() => {
        this._computedListWidth()
      })
    },
    ready() {
      this._initRem()
      this._checkTabbarActiveStatus()
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/font-awesome.min.css"
  @import "../../common/css/base.styl"

  .category-wrapper
    .header
      r1(height, 44)
      background-color: #f2f2f2
      border-bottom: 1px solid #eee
      r1(padding, 10)
      display: flex
      .left
        r2(width, 23, height, 23)
      .title
        flex: 1
        r2(height, 23, line-height, 23)
        text-align: center
        color: #666
        r1(font-size, 15)
        font-weight: 400
      .right
        r2(width, 23, height, 23)
        .fa
          r1(font-size, 20)
          color: rgba(0,0,0,0.3)
    .list-nav-wrapper
      r1(height, 42)
      overflow: hidden
      background-color: #fff
      border-bottom: 1px solid #dbdbdb
      .nav-item
        r2(padding-left, 10, padding-right, 10)
        margin-right: 0 !important
        span
          r2(line-height, 42, font-size, 13)
          font-weight: 400
        &.active
          color: #fb7d34
</style>
