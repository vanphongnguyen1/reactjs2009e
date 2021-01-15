import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {List} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {users as usersAtion, hiddenUsers as hiddenUsersAction} from '../actions/users'

const Users = () => {
  const [users, setUsers] = useState([])
  const [isFetch, setIsFetch] = useState(true)

  const getListUsers = useSelector(state => state.users.listUser)
  const isUser = useSelector(state => state.users.status)
  const dispatch = useDispatch()

  const fetchUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data)
      })
  }

  const getUsers = () => {
    fetchUsers()
    const [...newUsers] = users
    dispatch(usersAtion(newUsers))
  }

  const hiddenUser = () => {
    setUsers([])
    dispatch(hiddenUsersAction([]))
    console.log('---user',users)
  }

  return (
    <>
      <h1>Users</h1>

          <List
            bordered
            dataSource={users}
            renderItem={user => (
              <List.Item>
                {user.name}
              </List.Item>
            )}
          />
      {
        isUser ? (
          <button onClick={getUsers}>Get Users</button>
        ) : (
          <button onClick={hiddenUser}>Hidden Users</button>
        )
      }

    </>
  );
}

export default Users;
