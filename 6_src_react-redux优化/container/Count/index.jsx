import React, { Component } from 'react';
// 引入action
import {incrementAction, decrementAction, incrementAsyncAction} from '../../redux/count_action'
// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

// 定义UI组件
class Count extends Component {
  // + 法求和
  incretment = () => {
    // 获取下拉框选择值(value为字符串)
    const {value} = this.selectNumber;
    this.props.increment(value * 1);
  }

  // - 法求和
  decretment = () => {
    // 获取下拉框选择值(value为字符串)
    const {value} = this.selectNumber;
    this.props.decrement(value * 1);
  }

  // 奇数再加
  incretmentIfOdd = () => {
    // 获取下拉框选择值(value为字符串)
    const {value} = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1);
    }
  }

  // 异步加
  incretmentAsync = () => {
    // 获取下拉框选择值(value为字符串)
    const {value} = this.selectNumber;
    this.props.incrementAsync(value * 1, 500);
  }

  render() {
    return (
      <div>
        <h2>当前求和值为：{this.props.count}</h2>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.incretment}>+</button>&nbsp;
        <button onClick={this.decretment}>-</button>&nbsp;
        <button onClick={this.incretmentIfOdd}>当前求和值为奇数时再加</button>&nbsp;
        <button onClick={this.incretmentAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}

/**
 * 1. mapStateToProps函数返回的是一个对象
 * 2. 返回的对象中的key就作为传递给UI组件props的key
 * 3. 返回的对象中的value就作为传递给UI组件props的value
 * 4. mapStateToProps用于传递状态
 * 
 * @param {*} state react-redux封装好传递给容器组件redux中的state值
 * @returns 返回一个对象
 */
// const mapStateToProps = (state) => {
//   return {count: state}
// }

/**
 * 1. mapDispatchToProps函数返回的是一个对象
 * 2. 返回的对象中的key就作为传递给UI组件props的key
 * 3. 返回的对象中的value就作为传递给UI组件props的value
 * 4. mapDispatchToProps用于传递操作状态的方法
 * 
 * @param {*} dispatch react-redux封装好传递给容器组件redux中的dispatch
 * @returns 返回一个对象
 */
// const mapDispatchToProps = (dispatch) => {
//   return {
//     // 通知redux操作加法
//     increment: (number) => {dispatch(incrementAction(number))},
//     // 通知redux操作减法
//     decrement: (number) => {dispatch(decrementAction(number))},
//     // 通知redux操作异步加法
//     incrementAsync : (number, time) => {dispatch(incrementAsyncAction(number, time))}
//   }
// }

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
  state => ({count: state}),
  // mapDispatchToProps的一般写法（function）
  // dispatch => (
  //   {
  //     // 通知redux操作加法
  //     increment: (number) => {dispatch(incrementAction(number))},
  //     // 通知redux操作减法
  //     decrement: (number) => {dispatch(decrementAction(number))},
  //     // 通知redux操作异步加法
  //     incrementAsync : (number, time) => {dispatch(incrementAsyncAction(number, time))}
  //   }
  // )

  /**
   * mapDispatchToProps的简写（对象）
   * react-redux自动调用dispatch进行分发操作状态（不需要手写dispatch）
   */
  {
    increment: incrementAction,
    decrement: decrementAction,
    incrementAsync: incrementAsyncAction
  }
)(Count)