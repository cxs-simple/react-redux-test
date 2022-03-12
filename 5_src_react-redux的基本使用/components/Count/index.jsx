import React, { Component } from 'react';

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

export default Count;