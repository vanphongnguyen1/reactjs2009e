import React from 'react';

class Tabs extends React.Component {

  countComplete = () => {
    const { tasks, currentTag } = this.props

    if (currentTag) {
      const data = tasks.filter(task => task.group === currentTag)
      return data
    }
    return tasks
  }

  render() {
    const countTag = this.countComplete()
    const count = countTag.filter(task => task.checked)

    return(
      <>
        <div className="tab-bottom">
          <div className="tab-bottom__box-tab">
            <span
              className="tab-group tab-bottom__box-tab--all"
              onClick={ this.props.onClickAllTasks }
            >
              All Tasks
            </span>

            <span
              className="tab-group tab-bottom__box-tab--active"
              onClick={ this.props.onClickActive }
            >
              Active
            </span>

            <span
              className="tab-group tab-bottom__box-tab--completed"
              onClick={ this.props.onClickCompl }
            >
              Completed
            </span>
          </div>

          <span className="tab-bottom__list-completed">
            {count.length} / { countTag.length } Completed
          </span>
        </div>
      </>
    )
  }
}

export default Tabs;
