import React from 'react';
import Item from './Item';

const List = props => {
  const handleRender = () => {
    return props.tasks.filter(task => {
      if (props.tag) {
        return task.ground === props.tag
      }
      return task
    })
  }

  const newTask = handleRender().filter(task => {
    if (props.completed === '0') {
      return task.checked
    }
    if (props.completed === '1') {
      return !task.checked
    }
    return task
  })

  return(
    <>
      <ul
        className={
          handleRender().length > 8 ?
          'box-todo__list overflowy' :
          'box-todo__list'
        }
      >
        {
          newTask &&
          newTask.map((task, index) => (
            <Item
              task={task}
              key={index}
            />
          ))
        }
      </ul>
    </>
  )
}

export default List;
