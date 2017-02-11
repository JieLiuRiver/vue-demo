<template>
    <div class="cartindex-wrapper">
      <div class="header f-w f-clearfix">
        <div class="left f-fl f-ib" @click="backToIndex">
          <img :src="imgUrl.url1" width="100%" height="100%">
        </div>
        <div class="title f-fl f-ib">
          <h3 class="f-ib f-h f-w">购物车</h3>
        </div>
        <div class="right f-fr f-ib" v-link="{name:'search-index'}">
          <div class="f-pa icon-wrapper">
            <img :src="imgUrl.url2" width="25" height="25">
          </div>
        </div>
      </div>
      <div class="nologing f-w">
        <a href="javascript:;" class="f-ib f-w f-h f-clearfix f-pr">
          <span class="f-fl">登录后享受更多优惠</span>
          <em class="f-fr">去登录</em>
          <i class="icon-arrow-right f-pa f-ib"></i>
        </a>
      </div>
      <div class="noitems f-w">
        <a href="/#/index" class="f-ib f-h f-w link">
            <div class="content f-clearfix">
              <span class="f-ib f-h f-fl"><i class="icon-cartnull"></i>购物车还是空的</span>
              <em class="f-ib f-fl">去逛逛</em>
            </div>
        </a>
      </div>
      <div class="recommend-wrapper f-w" v-if="recommendData">
        <div class="recommend-title f-w">为你推荐</div>
        <div class="recomment-list">
          <ul class="f-w">
            <li class="f-ib" v-for="item in 20">
              <div class="img">
                <img :src="bakeUrl" width="100%" height="100%">
              </div>
              <div class="info">
                <div class="name">红米Note 4 移动定制版</div>
                <div class="brief">全金属十核旗舰手机</div>
                <div class="price">1199</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <tabbar></tabbar>
    </div>
</template>
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
    .nologing
      r1(height, 54)
      a
        r2(padding-left, 20, padding-right, 30)
        span
          r1(line-height, 54)
          color: rgba(0,0,0,.87)
          r1(font-size, 16)
        em
          color: rgba(0,0,0,.54)
          r1(font-size, 13)
          r1(line-height, 54)
          font-style: normal
        i
          background: url(http://heliujie.com.img.800cdn.com/public/images/mi/cart/arrow-right.png) no-repeat
          background-size: cover
          r2(right, 10, top, 16)
          r2(width, 20, height, 20)


    .noitems
      r1(height, 54)
      background: #ebebeb
      .link
        r1(padding-top, 7)
        .content
          margin: 0 auto
          r2(width, 200, height, 40)
          span
            r2(width, 140, line-height, 40)
            r1(padding-left, 50)
            color: rgba(0,0,0,.27)
            position: relative
            .icon-cartnull
              position: absolute
              left: 0
              right: 0
              r2(width,50, height, 40)
              background: url(http://heliujie.com.img.800cdn.com/public/images/mi/cart/cartnull.png) no-repeat
              background-size: contain
          em
            r2(width, 60, height, 26)
            border: 1px solid rgba(0,0,0,.15)
            r2(margin-top, 7, line-height, 26)
            text-align: center
            color: rgba(0,0,0,.87)
            font-style: normal

    .recommend-wrapper
      .recommend-title
        r1(height, 42)
        r2(padding-left, 20, padding-right, 20)
        r2(line-height, 42, font-size, 16)
      .recomment-list
        ul
          display: flex
          flex-wrap: wrap
          li
            flex: 0 0 50%
            r1(height, 270)
            &:nth-of-type(odd)
              r1(padding-right,2)
            &:nth-of-type(even)
              r1(padding-left, 2)
            .info
              r1(height, 78)
              r1(padding, 10)
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


</style>
<script type="text/ecmascript-6">
  import {setHtmlSize} from 'common/js/utils'
  import tabbar from 'components/Tabbar/Tabbar'
  import $ from 'jquery'

  export default{
    props: {},
    components: {
      tabbar
    },
    methods: {
      _initRem() {
        setHtmlSize()
        window.addEventListener("resize",setHtmlSize,false)
        window.addEventListener("orientationchange",setHtmlSize,false)
      },
      _checkTabbarActiveStatus() {
        this.$store.state.homeTabs.forEach((item) => {
          if (item.routename === 'cart-index' && !item.isSelected) {
            this.$store.state.homeTabs.forEach((tab) => {
              tab.isSelected = false
            })
            item.isSelected = true
          }
        })
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
      }
    },
    created() {
      this.$nextTick(() => {

      })
    },
    data() {
      return {
        recommendData: this.$store.state.recommendData,
        imgUrl: {
          url1: "http://heliujie.com.img.800cdn.com/public/images/mi/category/icon_back.png",
          url2: "http://heliujie.com.img.800cdn.com/public/images/mi/category/search.png",
          url3: "http://heliujie.com.img.800cdn.com/public/images/mi/category/logo.png"
        },
        bakeUrl: 'http://heliujie.com.img.800cdn.com/public/images/mi/cart/bake.png'
      }
    },
    route: {
      data(transition) {
        if (transition.to.name === 'cart-index') {
          this.$store.state.homeTabs.forEach((item)=>{
            item.isSelected = false
          })
          this.$store.state.homeTabs[2]['isSelected'] = true
        }
      }
    },
    ready() {
      this._initRem()
      this._checkTabbarActiveStatus()
    }
  };
</script>
