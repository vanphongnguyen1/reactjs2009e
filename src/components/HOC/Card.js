import React from 'react';

class Card extends React.Component {

  render () {
    return (
      <div style={{border: '1px solid red', padding: '10px'}}>
        { this.props.children }
      </div>
    )
  }
}

export default Card;
