<template>
    <div class="muser-wrapper f-ib f-w">
      <div class="hd f-ib f-w">
        <div class="user">
          <div class="img nologin"></div>
          <div class="name">登录/注册</div>
        </div>
      </div>
      <div class="a1 f-w">
        <div class="f-w myorder f-clearfix f-pr">
          <span class="title f-fl">我的订单</span>
          <span class="all f-fr">全部订单</span>
          <i class="icon-arrow-right f-pa f-ib"></i>
        </div>
        <ul class="nav f-w">
          <li>
            <div class="icon nav-1"></div>
            <span class="f-ib">待付款</span>
          </li>
          <li>
            <div class="icon nav-2"></div>
            <span class="f-ib">待收货</span>
          </li>
          <li>
            <div class="icon nav-3"></div>
            <span class="f-ib">退换修</span>
          </li>
        </ul>
      </div>
      <div class="blank"></div>
      <div class="a1 a2 f-w">
        <div class="f-w myorder f-clearfix f-pr">
          <span class="title f-fl f-pr">
            <div class="f-ib icon-wrapper f-h f-pa">
              <i class="f-ib icon icon-cheap f-w f-h f-pr"></i>
            </div>
            我的优惠
          </span>
          <i class="icon-arrow-right f-pa f-ib"></i>
        </div>
      </div>
      <div class="blank"></div>
      <div class="a1 a2 f-w">
        <div class="f-w myorder f-clearfix f-pr">
          <span class="title f-fl">
            <div class="f-ib icon-wrapper icon-sevice f-h f-pa" style="border-bottom: 1px solid #fff">
              <i class="f-ib icon f-w f-h f-pr"></i>
            </div>
            服务中心
          </span>
          <i class="icon-arrow-right f-pa f-ib"></i>
        </div>
      </div>
      <div class="a1 a2 f-w">
        <div class="f-w myorder f-clearfix f-pr">
          <span class="title f-fl">
            <div class="f-ib icon-wrapper f-h f-pa">
              <i class="f-ib icon icon-cheap f-w f-h f-pr"></i>
            </div>
            小米之家
          </span>
          <i class="icon-arrow-right f-pa f-ib"></i>
        </div>
      </div>
      <div class="blank"></div>
      <div class="a1 a2 f-w">
        <div class="f-w myorder f-clearfix f-pr" style="border:0">
          <span class="title f-fl">
            <div class="f-ib icon-wrapper f-h f-pa">
              <i class="f-ib icon icon-cheap f-w f-h f-pr"></i>
            </div>
            设置
          </span>
          <i class="icon-arrow-right f-pa f-ib"></i>
        </div>
      </div>
      <tabbar></tabbar>
    </div>
</template>
<script type="text/ecmascript-6">
  import {setHtmlSize} from 'common/js/utils'
  import tabbar from 'components/Tabbar/Tabbar'
  import $ from 'jquery'
  export default{
    props: {},
    components: {
      tabbar
    },
    methods:{
      _initRem() {
        setHtmlSize()
        window.addEventListener("resize",setHtmlSize,false)
        window.addEventListener("orientationchange",setHtmlSize,false)
      },
      _checkTabbarActiveStatus() {
        this.$store.state.homeTabs.forEach((item) => {
          if (item.routename === 'user-index' && !item.isSelected) {
            this.$store.state.homeTabs.forEach((tab) => {
              tab.isSelected = false
            })
            item.isSelected = true
          }
        })
      },
      getUrlClass(item) {
        return item.url
      }
    },
    data(){
      return {
        navList: [
          {
            url: 'nav1',
            name: '待付款',
            id: 1
          },
          {
            url: 'nav2',
            name: '待收货',
            id: 2
          },
          {
            url: 'nav3',
            name: '退换修',
            id: 3
          }
        ]
      }
    },
    ready() {
      this._initRem()
      this._checkTabbarActiveStatus()
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/base.styl"
  .muser-wrapper
    height: 100%
    background-color: #f5f5f5
    .hd
      background: url(http://heliujie.com.img.800cdn.com/public/images/mi/cart/bg.png) #f37d0f
      .user
        r1(height, 50)
        r2(margin-top,15, margin-bottom, 15)
        display: flex
        .nologin
          r1(flex-basis, 50)
          r1(margin-left, 15)
          background: url(http://heliujie.com.img.800cdn.com/public/images/mi/cart/avatar.png) no-repeat
          background-size: contain
        .name
          flex: 1
          r1(line-height, 50)
          text-indent: 10px
          r1(font-size, 13)
          color: #fff

    .a1
      background-color: #fff
      .myorder
        r2(height, 42, line-height, 42)
        r1(padding-right, 30)
        border-bottom: 1px solid rgba(0,0,0,.15)
        .title
          r2(font-size, 14, padding-left, 16)
        .all
          color: rgba(0,0,0,.54)
          r1(font-size, 13)
        .icon-arrow-right
          background: url(http://heliujie.com.img.800cdn.com/public/images/mi/cart/arrow-right.png) no-repeat
          background-size: contain
          r2(width, 20, height, 20)
          r2(right,10,top,10)
      .nav
        r2(padding-left, 30, padding-right,30)
        r1(height, 90)
        display: flex
        li
          flex: 1
          overflow: hidden
          r1(padding, 24)
          .icon
            r1(height, 25)
            r1(margin-bottom, 2)
            background-repeat: no-repeat
            background-size: contain
            background-position: center
          span
            width: 100%
            r1(height, 14)
            text-align: center
          .nav-1,
          .nav-2
            background-image: url(http://heliujie.com.img.800cdn.com/public/images/mi/cart/nav-1.png)
          .nav-3
            background-image: url(http://heliujie.com.img.800cdn.com/public/images/mi/cart/nav-2.png)
    .blank
      r1(height, 8)
      width: 100%
      background-color: #f5f5f5
    .a2
      .myorder
        r2(height, 55, line-height, 55)
        .title
            r1(padding-left, 50)
            .icon-wrapper
              r1(width, 50)
              r2(padding-left, 12, padding-right,12)
              r2(padding-top, 15, padding-bottom,15)
              r2(left, 0, top, 0)
              .icon
                background-repeat: no-repeat
                background-size: cover
                background: #e2e2e2
                r1(top, -7)
              .icon-sevice
                i
                  background: #e2e2e2
        .icon-arrow-right
          r1(top, 16)
</style>
