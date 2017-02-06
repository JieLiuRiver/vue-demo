<script>
  export default{
    props: {

    },
    data() {
      return {
        tabs: this.$store.state.homeTabs
      }
    },
    computed: {

    },
    methods: {
      changeTab(tabItem) {
        this.tabs.forEach((item) => {
           item.isSelected = false
        })
        tabItem.isSelected = true
      },
      isHasActiveClass(item) {
        return item.isSelected ? item.iconActive : '';
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/base.styl"

  .tabbar-wrapper
    position: fixed
    left: 0
    bottom: 0
    right: 0
    z-index 100
    display: flex
    background: #fff
    border-top: 1px solid #e0e0e0
    .tab-item
      flex: 1
      -webkit-box-flex: 1
      r2(padding-top, 5, padding-bottom, 5)
      .tab-icon
        r2(width, 24, height, 24)
        r1(margin-bottom, 5)
        margin-top: 0
        margin-left: auto
        margin-right: auto
        background: #e2e2e2
        background-position: center
        background-repeat: no-repeat
        background-size: cover
      .tab-label
        text-align: center
        color: #999
      .icon-home
        background-image: url(./icon-home.png)
      .icon-home-active
        background-image: url(./icon-home-active.png)
      .icon-category
        background-image: url(./icon-category.png)
      .icon-category-active
        background-image: url(./icon-category-active.png)
      .icon-cart
        background-image: url(./icon-cart.png)
      .icon-cart-active
        background-image: url(./icon-cart-active.png)
      .icon-user
        background-image: url(./icon-user.png)
      .icon-user-active
        background-image: url(./icon-user-active.png)
    .active
      color: #FF5722

</style>
<template>
    <div class="tabbar-wrapper">
        <div class="tab-item"
             v-for="tabItem in tabs"
              @click="changeTab(tabItem)"
              v-link="{name:tabItem.routename}">
          <div class="tab-icon" :class="[tabItem.icon, isHasActiveClass(tabItem)]">
          </div>
          <div class="tab-label">{{tabItem.label}}</div>
        </div>
    </div>
</template>


