import React from 'react'
import Input from './Input'
import Tags from './Tags'
import List from './List'
import Tabs from './Tabs'

class Body extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTag: '',
      completed: '',
      tasks: JSON.parse(localStorage.getItem('tasks'))
        ? JSON.parse(localStorage.getItem('tasks'))
        : [],
    }
  }

  setCurrentTag = tag => {
    this.setState({
      currentTag: tag,
    })
  }

  loCalData = tasks => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  addTask = task => {
    const newTasks = [...this.state.tasks, task]
    this.setState({
      tasks: newTasks,
    })
    this.loCalData(newTasks)
  }

  removeTask = id => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({
      tasks: newTasks,
    })
    this.loCalData(newTasks)
  }

  onChecked = id => {
    const { tasks } = this.state
    for( let i = 0; i < tasks.length; i++) {
      if(tasks[i].id === id) {
        tasks[i].checked = !tasks[i].checked
      }
    }

    this.setState({
      tasks: tasks
    })
    this.loCalData(tasks)
  }

  activeTabs = e => {
    const tabs = document.querySelectorAll('.tab-bottom__box-tab .tab-group')

    for (let i = 0; i < tabs.length; i++ ) {
      tabs[i].classList.remove('active')
    }
    e.target.classList.add('active')
  }

  onClickActive = e => {
    this.activeTabs(e)
    this.setState({
      completed: '0'
    })
  }

  onClickCompl = e => {
    this.activeTabs(e)
    this.setState({
      completed: '1'
    })
  }

  onClickAllTasks = e => {
    this.activeTabs(e)
    this.setState({
      completed: ''
    })
  }

  render() {
    const { currentTag, tasks, completed } = this.state

    return(
      <>
        <div className="box-todo">
          <Input
            currentTag={ currentTag }
            addTask={ this.addTask }
          />

          <Tags
            setCurrentTag={ this.setCurrentTag }
            currentTag={ currentTag }
          />

          <List
            tasks={ tasks }
            currentTag={ currentTag }
            completed={ completed }
            removeTask={ this.removeTask }
            onChecked={ this.onChecked }
          />

          <Tabs
             tasks={ tasks }
             currentTag={ currentTag }
             onClickAllTasks={ this.onClickAllTasks }
             onClickActive={ this.onClickActive }
             onClickCompl={ this.onClickCompl }
          />
        </div>
      </>
    )
  }
}

export default Body;
