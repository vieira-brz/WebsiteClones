import React, { useEffect, useMemo, useState } from 'react'

function sum(a, b) {
    const future = Date.now() + 2000
    while (Date.now() < future) { } // Espera 2 segundos
    return a + b
}

const UseMemo = (props) => {

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)

    // 
    // Primeira alternativa
    // 
    /*
    const [result, setResult] = useState(0)

    useEffect(function () {
        setResult(sum(n1, n2))
    }, [n1, n2])
    */

    // Alternativa com UseMemo
    const result = useMemo(() => sum(n1, n2), [n1, n2])

    return (
        <div className='UseMemo'>
            <input type="number" value={n1} onChange={e => setN1(parseInt(e.target.value))} />
            <input type="number" value={n2} onChange={e => setN2(parseInt(e.target.value))} />
            <input type="number" value={n3} onChange={e => setN3(parseInt(e.target.value))} />

            <span>{result}</span>
        </div>
    )
}

export default UseMemo
