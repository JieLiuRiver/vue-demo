import Vue from 'vue';
import Vuex from 'vuex';

// 注册vuex
Vue.use(Vuex);

/*
    store.js 里面的状态对象会包含所有应用级别的状态，也就是各个组件需要共享的状态
    笔记列表( notes: [] )包含了 NodesList 组件要渲染的 notes 对象。
    当前笔记(activeNote: {})则包含当前选中的笔记对象，多个组件都需要这个对象：
*/
const state = {
    notes: [],
    activeNote: {}
}

/**
 * 
 * 要实现的 mutation 方法包括：
添加笔记到数组里 (state.notes)
把选中的笔记设置为「当前笔记」(state.activeNote)
删掉当前笔记
编辑当前笔记
收藏/取消收藏当前笔记
 */
const mutations = {
    ADD_NOTE(state) {
        const newNote = {
            text: 'New note',
            favorite: false
        }
        state.notes.push(newNote)
        state.activeNote = newNote
    },

    EDIT_NOTE(state, text) {
        state.activeNote.text = text
    },

    DELETE_NOTE(state) {
        state.notes.$remove(state.activeNote)
        state.activeNote = state.notes[0]
    },

    TOGGLE_FAVORITE(state) {
        state.activeNote.favorite = !state.activeNote.favorite
    },

    SET_ACTIVE_NOTE(state, note) {
        state.activeNote = note
    }
}

export default new Vuex.Store({
    state,
    mutations
});