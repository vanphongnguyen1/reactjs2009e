import axios from 'axios'
import React from 'react'

class Form extends React.Component {
  state = {
    ages: [1, 2, 3, 4, 5, 6],
    hobies: [
      { id: 1, name: 'Đá bóng'},
      { id: 2, name: 'Cầu lông'},
      { id: 3, name: 'Bóng chuyền'},
      { id: 4, name: 'Bơi'}
    ],
    form: {
      name: '',
      email: '',
      password: '',
      phone: '',
      note: '',
      age: '3',
      avatar: '',
      hobies: [],
      gender: ''
    }
  }

  onChange = e => {
    const { name, value, type, files } = e.target
    const { form } = this.state
    let newValue = value
    if (type === 'checkbox') {
      const oldHobbies = form[name]
      const isExist = oldHobbies.includes(value)
      if(isExist) {
        newValue = oldHobbies.filter(item => item !== value )
      } else {
        newValue = [...oldHobbies, value]
      }
    }

    if ( type === 'file') {
      const [img] = files
      newValue = img
    }

    this.setState({
      form: {
        ...this.state.form,
        [name]: newValue
      }
    })
  }

  onSubmit = e => {
    e.preventDefault()
    const { form } = this.state
    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('avatar', form.avatar)
    axios.post('sdasdd/asd', formData)
  }

  render() {
    const { ages, hobies, form } = this.state


    return (
      <>
        <h1>From</h1>
        <form onSubmit={this.onSubmit}>
        <table>
          <thead>
            <tr>
              <th>Nội dung</th>
              <th>Giá trị</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Họ tên:</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={this.onChange}
                />
              </td>
            </tr>

            <tr>
              <td>Email:</td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={this.onChange}
                />
              </td>
            </tr>

            <tr>
              <td>Mật khẩu:</td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={this.onChange}
                />
              </td>
            </tr>

            <tr>
              <td>Avata:</td>
              <td>
                <input type="file" name="avatar" onChange={this.onChange}/>
              </td>
            </tr>

            <tr>
              <td>SĐT:</td>
              <td>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={this.onChange}
                />
              </td>
            </tr>

            <tr>
              <td>Tổi:</td>
              <td>
                <select name="age" value={form.age} onChange={this.onChange}>
                  {
                    ages.map((age, index) => {
                      return <option
                        key={ index }
                        value={ age }
                      >
                        {age} Tuổi
                      </option>
                    })
                  }
                </select>
              </td>
            </tr>

            <tr>
              <td>Giới tính:</td>
              <td>
                <label htmlFor="">
                  <input type="radio" name="gender" value="male" onChange={this.onChange} checked={form.gender === 'male'} />Name
                </label>

                <label htmlFor="">
                  <input type="radio" name="gender" value="female" onChange={this.onChange} checked={form.gender === 'female'} />Nữ
                </label>
              </td>
            </tr>

            <tr>
              <td>Sở thích:</td>
              <td>
                {
                  hobies.map(hobby => {
                    return (
                      <label key={hobby.id}>
                        <input
                          type="checkbox"
                          name="hobies"
                          value={hobby.id}
                          defaultChecked={form.hobies.includes(hobby.id)}
                          onChange={this.onChange}
                        />
                        {hobby.name}
                      </label>
                    )
                  })
                }

              </td>
            </tr>

            <tr>
              <td>Ghi chú:</td>
              <td>
                <textarea
                  name="note"
                  value={form.note}
                  onChange={this.onChange}
                />
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <button onClick={this.onSubmit}>SUBMIT</button>
              </td>
            </tr>
          </tbody>
        </table>
        </form>
      </>
    )
  }
}

export default Form