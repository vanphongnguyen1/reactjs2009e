import {combineReducers} from 'redux'
import {counterReducer} from './counter'
import {users} from './users'
import {counReducer} from './coun'

const myReducer = combineReducers({
  counterReducer,
  users,
  counReducer
})

export default myReducer
