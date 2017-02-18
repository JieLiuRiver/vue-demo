<template>
    <div class="show-wrapper f-w" :style="{'height': clientHeight +'px'}">
      <Row style="padding:10px 0">
        <i-col span="2"><i-button type="text" @click="checkProjectGithub"><i class="f-ib icon-github"></i></i-button></i-col>
        <i-col span="20"><span style="color: #fff">-</span></i-col>
        <i-col span="2">
          <i-button type="ghost" v-link="{name:'j-works'}">返回</i-button>
        </i-col>
      </Row>

      <div class="two-dimensional-code f-pa">
        <i-button type="text" class="title f-pa">扫码体验</i-button>
        <img src="http://heliujie.com.img.800cdn.com/public/images/two-dimensional-code.png" width="100%" height="100%">
      </div>

      <div class="phone-wrapper">
            <div style="text-align:center">
              <div class="phone-iframe">
                <iframe class="iframe" :src="projectUrl" width="102.2%" height="100%" ></iframe>
              </div>
            </div>
          </div>
    </div>
</template>
<style>
  .show-wrapper{

  }
  .phone-wrapper{
    width:375px;
    height: 760px;
    position: absolute;
    left: 60%;
    top: 50%;
    transform: translate3d(-50%, -52%, 0);
    background: #fff url(http://heliujie.com.img.800cdn.com/public/images/hd-device-iphone.png) no-repeat;
    background-size: 373px  776px;
  }
  .phone-iframe{
    position: absolute;
    left: 25px;
    top: 93px;
    background: #fff;
    width: 322px;
    height: 568px;
    overflow:hidden;
  }
  .iframe{
    cursor:pointer;
  }
  .two-dimensional-code{
    left: 20%;
    top:50%;
    width:300px;
    height: 300px;
    background: #ccc;
    transform: translate3d(-20%, -50%, 0);
  }
  .two-dimensional-code .title{
    top: -30px;
    left: 50%;
    transform: translate3d(-50%, 0, 0)
  }
  .icon-github{
    width: 30px;
    height: 30px;
    background: url(http://heliujie.com.img.800cdn.com/public/images/github.png) no-repeat;
    background-size: 30px 30px;
  }
</style>
<script>


  export default{
    props: {},
    ready() {
      if (this.$route.query.projectid == 1){
        this.url = 'http://heliujie.com/public/works/xiaomi/index.html'
        this.githubUrl = 'https://github.com/stupidWall/vue-demo/tree/master/mi'
      } else if (this.$route.query.projectid == 2) {
        this.url = 'http://heliujie.com/public/works/mi/index.html'
        this.githubUrl = 'https://github.com/stupidWall/sell'
      }
    },
    computed: {
       projectUrl() {
          return this.url
       },
       clientHeight() {
        return document.documentElement.clientHeight
       }
    },
    methods: {
      checkProjectGithub(){
        window.open(this.githubUrl);
      }
    },
    data(){
      return {
        url: ''
      }
    },
    route: {
      data(t) {

      }
    }
  };
</script>
