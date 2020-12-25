import React, { useState, useForm } from 'react'
import { Table, Popconfirm, Button, Form, Input } from 'antd'
import { v4 as uuid } from 'uuid'

 const MyTable = () => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');

  const init = [
    {
      key: '0',
      name: 'Edward King 0',
      age: '32',
      address: 'London, Park Lane no. 0',
    },
    {
      key: '1',
      name: 'Edward King 1',
      age: '32',
      address: 'London, Park Lane no. 1',
    },
  ]

  const [items, setItems] = useState(init)
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '30%',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
    },
    {
      title: 'address',
      dataIndex: 'address',
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record) => {
        if (!items.length) return null

        const edittable = isEditting(record)

        items.length >= 1 ? (
          <>
            <Button onClick={() => edit(record)}>Edit</Button>

            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          </>
        ) : null
      }
        
    },
  ];

  const edit = record => {

  }

  const isEditing = record => record.key === editingKey;

  const handleDelete = key => {
    const newItems = items.filter(item => item.key !== key)
    setItems([...newItems])
  }

  const addNewItem = () => {
    setItems([
      ...items,
      {
        key: uuid(),
        name: 'Edward King 1',
        age: '32',
        address: 'London, Park Lane no. 1',
      },
    ])
  }

  const EditableCell = ({children, editting, dataIndex}) => {
    return (
      <>
        <td>
          {editting ? (
          <Form.Item
            name={dataIndex}
          >
            <Input />
          </Form.Item>
          ) : (
            children
          )}
        </td>
      </>
    )
  }

  return (
    <>
      <Button onClick={addNewItem}>Add</Button>
      <Form>
        <Table
            components={{
              body: {
                cell: EditableCell,
              },
            }}
            rowClassName={() => 'editable-row'}
            bordered
            dataSource={items}
            columns={columns}
          />
      </Form>
      
    </>
  )
}
export default MyTable

