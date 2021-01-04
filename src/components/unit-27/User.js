import React, {useEffect} from 'react'
import {setuser as setUserAction, getInfo as getInfoAction} from '../redux/actions/user'
import {useDispatch} from 'react-redux'
import {fetchUser} from '../../api/user'

const User = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    fetchUser(3)
      .then(response => {
        dispatch(setUserAction(response.data))
      })
  }, [])

  const getInfo = () => {
    dispatch(getInfoAction('comments'))
  }

  return (
    <>
      <h1>Test User</h1>
      <button onClick={getInfo}>Get INFO</button>
    </>
  )
}

export default User
