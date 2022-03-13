import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 引入Provider
import { Provider } from 'react-redux';
import store from './redux/store'

ReactDOM.render(
  // 此处需要使用Provider包裹App，目的是让App所有的后代容器组件都能接收到store
  // 批量给所有容器组件传递store对象
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);