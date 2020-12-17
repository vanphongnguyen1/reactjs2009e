import React from 'react'
import Counter from './Counter';

class MyRef extends React.Component {
  constructor(props) {
    super(props)
    this.myH2 = React.createRef()
    this.myCount = React.createRef()
  }

  handleH2Color = () => {
    const h2 = this.myH2.current
    // console.log(h2)
    if(!h2.style.background || h2.style.background === 'red') {
      h2.style.background = 'green'
    } else {
      h2.style.background = 'red'
    }
  }

  componentDidMount() {
    this.handleH2Color()
    console.log(this.myCount)
  }

  increment = () => {
    if (this.myCount.current) {
      this.myCount.current.increment()
    }

  }

  render() {

    return (
        <>
          <h1>hhhhhhhhhhhhhhhhhhhhhhhhhh</h1>
          <h2 ref={this.myH2}>aaaaaaaaaaaaaaaaaaaa</h2>
          <button  onClick={this.handleH2Color}>Thay mau h2</button>
          <hr />
          <Counter ref={this.myCount}/>
          <hr/>
          <button onClick={this.increment}>INCRENENT BY PARENT</button>
        </>
      );
  }
}

export default MyRef;
