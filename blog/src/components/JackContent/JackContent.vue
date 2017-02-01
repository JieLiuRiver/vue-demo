<template>
    <div class="content-right-wrapper pull-right f-w f-h">
        <div class="content-title f-pa">
          <h4 class="f-tc">{{currentDetailData.title}}</h4>
        </div>
        <div class="content-right-innerwrapper f-h">
            <div class="content-detailinfo">
                <div>{{{currentHtml}}}</div>
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
                  return '没有内容...';
               }
            },
            currentDetailData() {
              return this.$store.state.currentDetailData;
            }
        },
        ready() {
            this.testHtml = _.unescape('&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;h1 style=&quot;border-bottom: 2px solid rgb(204, 204, 204); padding: 0px 4px 0px 0px; margin: 0px 0px 10px;&quot;&gt;&lt;span style=&quot;font-family: consolas;&quot;&gt;&lt;strong&gt;&lt;span style=&quot;font-family: consolas; font-size: 14px;&quot;&gt;1.数组求和');
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
</style>
