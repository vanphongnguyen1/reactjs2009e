import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    return (
      <>
        <h3>{this.state.count}</h3>
        <button onClick={this.increment}>INCRENENT</button>
      </>
    )
  }
}

export default Counter;
