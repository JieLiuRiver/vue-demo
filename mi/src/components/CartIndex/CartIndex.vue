<template>
    <div class="component-wrapper">
      <tabbar></tabbar>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/base.styl"
</style>
<script type="text/ecmascript-6">
  import tabbar from 'components/Tabbar/Tabbar'

  export default{
    props: {},
    components: {
      tabbar
    }
  };
</script>
