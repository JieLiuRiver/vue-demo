<template>
  <footer class="footer-wrapper f-w">
    <div class="footer-container">
      <div class="footer-inner">
        <ul class="footer-list clearfix" v-show="pageType">
          <li class="footer-item f-fl" v-for="item in footerlist" track-by="$index">
            <span class="f-ib">{{item.name}}</span>
          </li>
        </ul>
        <div class="footer-share-wrapper" v-show="pageType">
          <ul class="footer-share-list clearfix f-tc">
            <li class="footer-share-item f-ib">
              <a href="javascript:;" class="f-ib f-h footer-share-link">
                微博
              </a>
            </li>
            <li class="footer-share-item f-ib">
              <a href="javascript:;" class="f-ib f-h footer-share-link">
                  微信
              </a>
            </li>
          </ul>
        </div>
        <div class="copyright f-ib f-tc f-w">
          <p>Copyright 2016. 器皿. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data() {
      return {
        footerlist: this.$store.state.navlist,
        pageType: true
      }
    },
    methods: {
      _choseFooter() {
        switch (this.$router._currentRoute.path) {
          case '/home':
            this.pageType = true;
            break;
          case '/productlist':
          case '/blog':
          case '/special':
            this.pageType = false;
            break;
        }
      }
    },
    ready() {
      this._choseFooter()
    }
  }

</script>
<style>
  .footer-wrapper {}
  
  .footer-container {
    padding: 25px 30px 30px 30px;
    background: #000;
  }
  
  .footer-list {}
  
  .footer-inner {
    width: 940px;
    height: auto;
    margin: 0 auto;
  }
  
  .footer-item {
    width: 126px;
    height: 36px;
    line-height: 36px;
    color: #fff;
    text-align: center;
    margin-left: 15px;
  }
  
  .footer-item span {
    cursor: pointer;
  }
  
  .footer-share-wrapper {
    position: relative;
    padding: 20px 0;
  }
  
  .footer-share-list {
    width: 300px;
    height: 40px;
    margin: 0 auto;
    padding-left: 95px;
  }
  
  .footer-share-item {
    width: 55px;
    height: 100%;
    float: left;
  }
  
  .footer-share-link {
    background: #fff;
    border-radius: 50%;
    width: 40px;
    font-size: 12px;
    line-height: 40px;
    color: #000;
  }
  
  .footer-share-link:hover {
    background: #555;
    color: #fff;
  }
  
  .copyright p {
    color: #777777;
    margin: 0 !important;
  }

</style>
