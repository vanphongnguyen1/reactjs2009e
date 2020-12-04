import React from 'react';
import More from './components/More'
import Tags from './components/Tags'
import List from './components/List'
import Tabs from './components/Tabs'
import './sass/style.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      tags: {
        home: false,
        work: false,
        school: false,
      },
      dataTabs: [],
    }
  }

  componentDidMount() {
    const list = JSON.parse(localStorage.getItem('tasks'))
      ? JSON.parse(localStorage.getItem('tasks'))
      : []

    this.setState({
      tasks: list,
      dataTabs: list
    })
  }

  onChangeTask = data => {
    const { tags } = this.state
    const list = JSON.parse(localStorage.getItem('tasks'))
      ? JSON.parse(localStorage.getItem('tasks'))
      : []

    if (data.text === '') {
      alert('Please enter a task')

    } else if (tags.home && !tags.work && !tags.school) {
      data.tags = {
        home: true,
        work: false,
        school: false,
      }
      list.push(data)

      const tasks = list.filter(item => item.tags.home)
      this.setState({
        tasks: tasks
      })
      localStorage.setItem('tasks',JSON.stringify(list))

    } else if (!tags.home && tags.work && !tags.school) {
      data.tags = {
        home: false,
        work: true,
        school: false,
      }
      list.push(data)

      const tasks = list.filter(item => item.tags.work)
      this.setState({
        tasks: tasks
      })
      localStorage.setItem('tasks',JSON.stringify(list))

    } else if (!tags.home && !tags.work && tags.school) {
      data.tags = {
        home: false,
        work: false,
        school: true,
      }
      list.push(data)

      const tasks = list.filter(item => item.tags.school)
      this.setState({
        tasks: tasks
      })
      localStorage.setItem('tasks',JSON.stringify(list))

    }else {
      alert('Please choose a tag')
    }
  }

  onCloseItem = id => {
    let { tasks } = this.state
    let list = JSON.parse(localStorage.getItem('tasks'))
      ? JSON.parse(localStorage.getItem('tasks'))
      : []

    tasks = tasks.filter(task => !(task.id === id))
    list = list.filter(item => !(item.id === id))

    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks',JSON.stringify(list))
  }

  onChecked = id => {
    let { tasks } = this.state
    let list = JSON.parse(localStorage.getItem('tasks'))
      ? JSON.parse(localStorage.getItem('tasks'))
      : []

    tasks.map(task => {
      if (task.id === id) {
        task.checked = !task.checked
      }
    })

    this.setState({
      tasks: tasks
    })

    list.map((item, i) => {
      tasks.map((task, index )=> {
        if (item.id === task.id && task.checked === true) {
          list.splice(i, 1, task)
        }
      })
    })

    localStorage.setItem('tasks',JSON.stringify(list))
  }

  onClickTags = params => {
    let list = JSON.parse(localStorage.getItem('tasks'))
      ? JSON.parse(localStorage.getItem('tasks'))
      : []

    if (params.toLowerCase() === 'all') {
      this.setState({
        tasks: list,
        tags: {
          home: false,
          work: false,
          school: false,
        },
        dataTabs: list
      })

    } else if (params.toLowerCase() === 'home') {
      list = list.filter(task => task.tags.home === true)

        this.setState({
          tasks: list,
          tags: {
            home: true,
            work: false,
            school: false,
          },
          dataTabs: list
        })

    } else if (params.toLowerCase() === 'work') {
      list = list.filter(task => task.tags.work === true)

        this.setState({
          tasks: list,
          tags: {
            home: false,
            work: true,
            school: false,
          },
          dataTabs: list
        })

    } else if (params.toLowerCase() === 'school') {
      list = list.filter(task => task.tags.school === true)

        this.setState({
          tasks: list,
          tags: {
            home: false,
            work: false,
            school: true,
          },
          dataTabs: list
        })
    }
  }

  onClickAllTasks = params => {
    this.setState({
      tasks: params
    })
  }

  onClickActive = params => {
    const tasks = params.filter(item => !item.checked)
    this.setState({
      tasks: tasks
    })
  }

  onClickCompleted = params => {
    const tasks = params.filter(item => item.checked)
    this.setState({
      tasks: tasks
    })
  }

  render() {
    const { tasks, dataTabs } = this.state

    return(
      <>
        <div className="todo-list">
          <h1 className="todo-list__heading">REACT TODO APP</h1>

          <div className="box-todo">
            <More
              onChangeTask={ this.onChangeTask }
            />

            <Tags
              tasks={ tasks }
              onClickTags={ this.onClickTags }
            />

            <List
              tasks={ tasks }
              onCloseItem={ this.onCloseItem }
              onChecked={ this.onChecked }
            />

            <Tabs
              tasks={ tasks }
              onClickAllTasks={ this.onClickAllTasks }
              onClickActive={ this.onClickActive }
              onClickCompleted={ this.onClickCompleted }
              dataTabs={ dataTabs }
            />
          </div>
        </div>
      </>
    )
  }
}

export default App;
