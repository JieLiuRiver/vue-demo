/**
 *  actions 是组件内用来分发 mutations 的函数。
 * 它们接收 store 作为第一个参数。
 * 比方说，当用户点击 Toolbar 组件的添加按钮时，
 * 我们想要调用一个能分发 ADD_NOTE mutation 的 action
 */

export const TestAction = ({dispatch}) => {
  dispatch('TestAction');
}
