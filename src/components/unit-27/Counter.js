import React from 'react'
import { useDispatch } from 'react-redux'
import { increment as incrementAction } from '../redux/actions/counter'

const Counter = () => {
  const dispatch = useDispatch()
  const increment = () => {
    dispatch(incrementAction())
  }

  return (
    <>
      <h1>Counter</h1>
      <button onClick={increment}>Increment</button>
    </>
  )
}

export default Counter