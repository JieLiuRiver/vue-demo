<template>
  <section class="product-wrapper f-w">
    <h3 class="product-title">商品列表</h3>
    <div class="product-filter clearfix">
      <div class="product-filter-total f-fl">
        <span>共有<span>{{productsData.length}}</span>个商品</span>
      </div>
      <div class="product-filter-item f-fr">
        <i-select :model.sync="producttype" placeholder="全部" :size="large">
          <i-option v-for="item in productTypeData" :value="item.value">{{ item.label }}</i-option>
        </i-select>
      </div>
    </div>
    <div class="product-list f-w clearfix">
      <div class="product-item f-fl" v-el:product-item v-for="item in productsData" track-by="$index">
        <a href="javascript:void(0)" class="f-ib f-h f-w product-link">
          <div class="img-wrapper">
            <div class="img product-img f-h" :class="getImageClass(item.id)">
            </div>
          </div>
          <p class="text-ellipsis product-name f-w f-tc">{{item.productname}}</p>
          <div class="product-price f-tc">
            <span class="f-ib f-h">{{item.productprice}}</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        productTypeData: this.$store.state.productTypeData,
        producttype: '',
        // productsData: this.$store.state.productsData
      }
    },
    methods: {
      getImageClass(id) {
        return "product-image-" + id;
      }
    },
    computed: {
      productsData() {
        return this.$store.state.productsData
      }
    },
    watch: {
      producttype(value) {
        switch (value) {
          case 'all':
            this.$store.state.productsData = [{
                id: 1,
                productname: '多sku商品',
                productprice: '¥ 100',
                url: 'http://heliujie.com/public/works/qimin/public/images/product_1.png'
              },
              {
                id: 2,
                productname: '餐具',
                productprice: '¥ 1',
                url: 'http://heliujie.com/public/works/qimin/public/images/product_2.jpg'
              },
              {
                id: 3,
                productname: '带盖小茶碗',
                productprice: '¥ 250',
                url: 'http://heliujie.com/public/works/qimin/public/images/product_3.jpg'
              },
              {
                id: 4,
                productname: '纽扣',
                productprice: '¥ 5',
                url: 'http://heliujie.com/public/works/qimin/public/images/product_4.jpg'
              },
              {
                id: 5,
                productname: '研磨的器皿',
                productprice: '¥ 66',
                url: 'http://heliujie.com/public/works/qimin/public/images/product_5.jpg'
              },
              {
                id: 6,
                productname: '多功能手套',
                productprice: '¥ 20',
                url: 'http://heliujie.com/public/works/qimin/public/images/product_6.jpg'
              },
              {
                id: 7,
                productname: '调料碗',
                productprice: '¥ 118',
                url: 'http://heliujie.com/public/works/qimin/public/images/product_7.jpg'
              },
              {
                id: 8,
                productname: '木质方形笔盒',
                productprice: '¥ 288',
                url: 'http://heliujie.com/public/works/qimin/public/images/product_8.jpg'
              },
              {
                id: 9,
                productname: '橡木圆桌',
                productprice: '¥ 1000',
                url: 'http://heliujie.com/public/works/qimin/public/images/product_9.png'
              }
            ];
            break;
          case 'jiaju':
            this.$store.state.productsData = [{
              id: 9,
              productname: '橡木圆桌',
              productprice: '¥ 1000',
              url: 'http://heliujie.com/public/works/qimin/public/images/product_9.png'
            }];
            break;
          case 'desk':
            this.$store.state.productsData = [{
              id: 9,
              productname: '橡木圆桌',
              productprice: '¥ 1000',
              url: 'http://heliujie.com/public/works/qimin/public/images/product_9.png'
            }];
            break;
          case 'caizhi':
            this.$store.state.productsData = [{
                id: 2,
                productname: '餐具',
                productprice: '¥ 1',
                url: 'http://heliujie.com/public/works/qimin/public/images/product_2.jpg'
              },
              {
                id: 7,
                productname: '调料碗',
                productprice: '¥ 118',
                url: 'http://heliujie.com/public/works/qimin/public/images/product_7.jpg'
              },
              {
                id: 8,
                productname: '木质方形笔盒',
                productprice: '¥ 288',
                url: 'http://heliujie.com/public/works/qimin/public/images/product_8.jpg'
              }
            ];
            break;
          case 'muzhi':
            this.$store.state.productsData = [{
                id: 2,
                productname: '餐具',
                productprice: '¥ 1',
                url: 'http://heliujie.com/public/works/qimin/public/images/product_2.jpg'
              },
              {
                id: 7,
                productname: '调料碗',
                productprice: '¥ 118',
                url: 'http://heliujie.com/public/works/qimin/public/images/product_7.jpg'
              },
              {
                id: 8,
                productname: '木质方形笔盒',
                productprice: '¥ 288',
                url: 'http://heliujie.com/public/works/qimin/public/images/product_8.jpg'
              }
            ];
            break;
        }
      }
    },
    ready() {
      this.producttype = 'all';
    }
  }

