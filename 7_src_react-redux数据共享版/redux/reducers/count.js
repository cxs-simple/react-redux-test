/**
 * 1. 该文件用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
 * 2. reducer函数会接到俩个参数，分别为:之前的状态(preState)、动作对象(action)
 */
import {INCREMENT, DECREMENT} from '../constant'

 // 初始化状态
const initState = 0;
export default function countReducer(preState = initState, action){
  // 从action动作对象中获取：type和data
  const {type, data} = action;
  // 根据type决定如何加工数据
  switch (type) {
    case INCREMENT: // 加法
      return preState + data;
    case DECREMENT: // 减法
      return preState - data;
    default: 
      return preState;
  }
}