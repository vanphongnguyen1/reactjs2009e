import React from 'react'
import Register from './components/Register/index'
import MyForm from './components/Form'
import './App.css'
import 'antd/dist/antd.css'

const App = () => {
  return (
    <>
      <Register />
      <hr />
      <MyForm />
    </>
  );
}

export default App;
