import React, {useState, useEffect, useRef} from 'react';
import UserList from './components/unit-23/UserList';
import axios from 'axios';
import {MyGlobalContext} from './context/MyGlobalContext'
import TestUseMemo from './components/unit-23/UseMemo'
// import ClipLoader from "react-spinners/ClipLoader";
import 'antd/dist/antd.css'

const App = () => {

  // chuyền data đồng thời chuyền 1 hàm thay đổi value, trong input
  // context bối cảnh các thằng con có thể chọc đến(k lên đặt ở app, lên chia nhỏ Context, mỗi context lên chứa vài Conponent)
  // Provider cung cấp data(chuyền data đi)
  //Consumer sd data(Tiêu thụ)
  const h1 = useRef(null)

  const [gContext,setGContext] = useState({
    user: null
  })
  const [loading, setLoaing] = useState(true)

  const getCurrenUser = id => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        const user = response.data
        setGContext({user})
        setLoaing(false)
      })
  }

  useEffect(() => {
    getCurrenUser(3)
  }, [])
  useEffect(() => {
    console.log(h1)
  }, [h1])

  return (
    <>
      <MyGlobalContext.Provider value={gContext}>
        <TestUseMemo/>
        <h2 ref={h1}>Aloooooooo</h2>
        {/* { gContext.user && <UserList />} */}
      </MyGlobalContext.Provider>
    </>
  )
}

export default App;