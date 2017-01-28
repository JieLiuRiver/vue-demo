import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  navlist: [{
      id: 1,
      isActive: true,
      name: '主页',
      router: '/home'
    },
    {
      id: 2,
      isActive: false,
      name: '商品列表',
      router: 'productlist'
    },
    {
      id: 3,
      isActive: false,
      name: '博客',
      router: 'blog'
    },
    {
      id: 4,
      isActive: false,
      name: '专题列表',
      router: 'special'
    },
    {
      id: 5,
      isActive: false,
      name: '关于',
      router: ''
    }
  ],
  swiperListData: [{
      url: "",
      id: 1,
      active: true
    },
    {
      url: "",
      id: 2,
      active: false
    }
  ],
  swiperTimer: null,
  productTypeData: [{
      value: 'all',
      label: '全部',
      parent: true
    },
    {
      value: 'jiaju',
      label: '家具',
      parent: true
    },
    {
      value: 'desk',
      label: '桌子',
      parent: false
    },
    {
      value: 'caizhi',
      label: '材质',
      parent: true
    },
    {
      value: 'muzhi',
      label: '木质',
      parent: false
    }
  ],
  productsData: [{
      id: 1,
      productname: '多sku商品',
      productprice: '¥ 100',
      url: '../../../public/images/product_1.png'
    },
    {
      id: 2,
      productname: '餐具',
      productprice: '¥ 1',
      url: '../../../public/images/product_2.jpg'
    },
    {
      id: 3,
      productname: '带盖小茶碗',
      productprice: '¥ 250',
      url: '../../../public/images/product_3.jpg'
    },
    {
      id: 4,
      productname: '纽扣',
      productprice: '¥ 5',
      url: '../../../public/images/product_4.jpg'
    },
    {
      id: 5,
      productname: '研磨的器皿',
      productprice: '¥ 66',
      url: '../../../public/images/product_5.jpg'
    },
    {
      id: 6,
      productname: '多功能手套',
      productprice: '¥ 20',
      url: '../../../public/images/product_6.jpg'
    },
    {
      id: 7,
      productname: '调料碗',
      productprice: '¥ 118',
      url: '../../../public/images/product_7.jpg'
    },
    {
      id: 8,
      productname: '木质方形笔盒',
      productprice: '¥ 288',
      url: '../../../public/images/product_8.jpg'
    },
    {
      id: 9,
      productname: '橡木圆桌',
      productprice: '¥ 1000',
      url: '../../../public/images/product_9.png'
    }
  ]
}

const mutations = {

}
export default new Vuex.Store({
  state: state,
  mutations: mutations
})
