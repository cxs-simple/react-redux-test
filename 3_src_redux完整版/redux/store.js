
/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */

// 引入createStore函数，用于创建redux中最为核心的store对象
import {createStore} from 'redux'
// 引入为Count组件服务的reducer
import countReducer from './count_reducer'

// 暴露store对象
export default createStore(countReducer)