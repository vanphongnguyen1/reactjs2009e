import React from 'react'
import axios from 'axios'

export default class UserList extends React.Component {
  // https://jsonplaceholder.typicode.com/users
  state = {
    users: [],
    user: null
  }

  getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.setState({
          users: response.data
        })
      })
      .catch(err => {
        console.log('loi', err)
      })
  }

  componentDidMount() {
    this.getData()
  }

  onClick = user => {
    this.setState({
      user
    })
  }

  render() {
    const { users, user } = this.state
    return(
      <>
        <h1>aaaaaaaaaaaaaaaaaaaaaaaa</h1>
        {
          users.map(user => {
            return <li key={ user.id} onClick={() => this.onClick(user)}>{user.name}</li>
          })
        }

        { user && <p>{user.email}</p>}
      </>
    )
  }
}