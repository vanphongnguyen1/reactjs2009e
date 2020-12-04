import React from 'react';
import Randomstring from 'randomstring'

class More extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: Randomstring.generate(7),
      text: '',
      checked: false,
    }
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  onPushTask = e => {
    this.props.onChangeTask(this.state)
    this.setState({
      id: Randomstring.generate(7),
      text: '',
      checked: false,
    })
  }

  render() {
    return(
      <>
        <div className="box-todo__more">
          <input
            type="text"
            name="text"
            className="box-todo__more--input"
            placeholder="What do you need to do ?"
            value={ this.state.text }
            onChange={ this.onChange }
          />

          <span
            className="fas fa-plus box-todo__more--icon"
            onClick={ this.onPushTask }
          />
        </div>
      </>
    )
  }
}

export default More;
