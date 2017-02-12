<template>
    <div class="content-right-wrapper pull-right f-w f-h">
        <div class="content-title f-pa">
          <h4 class="f-tc">{{currentDetailData.title}}</h4>
        </div>
        <div class="content-right-innerwrapper f-h">
            <div class="content-detailinfo">
                <div class="content-innercontent">{{{ currentHtml }}}</div> <!-- currentHtml -->
            </div>
        </div>
    </div>
</template>
<script>
    import _ from 'underscore';
    export default {
        data() {
            return{
                testHtml: ''
            }
        },
        components: {
        },
        computed: {
            currentHtml() {
               if (this.$store.state.currentDetailData != null) {
                  return _.unescape(this.$store.state.currentDetailData.content)
               }else{
                  return "<h2 class='f-tc'>Hello Coding Farmer！</h2><div class='f-w'><img width='100%' src='http://heliujie.com.img.800cdn.com/public/images/body.jpg'></div>";
               }
            },
            currentDetailData() {
              return this.$store.state.currentDetailData;
            }
        },
        ready() {
        }
    }
</script>
<style>
    .content-right-innerwrapper{
        margin-left: 288px;
        overflow-x: hidden;
        overflow-y: scroll;
        position: relative;
    }
    .content-detailinfo{
        height: auto;
        padding:50px 20px 10px 20px;
        font-family: 'Monda', "PingFang SC", "Microsoft YaHei", sans-serif !important;
        color: #555 !important;
        font-size: 14px !important;
        line-height: 2 !important;
    }
    .content-detailinfo .pre{
        overflow: auto;
        margin: 20px 0;
        padding: 15px;
        font-size: 14px;
        color: #4d4d4c;
        background: #f7f7f7;
        line-height: 1.6;
    }
    .content-detailinfo p{
      margin: 10px auto;
      font-family: 'Monda', "PingFang SC", "Microsoft YaHei", sans-serif;
      color: #555;
      font-size: 14px !important;
      line-height: 2 !important;
      font-weight: 500 !important;
    }
    .content-detailinfo h2{
      font-size: 20px;
      margin: 20px 0 15px;
      font-weight: bold !important;
      line-height: 1.5 !important;;
      font-family: 'Roboto Slab', 'Monda', "PingFang SC", "Microsoft YaHei", sans-serif !important;;
    }
    .content-detailinfo h3{
      font-size: 18px;
      margin: 20px 0 15px;
      font-weight: bold !important;;
      line-height: 1.5 !important;;
      font-family: 'Roboto Slab', 'Monda', "PingFang SC", "Microsoft YaHei", sans-serif !important;;
    }
    .content-detailinfo h4{
      font-size: 16px;
      margin: 20px 0 15px;
      font-weight: bold !important;;
      line-height: 1.5 !important;;
      font-family: 'Roboto Slab', 'Monda', "PingFang SC", "Microsoft YaHei", sans-serif !important;;
    }
    .content-detailinfo h5{
      font-size: 14px;
      margin: 20px 0 15px;
      font-weight: bold !important;;
      line-height: 1.5 !important;;
      font-family: 'Roboto Slab', 'Monda', "PingFang SC", "Microsoft YaHei", sans-serif !important;;
    }
    .content-title{
        width: 100%;
        height: 43px;
        border-bottom: 1px solid #e5e5e5;
        background-color: #f5f4f5;
        border-radius: 0 0 2px 2px;
        margin-left: 288px;
        color: #333;
        z-index: 20;
    }
    .content-title h4{
        line-height: 42px;
        text-align: left;
        text-indent: 10px;
        font-size: 16px;
    }
    .content-innercontent{
      padding: 20px 40px;
    }
</style>
