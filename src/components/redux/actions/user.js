import {
  SET_USER,
  SET_USERS,
  GET_INFO,
  GET_COMMENT,
  GET_POST
} from '../actionType'

export const setuser = payload => {
    return {
        type: SET_USER,
        payload
    }
}

export const setusers = payload => {
    return {
        type: SET_USERS,
        payload
    }
}

export const getComment = () => {
  return {
    type: GET_COMMENT
  }
}
export const getPost = () => {
  return {
    type: GET_POST
  }
}

export const getInfo = payload => dispatch => {
  if (payload === 'comments') {
    dispatch(getComment())
  } else {
    dispatch(getPost())
  }
}
