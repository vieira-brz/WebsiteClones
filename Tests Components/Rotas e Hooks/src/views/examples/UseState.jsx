import React, { useState } from 'react'

const UseState = (props) => {

    const [ count, setCount ] = useState(0)
    const [ name, setName] = useState("Inicial...")

    return (
        <div className='UseState'>
            {count}
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(1000)}>1000</button>
            <br />
            <br />
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <span>{name}</span>
        </div>
    )
}

export default UseState
