<template>
  <div class="speciallist-wrapper">
    <div class="speciallist-container f-h">
      <h3 class="speciallist-title">专题列表

      </h3>
      <div class="special-content clearfix">
        <div class="special-left f-fl f-h">
          <div class="special-caption img">
          </div>
          <div class="special-cover img"></div>
        </div>
        <div class="special-right f-fl f-h f-pr">
          <div class="special-flag">
            <h4>1</h4>
          </div>
          <div class="special-article">
            <div class="text-wrapper">
              <h4 class="collection__title f-ml10">夏季jimo大特卖</h4>
              <p class="f-pr">
                夏季好季末 夏季好寂寞 寂寞没关系 快来买东西
              </p>
            </div>
            <div class="btn-group f-w clearfix">
              <button type="button" class="special-btn f-fr f-mr10">分享专辑<Icon size="20" type="android-share-alt"></button>
              <button type="button" class="special-btn f-fr f-mr10 f-pr">查看专辑<Icon size="24" type="ios-arrow-thin-right"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

    },
    ready() {

    }
  }

</script>
<style>
  .speciallist-container {
    max-width: 1180px;
    padding: 0 30px;
    margin: 0 auto;
  }

  .speciallist-title {
    margin-top: 32px;
    margin-bottom: 32px;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    min-height: 22px;
  }

  .special-content {
    width: 100%;
    max-width: 960px;
    height: 490px;
    margin: 100px auto;
    box-shadow: rgba(0, 0, 0, 0.34902) 0px 10px 30px 0px;
  }

  .special-left,
  .special-right {
    width: 50%;
  }

  .special-left {
    background-image: url(http://heliujie.com/public/works/qimin/public/images/special_1.png);
  }

  .special-right {
    background-image: url(http://heliujie.com/public/works/qimin/public/images/special_3.png);
  }

  .special-caption {
    padding-top: 6%;
    height: 66px;
    background-image: url(http://heliujie.com/public/works/qimin/public/images/special_2.png);
    background-size: contain;
    margin-top: 24px;
  }

  .special-cover {
    height: 280px;
    margin-top: 20px;
    background-image: url(http://heliujie.com/public/works/qimin/public/images/special_4.jpg);
  }

  .special-flag {
    position: absolute;
    top: 0px;
    left: 0px;
    margin-left: 30px;
    width: 0px;
    height: 0px;
    border-top-width: 62.2px;
    border-left-width: 32.5px;
    border-right-width: 32.5px;
    border-bottom-width: 24.5px;
    border-color: rgb(48, 48, 48) rgb(48, 48, 48) transparent;
    border-style: solid;
  }

  .special-flag h4 {
    position: absolute;
    color: white;
    font-size: 30px;
    line-height: 30px;
    left: -25px;
    bottom: 0px;
    text-align: center;
    width: 50px;
  }

  .special-article {
    margin-left: 60px;
    margin-right: 40px;
    height: 100%;
    letter-spacing: 1px;
    color: rgb(74, 74, 74);
    padding: 0px 0px 0px 60px;
    overflow: hidden;
  }

  .text-wrapper {
    margin-top: 50px;
    padding-right: 20px;
    margin-right: -20px;
    height: calc(80% - 50px);
    overflow: hidden;
  }

  .text-wrapper h4 {
    font-weight: normal;
    border-bottom: 1px solid #ccc;
    margin-bottom: 0;
    padding-bottom: 10px;
  }

  .text-wrapper p {
    font-size: 14px;
    line-height: 28px;
    margin-bottom: 30px;
    margin-top: 30px;
    padding-left: 30px;
    padding-right: 24px;
  }

  .btn-group {
    height: 40px;
  }

  .special-btn {
    width: 120px;
    height: 100%;
    border: 1px solid rgb(66, 66, 67);
    background-color: #e2e2e2;
  }

  .special-btn:hover {
    background: #555;
    color: #fff;
  }

  .special-btn .ivu-icon {
    position: absolute;
    right: 8px;
    top: 7px;
  }

  .special-btn .ivu-icon-android-share-alt {
    right: 18px;
    top: 10px;
  }

</style>
