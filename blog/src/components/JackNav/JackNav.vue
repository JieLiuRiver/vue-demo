<template>
    <div class="nav-wrapper f-pa f-h">
        <ul class="nav-list clearfix f-w f-h f-m0" v-if="list">
            <li class="nav-item f-fl f-ib f-h f-pr" v-for="item in list" v-link="{name:item.routename}">
                <a href="javascript:void(0)" class="f-ib f-h f-w" data-id="{{item.navid}}" @click="choseModule($event, item)" :class="item.className"></a>
                <!--<i v-if="item.isActive" class="triangle f-pa"></i>-->
            </li>
        </ul>
    </div>
</template>
<script>


    export default {
        data() {
            return {
                list: this.$store.state.navlistdata,
                slidelistdata: this.$store.state.slidelistdata
            }
        },
        computed: {

        },
        methods: {
            triangleleftpos(e) {
                console.log(e);
            },
            choseModule(e, item) {
                for( let i = 0; i < this.list.length; i++ ){
                    this.list[i]['isActive'] = false;
                }
                item.isActive = true;
                for (let i = 0; i < this.slidelistdata.length; i++) {
                    if( this.slidelistdata[i].isActive ){
                        this.slidelistdata[i].isActive = false;
                        this.slidelistdata[i].falseActive = true;
                    }
                }
                if (item.navid == 4) {
                  window.open(item.url)
                }
            }
        }
    }
</script>
<style>
    .nav-wrapper{
        right: 0;
        top:0;
        width: auto;
        padding: 0 10px;
    }
    .nav-list{

    }
    .nav-item{
      margin-right: 20px;
    }
    .nav-item a{
        width: 30px;
        height: 30px;
        line-height: 48px;
        font-size: 14px;
        color: inherit;
        text-decoration: none;
        background-repeat: no-repeat;
        background-size: contain;
        margin-top: 8px;
    }
    nav-item:nth-of-type(2) a{
      width: 20px;
    }
    .nav-item .works{
      background-image: url(http://heliujie.com.img.800cdn.com/public/images/works.png)
    }
    .nav-item .recommend{
      background-image: url(http://heliujie.com.img.800cdn.com/public/images/recommend.png)
    }
    .nav-item .github{
      background-image: url(http://heliujie.com.img.800cdn.com/public/images/github.png)
    }
    .nav-item a:hover{
        text-decoration: none;
    }
    .nav-item .triangle{
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 5px 7px 5px;
        border-color: transparent transparent #fff transparent;
        bottom: -1px;
        left: 29px;
    }

</style>
