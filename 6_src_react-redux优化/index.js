import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 引入Provider
import { Provider } from 'react-redux';
import store from './redux/store'

ReactDOM.render(
  // 批量给所有容器组件传递store对象
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// 在index.js入口文件中，检测redux中状态值的变化
// 若redux的状态发生了该表，重新渲染组件（不需要每个组件都写）
// react-redux自动检测redux中状态值的变化进行重新渲染组件
// store.subscribe(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root'));
// });