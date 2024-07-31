import React, { useEffect, useRef, useState } from 'react'

const merge = function (s1, s2) {
    return [...s1].map((e, i) => {
        return `${e}${s2[i] || ""}`
    }).join("")
}

const UseRef = (props) => {

    const [ x, setX ] = useState("")
    const [ y, setY ] = useState("")

    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function() {
        count.current++
        myInput2.current.focus()
    }, [x])

    useEffect(function() {
        count.current++
        myInput1.current.focus()
    }, [y])

    return (
        <div className='UseRef'>
            <span>Valor: </span>
            <span>{x} [</span>
            <span>{ count.current }</span>
            <span>]</span>
            <span>{ merge(x, y) }</span>
            <br/>
            <input type="text" value={x} onChange={e => setX(e.target.value)} ref={myInput1} />
            <br />
            <br />
            <input type="text" value={y} onChange={e => setY(e.target.value)} ref={myInput2} />
        </div>
    )
}

export default UseRef
