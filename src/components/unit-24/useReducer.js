import React, {useReducer, useState} from 'react'

const myReducer = (data, action) => {
    console.log('------------data',data)
    console.log('------------action',action)
    if (action.type === 'INCREMENT') {
        return {
            ...data,
            age: action.age
        }
    }
    return data
}

const TestUseReducer = () => {
    const [count, setCount] = useState(1)
    const [countReducer, dispatch] = useReducer(myReducer, {age: 10, name: 'Abc'})
    return (
        <>
            <h1>Count: {count}</h1>
            <h1>countReducer: {countReducer.age}</h1>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
            <button onClick={() => dispatch({type: 'INCREMENT', age: 1})}>UseReducer!</button>
        </>
    )
}

export default TestUseReducer
