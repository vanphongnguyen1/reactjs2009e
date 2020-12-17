import React from 'react';
import Card from './Card';
import { MyGlobalContext } from '../../context/MyGlobalContext'
import MyHOCContext from './MyHOCContext'

class Input extends React.Component {
  state = {
    value: '',
    errorMessage: ''
  }
  componentDidMount() {
    console.log(this.context)
  }
  validate = value => {
    this.setState({
      errorMessage: ''
    })

    const { type, max } = this.props

    if (type === 'text' && value.length > max) {
      this.setState({
        errorMessage: `Do dai toi da ${max}`
      })
    }

    if (type === 'number' && value > max) {
      this.setState({
        errorMessage: `Do dai toi da ${max}`
      })
    }
  }

  onChange = e => {
    const {value} = e.target
    this.validate(value)
    this.setState({
      value
    })
  }

  render () {
    return (
      <MyGlobalContext.Consumer>
        {
          globalContextValue => (
            <div>
              <label>{this.props.label}</label>
              <input
                type={this.props.type || 'text'}
                onChange={this.onChange}
              />

              {
                this.state.errorMessage &&
                <p style={{color: 'red'}}>{this.state.errorMessage}</p>
              }
              <p>{globalContextValue.name}</p>

              <hr/>
              <MyHOCContext.Consumer>
                {
                  hocContext => (
                    <h2>{hocContext.name}</h2>
                  )
                }
              </MyHOCContext.Consumer>
              <button onClick={() => globalContextValue.changeAge(globalContextValue.age + 1)}>CHANGE AGE</button>
            </div>
          )
        }
      </MyGlobalContext.Consumer>
    )
  }
}

const InputCard = MyComponent => class _InputCard extends React.Component {
  render() {
    return(
      <>
        <Card>
          <MyComponent {...this.props}/>
        </Card>
      </>
    )
  }
}

// Input.contextType = MyGlobalContext
export default InputCard(Input)
