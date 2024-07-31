import React from 'react'

import './Skills.scss'

function Skills() {
    return (
        <div className="skills">
            <div className="box">
                <h3>Most Used Languages</h3>
                <div class="cube languages">
                    <div class="face front">
                        <img src="./images/linguagens/html-5.png" />
                    </div>
                    <div class="face right" >
                        <img src="./images/linguagens/css-3.png" />
                    </div>
                    <div class="face back" >
                        <img src="./images/linguagens/js.png" />
                    </div>
                    <div class="face left" >
                        <img src="./images/linguagens/php.png" />
                    </div>
                    <div class="face top" >
                        <img src="./images/linguagens/servidor-sql.png" />
                    </div>
                    <div class="face bottom" >
                        <img src="./images/linguagens/python.png" />
                    </div>
                </div>
            </div>
            <div className="box">
                <h3>Frameworks and Libraries</h3>
                <div class="cube frameworks">
                    <div class="face front">
                        <img src="./images/frameworks/jquery.png" />
                    </div>
                    <div class="face right" >
                        <img src="./images/frameworks/react.png" />
                    </div>
                    <div class="face back" >
                        <img src="./images/frameworks/sass.png" />
                    </div>
                    <div class="face left" >
                        <img src="./images/frameworks/ts.png" />
                    </div>
                    <div class="face top" >
                        <img src="./images/frameworks/vue.png" />
                    </div>
                    <div class="face bottom" >
                        <img src="./images/frameworks/stats.png" />
                    </div>
                </div>
            </div>
            <div className="box">
                <h3>Database and Server</h3>
                <div class="cube database">
                    <div class="face front">
                        <img src="./images/server/api.png" />
                    </div>
                    <div class="face right" >
                        <img src="./images/server/cloud.png" />
                    </div>
                    <div class="face back" >
                        <img src="./images/server/json.png" />
                    </div>
                    <div class="face left" >
                        <img src="./images/server/mongo.png" />
                    </div>
                    <div class="face top" >
                        <img src="./images/server/workb.png" />
                    </div>
                    <div class="face bottom" >
                        <img src="./images/server/server.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
