import React from 'react'
import Form from './components/Form'
import UserList from './components/UserList'
// import TodoApp from './components/TodoApp/index'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <>
        {/* <TodoApp /> */}
        {/* <Form />  */}
        <hr/>
        <UserList/>
      </>
    )
  }
}

export default App