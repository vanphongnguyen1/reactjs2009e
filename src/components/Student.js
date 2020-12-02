import React from 'react';
import PropTypes from 'prop-types';


class Student extends React.Component{
  componentWillUnmount() {
    console.log('--componentWillUnmount')
  }
  getGreaterThan5 = () => {
    this.props.getGreaterThan5()
  }
  render() {
    const { students } = this.props
    return(
      <>
        <h1>Tạo compoment</h1>
        <button onClick={ this.getGreaterThan5 }>Click me!</button>
        <ul>
          {
            students.map((student ,i) => {
              return <li key={ i }> { student.id } | { student.name } | { student.score } </li>
            })
          }
        </ul>
      </>
    )
  }
}


// đọc thêm prop-type
Student.propTypes = {
  students: PropTypes.array,
  getGreaterThan5: PropTypes.func.isRequired
}


// gán gtri mặc định
Student.defaultProps = {
  students: [],
}

export default Student;
