import React, {useContext} from 'react'
import { ContextUser } from '../../Context/Context'
import { Button, Space } from 'antd'
import { difference } from 'lodash'

const BtnOutTable = () => {
  const gContextUser = useContext(ContextUser)
  const {users, setUsers, userChecked, setUserChecked, setForm} = gContextUser

  const handleDeleteUserChecked = () => {
    const newData = difference(users, userChecked)

    setUsers(newData)
    setUserChecked([])
  }

  return (
    <>
      <div className="box-active">
        <Space size={5}>
          <Button
            type="primary"
            onClick={() => setForm(true)}
          >
            Add
          </Button>

          <Button type="danger" onClick={handleDeleteUserChecked}>
            Delete
          </Button>
        </Space>
      </div>
    </>
  )
}

export default BtnOutTable
