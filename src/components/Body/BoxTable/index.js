import React, {useContext} from 'react'
import BtnOutTable from './BtnOutTable'
import TableUser from './TableUser'
import { ContextUser } from '../../Context/Context'
import 'antd/dist/antd.css'

const BoxTable = () => {
  const globalContextUser = useContext(ContextUser)

  return (
    <>
      <div className="box-table">
        <BtnOutTable />
        <TableUser />
      </div>
    </>
  )
}

export default BoxTable
