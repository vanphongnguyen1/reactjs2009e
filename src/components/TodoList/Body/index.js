import React, { useState } from 'react'
import Input from './Input'
import Tags from './Tags'
import List from './List'
import Tabs from './Tabs'
import { ContextTasks } from '../Context/ContextInput'

const Body = () => {
  const [tasks, setTasks] = useState([])
  const [completed, setCompleted] = useState('')
  const [tag, setTag] = useState('')
  // console.log(tasks)

  const onPushTask = task => {
    setTasks([...tasks, task])
  }

  return(
    <>
      <div className="box-todo">
        <Input
          tag={tag}
          setTag={setTag}
          pushTask={onPushTask}
        />

        <Tags
          tag={tag}
          setTag={setTag}
        />

        <ContextTasks.Provider value={{tasks: tasks, setTasks: setTasks}}>
          <List
            completed={completed}
            tasks={tasks}
            tag={tag}
          />
        </ContextTasks.Provider>

        <Tabs
          completed={completed}
          setCompleted={setCompleted}
          tag={tag}
          tasks={tasks}
        />
      </div>
    </>
  )
}

export default Body;
