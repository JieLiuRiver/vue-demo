<template>
    <div class="linkMore-wrapper f-w">
        <div class="text f-h f-w f-tc" @click="showMore">
          {{text}}
        </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/base.styl"

    .linkMore-wrapper
      border-top: 1px solid #cecece
      r1(height, 52)
      .text
        r1(line-height, 52)
        color: rgba(0,0,0,.6)
        r1(font-size, 15)
</style>
<script>
  export default{
    props: {
      text: {
        type: String,
        default: '更多'
      }
    },
    methods: {
      showMore() {
        alert('开发中...')
      }
    }
  };
</script>
