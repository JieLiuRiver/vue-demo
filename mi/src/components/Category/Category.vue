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
      <blank-img :url="blankUrl_1"></blank-img>
      <product-type :title="productImg_1.title" :url="productImg_1.url" :name="productImg_1.name" :times="10"></product-type>
      <blank-img :url="blankUrl_1"></blank-img>
      <product-type :title="productImg_2.title" :url="productImg_2.url" :name="productImg_2.name" :times="4"></product-type>
      <blank-img :url="blankUrl_1"></blank-img>
      <product-type :title="productImg_3.title" :url="productImg_3.url" :name="productImg_3.name" :times="11"></product-type>
      <blank-img :url="blankUrl_1"></blank-img>
      <product-type :title="productImg_4.title" :url="productImg_4.url" :name="productImg_4.name" :times="26"></product-type>
      <blank-img :url="blankUrl_1"></blank-img>
      <product-type :title="productImg_5.title" :url="productImg_5.url" :name="productImg_5.name" :times="8"></product-type>
      <blank-img :url="blankUrl_1"></blank-img>
      <product-type :title="productImg_6.title" :url="productImg_6.url" :name="productImg_6.name" :times="15"></product-type>
      <blank-img :url="blankUrl_1"></blank-img>
      <product-type :title="productImg_7.title" :url="productImg_7.url" :name="productImg_7.name" :times="2"></product-type>
      <blank-img :url="blankUrl_1"></blank-img>
      <product-type :title="productImg_8.title" :url="productImg_8.url" :name="productImg_8.name" :times="3"></product-type>
      <blank-img :url="blankUrl_1"></blank-img>

      <tabbar></tabbar>
    </div>
</template>
<script type="text/ecmascript-6">
  import {setHtmlSize} from 'common/js/utils'
  import tabbar from 'components/Tabbar/Tabbar'
  import blankImg from 'components/BlankImg/BlankImg'
  import productType from 'components/ProductType/ProductType'
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
      },
      blankUrl_1() {
        return this.blankUrl[0]
      },
      productImg_1() {
        return this.productImgUrl[0]
      },
      productImg_2() {
        return this.productImgUrl[1]
      },
      productImg_3() {
        return this.productImgUrl[2]
      },
      productImg_4() {
        return this.productImgUrl[3]
      },
      productImg_5() {
        return this.productImgUrl[4]
      },
      productImg_6() {
        return this.productImgUrl[5]
      },
      productImg_7() {
        return this.productImgUrl[6]
      },
      productImg_8() {
        return this.productImgUrl[7]
      }
    },
    components: {
      tabbar,
      blankImg,
      productType
    },
    data() {
      return {
        itemWidth: -1,
        navListData: this.$store.state.categoryData.navListData,
        blankUrl: [
          'http://heliujie.com.img.800cdn.com/public/images/mi/category/blankimg-1.png'
        ],
        productImgUrl: [
          {
            url: 'http://heliujie.com.img.800cdn.com/public/images/mi/category/product-1.png',
            name: '小米MIX',
            title: '手机·电话卡'
          },
          {
            url: 'http://heliujie.com.img.800cdn.com/public/images/mi/category/product-2.png',
            name: '笔记本13.3"',
            title: '笔记本·平板'
          },
          {
            url: 'http://heliujie.com.img.800cdn.com/public/images/mi/category/product-3.png',
            name: '小米电视48"',
            title: '电视·盒子'
          },
          {
            url: 'http://heliujie.com.img.800cdn.com/public/images/mi/category/product-4.png',
            name: '九号平衡车',
            title: '智能硬件·路由器'
          },
          {
            url: 'http://heliujie.com.img.800cdn.com/public/images/mi/category/product-5.png',
            name: '头戴式耳机',
            title: '耳机·音箱·存储卡'
          },
          {
            url: 'http://heliujie.com.img.800cdn.com/public/images/mi/category/product-6.png',
            name: '背包',
            title: '小米生活方式'
          },
          {
            url: 'http://heliujie.com.img.800cdn.com/public/images/mi/category/product-7.png',
            name: '保护套/保护壳',
            title: '保护类配件'
          },
          {
            url: 'http://heliujie.com.img.800cdn.com/public/images/mi/category/product-8.png',
            name: '电源套装',
            title: '优惠套装'
          }
        ],
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
