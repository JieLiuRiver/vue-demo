<template>
  <div class="f-ib f-w">
    <ul class="nav-list clearfix f-m0">
      <li class="nav-item f-pr f-fl" v-for="item in navlist">
        <span class="f-ib nav-link" data-id="{{item.id}}" v-link="{ path: item.router}" :class="{'active': item.isActive}">{{item.name}}</span>
      </li>
      <li class="search-item icon-item f-ib f-fl" style="padding-right: 0; margin-right:-8px; padding-top: 3px;" v-el:search-item-hook>
        <input type="text" name="" class="search-input" value="" placeholder="关键词" :style="{'width': searchInputWidth + 'px'}">
        <Icon type="search" @click="showSearchInput"></Icon>
      </li>
      <li class="search-item icon-item f-ib f-fl" style="padding-left: 0;" :class="{'close-btn-margin0': searchInputWidth !== 0, 'close-btn-marginl': searchInputWidth === 0}"
        v-if="searchInputWidth !== 0" v-el:close-btn>
        <Icon type="ios-close-empty" @click="closeSearchInput"></Icon>
        </li>
        <li class="search-item icon-item f-ib f-fl">
          <Icon type="person" v-link="{path: '/login'}"></Icon>
        </li>
        <li class="search-item icon-item f-ib f-fl f-pr">
          <Icon type="android-cart"></Icon>
          <span class="cart-amount f-pa">0</span>
        </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        navlist: this.$store.state.navlist,
        searchinputwidth: 0
      }
    },
    computed: {
      searchInputWidth() {
        return this.searchinputwidth;
      }
    },
    methods: {
      _choseNav() {
        switch (this.$router._currentRoute.path) {
          case '/home':
            this._choseNavWork(0);
            break;
          case '/productlist':
            this._choseNavWork(1);
            break;
          case '/blog':
            this._choseNavWork(2);
            break;
          case '/special':
            this._choseNavWork(3);
            break;
        }
      },
      _choseNavWork(idx) {
        this.$store.state.navlist.forEach((item, index) => {
          item.isActive = false;
        });
        this.$store.state.navlist[idx]['isActive'] = true;
      },
      showSearchInput() {
        this.searchinputwidth = 132;
      },
      closeSearchInput() {
          this.searchinputwidth = 0;
      }
    },
    ready() {
      this._choseNav()
    }
  }

</script>
<style>
  .nav-list {}
  
  .nav-item {
    font-weight: 500;
    display: block;
    text-decoration: none;
    padding: 15px;
    white-space: nowrap;
    color: #424243;
    cursor: pointer;
  }
  
  .nav-link {
    color: #424243;
  }
  
  .nav-link:hover {
    color: #adadad;
  }
  
  .nav-item .active {
    color: #adadad;
  }
  
  .icon-item {
    padding: 15px;
    font-size: 16px;
  }
  
  .cart-amount {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #000;
    color: #fff;
    line-height: 14px;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    text-indent: 1px;
    right: 4px;
    top: 8px;
  }
  
  .search-input {
    width: 132px;
    height: 39px;
    border: 0;
    border-bottom: 2px solid #000;
    background: #e2e2e2;
    padding-top: 5px;
    font-size: 12px;
    color: #555;
    transition: .5s all ease;
  }
  
  .ivu-icon-search {
    top: 4px;
    right: 19px;
    position: relative
  }
  
  .close-btn-marginl {
    margin-left: -20px;
  }
  
  .close-btn-margin0 {
    margin-left: 0;
  }

</style>
