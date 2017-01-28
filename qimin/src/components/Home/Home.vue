<template>
  <div class="home-wrapper">
    <div class="home-container">
      <header>
        <div class="f-tc site-header">
          <div class="home-header clearfix">
            <div class="home-logo f-fl">
              <img src="../../../public/images/home-logo.png" width="100%" height="100%" alt="">
            </div>
            <div class="home-nav f-fr f-ib">
              <v-nav></v-nav>
            </div>
          </div>
        </div>
      </header>
      <!--轮播图-->
      <section class="swiper-wrapper">
        <swiper></swiper>
      </section>
      <!--联系我们-->
      <contact></contact>
      <!--footer-->
      <v-footer></v-footer>
    </div>
    <div class="nav-fixed f-w" v-show="isNavFixedShow" transition="uptodown">
      <div class="clearfix nav-fixed-container f-w f-h">
        <strong class="f-fl nav-logo-text f-ib">器皿</strong>
        <ul class="nav-list clearfix f-fr f-m0" style="margin-top: 4px;">
          <li class="nav-item f-pr f-fl" v-for="item in navlist">
            <span class="f-ib nav-link-fixed" data-id="{{item.id}}" v-link="{ path: item.router}" :class="{'active': item.isActive}">{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import vNav from 'components/Nav/Nav';
  import swiper from 'components/Swiper/Swiper';
  import contact from 'components/Contact/Contact';
  import vFooter from 'components/Footer/Footer';
  import $ from 'jquery';

  export default {
    data() {
      return {
        navlist: this.$store.state.navlist,
        isNavFixedShow: false
      }
    },
    computed: {

    },
    methods: {
      showFixedNav() {
        setTimeout(() => {
          this.isNavFixedShow = true;
        }, 2000);
      }
    },
    ready() {
      var self = this;
      $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
          self.isNavFixedShow = true;
        } else if ($(window).scrollTop() < 100) {
          self.isNavFixedShow = false;
        }
      })
    },
    components: {
      vNav,
      swiper,
      contact,
      vFooter
    }
  }

</script>
<style scoped>
  @import '../../../public/css/reset.css';
  @import '../../../public/css/common.css';
  @import '../../../public/css/iview.css';
  @import '../../../public/css/bootstrap.css';
  .home-wrapper {}
  
  .site-header {
    padding: 15px 0;
  }
  
  .home-header {
    max-width: 1200px;
    padding: 0 30px;
    margin: 0 auto;
    height: 70px;
  }
  
  .home-logo {
    height: 45px;
    width: 98px;
  }
  
  .nav-fixed {
    position: fixed;
    left: 0;
    top: 0;
    background-color: #000;
  }
  
  .nav-fixed-container {
    padding: 0 30px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .home-nav {
    min-width: 500px;
  }
  
  .nav-item {
    font-weight: 500;
    display: block;
    text-decoration: none;
    padding: 15px;
    white-space: nowrap;
    color: #424243;
  }
  
  .nav-link-fixed {
    color: #fff;
    font-weight: bold;
  }
  
  .nav-logo-text {
    padding: 16px 10px;
    color: #fff;
    font-size: 16px;
  }
  
  .uptodown-transition {
    transition: .4s all;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
  }
  
  .uptodown-enter,
  .uptodown-leave {
    transform: translate3d(0, -100%, 0);
    -webkit-transform: translate3d(0, -100%, 0);
    -moz-transform: translate3d(0, -100%, 0);
  }
  
  .swiper-wrapper {
    width: 1140px;
    margin: 0 auto;
  }

</style>
