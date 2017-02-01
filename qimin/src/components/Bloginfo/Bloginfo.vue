<template>
  <section class="bloginfo-wrapper">
    <div class="bloginfo-container f-h">
      <h3 class="bloginfo-title">博客</h3>
      <div class="bloginfo-group">
        <div class="bloginfo-item clearfix">
          <div class="bloginfo-left f-fl">
            <div class="f-w bloginfo-article-title">
              <h4 class="bloginfo-date">
                OCT 23, 2016
              </h4>
              <a href="javascript:void(0)" class="f-ib f-w" style="height: 40px;">
                <h3 class="bloginfo-name">wgttestt</h3>
              </a>
              <h4 class="bloginfo-author f-ib">BY nsy</h4>
            </div>
            <div class="f-w bloginfo-article-content">
              <p class="text-justify bloginfo-article-p">WGT Mindfulness for Health Weekend Programme 19TH NOVEMBER | 10:15-11:15 | Tony Davis | Saturday |Introduction
                to MindfulnessMindfulness has been show...</p>
              <div class="read-more f-w">
                <button type="button" class="read-more-btn">阅读更多</button>
              </div>
            </div>
          </div>
          <div class="bloginfo-right f-fl">
            <div class="img bloginof-img f-w f-h">
            </div>
          </div>
        </div>
      </div>
      <div class="bloginfo-center-group clearfix">
        <div class="bloginfo-center-left f-fl">
          <div style="overflow: hidden;">
            <div class="img center-img"></div>
          </div>
          <h3 class="bloginfo-name f-tc" style="font-size: 20px;margin-top: 30px;margin-bottom: 0;">分享一首歌</h3>
          <div class="f-tc">
            <h4 class="bloginfo-author f-ib f-m0">SEP 18, 2016</h4>
          </div>
          <p class="text-justify bloginfo-article-p" style="font-size: 14px;margin-top :30px;">我说今晚月光那么美，你说是的。</p>
          <div class="read-more f-w f-tc">
            <button type="button" class="read-more-btn">阅读更多</button>
          </div>
        </div>
        <div class="bloginfo-center-right f-fr">
          <div style="overflow: hidden;">
            <div class="img center-img2"></div>
          </div>
          <h3 class="bloginfo-name f-tc" style="font-size: 20px;margin-top: 30px;margin-bottom: 0;">湖北菜</h3>
          <div class="f-tc">
            <h4 class="bloginfo-author f-ib f-m0">SEP 18, 2016</h4>
          </div>
          <p class="text-justify bloginfo-article-p" style="font-size: 14px;margin-top :30px;">中山北路上有家 湖北菜 里面卖辣的跳 还有我家乡的面</p>
          <div class="read-more f-w f-tc">
            <button type="button" class="read-more-btn">阅读更多</button>
          </div>
        </div>
      </div>
      <div class="bloginfo-group">
        <div class="bloginfo-item clearfix">
          <div class="bloginfo-left f-fl">
            <div class="f-w bloginfo-article-title">
              <h4 class="bloginfo-date">
                SEP 12, 2016
              </h4>
              <a href="javascript:void(0)" class="f-ib f-w" style="height: 40px;">
                <h3 class="bloginfo-name">有关零售关系</h3>
              </a>
              <h4 class="bloginfo-author f-ib">BY 匿名</h4>
            </div>
            <div class="f-w bloginfo-article-content">
              <p class="text-justify bloginfo-article-p">几年前晃悠过摩洛哥蓝色小城舍夫沙万的一家地毯店，一直给我带路的，那只脚边的猫先我一步溜进了门。店里头有一位顶着怪帽子的老爷爷，流浪猫跳上了堆满地毯的木头桌子，喵呜一声趴倒。老爷爷笑眯眯得示意我也坐下， 给我倒了杯当地的薄荷茶，就着桌上的地毯一块接一块得翻着样给我看。讲真这异域图案实在可爱，只可惜当时...</p>
              <div class="read-more f-w">
                <button type="button" class="read-more-btn">阅读更多</button>
              </div>
            </div>
          </div>
          <div class="bloginfo-right f-fl">
            <div class="img bloginof-img bloginof-img2 f-w f-h">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    },
    ready() {

    }
  }

</script>
<style scoped>
  .bloginfo-wrapper {}

  .bloginfo-container {
    max-width: 1180px;
    padding: 0 30px;
    margin: 0 auto;
  }

  .bloginfo-title {
    margin-top: 32px;
    margin-bottom: 32px;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    min-height: 22px;
  }

  .bloginfo-group {
    margin-bottom: 50px;
  }

  .bloginfo-item {
    height: 560px;
    padding: 45px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(211, 211, 211);
    border-image: initial;
  }

  .bloginfo-left {
    padding-right: 30px;
    height: 100px;
    width: 50%;
  }

  .bloginfo-right {
    height: 460px;
    width: 50%;
    overflow: hidden;
  }

  .bloginfo-article-title {
    margin-bottom: 80px;
    height: 105px;
  }

  .bloginfo-date {
    font-size: 16px;
    line-height: 16px;
    min-height: 16px;
    color: rgb(119, 119, 119);
    font-weight: normal;
    margin-bottom: 10px;
  }

  .bloginfo-name {
    font-size: 30px;
    line-height: 40px;
    min-height: 40px;
    font-weight: 600;
    margin: 0;
    color: rgb(66, 66, 67);
    margin-bottom: 12px;
  }

  .bloginfo-author {
    font-size: 16px;
    font-weight: normal;
    color: rgb(119, 119, 119);
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #555;
  }

  .bloginfo-article-p {
    height: 168px;
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 30px;
    overflow: hidden;
    word-spacing: 4px;
    color: rgb(66, 66, 67);
  }

  .read-more {
    height: 40px;
  }

  .read-more-btn {
    width: 140px;
    height: 100%;
    border: 1px solid rgb(66, 66, 67);
    background-color: #e2e2e2;
  }

  .read-more-btn:hover {
    background: #555;
    color: #fff;
  }

  .bloginof-img {
    background-image: url("http://heliujie.com/public/works/qimin/public/images/blog_1.jpg");
    overflow: hidden;
    transition: 2s all cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .bloginof-img2 {
    background-image: url("http://heliujie.com/public/works/qimin/public/images/blog_2.jpg");
    overflow: hidden;
    transition: 2s all cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .bloginof-img:hover,
  .center-img2:hover,
  .center-img:hover {
    transform: scale(1.06);
    -webkit-transform: scale(1.06);
    -moz-transform: scale(1.06);
  }

  .bloginfo-center-group {
    margin-bottom: 50px;
  }

  .bloginfo-center-left,
  .bloginfo-center-right {
    min-height: 700px;
    width: 46%;
    padding: 30px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(211, 211, 211);
    border-image: initial;
  }

  .center-img {
    transition: 2s all cubic-bezier(0.075, 0.82, 0.165, 1);
    height: 453.1px;
    background-image: url(http://heliujie.com/public/works/qimin/public/images/blog_3.jpg);
  }

  .center-img2 {
    transition: 2s all cubic-bezier(0.075, 0.82, 0.165, 1);
    height: 453.1px;
    background-image: url(http://heliujie.com/public/works/qimin/public/images/blog_4.jpg);
  }

</style>
