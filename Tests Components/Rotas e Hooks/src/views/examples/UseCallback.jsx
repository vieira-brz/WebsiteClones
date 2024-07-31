import React, { useCallback, useState } from 'react'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = (props) => {

    const [count, setCount] = useState(0)

    const inc = useCallback(function inc(delta) {
        setCount(curr => curr + delta)
    }, [setCount])

    return (
        <div className='UseCallback'>
            <span>{count}</span>
            <UseCallbackButtons inc={inc} />
        </div>
    )
}

export default UseCallback
