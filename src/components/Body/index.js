import React, { useState } from 'react';
import Form from './Form/index';
import BoxTable from './BoxTable/index';
import {ContextUser} from '../Context/Context';
import '../../App.css'

const Body = () => {
  const [users, setUsers] = useState([])
  const [userChecked, setUserChecked] = useState([])
  const [form, setForm] = useState(true)

  return (
    <>
      <div className="container">
        <ContextUser.Provider
          value={{
            users,
            setUsers: setUsers,
            userChecked,
            setUserChecked: setUserChecked,
            setForm: setForm
          }}
        >
          {
            form && <Form />
          }
          <BoxTable />
        </ContextUser.Provider>
      </div>
    </>
  )
}

export default Body
