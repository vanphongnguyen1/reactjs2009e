import {combineReducers} from 'redux'
import countReducer from './counter'
import reducerUser from './user'

const rootReducer = combineReducers({
  countReducer,
  reducerUser
})

export default rootReducer
