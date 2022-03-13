import { ADD_PERSON } from "../constant";

// 初始化Person列表
const initState = [{id: '001', name: 'Tom', age: 18}]
export default function personReducer(preState = initState, action) {
  // 从action对象中解构出type和data
  const {type, data} = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState]
    default:
      return preState;
  }
}