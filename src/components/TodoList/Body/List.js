import React from 'react';
import Item from './Item';

class List extends React.Component {

  renderList = () => {
    const { currentTag } = this.props
    let { tasks } = this.props

    if (currentTag) {
      return tasks = tasks.filter(task => task.group === currentTag)
    }
    return tasks
  }

  render() {
    const { completed } = this.props

    let newTask = this.renderList().filter(task => {
      if (completed === '1') {
        return task.checked
      }
      if (completed === '0') {
        return !task.checked
      }
      return task
    })

    return(
      <>
        <ul
          className={ newTask.length > 8
            ? 'box-todo__list overflowy'
            : 'box-todo__list'}
        >

          {
            newTask.map((task, index) => {
              return (
                <Item
                  task={ task }
                  key={ index }
                  removeTask={ this.props.removeTask }
                  onChecked={ this.props.onChecked }
                />
              )
            })
          }
        </ul>
      </>
    )
  }
}

export default List;
