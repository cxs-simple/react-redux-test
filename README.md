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

## 二. 求和案例_redux完整版
  新增文件：
    1. count_action.js: 专门用于创建action对象
    2. constant.js: 放置容易写错的type值

## 三. 求和案例_redux异步action版
  1. 明确：延迟的动作不想交给组件本身，想交给action
  2. 何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回
  3. 具体编码：
    a. 安装 yarn add redux-thunk 并配置在store中
    b. 创建action的函数不在返回一般对象，而是一个函数，该函数中写异步任务
    c. 异步任务有结果后，分发一个同步的action去真正操作数据
  4. 备注：异步action不是必须要写的，完全可以自己等待异步任务的结束再去分发同步action

## 四. 求和案例_react-redux基本使用
  1. 明确俩个概念：
    (1) UI组件：不能使用任何redux的api，只负责页面的呈现、交互等
    (2) 容器组件：负责和redux通信，将结果交给UI组件
  2. 如何创建一个容器组件----靠react-redux的connect函数
    connect(mapStateToProps, mapDispatchToProps)(UI组件)
      - mapStateToProps: 映射状态，返回值是一个对象
      - mapDispatchToProps: 映射操作状态的方法，返回值是一个对象
  3. 备注：
      - 容器中的store是靠props传禁区的，而不是在容器组件中直接引入的
      - mapDispatchToProps也可以是一个对象

## 五. 求和案例_react-redux优化
  1. 容器组件和UI组件整合成一个文件
  2. 无需自己给容器组件传递store，给<App/> 包裹一个<Provider store={store}>即可
  3. 使用了react-redux后不需要再自己检测redux中状态的改变，容器组件可以自动完成这个任务
  4. mapDispatchToProps可以简单的写成一个对象
  5. 一个组件要和redux“打交道”需要经过哪几步？
      - 定义好UI组件---不暴露
      - 引入connect生成一个容器组件，并暴露，写法如下：
        connect(
          state => ({key: value}), // 映射状态
          {key: xxxxxAction} // 映射操作状态的方法
        )(UI组件)
      - 在UI组件中通过this.props.xxxxxx读取和操作状态