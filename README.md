## 一. 求和案例_redux精简版
  1. 去除Count组件自身的状态
  2. src文件夹下建立：
      -redux
        -store.js
        -count_reducer.js

  3. store.js:
      a. 引入redux中的createStore函数，创建一个store
      b. createStore函数调用时要传入一个为其服务的reducer
      c. 暴露store对象

  4. count_reducer.js:
      a. reducer的本质是一个函数，接受：preState和action，返回加工后的状态
      b. reducer的俩个作用：初始化状态和加工状态
      c. reducer被第一次调用时，时store自动触发的
          传递的preState是undefined
          传递的action是{type: '@@REDUX/INIT...'}
  
  5. 在index.js文件中监测store中状态的改变，一旦发生改变重新渲染<App/>
      备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，需要自己写
