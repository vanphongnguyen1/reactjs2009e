import React from 'react';
// import UserList from './components/unit-23/UserList';
// import axios from 'axios';
// import {MyGlobalContext} from './context/MyGlobalContext'
// import TestUseMemo from './components/unit-23/UseMemo'
// import ClipLoader from "react-spinners/ClipLoader";
// import MyTable from "./components/unit-24/MyTable";
import TestUseReducer from './components/unit-24/useReducer';
import 'antd/dist/antd.css'

const App = () => {

  // chuyền data đồng thời chuyền 1 hàm thay đổi value, trong input
  // context bối cảnh các thằng con có thể chọc đến(k lên đặt ở app, lên chia nhỏ Context, mỗi context lên chứa vài Conponent)
  // Provider cung cấp data(chuyền data đi)
  //Consumer sd data(Tiêu thụ)
  // const h1 = useRef(null)

  // const [loading, setLoaing] = useState(true)

  // const getCurrenUser = id => {
  //   axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(response => {
  //       const user = response.data
  //       setGContext({user})
  //       setLoaing(false)
  //     })
  // }

  // useEffect(() => {
  //   getCurrenUser(3)
  // }, [])
  // useEffect(() => {
  //   console.log(h1)
  // }, [h1])

  return (
    <>
      {/* <MyGlobalContext.Provider value="">
        <TestUseMemo/>
        { gContext.user && <UserList />}
      </MyGlobalContext.Provider> */}
      {/* <MyTable /> */}
      <TestUseReducer />
    </>
  )
}

export default App;