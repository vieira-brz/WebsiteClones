/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

import './Header.scss'

function Header() {
    return (
        <div className="header">
            <div className='profile'>
                <h1>Hi, I'm Vinícius 👋</h1>
                <h2>Software Engineer</h2>
            </div>
            
            <img src="./images/profile2.png" alt="Profile picture" className='alternate mobile'/>
            <img src="./images/profile.png" alt="Profile picture" className='alternate desk'/>

            <div className="apresentation">
                Systems developer passionate about challenges and innovation.
                Since my technical training at Senai in 2019, I have been diving into the world of technology, specializing in languages such as PHP, CSS, JavaScript, HTML, and MySQL.
                I am an enthusiast of intuitive and functional web pages.
                Beyond code, my passion is playing the guitar, exploring new sounds, and even producing electronic music and remixes. 🎸💻✨
            </div>
        </div>
    )
}

export default Header
