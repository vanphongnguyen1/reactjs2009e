import {DECREMENT, INCREMENT} from '../actionType'

const init = {
  a: 10,
  status: true
}

export const counReducer = (state = init, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        a: state.a + 2,
        status: action.payload
      }
    case DECREMENT:
      return {
        ...state,
        a: state.a - 1,
        status: action.payload
      }
    default:
      return state
  }
}
