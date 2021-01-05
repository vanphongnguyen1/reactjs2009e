import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useHistory} from 'react-router-dom'
import { Radio } from 'antd'



const User = () => {
  const [user, setUser] = useState(null)
  const param = useParams()
  const history = useHistory()

  console.log('=-------history:', history)
  const fetchUser = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${param.id}`)
      .then(response => {
        setUser(response.data)
      })
  }

  useEffect(() => {
    fetchUser()
  }, [param])

  const onChange = event => {
    const value = event.target.value
    history.push(`/users/${value}`)
  }
  return (
    <>
      <h1>User</h1>
      {
        user &&
        <>
          <p>id: {user.id}</p>
          <p>name: {user.name}</p>
          <p>email: {user.email}</p>
        </>
      }

    <Radio.Group onChange={onChange}>
      <Radio.Button value="1">User 1</Radio.Button>
      <Radio.Button value="2">User 2</Radio.Button>
      <Radio.Button value="3">User 3</Radio.Button>
    </Radio.Group>
    </>
  )
}

export default User
