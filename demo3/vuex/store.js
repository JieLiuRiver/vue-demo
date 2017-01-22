import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let slidelistdata = [];
let navlistdata = [
    {
        navname: '作品',
        navid: 1,
        isActive: false
    },
    {
        navname: '评论',
        navid: 3,
        isActive: false
    },
    {
        navname: '其他',
        navid: 4,
        isActive: false
    }
];
for ( let i = 0; i < 100; i++ ) {
    slidelistdata.push({
        keyword: 'vuex'+ (i+1),
        isActive: false,
        falseActive: false,
        id: i+1
    });
}

const state = {
    slidelistdata: slidelistdata,
    navlistdata: navlistdata
};

const mutations = {
    TestAction(state) {
        state.test.push({
            name: "测试vuex",
            id: "1"
        });
    }
};

export default new Vuex.Store({
    state, 
    mutations
});