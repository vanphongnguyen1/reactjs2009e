import React from 'react'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  renderList = () => {
    let newList  = this.props.list
    const { currentTag }  = this.props
    if (currentTag) {
      newList = this.props.list.filter(task => task.group === currentTag)
    }
    return newList
  }

  render() {
    const list = this.renderList()
    return (
      <>
        <div className="list">
          {
            list.map((task, index) => {
              return(
                <div key={ index }>
                  <input type="checkbox" />
                  <span>{ task.name }</span>
                  <button onClick={() => this.props.removeTag(task)}>X</button>
                </div>
              )
            })
          }
        </div>
      </>
    )
  }
}

export default List
