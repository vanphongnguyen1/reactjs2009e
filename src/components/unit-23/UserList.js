import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Table, Tag, Button, Popconfirm, Tooltip } from 'antd'
import {MyGlobalContext} from '../../context/MyGlobalContext'
import { UserOutlined, SearchOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
const UserList = () => {
    const [users, setUsers] = useState([])
    const gContext = useContext(MyGlobalContext)

    const deleteUser = user => {
        const newUsers = users.filter(u => u.id !== user.id)
        setUsers(newUsers)
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            fixed: 'left',
        },
        {
            title: 'NAME',
            dataIndex: 'name',
            key: 'name',
            render: (name, row) => {
                if (row.id === gContext.user.id) {
                    return (
                        <Tag closable={true}>
                            <UserOutlined />
                            {name}
                        </Tag>
                    )
                } else {
                    return name
                }
            }
        },
        {
            title: 'USER NAME',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'EMAIL',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Action',
            fixed: 'right',
            key: 'action',
            render: (cell, row) => {
                return (
                    <>
                        <Tooltip title="Tìm kiếm" trigger="click hover">
                            <Button shape="circle" icon={<SearchOutlined />} />
                        </Tooltip>

                        <Button shape="circle" icon={<EditOutlined />}  />
                        <Popconfirm
                            title="Are you sure to delete this task?"
                            onConfirm={() => deleteUser(row)}
                            onCancel={() => {}}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button
                                shape="circle"
                                icon={<DeleteOutlined/>}
                                danger
                            />
                        </Popconfirm>
                    </>
                )
            }
        },
    ]
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data)
        })
    }, [])

    return (
      <>
        <h1>asdsad</h1>
        <Table rowKey="id" dataSource={users} columns={columns}/>
      </>
    )
}

export default UserList;
