import React from 'react'
import { v4 as uuid } from 'uuid'

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = e => {
    const { value } = e.target
    this.setState({
      value,
    })
  }

  onClick = e => {
    const { value } = this.state

    if (!value.trim()) {
      return alert('Hãy nhập nội dung task')
    }

    if ( !this.props.currentTag ) {
      return alert('Hãy chọn một Tag')
    }

    this.props.addNewTask({
      name: this.state.value,
      group: this.props.currentTag,
      uuid: uuid()
    })
  }

  render() {
    const { value } = this.state

    return (
      <>
        <input type="text" value={ value } onChange={ this.handleChange }/>
        <button onClick={ this.onClick }>add</button>
      </>
    )
  }
}

export default Input
