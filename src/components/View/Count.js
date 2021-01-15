import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '../actions/counter'

const Count = () => {
  const count = useSelector(state => state.counterReducer.count)
  const a = useSelector(state => state.counReducer.a)
  const status = useSelector(state => state.counterReducer.status)
  const dispatch = useDispatch()

  const incrementClick = () => {
    dispatch(increment(true))
  }
  const decrementClick = () => {
    dispatch(decrement(false))
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <h1>a: {a}</h1>
      {
        status ? <h1>Happy New Year</h1> : <h2>Waring</h2>
      }
      <button onClick={incrementClick}>Click Up</button>
      <button onClick={decrementClick}>Click Down</button>
    </>
  );
}

export default Count;
