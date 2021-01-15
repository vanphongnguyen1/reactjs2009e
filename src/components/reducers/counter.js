import {DECREMENT, INCREMENT} from '../actionType'

const init = {
  count: 1,
  status: true
}

export const counterReducer = (state = init, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        status: action.payload
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        status: action.payload
      }
    default:
      return state
  }
}
