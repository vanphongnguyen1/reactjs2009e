import {DECREMENT, INCREMENT} from '../actionType'


export const increment = count => ({
  type: INCREMENT,
  payload: count,
})

export const decrement = count => ({
  type: DECREMENT,
  payload: count,
})
