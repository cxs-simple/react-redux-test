import React, { Component } from 'react'
import { nanoid } from 'nanoid';
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person';

class Person extends Component {

  // 添加
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value * 1;
    const personObj = {id: nanoid(), name, age};
    this.props.addPerson(personObj)
    this.nameNode.value = '';
    this.ageNode.value = '';
  }

  render() {
    return (
      <div>
        <h2>我是Person组件，上方组件求和为{this.props.count}</h2>
        <input ref={current => this.nameNode = current} type="text" placeholder='请输入姓名'/>
        <input ref={current => this.ageNode = current} type="text" placeholder='请输入年龄'/>
        <input onClick={this.addPerson} type="button" value="添加" />
        <ul>
          {
            this.props.personList.map(personObj => {
              return <li key={personObj.id}>{personObj.name}----{personObj.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  // 映射状态
  state =>({
    personList: state.person,
    count: state.count
  }),
  // 映射操作状态的方法
  {addPerson}
)(Person)
