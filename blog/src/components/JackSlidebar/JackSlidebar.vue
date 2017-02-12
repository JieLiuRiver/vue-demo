<template>
    <div class="slidebar-wrapper pull-left f-pr">
          <ul class="slidebar-list f-m0" >
              <li class="f-w slidebar-item f-pr" v-show="item.title" v-for="item in slidelistdata | filterBy keyword" track-by="$index">
                  <span
                    class="f-ib f-h f-w slidebar-item-link"
                    @click="selectActiveLink($event, item)"
                    :class="{'active':item.isActive, 'falseActive': item.falseActive}"
                    @mouseover="changeBgIn($event, item)"
                    @mouseout="changeBgOut($event, item)">{{item.title}}</span>
                    <span class="createtime f-pa">{{ item.created_at | limitBy 10 }}</span>
              </li>
          </ul>
    </div>
</template>
<script>

    const RET = 0;
    export default {
        data() {
            return {

            }
        },
        methods: {
          _getArticleDetailData(item, callback) {
            this.$http({
              url: "/public/api/getDetailById?id="+ item.id ,
              method: "get"
            }).then((response) => {
                  response = JSON.parse(response.body);
                  for (let attr in response.data) {
                    this.$store.state.currentDetailData = response.data[attr];
                  }
                  this.$store.state.isLoading = false;
                  // console.log('current', this.$store.state.currentDetailData);
            }, (err) => {
              this.$store.state.isLoading = false;
              console.log('err', err);
            })
          },
          _styleStateChange(item) {
            for (let i = 0; i < this.slidelistdata.length; i++) {
                this.slidelistdata[i]['isActive'] = false;
                this.slidelistdata[i]['falseActive'] = false;
            }
            for (let i = 0; i < this.navlistdata.length; i++ ) {
                this.navlistdata[i]['isActive'] = false;
            }
            item.isActive = true;
          },
          selectActiveLink(e, item) {
            // 状态更改
            this._styleStateChange(item);

            this.$store.state.isLoading = true;

            // 获取详情数据
            this._getArticleDetailData(item, function(){
                // alert('渲染相应内容');
            });
          },
          changeBgIn(e, item) {
              if( !item.isActive ){
                  item.falseActive = true;
              }
          },
          changeBgOut(e, item) {
              item.falseActive = false;
          },
          _getSlideListData() {

          }
        },
        events: {

        },
        computed: {
          keyword() {
           return this.$store.state.keyword;
          },
          slidelistdata() {
            return this.$store.state.slidelistdata;
          },
          navlistdata() {
            return this.$store.state.navlistdata;
          }
        },
        created(){


        },
        ready() {

        }
    }
</script>
<style>
    .slidebar-wrapper{
        width: 288px;
        height: 100%;
        margin-right: -288px;
        box-shadow: inset -1px 0 #e3e3e3;
        background-color: #f9f9f9;
        overflow: hidden;
        overflow-y: scroll;
    }
    .slidebar-list{}
    .slidebar-item{}
    .slidebar-item-link{
        color: inherit;
        text-indent: 5px;
        height: 42px;
        line-height: 42px;
        color: #000;
    }
    .slidebar-item .active{
        color: #fff;
        background-color: #398df0;
    }
    .slidebar-item .falseActive{
        background-color: #e5e5e5;
        color: #000;
    }
    .slidebar-item .createtime{
      right: 10px;
      bottom:0;
      color: #inherit;
    }
</style>
