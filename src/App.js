import React from 'react'
import Menu from './components/Menu'
import Quiz from './components/Quiz'
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
