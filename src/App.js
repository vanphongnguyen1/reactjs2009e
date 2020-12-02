import React from 'react';
import Student from './components/Student'
import students, { youtube, fbUrl } from './constants/menu'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      students,
      isShowStudent: true
    }
  }

  componentWillMount() {
    console.log('-----componentWillMount')
  }
  componentDidMount() {
    console.log('-----componentDidMount')
  }

  getGreaterThan5 = () => {
    this.setState({
      students: this.state.students.filter(s => s.score > 5)
    })
  }


  // sử dụng khi thay đổi state mà k muốn render lại
  // kiểm soát render có cho render hay k
  // render là được vẽ vào DOM ảo
  // willUpdate, WillMount là được in da DOM thật
  shouldComponentUpdate(nextProps, nextState) {
    console.log('-----shouldComponentUpdate')
    console.log({
      oldState: this.state,
      nextState,
      old: this.props,
      nextProps,
    })
    return false
  }

  removeStudent = () => {
    this.setState({
      isShowStudent: true
    })
  }

  render() {
    console.log('-----render')
    return (
      <>
      <button onClick={ this.removeStudent }>Xóa!</button>
      { this.state.isShowStudent &&
        <Student
          students={ this.state.students }
          getGreaterThan5={ this.getGreaterThan5 }
        />
      }
        

        <Student
          getGreaterThan5={ this.getGreaterThan5 }
        />
      </>
    )
  }
}

export default App;
