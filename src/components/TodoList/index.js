import React from 'react'
import Header from './Header'
import Body from './Body/index'
import './style.scss'

class TodoList extends React.Component {
  render() {
    return(
      <>
        <div className="todo-list">
          <Header />
          <Body />
        </div>
      </>
    )
  }
}

export default TodoList;
