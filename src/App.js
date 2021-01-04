import React from 'react'
import { Provider } from 'react-redux'
import store from './components/store'
import Counter from './components/unit-27/Counter'
import Display from './components/unit-27/Display'
import User from './components/unit-27/User'

const App = () => {

  return (
    <>
      <Provider store={store}>
        <Counter />
        <Display />
        <User />
      </Provider>
    </>
  );
}

export default App;
