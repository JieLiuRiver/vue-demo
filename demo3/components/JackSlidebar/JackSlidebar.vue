<template>
    <div class="slidebar-wrapper pull-left f-pr">
          <ul class="slidebar-list f-m0" >
              <li class="f-w slidebar-item" v-for="item in slidelistdata">
                  <span 
                    class="f-ib f-h f-w h30 slidebar-item-link"
                    @click="selectActiveLink($event, item)"
                    :class="{'active':item.isActive, 'falseActive': item.falseActive}"
                    @mouseover="changeBgIn($event, item)"
                    @mouseout="changeBgOut($event, item)">{{item.keyword}}</span>
              </li>
          </ul> 
    </div>
</template>
<script>

    export default {
        data() {
            return {
               
            }
        },
        vuex: {
            getters: {
                slidelistdata: state => state.slidelistdata,
                navlistdata: state => state.navlistdata
            }
        },
        methods: {
          selectActiveLink(e, item) {
            for (let i = 0; i < this.slidelistdata.length; i++) {
                this.slidelistdata[i]['isActive'] = false;
                this.slidelistdata[i]['falseActive'] = false;
            }
            for (let i = 0; i < this.navlistdata.length; i++ ) {
                this.navlistdata[i]['isActive'] = false;
            }
            item.isActive = true;
          },
          changeBgIn(e, item) {
              if( !item.isActive ){
                  item.falseActive = true;
              }
          },
          changeBgOut(e, item) {
              item.falseActive = false;
          }
        },
        computed: {

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
        text-indent: 30px;
    }
    .slidebar-item .active{
        color: #fff;
        background-color: #398df0;
    }
    .slidebar-item .falseActive{
        background-color: #e5e5e5;
        color: #000;
    }
</style>