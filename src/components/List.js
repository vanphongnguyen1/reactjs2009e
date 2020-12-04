import React from 'react';
import Item from './Item';

class List extends React.Component {

  render() {
    const { tasks, onCloseItem, onChecked } = this.props

    const elements = tasks.map((task, index) => {
      return(
        <Item
          key={ index }
          task={ task }
          onCloseItem={ onCloseItem }
          onChecked= { onChecked }
        />
      )
    })

    return(
      <>
        <ul className={ tasks.length > 7 ? 'box-todo__list overflowy' : 'box-todo__list'}>
          { elements }
        </ul>
      </>
    )
  }
}

export default List;
