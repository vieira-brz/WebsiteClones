import React, { useEffect, useState } from 'react'

function calcFatorial(num) {
    const x = parseInt(num)
    if (x < 0) return -1
    if (x === 0) return 1
    return calcFatorial(x - 1) * x;
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])

    

    return (
        <div className='UseEffect'>
            <span>Fatorial: {fatorial === -1 ? 'Não existe' : fatorial}</span>
            <br />
            <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
        </div>
    )
}

export default UseEffect
