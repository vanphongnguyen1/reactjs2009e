import React from 'react';
import MyRef from './components/MyRef';
import MyHOC from './components/HOC/index';
import {MyGlobalContext} from './context/MyGlobalContext'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contextValue: {
        name: '',
        age: 12
      }
    }
  }

  handleChange = e => {
    const { value } = e.target
    this.setState({
      contextValue: {
        ...this.state.contextValue,
        name: value
      }
    })
  }

  changeAge = value => {
    this.setState({
      contextValue: {
        ...this.state.contextValue,
        age: value
      }
    })
  }

  // chuyền data đồng thời chuyền 1 hàm thay đổi value, trong input
  // context bối cảnh các thằng con có thể chọc đến(k lên đặt ở app, lên chia nhỏ Context, mỗi context lên chứa vài Conponent)
  // Provider cung cấp data(chuyền data đi)
  //Consumer sd data(Tiêu thụ)
  render () {
    let { contextValue } = this.state
    return (
      <>
        <MyGlobalContext.Provider value={{...contextValue,changeAge: this.changeAge}}>
          <MyRef />
          <hr/>
          <MyHOC />
          <hr/>
          <input type="text" value={contextValue.name} onChange={this.handleChange}/>
        </MyGlobalContext.Provider>
      </>
    )
  }
}

export default App;
