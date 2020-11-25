import React from 'react'
import Menu from './components/Menu/index'
import Quiz from './components/Quiz/index'
import './App.css'
import './components/FontAwesomeIcon'

class App extends React.Component {
  render() {
    return (
      <>
        <Menu/>
        <Quiz/>
      </>
    )
  }
}

export default App;
