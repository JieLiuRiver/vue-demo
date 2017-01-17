/** 
 *  actions 是组件内用来分发 mutations 的函数。
 * 它们接收 store 作为第一个参数。
 * 比方说，当用户点击 Toolbar 组件的添加按钮时，
 * 我们想要调用一个能分发 ADD_NOTE mutation 的 action
 */

export const addNote = ({
    dispatch
}) => {
    dispatch('ADD_NOTE');
}

export const editNote = ({
    dispatch
}, e) => {
    dispatch('EDIT_NOTE', e.target.value)
}

export const deleteNote = ({
    dispatch
}) => {
    dispatch('DELETE_NOTE')
}

export const updateActiveNote = ({
    dispatch
}, note) => {
    dispatch('SET_ACTIVE_NOTE', note)
}

export const toggleFavorite = ({
    dispatch
}) => {
    dispatch('TOGGLE_FAVORITE')
}