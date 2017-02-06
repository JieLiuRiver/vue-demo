import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  homeTabs: [
    {
      icon: "icon-home",
      iconActive: 'icon-home-active',
      label: '首页',
      id: 1,
      isSelected: true,
      routename: 'index'
    },
    {
      icon: 'icon-category',
      iconActive: 'icon-category-active',
      label: '分类',
      id: 2,
      isSelected: false,
      routename: 'category'
    },
    {
      icon: 'icon-cart',
      iconActive: 'icon-cart-active',
      label: '购物车',
      id: 3,
      isSelected: false,
      routename: 'cart-index'
    },
    {
      icon: 'icon-user',
      iconActive: 'icon-user-active',
      label: '我的',
      id: 4,
      isSelected: false,
      routename: 'user-index'
    }
  ],
  swiperTimer: null,
  isShowBackTop: false,
  isHasBg: false,
  searchIndex: {
    fList: [
      {
        picUrl: 'http://heliujie.com.img.800cdn.com/public/images/mi/index/flist.jpg',
        id: 1
      }
    ],
    searchkeys: [
      {
        text: '小米MIX',
        bgcolor: 'rgb(232, 246, 246)',
        bdcolor: 'bdc1'
      },
      {
        text: '红米4 超长续航',
        bgcolor: 'rgb(248, 242, 236)',
        bdcolor: 'bdc2'
      },
      {
        text: '小米Note 2',
        bgcolor: 'rgb(242, 246, 233)',
        bdcolor: 'bdc3'
      },
      {
        text: '小米5s',
        bgcolor: 'rgb(249, 234, 234)',
        bdcolor: 'bdc4'
      },
      {
        text: '笔记本',
        bgcolor: 'rgb(242, 246, 233)',
        bdcolor: 'bdc5'
      },
      {
        text: '小米电视3s',
        bgcolor: 'rgb(248, 242, 236)',
        bdcolor: 'bdc6'
      },
      {
        text: '智能电饭煲',
        bgcolor: 'rgb(249, 234, 234)',
        bdcolor: 'bdc7'
      }
    ],
    searchresults: [
      {
        text: '小米Note 2',
        productid: 1
      },
      {
        text: '小米MIX',
        productid: 2
      },
      {
        text: '小米手机5s',
        productid: 3
      },
      {
        text: '小米5s Plus',
        productid: 4
      },
      {
        text: '小米手机5',
        productid: 5
      },
      {
        text: '小米Max',
        productid: 6
      },
      {
        text: '小米平板 2',
        productid: 7
      },
      {
        text: '小米笔记本Air 12.5 英寸',
        productid: 8
      },
      {
        text: '小米笔记本Air 13.3 英寸',
        productid: 9
      }
    ]
  },
  categoryData: {
    navListData: [
      {
          navname: '手机·电话卡',
          id: 1,
          active: true
      },
      {
        navname: '笔记本·平板',
        id: 2,
        active: false
      },
      {
        navname: '电视·盒子',
        id: 3,
        active: false
      },
      {
        navname: '智能硬件·路由器',
        id: 4,
        active: false
      },
      {
        navname: '移动电源·插线板·电池',
        id: 5,
        active: false
      },
      {
        navname: '耳机·音箱·存储卡',
        id: 6,
        active: false
      },
      {
        navname: '小米生活方式',
        id: 7,
        active: false
      },
      {
        navname: '保护类配件',
        id: 8,
        active: false
      },
      {
        navname: '优惠套装',
        id: 9,
        active: false
      }
    ]
  }
}

const mutations = {

}
export default new Vuex.Store({
  state: state,
  mutations: mutations
})
