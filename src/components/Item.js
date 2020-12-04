import React from 'react';

class Item extends React.Component {

  onHandleChecked = () => {
    this.props.onChecked(this.props.task.id)
  }

  onClose = () => {
    this.props.onCloseItem(this.props.task.id)
  }

  render() {
    const { task } = this.props
    return(
      <>
       <li className="box-todo__item">
          <span  className="box-todo__link">
            <span
              className={ task.checked ? 'box-todo__link--dot checked' : 'box-todo__link--dot'}
              onClick={ this.onHandleChecked }
            />

            <span
              className={ task.text.length >= 55
                ? 'box-todo__link--text max-text'
                : 'box-todo__link--text'}
            >
              { task.text }
            </span>
          </span>

          <span
            className="fa fa-times box-todo__item--colse"
            onClick={ this.onClose }
          />
        </li>
      </>
    )
  }
}

export default Item;
