import {SET_USER, SET_USERS} from '../actionType'

const init = {
  user: null,
  users: []
}

const userReducer = (state = init, action) => {
  switch(action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    case SET_USERS:
      return {
        ...state,
        users: action.payload
      }
    default:
      return state
  }
}

export default userReducer
