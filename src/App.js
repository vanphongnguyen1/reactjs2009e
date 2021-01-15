import React from 'react'
import Count from './components/View/Count'
import Users from './components/View/Users'
import {Provider} from 'react-redux'
import {store} from './store'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


const App = () => {

  return (
    <>
      <Provider store={store}>
        <Count />
        <hr />
        <Users />
      </Provider>

    </>
  );
}

export default App;
