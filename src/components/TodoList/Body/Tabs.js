import React from 'react';

const Tabs = props => {
  const tasksCompleted = () => {
    return props.tasks.filter(task => {
      if (props.tag) {
        return task.ground === props.tag
      }
      return task
    })
  }

  const tasksActive = () => {
    return tasksCompleted().filter(task => task.checked)
  }

  return(
    <>
      <div className="tab-bottom">
        <div className="tab-bottom__box-tab">
          <span
            className={
              !props.completed ?
              'tab-group tab-bottom__box-tab--all active' :
              'tab-group tab-bottom__box-tab--all'
            }
            onClick={() => props.setCompleted('')}
          >
            All Tasks
          </span>

          <span
            className={
              props.completed === '0' ?
              'tab-group tab-bottom__box-tab--all active' :
              'tab-group tab-bottom__box-tab--all'
            }
            onClick={() => props.setCompleted('0')}
          >
            Active
          </span>

          <span
            className={
              props.completed === '1' ?
              'tab-group tab-bottom__box-tab--all active' :
              'tab-group tab-bottom__box-tab--all'
            }
            onClick={() => props.setCompleted('1')}
          >
            Completed
          </span>
        </div>

        <span className="tab-bottom__list-completed">
          {tasksActive().length} / {tasksCompleted().length} Completed
        </span>
      </div>
    </>
  )
}

export default Tabs;
