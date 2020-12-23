import React, {useContext, useState} from 'react';
import { ContextUser } from '../../Context/Context'
import { Table, Space, Button, Popconfirm  } from 'antd'
const TableUser = () => {
  const globalContextUser = useContext(ContextUser)
  const [editingId, setEditingId] = useState('')

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      editable: true,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      editable: true,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      editable: true,
    },
    {
      title: 'Action',
      key: 'action',
      render: row => (
        <div className="box_active-table">
          <Space size={5}>
            {
              editingId ?
                (
                  <>
                    <button type="button"
                      className="btn btn-success box_active-table--save">
                        Save
                    </button>
                    <button type="button"
                      className="btn btn-warning box_active-table--cancel"
                      onClick={() => setEditingId('')}
                    >
                        Cancel
                    </button>
                  </>
                ) :
                (
                  <Button type="primary" onClick={() => handleEdit(row)}>
                    Edit
                  </Button>
                )
            }

            <Popconfirm
              title="Bạn muốn xóa User này!"
              placement="top"
              onConfirm={() => handleDelete(row)}
              okText="Yes"
              cancelText="No"
            >

              <Button type="danger" color="#F0AD4E">
                Delete
              </Button>
            </Popconfirm>
          </Space>
        </div>
      )
    },
  ]

  const handleEdit = row => {
    setEditingId(row.id)
  }

  // const isEditing = user => user.id === editingId

  const handleDelete = row => {
    const newUsers = globalContextUser.users.filter(user => user.id !== row.id)
    globalContextUser.setUsers(newUsers)
  }

  // const mergedColumns = columns.map(col => {
  //   if (!col.editable) {
  //     return col
  //   }
  //   return {
  //     ...col,
  //     onCell: record => ({
  //       record,
  //       inputType: col.dataIndex === 'age' ? 'number' : 'text',
  //       dataIndex: col.dataIndex,
  //       title: col.title,
  //       editing: isEditing(record),
  //     })
  //   }
  // })

  return (
    <>
      {
        globalContextUser.users &&
        <Table rowSelection={{}}
          rowKey="id"
          dataSource={globalContextUser.users}
          columns={columns} 
        />
      }
    </>
  )
}

export default TableUser
