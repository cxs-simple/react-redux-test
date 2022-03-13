/**
 * 该文件用于汇总所有的reducer为一个总的reducer
 */

// 引入combineReducer函数：用于合并不同的reducer
import { combineReducers } from "redux";
// 引入为Count组件服务的reducer
import count from './count'
// 引入为Person组件服务的reducer
import person from './person'

export default combineReducers({
  count,
  person
})
