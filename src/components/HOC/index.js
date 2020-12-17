import React from 'react';
import Input from './Input';
import MyHOCContext from './MyHOCContext';


class MyHOC extends React.Component {
  state = {
    student: {
      name: 'Nguyễn A',
      score: 9
    }
  }


  render () {
    const { student } = this.state


    return (
      <MyHOCContext.Provider value={student}>
        <h1>HOC HOC </h1>

          <Input
            type="text"
            max="10"
            label="nhap ten"
          />

          <Input
            type="number"
            max={10}
            label="nhap tuoi"
          />

      </MyHOCContext.Provider>
    )
  }
}

export default MyHOC;
