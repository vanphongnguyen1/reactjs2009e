import { createStore, applyMiddleware, compose } from 'redux'
import myReducer from './components/reducers'
import thunk from 'redux-thunk'

const myMiddleware = applyMiddleware(thunk)

const myCompose = compose(
  myMiddleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const store = createStore(
  myReducer,
  myCompose
)
