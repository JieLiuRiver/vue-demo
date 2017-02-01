<template>
  <div id="app"
    :style="{'height': clientHeight}" v-el:app-hook>
    <div class="blog-wrapper container f-pr f-h"
      :style="{'height': clientHeight}">
      <Jack-header></Jack-header>
      <div class="content-wrapper clearfix f-w f-h">
        <Jack-slidebar></Jack-slidebar>
        <Jack-content></Jack-content>
      </div>
    </div>
    <loading></loading>
  </div>
</template>
  <script>
      import JackHeader from 'components/JackHeader/JackHeader.vue';
      import JackSlidebar from 'components/JackSlidebar/JackSlidebar.vue';
      import JackContent from 'components/JackContent/JackContent.vue';
      import loading from 'components/Loading/Loading.vue';

      const RET = 0;
      export default {
          directives: { loading },
          data() {
              return{
                clientHeight: '0',
                options: {
                  text: '加载中...'
                }
              };
          },
          ready: function(){
              var self = this;
              this.clientHeight = document.documentElement.clientHeight + 'px'; // 浏览器窗口高度

              window.addEventListener("resize",() => {
                self.clientHeight = document.documentElement.clientHeight + 'px';
              },false);
          },
          computed: {
          },
          created() {
              this.$http.get('/public/api/getwebData?articleTypeid=1').then((response) => {

                  response = JSON.parse(response.body);
                  // console.log('response', response);
                  let result = [];
                  // 组装数据
                  for (let attr in response.data) {
                    result.push(response.data[attr]);
                  }
                  // console.log('result', result);
                  for (let i = 0; i < result.length; i++) {
                       result[i]['isActive'] = false;
                       result[i]['falseActive'] = false;
                  }
                  // 设置值
                  this.$store.state.slidelistdata = result;

              },(err) => {
                  console.log('err');
              });
          },
          components: {
              JackHeader,
              JackSlidebar,
              JackContent,
              loading
          }
      }
</script>
<style>
@import '../public/css/reset.css';
@import '../public/css/main.css';
@import '../public/css/bootstrap.css';
@import '../public/css/iview.css';

.blog-wrapper{
   margin: 0 auto;
   background: #fff;
   padding-top: 48px;
   overflow: hidden;
   padding-right: 0;
   padding-left: 0;
   box-shadow: 1px 0 #d9d9d9, -1px 0 #d9d9d9;
}
</style>
