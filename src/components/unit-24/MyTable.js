// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import { Table, Popconfirm, Button, Form, Input, Select, Spin } from 'antd'
import { v4 as uuid } from 'uuid'
import axios from 'axios'

const SUBJECT_LIST = [
  {id: 1, name: 'reactjs'},
  {id: 2, name: 'nodejs'},
  {id: 3, name: 'Veujs'}
]

 const MyTable = () => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');
  const [subject, setSubject] = useState([])
  const [isLoadingSubject, setIsLoadingSubject] = useState(true)

  const init = [
    {
      key: '0',
      name: 'Edward King 0',
      age: '32',
      address: 'London, Park Lane no. 0',
      subject: 1
    },
    {
      key: '1',
      name: 'Edward King 1',
      age: '32',
      address: 'London, Park Lane no. 1',
      subject: 2
    },
  ]

  const [items, setItems] = useState(init)
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '30%',
      editable: true,
      onCell: (record) => {
        return {
          record,
          inputType: 'text',
          dataIndex: 'name',
          editing: isEditting(record),
        }
      }
    },
    {
      title: 'age',
      dataIndex: 'age',
      editable: true,
      onCell: (record, index) => {
        return {
          record,
          inputType: 'number',
          dataIndex: 'age',
          editing: isEditting(record),
        }
      }
    },
    {
      title: 'address',
      dataIndex: 'address',
      editable: true,
      onCell: (record, index) => {
        return {
          record,
          inputType: 'textarea',
          dataIndex: 'address',
          editing: isEditting(record),
        }
      }
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      editable: true,
      onCell: (record) => {
        return {
          record,
          inputType: 'select',
          dataIndex: 'subject',
          selectList: subject,
          currentSelected: record.subject,
          isLoadingSubject,
          editing: isEditting(record),
        }
      }
    },
    {
      title: 'operation',
      render: (text, record) => {
        if (!items.length) return null

        const edittable = isEditting(record)

        return (
          <>
            {
              edittable ? (
                <>
                  <Button onClick={() => save(record.key)}>Save</Button>
                  <Button onClick={cancel}>Calce</Button>
                </>
              ) : (
                <Button onClick={() => edit(record)}>Edit</Button>
              )
            }

            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
              <Button>Delete</Button>
            </Popconfirm>
          </>
        )
      }

    },
  ];

  const save = async key => {
    const record = items.filter(item => item.key === key)
    if (!record) {
      return
    }

    // validate
    const validateRult = await form.validateFields()
    // console.log(validateRult)

    const value = form.getFieldValue()
    if(Array.isArray(value)) {
      return ;
    }
    const index = items.findIndex(item => item.key === key)
    const item = items[index]
    const newData = {...item, ...value}
    items[index] = newData
    // index.splice(index, 1, newData)
    setItems([...items])
    setEditingKey('')

  }

  const edit = record => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key)
  }

  const cancel = () => {
    setEditingKey('')
  }

  const isEditting = record => record.key === editingKey;

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

  const fetchSubject = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/2')
    .then(() => {
      setSubject(SUBJECT_LIST)
      setIsLoadingSubject(false)
    })
  }

  useEffect(() => {
    fetchSubject()
  }, [])

  const EditableCell = ({children, editing, dataIndex, inputType, selectList, currentSelected, isLoadingSubject}) => {
    const isNomal = ['text', 'number', 'textarea'].includes(inputType)
    const isSelect = inputType === 'select'
    let renderEditting = null

    let NomalComponent = Input
    if (inputType === 'textarea') {
      NomalComponent = Input.TextArea
    }

    if(isNomal) {
      renderEditting = <NomalComponent
        type={inputType}
        
      />
    } else if (isSelect) {
      renderEditting = (
        <Select>
          {
            selectList.map(item => {
              return <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
            })
          }
        </Select>
      )
    }

    let renderReadOnly = children
    if (isSelect) {
      if (isLoadingSubject) {
        renderReadOnly =  <Spin tip="Loading..."/>
      } else {
        const item = selectList.find(item => item.id === currentSelected)
        renderReadOnly = item ? item.name : ''
      }
    }

    return (
      <>
        <td>
          {editing ? (
          <Form.Item
            name={dataIndex}
            rules={[
              { required: true, message: `Please input your ${dataIndex}!` }
            ]}
          >
            {renderEditting}
          </Form.Item>
          ) : (
            renderReadOnly
          )}
        </td>
      </>
    )
  }

  return (
    <>
      <Button onClick={addNewItem}>Add</Button>
      <Form form={form}>
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

