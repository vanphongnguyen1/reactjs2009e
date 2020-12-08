import React from 'react'
import Input from './Input'
import Tags from './Tags'
import List from './List'

class Body extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTag: '',
      list: []
    }
  }

  setCurrentTag = tag => {
    this.setState({
      currentTag: tag,
    })
  }

  addNewTask = item => {
    this.setState({
      list: [...this.state.list, item]
    })
  }

  removeTag = task => {
    this.setState({
      list: this.state.list.filter(item => item.uuid !== task.uuid)
    })
  }

  render() {
    const { currentTag, list } = this.state
    return (
      <>
        <Input
          currentTag={ currentTag }
          addNewTask={ this.addNewTask }
        />

        <Tags
          currentTag={ currentTag }
          setCurrentTag= { this.setCurrentTag }
        />

        <List
          list={ list }
          currentTag={ currentTag }
          removeTag={ this.removeTag }
        />
      </>
    )
  }
}

export default Body
