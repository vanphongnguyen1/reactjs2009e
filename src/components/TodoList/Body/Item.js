import React from 'react';
import { ContextTasks } from '../Context/ContextInput'

const Item = props => {

  const onClickClose = (id, tasks, setTasks) => {
    tasks = tasks.filter(task => task.id !== id)
    setTasks(tasks)
  }

  const onClickChecked = (id, tasks, setTasks) => {
    const handleTask = tasks.find(task => task.id === id)
    handleTask.checked = !handleTask.checked
    setTasks(tasks)
    // console.log(tasks)
  }

  return(
    <>
      <ContextTasks.Consumer>
        {
          globalTasks => (
            <li className="box-todo__item">
              <span
                className="box-todo__link"
                onClick={() => onClickChecked(props.task.id, globalTasks.tasks, globalTasks.setTasks)}
              >
                <span
                  className={
                    props.task.checked ?
                    'box-todo__link--dot checked' :
                    'box-todo__link--dot'
                  }
                />

                <span
                  className={
                    props.task.name.length > 35 ?
                    'box-todo__link--text max-text' :
                    'box-todo__link--text'
                  }
                >
                  {props.task.name}
                </span>
              </span>

              <span
                className="fa fa-times box-todo__item--colse"
                onClick={() => onClickClose(props.task.id, globalTasks.tasks, globalTasks.setTasks)}
              />
            </li>

          )
        }
      </ContextTasks.Consumer>
    </>
  )
}

export default Item;
