<template>
    <div class="nav-wrapper f-pa f-h">
        <ul class="nav-list clearfix f-w f-h f-m0" v-if="list">
            <li class="nav-item f-fl f-ib f-h f-pr" v-for="item in list">
                <a href="javascript:void(0)" class="f-ib f-h f-w" data-id="{{item.navid}}" @click="choseModule($event, item)">{{item.navname}}</a>
                <i v-if="item.isActive" class="triangle f-pa"></i>
            </li>
        </ul>
    </div>
</template>
<script>
    // import {ChoseNavAction} from '../../vuex/action.js';

    export default {
        data() {
            return {
                
            }
        },
        computed: {
            
        },
        vuex: {
           getters: {
                list: state => state.navlistdata,
                slidelistdata: state => state.slidelistdata
           }
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
    }
    .nav-item a{
        padding: 0 20px;
        line-height: 48px;
        font-size: 14px;
        color: inherit;
        text-decoration: none;
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