</script>
<style>
  .product-wrapper {
    width: 1120px;
    margin: 0 auto;
  }

  .product-title {
    margin-top: 32px;
    margin-bottom: 32px;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    min-height: 22px;
  }

  .product-filter-total {
    width: 575px;
  }

  .product-filter-total span {}

  .product-filter-item {
    width: 230px;
    height: 44px;
  }

  .product-filter-item .ivu-select-selection {
    height: 44px;
    background-color: #e2e2e2;
    border-color: #d3d3d3;
  }

  .product-filter-item .ivu-select-selection .ivu-select-placeholder,
  .product-filter-item .ivu-select-selection .ivu-select-selected-value {
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    text-indent: 20px;
    color: #555;
  }

  .product-filter-item .ivu-select-dropdown {
    background-color: #e2e2e2;
  }

  .product-filter-item .ivu-select-dropdown .ivu-select-dropdown-list .ivu-select-item {
    font-weight: 500;
    font-size: 15px !important;
    color: #000;
    text-indent: 12px;
  }

  .product-filter-item .ivu-select-dropdown .ivu-select-dropdown-list .ivu-select-item:nth-of-type(3),
  .product-filter-item .ivu-select-dropdown .ivu-select-dropdown-list .ivu-select-item:nth-of-type(5) {
    text-indent: 36px;
    color: #666;
    font-weight: normal;
  }

  .product-filter-item .ivu-select-dropdown .ivu-select-dropdown-list .ivu-select-item:hover,
  .product-filter-item .ivu-select-dropdown .ivu-select-dropdown-list .ivu-select-item-selected {
    background-color: #555;
    color: #fff !important
  }

  .product-list {
    padding-top: 50px;
  }

  .product-item {
    width: calc( 100% / 3);
    height: 444px;
  }

  .product-link {
    padding: 20px;
    color: #424243;
    overflow: hidden;
  }

  .img-wrapper {
    margin-bottom: 15px;
    height: 333.33px;
  }

  .product-img {
    transition: 2s all cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .product-img:hover {
    transform: scale(1.05);
  }

  .product-image-1 {
    background-image: url(http://heliujie.com/public/works/qimin/public/images/product_1.png);
  }

  .product-image-2 {
    background-image: url(http://heliujie.com/public/works/qimin/public/images/product_2.jpg);
  }

  .product-image-3 {
    background-image: url(http://heliujie.com/public/works/qimin/public/images/product_3.jpg);
  }

  .product-image-4 {
    background-image: url(http://heliujie.com/public/works/qimin/public/images/product_4.jpg);
  }

  .product-image-5 {
    background-image: url(http://heliujie.com/public/works/qimin/public/images/product_5.jpg);
  }

  .product-image-6 {
    background-image: url(http://heliujie.com/public/works/qimin/public/images/product_6.jpg);
  }

  .product-image-7 {
    background-image: url(http://heliujie.com/public/works/qimin/public/images/product_7.jpg);
  }

  .product-image-8 {
    background-image: url(http://heliujie.com/public/works/qimin/public/images/product_8.jpg);
  }

  .product-image-9 {
    background-image: url(http://heliujie.com/public/works/qimin/public/images/product_9.png);
  }

  .product-name {
    font-size: 13px;
    line-height: 18px;
    min-height: 18px;
    font-weight: bold;
  }

  .product-price {
    height: 18px;
    line-height: 18px;
    font-weight: bold;
  }

  .product-name:hover,
  .product-price:hover {
    color: #666;
  }

</style>
