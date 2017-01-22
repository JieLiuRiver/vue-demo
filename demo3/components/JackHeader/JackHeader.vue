<template>
    <div class="header-wrapper f-pa">
        <div class="search-wrapper f-pr f-h">
            <input type="search" placeholder="搜索..." v-model="keyword" autocomplete="false" class="search-input" @keyup="keyupevent($event)"  name="" value="">
            <button type="reset" class="search-clear glyphicon glyphicon-remove f-pa" v-show="isShowClearIcon" title="clear search" @click="clearValue($event)"></button>
            <i class="search-icon f-ib glyphicon glyphicon-search f-pa"></i>
        </div>
        <Jack-nav></Jack-nav>
    </div>
</template>
<script>
    import JackNav from '../JackNav/JackNav.vue';
    
    export default {
        data() {
            return {
                test: 'hello header',
                keyword: '',
                isShowClearIcon: false
            }
        },
        methods: {
            'keyupevent'(event) {
                if( this.keyword != '' ){
                    this.isShowClearIcon = true;
                }else{
                    this.isShowClearIcon = false;
                }
            },
            'clearValue'(event) {
                this.keyword = '';
                this.isShowClearIcon = false;
            }
        },
        components: {
            JackNav
        },
        ready() {
            this.$http({
                url: '/test',
                method: "POST",
                data: {
                    test: 1
                },
                headers: {
                    "Content-Type" : "x-www-form-urlencoded"
                }
            }).then(function(response){

            }, function(response){
                
            })
        }
    }
</script>
<style>
.header-wrapper{
    z-index: 3;
    top: 0;
    left: 0;
    right: 0;
    height: 48px;
    line-height: 48px;
    background: #f0f0f0;
    border-bottom: 1px solid #d9d9d9;
}
.search-wrapper{
    float:left;
    padding: 5px 0 5px 5px;
    width: 288px;
}
 .search-input{
    display: block;
    width: 100%;
    height: 100%;
    padding: 0 5px 1px 30px;
    font-size: 12px;
    background: #fff;
    border: 1px solid;
    border-color: #d4d4d4;
    border-radius: 3px;
}
.search-clear{
    border-radius: 50%;
    font-size: 12px;
    color: #fff;
    border: 0;
    right: 12px;
    top: 17px;
}
.search-icon{
    left: 12px;
    top: 16px;
    font-size: 15px;
    color: #ccc;
}
</style>