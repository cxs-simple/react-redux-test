import React, { Component } from 'react';

class Count extends Component {

  // 初始化状态
  state = {count: 0}

  // + 法求和
  increatment = () => {
    // 获取下拉框选择值(value为字符串)
    const {value} = this.selectNumber;
    // 从状态中获取初始值
    const {count} = this.state;
    this.setState({count: count + value * 1});
  }

  // - 法求和
  decreatment = () => {
    // 获取下拉框选择值(value为字符串)
    const {value} = this.selectNumber;
    // 从状态中获取初始值
    const {count} = this.state;
    this.setState({count: count - value * 1});
  }

  // 奇数再加
  increatmentIfOdd = () => {
    // 获取下拉框选择值(value为字符串)
    const {value} = this.selectNumber;
    // 从状态中获取初始值
    const {count} = this.state;
    if (count % 2 !== 0) {
      this.setState({count: count + value * 1});
    }
  }

  // 异步加
  increatmentAsync = () => {
    // 获取下拉框选择值(value为字符串)
    const {value} = this.selectNumber;
    // 从状态中获取初始值
    const {count} = this.state;
    setTimeout(() => {
      this.setState({count: count + value * 1});
    }, 500)
  }

  render() {
    return (
      <div>
        <h2>当前求和值为：{this.state.count}</h2>
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