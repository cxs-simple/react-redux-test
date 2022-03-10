import React, { Component } from 'react';
// 引入store，用于获取redux中保存的状态
import store from '../../redux/store'
// 引入actionCreator, 用于创建action对象
import {incrementAction, decrementAction} from '../../redux/count_action'

class Count extends Component {

  // componentDidMount() {
  //   // 检测redux中状态的变化，只要发生变化，就调用render重新渲染画面
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }

  // + 法求和
  increatment = () => {
    // 获取下拉框选择值(value为字符串)
    const {value} = this.selectNumber;
    // 使用dispatch通知reducer进行加法操作
    store.dispatch(incrementAction(value * 1))
  }

  // - 法求和
  decreatment = () => {
    // 获取下拉框选择值(value为字符串)
    const {value} = this.selectNumber;
    // 使用dispatch通知reducer进行减法操作
    store.dispatch(decrementAction(value * 1))
  }

  // 奇数再加
  increatmentIfOdd = () => {
    // 获取下拉框选择值(value为字符串)
    const {value} = this.selectNumber;
    // 从redux中获取当前值
    const count = store.getState()
    if (count % 2 !== 0) {
      // 使用dispatch通知reducer进行加法操作
      store.dispatch(incrementAction(value * 1))
    }
  }

  // 异步加
  increatmentAsync = () => {
    // 获取下拉框选择值(value为字符串)
    const {value} = this.selectNumber;
    setTimeout(() => {
      // 使用dispatch通知reducer进行加法操作
      store.dispatch(incrementAction(value * 1))
    }, 500)
  }

  render() {
    return (
      <div>
        <h2>当前求和值为：{store.getState()}</h2>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increatment}>+</button>&nbsp;
        <button onClick={this.decreatment}>-</button>&nbsp;
        <button onClick={this.increatmentIfOdd}>当前求和值为奇数时再加</button>&nbsp;
        <button onClick={this.increatmentAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}

export default Count;