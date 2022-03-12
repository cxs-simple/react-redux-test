// 引入count的UI组件
import CountUI from '../../components/Count/'

// 引入action
import {incrementAction, decrementAction, incrementAsyncAction} from '../../redux/count_action'

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

/**
 * 1. mapStateToProps函数返回的是一个对象
 * 2. 返回的对象中的key就作为传递给UI组件props的key
 * 3. 返回的对象中的value就作为传递给UI组件props的value
 * 4. mapStateToProps用于传递状态
 * 
 * @param {*} state react-redux封装好传递给容器组件redux中的state值
 * @returns 返回一个对象
 */
const mapStateToProps = (state) => {
  return {count: state}
}

/**
 * 1. mapDispatchToProps函数返回的是一个对象
 * 2. 返回的对象中的key就作为传递给UI组件props的key
 * 3. 返回的对象中的value就作为传递给UI组件props的value
 * 4. mapDispatchToProps用于传递操作状态的方法
 * 
 * @param {*} dispatch react-redux封装好传递给容器组件redux中的dispatch
 * @returns 返回一个对象
 */
const mapDispatchToProps = (dispatch) => {
  return {
    // 通知redux操作加法
    increment: (number) => {dispatch(incrementAction(number))},
    // 通知redux操作减法
    decrement: (number) => {dispatch(decrementAction(number))},
    // 通知redux操作异步加法
    incrementAsync : (number, time) => {dispatch(incrementAsyncAction(number, time))}
  }
}
// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)