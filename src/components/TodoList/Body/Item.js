import React from 'react';

class Item extends React.Component {

  render() {
    const { task } = this.props
    return(
      <>
       <li className="box-todo__item">
          <span
            className="box-todo__link"
            onClick={ () => this.props.onChecked(task.id)}
          >
            <span
              className={ task.checked
                ? 'box-todo__link--dot checked'
                : 'box-todo__link--dot'}
            />

            <span
              className={ task.name.length >= 55
                ? 'box-todo__link--text max-text'
                : 'box-todo__link--text'}
            >
              { task.name }
            </span>
          </span>

          <span
            className="fa fa-times box-todo__item--colse"
            onClick={() => this.props.removeTask(task.id)}
          />
        </li>
      </>
    )
  }
}

export default Item;
