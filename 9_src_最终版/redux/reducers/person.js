import { ADD_PERSON } from "../constant";

// 初始化Person列表
const initState = [{id: '001', name: 'Tom', age: 18}]
export default function personReducer(preState = initState, action) {
  // 从action对象中解构出type和data
  const {type, data} = action;
  switch (type) {
    case ADD_PERSON:
      // 此处不可以这样写，会导致preState被改写，personReducer就不是纯函数了
      // preState.unshift(data)
      return [data, ...preState]
    default:
      return preState;
  }
}