import React from 'react'

import './Social.scss'

function Social() {
    return (
        <div className="contact">
            <div className="container-items">
                <ul className="item social-media">
                    <h3>Social media</h3>
                    <div className="container-images">
                        <li> <a href="https://web.whatsapp.com/send?phone=5541988417602&text=Oi%20tudo%20bem%3F%20Vim%20pelo%20seu%20portfolio%20web,%20tem%20um%20minuto%3F" target='blank'><img src="./images/social-media/wpp.png" /></a> </li>
                        <li> <a href="https://github.com/vieira-brz" target='blank'><img src="./images/social-media/github.png" /></a> </li>
                        <li> <a href="https://www.linkedin.com/in/vinicius-vieira-braz/" target='blank'><img src="./images/social-media/in.png" /></a> </li>
                    </div>
                </ul>
                <div className="contact-me">
                    <button>Contact Me</button>
                </div>
            </div>
        </div>
    )
}

export default Social
