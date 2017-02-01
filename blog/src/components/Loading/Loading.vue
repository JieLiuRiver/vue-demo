<template>
    <div class="loading-wrapper f-w f-h" v-show="isLoading">
        <span class="f-pa f-ib loading-text">加载中...</span>
    </div>
</template>
<style>
    .loading-wrapper{
       position: absolute;
       left: 0;
       top: 0;
       background: rgba(0, 0, 0, .6);
       z-index: 30;
       cursor: wait;
    }
    .loading-text{
      width: 100px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      left: calc( 50% - 50px );
      top: calc( 50% - 15px );
      border: 1px solid #ccc;
      border-radius: 2px;
      color: #fff;
    }
</style>
<script>
  export default{
    props: {},
    data() {
      return {

      }
    },
    computed: {
      isLoading() {
        return this.$store.state.isLoading;
      }
    }
  };
</script>
