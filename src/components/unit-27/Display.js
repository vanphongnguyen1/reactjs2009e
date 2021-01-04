import React from 'react'
import {useSelector} from 'react-redux'

const Display = () => {
  const count = useSelector(state => state.countReducer.count)
  console.log(count)
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  )
}

export default Display
