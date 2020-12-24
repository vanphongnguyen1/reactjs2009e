import React, {useContext, useState} from 'react'
import { ContextUser } from '../../Context/Context'
import { Table, Space, Button, Popconfirm, InputNumber, Input, Select, Form } from 'antd'

const { Option } = Select
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = dataIndex === 'age' ?
    <InputNumber /> :
    dataIndex === 'gender' ?
    (
      <Select>
        <Option value="male">Male</Option>
        <Option value="female">Female</Option>
      </Select>
    ) :
     <Input />

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  )
}

const TableUser = () => {
  const [form] = Form.useForm()
  const globalContextUser = useContext(ContextUser)
  const [editingId, setEditingId] = useState('')
  const [data, setData] = [globalContextUser.users, globalContextUser.setUsers]

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
      render: (name, record) => (
        <div className="box_active-table">
          <Space size={5}>
            {
              editingId ?
                (
                  <>
                    <button type="button"
                      className="btn btn-success box_active-table--save"
                      onClick={() => save(record.id)}
                    >
                        Save
                    </button>
                    <Popconfirm
                      title="Sure to cancel?"
                      onConfirm={cancel}
                      okText="Yes"
                      cancelText="No"
                      placement="top"
                    >
                      <button type="button"
                        className="btn btn-warning box_active-table--cancel"
                      >
                          Cancel
                      </button>
                    </Popconfirm>
                    
                  </>
                ) :
                (
                  <Button type="primary" onClick={() => edit(record)}>
                    Edit
                  </Button>
                )
            }

            <Popconfirm
              title="Bạn muốn xóa User này!"
              placement="top"
              onConfirm={() => handleDelete(record)}
              okText="Yes"
              cancelText="No"
            >

              <Button type="danger">
                Delete
              </Button>
            </Popconfirm>
          </Space>
        </div>
      )
    },
  ]

  const edit = record => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    })
    setEditingId(record.id)
  }

  const isEditing = user => user.id === editingId

  const cancel = () => {
    setEditingId('')
  }

  const save = async key => {
    try {
      const row = await form.validateFields()
      const newData = [...data]
      const index = newData.findIndex((item) => key === item.id)

      if (index > -1) {
        const item = newData[index]
        newData.splice(index, 1, { ...item, ...row })
        setData(newData)
        setEditingId('')
      } else {
        newData.push(row)
        setData(newData)
        setEditingId('')
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo)
    }
  }

  const handleDelete = row => {
    const newUsers = data.filter(user => user.id !== row.id)
    setData(newUsers)
  }

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ?
          'number' :
          col.dataIndex === 'name' ?
          'text' :
          'gender',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    }
  })

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      globalContextUser.setUserChecked(selectedRows)
    },
    getCheckboxProps: record => ({
      name: record.name,
    }),
  };

  return (
    <Form form={form} component={false}>
      <Table
        rowSelection={{...rowSelection}}
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        rowKey="id"
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  )
}

export default TableUser
