/**
 * 该文件专门为Count组件生成action对象
 */
import {INCREMENT, DECREMENT} from './constant'

// 同步action: action的值为Object类型的一般对象
export const incrementAction = (data) => {return {type: INCREMENT, data}}
export const decrementAction = (data) => {return {type: DECREMENT, data}}

// 异步action: action的值为函数
// 异步action中一般都会调用同步action，异步action不是必须要用的
export const incrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(incrementAction(data))
    }, time);
  }
}