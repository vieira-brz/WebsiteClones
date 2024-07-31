import React, { useContext, useState } from 'react'
import DataContext from '../../data/DataContext'

const UseContext = (props) => {

    // const context = useContext(DataContext)
    const {state, setState} = useContext(DataContext)

    function addNumber(delta) {
        setState({
            ...state,
            number: state.number + delta
        })
    }

    return (
        <div className='UseContext'>
            {/* <span>{context.text}</span>
            <span>{context.number}</span> */}

            <span>{state.text}</span>
            <span>{state.number}</span>

            <br />

            <button onClick={() => addNumber(-1)}>-1</button>
            <button onClick={() => addNumber(+1)}>+1</button>
        </div>
    )
}

export default UseContext
