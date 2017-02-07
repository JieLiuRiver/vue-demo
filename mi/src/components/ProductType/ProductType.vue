<template>
    <div class="product-type-wrapper">
      <div class="title f-w f-tc">{{title}}</div>
      <div class="box">
        <div class="product" v-for="item in times" track-by="$index">
          <div class="img">
            <img :src="url" width="100%" height="100%">
          </div>
          <div class="name f-tc f-w">{{name}}</div>
        </div>
      </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/base.styl"

  .product-type-wrapper
    .title
      r2(height, 66, font-size, 14)
      font-weight: 400
      r1(line-height, 66)
    .box
      display: flex
      display: -webkit-flex
      flex-direction: row
      flex-wrap: wrap
      .product
        r2(flex-basis, 125, height, 93)
        r2(margin-top, 10, margin-bottom, 10)
        .img
          r2(height, 62.5, width, 62.5)
          margin: 0 auto
          overflow: hidden
          background-color: #fff
        .name
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          r2(height, 16, margin-top, 14)

</style>
<script>
  export default{
    props: {
      url: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
      times: {
        type: Number,
        default: 5
      },
      title: {
        type: String,
        default: ''
      }
    }
  };
</script>
