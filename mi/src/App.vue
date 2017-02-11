<template>
  <div class="home-wrapper">
    <search></search>
    <tabbar></tabbar>
    <swiper class="swiper-component-wrapper" :options="swiperOption">
      <swiper-slide v-for="item in swiperListImgUrl" track-by="$index">
        <img :src="item" alt="" width="100%" height="100%">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <a href="javascript:void(0)" class="back-to-top f-ib" v-show="isShowBackTop" @click="backToTop">
      <img :src="backToTopUrl" width="100%" height="100%">
    </a>
    <div class="first">
        <div class="first-list">
          <div class="section f-clearfix section-1 f-w">
            <div class="f-fl f-ib f-h section-l">
              <img :src="imgUrl1" width="100%" height="100%">
            </div>
            <div class="f-fl f-ib f-h section-r">
              <div class="f-ib section-rt f-w">
                <img :src="imgUrl2" width="100%" height="100%">
              </div>
              <div class="f-ib section-rb f-w">
                <img :src="imgUrl3" width="100%" height="100%">
              </div>
            </div>
          </div>
          <div class="blank"></div>
          <template v-for="t in 2">
            <div class="section-2 f-w">
              <img :src="imgUrl4" width="100%" height="100%">
            </div>
            <div class="blank2"></div>
            <template v-for="item in 3">
              <div class="section f-clearfix section-1 f-w">
                <div class="f-fl f-ib f-h section-l pr1">
                  <div class="img f-w f-pr">
                    <img v-lazy="imgUrl5" class="f-pa" width="100%" height="100%">
                  </div>
                  <div class="info">
                    <div class="name">红米Note 4 移动定制版</div>
                    <div class="brief">全金属十核旗舰手机</div>
                    <div class="price">1199</div>
                  </div>
                </div>
                <div class="f-fl f-ib f-h section-l pl1">
                  <div class="img f-w f-pr">
                    <img v-lazy="imgUrl6" class="f-pa" width="100%" height="100%">
                  </div>
                  <div class="info">
                    <div class="name">红米4 32GB版</div>
                    <div class="brief">长续航金属千元旗舰手机</div>
                    <div class="price">899</div>
                  </div>
                </div>
              </div>
            </template>
          </template>
          <link-more :text="text1"></link-more>
          <div class="blank"></div>
          <div class="section-2 f-w">
            <img v-lazy="imgUrl7" width="100%" height="100%">
          </div>
          <div class="section-1 f-clearfix" style="height: auto;">
            <div class="f-fl f-ib section-l f-pr" style="padding-top: 46%;">
              <img class="f-pa" v-lazy="imgUrl8" width="100%" height="100%" style="left:0; top:0">
            </div>
            <div class="f-fl f-ib section-l f-pr" style="padding-top: 46%;">
              <div class="info2 f-pa f-ib f-w f-h">
                <div class="name">米兔智能故事机</div>
                <div class="brief">海量好故事，智能语音交互，材质安全耐用</div>
                <div class="price">199</div>
              </div>
            </div>
          </div>
          <div class="section-1 f-clearfix" style="height: auto;">
            <div class="f-fl f-ib section-l f-pr" style="padding-top: 46%;">
              <div class="info2 f-pa f-ib f-w f-h">
                <div class="name">米兔智能故事机</div>
                <div class="brief">海量好故事，智能语音交互，材质安全耐用</div>
                <div class="price">199</div>
              </div>
            </div>
            <div class="f-fl f-ib section-l f-pr" style="padding-top: 46%;">
              <img class="f-pa" v-lazy="imgUrl8" width="100%" height="100%" style="left:0; top:0">
            </div>
          </div>
          <div class="section-1 f-clearfix" style="height: auto;">
            <div class="f-fl f-ib section-l f-pr" style="padding-top: 46%;">
              <img class="f-pa" v-lazy="imgUrl8" width="100%" height="100%" style="left:0; top:0">
            </div>
            <div class="f-fl f-ib section-l f-pr" style="padding-top: 46%;">
              <div class="info2 f-pa f-ib f-w f-h">
                <div class="name">米兔智能故事机</div>
                <div class="brief">海量好故事，智能语音交互，材质安全耐用</div>
                <div class="price">199</div>
              </div>
            </div>
          </div>
          <link-more :text="text2"></link-more>
          <div class="blank"></div>
          <template v-for="item in 3">
            <div class="section-3 f-clearfix f-w">
              <div class="f-fl f-h section-item">
                <img v-lazy="imgUrl9" width="100%" height="100%">
              </div>
              <div class="f-fl f-h section-item">
                <img v-lazy="imgUrl10" width="100%" height="100%">
              </div>
            </div>
          </template>
          <link-more :text=""></link-more>
          <div class="blank"></div>
        </div>
    </div>
  </div>
