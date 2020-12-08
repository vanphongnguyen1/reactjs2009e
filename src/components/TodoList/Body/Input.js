import React from 'react'
import { v4 as id } from 'uuid'

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  onHandleChange = e => {
    const { value } = e.target
    this.setState({
      value
    })
  }

  onClick = e => {
    const { value } = this.state
    if (!value.trim()) {
      return alert('Hãy nhập nội dung task')
    }

    if (!this.props.currentTag ) {
      return alert('Hãy chọn một Tag')
    }

    this.setState({
      value: ''
    })

    this.props.addTask({
      name: this.state.value,
      group: this.props.currentTag,
      id: id(),
      checked: false
    })
  }

  render() {
    const { value } = this.state
    return(
      <>
        <div className="box-todo__more">
          <input
            type="text"
            className="box-todo__more--input"
            placeholder="What do you need to do ?"
            value={ value }
            onChange={ this.onHandleChange }
          />

          <span
            className="fas fa-plus box-todo__more--icon"
            onClick={ this.onClick }
          />
        </div>
      </>
    )
  }
}

export default Input;
