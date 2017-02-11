<template>
    <div class="blank-img-wrapper">
      <div class="blank"></div>
      <a href="javascript:;" class="f-ib f-w">
        <div class="img f-w">
          <img :src="url" width="100%" height="100%">
        </div>
      </a>
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
        &:nth-of-type(2)
          margin-top: -2px
      a
        r1(height, 104)
        .img
          border: 0
          r1(height, 104)
</style>
<script>
  export default{
    props: {
      url: {
        type: String,
        default: ''
      }
    }
  };
</script>
