<template>
    <div class="search-wrapper f-clearfix"
        :class="hasBgClass">
        <div class="logo f-fl f-ib">
          <div class="icon f-ib"></div>
        </div>
        <div class="search-bar f-ib">
          <div class="link f-h f-pr" v-link="{name:'search-index'}">
              <div class="f-pa icon-wrapper">
                <img src="./search.png" width="23" height="23">
              </div>
              <span class="f-h f-ib f-pa text">搜索商品名称</span>
          </div>
        </div>
        <div class="login f-fr f-ib">
          <div class="text f-h">登录</div>
        </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/base.styl"
  @import "../../common/css/font-awesome.min.css"

  .search-wrapper
    r2(padding-top, 5, padding-bottom, 5)
    position: fixed
    left: 0
    right: 0
    top: 0
    height: auto
    z-index: 100
    .logo
      r2(width, 52, height, 32)
      .icon
        r2(width, 26, height, 16)
        r2(margin-top, 8, margin-left, 13)
        background: url(./logo.png) no-repeat center
        background-size: cover
    .login
      r2(width, 52, height, 32)
      .text
        text-align: center
        r1(line-height, 32)
        color: #fff
        r1(font-size, 14)
    .search-bar
      r2(width, 270, height, 32)
      .fa-search
        color: rgba(0,0,0,.3)
        r1(font-size, 16)
        r2(left, 12, top, 7)
      .link
         r1(height, 30)
         r1(border-radius, 2)
         background: #fff
         r1(margin-top, 1)
         .icon-wrapper
          r2(left, 8, top, 4)
         .text
          r2(left, 40, top, 0)
          r1(line-height, 32)
          color: rgba(0,0,0,.3)
          r1(font-size, 14)
  .hasBg
    background-color: rgb(229, 131, 53)
</style>
<script>
  export default{
    props: {},
    computed: {
      hasBgClass() {
        return this.$store.state.isHasBg ? 'hasBg' : ''
      }
    },
    data() {
      return {

      }
    }
  };
</script>
