import React from 'react';

class Tabs extends React.Component {

  onClick = e => {
    const tabs = document.querySelectorAll('.tab-bottom__box-tab .tab-group')

    for (let i = 0; i < tabs.length; i++ ) {
      tabs[i].classList.remove('active')
    }
    e.target.classList.add('active')
  }

  onClickAllTasks = e => {
    this.onClick(e)
    this.props.onClickAllTasks(this.props.dataTabs)
  }

  onClickActive = e => {
    this.onClick(e)
    this.props.onClickActive(this.props.dataTabs)
  }

  onClickCompleted = e => {
    this.onClick(e)
    this.props.onClickCompleted(this.props.dataTabs)
  }

  render() {
    const { tasks } = this.props
    const scountCompl = tasks.filter(task => task.checked === true)
    const scountActive = tasks.filter(task => !(task.checked === true))

    const list = JSON.parse(localStorage.getItem('tasks'))
      ? JSON.parse(localStorage.getItem('tasks'))
      : []

    const allCompl = list.filter(item => item.checked === true)
    const allActive = list.filter(item => !(item.checked === true))

    return(
      <>
        <div className="tab-bottom">
          <div className="tab-bottom__box-tab">
            <span
              className="tab-group tab-bottom__box-tab--all"
              onClick={ this.onClickAllTasks }
            >
              All Tasks
            </span>

            <span
              className="tab-group tab-bottom__box-tab--active"
              onClick={ this.onClickActive }
            >
              Active
            </span>

            <span
              className="tab-group tab-bottom__box-tab--completed"
              onClick={ this.onClickCompleted }
            >
              Completed
            </span>
          </div>

          <span className="tab-bottom__list-active">
            { scountActive.length } / { allActive.length} Active
          </span>

          <span className="tab-bottom__list-completed">
            { scountCompl.length } / { allCompl.length} Completed
          </span>
        </div>
      </>
    )
  }
}

export default Tabs;
