import React, {useState, useContext} from 'react';
import { v4 as uuid } from 'uuid'
import { ContextUser } from '../../Context/Context'

const Form = () => {
  const initialState = {
    name: '',
    gender: 'female',
    age: ''
  }

  const [user, setUser] = useState(initialState);
  const globalContextUser = useContext(ContextUser)

  const onChange = e => {
    const {name, value} = e.target

    setUser({
      ...user,
      [name]: value,
      id: uuid()
    })
  }

  const handlePushUser = () => {
    globalContextUser.setUsers([...globalContextUser.users,user])
  }

  const onSubmit = e => {
    const { age, name } = user
    e.preventDefault()

    if (!name || !age) {
      return alert('Vui lòng điền đầy đủ các trường !')
    }

    handlePushUser()
    setUser({
      name: '',
      gender: 'female',
      age: ''
    })
  }

  return (
    <>
      <div className="popup-overlay">
        <form onSubmit={onSubmit}>
          <div className="box-popup">

            <span className="icon-close">
              <i className="fas fa-times" />
            </span>

            <h2 className="heading">Nhập Thông Tin</h2>

            <div className="form-group">
              <label >Full name:</label>

              <input
                type="text"
                className="form-control full-name"
                name="name"
                value={user.name}
                onChange={onChange}
                />
            </div>

            <div className="form-group">
              <label >Giới tính:</label>

              <select
                className="form-control gender"
                name="gender"
                value={user.gender}
                onChange={onChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="form-group">
              <label >Tuổi:</label>

              <input
                type="number"
                className="form-control age"
                name="age"
                value={user.age}
                onChange={onChange}
              />
            </div>

            <button
              type="button"
              className="btn btn-success btn-save"
              onClick={onSubmit}
            >
              Save
            </button>
          </div>
        </form>
          {/* <a href="#a" className="overlay-close"/> */}
      </div>
    </>
  )
}

export default Form
