import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './redux/reducers'
import Thunk from 'redux-thunk'

const myMiddleware = applyMiddleware(Thunk)
const myCompose = compose(
  myMiddleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

const store = createStore(
  rootReducer,
  myCompose
)

export default store

//
