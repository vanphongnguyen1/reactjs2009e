import React, {useState, useMemo, useEffect} from 'react'

 const TestUseMemo = () => {
    const [count, setCount] = useState(1)
    const [name] = useState('asdasd')

    useEffect(() => {
        console.log('-------useEfff')
        return name
    },[name])

    useMemo(() => {
        console.log('-------useMemo')
        return name
    },[name])

    return (
        <>
            <h1>
                UseMemo
            </h1>
            <h1>
                {count}
            </h1>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
        </>
    )
}
export default TestUseMemo