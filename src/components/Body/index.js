import React, { useContext, useState } from 'react';
import Form from './Form/index';
import BoxTable from './BoxTable/index';
import {ContextUser} from '../Context/Context';

const Body = () => {
  const [users,setUsers] = useState([])

  return (
    <>
      <div className="container">
        <ContextUser.Provider value={{users, setUsers: setUsers}}>
          <Form />
          <BoxTable />
        </ContextUser.Provider>
      </div>
    </>
  )
}

export default Body
