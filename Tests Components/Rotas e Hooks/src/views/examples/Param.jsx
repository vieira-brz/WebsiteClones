import React from 'react'

import { useParams } from 'react-router-dom'

const Param = props => {
    const { id } = useParams()

    return (
        <div className="Param">
            Id { id }
        </div>
    )
}

export default Param
