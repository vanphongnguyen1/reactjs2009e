import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {List} from 'antd'
import {Link} from 'react-router-dom'

const Users = () => {
  const [users, setUsers] = useState([])

  const fetchUsers = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        setUsers(response.data)
      })
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
       <List
        bordered
        dataSource={users}
        renderItem={user => (
          <List.Item>
            <Link to={`/users/${user.id}`}>
              {user.id}: {user.name}
            </Link>
          </List.Item>
        )}
      />
    </>
  )
}

export default Users
