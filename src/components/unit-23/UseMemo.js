import React, {useState, useMemo, useEffect, useReducer} from 'react'

const myReduce = (state, action) => {
    switch (action.type) {
        case 'INGREMENT':
            return {
                ...state,
                count: state.count + action.number
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }
    
        default:
            return state
    }
}

 const TestUseMemo = () => {
    const [state, dispatch] = useReducer(myReduce, {count: 2, name: 'asdasd'})

    return (
        <>
            <h1>
                UseMemo
            </h1>
            <h1>
                count: {state.count}
            </h1>
            <button onClick={() => dispatch({type: 'INGREMENT', number: 1 })}>Click me!</button>
            <button onClick={() => dispatch({type: 'INGREMENT', number: 2 })}>Click me!</button>

        </>
    )
}
export default TestUseMemo

