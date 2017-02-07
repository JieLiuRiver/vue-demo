<template>
    <div class="blank-img-wrapper">
      <div class="blank"></div>
      <div class="img f-w">
        <img :src="url" width="100%" height="100%">
      </div>
      <div class="blank"></div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/base.styl"

    .blank-img-wrapper
      .blank
        r1(height, 8)
        width: 100%
        background-color: #f5f5f5
      .img
        r1(height, 104)
        border: 0
</style>
<script type="text/ecmascript-6">
  export default{
    props: {
      url: {
        type: String,
        default: ''
      }
    }
  };
</script>
