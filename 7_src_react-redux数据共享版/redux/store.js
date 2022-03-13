
/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */

// 引入createStore函数，用于创建redux中最为核心的store对象
import {createStore, applyMiddleware} from 'redux'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
// 引入combineReducer函数，用于合并不同的reducer
import { combineReducers } from 'redux'
// 引入为Count组件服务的reducer
import countReducer from './reducers/count'
// 引入为Person组件服务的reducer
import personReducer from './reducers/person'

// 暴露store对象
export default createStore(
  combineReducers({
    countReducer,
    personReducer
  }),
  applyMiddleware(thunk)
)