import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

const Input = props => {
  const [task, setTask] = useState(
    {
      name: '',
    }
  )

  const onChange = e => {
    const { value } = e.target

    setTask({
      name: value
    })
  }

  const onSubmit = (e, func) => {
    e.preventDefault()

    if (!task.name) {
      return alert('Hãy nhập Task!')
    }
    if (!props.tag) {
      return alert('Vui lòng chọn nhóm Task!')
    }

    func({
      ...task,
      id: uuid(),
      checked: false,
      ground: props.tag
    })

    setTask({
      name: '',
    })

  }

  return(
    <>
      <div className="box-todo__more">
        <form onSubmit={(e) => onSubmit(e, props.pushTask)}>
          <input
            type="text"
            className="box-todo__more--input"
            placeholder="What do you need to do ?"
            value={task.name}
            onChange={onChange}
          />
        </form>

        <span
          className="fas fa-plus box-todo__more--icon"
          onClick={(e) => onSubmit(e, props.pushTask)}
        />
      </div>
    </>
  )
}

export default Input;
