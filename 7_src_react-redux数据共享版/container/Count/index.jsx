import React, { Component } from 'react';
// 引入action
import {incrementAction, decrementAction, incrementAsyncAction} from '../../redux/actions/count'
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
        <h2>我是Count组件，下方组件总人数为：{this.props.personCount}</h2>
        <h4>当前求和值为：{this.props.count}</h4>
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

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
  state => ({count: state.countReducer, personCount: state.personReducer.length}),
  {
    increment: incrementAction,
    decrement: decrementAction,
    incrementAsync: incrementAsyncAction
  }
)(Count)