import React from 'react'
import Header from './Header'
import Body from './Body/index'
import './style.scss'

const TodoList = () => {
  return(
    <>
      <div className="todo-list">
        <Header />
        <Body />
      </div>
    </>
  )
}

export default TodoList;
