import React from 'react'
import { Provider } from 'react-redux'
import store from './components/store'
import Counter from './components/unit-27/Counter'
import Display from './components/unit-27/Display'
import User from './components/unit-27/User'
import Pages from './components/pages'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


const App = () => {

  return (
    <>
      <Provider store={store}>
        <Counter />
        <Display />
        <User />
        <hr /><hr /><hr />
        <Pages />
      </Provider>
    </>
  );
}

export default App;
