import {GET_USERS, HIDDENUSERS} from '../actionType'

const init = {
  listUser: [],
  status: true
}

export const users = (state = init, action) => {
  switch(action.type) {
    case GET_USERS:
      return {
        ...state,
        listUser: action.payload,
        status: true
      }
    case HIDDENUSERS:
      return {
        ...state,
        listUser: action.payload,
        status: false
      }
    default:
      return state
  }
}
