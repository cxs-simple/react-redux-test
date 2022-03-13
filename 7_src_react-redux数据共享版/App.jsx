import React, { Component } from 'react';
// 引入Count的容器组件
import Count from './container/Count'
import Person from './container/Person';

class App extends Component {
  render() {
    return (
      <div>
        <Count/>
        <hr />
        <Person />
      </div>
    );
  }
}

export default App;