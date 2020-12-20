import React, {useState, useEffect} from 'react'

const Form = ({color}) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [score, setScore] = useState(0)
    // console.log(color)

    // useEffect(() => {
    //     console.log('lan dau')
    // }, [])
// để bắt vào lần đầu tiên render thì t chuyền vào []

    // useEffect(() => {
    //     console.log('cahy khi setState')
    // })
// mỗi khi state thay đổi thì thằng này chạy

    useEffect(() => {
        console.log('thay doi nam')
        return (
            console.log('ok xoas')
        )
    }, [])
// mỗi khi state "age" thay đổi thì thằng này sẽ chạy

    return (
        <>
            <h1>Component</h1>
            <p>Nhập tên:</p>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>

            <p>Nhập Tuổi:</p>
            <input type="number" value={age} onChange={e => setAge(e.target.value)}/>

            <p>Nhập Điểm:</p>
            <input type="number" value={score} onChange={e => setScore(e.target.value)}/>
        </>
    )
}

Form.defaultProps = {
    color: 'red'
}
export default Form
// lần 1 render
// 2 các lần render update
// 3 trước khi bị xóa khỏi DOM
// useEffect thay thế lifeCycle hồi trc
// hooks n sẽ nhảy vào 1 giai đoạn nào đó trong hàm
// hooks giúp code ngắn, kiểm soát dễ
// khi useEffect return trả về 1 func để bắt trường hợp khi Component sắp bị xóa khỏi DOM