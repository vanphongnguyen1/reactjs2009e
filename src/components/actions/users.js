import {GET_USERS, HIDDENUSERS} from '../actionType'

export const users = payload => {
  return {
    type: GET_USERS,
    payload
  }
}

export const hiddenUsers = payload => {
  return {
    type: HIDDENUSERS,
    payload
  }
}