</template>
<script>
  import {setHtmlSize} from 'common/js/utils'
  import tabbar from 'components/Tabbar/Tabbar'
  import search from 'components/Search/Search'
  import linkMore from 'components/LinkMore/LinkMore'
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
      _bindScroll() {
        $(window).scroll(() => {
          if ($(window).scrollTop() >= 220) {
            if (!this.$store.state.isShowBackTop) {
              this.$store.state.isShowBackTop = true
            }
            if (!this.$store.state.isHasBg) {
              this.$store.state.isHasBg = true
            }
          } else if ($(window).scrollTop() < 220) {
            if (this.$store.state.isShowBackTop) {
              this.$store.state.isShowBackTop = false
            }
            if (this.$store.state.isHasBg) {
              this.$store.state.isHasBg = false
            }
          }
        })
      },
      backToTop(e) {
        $(window).scrollTop(0)
      },
      _checkTabbarActiveStatus() {
        this.$store.state.homeTabs.forEach((item) => {
          if (item.routename === 'index' && !item.isSelected) {
            this.$store.state.homeTabs.forEach((tab) => {
              tab.isSelected = false
            })
            item.isSelected = true
          }
        })
      }
    },
    ready() {
      this._initRem()
      this._bindScroll()
      this._checkTabbarActiveStatus()
    },
    computed: {
      isShowBackTop() {
        return this.$store.state.isShowBackTop;
      }
    },
    data() {
      return {
          text1: '更多新品 >',
          text2: '更多米家智能产品 >',
          swiperOption: {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true,
            autoplay: 3000
          },
          swiperListImgUrl: [
            'http://heliujie.com.img.800cdn.com/public/images/mi/index/swiper_1.png',
            'http://heliujie.com.img.800cdn.com/public/images/mi/index/swiper_2.png'
          ],
          imgUrl1: 'http://heliujie.com.img.800cdn.com/public/images/mi/index/section-1.png',
          imgUrl2: 'http://heliujie.com.img.800cdn.com/public/images/mi/index/section-2.png',
          imgUrl3: 'http://heliujie.com.img.800cdn.com/public/images/mi/index/section-3.png',
          imgUrl4: 'http://heliujie.com.img.800cdn.com/public/images/mi/index/section-4.png',
          imgUrl5: 'http://heliujie.com.img.800cdn.com/public/images/mi/index/section-5.png',
          imgUrl6: 'http://heliujie.com.img.800cdn.com/public/images/mi/index/section-6.png',
          imgUrl7: 'http://heliujie.com.img.800cdn.com/public/images/mi/index/section-7.png',
          imgUrl8: 'http://heliujie.com.img.800cdn.com/public/images/mi/index/section-8.png',
          imgUrl9: 'http://heliujie.com.img.800cdn.com/public/images/mi/index/section-9.png',
          imgUrl10: 'http://heliujie.com.img.800cdn.com/public/images/mi/index/section-10.png',
          backToTopUrl: 'http://heliujie.com.img.800cdn.com/public/images/mi/index/top.png'
      }
    },
    components: {
      tabbar,
      search,
      linkMore
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/css/reset.css"
  @import "./common/css/base.styl"

  .home-wrapper
    .swiper-component-wrapper
      r1(height, 266)
    .back-to-top
      position: fixed
      r2(right, 20, bottom, 80)
      r2(width, 36, height, 36)
      overflow: hidden
      z-index: 200
    .first
      r1(margin-bottom, 60)
      .first-list
        .section-1
          r1(height, 267)
          .section-l
            width: 50%
            .img
              padding-top: 100%
              img
                left: 0
                top: 0
            .info
              r1(height, 78)
              r2(padding-left, 16, padding-right, 16)
              r2(padding-top, 12, padding-bottom, 12)
              .name
                r1(font-size, 15)
                color: rgba(0,0,0,.87)
                white-space: nowrap
                overflow: hidden
                text-overflow: ellipsis
              .brief
                r1(margin-top, 5)
                r1(font-size, 12)
                color: rgba(0,0,0,.54)
                white-space: nowrap
                overflow: hidden
                text-overflow: ellipsis
              .price::before
                content: "￥"
                position: absolute
                r2(left, -10, top, 1)
                r1(font-size, 14)
                r1(margin-right, 5)
                font-weight: 400
              .price
                r1(font-size, 16)
                color: #ff6000
                r2(margin-top, 5, margin-left, 10)
                position: relative
            .info2
              r2(padding-left, 20, padding-right, 16)
              r1(padding-top, 50)
              left:0
              top: 0
              .name
                r1(font-size, 15)
                color: rgba(0,0,0,.87)
                white-space: nowrap
                overflow: hidden
                text-overflow: ellipsis
              .brief
                r1(margin-top, 5)
                r2(font-size, 13, line-height, 20)
                color: rgba(0,0,0,.54)
              .price::before
                content: "￥"
                position: absolute
                r2(left, -10, top, 1)
                r1(font-size, 14)
                r1(margin-right, 5)
                font-weight: 400
              .price
                r1(font-size, 16)
                color: #ff6000
                r2(margin-top, 16, margin-left, 10)
                position: relative
          .section-r
            width: 50%
            .section-rt
              height: 50%
            .section-rb
              height: 50%
              r1(margin-top, -4)
          .pl1
            r1(padding-left, 1)
          .pr1
            r1(padding-right, 1)
        .section-3
          r1(height, 250)
          margin-top: 2px
          .section-item
            width: 50%
          .section-item:first-child
            padding-right: 1px
          .section-item:last-child
            padding-left: 1px
      .blank
        r1(height, 8)
        width: 100%
        background-color: #f5f5f5
      .blank2
        r1(height, 0)
        width: 100%
        background-color: #fff
</style>

