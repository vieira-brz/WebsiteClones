import React from 'react'
import './style.scss'

function index(props) {
    return (
        <div div className='title-section'>
            {props.icon}
            <h3>{props.text}</h3>
        </div>
    )
}

export default index
