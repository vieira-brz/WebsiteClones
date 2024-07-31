import React from 'react'

// Css
import './Section.scss'

function Section({ children, auxClass }) {
    return (
        <div className={`Section ${auxClass}`}>
            {children}
        </div>
    )
}

export default Section
