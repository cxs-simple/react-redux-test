import React, { Component } from 'react';
// 引入store
import store from './redux/store';
// 引入Count的容器组件
import Count from './container/Count'

class App extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递store */}
        <Count store={store}/>
      </div>
    );
  }
}

export default App;